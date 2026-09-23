---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-for-forage-and-silage
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Maize for forage and silage

## 1. Scope and Applicability

This PCR covers managed production, harvest and loading of fresh whole-crop maize intended for forage use or later silage manufacture, ending at the farm-gate hand-off. It excludes ensiling, fermentation, storage, hay or artificial drying, baling, feed formulation, downstream transport and animal feeding. A dataset must represent an actual field-season and harvest lot; rainfed and irrigated production and materially different harvest technologies are stratified before aggregation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-for-forage-and-silage |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0191 > 01911 |
| covered_products | Fresh, unprocessed whole-crop maize harvested for forage use or subsequent silage manufacture |
| excluded_products | maize grain; sweet corn; maize seed; ensiled or fermented maize; hay or dried forage; formulated feed; cereal straw as a separate product |
| representative_product | Fresh whole-crop maize at farm gate before ensiling |
| production_route | Managed annual field production followed by cutting/chopping, loading and farm-gate hand-off; rainfed or irrigated field routes and the declared harvest technology coexist only as separately recorded strata |
| market_state | Fresh, unprocessed produce at Production mix, at farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fresh whole-crop maize for forage or later silage manufacture |
| How much | 1,000 kg fresh matter |
| How well | Declared whole-plant moisture or dry matter, hybrid/cultivar, maturity or harvest stage, foreign matter, damage and acceptance specification |
| How long or cycle | One annual crop cycle and its linked harvest lot |
| reference_flow_link | `fresh_forage_maize` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Maize for forage and silage `719047d6-29cc-4b2c-b61e-0bb407d6eeaf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Production mix, at farm gate; Fresh, unprocessed produce; geography; crop year; field/lot coverage; hybrid or cultivar; harvest stage; whole-plant moisture or dry matter basis; rainfed or irrigated route; harvest technology; accepted and alternate destinations |
| Binding | Fixed (`fixed`) |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure fresh mass at farm-gate hand-off; report representative whole-plant moisture or dry-matter fraction from the same lot. |
| `moisture_alignment` | all crop biomass hand-offs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg fresh matter; kg dry matter | Do not compare or aggregate fresh-mass records until moisture basis is declared; convert dry matter as wet mass multiplied by dry-matter fraction. |
| `area_normalization` | field and harvest records | Area | ha | Collect by field-season or harvest lot, then normalize once to accepted reference mass; preserve area-based values for audit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field at the start of the maize crop cycle, before seed and current-cycle management inputs |
| starting_condition_role | foreground entry condition; prior-crop and soil preparation burdens are included when performed for this crop and otherwise disclosed |
| product_classification_scope | CPC 3.0 `01911` |
| recursive_input_rule | If fresh forage maize of the same category re-enters this boundary, record it as an external product input with its supplying dataset and do not recursively recreate its cultivation. |
| upstream_dataset_requirement | Every purchased product or service input uses a geographically and technologically representative upstream dataset or is explicitly left unresolved for foreground selection. |
| disclosure | Declare field preparation attribution, prior crop, tillage, rainfed/irrigated route, harvest technology, moisture basis, accepted and rejected destinations and any excluded operation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | managed field production | Include crop-attributed soil preparation, sowing, nutrient and crop-protection management, irrigation, field energy, direct field emissions and standing-biomass transfer for one field-season. | `ipcc-2019-managed-soils`; `fao-crop-water-needs` |
| `boundary_harvest` | harvest node | Model cutting or chopping, loading, measured harvest losses and accepted, downgraded or discarded destinations as an independent node because its equipment, lot records, losses and hand-off differ from crop growth. | `fao-forage-maize-harvest-stage`; `mass-balance-identity` |
| `boundary_fresh_gate` | reference product | Stop at fresh unprocessed farm-gate hand-off. Exclude ensiling, fermentation, storage, drying, baling, feed manufacture, downstream transport and feeding. | `fao-forage-maize-harvest-stage` |
| `boundary_route_strata` | alternative routes | Use managed field production as the parent. Irrigation adds delivered water, pumping energy and irrigation records; rainfed production omits those exchanges. Harvest technology changes machinery energy, cutting/chopping state and loss records. Keep mutually exclusive route strata separate until weighted aggregation. | `fao-crop-water-needs`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed field production | required | one actual field-season; rainfed or irrigated stratum declared | managed annual biological production with an alternative biological route delta for irrigation, from prepared field to standing harvestable crop | ha planted and linked standing fresh biomass |
| `harvest_handoff` | Harvest and farm-gate hand-off | required | one linked harvest lot and one declared harvest technology | independent cutting/chopping, loading, destination split and fresh farm-gate hand-off with an alternative technology route delta for the selected machinery | 1,000 kg accepted fresh product |

### Process: Managed field production (`field_production`)

#### Inputs

##### Product flows

###### Maize seed for sowing (`maize_seed`)

Record purchased or retained viable maize seed that crosses into the field-production node; preserve hybrid or cultivar, treatment, germination, seed mass and planted area.

- Selected flow: Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: measured seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Provisional seed-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha crop cycle
  - Basis: seed mass per planted hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Consolidated agricultural nutrient and fertilizer supply (`nutrient_supply`)

Record every mineral fertilizer, organic fertilizer, manure, compost, lime and nutrient-bearing amendment crossing the field boundary in this single card. Preserve each product identity, mass or volume, formulation and N/P/K or other nutrient analysis without double counting.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5 and kg K2O as applicable
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measure each supplied product once and calculate nutrient contents from its analysis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional supplied-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg product/ha crop cycle
  - Basis: sum of supplied nutrient-product masses; liquid products remain separately reported in native volume
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Crop protection products (`crop_protection_inputs`)

Record actual herbicides, insecticides, fungicides and other crop-protection products applied to the field, retaining product identity, active ingredient and formulation.

- Selected flow: Crop protection products
- Flow property / unit: Mass or volume / kg or L product
- Amount rule: measured formulated product and active ingredient applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha treated in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Provisional formulated-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg or L product/ha crop cycle
  - Basis: total formulated crop-protection product per treated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Irrigation water supply (`irrigation_water`)

Record delivered irrigation water only for irrigated field strata; rainfed strata record zero and do not create an exchange.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated water delivered to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha irrigated in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Sources: `fao-crop-water-needs`
- Range: Conditional irrigation-delivery screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 8000
  - Unit: m3/ha crop cycle
  - Basis: zero for rainfed strata; upper screen corresponds to 800 mm seasonal maize crop-water need before local rainfall and efficiency adjustment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-crop-water-needs`

