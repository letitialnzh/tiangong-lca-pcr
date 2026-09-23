---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pulses-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Pulses, n.e.c.

## 1. Scope and Applicability

This PCR covers a single declared species or crop type of dried leguminous pulse seed that falls in CPC 3.0 class 01709 and is not classified in a more specific pulse subclass. It defines a farm or primary-conditioning data package from the identified field before the crop season through production, harvest, threshing or shelling, drying when required, cleaning, grading, and the first market-ready farm or primary-conditioning handoff. On-farm storage is conditional: include it only when the declared product handoff occurs after that storage period.

The dataset represents one crop species, cultivar or seed lot, field-season, production geography, and declared commercial output grade. The output is a mature, dry, threshed or shelled, cleaned pulse seed; disclose measured moisture on a stated basis, grade, intended market, and gate. Rainfed and irrigated cultivation, manual and mechanized operations, and sun, solar-dryer, or powered drying are recorded as actual route choices. They are not averaged as one route unless their separate inputs and outputs are retained.

Exclude fresh green pulses harvested immature for vegetable use; pulses covered by a more specific CPC class; seed sold for sowing; processed, milled, cooked, canned, or retail-packed foods; post-farm transport and processing; and land conversion unless a separately declared land-use method requires it. Do not infer a fertilizer rate, crop-protection dose, yield, loss, or emission factor from the CPC leaf. Foreground records and an identified regional method determine those quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pulses-n-e-c |
| classification_refs | CPC 3.0:01709, exact; CPC 2.1 correspondence: 01709; HS 2012/2017 correspondence: 071390 |
| covered_products | Dried seeds of annual leguminous pulse crops assigned to CPC 01709 and not covered by a more specific pulse subclass; one declared species/crop type per dataset |
| excluded_products | Specifically classified pulses; fresh green or immature leguminous vegetables; planting seed sold as seed; pulse flour, split or otherwise processed pulses, cooked foods, and retail-packed products |
| representative_product | One species-identified, mature, dry, threshed or shelled, cleaned and graded pulse seed lot at its declared farm or primary-conditioning handoff |
| production_route | Managed field production for one crop season, followed by harvest and species-appropriate threshing/shelling, drying as needed, cleaning and sorting; actual field and post-harvest technology choices are declared |
| market_state | Dry pulse seed at the declared grade and moisture content, ready for the first farm or primary-conditioning handoff; identify whether it is sold, retained, or stored |

## 3. Reference Flow

The functional unit is 1,000 kg of one declared pulse species/crop type, at the first market-ready farm or primary-conditioning handoff. The dataset declares cultivar or seed lot, crop year, location, product grade, moisture content and wet- or dry-basis convention, and whether the gate is before or after on-farm storage. This basis allows field-season inputs and losses to be normalized without treating unlike pulse species or grades as one physical product.

| Field | Value |
| --- | --- |
| What | Dry, threshed or shelled, cleaned and graded pulse seed in one declared species/crop type and grade |
| How much | 1,000 kg net reference product at the declared gate |
| How well | Mature pulse seed meeting the dataset's declared grade and moisture specification; report moisture basis and measured value |
| How long or cycle | One crop season and its associated harvest and post-harvest conditioning; disclose any included storage duration |
| reference_flow_link | reference_pulse_seed |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Pulses, n.e.c.; dry cleaned pulse seed at the declared gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Unresolved; no verified support row is available |
| Reference unit | kg |
| Required qualifiers | species or crop type; cultivar or seed lot; crop year; production geography; output grade; moisture value and basis; farm or primary-conditioning gate; storage included or excluded and duration |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net pulse seed mass at the declared handoff. Exclude containers and separately measured foreign matter; disclose the product's moisture value and basis. |
| `moisture_basis` | pulse seed before and after drying or storage | Moisture content | % wet basis, unless a source method explicitly requires dry basis | Record the measurement method, sample date, and wet- or dry-basis convention. Convert before comparing values; do not treat the FAO regional storage guidance as a universal product specification. |
| `field_area` | cultivation and yield records | Area | ha | Use the measured crop area assigned to the reported field-season. Keep intercropped area and any allocation basis explicit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified farm field or plot immediately before field preparation and sowing for one declared crop season |
| starting_condition_role | Foreground field-season boundary; report location, area, prior crop or land use, soil context, crop species, cultivar or seed lot, and production regime |
| product_classification_scope | One CPC 3.0:01709 product type; species assigned to a more specific CPC pulse class are outside this PCR |
| recursive_input_rule | Sowing seed is a product input. If it is the same physical pulse category, use an upstream seed-production dataset or model that seed lot separately; do not recursively reuse the current crop output as its own seed input. |
| upstream_dataset_requirement | Link purchased seed, actual nutrient products, crop-protection products, supplied irrigation water, and energy carriers to appropriate upstream datasets when available. Identify missing background data. |
| disclosure | Declare the field-season, prior crop/land state, species and cultivar, water regime, inputs, harvest and conditioning route, output grade, moisture and basis, handoff, and any included storage period. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | cultivation through first product handoff | Include field operations and crop management assigned to the declared crop season, followed by harvest and the conditioning steps required to reach the stated dry pulse output. Include field preparation where it occurs within the declared crop campaign. | `fao-pulse-postharvest-2020` |
| `boundary_first_handoff` | farm or primary-conditioning gate | End the default boundary at the first farm or primary-conditioning handoff of dry, threshed/shelled, cleaned and graded pulse seed. Exclude later distribution and food processing. | `unsd-cpc21-01709` |
| `boundary_optional_storage` | on-farm storage | Include storage only when the declared handoff is after storage. Record the storage interval, facility and container, energy and treatment use, condition monitoring, and measured loss. | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `boundary_same_category_seed` | sowing seed input | Record the seed lot as a product input and link its upstream production where available. Do not count it as current-season output or recursively apply this same output dataset to the seed input. |  |
| `boundary_land_history` | land and field history | Disclose prior land use and any land conversion. Include conversion burdens only under an identified applicable land-use method and declared time period; do not invent an allocation period. |  |

