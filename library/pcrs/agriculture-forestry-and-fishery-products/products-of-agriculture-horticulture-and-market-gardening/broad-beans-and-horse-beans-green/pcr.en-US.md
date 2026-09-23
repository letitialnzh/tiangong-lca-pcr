---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-green
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: canonical
---

# Broad beans and horse beans, green

## 1. Scope and Applicability

This PCR guides foreground data packages for fresh, green broad beans and horse beans (Vicia faba L.), including immature pods or immature seeds sold as fresh produce. It covers open-field and protected cultivation from the declared seedbed or planting-unit starting condition through crop establishment, managed crop growth, irrigation, nutrient and crop-protection management, harvest, grading, optional washing and cooling, primary packing, and the declared farm-gate or pack-house hand-off. Multiple picking rounds are included when they belong to the same planting and are reconciled to the declared output.

Dry or mature broad beans and horse beans, seed production, sprouts, canned, frozen, dried, cooked, fermented, milled, prepared, retail, consumer storage, and consumption are outside the default scope. Nursery production, durable irrigation or protected-cultivation infrastructure, land-use change, machinery manufacture, and post-gate transport are excluded unless separately attributed and disclosed. Field residues, culls, downgraded produce, wash-water, and packaging waste remain in the foreground until their declared fate or hand-off is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-green` |
| classification_refs | CPC 3.0 `01243`, Broad beans and horse beans, green |
| covered_products | Fresh, whole or shelled green broad beans and horse beans in the declared maturity, variety group, grade, moisture, washing, cooling, and primary-packaging state |
| excluded_products | Dry or mature beans, seed production, sprouts, preserved or processed products, downstream retail and consumption, capital goods, land-use change, and post-gate services |
| representative_product | Marketable fresh green broad beans or horse beans meeting declared maturity, pod or seed form, size, colour, tenderness, cleanliness, grade, and defect criteria |
| production_route | Seeded or planted open-field or protected cultivation; crop establishment; irrigation, nutrient and crop-protection management; repeated harvest; grading; optional washing, cooling, and primary packing |
| market_state | Fresh, unprocessed green broad beans or horse beans at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh green broad beans and horse beans at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh, unprocessed broad beans or horse beans in the declared pod or shelled form, maturity, variety group, size, colour, tenderness, cleanliness, grade, moisture, and packaging state |
| How long or cycle | One declared crop cycle and complete harvest campaign; all picking rounds from the same planting are reconciled before normalization |
| reference_flow_link | `green_broad_bean_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Broad beans and horse beans, green; production mix, at farm gate `<2a6f5664-5fda-45e8-81c2-989d822b3417>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | production geography; open-field or protected route; variety or cultivar group; pod or shelled form; sowing or planting date; harvest dates and picking rounds; maturity, size, colour, tenderness, grade, and defect criteria; irrigation source and method; nutrient product and nutrient basis; crop-protection program; washing and cooling state; packaging state; residue, reject, and downgraded-product fate; and declared gate |


Binding: `fixed`

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_green_broad_bean_mass` | reference and output streams | Mass | kg | Weigh harvested, marketable, downgraded, rejected, residue, and loss streams separately and reconcile them before normalization. |
| `crop_cycle_normalization` | field and protected-unit records | Area and mass | ha and kg | Record inputs and picking rounds by field, bed, or protected unit and normalize them to marketable output from the same declared crop cycle. |
| `nutrient_product_and_n_basis` | nutrient inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record formulated product mass and documented nutrient concentration separately; do not double count a compound product across nutrient roles. |
| `water_delivery_basis` | irrigation, fertigation, washing, and withdrawal | Volume | m3 | Keep crop delivery, fertigation carrier, post-harvest washing, and natural-resource withdrawal distinct and disclose the meter or water-balance basis. |
| `harvest_grade_reconciliation` | repeated picking and grading | Mass and grade | kg and declared fraction | Retain each picking round, gross harvest, accepted output, downgraded product, rejects, and losses so the declared grade is reproducible. |
| `postharvest_mass_change` | washing, cooling, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, tare, and packing loss separately from crop harvest mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving broad-bean or horse-bean seed or planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green-broad-bean crop cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01243`, Broad beans and horse beans, green, through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Broad-bean or horse-bean seed and planting material are recorded at their received hand-off state and linked to an upstream dataset; their production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for seed, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare geography, route, variety group, pod or shelled form, planting density, crop-cycle dates, irrigation source and method, nutrient product and nutrient basis, crop-protection program, picking rounds, marketable yield, downgraded and rejected produce, residues, washing and cooling, packaging, fate of wastes, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include attributable bed preparation, planting, crop management, irrigation, nutrient and crop protection, and direct crop emissions for the declared crop cycle; disclose prior land use and exclude unrelated infrastructure. | `fao-good-agricultural-practices` |
| `boundary_repeated_picking` | harvest campaign | Attribute every picking round from one planting to the same crop cycle and reconcile marketable, downgraded, rejected, loss, and residue streams. | `unece-ffv-06-beans`; `mass-balance-identity` |
| `boundary_gate_conditioning` | harvest and pre-gate conditioning | End the default foreground boundary at the declared farm-gate or pack-house gate. Include grading, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | residues, culls, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for every residue stream. Do not assign a co-product credit without a documented recipient, use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Green-broad-bean crop establishment | required | every represented sowing, planting, bed, or protected-cultivation unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Green-broad-bean crop management | required | each represented crop cycle | foreground managed biological production | managed area, water, nutrient and protection applications, and complete harvest campaign |
| `harvest_and_gate_preparation` | Green-broad-bean harvest and gate preparation | required | each represented harvest campaign and declared pre-gate handling route | foreground harvest, grading, conditioning, packing, and hand-off | 1,000 kg marketable fresh output |

### Process: Green-broad-bean crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Broad-bean or horse-bean seed（`planting_material_input`）

Record seed or other planting material entering each declared field or protected unit, including lot, variety group, sowing date, and whether the material is purchased or retained.

- Selected flow: Broad-bean or horse-bean seed or planting material
- Flow property / unit: Mass or viable seed count / kg or seed
- Amount rule: Record supplier lot mass or viable seed count planted per field, bed, or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 80
  - Unit: kg seed/1,000 kg output
  - Basis: declared planted area and crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water（`establishment_irrigation_water`）

Record water applied for seedbed preparation and emergence during the establishment period, separating source and application method.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: m3/ha
  - Basis: planting to uniform stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment machinery fuel（`establishment_machinery_fuel`）

Record fuel used by tractors or other mobile machinery for seedbed preparation and planting when it crosses the foreground boundary.

- Selected flow: Fuel supplied to mobile agricultural machinery
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Machinery-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: L diesel/ha
  - Basis: establishment operations
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied green-broad-bean production area（`crop_land_occupation`）

Record the field or protected unit occupied for the declared crop cycle and distinguish crop occupation from durable infrastructure.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_area_cycle_records`
- Sources: `fao-good-agricultural-practices`
- Range: Area-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1.0
  - Unit: ha/1,000 kg output
  - Basis: declared crop area and marketable crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


