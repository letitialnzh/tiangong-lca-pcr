---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed crabs, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed crabs in CPC 3.0 `04312`, placed on the market as live, fresh, or chilled product. It covers crab aquaculture routes including hatchery or supplier seed, nursery, grow-out, fattening where the reporting operator controls the feeding and husbandry period, harvest, grading, live holding, chilling, packaging, and release at the declared gate.

Covered systems may include ponds, pens, cages, boxes, recirculating aquaculture systems, tanks, brackish-water systems, mangrove-edge systems where legally permitted, polyculture, and declared integrated aquaculture systems. Excluded products are wild-caught crabs, wild crabs only stored or graded after capture, frozen, dried, salted, brined, cooked, canned, picked-meat, roe-only, prepared, or preserved crab products, crab seed sold as a separate aquaculture input, and crab shell or processing residues modelled as separate products.

A conforming dataset must show foreground-controlled farming, fattening, nursery, or grow-out records. Wild capture followed only by live holding, chilling, grading, or dispatch is outside this PCR and belongs under the corresponding wild crab category.

Bounded maintenance holding, transport, preservation, packing or resale alone does not establish farming; require evidenced managed biological growth, reproduction or fattening.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04312`, `Farmed crabs, live, fresh or chilled`; narrower |
| covered_products | farmed crabs sold live, fresh, or chilled from declared aquaculture, nursery, grow-out, or fattening systems |
| excluded_products | wild-caught crabs; wild catch only held, chilled, graded, or dispatched after capture; frozen, dried, salted, brined, cooked, canned, picked-meat, roe-only, prepared, or preserved crab products; crab seed sold as seed; crab shells, molts, and residues as separate products |
| representative_product | live or chilled farmed crab at declared market size and declared product form |
| production_route | broodstock or seed supply, hatchery or nursery where controlled, grow-out or fattening husbandry, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled crab with declared species, seed or broodstock source, culture system, size grade, whole or declared product basis, holding or chilling condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed crabs as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or species group, farmed proof, culture system, live/fresh/chilled state, whole or declared product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, fattening batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `qualified_product_gate_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed crab product in its actual declared state at the final gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; broodstock, megalopa, juvenile, soft-shell, fattening, or stocked-crab source; culture system; farmed proof or controlled husbandry period; product state; whole, live, fresh, chilled, soft-shell, fattened, or declared product basis; size grade or count per kg; sex or maturity class when commercially material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime; water salinity and exchange; health, biosecurity, permit, or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, basket, box, tub, live-tank, or size-grade records may be used only when net mass, count per kg or mean individual mass, product form, and sampling or tare method are retained.

Declare one actual final gate, product form/state and positive accepted net delivered mass. If delivery_to_declared_gate is included, complete actual delivery, losses and acceptance before release; otherwise receive the measured pack-out transfer. Never select an earlier denominator, fix internal yield, sum both paths or assume delivery state; explicitly record excluded later transport. Retain all actual stage yields, raw batches and per-1000-kg bases and convert explicitly to per 1 kg final reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `final_gate_normalization` | all inventory rows | actual native exchange property | native unit per 1 kg final reference | Attribute raw batch/event quantities by actual ownership and allocation, then divide by positive accepted net kg at declared_gate_release; divide same-boundary per-1000-kg-final-product values by 1000. Stage-output denominators require measured lot transfers and yield conversion, never direct substitution for the final denominator; biological batches are not machine M. |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed crab in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show controlled aquaculture, grow-out, nursery, or fattening activity, not only wild capture followed by live holding, chilling, grading, or dispatch. |
| `product_form_mass_basis` | whole, soft-shell, fattened, live, fresh, or chilled records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state live whole weight, chilled whole weight, soft-shell product weight, fattened crab weight, drained mass, or another contract-declared basis. Convert between bases only with measured yield evidence. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, size grade, sampling method, and product form before normalization to kg reference product. |
| `life_stage_identity` | broodstock, eggs, larvae, megalopae, juveniles, soft-shell crabs, and transferred stock | Mass or count | kg, item, or life-stage count | Life-stage records must retain species, life stage, supplier or hatchery, batch, count, mass where measurable, health status, and transfer date. |
| `feed_mass_basis` | trash fish, mollusc meat, formulated feed, live feed, and supplementary feed | Mass | kg | Feed records must state wet, dry, as-fed, live-feed, or formulated-feed basis. Convert between bases only with measured moisture, supplier data, or retained farm recipe. |
| `water_salinity_and_volume` | hatchery, nursery, grow-out, fattening, live holding, washing, chilling, and wastewater | Salinity, mass, or volume | ppt, kg, or m3 | Preserve controlled water volume, salinity, water-exchange, make-up water, recirculation, and discharge basis. |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, water exchange, filtration, lighting, chilling, live holding, harvest, boats, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, lime, water-treatment chemicals, oxygen, and salt | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | Record product quantity, active ingredient where applicable, treatment purpose, diagnosis or health plan link, legal status, and harvest eligibility consequence. |
| `packaging_and_ice_basis` | baskets, boxes, bags, liners, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | Packaging, ice, live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species | scientific and common name | required for all datasets |
| Culture system | pond, pen, cage, box, tank, RAS, mangrove-edge system, polyculture, fattening unit, or declared variant | required for boundary, water, feed, mortality, and discharge interpretation |
| Biological starting condition | broodstock, seed crab, megalopa, juvenile, soft-shell crab, fattening stock, hatchery source, or supplier | required to distinguish farmed production from wild capture |
| Product form | live whole, fresh whole, chilled whole, soft-shell, fattened, roe-bearing if declared, or declared variant | required for mass-basis interpretation |
| Size grade | count per kg, mean individual mass, carapace width, sex or maturity class, or market grade | required when count or grade records are used |

