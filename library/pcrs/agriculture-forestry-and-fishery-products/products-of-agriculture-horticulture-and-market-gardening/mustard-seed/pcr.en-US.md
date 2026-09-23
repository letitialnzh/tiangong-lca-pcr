---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mustard-seed
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Mustard seed

## 1. Scope and Applicability

This PCR covers managed mustard cultivation for seed, separate harvest, cleaning, drying or stabilization, grading, and accepted-seed transfer at the producer or primary-conditioning gate. Applicability to another mustard species requires species, cultivar, route, moisture basis, grade, geography and hand-off. Oil extraction/refining, meal or press cake, mustard flour, condiment manufacture, post-sale seed-treatment services, long-term warehousing and distribution beyond the hand-off are excluded. Rainfed/irrigated, manual/mechanized harvest and ambient/mechanical drying are evidenced route choices and may be aggregated only with recorded shares and separate inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mustard-seed |
| classification_refs | CPC 3.0 01442 (exact) |
| covered_products | Harvested and conditioned mustard seed, principally Brassica juncea, sold as an oilseed at producer/conditioner hand-off |
| excluded_products | Mustard oil, crude/refined oil, mustard meal/press cake, mustard flour, prepared mustard and other condiments, vegetative products |
| representative_product | Seed of B. juncea, clean and stabilized for hand-off |
| production_route | Managed cultivation → harvest and threshing → cleaning and drying/stabilization → grading; irrigation, mechanization and drying technology are parent-activity route deltas |
| market_state | Loose/bulk conditioned seed at producer/conditioner gate before oil, meal, flour or condiment manufacture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conditioned mustard seed accepted at the declared producer or primary-conditioning hand-off |
| How much | 1 kg as-received seed at declared moisture |
| How well | Species/cultivar, accepted grade, moisture and method, foreign-matter basis, intended market, geography, route and gate declared |
| How long or cycle | One declared crop cycle with conditioning linked to its harvest lot |
| reference_flow_link | `mustard_seed_accepted` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Seed of B. juncea `d6490f83-abd7-47ff-990f-3cd7ae018dfa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar; sowing or commodity use; accepted grade; as-received moisture and method; foreign matter basis; country/region; rainfed or irrigated; harvest method; drying route; producer/conditioner hand-off; Production mix, at plant |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and seed-state balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and measured moisture together; convert by dry_mass = wet_mass × (1 − moisture_fraction) and retain the original. |
| `area_yield` | Cultivation and harvest normalization | Mass and area | kg/ha | Record cultivated and harvested area separately; accepted yield uses accepted reference product only. |
| `energy_consistency` | Machinery and conditioning energy | Energy or carrier property | MJ or kWh | Retain carrier and quantity; do not merge fuel and electricity without an explicit conversion. |

## 5. System Boundary

The boundary starts with prepared land and seed, nutrient, water, crop-protection and machinery-service inputs entering managed mustard production. It includes management, harvest/threshing, cleaning, drying/stabilization, grading, within-node rework and accepted-seed hand-off. Residues, field loss, removed foreign matter, downgraded seed and rejects are recorded. Oil/meal/condiment manufacture and downstream distribution are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field at crop-cycle start, with prior crop/land state and seed source disclosed |
| starting_condition_role | Entry condition for managed biological production |
| product_classification_scope | Mustard seed in CPC 3.0 01442; classification does not replace species and market-state qualifiers |
| recursive_input_rule | Same-category sowing seed is an upstream input with a provider dataset or foreground source, not recursively recreated |
| upstream_dataset_requirement | Supplier-specific or regionally representative data for seed, nutrients, energy, irrigation, crop protection and purchased services |
| disclosure | Disclose prior crop/land state, species/cultivar, cycle, geography, irrigation, harvest, drying, moisture/grade gate, rework and upstream datasets |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_crop` | Cultivation through hand-off | Include management, harvest, cleaning, stabilization and grading; exclude oil extraction, oil/meal and condiment manufacture. | `niphm-mustard-ipm`; `agmarknet-mustard-postharvest` |
| `boundary_route_delta` | Alternative routes | Treat rainfed/irrigated, manual/mechanized and ambient/mechanical alternatives as parent-activity deltas; do not merge mutually exclusive routes for one lot. | `nfsm-oilseeds-practices-2018`; `niphm-mustard-ipm` |
| `boundary_soil_emissions` | Managed-soil emissions | Calculate fertilizer-, residue-, urea- and lime-related elementary flows with the declared method and avoid double counting removed or burned residues. | `ipcc-2019-managed-soils` |
| `boundary_conditioning_gate` | Cleaning, drying, stabilization and grading | Retain before/after mass and moisture, grade, downgrade, rejects, foreign matter and hand-off; model storage beyond stabilization separately. | `agmarknet-mustard-postharvest` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed mustard cultivation | `required` | one declared crop cycle; field/operation records | produce mature crop and account management inputs | kg raw-seed equivalent; ha |
| `harvest_capture` | Harvest, threshing and field capture | `required` | separate captured seed, residue and loss hand-off | convert mature crop to raw seed | kg raw seed |
| `clean_dry_stabilize` | Cleaning, drying and stabilization | `required` | primary conditioning lot/period; drying route declared | primary conditioning raw-to-prepared route; drying is a technology delta | kg stabilized seed |
| `grade_handoff` | Grading and producer/conditioner hand-off | `required` | reconcile accepted, downgraded and rejected states | create reference product and destinations; grading mode is a route delta | kg accepted seed |

