---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed tunas, skipjack, or stripe-bellied bonito placed on the market as live, fresh, or chilled product. It covers declared broodstock, egg, larval, juvenile, or supplier stock for full-cycle aquaculture where present, wild juvenile or subadult stock captured for capture-based aquaculture when legally and traceably transferred into controlled grow-out or fattening, cage, net-pen, tank, offshore, or other declared aquaculture husbandry, harvest, grading, stunning, bleeding where performed, live holding, chilling, packaging, and release at the declared gate.

Covered products include aquaculture-produced or aquaculture-fattened tunas, skipjack, stripe-bellied bonito when the dataset shows controlled farming, ranching, or fattening records. Excluded products are wild tunas, skipjack, or stripe-bellied bonito that are only captured, landed, held, chilled, graded, or dispatched; frozen tuna products; fillets, loins, steaks, fish meat, canned, cooked, smoked, dried, salted, prepared, or preserved products; fish seed sold as a separate aquaculture input; roe, oil, offal, mortalities, and processing residues modelled as separate products.

Capture-based aquaculture is within this PCR only when the reporting dataset declares the wild stock capture or purchase, transfer, stocking event, evidenced managed biological grow-out or fattening period, feed or bait use, mortalities, escapes, and marketable product output. A dataset with only wild capture and post-capture handling belongs under the corresponding wild product PCR.

Confirm category boundaries from actual species and aquaculture production evidence. Bounded maintenance holding, transport, preservation, packing or resale alone does not establish farming; require evidenced managed biological growth, reproduction or fattening. For tuna, independently confirm Thunnus spp. or Katsuwonus pelamis within this leaf; a tuna-like market label or Scombridae membership does not admit adjacent-category taxa.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04252`, `Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled`; narrower |
| covered_products | farmed, ranch-raised, or aquaculture-fattened tunas, skipjack, stripe-bellied bonito sold live, fresh, or chilled from declared hatchery, nursery, cage, net-pen, tank, offshore, capture-based aquaculture, or other controlled aquaculture systems |
| excluded_products | wild tuna products that are only captured, landed, held, chilled, graded, or dispatched; frozen tuna; fillets; loins; steaks; fish meat; canned, cooked, smoked, dried, salted, prepared, or preserved products; non-tuna farmed fish; ornamental fish; fish seed sold as seed; roe, oil, offal, mortalities, sludge, or processing residues as separate products |
| representative_product | live or chilled farmed tuna, skipjack, or stripe-bellied bonito at declared species, culture route, market size, product form, holding condition, and gate |
| production_route | hatchery or supplier stock route where present, or capture-based wild juvenile or subadult stock capture and transfer, followed by controlled grow-out or fattening, husbandry, harvest, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled tuna-category fish with declared species, aquaculture route, stock origin, product basis, size grade, harvest and holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed tunas, skipjack, or stripe-bellied bonito as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species, farmed or aquaculture-fattened proof, stock origin, culture route, live/fresh/chilled state, whole or declared product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, fattening campaign, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `qualified_product_gate_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed tuna or skipjack product in its actual declared state at the final gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and scientific name where available; farmed, ranch-raised, or capture-based aquaculture proof; stock origin as hatchery, supplier farm, wild juvenile, or wild subadult; capture area, permit, transfer route, and stocking date for capture-based routes; culture system; product state; whole, bled, gutted, live, fresh, chilled, or declared product basis; size grade, length, or mean individual mass; moisture, drainage, or ice-excluded basis; geography and declared gate; holding or chilling duration; feed regime, fresh bait, formulated feed, and feed supplier disclosure; cage, net-pen, tank, or offshore site; health, welfare, biosecurity, permit, certification, mortality, and escape status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, cage, tow, transfer, box, tub, live-holding, or size-grade records may be used only when net mass, count per kg or mean individual mass, product form, and sampling or tare method are retained.

