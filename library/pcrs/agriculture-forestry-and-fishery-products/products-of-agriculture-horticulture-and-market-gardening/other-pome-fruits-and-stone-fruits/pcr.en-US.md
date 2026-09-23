---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-pome-fruits-and-stone-fruits
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other pome fruits and stone fruits

## 1. Scope and Applicability

This PCR covers fresh, whole fruits from pome-fruit or stone-fruit crops represented by CPC 3.0 01349 and not assigned to a more specific fruit category. The default foreground boundary runs from orchard management for the reporting crop cycle through harvest and the first declared farm-gate or commercial hand-off. Grading, washing, cooling, packing, and transport to that hand-off are included only when declared in scope.

Each dataset shall declare species or cultivar, production site and system, harvest year, orchard age, market grade or destination, maturity/quality state, and hand-off state. Unlike species or market states shall not be aggregated without a documented rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-pome-fruits-and-stone-fruits |
| classification_refs | CPC 3.0:01349 — Other pome fruits and stone fruits |
| covered_products | Fresh whole other pome or stone fruits recorded under CPC 01349, including species or varieties not covered by a dedicated fruit PCR; exact species and variety must be declared |
| excluded_products | Apples, pears, citrus, grapes, berries, nuts, processed, juiced, dried, canned, frozen, preserved, or fermented fruit; nursery stock sold as a product; distribution, retail, and consumer use after hand-off |
| representative_product | Fresh other pome or stone fruit at farm-gate or first commercial hand-off |
| production_route | Managed perennial orchard or comparable fruit-growing system followed by harvest and optional in-boundary grading, primary conditioning, cooling, or packing |
| market_state | Whole fresh fruit in a declared commercial grade or grade mix, as net mass excluding packaging and removed waste |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole other pome or stone fruit at the declared farm-gate or first commercial hand-off |
| How much | 1 kg net product mass |
| How well | Marketable fresh fruit in the declared grade or grade mix; species, cultivar, maturity, defect tolerance, and destination are reported |
| How long or cycle | One harvest year and crop cycle; perennial orchard age, establishment year, and multi-year attribution are disclosed |
| reference_flow_link | Semantic reference product|

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh other pome or stone fruit at declared hand-off (unmapped) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species/cultivar; production geography; harvest year; orchard age and system; grade or grade mix; maturity/quality state; hand-off location and boundary; net mass excluding packaging and waste |
| Binding | Omit until a verified identity or applicable product Flow Set is approved |

