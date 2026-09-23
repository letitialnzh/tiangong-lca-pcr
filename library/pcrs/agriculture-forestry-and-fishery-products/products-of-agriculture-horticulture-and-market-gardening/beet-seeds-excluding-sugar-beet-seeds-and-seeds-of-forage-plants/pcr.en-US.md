---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Beet seeds (excluding sugar beet seeds) and seeds of forage plants

## 1. Scope and Applicability

This PCR covers commercial production of sowing-quality beet seed other than sugar-beet seed and seed of declared forage-plant species. The foreground boundary starts with parent seed and field inputs and ends with cleaned, viable seed released at the seed producer or processor hand-off. A dataset represents one declared species, cultivar, multiplication class, route and lot; it does not average physically unlike species without transparent weighting.

Excluded are sugar-beet seed, grain or forage biomass sold as feed, vegetative planting material, flower seed outside this CPC category, and seed multiplication or processing stages not represented by foreground records. Coatings or chemical treatments are included only when applied before the declared hand-off and recorded for the lot.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants |
| classification_refs | CPC 3.0 `01940` (exact) |
| covered_products | Seed-grade non-sugar beet seed and seed of forage grasses, legumes and other declared forage plants |
| excluded_products | Sugar-beet seed; feed grain; harvested forage biomass; vegetative propagules; unverified species aggregation |
| representative_product | One declared cleaned, viable planting-seed lot |
| production_route | Parent-seed establishment → managed field multiplication → harvest/threshing → drying/conditioning → cleaning/grading → packaging/storage hand-off |
| market_state | Cleaned seed released for sowing with species/cultivar, purity, germination or viability, moisture, treatment and certification state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cleaned, viable beet or forage planting seed at the producer or processor hand-off |
| How much | 1 kg |
| How well | Declared species/cultivar, physical purity, germination or viability, moisture, treatment, certification class and accepted-lot status |
| How long or cycle | One traceable multiplication and processing lot; perennial establishment burdens allocated across the declared productive period when relevant |
| reference_flow_link | `accepted_planting_seed` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Beet seeds excluding sugar beet seeds and seeds of forage plants; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar; seed class; purity; germination or viability; moisture; treatment/coating; certification; production geography; hand-off gate |

A category-wide fixed UUID remains unresolved. The available *Lupinus albus* row is species-specific and must not represent this composite category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference and intermediate seed flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass on the declared moisture basis; report gross packaging separately. |
| `quality_basis` | accepted seed | lot test results | declared test units | Purity, germination/viability and moisture shall refer to the same released lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Parent seed, field state and any perennial stand age are declared |
| starting_condition_role | Foreground starting condition for the multiplication cycle |
| product_classification_scope | One declared member product within CPC 3.0 01940 |
| recursive_input_rule | Parent seed from the same category is an input exchange from a separately identified upstream seed dataset; do not recurse into the current lot |
| upstream_dataset_requirement | Species/cultivar, seed class, geography, gate and quality state must match the parent-seed input |
| disclosure | Declare annual or perennial route, field and processor locations, crop cycle, lot links, rejected destinations and included treatment/storage |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all datasets | Include only evidenced field multiplication, harvest, threshing, conditioning, grading, packaging and storage operations before the declared hand-off. | `fao-seed-production-1993`; `fao-ilri-forage-seed-1996` |
| `boundary_parent_seed` | parent seed | Keep the same-category parent seed as a linked upstream input and prevent recursion into the current lot. |  |
| `boundary_rejects` | off-spec material | Exclude rejected or downgraded material from accepted output and disclose every destination. | `fao-ilri-forage-seed-1996` |
| `boundary_treatment` | seed treatment | Include treatment or coating only when performed before hand-off and supported by lot records. |  |
| `boundary_period` | perennial forage seed stands | Allocate establishment and termination burdens across the documented productive seed-harvest period without double counting. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_multiplication` | Seed-crop establishment and field multiplication | `required` | Production of a declared beet or forage seed crop through one crop cycle | managed biological production | 1 kg harvestable seed crop |
| `harvest_thresh` | Harvest and threshing | `required` | Separation of seed-bearing material and threshing from the field crop | harvest and capture | 1 kg raw threshed seed |
| `dry_condition` | Drying and primary conditioning | `required` | Moisture stabilization plus winnowing or preliminary cleaning before grading | preservation and primary conditioning | 1 kg conditioned seed |
| `grade_pack` | Cleaning, grading, packaging and hand-off | `required` | Final impurity removal, lot grading, approved treatment when used, packaging, storage and seed-grade hand-off | material treatment and grading | 1 kg accepted planting seed |

### Process: Seed-crop establishment and field multiplication (`field_multiplication`)

#### Inputs

##### Product flows

###### Parent seed for multiplication (`parent_seed`)

Declared species/cultivar parent, basic or certified seed introduced to the multiplication field.

- Selected flow: Beet or forage parent planting seed
- Flow property / unit: Mass / kg
- Amount rule: measured mass placed in the field
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per crop cycle producing the reported harvestable seed
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parent_seed`
- Sources: `fao-seed-production-1993`

