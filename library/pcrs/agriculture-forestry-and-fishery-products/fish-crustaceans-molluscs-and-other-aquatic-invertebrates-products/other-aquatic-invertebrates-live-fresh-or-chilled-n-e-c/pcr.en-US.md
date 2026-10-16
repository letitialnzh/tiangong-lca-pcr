---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-aquatic-invertebrates-live-fresh-or-chilled-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other aquatic invertebrates, live, fresh or chilled, n.e.c.

## 1. Scope and Applicability

This PCR guides foreground data package construction for other aquatic invertebrates, live, fresh, or chilled, not elsewhere classified in the more specific PCR records for fish, crustaceans, molluscs, jellyfish, sea cucumbers, sea urchins, sponges, ornamental aquatic animals, or processed aquatic invertebrate products. It covers declared harvesting, collection, or legal gathering, onboard or field sorting, live holding or chilled holding, landing, grading, washing where performed, packaging, icing or temperature control, dispatch, and release at the declared gate.

Covered products include live, fresh, or chilled aquatic invertebrates of declared species or species group that remain unprocessed primary products and are not represented by a more specific canonical PCR. Excluded products are all products with a more specific PCR in this subdomain, frozen, smoked, dried, salted, brined, prepared, preserved, cooked, canned, ornamental, extracted, manufactured, or otherwise processed products, and residues or rejected biomass modelled as separate products.

This is a fallback PCR. A conforming dataset must state why a more specific product PCR does not apply, and must preserve the species or species-group identity needed for future mapping refinement.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-aquatic-invertebrates-live-fresh-or-chilled-n-e-c` |
| classification_refs | CPC 3.0 `04590`, `Other aquatic invertebrates, live, fresh or chilled, n.e.c.` |
| covered_products | live, fresh, or chilled aquatic invertebrates not covered by a more specific canonical PCR, sold as unprocessed primary product with declared species or species group |
| excluded_products | jellyfish; sea cucumbers; sea urchins; natural sponges; crustaceans; molluscs; fish; ornamental aquatic animals; frozen, smoked, dried, salted, brined, prepared, preserved, cooked, canned, extracted, manufactured, or processed products; residues, wastewater, bycatch, or rejected biomass as separate products |
| representative_product | other aquatic invertebrate live, fresh, or chilled at declared species or species group, harvest area, production or collection route, product state, wet or drained mass basis, packaging state, and declared gate |
| production_route | wild harvest or collection, declared aquaculture route where no specific PCR applies, onboard or field sorting, landing or receipt, live or chilled holding, washing where performed, packaging, temperature control, and declared gate release |
| market_state | live, fresh, or chilled n.e.c. aquatic invertebrate with declared species, route, collection method, product basis, holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | other aquatic invertebrates, live, fresh, or chilled, not elsewhere classified |
| How much | 1 kg |
| How well | declared species or species group, reason more specific PCR does not apply, live/fresh/chilled state, wet or drained mass basis, route, handling condition, packaging state, and gate |
| How long or cycle | one harvest, collection, aquaculture, landing, handling, sales lot, or reporting period normalized to marketable output |
| reference_flow_link | `declared_gate_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Aquatic invertebrate animal |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; n.e.c. justification; harvest, collection, or aquaculture route; area or site; gear or collection method; landing or receipt site; live, fresh, or chilled state; wet, drained, whole, cleaned, or declared product basis; holding duration and temperature or live-holding condition; packaging state; declared gate; intended use where known; permit, traceability, and unresolved Tiangong UUID substitutions |

Mass is the primary reference basis. Count, basket, tub, crate, sack, bin, volume, trip, or holding-unit records may be used only when net mass, tare, drainage method, product state, and sampling method are retained.

