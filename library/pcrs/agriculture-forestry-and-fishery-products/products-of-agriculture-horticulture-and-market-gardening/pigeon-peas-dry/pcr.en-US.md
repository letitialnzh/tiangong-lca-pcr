---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pigeon-peas-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Pigeon peas, dry

## 1. Scope and Applicability

This PCR covers mature dry whole pigeonpea grain (*Cajanus cajan*) from managed cultivation through farm-gate hand-off. It includes maturity, whole-plant cutting or mature-pod picking, field or floor drying, threshing, cleaning, grading, conditional final drying, repeated pod flushes, stems and pod walls, loss, downgrade, rejects and rework. It excludes green vegetable pigeonpea, planting seed sold as seed, split dhal, flour, cooked or canned product, and off-farm processing.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pigeon-peas-dry |
| classification_refs | CPC 3.0:01707 Pigeon peas, dry |
| covered_products | Mature, cleaned and graded dry whole pigeonpea grain at farm gate |
| excluded_products | Green vegetable pigeonpea; planting seed sold as seed; split dhal; flour; cooked or canned product; downstream milling |
| representative_product | Mature dry whole grain of *Cajanus cajan* |
| production_route | Managed cultivation; whole-plant cutting or mature-pod picking; drying; threshing; cleaning; grading; conditional final drying |
| market_state | Harvested grain, unprocessed; production mix, at farm gate |

Managed cultivation is the biological-production parent. Whole-plant cutting and mature-pod picking are alternative production routes because they change topology, repeated-flush records and residue accounting. Manual or mechanized threshing and sun or heated drying are technology alternatives under their parent activities. Coexisting routes are kept separate through lot or batch records before aggregation.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature dry whole pigeonpea grain, cleaned and graded, at farm gate |
| How much | 1,000 kg as delivered |
| How well | Declared commercial grade, measured moisture, damage and foreign-matter basis, with unresolved rejects excluded |
| How long or cycle | One declared crop cycle including every contributing harvest flush and conditioning lot |
| reference_flow_link | `pigeonpea_farm_gate_grain` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Pigeon peas, dry `6cac6f0d-9d09-4685-86f5-e1cc1ac94511` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species *Cajanus cajan*; mature dry whole grain; harvest route; crop cycle and flush count; geography; cultivation system; moisture; grade; damage and foreign matter; farm-gate hand-off |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Grain-state mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-delivered mass with wet-basis moisture; convert dry matter as `wet mass × (1 - moisture fraction)`. |
| `area_to_reference` | Field inputs, emissions and output | Stated activity property | source unit and kg reference product | Retain area and crop-cycle records, then normalize by accepted farm-gate grain from the same cycle. |
| `nutrient_composition` | Consolidated nutrient supply | Product mass and nutrient-element mass | kg product and kg element | Preserve every actual product, mass, nutrient composition and application date; product mass is not nutrient mass. |
| `lot_reconciliation` | Harvest and conditioning | Mass | kg | Reconcile input with products, co-products, rework transfers, rejects, moisture removal and physical loss without counting returned material twice. |

## 5. System Boundary

The boundary starts with the declared field condition before establishment and ends at farm-gate hand-off of accepted grain. Cultivation hands a standing mature crop to an independent harvest node. Harvest creates whole-plant, branch or mature-pod lots. Drying, threshing, cleaning and grading create prepared grain. Conditional final drying stabilizes grain that has not reached the declared hand-off moisture.

