---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cabbages
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Cabbages

## 1. Scope and Applicability

This PCR covers open-field or comparable soil-based production of fresh headed cabbages, from the declared planting material at the farm boundary through managed cultivation, harvest, trimming, field sorting, and hand-off of saleable fresh cabbage at the farm gate. Purchased planting material, fertilizers, crop-protection products, water, and energy enter as upstream product inputs. Nursery production before purchased planting material, protected cultivation with materially different infrastructure or climate control, off-farm packing, cold storage, distribution, processing, retail, cooking, and end-of-life are outside the default boundary unless explicitly added as separate processes.

The category includes headed cabbages represented by CPC 3.0 class 01212. It does not cover cauliflower, broccoli, kohlrabi, leafy greens classified outside 01212, fermented or otherwise processed cabbage products, or seed production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cabbages |
| classification_refs | CPC 3.0: 01212 Cabbages |
| covered_products | Fresh headed cabbages harvested for food markets, including green, red, white, and savoy market forms when classified as CPC 01212 |
| excluded_products | Cauliflower; broccoli; kohlrabi; non-headed leafy vegetables; cabbage seed; fermented, preserved, frozen, dried, or otherwise processed cabbage |
| representative_product | Fresh marketable cabbage head |
| production_route | Soil-based managed cultivation followed by harvest, trimming, and field sorting |
| market_state | Fresh, intact or minimally trimmed cabbage at farm gate; packaging and cooling state declared separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh marketable cabbage at the declared farm-gate hand-off |
| How much | 1 kg |
| How well | Saleable heads meeting the producer's declared variety, maturity, trimming, defect, and packaging specification |
| How long or cycle | One declared cabbage crop cycle, normalized to delivered saleable mass |
| reference_flow_link | `fresh_cabbage_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cabbage `aed02ce8-12e2-4410-be27-38b4abc01fc4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cabbage type or variety; production geography; cultivation system; harvest maturity; trimming state; moisture basis; packaging state; farm-gate hand-off |
| Binding | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Fresh cabbage reference product and all cabbage product or residue mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report wet mass at the declared farm-gate state; disclose any dry-matter conversion and measured moisture basis. |
| `nutrient_mass_basis` | Nitrogen, phosphorus, and potassium nutrient inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg nutrient | Convert formulated fertilizer quantities to kg N, kg P2O5, and kg K2O using documented composition; retain formulated-product quantities separately. |
| `water_volume_basis` | Irrigation water supplied to cultivation | Volume | m3 | Record water delivered to the field and distinguish supplied water from natural precipitation. |
| `land_occupation_basis` | Occupied agricultural land | Area-time | m2*a | Calculate occupied area multiplied by occupation duration and normalize it to the declared crop cycle. |
| `nitrous_oxide_basis` | Managed-soil nitrous oxide emission | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg N2O-N | Calculate and report N2O on an N-mass basis; provide a transparent conversion when a downstream dataset requires kg N2O. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or internally supplied cabbage seed or transplant ready for establishment in the declared field |
| starting_condition_role | Biological planting input entering managed cultivation |
| product_classification_scope | Fresh headed cabbage products classified under CPC 3.0 01212 |
| recursive_input_rule | Any cabbage product re-entering the system as planting or market input is recorded at its actual hand-off state and linked to a separate upstream dataset rather than recursively reproducing this PCR boundary. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, energy carriers, packaging, and any contracted service crossing the boundary. |
| disclosure | Declare geography, season, field area, crop duration, cabbage type or variety, planting route, irrigation regime, nutrient regime, harvest maturity, trimming and sorting practice, residue destinations, and farm-gate hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | Default cabbage product system | Include establishment, field management, irrigation, nutrient and crop-protection application, direct managed-soil emissions, harvest, trimming, field sorting, and internal movement up to the declared farm-gate hand-off. | `fao-postharvest-loss-manual`; `ipcc-2019-managed-soils` |
| `boundary_upstream_inputs` | Purchased inputs and utilities | Represent production of purchased planting material, fertilizers, crop-protection products, energy, and supplied water through linked upstream datasets; do not duplicate their production inside cultivation. | `codex-fresh-produce-hygiene` |
| `boundary_post_farm_gate` | Cooling, packing, storage, and distribution after farm-gate hand-off | Exclude by default and add as explicit downstream processes when the declared product hand-off includes them. | `fao-horticultural-marketing` |
| `boundary_residue_fate` | Outer leaves, rejected heads, and other crop residues | Record each physically distinct residue and its destination; include field-return effects in cultivation and link off-site treatment or use to a separate downstream dataset. | `ipcc-2019-managed-soils`; `fao-postharvest-loss-manual` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | Managed cabbage field cultivation | required | Always included | Establish and manage the cabbage crop to harvestable maturity | One declared field and crop cycle |
| `harvest_field_preparation` | Harvest, trimming, and field sorting | required | Always included | Remove mature heads, trim and sort them, and establish the farm-gate product state | kg fresh cabbage entering harvest and field preparation |

