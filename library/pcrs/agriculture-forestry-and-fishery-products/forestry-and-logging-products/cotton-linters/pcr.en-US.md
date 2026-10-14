---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.cotton-linters
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cotton linters

## 1. Scope and Applicability

This PCR covers foreground data packages for cotton linters produced from ginned cottonseed. Cotton linters are the short seed-coat fibres remaining on cottonseed after the main cotton lint has been removed by ginning, and are normally removed from cottonseed by mechanical delinting at cottonseed oil mills or dedicated delinting facilities.

The PCR applies to raw or simply cleaned cotton linters sold as first-cut, second-cut, third-cut, or mill-run linters. It covers facility operations that receive cottonseed, clean and meter seed, mechanically delint seed, separate and clean linter fibre, bale or package linters, and dispatch saleable linter bales or lots.

This PCR excludes raw cotton lint for textile spinning, cottonseed itself, cottonseed oil, cottonseed meal, cottonseed hulls, gin motes unless declared as a separate co-product, purified cotton linter pulp, cellulose derivatives, paper, nonwovens, absorbent cotton, chemical-cotton products, and acid-delinted planting seed unless those operations are explicitly part of the declared foreground route and produce cotton linters as the reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.cotton-linters |
| classification_refs | CPC 3.0:03251 exact - Cotton linters |
| covered_products | Raw or simply cleaned cotton linters removed from cottonseed; first-cut linters; second-cut linters; third-cut linters; mill-run linters; baled or loose linters dispatched for industrial, paper, nonwoven, or cellulose use |
| excluded_products | Textile cotton lint; cottonseed; cottonseed oil, meal, hulls, and cake; gin motes unless declared as co-products; purified cotton linter pulp; cellulose derivatives; paper; absorbent cotton; finished nonwoven products; acid-delinted planting seed when linters are not the reference product |
| representative_product | 1 kg net saleable cotton linters at producer gate, with cut type, grade, moisture basis, impurity basis, and bale or loose state declared |
| production_route | Ginned cottonseed receipt; seed cleaning and metering; mechanical delinting by one or more passes; linter fibre separation, cleaning, conditioning, baling or packaging; producer-gate dispatch |
| market_state | Raw or simply cleaned natural cellulosic short fibre, usually baled, bagged, or transferred loose to downstream pulp, chemical, paper, nonwoven, or filling applications |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable raw or simply cleaned cotton linters |
| How much | 1 kg net linter mass |
| How well | Meets the declared cut type, grade, moisture basis, impurity specification, bale or loose state, and buyer specification |
| How long or cycle | One production batch, delinting campaign, or representative annual production period normalized to the reference amount |
| reference_flow_link | `cotton_linters_at_producer_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | cut type; grade or quality class; moisture basis; impurity or trash basis; seed source and cotton species where known; delinting route; production region; batch or campaign period; bale or loose state; allocation method for delinted seed and other co-products |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Retain complete raw batch, herd, process-transfer and co-product quantities on their original collection bases. For each exchange, establish actual route, period and co-product attribution, then calculate attributed raw quantity × 1 kg / matching-period final accepted product mass on the same boundary. Record actual stage outputs, losses, yields and allocation; never fix intermediate transfers to the final 1 kg or infer zero losses from missing data.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and saleable linter outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product as net saleable linter mass excluding reusable pallets, racks, and returnable containers. |
| `moisture_basis` | Cottonseed, raw linters, cleaned linters, residues, and final linters | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as received and kg dry matter where available | Record moisture basis for incoming seed, intermediate linters, and final linters. Convert to the declared reference basis when product moisture differs across lots. |
| `cut_type_reporting` | Reference product and linter process outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg by cut type | Distinguish first-cut, second-cut, third-cut, and mill-run linters because fibre length, impurity, and downstream use can differ materially. |
| `co_product_mass_balance` | Cottonseed input, linters, delinted seed, residues, and dust | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile cottonseed input with linters, delinted seed, rejects, dust, and moisture changes before allocation. |
| `energy_unit_consistency` | Electricity, fuel, compressed air, and mechanical services | Energy | kWh or MJ | Convert meters, fuel records, and equipment-hour calculations to kWh or MJ and state whether values are final electricity, fuel lower heating value, or delivered service energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `ginned_cottonseed_lot_at_delinting_facility` |
| starting_condition_role | Boundary anchor for the first foreground cottonseed receiving, storage, cleaning, or metering record. |
| product_classification_scope | CPC 3.0:03251 cotton linters only. |
| recursive_input_rule | If purchased input is already cotton linters, model it as a purchased linter input with an upstream dataset and do not recursively reopen this PCR inside the same foreground process. |
| upstream_dataset_requirement | Use upstream datasets for purchased cottonseed, electricity, fuels, compressed air, process water if used, packaging, chemicals when used, maintenance materials, and inbound transport services that cross into the foreground boundary. |
| disclosure | Disclose seed source, cottonseed ownership or tolling arrangement, delinting route, number of delinting passes, linter cut type, moisture basis, impurity basis, co-product treatment for delinted seed, seed hull or meal linkage where applicable, residue fate, and excluded downstream purification, pulping, chemical conversion, or product manufacturing stages. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_ginned_cottonseed_lot | all foreground data packages | Begin foreground modelling at the declared ginned cottonseed lot, use upstream datasets for each purchased input crossing the boundary, and do not recursively reopen this PCR for a purchased cotton-linter input. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cottonseed_receipt_and_precleaning` | Cottonseed receipt and pre-cleaning | required | Include for all datasets receiving ginned cottonseed or fuzzy cottonseed into the delinting boundary. | Establishes seed lot identity, moisture, incoming mass, storage, and pre-cleaning losses. | kg cottonseed received and cleaned per 1 kg reference linters |
| `mechanical_delinting` | Mechanical delinting | required | Include every delinting pass used to make the declared first-cut, second-cut, third-cut, or mill-run product. | Removes linter fibre from cottonseed and creates delinted seed and raw linter streams. | kg raw linters and kg delinted seed per 1 kg reference linters |
| `linter_cleaning_conditioning_and_baling` | Linter cleaning, conditioning, and baling | required | Include cleaning, aspiration, dust removal, moisture conditioning when used, baling, bagging, and packaging before sale. | Converts raw linters into saleable linter bales or lots. | kg saleable linters per 1 kg reference linters |
| `co_product_residue_and_dispatch` | Co-product, residue, and dispatch handling | required | Include co-product transfer, residue management, storage, loading, and producer-gate dispatch before the product leaves the foreground system. | Records delinted seed co-product fate, residues, loading energy, and final dispatch state. | kg dispatched saleable linters per 1 kg reference linters |