### Route Variants

The managed biological production process is the parent route. The actual field-season may be rainfed or irrigated, and establishment or field operations may be manual, mechanized, or mixed. Record a separate route case only when it changes the process topology, inventory categories, calculations, collection needs, or validation. Rainfed and irrigation strategies are mutually exclusive descriptions for the same water event, although supplementary irrigation may occur within a primarily rainfed season; retain the measured events instead of forcing a binary label. Variants on different lots or fields may coexist in one reporting organization only when each field-season remains identifiable.

The harvest and conditioning parent route includes harvest, threshing/shelling, drying when needed, and cleaning/sorting. Manual versus mechanized threshing changes recorded service and energy inputs. Sun drying, solar-assisted drying, and powered drying change the drying equipment, batch records, and energy inputs; these methods may be sequential on the same lot, so record each stage that actually occurs. FAO describes sun drying and renewable, fossil-fuel, or electricity-powered drying options for pulses; do not infer that every lot uses all of them.

### Boundary Rules Continued

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_parent` | alternative field production | Attach a claimed production variant to the managed biological production parent and report the changed topology, inventory, calculation, collection, or validation requirement. Use the actual field-season records; a route label alone is insufficient. | `fao-pulse-postharvest-2020` |
| `boundary_technology_parent` | alternative harvest and conditioning technology | Attach manual, mechanical, sun, solar-assisted, or powered operations to the relevant parent process and report each actual change in inputs and process data. Declare when technologies are sequential or mutually exclusive for a batch. | `fao-pulse-postharvest-2020`; `fao-postharvest-system-1994` |

## 6. Process Inventory Structure

Inventory rows represent exchanges crossing each named unit-process boundary. Product and waste amounts are collected for actual lots and normalized to the functional unit. Elementary emissions are quantified only from measured foreground data or a named crop- and region-appropriate method; do not infer emission UUIDs or factors from a generic crop label.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pulse_cultivation` | Managed pulse crop production | required | One identified field-season through crop maturity | Managed biological production | field area and crop-season inputs per 1,000 kg accepted reference product |
| `pulse_harvest` | Pulse crop harvest and collection | required | Separate collection from the standing crop | Harvest and capture | harvested crop mass and harvest losses per crop-season |
| `pulse_threshing` | Threshing or shelling | required | Separate removal of seed from pods or plant material | Material treatment | incoming crop mass, recovered pulse seed, residues and rejects |
| `pulse_conditioning` | Primary drying and cleaning | required | Include drying when needed and the first cleaning/preparation handoff | Primary conditioning | wet/dry seed mass and moisture before and after conditioning |
| `pulse_grading` | Grading and sorting | conditional | Include where incoming pulse seed is sorted into two or more declared grades or destinations | Grading and sorting | mass by accepted grade, downgraded output, rejected output and handoff |
| `pulse_storage` | On-farm pulse storage | conditional | Include only when the declared reference handoff follows on-farm storage | Preservation and stabilization | storage duration, entry/exit mass and quality, energy, treatments and loss |

### Process: Managed pulse crop production (`pulse_cultivation`)

#### Inputs

##### Product flows

###### Sowing seed for the declared pulse crop (`planting_seed`)

Record seed used to establish this crop-season, including species, cultivar or local variety, seed-lot origin, treatment, and seeding method. The physical seed identity varies by declared crop and is resolved from foreground lot records.

- Selected flow: Pulse seed for sowing, crop-specific
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured seed applied to the declared field-season; separately identify seed retained from the prior crop and purchased seed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_establishment`
- Sources:
- Range: Provisional broad screening estimate; replace with crop-specific sowing and yield records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.50
  - Unit: kg seed/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient inputs (`consolidated_crop_nutrients`)

This is the sole nutrient card for this process. Record every applied mineral fertilizer, organic fertilizer, inoculated nutrient-bearing amendment, and other nutrient supply in this card, preserving each actual product, amount, formulation, nutrient content, application event, and field. Compound products are counted once by product mass and their nutrient composition is recorded separately.

- Selected flow: Consolidated fertilizer and nutrient supply used for pulse cultivation
- Flow property / unit: Product-specific property and unit from each foreground supply record
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: itemize actual products and report both product quantities and nutrient content; use zero only when no such input was applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_establishment`
- Sources:
- Range: Very broad provisional screening interval for total as-applied nutrient products; replace with field-season quantities and nutrient analyses, and do not interpret as a target or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg as-applied fertilizer and nutrient products/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff; convert volume records only with documented product density
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied irrigation water (`supplied_irrigation_water`)

