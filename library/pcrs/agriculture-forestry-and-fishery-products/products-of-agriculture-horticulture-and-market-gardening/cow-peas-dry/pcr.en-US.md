---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cow-peas-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Cow peas, dry

## 1. Scope and Applicability

This PCR covers production of mature dry cowpea grain (Vigna unguiculata) handed over at the farm gate after field production, one or multiple mature-pod pickings, pod drying, threshing, winnowing or initial cleaning, grading and conditional final drying. It applies to unprocessed whole grain intended for food, feed or an otherwise declared dry-grain market.

Green pods or leaves, planting seed marketed as seed, cooked or canned cowpeas, flour, splits and industrially separated protein, starch, fibre or oil are outside scope. Storage after the farm-gate hand-off, packaging for retail and transport beyond that gate are also outside scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cow-peas-dry |
| classification_refs | CPC 3.0:01706 Cow peas, dry |
| covered_products | mature whole dry cowpea grain (Vigna unguiculata), including declared market classes and colours |
| excluded_products | green pods and leaves; planting seed sold as seed; cooked or canned grain; flour; splits; industrial fractions |
| representative_product | mature cleaned dry cowpea grain at farm gate |
| production_route | managed field production parent with rainfed or irrigated variants; synchronized single picking or staggered multiple pickings; pod drying, threshing, cleaning, grading and conditional final drying |
| market_state | harvested grain, unprocessed; production mix, at farm gate |

The managed-production parent is field cultivation of cowpea. Rainfed and irrigated fields may coexist in an aggregated production mix, but their water and energy deltas remain separately collected. For each field-lot, synchronized one-picking and staggered multiple-picking harvest variants are mutually exclusive. Manual and mechanized harvest, threshing, cleaning or drying are technology variants of their named parent activities; the delta is the equipment, energy, labour-record, loss and pass structure, which must be evidenced for the represented route.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted mature whole dry cowpea grain at the declared farm-gate hand-off |
| How much | 1,000 kg |
| How well | declared species, market class or colour, grade, wet-basis moisture, foreign matter, insect damage, broken or split grain, crop year and lot status |
| How long or cycle | one crop cycle through farm-gate hand-off; all staggered pickings and linked conditioning passes included |
| reference_flow_link | `cowpeas_dry_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cow peas, dry `c377d583-fcf6-47fe-ac52-95ec0a377058` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Vigna unguiculata; mature whole dry grain; production mix; farm gate; crop year; market class or colour; grade; wet-basis moisture; foreign matter; insect damage; broken or split fraction; harvest route; drying route |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net accepted mass at the farm gate and do not include rejects, unresolved rework or packaging. |
| `moisture_basis` | pods and grain | mass and moisture | kg; % wet basis | Record moisture on a wet basis at every mass hand-off; use dry solids for comparisons across drying states. |
| `nutrient_product_basis` | nutrient supply | product quantity and nutrient composition | native product unit; kg nutrient | Record each mineral, organic or nutrient-bearing product once and derive nutrient quantities from its analysis without duplicating compound products. |
| `energy_conversion` | energy carriers | native carrier quantity and net energy | L; kg; kWh; MJ | Preserve the measured carrier unit and disclose every factor used to convert to MJ. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | field establishment for the represented cowpea crop cycle, with seed or planting material and all inherited upstream product datasets entering the foreground |
| starting_condition_role | foreground start for managed biological production |
| product_classification_scope | CPC 3.0:01706 Cow peas, dry |
| recursive_input_rule | cowpea grain retained or purchased for planting remains a planting-material input with its upstream dataset and cannot be counted as the current farm-gate reference output |
| upstream_dataset_requirement | every purchased product, energy carrier, water service and planting-material input carries a geographically and temporally appropriate upstream dataset or an explicit data gap |
| disclosure | declare field location, crop year, production variant, picking pattern, harvested state, conditioning and drying technology, farm-gate specification and every output destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | field through farm gate | Include establishment, management, every mature-pod picking, pod drying, threshing, winnowing or cleaning, grading, conditional final drying and farm-gate hand-off. | `iita-west-africa-cowpea-2018`; `iita-farmers-guide-cowpea-2009` |
| `boundary_harvest_independent` | harvest | Keep harvest separate from field production because it changes the state from standing mature crop to collected pod lots and may comprise several dated pickings; keep conditioning separate because it begins after that hand-off. | `iita-farmers-guide-cowpea-2009` |
| `boundary_states` | conditioning and grading | Track pods, loose grain, stabilized grain, accepted grade, downgraded grain, rework and final reject as distinct states with exclusive hand-offs. | `iita-west-africa-cowpea-2018`; `fao-cowpea-postharvest` |
| `boundary_storage` | farm-gate endpoint | Use a single-period crop-cycle route with no storage after hand-off. Include only drying or short holding needed to attain the declared hand-off condition; exclude storage and pest-control burdens after hand-off. | `fao-grain-drying-storage` |
| `boundary_route_delta` | route variants | For rainfed versus irrigated, manual versus mechanized, single versus multiple picking and passive versus powered drying, collect the changed input, energy, loss, pass and validation records under the named parent process; mutually exclusive alternatives cannot be combined for one lot. | `iita-farmers-guide-cowpea-2009`; `iita-west-africa-cowpea-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed cowpea field production | `required` | All represented crop cycles | Managed biological production with declared alternative production route deltas from field establishment to physiologically mature standing plants | one field and crop cycle linked to final accepted grain |
| `harvest_capture` | Mature-pod harvest and capture | `required` | One picking for synchronized maturity or all pickings for staggered maturity | Independent removal of mature pods from the production context | one field-picking event or linked picking campaign |
| `primary_conditioning` | Pod drying, threshing and initial cleaning | `required` | Every harvested pod lot | Primary conditioning with declared alternative technology deltas from harvested pods to loose cleaned grain | one harvested-pod lot |
| `final_drying` | Conditional final drying and stabilization | `conditional` | Include when cleaned grain exceeds the declared farm-gate moisture or stability limit | Bounded stabilization from moist usable grain to dry stable grain | one drying lot and pass |
| `grading_handoff` | Grading, routing and farm-gate hand-off | `required` | Every conditioned grain lot | Exclusive classification into accepted, downgraded, rework or reject destinations | one grading lot linked to the farm-gate output |

