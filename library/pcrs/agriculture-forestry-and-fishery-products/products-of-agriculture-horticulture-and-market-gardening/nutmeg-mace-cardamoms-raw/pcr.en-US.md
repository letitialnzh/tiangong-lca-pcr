---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.nutmeg-mace-cardamoms-raw
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nutmeg, mace, cardamoms, raw

## 1. Scope and Applicability

This PCR covers foreground production of raw nutmeg seed with shell, mace aril, or cardamom capsules from perennial managed stands through the declared farm-gate hand-off. It includes establishment, productive management, harvest, nutmeg fruit separation, grading, and washing or drying only when performed before the farm gate. Select one crop/organ route and one reference-product state; do not average nutmeg and cardamom without a documented composition and weighting rule.

Exclude grinding, powder production, cracking or shelling to make commercial nutmeg kernel, essential-oil or oleoresin extraction, blending, fumigation, consumer packaging, manufactured spice products, and post-gate transport.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.nutmeg-mace-cardamoms-raw |
| classification_refs | CPC 3.0 01653, Nutmeg, mace, cardamoms, raw |
| covered_products | raw nutmeg seed with shell, separated raw mace aril, and raw cardamom capsules, fresh or farm-dried as declared |
| excluded_products | ground spice; commercial shelled nutmeg kernel; essential oils, oleoresins and nutmeg butter; blended, fumigated, retail-packed or manufactured spices |
| representative_product | one declared route: nutmeg seed with shell, mace aril, or cardamom capsule |
| production_route | perennial managed production; mutually exclusive nutmeg-tree or cardamom-stand route; optional ambient/shade or heated drying is a technology delta from fresh dispatch |
| market_state | raw at farm gate, with fresh/dried state, moisture basis, grade, organ state and conditioning route declared |

