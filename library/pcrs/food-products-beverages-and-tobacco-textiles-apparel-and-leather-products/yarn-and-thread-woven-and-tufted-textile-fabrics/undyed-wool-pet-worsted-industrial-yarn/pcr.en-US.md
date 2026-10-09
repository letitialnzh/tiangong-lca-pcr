---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.undyed-wool-pet-worsted-industrial-yarn
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Undyed wool–PET worsted industrial yarn


## 1. Scope and Applicability

This manufacturing PCR covers undyed, unsized, single wool–polyethylene terephthalate (PET) staple yarn made by the worsted ring-spinning route from separately received prepared wool top and PET sliver. Wool is below 85% of fibre mass; the actual wool/PET formulation and justification for the stated wool-yarn classification must be supplied. The representative product is bulk industrial yarn for subsequent weaving, wound on paper cores and packed in corrugated boxes. A classification title is not proof that every mixed yarn or every route is covered.

Excluded routes/products: woollen and semi-worsted spinning; open-end, self-twist, core-spun and filament yarn; folded/cabled yarn; non-PET co-fibres; retail yarn; raw-fleece receipt, scouring, carbonising, topmaking and on-site re-combing; dyeing, bleaching, shrink-resist treatment, sizing, steaming/heat setting and wet yarn finishing. Purchased prepared fibres include their upstream processing. No animal husbandry, petrochemical fibre production, weaving, clothing, consumer use or end-of-life is silently inside this foreground gate. An actual plant with an excluded operation requires an explicitly expanded process-specific inventory and a separate applicability review.

