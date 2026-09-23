---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.spinach
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Spinach

## 1. Scope and Applicability

This PCR covers commercial production of fresh, unprocessed spinach leaves from field or protected-cultivation establishment through crop management, cutting or pulling, field removal of soil and foreign material, optional washing and cooling, primary packaging, and hand-off at the declared farm gate or pack-house gate. It covers baby-leaf, bunching, and whole-leaf fresh-market routes when the product state and harvest route are declared. Spinach seed production, nursery production of planting material, frozen or canned spinach, prepared meals, retail, consumer storage, cooking, and consumption are excluded. Processing energy and packaging are included only when they occur before the declared gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.spinach |
| classification_refs | CPC 3.0:01215 Spinach |
| covered_products | Fresh, unprocessed spinach leaves, baby leaf, bunches, or whole plants delivered at the declared gate |
| excluded_products | Spinach seed and planting material, frozen, canned, dried, cooked, pureed, or otherwise processed spinach, and downstream retail or consumption |
| representative_product | Marketable fresh spinach leaves meeting the declared harvest size, cleanliness, trimming, and grade requirements |
| production_route | Direct seeding or transplanted establishment, managed leaf production, repeated or single cutting, grading, optional washing and cooling, and primary packing |
| market_state | Fresh, unprocessed spinach at farm-gate or pack-house gate in loose, bunched, or declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh spinach at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh and unprocessed, with declared leaf age or cut, harvest form, cleanliness, trimming, grade, moisture condition, and packaging state |
| How long or cycle | One declared crop cycle and harvest campaign; successive cuts from one sowing are aggregated to the same crop-cycle output |
| reference_flow_link | `spinach_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh spinach at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; crop type (baby leaf, bunching, or whole leaf); variety or cultivar group; sowing or transplanting date; harvest date and cut number; declared gate; grade and size criteria; soil or protected-cultivation route; washed or unwashed state; cooling state; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_spinach_mass` | marketable spinach and harvest records | Mass | kg | Keep gross cut mass, marketable fresh mass, rejected material, soil or foreign material, and field residue as separate measured or calculated quantities. |
| `area_yield_normalization` | field and protected-cultivation records | Area and mass | ha and kg | Record inputs and harvests by bed, field, or protected unit and normalize to the marketable output from the same crop cycle. |
| `nutrient_product_basis` | fertilizer and compost inputs | Mass of product and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | Preserve purchased product mass and convert to nutrient basis only from the documented label, supplier specification, or laboratory result. |
| `water_volume_basis` | irrigation and washing water | Volume | m3 | Record metered or calculated delivered water separately for crop irrigation and post-harvest washing; do not replace irrigation with rainfall unless the declared method requires a water balance. |
| `multi_cut_output` | baby-leaf and repeated-harvest routes | Mass | kg | Sum marketable cuts from the declared sowing or transplanting campaign and reconcile each cut with rejects and unharvested crop material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared production bed or protected-cultivation unit receiving spinach seed or transplant material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared spinach crop cycle and input accounting |
| product_classification_scope | Fresh spinach under CPC 3.0:01215 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased spinach seed or transplant material is an upstream product input linked once; its own production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for seed or transplants, fertilizers, amendments, crop-protection products, irrigation water, energy, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare production geography, field or protected route, crop cycle, sowing density, irrigation source and meter basis, nutrient basis, crop-protection program, harvest form, yield and reject reconciliation, washing and cooling, packaging, residue fate, and gate location. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and field management | Include bed preparation, sowing or transplanting, crop management, and crop-cycle inputs that produce the declared spinach output; disclose prior land use and exclude unrelated infrastructure construction. | `ucanr-spinach-production-1996`; `govnl-spinach-production-guide-2025` |
| `boundary_gate_preparation` | harvest and packing | End the foreground system at the declared farm-gate or pack-house gate and include cutting, grading, trimming, washing, cooling, and primary packaging when they occur before that gate. | `usda-ams-bunched-spinach-standard`; `psu-spinach-harvest-guidance-2025` |
| `boundary_soil_emissions` | fertilizer, crop residues, and managed soil | Estimate applicable direct and indirect nitrogen emissions using one declared method and the recorded nutrient inputs and residue fate; avoid double counting a nitrogen pathway. | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | field residue, rejects, and trim | Record field return, composting, feed use, treatment, or disposal separately; a material with no demonstrated productive use remains a residue or waste flow. | `ucanr-spinach-production-1996`; `usda-ams-bunched-spinach-standard` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Spinach crop establishment | required | every represented sowing or transplanting campaign | foreground crop establishment | established bed or protected-cultivation area |
| `crop_management` | Spinach crop management | required | each represented crop cycle | foreground managed biological production | managed area and crop-cycle harvest |
| `harvest_and_gate_preparation` | Harvest and gate preparation | required | each represented harvest campaign | foreground harvest, conditioning, and gate hand-off | 1,000 kg marketable fresh spinach |