## 5. System Boundary

The default boundary covers foreground-controlled farmed crab production to the declared farm, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, egg, larval, megalopa, juvenile, seed crab, soft-shell, or fattening-stock sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased stock disclosure when supplied by another hatchery, fisher, collector, or farm.
2. Hatchery, nursery, grow-out, and fattening husbandry, including stocking, feed, water intake and exchange, aeration, oxygenation, filtration, salinity control, health management, biosecurity, molting management, mortalities, and directly controlled maintenance.
3. Harvest, grading, washing, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased feed, seed crabs, megalopae, juveniles, packaging, ice, oxygen, electricity, fuel, and chemicals require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_megalopa_juvenile_seed_crab_or_fattening_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04312`, `Farmed crabs, live, fresh or chilled` |
| recursive_input_rule | farmed crab broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, or fattening stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, life-stage, source, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | broodstock, hatchery, seed, juvenile, soft-shell, fattening-stock, or supplier dataset, or documented source, species, batch, count or mass, life stage, health or biosecurity status, movement permission, and certification or permit evidence |
| disclosure | disclose species, culture system, biological starting condition, farmed production evidence, stocking density, feed regime, water source, salinity and water exchange, aeration or oxygenation, health treatments, molting and mortality records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| broodstock_hatchery_nursery_and_stocking | Broodstock, Hatchery, Nursery, and Stocking | required | biological starting condition must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | viable seed crabs, megalopae, juveniles, or stocked crabs entering grow-out or fattening |
| growout_and_fattening_husbandry | Grow-out and Fattening Husbandry | required |  | foreground production | harvest-size crabs before final handling |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled crab |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |
| declared_gate_release | Declared final-gate acceptance and release | required | Every qualifying lot after any actual included optional delivery | Sole final reference, actual state and rejection; no invented duplicate operation | 1 kg final accepted net product |

### Process: Broodstock, Hatchery, Nursery, and Stocking (`broodstock_hatchery_nursery_and_stocking`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Live crab broodstock (`stock_broodstock`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live crab broodstock
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### Live crab larvae (`stock_larvae`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live crab larvae
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### Live crab megalopae (`stock_megalopae`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live crab megalopae
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### Live juvenile crabs (`stock_juveniles`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live juvenile crabs
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### Live crabs received for evidenced fattening (`stock_fattening_stock`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live crabs received for evidenced fattening
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### Electricity at the declared supplier and voltage (`broodstock_hatchery_nursery_and_stocking_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### Supplied liquid water of the declared source and treatment (`broodstock_hatchery_nursery_and_stocking_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### oxygen (`broodstock_hatchery_nursery_and_stocking_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live farmed crab stock transferred at its actual species and life stage (`accepted_stock_transfer`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed crab stock transferred at its actual species and life stage
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted net wet biomass and auxiliary count for the same species, life stage and lot; retain hatchery/nursery growth, transfer, mortality, rejects and paired source/recipient transfer IDs. Normalize to final accepted net delivered mass, never fix to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

##### Waste flows

##### Elementary flows

### Process: Grow-out and Fattening Husbandry (`growout_and_fattening_husbandry`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Live farmed crab stock received for grow-out at its actual species and life stage (`stock_received_for_growout`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed crab stock received for grow-out at its actual species and life stage
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass received by this unit and reconcile species, life stage, lot and transfer ID with accepted_stock_transfer or the actual purchased source and upstream burden. Normalize to final accepted net delivered mass; never fix internal quantity to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

###### Electricity at the declared supplier and voltage (`growout_and_fattening_husbandry_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

###### Diesel fuel (`growout_and_fattening_husbandry_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

###### Supplied liquid water of the declared source and treatment (`growout_and_fattening_husbandry_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

