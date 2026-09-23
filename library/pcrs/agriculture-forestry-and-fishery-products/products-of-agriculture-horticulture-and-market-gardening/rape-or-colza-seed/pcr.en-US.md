---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rape-or-colza-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rape or colza seed

## 1. Scope and Applicability

This PCR covers the oilseed-grain route for whole, unprocessed rape or colza seed grown as an annual crop and handed over at the farm gate. It includes managed field production, seed capture, first cleaning, conditioning needed for safe hand-off, and lot grading. A planting-seed market route within the wider rape/colza seed category needs additional seed-grade conditioning and identity evidence; it is not represented by this grain reference flow. Mustard seed, rapeseed oil, meal, extraction and refining are outside the whole-seed category. A farm-gate label cannot silently omit a contracted off-farm cleaning or drying step that is required to produce the stated hand-off state; report its location and include the service up to that state. Geographic grading examples below do not impose Canadian grades on other markets. Sources: `unsd-cpc-01443`, `manitoba-canola-management`, `cgc-canola-grading`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rape-or-colza-seed |
| classification_refs | CPC 3.0 01443, Rape or colza seed |
| covered_products | Whole unprocessed rape or colza seed on the oilseed-grain route, including canola-quality grain when applicable |
| excluded_products | Mustard seed; oil; meal; crushed or refined products. Planting-seed market lots require their own verified reference flow and additional route rules before this PCR can guide that branch. |
| representative_product | Whole unprocessed canola seed delivered from a managed annual crop |
| production_route | Annual field production; swath then pick-up combine or direct combine; primary cleaning; conditional drying or aeration; grading. The two harvest routes are mutually exclusive within a field/run but may coexist on a farm with separate run records. The swath route adds cutting, field curing and pick-up operations; direct combining omits these and requires its own shatter-loss evidence. Both inherit the same crop-production and seed hand-off rules. |
| market_state | Whole grain at farm gate, with actual moisture, grade, distinctly green seed, dockage and conditioning status declared |

Sources: `manitoba-canola-management`, `canola-council-harvest`, `cgc-canola-grading`.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole, unprocessed rape or colza seed grain accepted at the declared farm-gate hand-off |
| How much | 1 kg net accepted seed, at the measured as-delivered wet-basis moisture |
| How well | Species/market class, grade or contract specification, distinctly green seed and dockage declared; no oil extraction |
| How long or cycle | One crop year or identified production season |
| reference_flow_link | `accepted_seed` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rape or colza seed `be87e81e-303f-4607-a1f5-0cb5ef2d8f74` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop species and market class; crop year; region; harvest route; wet-basis moisture; grade/contract specification; distinctly green seed and dockage; cleaning and drying/aeration state; farm-gate hand-off location |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `accepted_seed` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net accepted seed mass at measured wet-basis moisture, excluding screenings, downgraded lots not in the chosen reference grade, and rejected seed. |
| `moisture_conversion` | lot masses before and after conditioning | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If a declared comparison moisture is needed, convert only from measured wet-basis moisture: corrected mass = as-weighed mass × (1 − measured moisture fraction) / (1 − comparison moisture fraction); retain the original as-weighed mass. |
| `field_normalization` | field inputs and emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Attribute crop-year field totals to accepted seed with measured lot yields; maintain the field area and season as separate audit bases. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared arable field and purchased or farm-saved planting seed at sowing; any prior crop residue/soil-carbon opening state must be declared. |
| starting_condition_role | Crop-year field production starting state, not a free seed or free field preparation assumption. |
| product_classification_scope | Oilseed-grain route within whole unprocessed rape/colza seed; other oilseeds, mustard and processed oil are outside scope. A planting-seed market branch needs additional rules and a distinct verified flow. |
| recursive_input_rule | Any same-category harvested seed used as a production input retains its upstream dataset and is not recursively created as this crop year's output. Planting seed is an input with its own upstream supply. |
| upstream_dataset_requirement | Include background datasets for planting seed, fertiliser, crop protection materials, energy and purchased services, with geography and time alignment. |
| disclosure | Declare field area, crop year, land-management history, harvest route, conditioning location, grade system, moisture basis and residue fate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `field_to_gate` | crop-year foreground | Include sowing and management through harvest, cleaning, actual stabilization, grading and farm-gate hand-off; separately identify contracted operations needed for the stated product state. | `manitoba-canola-lca` |
| `straw_fate` | harvest residues | Record straw/chaff left on soil, removed for use or burned by measured fate; do not count retained residue as a marketed co-product; carry returned residue N into soil-emission calculation. | `manitoba-canola-management`, `ipcc-2019-soils` |
| `grade_state` | seed lot | Cleaning screenings, accepted grade, downgraded usable seed and rejected material have separate destinations and must balance against incoming grain; a green-seed problem cannot be cured by merely relabelling drying. | `cgc-canola-grading` |
| `stabilization` | damp or warm seed | Include aeration, cooling or drying only when performed before the declared hand-off. Record pre- and post-intervention moisture/temperature and losses; drying is not assumed for every lot. | `manitoba-canola-management`, `manitoba-canola-lca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_management` | Managed field production | required | Every annual crop lot | Sowing and managed biological growth; hand-off is standing mature crop, not grain | sown area, crop-year inputs and yield |
| `harvest` | Harvest and capture | required | Every crop lot | Independent swath/pick-up or direct-combine removal and threshing; hand-off is uncleaned harvested seed, with shatter and residue fate tracked | harvest run and raw-seed mass |
| `conditioning` | Primary cleaning and conditional stabilization | required | Cleaning always; aeration/drying only when performed | Raw grain becomes cleaned whole grain; damp/warm usable grain is stabilized, and screenings/losses exit | before/after lot mass and moisture |
| `grading` | Quality grading and dispatch | required | Every hand-off lot | Classify cleaned grain into accepted, downgraded and rejected destination states | grade-lot mass and sample results |