When constructing a foreground data package, all `Required qualifiers` must be declared in metadata, process notes, the reference-flow comment, product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | reference product and marketable outputs | Mass | kg | Report net fruit mass at hand-off; exclude packaging, soil, attached non-product material, and separately reported rejects. |
| `measure_species_grade` | reference and co-product outputs | Mass and declared product identity | kg | Keep species, cultivar, maturity, grade, and destination visible; aggregate unlike products only with a documented mass-weighted rule. |
| `measure_nutrient_basis` | fertilizer and soil amendment | Mass of product and declared nutrient | kg product; kg N, P, K, or organic nutrient | Record actual product and nutrient content; convert product mass to nutrient mass only from supplier or analytical evidence. |
| `measure_water_energy` | irrigation, process water, fuel, and electricity | Volume, mass, or energy | m3, kg, L, MJ, or kWh | Prefer meters, invoices, or equipment records; normalize to the row unit while retaining the original unit. |
| `measure_land_time` | land occupation and establishment | Area and crop cycle | ha and crop cycle | Report contributing area, reporting period, orchard age, and productive-life assumption; do not annualize without a declared rule. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bare or established orchard block immediately before reporting crop-cycle management; orchard age, establishment year, and land-use history are declared |
| starting_condition_role | Foreground production begins with in-scope orchard management. Establishment inputs are included when applicable and attributed over the declared productive life or reporting period |
| product_classification_scope | Fresh other pome and stone fruits represented by CPC 3.0 01349, at a declared farm-gate or first commercial hand-off |
| recursive_input_rule | Same-category fruit is not recursively traced as an input. Planting stock is recorded separately; fruit output begins at the managed crop state |
| upstream_dataset_requirement | Background datasets for planting stock, fertilizer/soil amendment, crop protection, water, energy, transport, and packaging shall disclose provider, geography, time, unit, and allocation/cut-off treatment |
| disclosure | State whether establishment, irrigation infrastructure, on-site packing, cooling, reusable containers, and transport to first hand-off are included or excluded |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | all processes | Include orchard management and harvest, plus grading, conditioning, cooling, packing, or hand-off activities only when inside the declared foreground boundary. | `fao-codex-fresh-fruits-vegetables`, `foreground-farm-records` |
| `boundary_establishment` | orchard management | Include establishment burdens for a new or re-established orchard; for an established orchard disclose age and attribution of prior burdens. | `foreground-farm-records`, `iso-14044-allocation` |
| `boundary_inputs` | all input rows | Record actual products, services, resources, and releases crossing the boundary; do not infer an input merely to populate an identity field. | `foreground-farm-records` |
| `boundary_outputs` | all outputs | Reconcile marketable grades, downgraded outputs, rejects, losses, residues, and environmental releases; rejects cannot silently become reference output. | `fao-codex-fresh-fruits-vegetables`, `ipcc-2019-managed-soils-n2o` |
| `boundary_handoff` | downstream processes | End the default boundary at the declared farm-gate or first commercial hand-off; exclude distribution, retail, consumer storage, and processing unless explicitly extended. | `fao-codex-fresh-fruits-vegetables`, `foreground-farm-records` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_orchard_management` | Orchard establishment and crop-cycle management | required | Include perennial management; include or attribute establishment when applicable | managed biological production | Per 1 kg marketable fresh fruit at hand-off |
| `p_harvest` | Harvest and collection | required | Include removal from the managed crop and transfer to the next declared state | harvest and capture | Per 1 kg raw or marketable fruit output |
| `p_grading_sorting` | Grading and sorting | conditional | Include when two or more quality or destination states are created inside the boundary | grading and sorting | Per 1 kg incoming fruit and declared grade output |
| `p_primary_conditioning_handoff` | Primary conditioning and commercial hand-off | conditional | Include washing, cooling, packing, or first conditioning only when in boundary | primary conditioning and hand-off | Per 1 kg net fruit at hand-off |

### Process: Orchard establishment and crop-cycle management (`p_orchard_management`)

#### Inputs

##### Product flows

###### Planting stock for orchard establishment (`planting_stock`)
Planting stock crosses the boundary when young trees, grafted plants, or propagation material is purchased or produced for an in-scope orchard.

- Selected flow: Planting stock for declared species or cultivar (unmapped)
- Flow property / unit: Mass or item count / kg or item
- Amount: site-specific
- Amount rule: Actual planting stock attributed to the reporting orchard
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

###### Agricultural nutrient and fertilizer inputs (`p_orchard_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

###### Irrigation water supplied to the orchard (`irrigation_water`)
Record irrigation delivered to the orchard and distinguish metered or calculated supply from effective precipitation.

- Selected flow: Irrigation water
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount: site-specific
- Amount rule: Metered or calculated irrigation delivery, separated from effective precipitation where possible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`, `fao-crop-evapotranspiration-56`

###### Crop-protection products actually used (`crop_protection_products`)
Record each crop-protection product and application event used for the declared orchard or crop cycle.

- Selected flow: Actual crop-protection product(s) used for the declared crop (unmapped)
- Flow property / unit: Mass or volume / kg or L
- Amount: site-specific
- Amount rule: Application logs, invoices, or stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

###### Fuel or electricity for orchard operations (`orchard_energy`)
Record actual fuel or electricity consumed by in-scope orchard operations and retain the energy carrier and allocation basis.

- Selected flow: Mobile machinery fuel or electricity; applicable groups `energy-supply/mobile-machinery-fuel` or `energy-supply/electricity-supply`
- Flow property / unit: Energy or mass / MJ, kWh, L, or kg
- Amount: site-specific
- Amount rule: Actual fuel or electricity consumed by in-scope orchard operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

##### Waste flows

##### Elementary flows

###### Occupation of orchard land (`land_occupation`)
Record occupied orchard area and duration for the reporting period and allocate it to the declared fruit output.

- Selected flow: Land occupation
- Flow property / unit: Area-time / ha and crop cycle
- Amount: site-specific
- Amount rule: Orchard area occupied during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

###### Transformation of land for orchard establishment (`land_transformation`)
Record the documented land transformation event and area that occurs within the in-scope orchard establishment period.

- Selected flow: Land transformation
- Flow property / unit: Area / ha
- Amount: site-specific
- Amount rule: Documented area and transformation event within the establishment period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

#### Outputs

##### Product flows

###### Fruit crop ready for harvest (`fruit_ready_for_harvest`)
Record fruit mass entering harvest and reconcile it to collected, retained, and loss pathways.

- Selected flow: Other pome or stone fruit ready for harvest (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Fruit mass entering harvest, reconciled to collected, retained, and loss pathways
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `foreground-farm-records`

##### Waste flows

###### Pruning and thinning residues removed from the orchard (`pruning_residues`)
Record removed pruning and thinning residues with moisture basis and downstream path; disclose in-place mulch separately.

- Selected flow: Orchard pruning or thinning residue (unmapped)
- Flow property / unit: Mass / kg dry or wet matter as recorded
- Amount: site-specific
- Amount rule: Removed residue with declared moisture basis and downstream path; in-place mulch is disclosed rather than exported
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_records`
- Sources: `foreground-farm-records`

