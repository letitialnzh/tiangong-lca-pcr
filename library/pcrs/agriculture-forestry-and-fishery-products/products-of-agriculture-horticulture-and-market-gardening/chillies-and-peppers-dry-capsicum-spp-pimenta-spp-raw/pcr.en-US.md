---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw"
language: "en-US"
status: candidate
sync_with: "pcr.zh-CN.md"
content_maturity: authored_methodology
translation_status: aligned
---
# Raw Dried Chillies and Peppers (Capsicum or Pimenta) at Primary Drying Gate
## 1. Scope and Applicability
This PCR guides a foreground data package for unprocessed dried fruit of *Capsicum* spp. or *Pimenta* spp. under CPC 3.0 `01652`. The declared product is whole dried fruit after harvest, drying and first cleaning or grading, at the primary drying gate. The package must identify genus and species or cultivar; *Pimenta dioica* allspice berries and *Capsicum* chilli/paprika fruits require separate route records. Mixed genera require disaggregated inventories and outputs; no shared crop factor or moisture target is inferred.
The boundary starts with managed cultivation or an explicitly identified sourced fruit input and ends with net accepted raw dried fruit. It includes harvest, first handling, natural/solar or mechanical drying, and first cleaning or sorting if performed before the gate. Purchased upstream inputs are linked to background datasets. Fresh green chillies and peppers (`01231`), *Piper* pepper (`01651`), crushed, ground or otherwise processed dried chilli (`23922`), blends, extracts, sterilization, retail packing and downstream distribution are outside this reference output. A purchased fresh-fruit drying-only foreground dataset must declare its upstream fruit dataset and cannot represent crop cultivation it did not collect. | `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024`

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw` |
| classification_refs | CPC 3.0 `01652`, raw dried *Capsicum* or *Pimenta* fruit |
| covered_products | Whole raw dried chilli, paprika fruit, or allspice fruit, with genus, species, style and drying route declared |
| excluded_products | fresh green peppers; *Piper* pepper; crushed, powdered, blended, extracted or otherwise processed spice |
| representative_product | 1 kg net accepted whole raw dried fruit at the declared primary drying gate |
| production_route | Annual or seasonal managed *Capsicum* crop, or perennial managed *Pimenta* fruit production, followed by harvest and route-specific drying |
| market_state | Whole dried unprocessed fruit, bulk or first transport container; target moisture and grade declared by applicable specification |
*Capsicum* and *Pimenta* are alternative biological production parents, not interchangeable botanical inputs. Natural/solar and mechanical drying are alternative technologies under the same drying activity; concurrent pre-drying and finishing steps may coexist when recorded separately. | `codex-cxs-353-2022`; `codex-cxs-358-2024`; `unece-ddp-24-2013`

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Whole raw dried *Capsicum* or *Pimenta* fruit at the primary drying gate |
| How much | 1 kg net accepted dried fruit |
| How well | Declare genus/species, whole form, incoming and outgoing moisture, grade, drying route, geography and gate |
| How long or cycle | One declared harvest season and associated drying lots |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Raw dried *Capsicum* or *Pimenta* fruit (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | genus and species; cultivar or commercial type; whole raw state; moisture; grade; natural/solar or mechanical drying; harvest season; geography; declared gate; bulk/container state |
| Binding | `unmapped` |
The reference amount excludes tare, free water removed, rejects, stems separated before the gate, and off-grade fruit. No CPC-specific product-flow UUID is claimed until Tiangong identity lookup succeeds.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted dried output | Mass | kg | Weigh net accepted whole dried fruit at the declared gate; exclude tare and rejects. |
| `moisture_basis` | harvested and dried fruit | Mass and moisture fraction | kg and % wet basis | Measure or document moisture for incoming and outgoing lots; convert by conserved dry matter with separately measured removals. |
| `drying_water` | drying output | Mass | kg | Calculate water removed as incoming water minus water retained in accepted and rejected solids, adjusted for added water if any. |
| `crop_area_time` | managed cultivation | Area-time | ha·season or ha·year | Use crop season for annual Capsicum and declared orchard year/fruit-bearing period for perennial Pimenta; record establishment attribution if included. |
| `energy_carrier` | drying and field energy | Energy, Mass or Volume | kWh, MJ, kg or L | Preserve carrier, fuel moisture, conversion basis, measured operation and batch linkage. |
| `nutrient_basis` | fertilizer and emissions | Mass | kg product and kg nutrient | Record formulated mass and nutrient composition separately; emission calculations use declared nutrient inputs. |

## 5. System Boundary
The managed production node records the crop or fruiting-tree object, geography, planted area or orchard area, seedling or tree stock, irrigation, nutrient and pest-management inputs, field energy, land use and relevant direct emissions. Capsicum and Pimenta routes may have different planting periods, perennial infrastructure and establishment attribution; collect each route rather than applying one crop factor. Harvest is a distinct node because it creates a measured fresh-fruit hand-off with collection loss. Drying stabilizes this moist, perishable input to a measured whole dry state; first cleaning and grading hand off accepted, downgraded, rejected and waste streams separately. | `codex-cxs-353-2022`; `codex-cxs-358-2024`; `ipcc-2019-managed-soils`
### Boundary Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_dried` | reference product | Include drying and first cleaning needed for whole raw dried fruit; exclude crushing, milling, extraction, blending and later treatment. | `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_route_identity` | production | Keep Capsicum annual/seasonal and Pimenta perennial inventories separate; declare whether cultivation is collected or supplied as an upstream fruit dataset. | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_drying_delta` | drying | Declare natural/solar and mechanical steps, their batch or continuous mode, energy and service inputs, moisture change and weather exposure; include all steps before the gate. | `unece-ddp-24-2013`; `mass-balance-identity` |
| `boundary_output_states` | harvest, drying, sorting | Separate accepted dry fruit, downgraded fruit, rejected fruit, stems/foreign material, other recoverable residues, evaporated water and unexplained loss by fate. | `mass-balance-identity` |
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Identified managed crop/tree and planted area, or documented purchased fresh-fruit lot at drying intake |
| starting_condition_role | biological production input or purchased upstream product; never a second reference output |
| product_classification_scope | CPC 01652 whole raw dried Capsicum/Pimenta fruit; fresh 01231, Piper 01651 and processed 23922 excluded |
| recursive_input_rule | Same-category dried fruit used for re-drying or blending is separately sourced and measured; do not recursively treat it as this harvest's new output. |
| upstream_dataset_requirement | Planting stock, fertilizers, water supply, fuels, electricity, equipment, purchased fresh fruit and treatment services need representative background datasets or documented exclusion. |
| disclosure | genus/species, route, season/site, fruit input source, moisture and grade before/after drying, drying technology, batch yield, rejects/fate, gate and attribution decisions |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_fruit_production` | Managed Fruit Production | conditional | when cultivation is inside the foreground | foreground | crop or orchard season |
| `fruit_harvest` | Fruit Harvest and Collection | conditional | when cultivation is inside the foreground | foreground | fresh fruit collected |
| `primary_drying` | Primary Fruit Drying | required | all included natural/solar and mechanical drying steps | foreground | dried fruit at measured moisture |
| `first_cleaning_grading` | First Cleaning and Grading | conditional | when cleaning or grading occurs before the declared gate | foreground | accepted whole dried fruit |