Use this card only for water supplied as a product input, such as purchased or externally conveyed irrigation water. Do not use it for water directly abstracted by the farm from a surface-water or groundwater source; report such abstraction separately as an elementary resource input with the source location and method-supported identity.

- Selected flow: Irrigation water supplied to the pulse crop
- Flow property / unit: Volume or mass / m3 or kg, as supported by the selected set exchange
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or supplier-recorded supplied water for the crop-season; zero for rainfed lots with no supplied irrigation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_establishment`
- Sources:
- Range: Provisional broad screening interval for supplied irrigation; not applicable to rainfed production and not a water-allocation limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-production energy carriers (`cultivation_energy`)

Record fuel and electricity actually used for field preparation, sowing, crop care, pumping and other included cultivation operations. Keep each carrier as a distinct concrete foreground exchange and retain meter, fuel, equipment, and process attribution. This conditional card is parameterized at set level because the actual energy carrier is determined by farm records.

- Selected flow: Energy carriers used by pulse cultivation operations
- Flow property / unit: Carrier-specific property and unit supported by foreground records
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record each carrier in its compatible meter or supplier unit; do not combine unlike carriers before exchange generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_establishment`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg reference product
  - Basis: per kg dry cleaned pulse seed; convert every carrier separately before summing energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection and seed-treatment products (`crop_protection_products`)

Use this conditional card for seed treatment, inoculant, pesticide, or other crop-protection products actually applied. At data production, create a separate concrete exchange for each recorded product and disclose active ingredient, formulation, amount, target, application event, and use. Do not treat unrecorded or unused products as inputs.

- Selected flow: Crop-protection or seed-treatment product, actual identity to be resolved from use records
- Flow property / unit: Product-specific property / kg or L as supported by the product identity
- Amount rule: measured amount applied to the field-season, itemized by product and active ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_establishment`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg product/kg reference product
  - Basis: per kg dry cleaned pulse seed; retain each formulation and active ingredient
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows
###### Direct irrigation-water resource withdrawal (`direct_water_withdrawal`)

Use this conditional resource-input card only for water abstracted directly by the farm from a surface-water or groundwater source. Identify the source and location, permit or meter record, use event, and watershed. Do not include rainfall or water already represented as a supplied product input, and do not combine direct abstraction with supplied water into one exchange.

- Selected flow: Surface-water or groundwater resource withdrawn for pulse cultivation; resolve the source-specific elementary identity
- Flow property / unit: Volume / m3
- Amount rule: measured direct abstraction for the crop-season, by source; record zero where there is no direct abstraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_establishment`
- Sources:
- Range: Very broad provisional screening interval for direct irrigation withdrawal; use source- and field-season records and do not add it to supplied-water quantities from the same physical source
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct soil nitrous oxide to air (`field_n2o_to_air`)

Report only when direct field N2O is quantified by the selected applicable crop or national inventory method. Preserve the method's required nitrogen inputs, residue terms, boundary, and reporting basis; do not substitute a generic pulse factor.

- Selected flow: Nitrous oxide, direct field emission to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the declared emission method and its crop-season input records; leave absent where the selected method does not report this exchange
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emissions`
- Sources: `fao-pulse-postharvest-2020`


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg N2O/kg reference product
  - Basis: per kg dry cleaned pulse seed; use only the declared applicable inventory method
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate-nitrogen loss to water (`nitrate_n_to_water`)

Report nitrate-N loss to the receiving water compartment only when supported by the declared field monitoring or nutrient-loss method. Keep nitrate mass and nitrate-nitrogen mass distinct and identify receiving medium, watershed, and calculation method.

- Selected flow: Nitrate nitrogen from pulse cultivation to water
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated according to the named field nutrient-loss method; do not derive from fertilizer input alone
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emissions`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg N/kg reference product
  - Basis: per kg dry cleaned pulse seed; use only the declared applicable inventory method
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows
###### Mature pulse crop available for harvest (`mature_field_crop`)

This handoff links managed production to the separate harvest responsibility. Identify the mature crop state and collected/standing area, and distinguish pulse seed from stems, pods, or incidental biomass when the crop form requires it.

- Selected flow: Mature pulse crop available for harvest, species and crop form declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured harvest-ready crop mass or a documented field-sampling estimate before collection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources:
- Range: Broad provisional interval; crop form, maturity moisture, and species vary, so replace with measured lot mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 8.0
  - Unit: kg mature field crop/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pulse crop harvest and collection (`pulse_harvest`)

#### Inputs

##### Product flows

###### Mature crop received for harvest (`harvested_crop_input`)

The harvest process begins with the mature crop at the field handoff. Record the same crop identity and physical basis as the preceding field output; do not count field biomass that remains uncollected as accepted pulse product.