##### Elementary flows

###### Direct nitrous oxide release from managed orchard soils (`fertilizer_n2o_air`)
Calculate direct nitrous oxide from documented nutrient inputs and site conditions using the selected method.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount: calculated from collection
- Amount rule: Apply the selected method to documented nitrogen inputs and site conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_model_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrogen oxides released from orchard operations (`fertilizer_nox_air`)
Calculate nitrogen oxides from documented nutrient and combustion inputs and declare the receiving medium.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NOx
- Amount: calculated from collection
- Amount rule: Use documented nutrient and combustion inputs with receiving-medium declaration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_model_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`, `foreground-farm-records`

###### Ammonia released from orchard operations (`fertilizer_nh3_air`)
Calculate ammonia from documented nutrient applications and the receiving-medium method parameters.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg NH3
- Amount: calculated from collection
- Amount rule: Calculate from documented nutrient applications and receiving-medium method parameters
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_model_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate release to water (`nitrate_to_water`)
Calculate nitrate loss using declared nutrient-loss, drainage, and receiving-medium evidence.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg nitrate
- Amount: calculated from collection
- Amount rule: Apply a declared nutrient-loss method to nitrogen input, drainage, and receiving-medium evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_model_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`, `foreground-farm-records`

###### Phosphate release to water (`phosphate_to_water`)
Calculate phosphate loss using documented phosphorus inputs and receiving-medium evidence.