### Process: Managed cabbage field cultivation (`field_cultivation`)

#### Inputs

##### Product flows

###### Cabbage planting material (`cabbage_planting_material`)

Cabbage seed or transplant material crosses the cultivation boundary when the crop is established. The foreground record must identify the actual physical planting product rather than treating all seed and transplants as interchangeable.

- Selected flow: Cabbage seed or transplant planting material
- Flow property / unit: Number of items / item, or Mass / kg when seed is recorded by mass
- Amount rule: Record purchased and internally supplied planting material by type and convert to established plants or seed mass without combining unlike units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources:
- Range: Provisional planting-density screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10000
  - Upper: 120000
  - Unit: established plants/ha
  - Basis: broad screening interval per planted hectare; replace with variety- and system-specific foreground evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`field_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources:
- Range: Provisional nitrogen-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg N/ha
  - Basis: broad screening interval per planted hectare; replace with local nutrient-plan evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg P2O5/ha
  - Basis: broad screening interval per planted hectare; replace with local nutrient-plan evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg K2O/ha
  - Basis: broad screening interval per planted hectare; replace with local nutrient-plan evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Supplied irrigation water is recorded at the field delivery point; natural precipitation is not recorded as this product input.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record metered or calculated water delivered to the field, net of documented recirculation returned within the same system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-irrigation-handbook`
- Range: Provisional irrigation-volume screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha
  - Basis: broad screening interval per planted hectare and crop cycle; zero is permitted for rainfed production
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation mechanical energy (`field_operation_energy`)

Energy delivered for tillage, planting, irrigation pumping, nutrient application, crop protection, and field movement is recorded by actual carrier or provider before final dataset publication.

- Selected flow: Mechanical-power energy supply for field operations
- Flow property / unit: Energy / MJ
- Amount rule: Sum carrier-specific energy used by field operations and retain the carrier, equipment, and conversion basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy`
- Sources:
- Range: Provisional field-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha
  - Basis: broad first-pass interval for direct field-operation energy; replace with carrier-specific records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection active ingredients (`crop_protection_inputs`)

Crop-protection inputs cross the boundary as the actual herbicide, insecticide, fungicide, or other active ingredients applied. Foreground records must retain each physical identity and formulated product separately.

- Selected flow: Crop-protection active ingredient, specified by foreground record
- Flow property / unit: Mass / kg active ingredient
- Amount rule: Calculate each active ingredient from formulated-product quantity and composition; do not aggregate unlike substances into one final exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `codex-fresh-produce-hygiene`
- Range: Provisional total-active-ingredient screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg active ingredient/ha
  - Basis: broad screening total across all applications; final exchanges remain substance-specific
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Agricultural land occupation (`agricultural_land_occupation`)

The occupied field area crosses the environmental resource boundary for the duration of the cabbage crop cycle.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Calculate occupied area multiplied by the fraction of a year between field establishment and harvest completion.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_cycle`
- Sources:

#### Outputs

##### Product flows

###### Mature cabbage crop in the field (`mature_cabbage_crop_handoff`)

This internal product hand-off represents physically mature cabbage heads before cutting, trimming, and field sorting. Its mass is reconciled with saleable heads and physically distinct residue streams.

