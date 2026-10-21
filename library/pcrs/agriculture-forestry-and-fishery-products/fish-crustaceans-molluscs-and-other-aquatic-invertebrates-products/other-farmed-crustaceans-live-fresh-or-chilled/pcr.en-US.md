---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other farmed crustaceans, live, fresh or chilled

## 1. Scope and Applicability

This methodology covers only whole, in-shell animals as live, fresh or chilled reference products. It excludes tailed/decapitated, peeled, picked-meat and meat-only reference products; tail mass is not an exceptional reference basis. The CPC subclass also includes shell-free forms, so this PCR is a narrower methodological subset, not an exact coverage claim.

This PCR guides foreground data package construction for other farmed crustaceans placed on the market as live, fresh, or chilled product when no more specific farmed crustacean PCR applies. It covers declared broodstock, larvae, post-larvae, juveniles, seed, supplier stock, hatchery and nursery activity where controlled by the reporting operator, pond, tank, cage, pen, raceway, recirculating, brackish-water, marine, freshwater, integrated, or other declared aquaculture systems, grow-out or fattening, harvest, grading, live holding, chilling, packaging, and release at the declared gate.

Covered products include aquaculture-produced crustaceans other than farmed crabs, lobsters, Norway lobsters, rock lobsters, cold-water shrimps and prawns, and other farmed shrimps and prawns when the product is live, fresh, or chilled and remains an unprocessed primary product. Excluded products are wild crustaceans, wild catch only held or chilled after capture, all products with a more specific canonical PCR, frozen, dried, salted, brined, cooked, canned, peeled, picked-meat, prepared, preserved, ornamental, seed sold as a separate input, and shell or processing residues modelled as separate products.

This is a fallback PCR. A conforming dataset must state the species or species group and why a more specific farmed crustacean PCR does not apply.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04392`, `Other farmed crustaceans, live, fresh or chilled`; mapping_type: narrower; whole/in-shell method subset |
| covered_products | whole in-shell reference products only: farmed crustaceans not covered by a more specific canonical PCR, sold live, fresh, or chilled from declared aquaculture, nursery, grow-out, or fattening systems |
| excluded_products | tailed/decapitated, shucked/peeled/picked-meat and meat-only reference products; farmed crabs; farmed lobsters; farmed Norway lobsters; farmed rock lobsters and sea crawfish; farmed shrimps and prawns with specific PCRs; wild crustaceans; frozen, dried, salted, brined, cooked, canned, peeled, picked-meat, prepared, preserved, ornamental, or seed products; shells, molts, mortalities, wastewater, and residues as separate products |
| representative_product | whole in-shell animal: live or chilled other farmed crustacean at declared species or species group, culture route, market size, product form, holding condition, and gate |
| production_route | broodstock, larvae, post-larvae, juvenile, seed, or supplier stock input, hatchery or nursery where controlled, grow-out or fattening husbandry, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled farmed crustacean with declared species, fallback justification, seed or broodstock source, culture system, product basis, size grade, holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | whole in-shell other farmed crustaceans as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or species group, farmed proof, fallback justification, culture system, live/fresh/chilled state, whole in-shell product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, fattening batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `declared_gate_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed crustacean market product accepted at the declared final physical gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; fallback justification; broodstock, larval, post-larval, juvenile, seed, supplier, or fattening stock source; culture system; farmed proof or controlled husbandry period; product state; whole in-shell live, fresh or chilled product basis, retaining actual whole soft-shell/molted/fattened animal status; size grade or count per kg; moisture, drainage, or ice-excluded basis; geography and declared gate; holding or chilling duration; feed regime; water source, salinity, and exchange; health, biosecurity, permit, certification, and unresolved Tiangong UUID substitutions |

The selected Tiangong reference flow is a candidate CPC 04392 identity with a broader display name. Replace it with an exact `Other farmed crustaceans, live, fresh or chilled` flow when Tiangong provides one, while retaining this PCR identity.

Mass is the primary reference basis. Count, basket, box, tub, live-tank, pond, cage, or size-grade records may be used only when net mass, count per kg or mean individual mass, product form, and sampling or tare method are retained.

