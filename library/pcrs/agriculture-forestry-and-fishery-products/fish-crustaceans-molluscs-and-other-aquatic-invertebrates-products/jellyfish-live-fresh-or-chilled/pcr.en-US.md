---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Jellyfish, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for jellyfish placed on the market as live, fresh, or chilled product. It covers declared harvesting or collection, onboard sorting, draining where performed, live holding or chilled holding, landing, grading, washing where performed, packaging, icing or temperature control, dispatch, and release at the declared gate.

Covered products include edible or industrial jellyfish of declared species or species group when sold live, fresh, or chilled and still an unprocessed primary aquatic invertebrate product. Excluded products are live jellyfish for ornamental purpose, frozen jellyfish, smoked, dried, salted, brined, alum-cured, fermented, cooked, canned, prepared, preserved, extracted, or otherwise processed jellyfish products, and other aquatic invertebrates outside the jellyfish category.

The dataset must preserve the short-lived wet product state. If salting, alum treatment, drying, freezing, or other preservation changes the product identity, those processes belong to a different PCR or must be modelled as downstream processing outside this reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04530`, `Jellyfish, live, fresh or chilled` |
| covered_products | jellyfish harvested, collected, landed, sorted, live-held, fresh, or chilled as unprocessed primary aquatic invertebrate product |
| excluded_products | ornamental live jellyfish; frozen jellyfish; smoked, dried, salted, brined, alum-cured, fermented, cooked, canned, prepared, preserved, extracted, or otherwise processed jellyfish; non-jellyfish aquatic invertebrates; residues, trimmings, wastewater, or rejected biomass as separate products |
| representative_product | live, fresh, or chilled jellyfish at declared species or species group, harvest area, product state, wet mass basis, handling condition, packaging state, and declared gate |
| production_route | wild harvest or collection, onboard sorting or draining, landing, grading, washing where performed, live or chilled holding, packaging, icing or temperature control, and declared gate release |
| market_state | live, fresh, or chilled jellyfish with declared species, harvest area, gear or collection method, landing condition, drained or wet mass basis, product temperature or live-holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | jellyfish as live, fresh, or chilled primary product |
| How much | 1 kg |
| How well | declared species or species group, live/fresh/chilled state, wet or drained mass basis, harvest area, handling condition, packaging state, and gate |
| How long or cycle | one harvest trip, landing lot, handling lot, sales lot, or reporting period normalized to marketable jellyfish output |
| reference_flow_link | `declared_gate_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Jellyfish |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; harvest or collection area; wild harvest, collection, or declared production route; gear or collection method; landing site; live, fresh, or chilled state; wet, drained, whole, bell, oral arm, or declared product basis; moisture or drainage basis where available; holding duration and temperature or live-holding condition; packaging state; declared gate; food, feed, industrial, or other declared intended use when known; catch documentation, permit, traceability, and unresolved Tiangong UUID substitutions |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field.

Mass is the primary reference basis. Basket, tub, crate, sack, bin, count, volume, or trip records may be used only when net mass, tare, drainage method, product state, and sampling method are retained.

Before collection each dataset must fix one physical reference object: one species or an evidenced single physical commercial species-group product, one source/production route, form, actual life/preparation state, moisture/drainage basis, grade and unique gate location/time/acceptance condition. Do not combine different species, live/dead, fresh/chilled, raw/prepared states or different gates in one reference exchange; unresolved specifications make the dataset incomplete. Each stage is the measured state of that same lot and is not automatically the final 1 kg.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg jellyfish in the declared live, fresh, or chilled product form. |
| `product_state_identity` | all datasets | Product state and handling evidence | declared records | Product records must prove live, fresh, or chilled state and must not mix frozen, dried, salted, brined, alum-cured, prepared, or preserved jellyfish with the reference product. |
| `wet_drained_mass_basis` | live, fresh, chilled, washed, drained, or iced records | Mass and drainage basis | kg | Product mass must state wet whole mass, drained mass, bell mass, oral-arm mass, ice-excluded mass, or another declared basis. Convert only with measured drainage or yield evidence. |
| `catch_lot_identity` | harvest, landing, sorting, and sales records | Mass, count, or volume | kg, item, basket, tub, crate, or m3 | Catch records must retain species or species group, harvest area, gear or collection method, vessel or collector, trip, lot, landing date, accepted mass, rejected mass, and intended use where known. |
| `water_temperature_and_holding` | washing, live holding, chilled holding, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve water source, controlled water volume, salinity where relevant, temperature, holding time, drainage, and discharge basis. Ambient seawater is a boundary condition unless pumped, treated, exchanged, or discharged under foreground control. |
| `energy_fuel_and_ice_inventory` | vessel operation, landing, live holding, chilling, ice making or use, cold rooms, and dispatch | Energy, fuel, or mass | kWh, MJ, L, or kg | Record original electricity, fuel, ice, and energy carrier units before normalizing to the reference flow. |
| `packaging_basis` | baskets, tubs, crates, sacks, liners, labels, insulated containers, ice boxes, and pallets | Mass or item count | kg or item | Packaging and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled jellyfish harvest or collection to the declared landing, handling, dispatch, packhouse, or delivery gate:

