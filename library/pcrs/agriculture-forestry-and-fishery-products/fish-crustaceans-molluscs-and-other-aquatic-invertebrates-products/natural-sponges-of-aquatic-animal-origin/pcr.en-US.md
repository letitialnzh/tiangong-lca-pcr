---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural sponges of aquatic animal origin

## 1. Scope and Applicability

This PCR guides foreground data package construction for natural sponges of aquatic animal origin placed on the market as harvested, landed, or primary prepared sponge product. It covers declared diving, cutting, hand collection, trawl or hook collection where legal, onboard handling, landing, washing or rinsing, draining, trimming of unusable tissue, drying or simple preservation where it remains a primary natural sponge product, packaging, storage, dispatch, and release at the declared gate.

Covered products include natural marine or freshwater animal sponges of declared species or commercial grade when sold as unprocessed, landed, washed, drained, dried, or simply prepared primary biomass. Excluded products are synthetic sponges, plastic foam sponges, shaped bath articles, chemically finished or manufactured sponge goods, composite cleaning products, cosmetic or medical finished articles, extracted compounds, and residues or damaged sponge biomass modelled as separate products.

A conforming dataset must retain species or commercial grade, harvest area, collection method, wet or dry mass basis, cleaning or drying state, and gate. Sponge bed management, permit, protected habitat, and regeneration practices must be disclosed when relevant.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin` |
| classification_refs | CPC 3.0 `04920`, `Natural sponges of aquatic animal origin` |
| covered_products | natural aquatic animal sponges harvested, collected, landed, washed, drained, dried, or simply prepared as primary natural sponge product |
| excluded_products | synthetic sponges; plastic foam sponges; shaped, cut-to-retail, chemically finished, manufactured, composite, cosmetic, medical, or industrial sponge articles; extracted compounds; damaged biomass, waste, wash water, or trimming residues as separate products |
| representative_product | natural aquatic animal sponge at declared species or grade, harvest area, wet or dry mass basis, cleaning or drying state, packaging state, and declared gate |
| production_route | harvest or collection by diver, vessel, hand, hook, trawl, or declared legal method, landing, washing/rinsing, draining, trimming, simple drying or preservation where primary, packaging, storage, and declared gate release |
| market_state | harvested or primary prepared natural sponge with declared species or grade, collection method, wet/dry/cleaned/dried basis, quality grade, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | natural sponge of aquatic animal origin as harvested or primary prepared product |
| How much | 1 kg |
| How well | declared species or commercial grade, natural animal origin, harvest area, collection method, wet or dry mass basis, cleaning/drying state, packaging state, and gate |
| How long or cycle | one harvest trip, collection lot, landing lot, handling lot, sales lot, or reporting period normalized to marketable sponge output |
| reference_flow_link | `declared_gate_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural aquatic-animal sponge |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or commercial grade; natural aquatic animal origin; harvest or collection area; collection method; permit or access right where relevant; wet, drained, dry, cleaned, or simply prepared mass basis; drying or preservation state; quality grade; packaging state; declared gate; habitat, protected-area, bed regeneration, and unresolved Tiangong UUID substitutions |

Mass is the primary reference basis. Piece, bundle, sack, basket, crate, diver lot, or trip records may be used only when net mass, wet or dry basis, grade, tare, and sampling method are retained.

Before collection each dataset must fix one physical reference object: one species or an evidenced single physical commercial species-group product, one source/production route, form, actual life/preparation state, moisture/drainage basis, grade and unique gate location/time/acceptance condition. Do not combine different species, live/dead, fresh/chilled, raw/prepared states or different gates in one reference exchange; unresolved specifications make the dataset incomplete. Each stage is the measured state of that same lot and is not automatically the final 1 kg.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg natural sponge in the declared wet, drained, cleaned, dried, or primary prepared product basis. |
| `natural_origin_identity` | all datasets | Product identity and origin evidence | declared records | Dataset records must show natural aquatic animal sponge origin and must not mix synthetic, plastic, shaped manufactured, or chemically finished sponge articles with the reference product. |
| `wet_dry_cleaned_basis` | harvested, washed, drained, dried, or cleaned sponge lots | Mass and moisture or drying state | kg, %, or kg dry sponge | Product mass must state wet, drained, cleaned, dried, or declared basis. Convert between wet and dry basis only with measured moisture, drying yield, or retained lot evidence. |
| `harvest_lot_identity` | collection, landing, grading, and sales records | Mass, count, or lot | kg, item, bundle, sack, basket, or crate | Harvest records must retain species or grade, harvest area, method, diver/vessel/collector, trip, lot, landing date, accepted mass, rejected mass, and permit or access record where relevant. |
| `cleaning_preservation_basis` | washing, trimming, drying, disinfecting, bleaching, or preservation | Mass, volume, concentration, or energy | kg, L, %, kWh, MJ, or h | Simple primary preparation may be included only when it preserves natural sponge identity. Record water, chemical, drying energy, time, rejected tissue, and product-state conversion basis. |
| `energy_fuel_and_delivery_inventory` | diving, vessel operation, air compression, landing, drying, storage, and dispatch | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, compressed-air, drying, storage, and delivery units before normalizing to the reference flow. |
| `packaging_basis` | sacks, bales, cartons, liners, labels, reusable crates, and pallets | Mass or item count | kg or item | Packaging records must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled sponge harvest or collection to the declared landing, drying, dispatch, packhouse, or delivery gate:

