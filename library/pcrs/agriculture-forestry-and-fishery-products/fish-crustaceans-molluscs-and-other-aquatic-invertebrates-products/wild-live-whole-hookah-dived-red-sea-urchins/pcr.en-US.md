---
pcr_id: pcr.wild-live-whole-hookah-dived-red-sea-urchins
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild live whole hookah-dived red sea urchins

## 1. Scope and Applicability

This PCR covers wild California red sea urchins (Mesocentrotus franciscanus) collected by hookah divers using hands or handheld rakes and delivered whole and live at the first physical recipient acceptance from the harvester. The declared LCA gate precedes opening or gonad extraction and is established by actual custody and acceptance records, independently of invoice date or legal title. West Coast Sea Grant identifies this species and live/fresh products; its dive description supports surface-supplied breathing air, mesh-bag lifting and alternative live-holding arrangements (`wcsg-red-urchin`; `wcsg-dive`). California, hookah and whole-live acceptance are this PCR's selected subset, not claims about all fisheries.

Exclude other urchin species, scuba or free-diving routes, hatchery production, ranching/fattening, deliberately cultivated stock, culling-only killing, dead/frozen reference products and extracted uni. An intended secondary output may exist on a shared trip but cannot become this reference product. No automatic biodiversity, kelp-restoration, carbon-removal or avoided-treatment credit accompanies capture. This PCR does not establish food-safety or legal compliance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-hookah-dived-red-sea-urchins |
| classification_refs | cpc:3.0:04521; proposed narrower relation |
| covered_products | Wild California Mesocentrotus franciscanus, hookah hand/rake capture, whole live at first harvester physical recipient acceptance |
| excluded_products | Other taxa or geographies; scuba/free diving; farming/ranching/fattening; culling-only routes; dead/frozen urchins; opened tests and uni |
| representative_product | Whole live red sea urchin in native test with native spines and gonads retained |
| production_route | Wild stock → hookah collection and lift → actual sorting, conditional preparation, live support and presentation instances → first recipient acceptance |
| market_state | Live whole; actual pre-gate temperature, moisture protection and holding mode disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted net whole live wild California red sea urchins at first harvester physical recipient acceptance |
| How much | 1 kg |
| How well | Verified species, wild origin, hookah collection and live whole recipient acceptance; native test, spines, internal water and gonads retained |
| How long or cycle | Declare complete trip/batch and reporting-period boundaries, including unsuccessful trips; identify asset commissioning, maintenance, replacement and retirement periods |
| reference_flow_link | `accepted_live_urchins` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live wild California red sea urchins at first harvester recipient acceptance |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Mesocentrotus franciscanus; California harvest site; wild-origin evidence; hookah hand/rake gear; trip and lot ids; acceptance recipient/time/location; live-state assessment; net whole mass and tare/free-water method; actual holding instances and duration; grade/destination; reporting period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated acceptance weighing under cp_accept. Exclude bags, bins, coverings, foreign loose material and free seawater; retain native test/spines, internal water and gonads. Record drainage/tare method without changing whole-live state. Spine damage alone does not define a reject. |
| `conversion_evidence` | material, energy and service records | Recorded property | Original unit and documented equivalent | Counts, volume fuel/water and package counts require lot-specific mass/density evidence where converted. Keep electricity and fuel energy bases distinct; retain measured MJ or documented kWh conversion. Services retain h or tkm, never a fabricated kg conversion. Gonad yield is not whole-live yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild red sea urchins in California marine habitat, with natural-stock provenance and trip access/support disclosed |
| starting_condition_role | Natural biological capture context, not a burden-free purchased product or managed grow-out process |
| product_classification_scope | Selected whole-live hookah subset of cpc:3.0:04521 |
| recursive_input_rule | Record any purchased or transferred same-category live lot separately with supplier identity, measured mass and an upstream dataset ending at its actual transfer gate; never relabel it as this trip's capture. Mixed or unknown origin blocks this selected-route dataset until separated or reviewed. |
| upstream_dataset_requirement | Supplier datasets for fuel, electricity, materials, services and capital with compatible geography, period, unit and inclusion boundary; disclose cut-offs and missing upstream coverage |
| disclosure | Site/stock provenance; vessel/compressor/lifting gear; trip calendar; routes and shore support; node activation and transfer log; live-holding mode; support coverage; shared assets and periods; capture/acceptance balances and all destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_trip` | capture and support | Include preparation/access, travel/search, diving, compressor and lifting operation, return journeys, failed trips, landing and necessary shore support before the acceptance gate. Capture is removal from wild habitat; it is independent of biological production and of later conditioning. | `wcsg-dive` |
| `boundary_nodes` | sorting, preparation, preservation and presentation | These are responsibilities, not a mandated serial plant. Record actual instance timing, entry/exit state and transfer ids. Sorting receives whole collected animals and distinguishes reference-eligible, secondary intended, returned and rejected states. Preparation applies only bounded animal cleaning/preparation; equipment-only cleaning leaves animals on a bypass. Live support may start immediately and overlap sorting, presentation or delivery. | |
| `boundary_live` | preservation | Record actual oxygenated-seawater tank OR wet-covered-bin holding instances and any proven sequence. Air compression/oxygenation is not purchased pure oxygen. No compulsory tank-plus-bin chain, fixed duration or safe temperature is prescribed. Record actual control limits and monitoring evidence. | `wcsg-dive` |
| `boundary_gate` | acceptance | Include actual harvester delivery/landing support to first physical recipient acceptance and only its attributable burden. Opening, gonad extraction, processor activities and later distribution are outside. Rejected loads remain in the trip/period ledger with their actual return or disposal destination. | |
| `boundary_support` | shared assets/services | Maintain one owner for each vessel, compressor, davit, bag, tank, bin, shore asset and shared energy/emission event; enumerate consuming nodes and periods. Inclusive purchased services replace their covered direct resources/emissions/capital rather than supplementing them. No arbitrary equipment lifetime or duplicate asset burden. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `support` | Actual vessel and equipment support | required | Actual vessel/compressor/lift support and evidenced additional support instances | Physical resource/emission owner with site, equipment and service-period ids | Measured h supplied to named consuming instances |
| `hookah_capture` | Hookah collection and lift | required | All selected trips, including unsuccessful ones | Wild removal and collected-animal handoff | Measured whole collected animals and complete trip ledger |
| `sort` | Grade and destination sorting | required | All harvested lots | Eligibility and destination classification | Actual grade/destination outputs |
| `prepare` | Bounded primary preparation | conditional | Actual animal cleaning/preparation or linked equipment cleaning is performed | Preparation with animal bypass for equipment-only cleaning | Prepared animals and actual residues |
| `live_support` | Actual live preservation instances | conditional | A tank, wet-covered bin or other evidenced pre-gate live-support intervention occurs | Preserve whole-live state | Live output, mortality and effluent by instance |
| `present` | Protective presentation | conditional | Bags, bins, coverings, labels or other pre-gate presentation are used | Product/package interface, excluding delivery | Protected live animals, packaging reuse/rejects |
| `accept` | Landing/delivery and recipient acceptance | required | All reference lots and rejected deliveries | First physical recipient gate | 1 kg accepted net whole-live reference |

Production is trip/batch based within a declared full reporting period. Protocols link every input, output, cleaning/changeover, unsuccessful trip, asset event and acceptance to these boundaries. Transfer ids pair actual animal outputs/inputs between responsible instances, permitting branches and overlapping live support without imposing the table order. Internal transfer amounts remain measured and may exceed final accepted mass. For all cards, normalize attributable activity to per 1 kg reference flow only after complete physical reconciliation and burden attribution.

Each non-reference Range below is an unresolved quantitative-evidence requirement: 0..U_row is neither a measured interval, a maximum drawn from the batch being tested, nor a numerical default. Approve U_row independently using comparable evidence before quantitative use; an inactive conditional row can be zero only with activation evidence. Expand umbrella cards into concrete recorded exchanges, each with its own unit, identity and independently approved U_instance. Parent U is neither an aggregate cap nor inherited by instances.

Each support instance is a real vessel or equipment/plant activity at a named site and service period, not an accounting pool. Name its physical operator, equipment and consuming instances. Pair its measured service-hour output with each consuming input before allocating burdens. Only truly shared equipment/resources belong to that instance; unrelated shore or delivery plants require separately identified physical instances with their own evidence and ownership. Support hours are activity transfers, never final animal production. Capture/removal and direct habitat-return ledgers are mandatory ecological/physical records; they are not automatically elementary biomass resources or emissions. Any method electing such exchanges must establish substance/material identity, compatible type/direction/medium and independently verified flow/support identity first.

### Process: Actual vessel and equipment support (`support`)

#### Inputs

##### Product flows

###### Direct electricity (`capture_electricity`)

Record metered purchased electricity for actual capture/support equipment; distinguish shore supply from onboard generation whose fuel is already recorded.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: Attributable meter records from cp_support, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_support`
- Range: Unresolved electricity evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_capture_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`direct_fossil_co2`)