### Process: Spinach crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Flow: Spinach seed or transplant material (`seed_or_transplant_input`)

Record the purchased planting material entering each declared bed or protected unit, distinguishing seed from transplants.

- Selected flow: Spinach seed or transplant material
- Flow property / unit: Number of viable units or mass / seed, plant, or kg
- Amount rule: Record purchased lot quantity and viable seeding or transplanting quantity by bed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `govnl-spinach-production-guide-2025`
- Range: Seeding or transplanting quantity screen
  - Range role: Typical range (`typical_range`)
  - Lower: 10
  - Upper: 17
  - Unit: kg seed/ha
  - Basis: direct-seeded fresh-market spinach bed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `govnl-spinach-production-guide-2025`; `ufifas-leafy-vegetable-guide-2024`

###### Agricultural nutrient and fertilizer inputs (`crop_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `ucanr-spinach-production-1996`; `govnl-spinach-production-guide-2025`
- Range: Establishment nitrogen screen
  - Range role: Typical range (`typical_range`)
  - Lower: 22
  - Upper: 34
  - Unit: kg N/ha
  - Basis: preplant or planting application to a fresh-market spinach crop
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-spinach-production-1996`

- Range: Soil-test-dependent phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg P2O5/ha
  - Basis: establishment application pending soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Soil-test-dependent potassium screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg K2O/ha
  - Basis: establishment application pending soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Irrigation water for establishment (`establishment_irrigation_water`)

Record water delivered for bed preparation, germination, or transplant establishment separately from later crop irrigation.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or water-balance estimate for establishment irrigation by bed and source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ucanr-spinach-production-1996`; `fao-spinach-irrigation-schedule`
- Range: Establishment irrigation screen
  - Range role: Typical range (`typical_range`)
  - Lower: 100
  - Upper: 300
  - Unit: m3/ha
  - Basis: delivered irrigation between seeding and emergence or transplant establishment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-spinach-production-1996`; `fao-spinach-irrigation-schedule`

###### Flow: Mobile machinery fuel for bed preparation (`establishment_machinery_fuel`)

Record fuel used for bed preparation, cultivation, seeding, or transplanting when field machinery crosses the foreground boundary.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Metered fuel or equipment fuel log allocated to the spinach bed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach from the same crop cycle
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ucanr-spinach-production-1996`
- Range: Bed-preparation fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 400
  - Unit: MJ/ha
  - Basis: field preparation and planting operations
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Flow: Occupation of spinach production area (`establishment_land_occupation`)

Record the area occupied by the bed or protected unit for the crop-cycle establishment and attribution period.

