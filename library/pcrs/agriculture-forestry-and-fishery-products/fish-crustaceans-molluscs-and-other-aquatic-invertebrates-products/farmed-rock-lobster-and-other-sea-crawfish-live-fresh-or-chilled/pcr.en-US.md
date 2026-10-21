---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed rock lobster and other sea crawfish, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed rock lobster and other sea crawfish in CPC 3.0 `04322`, placed on the market as live, fresh, or chilled product. It covers aquaculture production of Palinurus spp., Panulirus spp., Jasus spp., and other rock lobster or sea crawfish taxa when the reporting operator controls hatchery, nursery, puerulus or juvenile receiving, grow-out, sea-cage, pond, tank, ranching, live holding, chilling, pack-out, or delivery operations.

Covered products include whole or declared-product-basis farmed rock lobster and sea crawfish, whether in shell or not, sold live, fresh, or chilled. The default route covers biological starting stock sourcing, hatchery or nursery where controlled, grow-out husbandry, harvest, grading, live holding or chilling, packaging, and release at the declared gate.

Excluded products are wild rock lobster and other sea crawfish, Homarus lobsters, Norway lobsters, crabs, shrimps, prawns, freshwater crayfish when not part of this CPC category, frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved products, biological seed sold as a separate input, and shells, molts, or processing residues modelled as separate products.

Because commercial spiny lobster and rock lobster aquaculture often relies on region-specific puerulus, juvenile, hatchery, or grow-out supply chains, a conforming dataset must show controlled aquaculture activity. Wild capture followed only by live holding, chilling, grading, or dispatch is outside this PCR.

Bounded maintenance holding, transport, preservation, packing or resale alone does not establish farming; require evidenced managed biological growth, reproduction or fattening.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04322`, `Farmed rock lobster and other sea crawfish, live, fresh or chilled`; narrower |
| covered_products | farmed Palinurus spp., Panulirus spp., Jasus spp., and other rock lobster or sea crawfish sold live, fresh, or chilled from declared aquaculture, hatchery, nursery, grow-out, sea-cage, pond, tank, ranching, or enhancement systems |
| excluded_products | wild rock lobster and sea crawfish; Homarus lobsters; Norway lobsters; crabs, shrimps, prawns, and freshwater crayfish outside CPC `04322`; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved products; seed or juveniles sold as separate products; shells, molts, and residues as separate products |
| representative_product | live or chilled farmed rock lobster or sea crawfish at declared market size and declared product form |
| production_route | biological starting stock sourcing, hatchery or nursery where controlled, grow-out husbandry, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled rock lobster or sea crawfish with declared species, stock source, culture system, size grade, product basis, holding or chilling condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed rock lobster and other sea crawfish as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or taxon group, farmed proof, culture system, live/fresh/chilled state, whole or declared product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, grow-out batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `qualified_product_gate_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed rock lobster or sea crawfish product in its actual declared state at the final gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or taxon group; puerulus, postlarval, juvenile, broodstock, hatchery, collector, or grow-out stock source; culture system; farmed proof or controlled husbandry period; product state; whole, live, fresh, chilled, tail-only if explicitly declared, or declared product basis; size grade, carapace length, individual mass, or count per kg; shell-on or shell-off basis where material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime or natural-feed claim; water temperature, salinity, and exchange; health, biosecurity, permit, or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, crate, tote, cage, pond, tank, puerulus, juvenile, size-grade, carapace-length, or individual-weight records may be used only when net mass, count per kg or mean individual mass, product form, sampling method, and tare method are retained.

Declare one actual final gate, product form/state and positive accepted net delivered mass. If delivery_to_declared_gate is included, complete actual delivery, losses and acceptance before release; otherwise receive the measured pack-out transfer. Never select an earlier denominator, fix internal yield, sum both paths or assume delivery state; explicitly record excluded later transport. Retain all actual stage yields, raw batches and per-1000-kg bases and convert explicitly to per 1 kg final reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `final_gate_normalization` | all inventory rows | actual native exchange property | native unit per 1 kg final reference | Attribute raw batch/event quantities by actual ownership and allocation, then divide by positive accepted net kg at declared_gate_release; divide same-boundary per-1000-kg-final-product values by 1000. Stage-output denominators require measured lot transfers and yield conversion, never direct substitution for the final denominator; biological batches are not machine M. |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed rock lobster or sea crawfish in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show controlled aquaculture production, not only wild capture followed by live holding, chilling, grading, or dispatch. |
| `product_form_mass_basis` | whole, live, fresh, chilled, tailed, drained, or packed records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state live whole weight, chilled whole weight, drained mass, tail mass if exceptionally declared, or another contract-declared basis. Convert only with measured yield evidence. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count records must include count per kg or mean individual mass, carapace length or size grade, sampling method, and product form before normalization. |
| `life_stage_identity` | broodstock, pueruli, postlarvae, juveniles, and transferred stock | Mass or count | kg, item, puerulus count, postlarval count, or juvenile count | Life-stage records must retain taxon, life stage, supplier or hatchery, batch, count, mass where measurable, development stage, health status, and transfer date. |
| `feed_mass_basis` | live feed, trash fish, mussel, formulated feed, supplements, and natural-feed claims | Mass, count, or service basis | kg, g, item, or cage-day | Feed records must state wet, dry, as-fed, live-feed, formulated-feed, or natural-feed basis. Natural-feed grow-out systems must document the absence of added feed and the grow-out service basis. |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and wastewater | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve controlled water volume, temperature, salinity, water exchange, recirculation, make-up water, and discharge basis. Temperature control must be declared when energy use depends on chilling or heating. |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, chilling, heating, filtration, lighting, vessels, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, water-treatment chemicals, oxygen, anesthetic, and salt | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | Record product quantity, active ingredient where applicable, treatment purpose, diagnosis or health plan link, legal status, and harvest eligibility consequence. |
| `packaging_and_ice_basis` | crates, boxes, bags, liners, bands, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | Packaging, ice, live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species or taxon | scientific and common name | required for all datasets |
| Culture system | hatchery, nursery, pond, tank, RAS, sea cage, suspended cage, ranching area, enhancement area, or declared variant | required for boundary, water, feed, mortality, and discharge interpretation |
| Biological starting condition | broodstock, hatchery seed, pueruli, postlarvae, juveniles, wild-collected seed, supplier stock, or grow-out transfer | required to distinguish farmed production from wild capture |
| Product form | live whole, fresh whole, chilled whole, shell-on, shell-off, tail-only if exceptionally declared, or declared variant | required for mass-basis interpretation |
| Size grade | count per kg, mean individual mass, carapace length, sex, maturity class, or market grade | required when count or grade records are used |

