---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.ginger-raw
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Ginger, raw

## 1. Scope and Applicability

This PCR covers foreground production of fresh, unprocessed ginger rhizomes (*Zingiber officinale*) through farm-gate hand-off. It includes rainfed or irrigated field production, seed-rhizome preparation, lifting, field handling, sorting and grading, and washing only when performed before hand-off. Peeling, scraping, curing, drying, slicing, powdering, preservation, extraction, industrial processing, post-farm storage, transport and consumer packaging are excluded. Dry-ginger recovery shall never represent the reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.ginger-raw |
| classification_refs | CPC 3.0 01657, Ginger, raw |
| covered_products | Whole fresh raw ginger rhizomes, with loose soil removed and optionally washed and surface-drained before farm-gate hand-off |
| excluded_products | Seed ginger sold for planting; peeled, cured, dried, sliced, powdered, preserved, extracted or otherwise processed ginger |
| representative_product | Marketable whole fresh rhizomes of *Zingiber officinale* |
| production_route | Managed production from seed rhizomes, lifting, conditional primary conditioning, and sorting/grading |
| market_state | Fresh, unprocessed, whole and firm at farm gate; washing state and commercial grade declared |

The managed production parent is `field_production`. Rainfed and irrigated routes differ in irrigation and pumping records. Manual and mechanized lifting differ in energy records. Washed and unwashed routes differ in water, energy and effluent records. These alternatives can coexist across lots, but each lot selects its actual route and mutually exclusive burdens are not combined.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fresh raw ginger rhizomes at farm-gate hand-off |
| How much | 1 kg |
| How well | Whole, sound, firm and marketable; practically free of visible soil and foreign matter; washing state and grade declared |
| How long or cycle | One single-period crop cycle and its linked harvest, conditioning and grading lots; no storage |
| reference_flow_link | `accepted_fresh_ginger` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ginger, raw `e30e5bf0-243f-4388-a2a0-8fdee391b4a9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or cultivar; geography; crop dates; rainfed or irrigated; lifting technology; washed or unwashed; commercial grade; fresh raw state; farm-gate hand-off |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted fresh ginger | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net fresh mass after loose soil removal and, when washed, after surface water drains. |
| `area_to_reference` | field records | Mass | kg/kg reference product | Divide crop-cycle quantities by accepted mass from the same area and cycle. |
| `nutrient_product_mass` | nutrient supply | Mass | kg product and kg nutrient | Collect actual products and compositions separately; nutrient attributes shall not duplicate product exchanges. |
| `water_volume` | irrigation and washing | Volume | m3 | Measure supplied volume or document density assumptions for conversion. |
| `energy_conversion` | fuel and electricity | Energy | MJ | Retain original carrier records and document conversion factors. |

## 5. System Boundary

The foreground begins when seed rhizomes and management inputs enter the represented crop cycle and ends with accepted fresh raw ginger at farm gate. It includes preparation, field management, lifting, conditional washing and surface draining, and grading.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Seed rhizomes ready for preparation or planting, with source, retained share, disease status, storage loss where relevant and upstream coverage declared |
| starting_condition_role | Biological propagation input to one managed ginger crop cycle |
| product_classification_scope | Fresh raw ginger rhizomes covered by this PCR |
| recursive_input_rule | Retained ginger used as seed is recorded once as an input with prior-cycle upstream coverage or disclosed cut-off; it is not accepted output of the represented cycle |
| upstream_dataset_requirement | Seed, nutrient products, water, energy, crop protection and services need compatible upstream datasets or disclosed unresolved coverage |
| disclosure | Declare cultivar, location, area, dates, seed source, production mode, irrigation, lifting technology, washing state, grading scheme and reject destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_fresh` | product state | Keep the reference product fresh and raw; exclude peeling, curing, drying, slicing, powdering, preservation and extraction. | `codex-cxs-218-1999`; `fao-ginger-postharvest-compendium` |
| `boundary_seed` | seed rhizomes | Include planted seed mass and preparation treatment for the represented cycle. | `aicrps-ginger-package`; `icar-ccari-ginger` |
| `boundary_field` | managed production | Include management inputs, field energy, direct emissions, residues and losses. | `aicrps-ginger-package`; `ipcc-2019-managed-soils` |
| `boundary_harvest` | lifting | Model lifting independently because it creates a collected lot with measurable losses. | `aicrps-ginger-package` |
| `boundary_conditioning` | primary conditioning | Include pre-gate washing only with its input, output, water, energy and effluent. | `icar-ccari-ginger`; `codex-cxs-218-1999` |
| `boundary_grading` | grading | Enumerate accepted, downgraded and rejected states and every hand-off. | `codex-cxs-218-1999` |
| `boundary_route_delta` | alternatives | Use the rainfed/irrigated, manual/mechanized and washed/unwashed route actually performed for each lot. | `aicrps-ginger-package`; `icar-ccari-ginger` |
| `boundary_post_gate` | downstream | Exclude post-farm storage, transport, packaging and processing from this reference result. | `codex-cxs-218-1999` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Seed preparation and managed field production | `required` | Always | Managed biological production parent with rainfed/irrigated alternative production route delta; crop-cycle indexed | Accepted mass from represented field and cycle |
| `harvest_lifting` | Harvest and lifting | `required` | Always | Independent capture with manual/mechanized alternative technology route delta; harvest-lot indexed | Raw lifted rhizome mass |
| `primary_conditioning` | Primary conditioning | `conditional` | Washing, re-washing or powered soil removal before hand-off | Raw-to-prepared interface; batch indexed | Prepared rhizome mass |
| `sorting_grading` | Sorting and grading | `required` | Always | Accepted, downgraded and rejected states; batch indexed | Incoming prepared mass |