The field crop is the biological production object. Seed, fertiliser, crop protection, water and field energy are management inputs; harvest uses separate cutting and threshing operations because seed capture has its own losses and run boundary. The swath and direct-combine choices change harvest topology, fuel records, field-curing interval and shatter validation, while a production variant (e.g. irrigated versus rainfed) changes water inventory and water-source checks under the same managed-field parent. Record each field/run or conditioning lot once; batch electricity, cleaning and changeover loads follow the lots they served. For irrigated production, record irrigation withdrawal, pumping energy and the field served; omit those rows for rainfed production. Sources: `manitoba-canola-management`, `canola-council-harvest`, `canola-council-establishment`.

### Process: Managed field production (`crop_management`)

#### Inputs

##### Product flows

###### Planting seed (`planting_seed`)

Record certified or farm-saved sowing seed entering the crop; it is an input, not the harvested reference product.

- Selected flow: Rape/colza planting seed
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoice quantity for sown area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-canola-management`
- Range: Source-backed scenario-specific typical interval
  - Range role: Typical range (`typical_range`)
  - Lower: 4.3
  - Upper: 6.5
  - Unit: kg/ha
  - Basis: Illustrative 3.8–5.8 lb/acre sowing-rate examples converted to kg/ha; seed weight and emergence specific, not a universal limit.
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `canola-council-seeding-rate`

###### Agricultural nutrient and fertilizer inputs (`crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-canola-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/ha
  - Basis: separately recorded fertilizer product masses per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection products (`crop_protection`)

Record applied seed, weed, disease and insect treatments by active product and dose.

- Selected flow: Crop protection product
- Flow property / unit: Mass or Volume / kg or L
- Amount rule: application log quantity for sown area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-canola-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg or L/ha
  - Basis: each separately recorded crop-protection formulation per treated hectare in its declared unit; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field operation energy (`field_energy`)

Record fuel and purchased electricity for sowing, tillage, spraying and irrigation where used.

