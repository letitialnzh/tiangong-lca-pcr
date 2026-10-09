---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.undyed-pet-staple-ring-spun-yarn
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Undyed virgin PET staple ring-spun yarn manufacture

## 1. Scope and Applicability

This method covers mill-gate manufacture of undyed, unsized, single ring-spun yarn from purchased uncarded virgin polyethylene terephthalate (PET) staple fibres. The fibrous component is entirely PET staple, and synthetic staple fibre accounts for at least 85% of net yarn product mass on the declared weighing basis. This is a bounded representative subset of CPC 26430, not coverage of the whole classification. The CPC title establishes a product distinction, not a compulsory processing sequence [unsd-cpc-2025].

Polyamide, acrylic, polypropylene and other polymers; co-fibre blends; recycled or mechanically reclaimed fibre; compact, rotor and air-jet spinning; filament yarn; sewing thread; plied yarn; dyed, dope-coloured, sized or heat-set yarn are outside this authored route. These need separate applicability review, not silent substitution. Opening/card preparation is supported for pure man-made fibre, distinct from cotton cleaning or cotton combing [truetzschler-ring-preparation]. The ring route is distinguished from other commercially available spinning routes [rieter-man-made-system].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.undyed-pet-staple-ring-spun-yarn |
| classification_refs | CPC 3.0: 26430 (narrower; classification context only) |
| covered_products | Undyed unsized single ring-spun yarn with exclusively virgin PET staple fibre components and synthetic staple share at least 85% of declared net yarn mass |
| excluded_products | Other polymers; blends; recycled fibre; other spinning routes; filament; sewing thread; ply, dyeing, sizing and heat-setting routes |
| representative_product | Undyed virgin PET staple ring-spun yarn |
| production_route | Uncarded staple bales → opening → carding → drawing → roving → ring spinning → winding → acceptance and pack-out |
| market_state | Accepted single yarn on declared winding package at spinning mill gate, before textile fabrication or finishing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a specified spun yarn intermediate for weaving or knitting |
| How much | 1 kg net accepted yarn |
| How well | Declared yarn linear density, twist direction and level, breaking-force and evenness acceptance criteria, moisture condition, virgin PET composition and winding form; use actual customer/plant specification, not default thresholds |
| How long or cycle | One accepted production lot; no use-phase service life asserted |
| reference_flow_link | `finished_pet_yarn` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Undyed virgin PET staple ring-spun yarn |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PET polymer and virgin status; uncarded staple feed state; cut length and fineness; fibre and total-product composition basis; residual finish; moisture/conditioning and tare method; yarn linear density and twist; ring route; quality acceptance; winding tube and packaging configuration; factory, supply voltage, electricity geography and reporting period; included auxiliaries and exclusions |