- Range: Parent seed for multiplication QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.30
  - Unit: kg
  - Basis: per kg harvestable seed crop
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Consolidated fertilizer and nutrient supply (`nutrient_supply`)

All mineral fertilizers, organic fertilizers and nutrient amendments crossing the field boundary are consolidated in this one card.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: foreground mass by actual nutrient product, retaining nutrient composition
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg harvestable seed crop
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_inputs`

- Range: Consolidated fertilizer and nutrient supply QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg product
  - Basis: per kg harvestable seed crop
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Irrigation water supply (`irrigation_water`)

Irrigation water supplied to the seed crop is recorded when irrigation occurs.

- Selected flow: Irrigation water
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated irrigation water delivered
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg harvestable seed crop
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_irrigation`

- Range: Irrigation water supply QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3
  - Basis: per kg harvestable seed crop
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Field energy carriers and electricity (`field_energy`)

Energy used for field operations, pumping and crop management is expanded from actual foreground records.

- Selected flow: Energy supply
- Flow property / unit: Mass / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: sum of carrier energy and metered electricity after unit conversion
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg harvestable seed crop
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Field energy carriers and electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ
  - Basis: per kg harvestable seed crop
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None declared as a separate mandatory card.

##### Elementary flows

None declared as a separate mandatory card.

#### Outputs

##### Product flows

###### Harvestable beet or forage seed crop (`harvestable_seed_crop`)

Mature seed-bearing crop leaving managed field multiplication for harvest and threshing.

- Selected flow: Harvestable beet or forage seed crop
- Flow property / unit: Mass / kg
- Amount rule: measured harvested wet mass attributable to the seed lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per crop cycle and field lot
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_mass`
- Sources: `fao-seed-production-1993`

- Range: Harvestable beet or forage seed crop QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg
  - Basis: per kg raw threshed seed
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None declared as a separate mandatory card.

##### Elementary flows

None declared as a separate mandatory card.

### Process: Harvest and threshing (`harvest_thresh`)

#### Inputs

##### Product flows

###### Harvestable seed crop received (`harvestable_crop_input`)

The declared field lot enters harvesting and threshing without substitution by forage biomass produced for feed.

- Selected flow: Harvestable beet or forage seed crop
- Flow property / unit: Mass / kg
- Amount rule: linked mass from field multiplication output
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg raw threshed seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_mass`

- Range: Harvestable seed crop received QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg
  - Basis: per kg raw threshed seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Harvest and threshing energy (`harvest_energy`)

Fuel or electricity used by harvest and threshing equipment is resolved from the actual route.

- Selected flow: Energy supply
- Flow property / unit: Mass / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: converted energy use from equipment logs and invoices
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg raw threshed seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Harvest and threshing energy QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 15
  - Unit: MJ
  - Basis: per kg raw threshed seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None declared as a separate mandatory card.

##### Elementary flows

None declared as a separate mandatory card.

#### Outputs

##### Product flows

###### Raw threshed seed (`raw_threshed_seed`)