1. Sponge harvesting or collection, including diver, vessel, hand, hook, trawl, or legal collection method, gear operation, access or permit compliance, and onboard handling.
2. Landing, grading, washing, rinsing, draining, trimming, simple drying or preservation where the product remains a primary natural sponge, residue handling, packaging, storage, and declared gate release.
3. Delivery to the declared gate when the reference flow is delivered product beyond landing, drying yard, dispatch, or packhouse gate.

Capital goods and long-lived vessels, diving equipment, air compressors, gear, tanks, drying structures, and infrastructure are included only when the declared data package scope requires them. Purchased fuel, electricity, compressed air, water, cleaning chemicals, packaging, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_natural_sponge_harvest_or_collection_lot |
| starting_condition_role | aquatic_animal_sponge_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04920`, `Natural sponges of aquatic animal origin` |
| recursive_input_rule | natural sponge collected as an input to primary sponge product is recorded as a declared harvest or collection lot with area, method, species or grade, wet/dry basis, and gate disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | fishing or collection trip records, supplier harvest records, landing documents, permit or traceability evidence, fuel, electricity, water, chemicals, packaging, and delivery datasets where outside foreground control |
| disclosure | disclose species or commercial grade, harvest or collection area, collection method, diver or vessel, permit or access right, habitat or protected-area status where relevant, wet/dry/cleaned/dried basis, washing, trimming, drying or preservation route, rejects and residues, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

Actual route follows event and transfer records. The final declared-gate node owns the sole reference output and receives the actual last predecessor: bypass preparation/delivery for a landing gate, bypass delivery for a pack-out gate, and measure delivery receipt before gate acceptance for a delivered gate. Unknown actual route or gate is not a default choice.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `harvest_collection_and_landing` | Harvest, collection and landing | required | Actual source/production route is evidenced | Actual event/transfer and resource ownership | per 1 kg reference flow |
| `primary_preparation_drying_and_packout` | Primary preparation, drying and pack-out | conditional | Only actual pre-gate preparation; bypass for a landing gate or absent preparation | Actual event/transfer and resource ownership | per 1 kg reference flow |
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

###### Conditional electricity input (`source_electricity`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this exchange’s own quantity under cp_harvest_collection_and_landing_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_collection_and_landing_records`

#### Outputs

##### Product flows

###### Accepted source lot to the next actual responsibility (`accepted_landed_natural_sponge`)

Record species, origin, original form/state and accepted net mass by lot; independently measure this source-stage quantity and pair the actual next receipt. A landing UUID applies only with matching unprocessed-catch/landing-quality qualifiers and cannot substitute for later preparation or final-delivery identities.

- Selected flow: Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
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


### Process: Primary preparation, drying and pack-out (`primary_preparation_drying_and_packout`)

#### Inputs

##### Product flows

###### Source lot received for preparation (`accepted_sponge_entering_primary_preparation`)

Pair the actual upstream transfer, retaining original receipt state and independently measured mass; activate only when this pre-gate node actually occurs.

- Selected flow: Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_preparation_product_state_and_mass_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation_product_state_and_mass_records`

###### Conditional electricity input (`preparation_electricity`)

Record only if actually used at this node, never as a default input. Verify supply, composition/purity and purpose, retaining its own measured native quantity and same-lot final-gate basis; inclusive service and owned components are mutually exclusive.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this exchange’s own quantity under cp_preparation_packaging_and_storage_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation_packaging_and_storage_records`

