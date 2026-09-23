---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Flower seeds

## 1. Scope and Applicability

This PCR covers seed of flowering plants produced and released specifically for sowing. It follows one declared species, cultivar and lot from parent stock and managed multiplication through harvest, extraction, drying, cleaning, testing, optional treatment and packaging at the seed producer or conditioner hand-off.

It excludes cut flowers, bulbs and other vegetative propagules, edible or oilseed uses, unmanaged wild collection, and seed without a declared sowing use. A dataset shall not combine unlike species, cultivars, production routes, or treated and untreated states without transparent weighting.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds |
| classification_refs | CPC 3.0 `01963` (exact) |
| covered_products | Conditioned seed of declared flowering-plant species intended for sowing |
| excluded_products | Cut flowers; vegetative propagules; seed sold for food, feed or oil; unidentified mixtures; unmanaged wild collection |
| representative_product | One accepted lot of a declared flower species and cultivar |
| production_route | Parent stock → managed seed crop → harvest/extraction → drying/cleaning/grading → testing, optional treatment and packaging |
| market_state | Conditioned sowing seed with lot, species/cultivar, purity, germination or viability, moisture, treatment and certification status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conditioned flower seed released for sowing at producer or conditioner hand-off |
| How much | 1 kg |
| How well | Species, cultivar, lot, purity, germination/viability, moisture, treatment and certification status declared |
| How long or cycle | One traceable multiplication and conditioning lot; multi-period burdens cover the declared productive period |
| reference_flow_link | `released_flower_seed` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Flower seed for sowing; UUID unresolved for the full category |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar; lot; multiplication route; purity; germination or viability; moisture; treatment; certification; geography; hand-off gate |

The available `Seed of H. annuus` identity is restricted to that species and is not used as the category reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference and intermediate seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net seed mass at the moisture value reported for the same lot; exclude packaging mass. |
| `quality_alignment` | released seed | lot-specific test result | declared test unit | Purity, germination/viability and moisture shall refer to the same sampled lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Parent-stock identity, multiplication class, field or protected-production state, and perennial stand age when applicable |
| starting_condition_role | Traceable starting condition for the multiplication lot |
| product_classification_scope | One flower-seed product within CPC 3.0 01963 |
| recursive_input_rule | Parent flower seed is a linked upstream product input and is not recursively produced inside the current lot |
| upstream_dataset_requirement | Match species/cultivar, class, treatment, geography and supplier gate of received parent seed |
| disclosure | Declare production system, crop cycle, pollination management, sites, conditioning route, storage, treatment and reject destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_route` | all datasets | Include evidenced multiplication, harvest/extraction, drying, cleaning, testing and pre-hand-off treatment, packaging and storage. | `fao-seed-handling`; `fao-seed-portal` |
| `boundary_parent_stock` | parent seed | Represent parent seed as a separate upstream exchange with lot identity and stop recursion there. |  |
| `boundary_market_state` | reference product | Release only seed intended for sowing and distinguish treated, coated, pelleted and untreated states. |  |
| `boundary_reject_route` | rejected material | Report off-spec seed, screenings and foreign matter by recovery, downgraded use or disposal destination. | `fao-seed-handling` |
| `boundary_multi_period` | perennial crops and shared assets | Attribute establishment and shared assets over documented productive output without double charging. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Parent-stock establishment and seed-crop production | `required` | Managed production of the declared flowering plant for seed | biological production | 1 kg harvested seed-bearing material |
| `harvest_extraction` | Harvest and seed extraction | `required` | Collection and separation of seed from heads, capsules, pods or fruit | harvest/capture | 1 kg raw extracted seed |
| `dry_clean` | Drying, cleaning and grading | `required` | Moisture stabilization and separation of accepted seed | conditioning/grading | 1 kg conditioned seed |
| `release_pack` | Testing, optional treatment, packaging and hand-off | `required` | Lot testing, release, presentation and pre-dispatch storage | material treatment/presentation | 1 kg released flower seed |

### Process: Parent-stock establishment and seed-crop production (`seed_crop_production`)

#### Inputs

##### Product flows

###### Parent flower seed (`parent_seed`)

Declared parent seed enters the managed multiplication lot.

- Selected flow: Parent flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass assigned to the production lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg harvested seed-bearing material
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parent_stock`