- Selected flow: Phosphate to water
- Flow property / unit: Mass / kg phosphate
- Amount: calculated from collection
- Amount rule: Apply a declared phosphorus-loss method to actual nutrient input and receiving-medium evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_model_inputs`
- Sources: `foreground-farm-records`

### Process: Harvest and collection (`p_harvest`)

#### Inputs

##### Product flows

###### Harvest fuel or electricity (`harvest_energy`)
Record actual energy used for harvest and allocate shared consumption to the reporting fruit output.

- Selected flow: Mobile machinery fuel or electricity; applicable groups `energy-supply/mobile-machinery-fuel` or `energy-supply/electricity-supply`
- Flow property / unit: Energy or mass / MJ, kWh, L, or kg
- Amount: site-specific
- Amount rule: Actual harvest energy allocated to reporting fruit output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `foreground-farm-records`

###### Reusable or single-use harvest containers (`harvest_containers`)
Record container number or mass, reuse cycles, and loss rate from harvest-container records.

- Selected flow: Crate, bin, or harvest container where applicable
- Flow property / unit: Mass or item count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount: site-specific
- Amount rule: Number, mass, reuse cycles, and loss rate from container records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `foreground-farm-records`

##### Waste flows
##### Elementary flows

#### Outputs

##### Product flows

###### Raw harvested fruit transferred to grading or hand-off (`raw_harvested_fruit`)
Record weighed harvested fruit transferred to grading or the declared hand-off state.

- Selected flow: Fresh other pome or stone fruit, raw harvested state (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Weighed harvested fruit transferred to the next process or declared hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `foreground-farm-records`

##### Waste flows

###### Fruit lost or damaged during harvest (`harvest_loss`)
Reconcile crop-ready, collected, transferred, retained, and lost fruit masses using direct observations where available.

- Selected flow: Harvested fruit loss or damage (unmapped)
- Flow property / unit: Mass / kg
- Amount: calculated from collection
- Amount rule: Reconcile crop-ready, collected, transferred, retained, and loss masses; prefer direct observations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources: `foreground-farm-records`

##### Elementary flows

### Process: Grading and sorting (`p_grading_sorting`)

#### Inputs

##### Product flows

###### Raw fruit entering grading (`grading_input_fruit`)
Record weighed raw fruit entering the grading boundary.

- Selected flow: Raw harvested other pome or stone fruit (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Weighed incoming fruit at grading boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `foreground-farm-records`

###### Grading electricity or stationary energy (`grading_energy`)
Record metered or invoiced grading energy and allocate shared consumption by declared fruit mass.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount: site-specific
- Amount rule: Metered or invoice energy allocated by incoming or outgoing fruit mass when shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `foreground-farm-records`

###### Grading or washing water (`grading_water`)
Record water supplied to grading or washing from meter or documented batch records.

- Selected flow: Process water
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount: site-specific
- Amount rule: Metered or documented water supplied to grading or washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

##### Waste flows
##### Elementary flows

#### Outputs

##### Product flows

###### Accepted marketable grade fruit (`accepted_grade_fruit`)
Record accepted output by species, cultivar, grade, and destination.

- Selected flow: Accepted fresh other pome or stone fruit grade (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Weighed accepted output by species, cultivar, grade, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

###### Downgraded or alternate-destination fruit (`downgraded_grade_fruit`)
Record downgraded output and its declared downstream destination.

- Selected flow: Downgraded or alternate-destination fresh fruit (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Weighed downgraded output and declared downstream destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `foreground-farm-records`

##### Waste flows

###### Grading rejects and discarded fruit (`grading_rejects`)
Reconcile rejected fruit mass and declare rework, recovery, treatment, or disposal.

- Selected flow: Fruit grading reject or discarded fruit (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Reconciled reject mass and declared rework, recovery, treatment, or disposal path
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg marketable fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

##### Elementary flows

### Process: Primary conditioning and commercial hand-off (`p_primary_conditioning_handoff`)

#### Inputs

##### Product flows

###### Accepted fruit entering primary conditioning (`conditioning_input_fruit`)
Record weighed fruit entering the in-boundary primary conditioning step.

- Selected flow: Accepted fresh other pome or stone fruit for conditioning (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Weighed fruit entering the in-boundary conditioning step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `foreground-farm-records`

###### Packaging or presentation materials (`packaging_materials`)
Record actual packaging or presentation materials supplied, including reuse cycles where relevant.

- Selected flow: Actual packaging material; applicable groups `packaging-function/flexible-packaging`, `rigid-container-packaging`, `carton-and-box-packaging`, or `pallet-and-crate-packaging`
- Flow property / unit: Mass or item count / kg or item
- Amount: site-specific
- Amount rule: Actual packaging supplied, including reuse cycles where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `foreground-farm-records`

###### Cooling or conditioning electricity (`conditioning_energy`)
Record metered or allocated electricity attributable to in-scope fruit conditioning.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount: site-specific
- Amount rule: Metered or allocated conditioning energy attributable to in-scope fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 1 kg net fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `foreground-farm-records`

##### Waste flows

###### Conditioning and packing fruit loss (`conditioning_fruit_loss`)
Record the measured or reconciled fruit loss and its declared downstream path.

- Selected flow: Fruit conditioning loss (unmapped)
- Flow property / unit: Mass / kg
- Amount: calculated from collection
- Amount rule: Measured or reconciled mass difference with a declared downstream path
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `foreground-farm-records`

###### Packaging rejects (`packaging_rejects`)
Record packaging stock rejects and their treatment or disposal path.

- Selected flow: Packaging material reject (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Packaging stock reconciliation and reject records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net fruit at hand-off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `foreground-farm-records`

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh fruit at declared hand-off (`marketable_fresh_fruit_handoff`)
Record net weighed fruit delivered at the declared hand-off by species, grade, and destination where applicable.

- Selected flow: Fresh other pome or stone fruit at farm-gate or first commercial hand-off (unmapped)
- Flow property / unit: Mass / kg
- Amount: site-specific
- Amount rule: Net weighed fruit delivered at hand-off by species, grade, and destination as applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net fruit at hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

##### Waste flows
##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | shared activities | Subdivide or use separate records whenever possible; do not allocate burdens directly assignable to a product, grade, site, or operation. | `iso-14044-allocation`, `foreground-farm-records` |
| `allocation_shared_orchard` | multiple species, grades, or outputs | When direct assignment is impossible, allocate shared crop-cycle and establishment burdens by a documented physical relationship; use product mass for comparable fresh-fruit outputs by default and test alternatives. | `iso-14044-allocation`, `foreground-farm-records` |
| `allocation_rejects` | downgraded fruit, rejects, residues, and losses | Retain burdens with material until rework, recovery, treatment, or disposal is established; do not count rejects as accepted reference output. | `iso-14044-allocation`, `foreground-farm-records` |
| `allocation_multi_site` | multiple orchard blocks or sites | Preserve site records where possible and aggregate by actual marketable hand-off mass; do not double count shared records. | `iso-14044-allocation`, `foreground-farm-records` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_records` | `p_orchard_management` | orchard inputs, land, residues, operations | farm and orchard primary records | site_id; block_id; species; cultivar; area; orchard_age; establishment_year; operation_date; input_name; product_quantity; nutrient_content; water_volume; fuel; electricity; residue_mass; destination | invoices, application logs, meters, field logs, supplier records | native units normalized to PCR units | each operation and annual reconciliation | one harvest year plus disclosed perennial attribution | every contributing block/unit | sum by block then divide by reconciled hand-off mass | source documents, meter reads, stock reconciliation, block register |
| `cp_harvest_records` | `p_harvest` | harvest inputs and outputs | harvest ticket, weighbridge, loss record | date; block_id; harvested_mass; transferred_mass; loss_mass; grade; container_count; container_mass; fuel; electricity; destination | lot-level weighing and harvest records | kg fruit; kg/item containers; L/MJ/kWh energy | every harvest lot | reporting harvest season | every contributing block and crew | reconcile crop-ready, collected, transferred, and loss masses | calibrated scale, lot tickets, supervisor reconciliation |
| `cp_grade_records` | `p_grading_sorting` | grading inputs, outputs, rejects, water, energy | grading sheet and facility records | incoming_mass; accepted_mass; downgraded_mass; reject_mass; grade; destination; water; electricity; date; line_id | line records, weigh tickets, meters, facility allocation | kg, m3, kWh, or MJ | every lot or day | all in-boundary grading periods | each line/facility | sum outputs and rejects to incoming mass by species and grade | scale calibration, grade records, reject-path evidence |
| `cp_conditioning_records` | `p_primary_conditioning_handoff` | conditioning inputs, packaging, losses, reference output | packing, cooling, and hand-off records | incoming_mass; handoff_mass; package_type; package_mass; reuse_cycles; cooling_energy; wash_water; fruit_loss; package_reject; handoff_date; destination | packhouse records, material reconciliation, meters, hand-off tickets | kg fruit/packaging; m3; kWh/MJ | every lot or day | all in-boundary conditioning periods | each facility, line, hand-off | reconcile incoming fruit, hand-off fruit, fruit loss, and rejects | scales, packaging inventory, meters, hand-off documents |
| `cp_emission_model_inputs` | `p_orchard_management` | calculated soil and agricultural emissions | derived calculation input record | nutrient_mass; application_method; application_date; soil; climate; drainage; residue_management; combustion_input; receiving_medium | calculate from collected records and selected method parameters | kg nutrient, kg fuel, declared emission unit | each reporting cycle and method update | reporting harvest year | each site/block with different inputs | calculate by site/block then normalize by hand-off mass | method version, input reconciliation, parameter provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable row amount / net marketable reference-flow mass at hand-off | row amount; allocation share; hand-off mass | amount per kg reference flow | `foreground-farm-records` |
| `calc_nutrient_mass` | fertilizer and soil amendment | nutrient mass = product mass × documented nutrient fraction; retain product and nutrient mass separately | product mass; nutrient fraction | kg N, P, K, or declared nutrient | `foreground-farm-records` |
| `calc_establishment_attribution` | perennial establishment | establishment burden = documented input × reporting-period or output share under the declared productive-life rule | establishment input; age; productive-life assumption; output share | reporting-period amount | `iso-14044-allocation`, `foreground-farm-records` |
| `calc_agricultural_emissions` | soil and agricultural elementary outputs | Apply selected IPCC or site method to reconciled nutrient and combustion inputs with explicit receiving medium. | nutrient mass; parameters; site conditions; fuel | calculated emission amount | `ipcc-2019-managed-soils-n2o` |
| `calc_multi_site_aggregation` | multiple sites | route amount = sum of site flow amounts / sum of site net marketable hand-off masses | site flow amounts; hand-off masses | route-level normalized amount | `foreground-farm-records` |
| `calc_mass_reconciliation` | harvest, grading, conditioning | incoming mass = accepted + downgraded + rejects + measured/reconciled losses within declared tolerance | incoming mass; outputs; losses | completeness check and mass balance | `foreground-farm-records` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and product outputs | Identify species/cultivar, grade, maturity, destination, geography, and hand-off for every aggregated product group. | product specification, lot records, dataset metadata |
| `dq_mass_balance` | harvest, grading, conditioning | Reconcile incoming fruit, outputs, rejects, residues, and losses; disclose gaps and do not claim completeness when evidence gap. | calibrated scales, tickets, reconciliation worksheet |
| `dq_input_records` | agricultural inputs, water, energy, packaging, containers | Use primary records or explain estimate, original unit, period, and allocation to the reference flow. | invoices, meters, logs, inventory, supplier documents |
| `dq_temporal_site` | all foreground rows | Report harvest year, production period, block/site, and multi-year establishment attribution. | block register, field log, period metadata |
| `dq_emission_method` | calculated elementary flows | State method version, parameters, receiving medium, and source for every modelled release. | method worksheet and source record |
| `dq_downstream_path` | rejects, residues, packaging rejects, downgraded products | Declare rework, recovery, treatment, disposal, or downstream destination; no unlinked reject output. | transfer note, waste ticket, reuse record, destination declaration |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow | Reference amount is 1 kg net marketable fresh fruit and product/hand-off qualifiers are present. | `foreground-farm-records`, `fao-codex-fresh-fruits-vegetables` |
| `validation_product_boundary` | process map and metadata | State whether establishment, irrigation infrastructure, grading, conditioning, packing, and transport to hand-off are included. | `foreground-farm-records` |
| `validation_mass_reconciliation` | harvest, grading, conditioning | Reconcile every incoming mass to marketable, downgraded, reject, loss, or explicit measurement uncertainty. | `foreground-farm-records` |
| `validation_reject_path` | waste and downgraded rows | Every reject, residue, and loss has a downstream path or explicit boundary exit; rejects cannot be reference output. | `foreground-farm-records` |
| `validation_nutrient_basis` | fertilizer and agricultural emissions | Product quantity, nutrient basis, application period, and emission-method inputs are consistent. | `foreground-farm-records`, `ipcc-2019-managed-soils-n2o` |
| `validation_site_period` | site and period data | Every contributing site/block and period is represented once, without omitted or double-counted shared records. | `foreground-farm-records` |
| `validation_quality_disclosure` | dataset profile | Disclose source, uncertainty, missingness, allocation, background data, and identity evidence gap limitations before use. | `foreground-farm-records`, `iso-14044-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Use as a foreground-informed secondary dataset or background fruit-supply dataset when hand-off, qualifiers, geography, time, and included processes match |
| allowed_use | Fresh fruit supply modelling to the same declared farm-gate or first commercial hand-off; comparative use only when species, grade, system, allocation, and quality are compatible |
| excluded_use | Processed or retail products; direct substitution across unlike species or quality states without review; claims beyond declared geography, harvest year, or boundary |
| required_metadata | PCR id; species/cultivar; geography; harvest year; orchard age; production system; hand-off; grade/destination; included processes; reference mass; background datasets; allocation; water, nutrient, energy, packaging, and emission methods fields |
| required_quality_disclosure | Completeness and mass balance; primary-record coverage; temporal/geographic representativeness; estimates and uncertainty; reject/co-product treatment; land and establishment attribution; emission method and source versions |
| update_trigger | Change in category interpretation, route, hand-off, nutrient/emission method, packaging practice, background dataset, or material evidence on species, grade, or orchard attribution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-fresh-fruits-vegetables` | official_guidance | FAO/WHO Codex Alimentarius, https://www.fao.org/fao-who-codexalimentarius/codex-texts/en/ | Fresh product definition, quality, maturity, grade, defect, and hand-off qualifiers |
| `fao-crop-evapotranspiration-56` | official_guidance | Allen et al., FAO Irrigation and drainage paper 56, https://www.fao.org/4/X0490E/X0490E00.htm | Irrigation measurement and crop-water calculation |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O and agricultural emission calculations |
| `iso-14044-allocation` | standard | ISO 14044:2006, https://www.iso.org/standard/38498.html | Subdivision, allocation, co-product, and disclosure precedence |
| `fao-hygiene-fresh-produce` | official_guidance | Codex CXC 53-2003, https://www.fao.org/input/download/standards/10200/CXP_053e_2013.pdf | Harvest, primary production, water, handling, and packing boundary evidence |
| `foreground-farm-records` | dataset | Primary farm, orchard, harvest, grading, packing, meter, invoice, and hand-off records supplied with the foreground data package | Quantities, identity, temporal/site coverage, reconciliation, and quality evidence |