The crop-cycle model uses single-period attribution: later harvest flushes are batches within the same crop cycle.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field area, prior crop and residue state, soil management condition, establishment material and opening date before the crop cycle |
| starting_condition_role | Foreground cultivation starting condition |
| product_classification_scope | Mature dry whole pigeonpea grain within CPC 3.0:01707 |
| recursive_input_rule | Returned grain rework remains linked to its originating lot and retains prior burdens; purchased pigeonpea used for sowing or blending is a separate upstream input. |
| upstream_dataset_requirement | Use supplier-specific datasets for purchased seed, nutrient products, crop-protection products, water, fuels, electricity and services when available; disclose representative substitutes. |
| disclosure | Geography; period; variety or maturity class; sole/intercrop status; crop duration; harvest route and flushes; drying and threshing technology; moisture and grade; residue destinations; allocation; rework; farm-gate hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Cultivation | Include all attributable operations and inputs from the declared starting condition through maturity, including failed establishment and field loss. | `icrisat-pigeonpea-production-1992` |
| `boundary_harvest_routes` | Harvest | Model whole-plant cutting and mature-pod picking separately; index each repeated flush and do not treat standing crop retained for a later flush as harvested output. | `icrisat-pigeonpea-production-1992` |
| `boundary_conditioning` | Conditioning | Include field or floor drying, threshing, cleaning, grading and conditional final drying before farm gate; link every loss, reject and rework path to its producing node. | `icrisat-pigeonpea-production-1992` |
| `boundary_downstream` | Product transformation | Exclude dehulling, splitting, milling, cooking, canning, retail packing and distribution beyond farm gate. |  |
| `boundary_soil_emissions` | Managed soil | When N inputs or returned residues occur, include direct and relevant indirect managed-soil N2O pathways under the declared applicable method. | `ipcc-managed-soils-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed pigeonpea cultivation | required | Always | Managed biological production with an alternative production route delta | one field crop cycle |
| `harvest_capture` | Whole-plant cutting or mature-pod picking | required | Declare route and flush | Harvest/capture using alternative technology routes | one harvest lot |
| `field_floor_drying` | Field or floor drying | required | Always before threshing | Primary conditioning by lot | one drying lot |
| `thresh_clean_grade` | Threshing, cleaning and grading | required | Always | Batch production for primary conditioning and grading | one conditioning batch |
| `final_drying_rework` | Final drying and rework | conditional | Grain requires further drying or re-cleaning | Batch production for stabilization and rework | one drying/rework batch |

### Process: Managed pigeonpea cultivation (`managed_cultivation`)

Production is crop-cycle based. Shared field burdens occur once per crop cycle and every harvest flush remains linked to that period.

#### Inputs

##### Product flows

###### Sowing material (`sowing_material`)

Record seed actually sown, including resowing.

- Selected flow: Pigeonpea sowing material
- Flow property / unit: Mass / kg
- Amount rule: measured mass sown by field and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Sowing-rate QA range
  - Range role: Typical range (`typical_range`)
  - Lower: 4.2
  - Upper: 70
  - Unit: kg/ha per crop cycle
  - Basis: planted hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icrisat-pigeonpea-production-1992`

###### Consolidated agricultural nutrient supply (`agricultural_nutrient_supply`)

This single card covers all mineral fertilizers, organic fertilizers, lime and nutrient-bearing amendments. Foreground expansion retains every actual product and nutrient composition; separate N, P, K or organic-fertilizer cards are prohibited.

- Selected flow: Agricultural nutrient supply products
- Flow property / unit: Mass / kg product and kg nutrient element
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured masses by actual product, composition and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional total product-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg product/ha per crop cycle
  - Basis: all nutrient-bearing products applied to one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record delivered irrigation only when it occurs; rainfall is not a product input.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated delivered water by event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha per crop cycle
  - Basis: delivered irrigation for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection and inoculant products (`cultivation_supplies_services`)

Record each crop-protection product and non-nutrient inoculant by identity and field event. Do not combine these products with energy or field services.

- Selected flow: Crop-protection and non-nutrient inoculant products
- Flow property / unit: Mass or volume / kg or L
- Amount rule: measured formulated-product quantity by field event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources:
- Range: Provisional formulated-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulated product/ha per crop cycle
  - Basis: recorded non-nutrient field products for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy supply (`field_energy`)

Record fuels, electricity and qualifying machinery-energy services separately by carrier and operation.

- Selected flow: Field-operation energy carriers and qualifying machinery-energy services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: convert measured carrier and qualifying service records to energy by field event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources:
- Range: Provisional cultivation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha per crop cycle
  - Basis: recorded field energy for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-energy field services (`field_non_energy_services`)

Record manual labour, animal traction or other non-energy field services separately when represented as Product inputs.

- Selected flow: Non-energy field services
- Flow property / unit: Service / service-hour
- Amount rule: measured service quantity by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources:
- Range: Provisional non-energy service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: service-hour/ha per crop cycle
  - Basis: recorded non-energy field services for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Managed-soil nitrous oxide (`managed_soil_n2o`)

Calculate direct and relevant indirect N2O from recorded synthetic N, organic N, returned residue N and other applicable sources.