### Process: Managed mustard cultivation (`managed_cultivation`)

Field-batch production indexed to field and crop cycle. Management inputs and outputs are assigned to that cycle.

#### Inputs

##### Product flows

###### Mustard sowing seed (`planting_seed`)

Same-category upstream seed input; retain provider and sowing-use qualifier.

- Selected flow: Seed of B. juncea `d6490f83-abd7-47ff-990f-3cd7ae018dfa`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured seed issued to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`
- Range: Mustard sowing rate
  - Range role: Typical range (`typical_range`)
  - Lower: 4
  - Upper: 5
  - Unit: kg/ha
  - Basis: per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `nfsm-oilseeds-practices-2018`

###### Fertilizer and nutrient supply (`nutrient_supply`)

One consolidated card covers mineral and organic fertilizers and amendments; foreground composition expands concrete exchanges.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg product and kg nutrient
- Binding: `parameterized`
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Amount rule: measured product mass multiplied by supplier nutrient composition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare, then per kg accepted seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`
- Range: Reported nitrogen application
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 80
  - Unit: kg N/ha
  - Basis: per cultivated hectare; soil-test recommendation controls
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `nfsm-oilseeds-practices-2018`

###### Irrigation water supply (`irrigation_water`)

Conditional on the irrigated route; rainfall is not this product input.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- Amount rule: measured abstraction or delivery by event; zero for verified rainfed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare, then per kg accepted seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`
- Range: Irrigation volume provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/ha
  - Basis: per cultivated hectare; foreground records control
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_products`)

Expand each recorded active ingredient or formulation. The initial lookup found no single identity valid for all sites, so this card remains unresolved.

- Selected flow: Crop-protection product as recorded
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled to application logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare, then per kg accepted seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `niphm-mustard-ipm`
- Range: Crop-protection product provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg product/ha
  - Basis: per cultivated hectare; not a recommended rate
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery energy (`cultivation_energy`)

Expand actual fuels or electricity used for field operations and pumping.

- Selected flow: Energy supply for field machinery and pumping
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: mobile-machinery-fuel
- Amount rule: measured carrier quantity by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cultivated hectare, then per kg accepted seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Cultivation energy provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature mustard crop transferred to harvest (`mature_crop`)

Internal foreground state linking cultivation to harvest; no external database identity is required.

- Selected flow: Mature standing mustard crop, internal foreground state
- Flow property / unit: Mass / kg raw-seed equivalent
- Amount rule: calculated from captured seed plus measured field losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Range: Mature-crop transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg raw-seed equivalent/kg captured seed
  - Basis: per kg captured raw seed; provisional
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cultivation residues and crop loss (`cultivation_residues`)

Internal/deferred until retention, removal, burning, recovery or disposal is declared.

- Selected flow: Cultivation residue and crop loss, internal/deferred disposition
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured or calculated dry matter by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and kg accepted seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Cultivation residue provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg dry matter/kg accepted seed
  - Basis: per kg accepted seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Managed-soil elementary emissions (`managed_soil_emissions`)

