---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hoopwood-split-poles-piles-pickets-and-stakes-of-wood-pointed-but-not-sawn-lengthwise-w-a256e150
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Untreated cleft pointed sweet-chestnut stakes

## 1. Scope and Applicability

This category covers individual untreated Castanea sativa stakes made by cleaving along the grain and pointing, delivered green or naturally seasoned. It supports production data for agricultural fencing and plant support, with each size and delivery-moisture class modelled separately. It does not establish equivalent structural performance or service life for different shapes.

The representative real form is a debarked cleft chestnut stake with a four-face point at the larger end, supplied without chemical treatment or artificial drying (eff-split-stake, p. 1). This manufacturer's specification supports a route example, not an industry yield, energy, lifetime, density or carbon-footprint default. Forestry practice independently distinguishes cleft fencing material, round stakes, sawn posts and other market assortments (forestry-practice-1958, chapter 17); its historic dimensions are not present-day requirements.

Hoopwood for hoops, unpointed split poles, structural piles, rough walking-stick/umbrella/tool-handle blanks and chipwood have distinct forms or functions and are excluded. Longitudinally sawn, turned, bent, drilled, profiled, preservative-treated and artificially dried products are excluded. Cross-cutting to length and trimming the point are allowed; sawing a longitudinal face to form a post is excluded. A classification label alone cannot widen this scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hoopwood-split-poles-piles-pickets-and-stakes-of-wood-pointed-but-not-sawn-lengthwise-w-a256e150 |
| classification_refs | CPC 3.0 31330; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Debarked, cleft, pointed Castanea sativa stakes for agricultural fencing or plant support; green or naturally seasoned |
| excluded_products | Hoopwood; unpointed split poles; structural piles; rough stick blanks; chipwood; sawn-lengthwise, turned, bent, drilled, profiled, treated or artificially dried products |
| representative_product | An individual debarked cleft Castanea sativa stake pointed on four faces at the larger end |
| production_route | Delivered untreated chestnut roundwood → grading and cross-cutting → debarking → grain cleaving → pointing → optional natural seasoning → acceptance and bundling |
| market_state | Finished individual stake at conversion-yard gate; declared delivery moisture and geometry; transport packaging excluded from net reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an individual pointed cleft stake for declared agricultural fencing or plant-support use |
| How much | 1 kg net accepted stake at declared delivery moisture |
| How well | Declared species, length, cleft section and point geometry; acceptance excludes broken or unsuitable pieces; no common strength class assumed |
| How long or cycle | One manufacturing and gate-delivery cycle; use-stage lifetime must be established by the downstream application |
| reference_flow_link | final_stake |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Foreground physical locator restricted to one actual finished individual stake specification, not an unspecified wood-containing assembly; actual product/provider, yard and campaign; measured net accepted gate mass B and calibration; no glue, binder, coating or chemical treatment; no artificial drying; Castanea sativa; agricultural fencing or plant support; dimensions and cleft geometry; pointing method and larger-end point; debarked; untreated; green or naturally seasoned; delivery moisture on dry basis; net mass excluding packaging; conversion-yard gate; actual equipment and electricity supply boundary |