- Range: Provisional parent-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg harvested seed-bearing material
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Consolidated fertilizer and nutrient supply (`nutrient_supply`)

All mineral fertilizers, organic fertilizers and nutrient amendments are combined in this single card while actual product identity and nutrient analysis remain in records.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured mass by nutrient product, retaining composition
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg harvested seed-bearing material
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

- Range: Provisional consolidated nutrient-supply QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg product
  - Basis: per kg harvested seed-bearing material
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Irrigation water (`irrigation_water`)

Water delivered for irrigation is recorded when that route is active.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered delivery or verified pump-flow calculation
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg harvested seed-bearing material
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_irrigation`

- Range: Provisional irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3
  - Basis: per kg harvested seed-bearing material; zero only for documented rainfed production
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Crop-protection products (`crop_protection`)

Applied products remain differentiated by formulation and active substance; a rice-farm aggregate is not compatible with this route.

- Selected flow: Crop-protection product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured formulated-product mass
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg harvested seed-bearing material
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

- Range: Provisional crop-protection QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg formulated product
  - Basis: per kg harvested seed-bearing material
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Production energy (`production_energy`)

Fuel, electricity and supplied heat used for field or protected production are expanded from records.

- Selected flow: Energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy-equivalent sum by carrier and use node
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg harvested seed-bearing material
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Provisional production-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 500
  - Unit: MJ
  - Basis: per kg harvested seed-bearing material
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None required as a universal card.

##### Elementary flows

Route-specific field emissions are calculated in the concrete package from recorded inputs and the declared method.

#### Outputs

##### Product flows

###### Harvested seed-bearing material (`harvested_seed_material`)

Mature heads, capsules, pods, fruit or other declared material transferred to extraction.

- Selected flow: Harvested flower seed-bearing material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass with material form and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per crop lot
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional harvested-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None required as a universal card.

##### Elementary flows

None required as a universal card.

### Process: Harvest and seed extraction (`harvest_extraction`)

#### Inputs

##### Product flows

###### Harvested material received (`harvested_material_input`)

The traceable harvested lot enters separation without substitution by another crop.

- Selected flow: Harvested flower seed-bearing material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: linked measured mass from production
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg raw extracted seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional extraction-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Harvest and extraction energy (`extraction_energy`)

Energy used by harvest and extraction equipment is assigned to the traceable lot.

- Selected flow: Energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: converted carrier and meter records assigned by equipment time or throughput
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg raw extracted seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Provisional extraction-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None required as a universal input card.

##### Elementary flows

None required as a universal card.

#### Outputs

##### Product flows

###### Raw extracted flower seed (`raw_seed`)

Separated unconditioned seed is transferred to drying and cleaning.

- Selected flow: Raw extracted flower seed; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured output mass and moisture by lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per extraction lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional raw-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Extraction residues (`extraction_residue`)

Non-seed crop material and unrecovered fractions leave by a documented destination.

- Selected flow: Flower-seed extraction residue; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass or moisture-corrected mass balance
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg raw extracted seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_reject`

- Range: Provisional extraction-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None required as a universal card.

### Process: Drying, cleaning and grading (`dry_clean`)

#### Inputs

##### Product flows

###### Raw flower seed received (`raw_seed_input`)

The linked raw-seed lot enters moisture stabilization and cleaning.

- Selected flow: Raw extracted flower seed; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: linked measured input mass and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg conditioned seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional raw-seed input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Drying and cleaning energy (`conditioning_energy`)

Energy used for drying, aeration, cleaning and grading is assigned to the batch.

- Selected flow: Energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: recorded energy assigned to the batch
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg conditioned seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Provisional conditioning-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 100
  - Unit: MJ
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None required as a universal input card.

##### Elementary flows

None required as a universal card.

#### Outputs

##### Product flows

###### Conditioned flower seed (`conditioned_seed`)

Moisture-stable cleaned seed transfers to release testing.

- Selected flow: Conditioned flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass at declared moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per conditioning batch
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional conditioned-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Cleaning and grading rejects (`cleaning_rejects`)

Off-spec seed, chaff and inert matter are excluded from accepted seed.

