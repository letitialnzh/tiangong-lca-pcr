---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruit-bearing-vegetables
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other fruit-bearing vegetables

## 1. Scope and Applicability

This PCR covers production of fresh, whole, unprocessed fruit-bearing vegetables that are classified in CPC 3.0:01239, from field or protected-cultivation establishment through managed production, harvest, optional primary conditioning, and farm-gate hand-off. The category is a residual classification leaf: the declared species, cultivar, route, production geography, crop cycle, and market state must be recorded for every dataset. Open-field and protected cultivation are both eligible when their route-specific inputs and boundary are documented.

The PCR excludes chillies and green peppers (01231), cucumbers and gherkins (01232), eggplants (01233), tomatoes (01234), pumpkins, squash and gourds (01235), all other CPC leaves, seed or transplant production for sale as planting material, processed or cut products, preservation, distribution after farm-gate transfer, retail, and consumption. A product is not moved into this residual category merely to avoid a more specific CPC classification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruit-bearing-vegetables |
| classification_refs | CPC 3.0:01239 Other fruit-bearing vegetables |
| covered_products | Fresh, whole, unprocessed fruit-bearing vegetables assigned to CPC 01239, including comparable species not represented by the named CPC 01231–01235 leaves |
| excluded_products | CPC 01231–01235 products; seeds or transplants sold as planting material; processed, cut, preserved, dried, frozen, juiced, or packaged products whose processing occurs after the farm-gate boundary |
| representative_product | Marketable fresh whole fruit-bearing vegetable of the declared species or cultivar, graded for the declared market and transferred at the farm gate |
| production_route | Declared open-field or protected-cultivation route, including establishment, managed fruiting-vegetable production, harvest, optional washing or primary conditioning, and farm-gate hand-off |
| market_state | Fresh whole produce at farm gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole other fruit-bearing vegetable at farm gate |
| How much | 1,000 kg |
| How well | Whole, fresh, unprocessed produce of the declared species or cultivar, meeting the declared maturity, appearance, defect, size, grade, and food-safety criteria |
| How long or cycle | One declared production cycle from planting or transplanting through the final harvest included in the dataset, with production year and harvest window reported |
| reference_flow_link | `other_fruit_bearing_vegetable_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other fruit-bearing vegetables; production mix, at farm gate; fresh, unprocessed `64f7d837-21f3-4a2b-ab05-94d62be3ab7f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared species and cultivar; CPC 01239 classification basis; production geography; production year and crop-cycle dates; open-field or protected route; irrigated or rainfed route; maturity and harvest window; size and market-grade criteria; whole or damaged state; washed or unwashed state; primary packaging state; destination of off-grade product and crop residues |
| Binding | fixed |