Required qualifiers must appear in dataset metadata, process notes or the reference-flow description. The kilogram is a production reporting unit; it does not prove that stakes of different geometry deliver equivalent service. The broad Wood material identity is used only with these concrete stake qualifiers; it establishes no matched forestry or production background, supplier burden, strength, durability, certification, compliance or measured quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference_mass | final_stake | Mass | kg | Use calibrated net weighing of accepted stakes at gate moisture, subtracting packaging tare; raw fields and calibration in cp_mass. |
| same_denominator | all inventory rows | Row-specific property | Row-specific unit | Use per 1 kg reference flow throughout; collect all exchanges and accepted net mass over the same traced batch or reconciled campaign. |
| moisture_basis | wood_input; final_stake; bark_waste; offcut_waste; sawdust_waste | Mass | kg | Measure wet mass and oven-dry sample mass for the same material and time; dry-basis moisture fraction u = (wet mass - dry mass) / dry mass. Do not substitute wet-basis moisture or a generic species density (usda-wood-handbook-2021, p. 4–1). |
| electricity_unit | electricity | Net calorific value | MJ | This database property identifies electrical energy, not delivered thermal heat. Preserve the electricity meter boundary; 1 kWh = 3.6 MJ. Record purchased electricity once and include internal transformation losses; no steam or boiler heat is inferred. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered untreated Castanea sativa roundwood at the rough-conversion yard, with species, wet mass and moisture records |
| starting_condition_role | Upstream product input to foreground conversion, not an environmental wood-resource extraction |
| product_classification_scope | CPC 3.0 31330 is context; only untreated cleft pointed sweet-chestnut stakes are supported |
| recursive_input_rule | Exclude purchased finished stakes from this route. Rework inside the yard is an internal transfer; never count it as both new wood input and new product output. |
| upstream_dataset_requirement | Link an independently applicable forestry/harvest and delivered-roundwood dataset including actual transport to the yard; disclose its species, region, moisture, forestry carbon and allocation basis. A roadside dataset needs separately modelled delivery transport. |
| disclosure | Disclose whether the dataset is foreground gate-to-gate or includes upstream burdens; declare moisture, equipment, supply voltage, packaging, waste fate and route exclusions |

The foreground includes receiving, grading, cross-cutting to length, bark removal, grain cleaving, pointing, optional natural seasoning, handling, rejection, dust control, maintenance and bundling. Stages remain separately metered or observed within one aggregated foreground unit. There is only one final-product output; physical transfer between pointing, seasoning and bundling is internal, not another saleable reference output.

Natural seasoning is conditional: record stack arrangement, dates, site weather, initial/final moisture, rejects and handling energy. Green delivery may have no dedicated seasoning stage, but incidental storage moisture change still needs reconciliation. The Wood Handbook differentiates natural air drying from fan-assisted or heated drying (usda-wood-handbook-2021, p. 13–6); sawn-lumber schedules and moisture targets are not imported into stakes. Artificial drying is outside this supported route. A future extension must identify its actual equipment, heat source, water/condensate, drying emissions and measured energy; a kiln-dried lumber list is insufficient. Onsite combustion, fuel-powered equipment and heat/steam supply are excluded from this route and require additional atomic rows before application. Existing upstream biogenic CO2 exchanges must remain in the linked LCI; a climate-accounting convention cannot delete physical biogenic emissions. Stored product carbon is not an avoided-emission credit.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stake_conversion | Rough conversion and gate delivery | required | Declared manual or electrically powered cleaving and pointing route; no artificial drying or onsite combustion | foreground | 1 kg reference flow |

Stage observations in cp_route distinguish cross-cutting, debarking, cleaving, pointing, natural seasoning, sorting and bundling. Cleaving follows the grain using wedges or a splitter; the point is formed by controlled trimming, not by turning the stem or sawing longitudinal post faces. Equipment design, order and actual energy are site records, not assumed facts about every manufacturer.

### Process: Rough conversion and gate delivery (`stake_conversion`)


#### Inputs

##### Product flows

###### Untreated Castanea sativa roundwood, delivered to conversion yard (`wood_input`)