1. Fishing, harvesting, or collection, including vessel or collector activity, gear operation, catch handling, bycatch or non-target material handling, and onboard draining or sorting where performed.
2. Landing, grading, washing where performed, live holding or chilled holding, drainage, rejection, residue handling, temperature control, icing, packaging, and declared gate release.
3. Delivery to the declared gate when the reference flow is delivered product beyond landing, dispatch, or packhouse gate.

Capital goods and long-lived vessels, gear, holding tanks, cold rooms, and infrastructure are included only when the declared data package scope requires them. Purchased ice, packaging, electricity, fuel, water, live-holding oxygen, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_jellyfish_harvest_or_collection_lot |
| starting_condition_role | wild_aquatic_invertebrate_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04530`, `Jellyfish, live, fresh or chilled` |
| recursive_input_rule | jellyfish harvested or collected as an input to live, fresh, or chilled market product are recorded as declared harvest or collection lots with area, gear, vessel or collector, species, product-state, and mass-basis disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | fishing or collection trip records, supplier harvest records, landing documents, permit or traceability evidence, packaging, ice, fuel, electricity, water, and delivery datasets where outside foreground control |
| disclosure | disclose species or species group, harvest or collection area, gear or collection method, vessel or collector, landing site, live/fresh/chilled state, wet or drained mass basis, sorting and rejection, washing or live-holding water, temperature or ice use, holding duration, packaging state, intended use where known, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

Actual route follows event and transfer records. The final declared-gate node owns the sole reference output and receives the actual last predecessor: bypass preparation/delivery for a landing gate, bypass delivery for a pack-out gate, and measure delivery receipt before gate acceptance for a delivered gate. Unknown actual route or gate is not a default choice.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `harvest_collection_and_landing` | Harvest, collection and landing | required | Actual source/production route is evidenced | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `sorting_holding_chilling_and_packout` | Sorting, live maintenance, chilling and pack-out | conditional | Only actual pre-gate preparation; bypass for a landing gate or absent preparation | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `delivery_to_declared_gate` | Delivery to declared gate | conditional | Only actual delivery before the chosen gate; unknown choice fails | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `declared_gate_release` | Final declared-gate acceptance and release | required | One declared gate receives the actual final predecessor; exactly one reference output | Actual event/transfer and resource ownership | per 1 kg reference flow |

### Process: Harvest, collection and landing (`harvest_collection_and_landing`)

#### Inputs

##### Product flows

###### Conditional diesel input (`source_diesel`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. This UUID establishes a mass-based diesel identity only, with no grade, provider, density, heating value or emission factor; L-to-kg conversion requires matching density evidence.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_harvest_collection_and_landing_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_collection_and_landing_records`

###### Conditional ice input (`source_ice`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_harvest_collection_and_landing_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_collection_and_landing_records`

#### Outputs

##### Product flows

###### Accepted source lot to the next actual responsibility (`accepted_landed_jellyfish`)

Record species, origin, original form/state and accepted net mass by lot; independently measure this source-stage quantity and pair the actual next receipt. A landing UUID applies only with matching unprocessed-catch/landing-quality qualifiers and cannot substitute for later preparation or final-delivery identities.

- Selected flow: Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_harvest_collection_and_landing_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_collection_and_landing_records`

##### Elementary flows

###### Actual foreground fossil CO2 to unspecified air (`source_fossil_co2`)

Include only actual direct fossil-fuel combustion to air owned by this node, using measurement or an explicitly sourced factor compatible with fuel/engine/units; retain oxidation, controls and uncertainty. Exclude animal respiration, dissolved carbon to water and supplier-covered emissions; add each other actual pollutant separately by substance/medium.

- Selected flow: Carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_harvest_collection_and_landing_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_collection_and_landing_records`