- Selected flow: Flower-seed cleaning rejects; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by reason and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg conditioned seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_reject`

- Range: Provisional cleaning-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None required as a universal card.

### Process: Testing, optional treatment, packaging and hand-off (`release_pack`)

#### Inputs

##### Product flows

###### Conditioned seed received (`conditioned_seed_input`)

The linked conditioned lot enters sampling, testing and final preparation.

- Selected flow: Conditioned flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: linked measured mass from conditioning
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg released flower seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional conditioned-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Seed treatment material (`seed_treatment`)

Treatment, coating or pelleting material is recorded only when applied before hand-off.

- Selected flow: Seed treatment material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured material applied net of returned stock
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg released treated seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_packaging`

- Range: Provisional treatment-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg released seed; zero for an untreated lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Seed packaging (`seed_packaging`)

Actual packaging components used for the released lot are recorded.

- Selected flow: Flexible packaging for flower seed
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: measured packaging mass by component; use another permitted group when the actual package is not flexible
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg released flower seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_packaging`

- Range: Provisional packaging QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Final-stage energy (`final_energy`)

Energy for testing support, treatment equipment, packaging and controlled storage is assigned to the lot.

- Selected flow: Energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy assigned by run time, storage duration or throughput
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg released flower seed
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

- Range: Provisional final-stage energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 100
  - Unit: MJ
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None required as a universal input card.

##### Elementary flows

None required as a universal card.

#### Outputs

##### Product flows

###### Released flower seed (`released_flower_seed`)

Only net seed mass covered by the release decision becomes the reference output.

- Selected flow: Flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass covered by the release decision
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per released lot
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release_quality`

- Range: Reference-flow mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `collected_record`

##### Waste flows

###### Failed-test or treatment rejects (`release_rejects`)

Material failing release or treatment controls remains outside the reference output.