- Selected flow: Mature cabbage crop in field before harvest
- Flow property / unit: Mass / kg wet crop
- Amount rule: Determine harvestable standing crop mass from harvest records and mass reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_output`
- Sources: `fao-horticultural-marketing`
- Range: Provisional mature-crop yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5000
  - Upper: 150000
  - Unit: kg wet crop/ha
  - Basis: broad screening interval before harvest trimming and sorting
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Nitrous oxide from managed soil (`managed_soil_n2o`)

Direct and applicable indirect managed-soil nitrous oxide is calculated from collected nitrogen inputs, crop-residue nitrogen, and the selected IPCC or justified higher-tier method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O-N
- Amount rule: Calculate direct and applicable indirect N2O-N from collected nitrogen pathways without double counting residue nitrogen.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional managed-soil N2O-N screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg N2O-N/ha
  - Basis: broad first-pass interval per crop cycle; replace with calculated method output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, trimming, and field sorting (`harvest_field_preparation`)

#### Inputs

##### Product flows

###### Mature cabbage crop received from field cultivation (`mature_cabbage_crop_input`)

The mature standing crop hand-off enters harvest and field preparation with the same physical state and mass basis used by the cultivation output.

- Selected flow: Mature cabbage crop in field before harvest
- Flow property / unit: Mass / kg wet crop
- Amount rule: Equal the corresponding `mature_cabbage_crop_handoff` quantity for the same field and crop cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_output`
- Sources: `fao-horticultural-marketing`
- Range: Linked mature-crop hand-off QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5000
  - Upper: 150000
  - Unit: kg wet crop/ha
  - Basis: same mature-crop mass interval as the corresponding cultivation output before harvest trimming and sorting
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh marketable cabbage (`fresh_cabbage_output`)

Saleable trimmed cabbage heads leave the foreground system at the declared farm-gate hand-off. The flow identity is fixed, while variety, maturity, trimming, moisture, packaging, and location qualifiers remain foreground facts.

- Selected flow: Cabbage `aed02ce8-12e2-4410-be27-38b4abc01fc4`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Weigh or reconcile saleable cabbage mass at the declared farm-gate hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle and per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_outputs`
- Sources: `fao-horticultural-marketing`
- Range: Provisional saleable-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5000
  - Upper: 120000
  - Unit: kg fresh cabbage/ha
  - Basis: broad screening interval after trimming and field sorting
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Outer cabbage leaves returned to field (`outer_leaves_field_return`)

Outer leaves removed during harvest and trimming are recorded separately when they remain on or are returned to the field; they are not combined with rejected whole heads sent elsewhere.

- Selected flow: Fresh outer cabbage leaves returned to field
- Flow property / unit: Mass / kg wet residue
- Amount rule: Weigh, estimate from sampled mass fractions, or reconcile wet outer-leaf mass returned to the field.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_outputs`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional field-returned outer-leaf estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80000
  - Unit: kg wet leaves/ha
  - Basis: broad screening interval for leaves removed and returned to the field
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected cabbage heads sent off-site (`rejected_heads_offsite`)

Whole or substantially intact heads rejected during field sorting are recorded separately by actual destination, because off-site animal feed, recovery, composting, treatment, and disposal are different hand-offs.

