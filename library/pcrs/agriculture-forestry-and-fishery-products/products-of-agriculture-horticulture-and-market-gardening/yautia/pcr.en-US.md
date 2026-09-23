---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yautia
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.zh-CN.md
---

# Yautia

## 1. Scope and Applicability

This PCR covers field production, lifting, limited farm-gate conditioning, and grading of fresh edible cormels from cultivated *Xanthosoma*, including products traded as yautia, tannia, malanga, macabo, new cocoyam, or tiquisque. It ends with fresh, unprocessed produce in a declared accepted grade at the farm gate.

It excludes *Colocasia esculenta* taro/dasheen, ornamental *Xanthosoma*, leaves sold as a separate vegetable, and cooked, peeled, frozen, chipped, milled, starch, stored, packaged, or transported products beyond the farm gate. “Cocoyam” alone is ambiguous; the dataset shall identify *Xanthosoma* and shall not silently substitute *Colocasia* data.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yautia` |
| classification_refs | CPC 3.0 `01591` Yautia |
| covered_products | Fresh edible *Xanthosoma* cormels/tubercles, including yautia, tannia and malanga trade names |
| excluded_products | *Colocasia* taro/dasheen; edible leaves as reference product; ornamental, processed, preserved, packaged, or post-farm products |
| representative_product | Sound fresh *Xanthosoma sagittifolium* cormels accepted for the declared market grade |
| production_route | Vegetative planting material → managed cultivation → lifting → limited primary conditioning → grading and dispatch |
| market_state | Fresh, unprocessed produce at farm gate; cultivar/species, grade, wet basis, washing/trimming state and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh edible yautia cormels accepted for the declared grade at farm gate |
| How much | 1,000 kg fresh mass |
| How well | Sound, firm, physiologically mature cormels meeting the declared grade and free of excluded rot |
| How long or cycle | One declared crop cycle ending at farm-gate grading |
| reference_flow_link | `rf_fresh_yautia_at_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Yautia `72013e1f-538d-4031-b97a-03bfaa42b37d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Xanthosoma* species/cultivar; geography; crop year; production system; harvested part; grade; wet basis; washing/trimming state; gate; included conditioning |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted fresh yautia | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted cormels on the fresh wet basis after included trimming and cleaning. |
| `field_area_cycle` | cultivation inputs and emissions | Area; crop cycle | ha; cycle | Record actual area and dates; normalize only after linked mass balances close. |
| `nutrient_content` | fertilizers | Product mass and nutrient content | kg product; kg N; kg P2O5 or P; kg K2O or K | Retain product mass and assay separately and state oxide-to-element conversions. |
| `water_energy` | irrigation and utilities | Volume or energy | m3; kWh; L; MJ | Record each utility separately and disclose source, pumping boundary and upstream coverage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Land prepared for the crop cycle; planting material and external supplies enter as product flows |
| starting_condition_role | Foreground begins before establishment and ends when accepted fresh yautia leaves farm-gate grading |
| product_classification_scope | Fresh edible *Xanthosoma* cormels corresponding to CPC 3.0 `01591`, distinct from *Colocasia* taro |
| recursive_input_rule | Internally retained corms/cormels used for planting are internal transfers; purchased planting material requires an upstream dataset and is not reference output |
| upstream_dataset_requirement | Require upstream datasets for purchased planting material, fertilizers, amendments, pesticides, fuels, electricity, irrigation supply and external services |
| disclosure | Declare geography, cycle, species/cultivar, field and irrigation system, planting-material origin, included operations, wet basis, grades, destinations, allocation and gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_crop` | cultivation | Include establishment, soil/crop management, inputs, irrigation where used, field energy and direct field emissions until harvest-ready biomass is handed to lifting. | `fao-qds-2010`; `sri-lanka-doa-kiri-ala` |
| `boundary_harvest` | lifting | Model lifting separately because it creates raw collected material, soil carryover, damage and uncollected loss before conditioning. | `sri-lanka-doa-kiri-ala`; `fao-aroids-postharvest` |
| `boundary_conditioning` | conditioning | Include trimming, dry cleaning and washing only when performed; keep utilities, wastewater, removed soil and trimmings explicit. Curing, storage and packaging are extensions. | `codex-tannia-224-2001` |
| `boundary_grading` | grading | Sort prepared material into accepted product, downgraded edible product, propagation material and rejects, and record one hand-off for every state. | `codex-tannia-224-2001` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | Managed yautia cultivation | required | Always | foreground | one hectare and crop cycle |
| `lifting_harvest` | Lifting and harvest | required | Always | foreground | kg raw lifted crop |
| `farm_gate_conditioning` | Limited primary conditioning | required | Utilities may be zero for manual dry conditioning | foreground | kg raw material received |
| `farm_gate_grading` | Grading and destination sorting | required | Always | foreground | kg prepared material graded |

