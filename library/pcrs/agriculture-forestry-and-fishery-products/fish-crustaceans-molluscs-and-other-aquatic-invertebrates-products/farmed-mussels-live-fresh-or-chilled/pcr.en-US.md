---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed mussels, live, fresh or chilled

## 1. Scope and Applicability

This methodology covers only whole shell-on animals as live, fresh or chilled reference products. Shucked or tissue-only fresh/chilled reference products are outside its present process methodology; collecting extra data under section 8 does not bring them into scope. The classification relationship is narrower. This is a method-coverage restriction, not a claim that raw shucking necessarily makes a product otherwise prepared or preserved.

This PCR guides foreground data package construction for farmed mussels placed on the market as live, fresh, or chilled product. It covers seed or spat supply, hatchery and nursery activity when controlled by the reporting operator, grow-out on ropes, socks, longlines, rafts, bouchot poles, racks, trays, bottom culture units, or other declared aquaculture systems, harvest, washing, grading, relaying or depuration when performed, live holding, chilling, packaging, and release at the declared gate.

Excluded products are wild mussels; frozen, smoked, dried, salted, brined, cooked, canned, otherwise prepared or preserved mussels; mussel seed or spat sold as an aquaculture input; mussel shells or shell material sold as non-food products; and oysters, scallops, clams, cockles, ark shells, abalone, or other mollusc categories with separate PCRs.

This PCR is written for foreground dataset production. It does not grant an ecosystem-service credit for filtration, nutrient removal, carbon storage, or habitat effects unless a separate reviewed method and source-backed quantity are declared in the foreground study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04432`, `Farmed mussels, live, fresh or chilled`; mapping_type: narrower; whole/in-shell method subset |
| covered_products | whole in-shell reference products only: farmed mussels, including declared Mytilus, Perna, Choromytilus, Aulacomya, or comparable mussel taxa, sold live, fresh, or chilled from aquaculture production systems |
| excluded_products | shucked or tissue-only fresh/chilled reference products; wild mussels; frozen, smoked, dried, salted, brined, cooked, canned, prepared, or preserved mussels; mussel spat sold as seed; non-food shell products; oysters, scallops, clams, cockles, ark shells, abalone, and other mollusc categories with separate PCRs |
| representative_product | whole in-shell animal: live or chilled shell-on farmed mussel at declared market size and product form |
| production_route | spat or seed supply, nursery where relevant, grow-out husbandry in declared suspended, pole, raft, bottom, rack, tray, or integrated systems, harvest, washing, grading, depuration or relaying when performed, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled shell-on product with declared species, culture system, harvest area, size or count grade, purification status, packaging state, temperature or holding condition, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | whole in-shell farmed mussels as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or species group, live/fresh/chilled state, whole shell-on product basis, size or count grade, harvest area, purification or depuration status, and culture system |
| How long or cycle | one production batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `declared_gate_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed mussels accepted at the declared final physical gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; culture system; spat or seed source; grow-out site or culture unit; harvest area classification or permission status; product state; whole shell-on product basis; size or count grade; purification or depuration status; moisture or drainage basis; geography and declared gate; holding or chilling duration; packaging state; permit or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, sack, mesh bag, basket, crate, rope, sock, cluster, or volume records may be used only when item count, actual net mass, and the sampling or tare method are retained so the foreground package can normalize to kg reference product.

Declare one actual final physical gate_release, one actual species/form/state and acceptance specification per dataset. Pack-out and actual pre-gate delivery are measured intermediate handoffs. Select one evidenced path to the gate; unknown delivery is not bypass. Q is positive same-lot/matched-population accepted net animal mass independently weighed on a calibrated scale at that gate, excluding package tare/free water/ice/rejects while retaining native shell/tissues/moisture in the declared form. Only final declared_gate_reference normalizes to 1 kg; measure all earlier quantities independently.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed mussels in the declared live, fresh, or chilled product form. |
| `product_state_and_shell_basis` | whole shell-on live, fresh, chilled, washed, debyssed or drained records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Independently measure net whole shell-on animal mass in its actual state, retaining native shell and tissue. Record actual washing, debyssing, depuration and drainage losses with same-lot evidence; exclude packaging/free water/ice. Shucked or tissue-only mass is not a reference option and cannot be inferred from whole-animal quantities. |
| `count_to_mass_conversion` | seed, stocking, harvest, grading, sales, sack, mesh bag, crate, cluster, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based or container-based records must include net mass, mean individual mass or count per kg, container tare, size grade, and sampling method before normalization to kg product. |
| `spat_lot_identity` | hatchery spat, wild-collected spat under aquaculture control, nursery stock, and transferred seed lots | Mass or count | kg and item | Spat and seed records must retain supplier, hatchery or collection area, species, batch, count, mean size or mass, transfer date, health or movement permission, and mortality or rejection records. |
| `no_external_feed_default` | grow-out husbandry | Mass | kg | An actual growout input may be zero only when complete node/period records, purchase/stock/feeding-or-application reconciliation and management records positively evidence no intentional feeding, fertilization, pond enrichment or supplemental algae. Missing/unrecorded is not absent; independently include owned hatchery/nursery and parental-stage foods. Record each actual application product/quantity/purpose/evidence separately. |
| `water_volume_or_mass` | hatchery, nursery, depuration, relaying, live holding, washing, chilling, and wastewater | Mass or volume | kg or m3 | Record only water that is pumped, supplied, metered, treated, recirculated, or discharged under foreground control. Ambient seawater passing through open suspended, raft, pole, bottom, or rack systems is a boundary condition, not a process water input. |
| `culture_area_time` | longline, raft, pole, rack, tray, bottom plot, or other grow-out area | Area-time | ha-year or m2-day | Record licensed or occupied culture area and active culture duration when needed for stocking density, habitat disclosure, or allocation in shared sites. |
| `gear_and_socking_material_basis` | ropes, socks, longlines, floats, buoys, anchors, poles, racks, trays, clips, ties, and reusable gear | Mass or item count | kg or item | Gear records must retain material type, item count, mass, deployment period, service life, recovery, reuse, recycling, disposal, or loss fate before allocation to the reference flow. |
| `energy_and_fuel_inventory` | pumping, aeration, hatchery, nursery, boat, vehicle, washing, depuration, chilling, live holding, and delivery energy | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, or energy carrier units before normalizing to the reference flow. Do not double count supplier transport already included in purchased inputs. |
| `packaging_and_ice_basis` | sacks, mesh bags, boxes, labels, liners, ice, gel packs, pallets, and reusable containers | Mass or item count | kg or item | Packaging and ice records must retain material type, item count, tare or fill mass, reuse rate where relevant, and destination before conversion to kg per reference product. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species or species group | scientific and common name | required for all datasets |
| Culture system | rope, sock, longline, raft, bouchot pole, rack, tray, bottom culture, integrated aquaculture system, or declared variant | required for boundary, area, gear, water, and allocation interpretation |
| Product state | live, fresh, chilled, washed, debyssed, depurated, relayed, purged, or declared variant | required for Codex-style product and storage interpretation |
| Size or count grade | count per kg, shell length, grade class, sack size, mesh bag size, or market grade | required when count, grade, or container records are used |
| Purification status | direct harvest from approved area, depurated, relayed, purged, or not applicable | required for product quality, holding, and water-use interpretation |