### Process: Sorting, live maintenance, chilling and pack-out (`sorting_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Source lot received for preparation (`accepted_jellyfish_entering_final_handling`)

Pair the actual upstream transfer, retaining original receipt state and independently measured mass; activate only when this pre-gate node actually occurs.

- Selected flow: Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_packout_product_state_and_mass_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packout_product_state_and_mass_records`

###### Conditional electricity input (`preparation_electricity`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this exchange’s own quantity under cp_packaging_ice_chilling_and_dispatch_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records`

###### Conditional ice input (`preparation_ice`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_packaging_ice_chilling_and_dispatch_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records`

###### Conditional oxygen input (`preparation_oxygen`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Oxygen, gaseous
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_packaging_ice_chilling_and_dispatch_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records`

#### Outputs

##### Product flows

###### Prepared product transfer to the actual next node (`marketable_live_fresh_or_chilled_jellyfish`)

Use independently measured same-lot output mass, form, life/preparation state and moisture basis, retaining rejection, tissue/water changes and losses. This is not fixed to reference 1 kg; transfer to the final gate if delivery is absent and to delivery when present.

- Selected flow: Jellyfish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_packout_product_state_and_mass_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packout_product_state_and_mass_records`

##### Elementary flows

###### Actual foreground fossil CO2 to unspecified air (`preparation_fossil_co2`)

Include only actual direct fossil-fuel combustion to air owned by this node, using measurement or an explicitly sourced factor compatible with fuel/engine/units; retain oxidation, controls and uncertainty. Exclude animal respiration, dissolved carbon to water and supplier-covered emissions; add each other actual pollutant separately by substance/medium.

- Selected flow: Carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_packaging_ice_chilling_and_dispatch_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records`


### Process: Delivery to declared gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Product received for delivery (`delivery_product_receipt`)

Collect only when this concrete exchange actually occurs under this node’s foreground responsibility; exclude components already covered by an inclusive supplier service. Retain its own unallocated raw quantity/native unit and never inherit a collection total or range.

- Selected flow: Jellyfish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`

###### Conditional diesel input (`delivery_diesel`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. This UUID establishes a mass-based diesel identity only, with no grade, provider, density, heating value or emission factor; L-to-kg conversion requires matching density evidence.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`

###### Conditional electricity input (`delivery_electricity`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`

###### Conditional ice input (`delivery_ice`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`

###### Conditional oxygen input (`delivery_oxygen`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Oxygen, gaseous
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`

#### Outputs

##### Product flows

###### Delivered product transfer to final gate acceptance (`delivered_jellyfish_at_declared_gate`)

Independently weigh delivered product per actual route, excluding separable cargo water, ice and package tare; retain transit loss, state and moisture changes before final gate acceptance. This internal handoff is not a fixed reference output.

- Selected flow: Jellyfish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`

##### Elementary flows

###### Actual foreground fossil CO2 to unspecified air (`delivery_fossil_co2`)

Include only actual direct fossil-fuel combustion to air owned by this node, using measurement or an explicitly sourced factor compatible with fuel/engine/units; retain oxidation, controls and uncertainty. Exclude animal respiration, dissolved carbon to water and supplier-covered emissions; add each other actual pollutant separately by substance/medium.

- Selected flow: Carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_delivery_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery_records`


### Process: Final declared-gate acceptance and release (`declared_gate_release`)

#### Inputs

##### Product flows

###### Product receipt from the actual final predecessor (`declared_gate_receipt`)

Receive only the actual final predecessor, determined by the real gate: landing/receipt, pack-out or delivery. Record predecessor transfer ID, net product mass, state and losses without adding alternative routes together.

- Selected flow: Jellyfish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_declared_gate and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_declared_gate`

#### Outputs

##### Product flows

###### Sole declared-gate reference product (`declared_gate_product`)

The sole final reference output uses positive measured same-lot accepted net mass Q at the declared gate, excluding separate package tare and free carrier water/ice. This identity establishes neither life condition, yield nor upstream internal throughput.