Declare one actual final gate, product form/state and positive accepted net delivered mass. If delivery_to_declared_gate is included, complete actual delivery, losses and acceptance before release; otherwise receive the measured pack-out transfer. Never select an earlier denominator, fix internal yield, sum both paths or assume delivery state; explicitly record excluded later transport. Retain all actual stage yields, raw batches and per-1000-kg bases and convert explicitly to per 1 kg final reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `final_gate_normalization` | all inventory rows | actual native exchange property | native unit per 1 kg final reference | Attribute raw batch/event quantities by actual ownership and allocation, then divide by positive accepted net kg at declared_gate_release; divide same-boundary per-1000-kg-final-product values by 1000. Stage-output denominators require measured lot transfers and yield conversion, never direct substitution for the final denominator; biological batches are not machine M. |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed tunas, skipjack, or stripe-bellied bonito in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show a foreground aquaculture production or biological grow-out/fattening period; bounded holding alone is not farming. Wild capture followed only by holding, chilling, grading, or dispatch is outside this PCR. |
| `capture_based_stock_origin` | capture-based aquaculture and tuna ranching | Stock capture, transfer, and stocking records | declared records | Capture-based routes must retain source fishery or supplier, capture area, permit, date, size or mass, transfer loss, stocking cage or site, and evidence that stock entered controlled aquaculture. |
| `product_form_mass_basis` | whole, gutted, bled, live, fresh, chilled, drained, or iced records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state live whole weight, chilled whole weight, gutted mass, bled mass, drained mass, ice-excluded mass, or another contract-declared basis. Convert only with measured yield evidence. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and size-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, length or size grade where used, sampling method, and product form before normalization to kg reference product. |
| `stock_lot_identity` | broodstock, eggs, larvae, juveniles, transferred wild fish, supplier fish, and stocked cages | Mass or count | kg, item, egg count, or life-stage count | Stock records must retain species, life stage, origin, capture or supplier evidence, batch or lot, count, mass where measurable, health status, transfer date, and mortality during transfer. |
| `feed_and_bait_mass_basis` | formulated feed, fresh bait, frozen bait, live feed, medicated feed, and supplementary feed | Mass | kg | Feed and bait records must state dry, wet, as-fed, thawed, live, medicated, or declared basis. Convert between bases only with measured moisture, supplier data, or retained specification. |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve controlled water volume, temperature, salinity, pH, dissolved oxygen, recirculation, make-up water, water exchange, drainage, and discharge basis. Ambient open-sea water is a boundary condition unless pumped, treated, exchanged, or discharged under foreground control. |
| `energy_fuel_and_vessel_inventory` | pumps, aeration, oxygenation, feeding equipment, live holding, chilling, harvest, towing, vessels, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. Vessel fuel for capture-based stocking and farm servicing must be separated when records allow. |
| `chemical_health_and_welfare_treatment_basis` | oxygen, disinfectants, medicines, anesthetics, vaccines, probiotics, cleaning agents, and welfare treatments | Mass, volume, active ingredient, dose, or gas amount | kg, L, g active ingredient, dose, or m3 gas | Record product quantity, active ingredient or dose where applicable, treatment purpose, diagnosis or health-plan link, legal status, withdrawal or harvest eligibility consequence, and treated biomass. |
| `packaging_and_ice_basis` | boxes, bags, liners, insulated containers, labels, ice, gel packs, oxygenated live packs, and pallets | Mass or item count | kg or item | Packaging, ice, oxygenated live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species | scientific and common name | required for all datasets |
| Aquaculture route | full-cycle hatchery route, supplier juvenile route, capture-based aquaculture, ranching, fattening, cage, net pen, tank, offshore, or declared variant | required for boundary, stock origin, feed, mortality, escape, and allocation interpretation |
| Biological starting condition | broodstock, eggs, larvae, hatchery juveniles, supplier juveniles, wild juveniles, wild subadults, or transferred fish | required to distinguish farmed production from wild capture |
| Product form | live whole, fresh whole, chilled whole, bled, gutted, head-on gutted, or declared variant | required for mass-basis interpretation |
| Size grade | count per kg, mean individual mass, length, market grade, or harvest weight class | required when count or grade records are used |

## 5. System Boundary