###### Field machinery fuel or energy supply (`field_machinery_energy`)

Record actual energy carriers used by tillage, planting, application, irrigation support and other field machinery; expand carriers from foreground records.

- Selected flow: Field machinery fuel or energy supply
- Flow property / unit: Energy / MJ or carrier-native unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured carrier purchase or machine consumption allocated to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_operations`
- Sources:
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha crop cycle
  - Basis: total carrier energy used by field machinery per planted hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Electricity for field and irrigation equipment (`field_electricity`)

Record metered electricity used by pumps, controls or other field equipment when present; inactive routes create no exchange.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered electricity attributed to the field and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_operations`
- Sources:
- Range: Provisional electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/ha crop cycle
  - Basis: field and irrigation electricity per planted hectare when electrically powered equipment is used
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

###### Occupation of agricultural land (`land_occupation`)

Record occupied agricultural area and duration for the maize crop cycle, excluding unrelated rotations outside the declared temporal boundary.

- Selected flow: arable `b88d3b6d-229e-477e-bce1-e16376f75c7b`
- Flow property / unit: Area*time / ha*a
- Binding: Fixed (`fixed`)
- Amount rule: planted area multiplied by occupation duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_and_lot_trace`
- Sources:
- Range: Crop-cycle land-occupation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: ha*a/ha crop cycle
  - Basis: occupation duration per hectare of planted maize
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### Outputs

##### Product flows

###### Standing forage maize transferred to harvest (`standing_forage_crop`)

Record fresh standing crop biomass transferred internally from managed production to the independent harvest node, excluding unharvested residue and loss.

- Selected flow: Standing forage maize biomass
- Flow property / unit: Mass / kg fresh matter
- Amount rule: calculated from harvested output plus measured harvest losses and destination splits
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`
- Range: Provisional standing-biomass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150000
  - Unit: kg fresh matter/ha crop cycle
  - Basis: standing fresh biomass transferred to harvest per planted hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

###### Direct nitrous oxide to air from managed soil (`direct_n2o`)