Species- and compartment-specific emissions from fertilizer, residues, urea and lime are calculated by the declared method. This umbrella card remains unresolved because one attempted initial lookup could not be completed and a concrete dataset must expand each species before publication.

- Selected flow: Managed-soil emission, species- and compartment-specific
- Flow property / unit: Mass / kg emission
- Amount rule: calculated from collected nutrient, residue, urea and lime records with the declared method and factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted mustard seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Managed-soil emission provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg emission/kg accepted seed
  - Basis: per kg accepted seed; broad provisional screen, with method calculation controlling
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, threshing and field capture (`harvest_capture`)

This node is independent because it converts standing crop to collected seed and separately determines residue and shattering loss.

#### Inputs

##### Product flows

###### Mature crop from cultivation (`mature_crop_input`)

Internal transfer carrying field and crop-cycle identity.

- Selected flow: Mature standing mustard crop, internal foreground state
- Flow property / unit: Mass / kg raw-seed equivalent
- Amount rule: equals linked mature_crop output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `iso-14044-2006`
- Range: Internal transfer equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg linked output
  - Basis: per linked cultivation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Harvest machinery energy (`harvest_energy`)

Fuel or electricity for cutting, combining and threshing is recorded for the chosen route.

- Selected flow: Energy supply for harvest and threshing
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: mobile-machinery-fuel
- Amount rule: measured carrier quantity by operation and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw seed captured
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Range: Harvest energy provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg raw seed
  - Basis: per kg raw seed captured
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw collected mustard seed (`raw_seed`)

Internal state passed to conditioning with lot and moisture retained.

- Selected flow: Raw collected mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass at harvest hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Range: Raw seed capture fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg mature-crop equivalent
  - Basis: per kg mature-crop raw-seed equivalent; provisional
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue and shattering loss (`harvest_loss`)

Keep retained, removed and burned residues and seed loss distinct by destination.

- Selected flow: Harvest residue and seed loss, internal/deferred disposition
- Flow property / unit: Mass / kg dry matter or kg seed
- Amount rule: mass-balance difference by material and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `niphm-mustard-ipm`; `ipcc-2019-managed-soils`
- Range: Harvest loss provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg seed equivalent/kg captured seed
  - Basis: per kg captured raw seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, drying and stabilization (`clean_dry_stabilize`)

Raw harvested seed becomes clean seed stabilized to a declared moisture; ambient and mechanical drying are distinct routes.

#### Inputs

##### Product flows

###### Raw seed from harvest (`raw_seed_input`)

Internal transfer retaining harvest lot, mass, moisture and impurity data.

- Selected flow: Raw collected mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: equals linked raw_seed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `iso-14044-2006`
- Range: Internal raw-seed transfer equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg linked output
  - Basis: per linked harvest output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Conditioning energy (`conditioning_energy`)

Expand actual electricity, fuel or heat; verified ambient drying has zero purchased drying energy.

- Selected flow: Energy supply for cleaning and drying
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: measured carrier quantity by lot or continuous period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Conditioning energy provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg stabilized seed
  - Basis: per kg stabilized seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water for cleaning (`conditioning_water`)

Conditional on wet cleaning; verified dry cleaning has zero process-water input.

- Selected flow: Process water for seed cleaning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: process-water
- Amount rule: measured delivered water by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stabilized seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Cleaning-water provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg stabilized seed
  - Basis: per kg stabilized seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized mustard seed (`stabilized_seed`)

Clean seed at declared moisture handed to grading as an internal state.

- Selected flow: Stabilized mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: measured output mass and moisture after conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `agmarknet-mustard-postharvest`
- Range: Stabilized seed moisture
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 8
  - Unit: percent wet basis
  - Basis: at short-term storage or hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `agmarknet-mustard-postharvest`

##### Waste flows

###### Removed foreign matter and conditioning loss (`conditioning_rejects`)

Keep foreign matter, dust and off-spec seed separate; rework returns once to this node.

- Selected flow: Conditioning rejects, internal/deferred disposition
- Flow property / unit: Mass / kg
- Amount rule: measured removals plus mass-balance loss excluding measured water removal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Conditioning rejects provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg raw seed input
  - Basis: per kg raw seed input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grading and producer/conditioner hand-off (`grade_handoff`)

Each lot or run reconciles accepted, downgraded, reworked and rejected states before hand-off.

#### Inputs

##### Product flows

