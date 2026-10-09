---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.high-tenacity-pet-filament-greige-weaving
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# High-tenacity PET filament greige woven fabric manufacture

## 1. Scope and Applicability

This method covers manufacture of undyed, unsized, uncoated greige woven fabric from purchased already drawn high-tenacity continuous PET filament warp and weft yarn, through warping, drawing-in/reeding, mechanical weft insertion, inspection and rolling. The textile fibre component is exclusively PET, for subsequent industrial fabric conversion. This is a narrower representative route within CPC 26710, not coverage of the entire classification [unsd-cpc-2025]. Manufacturer originals establish commercial high-tenacity polyester greige fabric and untreated woven fabric, but do not establish that every manufacturer uses this route or omits sizing [ulong-greige]; [mehler-company-2025].

Excluded are nylon/other polyamides, viscose filament, other polymers and blends, staple yarn, strip-woven fabric, bonded cross-laid scrims, tyre cord, narrow bands, knitted fabric and nonwovens. Yarn polymerisation/spinning/drawing, on-site twisting/texturizing, sizing/desizing, washing, dyeing, printing, heat-setting, calendaring, dipping, coating and lamination are outside this authored route. The actual route must omit these operations; if present, review and extend applicability before use rather than omitting their burdens. Manufacturer distinctions between dry finishes, wet finishes and coatings show that greige cannot automatically be treated as finished fabric [mehler-company-2025].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.high-tenacity-pet-filament-greige-weaving |
| classification_refs | CPC 3.0: 26710 (narrower; classification context only) |
| covered_products | Full-width undyed unsized uncoated greige woven fabric with exclusively high-tenacity PET filament textile components |
| excluded_products | Other materials, non-high-tenacity yarn, staple, strip, bonded scrim, tyre cord, narrow bands, knitted and nonwoven products; on-site wet finishing, sizing, twisting or heat-setting routes |
| representative_product | High-tenacity PET filament greige woven fabric |
| production_route | Prepared high-tenacity filament packages → warping and drawing-in/reeding → mechanical weaving → inspection, rolling and pack-out |
| market_state | Accepted greige roll at weaving mill gate before finishing and industrial article conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a composition- and construction-specified high-tenacity filament woven intermediate for downstream conversion |
| How much | 1 kg accepted net greige fabric |
| How well | Declare warp/weft high-tenacity grade and test basis, linear density, weave, ends/picks, usable width, measured mass per area, moisture and finish condition, tensile and visual acceptance criteria; thresholds come from actual order and tests |
| How long or cycle | One accepted production batch; no use-life claim |
| reference_flow_link | `finished_greige` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | High-tenacity PET filament greige woven fabric |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PET and origin; warp/weft high-tenacity certification and test method; incoming drawn state, twist, finish, moisture and package; all-PET composition; documented no sizing; mechanical weaving type; weave, density, usable width, mass per area and acceptance; net-mass conditioning and tare; core and wrap; factory, geography, voltage and period; attributed utilities, emissions monitoring and boundary exclusions |