The reference product identity is platform-verified against the CPC 3.0 product flow for this category; the selected UUID is retained without a dataset version. The mass flow property and mass unit group are the stable support objects for this reference flow.

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | marketable farm-gate product | Mass | kg | Keep gross harvested product, marketable product, downgraded product, rejects, and crop residues separate before normalizing to 1,000 kg marketable output. |
| `species_route_separation` | mixed species, cultivars, sites, or routes | Mass and area | kg and ha | Record each declared species or cultivar, production site, route, and crop cycle separately; aggregate only after applying the declared allocation basis. |
| `nutrient_basis` | mineral and organic nutrient inputs | Mass of product and nutrient | kg product, kg N, kg P2O5, or kg K2O | Record the supplied product and the declared nutrient basis. Convert product mass to nutrient mass only from documented composition; do not count one compound product more than once. |
| `water_basis` | irrigation and conditioning water | Volume | m3 | Record irrigation delivery and conditioning water separately. Keep rainfall and water-resource withdrawal distinct from purchased or delivered water. |
| `energy_basis` | field, harvest, and conditioning energy | Mass, energy, or service | kg fuel, kWh, or service unit | Record each energy carrier or machinery service with its meter, receipt, or service record. Do not infer electricity or fuel from area unless the calculation method and source are disclosed. |
| `moisture_and_grade` | harvested and farm-gate output | Mass and product state | kg and declared moisture basis | Report the moisture, maturity, grade, and state at farm-gate hand-off. Do not normalize water removed during washing or conditioning as product output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field or declared protected-cultivation site receiving seed or transplants, with prior land use, infrastructure status, and pre-plant operations disclosed |
| starting_condition_role | Beginning of the declared species- and route-specific crop cycle |
| product_classification_scope | Fresh whole fruit-bearing vegetables classified under CPC 3.0:01239 through farm-gate hand-off |
| recursive_input_rule | Purchased seed or transplants are upstream planting-material inputs and are linked once. A product-category output is not recreated as an internal production process merely because a nursery or propagator supplied it. |
| upstream_dataset_requirement | Require compatible upstream datasets for planting material, fertilizers or amendments, crop-protection products, irrigation or purchased water, energy and machinery services, packaging, and treatment services when used. |
| disclosure | Declare species and cultivar, site and route, prior land use, crop-cycle dates, irrigation regime, nutrient products and nutrient basis, crop-protection program, protected-cultivation infrastructure if applicable, field-emission method, residue and reject destinations, harvest and conditioning operations, packaging, and farm-gate hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_crop_cycle` | establishment through final harvest | Include field or protected-site establishment, planting or transplanting, crop management, and every harvest belonging to the declared species-, site-, and year-specific crop cycle. | `fao-good-agricultural-practices`; `fao-crop-production-records` |
| `boundary_farm_gate` | harvest and conditioning | End the foreground boundary when the marketable whole product is transferred at the declared farm-gate hand-off. Include on-farm grading, washing, cooling, and primary packaging only when they occur before that hand-off. | `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce` |
| `boundary_protected_route` | greenhouse, tunnel, or other protected cultivation | Include route-specific energy, water, consumables, and infrastructure services that are assigned to the declared crop cycle. Disclose infrastructure lifetime and allocation when the infrastructure is shared. | `fao-protected-cultivation-guidance` |
| `boundary_managed_soils` | nutrient, amendment, residue, and soil flows | Include direct and indirect managed-soil emissions attributable to applied nutrients and returned residues under one declared method. Do not double count emissions already represented by an upstream dataset. | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `boundary_residue_and_reject_fate` | off-grade product, rejects, residues, wastewater, and packaging waste | Record the first declared destination of every non-marketable stream: field return, feed, composting, treatment, disposal, or another documented use. An unreported destination is a data-quality gap and is not an automatic co-product. | `fao-postharvest-handling-vegetables`; `fao-crop-residue-management` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_or_site_establishment` | Field or protected-site establishment and planting | required | once for each declared site, species, route, and crop cycle | foreground establishment | planted area and planting-material quantity |
| `managed_fruiting_vegetable_production` | Managed fruiting-vegetable production | required | throughout the declared crop cycle | foreground managed biological production | field- or site-cycle records and marketable output |
| `harvest_conditioning_and_farm_gate` | Harvest, conditioning, and farm-gate hand-off | required | for each harvest and the final farm-gate transfer | foreground harvest, grading, optional conditioning, and hand-off | 1,000 kg marketable farm-gate product |

### Process: Field or protected-site establishment and planting (`field_or_site_establishment`)

#### Inputs

##### Product flows

###### Seed or transplant planting material (`planting_material_input`)

Seed or transplants enter the declared field or protected site as planting material. Record the species, cultivar, supplier state, quantity, and field or site destination; keep planting-material production upstream of this PCR boundary.

- Selected flow: Seed or transplant planting material of the declared species or cultivar
- Flow property / unit: Number of items or mass / seed units, plants, or kg
- Amount rule: Record supplier quantity by species, cultivar, site, and crop cycle; convert count to mass only when a documented supplier conversion is available.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare or protected-site cycle and per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg seed or 1,000 transplants/ha
  - Basis: broad first-pass crop-establishment screen pending species- and supplier-specific records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and site establishment fuel or machinery service (`establishment_energy`)

Fuel, electricity, or a contracted machinery service used for soil preparation, beds, protected-site preparation, mulch installation, or planting crosses the foreground boundary when it is controlled by the reporting operator or purchased as a service.

- Selected flow: Field or protected-site establishment fuel, electricity, or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or hectare-service
- Amount rule: Use fuel receipts, machinery logs, meter readings, or supplier service records by site and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare or protected-site cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_energy_records`
- Sources: `fao-crop-production-records`
- Range: Establishment-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg fuel or kWh/1,000 kg marketable output
  - Basis: broad first-pass establishment-energy screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied agricultural or protected-cultivation area (`field_or_site_occupation`)

Record the land or site area and occupation duration for the declared crop cycle. Ordinary occupation is an elementary input; it is not a product flow.

- Selected flow: Agricultural or protected-cultivation land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Multiply declared area by the occupation duration and normalize to marketable farm-gate output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_and_cycle_records`
- Range: Area-occupation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12,000
  - Unit: m2*a/1,000 kg marketable output
  - Basis: broad annual crop-cycle area and duration screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Established planted or protected crop site (`established_site_output`)

This internal hand-off records the accepted planted area or protected site entering managed production. It is not the reference product and is not reported as a marketable output.