- Selected flow: Jellyfish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_declared_gate`
- Range: Final reference normalization identity, not a yield or empirical interval
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | sole declared-gate reference and all other intended outputs | The final reference output remains unique. Enumerate other actually intended and accepted products by species, form, state, destination and separate handoff; bycatch, mortality or residue does not automatically establish a coproduct. Subdivide/directly assign measured activities first; attribute residual shared burdens by an evidenced causal physical relationship, or a justified economic relationship with sensitivity when a physical basis is unsupported. Allocation does not alter physical mass. | Intended outputs, actual acceptance/market, handoffs, dedicated/shared activities, driver and price/period evidence | `mass-balance-identity` |
| `bycatch_and_reject_handling` | bycatch, non-target material, rejected jellyfish, and residues | Do not allocate away bycatch, rejects, drainage, or residue by excluding them from the foreground package. Record fate and allocate only when a recovered co-product is documented. | bycatch mass, reject mass, drainage or wastewater, destination, disposal or recovery route | `brotz-pauly-jellyfish-fisheries-2017` |
| `shared_trip_and_landing_allocation` | multi-species trips or shared landing services | Allocate shared vessel fuel, gear service, landing energy, water, ice, and packaging by direct measurement, trip log, catch mass, holding time, package count, or another declared physical driver before economic allocation. | trip records, landed mass by species, service logs, package counts, holding time, and allocation driver | `mass-balance-identity` |
| `delivery_allocation` | mixed-product delivery | Allocate delivery fuel, ice, live-holding, refrigeration, and reusable packaging loads by product mass, package count, trip, temperature-control zone, or tonne-km as applicable. | dispatch records, package counts, load mass, distance, temperature condition, and return logistics | `codex-cxc-52-2003` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | species, harvest area, gear, vessel/collector, trip/date, gross/tare/catch and accepted landed mass, bycatch/rejection and fates, onboard drainage/ice/water, permit/traceability where applicable; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_packout_product_state_and_mass_records` | `sorting_holding_chilling_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual sorting, surface washing, drainage, live maintenance or chilling, life/temperature/salinity/duration, free water/ice and tare, source/handled product states and paired transfers, own water/ice/oxygen/chemical composition and package count/tare/reuse; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_packaging_ice_chilling_and_dispatch_records` | `sorting_holding_chilling_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual sorting, surface washing, drainage, live maintenance or chilling, life/temperature/salinity/duration, free water/ice and tare, source/handled product states and paired transfers, own water/ice/oxygen/chemical composition and package count/tare/reuse; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_delivery_records` | `delivery_to_declared_gate` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | origin/destination, leg distance/mode/actual cargo including water/ice/containers, temperature/oxygen control, loaded/empty returns, service scope, receipt and losses; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_declared_gate` | `declared_gate_release` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | unique declared gate location/time/recipient, predecessor route, actual acceptance, species/form/state/moisture basis, same-lot final accepted net mass Q, gross/tare/free water/ice and refusal; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_harvest_collection_and_landing_outputs` | `harvest_collection_and_landing` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | species, harvest area, gear, vessel/collector, trip/date, gross/tare/catch and accepted landed mass, bycatch/rejection and fates, onboard drainage/ice/water, permit/traceability where applicable; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_sorting_holding_chilling_and_packout_outputs` | `sorting_holding_chilling_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual sorting, surface washing, drainage, live maintenance or chilling, life/temperature/salinity/duration, free water/ice and tare, source/handled product states and paired transfers, own water/ice/oxygen/chemical composition and package count/tare/reuse; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_delivery_outputs` | `delivery_to_declared_gate` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | origin/destination, leg distance/mode/actual cargo including water/ice/containers, temperature/oxygen control, loaded/empty returns, service scope, receipt and losses; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_gate_outputs` | `declared_gate_release` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | unique declared gate location/time/recipient, predecessor route, actual acceptance, species/form/state/moisture basis, same-lot final accepted net mass Q, gross/tare/free water/ice and refusal; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = actual same-lot exchange quantity / positive same-lot declared-gate accepted net product mass Q; retain raw trip/lot/reporting-period numerators and units. Apply evidenced shares only to genuinely shared LCA burdens in a separate attribution view, keeping the physical ledger unallocated. Link intermediate process yields through measured stage masses and Q; local output cannot replace Q or imply a 1:1 yield. The sole final reference output is Q/Q = 1 kg. | Node raw quantities; Q; measured intermediate yields; attribution decisions | Quantity per 1 kg reference flow and separate physical ledger | `mass-balance-identity` |
| `material_state_balance` | all material stages and stocks | Record opening stocks, receipts/collection, observed biological/material changes without assuming managed production, actual water/material additions, internal handoffs, closing stocks, accepted products, rejection, mortality, tissue removal, trimming, drainage/evaporation and other losses separately; reconcile on matching species/form/moisture basis with unexplained residual retained. Do not deduct package tare or free ice again from already net product masses. | Node mass/moisture/stock and fate records | Measured stage yields and balance differences | `mass-balance-identity` |
| `delivery_tonne_kilometres` | delivered reference product | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `direct_emissions` | all actual direct releases | Use measurements or a sourced factor compatible with actual fuel/substance/units/receiving medium; retain original factor evidence, applicability, controls and uncertainty. No generic diesel factor is prescribed, and a water-body balance is not automatically a negative emission or credit. | Node activity, measurement or sourced factor, medium | Substance-specific direct release quantity | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `collect_fishing_fuel_gear_service_and_collection_inputs` | `harvest_collection_and_landing` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Fuel, mass, energy, volume, item, or service quantity / L, kg, MJ, kWh, m3, item, or service unit; Amount rule: measured or allocated vessel fuel, gear use, collection inputs, onboard ice or water, and landing support by trip or lot; Sources: `fao-jellyfish-commodity-profile`, `brotz-pauly-jellyfish-fisheries-2017` Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_harvest_collection_and_landing_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_bycatch_rejected_jellyfish_drainage_and_landing_residues` | `harvest_collection_and_landing` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass, volume, or count / kg, m3, or item; Amount rule: measured rejected jellyfish, bycatch, non-target material, drainage or wastewater, residue mass, fate, disposal route, recovery route, and receiving environment; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_harvest_collection_and_landing_outputs`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_water_ice_electricity_packaging_and_live_holding_inputs` | `sorting_holding_chilling_and_packout` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass, volume, energy, or item count / kg, m3, kWh, or item; Amount rule: measured washing or live-holding water, ice, electricity, oxygen, packaging, chilling, container, and dispatch preparation quantities; Sources: `codex-cxc-52-2003` Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_packaging_ice_chilling_and_dispatch_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_sorting_rejects_drainage_wastewater_and_packaging_waste` | `sorting_holding_chilling_and_packout` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass or volume / kg or m3; Amount rule: measured rejected jellyfish, drainage, wastewater, spent ice, packaging waste, residue mass, disposal route, recovery route, and receiving environment; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_sorting_holding_chilling_and_packout_outputs`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_delivery_fuel_electricity_ice_and_temperature_control_support` | `delivery_to_declared_gate` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Fuel, energy, mass, volume, or transport service / L, MJ, kWh, kg, m3, or tonne-km; Amount rule: include only when the declared reference flow is delivered beyond landing, dispatch, or packhouse gate; record distance, mode, load factor, live or chilled condition, and return logistics where relevant; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_delivery_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `dq_unique_object_gate` | reference object and every stage | Before collection each dataset must fix one physical reference object: one species or an evidenced single physical commercial species-group product, one source/production route, form, actual life/preparation state, moisture/drainage basis, grade and unique gate location/time/acceptance condition. Do not combine different species, live/dead, fresh/chilled, raw/prepared states or different gates in one reference exchange; unresolved specifications make the dataset incomplete. Each stage is the measured state of that same lot and is not automatically the final 1 kg. | Species/origin/state/moisture/grade specification, actual gate and lot transfer/acceptance records |
| `dq_ranges_uncertainty` | every actual individual exchange | Verify each range basis against its concrete flow, real unit, same-lot final Q denominator and representative conditions; retain independent source/historical-batch evidence, observed variation and uncertainty without treating unknown as zero. A mixed-unit collection screen is not an individual-flow range; no universal initial upper bound spans different moisture, yield, gate or taxa. Do not self-validate against the tested batch maximum or clip actual outliers. | Independent original evidence, calibration, method and uncertainty records |
| `dq_period_ownership` | all nodes, periods, assets and inclusive services | Cover complete actual trip/production/handling/holding/transport periods, return, idle/failed duty, maintenance/cleaning and asset replacement/retirement; reconcile unique ownership and carried stock burdens across shared consumers. Zero output or unknown Q cannot justify division by zero or erased burdens; exclude duplicate components according to inclusive service scope. Disclose actual applicability of natural origin/habitat/permit, n.e.c. justification, temporal/technology/geographic representativeness and exclusions. | Period calendars, resource/asset/service/stock ledgers and origin/scope evidence |
| `collect_declared_gate_handling` | `declared_gate_release` | The final gate is the actual boundary responsibility interface, not presumed extra processing. Collect each actual pre-gate acceptance/weighing/handling event’s own electricity, material, service, rejection and release; carry the original record when the same event is already owned by a predecessor, without duplicate measurement. Every applicable concrete exchange needs its own native quantity/unit, same-Q normalization, destination and verified identity; missing data is not zero. | `cp_declared_gate`; `cp_gate_outputs`; actual event/ownership/transfer/acceptance and independent range/uncertainty records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference object | Verify this PCR scope, single species/physical commercial product, actual source/route, life/preparation state, form/moisture/grade and unique declared gate. Classification labels or generic landing UUIDs cannot replace actual gate/state. Explain more-specific-PCR nonapplicability for n.e.c. products and animal origin for natural sponges. | |
| `validate_gate_quantity` | reference output and all quantities | declared_gate_product is the sole final 1 kg reference output, and Q must be positive measured same-lot accepted net mass. Retain all raw batch quantities, actual intermediate yields, refusal/transit loss/moisture changes and paired transfers. Pack-out and delivery receipts are independently measured, not competing reference outputs. | |
| `validate_atomic_completion` | all collection duties and actual exchanges | Resolve every applicable section-8 duty into specific physical/chemical exchanges with independent quantities, native units, range/uncertainty evidence, composition/state, same-Q normalization, destination/medium and verified compatible UUIDs. Any unresolved applicable duty makes the final dataset incomplete and validation fails; unknown is not zero and collection amounts/ranges/UUIDs are never copied. | |
| `validate_fates_ownership` | outputs, resources, services and periods | Check intended products, managed wastes, environmental releases and stocks by actual fate; generated wastes/releases cannot be inputs. Inclusive services exclude overlapping owned fuel/electricity/assets/releases; transport cargo includes accompanying water/ice/containers and empty return is not zero burden. All actual nodes/periods/shared consumers and carried burdens must be complete. | |
| `validate_projection` | bilingual content and structured projection | English/Chinese must align on reference object, exchange IDs, rules, units/denominators and duties; UUID-bearing Chinese displays use official baseName and unresolved identities remain explicit. Normally regenerate and verify structured Schema/fingerprints; structural pass does not prove identity, yield, numerical ranges or actual data completeness. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for jellyfish, live, fresh, or chilled |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when harvest and handling records are retained |
| allowed_use | LCA modelling of declared jellyfish live, fresh, or chilled product at landing, dispatch, packhouse, or delivered gate |
| excluded_use | ornamental live jellyfish; frozen, dried, smoked, salted, brined, alum-cured, cooked, canned, prepared, preserved, extracted, or processed jellyfish; non-jellyfish aquatic invertebrates; residues, wastewater, bycatch, or rejected biomass as separate products; ecosystem-service claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or species group; harvest or collection area; gear or collection method; landing site; live/fresh/chilled state; wet or drained mass basis; product form; holding duration and temperature; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | product state evidence, mass balance closure, wet/drained basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for jellyfish gear, vessel service, ice, live-holding oxygen, brine or salting exclusions, bycatch, residue, packaging, refrigerant, or delivery services; reviewed quantitative evidence for fuel, yield, drainage, ice, packaging, or chilling ranges; updated Codex, FAO, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-jellyfish-commodity-profile` | official_guidance | FAO Knowledge Repository, aquatic products chapter 4.2 Jellyfish, https://openknowledge.fao.org/server/api/core/bitstreams/0aa558d4-57c7-498d-87f7-b9e37577882f/content/src/html/chapter-4.2.html | jellyfish product identity, product uses, and commodity context |
| `brotz-pauly-jellyfish-fisheries-2017` | literature | Brotz and Pauly, studying jellyfish fisheries and global catch context, Sea Around Us PDF, https://legacy.seaaroundus.s3.amazonaws.com/researcher/dpauly/PDF/2017/Books%26Chapters/Brotz%2B%26%2BPauly%2B2017%2BStudying%2Bjellyfish%2Bfisheries.pdf | jellyfish fisheries context, harvest and management uncertainty, bycatch and catch documentation context |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled aquatic product handling, hygiene, transport, and product-state context |
| `mass-balance-identity` | method_factor | Declared conservation/stock ledger and same-lot final-gate normalization method in PCR sections 4, 7 and 8, including measured receipts, stocks, water/tissue changes and all actual fates; no empirical yield or factor is supplied. | normalization, allocation, landing balance, yield, and delivery calculations |