### Process: Green-broad-bean crop management (`crop_management`)

#### Inputs

##### Product flows

###### Crop irrigation and fertigation water（`crop_irrigation_water`）

Record irrigation and fertigation water from establishment through the final harvest, separating natural rainfall, source, application method, and recirculated water.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha
  - Basis: complete green-broad-bean crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

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
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-fertilizer-code-conduct`
- Range: Nitrogen-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg N/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg P2O5/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg K2O/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic-amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20,000
  - Unit: kg product/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product（`crop_protection_product`）

Record each crop-protection product or active substance applied to the crop, including rate, timing, target, and application method; identity remains site-specific until verified.

- Selected flow: Crop-protection product or active substance
- Flow property / unit: Mass of formulated product or active substance / kg
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-international-code-pesticide-management`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg formulated product/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity（`field_electricity_input`）

Record electricity used by pumps, fertigation controls, protected cultivation, or other field equipment when supplied across the boundary.

- Selected flow: Electricity supplied to agricultural operations
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Field-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: kWh/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Water withdrawn from natural resources（`irrigation_water_withdrawal`）

Record source withdrawal separately from water delivered to the crop and identify the source, meter, return flow, and allocation basis.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`

#### Outputs

##### Product flows

##### Waste flows

###### Crop residue from field（`crop_residue_output`）

Record stems, leaves, pods, and other crop residues leaving the managed production node and declare whether they are returned, composted, used as feed, treated, or disposed.

- Selected flow: Green-broad-bean crop residue
- Flow property / unit: Mass / kg dry or as-received
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Sources: `fao-good-agricultural-practices`

##### Elementary flows

###### Ammonia emission to air（`air_ammonia_emission`）

Record or calculate ammonia emissions associated with nutrient application and managed residues using the declared nitrogen-emission method.

- Selected flow: Ammonia emitted to air
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Nitrous oxide emission to air（`air_nitrous_oxide_emission`）

Record or calculate direct and applicable indirect nitrous-oxide emissions from nitrogen inputs and residue pathways without double counting.

- Selected flow: Nitrous oxide emitted to air
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Nitrogen oxides from combustion（`air_nox_emission`）

Record nitrogen-oxide emissions from declared combustion equipment when fuel use and an applicable emission-factor method are available.

- Selected flow: Nitrogen oxides emitted to air
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2006-guidelines-energy`