Declare all qualifiers in the concrete dataset. This mass reference is a production declared unit, not functional equivalence across yarn counts, polymer types or textile lifetimes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net lot mass; exclude tube and box tare and rejected yarn; declare conditioning basis and link cp_output. |
| `mass_reconciliation` | material rows | Mass | kg | Reconcile inputs, accepted yarn, each waste, measured emissions, returns and work-in-process on the same moisture basis. Do not interpret moisture changes as polymer loss. |
| `meter_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve meter kWh; use the verified energy unit group when conversion is necessary; never express electricity as kg. |
| `composition_basis` | reference yarn | Mass | kg | Verify exclusively PET staple fibre components and at least 85% synthetic staple mass in net product on the declared basis; separately disclose moisture and finish, without inventing recipe values. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased uncarded virgin PET staple bales at mill receipt, already polymerised, spun into fibre, drawn, cut and supplier-finished |
| starting_condition_role | External material input to yarn manufacture |
| product_classification_scope | Representative narrower subset of CPC 26430; classification is not automatic methodological coverage |
| recursive_input_rule | Record external same-category yarn once with its upstream dataset if present; internal sliver, roving and return loops are transfers, not new external purchases. Same-category yarn feed changes this route and requires review. |
| upstream_dataset_requirement | Separate compatible upstream PET staple manufacture, electricity and packaging datasets; supplier finish remains inside fibre supply, with no double-counted mill application |
| disclosure | Gate-to-gate foreground only; state actual starting material, stages, auxiliary coverage, moisture basis, supply identity and missing upstream coverage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | foreground | Include preparation, ring spinning and winding as separately collected stages; no cotton cleaning or combing is compulsory for this virgin PET route. | `rieter-man-made-system`; `truetzschler-ring-preparation` |
| `boundary_auxiliaries` | site services | Include attributable suction, compressor and air-conditioning electricity without double counting. If humidification water, added lubricant, maintenance oil or a utility purge actually occurs, add one specific atomic row and collection record per real exchange, keeping purchased water, resource abstraction, wastewater and air emission distinct. Do not assume these occur. |  |
| `boundary_exclusions` | upstream and downstream | Exclude raw-resource extraction, PET synthesis and fibre manufacture from the foreground; exclude agricultural fibre production because no agricultural co-fibre is used. Dyeing, sizing, textile manufacture, outbound transport, use and disposal are outside this gate. Link upstream datasets before any cradle-to-gate claim; separately disclose capital equipment and infrastructure exclusions. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Opening and carding | required | Declared virgin PET ring route | Stage in one connected mill foreground; internal intermediates not counted as external flows | per 1 kg reference flow |
| `spin` | Drawing, roving and ring spinning | required | Declared virgin PET ring route | Stage in one connected mill foreground; internal intermediates not counted as external flows | per 1 kg reference flow |
| `finish` | Winding, quality release and pack-out | required | Declared virgin PET ring route | Stage in one connected mill foreground; internal intermediates not counted as external flows | per 1 kg reference flow |

Process records must retain individual opening, carding, drawing, roving, ring-spinning and winding submeter/runtime or lot records even when displayed within one stage. Connect internal sliver/roving transfers by lot and dry-mass reconciliation; do not give each intermediate a second burden. The listed conditional waste, dust and packaging rows are not claims of universal occurrence.

### Process: Opening and carding (`prepare`)

Opening separates the received bales into fibre tufts; carding separates and aligns fibres into sliver. Record the actual equipment chain and sliver transfers without treating polymer synthesis, fibre melt-spinning or cotton trash cleaning as these operations. Internal sliver is reconciled with the next stage rather than counted as a second purchased input.

#### Inputs

##### Product flows

###### pet staple input (`pet_staple_input`)

Receive uncarded virgin PET textile staple bales; declare staple length, fineness, crimp, finish and moisture. This identity is not recycled fibre, filament tow or purchased sliver.

- Selected flow: Polyester short fiber `03377e13-45a0-4774-9cc8-37c8c60523f2`
- Flow property / unit: Mass / kg
- Amount rule: Weigh issued fibre minus unused returns; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `truetzschler-ring-preparation`

###### prepare electricity (`prepare_electricity`)

Meter electricity for opening and carding, including attributable suction and compressed-air generation. The selected supply is CN user-side grid mix below 1 kV; use it only for matching supply, and identify another actual supply separately.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Matched-interval meter difference after documented allocation; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### prepare pet fibre waste (`prepare_pet_fibre_waste`)

Segregated loose PET fibre removed at this stage crosses the gate as waste, without a specified treatment. The broad PET-waste identity includes textiles; retain loose-fibre form, finish content and destination qualifiers. Do not use it for mixed-fibre or contaminated waste.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Weigh net removed PET fibre waste after container tare; divide by matched accepted net yarn mass in kg from cp_output. Internal returns are not gate waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### pet dust air (`pet_dust_air`)

Conditional: include only measured atmospheric particulate release from opening/carding exhaust or documented fugitive sources. The selected identity is air, unspecified subcompartment and particle size; retain PET origin and use a more specific identity if the measured size or receiving subcompartment is established; collected filter fibre belongs to the waste row. No emission factor or inevitable release is asserted.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Use measured released particle mass for the matched period; divide by matched accepted net yarn mass in kg from cp_output. Document absence or unmeasured status; never assume zero from missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

### Process: Drawing, roving and ring spinning (`spin`)

Drawing evens and drafts the sliver; roving prepares a drafted intermediate for the selected ring route; ring spinning drafts and inserts the specified yarn twist. Retain actual passage counts, production settings, break/restart records and the assigned suction/compressor load. Neither spinning speed nor temperature is fixed by this PCR.

#### Inputs

##### Product flows

###### spin electricity (`spin_electricity`)

Meter electricity for drawing, roving and ring spinning, including attributable suction and compressed-air generation. The selected supply is CN user-side grid mix below 1 kV; use it only for matching supply, and identify another actual supply separately.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Matched-interval meter difference after documented allocation; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### spin pet fibre waste (`spin_pet_fibre_waste`)

Segregated loose PET fibre removed at this stage crosses the gate as waste, without a specified treatment. The broad PET-waste identity includes textiles; retain loose-fibre form, finish content and destination qualifiers. Do not use it for mixed-fibre or contaminated waste.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Weigh net removed PET fibre waste after container tare; divide by matched accepted net yarn mass in kg from cp_output. Internal returns are not gate waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Winding, quality release and pack-out (`finish`)

Winding forms the declared package and removes faults according to the actual quality specification; document splicing, rejects and net released yarn separately. The tube and outer box are recorded individually when used, remain outside net yarn mass and do not establish textile function or lifetime.

#### Inputs

##### Product flows

###### finish electricity (`finish_electricity`)

Meter electricity for winding, quality release and pack-out, including attributable suction and compressed-air generation. The selected supply is CN user-side grid mix below 1 kV; use it only for matching supply, and identify another actual supply separately.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Matched-interval meter difference after documented allocation; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### pp winding tube (`pp_winding_tube`)

Conditional for a declared polypropylene tube configuration. Count and weigh tube tare separately; reusable bobbins within the mill are internal equipment. Do not substitute polypropylene resin or polypropylene yarn for a formed tube.

- Selected flow: Polypropylene winding tube
- Flow property / unit: Mass / kg
- Amount rule: Record net new tubes delivered with accepted yarn or attributable replacement consumption from a measured return system; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### corrugated box (`corrugated_box`)

Conditional when this box is actually used at dispatch. Record board composition, recycled content and box mass; a public flow with a fixed fibre recipe does not identify all site boxes.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Weigh boxes issued minus unused returns; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### finished pet yarn (`finished_pet_yarn`)

Reference output after winding and lot quality release. All fibre components are virgin PET staple; residual finish and moisture are separately declared and the product meets the stated synthetic-fibre mass-share criterion. Packaging is not yarn mass.

- Selected flow: Undyed virgin PET staple ring-spun yarn
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `unsd-cpc-2025`

##### Waste flows

###### pet yarn waste (`pet_yarn_waste`)

Record rejected PET yarn and yarn cut ends removed at winding as one segregated PET-yarn waste stream. Keep yarn form and finish content explicit; internally reprocessed yarn is not simultaneously exported as waste.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Weigh net PET yarn waste removed after container tare; divide by matched accepted net yarn mass in kg from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_direct` | all stage records | Separate product lines and lots first. Directly measured fibre, yarn, rejects and dedicated-meter utilities belong to the matching lot. |  |
| `allocate_shared` | shared electricity and auxiliaries | Use a site-verified physical driver: measured power integrated over operating time for motors, or metered air volume for a shared compressor. Include idle load consistently. Mass allocation is allowed only when site evidence supports comparable per-mass demand. Preserve driver records, excluded products and a sensitivity comparison; no fixed allocation coefficient is supplied. |  |
| `allocate_returns` | PET waste and internal returns | Measure each internal return once and reconcile inventory stocks; do not count it as both virgin input and exported waste. Exported waste carries no automatic avoided-virgin-PET credit. A saleable co-product requires documented physical/economic relationship and explicit allocation sensitivity, rather than a silent waste credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | prepare | pet_staple_input | warehouse issue and supplier specification | lot; issued kg; returned kg; opening/closing stock; PET grade; virgin status; length; fineness; crimp; finish; moisture; supplier | Calibrated weighing, warehouse reconciliation and supplier certificate; verify uncarded incoming state; Net issued mass / matched accepted yarn kg; adjust stock change | kg | each lot | Actual declared reporting period, representative of all included runs and downtime | Declared mill and connected PET ring-yarn line | per 1 kg reference flow | scale calibration; lot certificate; stock ledger |
| `cp_energy` | prepare; spin; finish | electricity | submeter and runtime records | subprocess; meter; start/end kWh; idle time; operating time; compressor volume; allocation driver; voltage; location | Read calibrated submeters for each subprocess; reconcile motors, suction, compressor and conditioning with the plant total; Assigned meter difference / matched accepted yarn kg | kWh | each meter interval | Actual declared reporting period, representative of all included runs and downtime | Declared mill and connected PET ring-yarn line | per 1 kg reference flow | meter export; equipment map; allocation worksheet |
| `cp_output` | finish | finished_pet_yarn | lot weighing and quality release | lot; gross yarn package kg; measured tube tare kg; box tare kg; rejected kg; accepted net kg; conditioning; fibre composition; count; twist; acceptance criteria and results | Weigh released net yarn with calibrated scale and actual configuration tare; reconcile rejects and matched moisture test; Sum accepted net yarn kg; reference output is 1 kg reference flow | kg | each lot | Actual declared reporting period, representative of all included runs and downtime | Declared mill and connected PET ring-yarn line | per 1 kg reference flow | scale calibration; tare sampling; release record; composition evidence |
| `cp_waste` | prepare; spin; finish | PET fibre and yarn waste separately | segregated waste weighing | stage; stream; gross kg; container tare kg; moisture; finish; composition; destination; returned kg | Weigh labelled containers per stage; separate loose fibre from yarn and internal recovery from exported waste; Each exported stream net kg / matched accepted yarn kg | kg | each removal | Actual declared reporting period, representative of all included runs and downtime | Declared mill and connected PET ring-yarn line | per 1 kg reference flow | waste transfer; scale record; destination and classification |
| `cp_air` | prepare | pet_dust_air | conditional emission monitoring | source; air subcompartment; particle definition; concentration; exhaust volume; duration; uncertainty; captured fraction | Use site air monitoring with consistent concentration and volume basis and actual operating coverage; keep captured fibre out of the released amount; Measured released kg / matched accepted yarn kg; no missing-data zero | kg | each representative measurement and reporting interval | Actual declared reporting period, representative of all included runs and downtime | Declared mill and connected PET ring-yarn line | per 1 kg reference flow | monitoring report; exhaust flow calibration; scope and detection limit |
| `cp_packaging` | finish | PP tube and corrugated box separately | conditional issue, tare and return records | component; count; measured net kg; composition; supplier; unused return; actual reuse rotations; loss; replacement; shipped configuration | Weigh each packaging component separately; establish actual count-to-kg relationship and measured reuse history, without assumed tube life; Each attributable component net kg / matched accepted yarn kg | kg | each issue/dispatch lot | Actual declared reporting period, representative of all included runs and downtime | Declared mill and connected PET ring-yarn line | per 1 kg reference flow | weighing; issue/return ledger; composition certificate; reuse ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | Divide each matched-period attributable net exchange amount by the same accepted net yarn mass in kg from cp_output; preserve original quantity and unit. The finished yarn output equals 1 kg. | net exchange; accepted net yarn kg; cp_output | exchange unit per 1 kg reference flow |  |
| `calc_reconcile` | material rows | Compare external net fibre input and measured stock decrease with accepted net yarn, each exported waste, measured emissions and stock increase on one moisture basis. Report the unclosed difference; investigate returns and finish/moisture movement rather than inventing a loss factor. | cp_material; cp_output; cp_waste; cp_air; stock and moisture records | mass balance and disclosed residual |  |
| `calc_particle_release` | pet_dust_air | Multiply measured particulate concentration by exhaust volume for the same sampling state and time; convert reported concentration units explicitly, integrate actual operating intervals and preserve uncertainty. This is not an assumed emission factor. | cp_air | measured released particulate kg |  |
| `calc_packaging_mass` | pp_winding_tube; corrugated_box | Convert counted components using their contemporaneously measured unit tare mass; assign replacement consumption only from documented actual return and rotation records. | cp_packaging | attributable packaging kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | incoming and finished fibre composition | Verify virgin PET, staple rather than filament, incoming processing state, residual finish and conditioning; retain composition and lot links. | supplier and lot test records |
| `quality_acceptance` | finished_pet_yarn | Use actual yarn count, twist, evenness and strength specification and rejection records; no health or regulatory approval is inferred. | quality release and customer specification |
| `quality_coverage` | all inventory | Cover all included subprocesses and ancillary exchanges; document actual absent rows, measurement gaps, meter overlaps, stock changes and reporting representativeness. No default recipe, temperature, energy, loss or output yield is provided. | line map, meter reconciliation and completeness ledger |
| `quality_uncertainty` | measurements and allocation | Declare calibration, detection limits, sampling coverage, actual measurement uncertainty and allocation sensitivities; proposed ranges require evidence before use. | calibration and uncertainty records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product and route | Reject this route for recycled fibre, blends, non-PET polymers, filament, sewing thread or an alternative spinning/treatment route; require all reference qualifiers and composition evidence. | `unsd-cpc-2025` |
| `validate_mass` | reference and inventory | Require positive accepted net yarn mass, tube/box tare exclusion, matching moisture basis and per 1 kg reference-flow denominator. Investigate unreconciled polymer/finish/water balance without inventing tolerances. |  |
| `validate_atomic_identity` | all flow rows | Check one exchange per row, correct product/waste/elementary type, public identity qualifiers and actual reference property/unit. Blank UUIDs remain explicit identity gaps. Air particulate is not captured fibre waste; no assumed direct emissions from purchased electricity. |  |
| `validate_complete_boundary` | dataset coverage | Require stage and ancillary completeness, conditional-row applicability decisions, dated collection and defensible allocation. Missing emissions monitoring is inconclusive, not zero. Foreground-only results cannot claim complete cradle-to-gate coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Mill foreground process dataset for one declared PET ring-yarn specification |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible weaving/knitting supply modelling after identity and boundary review; upstream links added separately |
| excluded_use | Automatic whole-CPC coverage; comparison of unlike yarn functions; other polymers, recycled routes, sewing thread or wet finishing; methodology approval from structural checks |
| required_metadata | All reference qualifiers; lot links; inventory units; factory and period; stage map; meter and allocation scope; virgin PET supply and electricity links; packaging; stock and reuse method |
| required_quality_disclosure | Foreground gate and unlinked upstream processes; actual data coverage and uncertainty; unresolved identities; conditional/absent rows; unmeasured emissions; allocation sensitivities and exclusions |
| update_trigger | Change in incoming fibre origin, composition or finish; spinning route; yarn specification; moisture/tare protocol; auxiliary configuration; electricity supply; packaging, allocation or new primary measurements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, PDF/printed p. 120, groups 2643–2644. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification distinction only; no process, yield or emission requirement |
| `truetzschler-ring-preparation` | handbook | Trützschler, Ring Spinning, sections Carded cotton / Pure man-made fibers and Reliable processing of man-made fibers, undated manufacturer page. https://www.truetzschler.com/en/spinning/applications/ring-spinning/ | Pure man-made fibre preparation and distinction from cotton combing; no numeric performance values adopted |
| `rieter-man-made-system` | handbook | Rieter, Unique Solutions for Processing Man-Made Fibers, sections Blowroom, Card, Draw frames, Roving frame, Ring spinning machine and Automatic winding machine; undated manufacturer page. https://www.rieter.com/products/system-applications/man-made-fiber-spinning-system | Physical stage decomposition and alternative-route distinction; no manufacturer productivity, loss, energy or equipment-life claims used as defaults |

Manufacturer pages support equipment functions, not quantitative plant inventories or independent environmental performance. All quantities, configurations, acceptance thresholds, allocations and conditional releases must come from the named foreground protocols; classification and machinery sources cannot supply missing factory data.