Nutmeg trees intentionally yield seed and mace at one separation node. Cardamom has a distinct harvested organ and conditioning route. Fresh dispatch, ambient/shade drying and heated curing are mutually exclusive lot routes unless documented as sequential stages.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | declared raw nutmeg seed with shell, mace aril, or cardamom capsules at farm gate |
| How much | 1,000 kg net product mass |
| How well | saleable under the declared grade and moisture specification, excluding foreign matter and rejects |
| How long or cycle | output from a declared harvest period, including documented stand-lifecycle attribution |
| reference_flow_link | `raw_spice_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Nutmeg, mace, cardamoms, raw `6d4837b1-c271-4aac-89f4-f329d3290c47` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop/species; harvested organ; shell/aril/capsule state; fresh or dried state; moisture content and basis; grade; production system; geography; harvest period; farm-gate hand-off; drying technology when used |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass and measured moisture content/basis; never mix fresh and dried mass without moisture conversion. |
| `land_time_basis` | establishment and management | area and time | ha, year | Separate establishment, non-bearing and productive phases. |
| `nutrient_active_mass` | nutrient inventory | product and nutrient mass | kg product, kg N/P/K | Collect every actual nutrient product and composition separately below the consolidated card. |
| `lot_reconciliation` | harvest through grading | Mass | kg/lot | Reconcile accepted, downgraded, rejected, sampled and moisture-loss states by lot/batch. |

## 5. System Boundary

The foreground begins with planting material or a documented existing stand and ends at farm-gate dispatch. Include stand establishment/non-bearing phases, productive management, land-use change where applicable, water, energy, crop-protection and nutrient supply, direct field emissions, harvest, separation, pre-gate conditioning, grading, residues, rejects and material capital goods. Nursery and other supplied products remain upstream datasets.

Harvest is a distinct node because it removes a recorded biological output. Nutmeg separation creates seed, mace and pericarp states. Conditioning receives a fresh lot and hands off a declared fresh or stabilized state. Grading creates accepted, downgraded and rejected destinations.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | new establishment or existing stand of known age and establishment history |
| starting_condition_role | determines direct establishment records or remaining-life attribution |
| product_classification_scope | one nutmeg-seed, mace-aril, or cardamom-capsule route |
| recursive_input_rule | a same-category input is an upstream farm-gate product dataset and is not regenerated recursively |
| upstream_dataset_requirement | representative planting-material, nutrient, crop-protection, water, fuel and electricity datasets |
| disclosure | stand age, establishment source, crop/species, intercropping, area, harvest period, yield, co-products, conditioning, moisture basis and farm gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | all datasets | Preserve crop, harvested-organ and lot identity through every process. | `iisir-nutmeg-2005`; `iisir-cardamom-2022` |
| `boundary_perennial_phases` | establishment | Include establishment, non-bearing and productive phases; link replacement and termination to area and period. | `cerutti-perennial-crops-2016`; `spices-board-cardamom-cost-2021` |
| `boundary_nutmeg_separation` | nutmeg route | Include fruit collection and seed/aril/pericarp separation before distinct hand-offs. | `fao-nutmeg-handling` |
| `boundary_conditioning` | conditioning | Include washing, drying energy, moisture loss, rejects and re-drying before farm gate; omit for fresh direct dispatch. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `boundary_manufacture_exclusion` | downstream | Exclude grinding, extraction, commercial-kernel cracking, blending, fumigation and consumer packaging. | `fao-nutmeg-handling` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | direct for new stands or remaining-life attribution for existing stands | creates productive capacity | one established hectare |
| `productive_management` | Productive-year crop management | required | every harvest period | manages crop and records field emissions | one productive hectare-year |
| `harvest_separation` | Harvest and route-specific separation | required | every harvest lot | creates organ-specific outputs | one harvest lot |
| `primary_conditioning` | Primary conditioning and preservation stabilization | conditional | only when performed before farm gate | alternative technology delta among fresh, ambient/shade and heated routes | one batch |
| `grading_dispatch` | Grading and dispatch | required | every saleable lot | creates accepted, downgraded and rejected states | 1,000 kg accepted product |

Harvest, conditioning and grading are lot/batch processes. Link inputs, cleaning, outputs, changeovers and re-drying to the same lot. Allocate shared batch burdens once by measured mass handled.

### Process: Perennial stand establishment (`stand_establishment`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Crop-specific planting material
- Amount rule: measured type, count and mass; separate replants
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established hectare over establishment
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5000
  - Unit: planting units/ha established
  - Basis: per established hectare over establishment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated establishment nutrient products (`establishment_nutrients`)

All mineral fertilizers, organic fertilizers and nutrient-bearing amendments are consolidated here; collect and resolve each actual product separately during dataset generation.

- Selected flow: Agricultural nutrient supply
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: sum measured product masses while retaining composition and application records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established hectare over establishment
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment`
- Range: Provisional aggregate product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg product/ha established
  - Basis: per established hectare over establishment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Established stand capacity (`established_stand`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Established nutmeg or cardamom stand capacity
- Amount rule: successfully established area after mortality/replant reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare entering establishment
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment`
- Range: Established-area reconciliation
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: ha established/ha entered
  - Basis: per hectare entering establishment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `cerutti-perennial-crops-2016`

### Process: Productive-year crop management (`productive_management`)

#### Inputs

##### Product flows

###### Consolidated productive-year nutrient products (`productive_nutrients`)

This is the process's only nutrient Product-input card; collect actual mineral, organic and amendment products individually for UUID resolution.

- Selected flow: Agricultural nutrient supply
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: sum measured product masses while retaining composition, N content and dates
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Range: Provisional aggregate product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg product/ha-year
  - Basis: per productive hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`management_irrigation_water`)

Record supplemental irrigation delivered to the productive stand; rainfall is excluded.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calibrated water delivered to the stand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Range: Productive-year irrigation-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: m3/ha-year
  - Basis: per productive hectare-year; zero for rainfed management
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`management_crop_protection`)

Record each actual formulated crop-protection product separately for later UUID resolution.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg product
- Amount rule: measured formulation mass by application and treated area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Range: Crop-protection product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg product/ha-year
  - Basis: per productive hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy supply (`management_energy`)

Record each fuel, electricity and purchased field-energy carrier in its native unit.

- Selected flow: Field energy carriers and electricity
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered, invoiced or calibrated carrier quantity; retain carrier identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Range: Productive-year field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ/ha-year
  - Basis: per productive hectare-year after documented conversion
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvestable crop material (`harvestable_crop`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Harvestable nutmeg fruit or cardamom capsules
- Amount rule: measured by crop and picking round; only the selected route is active
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per productive hectare-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Route-specific yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg harvestable material/ha-year
  - Basis: per productive hectare-year; inactive route contributes zero
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct managed-soil nitrous oxide (`soil_n2o`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Nitrous oxide to air
- Amount rule: calculate from collected N inputs and applicable IPCC tier by `calc_soil_n2o`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg N included in the direct managed-soil equation
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_management`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional direct-N2O-N factor screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg N2O-N/kg N input
  - Basis: per kg N in the applicable direct-emission equation
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and route-specific separation (`harvest_separation`)

#### Inputs

##### Product flows

###### Harvestable crop input (`harvest_input`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Harvestable nutmeg fruit or cardamom capsules
- Amount rule: measured mass entering the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Lot input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100000
  - Unit: kg/lot
  - Basis: per declared harvest lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Nutmeg seed with shell (`nutmeg_seed_output`)

This card records one intended output and its distinct hand-off.

- Selected flow: Raw nutmeg seed with shell
- Amount rule: measured separately; inactive route output is zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvest input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`
- Range: Intended-output mass-balance screen
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg output
  - Basis: per 1,000 kg harvest input; applies to nutmeg route; zero for cardamom
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`

###### Mace aril (`mace_aril_output`)

This card records one intended output and its distinct hand-off.

- Selected flow: Raw mace aril
- Amount rule: measured separately; inactive route output is zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvest input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`
- Range: Intended-output mass-balance screen
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg output
  - Basis: per 1,000 kg harvest input; applies to nutmeg route; zero for cardamom
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`

###### Cardamom capsules (`cardamom_capsule_output`)

This card records one intended output and its distinct hand-off.

- Selected flow: Raw cardamom capsules
- Amount rule: measured separately; inactive route output is zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvest input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`
- Range: Intended-output mass-balance screen
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg output
  - Basis: per 1,000 kg harvest input; applies to cardamom route; zero for nutmeg
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`

##### Waste flows

###### Pericarp, spikes and field rejects (`harvest_residues`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Route-specific harvest residues
- Amount rule: input minus intended outputs and measured losses; reclassify deliberately sold/used material as product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvest input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Residue mass-balance
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg residues
  - Basis: per 1,000 kg harvest input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`

### Process: Washing and/or drying (`primary_conditioning`)

#### Inputs

##### Product flows

###### Raw spice entering conditioning (`conditioning_raw_spice`)

Record the raw spice lot entering an active washing or drying stage.

- Selected flow: Route-specific raw spice
- Flow property / unit: Mass / kg
- Amount rule: weighed wet input linked to one conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg raw spice entering conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Conditioning input-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 100000
  - Unit: kg raw spice
  - Basis: per conditioning batch normalized to 1,000 kg raw spice
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning process water (`conditioning_water`)

Record supplied water only when washing is active.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or calibrated water supplied to the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg raw spice entering conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Conditional washing-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1,000 kg raw spice; zero when washing is inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy supply (`conditioning_energy`)

Record purchased fuel, electricity or heat used for active drying or conditioning; passive drying may record zero.

- Selected flow: Conditioning energy carriers
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier quantity by batch with carrier identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg raw spice entering conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Conditional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ
  - Basis: per 1,000 kg raw spice; zero purchased energy for passive drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned raw spice (`conditioned_product`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Conditioned nutmeg seed, mace aril or cardamom capsules
- Amount rule: measured final mass with moisture, time/temperature, method and rejected fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg raw spice entering conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`
- Range: Conditioned-product mass yield
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg conditioned product
  - Basis: per 1,000 kg raw spice entering conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`

##### Elementary flows

###### Moisture released (`drying_moisture_loss`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Water to air
- Amount rule: calculate by `calc_conditioning_balance` after rejects and samples
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg raw spice entering conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Moisture-loss balance
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg water
  - Basis: per 1,000 kg raw spice; zero without drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iisir-cardamom-2022`; `fao-nutmeg-handling`

### Process: Grading and dispatch (`grading_dispatch`)

#### Inputs

##### Product flows

###### Spice lot entering grading (`grading_input`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Route-specific fresh or conditioned raw spice
- Amount rule: measured lot mass with crop, organ and moisture identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Range: Grading-lot screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100000
  - Unit: kg/lot
  - Basis: per declared grading lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted raw spice reference product (`raw_spice_reference_product`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Nutmeg, mace, cardamoms, raw `6d4837b1-c271-4aac-89f4-f329d3290c47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: 1,000 kg net accepted product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_dispatch`
- Range: Fixed reference quantity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg accepted product
  - Basis: per 1,000 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded raw spice (`downgraded_product`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Downgraded route-specific raw spice
- Amount rule: measured lower-grade mass with destination and revenue; never count as accepted mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Range: Downgrade balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg downgraded product
  - Basis: per 1,000 kg grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects (`grading_rejects`)

This card records the declared flow and its quantity at this process boundary.

- Selected flow: Route-specific spice rejects
- Amount rule: measured final reject mass; retain re-drying loops under the producing lot until disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Range: Reject balance
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg rejects
  - Basis: per 1,000 kg grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-nutmeg-handling`; `iisir-cardamom-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | all shared operations | Subdivide route-specific and separately metered operations before allocation. | `iso-14044-2006` |
| `allocation_nutmeg_outputs` | nutmeg production/separation | Treat seed and mace as intended co-products. Allocate inseparable burdens by matched-period farm-gate economic value and report mass-allocation sensitivity. Pericarp receives burden only when deliberately sold or used. | `iso-14044-2006`; `fao-nutmeg-handling` |
| `allocation_establishment` | perennial establishment | Across lifecycle phases, divide cohort establishment burden by actual cumulative saleable output; for incomplete lives use a documented forecast and update for mortality, replacement or termination. Never charge one cohort twice. | `cerutti-perennial-crops-2016` |
| `allocation_batches` | conditioning/grading | Assign measured batch inputs directly; apportion shared run/changeover burden once by mass handled. Re-dried lots retain prior burden and receive additional re-drying burden. | `iso-14044-2006` |
| `allocation_rejects` | downgrade/rework/waste | Return rework to its producing lot; keep burden with downgraded saleable product under the chosen co-product rule; give waste no avoided credit in an attributional dataset. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment` | `stand_establishment` | planting, nutrients, area, survival | invoices and field logs | cohort; crop; material type/count/mass; every nutrient product/composition/mass; area; mortality; replants; dates | reconcile purchases and field records | units; kg; ha | every event | full establishment/non-bearing phase | stand/cohort | sum by event; retain product detail | invoices, labels, maps, counts |
| `cp_management` | `productive_management` | annual inputs and emission drivers | meters, invoices, application logs | stand age/area; every nutrient product and N; water; protection product; fuels; electricity; residues; soil class | direct records or documented runtime factors | kg; m3; L; kWh; ha | every event, annual aggregate | full represented year | stand/route | aggregate by ha-year; retain detail | invoices, labels, meter calibration |
| `cp_harvest` | `harvest_separation` | harvest and separated states | lot tickets and scales | lot; crop; organ; date; area; input; seed; aril; capsules; residues; destination | weigh every lot/state | kg | every lot | all harvest rounds | stand/lot | aggregate after mass balance | scale checks, tickets, receipts |
| `cp_conditioning` | `primary_conditioning` | washing, energy, moisture, yield | batch sheet and meters | lot; method; input mass/moisture; water; energy carrier; time/temperature; output mass/moisture; rejects; re-drying | meter and weigh/test every batch | kg; m3; kWh; MJ; % | every batch | all conditioned lots | farm/unit | reconcile input, output, reject and water loss | scale, moisture method, meters, batch log |
| `cp_dispatch` | `grading_dispatch` | accepted/downgraded/reject | grading and sales records | lot; identity; state; moisture; grade; input; outputs; rework destination; price; gate/date | weigh and link each state | kg; currency/kg | every lot | all represented production | farm/lot | reconcile, then normalize accepted output | scale, grade spec, invoice |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment | cohort inventory × product allocation share / cumulative actual or forecast saleable lifetime output | cohort inputs, area, survival, productive years, outputs | inventory/kg saleable output | `cerutti-perennial-crops-2016` |
| `calc_soil_n2o` | managed soil | apply selected IPCC tier to collected synthetic, organic and residue N; convert N2O-N to N2O once using 44/28 | N inputs, soil/climate and factors | kg N2O with factor provenance | `ipcc-2019-managed-soils` |
| `calc_conditioning_balance` | conditioning | wet input = conditioned output + rejects + samples + moisture loss, all on consistent basis | masses and moisture | reconciled yield/water loss | `iisir-cardamom-2022`; `fao-nutmeg-handling` |
| `calc_nutmeg_allocation` | seed/mace | share = output mass × matched farm-gate price / total intended-output revenue; repeat by mass | saleable masses and prices | shares summing to one | `iso-14044-2006` |
| `calc_reference_normalization` | dataset | attributed inventory / accepted mass × 1,000 | attributed inventory; accepted mass | inventory/1,000 kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all records | Preserve crop/species, organ, stand, harvest period, lot, moisture and route; mixed lots need measured composition. | maps, lot ledger, specification |
| `dq_temporal` | perennial phases | Cover the full represented year and retain establishment history or remaining-life model. | cohort history and replacement plan |
| `dq_mass_balance` | separation/conditioning/grading | Investigate unexplained difference above 5% of input rather than forcing closure. | calibrated weights and reconciliation |
| `dq_moisture` | fresh/dried conversion | Use one documented moisture method and basis; record sampling time. | test and calibration record |
| `dq_completeness` | inventory | Include every nutrient product below the one card, energy carrier, co-product, downgrade, reject and field-emission driver. | invoices, logs, meters, receipts |
| `dq_representativeness` | aggregation | Disclose geography, system, route, ages, intercropping and drying technology; justify farm aggregation. | sampling frame and weights |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if crop/organ, state, moisture basis, grade, period, gate or route is missing, or accepted output is not exactly 1,000 kg. |  |
| `validate_route_exclusivity` | graph | Fail if nutmeg/cardamom or fresh/ambient/heated routes are silently averaged. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `validate_period_attribution` | establishment | Fail if phase, stand age, replacement or termination treatment is absent or double counted. | `cerutti-perennial-crops-2016` |
| `validate_output_set` | nutmeg separation | Fail unless seed, mace and pericarp destinations are declared and intended products allocated. | `fao-nutmeg-handling` |
| `validate_batch_linkage` | harvest through dispatch | Fail if inputs, cleaning, outputs, re-drying or rejects lack a lot/batch/period link or shared burden is duplicated. |  |
| `validate_nutrient_cardinality` | each process | Fail if a process has more than one nutrient Product-input card, any nutrient group, or lacks individual actual-product collection for UUID resolution. |  |
| `validate_mass_balance` | separation/conditioning/grading | Fail when output states are not reconciled or rejects are accepted product. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `validate_boundary` | downstream | Fail if grinding, extraction, commercial-kernel cracking, blending, fumigation or consumer packaging is included. | `fao-nutmeg-handling` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground farm-gate dataset for one declared raw spice route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | lifecycle models needing raw nutmeg seed, mace aril or cardamom capsule supply at farm gate |
| excluded_use | manufactured spice or undisclosed average across unrelated crop routes |
| required_metadata | crop/species; organ; geography; system; stand age/phase; establishment attribution; intercropping; period; state/moisture; grade; allocation; conditioning; gate |
| required_quality_disclosure | coverage; measured/estimated shares; mass balance; allocation shares and price period; range exceedances; unresolved UUIDs; gaps |
| update_trigger | changed route/state/technology/life assumption/co-product destination/price relation; >10% change in yield, energy or nutrient intensity; new representative records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-nutmeg-handling` | official_guidance | FAO, *Production, handling and processing of nutmeg and mace*, Section III, https://www.fao.org/4/x5047e/x5047E06.htm | harvest, separation, fresh/dry delivery, drying, grading, rejects |
| `iisir-nutmeg-2005` | extension_guidance | ICAR-IISR, *Nutmeg*, January 2005, https://www.indianspices.com/sites/default/files/cultivation_practices-nutmeg.pdf | perennial identity, seed/mace co-products, example yields |
| `iisir-cardamom-2022` | extension_guidance | ICAR-IISR, *Cardamom*, https://spices.res.in/storage/app/public/pdfs/CARDAMOM/1ENG-2022.pdf | establishment, harvest, washing, curing and moisture |
| `fao-cardamom-curing` | official_guidance | FAO, *Asia Industrial and Institutional Stove Compendium*, https://www.fao.org/4/ad378e/AD378E07.htm | batch curing, moisture and energy relevance |
| `spices-board-cardamom-cost-2021` | dataset | Spices Board India, *Cost of Cultivation of Cardamom (Kerala)*, https://indianspices.com/sites/default/files/SMALLCARDAMOM2021_new.pdf | phase/activity coverage |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O |
| `cerutti-perennial-crops-2016` | literature | Cerutti et al., Journal of Cleaner Production 127 (2016) 555–561, https://doi.org/10.1016/j.jclepro.2016.04.031 | perennial establishment attribution |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | allocation hierarchy and sensitivity |