### Process: Managed Fruit Production (`managed_fruit_production`)
#### Inputs
##### Product flows

###### Planting stock and propagation material (`planting_stock`)
Declare seed or planting stock for Capsicum and seedlings or tree maintenance for Pimenta.
- Selected flow: named planting material
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`
- Sources: `codex-cxs-353-2022`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`managed_fruit_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional fertilizer-product screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg
  - Basis: fertilizer and nutrient-bearing amendment product mass per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`field_crop_protection_products`)

Record every crop-protection product separately with its formulation, active-substance content, operation, and application lot.

- Selected flow: Named crop-protection product
- Flow property / unit: Mass / kg product and kg active substance as applicable
- Amount rule: Measure each named product by operation and lot, retain its active-substance composition, and normalize to 1 kg net accepted raw dried fruit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional crop-protection-product screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg
  - Basis: crop-protection product mass per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation and field energy (`field_water_energy`)
Record water source, irrigation delivery, fuels and electricity by operation; justified zero is allowed.
- Selected flow: irrigation water, field fuel and electricity
- Flow property / unit: Volume or Energy / m3 or kWh
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: m3/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
No waste input is presumed; any returned compost is recorded with origin and burden treatment.

##### Elementary flows
Record land occupation, source-specific water withdrawal and managed-soil emissions from collected crop inputs; do not infer zero emissions from missing records. | `ipcc-2019-managed-soils`

#### Outputs
##### Product flows

###### Standing fruit crop transferred to harvest (`standing_fruit`)
Record the managed fruit state at the production-to-harvest hand-off by genus and season.
- Selected flow: standing Capsicum or Pimenta fruit crop
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record field residues and rejected fruit separately, with retained, removed, recovered or disposal fate.
##### Elementary flows
Direct crop emissions are calculated only from documented inputs and methods.