### Process: Cottonseed receipt and pre-cleaning (`cottonseed_receipt_and_precleaning`)

#### Inputs

##### Product flows

###### Fuzzy cottonseed received (`fuzzy_cottonseed_input`)

Ginned cottonseed with remaining short fibres received for linter removal.

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming cottonseed mass with moisture and lot identity, allocated to saleable linters and co-products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cottonseed_receipt_records`
- Sources: `usda-ers-natural-fibers-2006`; `usda-mrr56-cotton-linters`
- Range: Cottonseed-to-linters mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 40
  - Unit: kg cottonseed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `usda-ers-natural-fibers-2006`; `usda-mrr56-cotton-linters`

###### Receipt and pre-cleaning electricity (`receipt_precleaning_electricity`)

Electricity used for conveyors, seed cleaners, fans, magnets, metering equipment, and storage movement.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured electricity or motor-hour calculation for receipt, storage movement, and pre-cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial pre-cleaning energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Cleaned cottonseed to delinting (`cleaned_cottonseed_to_delinting`)

Cottonseed after receiving, storage transfer, and pre-cleaning, transferred to mechanical delinting.

- Selected flow: Cleaned cottonseed for delinting
- Flow property / unit: Mass / kg
- Amount rule: calculated from incoming cottonseed minus measured receiving rejects, adjusted for moisture where applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cottonseed_receipt_records`
- Sources:
- Range: Cleaned seed transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 9
  - Upper: 40
  - Unit: kg cottonseed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Seed cleaning rejects (`seed_cleaning_rejects`)

Trash, stones, dust, hull fragments, and non-seed material removed before delinting.

