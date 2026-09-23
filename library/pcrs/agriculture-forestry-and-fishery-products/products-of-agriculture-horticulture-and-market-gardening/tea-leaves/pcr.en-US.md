---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tea-leaves
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.zh-CN.md
---

# Tea leaves and processed tea at the declared primary-processing gate

## 1. Scope and Applicability

This PCR covers managed cultivation of *Camellia sinensis*, plucking of tender shoots and leaves, green-leaf reception, named primary tea-processing routes, grading, storage, and hand-off of dry tea at a declared primary-processing gate. It is written for tea leaves classified as CPC 3.0 01620 and uses the verified platform product flow `Tea` as the reference identity for the processed tea hand-off.

The route alternatives are explicit rather than universal. Green tea uses enzyme inactivation or fixation, optional rolling or shaping, and drying; black tea uses withering, rolling or maceration, oxidation, and drying; oolong tea uses withering, tumbling or partial aeration, rolling, partial oxidation, and drying; white tea uses withering and drying without a required rolling or oxidation step; yellow tea uses enzyme inactivation, yellowing, and drying; dark tea uses enzyme inactivation, rolling, piling or post-fermentation, and drying. A dataset must select one named route for each lot.

This PCR excludes herbal or fruit infusions, tea beverages, extracts, concentrates, instant tea, scented or flavoured tea, decaffeination, consumer brewing, packaging presentation, retail, and downstream distribution. It does not select a residual or n.e.c. product category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tea-leaves |
| classification_refs | CPC 3.0: 01620 Tea leaves |
| covered_products | Named dry tea products made only from *Camellia sinensis*: green, black, oolong, white, yellow, and dark tea, with the selected primary-processing route disclosed |
| excluded_products | Herbal or fruit infusions; tea beverages; extracts; concentrates; instant tea; scented or flavoured tea; decaffeinated tea; consumer-prepared tea; packaged retail presentation |
| representative_product | Dry made tea from plucked *Camellia sinensis* shoots and leaves |
| production_route | Managed perennial tea plantation, plucking, green-leaf handling, route-specific primary processing, drying, grading, storage, and primary-processing gate hand-off |
| market_state | Dry, graded tea at the declared primary-processing gate, with tea type, moisture, grade, lot, route, and storage condition disclosed |

The verified platform identity is `Tea` rather than a farm-gate fresh-leaf flow. The PCR therefore keeps CPC 01620 as the coverage classification while declaring a processed-tea gate so that the platform identity and the methodology boundary are not silently conflated.

## 3. Reference Flow

### Functional unit

| Field | Value |
| --- | --- |
| What | Dry made tea delivered at the declared primary-processing gate |
| How much | 1 kg |
| How well | Named tea type; moisture and grade declared; produced only from *Camellia sinensis* leaves, buds, and shoots |
| How long or cycle | One complete tea production cycle and the reporting period covering plantation management, plucking, processing, grading, and gate storage |
| reference_flow_link | `Tea` `d16090ca-ddbe-4fd4-a498-fe4cab8bb525` |

### Reference flow object

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | *Camellia sinensis*; named tea type; dry made-tea condition; grade; moisture; lot or campaign; declared primary-processing gate; packaging excluded |

The platform `Tea` flow has no treatment-standard route or gate metadata. The declared PCR gate is therefore the post-primary-processing, post-grading, pre-packaging hand-off of dry tea. Fresh tea leaves, withered leaves, oxidized leaves, and process residues remain route-specific foreground states and are not assigned the finished-tea UUID merely because they share a product family.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | reference product and all dry-tea product states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference flow and product-state amounts on a mass basis; retain wet-basis or dry-basis moisture records separately. |
| `measurement_02` | fresh leaf, withered leaf, and dried tea conversion | Mass | kg fresh material and kg dry material | Record the actual state before conversion and calculate state-to-state yields from lot mass and moisture rather than applying an unreferenced universal factor. |
| `measurement_03` | fertilizer and crop-protection inputs | Mass of nutrient or formulated product | kg nutrient or kg product | Keep nutrient mass separate from formulated product mass and keep active ingredient or product identity in the foreground record. |
| `measurement_04` | water, fuel, and electricity | Volume, energy, or mass as supplied | L, m3, MJ, kWh, or kg | Preserve the supplied unit and convert only through a declared density, heating value, meter conversion, or supplier factor. |
| `measurement_05` | perennial plantation attribution | Mass and area-time | kg, m2, and m2·year | Link establishment, replacement, pruning, land occupation, and termination records to the production period and allocate them only once to the tea output. |

## 5. System Boundary

The foreground boundary starts with the managed tea plantation and its establishment or replacement records for the reporting period. It includes field inputs, land occupation, plantation maintenance, plucking, collection, green-leaf handling, selected primary-processing route, drying, grading, storage to the declared gate, process rejects, residues, direct emissions, wastewater where generated, and all allocation decisions required to reconcile the lot.

