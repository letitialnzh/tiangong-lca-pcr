---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chicory-roots
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Chicory roots

## 1. Scope and Applicability

This PCR covers fresh, unprocessed cultivated chicory (*Cichorium intybus* L.) roots at the farm gate: establishment, field management, lifting, defoliation/trimming, soil removal, grading and hand-off. It excludes forced chicons, leafy or forage chicory, seed, roots stored for forcing, and sliced, dried, roasted or extracted products. Forcing, roasting, coffee-substitute manufacture and inulin extraction are downstream.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chicory-roots |
| classification_refs | CPC 3.0: 01691 Chicory roots |
| covered_products | Fresh cultivated chicory taproots after lifting, trimming, soil removal and grading |
| excluded_products | Forced chicons; leafy or forage chicory; seed; dried, sliced or roasted root; coffee substitute; inulin and other extracts |
| representative_product | Saleable fresh chicory roots in the declared grade and as-delivered moisture and cleanliness state |
| production_route | Managed field production, lifting, primary conditioning and grading; direct sowing/transplanting and manual/mechanical lifting are declared alternatives |
| market_state | Fresh, unprocessed produce at farm gate |

The managed-production parent is `field_production`. Direct sowing and transplanting may occur on different lots but are mutually exclusive for one field lot; the planting-material record and resulting root form can differ. Manual and mechanical lifting likewise require separate lot records because equipment energy, loss and soil carryover can differ. Current records must substantiate each route delta.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable fresh, unprocessed chicory roots delivered at farm gate |
| How much | 1 kg net mass |
| How well | Accepted grade, with cultivar/use route, establishment route, lifting method, trimming convention, soil-cleanliness and moisture state declared |
| How long or cycle | One crop cycle with no storage, including all attributable operations through farm-gate hand-off |
| reference_flow_link | `accepted_chicory_roots` from `grading_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Chicory roots `8691795b-78fb-4573-9e09-d4957c166bb4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or commercial type; intended root-use route; establishment route; harvest date and lifting method; grade; trimming and adhering-soil convention; as-delivered moisture state; geography; destination |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted roots | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net as-delivered root mass after trimming, soil removal and grading; exclude containers, free soil, tops and rejects. |
| `area_to_mass` | field records | Mass and area | kg and ha | Normalize crop-cycle records with the same lot area and reconciled accepted yield; disclose moisture state and conversions. |
| `internal_mass_state` | process transfers | Mass | kg | Reconcile transfers on one declared wet-mass state and separately record tops, soil, downgraded roots, rejects and losses. |

## 5. System Boundary