- Selected flow: Diesel or electricity
- Flow property / unit: Volume or Energy / L fuel or kWh electricity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter or machine-log use for crop field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operations`
- Sources: `manitoba-canola-lca`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: field fuel and electricity converted to energy per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately recorded flow of this type.

##### Elementary flows

###### Irrigation water withdrawal (`irrigation_water`)

Where irrigation occurs, record the water withdrawn from the environment separately from supplied water products.

- Selected flow: Water, unspecified natural source
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal for crop field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: irrigation withdrawal per cultivated hectare; conditional route; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Mature standing rape or colza crop (`standing_crop`)

This intermediate crop state passes to harvest and must not be counted again as marketable seed.

- Selected flow: Standing rape/colza crop
- Flow property / unit: Mass / kg
- Amount rule: field area and estimated biomass; reconcile to harvested grain and residues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `manitoba-canola-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg biomass/ha
  - Basis: standing crop biomass per cultivated hectare; do not equate with clean seed yield; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately recorded flow of this type.

##### Elementary flows

###### Managed-soil nitrous oxide (`field_n2o`)

Calculate direct and indirect N2O from nitrogen inputs and retained residue nitrogen using a declared regional method.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: method-based estimate from recorded N inputs and residue fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-2019-soils`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: calculated managed-soil N2O per cultivated hectare; retain factor-method audit; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and capture (`harvest`)

#### Inputs

##### Product flows

###### Swather and combine fuel (`harvest_fuel`)

Link field fuel to the actual swath or direct-combine run, including pick-up and threshing.

- Selected flow: Mobile machinery fuel, diesel carrier
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: run fuel or machine-hour conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `canola-council-harvest`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/ha
  - Basis: swather and combine fuel per harvested hectare; route specific; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately recorded flow of this type.

##### Elementary flows

No separately recorded flow of this type.

#### Outputs

##### Product flows

###### Uncleaned harvested seed (`raw_seed`)

Weigh grain after combine unloading, before dockage removal or any farm drying.

- Selected flow: Rape/colza seed, raw
- Flow property / unit: Mass / kg
- Amount rule: weighbridge mass per harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `manitoba-canola-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: raw harvested seed per harvested hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed straw sold or used elsewhere (`removed_straw`)

Record a separate product output only when straw is physically removed and used; otherwise retain it in the field-residue account.

- Selected flow: Rape/colza straw
- Flow property / unit: Mass / kg dry matter
- Amount rule: weighed or measured removed dry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `ipcc-2019-soils`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg dry/ha
  - Basis: dry removed straw per harvested hectare; conditional sale or use; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shattered or spilled seed loss (`harvest_reject`)

Record seed left in the field or spilled at harvest as loss, never as accepted farm-gate output.

- Selected flow: Lost rape/colza seed
- Flow property / unit: Mass / kg
- Amount rule: field loss sampling or input-output reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `canola-council-harvest`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg raw harvested seed
  - Basis: shattered or spilled seed per kilogram captured raw seed; severe losses need review; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately recorded flow of this type.

### Process: Primary cleaning and conditional stabilization (`conditioning`)

#### Inputs

##### Product flows

###### Cleaning, drying and aeration energy (`conditioning_energy`)

Record electricity and fuel by actual conditioning lot; omit drying fuel when only ambient aeration occurs.

- Selected flow: Electricity or fuel
- Flow property / unit: Volume or Energy / L fuel or kWh electricity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter or equipment runtime with rated consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `manitoba-canola-lca`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg raw seed
  - Basis: cleaning, drying and aeration fuel and electricity converted to energy per kilogram raw seed; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately recorded flow of this type.

##### Elementary flows

No separately recorded flow of this type.

#### Outputs

##### Product flows

###### Prepared whole seed (`prepared_seed`)

Pass cleaned and, if needed, stabilized whole seed to grading without oil extraction or crushing.