The existing method `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796` permits any declared non-synthetic co-fibre, including wool, in its general scope; cotton is its representative input rather than its only permitted co-fibre. Reuse that method when production starts from already blended sliver and satisfies its composition, process and output-state requirements. A different CPC code or representative UUID alone does not justify a second product identity. This PCR is specifically for separate unblended wool-top and PET-sliver receipt with on-site recipe blending and gilling preparation, adding separate incoming-material weighing, dry-fibre recipe control, blend uniformity, passage traceability and stage-transfer balances. It does not claim that the older method describes these otherwise upstream on-site blending operations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.undyed-wool-pet-worsted-industrial-yarn |
| classification_refs | CPC 3.0: 26330; narrower |
| covered_products | Undyed single wool/PET worsted industrial yarn, wool below 85% by fibre mass, from separate prepared tops/sliver |
| excluded_products | Other co-fibres and routes listed in section 1; wool at least 85%; sewing thread; retail yarn |
| representative_product | Undyed wool–PET worsted industrial yarn, wool below 85% by fibre mass |
| production_route | Separate top/sliver receipt; recipe-controlled mixing; gilling/drawing; rub-roving; ring spinning; clearing/winding; inspection and bulk packing |
| market_state | Undyed, unsized, single yarn in declared industrial non-retail configuration at mill gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide wool/PET worsted single yarn for further textile manufacture |
| How much | 1 kg net accepted yarn |
| How well | Meet the actual purchaser specification for composition, count, twist, strength, evenness, moisture and winding; no default performance class |
| How long or cycle | One accepted manufacturing lot at the stated delivery gate; no service-life claim |
| reference_flow_link | `finished_yarn_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Undyed wool–PET worsted industrial yarn, wool below 85% by fibre mass |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wool and PET fibre mass fractions; classification justification; wool species; virgin/recycled status; top/sliver processing and finish state; fibre length and fineness; single-yarn count system/value; twist direction/level; moisture/conditioning basis; undyed/unsized state; purchaser acceptance specification; paper-core and outer-box tare; industrial winding configuration; included processes; geography; reporting period |

Declare every required qualifier in package metadata, process notes or reference-flow comments. Reference net mass includes actual yarn moisture and retained spinning finish on the stated basis, but excludes supports and transport packaging. Fibre composition is a fibre-only dry-mass fraction, excluding retained finish and packaging; it is not inferred from gross package mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net yarn on a calibrated scale and subtract measured core and box tare; use the declared moisture basis for every mass reconciliation. |
| fibre_fraction | fibre composition | Mass fraction | kg/kg | Use composition tests or traceable fibre-only formulation records; wool fraction is below 0.85 and wool plus PET fractions sum to one on the same dry-fibre basis. No fixed blend recipe is imposed. |
| energy_unit | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve public energy property and meter unit; if exchanged in MJ, document 1 kWh = 3.6 MJ. Do not rewrite electricity as Mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately purchased undyed scoured/combed wool top and prepared unblended PET sliver at plant receipt |
| starting_condition_role | Upstream-prepared product inputs to foreground blending |
| product_classification_scope | A narrow manufacturing route within CPC 26330; no whole-subclass coverage claim |
| recursive_input_rule | Purchased blended sliver, roving or yarn cannot replace the two separate starting inputs while claiming complete coverage of this route; use an applicable existing method or an explicitly declared stage inventory, and link incoming upstream burdens once |
| upstream_dataset_requirement | Match top/sliver production, fibre origin, PET route and recycled status, electricity supply, lubricant and packing datasets separately; disclose every gap |
| disclosure | Manufacturing gate only; no complete cradle-to-gate claim. State excluded agriculture, fibre making, transport and finishing; report shared utilities, intermediate stocks, recovery and wastes |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| method_selection | starting condition and process responsibility | Require separately received wool top and PET sliver and on-site blending/gilling for this PCR. For already blended sliver that satisfies the existing low-synthetic-fibre blended-yarn method, reuse that method. Incoming supplier datasets end at the respective unblended prepared inputs and must exclude wool/PET blending and gilling passages already counted here. Retain processing location, transfer lot, measured inputs and a boundary diagram as reconciliation evidence. |  |
| boundary_required | manufacturing route | Include actual mixing, gilling/drawing, rub-roving, ring spinning, clearing/winding, inspection and packing with their controlled direct exchanges. Passage counts, temperatures and yields come from factory records. | `woolmark-spinning-2020`; `woolmark-worsted-spinning` |
| boundary_water | dry route and wet processing | Scouring/dyeing wastewater belongs to the appropriate upstream or expanded wet process. Humidification, an aqueous finish or wet cleaning on site requires separate supplied-water and actual effluent rows and a documented expansion; resource water must not stand for supplied water or wastewater. | `woolmark-spinning-2020` |
| boundary_emissions | direct exchanges | Measure and add each actual chemical, fuel, refrigerant, waste and emission as an individual exchange. Electricity supply emissions stay upstream; no combustion CO2 or dust mass is assumed merely because yarn is spun. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| top_blending_preparation | Top blending, gilling, drawing and rub-roving | required | Actual operations for the declared route; optional exchanges only if present | foreground manufacturing | 1 kg accepted final net reference yarn |
| ring_spinning_winding | Ring spinning, clearing and winding | required | Actual operations for the declared route; optional exchanges only if present | foreground manufacturing | 1 kg accepted final net reference yarn |
| inspection_packing | Inspection, release and industrial packing | required | Actual operations for the declared route; optional exchanges only if present | foreground manufacturing | 1 kg accepted final net reference yarn |

### Process: Top blending, gilling, drawing and rub-roving (`top_blending_preparation`)

#### Inputs

##### Product flows

###### Wool Top (`wool_top_input`)

Receive undyed, scoured and combed wool top; supplier processing and moisture basis belong to its upstream dataset. The official flow display denotes top, not spun yarn.

- Selected flow: Wool Top `a19fde0b-23f4-4ab7-9832-317affa7ab44`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh issued net top by lot, subtract returns and stock change, then divide attributable mass by accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_materials`
- Sources: `woolmark-spinning-2020`

###### Polyethylene terephthalate staple-fibre sliver, unblended and prepared for worsted spinning (`pet_sliver_input`)

Receive one specified PET sliver rather than loose, unprepared staple or a pre-blended cotton sliver. Record polymer, fibre length, fineness, finish and virgin/recycled status from actual supplier evidence.

- Selected flow: Polyethylene terephthalate staple-fibre sliver, unblended and prepared for worsted spinning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh issued PET sliver net mass by lot and normalize to accepted final net yarn mass; collect the actual blend recipe without a default fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_materials`
- Sources: `woolmark-spinning-2020`

###### Alternating current (`prep_electricity`)

Meter motors, suction and attributable room ventilation for mixing, gilling, drawing and rub-roving. This selected identity is user-side alternating current below 1 kV; select a matching supply dataset for the actual geography.


This selected UUID is applicable only to actual CN grid-average consumption supply to the user below 1 kV. Other geography, supply technology or voltage requires another verified identity and matching provider data; it is not covered by this selected UUID.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Divide attributable metered kWh by accepted final net yarn mass; no default machine power or operating hours.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_energy`
- Sources: `woolmark-spinning-2020`