###### Nitrate emission to water（`water_nitrate_emission`）

Record nitrate losses to receiving water only when supported by site monitoring or the declared nutrient-loss calculation method.

- Selected flow: Nitrate emitted to water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Phosphate emission to water（`water_phosphate_emission`）

Record phosphate losses to receiving water only when supported by monitoring or an evidence-backed nutrient-loss method.

- Selected flow: Phosphate emitted to water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Nitrate emission to soil（`soil_nitrate_emission`）

Record nitrate additions or losses to soil only where the chosen method defines them as elementary flows and the nitrogen balance supports the value.

- Selected flow: Nitrate emitted to soil
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Phosphate emission to soil（`soil_phosphate_emission`）

Record phosphate additions or losses to soil only where the selected method defines them as elementary flows and the phosphorus balance supports the value.

- Selected flow: Phosphate emitted to soil
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Sources: `ipcc-2019-refinement-nitrogen`


### Process: Green-broad-bean harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Harvested green broad beans before grading（`harvested_green_broad_beans`）

Record total edible-pod or immature-seed harvest entering the harvest and gate-preparation node before sorting, grading, washing, cooling, or packing.

- Selected flow: Harvested green broad beans before grading
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `unece-ffv-06-beans`; `codex-fresh-produce-hygiene`
- Range: Harvest-to-marketable-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,050
  - Upper: 3,000
  - Unit: kg harvested/1,000 kg marketable output
  - Basis: complete picking campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and handling machinery fuel（`harvest_machinery_fuel`）

Record fuel used for harvesting, field loading, and pre-gate handling equipment when it crosses the declared boundary.

- Selected flow: Fuel supplied to mobile agricultural machinery
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`

###### Post-harvest washing water（`postharvest_washing_water`）

Record water used for washing or rinsing harvested green broad beans before the declared gate, including source, reuse, treatment, and discharge.

- Selected flow: Process water used for post-harvest washing
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/1,000 kg output
  - Basis: declared pre-gate washing operation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Post-harvest cooling electricity（`postharvest_cooling_electricity`）

Record electricity used for forced-air, room, or other pre-gate cooling of the declared product, separating it from storage beyond the gate.

- Selected flow: Electricity supplied to post-harvest cooling
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-fresh-produce-hygiene`

###### Reusable crate or pallet service（`primary_crate_or_pallet`）

Record the primary crate or pallet service crossing the gate, including material, mass, reuse cycles, ownership, and return route.

- Selected flow: Pallet and crate packaging function
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Carton packaging（`carton_packaging_input`）

Record carton or box packaging introduced before the declared gate and allocate reusable packaging over its declared service life.

- Selected flow: Carton and box packaging function
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Flexible primary packaging（`flexible_packaging_input`）

Record film, bags, liners, or other flexible primary packaging crossing the declared gate, including polymer type and mass.

- Selected flow: Flexible packaging function
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Pre-gate road freight service（`pre_gate_road_transport`）

Record road freight between the field, pack-house, and declared gate when transport occurs inside the foreground boundary, using shipment mass and distance.