Record actual untreated unglued Castanea sativa roundwood delivered to this yard, with supplier and forestry origin, incoming dimensions and roundwood form, bark condition, wet mass, moisture and opening/closing stocks. Wood material is only the foreground physical locator for this separately described raw-wood input. Its use for both incoming roundwood and finished stakes does not make their states interchangeable or imply recursion, a matched upstream provider, transport or burden. Independently review the applicable upstream forestry/harvest and delivered-roundwood dataset and actual delivery transport before claiming upstream coverage.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_wood and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`

###### Alternating current (`electricity`)

Meter cross-cutting, debarking, splitting, pointing, dust extraction, internal handling and bundling where powered; no drying heat included. This UUID applies only to documented 1–35 kV grid supply to the yard; include onsite transformation and its losses. A different voltage or supply route requires an applicable separate identity. Verify actual supply geography, provider and year, grid mix and loss boundary before linking background electricity; this physical locator does not establish a generic world supply or a default production geography.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual exchange amount through cp_energy and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Lubricating oil (`lubricating_oil`)

Include petroleum-fraction lubricating oil replenishment only where equipment actually uses that oil. Reconcile opening/closing stock, purchases, retained lubricant, recovered oil and losses; do not use it for PAO or biodegradable chain oils.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_maintenance and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`

###### Polypropylene twine (`polypropylene_twine`)

Record PP twine leaving with shipped bundles, conditional on actual use. Its mass is outside net stake mass. Other packaging components require separate rows. Confirm actual supplied PP twine grade, geometry and supplier/use-state compatibility; the identity does not transfer farm-gate geography, an industry-average amount or a production background to this yard.

- Selected flow: Polypropylene twine `0f3c91d9-9f30-42ab-b5e4-0b3ce42cb0fe`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_pack and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

#### Outputs

##### Product flows

###### Untreated cleft pointed Castanea sativa stake, at conversion-yard gate (`final_stake`)

Record accepted net pointed-stake output once after optional natural seasoning and acceptance, excluding packaging. All exchange denominators refer to this same output mass. Wood material is the foreground locator for one actual debarked, grain-cleft, pointed Castanea sativa stake specification, with recorded dimensions, cleft section, point geometry, green or naturally seasoned moisture, untreated/unglued/uncoated state and yard/provider gate. It is distinct from incoming roundwood and does not establish measured mass or manufacturing background by itself.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

##### Waste flows

###### Bark (`bark_waste`)

Weigh removed bark leaving for external waste management; moisture and destination are recorded. Saleable bark is a coproduct and requires a separately verified product row before applying this draft.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_residues and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Offcut (`offcut_waste`)

Weigh actual loose non-agglomerated, untreated and unglued solid chestnut cross-cut ends, coarse pointing remnants and rejects discarded as offcuts, excluding bark, captured fine sawdust, airborne dust and internal rework. Record actual particle form, moisture, contamination and destination and verify receiver/provider acceptance of that waste state before matching waste management; the broad offcut identity establishes no treatment route or burden.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_residues and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### sawdust waste (`sawdust_waste`)

Weigh collected untreated sawdust and wood dust once; captured dust is solid waste, not an atmospheric emission. Use the untreated combustion-or-recovery identity only when the actual receiver and waste state fit the documented combustion or material-recovery branch; independently match its provider and management boundary. It does not mandate incineration or establish a disposal service, energy credit or waste-treatment background. Another destination requires separate identity/applicability review; keep captured dust separate from airborne emissions.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_residues and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Used lubricating oil (`spent_oil`)

Include actual recovered used lubricating oil leaving equipment for external handling. Document waste specification, stocks and treatment linkage; do not assume all oil input becomes this output.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_maintenance and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Record uncaptured wood dust to outdoor air in the PM2.5 fraction after control. Measure release boundary and size distribution; no sawmill PTE factor is imposed on cleaving or pointing.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_air and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Record the exclusive airborne fraction above PM2.5 and up to PM10; inclusive PM10 and PM2.5 totals must be differenced on the same sampling basis.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_air and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (> PM10) (`pmover10`)

Record outdoor-air wood dust above PM10; reconcile it with total particulate mass on the same sampling basis. Do not add inclusive PM10 or total dust as extra exchanges.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange amount through cp_air and divide by the same-period accepted net stake mass; retain absence evidence when demonstrably not used or emitted.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### water vapour (`water_vapour`)