#### Outputs

##### Product flows

###### Prepared product transfer to the actual next node (`marketable_natural_sponge`)

Use independently measured same-lot output mass, form, life/preparation state and moisture basis, retaining rejection, tissue/water changes and losses. This is not fixed to reference 1 kg; transfer to the final gate if delivery is absent and to delivery when present.

- Selected flow: Natural aquatic-animal sponge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_preparation_product_state_and_mass_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation_product_state_and_mass_records`

##### Elementary flows

###### Actual foreground fossil CO2 to unspecified air (`preparation_fossil_co2`)

Include only actual direct fossil-fuel combustion to air owned by this node, using measurement or an explicitly sourced factor compatible with fuel/engine/units; retain oxidation, controls and uncertainty. Exclude animal respiration, dissolved carbon to water and supplier-covered emissions; add each other actual pollutant separately by substance/medium.

- Selected flow: Carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this exchange’s own quantity under cp_preparation_packaging_and_storage_records and normalize by the measured same-lot accepted net mass at the final declared gate after unique ownership/attribution. Preserve unallocated physical material transfers; intermediate quantities are never fixed to 1 kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation_packaging_and_storage_records`


### Process: Delivery to declared gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Product received for delivery (`delivery_product_receipt`)

Collect only when this concrete exchange actually occurs under this node’s foreground responsibility; exclude components already covered by an inclusive supplier service. Retain its own unallocated raw quantity/native unit and never inherit a collection total or range.

- Selected flow: Natural aquatic-animal sponge
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

#### Outputs

##### Product flows

###### Delivered product transfer to final gate acceptance (`delivered_natural_sponge_at_declared_gate`)

Independently weigh delivered product per actual route, excluding separable cargo water, ice and package tare; retain transit loss, state and moisture changes before final gate acceptance. This internal handoff is not a fixed reference output.

- Selected flow: Natural aquatic-animal sponge
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

- Selected flow: Natural aquatic-animal sponge
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