Declare one actual final physical gate_release with exactly one product state, form, species and acceptance specification. Pack-out and optional delivery outputs are prior measured internal handoffs. Exclude delivery beyond the reference gate; retain actual delivery before it, never assume bypass. Only declared_gate_reference is final. Q is positive accepted net animal mass of the same lot/matched reporting population at that gate, independently weighed on a calibrated scale, excluding package tare, free water/ice and rejects while retaining native tissues/shell/water in the declared animal form.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg other farmed crustacean in the declared live, fresh, or chilled product form. |
| `fallback_identity_check` | all datasets | PCR selection evidence | declared records | Dataset metadata must state why a more specific farmed crustacean PCR does not apply and must retain species or species-group identity for future mapping. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show controlled aquaculture, grow-out, nursery, or fattening activity, not only wild capture followed by live holding, chilling, grading, or dispatch. |
| `product_form_mass_basis` | whole in-shell live, fresh, chilled or drained product records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use independently measured net whole-animal mass including its native exoskeleton/shell and tissues, excluding free water/ice and packaging tare. A whole soft-shell or recently molted crustacean remains its actual whole animal, not a shell co-product. Record drainage/temperature and matched physical state; convert only with measured same-lot drainage evidence. Tail, peeled, shucked or meat-only mass is not an admissible reference basis. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, size grade, sampling method, and product form before normalization to kg reference product. |
| `life_stage_identity` | broodstock, eggs, larvae, post-larvae, juveniles, seed, molted animals, and transferred stock | Mass or count | kg, item, or life-stage count | Life-stage records must retain species, life stage, supplier or hatchery, batch, count, mass where measurable, health status, and transfer date. |
| `feed_mass_basis` | formulated feed, fresh bait, live feed, mollusc meat, trash fish, and supplementary feed | Mass | kg | Feed records must state wet, dry, as-fed, live-feed, or formulated-feed basis. Convert between bases only with measured moisture, supplier data, or retained farm recipe. |
| `water_salinity_and_volume` | hatchery, nursery, grow-out, fattening, live holding, washing, chilling, and wastewater | Salinity, mass, or volume | ppt, kg, or m3 | Preserve controlled water volume, salinity, water exchange, make-up water, recirculation, and discharge basis. |
| `energy_fuel_chemical_and_packaging_basis` | pumps, aeration, oxygenation, water exchange, filtration, lighting, chilling, live holding, boats, vehicles, chemicals, packaging, and ice | Energy, fuel, mass, volume, or item | kWh, MJ, L, kg, m3, or item | Record original electricity, fuel, oxygen, chemicals, packaging, ice, and energy carrier units before normalizing to the reference flow. |

## 5. System Boundary

The default boundary covers foreground-controlled other farmed crustacean production to the declared farm, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, egg, larval, post-larval, juvenile, seed, or supplier stock sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased stock disclosure when supplied by another hatchery, collector, fisher, or farm.
2. Hatchery, nursery, grow-out, or fattening husbandry, including stocking, feed, water intake and exchange, aeration, oxygenation, filtration, salinity control, health management, biosecurity, molting management where relevant, mortalities, and directly controlled maintenance.
3. Harvest, grading, washing, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased seed, larvae, juveniles, feed, packaging, ice, oxygen, electricity, fuel, chemicals, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_post_larval_juvenile_seed_or_supplier_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04392`, `Other farmed crustaceans, live, fresh or chilled` |
| recursive_input_rule | farmed crustacean broodstock, larvae, post-larvae, juveniles, seed, molted animals, or fattening stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, life-stage, source, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | broodstock, hatchery, seed, juvenile, molted-stock, fattening-stock, feed, or supplier dataset, or documented source, species, batch, count or mass, life stage, health or biosecurity status, movement permission, and certification or permit evidence |
| disclosure | disclose species or species group, fallback justification, culture system, biological starting condition, farmed production evidence, stocking density, feed regime, water source, salinity and water exchange, aeration or oxygenation, health treatments, molting and mortality records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hatchery_nursery_and_stocking | Hatchery, Nursery, and Stocking | required | biological starting condition must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | per 1 kg reference flow |
| growout_and_fattening_husbandry | Grow-out and Fattening Husbandry | required |  | foreground production | per 1 kg reference flow |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | per 1 kg reference flow |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | per 1 kg reference flow |
| gate_release | Declared final physical handoff and acceptance | required | One actual declared final gate per data package; use evidenced direct pack-out or delivery path | Unique final reference responsibility | per 1 kg reference flow |

### Process: Hatchery, Nursery, and Stocking (`hatchery_nursery_and_stocking`)

#### Inputs

##### Product flows

###### Independent exchange: Purchased electricity at this node (`electricity_hatchery_nursery_and_stocking`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Purchased electricity at this node
- Flow property / unit: Energy / kWh
- Amount rule: Record this node's independent metered kWh or evidenced shared share, attribute and divide by the same Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_hatchery_nursery_and_stocking`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_electricity_hatchery_nursery_and_stocking
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_hatchery_nursery_and_stocking`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Record only actual purchased gaseous oxygen kg; retain measured temperature, pressure, purity and density for gas-volume conversion; no gas quantity is presumed. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_hatchery_nursery_and_stocking`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_oxygen_hatchery_nursery_and_stocking
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Inputs