Seed separated by threshing before drying, winnowing and final cleaning.

- Selected flow: Raw threshed beet or forage seed
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to conditioning
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per harvest lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot_mass_quality`
- Sources: `fao-ilri-forage-seed-1996`

- Range: Raw threshed seed QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Harvest and threshing residues (`harvest_residue`)

Chaff, straw and unrecovered material leaving the seed-product route are reported by destination.

- Selected flow: Harvest and threshing residue
- Flow property / unit: Mass / kg
- Amount rule: mass balance difference supported by measured or estimated destination records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg raw threshed seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_route`

- Range: Harvest and threshing residues QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg raw threshed seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None declared as a separate mandatory card.

### Process: Drying and primary conditioning (`dry_condition`)

#### Inputs

##### Product flows

###### Raw threshed seed received (`raw_seed_input`)

The traceable raw seed lot enters moisture stabilization and preliminary conditioning.

- Selected flow: Raw threshed beet or forage seed
- Flow property / unit: Mass / kg
- Amount rule: linked input mass from threshing
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per conditioning batch
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot_mass_quality`

- Range: Raw threshed seed received QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Drying and conditioning energy (`conditioning_energy`)

Electricity, heat or fuel used for drying, aeration, winnowing and preliminary cleaning is expanded from records.

- Selected flow: Energy supply
- Flow property / unit: Mass / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: converted energy use assigned to the batch
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg conditioned seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Drying and conditioning energy QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 25
  - Unit: MJ
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None declared as a separate mandatory card.

##### Elementary flows

None declared as a separate mandatory card.

#### Outputs

##### Product flows

###### Conditioned seed before final grading (`conditioned_seed`)

Moisture-stable, preliminarily cleaned seed transferred to final cleaning and grading.

- Selected flow: Conditioned beet or forage seed
- Flow property / unit: Mass / kg
- Amount rule: measured batch output at declared moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per conditioning batch
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot_mass_quality`
- Sources: `fao-ilri-forage-seed-1996`

- Range: Conditioned seed before final grading QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.3
  - Unit: kg
  - Basis: per kg accepted planting seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None declared as a separate mandatory card.

##### Elementary flows

None declared as a separate mandatory card.

### Process: Cleaning, grading, packaging and hand-off (`grade_pack`)

#### Inputs

##### Product flows

###### Conditioned seed received (`conditioned_seed_input`)

The conditioned lot enters final cleaning, separation, grading and seed-quality release.

- Selected flow: Conditioned beet or forage seed
- Flow property / unit: Mass / kg
- Amount rule: linked mass from conditioning output
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per grading lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot_mass_quality`

- Range: Conditioned seed received QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.4
  - Unit: kg
  - Basis: per kg accepted planting seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Cleaning, grading and storage energy (`grading_energy`)

Energy used by cleaners, graders, treatment equipment, packaging and controlled storage is expanded from actual records.

- Selected flow: Energy supply
- Flow property / unit: Mass / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: converted batch energy assigned to accepted and rejected outputs
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg accepted planting seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Cleaning, grading and storage energy QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 20
  - Unit: MJ
  - Basis: per kg accepted planting seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Seed packaging (`seed_packaging`)

Bags or other flexible packages used to protect the released seed lot are selected from the actual packaging record.

- Selected flow: Flexible packaging
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: measured packaging mass consumed
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg accepted planting seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

- Range: Seed packaging QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg
  - Basis: per kg accepted planting seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None declared as a separate mandatory card.

##### Elementary flows

None declared as a separate mandatory card.

#### Outputs

##### Product flows

###### Accepted beet or forage planting seed (`accepted_planting_seed`)

Cleaned viable seed released for sowing at the processor or producer hand-off; species-specific rows must not stand in for the whole category.

- Selected flow: Beet seeds excluding sugar beet seeds and seeds of forage plants
- Flow property / unit: Mass / kg
- Amount rule: measured net released mass
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per released seed lot
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release_tests`

- Range: Accepted beet or forage planting seed QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `collected_record`

