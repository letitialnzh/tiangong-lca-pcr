---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Rice Paddy, Other (Not Husked) at Farm Gate

## 1. Scope and Applicability

This PCR guides foreground data package construction for non-seed rice paddy corresponding to CPC 3.0 `01132`, “Rice paddy, other (not husked)”. It covers rice of the genus *Oryza* grown for declared downstream food, feed, or other non-seed use, from crop establishment through harvest and the declared farm-gate handoff.

The default reference state is harvested, unprocessed, not-husked paddy at the farm gate. The dataset must declare the rice variety or hybrid where material, crop year or season, geography, production system, irrigation and water regime, as-is moisture basis, harvest method, and intended downstream use. Field-side harvesting, threshing, loading, and transport to the farm gate are included only when they are inside the declared foreground boundary.

This PCR excludes rice grown specifically for sowing seed, husked rice, semi-milled or wholly milled rice, broken rice as a downstream product, rice flour or other processed rice products, retail products, consumer use, and post-farm-gate drying, cleaning, storage, husking, milling, or distribution unless a consuming dataset explicitly declares an expanded gate and separately verifies that its product identity and boundary remain compatible. A same-category paddy flow must not be silently relabelled as rice seed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked` |
| classification_refs | CPC 3.0 `01132`, `Rice paddy, other (not husked)` |
| covered_products | non-seed rice paddy of the genus *Oryza*, not husked, at the declared farm-gate handoff |
| excluded_products | rice seed for sowing; husked rice; semi-milled or wholly milled rice; broken rice as a downstream product; rice flour and other processed rice products; retail-ready products; post-farm-gate processing and distribution |
| representative_product | harvested, unprocessed, not-husked rice paddy at the declared farm gate and as-is moisture basis |
| production_route | annual or declared-season rice crop production, harvest, threshing or separation where applicable, field handling, and farm-gate handoff |
| market_state | bulk or containerized non-seed rice paddy with variety or hybrid where material, moisture basis, crop year, geography, production system, and intended downstream use declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | non-seed, not-husked rice paddy at the declared farm-gate handoff |
| How much | 1 kg |
| How well | declared rice variety or hybrid where material; non-seed use; as-is moisture basis; crop year or season; geography; production system and water regime; harvest state; intended downstream use; bulk or container state |
| How long or cycle | one declared rice crop cycle and harvest year or season; storage duration is outside the default farm-gate boundary |
| reference_flow_link | Reference amount and verified platform product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rice paddy, other (not husked) `bdbb913b-620c-42a0-baf6-c5802a2b6c4b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-seed use; rice variety or hybrid where material; not-husked state; as-is moisture basis; crop year or season; geography; production system and water regime; harvest state; declared farm gate; intended downstream use; bulk or container state |
| Binding | `fixed` |