All required qualifiers must be present in the concrete dataset. This is a mass declared unit, not functional equivalence across strengths, constructions, applications or lifetimes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_output uses a calibrated scale for matched accepted net fabric mass, excluding core, wrap and rejects, with conditioning recorded. |
| `area_conversion` | area or length statistics | Mass and area | kg; m2 | Convert only with matched usable width, net length and measured mass per area: A = L × W; net mass = A × G / 1000, with L in m, W in m and G in g/m2. Catalogue nominal weight is not production output. |
| `energy_units` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve public reference energy property and meter kWh; 1 kWh = 3.6 MJ; never report electricity as mass. |
| `material_balance` | yarn, fabric and wastes | Mass | kg | Reconcile issued yarn, returns, stocks, residual beam yarn, net fabric, wastes and measured releases on consistent moisture/finish basis; finish and moisture changes are not PET loss. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased drawn high-tenacity PET filament packages, with required twist and supplier finish already applied, at weaving mill receipt |
| starting_condition_role | External yarn input, not fibre or agricultural production |
| product_classification_scope | Narrow high-tenacity PET greige woven subset of CPC 26710; other routes are not covered |
| recursive_input_rule | Internal beams and work-in-process cloth are lot transfers, not repeated purchases. External same-category fabric is recorded once with upstream linkage but requires review of the different reprocessing route |
| upstream_dataset_requirement | Link compatible high-tenacity filament grade/feed-state, actual electricity and packaging supply datasets; supplier yarn finish is not duplicated as mill application |
| disclosure | Weaving foreground is gate-to-gate; disclose geography, period, feed state, actual stages, auxiliaries, release data and unlinked upstream |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | Include receipt/warping, drawing-in/reeding, weaving, inspection, rolling, packing and attributable auxiliaries. Mechanical insertion does not cover all weaving technologies; air-jet and water-jet routes are not covered. | `mehler-engineered-fabrics` |
| `boundary_finish` | ending gate | Stop at untreated greige fabric; manufacturer finishing options are not compulsory operations. Actual finishing must not be hidden and requires prior method extension. | `mehler-company-2025` |
| `boundary_services` | utilities and releases | Include attributed climate-control and suction power and actual oil make-up/drain. If humidification water, cleaning, refrigerant leaks, packaging waste or other releases occur, add specific atomic exchanges and protocols; resource abstraction, purchased process water, wastewater and environmental release remain separate. Unmeasured status is a gap, not assumed zero. |  |
| `boundary_exclusions` | upstream and downstream | Resource extraction, polymerisation, filament manufacture and inbound transport lie outside this foreground. Agriculture is absent from the all-PET route. Downstream finishing, article assembly, transport, use and disposal are excluded. Disclose equipment/infrastructure exclusions and implications; do not claim complete cradle-to-gate before linking all upstream stages. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Yarn receipt, warping and loom preparation | required | Declared mechanical greige-weaving route | Stage of one connected foreground | per 1 kg reference flow |
| `weave` | Mechanical weaving and attributable utilities | required | Declared mechanical greige-weaving route | Stage of one connected foreground | per 1 kg reference flow |
| `release` | Inspection, rolling and pack-out | required | Declared mechanical greige-weaving route | Stage of one connected foreground | per 1 kg reference flow |

Retain subprocess lot and measurement records. Beams, loom work-in-process and uninspected cloth are internal transfers linked by lot and mass, not additional external input. Conditional rows are included only when present; absence needs evidence and missing measurements require disclosure.

### Process: Yarn receipt, warping and loom preparation (`prepare`)

Receive packages, verify high-tenacity certificates/feed state, warp and draw-in/reed; record net beam yarn, remnants and internal transfers. This stage does not manufacture filament or mandate twisting/sizing.

#### Inputs

##### Product flows

###### High-tenacity PET filament warp yarn (`warp_pet_yarn`)

Purchased already drawn high-tenacity continuous PET filament yarn on packages; certify composition, tenacity, linear density, twist, finish and moisture. Warp preparation does not include polymerisation, melt spinning or drawing. This unsized route requires documented no-size weaving suitability.

- Selected flow: High-tenacity PET filament warp yarn
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_material for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `mehler-engineered-fabrics`

###### Alternating current (`prepare_electricity`)

Include attributable motors, suction, lighting, compressor generation and climate-control loads without double counting. This identity applies only to actual CN user-side grid-average supply below 1 kV; a different geography, voltage or supply requires a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Use the net exchange measured under cp_energy for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
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

###### Waste Polyethylene terephthalate (`prepare_pet_waste`)

Conditional on actual external discard: record segregated PET yarn remnants, selvage or rejected fabric from this stage, with exact form, residual finish and destination. Internal return is a transfer, not exported waste. This identity is unsuitable for mixed polymers, oily waste or treatment outputs.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_waste for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Mechanical weaving and attributable utilities (`weave`)