###### Synthetic ester spinning lubricant, neat formulated product (`ester_lubricant_input`)

Conditional input only if this single supplier-specified neat ester lubricant is applied on site. Already applied supplier finish stays in the incoming top/sliver inventory; another formulation or aqueous emulsion needs its own atomic identity and water row.

- Selected flow: Synthetic ester spinning lubricant, neat formulated product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure net issued formulated-product mass and normalize to accepted final net yarn mass; record not_applicable only with documented absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_materials`
- Sources: `woolmark-spinning-2020`

#### Outputs

##### Product flows

###### Undyed wool–PET rub roving (`rub_roving_output`)

Trace the mixed and drafted rub roving to the spinning lot. It is an internal intermediate, not an additional saleable reference product.

- Selected flow: Undyed wool–PET rub roving
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net roving transferred, adjust intermediate stock and normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_materials`
- Sources: `woolmark-spinning-2020`

##### Waste flows

###### Captured wool–PET loose fibre waste (`prep_captured_fibre_waste`)

Collect separated loose wool/PET fly and droppings from this process; declare composition and recovery/treatment destination. Internal re-feed is separately reconciled and is not counted as exported waste.

- Selected flow: Captured wool–PET loose fibre waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh separately collected waste net mass by batch and normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_materials`
- Sources: `woolmark-spinning-2020`

##### Elementary flows

###### particles (PM10) (`prep_pm10_air`)

Conditional residual PM10 emission crossing the environmental boundary after capture. Use only size-resolved PM10 monitoring to air with unspecified receiving subcompartment; captured waste and total dust are different exchanges.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure PM10 concentration, matched exhaust volume and operating time; convert to emitted kg and normalize to accepted final net yarn mass. Do not infer emission from a loss percentage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_pm10`
- Sources: `woolmark-spinning-2020`

### Process: Ring spinning, clearing and winding (`ring_spinning_winding`)

#### Inputs

##### Product flows

###### Undyed wool–PET rub roving (`rub_roving_input`)

Receive the same composition-identified roving from preparation; reconcile transfer, storage and any returned material without a second upstream burden.

- Selected flow: Undyed wool–PET rub roving
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile net received roving mass with rub_roving_output, then normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_materials`
- Sources: `woolmark-spinning-2020`

###### Alternating current (`spin_electricity`)

Meter ring spinning, winding, clearing, suction and attributable compressed-air generation for splicing; internal compressed air is an internal service, so count its electricity once.


This selected UUID is applicable only to actual CN grid-average consumption supply to the user below 1 kV. Other geography, supply technology or voltage requires another verified identity and matching provider data; it is not covered by this selected UUID.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Divide attributable metered kWh by accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_energy`
- Sources: `woolmark-spinning-2020`

###### Cardboard tube or Paper core (`paper_core_input`)

Use the selected cylindrical paperboard core only for the declared industrial winding configuration. Record net new core consumption; reusable bobbins require turnover and actual replacement evidence.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh core tare and reconcile issue/return counts; normalize consumed paper-core kg to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_materials`
- Sources: `woolmark-spinning-2020`

#### Outputs

##### Product flows

###### Undyed wool–PET single yarn, wound and awaiting final release (`wound_yarn_output`)

Transfer wound single yarn for inspection; retain composition, count, twist and moisture records. This transfer is not sold twice.

- Selected flow: Undyed wool–PET single yarn, wound and awaiting final release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh transferred net yarn excluding paper cores; normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_materials`
- Sources: `woolmark-spinning-2020`

##### Waste flows

###### Wool–PET yarn clearing waste (`clearing_yarn_waste`)

Collect yarn removed by clearing and broken-end trimming separately from loose fibre fly; retain actual fibre composition and destination.

- Selected flow: Wool–PET yarn clearing waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh collected yarn waste and normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_materials`
- Sources: `woolmark-spinning-2020`

###### Captured wool–PET loose fibre waste (`spin_captured_fibre_waste`)

Record loose fibre captured from spinning and winding suction, separately from emitted particles and clearing yarn.

- Selected flow: Captured wool–PET loose fibre waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net captured fibre waste and normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_materials`
- Sources: `woolmark-spinning-2020`

