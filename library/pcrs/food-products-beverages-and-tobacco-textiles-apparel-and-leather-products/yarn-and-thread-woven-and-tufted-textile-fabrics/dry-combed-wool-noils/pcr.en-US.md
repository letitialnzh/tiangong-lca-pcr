---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-combed-wool-noils
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dry-combed wool noils


## 1. Scope and Applicability

This PCR applies to undyed sheep-wool short fibres separated by mechanical worsted combing of received scoured carded sliver, then dry segregated, inspected and packed for sale as noils. Its manufacturing foreground begins at carded-sliver receipt and ends at accepted packed noils, excluding packaging from reference mass. Woolmark describes gilling and combing as distinct stages and identifies the separated short fibre as noil; no fixed number of passes is required here.

Fine-animal-hair noils, wool/synthetic blends, silk or cotton noils, garnetted/reclaimed fibre, yarn and carding-only waste are excluded. Scouring, carbonising, bleaching, dyeing, chemical shrink-resist treatment, added processing lubricant, active humidification and heated drying are outside this dry-route method. A site performing any such operation must develop explicit additional process-specific inventories and evidence before claiming coverage. Passive equilibration to the declared weighing condition is included. Downstream woollen spinning or consumer use is excluded. The product is a textile intermediate, not a lifetime functional service; no cradle-to-gate completeness is implied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-combed-wool-noils |
| classification_refs | CPC 3.0 26140; narrower |
| covered_products | Undyed sheep-wool combing noils from the declared dry route |
| excluded_products | Fine-animal-hair noils; dyed or carbonised noils; reclaimed fibres; spinning waste; blended noils |
| representative_product | One specified lot of dry-sorted sheep-wool noils in woven polypropylene sacks |
| production_route | Received carded sliver → pre-combing gilling → mechanical combing with top/noil separation → noil dry segregation and inspection → weighing and packing |
| market_state | Unspun short fibre sold to textile processors; declared moisture and purchaser specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply sheep-wool noils as a specified short-fibre textile feedstock |
| How much | 1 kg accepted net noils at the declared gate |
| How well | Lot-specific species/composition, length distribution, diameter, vegetable contamination and moisture; verified against purchaser acceptance records |
| How long or cycle | One manufacturing reporting campaign; no service-life or downstream spinning performance equivalence |
| reference_flow_link | `reference_product_noils` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Undyed sheep-wool combing noils, dry sorted and packed |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Sheep-wool composition; input scouring/carding state; noil origin; fibre length and diameter measurements or declared test gaps; vegetable matter; moisture measurement and mass basis; existing lubricant; excluded treatment flags; output acceptance specification; reporting period; site; packaging configuration; allocation method and separation gate |