The boundary ends when dry, graded tea crosses the declared primary-processing gate before packaging presentation, retail, downstream distribution, consumer brewing, or beverage preparation. Background datasets for electricity, fuels, fertilizer products, crop-protection products, water supply, and treatment services are outside the foreground PCR boundary but are required when the foreground package uses them.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed *Camellia sinensis* plantation and the reported reporting-period inputs, land occupation, harvest records, or a documented upstream plantation dataset |
| starting_condition_role | The production context that supplies fresh tea shoots and leaves to the independent plucking and collection node |
| product_classification_scope | CPC 3.0: 01620 Tea leaves; named tea products from *Camellia sinensis* only |
| recursive_input_rule | If a same-category tea product is supplied as an input to a later tea route, record it as an upstream tea dataset with its gate and quality state; do not recursively include its plantation or primary-processing burdens inside the receiving lot |
| upstream_dataset_requirement | Use an upstream dataset when plantation, fresh-leaf supply, or a pre-processed tea intermediate is outside the foreground operator's reporting boundary; disclose UUID, route, gate, geography, period, and quality state |
| disclosure | Declare tea type, route, plantation phase, fresh-leaf or dry-tea basis, grade, moisture, rejected fraction, residue destination, storage duration, and whether packaging is excluded |

### Boundary Rules

| rule_id | applies_to | source_ids | rule |
| --- | --- | --- | --- |
| `boundary_01` | plantation_to_gate | `iso-20715-2023-tea-classification`; `iso-14044-2006` | Include the managed plantation, plucking, selected primary-processing route, drying, grading, and gate storage needed to produce the declared dry tea reference flow. |
| `boundary_02` | route_selection | `iso-20715-2023-tea-classification`; `fao-tea-processing-manual` | Select one named tea route per lot and include only the route states that occur; do not count withering, oxidation, rolling, or yellowing when the selected route does not use that state. |
| `boundary_03` | gate_definition | `iso-14044-2006` | The declared gate is after primary processing, drying, grading, and included storage, and before packaging presentation, retail, downstream distribution, consumer brewing, or beverage preparation. |
| `boundary_04` | recursive_same_category_input | `mass-balance-identity` | Same-category upstream tea input is a declared dataset input and must not be expanded recursively inside the receiving tea process. |
| `boundary_05` | direct_emissions_and_residues | `fao-tea-processing-manual`; `ipcc-2019-refinement-afolu` | Record direct field and processing emissions, wastewater, dust, residues, rejects, and their destinations when they cross the foreground boundary or are required for mass reconciliation. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tea_plantation_management` | Managed tea plantation management | `required` | Every tea lot requires a declared plantation source or upstream plantation dataset. | perennial biological production | per reporting period and 1 kg dry tea |
| `tea_plucking_collection` | Plucking and green-leaf collection | `required` | Every lot requires a harvest or plucking record and a green-leaf hand-off. | independent harvest and capture | kg fresh leaf collected |
| `tea_green_leaf_handling` | Green-leaf reception and primary conditioning | `required` | Include reception, temporary holding, cooling or ventilation, and the first raw-to-prepared hand-off. | primary conditioning | kg fresh leaf received and kg conditioned leaf |
| `tea_route_processing` | Route-specific tea processing and drying | `required` | Select exactly one named route: green, black, oolong, white, yellow, or dark tea. | material treatment and stabilization | kg dry tea output |
| `tea_grading_storage_gate` | Grading, storage, and primary-processing gate | `required` | Include grading and storage until the declared dry-tea gate; exclude packaging presentation. | grading, storage, and hand-off | 1 kg dry tea reference flow |

### Route alternatives

The alternative-production-route module is attached to the managed biological production parent only as a route topology overlay. It does not create separate PCR identities. The alternatives are mutually exclusive per lot and coexist across the category:

| route_id | selected route states | omitted states that must not be counted | route delta and hand-off |
| --- | --- | --- | --- |
| `green_tea_route` | fixation or enzyme inactivation; optional rolling or shaping; drying | oxidation and piling are not counted unless documented as a separate process | dry green tea crosses to grading after drying |
| `black_tea_route` | withering; rolling or maceration; oxidation; drying | fixation as a green-tea step is not counted | dry black tea crosses to grading after drying |
| `oolong_tea_route` | withering; tumbling or partial aeration; rolling; partial oxidation; drying | full black-tea oxidation and green-tea fixation are not counted | dry oolong tea crosses to grading after drying |
| `white_tea_route` | harvesting; withering; drying | rolling, full oxidation, and fixation are not counted | dry white tea crosses to grading after drying |
| `yellow_tea_route` | fixation; yellowing; drying | black-tea oxidation is not counted | dry yellow tea crosses to grading after drying |
| `dark_tea_route` | fixation; rolling; piling or post-fermentation; drying | the black-tea oxidation state is not counted as a substitute for piling or post-fermentation | dry dark tea crosses to grading after drying |

### Process: Managed tea plantation management (`tea_plantation_management`)

#### Inputs

##### Product flows

###### Tea planting material and replacement stock (`tea_planting_material`)

Record seed, cuttings, nursery plants, or replacement planting stock used to establish or replace the managed tea plantation. Do not apply this input to mature plantation periods unless a replacement event is recorded.

- Selected flow: Tea planting material (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured planting material by establishment or replacement event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting period and converted to 1 kg dry tea
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional planting-stock screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg planting material/kg dry tea
  - Basis: reporting-period replacement and establishment burden normalized to dry tea
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`tea_plantation_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting period and converted to 1 kg dry tea
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources:
- Range: Provisional nitrogen-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.40
  - Unit: kg N/kg dry tea
  - Basis: broad plantation nutrient input screen; replace with field records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus and potassium screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.60
  - Unit: kg combined P and K nutrient/kg dry tea
  - Basis: broad plantation nutrient input screen; retain separate P and K records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulation (`tea_crop_protection_input`)