- Selected flow: Cottonseed cleaning residue
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass or calculated from seed receiving mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial seed cleaning reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Mechanical delinting (`mechanical_delinting`)

#### Inputs

##### Product flows

###### Cleaned cottonseed charged to delinter (`cleaned_cottonseed_charged`)

Cleaned seed charged to first-cut, second-cut, third-cut, or mill-run delinting equipment.

- Selected flow: Cleaned cottonseed for delinting
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass charged by pass, cut type, and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delinting_pass_records`
- Sources: `cotton-inc-fiber-sourcing-2017`; `ncpa-trading-rules-2013`
- Range: Seed charged to delinter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 9
  - Upper: 40
  - Unit: kg cottonseed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delinting electricity and mechanical service (`delinting_energy`)

Electricity, compressed air, or mechanical service energy used by linter saws, abrasive delinters, conveyors, fans, and dust collection equipment.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured equipment electricity or calculated motor-hour energy for each delinting pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial delinting energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mineral lubricating oil (`delinter_maintenance_materials_lubricant`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Saw blades, brushes, screens, lubricants, and other consumables directly used in linter removal.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_material_records`
- Sources:

###### Steel delinter saw blade (`delinter_maintenance_materials_blade`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Saw blades, brushes, screens, lubricants, and other consumables directly used in linter removal.

- Selected flow: Steel delinter saw blade
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_material_records`
- Sources:

#### Outputs

##### Product flows

###### Raw cotton linters from delinting (`raw_cotton_linters`)

Linter fibre removed from seed before final cleaning, conditioning, and baling.

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: measured raw linter mass by cut type and delinting pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per mechanical delinting process output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delinting_pass_records`
- Sources:
- Range: Raw linter output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg raw linters
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delinted cottonseed co-product (`delinted_cottonseed_coproduct`)

Cottonseed after linter removal, transferred to crushing, feed, seed, or other downstream handling.

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: measured delinted seed mass after each pass or calculated by mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources:
- Range: Delinted seed co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 39
  - Unit: kg delinted seed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Delinting dust and fines (`delinting_dust_and_fines`)

Dust, fines, lint fragments, and seed coat fragments captured by aspiration or floor sweepings during delinting.

- Selected flow: Cotton linter dust and fines
- Flow property / unit: Mass / kg
- Amount rule: measured collected dust and fines, or calculated from dust collector and mass balance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial delinting dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fugitive fibre dust to air (`fugitive_fibre_dust_to_air`)

Particulate fibre dust emitted to workplace or ambient air after controls.

- Selected flow: Particulates, cotton fibre dust
- Flow property / unit: Mass / kg
- Amount rule: measured emissions, filter balance, permit estimate, or calculated uncontrolled dust minus captured dust
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources:
- Range: Initial fugitive dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Linter cleaning, conditioning, and baling (`linter_cleaning_conditioning_and_baling`)

#### Inputs

##### Product flows

###### Raw linter input (`raw_linter_input`)

Raw linter fibre received from one or more delinting passes for final cleaning and sale preparation.

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: measured raw linter mass by cut type, lot, and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_linter_quality_and_baling_records`
- Sources:
- Range: Raw-to-saleable linter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg raw linters
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and baling energy (`cleaning_baling_energy`)

Electricity or fuel used for linter cleaning, aspiration, conditioning, baling, bagging, and internal movement.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured energy or calculated equipment-hour energy for linter finishing and baling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial cleaning and baling energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steel wire (`bale_ties_and_packaging_steel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Bale ties, straps, bags, wraps, labels, and other non-returnable packaging used for saleable linters.

- Selected flow: Steel wire
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:; `cotton-bale-materials`

###### Polyethylene film (`bale_ties_and_packaging_pe`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Bale ties, straps, bags, wraps, labels, and other non-returnable packaging used for saleable linters.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:; `cotton-bale-materials`

#### Outputs

##### Product flows

###### Saleable cotton linters before dispatch (`saleable_cotton_linters`)