The foreground begins with planting material and crop-attributable field inputs and ends with accepted roots at the farm gate. Upstream datasets cover planting material, nutrient and crop-protection products, energy, water supply and external treatment. Forcing and later processing are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field receiving chicory seed or transplants for one crop cycle |
| starting_condition_role | Foreground entry; include crop-attributable preparation and disclose inherited soil condition |
| product_classification_scope | Fresh unprocessed chicory roots corresponding to CPC 3.0 01691 |
| recursive_input_rule | Purchased chicory roots are upstream product inputs and are not recursively represented as production of this reference output |
| upstream_dataset_requirement | Representative upstream datasets for planting material, nutrients, crop protection, energy, water and external treatment |
| disclosure | Cultivar/use route, field and dates, prior crop, geography, establishment, irrigation, lifting, trimming, soil removal, grade destinations and farm-gate state |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_cycle` | `field_production` | Include crop-attributable preparation, establishment, nutrient and crop-protection applications, irrigation and field operations through harvest readiness. | `umn-forcing-chicories-2023`; `omafra-root-chicory` |
| `boundary_lifting` | `root_lifting` | Model lifting separately because it removes the biological root from the field and has distinct energy, loss and soil-carryover records. | `umn-forcing-chicories-2023` |
| `boundary_conditioning` | `primary_conditioning` | Include defoliation/trimming and farm-level soil removal; include washing only when performed before hand-off. | `umn-forcing-chicories-2023`; `ucd-witloof-chicory` |
| `boundary_grading` | `grading_farm_gate` | Record accepted, downgraded and rejected states and a destination for each; only accepted roots are reference output. | `umn-forcing-chicories-2023` |
| `boundary_downstream` | downstream | Exclude forcing, storage for forcing, chicon production, slicing, drying, roasting and extraction. | `umn-forcing-chicories-2023`; `ucd-witloof-chicory` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed biological field production | required | One lot/cycle in batch production mode; direct sowing or transplanting route delta declared | Produce harvest-ready roots; classify all management inputs | ha and kg harvest-ready roots |
| `root_lifting` | Root lifting and capture | required | Manual or mechanical alternative technology route delta declared | Capture roots independently from production and transfer them to conditioning | kg roots entering lifting |
| `primary_conditioning` | Primary conditioning: trimming and soil removal | required | Washing only when performed on farm | Convert lifted roots to prepared roots; separate tops, soil and wastewater | kg lifted roots |
| `grading_farm_gate` | Grading and hand-off | required | Every grade/destination declared | Separate accepted, downgraded and rejected roots | kg prepared roots |

Index operations by lot and cycle. Assign shared machinery, cleaning and changeovers once by measured use, time, area or mass. Keep alternative-route lots separate until route-specific yield and losses are calculated.

### Process: Managed field production (`field_production`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Chicory seed or transplants
- Amount rule: Record actual seed or transplant mass and establishment route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `umn-forcing-chicories-2023`
- Range: Provisional planting-material mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 2000
  - Unit: kg/ha
  - Basis: per hectare; broad enough for seed and transplant routes
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`nutrient_supply`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: All mineral fertilizers, organic fertilizers and nutrient-bearing amendments
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Record every actual product separately by identity, nutrient content and wet/dry mass; this is the sole nutrient-supply card for this process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `omafra-root-chicory`; `cwalina-root-chicory-n-2022`
- Range: Provisional total nutrient-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg/ha
  - Basis: sum of products as applied, including wet organic products
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Crop-protection and field-treatment products
- Amount rule: Record each formulated product, active ingredient where known, purpose and treated area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional formulated-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/ha
  - Basis: total formulated products applied per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Irrigation water
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter or calculate gross delivery and identify source and system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Sources: `omafra-root-chicory`; `usu-chicory-garden`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3/ha
  - Basis: gross crop-cycle irrigation per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy (`field_energy`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Energy carriers for field machinery and pumps
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record each carrier by operation; exclude lifting energy recorded downstream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: MJ/ha
  - Basis: purchased final energy per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvest-ready roots (`harvest_ready_roots`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Harvest-ready chicory roots in soil
- Amount rule: Calculate from lifted roots, sampled field losses and residues on one wet-mass basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Sources: `cwalina-root-chicory-n-2022`
- Range: Fresh-root yield guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 100
  - Unit: Mg/ha
  - Basis: harvest-ready fresh-root mass per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `cwalina-root-chicory-n-2022`

##### Waste flows

###### Field residues and losses (`field_residues`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Tops, non-harvested biomass and roots left in field
- Amount rule: Estimate by representative sampling and declare retention, removal or treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvest-ready roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Range: Provisional residue ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg harvest-ready roots
  - Basis: wet residue and loss per kg harvest-ready roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct field emissions (`direct_field_emissions`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Exact substances emitted to air, water or soil from field inputs
- Amount rule: Calculate each substance and compartment separately with an identified method; never create an aggregate elementary exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-refinement-volume4`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/ha
  - Basis: summed reported mass used only for screening; exchanges remain substance- and compartment-specific
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Root lifting and capture (`root_lifting`)

#### Inputs

##### Product flows