The reference amount is the net paddy output crossing the declared farm-gate handoff. Soil, water, straw, chaff, foreign material, unharvested grain, harvest loss, and other non-reference outputs are reported separately when they cross the foreground boundary. The fixed identity applies only when the consuming dataset retains the verified product state and qualifiers; it is not a fallback for husked or processed rice.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net kg of non-seed, not-husked rice paddy at the declared farm gate and as-is moisture basis. |
| `moisture_basis` | harvested paddy, losses, and residues | Mass and moisture content | kg and percent | Record the as-is moisture result and basis for harvested paddy, reference output, losses, and removed residues; if dry-matter normalization is used, retain the measured moisture result and explicit conversion rule. |
| `seed_input_basis` | seed for sowing | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record seed-for-sowing mass or a transparent count-to-mass conversion; do not use the paddy reference flow as a proxy for sowing seed. |
| `nutrient_input_basis` | fertilizer and nutrient emissions | Mass and nutrient content | kg product and kg nutrient | Record formulated product mass and declared nutrient content separately; nitrogen emission calculations use the selected nutrient basis, not an unqualified fertilizer-product mass. |
| `water_basis` | irrigation, withdrawal, and drainage | Volume or mass | m3 or kg | Distinguish source withdrawal, delivered irrigation, rainfall or other water inputs, consumption, drainage, and any water-footprint result. |
| `energy_inventory` | field operations, pumping, harvest, and handoff | Carrier mass or energy | kg, L, MJ, or kWh | Retain energy carrier, operation, period, unit, geography, and conversion basis before normalizing to the reference flow. |
| `output_reconciliation` | harvested paddy, straw, losses, and other outputs | Mass | kg | Reconcile harvested paddy, removed straw or other co-products, measured losses, and non-exported residues on a common moisture basis before normalizing to the reference flow. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | crop establishment and field production | Include the declared rice seed input, land occupation, land preparation, sowing or transplanting, nutrient management, irrigation or other water management, crop protection, field operations, and direct field emissions through the declared harvest boundary. | `irri-rice-production-knowledge-bank`; `irri-rice-water-management`; `ipcc-2019-afolu` |
| `boundary_harvest_and_gate` | harvest and farm-gate handoff | Include harvesting, threshing or separation where applicable, field-side handling, loading, and transport to the declared farm gate when those activities are part of the foreground data package. | `fao-rice-postharvest`; `irri-rice-production-knowledge-bank` |
| `boundary_postfarm_exclusion` | drying, cleaning, storage, and processing after the gate | Exclude post-farm-gate drying, cleaning, storage, husking, milling, downstream food or feed conversion, retail, and consumer use from the default boundary; represent them as downstream datasets unless an expanded gate is explicitly declared and identity is re-verified. | `fao-rice-postharvest`; `unsd-cpc-rice-01132` |
| `boundary_input_completeness` | all foreground routes | Address seed, nutrients, irrigation and withdrawal, crop protection, land, field and pumping energy, harvest energy, direct emissions, harvested paddy, residues, and losses with a collected value, justified zero, or documented exclusion. | `irri-rice-production-knowledge-bank`; `irri-rice-water-management`; `ipcc-2019-afolu` |
| `boundary_output_fate` | non-reference outputs | Record removed straw, chaff, unharvested grain, harvest loss, field residue, and other outputs only when they cross the foreground boundary; retain their measured amount, moisture basis, destination, and fate. | `fao-rice-postharvest`; `mass-balance-identity` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | rice_seed_for_sowing_input_and_declared_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | non-seed, not-husked rice paddy corresponding to CPC 3.0 `01132`, `Rice paddy, other (not husked)` |
| recursive_input_rule | Record rice seed for sowing as a distinct upstream input using its source, lot, amount, and treatment or quality information. Do not recursively trace same-category paddy as seed or relabel paddy as the rice-seed product category. |
| upstream_dataset_requirement | Use identified or declared supplier datasets for rice seed, nutrients, crop-protection products, energy carriers, water supply, transport, and any treatment or waste service; resolve parameterized Flow Set rows to concrete UUIDs before final exchange publication. |
| disclosure | Declare variety or hybrid where material, crop cycle, geography, crop year or season, production system, water regime, seed source, nutrient and crop-protection records, field energy, harvest method, moisture basis, farm gate, intended downstream use, reference output, and every non-reference output fate. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rice_paddy_crop_production | Rice Paddy Crop Production | required | include the declared rice crop cycle through the pre-handoff harvest boundary | foreground | harvested paddy and associated field outputs |
| rice_paddy_harvest_and_gate_delivery | Rice Paddy Harvest and Farm-gate Delivery | required | include harvest, threshing or separation where applicable, field handling, and handoff to the declared farm gate | foreground | net rice paddy at the declared farm gate |
| on_farm_postharvest_handling | On-farm Paddy Drying or Storage | excluded_by_default | include only when the declared product gate intentionally includes post-harvest drying or storage while preserving a compatible not-husked product identity; otherwise use a downstream dataset | foreground | declared expanded-gate paddy output |

### Process: Rice Paddy Crop Production (`rice_paddy_crop_production`)

#### Inputs

##### Product flows

###### Rice seed for sowing (`seed_for_sowing_input`)

Rice seed for sowing is an upstream crop-establishment input and is not the reference product. Retain its source, lot, variety or hybrid, treatment status, sowing method, and amount.

- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured seed-for-sowing mass by field, lot, or declared crop cycle; use a transparent count-to-mass conversion when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_input_records`

###### Agricultural nutrient and fertilizer inputs (`rice_paddy_crop_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources:

###### Crop-protection material (`crop_protection_material`)

Crop-protection products are recorded by formulated product or active ingredient only when they cross the foreground boundary and the reporting basis is declared.

- Selected flow: Crop-protection material used in rice paddy production
- Flow property / unit: Mass / kg
- Amount rule: measured formulated-product or active-ingredient mass by application, with product identity and field assignment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`

###### Irrigation water supplied (`irrigation_water`)

Delivered irrigation water is recorded separately from source withdrawal, rainfall, drainage, and water consumption.

- Selected flow: Irrigation water supplied to the rice production field
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or calculated delivered irrigation by field, event, source, and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `irri-rice-water-management`

###### Field machinery energy (`field_machinery_energy`)

Energy used for land preparation, planting or transplanting, crop care, and field movement is recorded by operation when it crosses the foreground boundary.

- Selected flow: Field machinery energy supply
- Flow property / unit: Energy or carrier mass / MJ, kWh, L, or kg
- Amount rule: fuel, electricity, machine-hour, or supplier record by field operation with the conversion basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`

###### Irrigation pumping electricity (`irrigation_pumping_electricity`)

Electricity for irrigation pumping is kept separate from the delivered water quantity.

- Selected flow: Electricity for irrigation pumping
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered pumping electricity or calculated electricity from pump records and delivered water records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`

##### Waste flows

No waste input is assumed. Waste-derived amendments are recorded only when their source, treatment, nutrient or soil-function role, and boundary crossing are documented.

##### Elementary flows

###### Land occupation (`land_occupation`)

Land occupation is recorded for the area and duration supporting the declared rice crop cycle; land transformation is separated when applicable.

- Selected flow: Land occupation supporting rice paddy production
- Flow property / unit: Area-time / declared platform unit
- Amount rule: measured field area, crop duration, and applicable land-use change status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`

###### Water resource withdrawal (`water_resource_withdrawal`)

Source-specific water withdrawal is recorded as an elementary input and reconciled with delivered irrigation and drainage records.

- Selected flow: Water resource withdrawn for rice paddy production
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured source withdrawal by field, event, source, and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`

#### Outputs

##### Product flows

###### Harvested paddy transferred to harvest and gate delivery (`harvested_paddy_transfer`)

This internal transfer carries the measured harvested, not-husked paddy from the crop-production boundary to the harvest and farm-gate delivery process. Its field-edge state is retained separately from the fixed farm-gate reference flow.

- Selected flow: Harvested non-seed rice paddy transferred to the gate-delivery process
- Flow property / unit: Mass / kg
- Amount rule: measured harvested paddy mass with as-is moisture basis and harvest-lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### Removed rice straw or other declared co-product (`removed_rice_straw_or_coproduct`)

Rice straw or another non-reference material is recorded as a product output only when it crosses the boundary with a declared use, destination, measured amount, and receiving gate. Material left on the field is not silently treated as an exported product.

- Selected flow: Removed rice straw or other declared non-reference agricultural co-product
- Flow property / unit: Mass / kg
- Amount rule: measured removed mass, as-is moisture basis, intended use, destination, and receiving gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

##### Waste flows

###### Unrecoverable field or pre-handoff paddy loss (`unrecoverable_paddy_loss`)

Record this waste output only when grain or plant material leaves the foreground route without becoming the reference product or a declared co-product and its destination or fate is documented. No generic waste-flow identity is forced when the material remains evidence gap after refinement.

- Selected flow: Unrecoverable rice paddy or plant-material loss at harvest or before the farm gate
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass, moisture basis, location or process stage, and documented fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

##### Elementary flows

###### Nitrogen or carbon field-emission coverage (`field_emission_coverage`)

Additional direct emissions are added only when the selected method requires them, the physical identity is refined to the evidence-supported substance and receiving compartment, and a compatible elementary-flow UUID is verified.

- Selected flow: Additional direct field emission identified by the selected rice-emission method
- Flow property / unit: Mass / kg
- Amount rule: method-specific calculation from collected crop, soil, water, nutrient, and residue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-afolu`