Calculate direct N2O from managed soil using the disclosed IPCC tier and field-specific nitrogen activity data.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: IPCC calculation from collected nitrogen activity data and selected emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional direct-N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N2O/ha crop cycle
  - Basis: direct N2O emitted from managed soil per planted hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Ammonia to air from field nitrogen (`ammonia_to_air`)

Record or calculate ammonia volatilization by nitrogen source and application event; retain the reported nitrogen or substance basis.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: site model or measured loss expressed as NH3; convert NH3-N to NH3 by 17/14 when required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional ammonia-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg NH3/ha crop cycle
  - Basis: ammonia mass as NH3 per planted hectare after any disclosed nitrogen-basis conversion
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Nitrate to water from field nitrogen (`nitrate_to_water`)

Record or calculate nitrate leaching or runoff by receiving water compartment and retain whether the amount is nitrate or nitrate-nitrogen.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg NO3 or kg NO3-N as reported
- Amount rule: site model or measurement with receiving compartment and basis retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional nitrate-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg NO3 or NO3-N/ha crop cycle
  - Basis: reported nitrate loss per planted hectare with substance basis disclosed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Phosphorus releases to water (`phosphorus_to_water`)

Record measured or modelled dissolved and particulate phosphorus losses separately where available, with receiving compartment and chemical basis.

- Selected flow: Phosphorus to water
- Flow property / unit: Mass / kg P or reported phosphate basis
- Amount rule: site model or measurement with species and compartment retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources:
- Range: Provisional phosphorus-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg P or reported phosphate/ha crop cycle
  - Basis: reported phosphorus loss per planted hectare with chemical basis disclosed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Reported crop-protection substances to environmental compartments (`crop_protection_releases`)

Record each identified active substance released to air, soil or water as a separate concrete exchange during dataset generation; do not bind a generic pesticide UUID.

- Selected flow: Identified crop-protection substance to air, soil or water
- Flow property / unit: Mass / kg active substance
- Amount rule: measured or fate-modelled mass by active substance and compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha treated in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources:
- Range: Provisional active-substance release screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg active substance/ha crop cycle
  - Basis: sum reported separately by substance and compartment per treated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

### Process: Harvest and farm-gate hand-off (`harvest_handoff`)

#### Inputs

##### Product flows

###### Standing forage maize received for harvest (`standing_crop_input`)

Receive the internal standing-crop transfer from field production on the same field and crop-cycle basis.

- Selected flow: Standing forage maize biomass
- Flow property / unit: Mass / kg fresh matter
- Amount rule: equal to the linked standing_forage_crop output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`
- Range: Linked standing-biomass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150000
  - Unit: kg fresh matter/ha crop cycle
  - Basis: internal standing biomass received per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Harvest machinery fuel or energy supply (`harvest_machinery_energy`)

Record actual energy carriers for cutting, chopping, loading and movement within the farm-gate harvest boundary; carrier selection follows the chosen harvest technology.

- Selected flow: Harvest machinery fuel or energy supply
- Flow property / unit: Energy / MJ or carrier-native unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured carrier use allocated to harvest lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per ha harvested in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_operations`
- Sources:
- Range: Provisional harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha crop cycle
  - Basis: total carrier energy used for harvest per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### Outputs

##### Product flows

###### Fresh unprocessed forage maize at farm gate (`fresh_forage_maize`)

Record accepted fresh whole-crop maize after field harvest and loading, before ensiling, fermentation, storage, drying or feed manufacture. This is the quantitative reference output.

- Selected flow: Maize for forage and silage `719047d6-29cc-4b2c-b61e-0bb407d6eeaf`
- Flow property / unit: Mass / kg fresh matter
- Binding: Fixed (`fixed`)
- Amount rule: measured accepted fresh mass at the farm-gate hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested in one crop cycle; converted to 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-forage-maize-harvest-stage`
- Range: Provisional fresh-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150000
  - Unit: kg fresh matter/ha crop cycle
  - Basis: accepted fresh unprocessed forage maize at farm gate per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Downgraded harvested biomass sent to another declared use (`downgraded_biomass`)

Record harvested biomass that fails the reference-product specification but leaves for an alternate declared use. It is excluded from accepted reference output and its destination is mandatory.

- Selected flow: Downgraded harvested maize biomass
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured downgraded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`
- Range: Provisional downgrade screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150000
  - Unit: kg fresh matter/ha crop cycle
  - Basis: downgraded harvested biomass per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