##### Product flows

##### Waste flows

#### Outputs

##### Product flows

### Process: Grow-out and Fattening Husbandry (`growout_and_fattening_husbandry`)

#### Inputs

##### Product flows

###### Independent exchange: Purchased electricity at this node (`electricity_growout_and_fattening_husbandry`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Purchased electricity at this node
- Flow property / unit: Energy / kWh
- Amount rule: Record this node's independent metered kWh or evidenced shared share, attribute and divide by the same Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_growout_and_fattening_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_electricity_growout_and_fattening_husbandry
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_growout_and_fattening_husbandry`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Record actual diesel kg only; convert original litres using same-supply measured/documented density and temperature basis with factor/uncertainty; attribute and divide by Q. Independently record each actual combustion substance release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_growout_and_fattening_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_diesel_growout_and_fattening_husbandry
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_growout_and_fattening_husbandry`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Record only actual purchased gaseous oxygen kg; retain measured temperature, pressure, purity and density for gas-volume conversion; no gas quantity is presumed. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_growout_and_fattening_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_oxygen_growout_and_fattening_husbandry
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Inputs

##### Product flows

##### Waste flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed crustacean market product live growout biomass (`harvest_size_farmed_crustacean_biomass`)

Actual internal animal-product handoff with independently retained species, form, live/fresh/chilled state and sender/receiver; not the final reference output.

- Selected flow: Farmed crustacean market product live growout biomass
- Flow property / unit: Mass / kg
- Amount rule:  Retain this node's measured or independently evidenced calculated actual net animal mass q, product state, same-lot losses and transfer id; attribute and divide by positive final gate_release accepted net mass Q. Never fix this internal amount to 1 kg or force equality with final accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_product_packout_records_growout_and_fattening_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_size_farmed_crustacean_biomass
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed crustacean market product measured incoming lot (`animal_input_harvest_live_holding_chilling_and_packout`)

Record one concrete animal-product handoff paired to the real upstream output; retain matching actual species, form, state and quantity, losses and inherited burdens.