Record each named crop-protection product, active ingredient where available, application event, and treated area.

- Selected flow: Named crop-protection formulation (route-specific UUID unresolved)
- Flow property / unit: Mass of formulated product / kg
- Amount rule: measured product mass by application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treated area and converted to 1 kg dry tea
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional crop-protection product screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.03
  - Unit: kg formulated product/kg dry tea
  - Basis: broad first-pass screen; preserve named product identity for background linking
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation and field water (`tea_field_water_input`)

Record irrigation, fertigation carrier water, and other field water supplied within the plantation boundary. Rainfall is recorded as a site descriptor when relevant but is not treated as a purchased product input.

- Selected flow: Irrigation water (route-specific UUID unresolved)
- Flow property / unit: Volume / L
- Amount rule: metered or estimated field water by block and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting period and converted to 1 kg dry tea
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional field-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: L/kg dry tea
  - Basis: irrigation and fertigation carrier water; replace with meter or irrigation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Plantation fuel and electricity (`tea_plantation_energy_input`)

Record diesel, petrol, electricity, and other energy carriers used for irrigation, pruning, spraying, mowing, and field access.

- Selected flow: Plantation fuel and electricity (route-specific UUID unresolved)
- Flow property / unit: Energy / MJ or kWh
- Amount rule: measured fuel and electricity by field activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting period and converted to 1 kg dry tea
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional plantation-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: MJ/kg dry tea
  - Basis: field operation and irrigation energy before plucking
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Agricultural land occupation (`tea_land_occupation`)

Record land area, plantation phase, reporting period, and productive tea output used to allocate land occupation to the reference flow.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2·year
- Amount rule: measured managed area multiplied by the reporting period and allocated by declared tea output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: m2·year/kg dry tea
  - Basis: productive plantation area and reporting-period yield
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Managed tea shoots available for plucking (`tea_shoots_on_bush`)

Record the intended tender-shoot and leaf output from the managed plantation before the independent plucking node. The collected hand-off must be reconciled to harvested fresh leaf.