- Selected flow: Natural aquatic-animal sponge
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
| `habitat_and_reject_handling` | damaged sponge, non-target material, residues, and protected habitat disclosure | Do not allocate away rejected sponge, damaged material, or habitat disturbance by excluding them from the foreground package. Record fate and disclose bed or protected-area status where relevant. | damaged mass, reject mass, non-target material, harvest area, disposal or recovery route, permit, and habitat disclosure | `fao-sponge-production` |
| `shared_trip_and_preparation_allocation` | multi-product trips or shared preparation services | Allocate shared vessel fuel, diving support, electricity, water, drying, storage, and packaging by direct measurement, trip log, accepted mass, dry-mass output, holding or drying time, package count, or another declared physical driver before economic allocation. | trip records, landed mass, accepted mass, dry mass, service logs, package counts, drying time, and allocation driver | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | species/commercial grade, natural animal origin, harvest area/bed/habitat, actual diver/collector/vessel/gear method and trip/date, diving-air/compression where used, gross/tare/accepted mass, damaged/rejected sponge and non-target fates, cutting/regeneration practice and permit/traceability evidence where applicable; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_preparation_product_state_and_mass_records` | `primary_preparation_drying_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual washing/rinsing, removal of non-skeletal organic tissue, trimming, drying and permitted primary preparation, own water/chemical composition and concentration, input/output moisture/solids, temperature/duration where relevant, cleaning/tissue/moisture losses and fates, package count/tare/reuse and storage protection; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_preparation_packaging_and_storage_records` | `primary_preparation_drying_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual washing/rinsing, removal of non-skeletal organic tissue, trimming, drying and permitted primary preparation, own water/chemical composition and concentration, input/output moisture/solids, temperature/duration where relevant, cleaning/tissue/moisture losses and fates, package count/tare/reuse and storage protection; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_delivery_records` | `delivery_to_declared_gate` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | origin/destination, leg distance/mode/actual cargo including water/ice/containers, temperature/oxygen control, loaded/empty returns, service scope, receipt and losses; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_declared_gate` | `declared_gate_release` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | unique declared gate location/time/recipient, predecessor route, actual acceptance, species/form/state/moisture basis, same-lot final accepted net mass Q, gross/tare/free water/ice and refusal; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_harvest_collection_and_landing_outputs` | `harvest_collection_and_landing` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | species/commercial grade, natural animal origin, harvest area/bed/habitat, actual diver/collector/vessel/gear method and trip/date, diving-air/compression where used, gross/tare/accepted mass, damaged/rejected sponge and non-target fates, cutting/regeneration practice and permit/traceability evidence where applicable; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_primary_preparation_drying_and_packout_outputs` | `primary_preparation_drying_and_packout` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | actual washing/rinsing, removal of non-skeletal organic tissue, trimming, drying and permitted primary preparation, own water/chemical composition and concentration, input/output moisture/solids, temperature/duration where relevant, cleaning/tissue/moisture losses and fates, package count/tare/reuse and storage protection; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_delivery_outputs` | `delivery_to_declared_gate` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | origin/destination, leg distance/mode/actual cargo including water/ice/containers, temperature/oxygen control, loaded/empty returns, service scope, receipt and losses; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |
| `cp_gate_outputs` | `declared_gate_release` | Concrete node exchanges, stocks and per-flow extension duties | Weighing, metering, activity, supplier, transfer and recipient records | unique declared gate location/time/recipient, predecessor route, actual acceptance, species/form/state/moisture basis, same-lot final accepted net mass Q, gross/tare/free water/ice and refusal; lot/event/time, individual identity/native quantity/unit, destination/medium, ownership, allocation drivers, opening/closing stocks and independent range/uncertainty evidence | Use calibrated scales/meters, original documents, process/temperature/moisture logs and supplier/recipient confirmation; retain method/sampling/factor and uncertainty without amount or conversion defaults | kg; kWh; L; m3; item; h; deg C; km; tkm; each actual native unit separately | Each event/lot; monthly/period reconciliation | Complete production/trip/handling/delivery periods and attributable return, idle, failed, maintenance and asset replacement/retirement periods | Actual node sites/equipment/providers/recipients and shared consumers | per 1 kg reference flow | Calibration, traceability, paired transfers, mass/moisture/stock reconciliation, service scope, attribution and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = actual same-lot exchange quantity / positive same-lot declared-gate accepted net product mass Q; retain raw trip/lot/reporting-period numerators and units. Apply evidenced shares only to genuinely shared LCA burdens in a separate attribution view, keeping the physical ledger unallocated. Link intermediate process yields through measured stage masses and Q; local output cannot replace Q or imply a 1:1 yield. The sole final reference output is Q/Q = 1 kg. | Node raw quantities; Q; measured intermediate yields; attribution decisions | Quantity per 1 kg reference flow and separate physical ledger | `mass-balance-identity` |
| `material_state_balance` | all material stages and stocks | Record opening stocks, receipts/collection, observed biological/material changes without assuming managed production, actual water/material additions, internal handoffs, closing stocks, accepted products, rejection, mortality, tissue removal, trimming, drainage/evaporation and other losses separately; reconcile on matching species/form/moisture basis with unexplained residual retained. Do not deduct package tare or free ice again from already net product masses. | Node mass/moisture/stock and fate records | Measured stage yields and balance differences | `mass-balance-identity` |
| `delivery_tonne_kilometres` | delivered reference product | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass, distance, route, load factor, moisture-protection condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `direct_emissions` | all actual direct releases | Use measurements or a sourced factor compatible with actual fuel/substance/units/receiving medium; retain original factor evidence, applicability, controls and uncertainty. No generic diesel factor is prescribed, and a water-body balance is not automatically a negative emission or credit. | Node activity, measurement or sourced factor, medium | Substance-specific direct release quantity | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `collect_harvest_fuel_diving_gear_and_collection_inputs` | `harvest_collection_and_landing` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Fuel, energy, mass, volume, item, time, or service quantity / L, kWh, MJ, kg, m3, item, h, or service unit; Amount rule: measured or allocated vessel fuel, air compression, diving service, gear use, collection inputs, and landing support by trip or lot; Sources: `fao-sponge-production`, `martinangeli-commercial-sponges-2022` Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_harvest_collection_and_landing_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_damaged_sponges_non_target_material_and_landing_residues` | `harvest_collection_and_landing` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass, volume, or count / kg, m3, or item; Amount rule: measured rejected or damaged sponge, non-target material, residue mass, fate, disposal route, recovery route, and receiving environment; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_harvest_collection_and_landing_outputs`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_water_chemicals_energy_drying_and_packaging_inputs` | `primary_preparation_drying_and_packout` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass, volume, energy, concentration, or item count / kg, L, m3, kWh, MJ, %, or item; Amount rule: measured washing water, cleaning or preservation chemicals, drying energy, electricity, packaging, storage, and dispatch preparation quantities; Sources: `fao-sponge-production` Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_preparation_packaging_and_storage_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_trimming_residues_wash_water_and_packaging_waste` | `primary_preparation_drying_and_packout` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Mass or volume / kg, L, or m3; Amount rule: measured trimming residues, wash water, spent bath, wastewater, packaging waste, disposal route, recovery route, and receiving environment; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_primary_preparation_drying_and_packout_outputs`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
| `collect_delivery_fuel_electricity_and_packaging_support` | `delivery_to_declared_gate` | Add a separate exchange and quantity for each actual material, natural resource, distinct service, other intended product, waste and direct release at this node; record composition/species/state, native property/unit, supply boundary, destination/medium, ownership and evidenced actual absence. Generated rejects/residues/releases are outputs; only genuinely received wastes are inputs. Separate intended recovery, managed waste and direct environmental release by actual fate. Do not bind generic sludge/packaging/process-water identities or inherit aggregate quantities or mixed-unit ranges. Flow property / unit: Fuel, energy, mass, or transport service / L, MJ, kWh, kg, or tonne-km; Amount rule: include only when the declared reference flow is delivered beyond landing, drying yard, dispatch, or packhouse gate; record distance, mode, load factor, moisture-protection condition, and return logistics where relevant; Sources:  Retain each raw trip/lot/reporting-period quantity and applicable yield/moisture basis; divide every reporting quantity by measured same-lot final declared-gate accepted net mass Q. Collect independent range/uncertainty evidence for each concrete flow; a mixed collection screen is not a component range. | `cp_delivery_records`; Raw records, provider/recipient evidence, mass/water/stock balances and independent range/uncertainty support |
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
| dataset_role | foreground production dataset for natural sponges of aquatic animal origin |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when harvest and primary preparation records are retained |
| allowed_use | LCA modelling of declared natural aquatic animal sponge at landing, drying, dispatch, packhouse, or delivered gate |
| excluded_use | synthetic sponges; plastic foam sponges; shaped bath articles; chemically finished or manufactured sponge goods; composite cleaning products; cosmetic or medical finished articles; extracted compounds; damaged sponge biomass, residues, wastewater, or trimmings as separate products; ecosystem-service or regeneration claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or commercial grade; natural animal origin; harvest or collection area; collection method; permit or access right; wet/dry/cleaned/dried mass basis; product grade; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | natural origin evidence, habitat and permit disclosure where relevant, mass balance closure, wet/dry/cleaned basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for sponge species, collection gear, diver service, compressed air, cleaning chemicals, drying energy, residues, packaging, or delivery services; reviewed quantitative evidence for fuel, yield, moisture loss, trimming, drying, packaging, or habitat ranges; updated FAO, fishery management, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sponge-production` | official_guidance | FAO, Sponge production chapter, https://www.fao.org/4/ac286e/AC286E02.htm | Historical qualitative capture and primary-preparation interfaces, distinguishing raw collection from non-skeletal tissue removal; not evidence of current practices, quantities, gear impacts, permits or product state. |
| `martinangeli-commercial-sponges-2022` | literature | Martinangeli et al., The global catch of commercial sponges (1950 to 2019), Sea Around Us PDF, https://s3.us-west-2.amazonaws.com/legacy.seaaroundus/researcher/dpauly/PDF/2022/Book%2C%2Bchapters%2C%2Breports/Martinangeli%2C%2BL.%2C%2BM.%2BFourt%2C%2BM.%2BButler%2C%2BA.%2BC.%2BTsikliras%2C%2BN.%2BSmith%2C%2BM.L.D.%2BPalomares%2C%2BB.%2BDerrick%2C%2BE.%2BChu%2Band%2BD.%2BPauly.%2B2022.%2B2022.%2BThe%2Bglobal%2Bcatch%2Bof%2Bcommercial%2Bsponges.pdf | commercial sponge catch context, species and fishery documentation uncertainty |
| `mass-balance-identity` | method_factor | Declared conservation/stock ledger and same-lot final-gate normalization method in PCR sections 4, 7 and 8, including measured receipts, stocks, water/tissue changes and all actual fates; no empirical yield or factor is supplied. | normalization, allocation, landing balance, yield, and delivery calculations |