- Selected flow: Established planted or protected crop site
- Flow property / unit: Area / ha
- Amount rule: Accepted planted or occupied area after establishment losses are recorded.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_and_cycle_records`

##### Waste flows

##### Elementary flows

### Process: Managed fruiting-vegetable production (`managed_fruiting_vegetable_production`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`managed_fruiting_vegetable_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `fao-good-agricultural-practices`
- Range: Nitrogen-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg N/1,000 kg marketable output
  - Basis: broad first-pass nutrient screen; zero is valid when no nitrogen product is applied and documented
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg P2O5/1,000 kg marketable output
  - Basis: broad first-pass nutrient screen; zero is valid when no phosphorus product is applied and documented
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: kg K2O/1,000 kg marketable output
  - Basis: broad first-pass nutrient screen; zero is valid when no potassium product is applied and documented
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic-amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg product/1,000 kg marketable output
  - Basis: broad first-pass amendment screen; zero is valid when no organic amendment is applied and documented
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Delivered irrigation water is recorded when the crop is irrigated. Rainfall is reported as a route qualifier or water-balance input and is not substituted for metered or documented irrigation delivery.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Use meter records, irrigation schedules with verified delivery, or supplier records by field or protected site and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-good-agricultural-practices`
- Range: Irrigation-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: m3/1,000 kg marketable output
  - Basis: broad first-pass irrigated and rainfed production screen; zero is valid only with a documented rainfed route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product (`crop_protection_input`)

Record the active substance or formulated crop-protection product used for the declared crop cycle, including application timing and treated area. Product identity remains a foreground resolution requirement because the broad CPC category spans multiple species.

- Selected flow: Crop-protection product or active substance used in the declared route
- Flow property / unit: Mass of product or active substance / kg
- Amount rule: Record product name, active substance, formulation, applied mass or volume, concentration, application date, and treated area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg formulated product/1,000 kg marketable output
  - Basis: broad first-pass crop-protection screen; zero is valid when no product is used and documented
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Irrigation source withdrawal (`irrigation_source_withdrawal`)

When the foreground package models the removal of water from a natural source, record that withdrawal separately from delivered irrigation water and disclose return flows or losses.

- Selected flow: Water resource withdrawal for irrigation
- Flow property / unit: Volume / m3
- Amount rule: Calculate from source meter or documented delivery and the declared conveyance or application loss method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Range: Natural-water withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: m3/1,000 kg marketable output
  - Basis: broad first-pass source-withdrawal screen; zero is valid where no natural-source withdrawal occurs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Managed crop stand transferred to harvest (`managed_crop_output`)

This internal hand-off transfers the declared crop stand and developing fruit-bearing output to harvest. It is not a second marketable output and must not be included in the reference amount.

- Selected flow: Managed crop stand and developing fruit-bearing output
- Flow property / unit: Mass or site record / kg or declared site unit
- Amount rule: Record the managed crop cycle and hand-off event; use harvested and farm-gate mass records for final normalization.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_and_cycle_records`

##### Waste flows

###### Field losses and uncollected fruit (`field_loss_output`)

Fruit or biomass that remains in the field or is lost before harvest is recorded when it is material to the mass balance. Its destination or fate must be declared.

- Selected flow: Uncollected fruit or field biomass loss
- Flow property / unit: Mass / kg
- Amount rule: Reconcile field loss with harvested product, residues, and observed crop-cycle records; state whether the loss remains in field or is removed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_residue_records`
- Range: Field-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass field-loss screen pending crop-specific records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_nitrous_oxide_emission`)

Report direct soil nitrous oxide attributable to nutrient and residue inputs using the declared calculation method and nutrient basis. The substance, method, and emission-factor basis must be retained in dataset metadata.

- Selected flow: Nitrous oxide to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate with the declared IPCC-compatible or approved site method from applied nutrient and residue records; do not combine direct and indirect emissions in this row.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_residue_records`
- Sources: `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture`
- Range: Direct-N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg N2O/1,000 kg marketable output
  - Basis: broad screening interval for managed-soil direct emissions pending the declared factor method
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture`

###### Ammonia to air from managed soil (`ammonia_emission`)

Record ammonia emissions attributable to nutrient applications when the selected method requires them. The applied product, nutrient form, placement, and method must be disclosed.