- Selected flow: Mature pulse crop available for harvest, species and crop form declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: match the measured or documented harvest-ready crop handoff from `pulse_cultivation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources:
- Range: See the crop-form and mass-balance interval at the corresponding field output; do not count it twice in normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 8.0
  - Unit: kg mature field crop/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and collection energy (`harvest_energy`)

Record fuel or electricity used by the actual manual-support or mechanical harvest and field-collection operations. The amount is zero when no supplied carrier is used; retain equipment and shared-service attribution.

- Selected flow: Energy carriers used for pulse harvest and collection
- Flow property / unit: Carrier-specific property and unit supported by foreground records
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record each carrier in its compatible native unit and allocate shared equipment use once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg reference product
  - Basis: per kg harvested crop delivered to the next included node
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows
###### Harvested pulse crop to threshing or shelling (`harvested_crop_output`)

This output is the crop material collected from the field and handed to threshing or shelling. Declare whether it consists of whole plants, pods, or another crop-specific state and identify the next node.

- Selected flow: Harvested pulse crop, species and physical form declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh the delivered harvest lot; subtract separately measured incidental material only when it is physically removed at this node
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources:
- Range: Broad provisional crop mass interval; resolve with species, harvest form, maturity, and lot records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 8.0
  - Unit: kg harvested pulse crop/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended harvest outputs (`other_intended_harvest_products`)

For each additional crop product intentionally harvested or retained for an identified use, record its concrete product identity, grade or condition, amount, recipient, destination, and handoff. Examples are not assumed for every species or route. Keep field residues left on the plot distinct from marketed outputs.

- Selected flow: Additional intended pulse-crop product output; identify each actual product in the foreground dataset
- Flow property / unit: Product-specific property and unit from each declared output identity
- Amount rule: record zero, one, or more intended outputs from lot and sale/use records; do not combine unlike products in the final process exchanges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: per kg reference-grade pulse seed; conditional on an actual marketable co-product handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
###### Collected harvest material discarded as waste (`harvest_discarded_material`)

Use only for material collected at harvest and sent to a waste destination. Report uncollected field losses through the harvest balance and their actual fate; do not label uncollected material as a waste exchange unless it is separately removed or treated as waste.

- Selected flow: Pulse crop material discarded after harvest; identify the waste identity and destination at data production
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh discarded material separately and record whether it is reworked, recovered, downgraded, or disposed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: per kg reference-grade pulse seed; include only material actually discarded
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Threshing or shelling (`pulse_threshing`)

#### Inputs

##### Product flows
###### Harvested pulse crop to be threshed or shelled (`threshing_crop_input`)

Receive the documented harvested crop state from `pulse_harvest`. Record pod/plant form and incoming mass so recovered seed, intended co-products, and rejects can be reconciled.

- Selected flow: Harvested pulse crop, species and physical form declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass accepted by the threshing or shelling operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:
- Range: Use the provisional crop mass interval on the harvest output until species-specific lot records replace it
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 8.0
  - Unit: kg harvested pulse crop/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Threshing and shelling energy (`threshing_energy`)

Record carrier quantities for manual, animal-powered, or mechanical separation as applicable. Do not count the same machine energy again under cleaning or drying; allocate shared equipment by measured operating time or throughput.

- Selected flow: Energy carriers used for pulse threshing or shelling
- Flow property / unit: Carrier-specific property and unit supported by foreground records
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record each supplied carrier by operation and use zero where no carrier crosses the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg reference product
  - Basis: per kg threshed pulse seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows
###### Threshed pulse seed with separated shell or pod material (`threshed_pulse_seed`)

This is the separated pulse seed delivered to primary drying/cleaning. Declare the seed condition and residual foreign matter. If threshing produces another intended product, record it separately below.

- Selected flow: Threshed or shelled pulse seed before primary conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh the seed output before primary drying, cleaning, or grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:
- Range: Broad provisional pre-conditioning mass interval; replace with crop- and process-specific balance data
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 3.0
  - Unit: kg threshed pulse seed/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended threshing outputs (`other_intended_threshing_products`)

Record each separated product with an identified recipient or use, quality, amount, and handoff. Shells, pods, or other biomass count as intended products only when actually directed to a product use; otherwise classify them as residue or waste according to their recorded fate.

- Selected flow: Additional intended product from pulse threshing or shelling; identify each actual product
- Flow property / unit: Product-specific property and unit from each declared output identity
- Amount rule: itemize each intended output and reconcile it with seed and residual output masses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: per kg reference-grade pulse seed; conditional on an actual marketable handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
###### Threshing or shelling rejects sent to waste (`threshing_rejects`)

Record broken, damaged, contaminated, or otherwise off-spec material only when it is discarded or sent to waste treatment. Material sold, fed, recovered, or reworked is reported under its actual output route, not as waste.

- Selected flow: Threshing or shelling rejects, actual waste identity and destination to be resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh waste at the node and record its route; do not count it as accepted pulse seed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:
- Range: Provisional broad QA interval for discarded material; not a yield, loss target, or allowed waste limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg discarded threshing material/kg harvested crop input
  - Basis: per kg crop material received by threshing or shelling
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Primary drying and cleaning (`pulse_conditioning`)

#### Inputs

##### Product flows

###### Threshed pulse seed before primary conditioning (`conditioning_seed_input`)

Receive the seed output from threshing or shelling. Record mass and moisture before conditioning, and identify any separate incoming contamination or prior handling state that affects drying and cleaning.

- Selected flow: Threshed or shelled pulse seed before primary conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:
- Range: Use the corresponding threshing output interval until the lot-specific conditioning balance is available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 3.0
  - Unit: kg threshed pulse seed/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying and cleaning energy (`conditioning_energy`)

Record the carrier used by active drying, conveying, aspiration, and mechanical cleaning, including equipment operating time and batch throughput. If sun drying alone requires no supplied carrier, record zero for carrier input and retain the drying time and weather data in the batch protocol.

- Selected flow: Energy carriers used for pulse drying and cleaning
- Flow property / unit: Carrier-specific property and unit supported by foreground records
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record each carrier separately by active operation and batch; do not assign the same dryer use to two crops
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg reference product
  - Basis: per kg dried and cleaned pulse seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows
###### Dried and cleaned pulse seed before grading (`conditioned_pulse_seed`)

Record the prepared pulse seed after necessary drying and cleaning but before any separate grade separation. Measure moisture using the stated basis and record the exact handoff to grading or the farm gate when no grading node is used.

- Selected flow: Dried and cleaned pulse seed, pre-grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh the prepared seed after conditioning and record moisture, grade status, and next handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources: `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`
- Range: Provisional mass-balance interval before sorting; use the measured batch balance for final values
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 2.0
  - Unit: kg dried and cleaned seed/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cleaning rejects and detached material sent to waste (`conditioning_rejects`)

Use only for foreign matter, damaged seeds, dust, or other material removed from this operation and sent to a waste destination. Identify separately any component sold, used as feed, returned to soil, or reworked.

- Selected flow: Pulse cleaning rejects and detached material sent to waste; identify the actual waste exchange at data production
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh each waste fraction and record composition and destination; do not classify saleable material as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_conditioning`
- Sources: `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`
- Range: Provisional broad QA interval for material actually removed and discarded; not a mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg discarded cleaning material/kg threshed seed input
  - Basis: per kg pulse seed entering primary conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grading and sorting (`pulse_grading`)