Cleaned, conditioned, and baled or packaged cotton linters ready for storage or dispatch.

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output after cleaning and baling
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_linter_quality_and_baling_records`
- Sources: `iso-14044-2006`
- Range: Fixed saleable linter output
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Linter cleaning rejects (`linter_cleaning_rejects`)

Trash, hull fragments, dust, off-grade fibre, and rejected linter fractions removed during finishing.

- Selected flow: Cotton linter cleaning residue
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by cleaning stage, lot, and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial linter cleaning reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Co-product, residue, and dispatch handling (`co_product_residue_and_dispatch`)

#### Inputs

##### Product flows

###### Saleable linter lot to dispatch (`saleable_linter_lot_to_dispatch`)

Saleable linter bales, bags, or loose lots transferred to dispatch storage and loading.

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: measured saleable linter mass entering dispatch storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`
- Sources:
- Range: Dispatch input linter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.05
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at equipment supply (`dispatch_loading_energy_electricity`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Forklift, conveyor, compressed-air, electricity, or fuel use for storage, loading, and producer-gate dispatch.

- Selected flow: Electricity at equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Diesel fuel (`dispatch_loading_energy_diesel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Forklift, conveyor, compressed-air, electricity, or fuel use for storage, loading, and producer-gate dispatch.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

#### Outputs

##### Product flows

###### Cotton linters at producer gate (`cotton_linters_at_producer_gate`)

Reference product leaving the foreground system at producer gate or dispatch point.

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_dispatch_records`
- Sources: `iso-14044-2006`
- Range: Fixed producer-gate reference product
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Delinted seed transferred to downstream use (`delinted_seed_to_downstream_use`)

Co-product cottonseed after linter removal, transferred to oilseed crushing, feed, seed, or other downstream use.

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: measured delinted seed mass leaving the foreground boundary or internal transfer point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources:
- Range: Delinted seed dispatch screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 39
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Lost cotton linters (`dispatch_losses_and_waste_packaging_linters_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Lost linter material, damaged packaging, sweepings, and non-product waste generated before dispatch.

- Selected flow: Lost cotton linters
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

###### Waste polyethylene film (`dispatch_losses_and_waste_packaging_pe_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Lost linter material, damaged packaging, sweepings, and non-product waste generated before dispatch.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

###### Waste steel bale wire (`dispatch_losses_and_waste_packaging_steel_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Lost linter material, damaged packaging, sweepings, and non-product waste generated before dispatch.

- Selected flow: Waste steel bale wire
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable cotton linters

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| `cottonseed_coproduct_allocation` | If the foreground facility jointly produces cotton linters and delinted cottonseed, allocate shared receipt, cleaning, delinting, storage, and dispatch burdens between linters and delinted seed using a documented physical relationship when it reflects process causality. Otherwise use economic allocation with same-period prices and a sensitivity check. |
| `incoming_cottonseed_burden` | Purchased cottonseed enters with an upstream dataset. If the study boundary includes cotton ginning or seed ownership before delinting, allocate upstream cottonseed and ginning burdens consistently with the linked cotton or cottonseed PCR. |
| `off_grade_linter_treatment` | Off-grade linters sold for lower-value uses are co-products when they leave as saleable material; otherwise treat them as waste or internal rework according to measured fate. |
| `residue_fate` | Dust, hull fragments, seed cleaning rejects, and packaging waste must be tracked by fate, including disposal, composting, fuel use, feed use, or internal recycling. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cottonseed_receipt_records` | `cottonseed_receipt_and_precleaning` | incoming seed and cleaned seed transfer | receiving, scale, storage, and pre-cleaning record | supplier; lot_id; cotton_species_or_variety; seed_mass; moisture; trash; storage_bin; receipt_date; cleaned_seed_mass | weighbridge, scale ticket, receiving note, storage ledger, or seed cleaner log; original activity aggregation: sum incoming lots and calculate cleaned seed transfer after rejects and moisture adjustment | kg seed, percent moisture, percent trash | each lot or campaign | representative production year or declared campaign | receiving site, storage bin, or seed lot | per declared reference flow | scale calibration, receiving ticket, storage ledger, and moisture test |
| `cp_delinting_pass_records` | `mechanical_delinting` | seed charged, pass type, raw linter output, and pass yield | delinter run sheet, production log, or control-system record | pass_number; cut_type; seed_mass_charged; raw_linter_mass; delinted_seed_mass; runtime; equipment_id; moisture | batch sheet, linter run sheet, plant historian, or operator log; original activity aggregation: reconcile seed charged with raw linters, delinted seed, dust, and moisture change | kg, hour, percent moisture | each pass or batch | declared campaign or production year | delinter line, pass, and seed lot | per declared reference flow | production logs, scale records, moisture tests, and mass-balance worksheet |
| `cp_linter_quality_and_baling_records` | `linter_cleaning_conditioning_and_baling` | raw linters, cleaned linters, grade, bale, and packaging | quality, cleaning, conditioning, bale press, or finished-goods record | cut_type; grade; raw_linter_mass; cleaned_linter_mass; moisture; impurity; bale_id; bale_mass; packaging_mass | bale scale, lab test, visual grading record, product specification, or finished-goods ledger; original activity aggregation: sum conforming bale mass and normalize all foreground rows to net saleable linters | kg, percent moisture, percent impurity | each bale, lot, or campaign | declared campaign or production year | finishing line, bale press, or warehouse | per declared reference flow | bale tickets, lab records, grading notes, finished-goods ledger, and certificate of analysis where available |
| `cp_energy_records` | all processes | electricity, fuel, compressed air, and mechanical service | meter, invoice, fuel issue, compressed-air allocation, or equipment-hour record | carrier; quantity; unit; equipment_id; process_id; runtime; date; allocation_basis | meter reading, invoice reconciliation, equipment-hour calculation, or submeter; original activity aggregation: allocate directly metered energy first, then by runtime, throughput, or saleable linter mass | kWh, MJ, L fuel, kg fuel, equipment-hour | monthly, per batch, or per campaign | representative production year or campaign | line, equipment, facility, or process area | per declared reference flow | meter calibration, invoice, fuel log, and allocation worksheet |
| `cp_maintenance_material_records` | `mechanical_delinting` | saws, brushes, screens, lubricants, and maintenance consumables | inventory issue, maintenance work order, or equipment log | material_type; quantity; unit; equipment_id; replacement_date; process_id; allocation_basis | work order, stock issue, maintenance record, or supplier note; original activity aggregation: allocate consumables by delinter runtime, seed throughput, or linter mass | kg, item count, L lubricant | per replacement or monthly | representative production year or campaign | delinter line or equipment | per declared reference flow | maintenance log, stock issue record, and supplier specification |
| `cp_packaging_records` | `linter_cleaning_conditioning_and_baling` | bale ties, straps, wraps, bags, labels, and non-returnable packaging | bill of materials, purchase, warehouse issue, or bale record | material_type; unit_mass; units_used; bales_covered; reusable_flag; supplier; waste_amount | BOM, packaging issue, bale press record, or supplier specification; original activity aggregation: sum non-returnable packaging per net saleable linter mass | kg material, item count | each lot or monthly | production year or campaign | bale press, warehouse, or dispatch area | per declared reference flow | purchase records, BOM, supplier specifications, and stock issue records |
| `cp_coproduct_records` | `mechanical_delinting`; `co_product_residue_and_dispatch` | delinted seed and saleable off-grade linter co-products | co-product transfer, sales, or internal use record | co_product_type; mass; moisture; destination; sale_price_if_used; internal_transfer; date | scale ticket, transfer note, sales invoice, internal transfer ledger, or downstream production record; original activity aggregation: sum co-product quantities and calculate allocation factors when needed | kg, percent moisture, currency per kg where used | each lot or monthly | production year or campaign | seed transfer point, warehouse, or customer lot | per declared reference flow | scale records, invoices, transfer notes, and allocation worksheet |
| `cp_residue_records` | all processes | seed cleaning rejects, dust, fines, off-grade waste, and waste packaging | waste, residue, disposal, composting, fuel-use, or rework record | residue_type; quantity; moisture; fate; disposal_route; internal_reuse_flag; date; process_id | waste ticket, dust collector log, residue measurement, disposal manifest, or rework ledger; original activity aggregation: sum residues by fate and link saleable residues to co-product rule | kg, percent moisture | each lot, monthly, or campaign | production year or campaign | receiving, delinting, finishing, warehouse, or waste handling area | per declared reference flow | disposal tickets, waste manifest, dust collector logs, and rework records |
| `cp_air_emission_records` | `mechanical_delinting`; `linter_cleaning_conditioning_and_baling` | fugitive and controlled fibre dust emissions | filter balance, permit estimate, stack test, or dust collector record | captured_dust_mass; filter_efficiency; emission_factor_if_used; airflow; operating_hours; control_device | stack test, filter weighing, permit calculation, or dust collector log; original activity aggregation: calculate emitted dust as uncontrolled or generated dust minus captured dust and retained residues | kg particulate, m3 air, hour | test event, monthly, or campaign | representative production year or permit period | dust collector, delinter line, finishing line, or facility | per declared reference flow | stack test, filter log, permit file, and calculation worksheet |
| `cp_dispatch_records` | `co_product_residue_and_dispatch` | final linter dispatch and loading | dispatch ticket, inventory release, loading record, or bill of lading | lot_id; bale_id; net_mass; packaging_state; dispatch_date; customer_or_destination; loading_energy_link | finished-goods ledger, bill of lading, loading ticket, or dispatch record; original activity aggregation: reconcile finished goods with shipped saleable linter mass and dispatch losses | kg, bale count | each dispatch lot | production year or campaign | warehouse, loading dock, or producer gate | per declared reference flow | bill of lading, finished-goods ledger, loading ticket, and inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_linter_mass` | all inventory rows | normalized amount = row amount / net saleable linter mass dispatched within the same boundary and period | row amount; net saleable linter mass from `cp_dispatch_records`; boundary and period definition | amount per 1 kg saleable cotton linters |  |
| `cottonseed_linter_mass_balance` | cottonseed, raw linters, cleaned linters, delinted seed, residues, and dust | incoming cottonseed mass = saleable linters + delinted seed + residues + dust + moisture change within stated tolerance | cottonseed receipt; raw linter output; final linter output; delinted seed; residues; moisture | reconciled mass balance and QA flag | `usda-ers-natural-fibers-2006`; `usda-mrr56-cotton-linters` |
| `cut_type_yield_tracking` | first-cut, second-cut, third-cut, and mill-run linters | record each pass separately; if passes are blended, calculate weighted average grade, moisture, impurity, and yield | pass records; blend recipe; grade and moisture records | cut-type-specific linter yield and final product description | `cotton-inc-fiber-sourcing-2017`; `ncpa-trading-rules-2013` |
| `co_product_allocation_factor` | shared facility burdens | allocation factor = selected physical or economic allocation measure for linters / total selected allocation measure for linters plus co-products | linter mass or value; delinted seed mass or value; off-grade co-products; shared burdens | allocation factors for shared processes | `iso-14044-2006` |
| `moisture_conversion` | seed, linters, residues, and co-products | dry mass = as-received mass * (1 - moisture fraction); reported reference mass remains on declared saleable basis | as-received mass; moisture fraction; declared reference basis | kg dry matter and kg saleable basis |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare cut type, grade or quality class, moisture basis, impurity basis, bale or loose state, and production region. | finished-goods record, grade record, bale ticket, supplier certificate, or product specification |
| `dq_seed_traceability` | cottonseed input | Trace cottonseed to supplier, seed lot, ginning origin where available, and receipt period. | receiving ticket, supplier declaration, storage ledger, and lot traceability |
| `dq_mass_balance` | seed, linters, delinted seed, residues, and dust | Cottonseed mass balance must reconcile input seed, linters, delinted seed, residues, dust, and moisture changes for each campaign. | scale records, run sheets, moisture tests, dust collector records, and mass-balance worksheet |
| `dq_energy_allocation` | energy and shared services | Energy records must distinguish receipt, delinting, finishing, and dispatch where material; shared energy allocation must be documented. | submeters, invoices, equipment-hour logs, and allocation worksheet |
| `dq_coproduct_treatment` | delinted seed and saleable off-grade linters | Co-product quantities, destinations, and allocation basis must be disclosed. | transfer records, sales invoices, internal use records, and allocation calculation |
| `dq_downstream_exclusion` | downstream manufacturing | Purification, pulping, chemical conversion, paper, absorbent cotton, and nonwoven production must be explicitly excluded or separately modelled. | boundary statement, product description, and downstream module links where applicable |

## 9. Validation Rules

| validation_id | Severity | Rule |
| --- | --- | --- |
| `reference_output_equals_one_kg` | error | The final producer-gate reference product output must equal 1 kg net saleable cotton linters. |
| `required_qualifiers_present` | error | Cut type, grade or quality class, moisture basis, impurity basis, bale or loose state, production region, and allocation method must be declared. |
| `cottonseed_mass_balance_reconciles` | error | Cottonseed input, linters, delinted seed, rejects, dust, and moisture changes must be reconcilable for the declared batch or campaign. |
| `co_product_allocation_documented` | error | Shared burdens must include a documented allocation method for delinted seed and any saleable off-grade linters or residues. |
| `cut_type_not_mixed_without_disclosure` | warning | First-cut, second-cut, third-cut, and mill-run linters must not be mixed in the reference product unless the blend and weighted attributes are disclosed. |
| `downstream_processing_excluded_or_modelled` | warning | Purification, pulping, chemical conversion, paper, absorbent cotton, and nonwoven production must be explicitly excluded or separately modelled. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset; foreground foreground-data package component |
| allowed_use | Modelling producer-gate raw or simply cleaned cotton linters when the declared cut type, grade, moisture basis, impurity basis, seed source, delinting route, and boundary match this PCR. |
| excluded_use | Textile cotton lint, cottonseed, cottonseed oil or meal, purified linter pulp, cellulose derivatives, paper, absorbent cotton, nonwovens, and acid-delinted planting seed unless separately modelled or mapped. |
| required_metadata | CPC reference; cut type; grade or quality class; moisture basis; impurity basis; seed source; production region; delinting route; number of passes; bale or loose state; allocation method; co-product treatment; upstream dataset links |
| required_quality_disclosure | cottonseed lot traceability, cottonseed-to-linter mass balance closure, energy allocation basis, pass-specific yield tracking, moisture conversion basis, co-product allocation, residue fate, dust emission basis, and unresolved UUID or unit support gaps |
| update_trigger | Update when reviewed Tiangong UUIDs, CPC or HS definitions, cottonseed trading rules, cotton linter grade evidence, process technology evidence, or reviewed mill datasets change the rule. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 03251 Cotton linters. | Product category identity and classification reference. |
| `usda-ers-natural-fibers-2006` | official_guidance | USDA Economic Research Service, Cotton Finds Markets Beyond Traditional Uses, natural-fibers report PDF, https://ers.usda.gov/media/11053/natural-fibers.pdf?v=48877 | Definition of linters after ginning, delinting at cottonseed oil mills, cut categories, and cottonseed-linter production context. |
| `usda-mrr56-cotton-linters` | official_guidance | USDA Marketing Research Report No. 56, Cotton linters: production, marketing, and market outlets, https://ageconsearch.umn.edu/record/309970/files/mrr56.pdf | First-cut, second-cut, mill-run categories, grade groups, production and yield context. |
| `cotton-inc-fiber-sourcing-2017` | handbook | Cotton Incorporated, Fiber Sourcing Directory, https://www.cottoninc.com/wp-content/uploads/2017/04/Fiber-Sourcing-Directory.pdf | Delinting-machine route, first-cut and second-cut distinction, and downstream use examples. |
| `ncpa-trading-rules-2013` | standard | National Cottonseed Products Association, Trading Rules 2013-14, https://www.cottonseed.com/wp-content/uploads/2016/04/2013-14-Trading-Rules-edited-for-web-site.pdf | Market definitions for mill-run, first-cut, second-cut, and chemical linters. |
| `usda-ars-mechanical-delinter-2016` | literature | Journal of Cotton Science, Development and Evaluation of a Novel Bench-Top Mechanical Cotton Seed Delinter, https://journal.cotton.org/wp-content/uploads/2025/11/JCS21-018.pdf | Mechanical delinting technology context and acid-delinting exclusion note. |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management - Life cycle assessment - Requirements and guidelines. | Functional-unit, allocation, data quality, and validation framing. |
| `cotton-bale-materials` | standard | National Cotton Council bale packaging material identities; actual linter specifications and quantities require site records, https://www.cotton.org/tech/bale/specs/bagging.cfm | Conditional identity context; verify actual site use, quantities and applicability separately |