- Selected flow: Ammonia to air from managed agricultural soil
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate from documented nutrient applications and the declared emission-factor method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_residue_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg NH3/1,000 kg marketable output
  - Basis: broad screening interval pending nutrient-form and method-specific evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-refinement-managed-soils`

###### Nitrate loss to water (`nitrate_water_emission`)

Record nitrate leaving the managed soil system to water when the site method or monitoring record represents this pathway. Do not infer nitrate loss from fertilizer product mass alone without the declared calculation method.

- Selected flow: Nitrate to water from the managed production system
- Flow property / unit: Mass / kg nitrate
- Amount rule: Use measured drainage or a documented nutrient-loss model and identify the receiving water compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_residue_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg nitrate/1,000 kg marketable output
  - Basis: broad screening interval pending drainage, soil, and nutrient-loss evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate loss to water (`phosphate_water_emission`)

Record phosphate leaving the managed production system to water when monitoring or an approved site method represents this pathway.

- Selected flow: Phosphate to water from the managed production system
- Flow property / unit: Mass / kg phosphate
- Amount rule: Use measured drainage or a documented soil and nutrient-loss model; state whether the reported basis is phosphate or elemental phosphorus.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_residue_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Phosphate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg phosphate/1,000 kg marketable output
  - Basis: broad screening interval pending drainage, soil, and nutrient-loss evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, conditioning, and farm-gate hand-off (`harvest_conditioning_and_farm_gate`)

#### Inputs

##### Product flows

###### Harvest fuel or machinery service (`harvest_energy`)

Harvesting, collection, in-field movement, and loading energy or machinery service is included when it occurs before the declared farm-gate hand-off.

- Selected flow: Harvest fuel, electricity, or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or tonne-service
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Record fuel, electricity, or contracted service by harvest event and normalize to marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Harvest-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg fuel/1,000 kg marketable output
  - Basis: broad harvest and in-field handling screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road freight service (`pre_gate_transport_service`)

On-farm or contracted road movement before the declared farm-gate hand-off is included only when it is part of the foreground route. Post-gate distribution is excluded.

- Selected flow: Road freight service before farm-gate hand-off
- Flow property / unit: Transport service / tonne-km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Calculate from loaded mass, distance, and declared vehicle or service record; exclude distribution after the farm gate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pregate_transport_records`
- Range: Pre-gate transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: tonne-km/1,000 kg marketable output
  - Basis: broad on-farm and pre-gate transport screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning and washing water (`conditioning_water`)

Water used for washing, rinsing, or other primary conditioning is included only when it occurs before farm-gate transfer. The conditioning purpose and destination of used water must be recorded.

- Selected flow: Process water for washing or primary conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Use meter, batch, or service records for each conditioning event and distinguish fresh, reused, and discharged water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- Range: Conditioning-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/1,000 kg marketable output
  - Basis: broad first-pass washing and primary-conditioning screen; zero is valid for unwashed hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity`)

Electricity for pumps, washing equipment, sorting, cooling, or other primary conditioning is included when the equipment is operated before farm-gate transfer.

- Selected flow: Electricity for pre-gate conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use meter or equipment records by conditioning batch; allocate shared equipment by mass or operating time with the declared basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kWh/1,000 kg marketable output
  - Basis: broad first-pass sorting, pumping, and optional cooling screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`flexible_primary_packaging`)

Flexible film, bags, wraps, or similar primary packaging are included only when supplied before farm-gate transfer. The material, mass, reuse status, and packaging loss must be reported.

- Selected flow: Flexible primary packaging material
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Record packaging mass by material and batch, including reusable cycles and losses, then normalize to marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Flexible-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass primary-packaging screen; zero is valid for loose farm-gate hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rigid container or crate packaging (`rigid_primary_packaging`)

Rigid containers supplied before the farm gate are recorded by material, mass, number of reuse cycles, and loss. They are not combined with flexible packaging in the same row when the material or reuse basis differs.

- Selected flow: Rigid container primary packaging
- Flow property / unit: Mass or count / kg or containers
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Record container mass, number, material, and reuse cycles; apply the declared allocation over service cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Rigid-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass crate and container screen after reuse allocation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable farm-gate product (`marketable_farm_gate_output`)

This is the single reference product output. Report the declared species or cultivar, whole-product state, maturity, grade, moisture basis, packaging state, and farm-gate hand-off with the mass.

- Selected flow: Marketable fresh whole other fruit-bearing vegetable at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Normalize the dataset to 1,000 kg of marketable product transferred at the declared farm-gate hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_grade_records`
- Sources: `codex-cxc-53-2003-fresh-produce`
- Range: Marketable-yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg/1,000 kg marketable output
  - Basis: declared reference amount at farm-gate hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)
  - Collection protocol: `cp_harvest_and_grade_records`

###### Off-grade or downgraded product (`off_grade_product_output`)

Off-grade product remains a product stream only when it has a declared destination such as local sale, feed, processing, or another use. Product that has no use and is discarded is recorded as a waste or loss according to the destination.

- Selected flow: Off-grade or downgraded fruit-bearing vegetable product
- Flow property / unit: Mass / kg
- Amount rule: Weigh or calculate each grade and destination after harvest; reconcile the total with harvested and marketable product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_grade_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Off-grade-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass grade and destination screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop residues and discarded biomass (`crop_residue_output`)

