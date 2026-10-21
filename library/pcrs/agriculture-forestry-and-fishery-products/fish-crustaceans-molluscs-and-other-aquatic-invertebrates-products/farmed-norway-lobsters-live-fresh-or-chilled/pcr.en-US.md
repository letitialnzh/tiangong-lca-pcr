---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-norway-lobsters-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed Norway lobsters, live, fresh or chilled

## 1. Scope and Applicability

This methodology covers only whole, in-shell animals as live, fresh or chilled reference products. It excludes tailed/decapitated, peeled, picked-meat and meat-only reference products; tail mass is not an exceptional reference basis. The CPC subclass also includes shell-free forms, so this PCR is a narrower methodological subset, not an exact coverage claim.

This PCR guides foreground data package construction for farmed Norway lobsters, Nephrops norvegicus, placed on the market as live, fresh, or chilled product. It covers declared aquaculture routes including broodstock or berried-female supply, egg or larval collection, hatchery larviculture, postlarval or juvenile nursery, controlled grow-out in tanks, recirculating systems, sediment or burrow-substrate units, compartments, experimental sea-based systems, or other declared Nephrops aquaculture systems, harvest, grading, live holding, chilling, packaging, and release at the declared gate.

The cited hatchery handbook reports 2012–2014 experimental/pilot larval and early-juvenile work and prospective release mechanisms. It does not establish current commercial edible growout or market delivery. This prospective methodology applies only when primary records independently prove controlled farmed production through the market-size harvest lot and actual final gate. Hatchery release followed by ordinary wild recapture is not proof of farmed origin; seed-only/release projects are outside this market-product reference.

Excluded products are wild Norway lobsters; Homarus lobsters; rock lobster and other sea crawfish; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved Norway lobster products; eggs, larvae, postlarvae, or juveniles sold as separate aquaculture inputs; and shells, molts, sludge, and residues modelled as separate products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-norway-lobsters-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04342`, `Farmed Norway lobsters, live, fresh or chilled`; mapping_type: narrower; whole/in-shell method subset |
| covered_products | whole in-shell reference products only: farmed Norway lobsters, Nephrops norvegicus, sold live, fresh, or chilled from declared aquaculture, hatchery, nursery, controlled grow-out, sediment-substrate, compartment, recirculating, or enhancement production systems with traceable harvest lots |
| excluded_products | tailed/decapitated, shucked/peeled/picked-meat and meat-only reference products; wild Norway lobsters; wild catch only held, chilled, graded, or dispatched after capture; Homarus lobsters; rock lobster and other sea crawfish; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved products; eggs, larvae, postlarvae, or juveniles sold as seed; shells, molts, sludge, and residues as separate products |
| representative_product | whole in-shell animal: live or chilled farmed Nephrops norvegicus at declared market size and declared whole in-shell product form |
| production_route | broodstock or berried-female supply, hatchery and larval rearing, postlarval or juvenile nursery, controlled grow-out or sediment-substrate culture, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled Norway lobster with declared Nephrops species identity, broodstock or seed source, culture system, size grade, whole in-shell product basis, holding or chilling condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | whole in-shell farmed Norway lobsters as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared Nephrops norvegicus identity, farmed proof, culture system, live/fresh/chilled state, whole in-shell product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, grow-out batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `declared_gate_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed Nephrops norvegicus accepted at the declared final physical gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Nephrops norvegicus identity; broodstock, berried female, egg, larval, postlarval, juvenile, or grow-out stock source; culture system; farmed proof or controlled husbandry period; product state; whole in-shell live, fresh or chilled product basis; size grade, carapace length, individual mass, or count per kg; sex or maturity class when commercially material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime; water temperature, salinity, sediment or shelter basis, and exchange; health, biosecurity, permit, or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete.

Mass is the primary reference basis. Count, crate, tote, live-tank, compartment, burrow unit, size-grade, carapace-length, or individual-weight records may be used only when net mass, count per kg or mean individual mass, product form, sampling method, and tare method are retained.