Declare every required qualifier in the foreground dataset. The reference product and matching output row deliberately retain the same exact name while their public identity remains unresolved.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net noil mass, excluding all sacks and containers. Collect using cp_noil; preserve measured mass and moisture condition. |
| moisture_basis | all fibre mass balances | Mass | kg | Report measured moisture on wet-mass basis. Dry mass = measured net mass × (1 − measured moisture fraction). Reconcile feed, top, noil and fibre reject balances on dry matter; retain actual dispatch mass for the 1 kg reference. Never adopt a default commercial regain. |
| energy_conversion | electricity rows | Net calorific value | MJ | Keep raw metered kWh; convert using 1 kWh = 3.6 MJ. The verified electricity flow uses its original energy property, never Mass. |
| package_measurement | polypropylene_sack | Mass | kg | Weigh actual empty sacks on a calibrated scale and reconcile issued count, reuse and unused returns; do not infer mass from nominal capacity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Scoured undyed carded sheep-wool sliver at reporting mill receipt, with prior processing and moisture declared |
| starting_condition_role | Purchased intermediate; start of the joint dry-combing foreground |
| product_classification_scope | Only sheep-wool dry-combing noils within CPC 26140; not fine animal hair or every classified route |
| recursive_input_rule | Purchased noils belong to another starting route and must be declared separately with their original allocated upstream burden; no zero-burden recursive noil average |
| upstream_dataset_requirement | Link carded sliver with sheep husbandry, shearing, scouring and carding upstream; link actual electricity, sacks, lubricant and off-site treatment without duplicate foreground steps |
| disclosure | Factory gate, all stages, received state, noil and top yields, moisture basis, stock changes, allocations, environmental discharge points, optional exchanges, excluded routes and upstream gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_joint | joint_combing | Include receipt, handling, pre-combing gilling, mechanical combing, common conveying and dust collection through the physical top/noil separation gate. Post-separation top finishing belongs solely to top. | woolmark-topmaking |
| boundary_noil | noil_finishing | Include dry noil segregation, acceptance tests, passive conditioning, weighing, compression where used and actual packing. Fresh wet treatments are not silently added. | woolmark-topmaking |
| boundary_environment | environmental interfaces | Electricity is a technosphere input; no boiler fuel or combustion emissions are presumed. Captured dust is a waste transfer; only documented external air releases are elementary flows. No process water or wastewater is implied by this dry route. If water crosses the actual boundary, split supplied water, abstraction, discharge and treatment and review the expanded route. |  |
| boundary_disclosure | dataset completeness | Disclose transport, capital equipment, maintenance consumables and shared services included or omitted, with measured relevance and justification. Never claim cradle-to-gate completeness unless all required upstream datasets and transport links are separately assembled and assessed. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint_combing | Receipt, gilling and joint combing | required | Declared carded-sliver dry route | Joint top/noil separation with original campaign ledger | per 1 kg reference flow |
| noil_finishing | Dry noil finishing and dispatch | required | Every accepted noil lot; packing conditional on actual configuration | Noil-only operations after separation | per 1 kg reference flow |

Every row represents one physically identified exchange. Conditional rows are included only when present; absence needs route evidence. The future dataset shall add separate atomic rows for additional measured material, packaging, waste or emission species, never a collection label. Internal noil transfer rows cancel in the combined system. Physical co-product output masses remain unallocated in the reconciliation ledger; attributed exchanges and burdens are stored separately.

### Process: Receipt, gilling and joint combing (`joint_combing`)

#### Inputs

##### Product flows

###### Scoured undyed carded sheep-wool sliver (`carded_wool_input`)

Required feed at mill receipt. Record sheep-wool composition, existing processing oil, moisture, carding history and supplier dataset. Farm-gate carded-fibre identity is not imposed on this mill-received intermediate.

- Selected flow: Scoured undyed carded sheep-wool sliver
- Flow property / unit: Mass / kg
- Amount rule: Measured feed attributable to noils per reference flow; retain the unallocated campaign feed and apply allocation_shared before dividing by accepted noil mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint`
- Sources: `woolmark-topmaking`

###### Alternating current (`joint_electricity`)

Meter receiving, pre-combing gilling, combing, conveying and shared dust extraction separately where possible. This flow identifies use-point energy, not a grid mix; link a site-appropriate supply dataset.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered allocated electricity per reference flow; express meter data in MJ under section 4.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `woolmark-topmaking`

###### Mineral-base machine lubricating oil (`mineral_machine_oil`)

Conditional: only where maintenance records establish mineral-base oil consumption attributable to this line. Processing lubricant already in purchased sliver is not another input. Synthetic oil requires its own specific row.

- Selected flow: Mineral-base machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable lubricant consumption per reference flow; apply allocation_shared to common-line consumption.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_auxiliary`
- Sources: `woolmark-topmaking`

#### Outputs

##### Product flows

###### Unbaled undyed wool combing noils (`unbaled_noils_output`)

Required short-fibre stream sent to noil segregation. An internal transfer, not a second saleable reference output; retain full physical yield even when burdens are allocated.