- Selected flow: Rape/colza seed, cleaned
- Flow property / unit: Mass / kg
- Amount rule: lot mass after cleaning and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `manitoba-canola-lca`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry raw seed
  - Basis: prepared dry seed per kilogram incoming dry raw seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Cleaning screenings and dockage (`screenings`)

Separate recoverable downgrade streams from true waste and record the destination of each.

- Selected flow: Canola screenings
- Flow property / unit: Mass / kg
- Amount rule: weighed screenings by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `cgc-canola-grading`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry raw seed
  - Basis: dry screenings per kilogram incoming dry raw seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

###### Moisture evaporated during drying (`drying_water`)

Calculate water removed from before and after lot mass and measured wet-basis moisture.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: mass balance from lot moisture measurements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources: `manitoba-canola-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg raw seed
  - Basis: water evaporated per kilogram incoming wet raw seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

### Process: Quality grading and dispatch (`grading`)

#### Inputs

##### Product flows

###### Grading and handling energy (`grade_handling_energy`)

Record electricity or fuel for sampling, transfer and grading when these are performed inside the farm-gate boundary.

- Selected flow: Electricity or fuel
- Flow property / unit: Volume or Energy / L fuel or kWh electricity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter or machine log per grade lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cgc-canola-grading`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg prepared seed
  - Basis: grading and handling fuel and electricity converted to energy per kilogram prepared seed; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately recorded flow of this type.

##### Elementary flows

No separately recorded flow of this type.

#### Outputs

##### Product flows

###### Accepted unprocessed rape or colza seed (`accepted_seed`)

Weigh each accepted grade at hand-off and retain moisture, green-seed and dockage qualifiers.

- Selected flow: Rape or colza seed `be87e81e-303f-4607-a1f5-0cb5ef2d8f74`
- Flow property / unit: Mass / kg
- Amount rule: accepted hand-off mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cgc-canola-grading`
- Range: Reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference seed
  - Basis: accepted grain is the declared 1 kg oilseed reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Downgraded seed lot (`downgraded_seed`)

Declare the destination and sale/use of a downgraded but usable lot separately from the chosen reference grade.

- Selected flow: Rape/colza seed, downgraded
- Flow property / unit: Mass / kg
- Amount rule: weighed downgraded mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cgc-canola-grading`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: downgraded seed per kilogram prepared seed entering grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Rejected or contaminated seed (`rejected_seed`)

If a lot has no recoverable use, record disposal route and do not assign it reference output mass.