##### Elementary flows

###### particles (PM10) (`spin_pm10_air`)

Conditional measured residual PM10 to air, unspecified subcompartment. Do not create a mandatory emission or convert all textile fly to PM10.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure PM10 concentration, matched exhaust volume and operating time; calculate emitted kg per accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spin_pm10`
- Sources: `woolmark-spinning-2020`

### Process: Inspection, release and industrial packing (`inspection_packing`)

#### Inputs

##### Product flows

###### Undyed wool–PET single yarn, wound and awaiting final release (`wound_yarn_input`)

Receive the matching winding lot for quality release and packing; reconcile any rejected lot and stock change.

- Selected flow: Undyed wool–PET single yarn, wound and awaiting final release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh received net yarn mass excluding cores and normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `woolmark-spinning-2020`

###### corrugated board boxes (`corrugated_box_input`)

Conditional one corrugated paperboard box specification for bulk industrial shipment. Any bag, strap or label actually used is an additional specific exchange, not part of this box mass.


Use this selected box UUID only when supplier evidence confirms the original specification of 16.6% primary fibre and 83.4% recycled fibre and matching production route. These shares are identity applicability conditions, not a default packaging recipe or a requirement for all yarn products. Another box composition or route requires a separately verified identity; retain the actual component mass and supplier specification without substituting board stock for finished boxes.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh representative boxes and reconcile net issue counts; normalize consumed kg to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `woolmark-spinning-2020`

###### Alternating current (`pack_electricity`)

Meter inspection, handling and packing electricity including the attributable share of facility lighting and ventilation. Avoid overlap with spinning meters.


This selected UUID is applicable only to actual CN grid-average consumption supply to the user below 1 kV. Other geography, supply technology or voltage requires another verified identity and matching provider data; it is not covered by this selected UUID.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Divide attributable metered kWh by accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_energy`
- Sources: `woolmark-spinning-2020`

#### Outputs

##### Product flows

###### Undyed wool–PET worsted industrial yarn, wool below 85% by fibre mass (`finished_yarn_output`)

Release the declared undyed wool/PET worsted single yarn in non-retail industrial packages after actual quality acceptance. Net yarn excludes all cores and outer packaging.

