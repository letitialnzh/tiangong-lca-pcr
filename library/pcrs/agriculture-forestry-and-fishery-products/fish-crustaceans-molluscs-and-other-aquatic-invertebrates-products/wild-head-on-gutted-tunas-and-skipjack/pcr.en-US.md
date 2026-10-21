---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-head-on-gutted-tunas-and-skipjack
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild head-on gutted food tunas and skipjack at first producer handover

## 1. Scope and Applicability

This PCR governs foreground data for wild marine Thunnus species and Katsuwonus pelamis captured and producer-responsibly killed/bled/eviscerated with the head retained, delivered as fresh or nonfrozen chilled food fish at first producer handover. A market name “bonito” does not replace species identification. Only actual handling and technology are included: no obligatory purse seine, longline, FAD, slurry or fixed chronology. The reference is net carcass, not boneless edible meat, reconstructed whole fish or packaged gross mass.

Exclude farming/ranching/fattening, live fish transferred to farming, live or ungutted final whole fish, headed fish, loins/fillets/steaks, organs as reference, frozen/thawed or processed-preserved products, later merchant gate and nonfood final use. If species/form/acceptance or nonfrozen state cannot be confirmed, define another boundary or retain a data gap; never relabel state to fit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-head-on-gutted-tunas-and-skipjack |
| classification_refs | CPC 3.0:04251; narrower |
| covered_products | Wild head-on gutted Thunnus spp. or Katsuwonus pelamis fresh/nonfrozen chilled food carcasses at first producer handover |
| excluded_products | Other Euthynnus or Sarda taxa; farmed/ranched; live or ungutted final fish; headed fish, cuts/fillets, organs, frozen/thawed/processed, farming-transfer/nonfood and later merchant gate |
| representative_product | Actual wild Thunnus albacares head-on gutted nonfrozen chilled carcass; not a yield assumption for all taxa |
| production_route | Parent capture; actual hook/line bait or purse-seine/skiff and conditional FAD deltas; actual conditioning, grading, nonfreezing preservation/presentation to first gate; event variants disjoint |
| market_state | Intended food, fresh or nonfrozen chilled; actual gill and grade condition; complete historical acceptance evidence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Wild head-on gutted food tunas and skipjack at first producer handover |
| How much | 1 kg |
| How well | Actual species/head/gut/gill state, net carcass mass, nonfrozen condition and applicable food acceptance evidence |
| How long or cycle | Declared complete voyage and relevant campaign/service periods, including departure/search/capture/handling/return/idle/maintenance, replacement/retirement and failed no-output periods |
| reference_flow_link | `handover_final` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wild head-on gutted food tunas and skipjack at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Scientific species; wild source waterbody; actual gear and school association; producer responsibility and first-gate place/time; retained head, evisceration and actual gill retention; capture-to-gate time/temperature history; actual grade/food acceptance evidence; nonfrozen state; net fish mass excluding ice/water/packaging/removed organs; voyage/campaign and coproduct attribution |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass | kg | Use handover node cp_handover_mass calibrated weighing of accepted head-on gutted carcass, excluding free water, ice, packaging and removed organs; retained gills remain carcass mass. Do not reconstruct whole fish from organ yields. |
| `support_chain` | mass and energy inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kg; MJ | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`: kg=1, t=1000, g=0.001; energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66`: MJ=1, kWh=3.6. Matching property conversions only; service property/unit requires separate evidence. |
| `physical_units` | all inventory rows | Mass or actual energy/service property | kg; MJ; actual service unit | Mass rows use actual wet kg; convert density, wet/dry basis or counts only with evidence. Energy uses actual MJ or evidenced kWh×3.6. Supplier service retains real invoice functional unit, not invented material kg; unresolved property/unit blocks final exchange. |
| `two_views` | all inventory rows | Actual row property | per 1 kg reference flow | Close the unallocated actual receipt/transfer/output/loss/stock ledger first, owning shared node/period resources once, then divide by positive accepted final net kg; separate single-output LCA inventory/burdens follow section 7 once, retaining physical ledger and matrix. Economic shares never shrink physical partitions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual wild marine stock context, complete voyage opening, equipment/bait stocks and supply-chain receipts; no foreground aquaculture biomass production |
| starting_condition_role | Wild removal context and burden-bearing product/service supply, not free bait or burden exemption |
| product_classification_scope | CPC 3.0:04251; narrower |
| recursive_input_rule | Own catch enters internal handling, not a newly recursively produced final product. Purchased post-first-gate same-category resale fish is outside this route; purchased same-species bait remains independent supplied product and burden. |
| upstream_dataset_requirement | Provide matching source/state/unit upstream data for actual fuel, electricity, water, ice, bait, materials, services and assets; own supply records its actual resources without duplicate supplied-product burden. |
| disclosure | Disclose voyage responsibility/opening/closing periods, actual chronology/gate, stocks/failed no-output periods, purchased/own resource ownership, service inclusions, coproduct attribution, asset-use/life evidence and unresolved identity/quantity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_origin` | all foreground | Include actual wild marine capture of Thunnus spp. or Katsuwonus pelamis through own first producer food handover of head-on gutted fresh/nonfrozen chilled fish. Capture is an independent removal responsibility; it does not imply farming and differs from subsequent gutting. | `un-cpc3-notes`; `noaa-tuna-gear`; `fao-tuna-handling-2025` |
| `actual_sequence` | all handling nodes | The map is a responsibility list, not a fixed timeline. Keep event/pass/transfer ids and actual predecessor/successor state for every revisit. Grading, pre-chilling, killing/bleeding/gutting, gilling, washing and presentation may occur in actual evidenced order. Final handover requires completed gutting and actual food acceptance irrespective of last node name; unknown status is pending stock/data gap, never an inactive default. | `fao-tuna-handling-2025` |
| `capture_delta` | capture; bait_supply; fad_service | Parent activity is capture. Hook/line methods activate actual purchased or own bait responsibility; purse-seine/skiff operation activates its actual equipment/energy and only evidenced FAD-associated events activate fad_service. Free-school/FAD-associated sets and gear variants are disjoint event facts, not duplicated catch. Retain observed bycatch, releases, deaths, gear/material loss and habitat/animal interactions; no universal impact claim, FAD life, catch efficiency or factor. | `noaa-tuna-gear`; `noaa-yellowfin` |
| `mass_interfaces` | all nodes | Physical unallocated ledgers record actual species/tissues, water/ice, packaging, stock, loss and intended products first. Gutting must reconcile incoming whole fish with head-on gutted carcass, actually removed viscera/liver/roe/gills/blood and all measured fates; retained gills/tissues remain carcass mass. Do not assume whole input equals final gutted mass, or count the same blood/tissue both in waste mixture and constituent discharge. |  |
| `gate_and_trip` | capture; shared_resources; handover | Gate is the actual first producer-responsible food handover at sea, port or another documented collector point, not automatically port. Stop fish handling there, but retain attributable complete outward/search/fishing/return, failed/no-output voyages, idle/maintenance and asset service periods. No new downstream merchant holding or distribution activity belongs inside presentation. |  |
| `resource_ownership` | all nodes; shared_resources | Assign each actual resource/event to one node and period, excluding supplier-service-inclusive fuel, power, water and packaging from duplicate direct rows. shared_resources owns only genuine unpartitioned pools and assets across named consuming nodes/periods. Actual purchased services retain their provider functional unit and scope; if unsupported, preserve invoice and unresolved property/unit in auxiliary ledger before exchange publication. |  |
| `cold_history` | grade; chill; handover | Retain capture/death/bleeding/gutting/chill/transfer times, temperatures, instrument evidence, deviations and applicable competent-authority/market acceptance. Histamine-related hazards require actual decision evidence; later chilling/washing does not erase earlier unsafe history. This methodology does not certify food safety, set universal time/temperature limits or import US rules globally. | `fda-histamine-2024`; `fao-tuna-handling-2025` |

## 6. Process Inventory Structure

Every card reports the same final reference basis; actual conditions control applicability and absent roles do not manufacture positive exchanges. Paired inter-node physical flows preserve raw quantities; revisits do not duplicate burdens. Provisional ranges are broad screening starting points, neither default quantities nor proof of fishery-specific plausibility. Service cards expand by provider in actual functional units; unresolved unit/property remains an auxiliary-ledger gap.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bait_supply` | Own bait capture and bounded bait maintenance | conditional | Only actual fishery-owned bait capture or maintenance supplying this voyage; purchased bait goes directly to capture. | foreground responsibility | actual bait supplied, remaining stock and all fates |
| `capture` | Wild tuna capture and retrieval | required | Actual wild marine capture event, not farming, ranching or fattening. | foreground responsibility | retained whole catch and incidental biomass |
| `conditioning` | Producer killing, bleeding and gutting | required | Actual producer-responsible head-on evisceration; optional gilling and washing are recorded as actually performed. | foreground responsibility | Actual partial-condition and completed head-on gutted transfers, removed organs/blood/gills and stocks |
| `grade` | Actual food/destination grading | required | Actual classification and intended-food acceptance, wherever in the handling sequence performed. | foreground responsibility | accepted food, other intended products, waste and stock |
| `chill` | Producer nonfreezing chilling and cold maintenance | conditional | Only actual icing, chilled water/slurry, mechanical chilling or bounded cold holding before first gate; no freezing/thawing. | foreground responsibility | same-lot nonfrozen fish at actual pass state |
| `present` | Protective presentation | conditional | Only actual producer wrapping, boxing, labelling or protective presentation before the gate. | foreground responsibility | presented fish and separate packaging material |
| `handover` | First producer food handover | required | Only after actual species/form, food acceptance and cold-chain evidence are reconciled. | foreground responsibility | accepted net head-on gutted fish mass |
| `fad_service` | Actual FAD and buoy service | conditional | Only evidenced FAD-associated capture events and their asset/service periods; free-school events do not activate this node. | capture technology service | actual deployment/retrieval/service and material fates |
| `shared_resources` | Shared vessel/port assets and unpartitioned services | required | Actual common assets, maintenance and otherwise unowned pooled resources; include failed/no-output and return periods. | shared resource ownership | service-period responsibility and reconciled shared resources |