Before collection each dataset must fix one physical reference object: one species or an evidenced single physical commercial species-group product, one source/production route, form, actual life/preparation state, moisture/drainage basis, grade and unique gate location/time/acceptance condition. Do not combine different species, live/dead, fresh/chilled, raw/prepared states or different gates in one reference exchange; unresolved specifications make the dataset incomplete. Each stage is the measured state of that same lot and is not automatically the final 1 kg.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg other aquatic invertebrates in the declared live, fresh, or chilled product form. |
| `fallback_identity_check` | all datasets | PCR selection evidence | declared records | Dataset metadata must state why a more specific PCR does not apply and must retain species or species-group identity for future mapping. |
| `product_state_identity` | all datasets | Product state and handling evidence | declared records | Product records must prove live, fresh, or chilled state and must not mix frozen, dried, salted, brined, prepared, preserved, ornamental, or processed products with the reference product. |
| `wet_drained_mass_basis` | live, fresh, chilled, washed, drained, or iced records | Mass and drainage basis | kg | Product mass must state wet whole mass, drained mass, cleaned mass, ice-excluded mass, or another declared basis. Convert only with measured drainage or yield evidence. |
| `lot_identity` | harvest, collection, aquaculture, landing, sorting, and sales records | Mass, count, or volume | kg, item, basket, tub, crate, or m3 | Lot records must retain species or species group, route, area or site, gear or collection method, vessel, collector, farm, trip, lot, date, accepted mass, rejected mass, and permit where relevant. |
| `energy_fuel_ice_water_and_holding` | harvest, collection, aquaculture holding, washing, live holding, chilled holding, and dispatch | Energy, fuel, mass, volume, temperature, or time | kWh, MJ, L, kg, m3, deg C, or h | Record fuel, electricity, water, ice, oxygen, temperature, salinity where relevant, holding time, drainage, and discharge basis before normalization. |
| `packaging_basis` | baskets, tubs, crates, sacks, liners, labels, insulated containers, live packs, ice boxes, and pallets | Mass or item count | kg or item | Packaging and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled production or capture to the declared landing, holding, dispatch, packhouse, or delivery gate:

1. Wild harvest, gathering, collection, or declared aquaculture production when no more specific PCR applies, including gear or culture-unit operation, catch or stock handling, non-target material, bycatch, mortalities, and direct operating inputs.
2. Landing or receipt, grading, washing where performed, live holding or chilled holding, drainage, rejection, residue handling, temperature control, icing, packaging, storage, and declared gate release.
3. Delivery to the declared gate when the reference flow is delivered product beyond landing, receipt, dispatch, or packhouse gate.

Capital goods and long-lived vessels, gear, tanks, cages, holding systems, cold rooms, and infrastructure are included only when the declared data package scope requires them. Purchased stock, feed, ice, packaging, electricity, fuel, water, oxygen, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_other_aquatic_invertebrate_harvest_collection_or_stocking_lot |
| starting_condition_role | n_e_c_aquatic_invertebrate_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04590`, `Other aquatic invertebrates, live, fresh or chilled, n.e.c.` |
| recursive_input_rule | other aquatic invertebrates used as inputs to produce the reference product are recorded as declared harvest, collection, stocking, or receipt lots with species, route, product-state, and mass-basis disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | harvest, collection, aquaculture, supplier, landing, stock, feed, packaging, ice, fuel, electricity, water, oxygen, and delivery datasets where outside foreground control |
| disclosure | disclose species or species group, n.e.c. justification, route, harvest or production area, gear, culture system where relevant, landing or receipt site, live/fresh/chilled state, wet or drained mass basis, sorting and rejection, washing or holding water, temperature or ice use, holding duration, packaging state, intended use where known, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

Actual route follows event and transfer records. The final declared-gate node owns the sole reference output and receives the actual last predecessor: bypass preparation/delivery for a landing gate, bypass delivery for a pack-out gate, and measure delivery receipt before gate acceptance for a delivered gate. Unknown actual route or gate is not a default choice.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `production_harvest_collection_and_receipt` | Production, capture, collection and receipt | required | Actual source/production route is evidenced | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `sorting_holding_chilling_and_packout` | Sorting, live maintenance, chilling and pack-out | conditional | Only actual pre-gate preparation; bypass for a landing gate or absent preparation | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `delivery_to_declared_gate` | Delivery to declared gate | conditional | Only actual delivery before the chosen gate; unknown choice fails | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `declared_gate_release` | Final declared-gate acceptance and release | required | One declared gate receives the actual final predecessor; exactly one reference output | Actual event/transfer and resource ownership | per 1 kg reference flow |

### Process: Production, capture, collection and receipt (`production_harvest_collection_and_receipt`)

#### Inputs

##### Product flows

###### Conditional diesel input (`source_diesel`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. This UUID establishes a mass-based diesel identity only, with no grade, provider, density, heating value or emission factor; L-to-kg conversion requires matching density evidence.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_production_harvest_collection_and_receipt_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`