###### Uncollected or discarded harvest biomass (`harvest_loss_residue`)

Record cut or damaged biomass not accepted or routed to another product use, including its field retention, collection or disposal destination.

- Selected flow: Harvest biomass loss or residue
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured or sampled exclusive loss mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`
- Range: Provisional harvest-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg fresh matter/ha crop cycle
  - Basis: uncollected or discarded fresh biomass per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | field and harvest nodes | Prefer subdivision by field-season, irrigation route and harvest technology; normalize measured burdens once to accepted fresh output. | `mass-balance-identity` |
| `allocation_output_destinations` | accepted, downgraded and discarded biomass | Treat accepted reference output, downgraded product and waste/loss as mutually exclusive destinations. If downgraded biomass is an independently intended co-product, apply a disclosed study-specific physical dry-mass allocation when causal; otherwise use and justify another method. Do not credit uncollected residue without a documented substitution claim. | `mass-balance-identity` |
| `allocation_run_period` | fields, runs and lots | Use a single-period crop-cycle boundary. Link inputs, outputs, cleaning and changeover events to the field-season or harvest lot; allocate shared machinery burdens once by measured area, runtime or throughput and prevent double counting across strata. | `mass-balance-identity` |
| `allocation_rejects` | off-spec and rejected biomass | This fresh farm-gate route has no in-boundary rework loop. Route every off-spec mass to accepted after documented reassessment, downgraded alternate use, field retention or disposal; retain prior burdens and count mass only at its final destination. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | seed, nutrient and crop-protection inputs | invoice, field log and product analysis | field; date; product; formulation; amount; area; nutrient or active content | reconcile purchase and application records by field | kg; L; m3; ha | each application | crop cycle | each field | sum each actual product once; retain composition | invoice, label, analysis and signed log |
| `cp_irrigation` | `field_production` | delivered irrigation water | meter or pump log | field; event; volume; source; runtime; irrigated area | meter preferred; otherwise documented pump-flow calculation | m3; h; ha | each event | crop cycle | each irrigated field | sum delivered volume; zero for rainfed strata | meter calibration or pump curve |
| `cp_energy_operations` | all | field and harvest energy | fuel ticket, meter and machine log | process; field/lot; carrier; quantity; runtime; area or throughput | reconcile purchases, meters and runtime | L; kg; kWh; MJ; h | each operation | crop cycle through hand-off | field and harvest lot | convert with documented factor and allocate once | invoice, meter calibration and machine log |
| `cp_field_and_lot_trace` | all | area, route and lot linkage | field GIS/record and lot register | field; area; dates; crop; route; harvest lot; destination | trace each harvest lot to field-season strata | ha; date; id | field-season and lot | crop cycle through hand-off | all represented fields | area-weight only after route stratification | map, field register and lot ticket |
| `cp_field_emissions` | `field_production` | managed-soil and applied-substance releases | calculation sheet, model or measurement | N by source; residue N; fertilizer form; event; weather; soil; factors; active substance; compartment | apply disclosed IPCC tier and documented site models or measurements | kg N; kg substance; ha | each event and crop cycle | crop cycle | each field stratum | calculate by field and substance before aggregation | factor version, model inputs and calculation audit |
| `cp_harvest_mass_balance` | `harvest_handoff` | standing input, accepted, downgraded and loss outputs | scale, yield monitor, moisture sample and destination ticket | field; lot; technology; inlet estimate; accepted mass; downgrade mass; loss sample; moisture; destination | weigh outputs and sample losses and whole-plant moisture representatively | kg; %; ha | each field and lot | harvest to immediate farm-gate hand-off | each harvest lot | moisture-align and reconcile exclusive destinations | scale calibration, sample plan and closure worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all inventory rows | normalized amount = stratum amount × 1,000 / accepted fresh mass | stratum amount; accepted fresh mass | amount per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_dry_matter` | biomass comparisons | dry matter = fresh mass × (1 − moisture fraction) | fresh mass; wet-basis moisture fraction | dry-matter mass | `mass-balance-identity` |
| `calc_n2o` | managed soil | Apply the disclosed IPCC tier to collected N inputs and convert N2O-N to N2O by 44/28 when required. | N activity data; emission factors; indirect-loss parameters | kg N2O | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | `harvest_handoff` | standing biomass = accepted + downgraded + discarded/uncollected + measured stock change, on one moisture basis and within declared uncertainty | linked masses, moisture and destinations | mass closure | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain hybrid/cultivar, crop year, harvest stage, whole-plant moisture or dry matter, accepted specification and fresh unprocessed gate. | field register, sample and lot ticket |
| `dq_completeness` | crop cycle and harvest | Cover every represented field operation, application, irrigation event, harvest operation and exclusive biomass destination. | field-to-lot trace and completeness reconciliation |
| `dq_representativeness` | aggregated dataset | Report geography, crop year, fields, route shares, harvest technologies, moisture basis, accepted yield and aggregation weights. | metadata and stratum index |
| `dq_uncertainty` | calculated and modelled rows | Retain factor versions, model inputs, measurement uncertainty, missing-data substitutions and reasons for any Range exception. | calculation workbook and QA log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Require the fixed product, Mass and unit-group UUIDs, 1,000 kg reference amount and all required qualifiers. |  |
| `validate_gate` | system boundary | Reject any inventory that includes ensiling, fermentation, storage, drying, baling, feed manufacture, downstream transport or feeding inside the fresh farm-gate reference process. | `fao-forage-maize-harvest-stage` |
| `validate_routes` | field and harvest strata | Declare rainfed or irrigated status and one harvest technology per stratum; keep mutually exclusive alternatives separate and include their evidenced inventory and record deltas. | `fao-crop-water-needs`; `mass-balance-identity` |
| `validate_nutrient_cardinality` | `field_production` | Permit at most one consolidated nutrient Product-input card; bind it only to flow-set.agricultural-nutrient-supply version 0.3.0 at set level, with no group and no separate N, P, K, manure, organic-fertilizer, lime or amendment card. |  |
| `validate_batch_period` | fields, operations and harvest lots | Link inputs, outputs, cleaning and changeover to one field-season or harvest lot and assign shared burdens once by measured area, runtime or throughput. | `mass-balance-identity` |
| `validate_reject_routing` | off-spec biomass | Require one exclusive accepted, downgraded, field-retained or discarded destination; do not count an unresolved reject as accepted output and do not create an unrecorded rework loop. | `mass-balance-identity` |
| `validate_mass_balance` | `harvest_handoff` | Reconcile standing input, accepted product, downgraded product, waste/loss and stock change on a common moisture basis within declared uncertainty. | `mass-balance-identity` |
| `validate_ranges` | all flow cards | Require exactly one complete Range per quantitative card, with role, bounds, unit, denominator/basis, basis kind, evidence kind and source ids aligned in English, Chinese and structured output. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fresh forage-maize production dataset at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | LCA and footprints requiring fresh unprocessed whole-crop maize at farm gate as forage or input to a separately modelled silage process |
| excluded_use | maize grain, seed, sweet corn, ensiled/fermented material, dried forage, formulated feed or undisclosed downstream processing |
| required_metadata | geography; crop year; fields/lots; hybrid/cultivar; prior crop; tillage; rainfed/irrigated route; harvest technology and stage; moisture/dry matter; accepted specification; destinations; allocation |
| required_quality_disclosure | primary-data coverage; calibration; missing data; model and factor versions; route weights; mass balance; uncertainty; Range exceptions |
| update_trigger | changed geography, crop year, hybrid, management, irrigation share, harvest technology/stage, moisture specification, destination, allocation or emission method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-forage-maize-harvest-stage` | official_guidance | FAO, Silage from tropical cereals and forage crops, https://www.fao.org/4/x8486e/x8486e0q.htm | maize forage context and harvest-stage evidence; ensiling remains outside this PCR |
| `fao-crop-water-needs` | official_guidance | FAO, Crop Water Needs, Chapter 3, https://www.fao.org/4/s2022e/s2022e07.htm | maize seasonal crop-water range and local crop-factor context |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O calculation and nitrogen activity data |
| `mass-balance-identity` | method_factor | Conservation of mass applied to moisture-aligned standing biomass, accepted product, downgraded biomass, loss and stock change | hand-offs, mass closure, destination exclusivity, allocation and reject routing |