- Selected flow: Occupation, agricultural land
- Flow property / unit: Area-time / m2*a
- Amount rule: Declared productive area multiplied by the represented crop-cycle duration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_records`
- Sources: `govnl-spinach-production-guide-2025`
- Range: Production-area screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.5
  - Unit: ha per 1,000 kg
  - Basis: declared crop-cycle area normalized to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Spinach crop management (`crop_management`)

#### Inputs

##### Product flows

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
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ucanr-spinach-production-1996`; `govnl-spinach-production-guide-2025`
- Range: Crop-cycle nitrogen screen
  - Range role: Typical range (`typical_range`)
  - Lower: 22
  - Upper: 56
  - Unit: kg N/ha
  - Basis: preplant plus supplemental nitrogen for fresh-market spinach
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-spinach-production-1996`

- Range: In-season phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg P2O5/ha
  - Basis: in-season application pending soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: In-season potassium screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg K2O/ha
  - Basis: in-season application pending soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Crop-protection product (`crop_protection_input`)

Record each crop-protection product by active ingredient or commercial formulation when it is applied to the spinach crop.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg product or kg active ingredient
- Amount rule: Supplier invoice, spray log, or application record by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `govnl-spinach-production-guide-2025`
- Range: Crop-protection quantity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg product/ha
  - Basis: total applied crop-protection product for the represented crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Irrigation water during crop growth (`crop_irrigation_water`)

Record irrigation delivered during crop growth by field, source, and irrigation event or meter period.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance irrigation deliveries for the represented crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ucanr-spinach-production-1996`; `fao-spinach-irrigation-schedule`
- Range: Crop-cycle irrigation screen
  - Range role: Typical range (`typical_range`)
  - Lower: 413
  - Upper: 1240
  - Unit: m3/ha
  - Basis: total applied irrigation between seeding and harvest for fresh-market spinach
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-spinach-production-1996`

###### Flow: Mobile machinery fuel during crop management (`crop_machinery_fuel`)

Record fuel for cultivation, mechanical weed management, fertigation equipment, and other mobile machinery assigned to the crop cycle.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel log or equipment activity estimate allocated to the spinach crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ucanr-spinach-production-1996`
- Range: Crop-management fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 800
  - Unit: MJ/ha
  - Basis: cultivation and crop-management operations
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Flow: Spinach crop residue returned to soil (`field_residue_output`)

Record unharvested spinach biomass or cut residue returned to the field separately from marketable product and off-field rejects.

- Selected flow: Spinach crop residue
- Flow property / unit: Mass / kg wet residue
- Amount rule: Reconcile pre-harvest biomass, harvested mass, and residue mass from field records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `ucanr-spinach-production-1996`
- Range: Field-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4000
  - Unit: kg wet residue/ha
  - Basis: unharvested or returned spinach biomass in the crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Harvest-ready fresh spinach from the crop (`harvest_ready_spinach_output`)

Record the fresh spinach mass leaving the crop-management process for cutting, pulling, or pack-house preparation.

- Selected flow: Harvest-ready fresh spinach
- Flow property / unit: Mass / kg
- Amount rule: Field or bed harvest record before post-harvest reject and trim separation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `psu-spinach-harvest-guidance-2025`
- Range: Harvest mass reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1500
  - Unit: kg harvested mass per 1,000 kg marketable output
  - Basis: gross field harvest before grading, trimming, and reject separation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Unmarketable field spinach and crop loss (`field_spinach_loss_output`)

Record unharvested, damaged, bolted, or otherwise unmarketable spinach remaining in the field or removed before gate preparation.

- Selected flow: Unmarketable spinach and crop loss
- Flow property / unit: Mass / kg wet material
- Amount rule: Difference between potential or harvested crop mass and documented marketable output, with the physical fate declared.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `psu-spinach-harvest-guidance-2025`
- Range: Field-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg wet material per 1,000 kg marketable output
  - Basis: field and pre-pack losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flow: Direct nitrous oxide from managed soil (`direct_n2o_air_output`)

Calculate direct soil nitrous oxide from declared nitrogen inputs and the selected IPCC-compatible method; report the result to air.

- Selected flow: Nitrous oxide, emissions to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared nitrogen-emission factor to eligible crop-cycle nitrogen inputs and account for the selected climate and soil method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-nitrogen`
- Range: Direct nitrous-oxide QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg N2O/ha
  - Basis: managed-soil nitrogen emissions for the represented crop cycle
  - Basis kind: N input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-refinement-nitrogen`

###### Flow: Nitrate to freshwater from field losses (`nitrate_freshwater_output`)