Declare one actual final physical gate_release with exactly one product state, form, species and acceptance specification. Pack-out and optional delivery outputs are prior measured internal handoffs. Exclude delivery beyond the reference gate; retain actual delivery before it, never assume bypass. Only declared_gate_reference is final. Q is positive accepted net animal mass of the same lot/matched reporting population at that gate, independently weighed on a calibrated scale, excluding package tare, free water/ice and rejects while retaining native tissues/shell/water in the declared animal form.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed Norway lobster in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show controlled aquaculture, hatchery, nursery, grow-out, sediment-substrate, compartment, recirculating, or enhancement activity, not only wild capture followed by live holding, chilling, grading, or dispatch. |
| `product_form_mass_basis` | whole in-shell live, fresh, chilled or drained product records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use independently measured net whole-animal mass including its native exoskeleton/shell and tissues, excluding free water/ice and packaging tare. A whole soft-shell or recently molted crustacean remains its actual whole animal, not a shell co-product. Record drainage/temperature and matched physical state; convert only with measured same-lot drainage evidence. Tail, peeled, shucked or meat-only mass is not an admissible reference basis. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, carapace length or size grade, sampling method, and product form before normalization to kg reference product. |
| `life_stage_identity` | broodstock, berried females, eggs, zoea larvae, postlarvae, juveniles, and transferred stock | Mass or count | kg, item, egg count, larval count, or juvenile count | Life-stage records must retain species, life stage, supplier or hatchery, batch, count, mass where measurable, development stage, health status, and transfer date. |
| `feed_mass_basis` | Artemia, enriched nauplii, mussel or shrimp pieces, formulated feed, pelleted diet, bait, and broodstock feed | Mass, count, or service basis | kg, g, item, cyst count, or tank-day | Feed records must state wet, dry, as-fed, live-feed, formulated-feed, or natural-foraging basis. |
| `burrow_substrate_and_shelter_basis` | sediment, muddy sand, artificial burrows, tubes, shelters, compartments, trays, and tanks | Mass, area, volume, or item count | kg, m2, m3, or item | Records must retain substrate type, replacement or cleaning rate, area or item count, animal density, and fate of spent material. |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and wastewater | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve controlled water volume, temperature, salinity, water-exchange, recirculation, make-up water, and discharge basis. |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, chilling, heating, filtration, lighting, live holding, vessel work, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, water-treatment chemicals, oxygen, anesthetic, salt, and biosecurity inputs | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | Record product quantity, active ingredient where applicable, treatment purpose, diagnosis or health plan link, legal status, and harvest eligibility consequence. |
| `packaging_and_ice_basis` | crates, boxes, bags, liners, bands, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | Packaging, ice, live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled farmed Norway lobster production to the declared farm, hatchery, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, berried female, egg, larval, postlarval, juvenile, or grow-out stock sourcing, including wild-sourced broodstock only when used as biological input to a controlled aquaculture production route.
2. Hatchery, larval, nursery, controlled grow-out, sediment-substrate, burrow-shelter, compartment, recirculating, or enhancement husbandry, including stocking, feed, water intake and exchange, aeration, oxygenation, filtration, temperature control, salinity control, health management, biosecurity, mortalities, molts, and directly controlled maintenance.
3. Harvest, grading, washing, banding if used, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased feed, live feed, broodstock, eggs, larvae, postlarvae, juveniles, containers, shelters, substrate, packaging, ice, oxygen, electricity, fuel, and chemicals require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_berried_female_egg_larval_postlarval_juvenile_or_growout_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04342`, `Farmed Norway lobsters, live, fresh or chilled` |
| recursive_input_rule | farmed Norway lobster broodstock, berried females, eggs, larvae, postlarvae, juveniles, or grow-out stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, life-stage, source, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | broodstock, hatchery, egg, larval, postlarval, juvenile, grow-out stock, or supplier dataset, or documented source, species, batch, count or mass, life stage, health or biosecurity status, movement permission, and certification or permit evidence |
| disclosure | disclose Nephrops identity, culture system, biological starting condition, farmed production evidence, stocking density or compartment count, feed regime, water source, temperature, salinity and water exchange, substrate or burrow-shelter basis, aeration or oxygenation, health treatments, mortality and molt records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| broodstock_hatchery_nursery_and_stocking | Broodstock, Hatchery, Nursery, and Stocking | required | biological starting condition must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | per 1 kg reference flow |
| growout_and_burrow_husbandry | Grow-out and Burrow Husbandry | required | include tank, RAS, sediment-substrate, artificial burrow, compartment, sea-based, or declared grow-out system | foreground production | per 1 kg reference flow |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | per 1 kg reference flow |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | per 1 kg reference flow |
| gate_release | Declared final physical handoff and acceptance | required | One actual declared final gate per data package; use evidenced direct pack-out or delivery path | Unique final reference responsibility | per 1 kg reference flow |

### Process: Broodstock, Hatchery, Nursery, and Stocking (`broodstock_hatchery_nursery_and_stocking`)

#### Inputs

##### Product flows

###### Independent exchange: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_broodstock_hatchery_nursery_and_stocking`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Record only actual purchased gaseous oxygen kg; retain measured temperature, pressure, purity and density for gas-volume conversion; no gas quantity is presumed. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_broodstock_hatchery_nursery_and_stocking`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_oxygen_broodstock_hatchery_nursery_and_stocking
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Inputs

##### Product flows

###### Hatchery and nursery electricity (`hatchery_nursery_electricity`)

This card records only actual hatchery/nursery electricity owned by this node, outside any inclusive service. Retain metered kWh, the documented once-only attribution and the same positive accepted final-gate net animal mass Q. No numerical Range is supplied: collect independent representative range or measurement-uncertainty evidence in kWh per kg of that final reference; an unresolved quantitative evidence need cannot become a default, zero or a QA pass. Original per-1000-kg records convert by /1000 only for that same final Q, state and population; a stage-based intensity requires the independently measured stage output to recover its kWh numerator before division by Q.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual node-owned metered kWh, attributed once and divided by the same positive final-gate accepted net animal kg Q; preserve raw readings and original denominator evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking`
- Sources: `nephrops-hatchery-handbook-2015`, `asc-farm-standard-2025`

##### Waste flows

##### Elementary flows

No default elementary input is specified for hatchery and nursery. Add site-specific seawater withdrawal, waterborne emissions, direct refrigerant loss, or land or marine area occupation flows when the Tiangong identity and site scope are selected.

#### Outputs

##### Product flows

### Process: Grow-out and Burrow Husbandry (`growout_and_burrow_husbandry`)

#### Inputs

##### Product flows

###### Independent exchange: Purchased electricity at this node (`electricity_growout_and_burrow_husbandry`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Purchased electricity at this node
- Flow property / unit: Energy / kWh
- Amount rule: Record this node's independent metered kWh or evidenced shared share, attribute and divide by the same Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_growout_and_burrow_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_electricity_growout_and_burrow_husbandry
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_growout_and_burrow_husbandry`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Record actual diesel kg only; convert original litres using same-supply measured/documented density and temperature basis with factor/uncertainty; attribute and divide by Q. Independently record each actual combustion substance release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_growout_and_burrow_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_diesel_growout_and_burrow_husbandry
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_growout_and_burrow_husbandry`)

Record only actual use at this node outside complete-service coverage; this conditional candidate does not establish occurrence. Collect each own quantity, supply/activity scope and range evidence independently; unknown is not zero and covered full-service components cannot recur.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Record only actual purchased gaseous oxygen kg; retain measured temperature, pressure, purity and density for gas-volume conversion; no gas quantity is presumed. Attribute and divide by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_growout_and_burrow_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_oxygen_growout_and_burrow_husbandry
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed Nephrops norvegicus live growout biomass (`harvest_size_farmed_norway_lobsters`)

Actual internal animal-product handoff with independently retained species, form, live/fresh/chilled state and sender/receiver; not the final reference output.

- Selected flow: Farmed Nephrops norvegicus live growout biomass
- Flow property / unit: Mass / kg
- Amount rule:  Retain this node's measured or independently evidenced calculated actual net animal mass q, product state, same-lot losses and transfer id; attribute and divide by positive final gate_release accepted net mass Q. Never fix this internal amount to 1 kg or force equality with final accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_mass_records_growout_and_burrow_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_size_farmed_norway_lobsters
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed Nephrops norvegicus measured incoming lot (`animal_input_harvest_live_holding_chilling_and_packout`)