Interlace warp and weft using the declared mechanical insertion equipment; record runtime, idle time, breaks, selvage and suction. Bonded cross-laid layers are not interchangeable with interlacing; air/water jets are not assumed.

#### Inputs

##### Product flows

###### High-tenacity PET filament weft yarn (`weft_pet_yarn`)

Issue purchased prepared weft packages to the loom. Declare its own yarn grade separately from warp; exclusively PET textile fibre composition is required. No agricultural co-fibre is included.

- Selected flow: High-tenacity PET filament weft yarn
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_material for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`weave_electricity`)

Include attributable motors, suction, lighting, compressor generation and climate-control loads without double counting. This identity applies only to actual CN user-side grid-average supply below 1 kV; a different geography, voltage or supply requires a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Use the net exchange measured under cp_energy for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Mineral lubricating oil (`loom_oil`)

Conditional: only measured mineral-oil make-up to the loom or attributed compressor; distinguish oil on yarn from machinery lubricant. Closed-loop circulating charge is not repeatedly consumed; include stock changes. Synthetic oils require their own atomic rows.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_material for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste Polyethylene terephthalate (`weave_pet_waste`)

Conditional on actual external discard: record segregated PET yarn remnants, selvage or rejected fabric from this stage, with exact form, residual finish and destination. Internal return is a transfer, not exported waste. This identity is unsuitable for mixed polymers, oily waste or treatment outputs.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_waste for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral lubricating oil (`spent_loom_oil`)

Conditional: weigh actual drained mineral lubricant crossing the site gate and declare contaminants and destination; do not combine oily rags, wastewater or PET selvage with this row.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_waste for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`pet_particles_air`)

Conditional on measured particulate discharge to air from weaving/suction or documented fugitive sources. The public identity is air with unspecified subcompartment and size; only use for that measurement scope. Preserve PET origin and distinguish airborne release from collected filter material. Use a verified more specific flow if size/compartment is known; absence of monitoring is not zero.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_air for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

### Process: Inspection, rolling and pack-out (`release`)

Inspect appearance, dimensions, mass per area and tensile performance against the real order, segregate rejects, weigh accepted net cloth, roll and pack. Catalogue values cannot replace measured acceptance and downstream finishing is excluded.

#### Inputs

##### Product flows

###### Alternating current (`release_electricity`)

Include attributable motors, suction, lighting, compressor generation and climate-control loads without double counting. This identity applies only to actual CN user-side grid-average supply below 1 kV; a different geography, voltage or supply requires a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Use the net exchange measured under cp_energy for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Cardboard tube or Paper core (`paper_core`)

Conditional on paper-core roll delivery. Record net purchased core mass and reuse cycles from actual tracking; do not substitute plastic cores or count reusable beams as disposable packaging.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_pack for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene film (`pe_wrap`)

Conditional on actual single-polymer polyethylene film wrap. Declare gauge, composition, recycled fraction and net issued mass; exclude agricultural film, laminate or extrusion-service identities.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_pack for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### High-tenacity PET filament greige woven fabric (`finished_greige`)

Accepted full-width greige woven roll, before downstream treatment. Exclude core, wrap, rejected sections and removable packaging from product mass. Record warp/weft high-tenacity certificates and actual weave, width, mass per area and acceptance tests.

- Selected flow: High-tenacity PET filament greige woven fabric
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources:

##### Waste flows

###### Waste Polyethylene terephthalate (`release_pet_waste`)