Model nitrate loss to freshwater only when the declared foreground water balance or emission method supports it.

- Selected flow: Nitrate, emissions to freshwater
- Flow property / unit: Mass / kg NO3-
- Amount rule: Calculate from eligible nitrogen surplus and the selected site or method factor; do not infer a loss from fertilizer purchase alone.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-nitrogen`
- Range: Nitrate-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg NO3-/ha
  - Basis: declared nitrogen surplus and water-loss pathway
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Flow: Harvest-ready fresh spinach entering preparation (`harvest_ready_spinach_input`)

Record the harvested spinach transferred from the field or protected unit into grading, trimming, washing, cooling, or primary packing.

- Selected flow: Harvest-ready fresh spinach
- Flow property / unit: Mass / kg
- Amount rule: Transfer ticket or receiving scale record reconciled to the originating crop-cycle harvest.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `psu-spinach-harvest-guidance-2025`
- Range: Preparation receiving-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1500
  - Unit: kg received material per 1,000 kg marketable spinach
  - Basis: harvested spinach received for grading, washing, cooling, or packing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Wash water for optional post-harvest cleaning (`wash_water_input`)

Record water used for washing or removing soil and foreign material when washing occurs before the declared gate.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered or batch-recorded water used for spinach washing, excluding crop irrigation water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable washed spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `usda-ams-bunched-spinach-standard`
- Range: Wash-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg marketable spinach
  - Basis: batch washing or flume water crossing the gate-preparation boundary
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Electricity for washing, cooling, and packing (`postharvest_electricity_input`)

Record electricity used by washing, forced-air cooling, weighing, sorting, and packing equipment when those operations are in scope.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or equipment-level electricity allocated to the spinach throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_energy_records`
- Sources: `psu-spinach-harvest-guidance-2025`
- Range: Post-harvest electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 120
  - Unit: kWh per 1,000 kg marketable spinach
  - Basis: washing, cooling, grading, and packing operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Primary packaging for fresh spinach (`primary_packaging_input`)

Record bags, bands, crates, cartons, or other packaging that crosses the declared gate-preparation boundary with the spinach.

- Selected flow: Primary packaging
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Packaging bill of materials and counted units reconciled to packed marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable packed spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `usda-ams-bunched-spinach-standard`
- Range: Primary-packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 35
  - Unit: kg packaging material per 1,000 kg spinach
  - Basis: declared primary packaging format and reusable-container accounting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Washing and trimming reject (`wash_trim_reject_output`)

Record soil, damaged leaves, coarse stems, and trimming material removed during preparation, with its physical fate.

- Selected flow: Spinach washing and trimming reject
- Flow property / unit: Mass / kg wet material
- Amount rule: Weigh or reconcile removed material against received and marketable packed spinach.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable spinach at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `usda-ams-bunched-spinach-standard`
- Range: Preparation-reject screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 250
  - Unit: kg wet material per 1,000 kg marketable spinach
  - Basis: soil, damaged leaves, coarse stems, and trim removed before gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Used wash water or wastewater (`wash_wastewater_output`)

Record used wash water leaving the preparation process when it is discharged or sent to treatment before the declared gate.

