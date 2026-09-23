---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Castor oil seeds

## 1. Scope and Applicability

This PCR covers managed production of *Ricinus communis* and delivery of harvested, unprocessed castor seed at the producer or primary-conditioning hand-off. It includes annual or short-lived perennial cultivation, repeated picking or one terminal harvest as declared, pod/seed separation, drying, cleaning, grading, and off-specification routing. It excludes castor-oil extraction, crushing, refining, meal or derivative manufacture, and certified planting seed. The operator shall declare route, harvest pattern, moisture basis, and the exact producer or conditioning gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds |
| classification_refs | CPC 3.0: 01447 (exact classification context) |
| covered_products | Harvested, unprocessed *Ricinus communis* seed after pod separation and required drying, cleaning, and grading |
| excluded_products | Planting seed; intact capsules; castor oil; press cake or meal; refined oil; derivatives; other oilseeds |
| representative_product | Cleaned and graded castor seed for oil extraction, before crushing |
| production_route | Managed annual crop or short-lived perennial stand; repeated picking or terminal harvest; pod/seed separation; drying; cleaning; grading; producer or primary-conditioning hand-off. Annual and perennial routes coexist as alternatives and shall not be combined before route-specific inventories are complete. Manual and mechanical routes are technology alternatives attached to the relevant parent activity. |
| market_state | Harvested unprocessed seed, free of bulk pod material, at declared moisture and grade, before oil extraction |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Castor seed delivered at the declared producer or primary-conditioning hand-off |
| How much | 1,000 kg net seed mass at declared moisture |
| How well | Pod-separated, cleaned and graded; moisture, grade, impurity, route, harvest pattern, and hand-off declared |
| How long or cycle | One annual crop cycle, or reporting year plus establishment/production phase for a perennial stand |
| reference_flow_link | Final accepted output of `grading_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Castor Seed `d52055a9-c05b-4edd-ad58-f3271a360458` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Ricinus communis*; harvested unprocessed seed; net mass; moisture and basis; annual/perennial route; repeated-picking/terminal-harvest pattern; grade; impurity; producer/conditioning hand-off; geography; period |
| Binding | `fixed` |

The detail read confirms Product flow, Castor Seed, exact CPC 01447, and Mass. Platform geography, gate, and route fields are blank, so the foreground package shall supply them and shall not infer them from the UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net seed mass excluding packaging and bulk pod material. |
| `moisture_basis` | capsules, seed, rejects, losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg plus % wet basis | Measure moisture at each hand-off; dry matter = wet mass × (1 − moisture fraction), and disclose conversions. |
| `area_period` | cultivation | area and time | ha and reporting period | Distinguish establishment, productive-year, replacement, and termination records for perennial stands. |
| `energy_consistency` | machinery and drying energy | carrier-appropriate | native unit and MJ | Preserve measured carrier units and use documented conversions. |

## 5. System Boundary

The foreground boundary starts with a declared managed field or perennial stand and ends at accepted seed hand-off. Cultivation, harvest, separation, drying/cleaning, and grading are distinct responsibilities with separate states, losses, inputs, and hand-offs. Repeated pickings link to field block and lot; terminal harvest closes the crop cycle. Oil extraction is outside the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established field or stand with geography, area, cultivar, route, age or phase, prior land use, and soil-management context declared |
| starting_condition_role | Foreground managed-biological-production start; perennial establishment and termination remain visible through multi-period attribution |
| product_classification_scope | CPC 3.0 01447; classification does not define moisture, gate, route, or grade |
| recursive_input_rule | Purchased castor planting seed is an upstream input distinct from the reference product; purchased harvested seed blended into a lot requires a separate upstream dataset and mass disclosure |
| upstream_dataset_requirement | Purchased planting material, nutrients, water, protection products, energy, and external services require representative upstream datasets after concrete identity resolution |
| disclosure | Declare route, phase, harvest pattern, technology, moisture, internal hand-offs, rejected/reworked paths, and exact gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_to_seed` | foreground system | Include crop management, capsule capture, seed separation, drying, cleaning, grading, and internal transfers; exclude oil extraction. | `fao-ecocrop-ricinus-communis`; `icar-castor-depodder-2009` |
| `route_separation` | annual and perennial routes | Model route-specific establishment, production, replacement, termination, and input profiles before any weighted mix. | `fao-ecocrop-ricinus-communis` |
| `conditioning_gate` | post-harvest nodes | Include producer conditioning; model an external primary conditioner as foreground or with a transparent upstream process when it supplies the reference product. | `icar-castor-depodder-2009` |
| `material_state_control` | seed and residues | Keep seed, pod residues, rejects, dust, and destinations separate; never presume castor residue is feed. | `fao-ecocrop-ricinus-communis` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | Managed castor cultivation | `required` | Annual crop cycle or declared productive period of a perennial stand | Manage Ricinus communis to harvestable capsule maturity | declared field area and period |
| `harvest` | Repeated picking or terminal harvest | `required` | Harvest pattern shall be declared | Capture mature capsules independently from cultivation and conditioning | kg mature capsules captured |
| `pod_seed_separation` | Pod and seed separation | `required` | Harvested capsules precede seed hand-off | Separate seed from capsules by the recorded route | kg capsules received |
| `drying_cleaning` | Seed drying and cleaning | `required` | Active drying may be zero only when incoming moisture meets specification | Stabilize moisture and remove foreign material | kg raw seed received |
| `grading_handoff` | Grading and hand-off | `required` | Every lot is classified as accepted, downgraded/rework, or rejected | Create the declared grade and final accepted state | kg dry cleaned seed received |

