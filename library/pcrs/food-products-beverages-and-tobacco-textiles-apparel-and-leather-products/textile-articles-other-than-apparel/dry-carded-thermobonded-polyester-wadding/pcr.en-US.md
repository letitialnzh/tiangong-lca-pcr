---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-carded-thermobonded-polyester-wadding
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Dry-carded thermobonded polyester wadding


## 1. Scope and Applicability

This method applies to high-loft polyester cushioning wadding made from externally supplied virgin PET staple and identified PET-core/copolyester-sheath low-melt binder fibre, by dry opening, blending, carding, cross-lapping and electric hot-air thermal bonding, followed by cooling, inspection, slitting and roll/sheet packing. Representative use is an unmade-up furniture or bedding cushioning layer, before assembly into the consumer article.

CPC 27991 is broader than this method. Flock not exceeding 5 mm, textile dust as merchandise, mill neps, cotton or wool wadding, medical wadding, resin-bonded, needle-punched, wetlaid, airlaid, recycled-fibre and fuel-heated routes are not covered. Supply specifications must establish wadding identity; a fabric classified as nonwoven or felt must use the appropriate method even if machinery is similar. No whole-leaf coverage is claimed. Sources: `un-cpc3-notes-2025`, `gulf-wadding-route`; `parishudh-wadding-routes`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-carded-thermobonded-polyester-wadding |
| classification_refs | CPC 3.0: 27991; narrow semantic subset; no accepted mapping |
| covered_products | Unmade-up virgin PET/copolyester thermobonded cushioning wadding rolls and sheets |
| excluded_products | Flock, dust merchandise, mill neps, medical wadding, nonwovens, felt, quilted or laminated articles, loose stuffing and all routes excluded in section 1 |
| representative_product | Unfaced high-loft cushioning wadding roll of declared mass composition and measured dimensions |
| production_route | Purchased finished staple → dry opening/blending → carding/cross-lapping → electric hot-air bonding → cooling → slitting/release/packing |
| market_state | Accepted net wadding mass at declared conditioning state at factory gate; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of cushioning wadding meeting the declared purchaser specification |
| How much | 1 kg net accepted wadding |
| How well | Declared composition, loft/thickness at stated pressure, basis weight, width, bonding integrity and agreed quality acceptance; no assumed insulation value or compliance approval |
| How long or cycle | One factory-gate production lot; no service-life or equal cushioning service claimed |
| reference_flow_link | finished_wadding |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Thermobonded polyester wadding |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Wadding identity; PET/binder core and sheath composition and mass fractions; virgin content; received fibre processing and finish; cut length; fineness; crimp; cross-section; electrical heating route; basis weight; width; thickness and test pressure; conditioning/moisture; bonding acceptance; packing configuration and tare; geography; actual supply voltage; line; reporting period |

The reference product name matches the finished output row. A missing product UUID does not waive physical identity or quality records. Mass is a manufacturing comparison basis, not proof of equal thermal or cushioning function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_wadding | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net accepted wadding mass, excluding all packaging, core and rejects; inventory basis is per 1 kg reference flow. |
| `mass_state` | pet_staple; binder_fibre; captured_fibre; particulate_air; ldpe_film; paper_core; finished_wadding; wadding_trim | Mass | kg | Record incoming, conditioned and dry mass states; reconcile moisture by measured tests before balancing. Do not treat water loss as PET loss. |
| `energy_property` | prepare_electricity; bond_electricity; finish_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public reference property and energy unit group; measured kWh multiplied by 3.6 gives MJ. Never change the identity to Mass. |
| `roll_mass` | finished_wadding | Mass | kg | Weigh net roll mass with actual core/wrap tare. If an area record is used, measure matching basis weight and use area in m2 × basis weight in g/m2 / 1000 to obtain kg; document width/length and sampling. No default GSM or roll weight. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cut, crimped, supplier-finished virgin PET staple and specified low-melt bicomponent staple received at the conversion site |
| starting_condition_role | Upstream products; foreground starts at receipt, not polymer or fibre synthesis |
| product_classification_scope | Cushioning wadding subset of CPC 27991; supplier and classification evidence required |
| recursive_input_rule | Purchased already-bonded wadding is outside this full formation route. A subsequent converting dataset links that input once and models incremental operations only. Internal web transfers remain linked within this site. |
| upstream_dataset_requirement | Link actual fibre, binder, electricity and packaging supply datasets with composition, origin and geography matching; disclose proxies |
| disclosure | Gate, line, fibre treatment, oven heat source, stock/rework, auxiliary meters, emissions, waste destination, packaging, allocation and omissions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | Include receipt, handling, dry opening/blending, carding/cross-lapping, electric bonding, cooling, quality release, slitting, winding, packing and attributable dust-control utilities through factory gate. This is gate-to-gate manufacture; link upstream inventories before any cradle-to-gate claim. | `gulf-wadding-route`; `parishudh-wadding-routes` |
| `boundary_exclusions` | upstream and downstream | Exclude petroleum extraction, PET/copolyester manufacture, fibre extrusion/drawing/cutting, agriculture, downstream upholstery/quilting, distribution, use and disposal. Disclose equipment/infrastructure exclusions. Fibre origin and incoming finish remain upstream qualifiers. | `un-cpc3-notes-2025` |
| `boundary_actual_auxiliaries` | all processes | Wet washing, dyeing and resin application are outside this route. No process water, wastewater or combustion emission is presumed. Record real humidification, cooling makeup, lubrication and housekeeping exchanges if attributable, each as a specific atomic row with collection evidence; distinguish supplied water, resource extraction and wastewater. Missing data are not zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Opening, blending, carding and cross-lapping | required | Declared dry carded route | Linked foreground stage | per 1 kg reference flow |
| `bond` | Electric hot-air bonding and cooling | required | Declared low-melt binder route | Linked foreground stage | per 1 kg reference flow |
| `finish` | Inspection, slitting, winding and packing | required | Accepted wadding release; calender smoothing only if present | Linked foreground stage | per 1 kg reference flow |