- Selected flow: Unbaled undyed wool combing noils
- Flow property / unit: Mass / kg
- Amount rule: Measured internal transfer per reference flow on the declared moisture basis; do not apply a burden allocation share to physical output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint`
- Sources: `woolmark-topmaking`

###### Wool Top (`combed_wool_coproduct`)

Record the long-fibre combed sliver co-product at separation, before downstream re-gilling or spinning. The official Chinese flow name is retained; this row is unspun top, not yarn.

- Selected flow: Wool Top `a19fde0b-23f4-4ab7-9832-317affa7ab44`
- Flow property / unit: Mass / kg
- Amount rule: Measured co-product output per reference flow; keep full unallocated physical mass in the joint-production ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint`
- Sources: `woolmark-topmaking`

##### Waste flows

###### Separated vegetable matter from wool combing (`vegetable_reject`)

Conditional separately collected burr/seed plant residue; declare composition, contamination and disposal destination. Do not label marketable fibre noils as this waste.

- Selected flow: Separated vegetable matter from wool combing
- Flow property / unit: Mass / kg
- Amount rule: Weighed attributable plant residue per reference flow; retain gross residue and allocation evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `woolmark-topmaking`

###### Captured wool-fibre dust (`captured_wool_dust`)

Conditional dust removed from collection equipment and sent for off-site treatment; weigh collected solids separately from airborne releases. Recovered usable fibre is a co-product instead and requires its own row.

- Selected flow: Captured wool-fibre dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed attributable captured wool dust per reference flow; exclude filter tare.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `woolmark-topmaking`

###### Spent mineral-base machine lubricating oil (`used_mineral_oil`)

Conditional where mineral-oil maintenance generates a collected waste-oil stream. Keep oil retained in equipment and stock movements in the balance.

- Selected flow: Spent mineral-base machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable spent oil per reference flow; no assumed loss fraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_auxiliary`
- Sources: `woolmark-topmaking`

##### Elementary flows

###### Particulate matter, particle size unspecified (`airborne_dust`)

Conditional only on measured or documented releases to ambient air with unspecified subcompartment and particle-size fraction. Indoor recirculation is not an environmental exchange. If PM10 or another fraction is known, use an independently verified specific row instead, without overlap.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable air release per reference flow from emission concentration, exhaust volume and operating duration; missing monitoring is an explicit data gap, not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `woolmark-topmaking`

### Process: Dry noil finishing and dispatch (`noil_finishing`)

#### Inputs

##### Product flows

###### Unbaled undyed wool combing noils (`unbaled_noils_input`)

Same internal transfer as unbaled_noils_output, reconciled by batch and moisture basis. Do not purchase it again in the combined system.

- Selected flow: Unbaled undyed wool combing noils
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer per reference flow; reconcile with unbaled_noils_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_noil`
- Sources:

###### Alternating current (`finishing_electricity`)

Noil-only dry separation, inspection, compression and packing electricity. Assign directly to noils; no further top/noil allocation.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered noil-only electricity per reference flow; express meter data in MJ under section 4.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Woven polypropylene noil packing sack (`polypropylene_sack`)

Conditional for this exact packaging configuration. Measure empty sack mass, used count and reuse history; no fixed bag capacity. Other packaging components require separate rows.

- Selected flow: Woven polypropylene noil packing sack
- Flow property / unit: Mass / kg
- Amount rule: Measured sack consumption per reference flow; sum actual empty sack mass, excluding product mass and reusable containers not consumed in the campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Undyed sheep-wool combing noils, dry sorted and packed (`reference_product_noils`)

Accepted saleable short-fibre product, excluding packaging. Acceptance is against the declared purchaser specification; no universal fibre length, diameter, contaminant limit or health approval is asserted.