Record one concrete animal-product handoff paired to the real upstream output; retain matching actual species, form, state and quantity, losses and inherited burdens.


- Selected flow: Farmed Nephrops norvegicus measured incoming lot
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

##### Elementary flows

No default elementary flow is specified for final handling. Add refrigerant losses, wastewater emissions, or direct air emissions when measured or required by study scope.

#### Outputs

##### Product flows

###### Independent exchange: Farmed Nephrops norvegicus market lot in its actual product state and handoff (`marketable_farmed_norway_lobster_reference_product`)

Actual internal animal-product handoff with independently retained species, form, live/fresh/chilled state and sender/receiver; not the final reference output.

- Selected flow: Farmed Nephrops norvegicus market lot in its actual product state and handoff
- Flow property / unit: Mass / kg
- Amount rule:  Retain this node's measured or independently evidenced calculated actual net animal mass q, product state, same-lot losses and transfer id; attribute and divide by positive final gate_release accepted net mass Q. Never fix this internal amount to 1 kg or force equality with final accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_marketable_farmed_norway_lobster_reference_product
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed Nephrops norvegicus measured incoming lot (`animal_input_delivery_to_declared_gate`)

Record one concrete animal-product handoff paired to the real upstream output; retain matching actual species, form, state and quantity, losses and inherited burdens.


- Selected flow: Farmed Nephrops norvegicus measured incoming lot
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

##### Waste flows

##### Elementary flows

No default elementary flow is specified for delivery. Add direct vehicle emissions only when the selected modelling approach records elementary emissions in the foreground rather than through an upstream fuel or transport process.

#### Outputs

##### Product flows

###### Independent exchange: Farmed Nephrops norvegicus market lot in its actual product state and handoff (`delivered_farmed_norway_lobster`)

Actual internal animal-product handoff with independently retained species, form, live/fresh/chilled state and sender/receiver; not the final reference output.