- Selected flow: Wastewater from spinach washing
- Flow property / unit: Volume / m3
- Amount rule: Water input less documented retained or evaporated quantity, reconciled to discharge or treatment records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable washed spinach
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_records`
- Sources: `usda-ams-bunched-spinach-standard`
- Range: Wash-wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg marketable washed spinach
  - Basis: used wash water leaving the preparation boundary
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Flow: Marketable fresh spinach at the declared gate (`spinach_farm_gate_output`)

Record the packed or unpacked spinach product that crosses the declared farm-gate or pack-house gate after grading and any in-scope washing or cooling.

- Selected flow: Fresh spinach at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Final saleable mass from scale, dispatch, or lot records after reject and trim reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow of 1,000 kg marketable fresh spinach
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `usda-ams-bunched-spinach-standard`; `psu-spinach-harvest-guidance-2025`
- Range: Reference-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg marketable fresh spinach
  - Basis: declared reference output at the farm-gate or pack-house gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)
  - Sources: `usda-ams-bunched-spinach-standard`

##### Waste flows

###### Flow: Final spinach rejects at gate preparation (`final_spinach_reject_output`)

Record product rejected after grading or packing, including the declared route to feed, composting, treatment, or disposal.

- Selected flow: Final spinach rejects
- Flow property / unit: Mass / kg wet material
- Amount rule: Final grading and packing reject weight reconciled to received harvest and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh spinach at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `usda-ams-bunched-spinach-standard`
- Range: Final-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg wet material per 1,000 kg marketable spinach
  - Basis: grading and packing rejects after preparation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | shared field, bed, or protected unit | Attribute crop-cycle inputs to spinach using the recorded bed or unit area and the crop-cycle output; do not allocate to a second crop without its own records. | `ucanr-spinach-production-1996` |
| `allocation_multi_cut_spinach` | repeated cuts from one sowing | Treat successive cuts as outputs of the same declared crop cycle and reconcile each cut before normalizing to total marketable spinach. | `psu-spinach-harvest-guidance-2025` |
| `allocation_residue_fate` | field residues, rejects, and trim | Do not assign a co-product credit to residues unless a documented recipient, quantity, and intended use exists; otherwise retain the burden with spinach production and report the residue fate. | `usda-ams-bunched-spinach-standard` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, transplant, and establishment nutrients | seed invoice, seed lot, transplant, and input application records | lot id; material type; viable quantity; field or bed; date; product mass; nutrient concentration | retain supplier record and field application log | seed, plant, kg product, kg nutrient | each campaign and application | full represented crop cycle | each spinach bed or protected unit | sum by campaign and normalize to marketable output | supplier label, lot trace, application record, and crop-cycle reconciliation |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | establishment and crop irrigation | meter, pump, irrigation controller, or water-balance record | source; meter start and end; event date; area; irrigation method; rainfall adjustment | meter reading or documented water-balance calculation | m3 | each event or meter period | full represented crop cycle | each field, bed, or protected unit | sum delivered irrigation by crop cycle and source | calibrated meter or documented balance inputs |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | mobile machinery fuel | fuel invoice and equipment activity log | fuel type; quantity; equipment; operation; field; date; allocation basis | supplier invoice plus equipment log or activity estimate | L, kg, or MJ | each refuelling or operation | full represented crop cycle | each spinach production unit | allocate shared operations by area, hours, or fuel record | invoice, equipment log, and allocation calculation |
| `cp_nutrient_records` | `crop_management` | crop nutrients and nitrogen basis | nutrient plan, supplier invoice, and application log | product; nutrient concentration; application date; area; quantity; method | reconcile product records with field application records | kg product and kg nutrient | each application | full represented crop cycle | each spinach production unit | sum nutrient mass by crop cycle and declared basis | soil test, label or supplier specification, and application log |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray or treatment log and supplier record | product; active ingredient; rate; area; date; target; equipment | record each application and product lot | kg product or kg active ingredient | each application | full represented crop cycle | each spinach production unit | sum by active ingredient and crop cycle | application log and product label |
| `cp_field_records` | `crop_establishment` | land occupation and area | field register or protected-unit register | area; unit; land use; crop dates; bed identifier; protection structure | verify area and dates against production register | ha, m2, and days | each crop cycle | full represented crop cycle | each spinach field or protected unit | calculate area-time and normalize to gate output | field map, register, and date evidence |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | harvest, field residue, and field loss | harvest ticket, scale record, and field loss record | field; cut number; date; gross mass; marketable mass; residue; loss; destination | weigh each harvest or use documented lot reconciliation | kg wet material | each cut or harvest lot | full represented harvest campaign | each spinach field or bed | reconcile gross harvest, marketable output, rejects, and residue | scale record, lot ticket, and destination record |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | wash water, electricity, rejects, and wastewater | pack-house batch and utility records | received mass; wash water; discharge; electricity; trim; batch; date; fate | batch record plus meter allocation | kg, m3, and kWh | each batch or meter period | full represented harvest campaign | each preparation line or pack-house | aggregate by batch and normalize to marketable packed output | meter record, batch sheet, and waste or treatment receipt |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | washing, cooling, and packing electricity | electricity meter and equipment throughput record | meter period; line; kWh; throughput; cooling duration; batch | meter allocation by throughput or run time | kWh | each meter period or batch | full represented harvest campaign | each in-scope preparation line | allocate shared electricity by throughput and reconcile to batch output | meter data and allocation calculation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary packaging | packaging specification, bill of materials, and count record | material; unit mass; units; reuse status; batch; output mass | packaging count and specification reconciliation | kg material and units | each packaging lot or batch | full represented harvest campaign | each preparation line | sum virgin and reusable packaging separately per packed output | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable product and final rejects | dispatch scale, lot record, and reject record | lot; date; packed mass; unpacked mass; grade; reject; destination; gate | final scale and lot reconciliation | kg wet spinach | each dispatch lot | full represented harvest campaign | declared gate | sum saleable output and reject streams; normalize to 1,000 kg | certified scale or lot record and grade record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | fertilizer rows | product mass × declared nutrient fraction; retain the original product mass and nutrient basis | product invoice; nutrient concentration; application record | kg N, kg P2O5, or kg K2O by crop cycle | `govnl-spinach-production-guide-2025` |
| `calc_crop_cycle_normalization` | all crop-cycle inputs | crop-cycle quantity ÷ marketable fresh spinach mass × 1,000 kg | crop-cycle input; marketable output | normalized quantity per 1,000 kg output |  |
| `calc_multi_cut_output` | repeated harvest routes | sum marketable mass from all declared cuts in the campaign; reconcile gross mass and rejects before normalization | cut tickets; lot records; reject records | total crop-cycle marketable mass | `psu-spinach-harvest-guidance-2025` |
| `calc_area_time` | land occupation | production area × represented crop-cycle duration; disclose whether protected area is included | area register; crop dates | area-time quantity | `govnl-spinach-production-guide-2025` |
| `calc_nitrogen_emission` | direct soil nitrous oxide | apply the selected IPCC-compatible factor to eligible nitrogen input and declared soil or climate method; document factors in the dataset | nutrient records; method choice; crop-cycle area | kg N2O emitted to air | `ipcc-2019-refinement-nitrogen` |
| `calc_gate_mass_balance` | harvest and packing | received harvest = marketable output + rejects + residue or loss, with documented measurement uncertainty | harvest tickets; packing records; reject and residue records | reconciled mass balance | `usda-ams-bunched-spinach-standard` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all flow and product records | Declare spinach form, cultivar group, crop route, gate, harvest cut, and product state; resolve platform identities during foreground dataset construction where required. | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | inputs and outputs | Prefer calibrated meters, scales, supplier invoices, and application logs; document estimation and allocation methods where direct measurement is unavailable. | meter calibration, scale record, invoice, or calculation sheet |
| `quality_temporal` | crop-cycle inventory | Cover the full represented crop cycle and harvest campaign, including all cuts and material applications. | sowing or transplant date, application log, harvest tickets, and dispatch records |
| `quality_completeness` | crop-cycle balance | Reconcile seed or transplant material, nutrient inputs, irrigation, harvest, marketable output, residue, reject, and wastewater streams. | crop-cycle mass and input reconciliation |
| `quality_disclosure` | dataset metadata | Disclose protected cultivation, irrigation source, nutrient basis, crop-protection products, washing, cooling, packaging, and residue destination. | dataset metadata and supporting records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | The declared reference output must be marketable fresh spinach at the declared gate and must use mass in kg; a frozen, canned, cooked, or retail product is outside this PCR. | `usda-ams-bunched-spinach-standard` |
| `validate_crop_cycle_dates` | crop establishment and management | Sowing or transplanting, applications, irrigation, harvest cuts, and gate output must fall within the declared crop cycle or be explicitly attributed to it. | `govnl-spinach-production-guide-2025` |
| `validate_nutrient_basis` | fertilizer inputs and emissions | Product mass, nutrient concentration, nutrient basis, and emission calculation method must be present and internally consistent; avoid counting both product mass and nutrient mass as the same exchange. | `ucanr-spinach-production-1996`; `ipcc-2019-refinement-nitrogen` |
| `validate_mass_balance` | harvest and gate preparation | Gross harvest and received mass must reconcile with marketable output, rejects, residues, and losses within the declared measurement uncertainty. | `usda-ams-bunched-spinach-standard` |
| `validate_flow_set_resolution` | parameterized rows | At foreground data generation, each parameterized row must resolve to a verified UUID compatible with the specified Flow Set group, property, unit, and geography; otherwise retain an explicit coverage finding. |  |
| `validate_qualifiers` | reference flow and dataset metadata | Required qualifiers must be present in the dataset package, including crop form, cut, gate, washing, cooling, packaging, and production route. | `usda-ams-bunched-spinach-standard`; `psu-spinach-harvest-guidance-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural production dataset for fresh spinach at farm-gate or pack-house gate |
| downstream_use | secondary_dataset for fresh-spinach product systems; background_dataset only when the provider explicitly publishes a representative regional or market-average dataset with the required metadata |
| allowed_use | Comparative product studies, crop-cycle inventory modelling, farm or pack-house improvement, and declared fresh-spinach supply-chain assessments within the stated geography and product state |
| excluded_use | Frozen, canned, cooked, dried, retail, consumption, seed-production, or unqualified leafy-vegetable substitution; do not extrapolate across protected and open-field routes without scenario disclosure |
| required_metadata | product form; cultivar group; crop route; geography; crop dates; cut number; gate; yield; irrigation source and quantity; nutrient basis; crop-protection program; washing and cooling; packaging; residue and reject fate |
| required_quality_disclosure | temporal coverage, site scope, measurement versus calculated values, allocation rules, mass-balance result, platform identity resolution status, and all provisional estimates requiring replacement by foreground records |
| update_trigger | change in crop route, irrigation method, nutrient program, harvest form, wash or cooling line, packaging format, gate definition, or evidence that changes material quantities or boundary rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ucanr-spinach-production-1996` | literature | University of California Agriculture and Natural Resources, *Spinach Production in California*, ANR Publication 7212, https://anrcatalog.ucanr.edu/pdf/7212.pdf | production route, irrigation, nutrient application, crop management, and boundary context |
| `govnl-spinach-production-guide-2025` | official_guidance | Government of Newfoundland and Labrador, *Vegetable Crops Production Guide: Spinach*, https://www.gov.nl.ca/ffa/files/agrifoods-plants-pdf-spinach.pdf | seeding, crop establishment, soil-test-based nutrient practice, and crop-cycle qualifiers |
| `ufifas-leafy-vegetable-guide-2024` | extension_guidance | University of Florida IFAS, *Leafy Vegetable Production*, https://ask.ifas.ufl.edu/publication/CV293?downloadOpen=true | seed-rate and harvest-period screening |
| `fao-spinach-irrigation-schedule` | official_guidance | FAO, *Crop Water Management: Determination of the Irrigation Schedule for Crops Other Than Rice*, https://www.fao.org/4/T7202E/t7202e06.htm | spinach irrigation scheduling context |
| `usda-ams-bunched-spinach-standard` | official_guidance | USDA Agricultural Marketing Service, *Bunched Spinach Grades and Standards*, https://www.ams.usda.gov/grades-standards/bunched-spinach-grades-and-standards | product grade, freshness, trimming, defect, reject, and gate-quality qualifiers |
| `psu-spinach-harvest-guidance-2025` | extension_guidance | Penn State Extension, *Mid-Atlantic Commercial Vegetable Production: Spinach harvest and post-harvest considerations*, https://extension.psu.edu/downloadable/download/sample/sample_id/128944/ | harvest form, repeated cutting, handling, cooling, and gate-preparation context |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | managed-soil nitrogen-emission method and calculation rule |