### Process: Seed preparation and managed field production (`field_production`)

The managed object is a ginger crop propagated from seed rhizomes in a declared field and crop cycle. Inputs are classified as propagation, nutrient supply, water, crop protection or energy. The hand-off is harvestable in-soil rhizomes; residues and losses remain separate.

#### Inputs

##### Product flows

###### Seed rhizomes for planting (`seed_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Ginger seed rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Sum planted seed-rhizome mass by source and divide by accepted mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_inputs`
- Sources: `aicrps-ginger-package`; `csir-traditional-ginger-2009`
- Range: Source-supported seed-rhizome intensity
  - Range role: Typical range (`typical_range`)
  - Lower: 0.0375
  - Upper: 0.333
  - Unit: kg/kg accepted fresh ginger
  - Basis: 1.5-2.0 t seed/ha divided by reported fresh yields of 6-40 t/ha
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `aicrps-ginger-package`; `icar-ccari-ginger`; `csir-traditional-ginger-2009`

###### Consolidated agricultural nutrient-supply products (`nutrient_supply_products`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Agricultural nutrient-supply products
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum every applied mineral fertilizer, organic fertilizer, manure, compost, green mulch and nutrient-bearing amendment without double counting nutrient attributes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_products`
- Sources: `aicrps-ginger-package`; `icar-ccari-ginger`
- Range: Regional package-of-practice mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.38
  - Upper: 10.1
  - Unit: kg applied products/kg accepted fresh ginger
  - Basis: 15-30 t/ha manure, up to 30 t/ha green mulch and 6-40 t/ha fresh yield; actual products govern
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `aicrps-ginger-package`; `icar-ccari-ginger`; `csir-traditional-ginger-2009`

###### Irrigation water supplied to the field (`irrigation_water`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter or calculate supplied irrigation volume; record zero for a rainfed lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `aicrps-ginger-package`
- Range: Irrigated-route water screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg accepted fresh ginger
  - Basis: zero for rainfed; upper screen from 90-100 ha-cm water and 10-15 t/ha yield
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `aicrps-ginger-package`

###### Crop-protection and seed-treatment products (`crop_protection_products`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Actual formulated crop-protection products
- Flow property / unit: Mass / kg
- Amount rule: Sum formulated product mass applied to seed and field
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_inputs`
- Sources: `aicrps-ginger-package`; `icar-ccari-ginger`
- Range: Provisional formulated-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg accepted fresh ginger
  - Basis: broad replaceable screen; zero when no product is applied
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Field energy carriers and electricity (`field_energy`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Field energy carriers and electricity
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Convert actual carriers used for tillage, planting, irrigation and crop care to MJ while retaining individual exchanges
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg accepted fresh ginger
  - Basis: broad replaceable screen from manual rainfed to powered irrigated production
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### Outputs

##### Product flows

###### Harvestable in-soil ginger rhizomes (`harvestable_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Harvestable in-soil ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Estimate or reconcile fresh rhizome mass immediately before lifting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_reconciliation`
- Sources: `mass-balance-identity`
- Range: Crop-to-accepted mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg accepted fresh ginger
  - Basis: accepted output plus measured harvest, conditioning and grading losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Field residues, diseased plants and unrecovered rhizomes (`field_residues_losses`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Field crop residues and biological losses
- Flow property / unit: Mass / kg
- Amount rule: Measure or sample fresh mass by residue class and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_reject_routes`
- Sources:
- Range: Provisional field-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg fresh residue/kg accepted fresh ginger
  - Basis: broad replaceable screen for residue and pre-harvest loss
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

###### Direct nitrous oxide nitrogen from managed soil (`direct_n2o_n`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Dinitrogen monoxide nitrogen, to air
- Flow property / unit: Mass / kg N2O-N
- Amount rule: Multiply applicable nitrogen input by the selected direct-soil factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg nitrogen input
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_products`
- Sources: `ipcc-2019-managed-soils`
- Range: IPCC aggregated direct-soil factor uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0.002
  - Upper: 0.018
  - Unit: kg N2O-N/kg N input
  - Basis: applicable synthetic, organic-amendment and crop-residue nitrogen
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils`

### Process: Harvest and lifting (`harvest_lifting`)

This independent node removes rhizomes from the managed field. It hands off a raw lifted lot and separates intended output from soil, tops, roots, damage and unrecovered loss.

#### Inputs

##### Product flows

###### Harvestable rhizomes received from field production (`harvest_input_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Harvestable in-soil ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Equal the matched field-production hand-off
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_yield_reconciliation`
- Sources: `mass-balance-identity`
- Range: Linked incoming rhizome mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg accepted fresh ginger
  - Basis: exact process-link equality to field hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Harvest energy carriers and electricity (`harvest_energy`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Harvest energy carriers and electricity
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record carriers used for lifting and handling; zero may represent fully manual lifting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg raw lifted rhizomes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional lifting-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: MJ/kg raw lifted rhizomes
  - Basis: broad replaceable screen for manual through powered lifting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### Outputs

##### Product flows

###### Raw lifted ginger rhizomes (`raw_lifted_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Raw lifted fresh ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Weigh the collected lot before conditioning or grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lots`
- Sources: `mass-balance-identity`
- Range: Lifted-to-accepted mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.4
  - Unit: kg/kg accepted fresh ginger
  - Basis: accepted output plus measured conditioning and grading losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Harvest residues and lifting losses (`harvest_residues_losses`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Roots, tops, damaged rhizomes and unrecovered harvest losses
- Flow property / unit: Mass / kg
- Amount rule: Measure or sample each residue class and record destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_reject_routes`
- Sources:
- Range: Provisional harvest-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg accepted fresh ginger
  - Basis: broad replaceable screen for roots, tops, damaged and unrecovered rhizomes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

### Process: Primary conditioning (`primary_conditioning`)

The raw state is freshly lifted rhizomes bearing roots or soil. The prepared state is unpeeled fresh rhizome with loose soil removed, optionally washed and surface-drained. Unwashed lots carry zero washing input.

#### Inputs

##### Product flows

###### Raw lifted rhizomes received for conditioning (`conditioning_input_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Raw lifted fresh ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Equal the matched harvest output for the same lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_harvest_lots`
- Sources: `mass-balance-identity`
- Range: Linked raw-lot mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.4
  - Unit: kg/kg accepted fresh ginger
  - Basis: exact process-link equality to harvest hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Washing water supplied (`washing_water`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Process water for ginger washing
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter washing and re-washing water; zero for an unwashed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg prepared fresh rhizomes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `icar-ccari-ginger`
- Range: Provisional wash-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3/kg prepared fresh rhizomes
  - Basis: zero for unwashed lots; broad replaceable screen for washing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Conditioning energy carriers and electricity (`conditioning_energy`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Conditioning energy carriers and electricity
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record pumps, washers and handling energy; zero for unpowered unwashed handling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg prepared fresh rhizomes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: MJ/kg prepared fresh rhizomes
  - Basis: broad replaceable screen from unpowered handling to powered washing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### Outputs

##### Product flows

###### Prepared fresh rhizomes for grading (`prepared_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Unpeeled fresh ginger rhizomes, loose soil removed
- Flow property / unit: Mass / kg
- Amount rule: Weigh after soil removal and after surface draining when washed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `codex-cxs-218-1999`; `mass-balance-identity`
- Range: Prepared-to-accepted mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.3
  - Unit: kg/kg accepted fresh ginger
  - Basis: accepted output plus measured downgrade and reject mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Washing effluent and separated soil (`conditioning_effluent`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Ginger washing effluent with separated soil
- Flow property / unit: Volume / m3
- Amount rule: Measure effluent; retain separated-solids mass and destination as batch attributes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg prepared fresh rhizomes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `mass-balance-identity`
- Range: Wash-effluent balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3/kg prepared fresh rhizomes
  - Basis: zero for unwashed lots and no greater than supplied water without documented additions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Sorting and grading (`sorting_grading`)

Prepared rhizomes are classified into accepted, downgraded marketable and rejected states. Each state has a destination. Dirty but otherwise acceptable material may return once to an identified conditioning batch without duplicate counting.

#### Inputs

##### Product flows

###### Prepared rhizomes received for grading (`grading_input_rhizomes`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Prepared fresh ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Equal the matched prepared output, or raw lifted output for a documented unconditioned route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_grading_batch`
- Sources: `mass-balance-identity`
- Range: Linked grading-input mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.3
  - Unit: kg/kg accepted fresh ginger
  - Basis: exact lot link to the preceding hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Grading energy carriers and electricity (`grading_energy`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Grading energy carriers and electricity
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record conveyors, graders and handling energy; zero for manual grading
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional grading-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: MJ/kg grading input
  - Basis: broad replaceable screen from manual to powered grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### Outputs

##### Product flows

###### Accepted fresh raw ginger at farm gate (`accepted_fresh_ginger`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Ginger, raw `e30e5bf0-243f-4388-a2a0-8fdee391b4a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Exactly 1 kg accepted reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Exact reference output
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted fresh ginger
  - Basis: exact reference-flow identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded marketable fresh ginger (`downgraded_fresh_ginger`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Downgraded marketable fresh ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh each downgraded grade and destination; exclude it from accepted mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Sources: `codex-cxs-218-1999`
- Range: Provisional downgraded-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg accepted fresh ginger
  - Basis: broad replaceable screen; actual grade mass governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

###### Rejected ginger and grading residues (`grading_rejects`)

Record this flow at the stated process boundary and reconcile it to the linked cycle or batch and destination.

- Selected flow: Rejected ginger and grading residues
- Flow property / unit: Mass / kg
- Amount rule: Weigh each rejected state and final route; a re-wash return is excluded until final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh raw ginger
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_reject_routes`
- Sources: `codex-cxs-218-1999`
- Range: Provisional grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg accepted fresh ginger
  - Basis: broad replaceable screen after any declared re-wash
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground system | Prefer subdivision and direct measurement by field, crop cycle, harvest lot and handling batch. | `mass-balance-identity` |
| `allocation_cycle` | field inputs | Attribute all inputs to the represented crop cycle before normalization; allocate shared records by measured area-time or another causal driver. | `mass-balance-identity` |
| `allocation_run` | runs and changeovers | Link inputs, outputs, cleaning and changeover to one run or period; allocate each shared event once and prevent duplicate downstream charging. | `mass-balance-identity` |
| `allocation_routes` | alternatives | Apply route deltas only to lots using them; do not combine mutually exclusive route burdens. | `mass-balance-identity` |
| `allocation_downgrade` | downgraded product | Keep marketable downgrade as a separate product; after subdivision, declare physical or economic allocation and sensitivity. | `mass-balance-identity` |
| `allocation_reject` | rejects and rework | Re-washed material retains prior burdens and gains only incremental burdens; accepted output excludes unresolved rejects and final treatment follows the declared route. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle_inputs` | `field_production` | seed and crop protection | invoices, stock and field logs | cycle, field, product, seed source, formulation, quantity, date, area | Reconcile purchases, stock and applications | original unit and kg | each event | complete crop cycle | each field | Sum by actual product and cycle | invoice, scale and stock reconciliation |
| `cp_nutrient_products` | `field_production` | all nutrient products | invoice, composition and application log | product, mass, composition, dry matter, date, area | Collect each actual product separately | kg product and nutrient | each application | complete cycle | each field | Sum products once; calculate nutrients from composition | invoice, label/analysis and log |
| `cp_irrigation_records` | `field_production` | irrigation | meter or discharge-time log | event, meter, rate, duration, source, area | Meter or rate × time | m3 | each event | complete cycle | each irrigated field | Sum events; rainfed explicitly zero | calibration or discharge test |
| `cp_energy_records` | all processes | energy | invoice, meter or equipment log | process, cycle/batch, carrier, quantity, unit, factor, runtime | Record carrier-specific use | original unit, kWh, MJ | each event/batch | complete period | each site | Convert and allocate shared use once | invoice, meter and conversion source |
| `cp_yield_reconciliation` | `field_production` | yield hand-off | sampling and mass ledger | field, cycle, lot, sample area/mass, estimated mass, outputs/losses | Stratified sampling plus reconciliation | kg and ha | each lot | harvest period | each field | Scale samples and reconcile downstream | design, scale checks, ledger |
| `cp_harvest_lots` | `harvest_lifting` | lifted rhizomes | weigh ticket and lot log | cycle, lot, method, gross, tare, net, time | Calibrated lot weighing | kg | each lot | complete harvest | each field | Sum linked net lots | ticket and calibration |
| `cp_conditioning_batch` | `primary_conditioning` | washing and prepared output | batch, meter and weight records | batch, input lots, washing/rewash, water, energy, output, effluent, solids | Meter and weigh each batch | kg, m3, MJ | each batch | complete conditioning | each site | Reconcile all states by batch | calibration and batch sheet |
| `cp_grading_batch` | `sorting_grading` | grade outputs | grading sheet and weights | batch, input, scheme, accepted, downgrade, reject, destination | Weigh each state | kg | each batch | complete grading | each site | Reconcile mutually exclusive states | calibration and grade specification |
| `cp_residue_reject_routes` | all processes | residues, losses, rejects and rework | route and weigh/sample record | process, cycle/batch, state, mass, method, destination, rework link | Weigh or representative sample | kg | each event/batch | complete system | each field/site | Sum by state and final destination | ticket/sample and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | crop-cycle flows | amount / accepted mass from same cycle | collected amount; accepted mass | amount/kg accepted ginger | `mass-balance-identity` |
| `calc_product_nutrients` | nutrients | product mass × documented nutrient fraction; retain product exchange | mass; composition | nutrient mass | `mass-balance-identity` |
| `calc_irrigation` | irrigation | meter difference or discharge × runtime | meter/rate; time | m3 | `mass-balance-identity` |
| `calc_energy` | energy | carrier quantity × documented conversion | carrier and factor | MJ by carrier | `mass-balance-identity` |
| `calc_direct_n2o` | field N2O | applicable N × selected EF1; use 44/28 only to convert N2O-N to N2O | N; EF1 | kg N2O-N and optional N2O | `ipcc-2019-managed-soils` |
| `calc_mass_reconciliation` | each node | input = products + wastes + stock change + documented soil/water/moisture difference | all linked states | residual | `mass-balance-identity` |
| `calc_shared_run` | shared equipment | allocate once by throughput or runtime | shared input; driver | attributed input | `mass-balance-identity` |
| `calc_downgrade_allocation` | downgrade | apply declared allocation after subdivision and report sensitivity | masses and values | allocated burdens | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve verified UUID and qualifiers. | metadata and flow comment |
| `dq_temporal` | cycle | Cover planting through linked farm-gate batches. | dated logs |
| `dq_completeness` | inventory | Reconcile stock, applications, all products, residues and losses. | ledger |
| `dq_seed` | seed | Distinguish purchased and retained seed and upstream coverage. | source and planting records |
| `dq_nutrients` | nutrients | Retain actual products and composition without duplicate exchanges. | labels, analyses, invoices |
| `dq_routes` | alternatives | Record actual route per lot; weighted primary data are required for mixes. | route fields |
| `dq_instruments` | measurements | Calibrate instruments or document method and uncertainty. | certificates/method |
| `dq_emissions` | emissions | State factor tier, climate, N basis, sources and conversion. | workbook and citation |
| `dq_rejects` | rejects | Every reject has one rework/downgrade/recovery/treatment/disposal link and final state. | route and destination records |
| `dq_ranges` | QA | Investigate outliers; ranges do not replace records and reasoned ranges are provisional. | variance note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | Require exactly 1 kg accepted fresh raw ginger with specified identities and qualifiers. | `mass-balance-identity` |
| `validate_raw_state` | scope | Fail if accepted output is peeled, cured, dried, sliced, powdered, preserved or extracted. | `codex-cxs-218-1999`; `fao-ginger-postharvest-compendium` |
| `validate_parent_delta` | routes | Require the field parent and changed inventory categories for irrigation, lifting and washing alternatives. | `aicrps-ginger-package`; `icar-ccari-ginger` |
| `validate_route_exclusion` | alternatives | Require one actual route per lot and prevent mutually exclusive burden double counting. | `mass-balance-identity` |
| `validate_nutrient_card` | field | Require at most one consolidated nutrient Product input bound only to set 0.3.0 without group; actual products stay separate in collection. | `mass-balance-identity` |
| `validate_process_links` | graph | Require cycle, harvest-lot, conditioning-batch and grading-batch links and matching hand-offs. | `mass-balance-identity` |
| `validate_batch_attribution` | runs | Index inputs, outputs, cleaning and changeover to a run/period and prevent duplicate shared burdens. | `mass-balance-identity` |
| `validate_washing` | conditioning | Washed lots require water, prepared mass and effluent; unwashed lots require zero washing inputs and declared dry handling. | `icar-ccari-ginger`; `mass-balance-identity` |
| `validate_grades` | grading | Require accepted plus downgraded or rejected state, and a hand-off for each state. | `codex-cxs-218-1999` |
| `validate_rework` | rework | Identify producing and receiving nodes for each return; exclude unresolved rejects from accepted output. | `mass-balance-identity` |
| `validate_mass_balance` | each node | Explain residuals including soil, surface water, moisture and losses. | `mass-balance-identity` |
| `validate_ranges` | flow cards | Require exactly one complete aligned Range per card and investigate outliers without replacing foreground values. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for accepted fresh raw ginger at farm gate |
| downstream_use | Secondary or background dataset for systems requiring fresh raw ginger |
| allowed_use | Compatible geography, cultivar, cycle, route, technology, washing state, grade and hand-off |
| excluded_use | Seed ginger; dried, cured, powdered, preserved or extracted ginger; post-farm storage, packaging or transport |
| required_metadata | UUID, geography, cultivar, area, dates, seed source, routes, yield, actual nutrient and protection products, water, energy, grades, rejects and data year |
| required_quality_disclosure | Primary-data share, estimation, outliers, instrument quality, upstream gaps, emission method, allocation and residuals |
| update_trigger | Material change in cultivar, geography, yield, seed, nutrients, irrigation, mechanization, washing, grading, reject route, emission method or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `aicrps-ginger-package` | extension_guidance | AICRPS, *Package of Practices – Ginger*, https://aicrps.res.in/Extension%20Pamphlets/Ginger/English/Package%20of%20practices%20Ginger.pdf | seed, nutrients, mulch, irrigation, harvest, yield and route |
| `icar-ccari-ginger` | official_guidance | ICAR-CCARI, *Crop: Ginger*, https://ccari.res.in/dss/ginger.html | seed, production, nutrients, washing, harvest age and fresh yield |
| `csir-traditional-ginger-2009` | literature | Rahman et al. (2009), *Traditional practices of ginger cultivation in Northeast India*, http://nopr.niscpr.res.in/handle/123456789/2969 | seed and green yield range; route diversity |
| `codex-cxs-218-1999` | standard | Codex CXS 218-1999, *Standard for Ginger*, https://workspace.fao.org/sites/codex/Standards/CXS%20218-1999/CXS_218e.pdf | fresh identity, condition, cleaning, washing and grades |
| `fao-ginger-postharvest-compendium` | handbook | FAO INPhO, *Ginger: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Ginger.pdf | separating fresh handling from downstream processing |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Vol. 4 Ch. 11 Table 11.1, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | direct N2O method and EF1 uncertainty |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for linked foreground records | hand-offs, reconciliation, reference output and routing |