These are stages of one connected site inventory. Track the unbonded web and bonded batt by lot and measured transfer mass between stages; reconcile both ends and internal rework without a second external input or duplicate upstream burden. Retain individual operations and meters, rather than averaging unknown routes.

### Process: Opening, blending, carding and cross-lapping (`prepare`)

Record each fibre feed independently; blend and open before carding and layering. Suction and compressor electricity belong to the actual supply boundary.

#### Inputs

##### Product flows

###### Polyester short fiber (`pet_staple`)

Only virgin PET textile staple supplied already cut, crimped and finished; exclude binder fibre from this row. Record length, fineness, crimp, cross-section, supplier finish and incoming moisture; this identity does not cover recycled fibre.

- Selected flow: Polyester short fiber `03377e13-45a0-4774-9cc8-37c8c60523f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_material. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### PET-core copolyester-sheath low-melt bicomponent staple fibre (`binder_fibre`)

Required for this declared route. Verify the actual core/sheath polymers, mass ratio, cut length and supplier finish; measure recipe by net weighed issues and returns, not a default binder percentage. Other binder polymers require a separate scope assessment.

- Selected flow: PET-core copolyester-sheath low-melt bicomponent staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_material. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `gulf-wadding-route`; `parishudh-wadding-routes`

###### Alternating current (`prepare_electricity`)

Apply this UUID only to CN grid-average consumption delivered to the user below 1 kV. Meter bale opening, blending, feeding, carding, cross-lapping, suction and attributable compressed-air production separately; reconcile shared meters. For another geography or voltage resolve another identity before use.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_energy. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Captured PET and copolyester fibre dust (`captured_fibre`)

Conditional on collected dust exported for treatment. Weigh the captured fibre blend net of container tare and record composition, contamination and destination. Material recirculated internally is an internal transfer, not an exported waste or an avoided product.

- Selected flow: Captured PET and copolyester fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_waste. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`particulate_air`)

Conditional on measured actual particulate release to air with unspecified subcompartment and no measured size fraction. This is released mass after control, not captured fibre, water suspended solids or a default emission. When size or subcompartment is known, split and resolve the matching identities; do not also report the same mass as unspecified PM.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_air. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

### Process: Electric hot-air bonding and cooling (`bond`)

Record oven heating and airflow, cooling and web transfer. The source supports thermal activation, not a mandatory temperature, dwell time or fuel choice.

#### Inputs

##### Product flows

###### Alternating current (`bond_electricity`)

Only CN user-side grid-average supply below 1 kV. Separately meter electric hot-air heating, fans and cooling; retain real oven settings, residence time, throughput, starts and idle periods. This PCR covers electric heating only; fuel-fired or purchased-heat ovens need another route inventory.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_energy. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

### Process: Inspection, slitting, winding and packing (`finish`)

Record measured dimensions, thickness test pressure and accepted lots. Include smoothing only when physically performed; retain every reject and packaging component.

#### Inputs

##### Product flows

###### Alternating current (`finish_electricity`)

Only CN grid-average user supply below 1 kV. Meter slitting, winding, compression, inspection equipment and wrapping; include actual optional smoothing/calender drives without assigning a universal pressure or energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_energy. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Conditional on actual LDPE protective roll wrap. Use issued net film mass less unused returns; exclude it from reference product net mass. Other films, labels, straps and pallets each need their own atomic rows if present.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_packaging. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Paperboard winding core (`paper_core`)

Conditional on a supplied winding core. Weigh actual cores, record composition and actual reuse/return history; do not assume a lifetime or transfer the roll gross weight into product mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_packaging. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

#### Outputs

##### Product flows

###### Thermobonded polyester wadding (`finished_wadding`)

Accepted unmade-up cushioning wadding roll or sheet, with no facing, quilting, lamination, resin impregnation or added wet finish. Net mass excludes packaging and rejected output. Disclose composition, basis weight, width, thickness under stated pressure and acceptance specification.

- Selected flow: Thermobonded polyester wadding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources:

##### Waste flows

###### PET and copolyester wadding edge trim (`wadding_trim`)

Conditional on edge trim or rejected wadding exported off site. Keep bonded trim separate from captured loose dust. Measure composition and treatment destination; internal returns are tracked once in the mass ledger. Sold downgraded wadding is a separate product, not automatically waste.

- Selected flow: PET and copolyester wadding edge trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange amount divided by matched accepted net wadding kg; use cp_waste. Preserve the stated numerator unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all processes | First subdivide lots and meters. Shared electricity, suction and compressor services use measured stage runtime/load or delivered service demonstrably related to consumption, reconciled to plant totals. If that relation cannot be measured, document another physical basis and sensitivity; do not invent a universal factor. Foreground protocol cp_energy owns the evidence. |  |
| `allocation_rework` | material ledger | Track internal trim return and rework once; do not award an avoided-virgin-fibre credit. Record exported wastes with destination. If saleable downgraded wadding is produced, separately measure its net mass/specification and directly assign separable operations; unresolved joint burdens require a documented physical relation or justified economic alternative with actual price/quantity records and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | prepare | pet_staple; binder_fibre | lot weighing and stock ledger | lot; issued kg; returned kg; opening/closing stock; fibre polymer; virgin status; finish; moisture; length; fineness; crimp; core/sheath ratio | Calibrated scale and supplier specification; measure each feed separately and reconcile inventory change. | kg | each lot/meter interval or representative emission test | Actual declared reporting period including starts, idle time and rejects | Declared connected wadding line and allocated site auxiliaries | per 1 kg reference flow | Calibration; source ledger; lot identity; reconciliation; uncertainty and detection limit where applicable |
| `cp_energy` | prepare; bond; finish | electricity | submeters and operating logs | stage; meter; start/end kWh; location; voltage; runtime; load; oven heating/fan kWh; compressor allocation; downtime | Read calibrated stage meters; attribute shared services with real measured driver and reconcile totals; multiply kWh by 3.6 for MJ. | MJ | each lot/meter interval or representative emission test | Actual declared reporting period including starts, idle time and rejects | Declared connected wadding line and allocated site auxiliaries | per 1 kg reference flow | Calibration; source ledger; lot identity; reconciliation; uncertainty and detection limit where applicable |
| `cp_output` | finish | finished_wadding | net weighing and quality release | lot; gross kg; actual core/wrap tare kg; net accepted kg; rejected kg; moisture; GSM; width; length; thickness; pressure; bond integrity; composition | Weigh accepted net wadding with calibrated scale and actual packaging tare; retain matched conditioning, lot tests and purchaser acceptance. | kg | each lot/meter interval or representative emission test | Actual declared reporting period including starts, idle time and rejects | Declared connected wadding line and allocated site auxiliaries | per 1 kg reference flow | Calibration; source ledger; lot identity; reconciliation; uncertainty and detection limit where applicable |
| `cp_waste` | prepare; finish | captured_fibre; wadding_trim | segregated weighing and destination record | stage; stream; gross kg; tare kg; dry/conditioned basis; composition; contamination; internal return; exported kg; destination | Weigh each segregated stream; reconcile internal transfers separately from exported residuals; retain treatment acceptance records. | kg | each lot/meter interval or representative emission test | Actual declared reporting period including starts, idle time and rejects | Declared connected wadding line and allocated site auxiliaries | per 1 kg reference flow | Calibration; source ledger; lot identity; reconciliation; uncertainty and detection limit where applicable |
| `cp_air` | prepare | particulate_air | conditional release monitoring | source; controls; concentration; exhaust volume; duration; particle fraction; air subcompartment; detection limit; captured kg | Measure released particulate concentration and matched dry/normalised exhaust volume; multiply consistently to obtain kg. Include representative operations and fugitive release assessment. Do not substitute captured dust or set unmeasured release to zero. | kg | each lot/meter interval or representative emission test | Actual declared reporting period including starts, idle time and rejects | Declared connected wadding line and allocated site auxiliaries | per 1 kg reference flow | Calibration; source ledger; lot identity; reconciliation; uncertainty and detection limit where applicable |
| `cp_packaging` | finish | ldpe_film; paper_core | component issues, returns and tare | component; composition; count; weighed net kg; unused returns; actual reuse/return; losses; shipped configuration | Weigh each actual packaging component separately and reconcile net issue and documented reuse. Count records require measured component mass; no assumed lifetime. | kg | each lot/meter interval or representative emission test | Actual declared reporting period including starts, idle time and rejects | Declared connected wadding line and allocated site auxiliaries | per 1 kg reference flow | Calibration; source ledger; lot identity; reconciliation; uncertainty and detection limit where applicable |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | Divide each matched-period attributable net exchange by accepted net wadding kg from cp_output, preserving the numerator unit. The finished output is 1 kg. | net exchange; accepted net kg; cp_output | exchange unit per 1 kg reference flow |  |
| `calc_balance` | material ledger | Compare external fibre/binder input plus stock decrease with accepted product, each exported residual, actual emissions and stock increase on a consistent moisture basis; report and investigate residual, not an assumed loss factor. Internal transfers cancel. | cp_material; cp_output; cp_waste; cp_air; stock | mass balance and residual |  |
| `calc_electricity` | prepare_electricity; bond_electricity; finish_electricity | Convert measured attributable kWh to MJ by multiplication by 3.6 before normalization; reconcile stages and avoid counting common suction twice. | cp_energy | MJ per 1 kg reference flow |  |
| `calc_air_release` | particulate_air | Obtain released kg from consistent measured concentration and exhaust volume for the matched period, accounting for operating duration; disclose extrapolation and detection limits. Then normalize with cp_output. | cp_air; cp_output | kg per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all rows | Verify polymer, physical state, supplied finish, mass basis and exact selected flow conditions; preserve official localized names. Blank UUID is an identity gap, never a missing exchange. | Supplier certificates and flow identity documents |
| `quality_representative` | all processes | Use actual period, product specification, line, oven type and yields; report coverage of all runs, rejects and downtime and uncertainty. No default recipe, temperature, energy, waste factor or health approval. | Production ledger; calibration; actual operating logs |
| `quality_completeness` | site boundary | Screen every real auxiliary, packaging component and release; add specific rows if applicable. Disclose omissions and LCIA coverage, especially unspecified particulate; no missing-data zero. | Site survey and balance/coverage checklist |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Require documented wadding rather than felt/nonwoven/medical/converted article identity, declared virgin and binder composition, electric heat route and every reference qualifier. Reject application to unreviewed routes. | `un-cpc3-notes-2025` |
| `validate_measurement` | all inventory rows | Require matched denominator, measured net mass, linked collection protocols, actual tare, energy-property preservation and explicit conversions; check all stage totals and balance residual. Missing measurements are inconclusive. |  |
| `validate_release` | waste and elementary rows | Verify flow type, actual presence, recipient medium, subcompartment, particle size and destination. Captured dust is waste; air release is elementary. Do not borrow water, soil or combustion identities for fibre emissions or equate unspecified PM to PM2.5. |  |
| `validate_claims` | dataset use | Declare identity gaps, omitted operations, measurement coverage and upstream-link limitations. A candidate dataset or structural check establishes neither scientific approval nor publication nor complete cradle-to-gate coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate wadding conversion dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared wadding supply to bedding or furniture assembly after applicability and quality review |
| excluded_use | Full CPC coverage; fibre-production replacement; medical or health compliance; thermal-service equivalence; unlinked cradle-to-gate claim |
| required_metadata | All reference qualifiers; gate; period; line; supplier origin; electrical voltage/location; recipe; moisture; acceptance; allocation; stock and rework; packaging; waste destination |
| required_quality_disclosure | Measured coverage, calibration, sampling uncertainty, mass/energy reconciliation, missing identities, proxies, exclusions, elementary characterization gaps and upstream links |
| update_trigger | Change in polymer blend, virgin status, binder, incoming finish, heating source, line, quality specification or supplier/geography; refresh real measurements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.129, 27991; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | HS 56.01 classification boundary and medical exclusion; not production parameters |
| `gulf-wadding-route` | handbook | Gulf Fiber, Products, Thermal-Bonded Polyester Wadding, “The route to WAD”; https://www.gulffiber.co/products | Manufacturer route example: carding, low-melt binder, hot-air bonding, cooling and converting. No performance, compliance or numerical parameters adopted; electric source is this PCR scope, not a source claim. |
| `parishudh-wadding-routes` | handbook | Parishudh Fibres, Polywadding & Polyfill; https://parishudhfibres.com/products/polywadding-polyfill/ | Independent manufacturer distinction of thermal low-melt, chemical and mechanical bonding. No binder percentages or certification claims adopted. |