Cultivation is recorded by field block and crop cycle or perennial phase. Post-harvest nodes are recorded as lots, campaigns, or continuous periods. Inputs, outputs, cleaning, changeovers, and shared burdens carry the same run or period identifier; no burden is counted both as a campaign total and an allocated lot share.

### Process: Managed castor cultivation (`cultivation`)

#### Inputs

##### Product flows

###### Consolidated fertilizer and nutrient supply (`nutrient_supply`)

Record mineral fertilizer, organic fertilizer, lime, and nutrient amendments in one cultivation card; foreground records expand concrete exchanges.

- Selected flow: Foreground-selected nutrient materials
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured supplied mass by product with nutrient composition retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field area and crop cycle or productive period
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Nutrient-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha
  - Basis: per hectare and declared period; actual products govern
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supply (`irrigation_water`)

Record supplied irrigation water; rainfall is not a product input.

- Selected flow: Irrigation process water selected from foreground records
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or measured water delivered to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field area and declared period
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000000
  - Unit: kg/ha
  - Basis: per hectare and period; zero is valid for rainfed production
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cultivation energy supply (`cultivation_energy`)

Record carriers for field preparation, sowing, irrigation, crop management, and perennial-stand maintenance.

- Selected flow: Energy carrier selected from equipment and invoice records
- Flow property / unit: Energy or carrier-specific property / measured carrier unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured fuel or electricity by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field area and declared period
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Cultivation-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ/ha
  - Basis: converted final energy per hectare and period
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvestable mature capsule crop (`mature_capsules`)

Internal hand-off of mature capsules to harvest; it is not a market reference product.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: calculated harvestable capsule mass from harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field block and period
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lots`
- Range: Capsule-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: wet capsule mass per hectare at measured moisture
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Reported field emissions (`field_emissions`)

Record each substance and receiving compartment separately; resolve both before final exchange creation.

- Selected flow: Unresolved per reported substance and compartment
- Flow property / unit: Mass / kg substance
- Amount rule: measured release or method result from collected activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field area and period
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Range: Per-substance emission QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/ha
  - Basis: each substance separately per hectare and period
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Repeated picking or terminal harvest (`harvest`)

#### Inputs

##### Product flows

###### Mature capsule crop from cultivation (`harvest_capsule_input`)

Internal input linking each harvest event to its field block.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: mass assigned to each picking or terminal-harvest event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest event
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lots`
- Range: Harvest-event reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: percent of field-period mature capsule mass
  - Basis: event shares reconcile to 100% less field loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest energy supply (`harvest_energy`)

Record fuel or electricity for the declared manual-support or mechanical harvest route.

- Selected flow: Energy carrier selected from equipment records
- Flow property / unit: Energy or carrier-specific property / measured carrier unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier consumption assigned to the harvest event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg captured capsules
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Harvest-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg captured capsules
  - Basis: converted final energy for the declared technology
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested castor capsules (`harvested_capsules`)