Production is batch-indexed by field and crop cycle. Harvest is indexed by picking event or linked picking campaign, and post-harvest work is indexed by lot, run and pass. Inputs, outputs, cleaning and changeover events must use those identifiers so shared burdens are assigned once.

### Process: Managed cowpea field production (`field_production`)

#### Inputs

##### Product flows

###### Cowpea planting material (`planting_material`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cowpea seed for planting
- Flow property / unit: Mass / kg
- Amount rule: measure planting material entering the represented field; do not classify the harvested reference product as planting seed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 250
  - Unit: kg
  - Basis: planting material per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Consolidated agricultural nutrient supply (`nutrient_supply`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Actual mineral fertilizers, organic fertilizers and nutrient-bearing amendments
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Flow property / unit: Product mass or volume and nutrient content / kg, L or m3 product; kg nutrient
- Amount rule: record each actual product and application once, retaining formulation and nutrient analysis; expand to verified concrete product UUIDs during dataset generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg product equivalent
  - Basis: sum of applied nutrient-bearing product mass per 1,000 kg accepted grain; volumes remain separately disclosed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Crop-protection products (`crop_protection`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Crop-protection products as applied
- Flow property / unit: Product mass or volume / kg or L
- Amount rule: measure each formulation and application; retain active ingredient and concentration separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg product equivalent
  - Basis: total formulated product per 1,000 kg accepted grain; liquid volume remains separately reported
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Irrigation water supplied (`irrigation_service`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: measure delivered irrigation water when irrigation is used; zero is valid for rainfed fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: delivered irrigation water per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Field-operation energy carriers (`field_energy`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Measured fuel and purchased energy used by field operations
- Flow property / unit: Net energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record actual carriers by operation and convert with disclosed factors; retain carrier quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ
  - Basis: field-operation energy per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Elementary flows

###### Cultivated land occupation (`land_occupation`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area time / ha crop-cycle
- Amount rule: calculate cultivated area and occupied crop cycle linked to the accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 10
  - Unit: ha crop-cycle
  - Basis: cultivated land occupation per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


#### Outputs

##### Product flows

###### Mature standing cowpea crop (`mature_standing_crop`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Intended output: physiologically mature cowpea plants and pods at harvest readiness
- Flow property / unit: Mass / kg
- Amount rule: calculate moisture-characterized mature crop handed to harvest, including the declared single- or multiple-picking route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_outputs`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 12000
  - Unit: kg as harvested
  - Basis: mature above-ground crop associated with 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Intended haulm or field-residue co-product (`field_residue_intended`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cowpea haulm or crop residue deliberately recovered for use
- Flow property / unit: Dry mass / kg
- Amount rule: measure only material with an intended destination and hand-off; otherwise classify it as residue retained on field or waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_outputs`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg dry matter
  - Basis: intended recovered haulm per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Unrecovered field residue and pre-harvest loss (`field_losses`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Unrecovered crop residue, fallen pods and damaged material
- Flow property / unit: Mass / kg
- Amount rule: estimate by field sampling and reconcile separately from intended co-products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_outputs`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg as observed
  - Basis: unrecovered residue and pre-harvest loss per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Elementary flows

###### Direct and indirect managed-soil nitrous oxide (`soil_n2o`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Nitrous oxide to air from managed soils
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate from measured nitrogen activity data with the disclosed IPCC tier and factors; convert N2O-N to N2O by 44/28
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O
  - Basis: managed-soil N2O per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `ipcc-2019-managed-soils`


### Process: Mature-pod harvest and capture (`harvest_capture`)

#### Inputs

##### Product flows

###### Mature standing crop handed to harvest (`standing_crop_input`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Physiologically mature cowpea crop
- Flow property / unit: Mass / kg
- Amount rule: carry forward the moisture-characterized mature crop from field production without duplication
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 12000
  - Unit: kg as harvested
  - Basis: mature crop input per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Harvest energy carriers (`harvest_energy`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Measured fuel and purchased energy used for picking, cutting or collection
- Flow property / unit: Net energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record energy by picking event; include all repeated pickings for staggered maturity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: harvest energy per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


#### Outputs

##### Product flows

###### Harvested mature cowpea pods (`harvested_mature_pods`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Mature dry or drying-ready cowpea pods
- Flow property / unit: Mass / kg
- Amount rule: weigh all collected mature-pod lots at each hand-off to pod drying and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `iita-farmers-guide-cowpea-2009`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 5000
  - Unit: kg pods as harvested
  - Basis: harvested mature pods per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `iita-farmers-guide-cowpea-2009`

###### Recovered harvest residue co-product (`harvest_residue_coproduct`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Recovered haulm or stems with an intended destination
- Flow property / unit: Dry mass / kg
- Amount rule: measure only independently intended recovered material at its hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg dry matter
  - Basis: recovered harvest residue per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Shattered, uncollected or damaged harvest material (`harvest_loss`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Harvest loss and damaged pods or grain without an intended product destination
- Flow property / unit: Mass / kg
- Amount rule: estimate by representative loss sampling for every picking and exclude it from accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: harvest loss per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


### Process: Pod drying, threshing and initial cleaning (`primary_conditioning`)

#### Inputs

##### Product flows

###### Harvested pod lot (`pod_lot_input`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Harvested mature cowpea pods
- Flow property / unit: Mass / kg
- Amount rule: weigh incoming pods and record inlet moisture before drying, threshing and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `iita-farmers-guide-cowpea-2009`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 5000
  - Unit: kg pods as received
  - Basis: incoming pods per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `iita-farmers-guide-cowpea-2009`

###### Conditioning energy carriers (`conditioning_energy`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Measured energy for pod drying, threshing, winnowing and cleaning
- Flow property / unit: Net energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record actual carriers by lot and pass; zero purchased energy is valid for passive sun drying and manual work when human labour is reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: MJ
  - Basis: conditioning energy per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


#### Outputs

##### Product flows

###### Loose cleaned cowpea grain (`loose_cleaned_grain`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Threshed and winnowed cowpea grain before final moisture decision
- Flow property / unit: Mass / kg
- Amount rule: weigh prepared grain and record moisture, foreign matter, insect damage and broken grain at hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `iita-west-africa-cowpea-2018`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: prepared loose grain per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `iita-west-africa-cowpea-2018`

###### Intended pod-shell or chaff co-product (`chaff_coproduct`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Pod shells, chaff or haulm deliberately supplied for use
- Flow property / unit: Dry mass / kg
- Amount rule: weigh separately only when an intended destination and hand-off exist
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg dry matter
  - Basis: intended conditioning co-product per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Conditioning rejects and foreign matter (`conditioning_rejects`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Pod fragments, stones, soil, foreign matter and unrecoverable damaged grain
- Flow property / unit: Mass / kg
- Amount rule: weigh exclusive reject destinations and distinguish disposal from on-field return or recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: conditioning rejects per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


### Process: Conditional final drying and stabilization (`final_drying`)

#### Inputs

##### Product flows

###### Moist cleaned grain requiring stabilization (`moist_grain_input`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cleaned cowpea grain above the declared moisture or stability limit
- Flow property / unit: Mass / kg
- Amount rule: weigh and test each lot before the drying intervention; omit this process when the limit is already met
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `fao-grain-drying-storage`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg
  - Basis: moist grain entering final drying per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-grain-drying-storage`

###### Final-drying energy carriers (`drying_energy`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Measured purchased energy or fuel used for final drying
- Flow property / unit: Net energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record actual carriers and operating time for each drying pass; passive ambient drying may report zero purchased energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ
  - Basis: final-drying energy per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


#### Outputs

##### Product flows

###### Stabilized dry cowpea grain (`stabilized_dry_grain`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cowpea grain meeting the declared moisture and stability condition
- Flow property / unit: Mass / kg
- Amount rule: weigh at outlet, test moisture and hand the lot to grading; return under-dried material only through a recorded additional pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `fao-grain-drying-storage`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg
  - Basis: stabilized grain per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-grain-drying-storage`


##### Waste flows

###### Drying rejects (`drying_rejects`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Moulded, insect-damaged or otherwise rejected grain removed during drying
- Flow property / unit: Mass / kg
- Amount rule: weigh rejects and record disposal, recovery or downgrade destination; do not include them in stabilized output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `fao-cowpea-postharvest`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: drying rejects per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-cowpea-postharvest`


##### Elementary flows

###### Water removed in final drying (`water_removed`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from inlet and outlet mass and wet-basis moisture, reconciled with rejects and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `mass-balance-identity`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg water
  - Basis: water removed per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


### Process: Grading, routing and farm-gate hand-off (`grading_handoff`)

#### Inputs

##### Product flows

###### Conditioned grain entering grading (`conditioned_grain_input`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cleaned dry or stabilized cowpea grain
- Flow property / unit: Mass / kg
- Amount rule: weigh every lot entering grading and retain the path through or around final drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2500
  - Unit: kg
  - Basis: conditioned grain input per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Grading and handling energy carriers (`grading_energy`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Measured energy used for grading, conveying and lot changeover cleaning
- Flow property / unit: Net energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record actual carriers by run and assign shared cleaning or changeover energy once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: grading and handling energy per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Returned off-spec grain for rework (`rework_return`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Off-spec cowpea grain returned from a prior grading pass
- Flow property / unit: Mass / kg
- Amount rule: weigh each return and link it to its originating lot and final exclusive destination; retain prior burdens
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: rework return per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


#### Outputs

##### Product flows

###### Accepted dry cowpea grain at farm gate (`cowpeas_dry_farm_gate`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cow peas, dry `c377d583-fcf6-47fe-ac52-95ec0a377058`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: set to the reference amount after excluding downgraded, rejected and unresolved rework material
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `mass-balance-identity`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: accepted mature dry cowpea grain at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded cowpea grain (`downgraded_grain`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Cowpea grain intentionally sold or handed off below the accepted reference grade
- Flow property / unit: Mass / kg
- Amount rule: weigh each downgraded destination and keep it mutually exclusive from accepted, rework and reject states
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources:
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: downgraded grain per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Final grading rejects (`grading_rejects`)

Quantify this role for the linked field, picking, lot or run and preserve its exclusive hand-off.

- Selected flow: Foreign matter, severely damaged grain and other material with no product destination
- Flow property / unit: Mass / kg
- Amount rule: weigh final rejects and record disposal or recovery route; exclude them from accepted and downgraded outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry cowpea grain at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources: `fao-cowpea-postharvest`
- Range: Complete quantitative range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: final rejects per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-cowpea-postharvest`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all output nodes | Classify every output as accepted product, independently intended co-product, residue retained in the system, rework, downgraded product or waste before attribution; a material may occupy only one final state. | `mass-balance-identity` |
| `allocation_coproduct` | intended haulm, chaff or downgraded grain | When an independently intended output exists, make and disclose a study-specific attribution decision. Prefer a documented physical relation when causality supports it; otherwise disclose economic allocation, prices, period and sensitivity. Residues and wastes receive no automatic credit. | `mass-balance-identity` |
| `allocation_batch` | fields, pickings, lots and runs | Assign direct records to their field, event or lot. Assign shared cleaning, changeover and run burdens once using measured throughput or another disclosed causal driver; never count the same campaign in each picking. | `mass-balance-identity` |
| `allocation_rework` | returned off-spec material | Retain burdens already carried by returned material, add only incremental rework burdens, and count its mass once at the final accepted, downgraded, recovered or discarded destination. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_records` | `field_production` | planting, nutrients, protection, water, energy, land and N activity | field log, invoice, meter and application record | field; area; dates; product; amount; formulation; nutrient analysis; water; carrier; factor | reconcile every application and operation to the field | kg; L; m3; kWh; MJ; ha | each event | crop cycle | each field | sum by actual product or carrier, then normalize to accepted output | invoice, calibrated meter, label and field log |
| `cp_field_outputs` | `field_production` | mature crop, intended residue and loss | field sample and mass record | field; area; crop state; fresh mass; dry matter; destination; loss | representative sampling plus measured hand-off | kg; %; ha | field and crop cycle | maturity to final picking | each field | moisture-align exclusive output states | sampling plan, scale calibration and destination record |
| `cp_harvest_records` | `harvest_capture` | pods, residue, loss and energy | picking ticket, scale, loss sample and machine log | field; picking date; route; inlet state; pod mass; residue; loss; carrier; moisture; destination | record each picking and reconcile the linked campaign | kg; %; L; kWh; MJ | each picking | all pickings in crop cycle | each field and route | sum mutually exclusive outputs over all pickings | dated ticket, calibrated scale and loss protocol |
| `cp_conditioning_records` | `primary_conditioning` | pods, grain, chaff, reject and energy | lot mass and operation log | lot; pass; inlet and outlet mass; moisture; carrier; duration; reject; co-product; destination | weigh every inlet and exclusive outlet for each pass | kg; %; kWh; MJ; h | each lot and pass | pod receipt through initial cleaning | each conditioning location | reconcile moisture-aligned pass balances without duplicate returns | calibrated scale, moisture meter and closure sheet |
| `cp_drying_records` | `final_drying` | moist grain, stabilized grain, reject, water and energy | drying lot log and moisture test | lot; pass; inlet and outlet mass; wet-basis moisture; energy; duration; reject; stock change | test and weigh before and after every pass | kg; %; kWh; MJ; h | each lot and pass | drying intervention | each dryer or drying area | calculate dry solids and water balance; link every return | calibrated meter, scale and pass history |
| `cp_grading_records` | `grading_handoff` | accepted, downgraded, rework, reject and energy | grading ticket, test and run log | lot; run; pass; grade; moisture; foreign matter; insects; broken fraction; each mass; destination; energy | weigh and classify every exclusive output state | kg; %; kWh; MJ | each lot, run and pass | grading through farm-gate hand-off | each grading location | trace returns to origin and count final destinations once | ticket, test result, scale calibration and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all flows | normalized amount = represented amount × 1,000 / accepted farm-gate grain mass | represented amount; accepted mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_moisture_balance` | pods and grain | dry solids = wet mass × (1 − wet-basis moisture fraction); water removed equals inlet water minus outlet water after rejects and stock change | inlet and outlet mass and moisture; reject; stock change | aligned dry solids and water removed | `mass-balance-identity`; `fao-grain-drying-storage` |
| `calc_mass_closure` | harvest and post-harvest nodes | moisture-aligned input = mutually exclusive outputs + measured loss or release + stock change, within disclosed uncertainty | all linked inlet, outlet, loss and stock records | node closure and unexplained difference | `mass-balance-identity` |
| `calc_soil_n2o` | managed soils | apply the disclosed IPCC tier to measured synthetic, organic, residue and other nitrogen activity; convert N2O-N to N2O by 44/28 | nitrogen activity and selected factors | kg N2O | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain species, crop year, class or colour, grade, moisture, foreign matter, insect damage, broken or split fraction and route. | farm-gate ticket and laboratory or calibrated field test |
| `dq_traceability` | all processes | Link each field, picking, lot, run, pass, return and final destination with stable identifiers. | field-to-lot trace and run history |
| `dq_completeness` | crop cycle | Cover all management events, every staggered picking, all conditioning passes, conditional drying, grading, rework and rejects. | event index and completeness reconciliation |
| `dq_mass_balance` | material nodes | Reconcile moisture-aligned inputs, intended outputs, residues, downgraded material, rework, rejects, losses, releases and stock changes. | closure worksheet with explained variance |
| `dq_representativeness` | published dataset | Report geography, season, fields, varieties or market classes, rainfed or irrigated share, picking routes, post-harvest technologies, drying share and aggregation weights. | metadata register and weighted lot index |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the stated product, Mass and unit-group UUIDs, 1,000 kg amount and every required qualifier. |  |
| `validate_route_parent_delta` | route variants | Require a named parent process and current evidence for every changed input, topology, calculation, data or validation requirement; reject mutually exclusive variants reported for the same field-lot. | `iita-farmers-guide-cowpea-2009`; `iita-west-africa-cowpea-2018` |
| `validate_picking_completeness` | harvest | For synchronized maturity require one declared picking; for staggered maturity require every dated picking and reconciliation to the field total. | `iita-farmers-guide-cowpea-2009` |
| `validate_nutrient_cardinality` | each process | Allow at most one consolidated mineral-fertilizer, organic-fertilizer and nutrient-bearing amendment Product-input card per process; it must bind only to flow-set.agricultural-nutrient-supply version 0.3.0 without a group. Separate N, P, K, manure or amendment cards are prohibited. |  |
| `validate_output_handoffs` | all output nodes | Require an exclusive hand-off for accepted, intended co-product, residue, downgraded, rework, reject and loss states and an explicit attribution decision for each intended co-product. | `mass-balance-identity` |
| `validate_rework` | conditioning, drying and grading | Link every off-spec state to another pass, downgrade, recovery or disposal; retain prior burdens and prevent it from also appearing as accepted output. | `mass-balance-identity` |
| `validate_batch_accounting` | fields, pickings, lots and runs | Require production-mode identifiers on inputs, outputs, cleaning and changeover events and assign every shared burden once. | `mass-balance-identity` |
| `validate_drying` | final drying | When the process is used, require inlet and outlet wet-basis moisture and mass, energy, pass history, rejects, water removed and mass closure; when omitted, require evidence that grain already met the hand-off condition. | `fao-grain-drying-storage` |
| `validate_ranges` | all Flow Cards | Require exactly one complete Range per quantitative Flow Card, including lower, upper, unit, basis, basis kind, evidence kind and a Sources field, with identical values and tokens in English, Chinese and structured output. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for mature dry cowpea grain at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | LCA and footprint studies requiring unprocessed mature whole dry cowpea grain at farm gate |
| excluded_use | green pods or leaves, planting seed sold as seed, cooked or canned grain, flour, splits, industrial fractions, or undisclosed post-gate storage and processing |
| required_metadata | geography; crop year; field and lot coverage; species; variety or market class; colour; grade; moisture; foreign matter; insect damage; broken or split fraction; rainfed or irrigated share; picking pattern; conditioning and drying technology; output destinations; attribution method |
| required_quality_disclosure | primary-data coverage; calibration; sampling; missing data; provisional estimates; mass and moisture closure; factor versions; aggregation weights; range exceptions |
| update_trigger | material change in product boundary, platform identity, Flow Set contract, geography, crop year, management, harvest pattern, post-harvest technology, grade specification, pest condition, output destination, allocation or emission method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iita-west-africa-cowpea-2018` | official_guidance | International Institute of Tropical Agriculture, Guide to cowpea production in West Africa, 2018, https://www.iita.org/wp-content/uploads/2020/05/Cowpea-manualENGLISH.pdf | cowpea identity, field route, harvesting, threshing, cleaning and post-harvest handling |
| `iita-farmers-guide-cowpea-2009` | extension_guidance | IITA, Farmers' Guide to Cowpea Production in West Africa, https://biblio.iita.org/documents/U09aBkDugjeCowpeaNothomDev.PDF-b9aea89d10a5dd347edef9689d6d8a38.pdf | mature dry pod harvest, one versus repeated picking, threshing, winnowing and cleaning |
| `fao-grain-drying-storage` | official_guidance | FAO, Farm structures in tropical climates, Chapter 9: Crop handling, conditioning and storage, https://www.fao.org/4/s1250e/S1250E0u.htm | grain moisture, cleaning, drying and storage-condition distinction |
| `fao-cowpea-postharvest` | official_guidance | FAO INPhO, Cowpea: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Cowpeas.pdf | cowpea insect damage, stabilization and reject states |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O activity data, calculation and factors |
| `mass-balance-identity` | method_factor | Conservation of mass applied to moisture-aligned material inputs, outputs, losses, releases and stock change | mass closure, moisture calculation, hand-off, allocation and rework accounting |