###### Conditional electricity input (`source_electricity`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this exchange’s own quantity under cp_production_harvest_collection_and_receipt_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`

###### Conditional ice input (`source_ice`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_production_harvest_collection_and_receipt_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`

###### Conditional oxygen input (`source_oxygen`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive. Its precise UUID remains unresolved; the medium name does not prove live product condition.

- Selected flow: Oxygen, gaseous
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_production_harvest_collection_and_receipt_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`

#### Outputs

##### Product flows

###### Accepted source lot to the next actual responsibility (`accepted_n_e_c_aquatic_invertebrate_lot`)

Record species, origin, original form/state and accepted net mass by lot; independently measure this source-stage quantity and pair the actual next receipt. A landing UUID applies only with matching unprocessed-catch/landing-quality qualifiers and cannot substitute for later preparation or final-delivery identities.

- Selected flow: Aquatic invertebrate animal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_production_harvest_collection_and_receipt_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`

##### Elementary flows

###### Actual foreground fossil CO2 to unspecified air (`source_fossil_co2`)

Include only actual direct fossil-fuel combustion to air owned by this node, using measurement or an explicitly sourced factor compatible with fuel/engine/units; retain oxidation, controls and uncertainty. Exclude animal respiration, dissolved carbon to water and supplier-covered emissions; add each other actual pollutant separately by substance/medium.

- Selected flow: Carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_production_harvest_collection_and_receipt_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`


### Process: Sorting, live maintenance, chilling and pack-out (`sorting_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Source lot received for preparation (`accepted_lot_entering_final_handling`)

Pair the actual upstream transfer, retaining original receipt state and independently measured mass; activate only when this pre-gate node actually occurs.

- Selected flow: Aquatic invertebrate animal
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

###### Prepared product transfer to the actual next node (`marketable_live_fresh_or_chilled_n_e_c_aquatic_invertebrate`)

Use independently measured same-lot output mass, form, life/preparation state and moisture basis, retaining rejection, tissue/water changes and losses. This is not fixed to reference 1 kg; transfer to the final gate if delivery is absent and to delivery when present.

- Selected flow: Aquatic invertebrate animal
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

- Selected flow: Aquatic invertebrate animal
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

###### Delivered product transfer to final gate acceptance (`delivered_n_e_c_aquatic_invertebrate_at_declared_gate`)

Independently weigh delivered product per actual route, excluding separable cargo water, ice and package tare; retain transit loss, state and moisture changes before final gate acceptance. This internal handoff is not a fixed reference output.

- Selected flow: Aquatic invertebrate animal
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

- Selected flow: Aquatic invertebrate animal
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