- Selected flow: Rejected fresh cabbage heads sent off-site, destination specified
- Flow property / unit: Mass / kg wet heads
- Amount rule: Weigh or reconcile rejected-head mass and record each off-site destination separately in the foreground package.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha planted cabbage crop per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_outputs`
- Sources: `fao-postharvest-loss-manual`
- Range: Provisional rejected-head screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg wet heads/ha
  - Basis: broad screening interval for rejected heads leaving the field system
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Cultivation and harvest processes | Use process subdivision and mass reconciliation before allocation; do not allocate between an internal standing-crop hand-off and the same crop after harvest. | `fao-horticultural-marketing` |
| `allocation_residue_classification` | Outer leaves and rejected heads | Classify field-returned leaves as residues and off-site rejected heads by actual destination; do not treat either as an intended co-product unless evidence shows a deliberate product function and market hand-off. | `ipcc-2019-managed-soils`; `fao-postharvest-loss-manual` |
| `allocation_intended_coproduct` | Any additional revenue-bearing intended output | If subdivision cannot isolate an additional intended output, apply economic allocation using documented farm-gate revenues for the same reporting period and disclose prices, currency, period, and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_inputs` | `field_cultivation` | planting material, nutrient products, irrigation water, crop-protection products | purchase, application, meter, and field-operation records | product identity; lot; quantity; composition; active ingredient; application date; treated area; delivered water | Reconcile invoices, application logs, composition labels, irrigation meters, and field logs | item; kg product; kg nutrient; kg active ingredient; m3 | Each delivery and application | Complete crop cycle | Each field and crop cycle | Sum by physical identity and convert with documented composition; retain zero-use declarations | invoices; labels; calibration records; application logs; meter readings |
| `cp_field_energy` | `field_cultivation` | field-operation energy | fuel, electricity, and equipment-hour records | carrier identity; quantity; unit; equipment; operation; meter or invoice period | Reconcile carrier purchases and meters to equipment and field-operation logs | L; kg; kWh; MJ; h | Each operation or billing period | Complete crop cycle | Each field and equipment set | Convert each carrier to energy with documented factors and prevent double counting purchased energy and equipment estimates | invoices; meters; equipment logs; conversion-factor source |
| `cp_crop_area_cycle` | `field_cultivation` | agricultural land occupation | cadastral, GIS, and crop-calendar records | planted area; establishment date; harvest-completion date; shared-area fraction | Measure or verify field area and crop occupation dates | ha; date | Once per field and crop cycle | Establishment through harvest completion | Each field | Area multiplied by occupation duration; allocate shared field area by documented occupied fraction | GIS or cadastral record; crop calendar |
| `cp_crop_output` | `field_cultivation` | mature cabbage crop hand-off | harvest and sample-mass records | harvested area; head count; sampled head mass; gross harvested mass; field identifier | Weigh harvest lots or calculate from stratified head-count and mass samples | kg wet crop | Each harvest event | Full harvest window | Each field and crop cycle | Sum gross mature crop and reconcile with saleable and residue outputs | calibrated scale records; sampling plan; harvest log |
| `cp_soil_emissions` | `field_cultivation` | managed-soil nitrous oxide | nutrient, residue, soil-amendment, volatilization, leaching, and field-management records | N inputs by pathway; residue dry matter and N content; removal fraction; emission factors; conversion basis | Apply the declared IPCC tier or justified higher-tier model to collected field records | kg N; kg dry matter; fraction; kg N2O-N | Each application and annual or crop-cycle calculation | Complete crop cycle with declared annualization | Each field and emission stratum | Calculate pathway emissions separately, sum without double counting, and normalize to crop output | source records; factor version; calculation workbook; independent formula check |
| `cp_harvest_outputs` | `harvest_field_preparation` | saleable heads, outer leaves, rejected heads | scale, lot, grading, and destination records | incoming crop mass; saleable mass; leaf residue mass; rejected-head mass; destination; variety; maturity; trimming and packaging state | Weigh each output where practicable and use documented representative sampling for unweighed field residues | kg wet mass | Each harvest or dispatch lot | Full harvest and field-dispatch window | Each field, lot, and destination | Sum by output state and destination; reconcile all outputs to incoming mature crop within the declared tolerance | calibrated scale; sample sheets; grade records; dispatch records; mass-balance check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | Nutrient inputs | nutrient mass = formulated-product mass × declared nutrient mass fraction; retain N, P2O5, and K2O separately | product mass; composition | kg N; kg P2O5; kg K2O |  |
| `calc_field_energy` | Field-operation energy | carrier energy = measured carrier quantity × documented lower-heating-value or electricity conversion; sum only after retaining carrier identities | carrier quantity; conversion factor | MJ by carrier and total MJ |  |
| `calc_land_occupation` | Agricultural land occupation | occupied area-time = planted area × occupation days / 365.25 | planted area; establishment date; harvest-completion date | m2*a |  |
| `calc_mature_crop` | Mature cabbage crop hand-off | gross mature crop = measured gross harvest or sampled mean head mass × harvested head count | gross mass or head-count sample records | kg wet mature crop | `fao-horticultural-marketing` |
| `calc_harvest_mass_balance` | Harvest outputs | incoming mature crop = saleable cabbage + outer leaves + rejected heads + documented uncollected loss, within declared uncertainty | all harvest output masses; uncollected loss estimate | reconciled kg wet mass and closure ratio | `fao-postharvest-loss-manual` |
| `calc_managed_soil_n2o` | Managed-soil nitrous oxide | Apply the declared IPCC direct and applicable indirect N2O equations to collected N inputs and residue pathways; prevent double counting of removed, burned, or field-returned residues. | N inputs; residue N; removal and burning fractions; leaching and volatilization parameters; selected factors | kg N2O-N per crop cycle | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | All inputs and outputs | Retain physical product or substance identity, supplier or source, state, and destination sufficient to resolve every final exchange to a concrete UUID. | invoices; labels; specifications; dispatch and destination records |
| `dq_temporal` | Cultivation and harvest inventory | Cover one complete representative crop cycle and disclose multi-season aggregation, crop failure, and partial harvests. | dated crop calendar; field and harvest logs |
| `dq_mass_balance` | Mature crop and harvest outputs | Reconcile saleable heads, outer leaves, rejected heads, and documented field loss to the mature crop input; investigate material closure gaps. | calibrated scale records; sampling records; reconciliation worksheet |
| `dq_nutrient_emissions` | Nutrient inputs and managed-soil emissions | Preserve nutrient composition, residue fate, calculation tier, factor version, and pathway separation so emissions are reproducible. | product labels; application logs; residue records; calculation workbook |
| `dq_water_energy` | Irrigation and field energy | Record meter coverage, estimation periods, allocation to the cabbage field, conversion factors, and any shared equipment or utility use. | meter records; invoices; equipment logs; allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Require the fixed cabbage UUID, mass property, mass unit group, kg reference unit, and all required foreground qualifiers. |  |
| `validation_process_completeness` | Process map and inventory | Require both declared processes and require every collected or calculated flow row to reference an existing collection protocol. |  |
| `validation_binding_specificity` | All flow bindings | Reject a broader Flow Set when a unique verified UUID or narrower justified group exists; require final process exchanges to resolve parameterized and unmapped rows to concrete UUIDs. |  |
| `validation_mass_balance` | Harvest, trimming, and sorting | Require reconciliation of incoming mature crop with saleable cabbage, outer leaves, rejected heads, and documented uncollected loss within a declared tolerance. | `fao-postharvest-loss-manual` |
| `validation_residue_destination` | Crop residues | Require separate identities and destinations for field-returned outer leaves and off-site rejected heads and prevent double counting in residue-N calculations. | `ipcc-2019-managed-soils` |
| `validation_n2o_reproducibility` | Managed-soil N2O | Require declared method tier, factor source and version, all nitrogen pathways, conversion basis, and reproducible calculation. | `ipcc-2019-managed-soils` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate cabbage production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and identity resolution |
| allowed_use | Product carbon footprints, comparative LCA, supply-chain modelling, and agricultural inventory studies consistent with the declared cabbage type, geography, production system, and farm-gate boundary |
| excluded_use | Protected or soilless cultivation without added route processes; processed cabbage products; retail or consumption modelling; geographies or systems materially inconsistent with the declared dataset |
| required_metadata | cabbage type or variety; geography; field area; season and crop duration; planting material; irrigation; nutrient and crop-protection regimes; harvest maturity; trimming, sorting and packaging state; residue destinations; allocation method; reference-flow qualifiers |
| required_quality_disclosure | foreground coverage; measured versus estimated shares; mass-balance closure; meter and scale quality; source and factor versionss; reasoned-estimate replacements; uncertainty and representativeness |
| update_trigger | Change in cultivation system, geography, input regime, yield or rejection pattern, residue destination, harvest or farm-gate state, allocation method, platform identity, or material source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-postharvest-loss-manual` | `official_guidance` | FAO, Prevention of post-harvest food losses: fruits, vegetables and root crops, https://www.fao.org/4/T0073E/T0073E01.htm | Post-harvest quality effects, sorting losses, residue separation, and mass-balance requirements |
| `fao-horticultural-marketing` | `official_guidance` | FAO, Horticultural marketing: a resource and training manual for extension officers, https://www.fao.org/4/a0185e/a0185e0c.htm | Cabbage harvest maturity, cutting and trimming, handling, sorting, and farm-gate product state |
| `fao-irrigation-handbook` | `handbook` | FAO, Technical handbook on pressurized irrigation techniques, https://www.fao.org/4/a1336e/a1336e.pdf | Cabbage crop-stage irrigation method context and separation of effective rainfall from irrigation supply |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O calculation and crop-residue nitrogen treatment |
| `codex-fresh-produce-hygiene` | `official_guidance` | Codex/FAO, Code of Hygienic Practice for the Primary Production, Harvesting and Packing of Fresh Fruits and Vegetables, https://www.fao.org/4/x8735e/x8735e0n.htm | Input, application, harvest, lot, water-quality, and packing record requirements |