Only actual foreground fossil-fuel combustion emits this row; exclude respiration, fuel upstream emissions and emissions already inside inclusive services.

- Selected flow: Carbon dioxide, fossil, to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Actual combustion fuel multiplied by documented matching factor under cp_support, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_support`
- Range: Unresolved direct-combustion evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_direct_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Hookah collection and lift (`hookah_capture`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Collected whole animals (`collected_urchins`)

Whole lifted animals pass to actual sorting/handling instances under transfer ids; retain live/dead status and all grade/species outputs of shared capture.

- Selected flow: Collected whole red sea urchins before destination sorting
- Flow property / unit: Mass / kg
- Amount rule: Measured collected whole mass from cp_capture, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Unresolved collected-mass evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_collected_urchins
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grade and destination sorting (`sort`)

#### Inputs

##### Product flows

###### Whole animals entering sorting (`sort_in`)

Match incoming transfer ids to capture or actual intervening live-support output, retaining whole state, species and measured mass.

- Selected flow: Whole red sea urchins entering destination sorting
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming transfer mass from cp_sort, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Unresolved sorting-input evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Reference-eligible live grade (`sort_live`)

Record every eligible whole-live grade separately and its actual handoff to preparation, live support, presentation or acceptance. This is an internal transfer, not the final accepted product.

- Selected flow: Sorted whole live red sea urchins eligible for recipient acceptance
- Flow property / unit: Mass / kg
- Amount rule: Measured eligible grade mass from cp_sort, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Unresolved grade-specific evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_live
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve each U_instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

### Process: Bounded primary preparation (`prepare`)

#### Inputs

##### Product flows

###### Animals actually prepared (`prepare_in`)

Only actual animal cleaning/preparation activates this transfer. Equipment-only cleaning records resources and residues but animal input/output are bypassed.

- Selected flow: Collected whole red sea urchins entering bounded preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured actual preparation entry from cp_prepare, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Unresolved preparation-entry evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_prepare_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared whole live animals (`prepare_live`)

Prepared whole-live output has its measured handoff and next actual instance. Removing foreign loose matter does not turn the test or gonads into co-products.

- Selected flow: Prepared whole live red sea urchins
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared output from cp_prepare, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Unresolved prepared-output evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_prepare_live
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Actual live preservation instances (`live_support`)

#### Inputs

##### Product flows

###### Live animals entering support (`holding_in`)

Record each actual entry into wet-covered bins or oxygenated-seawater tanks and its source transfer. Holding may overlap other responsibilities; repeated observations of one animal are not repeated resource removal.

- Selected flow: Whole live red sea urchins entering actual preservation instance
- Flow property / unit: Mass / kg
- Amount rule: Measured live-support entry from cp_holding, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Unresolved holding-entry evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_holding_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve each U_instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct purchased holding electricity (`holding_energy`)

Record actual pump, aeration and cooling electricity not already in capture/shared service coverage; record physically supplied support consumption through paired native-service transfers; direct combustion belongs to that real support instance.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: Attributable measured electricity from cp_holding, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Unresolved holding-energy evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_holding_energy
  - Unit: MJ
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct seawater abstraction (`holding_seawater`)

Record actual environmental intake for tanks or wetting, by location and conditions; purchased water belongs above. Include preparation intake through a separately owned preparation exchange when applicable.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured actual intake from cp_holding, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Unresolved seawater-intake evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_holding_seawater
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve each U_instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Preserved live output (`holding_live`)

Record still-live whole animals leaving each actual instance with transfer id, monitoring history and destination. No universal survival performance or duration is presumed.

- Selected flow: Whole live red sea urchins after actual live support
- Flow property / unit: Mass / kg
- Amount rule: Measured live-support exit from cp_holding, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Unresolved live-exit evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_holding_live
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve each U_instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Protective presentation (`present`)

#### Inputs

##### Product flows

###### Live product before presentation (`present_in`)

Record the actual incoming whole-live animal state and transfer id; protection may coexist with live support without duplicating that support's water/energy.

- Selected flow: Whole live red sea urchins before protective presentation
- Flow property / unit: Mass / kg
- Amount rule: Measured presentation entry from cp_present, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Unresolved presentation-entry evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_present_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Protected live product (`present_live`)

Record protected whole-live product and actual handoff to acceptance or intervening support; packaging remains excluded from animal net mass and has a separate custody/reuse ledger. Delivery belongs to accept.

- Selected flow: Protected whole live red sea urchins before acceptance
- Flow property / unit: Mass / kg
- Amount rule: Measured protected animal mass from cp_present, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Unresolved protected-output evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_present_live
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

### Process: Landing/delivery and recipient acceptance (`accept`)

#### Inputs

##### Product flows

###### Delivered whole-live lots (`accept_in`)

Match actual prior transfer to delivery and recipient weighing, including lots later rejected. Vessel return already belongs to the complete capture trip; do not duplicate it as delivery.

- Selected flow: Whole live red sea urchins delivered for first recipient acceptance
- Flow property / unit: Mass / kg
- Amount rule: Measured delivered animal mass from cp_accept, per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept`
- Range: Unresolved delivered-mass evidence requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_accept_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independent evidence approval required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted whole-live reference (`accepted_live_urchins`)