#### Inputs

##### Product flows

###### Conditioned pulse seed for grading (`grading_seed_input`)

Receive prepared pulse seed and record its incoming grade status, mass, moisture, and source lot. This process is included only when sorting creates two or more declared grade or destination states.

- Selected flow: Dried and cleaned pulse seed, pre-grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: match the conditioned seed batch accepted for sorting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Sources:
- Range: Use the corresponding conditioning output interval until the grade-batch balance is measured
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 2.0
  - Unit: kg conditioned seed/kg reference product
  - Basis: per kg dry cleaned pulse seed at the declared handoff
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grading and sorting energy (`grading_energy`)

Record carrier use for actual screens, sorters, conveyors, and aspiration used in grade separation. If grading is performed within primary conditioning without an independent node, include its energy there and do not duplicate this card.

- Selected flow: Energy carriers used for pulse grading and sorting
- Flow property / unit: Carrier-specific property and unit supported by foreground records
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: allocate measured carrier use to the grade batch and report zero when no supplied carrier is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg reference product
  - Basis: per kg declared reference-grade pulse seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows
###### Declared reference grade of pulse seed (`reference_pulse_seed_output`)

Record the grade selected as this dataset's reference product. State its quality threshold or buyer specification, handoff and net mass. Other intended grades remain separate product outputs with their own destination and amount.

- Selected flow: Pulses, n.e.c.; dry cleaned seed of the declared species and reference grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize the net accepted reference-grade output to exactly 1,000 kg for the functional unit; retain the measured unscaled batch amount in the source dataset
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1,000 kg dry cleaned pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: exact normalized reference output; retain the unscaled measured batch mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended pulse grades or products (`other_intended_grade_outputs`)

Enumerate every additional marketable grade or intentionally produced pulse-related product, with its quality, amount, recipient, destination, and separate handoff. Designate the reference grade and report all other intended products in the allocation decision; do not fold them into the reference flow.

- Selected flow: Additional intended pulse output; identify each concrete grade or product separately
- Flow property / unit: Product-specific property and unit from each declared output identity
- Amount rule: measured mass by product and grade from the sorted batch; zero where no other intended product is produced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference-grade pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: per kg reference-grade pulse seed; conditional on actual other grades or products
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
###### Grading rejects discarded from the batch (`grading_rejects`)

Classify each off-grade output as downgraded/sold, reworked, recovered, or discarded. Use this waste card only for the fraction actually sent to a waste destination, and link any rework to its originating grade node.

- Selected flow: Grading rejects sent to waste; resolve waste identity and destination from batch records
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measure discarded fraction and record waste destination; never include it in accepted reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference-grade pulse seed at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Sources:
- Range: Provisional broad QA interval for material actually rejected and discarded; not a product conformity limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg discarded grade rejects/kg conditioned seed input
  - Basis: per kg conditioned pulse seed received for grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-farm storage (`pulse_storage`)

Include this process only when the reference handoff is after the storage interval. The incoming product is already dry, cleaned, and graded. Record its storage entry and exit condition, the facility and container, duration, energy, treatments, monitoring, and losses. Safe storage conditions are crop- and context-dependent; local applicable standards and the actual pulse specification govern.

#### Inputs

##### Product flows

###### Dry graded pulse seed entering storage (`stored_pulse_seed_input`)

Record the lot mass, grade, moisture and moisture basis at storage entry. This is the same declared product identity as the reference flow, but at the storage entry handoff.

- Selected flow: Pulses, n.e.c.; dry cleaned seed of the declared species and grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh the lot entering storage and retain a link to the grading output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared post-storage handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: per kg accepted post-storage reference output on a consistent moisture basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage and handling energy (`storage_energy`)