- Selected flow: Nitrous oxide to air from managed soil
- Flow property / unit: Mass / kg N2O
- Amount rule: calculated from foreground N activity and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources: `ipcc-managed-soils-2019`
- Range: Provisional managed-soil N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha per crop cycle
  - Basis: included direct and indirect pathways for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Standing mature crop (`standing_mature_crop`)

Record the mature crop handed to harvest, identified by field, crop cycle and maturity evidence.

- Selected flow: Standing mature pigeonpea crop
- Flow property / unit: Mass / kg grain equivalent
- Amount rule: harvest receipts plus measured field loss and retained mature material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional mature-grain-equivalent yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 5000
  - Unit: kg/ha per crop cycle
  - Basis: standing mature grain equivalent for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-harvest loss (`preharvest_loss`)

Record mature pods or grain lost before collection; standing crop retained for another flush is not loss.

- Selected flow: Pre-harvest pigeonpea loss
- Flow property / unit: Mass / kg grain equivalent
- Amount rule: field sampling and crop-cycle reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources:
- Range: Pre-harvest loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg loss/kg standing mature grain equivalent
  - Basis: mature grain equivalent in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Whole-plant cutting or mature-pod picking (`harvest_capture`)

Declare whole-plant/branch cutting or mature-pod picking for each lot. Repeated picking requires flush identifiers and records of crop retained in the field.

#### Inputs

##### Product flows

###### Standing mature crop input (`harvest_inputs`)

Record the mature crop by originating field, harvest lot and flush.

- Selected flow: Standing mature pigeonpea crop
- Flow property / unit: Mass / kg
- Amount rule: lot-linked crop input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per harvest lot and flush
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Harvest-input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg standing crop/kg collected dry-grain equivalent
  - Basis: one harvest lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest energy supply (`harvest_energy`)

Record fuel, electricity and qualifying machinery-energy services used for cutting, picking, bundling and movement to the drying place.

- Selected flow: Harvest-operation energy carriers and qualifying machinery-energy services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from measured carrier and qualifying service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per harvest lot and flush
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg collected dry-grain equivalent
  - Basis: one harvest lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected plants, branches or mature pods (`collected_harvest_material`)

Record the physical state handed to drying and keep whole-plant, branch and pod-picked lots separate.

- Selected flow: Collected pigeonpea harvest material
- Flow property / unit: Mass / kg
- Amount rule: weighed collected mass by field, route and flush
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Collected fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg collected material/kg harvest input
  - Basis: harvest-lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Harvest loss and incidental material (`harvest_loss`)

Record shattered pods, spilled grain and cut material without intended use; exclude living crop retained for a later flush.

- Selected flow: Harvest loss and incidental material
- Flow property / unit: Mass / kg
- Amount rule: field estimate or lot mass-balance difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources:
- Range: Harvest-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg loss/kg harvest input
  - Basis: harvest-lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Field or floor drying (`field_floor_drying`)

The incoming collected state is dried to a state suitable for threshing. Record location, duration, turning, weather exposure, moisture and damage by lot.

#### Inputs

##### Product flows

###### Collected harvest material received (`predrying_input`)

Record the weighed harvested material handed from the identified harvest lot into this drying lot.

- Selected flow: Collected pigeonpea harvest material
- Flow property / unit: Mass / kg
- Amount rule: weighed material entering the drying lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per drying lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_predrying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Pre-threshing drying-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg wet material/kg dry-grain equivalent
  - Basis: one drying lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried plants or pods for threshing (`dried_harvest_material`)

Record the prepared dry lot handed to threshing with its measured output moisture.

- Selected flow: Dried pigeonpea plants or pods
- Flow property / unit: Mass / kg
- Amount rule: weighed dry material with output moisture by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per drying lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_predrying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Field or floor drying duration
  - Range role: Typical range (`typical_range`)
  - Lower: 1
  - Upper: 14
  - Unit: day
  - Basis: elapsed exposure for one drying lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icrisat-pigeonpea-production-1992`

##### Waste flows

###### Weather damage and spillage (`predrying_loss`)

Record damaged, contaminated or spilled material separately from calculated water removal.

- Selected flow: Pre-threshing drying loss
- Flow property / unit: Mass / kg
- Amount rule: reject and spill mass plus unexplained physical loss, excluding water removed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per drying lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_predrying`
- Sources:
- Range: Physical-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg physical loss/kg drying input
  - Basis: drying-lot mass balance excluding removed water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Threshing, cleaning and grading (`thresh_clean_grade`)