- Selected flow: Rejected rape/colza seed
- Flow property / unit: Mass / kg
- Amount rule: weighed reject mass and disposal record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cgc-canola-grading`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: rejected seed per kilogram prepared seed entering grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

No separately recorded flow of this type.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_seed_output` | accepted and downgraded grain | Use physical mass subdivision by grade lot for the same seed product. Do not allocate twice to the same grain mass; rejected grain has no accepted reference output. | `cgc-canola-grading` |
| `straw_decision` | removed straw | Treat removed straw as an independent co-product only when an evidenced sale or transfer for productive use occurs. Record separate seed and straw masses and hand-offs. Assign separable cutting, baling and removal burdens directly to straw; allocate inseparable field and harvest burdens between accepted seed and sold straw by their contemporaneous farm-gate economic values. Disclose prices, shares and a seed-only sensitivity result. Retained or chopped straw is a field residue, not a co-product, and waste has no allocation share. Each output and burden has one hand-off and one attribution. | `manitoba-canola-management`, `ipcc-2019-soils` |
| `run_attribution` | field, harvest, cleaning and grading runs | Assign metered inputs, output and cleaning/changeover burdens to the fields or lots served using actual run records; document any shared-load allocation key and count each load once. Reprocessed grain keeps prior burdens and receives only incremental rework energy. | `manitoba-canola-lca` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `crop_management` | seed, fertiliser, protection, irrigation | invoice and field application log | field_id, date, product, mass, nutrient analysis, water source and volume | reconcile purchases to field application | kg; m3 | each application | full crop year | each field | sum by field and substance, then link to accepted seed | invoices, calibration, soil test |
| `cp_operations` | `crop_management` | tillage, seeding, spraying energy | meter and machine log | field_id, operation, hours, fuel, electricity | fuel issue and meter records | L; kWh | each operation | full crop year | each field | sum and allocate shared equipment by logged hours | fuel slips and machine log |
| `cp_harvest` | `harvest` | route, raw grain, shatter loss | combine and weighbridge record | field_id, route, run_id, date, raw_mass, moisture, fuel, loss_sample | separate swath and direct runs; weigh grain and sample losses | kg; %; L | each run | harvest season | each field/run | sum runs after removing duplicates | calibrated scale, field loss sample |
| `cp_residues` | `harvest` | straw and chaff fate | field record and load ticket | field_id, retained_area, removed_dry_mass, destination, burn_event | field inspection and load weighing | ha; kg dry | each harvest | harvest season | each field | reconcile removed and retained fractions | load tickets, photographs |
| `cp_conditioning` | `conditioning` | cleaning, drying, aeration and screenings | lot operation record | lot_id, before_mass, after_mass, before_moisture, after_moisture, temperature, energy, screenings_mass, destination | weigh and sample each intervention | kg; %; °C; kWh; L | each lot/intervention | harvest to hand-off | each lot | sum energy and retain lot mass balance | scale, moisture meter, meter logs |
| `cp_grading` | `grading` | accepted, downgraded and rejected seed | grade certificate and dispatch ticket | lot_id, grade, green_seed, dockage, accepted_mass, downgraded_mass, reject_mass, destination | representative sample and dispatch weighing | kg; % | each dispatch lot | hand-off season | each lot | sum by final destination once | sample report, scale ticket |
| `cp_emissions` | `crop_management` | managed-soil emissions | calculation worksheet | field_id, N_inputs, returned_residue_N, method_version, factors, climate | apply declared local factors or IPCC method to recorded activity | kg N; kg N2O | annual | full crop year | each field | sum direct and indirect results, avoiding duplicate N pools | factor citation and calculation audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_grade_mass` | dispatch lots | accepted mass = sum of weighed accepted lots; separately sum downgraded and rejected mass; each lot has one final destination. | lot tickets and grade results | kg accepted seed | `cgc-canola-grading` |
| `dry_matter_balance` | conditioning | conserved seed dry matter = lot mass × (1 − wet-basis moisture fraction), less measured screenings and physical loss; flag unexplained residual rather than force it into accepted output. | before/after mass, moisture, screenings | kg seed dry matter and kg water removed | `manitoba-canola-management` |
| `soil_n2o` | field N | Calculate direct and indirect N2O with declared factors, separating fertiliser N and returned residue N; do not reuse one emission result in multiple nodes. | N inputs, residue fate, local factors | kg N2O | `ipcc-2019-soils` |
| `normalized_inventory` | field and lot records | Divide correctly attributed crop-year or lot totals by net accepted reference seed mass, retaining raw totals and area. | reconciled records, accepted mass | inventory per kg | `manitoba-canola-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | seed product | Verify crop identity and distinguish rape/colza from mustard, planting seed and processed oil. | field records, delivery grade |
| `dq_mass` | seed lots | Use calibrated scales and wet-basis moisture readings; show raw, cleaned, accepted and loss mass balance. | weighbridge and meter checks |
| `dq_routes` | harvest and conditioning | Preserve field/run and lot IDs so mutually exclusive harvest routes, actual aeration/drying and any rework cannot be counted twice. | operation log and lot genealogy |
| `dq_grade` | grade states | Retain green-seed, dockage and rejection tests appropriate to the declared market; identify any downgrade destination. | grade report and sales/return tickets |
| `dq_emissions` | field emissions | Identify factors, region, method version, N inputs and residue fate; report limitations if local data are absent. | calculation worksheet and source record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | reference flow | Reject a data package that reports oil, meal, mustard or a planting-seed market lot under this verified oilseed-grain reference flow; require all reference qualifiers. | `unsd-cpc-01443` |
| `validate_routes` | harvest | Every harvest run chooses swath/pick-up or direct combining, never both for the same area; confirm corresponding cutting fuel, curing interval and route-specific loss records. | `canola-council-harvest` |
| `validate_mass_balance` | seed chain | Reconcile raw grain with cleaned, accepted, downgraded, rejected, screenings, water removal and loss states using measured moisture; do not add the same internal intermediate as another final output. | `manitoba-canola-management`, `cgc-canola-grading` |
| `validate_rework` | off-spec grain | Trace any return to cleaning or drying to its original lot, add only incremental service, and verify its final downgrade, recovery or waste exit; a rejected lot cannot be accepted without a recorded successful intervention. | `cgc-canola-grading` |
| `validate_storage` | conditioning | If the delivered state is cooled or dried, require before/after moisture and temperature and actual energy records; if no intervention occurred, do not apply a generic drying load. | `manitoba-canola-lca` |
| `validate_shared_load` | batch operations | Match each energy, cleaning or changeover record to a run or period and an allocation key; check that totals equal metered input and are counted once. | `manitoba-canola-lca` |
| `validate_irrigation` | field route | Irrigated fields require measured water withdrawal, source and pumping energy; rainfed fields must not receive an assumed irrigation inventory. | `canola-council-establishment` |
| `validate_residue` | straw and field emissions | Confirm straw removal/retention fate and its consistency with residue-N emissions and any co-product allocation. | `ipcc-2019-soils` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Farm-gate foreground production dataset for unprocessed whole rape or colza seed |
| downstream_use | `secondary_dataset`; `background_dataset` for food, feed, oil extraction or other later systems |
| allowed_use | Comparable whole-seed supply at a matching grade, moisture, geography, crop year and management route |
| excluded_use | Mustard seed, planting seed, rapeseed oil or meal, and systems with unreported off-farm conditioning |
| required_metadata | crop identity, field area, region, year, yield, route shares, grade specification, wet-basis moisture, green-seed and dockage, residue fate, conditioning location |
| required_quality_disclosure | primary-record coverage, lot mass balance, source/factor versions, unresolved flow UUID bindings, use of regional proxies and grade transfer limits |
| update_trigger | Change in crop or market class, route, grade basis, moisture management, regional emission factors or available primary records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-01443` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01443 | Product category boundary |
| `manitoba-canola-management` | `extension_guidance` | https://www.gov.mb.ca/agriculture/crops/crop-management/canola.html | Cultivation, swathing, harvest, moisture and straw management |
| `manitoba-canola-lca` | `dataset` | https://www.gov.mb.ca/agriculture/environment/climate-change/life-cycle-assessment-of-agriculture-in-manitoba.html | Farm-gate cycle, grain handling and conditional aeration |
| `canola-council-harvest` | `extension_guidance` | https://www.canolacouncil.org/canola-encyclopedia/harvest-management/ | Swath versus direct-combine route and shatter losses |
| `cgc-canola-grading` | `official_guidance` | https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/10-canola-rapeseed/grading-factors.html | Dockage and distinctly green seed classification |
| `ipcc-2019-soils` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Direct and indirect managed-soil N2O and residue-N accounting |
| `canola-council-establishment` | `extension_guidance` | https://www.canolacouncil.org/canola-encyclopedia/plant-establishment/environmental-effects/ | Irrigation as a conditional managed-production route |
| `iso-14044-lci` | `standard` | https://www.iso.org/standard/38498.html | Life-cycle inventory quantitative-reference and input/output accounting framework; the 0–1 material-fraction and 1 kg reference bounds here are algebraic checks, not empirical ISO rates. |
| `canola-council-seeding-rate` | `extension_guidance` | https://www.canolacouncil.org/canola-encyclopedia/plant-establishment/seeding-rate/ | Illustrative 3.8–5.8 lb/acre sowing-rate examples converted to kg/ha; seed weight and emergence specific, not a universal limit. |