- Selected flow: Road freight transport service
- Flow property / unit: Mass-distance / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-fresh-produce-hygiene`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh green broad beans（`marketable_green_broad_beans`）

Record the declared marketable output after grading and any pre-gate washing, cooling, and packing; retain grade, maturity, cleanliness, and package state.

- Selected flow: Broad beans and horse beans, green, at declared gate
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `unece-ffv-06-beans`; `codex-fresh-produce-hygiene`

###### Downgraded but potentially usable green broad beans（`downgraded_green_broad_beans`）

Record produce that fails the primary market grade but is transferred for a declared secondary use, sale, feed, processing, or other documented hand-off.

- Selected flow: Downgraded green broad beans
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `unece-ffv-06-beans`

##### Waste flows

###### Rejected pods, seeds, and harvest losses（`rejected_green_broad_beans`）

Record unmarketable produce and harvest losses separately from marketable and documented secondary outputs, then declare their fate.

- Selected flow: Rejected or lost green broad beans
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `unece-ffv-06-beans`

###### Trimmings and organic packing residue（`trim_and_residue_waste`）

Record stems, pod fragments, soil, and other organic solids removed during grading or packing and declare reuse, composting, treatment, or disposal.

- Selected flow: Organic processing residue from green broad beans
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Sources: `codex-fresh-produce-hygiene`

###### Post-harvest washing wastewater（`postharvest_wastewater`）

Record wastewater leaving washing or conditioning and disclose treatment, discharge, recirculation, and measured or calculated pollutant load.

- Selected flow: Wastewater from post-harvest washing
- Flow property / unit: Volume / m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_records`
- Sources: `codex-fresh-produce-hygiene`

###### Packaging waste before the declared gate（`packaging_waste`）

Record damaged, rejected, or off-cut primary packaging generated before the declared gate and distinguish supplier take-back from waste treatment.