Record supplied energy used for ventilation, drying, conveying, or other controlled storage operation. Do not add a product card for passive storage with no supplied energy; the protocol still records duration and condition monitoring.

- Selected flow: Energy carriers used for pulse storage and storage handling
- Flow property / unit: Carrier-specific property and unit supported by foreground records
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measure each used carrier for the storage interval and allocate shared-facility energy once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared post-storage handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_balance`
- Sources:


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg reference product
  - Basis: per kg accepted post-storage reference output for the included storage period
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage protection products (`storage_protection_products`)

Record any pesticide, insecticide, fumigant, or other protection product actually applied to the pulse lot or storage facility. Report product, active ingredient, use location, dose, and safety or residue status. Do not presume chemical treatment; record zero when none was applied.

- Selected flow: Storage protection product, actual identity to be resolved from use records
- Flow property / unit: Product-specific property / kg or L as supported by the product identity
- Amount rule: measure product used for the included storage interval and allocate shared-facility treatment by recorded service
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared post-storage handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_balance`
- Sources: `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg product/kg reference product
  - Basis: per kg accepted post-storage reference output; conditional on actual treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows
###### Dry graded pulse seed after storage (`stored_pulse_seed_output`)

This is the declared reference handoff only when storage is included. Record net mass, grade and moisture at exit, then normalize the accepted product to 1,000 kg without scaling storage losses into accepted output.

- Selected flow: Pulses, n.e.c.; dry cleaned seed of the declared species and grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize accepted post-storage output to 1,000 kg and retain measured entry and exit masses separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1,000 kg at the declared post-storage handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_balance`
- Sources: `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`


- Range: Provisional broad QA screen; replace with crop-, site-, and route-specific records and do not treat as an allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: exact normalized post-storage reference output; retain measured entry and exit masses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
###### Pulse seed lost or discarded during storage (`storage_losses`)

Report measured mass lost through deterioration, pest damage, contamination, or rejection during the included storage period. Distinguish material recovered, downgraded, used as feed, or discarded, and identify its actual route.

- Selected flow: Pulse seed discarded during storage; resolve actual waste identity and destination from records
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: reconcile storage entry and exit masses on a consistent moisture basis; separately measure recovered and downgraded material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted pulse seed at the declared post-storage handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_balance`
- Sources: `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`
- Range: Provisional broad screening estimate for discarded storage loss, not a storage-performance limit; moisture changes and recovery routes must be reconciled separately
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg discarded pulse seed/kg storage entry mass
  - Basis: per kg dry pulse seed entering the included storage interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_processes` | cultivation, harvest, threshing, conditioning, grading and storage | Subdivide independently measured processes and assign operation-specific inputs directly before allocating any remaining shared burden. |  |
| `allocation_all_outputs` | each node with multiple intended outputs | Enumerate each intended product and its separate handoff, grade, condition, quantity, destination and use. Distinguish marketable products from residues, incidental material and waste. | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `allocation_method_choice` | shared burdens for intended co-products | When two or more intended products share a process burden that cannot be separated, declare and justify a PCR-compatible physical, economic, or other applicable allocation method using the selected standard or study method. Record the allocation factor, reference period, input measurements and source. This PCR does not impose a universal default factor. |  |
| `allocation_rejects` | rejects, downgraded material and residues | Exclude discarded waste from accepted product quantities. Reworked or recovered material follows its linked process route; downgraded or feed-directed material is an intended output only when the actual destination and handoff are recorded. | `fao-pulse-postharvest-2020` |
| `allocation_shared_assets` | equipment or storage shared across fields, lots or periods | Identify the shared asset/service, all consuming nodes and periods, and the measured driver used to assign its energy and service burden. Count each shared carrier or service once across the reporting boundary. |  |