###### Direct methane emission (`direct_methane_emission`)

Methane is recorded only when the selected rice-emission method supports the declared water regime, soil, residue, and crop-cycle inputs and the elementary-flow identity is verified.

- Selected flow: Direct methane emission to ambient air
- Flow property / unit: Mass / kg
- Amount rule: selected method calculation from collected water-regime, organic-input, residue, soil, and crop-cycle records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-afolu`

###### Direct nitrous oxide emission (`direct_nitrous_oxide_emission`)

Direct nitrous oxide is recorded only when the selected method and collected nutrient, soil, water, and crop records support the calculation and the elementary-flow identity is verified.

- Selected flow: Direct nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg
- Amount rule: selected method calculation from collected nutrient, soil, water-regime, and crop-cycle records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-afolu`

### Process: Rice Paddy Harvest and Farm-gate Delivery (`rice_paddy_harvest_and_gate_delivery`)

#### Inputs

##### Product flows

###### Harvested paddy received for gate delivery (`harvested_paddy_for_gate_delivery`)

This process receives the measured harvested paddy transfer and records the boundary-crossing operations that lead to the declared farm gate.

- Selected flow: Harvested non-seed rice paddy received from the crop-production process
- Flow property / unit: Mass / kg
- Amount rule: measured mass received, harvest lot, as-is moisture basis, and receiving location
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### Harvest and field-to-gate energy (`harvest_and_gate_energy`)

Fuel or electricity used for harvesting, threshing, loading, and field-to-gate handling is recorded by operation when it crosses the foreground boundary.

- Selected flow: Harvest and field-to-gate energy supply
- Flow property / unit: Energy or carrier mass / MJ, kWh, L, or kg
- Amount rule: measured fuel, electricity, machine-hour, or supplier record by harvest and handoff operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`

###### Field-to-gate freight transport service (`field_to_gate_transport_or_handling`)

Record the route-specific freight service only when paddy crosses the declared foreground boundary. Internal handling without a freight-distance basis remains outside this set and requires separate review.

- Selected flow: Rice paddy freight transport service
- Flow property / unit: Mass-distance or service quantity / declared platform unit
- Amount rule: measured paddy mass, distance or handling activity, mode, route, and service provider where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

##### Waste flows

No waste input is assumed. Any returned, reused, or treated material must be recorded with its actual route and boundary crossing rather than being inferred from the paddy mass.

##### Elementary flows

No additional elementary input is required unless the declared harvest and handoff operations introduce a separate natural-resource or emission exchange supported by the selected method and verified identity.

#### Outputs

##### Product flows

###### Rice paddy at declared farm gate (`rice_paddy_at_farm_gate`)

This is the reference product output: net, non-seed, not-husked rice paddy crossing the declared farm-gate handoff with its as-is moisture basis and required qualifiers retained.

- Selected flow: Rice paddy, other (not husked) `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured net paddy mass at the declared farm-gate handoff, reconciled with all measured non-reference outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative process output and PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### Removed straw or other co-product at gate (`removed_straw_or_coproduct_at_gate`)

Record a removed co-product at the gate only when its use, destination, mass, moisture basis, and receiving gate are documented. It has no product-output Flow Set fallback.

- Selected flow: Removed rice straw or other declared non-reference co-product at the farm-gate route
- Flow property / unit: Mass / kg
- Amount rule: measured mass and declared receiving use, destination, and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

##### Waste flows

###### Harvest and gate-delivery loss (`harvest_and_gate_delivery_loss`)

Harvest, threshing, loading, transport, and handoff losses are recorded when they leave the foreground route and are not a declared product output. Their fate remains part of the evidence record.

- Selected flow: Rice paddy or plant-material loss from harvest and farm-gate delivery
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass by operation and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

##### Elementary flows

###### Harvest-operation emission coverage (`harvest_operation_emission_coverage`)

Add harvest-operation emissions only when the selected method, measured energy carrier, and refined elementary-flow identity support them. Use only a verified elementary-flow UUID for the emitted exchange.