- Selected flow: Farmed Nephrops norvegicus market lot in its actual product state and handoff
- Flow property / unit: Mass / kg
- Amount rule:  Retain this node's measured or independently evidenced calculated actual net animal mass q, product state, same-lot losses and transfer id; attribute and divide by positive final gate_release accepted net mass Q. Never fix this internal amount to 1 kg or force equality with final accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivered_farmed_norway_lobster
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Declared final physical handoff (`gate_release`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed Nephrops norvegicus arriving at the final declared gate (`gate_arriving_product`)

Pair the actual direct pack-out path or evidenced pre-gate delivery path once; never input both for the same lot. Gate acceptance rejects and handoff losses remain separate gate_release responsibilities; unknown gate/state/quantity blocks completion.

- Selected flow: Farmed Nephrops norvegicus arriving at the final declared gate
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

###### Independent exchange: Farmed Nephrops norvegicus accepted at the declared final physical gate (`declared_gate_reference`)

Declare one actual final physical gate_release with exactly one product state, form, species and acceptance specification. Pack-out and optional delivery outputs are prior measured internal handoffs. Exclude delivery beyond the reference gate; retain actual delivery before it, never assume bypass. Only declared_gate_reference is final. Q is positive accepted net animal mass of the same lot/matched reporting population at that gate, independently weighed on a calibrated scale, excluding package tare, free water/ice and rejects while retaining native tissues/shell/water in the declared animal form.

- Selected flow: Farmed Nephrops norvegicus accepted at the declared final physical gate
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

Avoid allocation where feasible by collecting separate batch, tank, substrate unit, compartment, holding, and pack-out records. When the same foreground system produces multiple saleable species, size grades, seed, juveniles, market lobsters, shells, molts, or other products, apply the hierarchy below:

1. Use physical subdivision when records identify separate culture units, batches, species, size grades, or handling lots.
2. Use causal physical allocation when resource use is driven by measured biomass, count, compartment occupancy, feed intake, water volume, holding duration, tonne-kilometres, or live-tank service.
3. Use economic allocation only when physical subdivision and causal physical allocation are not possible; disclose prices, period, market, and sensitivity.
4. Treat mortalities, culls, molts, wastewater, sludge, spent substrate, and used packaging as waste unless they leave the system as saleable co-products with documented market value and handling.

Wild Norway lobsters, Homarus lobsters, rock lobster and other sea crawfish, and processed Norway lobster products must be separated into their own PCR categories or modelled as co-products with explicit classification disclosure.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | `broodstock_hatchery_nursery_and_stocking` | biological starting stock, accepted stock, stocking, transfers | hatchery logs, supplier invoices, movement permits, batch records | species, life stage, source, batch id, count, mass where available, mean size, health status, movement date, accepted count, rejected count ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from hatchery, nursery, supplier, stocking, and transfer records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, egg count, larval count, juvenile count | each batch or transfer | full production batch or reporting period | all biological stock entering the declared production route | per 1 kg reference flow | supplier document, hatchery log, health certificate, movement permit, count or weighing record |
| `cp_feed_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | feed, bait, live feed, natural-foraging claim | feed invoices, recipes, feeding logs, compartment records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from invoices, hatchery recipes, feed logs, and grow-out records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, g, L, item, cyst count, compartment-month | each feeding event or batch summary | full production batch or reporting period | all feed and natural-foraging evidence for included production units | per 1 kg reference flow | invoice, recipe, feed log, natural-foraging system record, mass or count measurement |
| `cp_feed_records_growout_and_burrow_husbandry` | `growout_and_burrow_husbandry` | feed, bait, live feed, natural-foraging claim | feed invoices, recipes, feeding logs, compartment records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from invoices, hatchery recipes, feed logs, and grow-out records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, g, L, item, cyst count, compartment-month | each feeding event or batch summary | full production batch or reporting period | all feed and natural-foraging evidence for included production units | per 1 kg reference flow | invoice, recipe, feed log, natural-foraging system record, mass or count measurement |
| `cp_substrate_shelter_and_culture_unit_records` | `growout_and_burrow_husbandry` | sediment, shelters, artificial burrows, compartments, tanks, density | culture-unit log, substrate issue record, cleaning log, maintenance record | substrate type, shelter type, item count, mass, area, volume, animal count, density, deployment date, cleaning or replacement date, fate ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from culture-unit records, inventory logs, weighing, and cleaning records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, m2, m3, animal count | each deployment, replacement, cleaning, or batch | full grow-out period | all grow-out culture units | per 1 kg reference flow | inventory record, culture-unit map, cleaning record, disposal record |
| `cp_water_temperature_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | water, temperature, salinity, discharge, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, effluent volume, nutrient or solids concentration, escape count ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, monitoring logs, laboratory tests, and incident records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | m3, kg, deg C, ppt, mg/L, kg load, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water systems and direct releases | per 1 kg reference flow | meter records, monitoring sheets, lab reports, incident reports |
| `cp_water_temperature_salinity_and_discharge_records_growout_and_burrow_husbandry` | `growout_and_burrow_husbandry` | water, temperature, salinity, discharge, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, effluent volume, nutrient or solids concentration, escape count ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, monitoring logs, laboratory tests, and incident records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | m3, kg, deg C, ppt, mg/L, kg load, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water systems and direct releases | per 1 kg reference flow | meter records, monitoring sheets, lab reports, incident reports |
| `cp_water_temperature_salinity_and_discharge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | water, temperature, salinity, discharge, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, effluent volume, nutrient or solids concentration, escape count ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, monitoring logs, laboratory tests, and incident records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | m3, kg, deg C, ppt, mg/L, kg load, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water systems and direct releases | per 1 kg reference flow | meter records, monitoring sheets, lab reports, incident reports |
| `cp_water_temperature_salinity_and_discharge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | water, temperature, salinity, discharge, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, effluent volume, nutrient or solids concentration, escape count ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, monitoring logs, laboratory tests, and incident records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | m3, kg, deg C, ppt, mg/L, kg load, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water systems and direct releases | per 1 kg reference flow | meter records, monitoring sheets, lab reports, incident reports |
| `cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | electricity, fuel, temperature control, vessel work, equipment | meter readings, invoices, vessel logs, fuel receipts, allocation records | energy carrier, quantity, meter id, equipment or process, date, allocation key, vessel trip, refrigeration or oxygenation link ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, invoices, fuel logs, and allocation worksheets ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kWh, MJ, L, kg | monthly, per batch, or per trip | full production batch or reporting period | all energy and fuel used by included processes | per 1 kg reference flow | meter record, invoice, fuel receipt, vessel or equipment log |
| `cp_energy_and_fuel_records_growout_and_burrow_husbandry` | `growout_and_burrow_husbandry` | electricity, fuel, temperature control, vessel work, equipment | meter readings, invoices, vessel logs, fuel receipts, allocation records | energy carrier, quantity, meter id, equipment or process, date, allocation key, vessel trip, refrigeration or oxygenation link ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, invoices, fuel logs, and allocation worksheets ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kWh, MJ, L, kg | monthly, per batch, or per trip | full production batch or reporting period | all energy and fuel used by included processes | per 1 kg reference flow | meter record, invoice, fuel receipt, vessel or equipment log |
| `cp_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | electricity, fuel, temperature control, vessel work, equipment | meter readings, invoices, vessel logs, fuel receipts, allocation records | energy carrier, quantity, meter id, equipment or process, date, allocation key, vessel trip, refrigeration or oxygenation link ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, invoices, fuel logs, and allocation worksheets ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kWh, MJ, L, kg | monthly, per batch, or per trip | full production batch or reporting period | all energy and fuel used by included processes | per 1 kg reference flow | meter record, invoice, fuel receipt, vessel or equipment log |
| `cp_energy_and_fuel_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | electricity, fuel, temperature control, vessel work, equipment | meter readings, invoices, vessel logs, fuel receipts, allocation records | energy carrier, quantity, meter id, equipment or process, date, allocation key, vessel trip, refrigeration or oxygenation link ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from meters, invoices, fuel logs, and allocation worksheets ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kWh, MJ, L, kg | monthly, per batch, or per trip | full production batch or reporting period | all energy and fuel used by included processes | per 1 kg reference flow | meter record, invoice, fuel receipt, vessel or equipment log |
| `cp_treatment_biosecurity_and_health_records` | `growout_and_burrow_husbandry` | health, disinfectant, treatment, biosecurity | treatment logs, veterinary records, chemical invoices, health plans | product name, active ingredient, dose, quantity, target unit, diagnosis or reason, legal status, date, withdrawal or harvest eligibility ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from treatment records, prescriptions, health plans, and invoices ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, L, g active ingredient, m3 gas | each treatment event | full production batch or reporting period | all included culture units and holding systems | per 1 kg reference flow | treatment log, health plan, veterinary record, invoice |
| `cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from mortality, cleaning, grading, and waste records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate |
| `cp_mortality_molt_residue_and_sludge_records_growout_and_burrow_husbandry` | `growout_and_burrow_husbandry` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from mortality, cleaning, grading, and waste records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate |
| `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from mortality, cleaning, grading, and waste records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate |
| `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from mortality, cleaning, grading, and waste records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate |
| `cp_harvest_and_product_mass_records_growout_and_burrow_husbandry` | `growout_and_burrow_husbandry` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from harvest weighing, grading, packing, and sales records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, count per kg | each harvest or packing lot | full production batch or reporting period | all product lots included in the reference flow | per 1 kg reference flow | scale ticket, packing record, sales note, batch reconciliation |
| `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from harvest weighing, grading, packing, and sales records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, count per kg | each harvest or packing lot | full production batch or reporting period | all product lots included in the reference flow | per 1 kg reference flow | scale ticket, packing record, sales note, batch reconciliation |
| `cp_packaging_live_holding_and_chilling_records` | `harvest_live_holding_chilling_and_packout` | packaging, holding water, ice, oxygen, live transport preparation | packaging inventory, live tank logs, ice logs, oxygen logs | material type, item count, mass, reuse rate, water volume, oxygen quantity, ice mass, holding duration ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from inventory, tank logs, and pack-out records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | kg, item, m3, L, m3 gas, hour | each pack-out lot | full production batch or reporting period | all final handling and pack-out activities | per 1 kg reference flow | inventory issue, live tank log, weighing record, oxygen invoice |
| `cp_delivery_and_route_records` | `delivery_to_declared_gate` | delivery transport and route losses | delivery log, vehicle record, fuel receipt, customer receipt | origin, destination, distance, product mass, vehicle or service, fuel, electricity, ice, oxygen, delivery condition, loss count or mass ; actual node id, actual species/state/form, native quantity q, positive same-lot accepted net mass Q at gate_release, original batch/per-1000-kg records, transfers/losses/opening/closing stocks | collect from delivery, vehicle, freight, and receipt records ; collect only this node's actual records, preserving raw units and batch/per-1000-kg bases; attribute under section 7 and divide by the same Q. | km, tonne-km, L, kg, kWh, item | each delivery route | deliveries within reporting period | all delivery routes included in the declared gate | per 1 kg reference flow | route log, fuel receipt, freight invoice, delivery receipt |
| `cp_atomic_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `broodstock_hatchery_nursery_and_stocking` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_atomic_growout_and_burrow_husbandry` | `growout_and_burrow_husbandry` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `growout_and_burrow_husbandry` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_atomic_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `harvest_live_holding_chilling_and_packout` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_atomic_delivery_to_declared_gate` | `delivery_to_declared_gate` | Own-node independent energy, oxygen, ice and animal handoffs | Actual meters, invoices, calibrated weights and stock records | node/lot/species/state; each actual native q/unit; meter/supply/purity/density/temperature/pressure; actual duty and service inclusions; each substance release; raw batch/per-1000-kg records; same-lot Q; destinations/losses/stocks; own range evidence | Meter/weigh each own-node concrete exchange independently, retaining original bases; attribute shared services/assets once; unknown quantity/activity remains a gap, never zero | kg; kWh; actual native units | each event and actual meter period | complete actual batch/period including failures, cleanup and stocks | `delivery_to_declared_gate` | per 1 kg reference flow | calibration/original records, own ranges, supply/fate and service scope |
| `cp_gate_release` | `gate_release` | Unique final acceptance, arriving lot, rejects and loss | calibrated weighing, physical custody and acceptance records | actual declared gate/recipient/date; unique upstream route/transfer; actual species/stage/form/state; arriving mass; gross/tare/free-water-ice/rejects; positive accepted net mass Q; destinations/losses/stocks; attribution population | Independently weigh on a calibrated scale at the same actual final gate; verify actual state/native animal composition, exclude tare/free water/ice/rejects, and retain all acceptance losses/fates | kg | each physical handoff | complete same-lot/matched reporting population | gate_release | per 1 kg reference flow | signed custody/acceptance, calibration and independent deductions/loss records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_product_mass` | reference product | Q is independently measured same-lot positive accepted net animal mass at gate_release; reconcile gross, tare, free water/ice, rejects and losses once, never deduct rejects again from an already accepted mass. | `cp_gate_release` | kg reference product | `pcr-gate-accounting-method` |
| `calc_count_to_mass` | count-based records | mass = count x measured mean individual mass, or count / measured count per kg; retain sampling method and grade | `cp_biological_stocking_records`; `cp_harvest_and_product_mass_records_growout_and_burrow_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | kg equivalent mass | `mass-balance-identity` |
| `calc_stock_acceptance_and_survival` | biological stock and grow-out | accepted or surviving fraction = accepted or surviving count or biomass divided by input count or biomass for the same life stage and batch | `cp_biological_stocking_records`; `cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking`; `cp_mortality_molt_residue_and_sludge_records_growout_and_burrow_husbandry`; `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout`; `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate`; `cp_harvest_and_product_mass_records_growout_and_burrow_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | accepted stock, survival, loss, and residue indicators | `nephrops-hatchery-handbook-2015` |
| `calc_waterborne_load` | discharge and direct releases | For each substance and actual receiving medium calculate gross discharged substance mass from matched measured external discharge and representative concentration, retaining unit conversion, detection limits and sampling uncertainty. Use separate cards for different substances or media. Disclose background/influent concentration and net changes separately; a negative net balance is not a negative emission or an uptake credit. | `cp_water_temperature_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking`; `cp_water_temperature_salinity_and_discharge_records_growout_and_burrow_husbandry`; `cp_water_temperature_salinity_and_discharge_records_harvest_live_holding_chilling_and_packout`; `cp_water_temperature_salinity_and_discharge_records_delivery_to_declared_gate` | kg nutrient, solids, treatment residue, or other load | `asc-farm-standard-2025` |
| `calc_energy_allocation` | shared energy systems | allocate direct meters first; otherwise allocate by equipment hours, batch duration, water volume, compartment occupancy, or product mass with the selected key disclosed | `cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking`; `cp_energy_and_fuel_records_growout_and_burrow_husbandry`; `cp_energy_and_fuel_records_harvest_live_holding_chilling_and_packout`; `cp_energy_and_fuel_records_delivery_to_declared_gate`; `cp_harvest_and_product_mass_records_growout_and_burrow_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | kWh, MJ, or fuel per reference flow | `asc-farm-standard-2025` |
| `calc_delivery_transport_service` | delivery | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | `cp_delivery_and_route_records` | tonne-km or direct delivery inventory per reference flow | `mass-balance-identity` |

| `same_gate_normalization` | all inventory rows | Retain actual attributable native batch quantity q and positive final same-lot accepted net animal mass Q; exchange per 1 kg = q/Q; exchange per 1000 kg = 1000×q/Q. For an original per-1000-kg record q_1000, exchange per 1 kg = q_1000/1000 only after matching its denominator to the same Q/product form/population. Measure internal quantities, life-stage yields and stocks independently; never fix them to final 1 kg. | q; Q; cp_gate_release; own-node records | own native unit per 1 kg reference flow and retained original bases | `pcr-gate-accounting-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_category_identity` | all datasets | Dataset must identify Nephrops norvegicus and show that the reference product belongs to CPC `04342`, not wild Norway lobster, Homarus lobster, rock lobster, sea crawfish, or processed Norway lobster categories. | species records, classification mapping, product description, sales record |
| `dq_farmed_proof` | all datasets | Dataset must prove controlled aquaculture production through hatchery, nursery, grow-out, sediment-substrate, compartment, recirculating, or enhancement records. | stocking log, hatchery record, grow-out record, permit, production plan |
| `dq_mass_balance` | biological stock, harvest, reference product | Biological input, mortality, cull, residue, harvest, packed, and delivered product records must reconcile at batch or reporting-period level. | batch reconciliation, scale tickets, mortality logs, packing records |
| `dq_water_and_energy_completeness` | water, discharge, energy, fuel | Water, temperature, salinity, discharge, electricity, fuel, oxygenation, and temperature-control records must cover all foreground processes in scope. | meter logs, invoices, monitoring records, allocation worksheet |
| `dq_substrate_and_shelter_traceability` | grow-out systems | Sediment, artificial burrow, shelter, tank, and compartment records must retain material, density, cleaning, replacement, and fate. | culture-unit map, substrate log, cleaning log, disposal record |
| `dq_treatment_and_biosecurity_traceability` | health and treatment inputs | Treatments, disinfectants, anesthetics, oxygen, salt, and water-quality inputs must retain purpose, active ingredient where applicable, legal status, and harvest eligibility consequence. | treatment log, health plan, veterinary record |
| `dq_live_product_handling` | final product and delivery | Live holding, chilling, packaging, delivery duration, and mortality or rejection must be traceable to the final product lot. | live tank log, pack-out record, delivery receipt |
| `dq_unresolved_uuid_disclosure` | any row with site-specific flow selection | Any blank or generic flow identity must be disclosed before reviewed publication and replaced with selected Tiangong UUIDs where available. | manifest review metadata, UUID review record |
| `collect_biological_stock_input` | `broodstock_hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Broodstock, berried females, eggs, larvae, postlarvae, or juveniles . This row records purchased, wild-sourced, or internally produced biological stock entering the declared farmed Nephrops route. <br> - Flow property / unit: Mass or count with life stage / kg, item, egg count, larval count, or juvenile count <br> - Amount rule: measured count, mass where measurable, life stage, and accepted quantity entering hatchery, nursery, grow-out, or controlled enhancement culture <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biological_stocking_records` <br> - Sources: `nephrops-hatchery-handbook-2015`, `fao-nephrops-synopsis-1975`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_hatchery_live_feed_and_starter_feed` | `broodstock_hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Hatchery live feed, Artemia, mussel, shrimp, and starter feed . This row covers enriched Artemia, live feed, mussel or shrimp pieces, formulated starter diets, broodstock diets, and comparable hatchery or nursery feeds. <br> - Flow property / unit: Mass, volume, or count / kg, g, L, cyst count, or item <br> - Amount rule: measured feed or live-feed quantity by batch, life stage, and wet/dry/as-fed basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_records_broodstock_hatchery_nursery_and_stocking` <br> - Sources: `nephrops-hatchery-handbook-2015`, `nephrops-larval-diet-1998`, `nephrops-feed-consumption-2015` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_hatchery_nursery_water` | `broodstock_hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Hatchery and nursery water . This row covers controlled seawater, freshwater, brackish water, process water, make-up water, and recirculation replacement water used in on-site hatchery and nursery operations. <br> - Flow property / unit: Mass or volume / kg or m3 <br> - Amount rule: measured intake, make-up water, treated water, or recirculation replacement volume with temperature and salinity basis retained <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_water_temperature_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking` <br> - Sources: `nephrops-hatchery-handbook-2015`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_hatchery_mortalities_molts_sludge_and_culture_residue` | `broodstock_hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Hatchery mortalities, molts, sludge, and culture residue . This row records broodstock mortalities, larvae, postlarvae, rejected juveniles, molts, shells, feed residue, sludge, biofilter solids, and rejected stock from on-site hatchery or nursery operations. <br> - Flow property / unit: Mass or count / kg or item <br> - Amount rule: measured mortality count, residue mass, sludge, rejected stock, and disposal or recovery route <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_accepted_larvae_postlarvae_or_juveniles_for_growout` | `broodstock_hatchery_nursery_and_stocking` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Accepted larvae, postlarvae, or juveniles for grow-out . This output carries viable Nephrops larvae, postlarvae, juveniles, or stocked lobsters into grow-out, sediment-substrate culture, or controlled enhancement. <br> - Flow property / unit: Mass or count with mean size / kg, item, larval count, postlarval count, or juvenile count <br> - Amount rule: calculated accepted stock after receipt, hatchery, nursery, grading, acclimation, and transfer losses <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: accepted stock entering grow-out or enhancement <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_biological_stocking_records` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_growout_feed_bait_natural_foraging_and_supplements` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Grow-out feed, bait, natural foraging support, and supplements . This row records added feed, bait, mussel or fish diets, formulated feed, supplements, and natural-foraging documentation for grow-out or compartment systems. <br> - Flow property / unit: Mass or service basis / kg, g, item, or compartment-month <br> - Amount rule: measured feed or bait quantity by batch, or documented zero-added-feed claim with compartment, stocking, and exposure records <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_records_growout_and_burrow_husbandry` <br> - Sources: `nephrops-feed-consumption-2015`, `nephrops-hatchery-handbook-2015`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_sediment_substrate_burrow_shelters_and_compartments` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Sediment substrate, burrow shelters, and compartments . This row records muddy sand, sediment, artificial burrows, tubes, shelters, trays, compartments, tanks, and substrate-support materials that are consumed, replaced, cleaned, or allocated to the culture batch. <br> - Flow property / unit: Mass, area, volume, or item count / kg, m2, m3, or item <br> - Amount rule: measured material addition, replacement, cleaning, loss, and disposal or reuse route <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_substrate_shelter_and_culture_unit_records` <br> - Sources: `fao-nephrops-synopsis-1975`, `nephrops-hatchery-handbook-2015`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_growout_water_exchange_and_life_support` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Grow-out water, exchange, and life-support service . This row records make-up water, exchanged water, recirculated water, seawater pumping, oxygenation, shelter or compartment life-support services, and water-quality management. <br> - Flow property / unit: Mass or volume / kg or m3 <br> - Amount rule: measured water intake, exchange, recirculation replacement, or life-support volume with temperature, salinity, and culture unit retained <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_water_temperature_salinity_and_discharge_records_growout_and_burrow_husbandry` <br> - Sources: `nephrops-hatchery-handbook-2015`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_growout_electricity_and_fuel` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Grow-out electricity and fuel . This row covers electricity and fuel for pumps, aeration, oxygenation, filtration, chilling or heating, lighting, monitoring, vessels, maintenance, and site visits. <br> - Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg <br> - Amount rule: metered electricity, fuel purchase, vessel log, or allocated energy records for grow-out and husbandry <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_energy_and_fuel_records_growout_and_burrow_husbandry` <br> - Sources: `asc-farm-standard-2025`, `nephrops-hatchery-handbook-2015` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_health_biosecurity_and_water_treatment_inputs` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Health, biosecurity, and water-treatment inputs . This row covers disinfectants, therapeutants, probiotics, oxygen, salt, anesthetic, water-quality improvers, and other health or biosecurity inputs. <br> - Flow property / unit: Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 <br> - Amount rule: measured product quantity, active ingredient where applicable, treatment reason, legal status, and harvest eligibility consequence <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per treatment event and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_treatment_biosecurity_and_health_records` <br> - Sources: `nephrops-hatchery-handbook-2015`, `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_growout_mortalities_molts_shells_sludge_and_residues` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Grow-out mortalities, molts, shells, sludge, and residues . This row records mortalities, culled animals, molts, shells, uneaten feed, spent substrate, sludge, removed biofouling, and other organic residues. <br> - Flow property / unit: Mass or count / kg or item <br> - Amount rule: measured mortality count, residue mass, sludge, spent substrate, culls, and disposal or recovery route <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_mortality_molt_residue_and_sludge_records_growout_and_burrow_husbandry` <br> - Sources: `asc-farm-standard-2025`, `nephrops-hatchery-handbook-2015` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_direct_waterborne_emissions_and_escapes` | `growout_and_burrow_husbandry` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Direct waterborne emissions and escapes . This row records direct nutrient releases, suspended solids, treatment residues, and known escapes when they leave the foreground system to the environment. <br> - Flow property / unit: Mass, count, or concentration-load / kg, g, item, or kg nutrient <br> - Amount rule: measured or calculated load from water-quality records, effluent volume, treatment records, known escape counts, and mass-balance checks <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Process output (`process_output`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_water_temperature_salinity_and_discharge_records_growout_and_burrow_husbandry` <br> - Sources: `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_holding_water_ice_oxygen_and_packaging` | `harvest_live_holding_chilling_and_packout` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Holding water, ice, oxygen, and packaging . This row records live-holding water, chilling ice, oxygen, bands, crates, boxes, liners, insulated containers, labels, and pallets. <br> - Flow property / unit: Mass, volume, gas volume, or item count / kg, m3, L, m3 gas, or item <br> - Amount rule: measured material, water, ice, oxygen, and packaging quantities with reuse, tare, and product basis retained <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_packaging_live_holding_and_chilling_records` <br> - Sources: `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_live_holding_chilling_and_packout_energy` | `harvest_live_holding_chilling_and_packout` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Live holding, chilling, and pack-out energy . This row covers electricity and fuel for live tanks, pumps, aeration, oxygenation, refrigeration, ice making, grading, packing, and cold storage. <br> - Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg <br> - Amount rule: metered electricity, fuel purchase, or allocated energy records for live holding, chilling, and pack-out <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` <br> - Sources: `asc-farm-standard-2025` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_packout_rejects_mortalities_wastewater_and_used_packaging` | `harvest_live_holding_chilling_and_packout` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Pack-out rejects, mortalities, wastewater, and used packaging . This row records dead-on-arrival animals, culls, rejected product, wastewater, spent ice melt, used bands, damaged boxes, and non-reused packaging. <br> - Flow property / unit: Mass, volume, or count / kg, m3, or item <br> - Amount rule: measured reject mass or count, wastewater volume, used packaging mass, and disposal or recovery route <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1,000 kg marketable reference product <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_delivery_fuel_energy_and_live_transport_supplies` | `delivery_to_declared_gate` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Delivery fuel, electricity, refrigerant service, and live transport supplies . This row records delivery fuel, electricity, refrigerant service, ice, oxygen, water, packaging supplements, or other live transport supplies when the declared gate is beyond farm or packhouse release. <br> - Flow property / unit: Fuel, energy, mass, volume, or transport service / L, kg, kWh, MJ, m3, or tonne-km <br> - Amount rule: route-specific measured fuel, energy, transport service, or supply use with distance, load factor, live transport condition, and allocation basis retained <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per delivered 1,000 kg reference product or tonne-km where transport is modelled as service <br> - Basis kind: Transport service (`transport_service`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery_and_route_records` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_delivery_mortalities_rejected_product_and_transport_residue` | `delivery_to_declared_gate` | Establish the actual substance/species, life stage, form, state, source and destination of each exchange in this scope and add independent atomic cards. Determine direction and product/waste/elementary type from real source/fate; this scope supplies no universal UUID or mixed total. Retain each own native quantity/unit, collection or calculation evidence, range/uncertainty evidence, attribution and division by the same final Q. Never copy a collection total, common range or one member UUID onto other members. Every actual major feed, input, waste, release and internal handoff is mandatory; unknown is not zero. Preserve raw batch/per-1000-kg records and explicit q/Q and 1000×q/Q conversion. Mixed-substance/unit screening numbers are not member ranges; mass ratios across life stages or biological growth are not a universal 0..1 survival fraction. Collection responsibility: Delivery mortalities, rejected product, and transport residue . This row records live-transport mortalities, rejected product, spilled ice or water residues, and damaged packaging when delivery is in scope. <br> - Flow property / unit: Mass, volume, or count / kg, m3, or item <br> - Amount rule: measured delivery loss, mortality count, reject mass, residue amount, and disposal or recovery route <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per delivered 1,000 kg reference product <br> - Basis kind: Transport service (`transport_service`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery_and_route_records` | Own-node original records, independent identity, quantity, fate and range evidence |
| `collect_gate_rejects` | `gate_release` | Independently identify each actual acceptance reject, mortality, package/water/ice handoff, loss, service, fuel, asset and release with quantity, unit, evidence, own range, Q normalization and fate; add separate atomic cards. Rejects are not automatically waste and cannot be dropped without their burdens. | cp_gate_release; actual fate and resource records |
| `dq_final_gate_balances` | all nodes and reporting periods | Preserve original batch/per-1000-kg records, life-stage yields, opening/closing stocks and failed events; attribute once and normalize by the same actual final-gate Q. Measure external abstraction, supplied water, internal circulation and actual return/discharge separately; never deduct internal circulation twice. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow or avoided burden. Actual freight payload includes carrier water, ice and packaging; empty returns retain actual fuel/vehicle service and explicit attribution. A complete service and its covered materials, energy, assets, wastes and direct releases cannot both be counted. | Own-node records, same-lot water/animal/substance balances, service scope, actual load and duty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | applicable dataset and actual exchanges | Before dataset completion verify one UUID matching actual species, farmed origin, stage, product state/form, property and final physical gate. A category-name match does not establish state/gate compatibility; live farm-gate flow cannot substitute chilled delivered product, nor landing-catch flow controlled aquaculture output. | |
| `val_reference_unit` | applicable dataset and actual exchanges | The reference amount must be expressed as kg with Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. | |
| `val_farmed_not_wild` | applicable dataset and actual exchanges | A dataset based only on wild capture, wild landing, or post-capture live holding without controlled aquaculture production is non-conforming. | |
| `val_adjacent_lobster_categories` | applicable dataset and actual exchanges | Wild Norway lobster, Homarus lobster, rock lobster and other sea crawfish, and processed Norway lobster products must not be reported under this PCR as the main reference product. | |
| `val_required_qualifiers` | applicable dataset and actual exchanges | Nephrops identity, culture system, biological starting condition, product state, size grade or count basis, declared gate, and farmed proof must be present. | |
| `val_collection_protocol_coverage` | applicable dataset and actual exchanges | Each foreground inventory row with `foreground_record` or `calculated_value` must link to a collection protocol or calculation rule. | |
| `val_mass_balance` | applicable dataset and actual exchanges | Biological stock, mortality, residue, harvest, packed, rejected, and delivered mass should reconcile; unexplained imbalance must be disclosed. | |
| `val_range_review` | applicable dataset and actual exchanges | Reasoned-estimate ranges are candidate QA screens and must be replaced or justified before reviewed or published use. | |
| `val_unique_gate_atomic_completion` | applicable dataset and actual exchanges | Require exactly one actual gate_release and one final declared_gate_reference output, consistent same-lot Q/product form/state/gate, paired measured internal quantities and every applicable collection obligation. Final completion and validation require each actual exchange to have an independent atomic card, own quantity/native unit, collection/calculation and Range/uncertainty evidence, normalization, actual fate and verified UUID. Unknown identity, activity, gate, quantity, range or fate blocks completion, never zero or presumed bypass; checker pass does not prove actual dataset completeness. | |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | market-size product transfers and final reference | Every market-size animal transfer and final reference product must retain its actual whole in-shell form. Tailed/decapitated, peeled/picked-meat or meat-only final references are outside this methodology. No measured yield or section-8 completion claim enlarges this boundary. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for farmed Norway lobster |
| downstream_use | secondary_dataset; background_dataset when reviewed and geographically representative |
| allowed_use | whole in-shell methodology only: LCA modelling of live, fresh, or chilled farmed Norway lobster at the declared gate with disclosed production route, product state, and quality qualifiers |
| excluded_use | tailed, peeled/picked-meat or meat-only reference products outside this methodology; wild Norway lobster; Homarus lobster; rock lobster and other sea crawfish; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved Norway lobster; seed-only production; shell, molt, sludge, or residue co-products without separate modelling |
| required_metadata | canonical PCR id; CPC code; Nephrops norvegicus identity; culture system; biological starting condition; farmed production evidence; product form; size grade; mass basis; water temperature and salinity basis; substrate or shelter basis; feed regime; health and treatment disclosure; packaging state; declared gate; geography; reporting period; allocation method; unresolved UUID substitutions |
| required_quality_disclosure | source and completeness of biological stock, feed, water, substrate, shelter, energy, health treatment, mortality, residue, product mass, packaging, delivery, and allocation records; reasoned-estimate range use; missing Tiangong UUIDs; deviations from the default boundary |
| update_trigger | update when Tiangong flow identities change, CPC mapping changes, reviewed Nephrops aquaculture evidence becomes available, source-backed ranges replace candidate estimates, or production route changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `nephrops-hatchery-handbook-2015` | handbook | Powell, A. et al. (2015). Nephrops norvegicus: Hatchery Handbook. Deliverable 4.1, NEPHROPS EU FP7 Project 286903; public dissemination note January 2020. <https://www.gu.se/sites/default/files/2020-05/Hatchery%20manual.pdf> | Nephrops broodstock procurement, hatchery systems, larval and postlarval stages, feed, water exchange, biosecurity, and pilot-scale aquaculture context |
| `fao-nephrops-synopsis-1975` | official_guidance | Farmer, A.S.D. 1975. Synopsis of biological data on the Norway lobster Nephrops norvegicus. FAO Fisheries Synopsis No. 112. <https://www.fao.org/4/h2350e/h2350e.pdf> | Nephrops species identity, burrow ecology, biological context, and substrate or habitat disclosure |
| `nephrops-larval-diet-1998` | literature | Anger, K. et al. Effects of diet on Nephrops norvegicus larval and postlarval development, growth, and elemental composition. <https://epic.awi.de/id/eprint/4801/> | larval diet candidates, Artemia use, larval development, and hatchery feed records |
| `nephrops-feed-consumption-2015` | literature | Cristo, M. and Cartes, J.E. Measurement of the feed consumption of Nephrops norvegicus. <https://academic.oup.com/jcb/article-pdf/35/1/11/10345968/jcb0011.pdf> | captivity feed-consumption context, mussel and pelleted diet records, and grow-out feed disclosure |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council. ASC Farm Standard, ASC-STD-001, Version 1.0.1, 2025. <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | aquaculture data quality, traceability, water quality, energy, feed, health, welfare, escapes, biosolids, and certification-related collection rules |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stock acceptance, grow-out, pack-out, delivery, and reference-flow normalization. | QA guardrails, survival, yield, pack-out reconciliation, delivery-service calculation, and normalization rules |
| `pcr-gate-accounting-method` | method_factor | Declared prospective gate, independent measurement and batch-normalization method in this PCR sections 3–9; not external empirical data | Unique final Q/Q reference, measured internal amounts, q/Q and 1000×q/Q conversion and atomic completion duties |