### Process: Managed yautia cultivation (`field_cultivation`)

The managed object is a vegetatively propagated *Xanthosoma* crop. The intended hand-off is harvest-ready underground biomass; tops, non-harvested biomass and losses remain separate residues or losses.

#### Inputs

##### Product flows

###### Vegetative planting material (`planting_material_count`)

Record central-corm pieces, cormels or nursery plants established, including origin and health status.

- Selected flow: Yautia planting material
- Flow property / unit: Number of items / plant or piece
- Amount rule: Count planting units established
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `fao-qds-2010`; `sri-lanka-doa-kiri-ala`
- Range: Sri Lankan planting-density example
  - Range role: Typical range (`typical_range`)
  - Lower: 9000
  - Upper: 10000
  - Unit: planting units/ha/cycle
  - Basis: established units per occupied hectare for the documented Sri Lankan route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `sri-lanka-doa-kiri-ala`

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
- Normalization basis: per ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `sri-lanka-doa-kiri-ala`
- Range: Documented aggregate mineral-fertilizer product example
  - Range role: Typical range (`typical_range`)
  - Lower: 450
  - Upper: 450
  - Unit: kg product/ha/cycle
  - Basis: sum of the documented urea, TSP and MOP schedule per hectare and crop cycle; not a universal dose
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `sri-lanka-doa-kiri-ala`

###### Irrigation water (`irrigation_water`)

Record withdrawal and delivery, source, pumping lift and method; report zero when rainfed.

- Selected flow: Irrigation water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: Metered delivery or pump-flow calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3/ha/cycle
  - Basis: delivered water per occupied hectare; zero is valid for rainfed production
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_fuel`)

Record each fuel by operation and avoid double counting contracted services.

- Selected flow: Mobile-machinery fuel for field operations
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Volume or energy / L or MJ
- Amount rule: Purchases or machine-use records allocated to the cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional field-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: L diesel-equivalent/ha/cycle
  - Basis: direct field fuel per occupied hectare; zero requires a manual or externally serviced route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvest-ready yautia crop (`harvest_ready_crop`)

Record gross harvestable corm/cormel mass before lifting loss.

- Selected flow: Harvest-ready yautia corms and cormels
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Field estimate reconciled to lifted mass and documented loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass`
- Sources: `fao-ecocrop-xanthosoma`
- Range: Published yield context
  - Range role: Typical range (`typical_range`)
  - Lower: 6000
  - Upper: 37000
  - Unit: kg fresh corms and cormels/ha/cycle
  - Basis: broad context spanning reported average and optimum yields; foreground mass governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-ecocrop-xanthosoma`

##### Waste flows

###### Field residues and uncollected loss (`field_residues_losses`)

Record tops, roots, damaged biomass and uncollected crop by destination.

- Selected flow: Yautia field residues and losses
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Measured or sampled mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg gross harvestable corm/cormel mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destinations`
- Range: Provisional residue-and-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg fresh residue/kg gross harvestable output
  - Basis: all crop residues and uncollected loss per kg gross harvestable corm/cormel mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_soil_n2o`)

Calculate direct N2O from all applicable N sources using the declared method.

- Selected flow: Dinitrogen monoxide, air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the selected factor to recorded N inputs and convert N2O-N to N2O by 44/28
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg N input, then per 1,000 kg accepted yautia
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_field_inputs`
- Sources: `ipcc-2019-managed-soils`
- Range: Corrected IPCC Tier 1 EF1 uncertainty screen
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0.002
  - Upper: 0.018
  - Unit: kg N2O-N/kg N input
  - Basis: managed-soil direct-emission factor per kg applicable N input before 44/28 conversion
  - Basis kind: N input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils`

### Process: Lifting and harvest (`lifting_harvest`)

This node removes the crop from the field and creates collected raw corms/cormels, incidental soil, damage and loss before conditioning.

#### Inputs

##### Product flows

###### Harvest-ready crop entering lifting (`crop_entering_lifting`)

This card links the same harvest-ready lot from cultivation to the lifting boundary.

- Selected flow: Harvest-ready yautia corms and cormels
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Equal `harvest_ready_crop` for the represented field
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass`
- Range: Node transfer identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg input/kg cultivation-node output
  - Basis: same represented lot crossing into lifting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Harvest fuel (`harvest_fuel`)