###### Stabilized seed for grading (`stabilized_seed_input`)

Internal transfer retaining moisture, impurity and lot identity.

- Selected flow: Stabilized mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: equals linked stabilized_seed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grading lot or run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Sources: `iso-14044-2006`
- Range: Internal stabilized-seed transfer equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg linked output
  - Basis: per linked conditioning output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Grading energy (`grading_energy`)

Expand actual energy for screens, conveyors and changeover cleaning.

- Selected flow: Energy supply for grading
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: measured carrier quantity by grading run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Grading energy provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: MJ/kg accepted seed
  - Basis: per kg accepted seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mustard seed (`mustard_seed_accepted`)

Reference product at the producer or primary-conditioning hand-off; downgraded and rejected material is excluded.

- Selected flow: Seed of B. juncea `d6490f83-abd7-47ff-990f-3cd7ae018dfa`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted mass at declared moisture and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted mustard seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Sources: `agmarknet-mustard-postharvest`
- Range: Reference-flow equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Downgraded mustard seed (`downgraded_seed`)

Internal/deferred product state until an alternate destination dataset is established from foreground evidence.

- Selected flow: Downgraded mustard seed, internal/deferred destination
- Flow property / unit: Mass / kg
- Amount rule: measured downgraded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Downgraded seed provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg stabilized input
  - Basis: per kg stabilized seed input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects (`grading_rejects`)

Deferred waste state until composition and destination are known; rework returns to grading and retains its burden.

- Selected flow: Grading reject, internal/deferred disposition
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Grading rejects provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg stabilized input
  - Basis: per kg stabilized seed input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | Accepted seed route | Use accepted seed as quantitative reference; residues, losses and rejects without demonstrated product function are not co-products. | `iso-14044-2006` |