###### oxygen (`growout_and_fattening_husbandry_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live farmed crab biomass before harvest (`harvest_size_farmed_crabs_before_final_handling`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed crab biomass before harvest
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil), emissions to air unspecified (`growout_and_fattening_husbandry_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_fattening_husbandry`

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Actual-state farmed crab biomass at pre-gate handling transfer (`harvest_size_crabs_received_for_final_handling`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed crab biomass at pre-gate handling transfer
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### Electricity at the declared supplier and voltage (`harvest_live_holding_chilling_and_packout_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### Supplied liquid water of the declared source and treatment (`harvest_live_holding_chilling_and_packout_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### oxygen (`harvest_live_holding_chilling_and_packout_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### Solid water ice (`harvest_live_holding_chilling_and_packout_water_ice`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure actual solid water-ice mass, distinguishing purchased from own-made ice. Own-made ice retains its water and energy without an additional purchased-ice supplier burden; reconcile meltwater, water pathways and transported load separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual-state farmed crab biomass at pre-gate handling transfer (`marketable_farmed_crabs_live_fresh_or_chilled`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed crab biomass at pre-gate handling transfer
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### Actual-state farmed crab biomass at pre-gate handling transfer (`offgrade_saleable_crabs`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed crab biomass at pre-gate handling transfer
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

##### Waste flows

##### Elementary flows

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Actual-state farmed crab product loaded for controlled delivery (`product_transferred_to_controlled_delivery`)

This is the actual loading receipt from marketable_farmed_crabs_live_fresh_or_chilled, paired by lot, species, state, transfer ID and loading time. It precedes delivery losses and is neither arrival mass nor final accepted reference Q. Record carrier water, ice and packaging separately.

- Selected flow: Actual-state farmed crab product loaded for controlled delivery
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net animal mass actually loaded, matching the pack-out outgoing transfer; retain actual state, count and paired records. Divide that actual loading quantity by the same positive final-gate accepted net animal mass; never replace loading quantity by arrival mass, accepted output or fixed 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_delivery_to_declared_gate`

###### Diesel fuel (`delivery_to_declared_gate_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_delivery_to_declared_gate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual-state farmed crab biomass at delivery completion (`delivered_farmed_crabs`)

This is independently measured animal mass arriving after the actual included delivery. Reconcile loading, arrival, actual transit losses and any stocks once; pair the arrival transfer to qualified_product_gate_receipt. Final-gate rejection and accepted reference Q are determined separately, not assumed equal to arrival mass.

- Selected flow: Actual-state farmed crab biomass at delivery completion
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net animal mass actually arriving, retaining paired loading records, actual transit losses and destinations. Divide that actual arrival quantity by the same positive final-gate accepted net animal mass; never assume loading, arrival and accepted output are equal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_delivery_to_declared_gate`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil), emissions to air unspecified (`delivery_to_declared_gate_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_delivery_to_declared_gate`

### Process: Declared final-gate acceptance and release (`declared_gate_release`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Actual-state farmed crab product received at the declared final gate (`qualified_product_gate_receipt`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed crab product received at the declared final gate
- Flow property / unit: Mass / kg
- Amount rule: Receive exactly one actual pack-out-complete transfer or the arrival after included controlled delivery; measure net animal mass with the same lot, actual state and paired transfer ID, retaining rejects and losses. Never fix input to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_gate_acceptance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farmed crab product in its actual declared state at the final gate (`qualified_product_gate_release`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Farmed crab product in its actual declared state at the final gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_gate_acceptance`

##### Waste flows

###### Rejected farmed crab bodies at final acceptance (`final_gate_animal_rejects`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Rejected farmed crab bodies at final acceptance
- Flow property / unit: Mass / kg
- Amount rule: Measured net animal mass actually rejected at final acceptance to its evidenced disposal destination; retain upstream burdens and normalize by accepted final net delivered mass. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_gate_acceptance`

##### Elementary flows

## 7. Allocation and Co-product Handling

Avoid allocation where batch records can partition burdens by species, hatchery batch, nursery unit, grow-out unit, fattening unit, harvest lot, size grade, sex or maturity class, product form, live/fresh/chilled state, or destination. Separate live, fresh, chilled, soft-shell, fattened, off-grade, and delivery products by measured mass before applying allocation.

When a single foreground batch produces several saleable grades within CPC 04312, first subdivide directly attributable activities. Allocate remaining common burdens by a documented causal physical relationship; product mass is usable only when that relation is supported. Otherwise use comparable actual gate revenue with disclosed price period and sensitivity, or retain unresolved allocation when neither relationship is evidenced. Shells, molts, mortalities, wastewater, sludge, feed residue, packaging rejects, and dead product are waste or treatment outputs unless they are sold with a separate product dataset and reference flow.

If the same site grows multiple species or products in the same pond, pen, cage, box, RAS, tank, vehicle, vessel, or packhouse route, allocate shared energy, water, feed preparation, oxygenation, filtration, labour service, and maintenance records by measured subprocess use, culture unit, biomass-time, area-time, or product mass in that order of preference. The selected allocation basis must be disclosed.

This PCR explicitly adopts the allocation hierarchy in GHG Protocol Product Standard chapter 9: subdivision first, then evidenced causal physical relationships, and evidenced economic relationships where physical relationships are inapplicable. Mass is not an automatic convenience default. Preserve unallocated physical quantities and a separately labelled once-only LCA view; reconcile all output/node shares to one. Allocation never repairs physical imbalance, and internal transfers create no sale or substitution credit. Source: `ghg-product-allocation`.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, stocked crabs, and accepted transfer output | hatchery transfer, supplier invoice, fisher or collector declaration where legally allowed, stocking log, health certificate, batch sheet | species; batch id; life stage; supplier, hatchery, collector, or farm; count; mean size; mean mass where measurable; total mass; sex or maturity class where relevant; health status; biosecurity status; transfer date ; raw collection basis and original aggregation obligations: sum accepted counts and masses by batch; calculate mean size, survival, and transfer losses before harvest normalization | supplier records, hatchery logs, transfer documents, stocking count, sampling and weighing | item, stage count, carapace width, and kg | each receipt, hatchery batch, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, grow-out unit, pond, pen, cage, box, tank, or RAS module | per 1 kg reference flow | signed transfer records, sampling sheet, weighing record, health certificate, permit, or certification evidence ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_biological_stocking_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, stocked crabs, and accepted transfer output | hatchery transfer, supplier invoice, fisher or collector declaration where legally allowed, stocking log, health certificate, batch sheet | species; batch id; life stage; supplier, hatchery, collector, or farm; count; mean size; mean mass where measurable; total mass; sex or maturity class where relevant; health status; biosecurity status; transfer date ; raw collection basis and original aggregation obligations: sum accepted counts and masses by batch; calculate mean size, survival, and transfer losses before harvest normalization | supplier records, hatchery logs, transfer documents, stocking count, sampling and weighing | item, stage count, carapace width, and kg | each receipt, hatchery batch, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, grow-out unit, pond, pen, cage, box, tank, or RAS module | per 1 kg reference flow | signed transfer records, sampling sheet, weighing record, health certificate, permit, or certification evidence ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_feed_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | live feed, formulated feed, trash fish, mollusc meat, broodstock feed, starter feed, and supplementary feed | feed issue log, supplier invoice, feed formulation, farm recipe, leftover record | feed product; feed type; wet/dry/as-fed basis; quantity issued; leftovers; feed source; marine ingredient fraction where relevant; batch id ; raw collection basis and original aggregation obligations: normalize net feed supplied to accepted stock, harvest-size output, and reference product; retain wet/dry/live-feed conversion basis | feed inventory, supplier declarations, farm recipe, feeding logs | kg, g, L, item, or cyst count | each feed issue or batch summary | hatchery, nursery, grow-out, or fattening period | hatchery, nursery, pond, pen, cage, box, tank, or RAS module | per 1 kg reference flow | feed purchase records, supplier formulation, farm recipe, stock movement logs ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_feed_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | live feed, formulated feed, trash fish, mollusc meat, broodstock feed, starter feed, and supplementary feed | feed issue log, supplier invoice, feed formulation, farm recipe, leftover record | feed product; feed type; wet/dry/as-fed basis; quantity issued; leftovers; feed source; marine ingredient fraction where relevant; batch id ; raw collection basis and original aggregation obligations: normalize net feed supplied to accepted stock, harvest-size output, and reference product; retain wet/dry/live-feed conversion basis | feed inventory, supplier declarations, farm recipe, feeding logs | kg, g, L, item, or cyst count | each feed issue or batch summary | hatchery, nursery, grow-out, or fattening period | hatchery, nursery, pond, pen, cage, box, tank, or RAS module | per 1 kg reference flow | feed purchase records, supplier formulation, farm recipe, stock movement logs ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment ; raw collection basis and original aggregation obligations: reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, sensor records, permit report, water-quality monitoring record ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_salinity_and_discharge_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment ; raw collection basis and original aggregation obligations: reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, sensor records, permit report, water-quality monitoring record ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_salinity_and_discharge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment ; raw collection basis and original aggregation obligations: reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, sensor records, permit report, water-quality monitoring record ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use ; raw collection basis and original aggregation obligations: allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | per 1 kg reference flow | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_energy_and_fuel_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use ; raw collection basis and original aggregation obligations: allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | per 1 kg reference flow | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use ; raw collection basis and original aggregation obligations: allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | per 1 kg reference flow | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_health_treatment_and_chemical_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status ; raw collection basis and original aggregation obligations: normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | per 1 kg reference flow | application record, diagnosis record, health plan, invoice, permit or certification evidence ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_health_treatment_and_chemical_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status ; raw collection basis and original aggregation obligations: normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | per 1 kg reference flow | application record, diagnosis record, health plan, invoice, permit or certification evidence ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_health_treatment_and_chemical_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status ; raw collection basis and original aggregation obligations: normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | per 1 kg reference flow | application record, diagnosis record, health plan, invoice, permit or certification evidence ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category ; raw collection basis and original aggregation obligations: sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category ; raw collection basis and original aggregation obligations: sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category ; raw collection basis and original aggregation obligations: sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category ; raw collection basis and original aggregation obligations: sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | per 1 kg reference flow | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_harvest_and_product_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | harvest-size product, marketable reference product, off-grade product, and product state | harvest log, grading sheet, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole or declared basis; grade; count; sex or maturity class; mass; destination ; raw collection basis and original aggregation obligations: reconcile harvested input, marketable output, off-grade product, rejects, holding losses, and reference product | harvest weighing, grader records, live holding records, packhouse records, invoice | kg and item | each harvest, holding, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest unit, live holding area, packhouse, and declared gate | per 1 kg reference flow | calibrated scale record, sales invoice, dispatch record, batch reconciliation ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_harvest_and_product_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest-size product, marketable reference product, off-grade product, and product state | harvest log, grading sheet, sales invoice, dispatch record, pack-out record | lot/species/actual state/product-form basis; harvest date and culture unit; independently weighed net harvested receipts; opening/closing pack-out stock; independently weighed net onward transfer and paired ID; off-grade product; mutually exclusive rejects/local mortalities/tissue losses and destinations; evidenced physical animal-mass change; gross/tare/free water/ice and drainage subledger; actual delivery/final-gate linkage | Use calibrated, tared/drained weighing and matched harvest, stock, grading and pack-out handover records to reconcile the local animal ledger under reconcile_packout_mass; independently retain receiving/acceptance records under cp_final_gate_acceptance without replacing measured local output by final Q | kg and item | each harvest, holding, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest unit, live holding area, packhouse, and declared gate | per 1 kg reference flow | calibrated scale record, sales invoice, dispatch record, batch reconciliation ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_packaging_ice_oxygen_and_energy_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | boxes, baskets, bags, liners, labels, ice, gel packs, oxygenated packs, pallets, reusable containers, and pack-out energy | packaging issue log, ice production or purchase record, oxygen pack record, purchase invoice, bill of materials, energy meter | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; oxygen pack; destination; energy use ; raw collection basis and original aggregation obligations: convert count to mass using tare or supplier data; allocate reusable packaging; normalize to reference product | warehouse issue record, bill of materials, supplier invoice, weighing, submeter | kg, item, and kWh | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | per 1 kg reference flow | supplier specification, packaging issue sheet, ice record, scale record ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_delivery_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | diesel, vessel fuel, vehicle fuel, generator fuel, delivery service, delivered product, and delivery losses | fuel purchase, tank drawdown, vessel log, vehicle log, delivery log, dispatch note, receiving note | fuel type; quantity; route; vehicle or vessel; distance; load; live-holding or refrigeration service; delivery date; rejects; receiving gate ; raw collection basis and original aggregation obligations: normalize fuel or tonne-km to product mass; calculate delivery losses; avoid double counting supplier-delivered inputs | fuel invoice, tank gauge, vehicle or vessel log, GPS or route log, receiving record | L, kg, MJ, tonne-km, and kg product | each trip, work event, delivery route, or reporting period | delivery period | directly controlled routes, vessels, vehicles, equipment, and declared gate | per 1 kg reference flow | fuel invoice, odometer, vessel log, delivery manifest, receiving note ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_delivery_to_declared_gate` | `delivery_to_declared_gate` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_final_gate_acceptance` | `declared_gate_release` | Sole final-gate receipt, rejection and reference release | Calibrated weighing, lot and buyer acceptance records | selected gate/route; included/bypassed delivery evidence; paired transfer ID; species/state/form/lot/period; incoming net animal mass; packaging/water/ice/tare; rejects/loss/disposal; final accepted net kg; resource owner | Reconcile calibrated incoming, rejection and final accepted net mass against matched lot transfer/acceptance records; exclude free water, ice and packaging; retain measured form yields and uncertainty | kg | every final lot handover | same lot and reporting period including any included delivery interval | sole declared final gate | per 1 kg reference flow | calibration, weighing, buyer acceptance, state/route and reject/disposal evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | normalized_amount = measured_or_calculated_amount / marketable_reference_product_mass. Preserve raw records and product-form basis. | measured amount; marketable_reference_product_mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calculate_stock_acceptance_and_survival` | broodstock_hatchery_nursery_and_stocking and growout_and_fattening_husbandry | accepted_stock = received_or_produced_stock - rejected_stock; survival_to_harvest = harvested_count / stocked_count when count records are available. Retain count-to-mass conversion separately. | received stock; produced megalopae; rejected stock; stocked count; harvested count; mortality count | accepted stock, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_feed_conversion_indicator` | growout_and_fattening_husbandry | feed_conversion_indicator = net_feed_mass / harvest_size_product_mass on the declared feed mass basis. Do not compare wet, dry, trash-fish, mollusc-meat, and as-fed records without conversion evidence. | feed_mass; feed basis; harvest_size_product_mass | feed mass per kg harvest-size crab | `asc-feed-standard-2025` |
| `calculate_controlled_discharge` | water intake and discharge rows | Prefer measured discharge at the external boundary. When metering is incomplete, estimate discharge only from a complete matched-period balance with evidence for all material terms: external water inflows and precipitation entering the controlled system, less evaporation, water exported with product/waste, other external removals and change in stored water. Internal recirculation crosses no external boundary and cancels on both sides; do not subtract it again from intake. Mass/volume conversion requires actual temperature, salinity and density evidence. Missing terms or a negative closure residual are not an emission, uptake or zero. Distinguish controlled discharge from uncontrolled ambient sea-water exchange. | intake; discharge; recirculated volume; retained water; sludge water | controlled discharge volume by process | `mass-balance-identity` |
| `reconcile_packout_mass` | harvest_live_holding_chilling_and_packout | harvested_input_mass + opening_packout_stock + evidenced_net_animal_mass_change = measured_packout_onward_mass + offgrade_saleable_mass + reject_mass + measured_local_animal_loss + closing_packout_stock, on the same declared animal/product-form basis. Measure measured_packout_onward_mass independently at the actual outgoing handling transfer; it is not final-gate accepted Q. Keep destinations mutually exclusive and count each local reject, mortality or tissue loss once. Evidence any physical animal-mass change separately. The signed net-change term covers only evidenced gain or decrease not already represented in another receipt, stock, output, reject or local-loss term; never count the same change in two terms. Unexplained imbalance is not a permitted adjustment. Track free water, ice, drainage and packaging in separate material ledgers, excluding them only from gross weighings that contain them. Reconcile subsequent delivery and final acceptance separately under their actual owners, then normalize each actual quantity by positive final accepted Q through calc_final_gate_normalization; never move a downstream loss into pack-out or assume the outgoing transfer equals Q. | harvested_input_mass; opening_packout_stock; evidenced_net_animal_mass_change; measured_packout_onward_mass; offgrade_mass; reject_mass; measured_local_animal_loss; closing_packout_stock; cp_harvest_and_product_records_harvest_live_holding_chilling_and_packout; cp_atomic_inventory_harvest_live_holding_chilling_and_packout; cp_final_gate_acceptance | independently reconciled local pack-out animal-mass balance and separate final-gate denominator | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging, ice, oxygen, and reusable container rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging, ice, oxygen, or container service per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |
| `calc_final_gate_normalization` | all inventory rows | Divide same-boundary, same-actual-state quantities reported per 1000 kg final accepted product by 1000. For raw batch/event totals, establish actual ownership and once-only allocation, then divide by positive final accepted net kg from cp_final_gate_acceptance. Stage, harvest or pack-out denominators require same-lot measured transfer/yield mapping with the original values and conversion audit trail retained. Internal animals and transported water/ice/packaging are never fixed 1 kg inputs. | raw batch and stage records; measured yields/transfers; once-only allocation; cp_final_gate_acceptance | native exchange quantity per 1 kg final reference, with raw values and conversion record | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species, farmed production evidence, biological starting condition, culture system, product state, geography, and declared gate. | dataset metadata, stocking records, hatchery records, product description, permit, certification, or movement evidence |
| `mass_basis_consistency` | reference product, stock, harvest, pack-out, rejects, feed, packaging, and ice | Keep whole, soft-shell, fattened, live, fresh, chilled, drained, wet, dry, trash-fish, count, container, and net mass bases separate unless measured conversion evidence exists. | scale records, product specifications, count per kg records, container tare, moisture or drainage evidence |
| `feed_and_health_disclosure` | hatchery, nursery, grow-out, and fattening rows | Retain feed type, feed basis, feed recipe, supplier formulation, health treatments, medicine eligibility, and biosecurity records where applicable. | feed logs, supplier data, farm recipe, health plan, treatment logs |
| `water_salinity_and_discharge_disclosure` | hatchery, nursery, grow-out, fattening, live holding, and pack-out | Distinguish controlled intake, exchange, recirculation, oxygenation, salinity, live holding, cleaning, and discharge. | water meters, sensor logs, oxygen logs, pump logs, discharge permits, monitoring reports |
| `mortality_molt_residue_and_sludge_completeness` | stock, grow-out, fattening, pack-out, and delivery rows | Record mortalities, molts, shells, feed residue, sludge, rejects, and fate by batch or reporting period. | mortality log, molting log, reject sheet, sludge record, waste manifest, recovery record |
| `allocation_transparency` | multi-species, multi-grade, or shared-system operations | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, pond records, cage records, RAS module records, route logs |
| `temporal_representativeness` | all foreground rows | Cover a complete aquaculture production batch, fattening batch, harvest lot, holding period, delivery route, or representative reporting period; disclose partial-cycle or pilot-scale datasets. | production calendar, stocking and harvest dates, hatchery records, delivery records, reporting-period records |
| `dq_inventory_completion` | all concrete exchanges and final gate | Complete every actual exchange including route-specific water, energy, feed, treatment, packaging, service, capital/replacement/cleaning and fate. Independently measure listed water/electricity/diesel/oxygen/ice cards only when actually used, and add separate cards for all other actual materials. Retain independent Range/UUID gaps as blockers to final completeness; never replace unknown with zero. | per-flow coverage ledger, raw records, independent ranges and verified identities |
| `dq_complete_biological_stock_input` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Broodstock, larvae, megalopae, juveniles, seed crabs, or fattening stock”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records purchased or internally produced biological stock entering the declared farmed crab route. Flow property / unit: Mass or count with life stage / kg, item, or stage count Amount rule: measured count, mass where measurable, life stage, and accepted quantity entering hatchery, nursery, grow-out, or fattening Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_biological_stocking_records_broodstock_hatchery_nursery_and_stocking` Sources: `fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_nursery_or_stocking_feed` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Hatchery, nursery, or stocking feed”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row covers live feed, Artemia, mollusc meat, trash fish, formulated starter diets, broodstock diets, and comparable hatchery or nursery feeds. Flow property / unit: Mass, volume, or count / kg, g, L, cyst count, or item Amount rule: measured feed or live-feed quantity by batch, life stage, and basis Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery, nursery, or stocking batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_feed_records_broodstock_hatchery_nursery_and_stocking` Sources: `fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_nursery_water` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Hatchery and nursery water”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row covers controlled seawater, freshwater, brackish water, process water, make-up water, and recirculation replacement water used in on-site hatchery and nursery operations. Flow property / unit: Mass or volume / kg or m3 Amount rule: measured intake, make-up water, treated water, or recirculation replacement volume with salinity basis retained Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking` Sources: `fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_nursery_electricity` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Hatchery and nursery electricity”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row covers electricity for pumps, aeration, oxygenation, filtration, lighting, chilling or heating, UV or other water treatment, and live-feed culture in on-site hatchery or nursery operations. Flow property / unit: Energy / kWh Amount rule: metered electricity or allocated electricity records for hatchery and nursery operations Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_mortalities_molts_sludge_and_culture_residue` | `broodstock_hatchery_nursery_and_stocking`; outputs; waste | Collect every actual exchange for the collection responsibility “Hatchery mortalities, molts, sludge, and culture residue”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records broodstock mortalities, larvae, megalopae, seed rejects, molts, shells, feed residue, sludge, biofilter solids, and rejected stock from on-site hatchery or nursery operations. Flow property / unit: Mass or count / kg or item Amount rule: measured mortality count, residue mass, sludge, rejected stock, and disposal or recovery route Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_accepted_seed_crabs_or_juveniles_for_growout` | `broodstock_hatchery_nursery_and_stocking`; outputs; product | Collect every actual exchange for the collection responsibility “Accepted seed crabs or juveniles for grow-out”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This output carries viable seed crabs, megalopae, juveniles, or stocked crabs into grow-out or fattening. Flow property / unit: Mass or count with mean size / kg, item, or stage count Amount rule: calculated accepted stock after receipt, nursery, grading, acclimation, and transfer losses Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: accepted stock entering grow-out or fattening Basis kind: Process output (`process_output`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_biological_stocking_records_broodstock_hatchery_nursery_and_stocking` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_accepted_stocked_crabs_entering_culture_units` | `growout_and_fattening_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Accepted stocked crabs entering culture units”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records accepted seed crabs, juveniles, soft-shell crabs, or fattening stock stocked into grow-out or fattening culture units. Flow property / unit: Mass or count / kg or item Amount rule: measured accepted count and mass entering each culture unit Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per culture unit and per 1,000 kg marketable reference product Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_biological_stocking_records_growout_and_fattening_husbandry` Sources: `fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_and_fattening_feed` | `growout_and_fattening_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Grow-out and fattening feed”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records formulated feed, trash fish, mollusc meat, mixed farm feed, and supplementary feed supplied to grow-out or fattening units. Flow property / unit: Mass / kg Amount rule: measured net feed supplied, retaining wet, dry, as-fed, trash-fish, mollusc-meat, or formulated basis Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg harvest-size crab output Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_feed_records_growout_and_fattening_husbandry` Sources: `fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_water_exchange_and_makeup_water` | `growout_and_fattening_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Grow-out water exchange and make-up water”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records controlled brackish, seawater, freshwater, make-up, pond exchange, tank exchange, or recirculation replacement water. Flow property / unit: Mass or volume / kg or m3 Amount rule: measured intake, make-up, exchange, recirculation replacement, or pump-runtime calculated water volume with salinity and source retained Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg harvest-size crab output Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_salinity_and_discharge_records_growout_and_fattening_husbandry` Sources: `fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_electricity_and_fuel` | `growout_and_fattening_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Grow-out electricity and fuel”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records directly controlled electricity and fuel for pumps, aeration, oxygenation, water exchange, boats, lighting, site operations, and backup generation. Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg Amount rule: measured electricity, fuel, or allocated energy records for grow-out and fattening operations Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg harvest-size crab output Basis kind: Fuel inventory (`fuel_inventory`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy_and_fuel_records_growout_and_fattening_husbandry` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_health_treatments_chemicals_salt_lime_and_oxygen` | `growout_and_fattening_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Health treatments, water-treatment chemicals, salt, lime, and oxygen”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records medicines, disinfectants, probiotics, water-treatment chemicals, salt, lime, oxygen, and comparable treatment inputs. Flow property / unit: Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 gas Amount rule: measured quantity applied by treatment event, purpose, active ingredient where relevant, and culture unit Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per culture unit and per 1,000 kg harvest-size crab output Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_health_treatment_and_chemical_records_growout_and_fattening_husbandry` Sources: `asc-farm-standard-2025`, `fao-mud-crab-aquaculture-2011` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_mortalities_molts_shells_sludge_and_feed_residue` | `growout_and_fattening_husbandry`; outputs; waste | Collect every actual exchange for the collection responsibility “Grow-out mortalities, molts, shells, sludge, and feed residue”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records dead crabs, cannibalism losses when measurable, molts, shells, uneaten feed, pond sludge, biofilter solids, and organic residues. Flow property / unit: Mass or count / kg or item Amount rule: measured count, mass, reason, fate, and culture unit for mortalities and residues Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg harvest-size crab output Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_molt_residue_and_sludge_records_growout_and_fattening_husbandry` Sources: `fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_controlled_growout_water_discharge` | `growout_and_fattening_husbandry`; outputs; elementary | Collect every actual exchange for the collection responsibility “Controlled water discharge from grow-out”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records controlled pond, tank, cage, pen, RAS, or holding-unit discharge when it leaves the foreground system as an elementary waterborne release. Flow property / unit: Volume or mass / m3 or kg Amount rule: measured discharge or calculated discharge from intake, exchange, recirculation, retained water, and sludge removal records Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg harvest-size crab output Basis kind: Process output (`process_output`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_water_salinity_and_discharge_records_growout_and_fattening_husbandry` Sources: `asc-farm-standard-2025`, `mass-balance-identity` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_live_holding_washing_and_chilling_water` | `harvest_live_holding_chilling_and_packout`; inputs; product | Collect every actual exchange for the collection responsibility “Live holding, washing, and chilling water”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records controlled live holding water, washing water, chilled water, seawater, brackish water, freshwater, or ice melt water used in final handling. Flow property / unit: Mass or volume / kg or m3 Amount rule: measured or calculated water use by holding, washing, chilling, or cleaning activity Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_salinity_and_discharge_records_harvest_live_holding_chilling_and_packout` Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_packout_energy_ice_oxygen_and_packaging` | `harvest_live_holding_chilling_and_packout`; inputs; product | Collect every actual exchange for the collection responsibility “Pack-out electricity, fuel, ice, oxygen, and packaging”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records electricity, fuel, ice, oxygen, baskets, boxes, bags, liners, labels, insulated containers, gel packs, pallets, and reusable container services used to prepare marketable crabs. Flow property / unit: Energy, mass, or item count / kWh, kg, or item Amount rule: measured pack-out energy, packaging, oxygen, and ice use; convert count to mass only with tare or supplier specifications Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_packaging_ice_oxygen_and_energy_records_harvest_live_holding_chilling_and_packout` Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_packout_rejects_dead_crabs_shells_and_wastewater` | `harvest_live_holding_chilling_and_packout`; outputs; waste | Collect every actual exchange for the collection responsibility “Pack-out rejects, dead crabs, shells, and wastewater”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records dead crabs, broken product, rejected grades, shells, ties, packaging waste, wastewater, and cleaning residues from final handling. Flow property / unit: Mass or volume / kg or m3 Amount rule: measured reject mass, wastewater volume, packaging waste, and disposal or recovery route Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` Sources: `codex-cxc-52-2003`, `mass-balance-identity` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_controlled_delivery_fuel_or_transport_service` | `delivery_to_declared_gate`; inputs; product | Collect every actual exchange for the collection responsibility “Controlled delivery fuel or transport service”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records directly controlled delivery fuel, refrigerated vehicle energy, vessel fuel, or transport service to the declared gate. Flow property / unit: Fuel quantity or transport service / L, kg, MJ, or tonne-km Amount rule: measured fuel or calculated tonne-kilometres from delivered mass, distance, vehicle, vessel, refrigeration, live-holding, and route records Value mode: Foreground record (`foreground_record`) Specificity: Route-specific (`route_specific`) Normalization basis: per 1,000 kg delivered reference product Basis kind: Transport service (`transport_service`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_delivery_records_delivery_to_declared_gate` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_delivery_rejects_or_mortalities` | `delivery_to_declared_gate`; outputs; waste | Collect every actual exchange for the collection responsibility “Delivery rejects or mortalities”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records product mortalities, damaged packages, leaking live containers, rejected product, or temperature-abuse losses during controlled delivery. Flow property / unit: Mass or count / kg or item Amount rule: measured delivery reject mass or count by reason and fate Value mode: Foreground record (`foreground_record`) Specificity: Route-specific (`route_specific`) Normalization basis: per 1,000 kg delivered reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_delivery_records_delivery_to_declared_gate` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |

## 9. Validation Rules



| Rule id | Severity | Rule |
| --- | --- | --- |
| `val_crab_requirement_01` | error | the reference product is normalized to 1 kg farmed crab in a declared live, fresh, or chilled product form; |
| `val_crab_requirement_02` | error | species, biological starting condition, farmed production evidence, culture system, product state, product form, size grade, geography, declared gate, holding duration, and packaging state are declared; |
| `val_crab_requirement_03` | error | the dataset distinguishes farmed grow-out, nursery, or fattening from wild catch and does not use this PCR for wild capture followed only by storage, live holding, chilling, grading, or dispatch; |
| `val_crab_requirement_04` | error | broodstock, larval, megalopa, juvenile, seed crab, stocked crab, feed, controlled water, energy, fuel, health treatment or chemical use, mortality, molt or residue, harvest, pack-out, packaging, and delivery where relevant are either present or explicitly marked not applicable with a reason; |
| `val_crab_requirement_05` | error | count, basket, box, tank, tub, or size-grade records include actual net mass, count per kg or mean mass, stage, product form, tare where relevant, and sampling method; |
| `val_crab_requirement_06` | error | water rows distinguish controlled water intake, exchange, recirculation, oxygenation, salinity, discharge, and live holding water; |
| `val_crab_requirement_07` | error | feed records distinguish formulated feed, trash fish, mollusc feed, live feed, wet basis, dry basis, and as-fed basis; |
| `val_crab_requirement_08` | error | Reconcile local harvested receipts, opening/closing stock, independently measured pack-out onward animal mass, saleable off-grade product, rejects and actual local losses on the same product-form basis, with evidenced physical mass changes and no duplicated fate. Independently reconcile included delivery and final acceptance; their losses are not pack-out losses, and only positive final accepted net mass Q is the normalization denominator, not a presumed pack-out output. |
| `val_crab_requirement_09` | error | same-site multi-species, shared-pond, shared-pen, shared-cage, shared-box, shared-RAS, shared-packhouse, or multi-grade allocation is documented before the dataset is used as a background or secondary dataset. |
| `val_final_gate_completion` | error | Check sole declared_gate_release reference output 1 kg, positive final accepted net-kg denominator, actual included/bypassed delivery and every independently measured internal transfer, rejection and loss. Verify all dq_complete actual child exchanges, native units, normalization, independent Range evidence, UUIDs, fates and non-duplication; any gap makes the final dataset incomplete and fails validation. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | use as farmed crab input to seafood processing, food service, retail, cold-chain, live seafood distribution, or regional food-product lifecycle models |
| allowed_use | farmed crab live, fresh, or chilled datasets with declared farmed production evidence, species, culture system, product state, gate, and quality disclosures |
| excluded_use | wild-caught crab datasets, wild catch only held or chilled after capture, frozen/dried/salted/brined/cooked/canned/picked-meat/prepared products, seed sold as seed, shell residue datasets, and datasets lacking farmed production or culture-system disclosure |
| required_metadata | canonical PCR id; CPC code; species; biological starting condition; farmed production evidence; culture system; product state; whole or declared basis; size grade or count per kg; sex or maturity class where material; geography; declared gate; holding or chilling duration; feed regime; water salinity and exchange basis; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved crab seed, shell, molt, mortality, wastewater, ice, and site-specific treatment flow identities; feed wet/dry/trash-fish conversion; water salinity and discharge records; health treatment eligibility; mortality and molt completeness; pack-out mass balance; partial-cycle, pilot-scale, or proxy data use |
| update_trigger | revise when CPC mapping changes, Tiangong crab, seed, feed, oxygen, water, discharge, sludge, shell, packaging, or treatment flow identities are updated, ASC, Codex, FAO, SEAFDEC, or equivalent aquaculture and seafood handling guidance changes, or reviewed foreground datasets provide better source-backed ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | <https://www.fao.org/input/download/standards/10273/CXP_052e.pdf> | fish and fishery product handling, chilled aquatic products, temperature control, damage prevention, aquaculture and seafood hygiene context |
| `fao-mud-crab-aquaculture-2011` | handbook | <https://www.fao.org/4/ba0110e/ba0110e.pdf> | mud crab biology, hatchery, nursery, grow-out, disease control, harvest, processing, packing, and market-readiness process decomposition used as crab-specific aquaculture guidance |
| `seafdec-mud-crab-growout-2017` | extension_guidance | <https://repository.seafdec.org.ph/bitstream/handle/10862/3181/3181-GenodepaJG2017.pdf> | mud crab grow-out systems, ponds, pens, cages, fattening context, cannibalism and survival management, and harvest handling guidance |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | current ASC farm-level aquaculture requirements for site scope, traceability, water, energy, health, legal, environmental, and feed-related disclosures |
| `asc-feed-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/04/ASC-STD-002-ASC-Feed-Standard-V1.1-May-2025.pdf> | aquafeed supplier, ingredient, traceability, and feed disclosure context |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stock acceptance, survival, grow-out, discharge, pack-out, packaging, delivery, and reference-flow normalization. | QA guardrails, survival, feed conversion, yield, pack-out reconciliation, packaging conversion, delivery-service calculation, and normalization rules |
| `ghg-product-allocation` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard, chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf (verified 2026-10-16, printed pp.60–70) | Allocation hierarchy explicitly adopted by this PCR: subdivision, causal physical and economic relationships; no aquaculture performance, actual share or non-GHG impact-assessment conclusion |