Record direct mobile-machinery fuel used to lift and collect the crop; a manual or electric route records zero.

- Selected flow: Mobile-machinery fuel for harvest
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Volume or energy / L or MJ
- Amount rule: Metered, invoiced or machine-hour-derived fuel allocated to raw lifted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg raw lifted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Provisional harvest-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: L diesel-equivalent/1,000 kg raw lifted output
  - Basis: direct mobile-machinery fuel per 1,000 kg raw lifted output; zero applies when no fuel-powered harvest equipment is used
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest electricity (`harvest_electricity`)

Record electricity used by electric lifting, collection or field-handling equipment; a manual or fuel-only route records zero.

- Selected flow: Electricity for harvest equipment
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or equipment power multiplied by recorded operating time, allocated to raw lifted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg raw lifted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Provisional harvest-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/1,000 kg raw lifted output
  - Basis: direct harvest-equipment electricity per 1,000 kg raw lifted output; zero applies when no electric harvest equipment is used
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw lifted yautia (`raw_lifted_yautia`)

The collected raw state includes adhering soil and precedes any trimming or cleaning.

- Selected flow: Raw lifted yautia corms and cormels
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Weighed collected mass before conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crop entering lifting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Provisional lifting recovery
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.7
  - Upper: 1
  - Unit: kg raw output/kg harvest-ready crop input
  - Basis: collected raw crop per kg estimated harvest-ready crop
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Lifting loss and damaged material (`lifting_loss`)

Record crop left in the field or damaged beyond the collected raw state and state its fate.

- Selected flow: Yautia lifting loss and damaged material
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Difference between crop entering lifting and collected raw mass after soil adjustment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crop entering lifting
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass`
- Range: Provisional lifting-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg loss/kg harvest-ready crop input
  - Basis: uncollected and damaged crop per kg crop entering lifting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Limited primary conditioning (`farm_gate_conditioning`)

This node receives raw lifted material and hands off trimmed and cleaned cormels. Washing and powered cleaning are conditional; curing, refrigeration, packaging and processing are outside the default gate.

#### Inputs

##### Product flows

###### Raw material entering conditioning (`raw_material_conditioning_input`)

This card links the same raw lifted lot into the primary-conditioning boundary.

- Selected flow: Raw lifted yautia corms and cormels
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Equal `raw_lifted_yautia` for the represented lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Node transfer identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg input/kg raw lifted output
  - Basis: same represented lot crossing into conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Conditioning water (`conditioning_water`)

Record supplied water only when wet cleaning occurs; dry conditioning records zero.

- Selected flow: Process water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: Volume / m3
- Amount rule: Metered water supplied; dry-cleaned lots report zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg raw material received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional optional-washing water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3/1,000 kg raw material received
  - Basis: supplied water per 1,000 kg raw input; zero when washing is absent
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity`)