- Selected flow: Direct harvest or field-to-gate emission identified by the selected method
- Amount rule: method-specific calculation from measured energy and operation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg rice paddy at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-afolu`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | separable field, harvest, and handoff operations | Subdivide independently measured operations and assign their direct inputs and outputs to the relevant product or fate before applying allocation. | `iso-14044-2006` |
| `allocation_removed_residue` | removed straw and other declared co-products | Treat removed straw or another material as a co-product only when it crosses the boundary with a declared use and destination. Allocate shared burdens only after measured product and residue quantities and their common moisture basis are reconciled. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_shared_crop_burdens` | paddy and co-products from a common crop route | When subdivision is not possible, document the selected physical or economic allocation basis, the evidence for that basis, and a sensitivity case where the choice can affect interpretation. Do not allocate burdens to material that remains on the field unless the selected method explicitly requires such treatment. | `iso-14044-2006` |

If straw or other residue is left on the field, record the field-management practice and any direct emissions or soil inputs required by the selected method, but do not create an exported co-product exchange. Husking, milling, drying, cleaning, and downstream conversion are not co-product handling within this default PCR boundary.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `rice_paddy_crop_production` | seed for sowing | field and supplier record | seed identity; variety or hybrid; lot; treatment; sowing method; mass or count; field; date | retain invoice, lot record, field log, and transparent count-to-mass conversion where used | kg or item with kg conversion | each sowing event | declared crop cycle | each field or crop lot | sum by field and crop cycle; preserve lot traceability | lot document, field log, conversion evidence |
| `cp_nutrient_records` | `rice_paddy_crop_production` | mineral and organic nutrient inputs | application and supplier record | product; nutrient content; mass; application date; field; method; source | reconcile invoices, application logs, and nutrient declarations | kg product and kg nutrient | each application | declared crop cycle | each field or crop lot | aggregate by nutrient and crop cycle; do not merge products with different identities | invoice, label or supplier declaration, application log |
| `cp_crop_protection_records` | `rice_paddy_crop_production` | crop-protection material | application and supplier record | product or active ingredient; formulation; mass; application date; field; target | reconcile purchase, application, and product-identity records | kg product or kg active ingredient | each application | declared crop cycle | each field or crop lot | aggregate by product identity and active-ingredient basis | label, invoice, application log |
| `cp_irrigation_records` | `rice_paddy_crop_production` | irrigation, withdrawal, pumping, and drainage | meter or calculated water record | source; withdrawal; delivery; rainfall or other input; drainage; consumption; field; date; pump energy | meter reading or transparent water-balance calculation | m3 or kg; energy in kWh or MJ | each event or meter period | declared crop cycle | each field and water source | keep withdrawal, delivery, consumption, drainage, and energy separate | meter record, pump log, water-balance check |
| `cp_field_energy_records` | `rice_paddy_crop_production` | field and pumping energy | fuel, electricity, machine, or supplier record | carrier; quantity; operation; machine; field; date; conversion factor | retain fuel, electricity, machine-hour, and supplier records with conversion basis | L, kg, kWh, MJ, or machine-hour | each operation or billing period | declared crop cycle | field, machine, and operation | aggregate by carrier and operation before normalization | meter, invoice, machine log, conversion evidence |
| `cp_land_and_output_records` | `rice_paddy_crop_production` | land and crop output | field register and harvest record | area; tenure or land-use status; crop duration; variety; crop year; harvested mass; moisture; field | reconcile field register, maps, harvest tickets, and measured moisture | ha, ha year, kg, and percent | each field and crop cycle | crop cycle and crop year | each field | aggregate fields only after retaining field-level identifiers and common moisture basis | field map or register, harvest record, moisture test |
| `cp_harvest_and_output_records` | `rice_paddy_harvest_and_gate_delivery` | harvested paddy, gate output, energy, and handling | harvest, weighbridge, and route record | harvest method; lot; received mass; output mass; moisture; operation; distance; mode; gate; date | reconcile field harvest, weighbridge, transport, and farm-gate records | kg, percent, kg km or declared service unit, and energy unit | each harvest lot or handoff | crop year and reporting period | field, farm, and declared gate | preserve lot identity; reconcile input, reference output, co-products, and losses on a common moisture basis | weighbridge ticket, moisture test, route log, energy record |
| `cp_residue_and_fate_records` | both foreground processes | straw, residues, losses, and fates | residue and loss record | material identity; amount; moisture; stage; boundary crossing; destination; use; treatment; fate | measure or document each exported, returned, treated, or unrecoverable stream | kg and percent | each lot or event | crop cycle and reporting period | field, harvest operation, and receiving gate | separate exported co-products, field-retained residues, losses, and waste routes | destination record, receiving record, mass-balance check |
| `cp_emission_records` | both foreground processes | direct field and operation emissions | method-input and calculation record | method; water regime; soil; nutrient input; residue; crop duration; energy; emission identity; factor version | calculate only from selected method and collected inputs; retain factor and method evidence | kg substance or method-defined unit | each crop cycle or operation | crop year and reporting period | field, operation, and technology | calculate by field or route then normalize to reference output | method selection, input reconciliation, calculation file |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Normalize each collected or calculated amount by net kg of fixed reference paddy at the declared farm gate; retain the unnormalized record. | row amount; net farm-gate paddy output | normalized row amount per reference flow | `mass-balance-identity` |
| `calc_moisture_reconciliation` | paddy, straw, losses, and residues | Convert compared masses to one declared moisture basis using the measured moisture results; retain as-is mass and the conversion expression. | as-is mass; measured moisture; selected basis | common-basis mass and reconciliation difference | `mass-balance-identity`; `fao-rice-postharvest` |
| `calc_nutrient_basis` | nutrient inputs and nitrogen emissions | Derive nutrient input quantities from product mass and declared nutrient content before applying the selected emissions method. | product mass; nutrient declaration; selected nutrient basis | nutrient input by field and crop cycle | `ipcc-2019-afolu` |
| `calc_water_separation` | irrigation and water resources | Keep source withdrawal, delivered irrigation, drainage, and consumption as separate records; do not derive one from another without a documented water-balance method. | meter or water-balance records | separated water exchanges by source and use | `irri-rice-water-management` |
| `calc_direct_emissions` | direct methane, nitrous oxide, and any additional emissions | Apply the selected IPCC-compatible method using declared water regime, soil, nutrient, residue, crop-cycle, and energy inputs; retain method and factor evidence. | collected method inputs; selected factor and version | calculated elementary emissions with verified identity | `ipcc-2019-afolu` |
| `calc_allocation` | paddy and removed co-products | Use subdivision where records support it; otherwise apply the declared physical or economic allocation basis after common-basis mass reconciliation and document sensitivity. | process burdens; paddy output; co-product output; allocation basis | allocated inventory values | `iso-14044-2006`; `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference and inventory flows | Confirm product state, flow type, direction, geography, provider or source, property, unit, and required qualifiers; resolve parameterized rows to concrete UUIDs before exchange publication. | verified flow or Flow Set resolution record |
| `quality_measurement` | quantities and moisture | Retain instrument, weighbridge, meter, laboratory, supplier, or transparent calculation evidence; preserve as-is values and conversions. | primary record, test result, meter record, or calculation file |
| `quality_temporal_coverage` | crop, energy, water, emissions, and output records | State crop year or season, reporting period, and any multi-period aggregation; do not mix crop cycles without an aggregation rule. | field register, invoices, meter periods, method record |
| `quality_completeness` | all boundary inputs and outputs | Address required inputs, direct emissions, reference output, co-products, losses, and residue fates with a value, justified zero, or documented exclusion. | completeness checklist and mass-balance reconciliation |
| `quality_disclosure` | dataset metadata and process notes | Disclose variety or hybrid where material, seed source, water regime, nutrient basis, crop-protection basis, harvest method, moisture basis, farm gate, intended use, allocation, and coverage finding. | dataset metadata, process notes, and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow and farm-gate output | Require the fixed paddy UUID, mass property, kg unit, and required qualifiers when the declared state matches the verified farm-gate identity; reject husked, milled, broken, or seed-for-sowing substitutions. | `unsd-cpc-rice-01132` |
| `validate_boundary_qualifiers` | dataset metadata and gate | Check declared non-seed use, not-husked state, farm gate, crop year or season, geography, moisture basis, production system, and water regime. | `unsd-cpc-rice-01132`; `fao-rice-postharvest` |
| `validate_mass_balance` | paddy, co-products, losses, and residues | Reconcile measured input and output masses on a common moisture basis; explain any difference, boundary crossing, retained residue, or evidence gap loss. | `mass-balance-identity` |
| `validate_input_coverage` | crop and harvest processes | Require a collected value, justified zero, or documented exclusion for seed, nutrients, water, crop protection, land, energy, direct emissions, and gate operations. | `irri-rice-production-knowledge-bank`; `irri-rice-water-management` |
| `validate_emission_method` | direct emissions | Require a selected method, method inputs, factor evidence, and an identity-compatible verified elementary-flow UUID; do not publish evidence gap emission rows as fixed exchanges. | `ipcc-2019-afolu` |
| `validate_co_product_fate` | straw, residue, and other non-reference outputs | Require measured amount, moisture basis, destination, use or treatment, and allocation decision for each boundary-crossing co-product; do not treat field-retained residue as an exported product. | `fao-rice-postharvest`; `iso-14044-2006` |
| `validate_flow_binding` | every inventory row | Accept only `fixed` for an exact verified UUID or `parameterized` for an applicable existing Flow Set; otherwise retain unmapped coverage and do not force a product-output match. | `mass-balance-identity` |

Validation output must distinguish accepted input, checks performed, checks skipped, findings, and completeness. An identity evidence gap or inconclusive check remains a finding for review and is not silently converted into a zero amount.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural product dataset for non-seed, not-husked rice paddy at a declared farm gate |
| downstream_use | secondary_dataset for downstream husking, milling, food, feed, or other declared rice-product systems; background_dataset only when its farm-gate metadata and quality disclosure are preserved |
| allowed_use | modelling non-seed rice paddy production and farm-gate handoff with declared crop cycle, geography, moisture basis, production system, water regime, and output fate |
| excluded_use | rice seed for sowing; husked, milled, broken, or processed rice; post-farm-gate drying, storage, distribution, food or feed manufacture; datasets missing gate or moisture qualifiers |
| required_metadata | fixed product UUID; reference property and unit group; variety or hybrid where material; seed source; crop year or season; geography; farm gate; production system; water regime; moisture basis; intended downstream use; input and output fates; allocation; method and factor references |
| required_quality_disclosure | temporal, geographical, technological, completeness, measurement, moisture, identity, allocation, direct-emission method, and evidence gap-coverage disclosures |
| update_trigger | change in product identity, classification scope, farm-gate definition, rice production route, emission method, Flow Set contract, required qualifiers, or material evidence for quantities and output fates |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-rice-01132` | official_guidance | UNSD CPC classification detail for rice paddy, other (not husked): https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/01132 | product inclusions, exclusions, and classification boundary |
| `irri-rice-production-knowledge-bank` | extension_guidance | IRRI Rice Knowledge Bank step-by-step production: https://www.knowledgebank.irri.org/step-by-step-production | crop-establishment, nutrient, crop-protection, harvest, and production-process completeness |
| `irri-rice-water-management` | extension_guidance | IRRI Rice Knowledge Bank water management: https://www.knowledgebank.irri.org/step-by-step-production/growth/water-management | irrigation, water-regime, field-water, and water-record requirements |
| `fao-rice-postharvest` | handbook | FAO Rice: Post-harvest Operations: https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_RICE.pdf | harvest, threshing, paddy state, moisture, post-harvest boundary, losses, and residue handling |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 AFOLU: https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | direct methane and nitrogen-emission method selection and input requirements |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines: https://www.iso.org/standard/38498.html | subdivision, allocation, sensitivity, and validation principles |
| `mass-balance-identity` | method_factor | Foreground mass-balance reconciliation method for common moisture basis and declared output fates | paddy, co-product, residue, loss, and normalization calculations |