- Selected flow: Aquatic invertebrate animal
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
| `fallback_scope_priority` | all datasets | If a more specific canonical PCR exists for the species, route, or product state, use that PCR instead of this fallback category. | species, route, product state, classification mapping, and PCR selection note | `mass-balance-identity` |
| `bycatch_mortality_and_reject_handling` | bycatch, non-target material, mortalities, rejected biomass, and residues | Do not allocate away bycatch, mortalities, rejects, drainage, or residue by excluding them from the foreground package. Record fate and allocate only when a recovered co-product is documented. | bycatch mass, mortality mass, reject mass, drainage or wastewater, destination, disposal or recovery route | `fao-code-responsible-fisheries-1995` |
| `shared_route_allocation` | multi-species trips, shared aquaculture systems, or shared handling services | Allocate shared vessel fuel, gear service, stock inputs, feed, electricity, water, ice, oxygen, packaging, and handling by direct measurement, trip log, culture-unit record, accepted mass, holding time, package count, or another declared physical driver before economic allocation. | trip records, culture-unit records, accepted mass by species, service logs, package counts, holding time, and allocation driver | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production_harvest_collection_and_receipt_records` | `production_harvest_collection_and_receipt` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | species/origin, n.e.c. justification, actual wild collection or declared culture route, gear/culture unit, trip/cycle/date, purchased stock/feed by actual identity and sampled counts/masses, observed biological growth where farmed, gross/tare/accepted mass, bycatch/mortality/rejection and fates, permit/traceability where applicable; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_packout_product_state_and_mass_records` | `sorting_holding_chilling_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual sorting, surface washing, drainage, live maintenance or chilling, life/temperature/salinity/duration, free water/ice and tare, source/handled product states and paired transfers, own water/ice/oxygen/chemical composition and package count/tare/reuse; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_packaging_ice_chilling_and_dispatch_records` | `sorting_holding_chilling_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual sorting, surface washing, drainage, live maintenance or chilling, life/temperature/salinity/duration, free water/ice and tare, source/handled product states and paired transfers, own water/ice/oxygen/chemical composition and package count/tare/reuse; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_delivery_records` | `delivery_to_declared_gate` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | origin/destination, leg distance/mode/actual cargo including water/ice/containers, temperature/oxygen control, loaded/empty returns, service scope, receipt and losses; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_declared_gate` | `declared_gate_release` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | unique declared gate location/time/recipient, predecessor route, actual acceptance, species/form/state/moisture basis, same-lot final accepted net mass Q, gross/tare/free water/ice and refusal; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_production_harvest_collection_and_receipt_outputs` | `production_harvest_collection_and_receipt` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | species/origin, n.e.c. justification, actual wild collection or declared culture route, gear/culture unit, trip/cycle/date, purchased stock/feed by actual identity and sampled counts/masses, observed biological growth where farmed, gross/tare/accepted mass, bycatch/mortality/rejection and fates, permit/traceability where applicable; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_sorting_holding_chilling_and_packout_outputs` | `sorting_holding_chilling_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual sorting, surface washing, drainage, live maintenance or chilling, life/temperature/salinity/duration, free water/ice and tare, source/handled product states and paired transfers, own water/ice/oxygen/chemical composition and package count/tare/reuse; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_delivery_outputs` | `delivery_to_declared_gate` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | origin/destination, leg distance/mode/actual cargo including water/ice/containers, temperature/oxygen control, loaded/empty returns, service scope, receipt and losses; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_gate_outputs` | `declared_gate_release` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | unique declared gate location/time/recipient, predecessor route, actual acceptance, species/form/state/moisture basis, same-lot final accepted net mass Q, gross/tare/free water/ice and refusal; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = actual same-lot exchange quantity / positive same-lot declared-gate accepted net product mass Q; retain raw trip/lot/reporting-period numerators and units. Apply evidenced shares only to genuinely shared LCA burdens in a separate attribution view, keeping the physical ledger unallocated. Link intermediate process yields through measured stage masses and Q; local output cannot replace Q or imply a 1:1 yield. The sole final reference output is Q/Q = 1 kg. | Node raw quantities; Q; measured intermediate yields; attribution decisions | Quantity per 1 kg reference flow and separate physical ledger | `mass-balance-identity` |
| `material_state_balance` | all material stages and stocks | Record opening stocks, receipts/collection, biological growth where actually farmed, actual water/material additions, internal handoffs, closing stocks, accepted products, rejection, mortality, tissue removal, trimming, drainage/evaporation and other losses separately; reconcile on matching species/form/moisture basis with unexplained residual retained. Do not deduct package tare or free ice again from already net product masses. | Node mass/moisture/stock and fate records | Measured stage yields and balance differences | `mass-balance-identity` |
| `delivery_tonne_kilometres` | delivered reference product | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `direct_emissions` | all actual direct releases | Use measurements or a sourced factor compatible with actual fuel/substance/units/receiving medium; retain original factor evidence, applicability, controls and uncertainty. No generic diesel factor is prescribed, and a water-body balance is not automatically a negative emission or credit. | Node activity, measurement or sourced factor, medium | Substance-specific direct release quantity | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `collect_production_harvest_collection_or_receipt_inputs` | `production_harvest_collection_and_receipt` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Fuel, energy, mass, volume, item, time, or service quantity / L, kWh, MJ, kg, m3, item, h, or service unit; Amount rule: measured or allocated harvest, collection, aquaculture, receipt, gear, water, fuel, electricity, stock, feed, and landing support inputs by route and lot; Sources: `fao-code-responsible-fisheries-1995`, `codex-cxc-52-2003` Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_production_harvest_collection_and_receipt_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_bycatch_mortalities_rejected_biomass_and_receipt_residues` | `production_harvest_collection_and_receipt` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass, volume, or count / kg, m3, or item; Amount rule: measured bycatch, mortalities, rejected organisms, non-target material, drainage or wastewater, residue mass, fate, disposal route, recovery route, and receiving environment; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_production_harvest_collection_and_receipt_outputs`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_water_ice_electricity_packaging_and_live_holding_inputs` | `sorting_holding_chilling_and_packout` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass, volume, energy, or item count / kg, m3, kWh, or item; Amount rule: measured washing or live-holding water, ice, electricity, oxygen, packaging, chilling, container, and dispatch preparation quantities; Sources: `codex-cxc-52-2003` Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_packaging_ice_chilling_and_dispatch_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_sorting_rejects_mortalities_drainage_wastewater_and_packaging_waste` | `sorting_holding_chilling_and_packout` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass or volume / kg or m3; Amount rule: measured rejects, mortalities, drainage, wastewater, spent ice, packaging waste, residue mass, disposal route, recovery route, and receiving environment; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_sorting_holding_chilling_and_packout_outputs`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_delivery_fuel_electricity_ice_and_temperature_control_support` | `delivery_to_declared_gate` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Fuel, energy, mass, volume, or transport service / L, MJ, kWh, kg, m3, or tonne-km; Amount rule: include only when the declared reference flow is delivered beyond landing, receipt, dispatch, or packhouse gate; record distance, mode, load factor, live or chilled condition, and return logistics where relevant; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_delivery_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
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
| dataset_role | foreground production dataset for other aquatic invertebrates, live, fresh, or chilled, n.e.c. |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when route and handling records are retained |
| allowed_use | LCA modelling of declared live, fresh, or chilled n.e.c. aquatic invertebrate product at landing, receipt, dispatch, packhouse, or delivered gate |
| excluded_use | any product with a more specific canonical PCR; ornamental aquatic animals; frozen, dried, smoked, salted, brined, cooked, canned, prepared, preserved, extracted, manufactured, or processed products; residues, wastewater, bycatch, mortalities, or rejected biomass as separate products; ecosystem-service claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or species group; n.e.c. justification; route; harvest, collection, or production area; method or culture system; landing or receipt site; live/fresh/chilled state; wet or drained mass basis; product form; holding duration and temperature; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | fallback PCR justification, product state evidence, mass balance closure, wet/drained basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for species-specific n.e.c. invertebrates, collection gear, vessel/diver service, culture inputs, stock, feed, ice, live-holding oxygen, bycatch, mortalities, residues, packaging, refrigerant, or delivery services; reviewed quantitative evidence for fuel, yield, mortality, drainage, ice, packaging, or chilling ranges; new specific PCR that supersedes this fallback; updated Codex, FAO, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled aquatic product handling, hygiene, transport, and product-state context |
| `fao-code-responsible-fisheries-1995` | official_guidance | FAO Code of Conduct for Responsible Fisheries, 1995, https://www.fao.org/fishery/docs/CDrom/aquaculture/a0805e/documents/Code%20of%20Conduct%20for%20Responsible%20Fisheries.pdf | responsible fishery operations, bycatch, habitat, route, and traceability disclosure context |
| `mass-balance-identity` | method_factor | Declared conservation/stock ledger and same-lot final-gate normalization method in PCR sections 4, 7 and 8, including measured receipts, stocks, water/tissue changes and all actual fates; no empirical yield or factor is supplied. | normalization, allocation, accepted-lot balance, yield, and delivery calculations |