###### Harvest-ready roots entering lifting (`roots_to_lifting`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Harvest-ready chicory roots in soil
- Amount rule: Use the reconciled `harvest_ready_roots` output for the same lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg roots entering lifting
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Range: Internal-transfer identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg roots entering lifting
  - Basis: same-lot upstream output to downstream input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Lifting energy (`lifting_energy`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Energy carriers for manual support or mechanical lifting and field transfer
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record actual carriers by lifting event; exclude field energy already assigned.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg roots entering lifting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `umn-forcing-chicories-2023`
- Range: Provisional lifting-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg roots entering lifting
  - Basis: purchased final energy for lifting and field transfer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lifted roots (`lifted_roots`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Lifted chicory roots with adhering soil and tops
- Amount rule: Weigh the stream received by conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg roots entering lifting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Range: Lifted-root balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg roots entering lifting
  - Basis: lifted stream per kg harvest-ready roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Lifting losses (`lifting_losses`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Unrecovered or damaged roots and incidental material
- Amount rule: Estimate from field sampling and declare field retention or removal.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg roots entering lifting
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Range: Provisional lifting-loss ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg roots entering lifting
  - Basis: loss per kg roots entering lifting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Trimming and soil removal (`primary_conditioning`)

#### Inputs

##### Product flows

###### Lifted roots entering conditioning (`roots_to_conditioning`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Lifted chicory roots with adhering soil and tops
- Amount rule: Use measured `lifted_roots` from the same lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Internal-transfer identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg lifted roots
  - Basis: same-lot lifting output to conditioning input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Conditioning water (`conditioning_water`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Process water used for soil removal and optional washing
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter gross water input and reuse; the amount is zero when no washing occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional conditioning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: L/kg lifted roots
  - Basis: gross water input per kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy (`conditioning_energy`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Energy carriers used for trimming, soil removal and optional washing
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record each actual carrier and its measured or allocated consumption for the indexed run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg lifted roots
  - Basis: purchased final energy per kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared roots (`prepared_roots`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Trimmed and soil-removed fresh chicory roots
- Amount rule: Weigh at the grading hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Prepared-root balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg lifted roots
  - Basis: prepared roots per kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Conditioning residues and wastewater (`conditioning_residues`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Tops, trimmings, soil, spoiled pieces and wastewater
- Amount rule: Measure each material separately, including water discharge, and declare return, use, treatment or disposal destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional total residue mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 21
  - Unit: kg/kg lifted roots
  - Basis: all separated solids plus discharged water per kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grading and hand-off (`grading_farm_gate`)

#### Inputs

##### Product flows

###### Prepared roots entering grading (`roots_to_grading`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Trimmed and soil-removed fresh chicory roots
- Amount rule: Use `prepared_roots` from the same lot and run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Internal-transfer identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg prepared roots
  - Basis: same-lot conditioning output to grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh chicory roots (`accepted_chicory_roots`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Chicory roots `8691795b-78fb-4573-9e09-d4957c166bb4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Measure net mass meeting the declared grade at hand-off; this is the reference output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-flow-identity`

###### Downgraded roots (`downgraded_roots`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Fresh roots sent to a declared lower-grade or processing destination
- Amount rule: Weigh roots that remain products but fail the reference grade; record destination and exclude from accepted output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Downgrade balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg prepared roots
  - Basis: downgraded product per kg prepared roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Grading rejects (`grading_rejects`)

Record this flow at the declared process boundary for the indexed lot or run; quantify it with the stated protocol and keep its physical state and destination explicit.

- Selected flow: Off-spec, damaged or spoiled roots leaving product use
- Amount rule: Weigh and declare regrading, return to conditioning, recovery, feed, treatment or disposal; count each rework loop once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Reject balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg prepared roots
  - Basis: rejects per kg prepared roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all nodes | Prefer subdivision and direct measurement by lot and run. | `iso-14044-2006` |
| `allocation_grades` | accepted and downgraded roots | Report masses separately; if both have value and subdivision is impossible, declare the study allocation method and provide unallocated inventory. Never count downgraded roots as accepted. | `iso-14044-2006` |
| `allocation_residues` | tops, soil, losses and rejects | Retain burdens with the producing node unless a documented product function and destination justify allocation. | `iso-14044-2006` |
| `allocation_runs_rework` | shared runs and rework | Assign shared burdens once by measured use, time, area or mass; returned material retains prior burdens and receives only incremental rework burdens. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | planting, each nutrient and crop-protection product | invoice/application/field records | lot; route; product; nutrient/active content; wet/dry basis; quantity; area; date | Reconcile stock and applications; generate concrete nutrient exchanges separately under the sole nutrient card | kg, kg active, ha | each operation | full cycle | field lot | Sum by product and normalize by area then accepted yield | invoice; label; applicator record |
| `cp_irrigation` | `field_production` | irrigation | meter/pump records | source; readings or flow/runtime; area; reuse | Meter or calibrated flow × runtime | m3, ha | each event | full cycle | field lot | Sum gross delivery; subtract only documented reuse | calibration; irrigation log |
| `cp_energy` | all processes | energy by operation | fuel/meter/machine logs | carrier; quantity; operation; runtime; area/mass; lot/run | Meter or reconcile fuel; assign shared use once | L, kg, kWh, MJ | each operation | full cycle through hand-off | lot/run | Retain carrier exchange; normalize by causal driver | invoice; meter; equipment log |
| `cp_mass_balance` | field and lifting | roots, residues, losses, transfers | scale/sampling records | lot; gross/tare/net; moisture; tops; soil; loss; time | Calibrated weighing and representative sampling | kg, ha | each lot/handoff | harvest through lifting | field lot | Reconcile inputs, outputs, residues and losses | calibration; sampling plan |
| `cp_field_emissions` | `field_production` | exact emissions | calculation record | nutrient form/N; application; soil/climate; substance; compartment; method | Apply named method to collected records | kg substance, kg N | each application/calculation | full cycle | field lot | Sum by substance and compartment | inputs; method; audit trail |
| `cp_conditioning` | `primary_conditioning` | utilities, roots, residues, wastewater | meter/scale/run log | run/lot; roots; water; energy; tops; soil; wastewater; destinations | Meter utilities and weigh material states | kg, L, kWh | each run | all included runs | site/run | Reconcile solids and water separately | calibration; run sheet; receipt |
| `cp_grading` | `grading_farm_gate` | accepted, downgraded, rejected, reworked | grade/dispatch log | run/lot; grade; each output mass; destination; rework; date | Calibrated weighing by output state | kg | each run/dispatch | all included runs | site/run | Reconcile prepared input and outputs; count rework once | calibration; grade; dispatch |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | field flows | amount per kg accepted roots = crop-cycle amount / accepted mass from the same area | amount; area; accepted mass | normalized exchange | `mass-balance-identity` |
| `calc_process_balance` | each hand-off | input mass = products + residues/rejects + measured loss on one mass state | calibrated masses; samples | closure difference | `mass-balance-identity` |
| `calc_direct_emissions` | field emissions | Apply the declared current method separately by substance and compartment | input and field records | kg substance by compartment | `ipcc-2019-refinement-volume4` |
| `calc_shared_energy` | shared equipment | consumption × causal share; shares sum to 1 | energy; time/area/mass | assigned energy | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Link cultivar/use, grade, trimming, cleanliness and moisture state to each lot mass. | grade, lot and dispatch records |
| `dq_coverage` | inventory | Cover one complete crop cycle and every contributing lifting, conditioning and grading run. | dated field/run logs |
| `dq_measurement` | mass, water, energy | Use calibrated instruments or document calculation, sampling and uncertainty. | calibration and sampling records |
| `dq_route` | alternatives | Keep establishment and lifting routes separate until route-specific input, yield and loss calculation. | route-indexed records |
| `dq_completeness` | nutrients and outputs | Collect actual nutrient products under one card and account for accepted, downgraded, rejected, residue and loss states without duplication. | input ledger; balance report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Confirm UUID, 1 kg net mass, fresh unprocessed root state and qualifiers; reject datasets for chicons, leaves, roasted root or extracts. | `ucd-witloof-chicory`; `umn-forcing-chicories-2023` |
| `validate_topology` | process graph | Require field, lifting, conditioning and grading hand-offs; washing is conditional and forcing/later processing absent. | `umn-forcing-chicories-2023` |
| `validate_route_delta` | alternatives | Require parent process, lot-level route and evidence for changed planting, energy, loss or conditioning records; do not mix mutually exclusive routes within a lot. | `umn-forcing-chicories-2023` |
| `validate_nutrients` | field inputs | Require at most one nutrient Product card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0`; generated exchanges preserve actual products. | `omafra-root-chicory` |
| `validate_mass_balance` | hand-offs | Reconcile each input with products, residues/rejects and loss on the same state; investigate unexplained closure. | `mass-balance-identity` |
| `validate_reject_routing` | grade/rework | Give every downgraded or rejected state a destination; returned material receives only incremental burden and cannot be accepted until it passes grade. | `mass-balance-identity` |
| `validate_run_attribution` | shared operations | Verify lot/run indexing and shares summing to one so cleaning, energy and rework are counted once. | `mass-balance-identity` |
| `validate_ranges` | inventory | Require exactly one complete Range per flow card; review values outside it without replacing supported foreground values. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for fresh unprocessed chicory roots at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` when representative |
| allowed_use | LCA of fresh roots and downstream forcing, food, feed or ingredient systems that add their own post-farm processes |
| excluded_use | Direct representation of forced chicons, leafy chicory, roasted chicory, coffee substitute, extracts, seed or processed root |
| required_metadata | geography; lot/cycle; cultivar/use; establishment and lifting routes; yield; irrigation; nutrient ledger; conditioning; grade destinations; moisture state; year |
| required_quality_disclosure | primary-data share; representativeness; balance closure; route separation; uncertainty; treatment of range exceedances |
| update_trigger | material change in route, technology, irrigation/nutrients, yield, conditioning, grade, reject destination, geography or data age |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `umn-forcing-chicories-2023` | extension_guidance | University of Minnesota Extension (2023), “Forcing Chicories,” https://blog-fruit-vegetable-ipm.extension.umn.edu/2023/01/forcing-chicories-opportunity-for.html | Establishment, lifting, trimming and forcing distinction |
| `ucd-witloof-chicory` | official_guidance | USDA/UC Davis, “Chicory (Belgian Endive or Witloof Chicory),” https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo87416/pdf/GOVPUB-A-PURL-gpo87416.pdf | Root/chicon identity and forcing exclusion |
| `omafra-root-chicory` | official_guidance | Ontario Ministry of Agriculture, “Specialty Cropportunities — Root Chicory,” https://www.omafra.gov.on.ca/CropOp/en/indus_misc/pharm/chic.html | Field, irrigation and nutrient context |
| `usu-chicory-garden` | extension_guidance | Utah State University Extension, “How to Grow Chicory in Your Garden,” https://extension.usu.edu/yardandgarden/research/chicory-in-the-garden | Irrigation and crop-management context |
| `cwalina-root-chicory-n-2022` | literature | Cwalina-Ambroziak et al. (2022), doi:10.24326/asphc.2022.5.8 | Root-yield guardrail and N-response variability |
| `ipcc-2019-refinement-volume4` | method_factor | IPCC 2019 Refinement, Volume 4 | Managed-soil emission method identity |
| `iso-14044-2006` | standard | ISO 14044:2006 | Allocation hierarchy |
| `mass-balance-identity` | method_factor | Conservation of mass on declared states | Transfers, balances and shared attribution |
| `reference-flow-identity` | method_factor | PCR reference-flow normalization identity | Exact reference output |