## 5. System Boundary

The default boundary covers foreground-controlled farmed mussel production to the declared farm, harvest, dispatch, packhouse, or delivery gate:

1. Spat or seed sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased spat and wild-collected spat brought under declared aquaculture control when supplied by another hatchery, collector, or nursery.
2. Grow-out husbandry, including culture-unit preparation, spat collection or stocking, socking or re-socking, thinning, grading at sea when performed, gear deployment and retrieval, fouling and predator management, controlled water movement, mortalities, and directly controlled maintenance.
3. Harvest, washing, grading, debyssing when performed, depuration, relaying, purging, live holding, chilling, packaging, and declared gate release when these operations are performed before the reference product leaves the foreground boundary.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm-gate, harvest-area, dispatch-centre, or packhouse product.

Capital goods, long-lived infrastructure, and long-term habitat modification are included only when the declared data package scope requires them. Spat, seed, gear, packaging, ice, electricity, fuel, and other purchased inputs require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_spat_or_seed_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04432`, `Farmed mussels, live, fresh or chilled` |
| recursive_input_rule | farmed mussel spat, seed, or nursery stock used to produce market product is recorded as declared stock starting condition with supplier, hatchery, collection area, nursery, or transfer disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | spat or seed supplier dataset, on-site hatchery records, or documented source, species, batch, mass or count, size, health or movement permission, and certification or permit evidence |
| disclosure | disclose species or species group, culture system, spat or seed source, grow-out site or culture unit, stocking density, grow-out duration, purification or depuration status, water source and discharge route for controlled systems, mortalities and rejects, gear use and loss, harvest and holding conditions, product state, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| spat_supply_hatchery_and_nursery | Spat Supply, Hatchery, and Nursery | required | spat, seed, or juvenile source must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | actual process responsibility before final gate | per 1 kg reference flow |
| growout_husbandry | Grow-out Husbandry | required |  | actual process responsibility before final gate | per 1 kg reference flow |
| harvest_washing_depuration_and_packout | Harvest, Washing, Depuration, and Pack-out | required |  | actual process responsibility before final gate | per 1 kg reference flow |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest area, dispatch centre, or packhouse gate | actual process responsibility before final gate | per 1 kg reference flow |
| gate_release | Declared final physical handoff and acceptance | required | one actual final gate and evidenced route per dataset | unique final reference | per 1 kg reference flow |

### Process: Spat Supply, Hatchery, and Nursery (`spat_supply_hatchery_and_nursery`)

#### Inputs

##### Product flows

###### Independent exchange: Actual live mussel spat at this node (`spat_seed_or_nursery_stock_input`)

This row records purchased hatchery spat, wild-collected spat brought under aquaculture control, transferred nursery stock, or internally produced seed entering the declared production route. Net live kg is this card's native quantity; counts, shell length/grade and same-lot representative individual mass are auxiliary evidence. Declare actual species, seed source/stage, supply technology and gate separately. A longline-farm spat identity cannot cover all seed sources, and internal transfers do not automatically inherit external supplier UUIDs. A mass ratio across nursery growth is not count survival.

- Selected flow: Actual live mussel spat at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spat_stocking_records_spat_supply_hatchery_and_nursery`
- Sources: `fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_spat_seed_or_nursery_stock_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Actual purchased electricity for this node (`hatchery_nursery_electricity`)

This row covers electricity for pumps, aeration, filtration, algal culture, lighting, temperature control, settlement systems, and water treatment in on-site hatchery or nursery operations.

- Selected flow: Actual purchased electricity for this node
- Flow property / unit: Energy / kWh
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records_spat_supply_hatchery_and_nursery`
- Sources: `fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hatchery_nursery_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Actual live mussel spat at this node (`accepted_spat_or_seed_for_growout`)

This output carries viable spat, seed, or nursery stock into grow-out. Net live kg is this card's native quantity; counts, shell length/grade and same-lot representative individual mass are auxiliary evidence. Declare actual species, seed source/stage, supply technology and gate separately. A longline-farm spat identity cannot cover all seed sources, and internal transfers do not automatically inherit external supplier UUIDs. A mass ratio across nursery growth is not count survival.

- Selected flow: Actual live mussel spat at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spat_stocking_records_spat_supply_hatchery_and_nursery`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_accepted_spat_or_seed_for_growout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grow-out Husbandry (`growout_husbandry`)

#### Inputs

##### Product flows

###### Independent exchange: Actual live mussel spat at this node (`accepted_spat_or_seed_transfer_to_growout`)

This row transfers accepted spat or seed into the declared grow-out culture area or unit. Net live kg is this card's native quantity; counts, shell length/grade and same-lot representative individual mass are auxiliary evidence. Declare actual species, seed source/stage, supply technology and gate separately. A longline-farm spat identity cannot cover all seed sources, and internal transfers do not automatically inherit external supplier UUIDs. A mass ratio across nursery growth is not count survival.

- Selected flow: Actual live mussel spat at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spat_stocking_records_growout_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_accepted_spat_or_seed_transfer_to_growout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Actual purchased electricity for this node (`growout_electricity`)

This row covers electricity for pumps, sensors, lighting, grading at the farm, hydraulic equipment, land-based holding tied to grow-out, or other directly controlled grow-out operations. For passive open-water culture with no powered grow-out operations, record zero or not applicable with justification.

- Selected flow: Actual purchased electricity for this node
- Flow property / unit: Energy / kWh
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records_growout_husbandry`
- Sources: `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`growout_fuel_and_workboat_energy`)

This row covers diesel or other fuel for workboats, tractors, forklifts, generators, farm vehicles, harvest support, gear maintenance, or directly controlled maintenance activity. Record actual diesel material use only outside complete-service coverage. Other fuels/electricity need separate cards; MJ, litres or tonne-kilometre records cannot be relabelled as kg. Litres-to-kg requires same-supply measured/documented density and temperature evidence; MJ conversion also requires heating value/basis/factor evidence. Complete freight and its covered fuel/assets/direct releases cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records_growout_husbandry`
- Sources: `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_fuel_and_workboat_energy
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed mussels live harvest-size biomass (`harvest_size_farmed_mussels`)