- Selected flow: Rejected flower seed; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by failure reason and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg released flower seed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_reject`

- Range: Provisional release-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None required as a universal card.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_reconciliation` | each process | Reconcile opening stock, inputs, outputs, moisture change, residues, rejects and closing stock on one basis. |  |
| `allocation_secondary_outputs` | saleable plant material or downgraded seed | Prefer subdivision or direct physical attribution; if allocation remains, disclose outputs, causal basis, formula and sensitivity. |  |
| `allocation_rejects` | all rejects | Do not include rejected seed in released output or credit a destination before routing is evidenced. |  |
| `allocation_periods` | perennial crops and shared assets | Attribute establishment and infrastructure over documented productive output using one consistent period rule. |  |
| `allocation_batches` | shared processing, storage and changeovers | Assign shared burdens by measured time, occupied storage, throughput or another causal driver without double counting. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_stock` | `seed_crop_production` | parent seed | supplier/sowing record | species, cultivar, class, lot, treatment, mass, date, plot | invoice, label and calibrated scale | kg | each sowing | crop cycle | production lot | sum traceable parent stock | label, invoice, scale check |
| `cp_crop_inputs` | `seed_crop_production` | nutrients and crop protection | purchase/application record | product, composition or active, mass, date, plot, purpose | invoice plus application log | kg | each application | crop cycle | plot/lot | retain actual products and composition | invoice and log |
| `cp_irrigation` | `seed_crop_production` | irrigation | meter/pump record | volume, source, meter, runtime, plot, date | meter or documented pump calculation | m3 | each event | crop cycle | plot/lot | sum delivered volume | calibration or pump specification |
| `cp_energy` | `all processes` | energy | meter, fuel and run record | carrier, quantity, equipment, node, lot, runtime | invoices, meters and equipment logs | MJ; kWh | each run/interval | complete route | site/process | convert and allocate by causal driver | invoice, reading, run log |
| `cp_stage_mass_quality` | `all processes` | product/intermediate mass | batch/lot record | lot, stage, input, output, tare, moisture, form, time | weighing and moisture test | kg; % | each transfer/batch | complete route | lot/node | preserve stage mass and moisture | ticket, calibration, sample id |
| `cp_residue_reject` | `harvest_extraction; dry_clean; release_pack` | residues/rejects | disposition record | type, mass, reason, destination, date, lot | scale plus dispatch/receiver record | kg | each removal/lot | complete route | node/lot | sum by material and destination | scale, dispatch, mass balance |
| `cp_treatment_packaging` | `release_pack` | treatment/packaging | batch/stock record | formulation, applied mass, package type, component mass, count, returns, lot | equipment record and stock reconciliation | kg | each lot | final preparation | line/lot | net consumed by component | stock and equipment check |
| `cp_release_quality` | `release_pack` | released seed | sampling/test/release record | identity, lot, purity, germination/viability, moisture, treatment, certification, mass | representative sampling and recognized test method | kg; % | each lot | hand-off | lot | include only released mass | test, certificate, chain of custody |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = lot-attributed amount / net released seed mass | attributed amount; released mass | amount per kg reference seed |  |
| `calc_irrigation` | irrigation | delivered volume = meter difference, or verified pump rate × runtime | meter or pump data | m3 delivered |  |
| `calc_energy` | energy | convert carriers to declared energy and assign by evidenced driver | quantity; conversion; driver | MJ per process output |  |
| `calc_stage_balance` | each process | loss = opening stock + inputs − intended outputs − closing stock, adjusted for moisture | mass, stock, moisture | reconciled loss/residue |  |
| `calc_multi_period` | perennial/shared production | attributed burden = total burden × lot output / documented productive output | burden; outputs | lot burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Species, cultivar, lot, sowing use and state shall be explicit; a species UUID represents only that species. | label, release record, binding review |
| `dq_quality_tests` | released seed | Purity, germination/viability and moisture shall cover the released lot and state method/date. | laboratory record and sample chain |
| `dq_completeness` | foreground route | Include all released/rejected lots and at least 95% of operating days; quantify gaps. | coverage reconciliation |
| `dq_mass_balance` | each node | Reconcile material on a consistent moisture basis and disclose tolerance. | stage balance and calibration |
| `dq_binding` | emitted exchanges | Resolve parameterized and unmapped cards to verified UUIDs before final TIDAS publication. | expansion and identity review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject non-sowing seed, vegetative propagules, cut flowers and records without species, cultivar and lot. |  |
| `validate_reference` | reference flow | Require exactly 1 kg net released seed and the required quality qualifiers. |  |
| `validate_species_uuid` | reference identity | Keep the category UUID blank unless compatible; use `50835e31-8359-4b7c-a818-81ef48e5ed42` only for explicitly declared H. annuus after detail compatibility is rechecked. |  |
| `validate_nutrient_cardinality` | `seed_crop_production` | Permit at most one nutrient Product-input card, bound only to `flow-set.agricultural-nutrient-supply` `0.3.0` at set level without a group. |  |
| `validate_lot_chain` | all processes | Require an unbroken parent-stock, production, extraction, conditioning and release lot chain. |  |
| `validate_rework_rejects` | rework/rejects | Rework re-enters through a recorded node; rejected mass cannot also be released output. |  |
| `validate_ranges` | all flow cards | Require ordered bounds, unit, basis, basis kind and evidence kind; foreground records determine amounts. |  |
| `validate_binding` | all cards | Accept fixed UUIDs only after detail confirmation and parameterized bindings only under compatible Flow Sets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground flower-seed data package and process projection |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Studies matching species/cultivar, route, geography, quality state and conditioner hand-off |
| excluded_use | Proxy for another species, cut flowers, food/oil seed, vegetative propagules or an unqualified species average |
| required_metadata | species; cultivar; lot; parent class; field/protected route; crop period; sites; purity; germination/viability; moisture; treatment; certification; storage; gate |
| required_quality_disclosure | record coverage; gaps; range exceedances; unresolved UUIDs; mass-balance tolerance; allocation; reject/rework destinations |
| update_trigger | new reviewed route evidence, compatible category UUID, changed Flow Set, quality rule, treatment route or repeated range exceedance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-portal` | `official_guidance` | FAO, Seeds portal, https://www.fao.org/seeds/en | conditioning, packaging, storage, sampling and testing stages |
| `fao-seed-handling` | `handbook` | FAO, *A Guide to Forest Seed Handling*, https://www.fao.org/4/ad232e/ad232e00.htm | collection, extraction, drying, cleaning, storage and seed-quality testing |