Stems, leaves, roots, unmarketable fruit, and other crop biomass leaving or remaining at the farm-gate preparation boundary are recorded by destination. Field return, composting, feed, treatment, and disposal are distinct fates.

- Selected flow: Crop residue or discarded biomass from the declared crop cycle
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Record measured or calculated residue mass, moisture basis, and first destination; do not treat field return as a marketable product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_residue_records`
- Sources: `fao-crop-residue-management`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: kg fresh biomass/1,000 kg marketable output
  - Basis: broad first-pass harvest-residue and field-residue screen pending species- and moisture-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater_output`)

Used water from washing or primary conditioning is recorded when it leaves the declared boundary. Report the volume, treatment or discharge destination, and any embedded product or sediment load separately.

- Selected flow: Wastewater from pre-gate washing or conditioning
- Flow property / unit: Volume / m3
- Amount rule: Reconcile discharged volume with conditioning-water input, reuse, evaporation, and retained product water under the declared water-balance method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Conditioning-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/1,000 kg marketable output
  - Basis: broad first-pass pre-gate conditioning-water balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste and rejected packaging (`packaging_waste_output`)

Packaging offcuts, damaged containers, and rejected packaging are recorded when they leave the foreground boundary. Reusable packaging is separated from single-use waste and allocated over documented service cycles.

- Selected flow: Packaging waste or rejected packaging from pre-gate preparation
- Flow property / unit: Mass / kg
- Amount rule: Record material, mass, reuse status, and destination for packaging losses and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Packaging-waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass packaging-loss screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Energy-related carbon dioxide (`energy_carbon_dioxide_emission`)

Record carbon dioxide from fuel or electricity used before farm-gate transfer when it is represented as a foreground elementary output. Avoid double counting where the selected upstream energy dataset already includes the emission.

- Selected flow: Carbon dioxide to air from pre-gate energy use
- Flow property / unit: Mass / kg CO2
- Amount rule: Calculate from recorded energy carriers and declared emission factors, keeping biogenic and fossil carbon bases distinct where relevant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_emission_records`
- Sources: `ipcc-2006-guidelines-agriculture`
- Range: Energy-CO2 screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg CO2/1,000 kg marketable output
  - Basis: broad pre-gate energy-emission screen pending carrier-specific records and factors
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2006-guidelines-agriculture`

###### Pre-gate particulate matter (`pregate_particulate_emission`)

Report particulate matter from combustion or material handling only when the selected method or site record requires it. State the particle-size basis and receiving medium in the foreground package.

- Selected flow: Particulate matter to air from pre-gate operations
- Flow property / unit: Mass / kg particulate matter
- Amount rule: Use carrier- and equipment-specific emission factors or measured records; retain particle-size and source information.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_emission_records`
- Sources: `ipcc-2006-guidelines-agriculture`
- Range: Particulate-emission screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg particulate matter/1,000 kg marketable output
  - Basis: broad pre-gate combustion and handling screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_same_species_and_route` | multiple fields, sites, cultivars, or protected routes | Keep records separate through normalization. If aggregation is necessary, allocate shared inputs and infrastructure by marketable mass unless a more representative physical relationship is documented. | `fao-crop-production-records` |