This row records grow-out output before final washing, grading, depuration, relaying, live holding, chilling, or pack-out losses. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed mussels live harvest-size biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records_growout_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_size_farmed_mussels
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Harvest, Washing, Depuration, and Pack-out (`harvest_washing_depuration_and_packout`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed mussels animal lot in its actual species, form and state (`harvested_mussels_input_to_packout`)

This row transfers harvest-size mussels into washing, grading, debyssing, depuration, relaying, live holding, chilling, and pack-out. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed mussels animal lot in its actual species, form and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout`
- Sources: `codex-cxs-292-2008`, `fao-bivalve-depuration-2008`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvested_mussels_input_to_packout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Actual purchased electricity for this node (`packout_electricity`)

This row covers electricity for pumps, depuration systems, UV or water treatment, live holding, chilling, grading equipment, weighing, washing, and packing.

- Selected flow: Actual purchased electricity for this node
- Flow property / unit: Energy / kWh
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records_harvest_washing_depuration_and_packout`
- Sources: `fao-bivalve-depuration-2008`, `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_packout_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed mussels animal lot in its actual species, form and state (`marketable_farmed_mussel_reference_product`)

This row is an actual intermediate animal-product handoff, not the final reference output. Only declared_gate_reference at gate_release is the final accepted reference product. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed mussels animal lot in its actual species, form and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout`
- Sources: `codex-cxs-292-2008`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_marketable_farmed_mussel_reference_product
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Farmed mussels actual independently saleable off-grade product (`saleable_offgrade_mussel_coproduct`)

Use this row only when off-grade live, fresh, or chilled mussels remain saleable as a separate grade within the same product family. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed mussels actual independently saleable off-grade product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_saleable_offgrade_mussel_coproduct
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Actual pre-gate delivery (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed mussels animal lot in its actual species, form and state (`product_transferred_to_controlled_delivery`)

This row is used when the declared reference flow is delivered beyond the farm, harvest area, dispatch centre, or packhouse gate under the reporting operator's control. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed mussels animal lot in its actual species, form and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_product_transferred_to_controlled_delivery
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`controlled_delivery_fuel_or_transport_service`)

This row records directly controlled delivery fuel, refrigerated vehicle energy, vessel fuel, or transport service to the declared gate. Record actual diesel material use only outside complete-service coverage. Other fuels/electricity need separate cards; MJ, litres or tonne-kilometre records cannot be relabelled as kg. Litres-to-kg requires same-supply measured/documented density and temperature evidence; MJ conversion also requires heating value/basis/factor evidence. Complete freight and its covered fuel/assets/direct releases cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_controlled_delivery_fuel_or_transport_service
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed mussels animal lot in its actual species, form and state (`delivered_farmed_mussels`)

This output is used only when the declared gate is beyond the farm, harvest area, dispatch centre, or packhouse gate. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed mussels animal lot in its actual species, form and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivered_farmed_mussels
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Declared final physical handoff (`gate_release`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed mussels actual arriving lot at the final gate (`gate_arriving_product`)

Declare one actual final physical gate_release, one actual species/form/state and acceptance specification per dataset. Pack-out and actual pre-gate delivery are measured intermediate handoffs. Select one evidenced path to the gate; unknown delivery is not bypass. Q is positive same-lot/matched-population accepted net animal mass independently weighed on a calibrated scale at that gate, excluding package tare/free water/ice/rejects while retaining native shell/tissues/moisture in the declared form. Only final declared_gate_reference normalizes to 1 kg; measure all earlier quantities independently.

- Selected flow: Farmed mussels actual arriving lot at the final gate
- Flow property / unit: Mass / kg
- Amount rule: Independently record actual arriving net animal mass q before acceptance and pair with the real pack-out or delivery output; attribute and divide by Q, retaining rejects/losses/stocks, never fixed to 1 kg.
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

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed mussels accepted at the declared final physical gate (`declared_gate_reference`)

Declare one actual final physical gate_release, one actual species/form/state and acceptance specification per dataset. Pack-out and actual pre-gate delivery are measured intermediate handoffs. Select one evidenced path to the gate; unknown delivery is not bypass. Q is positive same-lot/matched-population accepted net animal mass independently weighed on a calibrated scale at that gate, excluding package tare/free water/ice/rejects while retaining native shell/tissues/moisture in the declared form. Only final declared_gate_reference normalizes to 1 kg; measure all earlier quantities independently.

- Selected flow: Farmed mussels accepted at the declared final physical gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_release`
- Range: Same-positive-accepted-net-mass Q/Q identity; not yield
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `pcr-gate-accounting-method`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

Avoid allocation where batch records can partition burdens by culture area, culture unit, species, harvest lot, size grade, product form, purification route, or destination. Separate live, fresh, chilled, size-grade, off-grade, and delivery products by measured mass before applying allocation.

When a single foreground batch produces several saleable grades within CPC 04432, allocate shared spat, gear, grow-out, harvest, washing, depuration, holding, chilling, packaging, and delivery burdens by declared product mass unless a reviewed market-value rule is documented. Shells, mortalities, wastewater, sludge, sediment, biofouling residue, discarded gear, and broken or dead product are waste or treatment outputs unless they are sold with a separate product dataset and reference flow.

If the same site grows multiple species or other aquaculture products in the same area, raft, rope system, pole field, rack, bottom plot, or vessel route, allocate shared records by directly measured culture-unit service, area-time, biomass-time, or product mass in that order of preference. Do not allocate filtration, nutrient removal, carbon storage, or habitat-service credits to the reference product unless a separate reviewed ecosystem-service method is in scope and the credited service is not double counted.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_spat_stocking_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | spat, seed, nursery stock input and accepted stock output | hatchery transfer, spat collection record, supplier invoice, stocking log, movement or health certificate | species; batch id; supplier, hatchery, nursery, or collection area; count; mean size; mean mass where available; total mass; size grade; health or movement status; transfer date ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | supplier records, hatchery logs, collection permits, stocking count, sampling and weighing ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item, shell length, and kg | each spat receipt, spat collection, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, collection area, and grow-out unit | per 1 kg reference flow | signed transfer records, permit or collection evidence, sampling sheet, weighing record, health or movement document |
| `cp_spat_stocking_records_growout_husbandry` | `growout_husbandry` | spat, seed, nursery stock input and accepted stock output | hatchery transfer, spat collection record, supplier invoice, stocking log, movement or health certificate | species; batch id; supplier, hatchery, nursery, or collection area; count; mean size; mean mass where available; total mass; size grade; health or movement status; transfer date ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | supplier records, hatchery logs, collection permits, stocking count, sampling and weighing ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item, shell length, and kg | each spat receipt, spat collection, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, collection area, and grow-out unit | per 1 kg reference flow | signed transfer records, permit or collection evidence, sampling sheet, weighing record, health or movement document |
| `cp_hatchery_nursery_records` | `spat_supply_hatchery_and_nursery` | on-site hatchery and nursery microalgae, culture media, settlement substrate, collectors, and seed-production inputs | hatchery log, algal culture log, substrate issue record, collector deployment record, supplier invoice | input type; quantity; concentration where relevant; batch id; purpose; date; settlement or nursery unit ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | hatchery batch records, supplier documents, metering, weighing, or inventory issue ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg, L, item, or concentration unit | each batch or reporting period | seed-production or nursery period linked to market batch | on-site hatchery, larval room, settlement unit, collector line, or nursery | per 1 kg reference flow | hatchery batch sheet, supplier invoice, inventory log, production reconciliation |
| `cp_culture_gear_and_area_records` | `growout_husbandry` | culture area, ropes, socks, longlines, floats, buoys, anchors, poles, rafts, racks, trays, and shared-site allocation | lease record, farm map, gear issue log, service-life record, maintenance record | culture area; coordinates or plot id; gear type; material; item count; mass; service life; deployment date; retrieval date; loss or reuse fate ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | lease documents, GIS map, farm log, gear inventory, weighing, maintenance record ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | ha, m2, item, kg, ha-year, or m2-day | deployment event, retrieval event, or reporting period | grow-out period and shared-site allocation period | licensed area, raft, line, pole field, rack, tray, bottom plot, or vessel-supported area | per 1 kg reference flow | permit or lease, gear inventory, maintenance log, retrieval record |
| `cp_feed_fertilizer_and_chemical_records` | `growout_husbandry` | intentional feed, fertilizer, supplemental algae, pond enrichment, predator-control chemicals, disinfectants, or other material applications | application log, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; application area; date; legal or certification status ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm application log, supplier invoice, chemical inventory, permit report ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg, L, or active ingredient unit | each application | grow-out, pond, or treatment period | grow-out area, pond, treatment unit, or storage area | per 1 kg reference flow | application record, invoice, permit or certification evidence, inventory reconciliation |
| `cp_water_quality_and_discharge_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_water_quality_and_discharge_records_growout_husbandry` | `growout_husbandry` | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_water_quality_and_discharge_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_energy_and_fuel_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | per 1 kg reference flow | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_energy_and_fuel_records_growout_husbandry` | `growout_husbandry` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | per 1 kg reference flow | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_energy_and_fuel_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | per 1 kg reference flow | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_energy_and_fuel_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | per 1 kg reference flow | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_mortality_residue_and_gear_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, packhouse reject record, weighing, waste contractor record, retrieval log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_mortality_residue_and_gear_records_growout_husbandry` | `growout_husbandry` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, packhouse reject record, weighing, waste contractor record, retrieval log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_mortality_residue_and_gear_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, packhouse reject record, weighing, waste contractor record, retrieval log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_mortality_residue_and_gear_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, packhouse reject record, weighing, waste contractor record, retrieval log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_harvest_depuration_and_product_records_growout_husbandry` | `growout_husbandry` | harvest-size product, marketable reference product, off-grade product, depuration release, and product state | harvest log, grading sheet, depuration release record, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole shell-on basis; purification status; grade; count; mass; destination ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | harvest weighing, grader records, depuration or dispatch records, packhouse records, invoice ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg and item | each harvest, depuration release, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest area, depuration or dispatch centre, packhouse, and declared gate | per 1 kg reference flow | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | harvest-size product, marketable reference product, off-grade product, depuration release, and product state | harvest log, grading sheet, depuration release record, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole shell-on basis; purification status; grade; count; mass; destination ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence  ; measured opening and closing pack-out stocks; dated harvested receipts and onward transfers; separate off-grade sale, reject and other animal-loss masses; independently evidenced signed net animal mass change; species, lot, product state, net whole-animal weighing basis and stock burden carry-over | harvest weighing, grader records, depuration or dispatch records, packhouse records, invoice ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q.  ; reconcile the same period and traced lots using net whole in-shell animal mass, independently weighing stocks and each destination. Carry stock and its accumulated burden between periods; do not record it as new harvest. Record actual signed biological/native-body-water mass change only with independent measurement or a documented material-balance method and uncertainty, never a balancing residual. | kg and item | each harvest, depuration release, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest area, depuration or dispatch centre, packhouse, and declared gate | per 1 kg reference flow | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_packaging_and_ice_records` | `harvest_washing_depuration_and_packout` | sacks, mesh bags, boxes, liners, labels, ice, gel packs, pallets, and reusable containers | packaging issue log, ice production or purchase record, purchase invoice, bill of materials | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; destination ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | warehouse issue record, bill of materials, supplier invoice, weighing ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg and item | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | per 1 kg reference flow | supplier specification, packaging issue sheet, ice record, scale record |
| `cp_delivery_and_route_records` | `delivery_to_declared_gate` | controlled delivery load, fuel, transport service, rejects, and delivered product | delivery log, vehicle or vessel log, fuel record, dispatch note, receiving note | delivered mass; route; distance; vehicle or vessel; fuel; refrigeration or ice service; rejects; delivery date; receiving gate ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | dispatch record, GPS or route log, fuel invoice, receiving record ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg, L, MJ, tonne-km, and item | each controlled delivery route | delivery period linked to production batch | controlled delivery route and declared gate | per 1 kg reference flow | delivery manifest, receiving note, fuel record, route evidence |
| `cp_actual_delivery` | `delivery_to_declared_gate` | actual pre-gate delivery and loss | original meters, weights, stocks and physical handoff records | node/lot/actual species/state/form; each native q/unit; raw batch/per-1000-kg/stage S; same-lot positive Q; actual route/recipient/time; gross/tare/water-ice/rejects; losses/stocks/fates; actual payload/distance/empty returns; service scope; independent range/conversion evidence | Measure each actual exchange only at this node; independently weigh calibrated products and pair to sender; collect acceptance Q independently at the same actual final gate, retaining original denominators and all fates without duplicate reject deduction | kg; kWh; m3; actual native units | each event and meter period | complete actual batch/period including failures, cleanup, stocks and asset service | `delivery_to_declared_gate` | per 1 kg reference flow | calibration, original records, actual source/fate, service scope, independent range/conversion evidence |
| `cp_gate_release` | `gate_release` | unique final acceptance, rejects and loss | original meters, weights, stocks and physical handoff records | node/lot/actual species/state/form; each native q/unit; raw batch/per-1000-kg/stage S; same-lot positive Q; actual route/recipient/time; gross/tare/water-ice/rejects; losses/stocks/fates; actual payload/distance/empty returns; service scope; independent range/conversion evidence | Measure each actual exchange only at this node; independently weigh calibrated products and pair to sender; collect acceptance Q independently at the same actual final gate, retaining original denominators and all fates without duplicate reject deduction | kg; kWh; m3; actual native units | each event and meter period | complete actual batch/period including failures, cleanup, stocks and asset service | `gate_release` | per 1 kg reference flow | calibration, original records, actual source/fate, service scope, independent range/conversion evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | Actual attributable native quantity q divided by same-lot positive actual final-gate accepted net mass Q. Preserve original batch, per-1000-kg and stage-S bases using explicit same_gate_normalization conversion; Q is not a presumed pack-out or delivery output. | q; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |
| `calculate_spat_acceptance_and_survival` | spat_supply_hatchery_and_nursery and growout_husbandry | accepted_spat_or_seed = received_or_collected_spat - rejected_spat; survival_to_harvest = harvested_count / accepted_spat_count when count records are available. Retain count-to-mass conversion separately. | received spat; collected spat; rejected spat; stocked count; harvested count; mortality count | accepted spat or seed, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_area_time_intensity` | growout_husbandry | area_time = active_culture_area * active_culture_duration; allocate shared area by culture-unit records, biomass-time, or product mass as declared. | culture area; active days; allocation basis; product mass | ha-year or m2-day per reference product | `mass-balance-identity` |
| `apply_no_external_feed_default` | growout_husbandry | An actual growout input may be zero only when complete node/period records, purchase/stock/feeding-or-application reconciliation and management records positively evidence no intentional feeding, fertilization, pond enrichment or supplemental algae. Missing/unrecorded is not absent; independently include owned hatchery/nursery and parental-stage foods. Record each actual application product/quantity/purpose/evidence separately. | feed records; enrichment records; farm declaration | feed or enrichment applicability flag and material amount | `asc-farm-standard-2025` |
| `reconcile_packout_mass` | harvest_washing_depuration_and_packout | opening_packout_stock + harvested_input_mass + evidenced_net_animal_mass_change = measured_packout_onward_mass + offgrade_saleable_mass + reject_mass + measured_local_animal_loss + closing_packout_stock. | opening_packout_stock; harvested_input_mass; evidenced_net_animal_mass_change; measured_packout_onward_mass; offgrade_saleable_mass; reject_mass; measured_local_animal_loss; closing_packout_stock | pack-out mass balance | `mass-balance-identity` |
| `calculate_controlled_discharge` | water intake and discharge rows | Prefer measured discharge at the external boundary. When metering is incomplete, estimate discharge only from a complete matched-period balance with evidence for all material terms: external water inflows and precipitation entering the controlled system, less evaporation, water exported with product/waste, other external removals and change in stored water. Internal recirculation crosses no external boundary and cancels on both sides; do not subtract it again from intake. Mass/volume conversion requires actual temperature, salinity and density evidence. Missing terms or a negative closure residual are not an emission, uptake or zero. Distinguish controlled discharge from uncontrolled ambient sea-water exchange. | intake; discharge; recirculated volume; retained water; removed water | controlled discharge volume by process | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging and ice rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging or ice per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |
| `same_gate_normalization` | all inventory rows | Divide measured attributable native quantity q by positive same-lot final-gate accepted net animal mass Q for each exchange per 1 kg. Per 1000 kg = 1000×q/Q; only an original per-1000-kg value for the same Q/form/population converts exactly by /1000. For an amount per stage output S, recover its numerator using independently measured S before division by Q. Preserve native quantities, stage yields, losses/stocks and measurement conversions. Only final Q/Q=1; internal outputs are never fixed to 1. | q; stage S; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species or species group, culture system, spat or seed source, harvest area, product state, purification status, geography, and declared gate. | dataset metadata, stocking records, harvest records, product description, permit, certification, or movement evidence |
| `mass_basis_consistency` | reference product, spat, harvest, pack-out, rejects, packaging, and ice | Keep shell-on, live, fresh, chilled, drained, washed, wet, dry, count, container, and net mass bases separate unless measured conversion evidence exists. | scale records, product specifications, count per kg records, container tare, drainage or moisture evidence |
| `no_feed_and_material_disclosure` | grow-out rows | Declare whether external feed, fertilization, pond enrichment, supplemental algae, predator-control chemicals, disinfectants, or other grow-out material inputs are used. Absence of feed must be an explicit foreground statement, not an omitted record. | farm declaration, application log, chemical inventory, certification audit, supplier records |
| `water_and_purification_disclosure` | hatchery, grow-out, depuration, relaying, washing, and live holding | Distinguish ambient open-water exchange from controlled water intake, treatment, recirculation, depuration, live holding, and discharge. | water meters, pump logs, depuration logs, laboratory results, permit reports |
| `mortality_residue_and_gear_completeness` | spat, grow-out, pack-out, and delivery rows | Record mortalities, rejects, shells, sediment, biofouling residue, discarded or lost gear, and fate by batch or reporting period. | mortality log, reject sheet, waste manifest, gear retrieval record, recovery record |
| `allocation_transparency` | multi-species, multi-grade, or shared-site systems | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, area-time records, culture-unit records |
| `temporal_representativeness` | all foreground rows | Cover a complete production batch, harvest lot, purification cycle, delivery route, or representative reporting period; disclose partial-cycle datasets. | production calendar, stocking and harvest dates, depuration records, delivery records, reporting-period records |
| `dq_atomic_completion` | every process and inventory-completion obligation | These are mandatory per-identity collection obligations, not exchanges, default inputs or emissions. Create separate cards and independent measurements for each actual substance, product, waste stream, emitted substance and receiving medium; retain native units, original batch/stage output, final-gate reference output, attribution/allocation and range/uncertainty evidence. Normalize original totals using matched final output; stage-normalized data require measured stage output to recover the numerator, never an assumption that stage and final output coincide. Do not copy a family total, mixed-unit range, default estimate or one UUID onto children. Unknown is not zero. Purchased materials are product inputs; only direct natural-resource abstraction is an elementary input. Determine the direction/type of mortality/managed waste, direct releases and useful co-products separately from actual fate. | per-flow coverage ledger, measurements/sampling, allocation, original/final outputs, identity and fate records |
| `dq_complete_hatchery_nursery_culture_inputs` | `spat_supply_hatchery_and_nursery`; On-site hatchery or nursery culture inputs | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row is used only when the reporting operator controls hatchery, larval, settlement, or nursery operations that use microalgae, culture media, settlement substrate, collectors, or comparable seed-production inputs. ; Flow property / unit: Mass, volume, or item count / kg, L, or item ; Amount rule: measured hatchery or nursery input quantity by batch and purpose ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_hatchery_nursery_records` ; Sources: `fao-hatchery-culture-bivalves-2004`, `fao-mediterranean-mussel-factsheet` ; Range: Provisional on-site hatchery input screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 500 ; Unit: kg or L hatchery input/1,000 kg marketable product ; Basis: broad first-pass on-site hatchery and nursery input relative to marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_hatchery_nursery_water` | `spat_supply_hatchery_and_nursery`; Hatchery and nursery water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row covers metered seawater, freshwater, process water, make-up water, or recirculation replacement water used in on-site hatchery and nursery operations. ; Flow property / unit: Mass or volume / kg or m3 ; Amount rule: measured intake, make-up water, treated water, or recirculation replacement volume ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_water_quality_and_discharge_records_spat_supply_hatchery_and_nursery` ; Sources: `fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025` ; Range: Provisional hatchery and nursery water screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 2000 ; Unit: m3/1,000 kg marketable product ; Basis: broad first-pass supplied water for on-site seed production relative to marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_hatchery_mortalities_settlement_residue_and_rejected_spat` | `spat_supply_hatchery_and_nursery`; Hatchery mortalities, settlement residue, and rejected spat | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records eggs, larvae, spat, settlement substrate residue, organic residues, shell fragments, and rejected or dead seed from on-site seed production or nursery operations. ; Flow property / unit: Mass or count / kg or item ; Amount rule: measured or estimated mortality count, residue mass, rejected seed, and disposal or recovery route ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_residue_and_gear_records_spat_supply_hatchery_and_nursery` ; Range: Provisional hatchery residue screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 1 ; Unit: kg residue/kg accepted spat or seed ; Basis: broad first-pass residue or mortality mass relative to accepted spat or seed ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_growout_ropes_socks_floats_anchors_and_culture_gear` | `growout_husbandry`; Grow-out ropes, socks, floats, anchors, and culture gear | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records gear and materials that cross the foreground boundary for culture-unit preparation, support, containment, predator control, biofouling management, or harvest access. ; Flow property / unit: Mass or item count / kg or item ; Amount rule: measured material issued, deployed, lost, replaced, recovered, or consumed during the declared production period; reusable gear must retain service life and allocation basis ; Value mode: Foreground record (`foreground_record`) ; Specificity: Technology-specific (`technology_specific`) ; Normalization basis: per 1,000 kg harvest-size product output or allocated gear service over production period ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_culture_gear_and_area_records` ; Sources: `fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025` ; Range: Provisional grow-out gear screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 500 ; Unit: kg material/1,000 kg marketable product ; Basis: broad first-pass rope, sock, float, anchor, pole, rack, tray, or gear material use per marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_intentional_feed_fertilizer_or_algal_input` | `growout_husbandry`; Intentional feed, fertilizer, or algal input | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Use this row only when mussel grow-out intentionally applies feed, fertilization, pond enrichment, supplemental algae, or comparable material input. Only positive evidence of no intentional application over the complete reporting period can establish absence; missing records are not zero, and owned hatchery/nursery or parental-stock feeding remains independently required. ; Flow property / unit: Mass or volume / kg, L, or active ingredient unit ; Amount rule: measured product amount, active ingredient where relevant, application purpose, and permitted use status ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per grow-out area, batch, and 1,000 kg marketable product after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_feed_fertilizer_and_chemical_records` ; Sources: `asc-farm-standard-2025` ; Range: Provisional intentional input screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 1000 ; Unit: kg or L input/1,000 kg marketable product ; Basis: broad first-pass route-specific intentional feed, fertilizer, algal, or chemical input per marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_growout_mortalities_shell_residue_biofouling_and_predator_damaged_mussels` | `growout_husbandry`; Grow-out mortalities, shell residue, biofouling, and predator-damaged mussels | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records mortalities, fallen mussels, broken shells, predator-damaged animals, biofouling residue, sorting losses, and organic residues removed during grow-out. ; Flow property / unit: Mass or count / kg or item ; Amount rule: measured mortality count, mortality mass, shell residue, biofouling residue, and disposal, composting, recovery, or return route ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per grow-out batch and per 1,000 kg marketable output after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_residue_and_gear_records_growout_husbandry` ; Sources: `asc-farm-standard-2025` ; Range: Provisional mortality and residue screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 2 ; Unit: kg mortality or residue/kg marketable product ; Basis: broad first-pass mortality and residue mass relative to marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_recovered_or_lost_growout_gear_waste` | `growout_husbandry`; Recovered or lost grow-out gear waste | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records discarded ropes, socks, nets, floats, buoys, anchors, poles, clips, ties, broken gear, and documented gear losses. ; Flow property / unit: Mass or item count / kg or item ; Amount rule: measured discarded, recovered, recycled, reused, disposed, or lost gear material with fate ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg harvest-size product output ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_residue_and_gear_records_growout_husbandry` ; Sources: `asc-farm-standard-2025` ; Range: Provisional gear waste screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 500 ; Unit: kg gear waste/1,000 kg marketable product ; Basis: broad first-pass discarded or lost gear material per marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_marine_area_occupation` | `growout_husbandry`; Marine area occupation | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records licensed or occupied culture area and duration when the selected LCA model requires area-time or habitat occupation flows. ; Flow property / unit: Area-time / ha-year or m2-day ; Amount rule: calculated from active culture area and culture duration, with shared-site allocation disclosed ; Value mode: Calculated value (`calculated_value`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg harvest-size product output ; Basis kind: Process output (`process_output`) ; Evidence kind: Calculated from collection (`calculated_from_collection`) ; Collection protocol: `cp_culture_gear_and_area_records` ; Sources: `fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025` | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_washing_depuration_relaying_and_live_holding_water` | `harvest_washing_depuration_and_packout`; Washing, depuration, relaying, and live holding water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records water, seawater, ice melt, or live holding system water used after harvest. ; Flow property / unit: Mass or volume / kg or m3 ; Amount rule: measured water use for washing, purging, depuration, relaying support, live holding, chilling, and cleaning ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_water_quality_and_discharge_records_harvest_washing_depuration_and_packout` ; Sources: `fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018` ; Range: Provisional holding and depuration water screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 5000 ; Unit: m3/1,000 kg reference product ; Basis: broad first-pass washing, depuration, relaying support, live holding, and chilling water per reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_packaging_ice_and_dispatch_materials` | `harvest_washing_depuration_and_packout`; Packaging, ice, and dispatch materials | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records sacks, mesh bags, boxes, liners, insulated containers, labels, pallets, bands, ice, gel packs, and reusable packaging that cross the foreground boundary with the product or are consumed for live or chilled dispatch. ; Flow property / unit: Mass or item count / kg or item ; Amount rule: measured packaging item count and material mass; include capacity, tare mass, ice mass, and reuse rate for count records ; Value mode: Foreground record (`foreground_record`) ; Specificity: Product-specific (`product_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_packaging_and_ice_records` ; Sources: `codex-cxs-292-2008` ; Range: Provisional packaging and ice screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 1000 ; Unit: kg packaging or ice/1,000 kg reference product ; Basis: broad first-pass packaging and chilling material mass per reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_offgrade_damaged_dead_or_broken_mussels_packout` | `harvest_washing_depuration_and_packout`; Off-grade, damaged, dead, or broken mussels at pack-out | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records non-marketable mussels, pack-out mortalities, broken shells, sorting rejects, foreign matter, sediment, and residues removed during washing, depuration, grading, or packing. ; Flow property / unit: Mass or count / kg or item ; Amount rule: measured reject mass or count by fate and reason ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_residue_and_gear_records_harvest_washing_depuration_and_packout` ; Sources: `codex-cxs-292-2008`, `fao-bivalve-depuration-2008` ; Same-stage animal-only reject-fraction diagnostic: 0 <= r <= 1 applies only to the actual incoming animal mass on the same physical-state basis, without added water, packaging, sediment or foreign matter. It does not cap mixed residues or amounts per final Q. Independently collect actual per-stream range evidence. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_packout_wastewater_and_sludge` | `harvest_washing_depuration_and_packout`; Pack-out wastewater and sludge | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records cleaning, washing, depuration, relaying support, chilling, or live holding water and sludge discharged from post-harvest operations. ; Flow property / unit: Volume or mass / m3 or kg ; Amount rule: measured or calculated discharge volume, sludge mass, and treatment route ; Value mode: Calculated value (`calculated_value`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Calculated from collection (`calculated_from_collection`) ; Collection protocol: `cp_water_quality_and_discharge_records_harvest_washing_depuration_and_packout` ; Sources: `fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018` ; Range: Provisional pack-out wastewater and sludge screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 5000 ; Unit: m3 wastewater or kg sludge/1,000 kg reference product ; Basis: broad first-pass wastewater and sludge from washing, depuration, cleaning, holding, and chilling per reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_delivery_rejects_or_mortalities` | `delivery_to_declared_gate`; Delivery rejects or mortalities | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records product mortalities, damaged packages, leaking containers, or rejected product during controlled delivery. ; Flow property / unit: Mass or count / kg or item ; Amount rule: measured delivery reject mass or count by reason and fate ; Value mode: Foreground record (`foreground_record`) ; Specificity: Route-specific (`route_specific`) ; Normalization basis: per 1,000 kg delivered reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_delivery_and_route_records` ; Same-stage animal-only reject-fraction diagnostic: 0 <= r <= 1 applies only to the actual incoming animal mass on the same physical-state basis, without added water, packaging, sediment or foreign matter. It does not cap mixed residues or amounts per final Q. Independently collect actual per-stream range evidence. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_range_spat_seed_or_nursery_stock_input` | `spat_supply_hatchery_and_nursery`; `spat_seed_or_nursery_stock_input` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional spat or seed input screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0.001 ;   - Upper: 2 ;   - Unit: kg spat or seed live mass/kg marketable product ;   - Basis: broad first-pass spat or seed mass input relative to marketable output ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_hatchery_nursery_electricity` | `spat_supply_hatchery_and_nursery`; `hatchery_nursery_electricity` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional hatchery electricity screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 5000 ;   - Unit: kWh/1,000 kg marketable product ;   - Basis: broad first-pass on-site hatchery and nursery electricity relative to marketable output ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_accepted_spat_or_seed_for_growout` | `spat_supply_hatchery_and_nursery`; `accepted_spat_or_seed_for_growout` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_accepted_spat_or_seed_transfer_to_growout` | `growout_husbandry`; `accepted_spat_or_seed_transfer_to_growout` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional stocked spat transfer estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0.001 ;   - Upper: 2 ;   - Unit: kg accepted spat or seed/kg marketable product ;   - Basis: broad first-pass accepted spat or seed mass per marketable output ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_growout_electricity` | `growout_husbandry`; `growout_electricity` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional grow-out electricity screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 10000 ;   - Unit: kWh/1,000 kg marketable product ;   - Basis: broad first-pass electricity demand across passive open-water and powered support systems ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_growout_fuel_and_workboat_energy` | `growout_husbandry`; `growout_fuel_and_workboat_energy` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional grow-out fuel screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 1000 ;   - Unit: L diesel-equivalent/1,000 kg marketable product ;   - Basis: broad first-pass directly controlled fuel use per marketable output ;   - Basis kind: Fuel inventory (`fuel_inventory`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_harvest_size_farmed_mussels` | `growout_husbandry`; `harvest_size_farmed_mussels` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Grow-out harvest mass-balance QA guardrail ;   - Range role: QA guardrail (`qa_guardrail`) ;   - Lower: 0 ;   - Upper: 1 ;   - Unit: kg/kg total live biomass before harvest adjustment ;   - Basis: harvested market-size fraction of available biomass in the declared batch ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Method formula (`method_formula`) ;   - Sources: `mass-balance-identity` ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_harvested_mussels_input_to_packout` | `harvest_washing_depuration_and_packout`; `harvested_mussels_input_to_packout` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_packout_electricity` | `harvest_washing_depuration_and_packout`; `packout_electricity` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional pack-out electricity screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 10000 ;   - Unit: kWh/1,000 kg reference product ;   - Basis: broad first-pass harvest, washing, depuration, holding, chilling, and pack-out electricity per reference product ;   - Basis kind: Reference flow (`reference_flow`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_marketable_farmed_mussel_reference_product` | `harvest_washing_depuration_and_packout`; `marketable_farmed_mussel_reference_product` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_saleable_offgrade_mussel_coproduct` | `harvest_washing_depuration_and_packout`; `saleable_offgrade_mussel_coproduct` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional off-grade product screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 1 ;   - Unit: kg off-grade saleable product/kg reference product ;   - Basis: broad first-pass off-grade saleable mass relative to reference product ;   - Basis kind: Reference flow (`reference_flow`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_product_transferred_to_controlled_delivery` | `delivery_to_declared_gate`; `product_transferred_to_controlled_delivery` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_controlled_delivery_fuel_or_transport_service` | `delivery_to_declared_gate`; `controlled_delivery_fuel_or_transport_service` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional controlled delivery screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 1000 ;   - Unit: tonne-km/1,000 kg delivered reference product ;   - Basis: broad first-pass controlled delivery service per delivered product ;   - Basis kind: Transport service (`transport_service`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_delivered_farmed_mussels` | `delivery_to_declared_gate`; `delivered_farmed_mussels` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_stage_coverage` | `spat_supply_hatchery_and_nursery` | Independently collect and add cards for actual owned hatchery/nursery parental stock, eggs, larvae, settlement/spat and every production stage, each actual microalga/feed/medium/material/water/chemical/asset/waste/release. A juvenile/seed card cannot cover parents or all life stages. Retain supplier/ancestry, controlled production, opening/closing/failed batches and next-generation/transfer burdens. Filter-feeding or evidenced no intentional growout feed cannot erase owned hatchery/nursery food or parental resources. | Own-node stage ledger, independent quantity/unit/range, original sources and fates |
| `dq_actual_delivery_completion` | `delivery_to_declared_gate`; `gate_release` | Add independent cards for each actual pre-gate leg, complete service or owned fuel/electricity/asset/cooling/top-up water-ice/gas, every substance release, loss/reject and water/package/cargo fate. Actual payload includes accompanying water, ice and packaging; empty returns retain actual fuel/vehicle service with explicit attribution despite zero cargo. Do not overlap complete services and covered components. Independently prove actual final-gate positive Q/state/recipient/time and exactly one evidenced path; unknown is never presumed bypass. | Route/service scope, actual payload, meters/calibrated weights, physical custody/acceptance and fates |
| `dq_actual_water_and_emissions` | all nodes | Measure external natural abstraction, supplied water product, internal circulation and actual return/discharge separately; never deduct internal recirculation again from external intake. Generated wastewater/solid waste is actual output. Direct releases are individual substance/chemical-basis/actual-medium outputs, never resource inputs. Net nutrient increment/retention is only a separate balance diagnostic, never automatically a negative elementary flow or avoided burden. Actual wastewater origin/treatment state must match; do not substitute an arbitrary treatment-stage UUID. | Actual water/substance balances, sources/fates, treatment scope and substance factors/sampling evidence |
| `dq_actual_amount_modes_and_form` | all actual cards and product forms | Set amount evidence mode from the actual method: direct measurement uses foreground_record/collected_record; calculated amounts use calculated_value/calculated_from_collection with measured inputs, formula, factors/units/sources and uncertainty. Candidate templates do not replace actual records. Every reference must remain a whole in-shell animal; a live reference must also be alive. Shucked meat or tissue-only reference products are outside this method, even if a yield is measured. Never substitute their mass for whole-animal Q or enlarge scope through collection obligations. | Original measurement/calculation evidence, actual same-lot state/form, measurements and physical fates |
| `dq_packout_mass_closure` | `harvest_washing_depuration_and_packout` | Use reconcile_packout_mass for the same reporting period, traced lot/species and declared whole-animal product form. Opening and closing stocks are required measured fields, not defaults; retain their accumulated burdens across periods. Onward product, off-grade sale, rejects and other animal losses must be mutually exclusive: a death or loss already included in rejects is not deducted again. evidenced_net_animal_mass_change is signed, separately evidenced physical change of the animals, not an unexplained residual or a second receipt/loss. Keep free carrier water, ice and packaging in separate ledgers; exclude them from net animal weights, and do not subtract their drainage again as animal loss. The shorter zero-stock equation applies only when zero opening and closing stocks and no additional animal mass change are evidenced; unknown is never zero. | Dated net animal weighings, opening/closing stock ledger, disjoint destinations, independent physical-change evidence and burden carry-over records |

## 9. Validation Rules

A foreground data package conforms to this PCR only when:

- the reference product is normalized to 1 kg farmed mussels in a declared live, fresh, or chilled product form;
- species or species group, culture system, spat or seed source, harvest area, product state, whole shell-on product basis, size or count grade, purification or depuration status, geography, declared gate, holding duration, and packaging state are declared;
- spat or seed input, culture area or gear, energy, fuel, water where controlled, mortality or residue, harvest, pack-out, packaging, and delivery where relevant are either present or explicitly marked not applicable with a reason;
- count, sack, mesh bag, crate, rope, sock, cluster, or volume records include actual net mass, tare, count per kg, mean size, or another transparent conversion to kg;
- grow-out records explicitly state whether external feed, intentional fertilization, pond enrichment, supplemental algae, predator-control chemicals, or disinfectants are used;
- water rows distinguish pumped, supplied, treated, depuration, live holding, and discharge water from ambient open-water exchange;
- pack-out mass balance reconciles harvested input, reference product, saleable off-grade product, rejects, and holding or drainage losses;
- same-site multi-species, shared-area, shared-gear, or multi-grade allocation is documented before the dataset is used as a background or secondary dataset;
- any filtration, nutrient-removal, carbon-storage, or habitat-service claim is excluded from the product inventory unless a separate reviewed method and source-backed quantity are declared.

Final data-package validation must read back dq_atomic_completion and every dq_complete_ requirement. Every applicable obligation must have concrete exchanges with independent quantities, units, sources, normalization, range/uncertainty, fate and verified UUIDs. Use not_applicable only for evidenced absence. Unknown identities, missing quantities, unclassified fates or unfulfilled obligations block final data-package completion. Static PCR checking is not a substitute for this validation.

Final datasets have exactly one actual gate_release and one declared_gate_reference. Every actual exchange and applicable dq_complete_/dq_stage_/dq_actual_/dq_range_ obligation must have independent atomic cards, own quantity/native unit, actual collection/calculation and range/uncertainty evidence, same-final-Q normalization, fate and verified UUID. Unknown identity, activity/route/gate, quantity, range evidence or fate blocks completion and validation, never zero, assumed bypass or disclosure-only omission. Static PCR checking does not establish actual dataset completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | market-size product transfers and final reference | Every market-size animal transfer and final reference product must retain its actual whole in-shell form. Raw shucked or tissue-only fresh/chilled final references are outside this methodology. No measured yield or section-8 completion claim enlarges this boundary. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | use as farmed mussel input to seafood processing, food service, retail, cold-chain, live seafood distribution, or regional food-product lifecycle models |
| allowed_use | whole in-shell methodology only: farmed mussels live, fresh, or chilled datasets with declared species, culture system, product state, harvest area, purification status, gate, and quality disclosures |
| excluded_use | raw shucked/tissue-only reference products outside this methodology; wild harvest, frozen/smoked/dried/salted/brined/prepared mussels, generic mollusc datasets, oysters, scallops, clams, cockles, ark shells, abalone, seed sold as seed, shell product datasets, and datasets lacking species, culture-system, or product-state disclosure |
| required_metadata | canonical PCR id; CPC code; species or species group; culture system; spat or seed source; harvest area; product state; whole shell-on basis; size or count grade; purification or depuration status; geography; declared gate; holding or chilling duration; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved mussel product, spat, shell residue, gear, habitat, seawater, discharge, or depuration treatment flow identities; no-feed declaration; water and purification records; gear loss records; mortality completeness; pack-out mass balance; partial-cycle or proxy data use |
| update_trigger | revise when CPC mapping changes, Tiangong mussel, spat, shell residue, water, discharge, gear, or habitat flow identities are updated, Codex, FAO, ASC, or equivalent aquaculture and sanitation guidance changes, or reviewed foreground datasets provide better source-backed ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-292-2008` | standard | <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ru/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B292-2008%252FCXS_292e.pdf> | live and raw bivalve mollusc product definition, live product handling, labelling, content declaration, purification context, hygiene, and quality factors |
| `fao-hatchery-culture-bivalves-2004` | handbook | <https://openknowledge.fao.org/handle/20.500.14283/y5720e> | bivalve hatchery, larval, settlement, nursery, seed-production, water, and culture-input process context |
| `fao-bivalve-depuration-2008` | handbook | <https://www.fao.org/4/i0201e/i0201e.pdf> | depuration centre operation, process controls, water treatment, post-harvest live holding, and HACCP-oriented purification context |
| `who-fao-growing-area-guidance-2018` | official_guidance | <https://www.who.int/publications/i/item/9789241514750> | growing-area monitoring, sanitation programme context, harvest-area classification, and links between Codex requirements and bivalve production controls |
| `fao-mediterranean-mussel-factsheet` | official_guidance | <https://www.fao.org/fishery/culturedspecies/mytilus_galloprovincialis/en> | mussel raft, rope, collector, and grow-out route context for Mytilus galloprovincialis-style systems |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | current ASC grow-out site scope, operational process boundary, traceability, water, energy, health, legal, gear, and environmental data requirements |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for spat acceptance, grow-out, pack-out, discharge, delivery, and reference-flow normalization. | QA guardrails, survival, yield, pack-out reconciliation, packaging conversion, delivery-service calculation, and normalization rules |
| `pcr-gate-accounting-method` | method_factor | Declared prospective final-gate, independent-stage measurement and normalization method in this PCR sections 3–9; not external empirical ranges | Unique final Q/Q, native q/Q, original batch/per-1000-kg/stage-S conversion and atomic completion duties |