### Process: Fruit Harvest and Collection (`fruit_harvest`)
#### Inputs
##### Product flows

###### Harvest labour, machinery and collection service (`harvest_services`)
Allocate measured fuel, electricity and service activities to the harvested lot.
- Selected flow: harvest fuel, electricity and service
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
No generic waste input is presumed.
##### Elementary flows
Record direct exhaust where measured; fuel upstream burdens remain in background datasets.
#### Outputs
##### Product flows

###### Collected fresh fruit sent to drying (`fresh_fruit_handoff`)
Weigh fresh whole fruit and record moisture, botanical identity, harvest date and lot.
- Selected flow: fresh Capsicum or Pimenta fruit
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record uncollected fruit, field rejects and incidental material separately with destination.
##### Elementary flows
No new elementary output is presumed.

### Process: Primary Fruit Drying (`primary_drying`)
#### Inputs
##### Product flows

###### Fresh fruit to drying (`drying_fruit_input`)
Record the fresh-fruit hand-off or purchased lot, incoming mass and moisture.
- Selected flow: whole fresh Capsicum or Pimenta fruit
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying energy and service inputs (`drying_energy`)
Separate sun/solar exposure, fan electricity, heater fuel, contracted drying and batch cleaning or changeover inputs.
- Selected flow: electricity, fuel and drying service
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Sources: `unece-ddp-24-2013`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
If a recovered heat or waste-derived fuel enters drying, record source and burden treatment; none is presumed.
##### Elementary flows
Record direct combustion emissions if fuel burns within the foreground.

#### Outputs
##### Product flows

###### Whole dried fruit before grading (`dried_fruit_handoff`)
Weigh the stabilized whole dried fruit at measured moisture before first grading.
- Selected flow: whole raw dried Capsicum or Pimenta fruit
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record damaged, mouldy or otherwise rejected fruit and its recovery, treatment or disposal route; re-dried fruit remains linked to its original batch.
##### Elementary flows
Evaporated water is calculated from measured water balance and reported as moisture removed where the inventory convention requires it.

### Process: First Cleaning and Grading (`first_cleaning_grading`)
#### Inputs
##### Product flows

###### Dried fruit entering sorting (`sorting_input`)
Record the whole dried fruit hand-off without counting it as newly harvested product.
- Selected flow: whole dried fruit before sorting
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting energy and materials (`sorting_inputs`)
Record electricity, cleaning air, sacks or first transport containers when inside the gate.
- Selected flow: sorting energy and first containers
- Flow property / unit: Energy or Mass / kWh or kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
No waste input is presumed.
##### Elementary flows
Record dust releases if measured; do not treat separated soil or stems as accepted product.
#### Outputs
##### Product flows

###### Accepted whole raw dried fruit (`accepted_dried_fruit`)
Weigh each accepted grade at declared moisture and sum only grades within the declared reference specification.
- Selected flow: whole raw dried Capsicum or Pimenta fruit; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted raw dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `codex-cxs-353-2022`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.1
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record downgraded but usable fruit, rejects, separated stems/foreign material and dust separately. State whether each is reworked, sold, recovered or discarded; only a justified co-product receives allocation.
##### Elementary flows
No generic elementary flow is presumed.

## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_primary` | crop and drying lots | Attribute measured operations to botanical route, site, season and batch first; normalize all burdens to net accepted whole dried output. | `mass-balance-identity` |
| `allocation_offgrade` | downgraded fruit | Keep off-grade but marketable fruit distinct. Prefer subdivision by grade; if a genuine co-product cannot be subdivided, document the chosen physical or economic allocation and prices/quantities. | `mass-balance-identity` |
| `allocation_rework` | re-dried or resorted fruit | Link rework energy and losses to the original batch; count the accepted mass only at final exit and never double count shared-run or changeover burdens. | `mass-balance-identity` |
| `allocation_residue` | stems, rejects, residues | Record fate and any recovery credit explicitly; do not assign product burden or avoided burden by default. | `mass-balance-identity` |
Annual Capsicum and perennial Pimenta output years cannot share an undeclared denominator. For Pimenta, document bearing years and any establishment or shared orchard burden attribution. A batch dryer must record run-level input, output, cleaning and changeover; continuous drying must record period mass balance and stable operating window.

## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_records` | `managed_fruit_production` | cultivation inputs | farm records | genus; species; field; area; season; stock; fertilizer; nutrient; pesticide; water; energy | invoices, field logs and meters | kg; ha; m3; kWh | each operation | full declared crop season or Pimenta orchard year | each site | sum by botanical route and season | dated records and meter calibration |
| `cp_harvest_records` | `fruit_harvest` | fresh fruit hand-off | harvest tickets | lot; date; fresh mass; moisture; field; losses; machinery fuel | weighbridge and harvest logs | kg; %; L | each lot | full harvest | each source field | sum measured lots; retain losses | tare and scale checks |
| `cp_drying_lot` | `primary_drying` | drying mass and energy | drying run log | lot; start/end; input/output mass and moisture; route; fuel; electricity; rejects; rework | calibrated scale, moisture test and meter | kg; %; kWh; MJ | each run or continuous period | all declared drying | each dryer | dry-matter and water balance by lot | calibration, moisture method and run linkage |
| `cp_grade_records` | `first_cleaning_grading` | accepted and off-grade outputs | grade log | lot; accepted grade mass; moisture; downgraded; rejects; stems; destination; energy | calibrated scale and grade records | kg; %; kWh | each lot | all gate output | each sorter | sum accepted grades only | grade specification and reconciliation |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | drying lot | incoming dry matter = incoming mass × (1 − incoming wet-basis moisture); reconcile with all dried solids and losses | masses and moisture tests | dry-matter balance | `mass-balance-identity` |
| `calc_water_removed` | drying lot | incoming water − water retained in all dry outputs − separately measured liquid exits, adjusted for added water | masses and moisture tests | water removed, kg | `mass-balance-identity` |
| `calc_normalize` | complete package | divide attributed input/emission by net accepted dried kg at the declared gate | attributed totals and accepted mass | inventory per kg | `mass-balance-identity` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all lots | Botanical identity, whole raw form and route must be traceable to each accepted output. | source lot and grade records |
| `dq_moisture` | drying | Incoming and outgoing moisture must be measured or documented with method and sampling plan; no universal cross-genus target is assumed. | moisture test and specification |
| `dq_balance` | harvest through gate | Reconcile accepted, downgraded, rejected and lost mass by lot; explain differences. | signed mass-balance sheet |

## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | product identity | Reject green fresh fruit, Piper pepper, and crushed/ground or otherwise processed dried spice as this reference product. | `un-cpc-3-exp-2025` |
| `validation_route` | process map | Verify Capsicum/Pimenta route, cultivation inclusion, sun/solar or mechanical stages, and batch or continuous attribution against current records. | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_moisture` | drying | Check measured incoming/outgoing moisture and applicable product specification separately by species and market; do not apply one generic threshold. | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_balance` | drying and sorting | Reconcile dry matter and water; accepted output must exclude rejected, downgraded and reworked-in-process mass until final exit. | `mass-balance-identity` |
| `validation_identity_gap` | reference flow | A dataset may not claim a fixed Tiangong reference flow while its UUID remains unresolved. | `un-cpc-3-exp-2025` |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | Foreground raw dried fruit production package |
| downstream_use | `secondary_dataset`; `background_dataset` after route and identity review |
| allowed_use | Whole raw dried Capsicum or Pimenta fruit as an input to declared downstream processing or sale |
| excluded_use | Fresh green pepper, Piper pepper, powdered spice, blends or extract production as the same output |
| required_metadata | species; cultivation source; site; season; drying route; batch mode; moisture; grade; gate; reference-flow UUID when resolved |
| required_quality_disclosure | measurement coverage; moisture method; missing flows; provisional ranges; dry-matter balance; allocation and reject treatment |
| update_trigger | change in botanical route, drying technology, target moisture/grade, gate, allocation or representative records |
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-exp-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, <https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> | CPC 01652 raw dried fruit boundary and exclusions |
| `codex-cxs-353-2022` | standard | Codex Alimentarius, CXS 353-2022, Standard for Dried or Dehydrated Chilli Pepper and Paprika, <https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | Capsicum dried-product styles and route-specific quality specification |
| `codex-cxs-358-2024` | standard | Codex Alimentarius, CXS 358-2024, Standard for Spices Derived from Dried or Dehydrated Fruits and Berries, <https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | Pimenta dioica allspice identity and dried-product specification |
| `unece-ddp-24-2013` | standard | UNECE, DDP-24 Whole Dried Chilli Peppers, <https://unece.org/trade/documents/2013/02/standards/chilli-peppers-whole-dried> | Whole dried Capsicum form and drying route |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html> | Managed-soil emission accounting inputs |
| `mass-balance-identity` | method_factor | Conservation of dry matter and water across measured harvest, drying, and sorting stages | Drying mass balance and reconciliation |