| `allocation_marketable_and_off_grade` | marketable and declared off-grade product streams | Use mass allocation when off-grade material has a declared product destination. If off-grade material is discarded or returned to soil, model its destination and do not allocate it as a marketable co-product. | `fao-postharvest-handling-vegetables` |
| `allocation_reusable_packaging` | reusable crates and containers | Allocate packaging production and replacement over documented service cycles and assign losses to the relevant route. A single-use packaging record is not spread over undocumented cycles. | `fao-postharvest-handling-vegetables` |
| `allocation_shared_protected_infrastructure` | shared greenhouse, tunnel, irrigation, cooling, or conditioning equipment | Allocate shared infrastructure and energy by documented occupied area, operating time, throughput, or mass. State the selected basis and avoid assigning all shared burden to one crop without evidence. | `fao-protected-cultivation-guidance` |
| `allocation_residue_destination` | residues and rejects with different destinations | Preserve destination-specific rows. Field return, composting, feed, treatment, and disposal are separate pathways and are not interchangeable co-products. | `fao-crop-residue-management` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_and_cycle_records` | `field_or_site_establishment`; `managed_fruiting_vegetable_production` | site, species, route, and crop cycle | field or protected-site register | species; cultivar; site; area; route; planting and harvest dates; prior land use | operator register and site map | ha and date | each site and cycle | complete declared crop cycle | declared field or protected site | retain site-cycle rows; aggregate only after review | signed field record, map, and date reconciliation |
| `cp_planting_material_records` | `field_or_site_establishment` | `planting_material_input` | purchase and planting record | supplier; species; cultivar; seed or transplant state; quantity; lot; destination | invoice, supplier label, and planting log | seed units, plants, or kg | each planting event | planting period | site and field | sum by species, cultivar, and cycle | invoice-to-log reconciliation |
| `cp_establishment_energy_records` | `field_or_site_establishment` | `establishment_energy` | fuel, meter, or service record | carrier; quantity; equipment or service; date; field or site; operating hours | receipts, meter readings, and machinery logs | kg, L, kWh, or service unit | each operation | establishment period | site and operation | allocate shared operation by documented area or time | receipt, meter, or service evidence |
| `cp_nutrient_input_records` | `managed_fruiting_vegetable_production` | nutrient input cards | input application record | product; supplier; product mass; nutrient composition; application date; placement; area | invoice, label, application log, and nutrient analysis | kg product and kg nutrient | each application | complete crop cycle | field or protected site | retain product and nutrient bases without double counting | label, invoice, and application record |
| `cp_irrigation_records` | `managed_fruiting_vegetable_production` | irrigation and withdrawal | water-use record | source; meter; delivery; date; field; conveyance; return or loss | meter data and verified schedule | m3 | daily, batch, or billing period | complete crop cycle | field or site | reconcile source withdrawal, delivered water, reuse, and discharge | meter calibration and water balance |
| `cp_crop_protection_records` | `managed_fruiting_vegetable_production` | `crop_protection_input` | treatment log | product; active substance; formulation; concentration; rate; area; date; weather | operator log and product label | kg, L, and ha | each treatment | complete crop cycle | field or site | sum by active substance and product state | label, invoice, and treatment log |
| `cp_nutrient_and_residue_records` | `managed_fruiting_vegetable_production` | soil emissions, field losses, residues | nutrient and residue balance | nutrient inputs; residue mass; moisture; fate; soil or drainage evidence | balance worksheet and measurement or model | kg fresh/dry matter and kg nutrient | each cycle, with events | complete crop cycle | field or site | reconcile applied inputs, crop uptake, losses, and residue fates | method version, measured data, and review sign-off |
| `cp_harvest_energy_records` | `harvest_conditioning_and_farm_gate` | `harvest_energy` | harvest and loading record | harvest date; equipment; carrier; quantity; operating time; harvested mass | receipts, meter readings, and harvest log | kg, L, kWh, or service unit | each harvest | harvest window | field, site, and harvest event | allocate to product and destinations by harvested mass | harvest log and energy record |
| `cp_harvest_and_grade_records` | `harvest_conditioning_and_farm_gate` | marketable and off-grade output | weighbridge, scale, or grade record | harvested mass; marketable mass; grade; reject; destination; moisture; hand-off date | calibrated scale and grade register | kg | each harvest and hand-off | harvest window | site and destination | reconcile harvested mass with all grade and loss rows | scale check, grade register, and delivery record |
| `cp_conditioning_records` | `harvest_conditioning_and_farm_gate` | conditioning water, electricity, and wastewater | batch conditioning record | batch mass; water; electricity; reuse; discharge; equipment; duration | meter, batch log, and water balance | m3, kWh, kg, and date | each batch | conditioning period | conditioning line or site | allocate shared utilities by batch mass or time | meter records and batch reconciliation |
| `cp_packaging_records` | `harvest_conditioning_and_farm_gate` | packaging and packaging waste | packaging issue and loss record | material; mass; container count; reuse cycles; batch; loss; destination | invoice, material issue record, and reuse log | kg and units | each packaging batch | pre-gate preparation period | site and packaging line | allocate reusable packaging over verified service cycles | invoice, reuse log, and loss record |
| `cp_pregate_transport_records` | `harvest_conditioning_and_farm_gate` | `pre_gate_transport_service` | movement or service record | loaded mass; distance; vehicle or service; date; origin; destination | transport log or supplier record | tonne-km | each movement | pre-gate period | site to farm-gate hand-off | sum only movements inside the declared boundary | trip log or supplier invoice |
| `cp_energy_and_emission_records` | `field_or_site_establishment`; `harvest_conditioning_and_farm_gate` | energy-related emissions | energy and factor worksheet | carrier; quantity; factor; biogenic/fossil basis; equipment; method version | measured energy and approved factor calculation | kg CO2 and kg particulate matter | each reporting period | complete declared cycle | declared route | calculate by carrier and retain factor basis | factor source, meter, and calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | `normalized amount = recorded amount / marketable farm-gate mass * 1,000 kg` | recorded amount; marketable farm-gate mass | normalized row value | `mass-balance-identity` |
| `calc_species_route_aggregation` | mixed species, cultivars, sites, or routes | Aggregate only after each row is normalized or allocate shared inputs by the declared physical basis; retain the composition table. | site-cycle rows; allocation basis | aggregated PCR value | `fao-crop-production-records` |
| `calc_nutrient_content` | N, P, K, and organic nutrient cards | `nutrient mass = product mass * documented nutrient fraction`; retain product mass and nutrient basis as separate metadata. | product mass; label or analysis | nutrient mass | `fao-good-agricultural-practices` |
| `calc_irrigation_withdrawal` | irrigation source withdrawal | Calculate source withdrawal from measured source delivery and the declared conveyance or application loss; do not replace a measured value with a generic factor. | source meter; delivered irrigation; loss method | source withdrawal | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | N2O, NH3, nitrate, and phosphate rows | Apply one declared site or IPCC-compatible method to nutrient, amendment, residue, soil, and drainage records; document direct and indirect pathways separately. | nutrient and residue records; method factors | elementary emissions | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `calc_harvest_mass_balance` | marketable, off-grade, field-loss, and residue rows | Reconcile harvested mass with marketable output, off-grade destinations, field losses, residues, and measurement tolerance; investigate unexplained residuals. | grade records; harvest weights; loss and residue records | balanced output set | `mass-balance-identity` |
| `calc_reusable_packaging` | reusable rigid packaging | Allocate packaging mass and replacement over verified service cycles and assign losses to the route where they occur. | packaging mass; verified cycles; loss record | per-cycle packaging input and waste | `fao-postharvest-handling-vegetables` |
| `calc_conditioning_water_balance` | conditioning water and wastewater | `wastewater = water input + retained or released product water - reuse - evaporation - measured retained water`, using measured values where available. | water input; reuse; discharge; balance terms | wastewater volume | `fao-postharvest-handling-vegetables` |
| `calc_energy_emissions` | energy-related CO2 and particulate matter | Multiply recorded carrier or electricity use by the declared factor and retain carrier, factor, and biogenic/fossil basis; avoid upstream double counting. | energy record; factor | elementary emissions | `ipcc-2006-guidelines-agriculture` |
| `calc_route_specific_infrastructure` | protected-cultivation infrastructure | Allocate infrastructure and shared equipment over documented service life and occupied area, operating time, throughput, or mass; disclose the chosen basis. | infrastructure record; service life; allocation basis | route-specific burden | `fao-protected-cultivation-guidance` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | reference product and all product outputs | Declare species, cultivar, CPC 01239 basis, market state, maturity, grade, and farm-gate hand-off. | product record, grade record, and dataset metadata |
| `quality_site_cycle_completeness` | all required processes | Cover the complete declared site and crop cycle, including every harvest and route-specific protected-cultivation operation. | site register, dates, harvest log, and completeness check |
| `quality_input_traceability` | planting material, nutrient, protection, water, energy, and packaging inputs | Link each material or service input to a supplier, invoice, meter, application record, or documented calculated source. | invoices, labels, meters, and operation logs |
| `quality_mass_balance` | marketable, off-grade, loss, residue, wastewater, and packaging-waste outputs | Reconcile inputs and outputs and investigate unexplained residuals before release. | scale records, balance worksheet, and review sign-off |
| `quality_nutrient_basis` | nutrient inputs and soil emissions | State product mass, nutrient basis, composition source, application timing, and emission-factor method. | label or analysis, application log, and method record |
| `quality_water_and_energy_measurement` | irrigation, withdrawal, conditioning water, electricity, and fuel | Prefer meter or receipt data; where calculated, disclose the formula, factor, uncertainty, and allocation basis. | meter calibration, receipts, and calculation worksheet |
| `quality_destination_disclosure` | off-grade product, residues, wastewater, and packaging waste | Declare the first destination and treatment or return pathway for every non-marketable stream. | delivery, treatment, compost, feed, disposal, or field-return record |
| `quality_uncertainty_and_estimates` | all rows using estimates or ranges | Label estimated or missing values, preserve the range and evidence kind, and replace provisional estimates with collected records when available. | uncertainty note, range metadata, and data-quality review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The dataset must identify one CPC 01239-compatible fresh whole product at farm gate. An identity evidence gap remains a coverage issue and cannot be silently replaced by a named fruit-bearing vegetable or a processed flow. | `mass-balance-identity` |
| `validation_required_processes` | process map and process inventory | All three required processes must be present, and every detailed process section must match one process-map id. | `fao-crop-production-records` |
| `validation_species_route_scope` | mixed category datasets | The declared species, cultivar, site, route, and cycle must be available for every aggregated row. Products covered by CPC 01231–01235 must be excluded or separately mapped. | `fao-good-agricultural-practices` |
| `validation_nutrient_non_double_counting` | nutrient inputs | A compound fertilizer or amendment must be represented once on the product basis and, when nutrient normalization is needed, once through its documented nutrient allocation. Do not sum product mass as if it were separate N, P, and K products. | `fao-good-agricultural-practices` |
| `validation_water_balance` | irrigation, withdrawal, conditioning water, and wastewater | Check delivered water, source withdrawal, reuse, evaporation, and discharge for the declared route. Rainfall cannot be used to close a metered irrigation row. | `fao-good-agricultural-practices` |
| `validation_mass_balance` | product, waste, and residue outputs | Harvested mass, marketable output, off-grade destinations, field losses, residues, and waste must reconcile within the declared measurement tolerance. | `mass-balance-identity` |
| `validation_boundary_hand_off` | farm-gate preparation and transport | Conditioning, packaging, and transport are included only when they occur before the declared farm-gate hand-off; post-gate distribution is excluded. | `fao-postharvest-handling-vegetables` |
| `validation_emission_method` | elementary emissions | Each emission row must state substance, compartment, method, factor basis, and whether the burden is already included in an upstream dataset. | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `validation_parameterized_identity_resolution` | parameterized rows and reference flow | During foreground dataset construction, resolve every parameterized row to a compatible UUID and retain its property, unit, geography, and intended-use checks. Uncovered rows remain unmapped until evidence supports a fixed identity. | `mass-balance-identity` |
| `validation_quality_disclosure` | published dataset profile | Report temporal, geographic, species, route, measurement, estimate, allocation, residue-fate, and evidence gap-identity limitations before downstream use. | `fao-good-agricultural-practices` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for fresh whole other fruit-bearing vegetables at farm gate |
| downstream_use | Can be used as a `secondary_dataset` for the declared species, route, site or geography, production year, and market state; may support a `background_dataset` only after the downstream model verifies compatibility |
| allowed_use | Farm-gate LCA of the declared CPC 01239 product, route, geography, and production cycle; comparative use only when species, grade, moisture, route, and allocation are compatible |
| excluded_use | Named CPC 01231–01235 products without reviewed equivalence; processed or post-farm-gate products; unqualified cross-species substitution; datasets with evidence gap material mass-balance or destination gaps |
| required_metadata | species and cultivar; CPC basis; geography; production year and cycle; route; area; irrigation; nutrient basis; crop-protection program; harvest and grade; moisture; residue and reject fates; conditioning; packaging; farm-gate hand-off; UUID resolution status |
| required_quality_disclosure | source and measurement method; temporal and geographic representativeness; species and route composition; estimated or missing values; nutrient, water, energy, and emission-factor basis; allocation decision; residue, wastewater, and packaging destinations; parameterized-flow UUID resolution; uncertainty and range treatment |
| update_trigger | Change in CPC interpretation, species or route scope, farm-gate state, boundary or allocation method, Flow Set taxonomy, material evidence, emission method, or a new reviewed dataset showing that the residual category needs narrower PCR treatment |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO, Good Agricultural Practices for greenhouse vegetable crops and fresh produce production, FAO guidance portal | production records, crop inputs, irrigation, nutrient and route disclosure |
| `fao-crop-production-records` | official_guidance | FAO, crop production and farm record guidance, FAO agriculture production resources | site, cycle, operation, completeness, and aggregation rules |
| `fao-protected-cultivation-guidance` | official_guidance | FAO, protected cultivation and greenhouse crop production guidance, FAO agriculture resources | protected-route energy, infrastructure, and shared-equipment allocation |
| `fao-postharvest-handling-vegetables` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables, 2004, https://www.fao.org/4/y4893e/y4893e00.htm | harvest, grading, washing, conditioning, packaging, and farm-gate boundary |
| `fao-crop-residue-management` | extension_guidance | FAO, crop-residue and sustainable soil-management resources, FAO soils portal | residue measurement and destination disclosure |
| `codex-cxc-53-2003-fresh-produce` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables (CXC 53-2003), https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | fresh-produce state, hygiene, grading, and conditioning qualifiers |
| `ipcc-2019-refinement-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil N2O, NH3, and nutrient-loss method basis |
| `ipcc-2006-guidelines-agriculture` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 4 AFOLU, https://www.ipcc-nggip.iges.or.jp/public/2006gl/ | agricultural emissions and energy-emission factor method basis |
| `mass-balance-identity` | method_factor | PCR mass-balance identity: declared product and process-output normalization rule | normalization, output reconciliation, and identity evidence gap validation |