Record electricity for pumps, washers or conveyors only when the equipment is used.

- Selected flow: Electricity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-rated electricity allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg raw material received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/1,000 kg raw material received
  - Basis: direct electricity per 1,000 kg raw input; zero for manual dry conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared yautia entering grading (`prepared_yautia`)

The prepared state is trimmed and cleaned material immediately before grade sorting.

- Selected flow: Prepared fresh yautia cormels
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Weighed prepared mass after included trimming/cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw material received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.75
  - Upper: 1
  - Unit: kg prepared material/kg raw material received
  - Basis: prepared cormels per kg raw input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning rejects and removed material (`conditioning_rejects`)

Keep removed soil distinct from crop trimmings where records permit and state each destination.

- Selected flow: Removed soil, trimmings and conditioning rejects
- Flow property / unit: Mass / kg
- Amount rule: Weighed outputs or mass-balance difference, distinguishing soil and crop material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw material received
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg removed material/kg raw material received
  - Basis: all removed soil, trimmings and rejects per kg raw input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater`)

Record discharge only for wet cleaning and reconcile it with supplied and reused water.

- Selected flow: Wastewater from yautia washing
- Flow property / unit: Volume / m3
- Amount rule: Measured discharge or water balance; zero without washing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg raw material received
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3/1,000 kg raw material received
  - Basis: discharge per 1,000 kg raw input; zero without washing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grading and destination sorting (`farm_gate_grading`)

The incoming state is prepared cormels. Declare accepted grade, downgraded edible output, propagation material and rejects, with one destination for every state.

#### Inputs

##### Product flows

###### Prepared material entering grading (`prepared_material_grading_input`)

This card links the same prepared lot into destination grading.

- Selected flow: Prepared fresh yautia cormels
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Equal `prepared_yautia` for the represented lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_destinations`
- Range: Node transfer identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg input/kg prepared output
  - Basis: same represented lot crossing into grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh yautia (`accepted_fresh_yautia`)

This is the sound accepted grade and the sole reference-product hand-off at the farm gate.

- Selected flow: Yautia `72013e1f-538d-4031-b97a-03bfaa42b37d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Weighed accepted mass; normalize final dataset to exactly 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material and final 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_destinations`
- Sources: `codex-tannia-224-2001`
- Range: Provisional accepted-grade recovery
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 1
  - Unit: kg accepted product/kg prepared material graded
  - Basis: accepted fresh mass per kg prepared input; actual grade records govern
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded edible yautia (`downgraded_edible_yautia`)

Record a product output only when a documented edible use and hand-off exist.

- Selected flow: Downgraded fresh yautia
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Weighed downgraded mass by buyer or use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material graded
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_destinations`
- Range: Provisional downgraded-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.35
  - Unit: kg downgraded edible output/kg prepared material graded
  - Basis: downgraded output with documented use per kg prepared input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retained or sold planting material (`planting_material_output`)

Record corms or cormels intentionally retained or sold for propagation as a distinct intended output.

- Selected flow: Yautia planting material
- Flow property / unit: Mass and number / kg and item
- Amount rule: Weighed and counted propagation material by retention or sale destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material graded
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_destinations`
- Sources: `fao-qds-2010`
- Range: Provisional propagation-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg planting material/kg prepared material graded
  - Basis: intentionally retained or sold propagation material per kg prepared input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects and residues (`grading_rejects`)

Record rejected material by feed, composting, field return, treatment or disposal destination.