- Selected flow: Undyed sheep-wool combing noils, dry sorted and packed
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_noil`
- Sources:

##### Waste flows

###### Rejected undyed wool-noil fibre (`rejected_noil_fibre`)

Conditional nonmarketable fibre removed during final inspection and transferred for treatment; record reason and destination. Rework within the line is an internal flow and does not cross this boundary.

- Selected flow: Rejected undyed wool-noil fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fibre per reference flow; include stock changes and exclude internal rework counted twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_noil`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | joint_combing; noil_finishing | First separate metered noil-only activities and top-only activities. Attribute noil-only sorting and packing directly to noils. Noil is not automatically burden-free because it is a short-fibre by-product. | ghg-product-2011; woolmark-topmaking |
| allocation_shared | joint inputs and burdens | For inseparable common operations, justify an underlying physical relationship before choosing a physical allocation. Mass fraction alone is not evidence of causality. If physical allocation cannot be supported, document contemporaneous gate prices and quantities for top, saleable noils and each other marketable co-product and justify economic allocation. Economic share a_noil = noil gate value / sum of all co-product gate values, using consistent currency, period and moisture basis. Retain prices, outputs, method and sensitivity to a plausible alternative. No default noil/top price ratio is permitted. | ghg-product-2011 |
| allocation_balance | co-product and waste ledgers | Apply one coherent share to common upstream carded-sliver burdens and common-stage activity, without allocating downstream top finishing to noils. Shares sum to one across marketable outputs. Retain waste treatment burdens with their generating operation; do not create negative credits for assumed replacement of virgin wool. Gross physical outputs are not shrunk by the burden share. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Preserve campaign totals for each protocol; aggregation divides the attributable amount by accepted net noil mass in kg and reports per 1 kg reference flow. Physical joint-product quantities are normalized without burden allocation. Retain raw and normalized records separately.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_joint | joint_combing | feed and separated outputs | lot weighing | lot; species; received state; net feed; top mass; unbaled noil mass; stock movements; measured moisture; existing oil | Calibrated scale and lot-linked moisture tests at receipt and separation; reconcile supplier and mill records | kg | each lot | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_noil | noil_finishing | noil transfer, acceptance and reject | lot weighing and inspection | lot; transferred mass; accepted net noil mass; reject mass; tare; moisture; specification; stock changes | Weigh on calibrated scales excluding sacks; preserve actual measured moisture and purchaser inspection records | kg | each lot | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_energy | joint_combing; noil_finishing | electricity | meter readings | stage; meter ID; start and end kWh; operating hours; idle time; allocation share; supplier | Dedicated meters or documented tested submetering balance; separate noil-only from common electricity | kWh | each shift and campaign | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_auxiliary | joint_combing | mineral oil and spent oil | maintenance records | oil identity; issued mass; retained stock; collected spent mass; destination; shared-line hours | Inventory reconciliation and weighed waste containers; confirm mineral-base composition from supplier records | kg | each maintenance event | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_residue | joint_combing | plant residue and captured fibre dust separately | weighed transfer records | separate stream ID; gross mass; tare; moisture; composition; destination | Weigh each separate stream and retain waste manifests; avoid mixing airborne and collected dust | kg | each removal event | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_air | joint_combing | external particulate release | emission monitoring | outlet; discharge medium; size fraction; concentration; exhaust volume; duration; control status | Representative monitoring at actual external outlet; reconcile test duration and campaign exhaust records | kg | representative operating conditions and campaign | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_pack | noil_finishing | polypropylene sacks | packaging consumption | configuration; empty sack mass; issued count; returns; reuse history | Weigh actual empty sacks; reconcile production issues and returns; keep every component separate | kg | each configuration and campaign | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |
| cp_allocation | joint_combing | joint-production allocation | gate value and causal evidence | all marketable outputs; dry and dispatch mass; prices; currency; period; gate; method; causal test | Retain same-period sales/transfer prices at separation and physical study where used; exclude top downstream value added | kg; currency | each campaign and price period | Complete declared campaign covering all included shifts; disclose seasonality and missing records | Named mill and actual included stages | per 1 kg reference flow | Calibration; traceable lot records; reconciliation; gap assessment |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | Attributable campaign exchange / accepted net noil mass in kg; output per 1 kg reference flow. Keep gross joint masses and the allocation ledger separately. | cp_joint; cp_noil; cp_energy; cp_auxiliary; cp_residue; cp_air; cp_pack; cp_allocation | exchange amount per reference flow |  |
| energy_conversion | joint_electricity; finishing_electricity | Metered kWh × 3.6 = MJ; preserve meter readings and apply attribution before campaign normalization. | cp_energy | MJ per reference flow |  |
| moisture_reconciliation | carded_wool_input; unbaled_noils_output; unbaled_noils_input; combed_wool_coproduct; reference_product_noils; rejected_noil_fibre | Dry mass = net wet mass × (1 − measured wet-basis moisture fraction). Compare opening stocks + input against outputs + closing stocks on dry basis and explain residuals. | cp_joint; cp_noil; cp_residue | dry-matter balance; measured reference mass preserved |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | fibre and route | Verify sheep-wool source, prior scouring/carding, absence of excluded treatments, and purchaser acceptance; do not substitute a fine-hair route. | Supplier declarations and test records |
| dq_completeness | all exchanges | Record yield, stock movements, rejects, utilities, maintenance and discharge interfaces; distinguish absent, unmeasured and excluded. No default formula, temperature, energy, yield or loss. | Full campaign ledger and gap register |
| dq_uncertainty | measurements and allocations | Disclose calibration, moisture testing, representative emission monitoring, allocation price period, uncertainty and sensitivity. No generic quality approval follows from compliance with this PCR. | Instrument and allocation evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | Require all reference qualifiers and exact dry-route starting state; flag fine hair, wet treatment or yarn manufacture as uncovered. | woolmark-topmaking |
| validate_balance | mass and internal transfers | Verify positive accepted net noil denominator, identical EN/ZH reference row, calibrated weighing, moisture conversion, stock reconciliation and cancellation of internal noil transfer. Investigate unexplained mass discrepancies; no invented tolerance. |  |
| validate_allocation | joint ledger | Verify separation gate, all marketable outputs, directly attributed stages, evidence for common allocation and shares summing to one. Reject zero-burden noils without a separately justified method. | ghg-product-2011 |
| validate_interfaces | flow identities and emissions | Match exact property, unit, environmental compartment and route for every identity. Missing emission monitoring is inconclusive, not zero. Unresolved identities remain declared gaps; no substitution by spinning waste or generic raw wool. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for the declared noil route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared sheep-wool noil supply in downstream textile modelling with verified upstream links and allocation |
| excluded_use | Full CPC coverage, fine hair, dyed/carbonised noils, zero-burden recycled fibre, yarn performance comparisons and automatic cradle-to-gate claims |
| required_metadata | Site and period; lot composition; starting state; process coverage; acceptance; moisture/mass basis; noil and top outputs; upstream links; packaging; allocation and prices |
| required_quality_disclosure | Identity gaps; measurement completeness; exclusions; uncertainty; sampling representativeness; allocation sensitivity and LCIA coverage of particulate flow |
| update_trigger | Change in fibre source, received state, combing technology, treatment, packaging, allocation prices, discharge monitoring or upstream representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Ver. 3.0 Structure, 30 June 2025, row 26140. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification title only; not a production method or approval |
| woolmark-topmaking | extension_guidance | The Woolmark Company, Top-making, undated official page, sections Gilling and Combing. https://www.woolmark.com/industry/product-development/wool-processing/worsted-top-making/ | Qualitative sheep-wool route and noil/top separation; no quantitative process assumptions or fine-hair extrapolation |
| ghg-product-2011 | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p. 63, Tables 9.1–9.2 (PDF p. 65). https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation hierarchy as a disclosed methodological reference; not current law, textile product certification or a noil-specific factor |