### Process: Own bait capture and bounded bait maintenance (`bait_supply`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`bait_supply_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`bait_supply_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`bait_supply_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`bait_supply_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`bait_supply_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`bait_supply_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`bait_supply_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`bait_supply_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bait_supply_mass`

###### Separately measured solid water ice (`bait_supply_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bait_supply_mass`



##### Waste flows

##### Elementary flows

###### Actual bait respiration carbon dioxide to air (`bait_supply_biogenic_co2`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only actual bait-maintenance biogenic respiratory CO2 when measured or supported by a species/stage-specific model with parameters, period, independent validation and receiving medium. Not fossil fuel CO2 or assumed universal metabolism; actual other gas/water fates remain separately identified.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_bait_supply_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil carbon dioxide to air (`bait_supply_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`bait_supply_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bait_supply_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Wild tuna capture and retrieval (`capture`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`capture_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`capture_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`capture_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`capture_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`capture_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`capture_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Wild Thunnus or skipjack biomass removed (`capture_target_biomass`)

Actual target-species whole biomass taken under capture responsibility, including retained, returned and discarded partitions as evidenced; do not manufacture mortality or stock credits.

- Selected flow: Wild Thunnus or skipjack biomass removed
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct water abstraction (`capture_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`capture_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture_mass`

###### Separately measured solid water ice (`capture_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture_mass`



###### Whole retained tuna or skipjack for producer handling (`capture_whole_target`)

Actual whole captured fish, live or dead as recorded, before own gutting; event/time/transfer and pre-chilling state accompany receipt into the next actual node. Never fix to final gutted kg.

- Selected flow: Whole retained tuna or skipjack for producer handling
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



##### Waste flows

###### Catch transferred to waste recipient (`capture_catch_waste`)

Actual landed or onboard waste transfer to treatment, excluding products and releases to nature; preserve destination and receipt evidence.

- Selected flow: Catch transferred to waste recipient
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual dead discards to receiving water (`capture_dead_discard`)

Actual dead target/non-target biomass released to identified water, disaggregated by species and disposal context; no universal discard factor.

- Selected flow: Actual dead discards to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil carbon dioxide to air (`capture_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`capture_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Producer killing, bleeding and gutting (`conditioning`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`conditioning_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fish entering actual killing or gutting pass (`conditioning_fish_receipt`)

Paired receipt of the immediately preceding actual node: own whole catch or partly handled whole/head-on fish with the exact live/dead, chilling, grading and gill status. No post-first-gate purchased resale fish.

- Selected flow: Fish entering actual killing or gutting pass
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`conditioning_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`conditioning_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`conditioning_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`conditioning_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`conditioning_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`conditioning_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`conditioning_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass`

###### Separately measured solid water ice (`conditioning_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass`



###### Head-on gutted carcass after actual conditioning (`conditioning_carcass`)

Actual prepared carcass retaining head and actual retained gills, drained as defined; its next actual node may be grading, chilling, presentation or handover. Do not assume organ yield.

- Selected flow: Head-on gutted carcass after actual conditioning
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual head-retained fish transferred before gutting is complete (`conditioning_partially_prepared_fish`)

Only a real intermediate pass handing still-ungutted or partly prepared head-retained fish to an actual next node, for example a documented cold intervention before later gut removal. Record actual live/dead, bleeding, gut/gill, grade and thermal state, measured raw mass and paired event/pass/transfer ids. Keep gutting pending; pair its later return with the actual receiving pass. This is mutually exclusive for the same parcel/pass with completed gutted output, not a second carcass sale or fixed final 1 kg. Final handover still requires completed evisceration and all food/nonfrozen qualifiers.

- Selected flow: Actual head-retained fish transferred before gutting is complete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_conditioning_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_conditioning_partially_prepared_fish
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Conditioning fish rejected to waste (`conditioning_rejected_fish`)

Actual damaged/unacceptable fish sent to treatment, separate from organ removal and intended downgraded sales. A missing food decision is pending stock, not automatic waste.

- Selected flow: Conditioning fish rejected to waste
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Removed tissue actually released to water (`conditioning_organ_release`)

Only actual organ/blood discharge to nature, identified substance/material and medium with management context. Distinguish direct tissue release from constituent emissions in wastewater and treatment transfers.

- Selected flow: Removed tissue actually released to water
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil carbon dioxide to air (`conditioning_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`conditioning_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at conditioning (`conditioning_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_conditioning_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_conditioning_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at conditioning (`conditioning_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_conditioning_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_conditioning_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Actual food/destination grading (`grade`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`grade_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fish entering actual destination grading (`grade_fish_receipt`)

Immediately preceding whole or head-on gutted fish with actual preparation and preservation state; classification may precede gutting, follow it or recur. Paired transfer records preserve the state.

- Selected flow: Fish entering actual destination grading
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`grade_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`grade_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`grade_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`grade_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`grade_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`grade_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`grade_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_mass`

###### Separately measured solid water ice (`grade_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_mass`



###### Fish accepted for intended food route (`grade_accepted_food`)

Actual accepted grade by species, whole/head-on-gutted form and handling status; whole accepted fish still require own gutting before reference delivery. Destination and next node are explicit.

- Selected flow: Fish accepted for intended food route
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects actually sent to waste (`grade_waste`)

Actual treatment-bound rejects only. Unresolved acceptance remains separately tracked stock; downgraded sales cannot also be waste.

- Selected flow: Grading rejects actually sent to waste
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual fossil carbon dioxide to air (`grade_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`grade_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at grade (`grade_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_grade_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at grade (`grade_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_grade_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Producer nonfreezing chilling and cold maintenance (`chill`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`chill_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fish entering actual nonfreezing chill/hold pass (`chill_fish_receipt`)

Actual whole or gutted, pending/accepted grade, live/dead as recorded; this may precede conditioning or grading. No fixed final-reference mass on internal feed.

- Selected flow: Fish entering actual nonfreezing chill/hold pass
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`chill_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`chill_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`chill_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`chill_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`chill_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`chill_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`chill_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_mass`

###### Separately measured solid water ice (`chill_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_mass`



###### Nonfrozen fish leaving actual chill/hold pass (`chill_fish_transfer`)

Preserve the exact pre/post-gutting, grading and gill state and measured mass, temperature/time history and next transfer id. Chilling is not food acceptance or reversal of previous abuse.

- Selected flow: Nonfrozen fish leaving actual chill/hold pass
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual spoiled or rejected fish to treatment (`chill_fish_waste`)

Only actual waste-destination fish, including storage mortality if live intermediate existed; distinguish measured drip and tissues remaining in product from carcass waste.

- Selected flow: Actual spoiled or rejected fish to treatment
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual fossil carbon dioxide to air (`chill_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`chill_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at chill (`chill_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at chill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_chill_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_chill_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at chill (`chill_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at chill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_chill_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_chill_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Protective presentation (`present`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`present_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fish entering protective presentation (`present_fish_receipt`)

Actual paired pre-presentation product and its preparation, grade and chill status; handling order comes from event records, not the node list.

- Selected flow: Fish entering protective presentation
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`present_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`present_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`present_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`present_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`present_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`present_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`present_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_present_mass`

###### Separately measured solid water ice (`present_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_present_mass`



###### Presented fish transferred onward (`present_fish_transfer`)

Measured fish-only mass with actual head/gut/gill, grade, chill status and transfer id, excluding wrap/ice/water. Packaging does not create food acceptance.

- Selected flow: Presented fish transferred onward
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual rejected fish handed to treatment during presentation (`present_actual_fish_treatment`)

Only actual whole/carcass fish sent to a documented treatment receiver at this pass, with state, cause, raw mass and event. Not disposable packaging waste, an intended accepted alternative, nature release or unidentified pending stock; no burdens disappear because acceptance fails.

- Selected flow: Actual rejected fish handed to treatment during presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_actual_fish_treatment
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual fossil carbon dioxide to air (`present_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`present_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at present (`present_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at present (`present_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: First producer food handover (`handover`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`handover_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fish received for first producer handover (`handover_fish_receipt`)

Exact receipt from the last actual handling node after all required own conditioning and acceptance. Preserve measured physical mass before final denominator selection.

- Selected flow: Fish received for first producer handover
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`handover_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`handover_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`handover_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`handover_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`handover_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`handover_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`handover_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`

###### Separately measured solid water ice (`handover_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`



###### Separately measured liquid water (`handover_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`

###### Separately measured solid water ice (`handover_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`



###### Wild head-on gutted food tunas and skipjack at first producer handover (`handover_final`)

Accepted fish-only net head-on gutted Thunnus or Katsuwonus pelamis carcass at the actual first producer food gate. Record retained/removed gills; no whole-fish reconstruction, packaging, free water, ice or removed organs in mass.

- Selected flow: Wild head-on gutted food tunas and skipjack at first producer handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`
- Range: Reference quantity definition; actual lot still requires weighing
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Handover rejects actually to waste (`handover_waste`)

Only actual refused/failed fish or materials sent to waste with recipient; do not silently discard burdens of failed lots or count pending returns as final product.

- Selected flow: Handover rejects actually to waste
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual fossil carbon dioxide to air (`handover_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`handover_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual dead whole-fish or carcass material released to water at handover (`handover_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_handover_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Actual FAD and buoy service (`fad_service`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual CN grid-average low-voltage electricity (`fad_service_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fad_service_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`fad_service_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fad_service_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Actual fossil carbon dioxide to air (`fad_service_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fad_service_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Shared vessel/port assets and unpartitioned services (`shared_resources`)

Record this node by actual event/pass/transfer id and timestamp; retain physical mass/stock ledger, resource ownership and separate LCA attributed view. An inactive condition does not create exchanges.

#### Inputs

##### Product flows

###### Actual solid water ice received internally (`shared_resources_internal_ice_receipt`)

Only actual solid water ice received from another actual node, paired by ice state, physical mass and transfer id to the ice component of that source node internal_water output. Not purchased fixed ice, liquid-water receipt, same-node own-made ice or a second ice-manufacturing burden. At handover this card owns only non-lot operational ice; lot-carried ice belongs to handover_material_receipt, mutually exclusive without duplication.

- Selected flow: Actual solid water ice received internally
- Flow property / unit: Mass / kg
- Amount rule: Obtain actual quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN grid-average low-voltage electricity (`shared_resources_cn_power`)

Only actual CN grid-average AC below 1 kV delivered to user, measured in MJ using evidenced kWh conversion. Not onboard diesel generation, another voltage, renewable contract or other country.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN grid-average low-voltage electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: Fixed (`fixed`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual electricity supply (`shared_resources_other_power`)

Actual separately identified supplier/mix/voltage electricity only. Record onboard own-generation in the auxiliary energy ledger with its generating fuel/emissions owned once, not as a second purchased-energy burden.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value / MJ
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_energy`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching externally treated industrial process water (`shared_resources_treated_water`)

Only actual externally supplied treated industrial process-water product of matching purpose. Not raw seawater/freshwater abstraction, drinking-water claim or bulk recirculation.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching externally treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other supplied water or paired internal receipt (`shared_resources_other_water`)

Actual external liquid-water supply at its treatment/source state, or paired internal liquid-water receipt of identical composition and mass; solid ice belongs to this node internal_ice_receipt. Separate sources and exclude direct abstraction/recirculation duplication. Handover lot-carried water belongs to handover_material_receipt; this card owns only non-lot operational water receipts.

- Selected flow: Other supplied water or paired internal receipt
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased capture/landing chilling ice (`shared_resources_ice`)

Only actual purchased water ice for capture/onboard or landing nonfreezing handling. Own-made ice uses water and manufacturing energy once with internal ledger, not a second upstream purchased-ice burden.

- Selected flow: Purchased capture/landing chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`shared_resources_abstracted_water`)

Actual water directly abstracted by source and medium, excluding purchased supply and recirculated throughput. Meter or calculate from calibrated pump duration and flow; water source is not constrained to freshwater.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`shared_resources_internal_water_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_resources_mass`

###### Separately measured solid water ice (`shared_resources_internal_water_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_resources_mass`



##### Waste flows

##### Elementary flows

###### Actual fossil carbon dioxide to air (`shared_resources_fossil_co2`)

Only direct fossil CO2 from the node-owned actual fuel/combustion, to unspecified air when compatible. Calculate from actual fuel carbon, oxidation and fossil fraction or traceable direct measurement; no universal factor and no biogenic respiration relabelling.

- Selected flow: Actual fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_emissions`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation to air (`shared_resources_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Only evidenced evaporated water for this node, with actual measurement or validated model. Do not use evaporation as an arbitrary mass-balance plug or equate all water use to consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_resources_mass`
- Range: Replaceable broad provisional screening estimate, not default amount or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `physical_then_lca` | all inventory | Keep two labelled views: unallocated physical receipts/transfers/outputs/losses/stocks with node/period shared-resource ownership once, then normalize to positive accepted final net kg; separately retain a single-output LCA attributed inventory/burden view plus allocation matrix. Apply output shares only to relevant burden/attributed exchange ownership, never to physical carcass/organ/water partitions, and never twice at downstream handover. |  |
| `attribution_order` | bait_supply; capture; conditioning; grade; present; handover | First subdivide independently metered responsibilities and assign direct intended-product burdens. For genuinely joint remaining burdens, use an evidenced physical causal relationship only if justified for this fishery/handling boundary; otherwise use consistent economic shares of actual accepted output quantities and comparable same-gate values over the stated period, with sensitivity to data uncertainty. Retain chosen boundary, numerator/denominator, zero-value handling and alternative sensitivity. No invented zero burden, substitution or ecosystem credit. |  |
| `output_set` | bait_supply; capture; conditioning; grade; present; handover | Enumerate intended target and other catch, independent organ/offal/bait products and accepted other grades at their actual external handoffs. Internal transfers do not create new intended outputs. Waste, live return, dead discharge, retained stocks and packaging physically accompanying product are separately classified; organ removal alone does not prove coproduct status. |  |
| `trip_period_assets` | capture; fad_service; shared_resources | Declare voyage/batch/campaign boundaries and actual phases: departure/search/capture/handling/return/idle/cleaning/maintenance, FAD/buoy deployment/retrieval/replacement/retirement and vessel/port asset service. Retain no-output periods in the appropriate campaign burden pool; do not divide them by zero or drop them. Use observed service capacity/time/use and period opening/closing stocks, no universal lifetime. Resolve missing replacement/termination evidence before quantitative finalization. |  |
| `shared_once` | all nodes | For each shared vessel, generator, cold store, port facility, FAD/buoy or external service, identify all actual consumers and periods, record metered subdivision or justified capacity/time-use share, reconcile shares to the complete owned pool, and subtract already inclusive/direct responsibilities. Repeated handling passes inherit no second manufacturing charge or repeated output allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bait_supply_mass` | `bait_supply` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_bait_supply_energy` | `bait_supply` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_bait_supply_service` | `bait_supply` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_bait_supply_emissions` | `bait_supply` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_capture_mass` | `capture` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_capture_energy` | `capture` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_capture_service` | `capture` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_capture_emissions` | `capture` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_conditioning_mass` | `conditioning` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_conditioning_energy` | `conditioning` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_conditioning_service` | `conditioning` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_conditioning_emissions` | `conditioning` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_grade_mass` | `grade` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_grade_energy` | `grade` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_grade_service` | `grade` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_grade_emissions` | `grade` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_chill_mass` | `chill` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_chill_energy` | `chill` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_chill_service` | `chill` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_chill_emissions` | `chill` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_present_mass` | `present` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_present_energy` | `present` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_present_service` | `present` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_present_emissions` | `present` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_handover_mass` | `handover` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_handover_energy` | `handover` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_handover_service` | `handover` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_handover_emissions` | `handover` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_fad_service_mass` | `fad_service` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_fad_service_energy` | `fad_service` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_fad_service_service` | `fad_service` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_fad_service_emissions` | `fad_service` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_shared_resources_mass` | `shared_resources` | material transfer and stock | measured material/stock record | species/material; wet mass; head/gut/gill state; live/dead; source/destination; event/pass/transfer id; time; grade/acceptance; opening/closing stock; actual final accepted net kg; water/ice/packaging exclusion; measurement uncertainty | Calibrated scales/meters or traceable measured supplier/receiver records; identify actual state and categorical facts separately from numerical quantities; pair transfer ids and retain every water/ice/tissue/bait/material fate. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_shared_resources_energy` | `shared_resources` | energy/fuel ownership | energy record | fuel/material composition; supplier; meter opening/closing; MJ or kWh; generator fuel and output; actual consuming node/period; service inclusions; complete voyage phases; actual final accepted net kg | Read calibrated fuel/energy meters, tank stock and supplier records; separately record generated electricity and prevent fuel plus generated-power duplicate burden; retain real conversion evidence. | MJ; kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_shared_resources_service` | `shared_resources` | actual supplier service unit | service record | provider; task scope; invoice quantity; actual functional unit; property/unit support; inclusive resource checklist; consumer; service period; asset use/life; shares; actual final accepted net kg | Retain real supplier invoice functional unit and inclusive inventory scope; document consumers and period capacity/time-use; no invented kg service or silent unresolved support. | actual service unit | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |
| `cp_shared_resources_emissions` | `shared_resources` | actual substance/medium releases | emissions record | substance/species/particle size; mixture/constituent relationship; medium; actual fuel carbon/fossil fraction/oxidation or direct release measurement; factor source and unit; event; uncertainty; actual final accepted net kg | Use traceable actual direct measurements or documented substance-specific fuel/process model; retain factor source, units and uncertainty; disaggregate actual mixture identities without counting total plus components twice. | kg | Each actual event/pass/transfer and period close | Complete voyage and representative campaign/service periods, including return/no-output/cleaning/maintenance/replacement/retirement | This real node and actual suppliers/receivers | per 1 kg reference flow | Calibration traceability, complete lots, event pairing, supplier invoices, actual acceptance evidence and independent QA data |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `physical_normalization` | all inventory rows | First close unallocated actual opening/receipt/transfer/output/loss/closing stock ledger and own shared node/period resources once; then divide by positive accepted final net kg. Separate LCA attributed view applies relevant output shares only once under section 7, retaining original ledger/matrix without shrinking mass partitions. | actual node records; accepted final net kg; allocation matrix | per 1 kg reference flow |  |
| `carcass_partition` | conditioning | Actual whole-fish receipts plus opening fish equal mutually exclusive actual partial-condition or completed head-on gutted transfers for that pass, removed organ/blood/gill fates, rejects/losses and closing fish; water/packaging use separate ledgers. Keep physical mass unallocated; retained gills/tissues remain carcass, and dissolved blood mixture/constituents cannot duplicate. | cp_conditioning_mass; paired transfers | physical closure and actual yield |  |
| `cold_history` | grade; chill; handover | Join same-lot species capture/death/handling/gate timestamps with continuous temperature records, deviations and applicable acceptance evidence; missing intervals are not controlled by default and later cooling does not reverse history; no fixed numeric threshold. | actual lot history; instruments; acceptance decision | traceable state and acceptance gap decision | fda-histamine-2024 |
| `water_fates` | all inventory rows | Separate actual supplied/abstracted/paired internal water and ice/melt ledgers; reconcile product-carried, transfer, treatment, actual-medium discharge, evidenced evaporation and stocks per period. Recirculation throughput is not new abstraction; pollutants and mixture amounts reconcile without duplication. | actual node mass and fate records | water/ice physical balance and identity-specific discharges |  |
| `direct_emissions` | all inventory rows | Use actual single-substance measurements or actual fuel carbon/composition/fossil fraction/oxidation and sourced factors; retain model algebra, units, raw factors, independent validation and uncertainty. Flow UUID supplies no factor. | node-specific emission protocol; actual fuel; factor/source | actual substance-specific release |  |
| `range_replacement` | all inventory rows | Provisional upper bounds only screen initial authoring, not allowed limits or filler amounts. For each actual identity/state/node/unit, establish documented envelope and uncertainty using independent historical campaigns or matching supplier data; never validate a batch against its own maximum. Missing empirical support remains a gap, and outliers are investigated not clipped. | independent campaign/supplier data; actual node protocol | independent QA envelope or explicit evidence gap |  |
| conditional_interface_envelopes | conditioning_actual_live_fish_return; conditioning_actual_dead_fish_release; grade_actual_live_fish_return; grade_actual_dead_fish_release; chill_actual_live_fish_return; chill_actual_dead_fish_release; present_actual_live_fish_return; present_actual_dead_fish_release; handover_actual_dead_fish_release; conditioning_partially_prepared_fish; present_actual_alternative_fish_product; present_actual_fish_treatment | For each listed conditional role, instantiate actual identity/state/node/pass/numerator unit and matching positive final kg before quantitative QA. U_<row_id> is a finite nonnegative same-unit upper on the explicitly labelled physical or LCA view, established from a separate representative campaign maximum times a predeclared margin >=1, or a matching independent supplier/design envelope. Retain independent source/raw samples, scope, conversion, denominator, view and uncertainty; never use the target batch maximum to validate itself. A symbol, provisional old screen or checker pass supplies no numeric evidence. Service unit/property/unitgroup gaps remain blockers; actual kg-handled is allowed only for a verified native provider reference. No clipping or invented zero. | independent campaign/supplier evidence; actual role and unit; final kg; declared view | independently evidenced U bounds or explicit unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_gate` | handover_final | Scientific species, wild origin, retained head/evisceration/nonfrozen state, actual gills/grade/acceptance and first gate evidence complete; unknown never defaults to pass. | Catch/species identification and original handling/acceptance/gate records |
| `mass_and_fates` | all inventory rows | Retain actual wet mass, paired transfers, mutually exclusive fates/stocks and measurement uncertainty; provisional ranges never replace real data. | Calibration records, receipt/dispatch/stock ledgers and independent QA data |
| `cold_trace` | grade; chill; handover | Same-lot capture-to-gate time/temperature history and deviation/acceptance evidenced, gaps explicit, no safety certification. | Sensor calibration and raw time/temperature/applicable acceptance decisions |
| `periods_services` | all nodes | Complete voyage/failed no-output/return/cleaning/maintenance/replacement/retirement and real service inclusions with resource ownership declared. | Voyage activities, asset life/use, invoices and attribution matrix |
| `quantitative_release` | all inventory rows | Concrete exchanges require actual quantity, explicit property/unit, verified identity and evidence; unresolved umbrella cards are not final exchanges. Disclose gaps and coverage. | Actual quantities, identity details, support records and gap register |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_bait_supply_feed` | `bait_supply`; inputs; product | Identify and separately collect every actual exchange covered by “Actual bait-maintenance feed”; retain all following collection, quantity and normalization obligations: Only feed actually used during bounded bait maintenance, by formulation and supplier burden; not a tuna grow-out ration. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_oxygen` | `bait_supply`; inputs; product | Identify and separately collect every actual exchange covered by “Actual delivered bait-holding oxygen”; retain all following collection, quantity and normalization obligations: Only actual externally supplied oxygen at documented delivery state; aeration air is not bottled oxygen. Resolve its own identity and mass conversion. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_fuel` | `bait_supply`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_consumables` | `bait_supply`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_incidental_biomass` | `bait_supply`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual incidental biomass in own bait capture”; retain all following collection, quantity and normalization obligations: Actual non-bait target/incidental species removed in the own bait-fishery event; match each retained intended product, live return, dead release or treatment fate, not background animal presence. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_wild_bait` | `bait_supply`; inputs; elementary | Identify and separately collect every actual exchange covered by “Wild bait biomass actually removed”; retain all following collection, quantity and normalization obligations: Actual fishery-owned bait removal by identified species, event and waterbody; natural presence alone is not removal. Retain own bait-fishery resources and incidental catch. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_supplied` | `bait_supply`; outputs; product | Identify and separately collect every actual exchange covered by “Own-caught bait supplied to tuna capture”; retain all following collection, quantity and normalization obligations: Paired capture bait receipt using the same transfer id, species, condition, mass and upstream resource responsibility. Do not treat owned bait as burden-free. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_other_catch` | `bait_supply`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended bait-fishery products”; retain all following collection, quantity and normalization obligations: Only actual accepted independent intended products, with buyer/use and gate; not a catch-all for incidental discarded animals. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_internal_water` | `bait_supply`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_mortality_waste` | `bait_supply`; outputs; waste | Identify and separately collect every actual exchange covered by “Bait mortality and unused bait sent to treatment”; retain all following collection, quantity and normalization obligations: Actual dead or unused bait transferred to waste recipient, by material and treatment; exclude returned stock, product sales and actual environmental releases. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_operating_waste` | `bait_supply`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_live_return` | `bait_supply`; outputs; elementary | Identify and separately collect every actual exchange covered by “Live bait or incidental animals returned to water”; retain all following collection, quantity and normalization obligations: Actual live returns with species, condition, receiving water and event; no avoided-production or ecosystem credit and no duplication with retained biomass. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_dead_release` | `bait_supply`; outputs; elementary | Identify and separately collect every actual exchange covered by “Dead bait-fishery biomass released to water”; retain all following collection, quantity and normalization obligations: Actual dead biomass release by species and receiving water, separate from live returns and waste treatment; record permit/context without assuming permissibility. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_other_air` | `bait_supply`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_water_discharge` | `bait_supply`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear_material` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual capture-gear material receipts”; retain all following collection, quantity and normalization obligations: Actual nets, hooks, lines and skiff/gear maintenance materials received, with physical opening/closing stocks and fates. Attribute reusable manufacture from actual service records, not full new gear for each set; FAD components stay with fad_service. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_purchased_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased capture bait”; retain all following collection, quantity and normalization obligations: Only actual bait-dependent gear; identify species/material/live condition, supplier production/preparation and transport. Split concrete bait identities; no mandatory bait for purse seines. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_own_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Own-caught bait received”; retain all following collection, quantity and normalization obligations: Exact paired receipt of bait_supply_supplied, not purchased bait or a second wild removal; retain bait-supply attribution once. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_consumables` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_incidental_biomass` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual incidental marine biomass removed”; retain all following collection, quantity and normalization obligations: Only non-target biomass actually removed or entrained, by species/condition; record escapes or interaction-only observations in the auxiliary ledger if no measurable removal exchange. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_products` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other actual intended catch products”; retain all following collection, quantity and normalization obligations: Retained non-reference species or other independently sold catch, by actual buyer/use/gate; distinguish wild live fish sold to farming outside this reference scope. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_unused_bait_product` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Recovered usable bait transferred or sold”; retain all following collection, quantity and normalization obligations: Actual recovered/unspent usable bait leaving to an independently identified product recipient; bait still held onboard remains stock, not an output. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_internal_water` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_retired_gear_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Recovered retired fishing gear to treatment”; retain all following collection, quantity and normalization obligations: Actual recovered/worn gear material transferred to treatment; separate retained usable gear stocks and lost material to sea, with recipient and asset-period evidence. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Recovered bait to waste treatment”; retain all following collection, quantity and normalization obligations: Actual recovered or unspent bait discarded to treatment; reconcile its origin and avoid counting bait use as disappearance. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_operating_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_live_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual live release of target or incidental catch”; retain all following collection, quantity and normalization obligations: Species/state/event and receiving water identify live release before retention; do not also count these animals as dead discard or final output. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Bait actually released to the marine environment”; retain all following collection, quantity and normalization obligations: Actual bait release/loss or consumption by wild animals, identified material and receiving water, separate from onboard stocks/recovery. Use evidenced fate observations or explicit model with uncertainty. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_lost_gear` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Fishing-gear material actually lost to water”; retain all following collection, quantity and normalization obligations: Actual net/line/hook material loss by material, event and receiving medium, excluding recovered waste and FAD materials owned by fad_service; no negative ghost-fishing credit. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_air` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_water_discharge` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_packaging_receipt` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Packaging physically received on the fish lot”; retain all following collection, quantity and normalization obligations: Only actual protective wrapping/packaging received from the preceding handling node, paired by transfer id and physical material mass. It is not newly purchased material, fish net mass or a second upstream manufacturing burden. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_fuel` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_consumables` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_packaging_transfer` | `conditioning`; outputs; product | Identify and separately collect every actual exchange covered by “Packaging physically transferred with the fish lot”; retain all following collection, quantity and normalization obligations: Only actual material retained on the lot and handed to the next actual node, with paired quantity/id; own retained reusable containers remain stock. Keep material mass distinct from reusable manufacturing attribution and final fish mass. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_organ_product` | `conditioning`; outputs; product | Identify and separately collect every actual exchange covered by “Actual sold liver, roe or other removed organ”; retain all following collection, quantity and normalization obligations: Separate each real sold/accepted intended organ or offal/bait product by tissue, condition, recipient and gate; no automatic coproduct status based on value assumption. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_internal_water` | `conditioning`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_packaging_waste` | `conditioning`; outputs; waste | Identify and separately collect every actual exchange covered by “Packaging actually removed and sent to treatment”; retain all following collection, quantity and normalization obligations: Only actual removed wrapping/packaging transferred to treatment, with material and recipient; not packaging still on the fish, retained/reused containers, operating consumable waste or sold usable materials. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_organ_waste` | `conditioning`; outputs; waste | Identify and separately collect every actual exchange covered by “Removed organs, gills and blood to treatment”; retain all following collection, quantity and normalization obligations: Separate actual tissue/blood waste transfers by recipient; do not duplicate soluble blood already included in measured wastewater or tissues sold as products. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_operating_waste` | `conditioning`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_other_air` | `conditioning`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_water_discharge` | `conditioning`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_packaging_receipt` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Packaging physically received on the fish lot”; retain all following collection, quantity and normalization obligations: Only actual protective wrapping/packaging received from the preceding handling node, paired by transfer id and physical material mass. It is not newly purchased material, fish net mass or a second upstream manufacturing burden. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_fuel` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_consumables` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_packaging_transfer` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Packaging physically transferred with the fish lot”; retain all following collection, quantity and normalization obligations: Only actual material retained on the lot and handed to the next actual node, with paired quantity/id; own retained reusable containers remain stock. Keep material mass distinct from reusable manufacturing attribution and final fish mass. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_other_product` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended grade or destination product”; retain all following collection, quantity and normalization obligations: Actual independently accepted lower food grade or non-reference product, with use, condition and receiver; classify live farm-transfer fish or nonfood bait separately and outside reference denominator. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_internal_water` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_packaging_waste` | `grade`; outputs; waste | Identify and separately collect every actual exchange covered by “Packaging actually removed and sent to treatment”; retain all following collection, quantity and normalization obligations: Only actual removed wrapping/packaging transferred to treatment, with material and recipient; not packaging still on the fish, retained/reused containers, operating consumable waste or sold usable materials. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_operating_waste` | `grade`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_other_air` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_water_discharge` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_packaging_receipt` | `chill`; inputs; product | Identify and separately collect every actual exchange covered by “Packaging physically received on the fish lot”; retain all following collection, quantity and normalization obligations: Only actual protective wrapping/packaging received from the preceding handling node, paired by transfer id and physical material mass. It is not newly purchased material, fish net mass or a second upstream manufacturing burden. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_refrigerant` | `chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant replenishment”; retain all following collection, quantity and normalization obligations: Identify actual refrigerant species and charge added; not all charge is emitted. Reconcile opening/closing stocks, recovery and measured leakage. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_fuel` | `chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_consumables` | `chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_packaging_transfer` | `chill`; outputs; product | Identify and separately collect every actual exchange covered by “Packaging physically transferred with the fish lot”; retain all following collection, quantity and normalization obligations: Only actual material retained on the lot and handed to the next actual node, with paired quantity/id; own retained reusable containers remain stock. Keep material mass distinct from reusable manufacturing attribution and final fish mass. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_internal_water` | `chill`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_packaging_waste` | `chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Packaging actually removed and sent to treatment”; retain all following collection, quantity and normalization obligations: Only actual removed wrapping/packaging transferred to treatment, with material and recipient; not packaging still on the fish, retained/reused containers, operating consumable waste or sold usable materials. Flow property / unit: Mass / kg Amount rule: Obtain actual quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; separate single-output LCA view applies section 7 attribution once, retaining original ledger/matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_recovered_refrigerant` | `chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Recovered spent refrigerant to treatment”; retain all following collection, quantity and normalization obligations: Actual recovered substance transferred to treatment, not simultaneously atmospheric leakage; usable sold recovered product needs distinct product classification. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_operating_waste` | `chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_refrigerant_release` | `chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant leakage to air”; retain all following collection, quantity and normalization obligations: Expand actual single substance or mixture constituents to verified identities and atmospheric medium; use maintenance/charge balance with uncertainty, not a universal leakage rate. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_other_air` | `chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_water_discharge` | `chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_materials` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Actual packaging and protective material”; retain all following collection, quantity and normalization obligations: Separate cloth, liner, box, label and other actual materials, supplier state and reuse ownership. Record actual purchased or paired preceding internal material receipts; reusable manufacturing service attribution stays in shared asset ledger and already included upstream materials do not acquire a second manufacturing burden. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_fuel` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_consumables` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_materials_transfer` | `present`; outputs; product | Identify and separately collect every actual exchange covered by “Packaging physically transferred with fish”; retain all following collection, quantity and normalization obligations: Actual disposable/transferred packaging mass paired to handover material receipt or next actual node, separate from reference fish. Retained reusable containers remain stock, not fictitious sold mass. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_internal_water` | `present`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_actual_alternative_fish_product` | `present`; outputs; product | Identify and separately collect every actual exchange covered by “Actual independently accepted nonreference fish product at present”; retain all following collection, quantity and normalization obligations: Only an actual independently intended and accepted alternative fish output with species, true body/form/state/use, measured mass and external recipient/handoff. It is disjoint from the reference, earlier external sales, waste, direct release and pending stock. A mere failed inspection or hypothetical value does not create a coproduct; retain its own output-allocation evidence and real gate. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present_mass: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_waste` | `present`; outputs; waste | Identify and separately collect every actual exchange covered by “Packaging rejects and spent protectors”; retain all following collection, quantity and normalization obligations: Actual disposed materials by type and receiver, excluding packaging crossing the producer gate and retained reusable stocks. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_operating_waste` | `present`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_other_air` | `present`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_water_discharge` | `present`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_material_receipt` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Packaging or ice received with the lot”; retain all following collection, quantity and normalization obligations: Only actual packaging/solid ice/free water transferred with the fish lot from the preceding node with paired ids. This card owns lot-carried material receipts; handover_other_water owns only non-lot operational water receipts, mutually exclusive without duplication. Not new purchase or second burden. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_fuel` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_consumables` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_other_products` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Other independently accepted handover products”; retain all following collection, quantity and normalization obligations: Actual non-reference intended products with their own form/use/recipient, including disjoint accepted species/grades. They never enter the final reference denominator or duplicate earlier external outputs. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_packaging` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Packaging physically crossing first producer gate”; retain all following collection, quantity and normalization obligations: Measured transferred packaging mass only, separate from reference fish and from reusable-asset manufacturing responsibility; not automatically an economically allocated coproduct. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_ice_transfer` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Ice or free water physically crossing gate”; retain all following collection, quantity and normalization obligations: Actual icing/free-water material accompanying delivery, separately identified and weighed or metered; exclude from fish net mass and from drainage/treatment fates. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_internal_water` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_operating_waste` | `handover`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_other_air` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_water_discharge` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_materials` | `fad_service`; inputs; product | Identify and separately collect every actual exchange covered by “Actual FAD construction/replacement material”; retain all following collection, quantity and normalization obligations: Identify raft, net, rope, anchor and buoy-component material actually received in the service period. Attribute manufacture from observed service life and use, not by assuming full asset mass per set. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_battery` | `fad_service`; inputs; product | Identify and separately collect every actual exchange covered by “Actual buoy battery or power supply material”; retain all following collection, quantity and normalization obligations: Actual battery/replacement materials with chemistry, provider and stock/service record; solar operation is not zero manufacturing responsibility. No automatic kWh-to-kg conversion. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_fuel` | `fad_service`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_retrieved_product` | `fad_service`; outputs; product | Identify and separately collect every actual exchange covered by “Usable FAD material transferred to another owner”; retain all following collection, quantity and normalization obligations: Only actual usable asset/component external transfer with remaining life and recipient; own retrieved/redeployed asset stays in stock and service ledger. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_waste` | `fad_service`; outputs; waste | Identify and separately collect every actual exchange covered by “Recovered retired FAD/buoy materials to treatment”; retain all following collection, quantity and normalization obligations: Actual recovered worn component or battery to identified treatment, distinct from usable resale, retrieval stock and loss to sea. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_lost_material` | `fad_service`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual FAD/buoy material lost to sea”; retain all following collection, quantity and normalization obligations: Actual component/material loss with location, date, recovery effort and receiving medium. Maintain event and asset linkage; no assumed annual loss or environmental credit. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fad_service_other_air` | `fad_service`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_asset_material` | `shared_resources`; inputs; product | Identify and separately collect every actual exchange covered by “Shared vessel/port replacement and maintenance material”; retain all following collection, quantity and normalization obligations: Actual replacement and maintenance materials by asset, consumer nodes and periods; reconcile asset embodied burden separately from physical material use and supplier services. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_fuel` | `shared_resources`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned fuel”; retain all following collection, quantity and normalization obligations: Actual fuel by composition/provider for this node only, excluding fuel already included in another node or service. Capture includes attributable outward, search, fishing, failed events and return voyage resources; pooled otherwise-unowned fuel is owned once by shared_resources. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_energy, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_consumables` | `shared_resources`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning and operating consumables”; retain all following collection, quantity and normalization obligations: Identify actual detergents, disinfectants, filters and other consumables by formulation/use, excluding separately owned bait, feed, packaging, fuel and asset material. No mandatory chemical treatment is implied. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_asset_product` | `shared_resources`; outputs; product | Identify and separately collect every actual exchange covered by “Actual usable retired asset material sold”; retain all following collection, quantity and normalization obligations: Actual accepted usable equipment/material external sale with recipient and condition; retained assets remain stock and no avoided-product credit is automatic. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_internal_water` | `shared_resources`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred internally”; retain all following collection, quantity and normalization obligations: Exact paired handoff to a recipient node with event/pass/transfer id and state; not external abstraction, sale or discharge. Exclude water/ice already recorded inside another material transfer. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_operating_waste` | `shared_resources`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating materials”; retain all following collection, quantity and normalization obligations: Actual spent containers, filters, cleaning residues and other consumables by recipient, excluding separately owned packaging/offal/gear/refrigerant/maintenance waste. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_other_air` | `shared_resources`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance-specific air emissions”; retain all following collection, quantity and normalization obligations: Actual exhaust or process pollutants expanded by substance/species or particle size and medium, with node/fuel/factor evidence. An NOx/VOC/particulate umbrella is not an exact identity. Excludes fossil CO2 and chill refrigerants already owned separately. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_emissions, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_emissions` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_resources_water_discharge` | `shared_resources`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual water and constituent releases to environment”; retain all following collection, quantity and normalization obligations: Actual receiving medium and separately identified constituents, including actual direct effluent water. Water/ice melt, contaminants and tissue mass must not double count constituent and mixture inventories; require measured/modelled fate and actual management context. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_supply_service` | `bait_supply`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_bait_supply_water_waste` | `bait_supply`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_bait_supply_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_bait_supply_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_capture_service` | `capture`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_capture_water_waste` | `capture`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_capture_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_conditioning_service` | `conditioning`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_conditioning_water_waste` | `conditioning`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_conditioning_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_conditioning_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_grade_service` | `grade`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_grade_water_waste` | `grade`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_grade_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_chill_service` | `chill`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_chill_water_waste` | `chill`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_chill_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_chill_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_present_service` | `present`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_present_water_waste` | `present`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_present_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_handover_service` | `handover`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_handover_water_waste` | `handover`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_handover_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_fad_service_service` | `fad_service`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_fad_service_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fad_service_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_shared_resources_service` | `shared_resources`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally purchased node service”; all collection and conversion obligations apply: Only a genuinely purchased service, disaggregated by provider, task, invoiced functional unit and inclusive resources; its service unit is not kg material. Expand to concrete unit/property and verified identity before final exchange. Otherwise retain the real invoice quantity and unresolved support in the auxiliary service ledger. Flow property / unit: Service quantity / service unit Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_service, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_service` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_shared_resources_maintenance_waste` | `shared_resources`; outputs; waste | Individually identify and independently measure the actual exchanges within “Actual shared maintenance and retirement waste”; all collection and conversion obligations apply: Spent oils, filters, parts and other actual maintenance waste disaggregated by material/recipient; not simultaneously useful product or leaked elementary emission. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_shared_resources_water_waste` | `shared_resources`; outputs; waste | Individually identify and independently measure the actual exchanges within “Wastewater and collected wash residues to treatment”; all collection and conversion obligations apply: Actual waste transfer by composition and recipient, including dissolved blood only once. Keep mixture mass balance separate from constituent emissions, and do not classify direct environmental discharge as treatment. Flow property / unit: Mass / kg Amount rule: Obtain this card's actual receipt, transfer, output, loss or resource quantity under cp_shared_resources_mass, retaining unallocated physical ledger and shared node/period resource ownership once; divide after physical closure by positive accepted final net kg; the separate single-output LCA view applies section 7 attribution once while retaining unallocated ledger and matrix. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_shared_resources_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_scope` | handover_final | Check wild Thunnus/Katsuwonus pelamis, retained head, removed viscera and actual gill state, nonfrozen fresh/chilled condition, food acceptance and actual first producer gate. Reject other bonito species, farming/ranching, live/whole-ungutted final product, heading, fillets/loins/steaks, organs, frozen/thawed or processed products from denominator. | `un-cpc3-notes` |
| `sequence_and_pairs` | all nodes | Every selected node and revisit has actual event/pass/transfer ids, compatible preceding/following state and paired internal quantity. Mandatory conditioning, actual destination grading and food/cold-history evidence are complete before final gate; node ordering never substitutes for evidence. |  |
| `physical_closure` | all nodes | Reconcile unallocated mass separately for fish/tissue, bait, water/ice, packaging and operational materials with opening plus receipts equals actual outputs plus losses plus closing stock, within declared measurement uncertainty. Separate environmental removal from purchased suppliers and inter-node transfers; flag missing fates, not force closure with evaporation. |  |
| `quantitative_gap` | all inventory | Each actual identity/unit/state/node has a Range, records and independent QA envelope. Provisional screening estimates are not measured defaults or accepted allowed limits: outliers trigger investigation, never clipping or false pass. Missing actual quantities, empirical support, service-unit conversion, substance identity or fate evidence remains an explicit data gap; no finalized quantitative exchange from an unresolved umbrella. |  |
| `cold_acceptance` | grade; chill; handover | Compare continuous actual capture-to-gate history with applicable documented market/authority requirements and actual acceptance, including deviations, corrective decisions and missing intervals. No universal threshold, current-temperature-only pass or safety certification follows from this PCR. | `fda-histamine-2024` |
| `ownership_allocation` | all nodes | Check complete intended output set and external gates, direct/subdivided/joint attribution precedence, same-boundary values, actual production mode, cleaning/changeover/no-output/return periods and all asset consumers. Shares cover each owned pool exactly once; physical balances remain unallocated and downstream shares are not reapplied. |  |
| `gear_delta` | capture; bait_supply; fad_service | Validate actual gear/associated school facts per event and associated bait/skiff/FAD inputs, losses and responsibilities. Distinct gear events may coexist in campaign only with disjoint catch attribution. Own bait retains own capture/holding resources; nature returns and protected-species interaction notes confer no ecosystem credit. | `noaa-tuna-gear` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground-record-based wild head-on gutted tuna/skipjack production data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Use for process or lifecyclemodel projections only when species/origin/form/first gate, actual technology/period match and concrete exchange identity/quantity gaps are resolved |
| excluded_use | Not whole-CPC-leaf equivalent, farmed/live/ungutted/headed/processed/frozen-thawed products, later merchant gate, food-safety certification or complete quantitative data while gaps remain |
| required_metadata | Species/waterbody/dates, gear/school association, actual handling events, net mass/gill state, complete cold-history acceptance, first gate, voyage/campaign periods, intended output set, allocation matrix, supplier service and asset boundaries |
| required_quality_disclosure | Actual data coverage, representativeness/calibration/uncertainty, physical closure, independent QA and provisional ranges, unresolved identity/property/unit/quantity, failed no-output and service-inclusive ownership |
| update_trigger | Species/boundary/form/gate, actual technology/cold acceptance or supplier/asset ownership changes; resolved identity/quantity evidence and empirical ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes (30 June 2025), 04251. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification species/origin context only; proposed PCR is narrower, not a whole-leaf equivalent. |
| noaa-tuna-gear | official_guidance | NOAA Fisheries. West Coast Highly Migratory Species Fisheries and Gear. https://www.fisheries.noaa.gov/west-coast/sustainable-fisheries/west-coast-highly-migratory-species-fisheries-and-gear | Qualitative actual capture-gear alternatives; no universal purse seine/FAD route or performance factor. |
| noaa-yellowfin | official_guidance | NOAA Fisheries. Pacific Yellowfin Tuna. https://www.fisheries.noaa.gov/species/pacific-yellowfin-tuna | Species and regional gear/aggregation example only, not global impact, legality, fuel or FAD factor. |
| fao-tuna-handling-2025 | official_guidance | FAO Common Oceans. First few minutes are key in handling tuna caught one-by-one (1 April 2025). https://www.fao.org/in-action/commonoceans/newsroom/news-and-stories/news-detail/first-few-minutes-are-key-in-handling-tuna-caught-one-by-one/en | Qualitative killing/bleeding/gutting/gilling, nonfreezing cooling and protective presentation route; no numerical default or copied universal sequence. |
| fda-histamine-2024 | official_guidance | US FDA. FDA Issues Final Compliance Policy Guide for Scombrotoxin (Histamine)-forming Fish and Fishery Products (2024). https://www.fda.gov/food/hfp-constituent-updates/fda-issues-final-compliance-policy-guide-scombrotoxin-histamine-forming-fish-and-fishery-products | Hazard-history rationale only: formed histamine is not removed by later washing/freezing/heating; no US limit imported globally. |
