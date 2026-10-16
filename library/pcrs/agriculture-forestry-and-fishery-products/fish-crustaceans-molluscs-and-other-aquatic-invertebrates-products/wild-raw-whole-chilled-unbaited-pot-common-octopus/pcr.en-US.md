---
pcr_id: pcr.wild-raw-whole-chilled-unbaited-pot-common-octopus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild raw whole chilled common octopus from unbaited earthenware shelter pots

## 1. Scope and Applicability

This PCR is a deliberately narrow capture-and-first-handover methodology, not a full CPC leaf description. It covers only eastern Atlantic/Mediterranean wild Octopus vulgaris sensu stricto taken with unbaited unglazed earthenware shelter pots, delivered raw, whole, ungutted and actually chilled never frozen at first harvester physical recipient acceptance. Actual recorded chilling is a selection condition, not an empirical claim about all landings. IPMA's documented short first-sale samples were not chilled; Codex provides qualitative handling guidance, not proof of this route.

No baited trapping, other shelter materials, farming, cleaned cuts, deliberate arm removal, tenderization/beating/tumbling, freshwater soaking, intentional weight-increasing water/additives, frozen/thawed or live reference product. Natural healed arm damage does not automatically disqualify a whole animal; document the actual state. No assertion of ready-to-eat safety, legality, zero bycatch or sustainability follows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.wild-raw-whole-chilled-unbaited-pot-common-octopus` |
| classification_refs | cpc:3.0:04471; narrower |
| covered_products | Raw whole chilled common octopus at first harvester recipient acceptance |
| excluded_products | Other species/routes/states listed in section1; post-recipient processing |
| representative_product | Wild raw whole ungutted chilled O. vulgaris sensu stricto |
| production_route | capture; prepare; sort; chill; present; handover; actual support only; responsibility map, not a mandatory chronology |
| market_state | Raw whole chilled never-frozen first-handover product; not ready-to-eat certification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Raw whole chilled common octopus at first harvester recipient acceptance |
| How much | 1 kg net drained animal wet mass |
| How well | Species, whole ungutted state, actual chilled history and acceptance are documented; no deliberate weight-gain treatment |
| How long or cycle | Actual trip/lot and full reporting period; include prechill, holding/transport, gear provision/repair/loss/termination phases and carryover |
| reference_flow_link | `octopus_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw whole chilled common octopus at first harvester recipient acceptance |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species sensu stricto identification; capture area and dates; wild provenance; unbaited earthenware shelter-pot gear; trip/lot/period; whole ungutted state and natural arm damage; actual prechill/chill temperature-time and never-frozen history; absence of weight-gain/tenderization treatment; drained net mass/tare method; recipient physical gate/time; service/resource responsibility; stocks and shared-asset attribution |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the same physically accepted lot on calibrated scales after a documented repeatable drainage procedure, subtracting actual container tare, ice and free water. Retain native animal viscera/attached arms; document natural healed damage. Do not infer net mass from sale price/count or force a perfect-eight-arm mass. |
| mass_energy | all inventory rows | Mass and energy as declared per row | kg; kWh | Retain original units and conversion evidence; g/1000 and t×1000 yield kg, kWh×3.6 yields MJ when needed. Never convert bulk water to pollutant mass or service units to kg without independent evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild natural habitat and actual shelter-pot capture, not purchased or farmed octopus |
| starting_condition_role | Declared foreground capture boundary, with upstream resources/assets recursively supplied |
| product_classification_scope | cpc:3.0:04471; narrower |
| recursive_input_rule | No purchased same-category animal enters the selected reference. Separate such lots and use compatible upstream methodology; internal same-lot transfers carry existing burden once, never repeat capture. |
| upstream_dataset_requirement | Use compatible supplier/site/period/geography technology datasets for actual fuels, electricity, ice, water, materials, assets and inclusive services; disclose gaps |
| disclosure | Actual trip/lot/state/gate, full-period ledgers, stocks/losses, direct/provider ownership, intended outputs, service-life evidence and attribution |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| exclusive_resource_events | all nodes | Partition each physical supply/use event into exactly one compatible resource card: named fishery ice, water, containers, shared assets, supplier-inclusive services or remaining fuels/consumables. Generic consumables do not duplicate named supplies. Separate an asset/container physical custody movement from its once-only service/provision burden; actual inward empty-container returns are receipts in containers_in, while containers_at_gate records only outward handoffs. Record stock and direction without treating return movements as new purchases or co-products. |  |
| chronology | all nodes | The process map is a responsibility map, not a mandatory delay until after sorting before cooling. Actual icing/chilling may begin immediately on capture and continue through preparation/sorting/presentation/delivery. Record the chronological state, temperature-time and lot/transfer ids at each real handoff; link each early, repeated or continuing chilling event to its single actual resource-owning node and protocol, without missing or duplicating electricity, ice, water or equipment. A pre-chill label never permits an unchilled final lot. |  |
| support_instances | support | Identify each actual support instance by operation/resource owner, site, period, service/asset/treatment id, consuming node and physical incoming/outgoing state. cp_support is only the protocol for these real support instances, never a synthetic all-processes owner. Close physical same-transfer sender/receiver quantities before output attribution; attributed LCA shares cannot replace physical mass closure. Assign a different actual direct-release owner only with its documented node/protocol record. |  |
| ecological_ledger | capture | Retain species, live/dead condition, number/mass, capture/release locations and times, retention fate, gear loss and actual habitat-disturbance observations for target/incidental catches. Keep these physical/ecological records separately from attributed LCA quantities; animal removal or release is not automatically a verified elementary biomass exchange. Use a separately justified concrete model for any such exchange, not a fake UUID, zero-bycatch assertion or sustainability/avoided-production credit. |  |
| capture_context | capture | Start with wild animals in their natural eastern Atlantic/Mediterranean habitat and actual unbaited unglazed-earthenware shelter-pot operations; include deployment, soak/retrieval, outbound/return, unsuccessful/support trips and actual lost gear. Wild growth is not farm production. Select species sensu stricto from traceable identification, not worldwide species-complex labels. | fao-traps-pots; ipma-polqual-2017; fao-cephalopods-vol3 |
| selected_chilled_state | chill | The chilled never-frozen subroute is this PCR selection, not a claim about all Portuguese landings. Require actual icing/cooling, elapsed prechill and temperature/time records through acceptance; unchilled, live-reference, frozen, thawed, gutted or tenderized lots fail selection. Codex gives guidance, while the IPMA source samples were not chilled. | ipma-polqual-2017; codex-fish-2012 |
| operation_owner | all nodes | Direct foreground operation is operation/resource responsibility, including leased or contracted equipment where actual resources are foreground-controlled; it is not legal title. Model supplier-inclusive service once at support_service and exclude duplicate direct resources/emissions/assets. Document provider versus foreground responsibility before attribution. |  |
| physical_first | all nodes | First retain complete physical trip/lot/event/period ledgers and unique resource owners, then attribute to actual intended output using section 7. Keep whole-fleet zero-output periods, carryover stocks, gear provision/repair/replacement/end-of-use and idle/support-return events; do not omit them because accepted output is zero. Transfer inherited burdens once. |  |
| water_residual_owner | all nodes | Pair each real internal usable-water and contained-waste transfer by source/destination/transfer id before allocation. Only actual natural-to-foreground abstraction is elementary uptake; same-node circulation and stock movement are subledgers. The actual direct release or external final-treatment handoff has one owner. Split wastewater bulk from substance masses; no implicit recycling/rework or duplicate purchase. |  |
| gate | handover | Include actual harvester transport and continuing chill before first recipient physical acceptance; record place/time, net animal mass and ownership of each pre-gate event. Exclude buyer processing, gutting, tenderization, downstream distribution, cooking and use. This LCA gate is not a food-safety, legality or sustainability certificate. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Unbaited shelter-pot capture | required | Selected route; record actual resources only | Seabed deployment, soak, retrieval and vessel trips, including zero-catch trips | per 1 kg reference flow |
| `prepare` | Initial whole-animal preparation | required | Selected route; record actual resources only | Remove detached foreign debris; rinse only if actually performed, without gutting or water-addition treatment | per 1 kg reference flow |
| `sort` | Destination and condition sorting | required | Selected route; record actual resources only | Identify accepted whole lots, other intended grades and rejected destinations | per 1 kg reference flow |
| `chill` | Actual icing and chilled holding | required | Selected route; record actual resources only | Own actual initial/continuing cooling of the selected whole-animal lot; record the real event chronology and chilled never-frozen handoff state | per 1 kg reference flow |
| `present` | Presentation and container preparation | required | Selected route; record actual resources only | Present chilled animals in identified containers; no change in animal mass basis | per 1 kg reference flow |
| `handover` | Harvester delivery and physical acceptance | required | Selected route; record actual resources only | Include actual pre-acceptance harvester shore movement and continuing chill; end at first physical recipient acceptance | per 1 kg reference flow |
| `support` | Shared support and residual handling | required | Selected route; record actual resources only | Own actual shared assets, usable-water provision and contained residual custody/treatment, not product processing | per 1 kg reference flow |