##### Waste flows

###### Seed-cleaning rejects (`rejected_seed_material`)

Off-spec seed, screenings and foreign matter that leave as waste are excluded from accepted seed and reported by reuse, recovery or disposal destination. A saleable downgraded product is recorded separately as an intended product in the concrete foreground dataset.

- Selected flow: Seed cleaning rejects `6bfe90ae-a960-45dd-b1fa-89581c562763`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: measured reject mass by destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg accepted planting seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reject_route`

- Range: Rejected or downgraded seed material QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.60
  - Unit: kg
  - Basis: per kg accepted planting seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None declared as a separate mandatory card.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance` | each process | Reconcile input, intended output, moisture change, residues and rejects on the declared mass and moisture basis. |  |
| `allocation_rejects` | cleaning and grading | Do not count rejected lots or screenings as accepted seed; record the destination before applying any avoided-product treatment. | `fao-ilri-forage-seed-1996` |
| `allocation_coproduct` | saleable secondary outputs | Prefer subdivision or direct physical attribution; when allocation remains necessary, disclose the outputs, prices, period, formula and sensitivity. |  |
| `allocation_period` | perennial production | Annualize establishment and termination over documented productive seed yield, retaining year-specific yield and loss records. |  |
| `allocation_batches` | shared runs and storage | Assign cleaning, changeover, testing and storage burdens using measured run time, mass throughput or another documented causal driver; do not count them twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_seed` | `field_multiplication` | `parent seed` | purchase and sowing record | species, cultivar, class, supplier, mass, field, date | invoice and calibrated scale | kg | each sowing event | complete crop cycle | each field lot | sum accepted parent seed by field lot | invoice, lot label, scale check |
| `cp_field_inputs` | `field_multiplication` | `nutrients and amendments` | application log | product, nutrient composition, mass, date, field | invoice plus application record | kg product | each application | complete crop cycle | each field lot | sum by actual product and retain composition | invoice and application log |
| `cp_irrigation` | `field_multiplication` | `irrigation water` | meter or pumping record | volume, source, field, date, runtime | meter preferred; pump calculation documented | m3 | each event | complete crop cycle | each field lot | sum delivered water | meter calibration or pump specification |
| `cp_energy` | `all processes` | `energy` | fuel, meter and equipment log | carrier, quantity, unit, run, process, lot | invoice, meter and equipment log | MJ or kWh | each run or reporting interval | complete lot route | each field and facility | convert carriers and allocate causally to lot | invoice, meter reading, run log |
| `cp_harvest_mass` | `field_multiplication; harvest_thresh` | `crop and raw seed mass` | harvest ticket | field, lot, date, gross mass, tare, moisture | calibrated scale | kg | each load | complete harvest | each field lot | net mass by linked lot | weigh ticket and scale check |
| `cp_lot_mass_quality` | `harvest_thresh; dry_condition; grade_pack` | `intermediate seed mass and moisture` | batch record | lot, input mass, output mass, moisture, timestamp | calibrated scale and moisture test | kg; % | each batch | complete processing route | each lot and process | retain stage-specific mass; no cross-lot substitution | batch sheet, calibration, sample id |
| `cp_packaging` | `grade_pack` | `packaging` | packaging issue record | package type, net package mass, count, lot | stock issue plus weighing | kg | each lot | complete released lot | each packaging line and lot | sum packaging consumed net of documented returns | stock record and package specification |
| `cp_release_tests` | `grade_pack` | `accepted seed` | release and laboratory record | species, cultivar, class, purity, germination or viability, moisture, treatment, certification, net mass | lot sampling and recognized seed test method | kg; % | each released lot | release date | each processing lot | accept only mass covered by release decision | certificate, laboratory result, sample chain |
| `cp_residue_route` | `harvest_thresh` | `residues` | destination record | type, mass, destination, date, lot | scale or documented mass balance | kg | each removal | complete harvest lot | each field/facility | sum by destination | ticket, receiver record or mass balance |
| `cp_reject_route` | `grade_pack` | `rejects and downgraded material` | sorting and destination record | reason, grade, mass, destination, lot | scale and dispatch record | kg | each lot | complete grading lot | each line and lot | sum by reason and destination | grading report and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | amount per reference kg = lot amount / net accepted seed mass | lot amount; accepted net mass | normalized amount per kg |  |
| `calc_water` | irrigation | delivered water = metered volume, or pump rate × verified runtime when no meter exists | meter or pump rate and runtime | m3 delivered water |  |
| `calc_energy` | energy inputs | convert each recorded carrier to declared energy unit, then allocate by causal lot driver | carrier quantity; conversion; lot driver | MJ or kWh per kg |  |
| `calc_loss` | each process | loss or residue = opening input + additions − intended output − closing stock, reconciled for moisture | mass and moisture records | loss/residue mass |  |
| `calc_period` | perennial field | annualized establishment burden = total establishment input × current-year seed yield / documented productive-period seed yield | establishment inputs; annual yields | current-year attributed burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Species, cultivar, seed class and CPC scope must be explicit; a species-specific UUID cannot represent another species or the complete category. | lot label and identity review |
| `dq_mass_balance` | each process | Mass balance shall reconcile within a disclosed tolerance and moisture basis. | weighing and moisture records |
| `dq_completeness` | foreground route | Collect at least 95% of recorded operating days and all released/rejected lots; disclose estimated gaps. | coverage calculation |
| `dq_temporal` | crop and processing cycle | Use data covering one complete multiplication and processing cycle; perennial stands retain age and yearly yield. | field and batch dates |
| `dq_flow_binding` | all cards | Resolve every emitted Flow Set exchange or uncovered identity to one verified concrete UUID before final process publication. | binding review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject sugar-beet seed, feed biomass, vegetative propagules and lots without a declared species or cultivar. |  |
| `validate_reference` | reference flow | Require exactly 1 kg net accepted seed and all required quality qualifiers; keep category UUID blank until a category-compatible row is verified. |  |
| `validate_lot_link` | all processes | Require unbroken field, harvest, conditioning and release lot links. |  |
| `validate_rejects` | grade_pack | Accepted output plus destination-specific rejects shall reconcile with conditioned input and documented stock change. |  |
| `validate_period` | perennial route | Require productive-period evidence and prevent establishment burdens from being charged more than once. |  |
| `validate_coproduct` | secondary outputs | Require explicit intended-output status and attribution method before credit or allocation. |  |
| `validate_nutrients` | field_multiplication | Permit at most one nutrient Product-input card in the process; it binds only flow-set.agricultural-nutrient-supply version 0.3.0 without a group. |  |
| `validate_ranges` | all flow cards | Require one range with physical bounds, unit, basis, basis kind and evidence kind; replace reasoned estimates when reviewed route evidence is available. |  |
| `validate_binding` | all flows | Accept fixed UUIDs only with detail-read evidence and parameterized bindings only when permitted by the cited Flow Set. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system data package and process projection |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Declared species/cultivar, route, geography, seed class and hand-off compatible with the study |
| excluded_use | Proxy for sugar-beet seed, feed biomass, another seed species, or an unqualified category average |
| required_metadata | species/cultivar; annual/perennial route; parent-seed class; field and processor geography; crop year; purity; germination/viability; moisture; treatment; certification; lot and gate |
| required_quality_disclosure | foreground coverage; estimated gaps; range exceedances; unresolved flow identities; allocation and reject destinations |
| update_trigger | new reviewed species-route evidence, verified category flow UUID, changed Flow Set, seed-quality rule, treatment route or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-production-1993` | `official_guidance` | FAO, Quality Declared Seed / seed production guidance, AGRIS record https://agris.fao.org/search/zh/records/672364348aa2fad1ce470e8a | field multiplication, harvesting, conditioning and quality-control route |
| `fao-ilri-forage-seed-1996` | `handbook` | FAO/ILRI, *Forage Seed Production*, https://www.fao.org/4/x3996e/x3996e41.htm | harvest, threshing, drying, cleaning, storage, rejects and lot-quality controls |