- Selected flow: Yautia grading rejects and residues
- Flow property / unit: Mass / kg fresh mass
- Amount rule: Weighed reject mass or mass-balance residual, with destination stated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material graded
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_destinations`
- Sources: `codex-tannia-224-2001`
- Range: Provisional grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg rejects/kg prepared material graded
  - Basis: rejects after product outputs per kg prepared input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all outputs | Classify each output once as reference product, downgraded product, propagation material, residue, waste, or loss; record one hand-off and prohibit double counting. | `mass-balance-identity` |
| `allocation_planting_material` | propagation output | Treat internally retained material as an internal transfer. For independently sold intended products, prefer subdivision; otherwise allocate remaining shared burdens by fresh mass and disclose an economic sensitivity when values differ materially. |  |
| `allocation_residue` | residues and rejects | Give no co-product allocation to material returned to soil or discarded without a documented product function; include its treatment burden. |  |
| `allocation_shared_operations` | shared operations | Assign separable inputs directly before allocating remaining shared burdens; disclose output quantities, prices where used, method and precedence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation` | planting and crop inputs | invoices, labels, field logs, assays | identity; quantity; nutrient assay; date; area; planting count; origin | reconcile purchase, stock and application logs | kg product; kg nutrient; item; ha | every event | complete crop cycle | each field | sum by product and nutrient | invoice, label, assay, operator log |
| `cp_water_energy` | `field_cultivation` | water and energy | meters, pump logs, invoices, machine hours | source; volume; lift; energy; fuel; operation | meter or engineering calculation | m3; kWh; L; MJ | each event/interval | complete cycle | each field/shared asset | sum direct use; documented shared allocation | calibration, invoice, runtime log |
| `cp_harvest_mass` | `lifting_harvest` | crop, raw output, loss and energy | weigh tickets, samples, harvest logs | area; crop estimate; raw mass; damage; loss; soil; energy | calibrated weighing and documented sampling | kg; L; kWh | each field/lot | entire harvest | each field/lot | reconcile crop to raw output and loss | scale check, sampling record, operator log |
| `cp_residue_destinations` | `field_cultivation` | residues and loss | sampling, load weights, destination logs | material; mass; moisture; fate; recipient | representative sampling or weighed loads | kg fresh/dry mass | each event | complete cycle | each field | sum by material and fate | sample, scale and destination evidence |
| `cp_conditioning_records` | `farm_gate_conditioning` | material, utilities and rejects | lot weights, meters, batch and discharge logs | raw mass; operation; water; electricity; prepared mass; rejects; wastewater | weigh before/after and meter utilities | kg; m3; kWh | each lot | all conditioning | each conditioning line or station | close mass and water balances | calibrated scale/meter and destination log |
| `cp_grade_destinations` | `farm_gate_grading` | all grade states | grade sheets, scale tickets, invoices | input; specification; output masses; count; use; price | weigh each state and link to same lot | kg; item; currency/kg | each lot | all grading | each grading line or station | sum by state/destination | scale, grade and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | cycle or lot amount × 1,000 / accepted fresh yautia mass, after balances close | amount; accepted mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_nutrients` | fertilizer | nutrient mass = product mass × assay; state P/P2O5 and K/K2O conversion | product mass; assay | kg nutrient |  |
| `calc_direct_n2o` | soil N | selected factor × applicable N; multiply N2O-N by 44/28 to report N2O | kg N; factor | kg N2O | `ipcc-2019-managed-soils` |
| `calc_conditioning_balance` | conditioning | raw input = prepared output + removed soil/trimmings/rejects + unexplained difference | lot masses | closed balance | `mass-balance-identity` |
| `calc_grade_balance` | grading | prepared input = accepted + downgraded + propagation material + rejects | state masses | closed output balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Verify *Xanthosoma* identity and prohibit silent *Colocasia* substitution. | planting-material, crop inspection or agronomist record |
| `dq_temporal` | foreground | Cover one complete cycle and all contributing lots. | dated field and lot records |
| `dq_mass_balance` | harvest through grading | Reconcile each hand-off and explain differences exceeding 2% of the relevant input. | calibrated weights and worksheet |
| `dq_range_review` | every inventory card | Use ranges as QA context, retain foreground values, and explain outliers. | range review and linked evidence |
| `dq_co_products` | multiple outputs | Enumerate every intended output/destination and prevent double counting. | transfers, invoices and destination receipts |
| `dq_completeness` | inventory | Account for at least 95% by mass of external non-water materials and disclose missing water, energy, pesticide, nutrient, emission, reject or destination records. | completeness and missing-data logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Exactly one 1,000 kg output uses Yautia flow `72013e1f-538d-4031-b97a-03bfaa42b37d`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66` and all qualifiers. |  |
| `validate_species_boundary` | identity | Reject an ambiguous “cocoyam” identity or *Colocasia* substitution without reviewed proxy disclosure. | `fao-aroids-postharvest`; `codex-tannia-224-2001` |
| `validate_node_handoffs` | process map | Require exact cultivation→lifting, lifting→conditioning and conditioning→grading lot links. | `mass-balance-identity` |
| `validate_destinations` | grading | Require explicit zero or measured accepted, downgraded, propagation and reject states, each with one hand-off. | `codex-tannia-224-2001` |
| `validate_conditional_routes` | conditioning | Unused washing/powered routes have zero flows; used routes report utilities and wastes. Storage/packaging requires a boundary extension. |  |
| `validate_ranges` | all cards | Require ordered nonnegative bounds, unit, denominator, basis kind and evidence kind; external ranges require source ids and regional examples are not limits. |  |
| `validate_multi_output` | intended outputs | Require a complete output set and explicit attribution; prohibit crediting internally transferred planting material as a sale. |  |
| `validate_flow_set_bindings` | product inputs with parameterized identity | Require the exact Flow Set id, version and one narrow functional group shown on the card; preserve product-input direction and resolve each final exchange to a verified UUID before TIDAS publication. |  |
| `validate_direct_emissions` | field emissions | Require selected soil-emission method, N inputs, factors, conversions and flow assignments; never infer emissions from fertilizer product mass alone. | `ipcc-2019-managed-soils` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate dataset for fresh unprocessed yautia |
| downstream_use | Reviewed `secondary_dataset` or `background_dataset` for systems requiring fresh *Xanthosoma* at farm gate |
| allowed_use | Geography-, cycle-, cultivar-, grade-, irrigation- and conditioning-matched attributional modelling |
| excluded_use | *Colocasia* taro, edible-leaf production, processed/preserved yautia, or post-farm transport/storage/packaging unless added |
| required_metadata | geography; crop year/cycle; species/cultivar; system; irrigation; planting origin; area; yield; grade; wet basis; lifting; conditioning; washing; gate; destinations; allocation |
| required_quality_disclosure | record coverage; range evidence status; mass-balance closure; missing data/proxies; assays; emissions method; utility allocation; co-product records; boundary extensions |
| update_trigger | material change in identity, geography, management, yield, irrigation, harvest, conditioning, grade, destinations, allocation, emissions method or reference UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-qds-2010` | official_guidance | FAO, *Quality Declared Planting Material: Protocols and Standards for Vegetatively Propagated Crops*, 2010, https://www.fao.org/4/i1195e/i1195e00.pdf | *Xanthosoma* identity, synonyms and propagation material |
| `sri-lanka-doa-kiri-ala` | extension_guidance | Sri Lanka Department of Agriculture, “Kiri Ala – Xanthosoma sagittifolium,” https://doa.gov.lk/hordi-crop-kiri-ala/ | route, planting density, fertilizer schedule, harvest and regional yield |
| `fao-ecocrop-xanthosoma` | dataset | FAO Ecocrop, “Xanthosoma sagittifolium,” crop id 2168, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2168 | identity, growing period and broad yield context |
| `codex-tannia-224-2001` | standard | Codex Alimentarius, CODEX STAN 224-2001, https://www.fao.org/4/a1389e/a1389e00.pdf | fresh tannia identity, quality, harvest care and grading |
| `fao-aroids-postharvest` | handbook | FAO INPhO, *Edible Aroids: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Edible_aroids.pdf | *Xanthosoma* versus *Colocasia* and post-harvest route |
| `ipcc-2019-managed-soils` | method_factor | IPCC, *2019 Refinement*, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O method and EF1 uncertainty |
| `mass-balance-identity` | method_factor | Conservation of mass for linked foreground nodes | transfer, conditioning and grading balances |