- Selected flow: Packaging waste from pre-gate operations
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green broad-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_intended_outputs` | marketable and downgraded outputs | Enumerate marketable output and every intentionally transferred downgraded or secondary output at each hand-off. Apply one declared attribution method consistently to shared inputs and burdens. | `iso-14044-2006`; `unece-ffv-06-beans` |
| `allocation_rejects_are_waste` | rejected produce and residues | Treat rejected produce and residues as waste or residue unless a documented recipient, intended use, quality, and hand-off demonstrate a co-product function. | `iso-14044-2006` |
| `allocation_reusable_packaging` | crates and pallets | Allocate reusable crates and pallets over documented service cycles and return losses; do not assign their full burden to one shipment without evidence. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | crop_establishment | planting_material_input | supplier and field records | lot; variety; seed mass or count; sowing date; field or unit | invoice and planting log reconciliation | kg or seed | each planting event | full crop cycle | field, bed, or protected unit | sum by declared crop cycle | lot record and planting-log completeness |
| `cp_area_cycle_records` | crop_establishment | crop_land_occupation | field register | area; occupation dates; infrastructure flag | field or protected-unit register | ha and dates | each crop cycle | full crop cycle | field or unit | area-time by cycle | dated area record |
| `cp_irrigation_records` | crop_establishment; crop_management | irrigation and withdrawal | meter or water balance | source; meter; delivery; withdrawal; method; reuse; discharge | meter reading or documented balance | m3 | each irrigation event or monthly | full crop cycle | field or unit | sum by source and cycle | meter calibration or balance check |
| `cp_nutrient_records` | crop_management | nutrient inputs | invoice, label, plan, and application log | product; mass; nutrient concentration; date; field; method | supplier record and application-log reconciliation | kg product and kg nutrient | each application | full crop cycle | field or unit | sum by nutrient role and cycle | label, supplier specification, or laboratory result |
| `cp_crop_protection_records` | crop_management | crop-protection product | application log | product; active substance; rate; target; date; area; method | application-log review | kg product or active substance | each application | full crop cycle | field or unit | sum by product and crop cycle | product label and application record |
| `cp_energy_records` | crop_establishment; crop_management; harvest_and_gate_preparation | fuel and electricity | meter, invoice, or equipment log | fuel or electricity; equipment; date; operation; quantity | meter or activity log | L or kWh | each operation or monthly | full crop cycle | field or facility | allocate to operation and output | invoice, meter, or equipment record |
| `cp_emission_calculation` | crop_management | elementary emissions | calculation worksheet | nutrient inputs; combustion fuel; method; factors; result | declared method and reproducible worksheet | kg substance | each crop cycle | full crop cycle | field or unit | calculate by process and output | versioned method and input trace |
| `cp_residue_fate_records` | crop_management; harvest_and_gate_preparation | residues and rejects | mass balance and hand-off record | stream; mass; moisture; fate; recipient; date | weighbridge, log, and hand-off record | kg | each harvest or treatment event | full crop cycle | field or facility | reconcile by stream and fate | scale record and recipient evidence |
| `cp_harvest_grade_records` | harvest_and_gate_preparation | harvest and output grades | harvest and grading log | picking date; gross mass; grade; rejects; downgrade; output; loss | weigh tickets and grading records | kg | each picking round | full harvest campaign | field and pack-house | sum by round and declared gate | scale calibration and grade record |
| `cp_washing_records` | harvest_and_gate_preparation | washing and wastewater | water meter and discharge record | water; reuse; soil removal; wastewater; treatment; discharge | meter, batch log, and treatment record | m3 and kg | each batch | full pre-gate handling | pack-house | sum by batch and gate | meter or treatment record |
| `cp_packaging_records` | harvest_and_gate_preparation | packaging and packaging waste | purchase and packing records | material; mass; reuse cycles; damage; waste; take-back | packaging ledger and packing log | kg | each shipment or monthly | full pre-gate handling | pack-house | allocate by product mass and service life | supplier specification and waste record |
| `cp_transport_records` | harvest_and_gate_preparation | pre-gate road freight | shipment record | origin; destination; distance; shipment mass; vehicle | shipment record and route distance | t*km | each shipment | full pre-gate handling | field to gate | sum by route and crop cycle | dispatch record and distance basis |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | all processes | Normalize each flow to 1,000 kg marketable output: recorded flow / marketable output * 1,000. | flow mass; marketable output | normalized flow | `mass-balance-identity` |
| `calc_nutrient_equivalent` | nutrient inputs | Product mass * documented nutrient fraction; retain product and nutrient values as separate fields. | product mass; N, P2O5, K2O, or organic nutrient fraction | nutrient equivalent | `fao-fertilizer-code-conduct` |
| `calc_area_time` | land occupation | Area * occupation duration; report protected structures separately when they are included. | area; dates | ha*a | `fao-good-agricultural-practices` |
| `calc_irrigation_balance` | irrigation and withdrawal | Opening meter + withdrawals - closing meter - documented return or reuse = delivered water, with source and uncertainty disclosed. | meter readings; withdrawal; return; reuse | m3 delivered and m3 withdrawn | `fao-crop-evapotranspiration-56` |
| `calc_grade_balance` | harvest and gate preparation | Gross harvest = marketable + downgraded + rejected + residue + measured handling loss, after consistent moisture basis. | grade records; loss records | reconciled output set | `mass-balance-identity` |
| `calc_reusable_packaging` | crates and pallets | Packaging mass / documented service cycles, with return loss allocated to the applicable shipments. | packaging mass; service cycles; loss | packaging per shipment | `iso-14044-2006` |
| `calc_nitrogen_emissions` | soil and air emissions | Apply one declared IPCC-compatible nitrogen method to documented nutrient inputs and residue fate; retain factors and intermediate values. | nutrient input; residue fate; factors | N emission flows | `ipcc-2019-refinement-nitrogen` |
| `calc_freight` | pre-gate transport | Shipment mass * route distance, with empty return and allocation treatment disclosed. | mass; distance; route | t*km | `codex-fresh-produce-hygiene` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference and inventory flows | Use the narrowest supported flow identity; keep identity evidence gaps explicit and do not substitute a nearby product. | flow description, gate, type, and mapping review |
| `quality_measurement` | mass, volume, area, energy, and nutrient data | Prefer calibrated scales, meters, supplier documents, laboratory results, and reproducible calculations. | calibration, invoice, label, lab, or worksheet |
| `quality_temporal` | crop-cycle records | Cover the complete declared planting and harvest campaign and disclose missing periods. | dated field, harvest, and application logs |
| `quality_geographic` | production unit | Identify country or region and field, bed, protected unit, or pack-house scope. | location register and site metadata |
| `quality_completeness` | all inventory processes | Reconcile intended outputs, rejects, residues, wastewater, packaging waste, and losses to the reference output. | mass-balance worksheet |
| `quality_nutrient` | nutrient and emission calculations | Retain product formulation, nutrient basis, application event, method, factor, and intermediate result. | label, plan, lab, and calculation record |
| `quality_boundary` | gate and upstream inputs | Disclose gate, upstream dataset links, processing state, packaging state, and exclusions. | dataset metadata and process notes |
| `quality_uncertainty` | ranges and estimates | Mark site-specific records, calculated values, external ranges, and provisional estimates separately. | value-mode and evidence-kind fields |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | reference flow | Require 1,000 kg mass basis, kg unit, complete qualifiers, and a resolved or explicitly evidence gap reference-flow identity before downstream use. | `iso-14044-2006` |
| `validate_cycle_balance` | all crop-cycle processes | Reject a package when planted area, crop-cycle dates, harvest rounds, and marketable output cannot be reconciled. | `mass-balance-identity` |
| `validate_nutrient_basis` | nutrient inputs | Require product mass, nutrient concentration, application date, and field or unit scope; reject conversions without documented nutrient basis. | `fao-fertilizer-code-conduct` |
| `validate_water_separation` | irrigation, withdrawal, washing | Require separate crop-delivery, natural-resource withdrawal, washing, reuse, and discharge records where applicable. | `fao-crop-evapotranspiration-56`; `codex-fresh-produce-hygiene` |
| `validate_grade_reconciliation` | harvest and gate preparation | Require mass totals for marketable, downgraded, rejected, residue, and loss streams and require each non-marketable stream to have a declared fate. | `unece-ffv-06-beans` |
| `validate_emission_method` | elementary emissions | Require one declared nitrogen and combustion-emission method and prevent double counting across product, soil, water, and air flows. | `ipcc-2019-refinement-nitrogen` |
| `validate_gate_disclosure` | reference flow and boundary | Require the gate, processing state, packaging state, and pre-gate services to be disclosed before the dataset is used downstream. | `codex-fresh-produce-hygiene` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh green broad beans and horse beans |
| downstream_use | Secondary dataset and background dataset for product-system studies up to the declared farm-gate or pack-house gate |
| allowed_use | Model fresh green broad-bean or horse-bean production when the route, crop cycle, gate, grade, and output reconciliation are disclosed |
| excluded_use | Dry-bean production, processed foods, seed production, retail and consumption, or sites whose route and gate cannot be identified |
| required_metadata | PCR id; CPC reference; production geography; route; crop-cycle dates; variety group; pod or shelled form; yield; grade; water; nutrient; crop-protection; energy; packaging; residue fate; and gate |
| required_quality_disclosure | completeness of picking rounds and mass balance; measurement basis; nutrient and emission methods; temporal and geographic coverages; and provisional ranges |
| update_trigger | material route, crop-protection, irrigation, nutrient, grading, packaging, gate, or evidence change; or a new reviewed flow-set group |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO, good agricultural practices and sustainable crop production guidance | crop-cycle, input, route, and boundary records |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | irrigation scheduling and water-balance context |
| `fao-fertilizer-code-conduct` | official_guidance | FAO, International code of conduct for the sustainable use and management of fertilizers | nutrient product and nutrient-basis records |
| `fao-international-code-pesticide-management` | official_guidance | FAO and WHO, International Code of Conduct on Pesticide Management | crop-protection product and application records |
| `ipcc-2006-guidelines-energy` | method_factor | IPCC 2006 Guidelines for National Greenhouse Gas Inventories, energy and combustion methods | fuel and energy emission calculations |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines, agricultural soil and nitrogen emissions | managed-soil nitrogen-emission calculations |
| `unece-ffv-06-beans` | standard | UNECE standard FFV-06 for the marketing and commercial quality control of beans | maturity, grade, and harvest-quality qualifiers |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius CXC 53, Code of hygienic practice for fresh fruits and vegetables | washing, cooling, packing, and hygiene requirements |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management—Life cycle assessment—Requirements and guidelines | allocation and data-quality rules |
| `mass-balance-identity` | method_factor | PCR method rule: conservation and reconciliation of declared mass streams | normalization, output reconciliation, and loss checks |