- Selected flow: Farmed crustacean market product measured incoming lot
- Flow property / unit: Mass / kg
- Amount rule: Pair the real upstream animal output by transfer id, species, form, state, time and independently measured net mass, retaining losses; attribute and divide by Q, never fix to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_animal_input_harvest_live_holding_chilling_and_packout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Purchased electricity at this node (`electricity_harvest_live_holding_chilling_and_packout`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Purchased electricity at this node
- Flow property / unit: Energy / kWh
- Amount rule: Record this node's independent metered kWh or evidenced shared share, attribute and divide by the same Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_electricity_harvest_live_holding_chilling_and_packout
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_harvest_live_holding_chilling_and_packout`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Record actual diesel kg only; convert original litres using same-supply measured/documented density and temperature basis with factor/uncertainty; attribute and divide by Q. Independently record each actual combustion substance release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_diesel_harvest_live_holding_chilling_and_packout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_harvest_live_holding_chilling_and_packout`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Record only actual purchased gaseous oxygen kg; retain measured temperature, pressure, purity and density for gas-volume conversion; no gas quantity is presumed. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_oxygen_harvest_live_holding_chilling_and_packout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Newly purchased ice at this node (`ice_harvest_live_holding_chilling_and_packout`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Newly purchased ice at this node
- Flow property / unit: Mass / kg
- Amount rule: Measure new purchased ice here; pair residual internal ice separately without a second purchase. Own ice production requires actual water, power, asset and release records. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_ice_harvest_live_holding_chilling_and_packout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Inputs

##### Product flows

##### Waste flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed crustacean market product market lot in its actual product state and handoff (`marketable_live_fresh_or_chilled_other_farmed_crustacean`)

Actual internal animal-product handoff with independently retained species, form, live/fresh/chilled state and sender/receiver; not the final reference output.

- Selected flow: Farmed crustacean market product market lot in its actual product state and handoff
- Flow property / unit: Mass / kg
- Amount rule:  Retain this node's measured or independently evidenced calculated actual net animal mass q, product state, same-lot losses and transfer id; attribute and divide by positive final gate_release accepted net mass Q. Never fix this internal amount to 1 kg or force equality with final accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_marketable_live_fresh_or_chilled_other_farmed_crustacean
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed crustacean market product measured incoming lot (`animal_input_delivery_to_declared_gate`)

Record one concrete animal-product handoff paired to the real upstream output; retain matching actual species, form, state and quantity, losses and inherited burdens.


- Selected flow: Farmed crustacean market product measured incoming lot
- Flow property / unit: Mass / kg
- Amount rule: Pair the real upstream animal output by transfer id, species, form, state, time and independently measured net mass, retaining losses; attribute and divide by Q, never fix to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_delivery_to_declared_gate`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_animal_input_delivery_to_declared_gate
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Purchased electricity at this node (`electricity_delivery_to_declared_gate`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Purchased electricity at this node
- Flow property / unit: Energy / kWh
- Amount rule: Record this node's independent metered kWh or evidenced shared share, attribute and divide by the same Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_delivery_to_declared_gate`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_electricity_delivery_to_declared_gate
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_delivery_to_declared_gate`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Record actual diesel kg only; convert original litres using same-supply measured/documented density and temperature basis with factor/uncertainty; attribute and divide by Q. Independently record each actual combustion substance release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_delivery_to_declared_gate`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_diesel_delivery_to_declared_gate
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_delivery_to_declared_gate`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Record only actual purchased gaseous oxygen kg; retain measured temperature, pressure, purity and density for gas-volume conversion; no gas quantity is presumed. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_delivery_to_declared_gate`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_oxygen_delivery_to_declared_gate
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Newly purchased ice at this node (`ice_delivery_to_declared_gate`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Newly purchased ice at this node
- Flow property / unit: Mass / kg
- Amount rule: Measure new purchased ice here; pair residual internal ice separately without a second purchase. Own ice production requires actual water, power, asset and release records. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_delivery_to_declared_gate`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_ice_delivery_to_declared_gate
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed crustacean market product market lot in its actual product state and handoff (`delivered_other_farmed_crustacean_at_declared_gate`)

Actual internal animal-product handoff with independently retained species, form, live/fresh/chilled state and sender/receiver; not the final reference output.

- Selected flow: Farmed crustacean market product market lot in its actual product state and handoff
- Flow property / unit: Mass / kg
- Amount rule:  Retain this node's measured or independently evidenced calculated actual net animal mass q, product state, same-lot losses and transfer id; attribute and divide by positive final gate_release accepted net mass Q. Never fix this internal amount to 1 kg or force equality with final accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivered_other_farmed_crustacean_at_declared_gate
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Declared final physical handoff (`gate_release`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed crustacean market product arriving at the final declared gate (`gate_arriving_product`)

Pair the actual direct pack-out path or evidenced pre-gate delivery path once; never input both for the same lot. Gate acceptance rejects and handoff losses remain separate gate_release responsibilities; unknown gate/state/quantity blocks completion.

- Selected flow: Farmed crustacean market product arriving at the final declared gate
- Flow property / unit: Mass / kg
- Amount rule: Independently record actual arriving net animal mass q before acceptance and its paired upstream output; attribute and divide by Q, never fix to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_release`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_gate_arriving_product
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Independent exchange: Farmed crustacean market product accepted at the declared final physical gate (`declared_gate_reference`)

Declare one actual final physical gate_release with exactly one product state, form, species and acceptance specification. Pack-out and optional delivery outputs are prior measured internal handoffs. Exclude delivery beyond the reference gate; retain actual delivery before it, never assume bypass. Only declared_gate_reference is final. Q is positive accepted net animal mass of the same lot/matched reporting population at that gate, independently weighed on a calibrated scale, excluding package tare, free water/ice and rejects while retaining native tissues/shell/water in the declared animal form.

- Selected flow: Farmed crustacean market product accepted at the declared final physical gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_release`
- Range: Same-positive-accepted-net-mass Q/Q normalization identity
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `pcr-gate-accounting-method`

- Sources: `pcr-gate-accounting-method`


## 7. Allocation and Co-product Handling

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled other farmed crustacean output | Treat the declared reference product as the single reference product unless shells, molts, mortalities, residues, or processing outputs are intentionally recovered as co-products. | marketable mass, rejected mass, recovered co-product mass, destination, and revenue or physical relation where co-products are claimed | `mass-balance-identity` |
| `fallback_scope_priority` | all datasets | If a more specific canonical farmed crustacean PCR exists for the species or product state, use that PCR instead of this fallback category. | species, route, product state, classification mapping, and PCR selection note | `mass-balance-identity` |
| `shared_system_allocation` | multi-species, multi-lot, polyculture, or shared-service farms | Allocate shared stock, feed, water, electricity, fuel, oxygen, chemicals, packaging, and infrastructure by direct measurement, batch log, biomass-time, pond-time, cage-time, package count, or another declared physical driver before economic allocation. | meters, service logs, pond or cage occupancy, biomass-time, harvest mass, and allocation driver | `asc-farm-standard-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | `hatchery_nursery_and_stocking` | biological stock, life stage, accepted stocking | hatchery log, supplier invoice, permit, transfer log, stocking log, mortality log | species, n.e.c. justification, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, pond/cage/tank, accepted count, accepted mass, transfer mortality ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | batch records reconciled to culture-unit inventory ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, date, permit id | each stocking event | full reporting period or production cycle | hatchery, supplier, transfer route, pond, cage, tank, or farm site | per 1 kg reference flow | supplier documents, permits, transfer logs, culture-unit inventory, mortality records, and manager sign-off |
| `cp_hatchery_nursery_input_records` | `hatchery_nursery_and_stocking` | feed, live feed, water, energy, chemicals, nursery materials | feed invoice, live-feed log, water meter, electricity meter, chemical log, nursery log | feed type, supplier, mass, basis, water, salinity, electricity, oxygen, chemical, life stage, batch, culture unit ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | invoices, meters, hatchery logs, and supplier declarations ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, m3, kWh, L, dose, item, date | each batch and monthly reconciliation | hatchery and nursery period | hatchery, nursery, tank, pond, or supplier | per 1 kg reference flow | invoices, logs, meter readings, supplier specifications, and operator review |
| `cp_growout_husbandry_records` | `growout_and_fattening_husbandry` | stock, feed, bait, water, energy, fuel, chemicals, husbandry inputs | farm log, feed log, water meter, fuel invoice, electricity meter, chemical log, treatment record | stocked biomass, feed, bait, water, salinity, electricity, fuel, oxygen, chemical, treatment, culture unit, dates ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | farm logs, meters, invoices, and treatment records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, m3, kWh, L, MJ, dose, item | each batch and monthly reconciliation | full grow-out or fattening cycle | pond, cage, tank, raceway, RAS, or farm site | per 1 kg reference flow | farm logs, invoices, meter readings, allocation worksheet, and supervisor review |
| `cp_harvest_product_packout_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | harvest biomass, product form, packaging, marketable output | harvest log, grading sheet, live-holding log, temperature log, packout record, sales note | harvest date, species, culture unit, live mass, product form, count, size grade, chilled or live state, packaging, ice, rejected mass, marketable mass, destination ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | calibrated scales, grading records, temperature logs, sales records, and packhouse reconciliation ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, grade, date | each harvest and packing lot | full reporting period or cycle | harvest site, live-holding unit, packhouse, or dispatch gate | per 1 kg reference flow | scale calibration, harvest sheets, packout records, dispatch records, and sales reconciliation |
| `cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest biomass, product form, packaging, marketable output | harvest log, grading sheet, live-holding log, temperature log, packout record, sales note | harvest date, species, culture unit, live mass, product form, count, size grade, chilled or live state, packaging, ice, rejected mass, marketable mass, destination ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | calibrated scales, grading records, temperature logs, sales records, and packhouse reconciliation ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, grade, date | each harvest and packing lot | full reporting period or cycle | harvest site, live-holding unit, packhouse, or dispatch gate | per 1 kg reference flow | scale calibration, harvest sheets, packout records, dispatch records, and sales reconciliation |
| `cp_mortality_residue_and_discharge_records_hatchery_nursery_and_stocking` | `hatchery_nursery_and_stocking` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | husbandry records, incident reports, waste tickets, and discharge records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, m3, item, date | each event and monthly reconciliation | full reporting period or cycle | culture unit, hatchery, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality logs, waste transfer notes, discharge files, incident records, and supervisor review |
| `cp_mortality_residue_and_discharge_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | husbandry records, incident reports, waste tickets, and discharge records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, m3, item, date | each event and monthly reconciliation | full reporting period or cycle | culture unit, hatchery, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality logs, waste transfer notes, discharge files, incident records, and supervisor review |
| `cp_mortality_residue_and_discharge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | husbandry records, incident reports, waste tickets, and discharge records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, m3, item, date | each event and monthly reconciliation | full reporting period or cycle | culture unit, hatchery, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality logs, waste transfer notes, discharge files, incident records, and supervisor review |
| `cp_mortality_residue_and_discharge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | husbandry records, incident reports, waste tickets, and discharge records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, m3, item, date | each event and monthly reconciliation | full reporting period or cycle | culture unit, hatchery, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality logs, waste transfer notes, discharge files, incident records, and supervisor review |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, oxygen, temperature, live-holding duration, return logistics ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | carrier documents, vehicle logs, meter records, and dispatch reconciliation ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, km, tonne-km, L, kWh, h, deg C | each delivery route | delivery period in declared scope | delivery route, vehicle, vessel, or carrier | per 1 kg reference flow | carrier invoice, route record, temperature log, and dispatch sign-off |
| `cp_atomic_hatchery_nursery_and_stocking` | `hatchery_nursery_and_stocking` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `hatchery_nursery_and_stocking` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_atomic_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `growout_and_fattening_husbandry` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_atomic_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `harvest_live_holding_chilling_and_packout` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_atomic_delivery_to_declared_gate` | `delivery_to_declared_gate` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `delivery_to_declared_gate` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_gate_release` | `gate_release` | Unique final acceptance, arriving lot, rejects and loss | calibrated weighing, physical custody and acceptance records | actual declared gate/recipient/date; unique upstream route/transfer; actual species/stage/form/state; arriving mass; gross/tare/free-water-ice/rejects; positive accepted net mass Q; destinations/losses/stocks; attribution population | Independently weigh on a calibrated scale at the same actual final gate; verify actual state/native animal composition, exclude tare/free water/ice/rejects, and retain all acceptance losses/fates | kg | each physical handoff | complete same-lot/matched reporting population | gate_release | per 1 kg reference flow | signed custody/acceptance, calibration and independent deductions/loss records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | Normalized exchange = attributable native quantity q/Q; Q is only positive same-lot gate_release accepted net animal mass. Preserve original batch/per-1000-kg records, units and product-form basis, using explicit same_gate_normalization conversion. | q; Q; `cp_gate_release`; own-node records | native unit per kg reference flow | `pcr-gate-accounting-method` |
| `stock_acceptance_balance` | stocking and transfer | accepted stocked biomass = source stock mass + transferred-in mass - transfer mortalities - rejected stock - documented transfer losses | source stock, transfers, mortalities, rejects, transfer loss | accepted stocked biomass | `mass-balance-identity` |
| `growth_and_survival_balance` | grow-out and fattening | harvest-size biomass = stocked biomass + biological growth - mortalities - escapes - rejects, checked against harvest records | stocked biomass, feed, mortalities, escapes, harvest records | harvest-size biomass and survival disclosure | `asc-farm-standard-2025` |
| `product_form_yield` | harvested and packed product | Reconcile independently measured net harvested animal input, opening/closing stocks and evidenced physical mass changes with onward product, other intended outputs, rejects and actual animal losses on the same declared product-form basis. Each amount belongs to one destination and is counted once. Ice, free water and packaging tare are excluded only from a gross weighing that actually includes them, never subtracted from net animal mass. Determine final accepted net product mass independently at the actual final gate; do not infer it by repeated deductions from an already net or accepted amount. | harvest mass, rejected mass, product-form records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

| `same_gate_normalization` | all inventory rows | Retain actual attributable native batch quantity q and positive final same-lot accepted net animal mass Q; exchange per 1 kg = q/Q; exchange per 1000 kg = 1000×q/Q. For an original per-1000-kg record q_1000, exchange per 1 kg = q_1000/1000 only after matching its denominator to the same Q/product form/population. Measure internal quantities, life-stage yields and stocks independently; never fix them to final 1 kg. | q; Q; cp_gate_release; own-node records | own native unit per 1 kg reference flow and retained original bases | `pcr-gate-accounting-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and biological stock | Species or species group, fallback justification, farmed status, biological starting condition, culture route, product form, and declared gate must be explicit. | reference flow metadata, stocking records, PCR selection note, harvest records, and sales or dispatch records |
| `dq_mass_balance` | stock, feed, mortality, harvest, and packout | Stocking, growth, mortality, escape, molt or shell residue, harvest, reject, and marketable product records must reconcile within declared tolerance; unexplained gaps require disclosure. | mass-balance worksheet, scale tickets, culture-unit records, packout records, and supervisor review |
| `dq_feed_and_water_basis` | feed, bait, water, and chemicals | Feed and bait basis, water salinity and exchange, treatment chemicals, and discharge route must be explicit. | invoices, feed declarations, farm logs, water-quality logs, treatment records, and discharge records |
| `dq_temporal_coverage` | all foreground rows | Data must cover the full production, grow-out, fattening, and final handling period, or disclose partial-cycle, partial-batch, or proxy coverage. | reporting calendar, batch records, harvest records, and coverage statement |
| `dq_boundary_disclosure` | all datasets | The dataset must disclose whether upstream stock, feed, water, packaging, delivery, capital goods, and infrastructure are foreground, linked upstream datasets, or excluded by scope. | dataset boundary statement, supplier records, upstream dataset links, and scope declaration |
| `collect_biological_stock_input` | `hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Biological stock input . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass or count with life stage / kg, item, or stage count <br> - Amount rule: measured count, mass where measurable, life stage, and accepted quantity entering hatchery, nursery, grow-out, or fattening <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biological_stocking_records` <br> - Sources: `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_hatchery_and_nursery_inputs` | `hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Hatchery and nursery inputs . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass, volume, energy, or count / kg, g, L, m3, kWh, dose, or item <br> - Amount rule: measured hatchery feed, live feed, water, electricity, oxygen, chemicals, and nursery materials by batch, life stage, and basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_hatchery_nursery_input_records` <br> - Sources: `asc-feed-standard-2026`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_hatchery_mortalities_molts_sludge_and_residue` | `hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Hatchery mortalities, molts, sludge, and residue . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass or count / kg or item <br> - Amount rule: measured mortality count, residue mass, sludge, rejected stock, and disposal or recovery route <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_mortality_residue_and_discharge_records_hatchery_nursery_and_stocking` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_accepted_stock_for_growout_or_fattening` | `hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Accepted stock for grow-out or fattening . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass or count / kg or item <br> - Amount rule: calculated accepted stock after receipt, hatchery, nursery, grading, acclimation, and transfer losses <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: accepted stock entering grow-out or fattening <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_biological_stocking_records` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_growout_feed_water_energy_and_husbandry_inputs` | `growout_and_fattening_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Grow-out feed, water, energy, and husbandry inputs . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass, volume, energy, fuel, or item count / kg, m3, kWh, L, MJ, dose, or item <br> - Amount rule: measured stocked biomass, feed, bait, water, energy, fuel, oxygen, chemicals, culture material, and site-service inputs by batch and culture unit <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per grow-out or fattening batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout_husbandry_records` <br> - Sources: `asc-feed-standard-2026`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_mortalities_molts_shells_sludge_discharge_and_escapes` | `growout_and_fattening_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Mortalities, molts, shells, sludge, discharge, and escapes . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass, volume, or count / kg, m3, or item <br> - Amount rule: measured mortality count, molt or shell mass, sludge, wastewater, escapes where relevant, disposal route, recovery route, and receiving environment <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per grow-out or fattening batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_mortality_residue_and_discharge_records_growout_and_fattening_husbandry` <br> - Sources: `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_harvested_crustaceans_and_final_handling_inputs` | `harvest_live_holding_chilling_and_packout` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Harvested crustaceans and final handling inputs . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass, volume, energy, or item count / kg, m3, kWh, or item <br> - Amount rule: measured harvested biomass, packaging, ice, washing, live-holding oxygen, electricity, refrigerant service, and dispatch preparation quantities <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout` <br> - Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_handling_rejects_mortalities_shell_wastewater_and_packaging_waste` | `harvest_live_holding_chilling_and_packout` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Handling rejects, mortalities, shell, wastewater, and packaging waste . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Mass or volume / kg or m3 <br> - Amount rule: measured rejected product, handling losses, mortalities, shell or molt residue, wastewater, packaging waste, disposal route, recovery route, and receiving environment <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_mortality_residue_and_discharge_records_harvest_live_holding_chilling_and_packout` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_delivery_fuel_and_live_or_chilled_delivery_support` | `delivery_to_declared_gate` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Delivery fuel and live or chilled delivery support . This row records the selected exchange within the declared process and system boundary. <br> - Flow property / unit: Fuel, energy, mass, volume, or transport service / L, MJ, kWh, kg, m3, or tonne-km <br> - Amount rule: include only when the declared reference flow is delivered beyond the farm, harvest, dispatch, or packhouse gate; record distance, mode, load factor, live or chilled condition, and return logistics where relevant <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1,000 kg delivered reference product or tonne-km <br> - Basis kind: Transport service (`transport_service`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery_records` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_gate_rejects` | `gate_release` | Independently identify each actual acceptance reject, mortality, package/water/ice handoff, loss, service, fuel, asset and release with quantity, unit, evidence, own range, Q normalization and fate; add separate atomic cards. Rejects are not automatically waste and cannot be dropped without their burdens. | cp_gate_release; actual fate and resource records |
| `dq_final_gate_balances` | all nodes and reporting periods | Preserve original batch/per-1000-kg records, life-stage yields, opening/closing stocks and failed events; attribute once and normalize by the same actual final-gate Q. Measure external abstraction, supplied water, internal circulation and actual return/discharge separately; never deduct internal circulation twice. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow or avoided burden. Actual freight payload includes carrier water, ice and packaging; empty returns retain actual fuel/vehicle service and explicit attribution. A complete service and its covered materials, energy, assets, wastes and direct releases cannot both be counted. | Own-node records, same-lot water/animal/substance balances, service scope, actual load and duty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | applicable dataset and actual exchanges | Before dataset completion verify one UUID matching actual species, farmed origin, stage, product state/form, property and final physical gate. A category-name match does not establish state/gate compatibility; live farm-gate flow cannot substitute chilled delivered product, nor landing-catch flow controlled aquaculture output. | |
| `val_fallback_scope` | applicable dataset and actual exchanges | Dataset states why no more specific farmed crustacean PCR applies. | |
| `val_farmed_proof` | applicable dataset and actual exchanges | Dataset has controlled aquaculture, nursery, grow-out, or fattening evidence beyond wild capture and post-capture handling. | |
| `val_product_state` | applicable dataset and actual exchanges | Product state is live, fresh, or chilled and excludes frozen, dried, salted, brined, prepared, preserved, ornamental, or processed product. | |
| `val_mass_basis` | applicable dataset and actual exchanges | Product mass basis is declared as live, fresh, chilled, drained, ice-excluded, whole, soft-shell, molted, or another stated basis. | |
| `val_structured_sync` | applicable dataset and actual exchanges | `structured.yaml` is regenerated from the bilingual Markdown after edits. | |
| `val_unique_gate_atomic_completion` | applicable dataset and actual exchanges | Require exactly one actual gate_release and one final declared_gate_reference output, consistent same-lot Q/product form/state/gate, paired measured internal quantities and every applicable collection obligation. Final completion and validation require each actual exchange to have an independent atomic card, own quantity/native unit, collection/calculation and Range/uncertainty evidence, normalization, actual fate and verified UUID. Unknown identity, activity, gate, quantity, range or fate blocks completion, never zero or presumed bypass; checker pass does not prove actual dataset completeness. | |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | market-size product transfers and final reference | Every market-size animal transfer and final reference product must retain its actual whole in-shell form. Tailed/decapitated, peeled/picked-meat or meat-only final references are outside this methodology. No measured yield or section-8 completion claim enlarges this boundary. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for other farmed crustaceans, live, fresh, or chilled |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when aquaculture records are retained |
| allowed_use | whole in-shell methodology only: LCA modelling of declared other farmed crustacean live, fresh, or chilled product at farm, harvest, dispatch, packhouse, or delivered gate |
| excluded_use | tailed, peeled/picked-meat or meat-only reference products outside this methodology; products covered by a more specific crustacean PCR; wild crustaceans; frozen, dried, smoked, salted, brined, cooked, canned, peeled, picked-meat, prepared, preserved, ornamental, seed, shell, molt, mortality, wastewater, or residue products; ecosystem-service claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or species group; fallback justification; farmed status; biological starting condition; culture system; stocking date and biomass; product form; size grade; live/fresh/chilled state; feed and water basis; mortality and discharge disclosure; harvest and holding condition; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | candidate reference-flow caveat, fallback PCR justification, farmed production evidence, mass balance closure, feed and water basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for exact CPC 04392 product, species-specific crustaceans, larvae, juveniles, feed, bait, water, oxygen, chemicals, molts, shells, mortalities, residues, packaging, ice, refrigerant, or delivery services; reviewed quantitative evidence for feed conversion, survival, fuel, water exchange, chemical, packaging, or chilling ranges; new specific PCR that supersedes this fallback; updated Codex, ASC, FAO, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled crustacean handling, hygiene, transport, and product-state context |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council, ASC Farm Standard v1.0.1, 2025, https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | farm management, traceability, mortality, escape, health, welfare, and environmental disclosure |
| `asc-feed-standard-2026` | standard | Aquaculture Stewardship Council, ASC Feed Standard v1.2 update, https://asc-aqua.org/producers/get-certified-feed-mill/asc-feed-standard-v1-2-update/ | feed supplier and ingredient disclosure context |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus biological growth minus mortalities, escapes, rejects, and losses under declared product basis | normalization, allocation, stock balance, yield, and delivery calculations |
| `pcr-gate-accounting-method` | method_factor | Declared prospective gate, independent measurement and batch-normalization method in this PCR sections 3–9; not external empirical data | Unique final Q/Q reference, measured internal amounts, q/Q and 1000×q/Q conversion and atomic completion duties |