- Selected flow: Tender tea shoots and leaves (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated shoot output available to the plucking campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional fresh-shoot availability screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.0
  - Upper: 12.0
  - Unit: kg fresh shoots/kg dry tea
  - Basis: plantation output reconciled to the selected dry-tea route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pruned or removed plantation biomass (`tea_plantation_residue`)

Record prunings, removed branches, weeds, and non-product biomass separately from harvested tea shoots, including destination and any recovered use.

- Selected flow: Tea plantation biomass residue (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated residue mass by operation and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting period and converted to 1 kg dry tea
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: Provisional plantation-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3.0
  - Unit: kg residue/kg dry tea
  - Basis: pruning and removed biomass; record composting, field return, combustion, or disposal destination
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Plucking and green-leaf collection (`tea_plucking_collection`)

#### Inputs

##### Product flows

###### Tender tea shoots available for plucking (`tea_plucking_source`)

The plucking node receives the intended shoot state from the managed plantation and must record the collection campaign and hand-off to green-leaf handling.

- Selected flow: Tender tea shoots and leaves (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: mass of source shoots assigned to the plucking campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Fresh-shoot plucking input guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.0
  - Upper: 12.0
  - Unit: kg fresh shoots/kg dry tea
  - Basis: source-shoot mass reconciled to the dry-tea output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Plucking and collection energy (`tea_plucking_energy`)

Record hand-plucking services as foreground labour or equipment activity where material, and record machine fuel or electricity as supplied energy.

- Selected flow: Plucking and collection energy (route-specific UUID unresolved)
- Flow property / unit: Energy / MJ or kWh
- Amount rule: measured fuel or electricity for plucking, bins, and collection equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh leaf collected and converted to 1 kg dry tea
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional plucking-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: MJ/kg dry tea
  - Basis: plucking, loading, and field collection equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fresh tea leaves collected for processing (`tea_fresh_leaf_collected`)

The collected output is fresh *Camellia sinensis* leaf, bud, and shoot material transferred to green-leaf handling. It is not the finished `Tea` reference flow.

- Selected flow: Fresh tea leaves collected (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed fresh leaf at the receiving or collection hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Fresh-leaf-to-dry-tea input screen
  - Range role: Typical range (`typical_range`)
  - Lower: 3.0
  - Upper: 8.0
  - Unit: kg fresh leaf/kg dry tea
  - Basis: fresh leaf moisture and route yield; replace with lot mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-tea-processing-manual`; `mass-balance-identity`

##### Waste flows

###### Plucking loss and non-tea material (`tea_plucking_loss`)

Record dropped leaves, unsuitable shoots, foreign material, and field loss separately from the intended collected output and state the destination.

- Selected flow: Plucking loss and non-tea material (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled loss by plucking campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional plucking-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg loss/kg dry tea
  - Basis: dropped, rejected, or non-tea material at harvest
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Green-leaf reception and primary conditioning (`tea_green_leaf_handling`)

#### Inputs

##### Product flows

###### Fresh tea leaves received (`tea_green_leaf_input`)

The primary-conditioning node receives the raw collected state, confirms lot identity, records time from plucking to reception, and creates a prepared leaf state for the selected route.

- Selected flow: Fresh tea leaves collected (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed fresh leaf received by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_batch_records`
- Range: Fresh-leaf reception guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.0
  - Upper: 8.0
  - Unit: kg fresh leaf/kg dry tea
  - Basis: lot-level mass balance to dry made tea
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Green-leaf handling water (`tea_green_leaf_water`)

Record water used for cleaning, dust suppression, or conditioning only when it crosses the boundary. Dry handling with no water is a valid zero record.

- Selected flow: Green-leaf handling water (route-specific UUID unresolved)
- Flow property / unit: Volume / L
- Amount rule: metered or batch-estimated water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional green-leaf handling water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry tea
  - Basis: water crossing the handling boundary; dry handling may be zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared green leaf for route processing (`tea_prepared_leaf`)

This prepared intermediate is an intended process output state and is handed to the selected route. It must not be counted again as finished tea.

- Selected flow: Prepared green tea leaf (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed conditioned leaf after reception, cooling, ventilation, or temporary holding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: Prepared-leaf mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.8
  - Upper: 8.0
  - Unit: kg prepared leaf/kg dry tea
  - Basis: post-reception state before route-specific treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Green-leaf reception reject and handling loss (`tea_green_leaf_reject`)

Record damaged, overheated, contaminated, or otherwise rejected green leaf. State whether it is returned to field composting, routed to recovery, downgraded, or discarded.

- Selected flow: Green-leaf reception reject (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled reject mass by lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_destination_records`
- Range: Provisional green-leaf reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg reject/kg dry tea
  - Basis: incoming-lot rejection and handling loss
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Route-specific tea processing and drying (`tea_route_processing`)

#### Inputs

##### Product flows

###### Prepared green leaf entering the selected route (`tea_route_leaf_input`)

Record the prepared leaf state entering one and only one named route. The route is indexed by lot or campaign and the input must reconcile to the preceding hand-off.

- Selected flow: Prepared green tea leaf (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed route input by batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_batch_records`
- Range: Route-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.8
  - Upper: 8.0
  - Unit: kg prepared leaf/kg dry tea
  - Basis: selected route input reconciled to dry tea
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Route-specific tea processing residue and dust (`tea_processing_residue`)

Record leaf fragments, stems, dust, sweepings, sludge, and other residual states separately. A sold tea-grade fraction is an intended output, not waste; a discarded fraction requires a destination.

- Selected flow: Tea processing residue and dust (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: Provisional processing-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg residue/kg dry tea
  - Basis: leaf fragments, stems, dust, and treatment residuals
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct air emissions from thermal drying (`tea_drying_direct_emissions`)

Record reported pollutants and receiving media from fuel combustion or process drying. Do not replace a named pollutant with a broad unqualified emission category.

- Selected flow: Reported drying emissions by substance and receiving medium (UUID unresolved)
- Flow property / unit: Mass / kg substance
- Amount rule: measured stack or calculated emissions from fuel and process records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg reported substance/kg dry tea
  - Basis: substance-specific result or factor-based estimate; not a universal pollutant identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Withered leaf intermediate (`tea_withered_leaf`)

Use only for black, oolong, and white routes where withering is documented. Withered leaf is a prepared intermediate and is not an additional final product.

- Selected flow: Withered tea leaf (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed post-withering intermediate by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: Withered-leaf intermediate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.0
  - Upper: 6.5
  - Unit: kg withered leaf/kg dry tea
  - Basis: route-specific moisture loss and handling loss
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Enzyme-inactivated or fixed leaf intermediate (`tea_fixed_leaf`)

Use only for green, yellow, or dark routes where heat treatment or enzyme inactivation is documented. This is a route state, not the finished reference flow.

- Selected flow: Enzyme-inactivated tea leaf (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed post-fixation intermediate by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: Fixed-leaf intermediate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.5
  - Upper: 6.5
  - Unit: kg fixed leaf/kg dry tea
  - Basis: route-specific moisture and handling loss
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rolled, macerated, or shaped leaf intermediate (`tea_rolled_leaf`)

Use only when the selected named route includes rolling, maceration, shaping, or equivalent cell-disruption treatment. Do not add it to white tea unless the lot record documents a permitted additional treatment.

- Selected flow: Rolled, macerated, or shaped tea leaf (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed post-rolling or post-shaping intermediate by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: Rolled-leaf intermediate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.3
  - Upper: 5.5
  - Unit: kg rolled or shaped leaf/kg dry tea
  - Basis: route-specific pre-drying intermediate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Oxidized or partially oxidized leaf intermediate (`tea_oxidized_leaf`)

Use only for black and oolong routes where aeration or enzymatic oxidation is documented. Record the oxidation state and duration as batch metadata; do not call it fermentation unless the operational process is reported as such.

- Selected flow: Oxidized or partially oxidized tea leaf (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed post-oxidation intermediate by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: Oxidized-leaf intermediate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.2
  - Upper: 5.0
  - Unit: kg oxidized leaf/kg dry tea
  - Basis: route-specific pre-drying intermediate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dry made tea before grading (`tea_dried_made_tea`)

The drying output is the stabilized usable state handed to grading. The fixed platform `Tea` identity is applied only to this dry product state and later gate output.

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed dry made tea after the final drying step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_batch_records`
- Sources: `iso-20715-2023-tea-classification`
- Range: Dry-made-tea moisture and yield guardrail
  - Range role: Typical range (`typical_range`)
  - Lower: 0.15
  - Upper: 0.40
  - Unit: kg dry made tea/kg fresh leaf
  - Basis: lot-level dry output yield; moisture recorded separately
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-tea-processing-manual`

##### Waste flows

###### Processing and drying loss (`tea_processing_loss`)

Record mass lost through handling, dust, trim, evaporation beyond the measured moisture change, or rejected material, and link each fraction to rework, recovery, composting, energy recovery, or disposal.

- Selected flow: Tea processing and drying loss (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: mass balance difference after accounting for intermediates, product outputs, and residues
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: Processing-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg loss/kg dry tea
  - Basis: mass balance after measured moisture and declared residues
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Grading, storage, and primary-processing gate (`tea_grading_storage_gate`)

Storage duration is a lot-level process parameter, not a flow exchange. Calculate it from storage start and end records under `cp_quality_and_storage_records`; retain storage condition and lot status, and use 0–180 days as a provisional QA screen only for storage before the declared gate.

#### Inputs

##### Product flows

###### Dry made tea received for grading (`tea_grading_input`)

The grading node receives the stabilized dry product and classifies it into declared grade or destination states. It is separate from primary processing because the grade states and hand-offs are independent outputs.

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed dry tea received by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_storage_records`
- Range: Grading input reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg graded input/kg dry tea reference flow
  - Basis: receiving-to-grade mass reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Grading electricity and screening energy (`tea_grading_energy`)

Record electricity or fuel used for screening, sorting, sieving, and quality classification.

- Selected flow: Grading and screening energy (route-specific UUID unresolved)
- Flow property / unit: Energy / MJ or kWh
- Amount rule: meter or batch allocation to the graded tea lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry tea
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional grading-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: MJ/kg dry tea
  - Basis: screening, sorting, and grading services
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted primary tea grade at gate (`tea_primary_grade_output`)

This is an intended output state. The final gate output must carry the selected tea type, grade, moisture, lot, route, and storage condition.

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted grade output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry tea reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_storage_records`
- Sources: `iso-20715-2023-tea-classification`
- Range: Accepted-grade output reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.60
  - Upper: 1.00
  - Unit: kg accepted tea/kg graded input
  - Basis: grade-dependent accepted fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marketable secondary tea grade (`tea_secondary_grade_output`)

This is an intended output state when it is sold or transferred as tea. Record the second tea-grade or destination state with its own hand-off; it must not be silently treated as waste.

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed secondary marketable tea output by grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry tea reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_storage_records`
- Range: Secondary-grade output screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.40
  - Unit: kg secondary tea/kg graded input
  - Basis: independently weighed marketable secondary grade
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered tea dust or small-particle tea product (`tea_recovered_fraction_output`)

This is an intended output state only when it is sold or transferred as tea. Otherwise route it through the residue or reject card with its destination and burden treatment.

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed recovered tea fraction by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry tea reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: Recovered tea-fraction screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg recovered tea product/kg graded input
  - Basis: only the fraction with a declared tea-product hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dry tea gate output (`tea_gate_output`)

This is the single reference-flow hand-off used for downstream LCA modelling. It is the post-grading dry tea amount after accounting for any declared secondary grades, recovered tea product, rejects, and storage losses.

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: accepted dry tea crossing the declared gate, normalized to 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry tea reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality_and_storage_records`
- Sources: `mass-balance-identity`
- Range: Gate-output mass-balance acceptance range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg gate output/kg reference flow
  - Basis: final normalized reference-flow reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Off-spec tea, rejects, and storage loss (`tea_reject_or_storage_loss`)

Identify every rejected or off-spec state and declare whether it is reworked, downgraded, recovered, returned to an upstream route, composted, used for energy recovery, or discarded. Do not count unresolved rejects as accepted tea output.

- Selected flow: Off-spec tea and storage loss (route-specific UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected, downgraded, damaged, or lost material by lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry tea reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: Off-spec and storage-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg rejected or lost tea/kg graded input
  - Basis: grading rejects, handling loss, and storage loss before gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Storage dust and reported warehouse emissions (`tea_storage_emissions`)

Record dust, ventilation, and any reported emissions caused by dry-tea storage. Use named substances and receiving media when a measurement or factor is available.

- Selected flow: Reported storage dust or emission by substance and medium (UUID unresolved)
- Flow property / unit: Mass / kg substance
- Amount rule: measured or calculated emissions allocated to storage duration and lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry tea reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Range: Provisional storage-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg reported substance/kg dry tea
  - Basis: storage ventilation and dust records; substance-specific reporting required
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | source_ids | rule |
| --- | --- | --- | --- |
| `allocation_01` | plantation_phase | `iso-14044-2006`; `ipcc-2019-refinement-afolu` | Attribute perennial establishment, replacement, land occupation, and plantation management to the reporting-period tea output using the declared period and output basis; do not allocate the same phase burden again at processing. |
| `allocation_02` | route_batch | `iso-14044-2006`; `mass-balance-identity` | Index inputs, outputs, cleaning, drying, changeover, and rejects by route, batch, campaign, or reporting period so shared runs cannot be counted twice. |
| `allocation_03` | marketable_tea_outputs | `iso-14044-2006` | Enumerate the accepted primary grade, marketable secondary grade, and recovered tea fraction when each is an intended tea output. Decision: use subdivision and direct measurement first; when outputs are physically inseparable, use allocation by measured dry tea mass as the default fallback, and disclose any economic allocation only as a documented sensitivity. Apply one method consistently to the affected process. |
| `allocation_04` | residues_and_rejects | `iso-14044-2006`; `mass-balance-identity` | A residue is not a co-product merely because it has a possible use. Treat it as an intended output only when there is a declared hand-off, destination, and product-quality record; otherwise retain the producing process burden and route it as residue or waste. |
| `allocation_05` | route_alternatives | `iso-20715-2023-tea-classification` | Green, black, oolong, white, yellow, and dark routes are mutually exclusive per lot. Do not combine route burdens or assign oxidation, rolling, withering, fixation, or piling to a lot without route evidence. |
| `allocation_06` | multi_period_attribution | `iso-14044-2006`; `ipcc-2019-refinement-afolu` | Link establishment, replacement, pruning, termination, inputs, outputs, and storage events to a reporting period or phase and prevent double attribution across periods. |
| `allocation_07` | rework_and_rejects | `mass-balance-identity` | Rework loops, downgrades, recovery, and boundary exits must link back to the producing node; accepted tea output excludes unresolved rejects and rejected material cannot be counted at two hand-offs. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `tea_plantation_management`; `tea_plucking_collection`; `tea_green_leaf_handling`; `tea_grading_storage_gate` | plantation area and phase; field inputs; water; energy; land occupation | field register, invoice, application record, meter, GIS, and activity log | area; phase; cultivar; input_product; amount; nutrient_content; water; fuel; electricity; date; operation; reporting_period | reconcile physical inputs and operations to each block, activity, and crop cycle | m2; m2·year; kg; L; MJ; kWh; date | each event and annual reporting period | establishment, replacement, productive crop cycle, harvest campaign, and reporting period | all included plantation blocks and associated pre-gate activities | sum by physical identity, block, activity, and period; calculate nutrient mass without merging products | invoices; labels; calibrated meters; field logs; GIS or block register |
| `cp_harvest_output_records` | `tea_plantation_management`; `tea_plucking_collection` | shoots; fresh leaf; harvested mass; harvest loss; receiving hand-off | weigh ticket, plucking register, yield record, and green-leaf receiving log | block; cultivar; plucking_date; shoot_standard; fresh_mass; harvest_loss; receiving_time; lot_id | reconcile harvested and received mass to the plucking lot and dry-tea route | kg; date-time; lot identifier | every plucking lot and hand-off | complete crop cycle and harvest campaign | all harvested lots entering a selected route | preserve one-to-one plantation-to-green-leaf linkage and close harvested mass = received mass + loss | calibrated scale; lot log; receiving record; moisture or quality record |
| `cp_processing_batch_records` | `tea_green_leaf_handling`; `tea_route_processing` | green leaf; route intermediates; dry made tea; processing residues; utility inputs | batch sheet, scale, moisture test, process log, utility meter, and fuel record | route; batch_id; input_state; intermediate_state; process_step; moisture; output; loss; fuel; electricity; water; operating_condition | reconcile each batch, route state, utility reading, moisture result, and mass balance | kg; %; h; °C; L; MJ; kWh | every batch or campaign | reception through selected primary-processing route and drying | every selected route, batch, and processing facility within the gate | aggregate only after route, batch, utility, and mass reconciliation | calibrated scale and moisture meter; batch sheet; meter reconciliation; route log |
| `cp_quality_and_storage_records` | `tea_grading_storage_gate` | accepted grade; secondary grade; recovered tea product; rejects; storage; gate output | grading log, sieve record, scale, warehouse log, and quality record | grade; destination; accepted_mass; secondary_mass; recovered_mass; reject_mass; storage_start; storage_end; condition; loss; gate_date | enumerate every grade and destination, then reconcile storage duration, loss, and gate hand-off | kg; grade; day; temperature; humidity; date | every graded or stored lot | post-drying grading through the declared gate | all output destinations and storage included before the declared gate | enumerate intended outputs and rejects; aggregate duration and quality by lot; exclude downstream logistics | calibrated scale; sieve or grading record; warehouse log; gate release record |
| `cp_residue_destination_records` | `tea_plantation_management`; `tea_plucking_collection`; `tea_green_leaf_handling`; `tea_route_processing`; `tea_grading_storage_gate` | pruning residue; harvest loss; process residue; reject; rework; recovery; disposal | residue log, waste transfer record, recovery invoice, and rework log | residue_state; amount; destination; recovery; rework; compost; disposal; producing_process; lot_id | link every residue or reject to its producing process and final destination | kg; destination; lot identifier | every batch, operation, or disposition event | crop cycle, harvest campaign, route batch, grading, and storage periods | all residue, reject, rework, and recovered-fraction destinations within the gate | retain producing process and final disposition; do not double-count material returned or recovered | residue ledger; transfer note; recovery invoice; rework record; destination evidence |
| `cp_emission_records` | `tea_plantation_management`; `tea_green_leaf_handling`; `tea_route_processing`; `tea_grading_storage_gate` | named emissions to air, water, or soil; storage dust; treatment outputs | measurement record, factor calculation, treatment log, and emission record | substance; medium; source; factor; measurement; treatment; reporting_period; lot_id | report measured or calculated emissions with the named substance, medium, source, and method | kg substance | each event or reporting-period calculation | field operations, processing, drying, grading, and included storage | all field and processing emission sources within the declared boundary | aggregate by substance, medium, source, lot, and period; do not use broad unspecified categories | measurement record; factor provenance; treatment log; model version; QA review |

### Calculation rules

| rule_id | Inputs | Calculation |
| --- | --- | --- |
| `calc_01` | fresh leaf mass, moisture, dry tea mass | Calculate route yield as dry tea mass divided by fresh leaf mass and retain both wet-basis and dry-basis moisture records. |
| `calc_02` | area, period, plantation phase, output | Allocate area-time and phase burdens to the declared tea output for the reporting period without double attribution across establishment, replacement, and productive phases. |
| `calc_03` | nutrient product records and nutrient content | Convert formulated fertilizer products to nutrient mass for N, P, and K records while preserving product identity for background datasets. |
| `calc_04` | batch inputs, intermediates, outputs, residues, losses | Reconcile each batch by mass balance; unresolved difference is a validation finding and cannot be silently assigned to accepted tea. |
| `calc_05` | grade outputs and destinations | Classify primary grade, secondary grade, recovered tea product, residue, reject, rework, and disposal according to the declared hand-off. |
| `calc_06` | route, batch, energy, changeover, storage period | Allocate shared services to route and period records using the documented operational basis; prevent shared-run burdens from appearing in more than one product system. |

### Data quality requirements

| rule_id | Requirement |
| --- | --- |
| `quality_01` | Confirm *Camellia sinensis*, named tea type, route, lot, grade, moisture basis, and declared gate for every reference-flow dataset. |
| `quality_02` | Prefer measured weights, meter records, invoices, batch sheets, and named input records; mark modelled values and provisional ranges explicitly. |
| `quality_03` | Cover all included plantation blocks, plucking lots, processing batches, grades, residues, rejects, storage periods, and route changes in the reporting period. |
| `quality_04` | Use the same mass basis and unit conversions across fresh leaf, intermediates, dry tea, residues, and rejects; document density, heating value, or meter conversion where used. |
| `quality_05` | Disclose route-specific omissions, zero inputs, unresolved identities, upstream datasets, and all material exclusions from the gate. |
| `quality_06` | Replace provisional reasoned ranges with site records or source-backed evidence before a final reviewed or published dataset is issued. |

## 9. Validation Rules

| rule_id | applies_to | source_ids | rule |
| --- | --- | --- | --- |
| `validation_01` | identity | `iso-20715-2023-tea-classification` | The dataset must identify *Camellia sinensis*, one named tea type, one route, the dry-tea state, and the declared primary-processing gate. |
| `validation_02` | reference_flow | `mass-balance-identity` | The reference output must use `Tea` `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66`, and 1 kg unless a reviewed identity correction is issued. |
| `validation_03` | route_completeness | `iso-20715-2023-tea-classification`; `fao-tea-chain-processing` | Exactly one named route must be selected. Every included route state must have a preceding input, a following hand-off, and a recorded output or loss; inapplicable states must not be counted. |
| `validation_04` | plantation_and_harvest | `ipcc-2019-refinement-afolu` | Plantation phase, management inputs, plucking source, fresh-leaf output, and harvest loss must be linked to the same reporting period and lot or an identified upstream dataset. |
| `validation_05` | batch_and_changeover | `mass-balance-identity` | Batch, campaign, or continuous-run boundaries must link inputs, outputs, cleaning, changeover, yield, and shared services; no shared-run burden may be counted twice. |
| `validation_06` | outputs_and_allocation | `iso-14044-2006` | Every intended output and hand-off must be enumerated. Marketable secondary tea is separated from residue; one output cannot be counted at two hand-offs. |
| `validation_07` | rejects_and_rework | `mass-balance-identity` | Every rejected or off-spec state must have a rework, downgrade, recovery, disposal, or boundary-exit path. Accepted output excludes unresolved rejects. |
| `validation_08` | mass_balance | `mass-balance-identity` | Fresh leaf, route intermediates, dry tea, grade outputs, residues, rejects, storage losses, and declared evaporation or moisture changes must reconcile within the documented tolerance. |
| `validation_09` | data_quality | `iso-14044-2006` | Missing material records, unresolved route selection, missing gate qualifiers, unsupported range substitutions, and unexplained mass-balance differences are findings that block reviewed or published use. |
| `validation_10` | period_attribution | `ipcc-2019-refinement-afolu`; `iso-14044-2006` | Establishment, replacement, productive phase, termination, inputs, outputs, and storage events must be linked to periods and must not be attributed twice. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for a foreground tea production package that has passed identity, route, mass-balance, and data-quality validation |
| downstream_use | Construction of tea-related LCA process and lifecyclemodel projections at the declared primary-processing gate |
| allowed_use | Named tea type and route matching the declared gate, geography, reporting period, grade, moisture basis, and included plantation-to-gate scope |
| excluded_use | Herbal or fruit infusions, tea beverages, extracts, concentrates, instant tea, scented or flavoured tea, decaffeination, consumer brewing, packaging presentation, retail, or downstream logistics |
| required_metadata | Reference flow UUIDs; tea type; route; gate; geography; plantation phase; period; lot or campaign; fresh-leaf and dry-tea basis; moisture; grade; residue destinations; reject treatment; storage duration; background dataset links |
| required_quality_disclosure | Measured versus calculated values; provisional ranges; route coverage; plantation and harvest coverage; mass-balance tolerance; unresolved identities; exclusions; allocation method |
| update_trigger | Change in route, grade system, gate, plantation phase, input formulation, processing technology, storage practice, background identity, or evidence-backed range |

## 11. Data Sources

| source_id | title | type | reference | used_for |
| --- | --- | --- | --- | --- |
| `iso-20715-2023-tea-classification` | ISO 20715:2023 Tea — Classification of tea types | `standard` | https://www.iso.org/standard/75419.html | named tea types, route states, and product identity |
| `iso-11287-2011-green-tea` | ISO 11287:2011 Green tea — Definition and basic requirements | `standard` | https://www.iso.org/standard/51540.html | green-tea route and scope exclusion for further processing |
| `iso-3720-2011-black-tea` | ISO 3720:2011 Black tea — Definition and basic requirements | `standard` | https://www.iso.org/standard/51541.html | black-tea route and product identity |
| `fao-tea-processing-manual` | FAO Manual on the Submission and Evaluation of Pesticide Residues Data, tea processing section | `handbook` | https://www.fao.org/fileadmin/templates/agphome/documents/Pests_Pesticides/JMPR/Manual/FAO_manual_3rd_edition_Final.pdf | fresh-leaf moisture, dry-tea state, and processing sequence evidence |
| `fao-tea-chain-processing` | Agroindustrial system model of the Argentine tea chain | `official_guidance` | https://www.fao.org/fileadmin/templates/est/meetings/IGGtea21/Presentation-MarketReportArgentina.pdf | harvest, withering, rolling, oxidation, drying, classification, and packing decomposition |
| `agris-black-tea-processing-2017` | Effect of rolling methods and storage on volatile constituents of Turkish black tea | `literature` | https://doi.org/10.1002/ffj.3385 | black-tea processing sequence and storage relevance |
| `ipcc-2019-refinement-afolu` | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, AFOLU | `method_factor` | https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | perennial production phase, direct emissions, and attribution context |
| `iso-14044-2006` | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | `standard` | https://committee.iso.org/standard/38498.html | boundary, allocation, data quality, and validation rules |
| `mass-balance-identity` | Conservation-of-mass identity for lot reconciliation | `method_factor` | Method identity: incoming mass = intended outputs + residues + rejects + declared losses | mass-balance calculations and validation |