For documented natural-seasoning or storage moisture loss, calculate evaporated water from paired dry/wet balances, separating rain ingress, liquid drainage and wood rejection. A mass difference alone does not prove evaporation. Only substantiated positive net evaporation belongs to this output; actual atmospheric moisture uptake, rain input and liquid drainage require separately identified atomic exchanges where they cross the boundary, never a negative water-vapour output or unexplained balance closure.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from the cp_moisture water balance and divide by the same-period accepted net stake mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moisture`

## 7. Allocation and Co-product Handling

Separate batches and meter stages first to avoid allocation where feasible. Keep a complete physical wood, moisture and carbon ledger before any burden allocation: incoming wood plus opening stock equals accepted output, residues, emissions and closing stock with measured reconciliation residuals. Internal stage links carry identical physical quantities at both ends. A coproduct's physical output is never multiplied by an allocation fraction.

This route's residue rows describe discarded wastes. If any bark, split offcut or sawdust has a separately sold function, identify it as a real coproduct with a verified atomic product row and documented end state before use. Burden allocation then requires an independently reviewed causal relationship or justified alternative, with site mass, moisture, value and sensitivity evidence. No universal mass/economic allocation share, displaced-fuel credit or avoided-disposal credit is specified. External waste management remains linked once; upstream forestry allocation must be disclosed separately.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | stake_conversion | final_stake | weighing | batch; accepted net kg; packaging tare; species; geometry; gate moisture; scale calibration |Weigh accepted batch on calibrated scale; exclude rejected stakes and packaging; Record denominator B as net accepted stake mass; retain the measured production total separately and divide raw exchange totals by B once under normalize_batch. | kg | each accepted batch | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | calibration and acceptance records |
| cp_wood | stake_conversion | wood_input | receiving records | batch; supplier; species proof; delivered wet kg; moisture; bark state; upstream dataset; transport coverage; stock |Weigh delivered chestnut logs and reconcile opening/closing stock and traced upstream delivery; Calculate the recorded numerator as follows: consumed delivered roundwood; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | kg | each received lot | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | species, weighbridge and supplier records |
| cp_energy | stake_conversion | electricity | meter records | meter starts/ends; kWh; interval; voltage; supply mix; transformer losses; stage; other users; accepted net kg |Read calibrated meters and isolate actual attributable demand; reconcile to purchased supply; Calculate the recorded numerator as follows: attributable purchased kWh × 3.6; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | MJ | each batch or reconciled campaign | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | meter calibration and supplier supply-boundary records |
| cp_maintenance | stake_conversion | lubricating_oil; spent_oil | maintenance records | oil specification; opening/closing stock; purchases; replenishment; retained kg; recovered used kg; leakage assessment; accepted net kg |Measure net consumption and recovered used oil independently; inspect loss pathways; Calculate the recorded numerator as follows: each distinct input or output kg; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | kg | each service event reconciled to campaign | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | oil specification, service logs and waste transfer records |
| cp_pack | stake_conversion | polypropylene_twine | packing records | twine polymer; packaging issue/return kg; bundle count; accepted net kg; other packaging |Weigh PP twine issued less returns and reconcile material actually shipped; Calculate the recorded numerator as follows: shipped twine kg; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | kg | each shipping batch | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | packing records and material specification |
| cp_residues | stake_conversion | bark_waste; offcut_waste; sawdust_waste | weighing and waste records | separate residue type; wet kg; dry-basis moisture; stage; destination; sold/discarded status; stocks; accepted net kg |Weigh segregated residue streams; reconcile mass, dust capture and destinations; Calculate the recorded numerator as follows: each distinct waste kg; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | kg | each batch and transfer | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | weighing, moisture and destination records |
| cp_air | stake_conversion | pm25; pmcoarse; pmover10 | emission measurements | operation; exhaust/fugitive boundary; sampled air volume; mass; particle fractions; control status; activity; sampling uncertainty; accepted net kg |Measure actual outdoor releases with validated particle-size sampling and traced activity integration; characterize fugitive releases separately; Calculate the recorded numerator as follows: each exclusive emitted particle fraction kg; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | kg | representative operating states and campaign reconciliation | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | sampling methods, calibration, exhaust/fugitive coverage and uncertainty |
| cp_moisture | stake_conversion | water_vapour | paired moisture and water records | batch; stage; wet kg; oven-dry sample kg; stack dates; weather; rain ingress; drainage kg; rejects; stocks; accepted net kg |Use paired same-lot wet/dry samples and traceable mass records; reconcile actual seasoning/storage water loss separately from liquid drainage; Calculate the recorded numerator as follows: evaporated water kg; retain the matched complete-campaign raw total and divide by B once only under normalize_batch. | kg | receiving, before/after storage and dispatch | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | sample representativeness, drying-test records and water balance |
| cp_route | stake_conversion | all inventory rows | site observation | stage order; equipment; manual/electric operation; natural seasoning; absence of chemical/artificial drying/combustion; all utility/material/waste/emission pathways |Inspect actual process and supplier records; identify all conditional and unlisted physical exchanges; Route-record scope: route records refer to the same batch or campaign and per 1 kg reference flow. | stage records | initial survey and every route change | Same traced campaign including storage and dispatch | One documented conversion yard | per 1 kg reference flow | process survey, photos, equipment and supplier records |

All raw numerator quantities are campaign totals, divided once by the same accepted net gate mass B (kg). B is measured, never a guessed conversion from stake count. Counts and geometric volume are supplementary QA; volume-to-mass use requires the same lot's measured density and moisture. No generic density, yield, energy or emission factor is specified. The following balances retain physical totals before normalization or burden allocation.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Each campaign exchange total is divided once by accepted net gate mass B in kg; final_stake is 1 kg. | campaign exchange totals; B; cp_mass | exchange amount per 1 kg reference flow |  |
| dry_wood_balance | wood_input; final_stake; bark_waste; offcut_waste; sawdust_waste | For each wood stream, dry mass = wet mass / (1 + u); reconcile dry wood inputs plus opening stock against outputs plus closing stock, including airborne wood dust and quantified losses. | wet masses; u; stocks; cp_moisture; cp_residues; cp_air | physical dry-wood ledger before allocation | usda-wood-handbook-2021 |
| water_balance | water_vapour | Evaporated water = incoming wood water + opening water stock + rain ingress - outgoing wood/residue water - closing water stock - liquid drainage; retain a separate reconciliation residual and do not force it to evaporation. | paired wet/dry mass; water ingress; drainage; stock; cp_moisture | evaporated water campaign kg; normalized water_vapour | usda-wood-handbook-2021 |
| particle_partition | pm25; pmcoarse; pmover10 | On the same sampling basis, PMcoarse = PM10 - PM2.5 and PMover10 = total particulate - PM10. Check ordered nonnegative totals; final exchanges are PM2.5, PMcoarse and PMover10 only. | cp_air; total particulate; PM10; PM2.5 | three exclusive airborne particle fractions |  |
| carbon_balance | wood_input; final_stake; bark_waste; offcut_waste; sawdust_waste | Use measured dry mass and species/lot-specific carbon evidence for wood streams; reconcile carbon inputs, stocks, outputs and documented releases before burden allocation. Keep biogenic carbon separate from fossil lubricant/packaging carbon. No universal carbon fraction or sink credit. | cp_wood; cp_mass; cp_residues; cp_air; lot carbon evidence | physical wood-carbon ledger and explicit uncertainty |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_coverage | all inventory rows | Survey every actual input/output. Missing fuels, chemicals, packaging, liquids or VOC species require separate atomic rows and applicable identities before application. Do not treat an unavailable measurement as zero. | cp_route and measured process records |
| identity_state | wood_input; final_stake | Confirm each row’s actual species, physical form, processing route, moisture, provider gate, property and unit. A broad foreground material identity is applicable only with these specific row qualifiers; incoming roundwood and finished pointed stakes remain distinct exchanges even with the same UUID. Contradictory routes cannot substitute; matching provider/background burdens and measured quantities require independent evidence. | supplier/product specifications and verified flow records |
| mass_reconciliation | all inventory rows | Same batch boundaries, net B, stocks, wood, water and carbon balances; retain uncertainty and explain residuals; no invented closure tolerance. | cp_mass; cp_wood; cp_residues; cp_moisture |
| emission_coverage | pm25; pmcoarse; pmover10; water_vapour | Measure post-control outdoor emissions and document subcompartment; unspecified air may not imply high-stack or urban conditions. Check VOC/leaching/drainage pathways and extend inventory for each actual species or stream. | cp_air; cp_moisture; cp_route |
| conditional_absence | all inventory rows | Record measured amount or documented non-applicability for each row; manual operation does not justify assumed absence of all handling energy or emissions. | site survey and campaign records |

## 9. Validation Rules

- Require exactly one final_stake reference output of 1 kg net accepted stakes, with identical denominators and paired Chinese/English rules.
- Check Castanea sativa, grain cleaving and pointed finished state; reject longitudinal sawing, turning, bending, profiling, treatment or artificial drying.
- Require measured B and complete batch/stock reconciliation, including water and unallocated physical carbon ledgers. Nonnegative amounts and explained uncertainty are required; do not invent parameter values.
- Confirm each adopted UUID's type, property, unit, route and compartment; complete actual qualifiers and supplier/background compatibility before claiming a complete finished dataset. The broad foreground wood locator alone does not prove a matched background or collected amount; do not replace Waste or Elementary identities with Product flow material.
- Require accepted qualifiers, actual route coverage and absence evidence; uncharacterized emissions or unsupported heat supply remain unresolved.
- Add only exclusive airborne particle fractions. Captured dust is a distinct solid stream. Never infer an environmental release from a technosphere waste row or count an upstream process emission twice.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate stake-conversion dataset; upstream extension only with applicable delivered-roundwood and waste-management datasets |
| downstream_use | secondary_dataset; background_dataset only after actual physical qualifiers, complete collected data and independently compatible provider/background evidence are established |
| allowed_use | Production of the declared untreated cleft pointed Castanea sativa stake geometry and green/naturally seasoned delivery state |
| excluded_use | Whole-leaf CPC coverage; hoopwood, poles, structural piles, handle blanks, chipwood; sawn, turned, bent, treated or artificially dried routes; unsupported service-life comparisons |
| required_metadata | Species, geometry, use, point shape, moisture, net reference mass, site, campaign, upstream transport and allocation, equipment, grid boundary, waste fate, packaging and emission coverage |
| required_quality_disclosure | Specific foreground identity qualifiers and unresolved provider/background compatibility, measured/estimated/skipped exchanges, natural-seasoning state, mass/water/carbon residuals, uncertainty, route exclusions and any burden allocation |
| update_trigger | New reference identity; different species/form/use, treatment/drying/energy route, packaging, coproduct or observed emission pathway |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eff-split-stake | literature | EFF Piquets, Fiche technique Piquet fendu, p. 1; https://www.eff-piquets.fr/wp-content/uploads/2025/10/Fiche-technique-Piquet-fendu.pdf | Representative species, cleft/debarked/pointed form and absence of artificial drying/chemical treatment; no lifetime or carbon claims adopted |
| forestry-practice-1958 | official_guidance | Forestry Commission, Forestry Practice, Bulletin 14, seventh edition 1958, chapter 17, printed pp. 76–77; https://cdn.forestresearch.gov.uk/1958/04/fcbu014_7ed.pdf | Independent historic distinction between timber market assortments; no numeric defaults |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook, FPL-GTR-282 (2021), printed pp. 4–1, 13–6; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Dry-basis moisture definition and distinctions between natural and artificial drying; no sawn-lumber schedules or industry parameters |