Where several grades from one sorting batch are sold, report all grades as intended outputs and designate the reference grade. Do not treat cleaning rejects, spoiled seed, chaff or other discarded material as a co-product. If residue is actually sold or deliberately used as feed, report its identity, quality, amount and destination as a separate intended output and resolve attribution explicitly. For a single intended product with no other product handoff, no co-product allocation is applied.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_establishment` | `pulse_cultivation` | planting seed, nutrients, irrigation, cultivation energy and crop protection | field and input records | crop species, cultivar, seed lot, field id and area, sowing date, seed source/treatment/quantity, each nutrient product/formulation/composition/application, water source and meter, carrier/product use, operation date | collect field logs, seed labels, invoices, fertilizer analyses, water meters and fuel/electricity records; identify each input by operation | kg, kg nutrient, m3, L, kWh, ha | each crop-season; each application or operation | complete represented crop-season, batch, or included storage period | one identified field-season and any shared equipment used | sum each actual input by field-season; preserve product and nutrient identities; divide by accepted reference output after allocation | dated field log, calibrated meter or invoice, product label/composition, area record and source dataset reference |
| `cp_soil_emissions` | `pulse_cultivation` | direct N2O and nitrate-N to water where quantified | monitored or model-calculated environmental outputs | emission method/version, crop and field, soil/climate inputs, nutrient form/rate/timing, residue terms, irrigation/rainfall terms when required, receiving compartment, uncertainty | use one declared crop- and region-appropriate inventory or monitoring method; retain source data and calculation record; do not infer a factor from this PCR | kg substance or N, kg product | each crop-season and each receiving compartment | complete represented crop-season, batch, or included storage period | one field-season; disclose spatial representativeness | calculate by the chosen method and normalize only after linking all method inputs to the same field-season and output | method source and version, field input records, calculation sheet or monitoring report, receiving medium/source record |
| `cp_harvest_balance` | `pulse_harvest` | mature field crop, harvested crop, other intended outputs and discarded material | harvest and field-loss records | field area, crop stage/date, harvested form, weighed/estimated crop mass, collected area, uncollected loss estimate, damage, co-products, destination and recipient | weigh representative lots or use a documented calibrated field sample; retain sampling method, scale and moisture state | kg, ha, % moisture | each harvest lot and field-season | complete represented crop-season, batch, or included storage period | one species/cultivar, field and harvest period | link field output to harvested input; identify uncollected field losses separately; normalize accepted output after final conditioning | scale check, sampling record, lot tickets, field notes, destination receipt or sale record |
| `cp_threshing_conditioning` | `pulse_threshing`, `pulse_conditioning` | incoming and prepared seed, energy, intended outputs, rejects and moisture | process batch records | lot id, crop form, input/output masses, moisture and basis before/after drying, equipment, operation time, each carrier, drying method and weather, cleaning/reject fractions, destinations | record weigh tickets or calibrated batch scales, moisture-meter readings, equipment logs and reject disposition; preserve process-stage separation | kg, % wet or dry basis, h, kg/L/kWh/m3 by carrier | each threshing and conditioning batch | complete represented crop-season, batch, or included storage period | identified batch, field/campaign, shared equipment | reconcile input dry matter, accepted seed, co-products, rejects and measured losses; avoid duplicate energy between stages | scale and moisture-meter calibration, batch sheets, equipment meter/invoice, representative sample and destination records |
| `cp_grading_balance` | `pulse_grading` | grade input, reference grade, other intended grades and rejects | grade and sale/use records | incoming lot, declared grade standard/buyer criteria, output mass per grade, moisture, downgraded/rework/reject state, destination, recipient | weigh each grade fraction; sample and test each grade against its declared commercial criteria; link every output to a handoff | kg, % moisture | each sorted batch and sale lot | complete represented crop-season, batch, or included storage period | one crop lot and sorting campaign | sum grade outputs and rejects against incoming conditioned mass; nominate exactly which grade is the reference product | calibrated scale, grade test record, buyer specification, sales/transfer receipt, mass-balance sheet |
| `cp_storage_balance` | `pulse_storage` | stored product, storage energy and protection products, losses and exit quality | storage entry/exit and facility records | lot id, storage facility/container, entry/exit date, mass, moisture and basis, temperature/humidity when available, treatments, carrier, shared facility users, downgraded/recovered/discarded amounts | weigh and sample at entry and exit; retain facility logs, treatment records, invoices, monitoring and loss disposition | kg, % moisture, days, carrier-specific unit | each included storage lot and monitoring interval | complete represented crop-season, batch, or included storage period | declared facility, container and storage period | compare entry/exit dry matter at consistent moisture basis; allocate shared facility energy/treatment once | calibrated scale and meter, moisture readings, treatment label/log, inspection record, disposal or recipient receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | crop-season and all included processes | Allocate shared burdens first where required; multiply each attributable lot amount by `1,000 kg / accepted reference-grade output mass at the declared handoff`. Keep unscaled lot records and allocation factors. | field-season input or output records; accepted reference-grade mass; allocation factors | amount per 1,000 kg reference flow | `mass-balance-identity` |
| `moisture_adjusted_mass_balance` | drying, grading and optional storage | For wet-basis moisture fraction `m`, calculate dry matter as `net mass × (1 − m)`. Compare entry and exit on a consistent dry-matter basis; convert to the declared gate moisture only with measured moisture and an explicit calculation. | net mass, measured moisture fraction, entry/exit point | dry-matter balance and mass at reference moisture state | `mass-balance-identity` |
| `crop_emission_method` | direct and indirect field emissions | Apply the declared recognized crop/region emission method and version to the field-season inputs it requires. Report emitted substance and receiving compartment, calculation inputs, factors and uncertainty. Do not apply an unselected generic factor. | method-specific fertilizer, residue, water, climate, soil and management records | method-supported elementary flows |  |
| `shared_asset_attribution` | machinery, pumps, dryers, graders or storage used by multiple fields/lots | Assign metered carrier or service amounts using the recorded operation time, throughput, or other declared physical driver; sum assigned amounts back to the shared meter total. | shared meter/service total; all consuming nodes; time or throughput records | single-counted process-specific amounts | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_one_crop` | product and field-season identity | Report one pulse species/crop type, cultivar or seed lot, field, area, crop year, geography, harvest form, grade and handoff per dataset. | seed-lot records, field register, grade and lot records |
| `identity_reference_gate` | reference product quality | Record measured net mass, moisture value and basis, sample method, grade or buyer specification, and whether storage is included. | calibrated scale, moisture measurement, grade test and transfer receipt |
| `input_records` | seed and managed inputs | Identify actual sowing seed, fertilizer and amendment products with nutrient composition, crop-protection product/active ingredient, irrigation source and supplied carrier. A zero must be supported by records. | input logs, product labels, invoices, meter records and field operation log |
| `emission_method_quality` | quantified crop emissions | Name method, version, geographic and crop applicability, required input records, receiving compartment and uncertainty; distinguish measured values from modeled estimates. | recognized method, retained input records and reproducible calculation sheet |
| `postharvest_balance` | harvest, threshing, conditioning, grading and storage | Link each batch input to the main product, all intended outputs, downgraded/reworked material, rejects, waste, moisture change and measured loss without double counting. | batch weights, sampling, moisture records and destination evidence |
| `shared_equipment_quality` | shared field, harvest or post-harvest assets | Identify all consuming processes and periods and show that shared energy or service burdens reconcile to the meter or provider total. | asset schedule, time/throughput logs and meter/invoice reconciliation |
| `technology_evidence` | route and technology choices | Describe each claimed route delta by changed topology, input category, calculation, data requirement or validation. Do not create mutually exclusive route labels where methods occur sequentially on the same lot. | dated operation records and equipment/process description |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_single_product_identity` | dataset reference product | Confirm one species/crop type, cultivar or seed lot, grade, crop year and production geography; do not combine pulses with distinct CPC leaves or unlike output identities without separate records. | `unsd-cpc21-01709` |
| `validate_gate_qualifiers` | reference flow | Require the declared farm or primary-conditioning handoff, net mass, moisture value and basis, grade, and storage status/duration when included. | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `validate_nutrient_cardinality` | `pulse_cultivation` product inputs | Permit at most one consolidated `flow-set.agricultural-nutrient-supply` v0.3.0 card per process. It is set-only: no group. The card covers all fertilizer and nutrient-bearing amendment records. |  |
| `validate_water_source` | crop water inputs | Use the `water-use` irrigation-water group only for supplied product water. Record direct surface or groundwater abstraction as a separately identified elementary resource flow, not as supplied product water. |  |
| `validate_emission_basis` | elementary crop emissions | Accept emissions only when the substance, receiving compartment, method/version and required field records are explicit. Keep nitrate-N separate from nitrate mass and identify a missing UUID as unresolved rather than substituting another species or compartment. |  |
| `validate_route_and_handoff` | process map and process inventory | Confirm the production, harvest, threshing, conditioning, sorting and included storage handoffs are linked in order. Describe actual alternatives by requirement delta and identify which alternatives coexist or are exclusive for the reported lot. | `fao-pulse-postharvest-2020`; `fao-postharvest-system-1994` |
| `validate_outputs_and_rejects` | each multiple-output or reject node | Enumerate intended products and their separate handoffs; classify each off-spec fraction as downgraded, reworked, recovered, or discarded; exclude rejects and losses from accepted reference output. | `fao-pulse-postharvest-2020` |
| `validate_storage_condition` | included farm storage | Check the measured entry/exit mass and moisture on a consistent basis, declared storage interval and protection route. The cited tropical/subtropical moisture guidance is a context-specific QA reference, not a universal allowed range. | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `validate_shared_burden` | shared machinery, pumps, dryers, graders and storage | Identify each consuming node and period, reconcile assigned service/energy to shared meter or provider totals, and prohibit duplicate burden. |  |
| `validate_provisional_ranges` | every provisional range | Treat reasoned ranges as replaceable QA screens, never as crop-specific production requirements or allowed limits. Replace them with source-backed or reviewed foreground evidence before any reviewed methodology claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground crop-season dataset for one declared dry pulse product identity and grade |
| downstream_use | `secondary_dataset`; `background_dataset` when a verified, complete process dataset is supplied |
| allowed_use | LCI modelling of dry pulse seed at the declared farm or primary-conditioning handoff and product state |
| excluded_use | Fresh green pulses; other specifically classified pulse products; seed-for-sowing products; processed foods; unspecified mixtures of crop species or grades; distribution and downstream processing |
| required_metadata | species/crop type; cultivar or seed lot; field location and area; crop year; water regime; reference gate; grade; net mass; moisture value and basis; route and technology choices; included storage period; allocation method; source datasets and emission method/version |
| required_quality_disclosure | temporal and geographic representativeness; field and harvest coverage; input-record completeness; measured versus modeled emissions; mass-balance completeness; unresolved flow identities; provisional ranges; shared-asset allocation and any missing background data |
| update_trigger | CPC scope change; new crop or product boundary evidence; applicable crop or storage standard change; material change to production, harvest, conditioning or storage routes; verified flow identity or unit-group resolution; source-backed range or emission-method update |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc21-01709` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01709 | CPC 2.1 hierarchy, dried leguminous vegetables group, and CPC/HS correspondence for the 01709 family |
| `fao-pulse-postharvest-2020` | `official_guidance` | https://www.fao.org/platform-food-loss-waste/resources/news/news-detail/COVID-19-Series-Improving-the-Storability-and-Availability-of-Pulses-by-Reducing-Post-Harvest-Losses/en | Pulse harvest maturity, field exposure, drying and handling, safe storage moisture and alternative drying/storage practices |
| `fao-onfarm-grain-manual-2009` | `handbook` | https://www.fao.org/4/i0959e/i0959e00.pdf | Post-harvest grain operations including pulses; tropical/subtropical storage moisture guidance; cleaning, drying and storage monitoring practices |
| `fao-postharvest-system-1994` | `official_guidance` | https://www.fao.org/4/ac301e/AC301e03.htm | Post-harvest process stages, drying and threshing sequence, and the effect of timing and moisture on losses |