The default boundary covers foreground-controlled farmed tuna-category production to the declared farm, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, egg, larval, juvenile, or supplier stock sourcing for full-cycle aquaculture where present, or capture-based wild juvenile or subadult stock capture, purchase, transfer, and stocking when the aquaculture route depends on wild stock.
2. Controlled grow-out, ranching, or fattening husbandry, including stocking, feeding with fresh bait or formulated feed, water control where relevant, cage or net-pen operation, vessel servicing, aeration or oxygenation where relevant, health management, welfare handling, escape prevention, mortalities, residue management, and directly controlled maintenance.
3. Harvest, grading, stunning or bleeding where performed, washing, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased juveniles, captured stock, feed, bait, packaging, ice, oxygen, electricity, fuel, chemicals, health treatments, cage materials, and vessel services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_hatchery_supplier_or_capture_based_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04252`, `Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled` |
| recursive_input_rule | farmed tuna broodstock, eggs, larvae, juveniles, or supplier stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, source, life-stage, capture-based status, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | hatchery, supplier, juvenile, capture-based stocking, feed, bait, or service dataset, or documented source, species, batch, count or mass, life stage, capture or supplier permit, transfer loss, health or biosecurity status, and certification or permit evidence |
| disclosure | disclose species, culture route, biological starting condition, farmed production evidence, capture area and permit where capture-based, stocking density or biomass, cage or tank system, feed or bait regime, feed supplier and feed basis, marine ingredient or bait species where available, water source and temperature where controlled, dissolved oxygen and salinity where relevant, vessel fuel and farm servicing, health treatments, welfare handling, mortality and escape records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stock_capture_hatchery_transfer_and_stocking | Stock Capture, Hatchery, Transfer, and Stocking | required | biological starting condition must be declared; capture-based stock capture and transfer are included when used; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | accepted juveniles or stocked tuna entering controlled grow-out or fattening |
| growout_fattening_and_husbandry | Grow-out, Fattening, and Husbandry | required |  | foreground production | harvest-size farmed tuna-category fish before final handling |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled product |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |
| declared_gate_release | Declared final-gate acceptance and release | required | Every qualifying lot after any actual included optional delivery | Sole final reference, actual state and rejection; no invented duplicate operation | 1 kg final accepted net product |

### Process: Stock Capture, Hatchery, Transfer, and Stocking (`stock_capture_hatchery_transfer_and_stocking`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Live tuna broodstock (`stock_broodstock`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live tuna broodstock
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### Fertilized tuna eggs (`stock_eggs`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Fertilized tuna eggs
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### Live tuna larvae (`stock_larvae`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live tuna larvae
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### Live tuna juveniles (`stock_juveniles`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live tuna juveniles
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### Live wild-caught tuna subadults for evidenced aquaculture stocking (`stock_subadults`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live wild-caught tuna subadults for evidenced aquaculture stocking
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### Diesel fuel (`stock_capture_hatchery_transfer_and_stocking_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### Supplied liquid water of the declared source and treatment (`stock_capture_hatchery_transfer_and_stocking_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### oxygen (`stock_capture_hatchery_transfer_and_stocking_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live tuna stock at the declared species and life stage (`accepted_stock_for_growout_or_fattening`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live tuna stock at the declared species and life stage
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil), emissions to air unspecified (`stock_capture_hatchery_transfer_and_stocking_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

### Process: Grow-out, Fattening, and Husbandry (`growout_fattening_and_husbandry`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Live tuna stock at the declared species and life stage (`stocked_tuna_entering_growout_or_fattening`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live tuna stock at the declared species and life stage
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

###### Electricity at the declared supplier and voltage (`growout_fattening_and_husbandry_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

###### Diesel fuel (`growout_fattening_and_husbandry_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

###### Supplied liquid water of the declared source and treatment (`growout_fattening_and_husbandry_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

###### oxygen (`growout_fattening_and_husbandry_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live farmed tuna or skipjack biomass before harvest (`harvest_size_farmed_tuna_biomass`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed tuna or skipjack biomass before harvest
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil), emissions to air unspecified (`growout_fattening_and_husbandry_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_fattening_and_husbandry`

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Actual-state farmed tuna or skipjack biomass at pre-gate handling transfer (`harvested_tuna_entering_final_handling`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed tuna or skipjack biomass at pre-gate handling transfer
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

###### Actual-state farmed tuna or skipjack biomass at pre-gate handling transfer (`marketable_live_fresh_or_chilled_farmed_tuna`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed tuna or skipjack biomass at pre-gate handling transfer
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

###### Electricity at the declared supplier and voltage (`delivery_to_declared_gate_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
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

###### oxygen (`delivery_to_declared_gate_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_delivery_to_declared_gate`

###### Solid water ice (`delivery_to_declared_gate_water_ice`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure actual solid water-ice mass, distinguishing purchased from own-made ice. Own-made ice retains its water and energy without an additional purchased-ice supplier burden; reconcile meltwater, water pathways and transported load separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_delivery_to_declared_gate`

###### Actual-state farmed tuna or skipjack product loaded for controlled delivery (`delivery_product_receipt`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed tuna or skipjack product loaded for controlled delivery
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

###### Actual-state farmed tuna or skipjack biomass at delivery completion (`delivered_farmed_tuna_at_declared_gate`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed tuna or skipjack biomass at delivery completion
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
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

###### Actual-state farmed tuna or skipjack product received at the declared final gate (`qualified_product_gate_receipt`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed tuna or skipjack product received at the declared final gate
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

###### Farmed tuna or skipjack product in its actual declared state at the final gate (`qualified_product_gate_release`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Farmed tuna or skipjack product in its actual declared state at the final gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_gate_acceptance`

##### Waste flows

###### Rejected farmed tuna or skipjack bodies at final acceptance (`final_gate_animal_rejects`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Rejected farmed tuna or skipjack bodies at final acceptance
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

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled farmed tuna output | Treat the declared reference product as the single reference product unless roe, offal, mortalities, residues, or processing outputs are intentionally recovered as co-products. | marketable mass, rejected mass, recovered co-product mass, destination, and revenue or physical relation where co-products are claimed | `mass-balance-identity` |
| `capture_based_stock_boundary` | capture-based aquaculture routes | Do not allocate away wild stock capture, transfer losses, or mortality by excluding them from the foreground package. Assign them to the aquaculture product unless a reviewed upstream wild-stock dataset and allocation rule are declared. | stock capture or purchase records, transfer loss, accepted stocked biomass, discarded or dead stock, and permit evidence | `fao-capture-based-aquaculture-guidelines-2011` |
| `shared_site_and_cage_allocation` | multi-species, multi-lot, or shared-service farms | Allocate shared electricity, vessel fuel, oxygen, site service, net cleaning, and holding infrastructure by measured meter, batch log, biomass-time, cage-time, or another declared physical driver before economic allocation. | meters, service logs, cage or tank occupancy, biomass-time, harvest mass, and allocation driver | `asc-farm-standard-2025` |
| `packaging_and_delivery_allocation` | mixed-product packing or delivery | Allocate packaging, ice, live-holding, refrigeration, and delivery loads by measured product mass, package count, pallet, trip, temperature-control zone, or tonne-km as applicable. | dispatch records, package counts, load mass, distance, temperature condition, and return logistics | `codex-cxc-52-2003` |

This PCR explicitly adopts the allocation hierarchy in GHG Protocol Product Standard chapter 9: subdivision first, then evidenced causal physical relationships, and evidenced economic relationships where physical relationships are inapplicable. Mass is not an automatic convenience default. Preserve unallocated physical quantities and a separately labelled once-only LCA view; reconcile all output/node shares to one. Allocation never repairs physical imbalance, and internal transfers create no sale or substitution credit. Source: `ghg-product-allocation`.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_origin_capture_transfer_and_stocking_records_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | biological stock, capture-based stock, transfer, accepted stocking | hatchery record, supplier invoice, capture log, permit, transfer log, stocking log, mortality log | species, origin, capture area, permit, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, cage or tank, accepted count, accepted mass, transfer mortality ; raw collection basis and original aggregation obligations: reconcile source stock plus transfers minus mortalities and rejects to accepted stocked biomass; normalize to marketable output | batch records reconciled to cage or tank inventory | kg, item, date, permit id | each stocking event | full reporting period or production campaign | hatchery, supplier, capture vessel, transfer route, cage, tank, or farm site | per 1 kg reference flow | supplier documents, permits, transfer logs, cage inventory, mortality records, and manager sign-off ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_stock_origin_capture_transfer_and_stocking_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | biological stock, capture-based stock, transfer, accepted stocking | hatchery record, supplier invoice, capture log, permit, transfer log, stocking log, mortality log | species, origin, capture area, permit, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, cage or tank, accepted count, accepted mass, transfer mortality ; raw collection basis and original aggregation obligations: reconcile source stock plus transfers minus mortalities and rejects to accepted stocked biomass; normalize to marketable output | batch records reconciled to cage or tank inventory | kg, item, date, permit id | each stocking event | full reporting period or production campaign | hatchery, supplier, capture vessel, transfer route, cage, tank, or farm site | per 1 kg reference flow | supplier documents, permits, transfer logs, cage inventory, mortality records, and manager sign-off ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_feed_bait_and_feed_composition_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | feed, fresh bait, formulated feed, additives, feeding losses | feed invoice, feed log, bait purchase, bait species log, formulation sheet, feeding record | feed or bait type, supplier, species, mass, dry/wet/as-fed basis, moisture, feeding date, cage or lot, uneaten feed, additive or medication, marine ingredient disclosure ; raw collection basis and original aggregation obligations: sum feed or bait mass by batch and basis; convert only with moisture or supplier evidence; normalize to marketable output | weigh tickets, supplier declarations, feed-system records, and stockkeeper logs | kg, %, dose, date | each feed delivery and feeding period | full grow-out or fattening campaign | each cage, tank, site, and feed supplier | per 1 kg reference flow | invoices, feed declarations, feed logs, formulation sheets, and reconciliation to inventory ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_energy_vessel_cage_and_site_records_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | water, oxygen, electricity, fuel, vessel service, cage materials, site service | meter log, fuel invoice, vessel log, oxygen log, cage maintenance log, net cleaning log, service invoice | electricity, fuel, oxygen, water, vessel hours, distance, cage, net, anchor, float, cleaning, maintenance, allocation driver, site and batch ; raw collection basis and original aggregation obligations: allocate shared records by direct meter, operation log, biomass-time, cage-time, or declared physical driver | metered records, invoices, vessel logs, and maintenance records | kWh, L, MJ, kg, m3, item, m, h, tonne-km | monthly and each major operation | full reporting period or campaign | farm site, vessel, cage, tank, hatchery, or delivery route | per 1 kg reference flow | meter readings, invoices, service logs, allocation worksheet, and calibration records where relevant ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_energy_vessel_cage_and_site_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | water, oxygen, electricity, fuel, vessel service, cage materials, site service | meter log, fuel invoice, vessel log, oxygen log, cage maintenance log, net cleaning log, service invoice | electricity, fuel, oxygen, water, vessel hours, distance, cage, net, anchor, float, cleaning, maintenance, allocation driver, site and batch ; raw collection basis and original aggregation obligations: allocate shared records by direct meter, operation log, biomass-time, cage-time, or declared physical driver | metered records, invoices, vessel logs, and maintenance records | kWh, L, MJ, kg, m3, item, m, h, tonne-km | monthly and each major operation | full reporting period or campaign | farm site, vessel, cage, tank, hatchery, or delivery route | per 1 kg reference flow | meter readings, invoices, service logs, allocation worksheet, and calibration records where relevant ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_residue_and_escape_records_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment ; raw collection basis and original aggregation obligations: sum and classify by fate; reconcile stock balance and product mass; normalize to reference output | daily husbandry records, incident reports, waste tickets, and treatment records | kg, item, m3, date | each event and monthly reconciliation | full reporting period or campaign | cage, tank, transfer route, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality records, waste transfer notes, escape incident files, treatment records, and supervisor review ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_residue_and_escape_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment ; raw collection basis and original aggregation obligations: sum and classify by fate; reconcile stock balance and product mass; normalize to reference output | daily husbandry records, incident reports, waste tickets, and treatment records | kg, item, m3, date | each event and monthly reconciliation | full reporting period or campaign | cage, tank, transfer route, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality records, waste transfer notes, escape incident files, treatment records, and supervisor review ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_residue_and_escape_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment ; raw collection basis and original aggregation obligations: sum and classify by fate; reconcile stock balance and product mass; normalize to reference output | daily husbandry records, incident reports, waste tickets, and treatment records | kg, item, m3, date | each event and monthly reconciliation | full reporting period or campaign | cage, tank, transfer route, harvest area, packhouse, or waste route | per 1 kg reference flow | mortality records, waste transfer notes, escape incident files, treatment records, and supervisor review ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_harvest_product_packout_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | harvest biomass, grading, product form, marketable output | harvest log, grading sheet, packout record, sales note, scale ticket | harvest date, species, cage or tank, live mass, product form, count, size grade, bleeding or gutting status, chilled or live state, rejected mass, marketable mass, destination ; raw collection basis and original aggregation obligations: reconcile harvested biomass plus purchases minus rejects and residues to marketable output; normalize all flows to 1 kg reference product | calibrated scales, grading records, sales records, and packhouse reconciliation | kg, item, grade, date | each harvest and packing lot | full reporting period or campaign | harvest site, live-holding unit, packhouse, or dispatch gate | per 1 kg reference flow | scale calibration, harvest sheets, packout records, dispatch records, and sales reconciliation ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest biomass, grading, product form, marketable output | harvest log, grading sheet, packout record, sales note, scale ticket | harvest date, species, cage or tank, live mass, product form, count, size grade, bleeding or gutting status, chilled or live state, rejected mass, marketable mass, destination ; raw collection basis and original aggregation obligations: reconcile harvested biomass plus purchases minus rejects and residues to marketable output; normalize all flows to 1 kg reference product | calibrated scales, grading records, sales records, and packhouse reconciliation | kg, item, grade, date | each harvest and packing lot | full reporting period or campaign | harvest site, live-holding unit, packhouse, or dispatch gate | per 1 kg reference flow | scale calibration, harvest sheets, packout records, dispatch records, and sales reconciliation ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_packaging_ice_chilling_and_dispatch_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | packaging, ice, live holding, chilling, washing, refrigerant service | packaging invoice, ice log, temperature log, water meter, oxygen log, refrigerant service record, dispatch sheet | packaging material, item count, tare, ice mass, oxygen, water, electricity, refrigerant service, temperature, holding time, lot, destination ; raw collection basis and original aggregation obligations: allocate to product lots by measured lot, package count, product mass, holding time, or temperature-control zone | invoices, meters, temperature records, and dispatch records | kg, item, m3, kWh, deg C, h | each packing lot and monthly reconciliation | harvest, holding, packing, and dispatch period | packhouse, live-holding unit, cold room, dispatch gate | per 1 kg reference flow | invoices, temperature logs, calibration records, dispatch sheets, and operator review ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_delivery_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, oxygen, temperature, live-holding duration, return logistics ; raw collection basis and original aggregation obligations: calculate tonne-km and allocate fuel or service by load mass, distance, temperature zone, and return logistics where relevant | carrier documents, vehicle logs, meter records, and dispatch reconciliation | kg, km, tonne-km, L, kWh, h, deg C | each delivery route | delivery period in declared scope | delivery route, vehicle, vessel, or carrier | per 1 kg reference flow | carrier invoice, route record, temperature log, and dispatch sign-off ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_delivery_to_declared_gate` | `delivery_to_declared_gate` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_final_gate_acceptance` | `declared_gate_release` | Sole final-gate receipt, rejection and reference release | Calibrated weighing, lot and buyer acceptance records | selected gate/route; included/bypassed delivery evidence; paired transfer ID; species/state/form/lot/period; incoming net animal mass; packaging/water/ice/tare; rejects/loss/disposal; final accepted net kg; resource owner | Reconcile calibrated incoming, rejection and final accepted net mass against matched lot transfer/acceptance records; exclude free water, ice and packaging; retain measured form yields and uncertainty | kg | every final lot handover | same lot and reporting period including any included delivery interval | sole declared final gate | per 1 kg reference flow | calibration, weighing, buyer acceptance, state/route and reject/disposal evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass, with unit and product-form basis retained | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `stock_acceptance_balance` | stocking and transfer | accepted stocked biomass = source stock mass + transferred-in mass - transfer mortalities - rejected stock - documented transfer losses | source stock, transfers, mortalities, rejects, transfer loss | accepted stocked biomass | `fao-capture-based-aquaculture-guidelines-2011` |
| `growth_and_survival_balance` | grow-out and fattening | harvest-size biomass = stocked biomass + biological growth - mortalities - escapes - rejects, checked against harvest records | stocked biomass, feed or bait records, mortalities, escapes, harvest records | harvest-size biomass and survival disclosure | `fao-atlantic-bluefin-tuna-culture`, `asc-farm-standard-2025` |
| `feed_or_bait_conversion_disclosure` | feed and bait rows | feed or bait ratio = feed or bait mass on declared basis / live biomass gain or marketable output; do not mix dry, wet, live, or thawed bases without conversion evidence | feed or bait mass, moisture or basis, biomass gain, marketable output | declared feed or bait ratio and basis | `asc-feed-standard-2026`, `fao-capture-based-aquaculture-2008` |
| `product_form_yield` | harvested and packed product | Reconcile independently measured net harvested animal input, opening/closing stocks and evidenced physical mass changes with onward product, other intended outputs, rejects and actual animal losses on the same declared product-form basis. Each amount belongs to one destination and is counted once. Bleeding or gutting changes animal mass only when actually performed; record removed tissue/body-fluid destinations and do not deduct them again if already excluded. Ice, free water and packaging tare are excluded only from a gross weighing that actually includes them, never subtracted from net animal mass. Determine final accepted net product mass independently at the actual final gate; do not infer it by repeated deductions from an already net or accepted amount. | harvest mass, rejected mass, product-form records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `calc_final_gate_normalization` | all inventory rows | Divide same-boundary, same-actual-state quantities reported per 1000 kg final accepted product by 1000. For raw batch/event totals, establish actual ownership and once-only allocation, then divide by positive final accepted net kg from cp_final_gate_acceptance. Stage, harvest or pack-out denominators require same-lot measured transfer/yield mapping with the original values and conversion audit trail retained. Internal animals and transported water/ice/packaging are never fixed 1 kg inputs. | raw batch and stage records; measured yields/transfers; once-only allocation; cp_final_gate_acceptance | native exchange quantity per 1 kg final reference, with raw values and conversion record | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and biological stock | Species, product category, farmed or aquaculture-fattened status, stock origin, capture-based status, culture route, product form, and declared gate must be explicit. | reference flow metadata, stocking records, permits, harvest records, and sales or dispatch records |
| `dq_capture_based_traceability` | capture-based aquaculture routes | Wild stock capture or purchase, permit, transfer loss, stocking event, controlled fattening period, and harvest output must be traceable and reconciled. | capture logs, supplier invoices, movement permits, transfer logs, cage inventory, mortality records, and harvest records |
| `dq_mass_balance` | stock, feed, mortality, harvest, and packout | Stocking, growth, mortality, escape, residue, harvest, reject, and marketable product records must reconcile within declared tolerance; unexplained gaps require disclosure. | mass-balance worksheet, scale tickets, cage records, packout records, and supervisor review |
| `dq_feed_bait_basis` | feed and bait records | Feed and bait basis must distinguish formulated feed, fresh bait, frozen bait, live feed, dry matter, wet mass, thawed mass, medicated feed, and supplier species or composition where available. | feed invoices, bait species logs, formulation sheets, feed declarations, and feeding records |
| `dq_temporal_coverage` | all foreground rows | Data must cover the full production or fattening campaign and final handling period, or disclose partial-year, partial-batch, or proxy coverage. | reporting calendar, batch records, harvest records, and coverage statement |
| `dq_boundary_disclosure` | all datasets | The dataset must disclose whether upstream stock capture, hatchery production, feed, bait, packaging, delivery, capital goods, and infrastructure are foreground, linked upstream datasets, or excluded by scope. | dataset boundary statement, supplier records, upstream dataset links, and scope declaration |
| `dq_inventory_completion` | all concrete exchanges and final gate | Complete every actual exchange including route-specific water, energy, feed, treatment, packaging, service, capital/replacement/cleaning and fate. Independently measure listed water/electricity/diesel/oxygen/ice cards only when actually used, and add separate cards for all other actual materials. Retain independent Range/UUID gaps as blockers to final completeness; never replace unknown with zero. | per-flow coverage ledger, raw records, independent ranges and verified identities |
| `dq_complete_biological_stock_input` | `stock_capture_hatchery_transfer_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Hatchery, supplier, or captured juvenile stock input”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records purchased, internally produced, transferred, or capture-based tuna stock entering the declared aquaculture route. Flow property / unit: Mass or count with life stage / kg, item, egg count, or stage count Amount rule: measured count, mass where measurable, life stage, accepted quantity, capture or supplier origin, and transfer loss entering hatchery, grow-out, or fattening Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_stock_origin_capture_transfer_and_stocking_records_stock_capture_hatchery_transfer_and_stocking` Sources: `fao-atlantic-bluefin-tuna-culture`, `fao-capture-based-aquaculture-2008`, `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_transfer_water_oxygen_fuel_and_handling_inputs` | `stock_capture_hatchery_transfer_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Transfer water, oxygen, fuel, and handling inputs”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, fuel, or energy / kg, m3, L, MJ, or kWh Amount rule: measured or allocated water, oxygen, vessel fuel, towing, transport, anesthetic, transfer equipment, and handling inputs by stocking event Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per stocking event and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_stock_origin_capture_transfer_and_stocking_records_stock_capture_hatchery_transfer_and_stocking` Sources: `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_transfer_mortalities_and_rejected_stock` | `stock_capture_hatchery_transfer_and_stocking`; outputs; waste | Collect every actual exchange for the collection responsibility “Transfer mortalities and rejected stock”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or count / kg or item Amount rule: measured mortality count, mortality mass where available, rejected stock, residue mass, disposal route, and recovery route Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per stocking event and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_residue_and_escape_records_stock_capture_hatchery_transfer_and_stocking` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_feed_fresh_bait_and_feed_additives` | `growout_fattening_and_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Feed, fresh bait, and feed additives”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, active ingredient, or dose / kg, L, g active ingredient, or dose Amount rule: measured formulated feed, fresh bait, frozen bait, live feed, medicated feed, additives, feeding losses, and supplier or bait species basis Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per grow-out or fattening batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_feed_bait_and_feed_composition_records_growout_fattening_and_husbandry` Sources: `fao-atlantic-bluefin-tuna-culture`, `fao-capture-based-aquaculture-2008`, `asc-feed-standard-2026`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_water_energy_fuel_cage_materials_and_services` | `growout_fattening_and_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Grow-out water, energy, fuel, cage materials, and services”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, energy, fuel, item count, length, or service quantity / kg, m3, kWh, L, MJ, item, m, or service unit Amount rule: measured or allocated water where controlled, electricity, vessel fuel, cage materials, net cleaning, monitoring, oxygenation, farm servicing, and maintenance inputs Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per culture unit and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_energy_vessel_cage_and_site_records_growout_fattening_and_husbandry` Sources: `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_mortalities_uneaten_feed_residues_and_escaped_fish` | `growout_fattening_and_husbandry`; outputs; waste | Collect every actual exchange for the collection responsibility “Mortalities, uneaten feed, residues, and escaped fish”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or count / kg or item Amount rule: measured mortality count and mass, feed residue, sludge or organic residue, escape count where applicable, fate, disposal route, recovery route, and receiving environment Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per grow-out or fattening batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_residue_and_escape_records_growout_fattening_and_husbandry` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_chilling_packaging_water_electricity_and_ice_inputs` | `harvest_live_holding_chilling_and_packout`; inputs; product | Collect every actual exchange for the collection responsibility “Chilling, packaging, water, electricity, and ice inputs”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, energy, or item count / kg, m3, kWh, or item Amount rule: measured packaging, ice, chilling, washing, live-holding oxygen, electricity, refrigerant service, and dispatch preparation quantities Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records_harvest_live_holding_chilling_and_packout` Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_handling_rejects_bleed_water_packaging_waste_and_residues` | `harvest_live_holding_chilling_and_packout`; outputs; waste | Collect every actual exchange for the collection responsibility “Handling rejects, bleed water, packaging waste, and residues”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or volume / kg or m3 Amount rule: measured rejected fish, handling losses, bleed water, wastewater, packaging waste, residue mass, disposal route, recovery route, and receiving environment Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_residue_and_escape_records_harvest_live_holding_chilling_and_packout` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_delivery_fuel_electricity_refrigerant_and_packaging_support` | `delivery_to_declared_gate`; inputs; product | Collect every actual exchange for the collection responsibility “Delivery fuel, electricity, refrigerant service, and packaging support”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Fuel, energy, mass, or transport service / L, MJ, kWh, kg, or tonne-km Amount rule: include only when the declared reference flow is delivered beyond the farm, harvest, dispatch, or packhouse gate; record distance, mode, load factor, temperature control, live-holding condition, and return logistics where relevant Value mode: Foreground record (`foreground_record`) Specificity: Route-specific (`route_specific`) Normalization basis: per 1,000 kg delivered reference product or tonne-km Basis kind: Transport service (`transport_service`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_delivery_records_delivery_to_declared_gate` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |

## 9. Validation Rules

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | error | Independently verify reference identity against actual species, life stage, form/state and final gate. A category label or live-animal landing UUID cannot automatically identify farm, packhouse or delivered product; no grouped UUID grants a binding. |
| `val_not_wild_only` | Dataset has controlled aquaculture, ranching, or fattening evidence beyond wild capture and post-capture handling. | error | Wild capture only belongs under the wild tuna PCR, not this farmed product PCR. |
| `val_capture_based_stock_trace` | Capture-based routes include capture or supplier origin, permit or legal evidence, transfer, stocking, mortality, and harvest reconciliation. | error | Capture-based aquaculture route is missing required stock traceability evidence. |
| `val_mass_basis` | Product mass basis is declared as live, fresh, chilled, gutted, bled, drained, ice-excluded, or another stated product basis. | error | Product mass basis is missing or ambiguous. |
| `val_feed_bait_basis` | Feed or bait rows distinguish dry, wet, fresh, frozen, live, thawed, medicated, or declared feed basis. | warning | Feed or bait basis should be declared before comparing or normalizing inputs. |
| `val_required_qualifiers` | Required qualifiers are present in metadata or process notes. | warning | Reference flow qualifiers are incomplete. |
| `val_structured_sync` | `structured.yaml` is regenerated from the bilingual Markdown after edits. | error | Structured projection is out of sync with authored PCR Markdown. |
| `val_final_gate_completion` | error | Check sole declared_gate_release reference output 1 kg, positive final accepted net-kg denominator, actual included/bypassed delivery and every independently measured internal transfer, rejection and loss. Verify all dq_complete actual child exchanges, native units, normalization, independent Range evidence, UUIDs, fates and non-duplication; any gap makes the final dataset incomplete and fails validation. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for farmed tunas, skipjack, or stripe-bellied bonito, live, fresh, or chilled |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when site-specific aquaculture records are retained |
| allowed_use | LCA modelling of declared farmed or aquaculture-fattened tuna-category live, fresh, or chilled product at farm, harvest, dispatch, packhouse, or delivered gate |
| excluded_use | wild tuna that is only captured and handled; frozen tuna; processed tuna; canned tuna; fillets or loins; non-tuna farmed fish; ornamental fish; fish seed; roe, oil, offal, mortalities, sludge, or residues as separate products; ecosystem-service credits without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species; stock origin; capture-based status; culture system; stocking date and biomass; product form; size grade; live/fresh/chilled state; feed or bait basis; mortality and escape disclosure; harvest and holding condition; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | farmed production evidence, capture-based stock traceability where applicable, mass balance closure, feed and bait basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for tuna eggs, larvae, juveniles, formulated feed, bait species, oxygen, cage materials, escapes, residues, ice, or delivery services; reviewed quantitative evidence for feed conversion, mortality, transfer loss, fuel, cage service, or chilling ranges; updated FAO, Codex, ASC, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-atlantic-bluefin-tuna-culture` | official_guidance | FAO Cultured Aquatic Species Information Programme, Atlantic bluefin tuna (`Thunnus thynnus`) cultured species profile, https://www.fao.org/fishery/culturedspecies/thunnus_thynnus/en | tuna aquaculture route, product boundary, stock and husbandry context |
| `fao-capture-based-aquaculture-2008` | literature | FAO Fisheries Technical Paper No. 508, Capture-based aquaculture: global overview, including bluefin tuna chapter, https://openknowledge.fao.org/handle/20.500.14283/y5258e | capture-based aquaculture process decomposition, stock capture and fattening context |
| `fao-capture-based-aquaculture-guidelines-2011` | official_guidance | FAO Technical Guidelines for Responsible Fisheries, Responsible use of wild fishery resources for capture-based aquaculture, https://www.fao.org/4/ba0059e/ba0059e.pdf | capture-based boundary, stock traceability, transfer, permit, and responsible-use disclosure |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled fish handling, hygiene, product-state and final handling context |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council, ASC Farm Standard v1.0.1, 2025, https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | farm management, traceability, mortality, escape, health, welfare, and environmental disclosure |
| `asc-feed-standard-2026` | standard | Aquaculture Stewardship Council, ASC Feed Standard v1.2 update, https://asc-aqua.org/producers/get-certified-feed-mill/asc-feed-standard-v1-2-update/ | feed supplier and ingredient disclosure context |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus growth or transformation minus losses under declared product basis | normalization, allocation, stock balance, yield, and delivery calculations |
| `ghg-product-allocation` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard, chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf (verified 2026-10-16, printed pp.60–70) | Allocation hierarchy explicitly adopted by this PCR: subdivision, causal physical and economic relationships; no aquaculture performance, actual share or non-GHG impact-assessment conclusion |