Each batch records manual or mechanized technology, cleaning/changeover, inputs and all grade or destination outputs. Incoming dried material is separated into accepted grain, downgrade, intended stem/pod outputs and rejects.

#### Inputs

##### Product flows

###### Dried harvested material input (`conditioning_inputs`)

Record dried harvested material by originating drying lot.

- Selected flow: Dried pigeonpea plants or pods
- Flow property / unit: Mass / kg
- Amount rule: weighed material by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Conditioning-input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg dried material/kg accepted and downgraded grain
  - Basis: one conditioning batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy supply (`conditioning_energy`)

Record energy carriers and qualifying machinery-energy services used for threshing, cleaning and grading.

- Selected flow: Conditioning energy carriers and qualifying machinery-energy services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from measured carrier and qualifying service records by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg accepted and downgraded grain
  - Basis: one conditioning batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cleaned grain (`accepted_clean_grain`)

The hand-off is to final drying when moisture exceeds the declared condition, or to farm-gate release otherwise.

This intended output is declared together with any intended stem or pod-wall co-product before attribution.

- Selected flow: Accepted cleaned pigeonpea grain
- Flow property / unit: Mass / kg
- Amount rule: weighed grain by grade, moisture and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Accepted-grain fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted grain/kg conditioning input
  - Basis: conditioning-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded grain (`downgraded_grain`)

Record usable grain outside the reference grade with its grade, reason, destination and hand-off.

- Selected flow: Downgraded pigeonpea grain
- Flow property / unit: Mass / kg
- Amount rule: weighed downgrade by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources:
- Range: Downgraded-grain fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgraded grain/kg conditioning input
  - Basis: conditioning-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Stems and pod walls with intended use (`stem_pod_coproduct`)

Record stems, branches or pod walls as co-products only with documented production intent, recipient and use; otherwise classify them as residue or waste.

- Selected flow: Pigeonpea stems and pod walls with intended use
- Flow property / unit: Mass / kg dry matter
- Amount rule: weighed or moisture-corrected transfer to recipient
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources:
- Range: Intended residue-output fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry output/kg dry conditioning input
  - Basis: conditioning-batch dry-matter balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejects and cleaning loss (`conditioning_rejects`)

Record damaged or contaminated grain, foreign matter, dust and physical loss. Assign disposal, recovery or rework; unresolved rejects cannot enter accepted output.

- Selected flow: Conditioning rejects and cleaning loss
- Flow property / unit: Mass / kg
- Amount rule: weighed rejects plus physical balance difference, excluding removed water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources:
- Range: Reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg conditioning input
  - Basis: conditioning-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Final drying and rework (`final_drying_rework`)

The usable input is cleaned grain. The stabilized output is dry grain at declared moisture and grade. Re-drying or re-cleaning retains the originating batch and prior burdens; only incremental burdens are added.

#### Inputs

##### Product flows

###### Grain entering final drying or rework (`final_drying_inputs`)

Record accepted or off-spec grain separately by reason, originating batch and technology.

- Selected flow: Cleaned pigeonpea grain requiring final drying or rework
- Flow property / unit: Mass / kg
- Amount rule: measured batch input with incoming moisture and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final-drying or rework batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_drying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Final-drying input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg incoming grain/kg stabilized grain
  - Basis: one final-drying or rework batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Final-drying and rework energy (`final_drying_energy`)

Record purchased fuel, electricity and qualifying energy services used for final drying or rework; ambient solar drying has zero purchased energy.

- Selected flow: Final-drying and rework energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from measured carrier and qualifying service records by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final-drying or rework batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_drying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional final-drying energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg stabilized grain
  - Basis: one final-drying or rework batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farm-gate mature dry pigeonpea grain (`pigeonpea_farm_gate_grain`)

This accepted reference output excludes every unresolved reject and downgrade.