- Selected flow: Undyed wool–PET worsted industrial yarn, wool below 85% by fibre mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_yarn`
- Sources: `woolmark-spinning-2020`

##### Waste flows

###### Packaging waste, cardboard (`discarded_box_output`)

Conditional damaged corrugated boxes discarded at this gate; unused returned boxes remain stock, not waste.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh discarded corrugated box net mass and normalize to accepted final net yarn mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `woolmark-spinning-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared electricity and services | Prefer process subdivision and direct meters. For a shared motor, suction or compressor, document a measured physical demand or operation-time basis and test its representativeness; mass allocation alone is not a default for unlike counts or technologies. | `ghg-product-2011` |
| allocation_recovery | internal returns and exported waste | Reconcile internal re-feed once without a second virgin-fibre charge or avoided-burden credit. Weigh exported fibre waste and clearing waste separately and record treatment. A sold recovered stream needs documented waste/co-product status before allocation. | `ghg-product-2011` |
| allocation_coproduct | actual co-product | If subdivision cannot avoid allocation, justify the underlying physical relationship; only where unavailable may a documented economic or other relationship be used. Disclose shares, period, prices where used, and sensitivity. No fixed credit or price is supplied. | `ghg-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_materials | top_blending_preparation | wool_top_input; pet_sliver_input; ester_lubricant_input; rub_roving_output; prep_captured_fibre_waste | weighing and lot record | lot_id; material SKU; composition; preparation/finish state; gross/tare/net mass; receipts; issues; returns; stock change; transfer lot; waste destination; accepted final net yarn mass | Calibrated scales; matched issue/return, supplier and transfer records; measure every material and waste separately | kg | Each batch or shift | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_prep_energy | top_blending_preparation | prep_electricity | meter record | meter_id; start/end readings; supply voltage; loads; shared-load basis; accepted final net yarn mass | Calibrated submeter; documented physical-demand allocation for shared services | kWh | Each batch or shift | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_prep_pm10 | top_blending_preparation | prep_pm10_air | size-resolved emissions record | sampling point; PM10 concentration; dry exhaust volume; operating time; instrument units; air subcompartment; accepted final net yarn mass | Validated PM10 size-selective sampling with matched gas volume and time; retain non-detect limit, sampling coverage and no-discharge evidence | kg; mg/m3; m3; h | Representative monitored operating periods | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_spin_materials | ring_spinning_winding | rub_roving_input; paper_core_input; wound_yarn_output; clearing_yarn_waste; spin_captured_fibre_waste | weighing and lot record | lot_id; material SKU; composition; preparation/finish state; gross/tare/net mass; receipts; issues; returns; stock change; transfer lot; waste destination; accepted final net yarn mass | Calibrated scales; matched issue/return, supplier and transfer records; measure every material and waste separately | kg | Each batch or shift | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_spin_energy | ring_spinning_winding | spin_electricity | meter record | meter_id; start/end readings; supply voltage; loads; shared-load basis; accepted final net yarn mass | Calibrated submeter; documented physical-demand allocation for shared services | kWh | Each batch or shift | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_spin_pm10 | ring_spinning_winding | spin_pm10_air | size-resolved emissions record | sampling point; PM10 concentration; dry exhaust volume; operating time; instrument units; air subcompartment; accepted final net yarn mass | Validated PM10 size-selective sampling with matched gas volume and time; retain non-detect limit, sampling coverage and no-discharge evidence | kg; mg/m3; m3; h | Representative monitored operating periods | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_pack_materials | inspection_packing | wound_yarn_input; corrugated_box_input; discarded_box_output | weighing and lot record | lot_id; material SKU; composition; preparation/finish state; gross/tare/net mass; receipts; issues; returns; stock change; transfer lot; waste destination; accepted final net yarn mass | Calibrated scales; matched issue/return, supplier and transfer records; measure every material and waste separately | kg | Each batch or shift | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_pack_energy | inspection_packing | pack_electricity | meter record | meter_id; start/end readings; supply voltage; loads; shared-load basis; accepted final net yarn mass | Calibrated submeter; documented physical-demand allocation for shared services | kWh | Each batch or shift | Representative complete reporting period; disclose missed batches and abnormal operation | Declared manufacturing site and included process | per 1 kg reference flow | Calibration, raw records, allocation and reconciliation; absence/monitoring evidence for conditional rows |
| cp_final_yarn | inspection_packing | finished_yarn_output | accepted lot and scale record | lot; gross yarn-package mass; core tare; box tare; other individually weighed packaging tare; net accepted yarn mass; moisture; dry-fibre composition; count; twist; acceptance result | Calibrated scale plus laboratory/supplier composition and purchaser acceptance evidence; maintain lot-level moisture measurements | kg | Every accepted lot | All released lots in the reporting period | Same plant and declared winding configuration | Sum accepted net yarn mass; finished_yarn_output is 1 kg per 1 kg reference flow | Scale calibration; tare trials; moisture/quality tests; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | Divide each attributable reporting-period exchange by net accepted final yarn mass from the same linked lots and moisture basis. Retain both stage transfer masses; intermediate output is not an extra functional unit. | exchange record; cp_final_yarn; allocation record | exchange per 1 kg reference flow |  |
| net_yarn_mass | finished_yarn_output | Net yarn mass equals gross package mass minus separately measured cores, boxes and every other actual packaging component; never use an assumed tare or moisture correction. | cp_final_yarn | accepted net yarn kg |  |
| pm10_mass | prep_pm10_air; spin_pm10_air | For compatible dry reference conditions, emitted kg = PM10 mg/m3 multiplied by exhaust m3 divided by 1000000; for flow-rate records integrate over matched operating time. Retain size fraction and detection limits before normalization. | cp_prep_pm10; cp_spin_pm10 | measured PM10 kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_blend_control | on-site blending and gilling | Retain lot-level dry-fibre mass evidence for both inputs, weighed recipe, passage counts, blend-uniformity tests and matching roving transfers. Determine different fibre moisture contents and retained finish separately from actual measurements/supplier evidence; wet wool mass cannot establish wool fraction. Missing evidence leaves composition unverified. | supplier preparation records; moisture/finish analysis; recipe weights; uniformity tests; passage trace |
| dq_composition | top to yarn chain | Trace separately issued wool and PET, supplier treatment/finish and composition of the accepted lot; distinguish dry fibre fraction from moist yarn mass. | supplier certificates; formulation; test results |
| dq_mass | all material transfers | Reconcile received, returned, stocked, transferred, accepted, rejected and waste quantities on one moisture basis; investigate unexplained differences without a default loss allowance. | batch balances; scale and moisture records |
| dq_energy | electricity | Map meter boundaries including suction/compressed-air and ventilation; avoid omission and double counting, and disclose shared allocation uncertainty. | meter map; allocation worksheet |
| dq_emission | PM10 and waste | Separate capture from release; a total-dust test is not PM10 evidence. Missing monitoring is unknown, not zero; record non-detect limits and discharge conditions. | sampling reports; waste transfer evidence |
| dq_representative | dataset | Record site, period, product count/recipe mix, covered production and missing stages; retain route-specific records rather than transferring another mill yield. | production calendar; coverage and uncertainty report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Require the actual wool/PET recipe, wool below 85% dry fibre mass, non-retail single yarn and undyed/unsized worsted route. Check classification justification independently; no entire-CPC coverage follows from this PCR. | `unsd-cpc-2025` |
| validate_basis | all rows | Require 1 kg net accepted reference yarn, complete required qualifiers, linked collection protocols and one final-yarn denominator. Match intermediate transfer masses and exclude packing from yarn net mass. |  |
| validate_boundary | included processes | Reject an unexpanded dataset with re-combing, wet finishing, steaming or different co-fibres. Record every actual material and utility atomically; omissions and unmeasured direct emissions remain incomplete coverage. | `woolmark-spinning-2020` |
| validate_uuid | flow identities | For each selected UUID verify public identity, reference property, material state, route and elementary receiving compartment; keep an unresolved row concrete and declared. Candidate identity gaps are not publication or methodology approval. |  |
| validate_pm10 | PM10 rows | Use PM10 kg only with particle-size-resolved evidence and the selected air subcompartment; never substitute total dust, captured fibre waste or urban/high-stack flows without corresponding conditions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground inventory for a declared wool/PET worsted industrial yarn |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A matched intermediate input to textile manufacture after applicability, identity and data review |
| excluded_use | Whole CPC coverage; full cradle-to-gate or consumer footprint without linked upstream/downstream processes; other co-fibres or excluded routes; comparative performance or certification claims |
| required_metadata | All reference qualifiers; site/period; process map; supplier and upstream dataset identities; flow-property units; inventory denominator; allocation; packing/tare; waste destinations |
| required_quality_disclosure | Mass balance; calibration; production coverage; exclusions; unmeasured emissions; unresolved UUIDs; supply proxies and sensitivity; uncertainty |
| update_trigger | Changes in formulation, top/sliver treatment, spinning or winding route, supply mix, packing, monitoring evidence or material data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed page 119, 26320–26340. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Wool-content and non-retail classification context only; the page does not specify a manufacturing route |
| woolmark-spinning-2020 | handbook | The Woolmark Company. Worsted and woollen spinning — Facilitator Guide, 2020. PDF/printed pages 50, 66–67, 72, 74, 83 and 247. https://www.woolmarklearningcentre.com/globalassets/woolmark-learning-centre/10-resources/facilitator-guides/gd2891-worsted-woollen-spinning-facilitator-guide_2020_final.pdf | Wool/polyester worsted blend, preparation, moisture, roving, spinning and post-spinning distinctions. Educational process context; no historic trial value, recipe, performance or trademark requirement adopted |
| ghg-product-2011 | official_guidance | WRI/WBCSD. Product Life Cycle Accounting and Reporting Standard, 2011, printed page 63, PDF page 65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical generic allocation hierarchy supporting disclosed choices; no textile-specific numeric ratio or full LCA approval |
| woolmark-worsted-spinning | handbook | The Woolmark Company. Worsted Spinning, undated current publisher page, sections Drawing and Worsted Spinning. https://www.woolmark.com/industry/product-development/wool-processing/worsted-spinning/ | Current drawing/rub-roving, single-yarn and clearing/winding route context; no performance or production parameters adopted |