Internal captured-capsule state transferred to separation with picking sequence and moisture retained.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured net capsule mass leaving each event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lots`
- Range: Harvested-capsule lot size
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/event
  - Basis: wet capsule mass at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Uncaptured or discarded harvest material (`harvest_loss`)

Keep field loss and incidental material separate from captured capsules; identity and destination follow observed records.

- Selected flow: Unresolved waste identity and destination from foreground records
- Flow property / unit: Mass / kg
- Amount rule: measured, sampled, or mass-balance-derived loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg captured capsules
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lots`
- Range: Harvest-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg captured capsules
  - Basis: loss at matched moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pod and seed separation (`pod_seed_separation`)

#### Inputs

##### Product flows

###### Harvested capsule input (`separation_capsule_input`)

Internal input linking separation runs to harvested lots.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured capsule mass charged to the run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per separation run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Separation-run input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/run
  - Basis: capsule mass at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separation energy supply (`separation_energy`)

Record energy for manual-support or mechanical depodding and separation.

- Selected flow: Energy carrier selected from equipment records
- Flow property / unit: Energy or carrier-specific property / measured carrier unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier consumption by run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw separated seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Separation-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg raw seed
  - Basis: converted final energy for the declared technology
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Raw separated castor seed (`raw_separated_seed`)

Internal seed freed from bulk pods but not yet accepted at final moisture, cleanliness, or grade.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured raw seed mass leaving separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per separation run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Raw-seed recovery QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1
  - Unit: kg/kg capsule input
  - Basis: raw seed per kg capsule input at recorded moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pod and separation residues (`pod_residues`)

Record pod hulls, fragments, and unrecovered material by state and destination; do not presume feed use.

- Selected flow: Unresolved waste identity and destination from foreground records
- Flow property / unit: Mass / kg
- Amount rule: measured residue or mass-balance remainder by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw separated seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lots`
- Range: Pod-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg raw seed
  - Basis: residue at matched moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Seed drying and cleaning (`drying_cleaning`)

#### Inputs

##### Product flows

###### Raw separated seed input (`drying_seed_input`)

Link the conditioning lot to separation and retain incoming moisture and impurity.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured raw seed mass received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per drying and cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Conditioning-lot input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: raw seed at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying and cleaning energy supply (`conditioning_energy`)

Record carriers for active drying, conveying, aspiration, cleaning, and changeover cleaning.

- Selected flow: Energy carrier selected from equipment records
- Flow property / unit: Energy or carrier-specific property / measured carrier unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured consumption assigned to lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry cleaned seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Conditioning-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg output
  - Basis: zero allowed for passive drying without purchased energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Dry cleaned castor seed (`dry_clean_seed`)

Internal output with declared moisture and impurity, ready for grading but not yet accepted.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass after drying and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Dry-clean recovery QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1
  - Unit: kg/kg raw seed
  - Basis: output per kg input with moisture conversion disclosed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cleaning rejects and foreign material (`cleaning_rejects`)

Record pod fragments, stones, soil, dust, and damaged seeds separately where destinations differ.

- Selected flow: Unresolved waste identity and destination from foreground records
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass excluding moisture removed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry cleaned seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lots`
- Range: Cleaning-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg output
  - Basis: non-water rejects per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Moisture removed to air (`water_to_air`)

Calculate water removed from matched wet-basis moisture measurements when the data model requires this exchange.

- Selected flow: Unresolved water-to-air identity pending data-package convention
- Flow property / unit: Mass / kg
- Amount rule: incoming wet mass × incoming moisture fraction minus outgoing wet mass × outgoing moisture fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry cleaned seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lots`
- Range: Removed-moisture QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg water/kg output
  - Basis: zero applies when no drying is required
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading and hand-off (`grading_handoff`)

#### Inputs

##### Product flows

###### Dry cleaned seed input (`grading_seed_input`)

Internal input linked to its conditioning lot with moisture and impurity retained.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass charged to grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Grading-lot input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: dry cleaned mass per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted castor seed at hand-off (`accepted_castor_seed`)

The only reference product: harvested unprocessed seed after separation, drying as needed, cleaning, and grading, before oil extraction.

- Selected flow: Castor Seed `d52055a9-c05b-4edd-ad58-f3271a360458`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: 1,000 kg net accepted seed at declared moisture
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_grading_handoff`
- Range: Reference-flow equality check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: net accepted seed per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded or rework seed (`downgraded_rework_seed`)