This is the sole reference output: native test, spines, internal water and gonads stay with the live animal. Record each accepted grade and sum eligible net mass without counting internal handoffs again.

- Selected flow: Whole live wild California red sea urchins at first harvester recipient acceptance
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept`
- Range: Reference normalization identity, not observed raw yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow; accepted eligible mass divided by itself under cp_accept
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_reconcile` | complete trip/period | Reconcile natural removal, collected animals, returns, transfers, stock changes, mortality, waste and every actual intended species/grade output before assigning burdens. Live and dead states, reject reasons and destinations remain explicit. Test/spines/gonads retained in whole animals are not separate co-products. | |
| `allocation_outputs` | multiple intended outputs | First subdivide independently measured operations and assign output-specific burdens directly. For remaining shared burdens, use documented causal activity drivers when defensible. Otherwise require a study-specific justified allocation choice and sensitivity, with measured output quantities and any contemporaneous prices retained; no universal economic or mass allocation factor is prescribed. Do not finalize while the choice or output set is unresolved. | |
| `allocation_periods` | trips/assets/periods | Include unsuccessful trips in the full representative period rather than discarding zero-yield effort. Link assets, maintenance, replacement and retirement to actual service periods/consumers; document supported service-life and utilization assumptions and sensitivity. Shares across outputs, nodes and periods exhaust each attributable burden exactly once; do not assign acquisition in full and depreciate it again. | |
| `allocation_service` | direct versus purchased support | Maintain a coverage matrix for each provider, vessel/compressor/davit/tank/bin/shore asset and service period. Replace the covered direct fuel, energy, emissions and capital with inclusive service burdens. Inventory internal transfers and resource stock movements for physical reconciliation without treating them as additional final outputs or new production. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_support` | `support` | Actual physical support resources/emissions and service transfers | Trip/resource/asset ledger | instance/operator/site/equipment/service period; consuming process instance and paired service transfer/h; trip/period; fuel grades/stocks/purchases/returns; meters; air volume/conditions; components/assets/replacements/losses/retrieval/retirement; service h/coverage/consumers; pollutant/factor/substance/medium evidence | Reconcile calibrated weighing, trip and engine/compressor logs, meters, stock balances, service invoices and supplier/factor evidence; establish actual fuel factors before emissions calculation; retain unsuccessful trips and shared-event ownership | kg; MJ; m3; h by exchange | Every trip/event and asset/service change | Complete declared reporting period plus attributable asset phases | California harvest sites, vessel and necessary pre-gate shore support | per 1 kg reference flow | Scale/meter calibration; trip completeness; supplier/factor provenance; transfer and coverage matrix; independent U_instance approval |
| `cp_capture` | `hookah_capture` | Wild collection, ecological records and actual support received | Trip/capture/transfer ledger | trip/period/site/species/origin; departure/search/dive/return times; hookah/rake/lift gear; removed/collected/returned/dead/incidental masses and status; habitat observations; transfer/destination; received support h and physical owner/instance; breathing-air volume/conditions | Reconcile calibrated catch weighing, dive/trip logs, complete unsuccessful trips and all ecological returns; pair actual physical support service input with support_out. Do not automatically encode whole animals as biomass resources or returned organisms as emissions. | kg; h; operational m3 | Every trip and capture/return/service event | Complete declared reporting period | Actual California marine capture trip | per 1 kg reference flow | Calibration; complete trip/return observations; matched physical service transfers; independently approved U_instance |
| `cp_sort` | `sort` | Grade/destination classification | Lot sorting ledger | trip/period/lot/instance; entry mass/state/transfer; all grades/species/intended uses; live/dead/reject reasons; output mass/recipient/return/waste destination; stocks; actual sorting resources and unique owners; paired support service h/instance/operator/period | Weigh each physical destination on calibrated scales, record grade and status decisions and pair transfers; separate product, waste and environmental return; link actual resources to one owner | kg; h by exchange | Every lot and sorting event | All selected trip/batches and period | Actual vessel/landing sorting location | per 1 kg reference flow | Calibration; receiver/disposal/return record; complete output-set ledger; independently approved U_instance |
| `cp_prepare` | `prepare` | Actual preparation or equipment cleaning | Preparation event ledger | instance/trip/period; animal versus equipment scope; activation/bypass; entry/exit states/masses/transfers; purchased water/materials/stocks; direct abstraction source; energy/service owner; paired support service h/instance/operator/period; reused-water transfer/quality; residues/effluent/composition/medium/destination; actual secondary output status | Record actual bounded cleaning method; calibrated material/water and animal weighing or metering with density conversion; pair transfers and distinguish managed effluent from direct discharge; equipment-only events do not invent animal passes | kg; h by exchange; energy native unit in linked owner ledger | Every actual event | Complete selected batches/period including cleaning/changeovers | Actual pre-gate preparation location | per 1 kg reference flow | Calibration; method and scope record; bypass/transfer trace; source/destination evidence; independent U_instance approval |
| `cp_holding` | `live_support` | Live preservation by actual instance | Holding/monitoring/water ledger | instance/trip/period/lot; bin OR tank mode and actual sequence; entry/exit times/live state/mass/transfers; water source/intake/make-up/stocks/discharge; wetting/covering/cooling materials; energy meter; temperature/moisture/oxygenation measurements and actual operating controls; mortality/secondary product/waste/effluent composition/destination; habitat-return observations; reused-water transfer/quality; paired support service h/instance/operator/period | Observe actual system and calibrate meters/scales; log time and condition, supplier/abstraction identity, make-up and stock balance, animal status and all destinations; retain analytical/factor evidence for calculated pollutants | kg; MJ; h by exchange | Every instance and intervention with recorded monitoring frequency | Immediate post-capture through actual pre-gate holding end | Actual vessel or necessary shore holding location | per 1 kg reference flow | Calibration; operating logs; paired transfers; water/animal balance; source and receiving-medium evidence; independent U_instance approval |
| `cp_present` | `present` | Product/package interface | Packaging and custody ledger | instance/lot/trip/period; incoming/protected live mass/state/transfers; material composition/count/unit mass; one-way/reusable stock and cycles; repair/reject/end-of-use/recipient custody; paired support service h/instance/operator/period; animal losses/status/destination | Weigh animals net of tare and inventory materials with measured count-mass conversions; record actual protective function, reuse, returns and end-of-use; link overlapping support resources once | kg; h by exchange | Every presentation lot and material stock event | Complete selected batches/period and relevant reuse periods | Actual pre-gate presentation location | per 1 kg reference flow | Calibration; stock/reuse evidence; custody/transfer records; independently approved U_instance |
| `cp_accept` | `accept` | Delivery and first physical recipient gate | Custody, freight and acceptance ledger | lot/trip/period/recipient; dispatch/physical acceptance time/location; species/origin/hookah evidence; incoming/gross/tare/free-water/net accepted mass; live-state/grade decision; accepted/rejected/returned/secondary/stock mass and destination; freight mode/distance/load/tkm/provider coverage and empty legs; scale id/drainage method; paired support service h/instance/operator/period; secondary/technosphere-return transfer; habitat-return observations | Weigh accepted whole live animals on calibrated scales excluding packaging/free seawater; retain native test/spines/internal water/gonads. Pair receipt with physical gate and preceding transfers; reconcile freight and all non-accepted destinations independently of invoice/title | kg; tkm; h by exchange | Every delivery/acceptance and rejection | Full declared trip/batch reporting period | First physical recipient gate and attributable harvester delivery route | per 1 kg reference flow | Scale calibration; custody/receipt/live-state evidence; tare/drainage record; full rejection/return ledger; provider coverage; independently approved U_instance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reconcile_ledgers` | all inventory rows | Balance animal states, material/water stocks and transfers in original measured units; account for returns, losses, other intended products and measurement uncertainty before attribution. After reviewed attribution divide each attributable quantity by eligible accepted net kg for per 1 kg reference flow. Internal output/input pairs cancel at system aggregation. | cp_support; cp_capture; cp_sort; cp_prepare; cp_holding; cp_present; cp_accept; allocation decision | Reconciled normalized quantities and balance residuals | |
| `combustion_evidence` | direct_fossil_co2, other_combustion | Multiply actual direct fuel consumption by a documented compatible fuel/engine/substance factor; preserve fuel basis and receiving medium. Retain factor identity/units, provenance and uncertainty in the foreground data package before calculation; no PCR default factor. | cp_support; documented compatible factor | Direct emission quantities and uncertainty | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_route` | reference and capture | Confirm species, California wild provenance and hookah route; unknown origin/gear or mixed outside-scope lots require segregation or review rather than a selected-route default. | Catch/site/gear records and physical recipient receipt |
| `quality_complete` | trips, nodes and outputs | Include full representative periods, unsuccessful trips, shore support, activation/bypass, grade/destination sets, losses and stock changes; disclose measurement residuals and cut-offs. | Complete trip calendar, node-owned protocols and physical balances |
| `quality_ranges` | every card/instance | Every 0..U requirement remains quantitatively unresolved until independent comparable evidence approves that concrete U_instance. Do not use a same-batch maximum or parent umbrella U as self-validation, observed interval, default estimate or publication-critical limit. | Independent evidence sample, applicability review and recorded approval |
| `quality_identity` | every exchange and support | Resolve concrete exchange identities and property/unit relations before final downstream TIDAS exchanges; preserve semantic type, direction, geography/provider, gate and medium. Keep native service/volume units if supports remain unresolved. | Concrete detail/support verification and declared remaining gaps |
| `quality_period` | shared assets/services | Retain commissioning, service, replacement, retirement, reuse and allocation evidence across consuming nodes/output sets/periods; disclose representative-period and provider coverage sensitivity. | Coverage matrix, asset/service ledger and attribution closure |
| `collect_capture_fuel` | `support`; Inputs; Product flows: Direct fuel | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record each actual vessel, compressor, winch and support-engine fuel, stocks and returns. Exclude quantities already covered by inclusive services. Flow property / unit: Mass / kg; Amount rule: Attributable measured fuel consumption from cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved fuel evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_fuel Unit: kg Basis: per 1 kg reference flow; independent evidence approval required Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_capture_materials` | `support`; Inputs; Product flows: Gear and asset material requirements | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual rake, mesh bag, hose, filter, lubricant, repair part and attributable capital material requirements by material and function. Retain stocks, replacement, losses/retrieval and retirement; avoid whole-asset mass counted again as component mass. Flow property / unit: Mass / kg; Amount rule: Attributable component requirements from cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved component-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_materials Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_capture_service` | `support`; Inputs; Product flows: Inclusive purchased support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual vessel/compressor/shore support services supplied in hours. Declare provider coverage, consuming nodes and periods; retain any other native service unit as a separately verified concrete exchange. Flow property / unit: Service duration / h; Amount rule: Attributable purchased service hours from cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved native-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_service Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_out` | `support`; Outputs; Product flows: Actual support service supplied | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand measured operating hours by real vessel/compressor/lift or other supported plant instance and consuming node. Reconcile service output with paired consumer inputs, including non-reference consumers and periods; do not manufacture a physical exchange solely from allocated burden shares. Flow property / unit: Service duration / h; Amount rule: Measured service hours reconciled through cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved native-service output evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_support_out Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_capture_waste` | `support`; Outputs; Waste flows: Capture support waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual spent gear, maintenance residues and dead material sent to waste management by composition and destination. Lost gear entering the environment belongs in the actual release ledger rather than an invented managed-waste destination. Flow property / unit: Mass / kg; Amount rule: Recorded managed waste from cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved waste-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_waste Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_capture_releases` | `support`; Outputs; Elementary flows: Actual support physical releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual lost gear, spills and other supported environmental releases with composition, receiving medium and destination. Animal removals and habitat returns remain physical/ecological observations; they become elementary exchanges only under an explicit compatible method and verified exact identity. Keep habitat-disturbance observations as separate non-exchange evidence; no generic beneficial-return credit. Flow property / unit: Mass / kg; Amount rule: Measured or documented actual release from cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved release-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_releases Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_other_combustion` | `support`; Outputs; Elementary flows: Other direct combustion emissions | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand measured or factor-supported pollutants by substance/species, particle fraction, mass basis and receiving air compartment. Broad NOx/SOx/PM names alone do not establish an identity. Include only direct combustion physically owned by the identified support instance. Unrelated plant emissions require their own real instance owner and protocol. Flow property / unit: Mass / kg; Amount rule: Actual fuel/engine records and matching pollutant factors under cp_support, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved pollutant-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_other_combustion Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_capture_support_in` | `hookah_capture`; Inputs; Product flows: Actual capture support received | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair actual vessel/compressor/lifting service with support_out by physical instance, operating interval and transfer id. Breathing-air volume/conditions are operational records, not industrial-oxygen use. Flow property / unit: Service duration / h; Amount rule: Measured received service from cp_capture, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved capture-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_support_in Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_sort_support_in` | `sort`; Inputs; Product flows: Actual sorting support received | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair actual sorting equipment/service hours with support_out; a shared burden share alone does not manufacture a physical service. Flow property / unit: Service duration / h; Amount rule: Measured received service from cp_sort, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved sorting-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_support_in Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_sort_secondary` | `sort`; Outputs; Product flows: Other intended outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual secondary intended grades/species and recipient gates of shared trips/periods. A downgraded or dead animal is a product only with documented intended use, destination and status; neither mortality nor bycatch automatically becomes a co-product. Flow property / unit: Mass / kg; Amount rule: Measured secondary output and handoff from cp_sort, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved secondary-output evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_secondary Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_sort_waste` | `sort`; Outputs; Waste flows: Sorting rejects to management | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record non-product rejects sent to waste management with reason, live/dead state and receiving treatment. Actual returns to sea instead remain separate ecological/physical return records in the same cp_sort ledger; they are not automatic elementary exchanges. Never count both destinations for one animal. Flow property / unit: Mass / kg; Amount rule: Measured managed sorting rejects from cp_sort, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved reject evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_waste Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_prepare_support_in` | `prepare`; Inputs; Product flows: Actual preparation support received | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair actual preparation equipment/plant service with support_out and the preparation instance. Equipment-only cleaning does not invent an animal pass. Flow property / unit: Service duration / h; Amount rule: Measured received service from cp_prepare, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved preparation-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_prepare_support_in Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_supplies` | `prepare`; Inputs; Product flows: Supplied preparation water and materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual supplied or transferred reusable water/seawater, cleaning agents and consumables by composition and role; do not infer animal chemical treatment from equipment sanitation. Direct water abstraction is an elementary input recorded separately in the same protocol rather than purchased water. Actual reused-water inputs pair with prepare_reuse_water or holding_reuse_water by transfer id and measured compatible quality. Flow property / unit: Mass / kg; Amount rule: Measured consumed supply by instance from cp_prepare, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved supply-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_prepare_supplies Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_abstraction` | `prepare`; Inputs; Elementary flows: Direct preparation-water abstraction | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual direct seawater or other water abstraction at its source; exclude purchased supplies and internal reused water from new resource intake. Flow property / unit: Mass / kg; Amount rule: Measured direct preparation intake from cp_prepare, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved preparation-intake evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_prepare_abstraction Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_reuse_water` | `prepare`; Outputs; Product flows: Preparation water sent for reuse | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual water handed to another technosphere node for reuse is a product transfer. Pair with that receiver's supplied-water input by transfer id, mass, composition and quality; no new abstraction or purchased-water burden is created by this internal reuse. Flow property / unit: Mass / kg; Amount rule: Measured reuse transfer from cp_prepare, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved preparation-reuse evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_prepare_reuse_water Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_waste` | `prepare`; Outputs; Waste flows: Preparation residues to management | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual foreign matter, damaged/dead non-product animals, spent cleaning materials and effluent transferred to management. Record actual composition and destination; direct discharge is a separately specified elementary output, not this managed-waste exchange. Flow property / unit: Mass / kg; Amount rule: Recorded preparation residues from cp_prepare, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved residue-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_prepare_waste Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_discharge` | `prepare`; Outputs; Elementary flows: Direct preparation discharge | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual water carrier and pollutant releases by material/substance and receiving compartment; retain analytical basis. This is distinct from effluent delivered to management. Flow property / unit: Mass / kg; Amount rule: Recorded preparation discharge with composition evidence from cp_prepare, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved preparation-discharge evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_prepare_discharge Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_holding_support_in` | `live_support`; Inputs; Product flows: Actual holding support received | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair actual tank/bin/pump/aeration/cooling support service with support_out; exclude support already embedded in a purchased material or freight provider. Separate unshared metered holding electricity remains holding_energy. Flow property / unit: Service duration / h; Amount rule: Measured received service from cp_holding, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved holding-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_support_in Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_supplies` | `live_support`; Inputs; Product flows: Supplied or transferred live-support materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual supplied or transferred reusable seawater/water, covering wetting supplies and any proven cooling material. Recirculated water is an internal stock; count actual make-up/replacement only. Reused-water inputs pair with prepare_reuse_water or holding_reuse_water by transfer id, mass and compatible quality. Purchased oxygen or ice is included only when foreground evidence establishes actual use and identity; neither is inferred from oxygenated seawater or cool/wet handling. Flow property / unit: Mass / kg; Amount rule: Measured supply consumption net of stocks/returns from cp_holding, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved live-supply evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_supplies Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_reuse_water` | `live_support`; Outputs; Product flows: Holding water sent for reuse | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual water crossing to another technosphere node for reuse, paired to its supplied-water input with quality/composition and transfer id. Internal recirculation within the same instance is stock circulation rather than another exchange. Flow property / unit: Mass / kg; Amount rule: Measured reuse transfer from cp_holding, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved holding-reuse evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_reuse_water Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_secondary` | `live_support`; Outputs; Product flows: Actual holding secondary/return product | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand only actual intended secondary outputs or live animals returned to a prior technosphere holder, with independent state, destination and transfer ids. Direct habitat returns remain ecological/physical records; mortality without intended use is not this product. Flow property / unit: Mass / kg; Amount rule: Measured intended/return product transfer from cp_holding, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved holding-secondary evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_secondary Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_waste` | `live_support`; Outputs; Waste flows: Holding waste to management | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual non-product mortality, spent materials and wastewater delivered to management. Intended secondary animal outputs require their own product exchange and destination evidence; exclude them here. Flow property / unit: Mass / kg; Amount rule: Recorded managed holding waste from cp_holding, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved holding-waste evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_waste Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_discharge` | `live_support`; Outputs; Elementary flows: Actual direct holding discharges | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual discharged water, pollutants, evaporation by material/substance, measured basis and receiving compartment. Water carrier mass does not substitute for pollutant mass; distinguish releases from managed effluent. Flow property / unit: Mass / kg; Amount rule: Recorded discharge mass or water balance and analytical evidence from cp_holding, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved discharge-specific evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_discharge Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_present_support_in` | `present`; Inputs; Product flows: Actual presentation support received | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair actual presentation support service with support_out and instance/period; preserve unique event ownership where presentation overlaps live preservation. Flow property / unit: Service duration / h; Amount rule: Measured received service from cp_present, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved presentation-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_present_support_in Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_presentation_materials` | `present`; Inputs; Product flows: Protective material requirements | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual bins, bags, wet coverings and labels by material/function; declare one-way versus reusable stocks, cycles, repair/rejects and end-of-use destination. Capture bags and shared assets already owned under capture are not acquired again here. Flow property / unit: Mass / kg; Amount rule: Attributable net material requirement from cp_present, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved presentation-material evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_presentation_materials Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_presentation_waste` | `present`; Outputs; Waste flows: Presentation rejects | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual packaging rejects and non-product animal losses to management with composition/destination. Reusable items continuing with recipient or returned to stock are custody/stock changes, not automatically waste. Flow property / unit: Mass / kg; Amount rule: Measured actual presentation waste from cp_present, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved presentation-waste evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_presentation_waste Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_accept_support_in` | `accept`; Inputs; Product flows: Actual acceptance/delivery support received | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair actual landing/delivery equipment service with support_out and named physical owner; exclude vessel return already assigned to capture and support embedded in purchased inclusive freight. Flow property / unit: Service duration / h; Amount rule: Measured received service from cp_accept, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved acceptance-service evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_support_in Unit: h Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_freight` | `accept`; Inputs; Product flows: Purchased pre-gate freight | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual pre-gate freight by mode, route, load, distance and provider coverage. Return/empty-leg burdens require actual service treatment; a direct own-fuel alternative belongs to its actual support instance and excludes the same inclusive freight. Flow property / unit: Transport work / tkm; Amount rule: Actual attributable freight activity from cp_accept, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved freight evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_freight Unit: tkm Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_secondary` | `accept`; Outputs; Product flows: Actual recipient secondary/return product | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual alternate intended products or whole live stock returned to a prior technosphere holder, with state, recipient and transfer evidence. Reconcile these separately from reference acceptance, waste and any direct habitat-return record. Flow property / unit: Mass / kg; Amount rule: Measured intended/return product transfer from cp_accept, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved recipient-secondary evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_secondary Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_waste` | `accept`; Outputs; Waste flows: Recipient rejects to management | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record recipient-rejected non-product animals and actual disposal. Returned live stock, alternate intended products and retained stocks require separate corresponding transfers/status; a rejected invoice does not prove waste. Flow property / unit: Mass / kg; Amount rule: Measured managed recipient rejects from cp_accept, per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved recipient-reject evidence requirement Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_waste Unit: kg Basis: per 1 kg reference flow; independently approve each U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | accepted_live_urchins | Require positive eligible accepted net mass, live whole state, species/provenance/hookah qualifiers and first physical recipient evidence. Confirm one final reference output; the 1..1 range is normalization identity rather than empirical yield. | |
| `validate_transfers` | process graph | Check actual activation/bypass/timing and entry/exit state for every instance; pair measured internal transfers without imposing a tank/bin or other serial order. Every protocol owns its real node; shared events have one burden owner. | |
| `validate_balance` | full trips/periods | Close removal/collection/acceptance, water/material stock and intended-output ledgers before allocation. Do not omit failed trips, dead/reject/return destinations, incidental material, lost gear or attributable shore support. Environmental returns/releases are not managed waste or automatic credits. | |
| `validate_attribution` | all intended outputs, assets and periods | Require explicit reviewed subdivision/driver/allocation decision when multiple intended outputs remain; close service coverage and asset-period shares exactly once. Unresolved replacement/retirement, coverage or allocation choices block dataset finalization. | |
| `validate_identity_ranges` | concrete exchanges | Verify actual type/direction/gate/substance/medium/property/unit identity and approve independent instance-specific quantitative ranges. Semantic cards, unresolved U and a structural checker pass do not establish final data, active use or publication readiness. | |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground wild-capture data package normalized to accepted whole-live output |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projection after identity and quantitative evidence closure |
| allowed_use | Matching California hookah whole-live product at the declared first physical recipient gate with explicit period, support and allocation coverage |
| excluded_use | Uni/shucking or processor inventories; other species/geographies/gear; cultivated/fattened products; culling-only or dead/frozen reference; automatic ecological-credit or safety certification claims |
| required_metadata | PCR/version; taxonomy/site/wild origin; gear/vessel/support; complete trip/period set; actual process-instance graph; live state/holding; acceptance gate/net mass; intended outputs; suppliers/units; asset/service coverage and allocation |
| required_quality_disclosure | Identity/support gaps; unresolved quantitative U; missing data/cut-offs; measured conversion and balance uncertainty; factor/provider/period representativeness; mortality/returns; shared allocation sensitivity |
| update_trigger | Species/route/state/gate change; new holding or delivery arrangement; new support/factor evidence; output-set/asset/service-period change; identity or independent quantitative-evidence resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `wcsg-red-urchin` | extension_guidance | West Coast Sea Grant Programs / UCSB, Red Sea Urchin, https://discoverwcseafood.msi.ucsb.edu/species/red-sea-urchin (accessed 2026-10-12) | Species and wild/live-fresh market context; no quantitative inventory or uni conversion factor |
| `wcsg-dive` | extension_guidance | West Coast Sea Grant Programs / UCSB, Dive, https://discoverwcseafood.msi.ucsb.edu/how-its-harvested/wild-caught/dive (accessed 2026-10-12) | Hookah air, hand/rake collection, mesh-bag lift and alternative tank/wet-bin support; no fixed duration, oxygen purchase or inventory factor |