Nodes distinguish responsibilities and measured state handoffs; they need not be separate buildings or crews. Trip/lot batches are linked to full reporting periods, cleaning/changeovers, zero-output runs and shared resources. Conditional material/service cards instantiate zero, one or multiple actual exchanges; no forced activity. Capture is independent removal, preparation is debris removal/actual rinse, sorting declares destinations, the chilling responsibility owns actual initial/continuing cooling events regardless of their real chronology, presentation protects it and handover includes pre-gate delivery without duplicating chill production.

### Process: Unbaited shelter-pot capture (`capture`)

#### Inputs

##### Product flows

###### Purchased electricity for capture (`capture_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical capture_energy record in cp_capture; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Range: Unresolved independent row-specific U_capture_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_capture_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_capture_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected whole common octopus (`collected_out`)

Record the actual same-lot net animal wet mass crossing capture to prepare, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Collected whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical collected_out record in cp_capture; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Range: Unresolved independent row-specific U_collected_out requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_collected_out
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_collected_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from capture (`capture_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from capture `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical capture_fossil_co2 record in cp_capture; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Range: Unresolved independent row-specific U_capture_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_capture_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_capture_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Initial whole-animal preparation (`prepare`)

#### Inputs

##### Product flows

###### Collected whole common octopus (`collected_in`)

Record the actual same-lot net animal wet mass crossing capture to prepare, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Collected whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical collected_in record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Range: Unresolved independent row-specific U_collected_in requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_collected_in
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_collected_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased electricity for prepare (`prepare_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical prepare_energy record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Range: Unresolved independent row-specific U_prepare_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_prepare_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_prepare_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared whole common octopus (`prepared_out`)

Record the actual same-lot net animal wet mass crossing prepare to sort, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Prepared whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical prepared_out record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Range: Unresolved independent row-specific U_prepared_out requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_prepared_out
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_prepared_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from prepare (`prepare_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from prepare `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical prepare_fossil_co2 record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Range: Unresolved independent row-specific U_prepare_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_prepare_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_prepare_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Destination and condition sorting (`sort`)

#### Inputs

##### Product flows

###### Prepared whole common octopus (`prepared_in`)

Record the actual same-lot net animal wet mass crossing prepare to sort, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Prepared whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical prepared_in record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sort`
- Range: Unresolved independent row-specific U_prepared_in requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_prepared_in
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_prepared_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased electricity for sort (`sort_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical sort_energy record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sort`
- Range: Unresolved independent row-specific U_sort_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_sort_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_sort_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted whole common octopus for chilling (`accepted_out`)

Record the actual same-lot net animal wet mass crossing sort to chill, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Accepted whole common octopus for chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical accepted_out record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sort`
- Range: Unresolved independent row-specific U_accepted_out requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_accepted_out
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_accepted_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from sort (`sort_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from sort `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical sort_fossil_co2 record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sort`
- Range: Unresolved independent row-specific U_sort_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_sort_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_sort_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Actual icing and chilled holding (`chill`)

#### Inputs

##### Product flows

###### Accepted whole common octopus for chilling (`accepted_in`)

Record the actual same-lot net animal wet mass crossing sort to chill, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Accepted whole common octopus for chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical accepted_in record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill`
- Range: Unresolved independent row-specific U_accepted_in requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_accepted_in
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_accepted_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased electricity for chill (`chill_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical chill_energy record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill`
- Range: Unresolved independent row-specific U_chill_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_chill_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_chill_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased ice for marine fishery chilling (`purchased_fishery_ice`)

Only actual externally purchased ice specifically supplied for fishery chilling of this selected marine octopus lot before landing/first physical acceptance. Record invoice, supplier, ice mass, water quality and use event. Site-produced ice belongs to support_water_out plus its actual production resources, never another purchased ice input; ice is excluded from reference animal mass.

- Selected flow: Purchased ice for marine fishery chilling `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical purchased_fishery_ice record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill`
- Sources: `codex-fish-2012`
- Range: Unresolved independent row-specific U_purchased_fishery_ice requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_purchased_fishery_ice
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_purchased_fishery_ice from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actually chilled whole common octopus (`chilled_out`)

Record the actual same-lot net animal wet mass crossing chill to present, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Actually chilled whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical chilled_out record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill`
- Range: Unresolved independent row-specific U_chilled_out requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_chilled_out
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_chilled_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from chill (`chill_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from chill `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical chill_fossil_co2 record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chill`
- Range: Unresolved independent row-specific U_chill_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_chill_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_chill_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Presentation and container preparation (`present`)

#### Inputs

##### Product flows

###### Actually chilled whole common octopus (`chilled_in`)

Record the actual same-lot net animal wet mass crossing chill to present, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Actually chilled whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical chilled_in record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present`
- Range: Unresolved independent row-specific U_chilled_in requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_chilled_in
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_chilled_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased electricity for present (`present_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical present_energy record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present`
- Range: Unresolved independent row-specific U_present_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_present_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Presented chilled whole common octopus (`presented_out`)

Record the actual same-lot net animal wet mass crossing present to handover, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Presented chilled whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical presented_out record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present`
- Range: Unresolved independent row-specific U_presented_out requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_presented_out
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_presented_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from present (`present_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from present `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical present_fossil_co2 record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present`
- Range: Unresolved independent row-specific U_present_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_present_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Harvester delivery and physical acceptance (`handover`)

#### Inputs

##### Product flows

###### Presented chilled whole common octopus (`presented_in`)

Record the actual same-lot net animal wet mass crossing present to handover, with one transfer id, measured state, time and sender/receiver reconciliation. This is an internal product transfer, not a new purchase, environmental removal or another final sale. Carry inherited burdens once; do not force the feed to 1 kg.

- Selected flow: Presented chilled whole common octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the physical presented_in record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Unresolved independent row-specific U_presented_in requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_presented_in
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_presented_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased electricity for handover (`handover_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical handover_energy record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Unresolved independent row-specific U_handover_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_handover_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_handover_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw whole chilled common octopus at first harvester recipient acceptance (`octopus_handover`)

Only physically accepted, raw, whole ungutted Octopus vulgaris sensu stricto from the declared unbaited earthenware-pot route, actually chilled and never frozen. Net drained animal wet mass includes head, mantle, viscera and attached arms, with naturally healed arm damage recorded; excludes containers, ice, free water and removable external debris. The first physical recipient acceptance is the gate, not payment or invoice.

- Selected flow: Raw whole chilled common octopus at first harvester recipient acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Reference normalization identity, not an empirical yield range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from handover (`handover_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from handover `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical handover_fossil_co2 record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Unresolved independent row-specific U_handover_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_handover_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_handover_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Shared support and residual handling (`support`)

#### Inputs

##### Product flows

###### Purchased electricity for support (`support_energy`)

Only actual electricity delivered to directly operated equipment in this node. Identify supplier/grid, place, period and meter; split distinct supplies and exclude electricity embedded in supplier-inclusive services. Retain kWh; no generic geographic substitution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure the physical support_energy record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Range: Unresolved independent row-specific U_support_energy requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_support_energy
  - Unit: kWh
  - Basis: per 1 kg reference flow; establish U_support_energy from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from support (`support_fossil_co2`)

Only actual fossil CO2 emitted from direct foreground combustion in this node, in kg CO2 to unspecified air. Record fuel carbon and fossil fraction or measured emissions; exclude biogenic carbon, animal respiration, upstream electricity and provider-inclusive exhaust.

- Selected flow: Direct fossil carbon dioxide from support `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Measure the physical support_fossil_co2 record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Range: Unresolved independent row-specific U_support_fossil_co2 requirement; approve before any use
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_support_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; establish U_support_fossil_co2 from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | all nodes | Prefer actual subdivision of independently metered events/nodes and outputs. Keep full physical amounts separately from output-attributed LCA quantities. For shared unavoidable events, document the causal driver and all intended output shares before normalization; never apply animal yield to erase unsuccessful trips or ecological records. |  |
| output_decision | other_intended_grades; support_recovered_material | Enumerate actual independently intended outputs, grade destinations and handoffs, then justify physical causal attribution. If no defensible physical relationship exists, use documented economic attribution only as a disclosed fallback with consistent actual period/grade prices and sensitivity. No default method, price, allocation fraction or substitution credit is specified. Residue/reject/dead-waste/release are not products by default. |  |
| period_asset | support_shared_assets | Index actual manufacture/provision, deployment, repair, idle, replacement/loss and termination phases and consuming nodes/periods. Attribute documented service over an evidenced lifetime/service denominator, reconcile cumulative shares to one and carry unused stocks forward. No default pot lifetime, trip count or annual catch. Missing termination/replacement or full-period evidence blocks finalization. |  |
| normalize | all inventory rows | Normalize the justified output-attributed amount of each row by the accepted net wet mass of that same selected lot/period, producing per 1 kg reference flow. Do not normalize zero-output periods in isolation; retain and carry their evidenced burden to the justified reporting output or disclose an unresolved attribution. Internal product transfers retain their actual masses and inherited burden once, not 1 kg each. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | Unbaited shelter-pot capture | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual capture operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |
| `cp_prepare` | `prepare` | Initial whole-animal preparation | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual prepare operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |
| `cp_sort` | `sort` | Destination and condition sorting | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual sort operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |
| `cp_chill` | `chill` | Actual icing and chilled holding | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual chill operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |
| `cp_present` | `present` | Presentation and container preparation | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual present operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |
| `cp_handover` | `handover` | Harvester delivery and physical acceptance | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual handover operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |
| `cp_support` | `support` | Shared support and residual handling | Primary physical ledger and attributable dataset ledger | trip/lot/event/period; row/substance/material; source/recipient; species/state; gross/tare/drain/net mass; unit; meter; time/temperature; owner; support instance/site/period/service-or-asset id and consuming node; transfer id; stock opening/closing; intended output; allocation driver/share; independent U evidence | Use calibrated scales/meters, dated trip/gear/chilling/acceptance logs, invoices and provider primary records for this node only. Identify actual direct versus inclusive responsibility; pair transfers and reconcile raw physical stocks before attribution. At handover weigh accepted drained net animals; retain natural arm condition. | kg; kWh; native service unit | Each event/lot and complete period, including zero output and cleaning | Full declared period plus evidenced shared-asset service phases/carryover | Actual support operation and identified supplier handoffs | per 1 kg reference flow | Scale/meter calibration; original dated logs; paired transfer receipts; chill/never-frozen history; stock reconciliation; provider scope; allocation and independent-U approvals |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_balance | all inventory rows | Reconcile opening stock + actual incoming = actual outgoing + closing stock for each material/state/node/period, with measured transformations and separately recorded natural gain/loss where relevant; do not force equality by adding a fictitious flow. | Opening/closing stocks; actual transfers; measured transformations | Reconciled raw physical ledgers |  |
| attributed_normalization | all inventory rows | For each physically owned row apply the documented section 7 intended-output share once; divide by actual accepted net animal wet mass of the selected reporting output. Retain full physical ledger and zero-output carryover separately; final reference is 1 kg, not every internal transfer. | Physical row amount; justified attribution share; accepted net animal wet mass; cp_handover | per 1 kg reference flow |  |
| direct_emission | direct elementary outputs | Use measured substance mass or documented fuel/material inventory × independently evidenced substance-specific factor with compatible fossil fraction and receiving compartment; no factor is supplied by this PCR. | Measured substances or actual inventory/factor evidence; actual owner | Individual substance mass in actual compartment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference product | Species sensu stricto, wild gear route, raw whole ungutted state and physical gate; actual never-frozen chill history | Identification/catch/gear/chill/recipient logs |
| completeness | all nodes | Full period, all intended outputs and zero-output events, assets/stock/carryover and owner-linked water/residual/animal transfers | Primary ledgers and reconciliation with attribution decisions |
| measurement | all inventory rows | Row-specific units, calibrated raw measurements, provider scope and independent U approval; no invented amounts or generic pollutant identity | Calibration/raw measurements, source/factor support and prior independent guardrail evidence |
| limits | all inventory rows | Disclose unresolved flow/support identities, U values, attribution or missing raw data; resolve concrete exchanges before final TIDAS projection | Explicit data-package gap and sensitivity records |
| `collect_capture_materials_fuels` | `capture`; Inputs; Product flows: Actual fuels and consumable materials for capture | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical capture_materials_fuels record in cp_capture; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_capture_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_capture_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_capture_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_residual_to_support` | `capture`; Outputs; Waste flows: Contained residuals sent from capture to support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual contained residues crossing this node to support: separate rejected animals, detached debris, soiled materials and collected liquids by composition, mass, container, destination and transfer id. Pair with support_residual_in by the same transfer record. No transfer exists for a release made directly by this node; that release belongs to its own elementary output. Waste is not automatically rework or an intended product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical capture_residual_to_support record in cp_capture; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_capture_residual_to_support requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_capture_residual_to_support Unit: kg Basis: per 1 kg reference flow; establish U_capture_residual_to_support from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_other_direct_releases` | `capture`; Outputs; Elementary flows: Other independently identified direct releases from capture | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical capture_other_direct_releases record in cp_capture; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_capture_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_capture_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_capture_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_prepare_materials_fuels` | `prepare`; Inputs; Product flows: Actual fuels and consumable materials for prepare | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical prepare_materials_fuels record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_prepare_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_prepare_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_prepare_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_usable_water_in` | `prepare`; Inputs; Product flows: Usable water transferred to prepare | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual usable water transferred from support or another named water-using node to this node, separated by source, water quality and physical state. Pair with the actual sender support_water_out or usable_water_out using sender, receiver, transfer id, mass and period; no second purchased-water or natural-withdrawal burden. This permits actual hygiene/rinse or coolant handling, never soaking or intentional absorbed-water gain. Water remaining within this node has no new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical prepare_usable_water_in record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_prepare_usable_water_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_prepare_usable_water_in Unit: kg Basis: per 1 kg reference flow; establish U_prepare_usable_water_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_usable_water_out` | `prepare`; Outputs; Product flows: Actual usable water transferred from prepare | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only real usable-water handoffs to another named water-using node or support, with source quality/state and actual sender/receiver/time/mass/stock responsibility. Pair to the receiving usable_water_in or support_water_return_in record by transfer id. Do not recategorize wastewater as usable water, invent a central support transit, or treat same-node circulation/stock movement as a new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical prepare_usable_water_out record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_prepare_usable_water_out requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_prepare_usable_water_out Unit: kg Basis: per 1 kg reference flow; establish U_prepare_usable_water_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_residual_to_support` | `prepare`; Outputs; Waste flows: Contained residuals sent from prepare to support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual contained residues crossing this node to support: separate rejected animals, detached debris, soiled materials and collected liquids by composition, mass, container, destination and transfer id. Pair with support_residual_in by the same transfer record. No transfer exists for a release made directly by this node; that release belongs to its own elementary output. Waste is not automatically rework or an intended product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical prepare_residual_to_support record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_prepare_residual_to_support requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_prepare_residual_to_support Unit: kg Basis: per 1 kg reference flow; establish U_prepare_residual_to_support from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_prepare_other_direct_releases` | `prepare`; Outputs; Elementary flows: Other independently identified direct releases from prepare | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical prepare_other_direct_releases record in cp_prepare; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_prepare` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_prepare_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_prepare_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_prepare_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_prepare`;  |
| `collect_sort_materials_fuels` | `sort`; Inputs; Product flows: Actual fuels and consumable materials for sort | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical sort_materials_fuels record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_sort_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_sort_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_sort_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_other_intended_grades` | `sort`; Outputs; Product flows: Other independently intended whole-animal grades | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actually intended grade/product and its distinct recipient handoff, species, condition, mass and attribution decision. A grade remaining in the selected final lot is not a second product; rejects, discarded catch and dead waste are not co-products merely because they have mass. Other species require their own compatible methodology. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical other_intended_grades record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_other_intended_grades requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_other_intended_grades Unit: kg Basis: per 1 kg reference flow; establish U_other_intended_grades from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_sort_residual_to_support` | `sort`; Outputs; Waste flows: Contained residuals sent from sort to support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual contained residues crossing this node to support: separate rejected animals, detached debris, soiled materials and collected liquids by composition, mass, container, destination and transfer id. Pair with support_residual_in by the same transfer record. No transfer exists for a release made directly by this node; that release belongs to its own elementary output. Waste is not automatically rework or an intended product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical sort_residual_to_support record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_sort_residual_to_support requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_sort_residual_to_support Unit: kg Basis: per 1 kg reference flow; establish U_sort_residual_to_support from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_sort_other_direct_releases` | `sort`; Outputs; Elementary flows: Other independently identified direct releases from sort | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical sort_other_direct_releases record in cp_sort; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_sort_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_sort_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_sort_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_chill_materials_fuels` | `chill`; Inputs; Product flows: Actual fuels and consumable materials for chill | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical chill_materials_fuels record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_chill` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_chill_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_chill_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_chill_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`;  |
| `collect_chill_usable_water_in` | `chill`; Inputs; Product flows: Usable water transferred to chill | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual usable water transferred from support or another named water-using node to this node, separated by source, water quality and physical state. Pair with the actual sender support_water_out or usable_water_out using sender, receiver, transfer id, mass and period; no second purchased-water or natural-withdrawal burden. This permits actual hygiene/rinse or coolant handling, never soaking or intentional absorbed-water gain. Water remaining within this node has no new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical chill_usable_water_in record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_chill` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_chill_usable_water_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_chill_usable_water_in Unit: kg Basis: per 1 kg reference flow; establish U_chill_usable_water_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`;  |
| `collect_chill_usable_water_out` | `chill`; Outputs; Product flows: Actual usable water transferred from chill | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only real usable-water handoffs to another named water-using node or support, with source quality/state and actual sender/receiver/time/mass/stock responsibility. Pair to the receiving usable_water_in or support_water_return_in record by transfer id. Do not recategorize wastewater as usable water, invent a central support transit, or treat same-node circulation/stock movement as a new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical chill_usable_water_out record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_chill` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_chill_usable_water_out requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_chill_usable_water_out Unit: kg Basis: per 1 kg reference flow; establish U_chill_usable_water_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`;  |
| `collect_chill_residual_to_support` | `chill`; Outputs; Waste flows: Contained residuals sent from chill to support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual contained residues crossing this node to support: separate rejected animals, detached debris, soiled materials and collected liquids by composition, mass, container, destination and transfer id. Pair with support_residual_in by the same transfer record. No transfer exists for a release made directly by this node; that release belongs to its own elementary output. Waste is not automatically rework or an intended product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical chill_residual_to_support record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_chill` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_chill_residual_to_support requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_chill_residual_to_support Unit: kg Basis: per 1 kg reference flow; establish U_chill_residual_to_support from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`;  |
| `collect_chill_other_direct_releases` | `chill`; Outputs; Elementary flows: Other independently identified direct releases from chill | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical chill_other_direct_releases record in cp_chill; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_chill` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_chill_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_chill_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_chill_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`;  |
| `collect_present_materials_fuels` | `present`; Inputs; Product flows: Actual fuels and consumable materials for present | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical present_materials_fuels record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_present_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_present_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_present_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_present_usable_water_in` | `present`; Inputs; Product flows: Usable water transferred to present | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual usable water transferred from support or another named water-using node to this node, separated by source, water quality and physical state. Pair with the actual sender support_water_out or usable_water_out using sender, receiver, transfer id, mass and period; no second purchased-water or natural-withdrawal burden. This permits actual hygiene/rinse or coolant handling, never soaking or intentional absorbed-water gain. Water remaining within this node has no new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical present_usable_water_in record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_present_usable_water_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_present_usable_water_in Unit: kg Basis: per 1 kg reference flow; establish U_present_usable_water_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_containers_in` | `present`; Inputs; Product flows: Actual containers and presentation materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Specify actual crates, boxes, liners and labels, tare masses and one-way/reusable status. Attribute reusable container provision by measured service and actual replacement/loss history without assuming one container is consumed per lot. Keep animal net mass separate. Supplier rental-inclusive containers are not bought again. Record actual inward empty-container returns here as separately identified physical receipts, not another provision burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical containers_in record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_containers_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_containers_in Unit: kg Basis: per 1 kg reference flow; establish U_containers_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_present_usable_water_out` | `present`; Outputs; Product flows: Actual usable water transferred from present | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only real usable-water handoffs to another named water-using node or support, with source quality/state and actual sender/receiver/time/mass/stock responsibility. Pair to the receiving usable_water_in or support_water_return_in record by transfer id. Do not recategorize wastewater as usable water, invent a central support transit, or treat same-node circulation/stock movement as a new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical present_usable_water_out record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_present_usable_water_out requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_present_usable_water_out Unit: kg Basis: per 1 kg reference flow; establish U_present_usable_water_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_present_residual_to_support` | `present`; Outputs; Waste flows: Contained residuals sent from present to support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual contained residues crossing this node to support: separate rejected animals, detached debris, soiled materials and collected liquids by composition, mass, container, destination and transfer id. Pair with support_residual_in by the same transfer record. No transfer exists for a release made directly by this node; that release belongs to its own elementary output. Waste is not automatically rework or an intended product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical present_residual_to_support record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_present_residual_to_support requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_present_residual_to_support Unit: kg Basis: per 1 kg reference flow; establish U_present_residual_to_support from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_present_other_direct_releases` | `present`; Outputs; Elementary flows: Other independently identified direct releases from present | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical present_other_direct_releases record in cp_present; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_present` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_present_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_present_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_present_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_present`;  |
| `collect_handover_materials_fuels` | `handover`; Inputs; Product flows: Actual fuels and consumable materials for handover | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical handover_materials_fuels record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_handover` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_handover_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_handover_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_handover_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_handover`;  |
| `collect_handover_usable_water_in` | `handover`; Inputs; Product flows: Usable water transferred to handover | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual usable water transferred from support or another named water-using node to this node, separated by source, water quality and physical state. Pair with the actual sender support_water_out or usable_water_out using sender, receiver, transfer id, mass and period; no second purchased-water or natural-withdrawal burden. This permits actual hygiene/rinse or coolant handling, never soaking or intentional absorbed-water gain. Water remaining within this node has no new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical handover_usable_water_in record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_handover` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_handover_usable_water_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_handover_usable_water_in Unit: kg Basis: per 1 kg reference flow; establish U_handover_usable_water_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_handover`;  |
| `collect_handover_usable_water_out` | `handover`; Outputs; Product flows: Actual usable water transferred from handover | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only real usable-water handoffs to another named water-using node or support, with source quality/state and actual sender/receiver/time/mass/stock responsibility. Pair to the receiving usable_water_in or support_water_return_in record by transfer id. Do not recategorize wastewater as usable water, invent a central support transit, or treat same-node circulation/stock movement as a new boundary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical handover_usable_water_out record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_handover` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_handover_usable_water_out requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_handover_usable_water_out Unit: kg Basis: per 1 kg reference flow; establish U_handover_usable_water_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_handover`;  |
| `collect_containers_at_gate` | `handover`; Outputs; Product flows: Presentation materials and reusable container custody at gate | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record only outward packaging leaving with accepted product or empty-container handoffs leaving the foreground; link retained stocks separately with the same container ids as containers_in. Actual inward returns are containers_in receipts, not outputs here. This is not an animal co-product or a second embodied-container supply burden; record later recipient treatment only outside this gate, unless the container physically returns within the declared service period. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical containers_at_gate record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_handover` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_containers_at_gate requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_containers_at_gate Unit: kg Basis: per 1 kg reference flow; establish U_containers_at_gate from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_handover`;  |
| `collect_handover_residual_to_support` | `handover`; Outputs; Waste flows: Contained residuals sent from handover to support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual contained residues crossing this node to support: separate rejected animals, detached debris, soiled materials and collected liquids by composition, mass, container, destination and transfer id. Pair with support_residual_in by the same transfer record. No transfer exists for a release made directly by this node; that release belongs to its own elementary output. Waste is not automatically rework or an intended product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical handover_residual_to_support record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_handover` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_handover_residual_to_support requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_handover_residual_to_support Unit: kg Basis: per 1 kg reference flow; establish U_handover_residual_to_support from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_handover`;  |
| `collect_handover_other_direct_releases` | `handover`; Outputs; Elementary flows: Other independently identified direct releases from handover | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical handover_other_direct_releases record in cp_handover; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_handover` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_handover_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_handover_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_handover_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_handover`;  |
| `collect_support_water_return_in` | `support`; Inputs; Product flows: Actual usable water received from another foreground node | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only an actual usable-water return or handoff to a real support instance; pair the source usable_water_out row by sender/receiver/transfer id/state/mass/time. Preserve stock responsibility and measured treatment requirements. Not a purchase, natural withdrawal, waste receipt or automatic clean-water recovery. No support receipt is required for direct handoffs between other nodes. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_water_return_in record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_water_return_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_water_return_in Unit: kg Basis: per 1 kg reference flow; establish U_support_water_return_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_water_purchase` | `support`; Inputs; Product flows: Externally supplied water for actual use | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each purchased water supply with source, quality and measured mass for actual hygiene, rinsing or ice production. Exclude natural abstraction recorded separately; provider-inclusive treatment burdens occur only in its dataset. Keep water stocks and internal transfers distinct; do not use an industrial-process-water proxy automatically. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_water_purchase record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_water_purchase requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_water_purchase Unit: kg Basis: per 1 kg reference flow; establish U_support_water_purchase from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_shared_assets` | `support`; Inputs; Product flows: Actual shelter gear, vessel and shared asset provision | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Itemize unglazed earthenware shelter pots, ropes, buoys, vessel and actual chilling/storage equipment with material mass, service dates, repairs, losses and decommissioning. Baited traps, PVC shelters and tyres are outside this route. Link every consuming node/period and the evidenced allocation share; vessel propulsion fuel is recorded at its actual operating node, not embodied in a second asset quantity. No default lifetime or assumed replacement per catch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_shared_assets record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_shared_assets requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_shared_assets Unit: kg Basis: per 1 kg reference flow; establish U_support_shared_assets from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_service` | `support`; Inputs; Product flows: Actual supplier-inclusive support and logistics services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual supplied service, its provider, geographic/technical scope, native measured unit and included resources; obtain compatible property/unit support before final exchange generation. Attribute the inclusive upstream dataset once. Exclude duplicate fuel, electricity, exhaust and capital for the same service. Direct foreground operation means operation/resource responsibility, not legal asset ownership. Flow property / unit: Provider-defined property / native service unit; Amount rule: Measure the physical support_service record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_service requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_service Unit: native service unit Basis: per 1 kg reference flow; establish U_support_service from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_materials_fuels` | `support`; Inputs; Product flows: Actual fuels and consumable materials for support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual material or fuel by substance, specification, supplier, state and mass. Include direct operational fuels, oils, cleaning agents and minor consumables only where used; record fuel blend and fossil share. No bait is permitted, and no feed, tenderizing or weight-increasing chemical is an allowed animal treatment. Do not duplicate shared support assets or provider-inclusive inputs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_materials_fuels record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_materials_fuels requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_materials_fuels Unit: kg Basis: per 1 kg reference flow; establish U_support_materials_fuels from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_residual_in` | `support`; Inputs; Waste flows: Contained residuals received for actual custody or treatment | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pair each actual incoming residual with exactly its originating node residual_to_support record, retaining composition, state, mass, transfer id and any carryover. Receive no fictional feed when another node releases directly. Custody is not treatment; identify the actual final treatment owner and destination once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_residual_in record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_residual_in requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_residual_in Unit: kg Basis: per 1 kg reference flow; establish U_support_residual_in from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_water_abstraction` | `support`; Inputs; Elementary flows: Actual environmental water abstraction | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only direct abstraction from the stated sea or other natural source, with source compartment, place, mass, water quality and pumping event. This is the single natural-to-foreground crossing; purchased water, previously abstracted ice and recirculated water are not new uptake. Record the associated pumping resources once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_water_abstraction record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_water_abstraction requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_water_abstraction Unit: kg Basis: per 1 kg reference flow; establish U_support_water_abstraction from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_water_out` | `support`; Outputs; Product flows: Usable water or site-produced ice supplied internally | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual delivery of usable liquid water or site-produced ice to prepare, chill, present or handover; distinguish state and destination and pair its corresponding usable_water_in card. Match melting/stock conversions physically; never send the same quantity to all nodes by default. Site-produced ice is not purchased_fishery_ice. Own-node circulation or stored water movement is subledger only. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_water_out record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_water_out requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_water_out Unit: kg Basis: per 1 kg reference flow; establish U_support_water_out from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_recovered_material` | `support`; Outputs; Product flows: Actual independently intended recovered material | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only material actually recovered by directly operated treatment and independently intended for a specified recipient/use, with measured composition and mass. Do not assume recycling merely from waste dispatch; if this occurs disclose the attribution decision and exclude automatic avoided-burden credit. Actual treatment direct releases belong to support_other_direct_releases and support_fossil_co2. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_recovered_material record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_recovered_material requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_recovered_material Unit: kg Basis: per 1 kg reference flow; establish U_support_recovered_material from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_external_waste` | `support`; Outputs; Waste flows: Actual residuals sent to external treatment | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Separate solid waste, rejected animals, used oils, containers and collected wastewater by actual destination and receiving provider. Record bulk wastewater independently from pollutant masses. Supplier-inclusive treatment datasets cover their own treatment emissions; do not also model those emissions here. Internal stocks/custody changes are not final disposal and never carry automatic substitution credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_external_waste record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_external_waste requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_external_waste Unit: kg Basis: per 1 kg reference flow; establish U_support_external_waste from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `collect_support_other_direct_releases` | `support`; Outputs; Elementary flows: Other independently identified direct releases from support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual directly released substance, particle-size class or refrigerant and receiving air/water/soil compartment; pollutant mass is not wastewater bulk or total exhaust mass. Include actual fuel exhaust other than fossil CO2, leaks, washing/chilling water discharges, free water leaving animals and waste-treatment emissions only if this node owns that direct release. Same-node water circulation is a subledger, not a new withdrawal. Do not invent zeroes or a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measure the physical support_other_direct_releases record in cp_support; retain the complete event/period ledger and documented output-attributed share separately, then divide that attributed amount by the same accepted net animal wet mass to obtain per 1 kg reference flow. Use actual independently identified exchanges; not an assumed value.; Value mode: `calculated_value`; Specificity: `site_specific`; Normalization basis: per 1 kg reference flow; Basis kind: `reference_flow`; Evidence kind: `calculated_from_collection`; Collection protocol: `cp_support` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved independent row-specific U_support_other_direct_releases requirement; approve before any use Range role: `qa_guardrail` Lower: 0 Upper: U_support_other_direct_releases Unit: kg Basis: per 1 kg reference flow; establish U_support_other_direct_releases from independent prior/site-capacity evidence, never the checked batch maximum; not a numerical default Basis kind: `reference_flow` Evidence kind: `reasoned_estimate` | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_support`;  |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| instantiated_ranges | all inventory rows | For every umbrella card instantiated as multiple actual exchanges, assign a distinct instance id, substance/material, state, property/unit, destination/receiving compartment, collection evidence and independently justified U to each exchange. The parent row-specific U label is an unresolved template only, neither a shared bound for all instances nor an aggregate upper limit. Never apply one instance's evidence or U to another without independently justified compatibility. |  |
| selection | reference product | Require traceable O. vulgaris sensu stricto, eastern Atlantic/Mediterranean location, wild unbaited earthenware-pot capture, raw whole ungutted presentation, actual chilled never-frozen history and first physical recipient acceptance. Reject other species-complex members, baited traps/PVC/tyres, aquaculture, deliberate arm cutting, beating/tumbling, soaking/additives, frozen/thawed, gutted or live-reference lots. |  |
| ledgers | all inventory rows | Reconcile physical animals through capture, prepare, sort, chill, present and handover with retained/rejected/released/stock fates, natural arm damage and actual moisture changes. Animal feed mass is not every node output1; exclude ice/free water/tare from reference mass. Independently reconcile water/ice, containers, fuel and residues, actual owner and stock carryover before allocation. |  |
| provisional_limits | all inventory rows | Each nonfinal Range is an unresolved row-specific U requirement, not a measured bound, typical value or permission to substitute a number. Establish and approve U from independent prior/source/capacity evidence before use; the same batch maximum cannot validate itself. Use actual records and investigate departures; absence of U, missing flow identity/support or missing process records remains a disclosed gap. |  |
| ownership | all nodes | Check single-node protocols, all zero-output/run/changeover periods, complete intended outputs and attribution shares, shared infrastructure consumers/life phases, paired usable-water/residual transfers and exactly one direct release/treatment owner. An absent activity needs explicit evidence, not an invented zero. A structural check does not verify external identities or food safety. |  |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground capture/first-handover data package projected to process/lifecyclemodel only after actual concrete exchange verification |
| allowed_use | Compatible selected species/gear/state/region/period/gate studies with disclosed actual evidence |
| excluded_use | All-leaf or worldwide species-complex proxy, baited/farmed/frozen/processed/live routes, consumer safety/legal/sustainability claims |
| required_metadata | All reference qualifiers, node/provider responsibility, full periods, intended-output shares and asset/stock boundaries |
| required_quality_disclosure | Original measurements, representativeness, attribution sensitivity, unresolved UUID/support/U/data gaps; no fabricated defaults |
| update_trigger | Changed species/route/state/gate, source knowledge, provider/grid, asset service or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-cephalopods-vol3 | official_guidance | FAO, Cephalopods of the World, vol3, printed p41; https://www.fao.org/4/i3489e/i3489e.pdf | Qualitative O. vulgaris sensu stricto taxonomic and Mediterranean/central-northeast Atlantic distribution boundary only; no worldwide species-complex equivalence or numerical inventory factors |
| fao-traps-pots | handbook | FAO, Fishing with traps and pots, Octopus squid and cuttlefish pots and traps; https://www.fao.org/4/x2590e/x2590e07.htm | Unbaited earthenware shelter-pot capture distinction; no numerical gear use, soak time or impact factor |
| ipma-polqual-2017 | official_guidance | IPMA, POLQUAL report RCT-IPMA-SD-16, 2017, printed pp16–18; https://www.ipma.pt/export/sites/ipma/bin/docs/publicacoes/ipma/rct-ipma-sd-16.pdf | Portuguese common-octopus shelter pots versus baited traps. Its short-trip first-sale samples were not chilled; it is NOT evidence of iced lots or this selected handling state. |
| codex-fish-2012 | official_guidance | FAO/WHO, Code of Practice for Fish and Fishery Products, 2012, section15, printed pp202/204; https://www.fao.org/4/i2382e/i2382e.pdf | Qualitative fresh-cephalopod cooling/holding and contamination guidance only; no actual octopus route observation, quantitative life/ice ratio, safety or regulatory certification |