- Selected flow: Pigeon peas, dry `6cac6f0d-9d09-4685-86f5-e1cc1ac94511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: exactly the accepted as-delivered reference mass with measured moisture
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: one PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Recovered downgraded grain (`recovered_downgraded_grain`)

Record grain still outside the reference grade after rework only when it leaves for a documented lower-grade use.

- Selected flow: Recovered downgraded pigeonpea grain
- Flow property / unit: Mass / kg
- Amount rule: weighed outgoing mass by origin and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per rework batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_drying`
- Sources:
- Range: Recovered downgrade fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgraded output/kg rework input
  - Basis: rework-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Final drying damage and reject (`final_drying_reject`)

Record heat or mould damage, contamination and physical loss; calculated water removal is not waste.

- Selected flow: Final-drying damage and unrecovered reject
- Flow property / unit: Mass / kg
- Amount rule: weighed reject plus physical balance difference, excluding water removed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final-drying or rework batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_drying`
- Sources:
- Range: Final-drying reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg batch input
  - Basis: final-drying or rework-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | All nodes | Subdivide field, flush, lot, batch, technology and rework records before allocation when independent measurements exist. |  |
| `allocation_crop_cycle` | Shared cultivation | Attribute shared cultivation burdens once across all flushes in proportion to dry accepted and downgraded grain mass unless a reviewed causal method is used; never reapply them per flush. |  |
| `allocation_intended_outputs` | Grain, stems and pods | Treat outputs as co-products only with production intent, quality state, recipient and hand-off. Apply one declared economic, physical or reviewed causal method to the complete intended-output set and disclose sensitivity. |  |
| `allocation_rework` | Re-drying and re-cleaning | Returned material retains prior burdens; add incremental burdens once and do not count returned mass as new input or accepted output before release. |  |
| `allocation_reject_exit` | Downgrade and waste | Downgraded outputs follow the complete-output attribution rule; treatment of waste remains with the producing node unless a disclosed downstream waste convention applies. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `managed_cultivation` | inputs, mature crop, loss, soil-emission activity | field-cycle record | field; area; dates; variety; crop system; seed; actual nutrient products/composition; irrigation; protection; energy; residue management; yield/loss | invoices, logs, meters, sampling and reconciliation | native units, ha, kg | each event; crop-cycle summary | full crop cycle | every field | aggregate by field/cycle then normalize by accepted grain | dates, calibration, labels, reconciliation |
| `cp_harvest` | `harvest_capture` | crop input, services, collected state, loss | harvest-lot/flush record | field; cycle; route; flush; maturity; date; crop estimate; service; collected mass; retained crop; loss | scale, sampling and operation log | kg and service units | every lot/flush | all contributing flushes | every field/route | keep routes/flushes separate and reconcile states | lot id, scale check, maturity evidence |
| `cp_predrying` | `field_floor_drying` | wet input, dry output, moisture and loss | drying-lot record | lot; location; time; protection; input/output mass and moisture; damage; spill | scale, moisture meter and lot log | kg, %, day | every lot | full interval | every drying place | report water removal separately from physical loss | calibration, traceability, inspection |
| `cp_conditioning` | `thresh_clean_grade` | batch input, services, grades, co-product and reject | batch record | batch; source lot; technology; input; moisture; energy; cleaning/changeover; outputs; grade; damage; destination | scale, meter, service and grade records | kg, %, energy/service | each batch/changeover | all contributing batches | every route/site | reconcile before grade/destination aggregation | calibration, lineage, destination receipt |
| `cp_final_drying` | `final_drying_rework` | input, energy, moisture, release, downgrade and reject | drying/rework batch | batch; origin; reason; input/output mass/moisture; route; temperature; duration; energy; grade; destination | scale, moisture/temperature/time/energy records | kg, %, °C, hour, energy | every pass | full intervention | every route/site | retain prior burdens, add incremental burdens once, reconcile outputs | calibration, lineage, release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | Wet/dry mass | `dry matter = wet mass × (1 - wet-basis moisture fraction)`; water removed preserves dry matter. | mass and moisture | dry matter and water removed | `mass-balance-identity` |
| `calc_normalization` | All activities | Sum only linked records, divide by accepted as-delivered grain and multiply by 1,000 kg. | linked quantities and accepted grain | quantity per reference flow | `mass-balance-identity` |
| `calc_soil_n2o` | N additions and residues | Apply the declared applicable IPCC or reviewed national Tier method, including relevant direct, volatilization/deposition and leaching/runoff pathways. | N composition, residue N, factors | kg N2O by pathway | `ipcc-managed-soils-2019` |
| `calc_reconciliation` | Every lot/batch | Input dry mass equals accepted, intended co-product, downgrade, reject and physical-loss dry mass; rework return is a transfer. | linked input/output mass and moisture | variance and completeness flag | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference output | Confirm species, whole-grain state, farm-gate status, grade, moisture, damage and foreign matter. | release and specification |
| `dq_temporal` | Route lineage | Cover every input event, flush, drying lot, batch and rework pass. | field-to-gate lineage |
| `dq_completeness` | Output states | Classify every output as accepted, downgrade, intended co-product, rework, residue, waste or loss. | reconciled balance |
| `dq_measurement` | Quantities | Use calibrated or verified equipment and state estimation methods and uncertainty. | calibration and records |
| `dq_representativeness` | Production mix | Weight fields/routes by accepted output and disclose exclusions, substitutions and shares. | contribution table |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Reject green, planting-seed-market or processed product and grain without species, moisture, grade and farm-gate qualifiers. |  |
| `validate_lineage` | Process map | Require continuous field–cycle–flush–drying-lot–conditioning-batch–rework–farm-gate lineage and one parent for every alternative route. | `icrisat-pigeonpea-production-1992` |
| `validate_flushes` | Pod picking | Require flush ids, retained standing crop and one-time attribution of shared cultivation burdens. | `icrisat-pigeonpea-production-1992` |
| `validate_grades` | Grading | Require accepted and non-accepted states, a hand-off for every state, and separation of downgrade, reject, waste and rework. |  |
| `validate_rework` | Rework | Reject double counting of returned mass or prior burdens and exclude unresolved off-spec grain from accepted output. |  |
| `validate_multi_output` | Intended outputs | Require complete output enumeration and an explicit attribution decision; one output cannot occur at two hand-offs. |  |
| `validate_mode_indexing` | Periods/lots/batches | Link inputs, outputs, cleaning/changeover and yield to the relevant period, flush, lot or batch; reject duplicated shared burdens. |  |
| `validate_nutrient_cardinality` | Cultivation Product inputs | Permit at most one fertilizer/nutrient Product input card. It must be `agricultural_nutrient_supply`, bind only to `flow-set.agricultural-nutrient-supply` version `0.3.0`, have no group, and cover mineral, organic and amendment products together. |  |
| `validate_ranges` | Every Flow Card | Require exactly one complete Range; require lower not greater than upper and EN/ZH/structured equivalence. |  |
| `validate_final_condition` | Farm-gate grain | Require measured final moisture. ICRISAT's 6–8% observation is source-specific QA guidance, not a universal grade unless adopted by the declared specification. | `icrisat-pigeonpea-production-1992` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate production dataset for mature dry pigeonpea grain |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness and quality review |
| allowed_use | Processes and lifecycle models requiring mature dry whole pigeonpea grain within the declared geography, period, route mix, grade and moisture basis |
| excluded_use | Green pigeonpea, planting seed, split dhal, flour, cooked/canned product, unreviewed generic pulse substitution, downstream transport or processing |
| required_metadata | PCR id/version; geography; period; fields/cycles; variety; crop system; harvest routes/flushes; technologies; grade; moisture; damage/foreign matter; residue destinations; allocation; rework; coverage and uncertainty |
| required_quality_disclosure | measured/estimated shares; missing records; substitutions; route coverage; balance variance; moisture conversion; emission method/factors; allocation sensitivity; Flow Set resolution status |
| update_trigger | Material change in boundary, UUID, grade/moisture basis, topology, technology mix, co-product use, attribution, emission method, geography or QA evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `icrisat-pigeonpea-production-1992` | handbook | Singh, F. and Oswalt, D. L. (1992), *Pigeonpea Botany and Production Practices*, ICRISAT. https://oar.icrisat.org/2422/1/Pigeonpea-Botany-Production-Practices.pdf | Identity, cultivation, sowing rate, maturity, whole-plant/repeated-picking routes, drying, threshing, cleaning and moisture guidance |
| `ipcc-managed-soils-2019` | method_factor | IPCC (2019), *2019 Refinement to the 2006 IPCC Guidelines*, Volume 4, Chapter 11. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct and indirect N2O method |
| `mass-balance-identity` | method_factor | Conservation of dry matter and physical mass across a declared process node | Moisture conversion, reconciliation and fraction bounds |