## 5. System Boundary

The default boundary covers foreground-controlled farmed rock lobster and sea crawfish production to the declared farm, hatchery, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, hatchery seed, pueruli, postlarvae, juveniles, or grow-out stock sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased and collected stock disclosure when supplied by another hatchery, fisher, collector, or farm.
2. Hatchery, nursery, grow-out, cage, pond, tank, RAS, ranching, or enhancement husbandry, including stocking, feed or natural-feed management, water intake and exchange, aeration, oxygenation, filtration, temperature control, salinity control, shelters, health management, biosecurity, mortalities, molts, and directly controlled maintenance.
3. Harvest, grading, washing, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased feed, live feed, biological stock, cages, nets, shelters, packaging, ice, oxygen, electricity, fuel, and chemicals require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_hatchery_seed_puerulus_postlarval_juvenile_or_growout_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04322`, `Farmed rock lobster and other sea crawfish, live, fresh or chilled` |
| recursive_input_rule | farmed rock lobster broodstock, hatchery seed, pueruli, postlarvae, juveniles, or grow-out stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, collector, farm, life-stage, source, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | broodstock, hatchery, puerulus, postlarval, juvenile, grow-out stock, or supplier dataset, or documented source, species, batch, count or mass, life stage, health or biosecurity status, movement permission, and certification or permit evidence |
| disclosure | disclose species or taxon group, culture system, biological starting condition, farmed production evidence, stocking density or cage count, feed regime or natural-feed claim, water source, temperature, salinity and exchange, aeration or oxygenation, health treatments, mortality and molt records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| biological_stock_hatchery_nursery_and_stocking | Biological Stock, Hatchery, Nursery, and Stocking | required | biological starting condition must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | viable pueruli, postlarvae, juveniles, or stocked rock lobster entering grow-out |
| growout_and_husbandry | Grow-out and Husbandry | required | include pond, tank, RAS, cage, sea-cage, ranching, enhancement, or declared grow-out system | foreground production | harvest-size rock lobster or sea crawfish before final handling |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled rock lobster or sea crawfish |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond farm, harvest, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |
| declared_gate_release | Declared final-gate acceptance and release | required | Every qualifying lot after any actual included optional delivery | Sole final reference, actual state and rejection; no invented duplicate operation | 1 kg final accepted net product |

### Process: Biological Stock, Hatchery, Nursery, and Stocking (`biological_stock_hatchery_nursery_and_stocking`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Live spiny-lobster broodstock (`stock_broodstock`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live spiny-lobster broodstock
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### Live spiny-lobster pueruli (`stock_pueruli`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live spiny-lobster pueruli
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### Live spiny-lobster postlarvae (`stock_postlarvae`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live spiny-lobster postlarvae
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### Live juvenile spiny lobsters (`stock_juveniles`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live juvenile spiny lobsters
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass for this actual species and life stage; counts require representative measured same-stage mass and uncertainty, never a universal animal/egg weight. Retain source, stage ownership and upstream burden; normalize to final-gate accepted net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### Electricity at the declared supplier and voltage (`biological_stock_hatchery_nursery_and_stocking_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### Diesel fuel (`biological_stock_hatchery_nursery_and_stocking_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### Supplied liquid water of the declared source and treatment (`biological_stock_hatchery_nursery_and_stocking_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### oxygen (`biological_stock_hatchery_nursery_and_stocking_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live farmed rock lobster or sea crawfish stock transferred at its actual species and life stage (`accepted_stock_transfer`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed rock lobster or sea crawfish stock transferred at its actual species and life stage
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted net wet biomass and auxiliary count for the same species, life stage and lot; retain hatchery/nursery growth, transfer, mortality, rejects and paired source/recipient transfer IDs. Normalize to final accepted net delivered mass, never fix to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil), emissions to air unspecified (`biological_stock_hatchery_nursery_and_stocking_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

### Process: Grow-out and Husbandry (`growout_and_husbandry`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

###### Live farmed rock lobster or sea crawfish stock received for grow-out at its actual species and life stage (`stock_received_for_growout`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed rock lobster or sea crawfish stock received for grow-out at its actual species and life stage
- Flow property / unit: Mass / kg
- Amount rule: Independently measure net wet biomass received by this unit and reconcile species, life stage, lot and transfer ID with accepted_stock_transfer or the actual purchased source and upstream burden. Normalize to final accepted net delivered mass; never fix internal quantity to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

###### Electricity at the declared supplier and voltage (`growout_and_husbandry_electricity`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Electricity at the declared supplier and voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

###### Diesel fuel (`growout_and_husbandry_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

###### Supplied liquid water of the declared source and treatment (`growout_and_husbandry_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

###### oxygen (`growout_and_husbandry_gaseous_oxygen`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Mass / kg
- Amount rule: Independently measure only actual purchased gaseous oxygen mass, retaining purity, pressure, temperature and delivery state; air aeration, dissolved-oxygen monitoring and oxygen-generator electricity are not purchased oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live farmed rock lobster or sea crawfish biomass before harvest (`harvest_size_farmed_rock_lobster_and_sea_crawfish`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Live farmed rock lobster or sea crawfish biomass before harvest
- Flow property / unit: Mass / kg
- Amount rule: Measure net animal mass for the same lot, species, actual life stage/product state and paired transfer ID, retaining counts, growth, losses and fates; normalize by sole final-gate accepted net mass and never fix an internal transfer to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil), emissions to air unspecified (`growout_and_husbandry_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_growout_and_husbandry`

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

Record exchanges by actual lot, stage, species, state and transfer event; the final denominator is defined only at declared_gate_release. Generated wastes and emissions are outputs. Section 8 retains complete per-flow collection responsibilities; unknown is not zero.

#### Inputs

##### Product flows

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

###### Diesel fuel (`harvest_live_holding_chilling_and_packout_diesel`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
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

###### Harvested farmed rock lobster or sea crawfish biomass received for final handling (`harvest_stock_receipt`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Harvested farmed rock lobster or sea crawfish biomass received for final handling
- Flow property / unit: Mass / kg
- Amount rule: Independently measured quantity of this exchange normalized to final accepted net delivered mass, retaining native units and actual density, composition or energy conversion evidence.
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

###### Actual-state farmed rock lobster or sea crawfish biomass at pre-gate handling transfer (`marketable_farmed_rock_lobster_and_sea_crawfish_reference_product`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed rock lobster or sea crawfish biomass at pre-gate handling transfer
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

###### carbon dioxide (fossil), emissions to air unspecified (`harvest_live_holding_chilling_and_packout_fossil_co2`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only fossil carbon dioxide from this node’s actual diesel combustion, derived from measured fuel and independent applicable carbon/oxidation or emission-factor evidence, or direct measurement; no universal factor or supplier-emission substitution. Normalize to final-gate net reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

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

###### Supplied liquid water of the declared source and treatment (`delivery_to_declared_gate_supplied_water`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Supplied liquid water of the declared source and treatment
- Flow property / unit: Mass / kg
- Amount rule: Only this independently measured external liquid-water supply; volume measurements require actual temperature/salinity/density. Record natural abstraction and internal circulation separately; never subtract circulation again from external intake or add another supply burden.
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

###### Actual-state farmed rock lobster or sea crawfish product loaded for controlled delivery (`delivery_product_receipt`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed rock lobster or sea crawfish product loaded for controlled delivery
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

###### Actual-state farmed rock lobster or sea crawfish biomass at delivery completion (`delivered_farmed_rock_lobster_and_sea_crawfish`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed rock lobster or sea crawfish biomass at delivery completion
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

###### Actual-state farmed rock lobster or sea crawfish product received at the declared final gate (`qualified_product_gate_receipt`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Actual-state farmed rock lobster or sea crawfish product received at the declared final gate
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

###### Farmed rock lobster or sea crawfish product in its actual declared state at the final gate (`qualified_product_gate_release`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Farmed rock lobster or sea crawfish product in its actual declared state at the final gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_gate_acceptance`

##### Waste flows

###### Rejected farmed rock lobster or sea crawfish bodies at final acceptance (`final_gate_animal_rejects`)

Collect only when the exchange actually occurs and is owned by this node. Resolve each supply, material and state separately and measure its own quantity; never copy a family total or range. Retain raw batch/stage records and apply calc_final_gate_normalization to the sole final-gate denominator; unknown is not zero.

- Selected flow: Rejected farmed rock lobster or sea crawfish bodies at final acceptance
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

Avoid allocation where feasible by collecting separate batch, pond, tank, cage, hatchery, nursery, holding, and pack-out records. When the same foreground system produces multiple saleable species, size grades, seed, juveniles, market animals, shells, molts, or other products, apply the hierarchy below:

1. Use physical subdivision when records identify separate culture units, batches, species, size grades, or handling lots.
2. Use causal physical allocation when resource use is driven by measured biomass, count, cage occupancy, feed intake, water volume, holding duration, tonne-kilometres, or live-tank service.
3. Use economic allocation only when physical subdivision and causal physical allocation are not possible; disclose prices, period, market, and sensitivity.
4. Treat mortalities, culls, molts, wastewater, sludge, and used packaging as waste unless they leave the system as saleable co-products with documented market value and handling.

Wild rock lobster, Homarus lobster, Norway lobster, freshwater crayfish outside this CPC category, and processed crustacean products must be separated into their own PCR categories or modelled as co-products with explicit classification disclosure.

This PCR explicitly adopts the allocation hierarchy in GHG Protocol Product Standard chapter 9: subdivision first, then evidenced causal physical relationships, and evidenced economic relationships where physical relationships are inapplicable. Mass is not an automatic convenience default. Preserve unallocated physical quantities and a separately labelled once-only LCA view; reconcile all output/node shares to one. Allocation never repairs physical imbalance, and internal transfers create no sale or substitution credit. Source: `ghg-product-allocation`.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | biological starting stock, accepted stock, stocking, transfers | hatchery logs, supplier invoices, collection records, movement permits, batch records | species, life stage, source, batch id, count, mass where available, mean size, health status, movement date, accepted count, rejected count ; raw collection basis and original aggregation obligations: sum accepted stock and losses by species, life stage, and batch before normalization to reference product | collect from hatchery, nursery, supplier, collector, stocking, and transfer records | kg, item, puerulus count, postlarval count, juvenile count | each batch or transfer | full production batch or reporting period | all biological stock entering the declared production route | per 1 kg reference flow | supplier document, hatchery log, collector record, health certificate, movement permit, count or weighing record ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_feed_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | feed, bait, live feed, natural-feed claim | feed invoices, recipes, feeding logs, cage or pond records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed ; raw collection basis and original aggregation obligations: aggregate by feed type and basis, convert only with measured moisture or supplier data | collect from invoices, hatchery recipes, feed logs, and grow-out records | kg, g, L, item, cage-day, pond-day, tank-day | each feeding event or batch summary | full production batch or reporting period | all feed and natural-feed evidence for included production units | per 1 kg reference flow | invoice, recipe, feed log, natural-feed system record, mass or count measurement ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_feed_records_growout_and_husbandry` | `growout_and_husbandry` | feed, bait, live feed, natural-feed claim | feed invoices, recipes, feeding logs, cage or pond records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed ; raw collection basis and original aggregation obligations: aggregate by feed type and basis, convert only with measured moisture or supplier data | collect from invoices, hatchery recipes, feed logs, and grow-out records | kg, g, L, item, cage-day, pond-day, tank-day | each feeding event or batch summary | full production batch or reporting period | all feed and natural-feed evidence for included production units | per 1 kg reference flow | invoice, recipe, feed log, natural-feed system record, mass or count measurement ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count ; raw collection basis and original aggregation obligations: normalize intake, discharge, energy, fuel, and calculated loads to reference product; retain salinity and temperature basis | collect from meters, monitoring logs, laboratory tests, invoices, equipment logs, and incident records | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water, energy, fuel, and direct-release systems | per 1 kg reference flow | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_energy_and_fuel_records_growout_and_husbandry` | `growout_and_husbandry` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count ; raw collection basis and original aggregation obligations: normalize intake, discharge, energy, fuel, and calculated loads to reference product; retain salinity and temperature basis | collect from meters, monitoring logs, laboratory tests, invoices, equipment logs, and incident records | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water, energy, fuel, and direct-release systems | per 1 kg reference flow | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count ; raw collection basis and original aggregation obligations: normalize intake, discharge, energy, fuel, and calculated loads to reference product; retain salinity and temperature basis | collect from meters, monitoring logs, laboratory tests, invoices, equipment logs, and incident records | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water, energy, fuel, and direct-release systems | per 1 kg reference flow | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_water_energy_and_fuel_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count ; raw collection basis and original aggregation obligations: normalize intake, discharge, energy, fuel, and calculated loads to reference product; retain salinity and temperature basis | collect from meters, monitoring logs, laboratory tests, invoices, equipment logs, and incident records | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water, energy, fuel, and direct-release systems | per 1 kg reference flow | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_treatment_biosecurity_and_health_records_growout_and_husbandry` | `growout_and_husbandry` | health, disinfectant, treatment, biosecurity | treatment logs, veterinary records, chemical invoices, health plans | product name, active ingredient, dose, quantity, target unit, diagnosis or reason, legal status, date, withdrawal or harvest eligibility ; raw collection basis and original aggregation obligations: aggregate by product and active ingredient, retain event purpose and legal status | collect from treatment records, prescriptions, health plans, and invoices | kg, L, g active ingredient, m3 gas | each treatment event | full production batch or reporting period | all included culture units and holding systems | per 1 kg reference flow | treatment log, health plan, veterinary record, invoice ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; raw collection basis and original aggregation obligations: sum by residue type and route; calculate loss fraction against accepted or marketable mass | collect from mortality, cleaning, grading, and waste records | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_growout_and_husbandry` | `growout_and_husbandry` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; raw collection basis and original aggregation obligations: sum by residue type and route; calculate loss fraction against accepted or marketable mass | collect from mortality, cleaning, grading, and waste records | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; raw collection basis and original aggregation obligations: sum by residue type and route; calculate loss fraction against accepted or marketable mass | collect from mortality, cleaning, grading, and waste records | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date ; raw collection basis and original aggregation obligations: sum by residue type and route; calculate loss fraction against accepted or marketable mass | collect from mortality, cleaning, grading, and waste records | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | per 1 kg reference flow | mortality log, waste note, weighing record, disposal certificate ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_harvest_and_product_mass_records_growout_and_husbandry` | `growout_and_husbandry` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate ; raw collection basis and original aggregation obligations: reconcile harvested, packed, rejected, and delivered mass before normalization | collect from harvest weighing, grading, packing, and sales records | kg, item, count per kg | each harvest or packing lot | full production batch or reporting period | all product lots included in the reference flow | per 1 kg reference flow | scale ticket, packing record, sales note, batch reconciliation ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate ; raw collection basis and original aggregation obligations: reconcile harvested, packed, rejected, and delivered mass before normalization | collect from harvest weighing, grading, packing, and sales records | kg, item, count per kg | each harvest or packing lot | full production batch or reporting period | all product lots included in the reference flow | per 1 kg reference flow | scale ticket, packing record, sales note, batch reconciliation ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_packaging_live_holding_and_chilling_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | packaging, holding water, ice, oxygen, live transport preparation | packaging inventory, live tank logs, ice logs, oxygen logs | material type, item count, mass, reuse rate, water volume, oxygen quantity, ice mass, holding duration ; raw collection basis and original aggregation obligations: allocate by product lot mass, holding duration, or direct issue record | collect from inventory, tank logs, and pack-out records | kg, item, m3, L, m3 gas, hour | each pack-out lot | full production batch or reporting period | all final handling and pack-out activities | per 1 kg reference flow | inventory issue, live tank log, weighing record, oxygen invoice ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_delivery_and_route_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | delivery transport and route losses | delivery log, vehicle record, fuel receipt, customer receipt | origin, destination, distance, product mass, vehicle or service, fuel, electricity, ice, oxygen, delivery condition, loss count or mass ; raw collection basis and original aggregation obligations: calculate tonne-km or direct route inventory and normalize to delivered mass | collect from delivery, vehicle, freight, and receipt records | km, tonne-km, L, kg, kWh, item | each delivery route | deliveries within reporting period | all delivery routes included in the declared gate | per 1 kg reference flow | route log, fuel receipt, freight invoice, delivery receipt ; retain raw batch, stage, per-1000-kg and native-unit records; apply calc_final_gate_normalization explicitly, never relabel biological collection as per-machine data. |
| `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_growout_and_husbandry` | `growout_and_husbandry` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_atomic_inventory_delivery_to_declared_gate` | `delivery_to_declared_gate` | Every actual atomic exchange owned by this node | Independent weighing/metering, lot/transfer, invoice, stock and monitoring/factor evidence | actual species/stage/state; lot/event/transfer/period; each substance/supplier/voltage/composition; independent raw quantity/native unit; temperature/salinity/density; count and representative same-stage net weight; feed/growth/stock; fuel carbon/engine/independent factor or test; gaseous oxygen purity/pressure; waste fate/receiving medium/emission substance; allocation; final accepted net kg; original per-1000-kg and stage basis | Independently meter/weigh each actual exchange with calibrated equipment; reconcile same-lot/stage original protocols, invoices, actual state, transfers, losses, fates and evidenced factors; apply calc_final_gate_normalization explicitly while retaining raw values | individual native units, kg/kWh as applicable | each event and matched lot/period | actual complete node stage and matching reporting period | only this node and its actual attributable share | per 1 kg reference flow | calibration, original node protocols, invoices, composition/density, representative weighing, factors/monitoring and per-flow reconciliation |
| `cp_final_gate_acceptance` | `declared_gate_release` | Sole final-gate receipt, rejection and reference release | Calibrated weighing, lot and buyer acceptance records | selected gate/route; included/bypassed delivery evidence; paired transfer ID; species/state/form/lot/period; incoming net animal mass; packaging/water/ice/tare; rejects/loss/disposal; final accepted net kg; resource owner | Reconcile calibrated incoming, rejection and final accepted net mass against matched lot transfer/acceptance records; exclude free water, ice and packaging; retain measured form yields and uncertainty | kg | every final lot handover | same lot and reporting period including any included delivery interval | sole declared final gate | per 1 kg reference flow | calibration, weighing, buyer acceptance, state/route and reject/disposal evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_product_mass` | reference product | Q is the independently measured positive accepted net animal mass of the same lot and actual product state at declared_gate_release, collected under cp_final_gate_acceptance. From a gross weighing, deduct only measured tare, free water/ice and rejects or losses actually included in that weighing, once. Never deduct rejects or mortalities again from already accepted net mass. Reconcile earlier pack-out, delivery, other intended outputs, losses and stocks separately; do not substitute an intermediate acceptable mass for final Q. | `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout`; `cp_packaging_live_holding_and_chilling_records_harvest_live_holding_chilling_and_packout`; `cp_delivery_and_route_records_delivery_to_declared_gate` when delivery is included; `cp_final_gate_acceptance` | kg reference product |  |
| `calc_count_to_mass` | count-based records | mass = count x measured mean individual mass, or count / measured count per kg; retain sampling method and grade | `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking`; `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | kg equivalent mass |  |
| `calc_stock_acceptance_and_survival` | biological stock and grow-out | accepted or surviving fraction = accepted or surviving count or biomass divided by input count or biomass for the same life stage and batch | `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking`; `cp_mortality_molt_residue_and_sludge_records_biological_stock_hatchery_nursery_and_stocking`; `cp_mortality_molt_residue_and_sludge_records_growout_and_husbandry`; `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout`; `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate`; `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | accepted stock, survival, loss, and residue indicators | `qld-spiny-lobster-aquaculture-2009`; `fisheries-puerulus-2026` |
| `calc_waterborne_load` | discharge and direct releases | For each substance and actual receiving medium calculate gross discharged substance mass from matched measured external discharge and representative concentration, retaining unit conversion, detection limits and sampling uncertainty. Use separate cards for different substances or media. Disclose background/influent concentration and net changes separately; a negative net balance is not a negative emission or an uptake credit. | `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking`; `cp_water_energy_and_fuel_records_growout_and_husbandry`; `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout`; `cp_water_energy_and_fuel_records_delivery_to_declared_gate` | kg nutrient, solids, treatment residue, or other load | `asc-farm-standard-2025` |
| `calc_energy_allocation` | shared energy systems | allocate direct meters first; otherwise allocate by equipment hours, batch duration, water volume, cage occupancy, or product mass with the selected key disclosed | `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking`; `cp_water_energy_and_fuel_records_growout_and_husbandry`; `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout`; `cp_water_energy_and_fuel_records_delivery_to_declared_gate`; `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | kWh, MJ, or fuel per reference flow | `asc-farm-standard-2025` |
| `calc_delivery_transport_service` | delivery | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | `cp_delivery_and_route_records_delivery_to_declared_gate` | tonne-km or direct delivery inventory per reference flow |  |
| `calc_final_gate_normalization` | all inventory rows | Divide same-boundary, same-actual-state quantities reported per 1000 kg final accepted product by 1000. For raw batch/event totals, establish actual ownership and once-only allocation, then divide by positive final accepted net kg from cp_final_gate_acceptance. Stage, harvest or pack-out denominators require same-lot measured transfer/yield mapping with the original values and conversion audit trail retained. Internal animals and transported water/ice/packaging are never fixed 1 kg inputs. | raw batch and stage records; measured yields/transfers; once-only allocation; cp_final_gate_acceptance | native exchange quantity per 1 kg final reference, with raw values and conversion record | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_category_identity` | all datasets | Dataset must identify the species or taxon group and show that the reference product belongs to CPC `04322`, not wild rock lobster, Homarus lobster, Norway lobster, or processed crustacean categories. | species records, classification mapping, product description, sales record |
| `dq_farmed_proof` | all datasets | Dataset must prove controlled aquaculture production through hatchery, nursery, grow-out, cage, pond, tank, ranching, or enhancement records. | stocking log, hatchery record, grow-out record, permit, production plan |
| `dq_mass_balance` | biological stock, harvest, reference product | Biological input, mortality, cull, residue, harvest, packed, and delivered product records must reconcile at batch or reporting-period level. | batch reconciliation, scale tickets, mortality logs, packing records |
| `dq_water_and_energy_completeness` | water, discharge, energy, fuel | Water, temperature, salinity, discharge, electricity, fuel, oxygenation, and temperature-control records must cover all foreground processes in scope. | meter logs, invoices, monitoring records, allocation worksheet |
| `dq_treatment_and_biosecurity_traceability` | health and treatment inputs | Treatments, disinfectants, anesthetics, oxygen, salt, and water-quality inputs must retain purpose, active ingredient where applicable, legal status, and harvest eligibility consequence. | treatment log, health plan, veterinary record |
| `dq_live_product_handling` | final product and delivery | Live holding, chilling, packaging, delivery duration, and mortality or rejection must be traceable to the final product lot. | live tank log, pack-out record, delivery receipt |
| `dq_unresolved_uuid_disclosure` | any row with site-specific flow selection | Any blank or generic flow identity must be disclosed before reviewed publication and replaced with selected Tiangong UUIDs where available. | manifest review metadata, UUID review record |
| `dq_inventory_completion` | all concrete exchanges and final gate | Complete every actual exchange including route-specific water, energy, feed, treatment, packaging, service, capital/replacement/cleaning and fate. Independently measure listed water/electricity/diesel/oxygen/ice cards only when actually used, and add separate cards for all other actual materials. Retain independent Range/UUID gaps as blockers to final completeness; never replace unknown with zero. | per-flow coverage ledger, raw records, independent ranges and verified identities |
| `dq_complete_biological_stock_input` | `biological_stock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Broodstock, hatchery seed, pueruli, postlarvae, or juveniles”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records purchased, collected, or internally produced biological stock entering the declared farmed route. Flow property / unit: Mass or count with life stage / kg, item, puerulus count, postlarval count, or juvenile count Amount rule: measured count, mass where measurable, life stage, and accepted quantity entering hatchery, nursery, grow-out, ranching, or cage culture Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking` Sources: `fao-panulirus-homarus-factsheet`, `qld-spiny-lobster-aquaculture-2009`, `fisheries-puerulus-2026`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_nursery_feed` | `biological_stock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Hatchery and nursery feed”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row covers live feed, Artemia, fish, mussel, formulated starter diets, broodstock diets, and comparable hatchery or nursery feeds. Flow property / unit: Mass, volume, or count / kg, g, L, cyst count, or item Amount rule: measured feed or live-feed quantity by batch, life stage, and basis Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_feed_records_biological_stock_hatchery_nursery_and_stocking` Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_nursery_water_and_energy` | `biological_stock_hatchery_nursery_and_stocking`; inputs; product | Collect every actual exchange for the collection responsibility “Hatchery and nursery water and energy”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row covers controlled seawater, brackish water, process water, recirculation replacement water, electricity, fuel, aeration, oxygenation, filtration, and temperature control used in on-site hatchery and nursery operations. Flow property / unit: Mass, volume, energy, or fuel quantity / kg, m3, kWh, MJ, L, or kg Amount rule: measured intake, make-up water, electricity, fuel, oxygenation, chilling, heating, or allocated equipment service with temperature and salinity basis retained Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking` Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_hatchery_mortalities_molts_sludge_and_rejected_stock` | `biological_stock_hatchery_nursery_and_stocking`; outputs; waste | Collect every actual exchange for the collection responsibility “Hatchery mortalities, molts, sludge, and rejected stock”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or count / kg or item Amount rule: measured mortality count, residue mass, sludge, rejected stock, and disposal or recovery route Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_molt_residue_and_sludge_records_biological_stock_hatchery_nursery_and_stocking` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_accepted_pueruli_postlarvae_or_juveniles_for_growout` | `biological_stock_hatchery_nursery_and_stocking`; outputs; product | Collect every actual exchange for the collection responsibility “Accepted pueruli, postlarvae, or juveniles for grow-out”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or count with mean size / kg, item, puerulus count, postlarval count, or juvenile count Amount rule: calculated accepted stock after receipt, hatchery, nursery, grading, acclimation, and transfer losses Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: accepted stock entering grow-out or ranching Basis kind: Process output (`process_output`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_feed_bait_natural_feed_and_supplements` | `growout_and_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Grow-out feed, bait, natural feed support, and supplements”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or service basis / kg, g, item, cage-day, pond-day, or tank-day Amount rule: measured feed or bait quantity by batch, or documented zero-added-feed claim with cage, pond, tank, stocking, and exposure records Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_feed_records_growout_and_husbandry` Sources: `fao-panulirus-homarus-factsheet`, `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_water_cage_service_electricity_and_fuel` | `growout_and_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Grow-out water, cage service, electricity, and fuel”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, energy, fuel quantity, or service basis / kg, m3, kWh, MJ, L, cage-day, pond-day, or tank-day Amount rule: measured water intake, exchange, cage service, vessel work, pumping, aeration, oxygenation, filtration, fuel, and allocated equipment service with temperature, salinity, and culture unit retained Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_energy_and_fuel_records_growout_and_husbandry` Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_health_biosecurity_and_water_treatment_inputs` | `growout_and_husbandry`; inputs; product | Collect every actual exchange for the collection responsibility “Health, biosecurity, and water-treatment inputs”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 Amount rule: measured product quantity, active ingredient where applicable, treatment reason, legal status, and harvest eligibility consequence Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per treatment event and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_treatment_biosecurity_and_health_records_growout_and_husbandry` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_growout_mortalities_molts_shells_sludge_and_residues` | `growout_and_husbandry`; outputs; waste | Collect every actual exchange for the collection responsibility “Grow-out mortalities, molts, shells, sludge, and residues”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass or count / kg or item Amount rule: measured mortality count, residue mass, removed biofouling, sludge, culls, and disposal or recovery route Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization Basis kind: Process output (`process_output`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_molt_residue_and_sludge_records_growout_and_husbandry` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_direct_waterborne_emissions_and_escapes` | `growout_and_husbandry`; outputs; elementary | Collect every actual exchange for the collection responsibility “Direct waterborne emissions and escapes”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, count, or concentration-load / kg, g, item, or kg nutrient Amount rule: measured or calculated load from water-quality records, effluent volume, treatment records, known escape counts, and mass-balance checks Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Process output (`process_output`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_water_energy_and_fuel_records_growout_and_husbandry` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_holding_water_ice_oxygen_and_packaging` | `harvest_live_holding_chilling_and_packout`; inputs; product | Collect every actual exchange for the collection responsibility “Holding water, ice, oxygen, and packaging”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, gas volume, or item count / kg, m3, L, m3 gas, or item Amount rule: measured material, water, ice, oxygen, and packaging quantities with reuse, tare, and product basis retained Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_packaging_live_holding_and_chilling_records_harvest_live_holding_chilling_and_packout` Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_live_holding_chilling_and_packout_energy` | `harvest_live_holding_chilling_and_packout`; inputs; product | Collect every actual exchange for the collection responsibility “Live holding, chilling, and pack-out energy”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg Amount rule: metered electricity, fuel purchase, or allocated energy records for live holding, chilling, and pack-out Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` Sources: `asc-farm-standard-2025` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_packout_rejects_mortalities_wastewater_and_used_packaging` | `harvest_live_holding_chilling_and_packout`; outputs; waste | Collect every actual exchange for the collection responsibility “Pack-out rejects, mortalities, wastewater, and used packaging”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, or count / kg, m3, or item Amount rule: measured reject mass or count, wastewater volume, used packaging mass, and disposal or recovery route Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1,000 kg marketable reference product Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_delivery_fuel_energy_and_live_transport_supplies` | `delivery_to_declared_gate`; inputs; product | Collect every actual exchange for the collection responsibility “Delivery fuel, electricity, refrigerant service, and live transport supplies”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Fuel, energy, mass, volume, or transport service / L, kg, kWh, MJ, m3, or tonne-km Amount rule: route-specific measured fuel, energy, transport service, or supply use with distance, load factor, live transport condition, and allocation basis retained Value mode: Foreground record (`foreground_record`) Specificity: Route-specific (`route_specific`) Normalization basis: per delivered 1,000 kg reference product or tonne-km where transport is modelled as service Basis kind: Transport service (`transport_service`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_delivery_and_route_records_delivery_to_declared_gate` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |
| `dq_complete_delivery_mortalities_rejected_product_and_transport_residue` | `delivery_to_declared_gate`; outputs; waste | Collect every actual exchange for the collection responsibility “Delivery mortalities, rejected product, and transport residue”, retaining these real raw quantity, batch/stage, native-unit, fate, collection and range-evidence obligations: This row records the selected exchange within the declared process and system boundary. Flow property / unit: Mass, volume, or count / kg, m3, or item Amount rule: measured delivery loss, mortality count, reject mass, residue amount, and disposal or recovery route Value mode: Foreground record (`foreground_record`) Specificity: Route-specific (`route_specific`) Normalization basis: per delivered 1,000 kg reference product Basis kind: Transport service (`transport_service`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_delivery_and_route_records_delivery_to_declared_gate` Every actual substance, fuel, material, waste, emission and service requires its own concrete identity card and independent measurement. Generated wastes/emissions are outputs, not inputs; escaped organisms remain separate from mortality/sludge. Convert original per-1000-kg/stage and batch bases explicitly to the sole final gate under calc_final_gate_normalization. No grouped UUID, total or Range is inherited; grouped bounds are not child allowed ranges. Any unresolved actual child’s independent Range evidence, quantity, fate or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | node-owned collection protocol, raw records, per-flow coverage ledger and identity/fate evidence |

## 9. Validation Rules

| Rule id | Severity | Rule |
| --- | --- | --- |
| `val_reference_flow_uuid` | error | Independently verify reference identity against actual species, life stage, form/state and final gate. A category label or live-animal landing UUID cannot automatically identify farm, packhouse or delivered product; no grouped UUID grants a binding. |
| `val_reference_unit` | error | The reference amount must be expressed as kg with Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |
| `val_farmed_not_wild` | error | A dataset based only on wild capture, wild landing, or post-capture live holding without controlled aquaculture production is non-conforming. |
| `val_adjacent_categories` | error | Homarus lobster, Norway lobster, wild rock lobster, frozen, dried, salted, brined, cooked, canned, or otherwise processed crustacean products must not be reported under this PCR as the main reference product. |
| `val_required_qualifiers` | error | Species or taxon group, culture system, biological starting condition, product state, size grade or count basis, declared gate, and farmed proof must be present. |
| `val_collection_protocol_coverage` | error | Each foreground inventory row with `foreground_record` or `calculated_value` must link to a collection protocol or calculation rule. |
| `val_mass_balance` | warning | Biological stock, mortality, residue, harvest, packed, rejected, and delivered mass should reconcile; unexplained imbalance must be disclosed. |
| `val_range_review` | warning | Reasoned-estimate ranges are candidate QA screens and must be replaced or justified before reviewed or published use. |
| `val_final_gate_completion` | error | Check sole declared_gate_release reference output 1 kg, positive final accepted net-kg denominator, actual included/bypassed delivery and every independently measured internal transfer, rejection and loss. Verify all dq_complete actual child exchanges, native units, normalization, independent Range evidence, UUIDs, fates and non-duplication; any gap makes the final dataset incomplete and fails validation. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for farmed rock lobster and other sea crawfish |
| downstream_use | secondary_dataset; background_dataset when reviewed and geographically representative |
| allowed_use | LCA modelling of live, fresh, or chilled farmed rock lobster and other sea crawfish at the declared gate with disclosed production route, product state, and quality qualifiers |
| excluded_use | wild rock lobster and sea crawfish; Homarus lobster; Norway lobster; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved crustacean products; seed-only production; shell, molt, or residue co-products without separate modelling |
| required_metadata | canonical PCR id; CPC code; species or taxon group; culture system; biological starting condition; farmed production evidence; product form; size grade; mass basis; water temperature and salinity basis; feed regime or natural-feed claim; health and treatment disclosure; packaging state; declared gate; geography; reporting period; allocation method; unresolved UUID substitutions |
| required_quality_disclosure | source and completeness of biological stock, feed, water, energy, health treatment, mortality, residue, product mass, packaging, delivery, and allocation records; reasoned-estimate range use; missing Tiangong UUIDs; deviations from the default boundary |
| update_trigger | update when Tiangong flow identities change, CPC mapping changes, reviewed rock lobster aquaculture evidence becomes available, source-backed ranges replace candidate estimates, or production route changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-panulirus-homarus-factsheet` | official_guidance | FAO Fisheries and Aquaculture. Cultured Aquatic Species Information Programme: Panulirus homarus. https://www.fao.org/fishery/culturedspecies/panulirus_homarus/en | species scope, spiny lobster aquaculture route, seed, grow-out, and product identity context |
| `qld-spiny-lobster-aquaculture-2009` | literature | Jones, C. et al. Spiny lobster aquaculture development in Indonesia, Vietnam and Australia. Queensland Department of Primary Industries and Fisheries. https://era.dpi.qld.gov.au/id/eprint/2291/1/pr145-main_report-web-final.pdf | puerulus and juvenile supply, nursery, grow-out systems, feed, cage, and production-route evidence |
| `fisheries-puerulus-2026` | literature | Sustainability of Puerulus Fisheries Supporting Spiny Lobster Aquaculture in Southeast Asia. Fishes 2026. https://www.mdpi.com/2410-3888/11/3/182 | wild-collected puerulus dependence, seed-source disclosure, and fishery-aquaculture interface risks |
| `codex-cxc-52-2003` | standard | Codex Alimentarius. Code of Practice for Fish and Fishery Products, CXC 52-2003. https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | handling, hygiene, live/fresh/chilled fishery product scope, storage, transport, and retail handling context |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council. ASC Farm Standard, ASC-STD-001, Version 1.0.1, 2025. https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | aquaculture data quality, environmental stewardship, water quality, energy, feed, health, welfare, escapes, biosolids, and certification-related collection rules |
| `mass-balance-identity` | method_factor | Declared arithmetic identity for this PCR final-gate normalization and measured stage mass reconciliation. | Sole final denominator and explicit raw-batch/stage/per-1000-kg conversion; no empirical biological yield or density value |
| `ghg-product-allocation` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard, chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf (verified 2026-10-16, printed pp.60–70) | Allocation hierarchy explicitly adopted by this PCR: subdivision, causal physical and economic relationships; no aquaculture performance, actual share or non-GHG impact-assessment conclusion |