Conditional on actual external discard: record segregated PET yarn remnants, selvage or rejected fabric from this stage, with exact form, residual finish and destination. Internal return is a transfer, not exported waste. This identity is unsuitable for mixed polymers, oily waste or treatment outputs.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Use the net exchange measured under cp_waste for the matched batch; divide by matched accepted net fabric kg from cp_output; preserve its measurement unit and applicability.
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
| `allocation_direct` | batch records | Prefer measured submetering and dedicated issue records to assign loads directly to actual batches, retaining factory evidence; do not allocate a second burden to internal beams or fabric intermediates. |  |
| `allocation_shared` | shared equipment | Allocate motor load using site-validated measured power integrated over runtime; shared suction/compressors use measured service demand or validated operating load, including idle load. Mass allocation requires evidence that demand is proportional to mass; retain drivers, denominators and sensitivity, with no default coefficient. |  |
| `allocation_waste` | returns, waste and secondary grades | Reconcile internal returns/stocks by mass. Exported waste gets no automatic recycling substitution credit. Saleable secondary-grade cloth requires actual price/quantity and co-product status; separate attributable operations first. If separation is impossible, use and disclose actual physical relationship or measured revenue with allocation sensitivity and boundary. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | release | accepted net cloth | weighing and quality release | lot; gross mass; core/wrap tare; conditioning; accepted length; usable width; mass per area; tests | Calibrated scale measures accepted net kg after tare and rejects; area records use measured area_conversion only | kg | each lot and roll | All batches in actual reporting period | Declared weaving mill and route | per 1 kg reference flow | scale calibration; inspection and conditioning records |
| `cp_material` | prepare; weave | warp/weft yarn and machinery oil | weighing, issue/return and stocks | grade; composition; high-tenacity certificate; mass; finish; moisture; issues/returns; stocks; residual beam yarn; oil make-up | Calibrated weighing reconciled with purchases, lot and stock records; distinguish warp/weft and machinery oil | kg | each lot and oil make-up event | Matched lots and period stocks | warping/weaving and attributed auxiliaries | per 1 kg reference flow | supplier records; scale calibration; stock reconciliation |
| `cp_energy` | prepare; weave; release | stage electricity | submeter and runtime | start/end kWh; equipment; runtime/idle; suction/climate scope; geography; voltage; allocation drivers | Match batches and meter intervals; reconcile stages/auxiliaries with plant totals without double counting | kWh | each meter interval | All matched running and idle periods | declared factory and equipment | per 1 kg reference flow | meter calibration; invoices and allocation sheets |
| `cp_waste` | prepare; weave; release | PET waste and spent oil | segregated weighing and transfer | lot; substance; form; tare-adjusted mass; contamination; internal reuse; destination | Weigh each waste separately against manifests and internal reuse; separate oil from yarn/fabric | kg | each collection/dispatch | matched reporting period | foreground and site gate | per 1 kg reference flow | transfer receipts; calibration; evidence of absence |
| `cp_air` | weave | airborne particles | exhaust and fugitive monitoring | source; concentration; air flow; duration; size; compartment; capture; detection limit | Sample actual release points; integrate matched concentration, air volume and duration to kg; declare size/compartment; captured material is not emitted; unmonitored is not zero | kg | actual sampling linked to batches | declare representativeness and uncovered intervals | actual weaving/suction outlets | per 1 kg reference flow | monitoring reports; detection limits; capture and representativeness |
| `cp_pack` | release | paper cores and PE film | packing weights/issues | component; composition; net issues/returns; reuse; lot and tare | Measure each component net mass separately; reconcile purchases/reuse and attribute actual consumption | kg | each packing lot | matched reporting period | product roll packing | per 1 kg reference flow | specifications; weights; reuse ledger |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | Divide each non-reference measured net exchange by matched accepted net fabric kg from cp_output; finished output is fixed at 1 kg. Apply site-evidenced attribution first. | cp_output; cp_material; cp_energy; cp_waste; cp_air; cp_pack | exchanges per 1 kg reference flow |  |
| `convert_area_records` | finished_greige | Apply measured L, W, G under area_conversion for area and mass, reconcile against weighing; unverified nominal parameters cannot be used. | cp_output; area_conversion | accepted net fabric kg |  |
| `reconcile_pet` | warp_pet_yarn; weft_pet_yarn; prepare_pet_waste; weave_pet_waste; release_pet_waste | Reconcile net yarn issue against accepted fabric, PET wastes, actual releases and work-in-process stock change on a consistent moisture/finish basis; disclose residual and uncertainty, never invent emissions from the residual. | cp_material; cp_output; cp_waste; cp_air | mass reconciliation and residual |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | yarn and reference product | Both yarn systems need high-tenacity/PET evidence and actual unsized untreated start/end state; a manufacturer example does not certify this plant. | supplier certificates; order; route and acceptance |
| `quality_coverage` | all records | Disclose actual period, throughput, changeovers/idle and all foreground/auxiliary coverage; a single test does not establish an industry range. | lot, meter and production logs |
| `quality_uncertainty` | measurements and releases | Record calibration, sampling, detection limits and actual uncertainty; missing measurement, absence and differing applicability are distinct. | calibration and monitoring reports |
| `quality_sources` | public evidence | Classification supports classification boundaries and manufacturers support product/process existence only; they do not supply default recipes, energy, losses, life or environmental performance. | `unsd-cpc-2025`; `ulong-greige`; `mehler-company-2025`; `mehler-engineered-fabrics` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_applicability` | product and route | Verify all-PET high-tenacity warp/weft, unsized mechanical weaving and untreated greige endpoint. An excluded operation makes this route inapplicable; classification code cannot substitute for validation. | `unsd-cpc-2025`; `mehler-company-2025` |
| `validate_measurement` | reference and inventory | Finished reference row must be 1 kg accepted net cloth matching reference name. All rows require linked protocols and matched batch kg denominator; area needs measured conversion and electricity retains energy property. |  |
| `validate_completeness` | dataset | Check inputs, outputs, internal transfers, wastes, utilities and conditions by stage, disclosing real gaps; missing monitoring or unclear boundary is inconclusive, not complete validation. |  |
| `validate_identity` | each exchange | One substance/exchange per row; verify public material, route, geography, compartment and reference property. Disclose unresolved UUIDs rather than forcing them; a blank candidate reference is an evidence gap, not methodology approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-verified mill-gate greige-fabric foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Link to subsequent finishing/industrial fabric models when composition, strength, construction and foreground gate match; add and verify upstream first |
| excluded_use | Entire-CPC coverage; bonded scrim, other polymer, air/water-jet or finished routes; unsupported complete lifecycle, lifetime or functional-equivalence claims |
| required_metadata | All reference qualifiers; lots/stages; measured net mass, area conversion, meters and allocation; high-tenacity yarn grade/upstream; core/wrap; utilities/releases |
| required_quality_disclosure | gate-to-gate and unlinked upstream; measurement/sampling coverage, uncertainty, evidence of conditional absence, unmeasured exchanges and unresolved identities; equipment/infrastructure exclusions |
| update_trigger | Changes to material/yarn grade/feed state, sizing/finishing, insertion, weave, mass per area, moisture, supply, utilities, packaging or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.123; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 26710 multi-route classification boundary; no process/environmental factor |
| `ulong-greige` | handbook | U-LONG, Industrial Polyester 500D High Tenacity Greige Fabric TA5136A; https://www.u-long.com/en/product/TA5136A.html | Product description/Specification establishes high-tenacity polyester greige product; nominal specifications are not factory conversions or quality thresholds |
| `mehler-company-2025` | handbook | MEHLER Company & Products, May 2025 brochure, PDF p.2 (unnumbered), Engineered Fabrics panel; https://mehler-ep.com/wp-content/uploads/2025/07/MEHLER_Image_brochure_202505.pdf | Untreated fabric and distinct dry/wet finishing/coating options; no mandatory site recipe |
| `mehler-engineered-fabrics` | handbook | MEHLER Engineered Fabrics; https://mehler-ep.com/products/engineered-fabrics/ | Product/multi-stage process description supports warping, weaving and testing; listed options are not universally compulsory |


Web sources use the 2026-10-06 retrieval snapshot. Manufacturer commercial descriptions do not replace independent scientific review or factory measurements and do not establish health, regulatory compliance or lifetime. All recipes, settings, energy, losses, throughput and allocation drivers require real factory protocol records; no defaults are supplied.