| `allocation_route_outputs` | Downgraded or saleable output | First subdivide by field, lot, operation and destination; then prefer physical causality, with another relationship disclosed and tested when necessary. | `iso-14044-2006` |
| `allocation_rework` | Rework and off-spec seed | Keep burdens with the originating lot, return mass to the named node, count energy/loss once, and exclude it from accepted output until acceptance. | `iso-14044-2006` |
| `allocation_run_period` | Shared runs and changeovers | Assign once using measured run time, throughput or another causal driver and prevent duplication. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_records` | `managed_cultivation` | seed; nutrients; water; crop protection; energy; residues | field and purchase records | field_id; cycle; area; species; product; mass; composition; water; carrier; energy; destination | reconcile logs, invoices, meters and application records | kg; m3; MJ; kWh; ha | each operation | complete crop cycle | all fields and providers | sum by field/route and divide by linked accepted seed | invoices, calibration, logs, field map and reconciliation |
| `cp_harvest_mass_balance` | `harvest_capture` | crop; energy; raw seed; residues; loss | harvest lot records | field_id; lot_id; method; energy; seed_mass; moisture; residue; loss; destination | scales, fuel logs and field-loss sampling | kg; percent; MJ; kWh | each harvest lot | all cycle harvests | all fields and contractors | reconcile seed, residue and loss | calibration, sampling, invoices and lot linkage |
| `cp_conditioning_records` | `clean_dry_stabilize` | raw seed; energy; water; stabilized seed; rejects | lot/run records | lot_id; route; input/output mass; moisture; energy; water; foreign_matter; reject; destination | scales, moisture tests, meters and operating logs | kg; percent; MJ; kWh; m3 | each lot or period | all linked lots | each site | lot dry-matter and wet-mass balance | calibration, method, meter logs and signed balance |
| `cp_grading_handoff` | `grade_handoff` | stabilized input; energy; accepted; downgrade; reject | grading/dispatch records | lot_id; run_id; input; moisture; grade; accepted; downgrade; reject; destination; energy | scales, grader records, tests and dispatch documents | kg; percent; MJ; kWh | each run and hand-off | all included lots | each grading site | reconcile all states; accepted mass is denominator | calibration, grade certificate, dispatch and destination |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | seed mass | dry_mass_kg = wet_mass_kg × (1 − moisture_percent/100); report original too | wet mass; moisture; method | dry and declared-basis mass | `agmarknet-mustard-postharvest` |
| `calc_accepted_yield` | crop cycle | accepted_yield = accepted_seed_mass / harvested_area; exclude downgrade/reject | accepted mass; area | kg/ha | `iso-14044-2006` |
| `calc_nutrient_inputs` | nutrient card | sum product mass × supplier nutrient fraction separately for N, P and K | mass; composition | nutrient/field and /kg seed | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest; conditioning; grading | moisture-adjusted input = outputs + loss; investigate residual | masses; moisture; destinations | node balance | `iso-14044-2006` |
| `calc_managed_soil_emissions` | cultivation | apply declared method, preferring country factors, to synthetic/organic N, residues, urea and lime | N; residues; urea; lime; factors | species/compartment flows | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | seed states | Preserve species/cultivar, lot, moisture, grade, use, geography, route and hand-off. | lot genealogy; tests; dispatch |
| `dq_temporal` | all data | Cover a full cycle and linked lots; disclose multi-year averaging and exceptional weather. | dated records |
| `dq_completeness` | all cards | Reconcile accepted, downgraded, reworked, rejected, residue and loss paths; explain zero/missing values. | signed balances |
| `dq_measurement` | mass; moisture; water; energy | Use calibrated instruments or documented estimates; retain units, conversions and uncertainty. | calibration and methods |
| `dq_route` | alternatives | Store route shares and changed inventories; do not average mutually exclusive routes without weights. | route evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require fixed UUID, Mass property/unit group, 1 kg, CPC context and all qualifiers; base name alone is insufficient. |  |
| `validate_route_boundary` | process map | Require four parent nodes and route deltas; reject oil extraction, meal, flour or condiment manufacture. | `niphm-mustard-ipm`; `agmarknet-mustard-postharvest` |
| `validate_nutrient_card` | cultivation | At most one agricultural-nutrient-supply@0.3.0 card per process, set-level only and without group. |  |
| `validate_mass_balance` | harvest; conditioning; grading | Reconcile input, internal/accepted output, downgrade, rework, rejects, residues, moisture change and loss. | `iso-14044-2006` |
| `validate_rework_rejects` | rejects | Each reject needs rework, downgrade, recovery, treatment or discard; accepted output excludes unresolved rejects and duplicated loops. | `iso-14044-2006` |
| `validate_mode_attribution` | batch/continuous | Link inputs, outputs, cleaning and changeovers to runs or periods and prevent duplicate shared burdens. | `iso-14044-2006` |
| `validate_stabilization` | conditioned seed | Require before/after mass, moisture, drying route and hand-off; moisture above 8% for claimed short-term storage needs reviewed evidence. | `agmarknet-mustard-postharvest` |
| `validate_ranges` | all cards | Require exactly one Range per card in both languages and projection with matching fields. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system package for mustard seed at producer/conditioner hand-off |
| downstream_use | `secondary_dataset`; `background_dataset` after compatibility review |
| allowed_use | Crop-production and downstream oilseed systems requiring the declared gate, moisture and grade |
| excluded_use | Treating oil, meal, flour or condiment manufacture as included; unadjusted different species, gate or route |
| required_metadata | species/cultivar; CPC context; geography; cycle; prior land state; irrigation; harvest; drying; lots; moisture; grade; providers; allocation; route shares |
| required_quality_disclosure | coverage; measured/estimated shares; missing flows; balance residuals; calibration; uncertainty; aggregation; source age; provisional ranges |
| update_trigger | Changed species, route, grade/moisture gate, topology, material input/yield, allocation, fixed identity or invalidated source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `nfsm-oilseeds-practices-2018` | `official_guidance` | Government of India, National Food Security Mission, Package of Practices for Oilseeds (2018), https://www.nfsm.gov.in/ReadyReckoner/Oilseeds/PackagePractice_OS2018.pdf | route; sowing; nutrient; irrigation |
| `niphm-mustard-ipm` | `official_guidance` | National Institute of Plant Health Management, AESA Based IPM Package: Mustard/Rapeseed, https://www.niphm.gov.in/IPMPackages/Mustard.pdf | cultivation; harvest; crop protection; post-harvest |
| `agmarknet-mustard-postharvest` | `official_guidance` | Directorate of Marketing and Inspection, Post-Harvest Profile of Mustard-Rapeseed, https://www.agmarknet.gov.in/Others/mustard-rapeseed-profile.pdf | cleaning; drying; 8% moisture; hand-off |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | soil emissions; nutrient and residue accounting |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation; balances; calculations |