Route off-spec seed to one declared internal rework return or external downgraded destination; concrete external identity is deferred.

- Selected flow: Internal rework state or unresolved downgraded product identity
- Flow property / unit: Mass / kg
- Amount rule: measured mass outside the accepted grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Downgrade/rework QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accepted seed
  - Basis: off-spec mass per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Final grading rejects (`grading_rejects`)

Record discarded seed and foreign material by state and destination; exclude them from accepted output.

- Selected flow: Unresolved waste identity and destination from foreground records
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass leaving grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Final-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accepted seed
  - Basis: rejects per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance_first` | all nodes | Complete physical and dry-matter balances before allocation; keep moisture loss, residues, field loss, rework, downgrade, rejects, and accepted seed visible. |  |
| `allocation_single_intended_product` | crop route | Accepted seed is the sole intended product by default. Residues and rejects retain burdens to their destination; any claimed co-product requires disclosed function and goal-consistent allocation. |  |
| `allocation_rework` | rework loop | Retain burdens through return to separation, cleaning, drying, or grading; count returned mass once and exclude it from accepted output until it passes. |  |
| `allocation_run_period` | shared runs | Assign shared energy, cleaning, and changeover once with a disclosed causal driver; do not count run totals and lot shares together. |  |
| `allocation_multi_period` | perennial route | Separate establishment, production, replacement, and termination; attribute phases over evidenced productive output and prevent double attribution. | `fao-ecocrop-ricinus-communis` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `cultivation` | nutrients and irrigation | invoices, application logs, meters | field_id; route; phase; product; composition; quantity; unit; date | reconcile purchase and field application | native unit plus kg | every application | crop cycle or productive period | every field | sum by field, material, period; retain zero-use | invoice, meter, application, calibration |
| `cp_energy_records` | all nodes | fuels and electricity | issues, meters, equipment logs | process_id; run_id; carrier; quantity; unit; equipment; hours; driver | direct measurement or documented calculation | native unit and MJ | each run or period | complete foreground period | every field/facility | sum by carrier and node; allocate once | invoice, meter, log, factor |
| `cp_harvest_lots` | `harvest` | capsules and field loss | tickets and samples | field_id; event_id; date; pattern; technology; mass; moisture; loss | weigh every lot; document loss sampling | kg and % wet basis | every event | all pickings or terminal harvest | every field | sum events after moisture reconciliation | calibration, sample, trace |
| `cp_field_emissions` | `cultivation` | substances | measurements and calculations | substance; compartment; activity; factor; result; unit; method | measure or use declared method | kg substance | event or period | full period | every field | preserve identity and compartment | method, raw data, calculation |
| `cp_conditioning_lots` | `pod_seed_separation`; `drying_cleaning` | seed, residues, moisture | batch sheets and tests | run_id; masses; moisture; residues; rejects; destination; technology | weigh inputs/outputs and sample moisture | kg and % wet basis | every run/lot | all supplying lots | every site | reconcile wet and dry matter by run | scale, moisture method, trace |
| `cp_grading_handoff` | `grading_handoff` | accepted, downgrade, rework, reject | grading and dispatch records | lot_id; masses; grade; impurity; moisture; destinations; gate | weigh each state and link dispatch/rework | kg and grade measure | every lot | all supplying lots | every site | accepted only into reference output; rework once | scale, specification, trace |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | material hand-offs | dry matter = wet mass × (1 − wet-basis moisture fraction); target wet mass = dry matter ÷ (1 − target fraction) | mass; measured moisture; target moisture | moisture-consistent mass |  |
| `calc_stage_yield` | all nodes | transferred-output dry matter ÷ input dry matter | linked masses and moisture | stage yield |  |
| `calc_field_yield` | field route | accepted-output dry matter ÷ occupied area, retaining route phase and harvest events | output; moisture; area; period | kg dry matter/ha-period |  |
| `calc_shared_run` | campaign/continuous run | shared burden × lot driver ÷ total run driver | run burden and driver | once-allocated lot burden |  |
| `calc_perennial_attribution` | perennial route | attribute phase burden over evidenced productive output; disclose remaining-stand and termination treatment | phase records and outputs | period burden | `fao-ecocrop-ricinus-communis` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Verify species, harvested-unprocessed state, CPC context, grade, moisture, and gate for every lot. | specification, detail evidence, dispatch |
| `dq_traceability` | process graph | Link field, event, separation run, conditioning lot, grading/rework pass, and dispatch without duplicate mass. | identifiers and reconciliation |
| `dq_temporal` | routes | Cover the annual cycle or reported perennial period and identify establishment, replacement, and termination outside it. | dated records |
| `dq_measurement` | mass/moisture | Use calibrated scales and documented moisture method; disclose sampling and gaps. | calibration and test records |
| `dq_completeness` | all cards | Record zero, value, or documented gap for each applicable card and destination. | completed checklist and balance |
| `dq_technology` | alternatives | Identify manual/mechanical harvest and separation and passive/active drying before aggregation. | equipment and run records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require fixed Castor Seed UUID, Mass property/unit group, and all PCR-supplied gate, route, state, and moisture qualifiers. |  |
| `validate_route` | cultivation/harvest | Require one annual or perennial route and one repeated-picking or terminal-harvest declaration per unsegmented record; events reconcile to field total. | `fao-ecocrop-ricinus-communis` |
| `validate_process_chain` | graph | Require cultivation, harvest, separation, drying/cleaning, and grading hand-offs; zero purchased drying energy requires moisture evidence. | `icar-castor-depodder-2009` |
| `validate_mass_moisture` | material nodes | Reconcile wet mass and dry matter and report moisture removed, residues, loss, rework, downgrade, and rejects separately. |  |
| `validate_flow_resolution` | exchanges | Resolve each Flow Set card to verified concrete UUIDs and each deferred identity by substance/material state, direction, destination, property, and unit before final TIDAS generation. |  |
| `validate_nutrient_cardinality` | cultivation | Permit at most one consolidated `flow-set.agricultural-nutrient-supply@0.3.0` card and no group. |  |
| `validate_period_attribution` | perennial route | Require establishment, production, replacement, termination, and remaining-stand treatment; prevent double attribution. | `fao-ecocrop-ricinus-communis` |
| `validate_rework_reject` | post-harvest nodes | Every off-spec state ends in rework, downgrade, recovery, or waste and is excluded from accepted output until passing. |  |
| `validate_run_attribution` | runs | Require run/period identifier and one allocation driver; reject duplicate run totals and lot shares. |  |
| `validate_extraction_exclusion` | system | Reject seed crushing, castor-oil extraction, refining, or derivative manufacture inside the boundary. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dataset for harvested unprocessed castor seed at declared producer or primary-conditioning hand-off |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | Seed supply before oil extraction; comparisons aligned on moisture, gate, route, grade, and allocation |
| excluded_use | Oil extraction/refining; meal/derivatives; planting-seed certification; safety assessment; undisclosed route mixtures |
| required_metadata | geography; period; cultivar; route; stand phase; harvest pattern; area; technology; drying mode; moisture; grade; impurity; gate; allocation; rework; concrete identities |
| required_quality_disclosure | primary-data share; gaps; uncertainty; Range exceedances; balances; Flow Set expansion evidence; deferred identity decisions; perennial attribution |
| update_trigger | changed specification, gate, route, harvest pattern, technology, moisture, grade, supplier mix, allocation, Flow Set version, or UUID evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-ecocrop-ricinus-communis` | official_guidance | FAO EcoCrop, *Ricinus communis*, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=1866 | Species/seed identity; annual and short-lived perennial context; route and period declarations |
| `icar-castor-depodder-2009` | official_guidance | ICAR News, April–June 2009, “Castor depodder and decorticator”, https://icar.gov.in/sites/default/files/2022-04/ICAR-News-April-June-09.pdf | Pod/seed separation; cleaning/grading; moisture-sensitive mechanical route |
