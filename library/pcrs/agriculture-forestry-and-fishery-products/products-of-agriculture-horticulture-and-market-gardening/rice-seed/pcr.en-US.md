---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---
# Rice Seed for Sowing
## 1. Scope and Applicability
This PCR guides foreground data package construction for rice seed intended for sowing. It covers seed multiplication or controlled seed production, field management, harvest, drying, cleaning, grading, quality testing, optional treatment, packaging, storage, and delivery to the declared seed gate.
It applies to certified, foundation, registered, farmer-selected, or comparable sowing-seed lots when the seed class and quality basis are declared. Rice paddy for milling, husked or milled rice, rice used as food or feed grain, rice straw sold as a separate product, and seed-processing services without a rice-seed product output are excluded.
The PCR is a dataset-production rule. It does not supply product quantities, emission factors, UUIDs, or a universal seed-quality value. A concrete dataset must resolve every parameterized Flow Set row to a verified exchange and must provide the required lot, quality, gate, geography, and reporting-period evidence.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed` |
| classification_refs | CPC 3.0 `01131`, `Rice, seed` |
| covered_products | rice seed intended for sowing, including certified, foundation, registered, farmer-selected, or comparable seed lots |
| excluded_products | rice paddy for milling; husked or milled rice; rice for food or feed; rice straw sold as a separate product; seed-processing services without a rice-seed product output |
| representative_product | cleaned, graded, quality-tested rice seed at the declared moisture basis and seed gate |
| production_route | rice seed multiplication or controlled seed production followed by harvest, conditioning, optional treatment, packaging, storage, and delivery |
| market_state | sowing seed with declared seed class, moisture basis, physical purity, germination, treatment status, packaging state, geography, and gate |
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | cleaned rice seed intended for sowing |
| How much | 1 kg |
| How well | declared seed class, variety or hybrid, moisture basis, physical purity, germination, treatment status, and packaging state |
| How long or cycle | one declared seed production crop cycle; storage duration is declared separately when inside the gate |
| reference_flow_link | Reference amount and verified platform product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | seed class or certification class; rice variety or hybrid; moisture basis; physical purity; germination; treatment status; geography; crop season and year; declared seed gate; packaging state |
| Binding | `fixed` |
The reference amount is the net accepted rice seed output at the declared gate. Bag tare, foreign material, screenings, rejected seed, moisture removed during conditioning, storage losses, and other residues are reported separately and are not silently merged into the reference output. A final foreground process must retain the verified platform UUID before exchange publication.
## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net kg of accepted rice seed for sowing at the declared gate. |
| `seed_count_conversion` | seed-count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Seed count may be used only when thousand-seed mass or another transparent conversion to mass is recorded. |
| `moisture_basis` | harvested and conditioned seed | Mass and declared moisture fraction | kg and percent | Record the received and reference moisture basis and use an explicit water-mass conversion when normalizing between bases. |
| `nutrient_basis` | nutrient inputs and soil emissions | Mass and nutrient content | kg product and kg nutrient | Record formulated product mass and nutrient content separately; nitrogen calculations use kg N rather than fertilizer-product mass. |
| `water_basis` | irrigation and withdrawal | Volume or Mass | m3 or kg | Distinguish source withdrawal, delivered irrigation, consumption, and any water-footprint result. |
| `energy_inventory` | field, pumping, drying, conditioning, and storage energy | Energy or carrier mass | kWh, MJ, L, or kg | Preserve energy carrier, unit, conversion basis, process operation, and geography. |
| `packaging_quantity` | packaging inputs | Mass, area, or item count | kg, m2, or item | Record the packaging material quantity and package capacity or item count needed to reconcile packaging with reference output. |
Seed quality attributes are foreground descriptors, not replacement flow identities. The dataset must record the applicable standard, test method, sampling basis, and lot coverage for moisture, physical purity, germination, vigor where material, and treatment status.
## 5. System Boundary
The default foreground boundary runs from the declared source seed lot or production starting condition to rice seed at the declared seed gate. It includes land preparation, planting or transplanting, nutrient management, irrigation where applicable, crop protection, field operations, harvest, field-to-facility movement when inside the gate, drying, cleaning, grading, quality testing, treatment, packaging, storage, and delivery when the gate is delivered seed.
Upstream production of purchased nutrient products, energy carriers, packaging, treatment materials, and treatment services is represented by linked background data. Rice paddy used as an input to seed conditioning is a product input and must be kept distinct from the final sowing-seed output. Rice milling, consumer use, downstream rice cultivation, retail, and food or feed processing are outside the default boundary.
### Boundary Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_production` | field and seed-facility route | Include source seed or declared starting condition, field production, harvest, conditioning, quality testing, treatment, packaging, storage, and delivery only to the declared gate. | `irri-rice-seed-quality`; `fao-rice-postharvest` |
| `boundary_input_completeness` | all foreground routes | Address nutrient inputs, irrigation, crop protection, land, field energy, pumping, drying, conditioning energy, packaging, storage, and direct emissions with a collected value, justified zero, or documented exclusion. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_quality_separation` | rice seed outputs | Separate accepted seed, usable co-product, screenings, rejected seed, broken kernels, dust, storage losses, and other residues by measured mass and declared fate. | `fao-rice-postharvest`; `mass-balance-identity` |
| `boundary_moisture_reconciliation` | harvest and conditioning | Reconcile harvested input and conditioned outputs on one declared moisture basis and disclose drying water removal. | `fao-rice-postharvest`; `mass-balance-identity` |
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | source_seed_lot_or_declared_seed_production_start |
| starting_condition_role | seed_identity_and_propagation_condition |
| product_classification_scope | current CPC 3.0 product category `01131`, `Rice, seed` |
| recursive_input_rule | a same-category seed input that would cause recursive tracing is recorded as the declared source seed lot with lot identity, origin, and purpose rather than recursively expanding the seed PCR |
| upstream_dataset_requirement | use representative upstream datasets for purchased materials and disclose the selected Flow Set resolution in the foreground package |
| disclosure | record source seed lot, variety or hybrid, seed class, location, crop year, production system, irrigation status, moisture basis, quality tests, treatment, gate, packaging, outputs, residue fates, and reporting period |
## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rice_seed_multiplication | Rice Seed Multiplication | required | include field or controlled production of the seed crop | foreground | harvested rice seed crop |
| rice_seed_conditioning | Rice Seed Conditioning and Treatment | required | include drying, cleaning, grading, testing, treatment, and packaging before the declared gate | foreground | accepted rice seed output |
| rice_seed_storage_and_delivery | Rice Seed Storage and Delivery | conditional | include when storage or delivery is part of the declared gate or materially changes the product state | foreground | delivered rice seed output |
### Process: Rice Seed Multiplication (`rice_seed_multiplication`)
#### Inputs
##### Product flows
###### Source seed lot used for multiplication (`source_seed_lot`)
The declared source seed lot is recorded as the propagation input. It carries variety, class, origin, treatment status, and lot identity; it is not recursively expanded when it is the same product category.
- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured source-lot mass or transparent seeding-rate conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot`
- Range: Provisional source seed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg/kg harvested rice seed crop
  - Basis: first-pass source seed mass per harvested seed-crop output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Agricultural nutrient and fertilizer inputs (`rice_seed_multiplication_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources:
- Range: Provisional mineral nutrient screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.6
  - Unit: kg product/kg harvested rice seed crop
  - Basis: broad first-pass formulated nutrient product mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water`)
Delivered irrigation water is recorded separately from source withdrawal and consumption.
- Selected flow: irrigation water supplied to the rice production field
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or calculated delivered irrigation volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
###### Field energy and machinery operation (`field_energy`)
Fuel or measured mechanical energy used for land preparation, planting, crop care, harvest, and field movement is represented as an energy-supply function.
- Selected flow: field machinery energy supply
- Flow property / unit: Energy or carrier mass / MJ, kWh, L, or kg
- Amount rule: field fuel or mechanical-energy records by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
###### Crop-protection material (`crop_protection_material`)
Crop-protection products are material inputs only when the active ingredient or formulated product crosses the foreground boundary.
- Selected flow: crop-protection material used in rice seed production
- Flow property / unit: Mass / kg
- Amount rule: measured formulated-product or active-ingredient mass by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
###### Pumping electricity (`irrigation_pumping_electricity`)
Electricity used to pump or deliver irrigation water is recorded separately from the water flow.
- Selected flow: purchased electricity for irrigation pumping
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered pumping electricity or calculated electricity from pump records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
##### Waste flows
No waste input is assumed. Recovered or waste-derived amendments must be recorded as waste-derived inputs only when their origin, treatment, and role are declared; their nutrient function still uses the agricultural nutrient-supply coordinate.
##### Elementary flows
###### Land occupation or transformation (`land_occupation`)
Land occupation or transformation is recorded as a natural-resource interaction for the rice seed production area and duration.
- Selected flow: land occupation or transformation supporting rice seed production
- Flow property / unit: Area-time / ha year or declared platform unit
- Amount rule: measured field area and crop duration; land transformation is separated from occupation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per kg reference output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
###### Water resource withdrawal (`water_withdrawal`)
Source-specific water withdrawal is recorded as an elementary input and reconciled with delivered irrigation water.
- Selected flow: water resource withdrawn for rice seed irrigation
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: source-metered withdrawal, without merging delivery losses or consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
#### Outputs
##### Product flows
###### Harvested rice seed crop (`harvested_rice_seed_crop`)
Harvested rice seed crop leaving the field route is an intermediate product output to conditioning. It is not the final reference flow until it has passed the declared conditioning and quality boundary.
- Selected flow: harvested rice seed crop for conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass at the declared received moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested rice seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
##### Waste flows
Field residues and non-seed biomass are recorded as waste or product outputs only when they cross the field boundary with a declared fate. No generic waste identity is forced when no existing Flow Set represents the waste output.
##### Elementary flows
###### Direct soil nitrous oxide emission (`direct_soil_n2o`)
Direct soil nitrous oxide is calculated from declared nitrogen inputs and the selected emissions method.
- Selected flow: nitrous oxide emission to air from managed rice soil
- Flow property / unit: Mass / kg N2O
- Amount rule: selected IPCC tier or site method applied to declared nitrogen inputs and conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per kg reference output
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`
###### Ammonia emission (`ammonia_emission`)
Ammonia emissions are recorded when the selected nitrogen method and foreground evidence support them.
- Selected flow: ammonia emission to air from rice production
- Flow property / unit: Mass / kg NH3
- Amount rule: site or regional nitrogen-emission method using declared nitrogen inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference output
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`
###### Nitrate emission to water (`nitrate_emission`)
Nitrate loss to water is recorded when field evidence or the selected regional method supports a water emission route.
- Selected flow: nitrate emission to water from rice production
- Flow property / unit: Mass / kg nitrate
- Amount rule: selected site or regional leaching method using declared nitrogen and water conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference output
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`
### Process: Rice Seed Conditioning and Treatment (`rice_seed_conditioning`)
#### Inputs
##### Product flows
###### Harvested rice seed crop for conditioning (`conditioning_seed_crop_input`)
The conditioning input is the measured harvested rice seed crop received by the drying, cleaning, grading, testing, and treatment route.
- Selected flow: harvested rice seed crop for conditioning 14c42414-b19b-47c4-863f-1b86b50ff6bf
- Flow property / unit: Mass / kg
- Amount rule: measured received mass and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted rice seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input`
- Sources: `fao-rice-postharvest`
###### Conditioning electricity (`conditioning_electricity`)
Electricity for drying fans, cleaning, grading, testing, treatment, and packaging is recorded by operation where metering permits.
- Selected flow: conditioning electricity supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered electricity by conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted rice seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
###### Drying heat or energy carrier (`drying_heat`)
Drying heat or the energy carrier used to provide it is recorded separately from electricity when the route uses direct heat.
- Selected flow: drying heat or process energy supply
- Flow property / unit: Energy or carrier mass / MJ, kWh, L, or kg
- Amount rule: measured drying energy or documented carrier conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted rice seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
###### Seed treatment material (`seed_treatment_material`)
Seed treatment material is recorded only when treatment is part of the declared market state and the product or active ingredient crosses the boundary.
- Selected flow: seed treatment material
- Flow property / unit: Mass / kg
- Amount rule: measured formulated product or active ingredient loading per treated seed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated rice seed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_treatment_records`
###### Primary packaging (`primary_packaging`)
Packaging used to contain and protect the declared rice seed output is represented by the packaging function.
- Selected flow: primary packaging for rice seed
- Flow property / unit: Mass, area, or item / kg, m2, or item
- Amount rule: measured packaging material and package count or capacity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged rice seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
##### Waste flows
No waste input is assumed for conditioning. Recovered packaging or other waste-derived material requires declared origin and treatment before it is included.
##### Elementary flows
Direct resource and emission rows for conditioning are included when they cross the facility boundary and are not already represented by the field process.
#### Outputs
##### Product flows
###### Accepted rice seed for sowing (`accepted_rice_seed_output`)
Accepted rice seed is the sole reference-product role for this PCR when it satisfies the declared class and quality qualifiers.
- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted seed mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_seed_output`
- Sources: `irri-rice-seed-quality`
##### Waste flows
Record screenings, rejected seed, broken kernels, packaging waste, and off-grade lots as waste outputs with measured mass and declared fate. No product-input Flow Set or binding is applied to these waste outputs; the waste records remain governed by `cp_reject_and_screening_records` and `cp_packaging_waste_records`.
##### Elementary flows
###### Conditioning dust emission (`conditioning_dust`)
Dust released to air from cleaning, grading, or handling is represented as an environmental emission function when it is material or required by the selected method.
- Selected flow: dust or particulate emission to air from rice seed conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated dust release on the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted rice seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_emissions`
### Process: Rice Seed Storage and Delivery (`rice_seed_storage_and_delivery`)
#### Inputs
##### Product flows
###### Storage electricity (`storage_electricity`)
Storage electricity is included when cooling, ventilation, drying maintenance, or other storage energy is inside the declared gate.
- Selected flow: storage electricity supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered or allocated storage electricity over the declared storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg delivered rice seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
##### Waste flows
Record storage loss or downgraded lots as waste outputs with measured mass, moisture reconciliation, and declared fate. No product-input Flow Set or binding is applied to the waste output.
##### Elementary flows
No additional elementary row is assumed for storage. Add resource or emission rows only when they cross the declared storage boundary and are not already represented by the relevant energy or material flow.
## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | field, conditioning, and storage processes | First avoid allocation by subdividing seed multiplication, conditioning, treatment, packaging, storage, rejected-lot handling, and residue management when records permit. | `iso-14044-2006` |
| `allocation_output_completeness` | rice seed and non-reference outputs | Enumerate accepted seed, intentionally sold co-products, rejected seed, screenings, losses, residues, and waste fates before selecting an allocation method. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_method_selection` | shared burdens | If allocation remains necessary, declare the selected physical or economic relationship, data period, and sensitivity; do not use a default product quantity from a module. | `iso-14044-2006` |
| `allocation_seed_quality` | seed classes and grades | Do not allocate by seed quality claims alone unless a documented physical or economic relationship supports the choice; keep accepted seed and off-grade fate traceable. | `irri-rice-seed-quality`; `iso-14044-2006` |
## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot` | `rice_seed_multiplication` | source seed lot | lot and planting record | lot id; variety or hybrid; seed class; supplier; treatment; mass; seeding date; field | lot certificate, invoice, and planting log | kg and declared attributes | per lot and crop cycle | complete crop cycle | field or seed farm | sum by lot and link to planted area | lot certificate and calibrated scale |
| `cp_nutrient_records` | `rice_seed_multiplication` | nutrient and soil amendment inputs | input ledger | product; nutrient content; mass; field; date; supplier; application method | invoice, application log, and field record | kg product and kg nutrient | per application | crop cycle | field or block | sum by nutrient product and nutrient | invoice and application record |
| `cp_irrigation_records` | `rice_seed_multiplication` | delivered irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice | m3, kg, and energy unit | per event or period | irrigation season | field and source | distinguish withdrawal, delivery, consumption, and losses | meter calibration and readings |
| `cp_field_energy_records` | `rice_seed_multiplication` | field energy | machinery or fuel record | operation; carrier; quantity; equipment; field; date | fuel ledger, machine record, or measured work | L, kg, MJ, or kWh | per operation | crop cycle | field and machinery set | sum by operation and carrier | fuel invoice or machine record |
| `cp_crop_protection_records` | `rice_seed_multiplication` | crop protection | application record | product; active ingredient; rate; area; date; field; weather condition | application log and product label | kg product, kg active ingredient, or declared unit | per application | crop cycle | field or block | sum by product and active ingredient | application log and label |
| `cp_land_and_output_records` | `rice_seed_multiplication` | land, harvest, and field output | field and harvest record | area; duration; crop year; harvested mass; moisture; residue; fate | field register, weighbridge, and moisture record | ha, day, kg, and percent | per field and harvest event | crop cycle | field or block | reconcile area, duration, harvest, and fates | field register and scale record |
| `cp_conditioning_input` | `rice_seed_conditioning` | received seed crop | receiving record | lot; opening mass; moisture; source field; date; transfer | receiving scale and moisture test | kg and percent | per lot | conditioning season | facility and lot | sum by lot on common moisture basis | scale and test record |
| `cp_conditioning_energy_records` | `rice_seed_conditioning` | electricity and drying heat | utility and fuel record | operation; carrier; meter; quantity; date; lot or batch | meter, invoice, and batch log | kWh, MJ, L, or kg | per batch or period | conditioning season | facility and line | allocate only with declared driver | meter and invoice |
| `cp_seed_treatment_records` | `rice_seed_conditioning` | treatment material | treatment batch record | product; active ingredient; rate; treated mass; lot; date | batch sheet and product record | kg product and kg treated seed | per batch | conditioning season | facility and lot | sum by treatment product and treated output | batch sheet and label |
| `cp_packaging_records` | `rice_seed_conditioning` | packaging | packaging ledger | material; specification; item count; mass; capacity; lot; date | inventory issue record and scale | kg, m2, or item | per batch or period | conditioning season | facility | sum by material and package state | inventory record and scale |
| `cp_accepted_seed_output` | `rice_seed_conditioning` | reference output | quality and dispatch record | lot; accepted mass; moisture; purity; germination; treatment; package; gate | quality certificate, scale, and dispatch record | kg and declared quality units | per lot | declared reporting period | facility and destination gate | sum accepted output after quality release | certificate and calibrated scale |
| `cp_reject_and_screening_records` | `rice_seed_conditioning` | screenings and rejects | screening and disposition record | lot; material; mass; moisture; destination; fate | screening log and disposition record | kg and declared fate | per batch | conditioning season | facility | sum by fate and material | scale and disposition record |
| `cp_packaging_waste_records` | `rice_seed_conditioning` | packaging waste | waste log | material; mass; source; destination; date | waste log and transfer record | kg | per batch or period | conditioning season | facility | sum by material and fate | waste transfer record |
| `cp_conditioning_emissions` | `rice_seed_conditioning` | dust and direct emissions | emission record | source; substance; quantity; method; date; line | measured emission or documented calculation | kg | per batch or period | conditioning season | facility | sum by emission route | monitoring record or method sheet |
| `cp_storage_records` | `rice_seed_storage_and_delivery` | storage energy and losses | storage and dispatch record | opening mass; closing mass; moisture; storage days; energy; loss; gate | inventory, meter, moisture, and dispatch record | kg, percent, days, and kWh or MJ | per lot or period | declared storage period | facility and destination gate | reconcile transfers, moisture, accepted output, and losses | scale, meter, and dispatch record |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_reference_output` | accepted rice seed | accepted net mass at declared moisture and gate after quality release | `cp_accepted_seed_output` | kg reference output | `mass-balance-identity` |
| `convert_moisture_basis` | harvest and conditioning | dry matter = wet mass × (1 − moisture fraction); equivalent mass at target basis = dry matter / (1 − target moisture fraction) | `cp_conditioning_input`; `cp_accepted_seed_output` | mass on common moisture basis | `mass-balance-identity`; `fao-rice-postharvest` |
| `calculate_water_withdrawal` | irrigation | source-specific metered withdrawal normalized to reference output; report delivery and consumption separately | `cp_irrigation_records`; `cp_accepted_seed_output` | kg or m3 water/kg reference output | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | field nitrogen | apply the selected IPCC or regional method and convert N2O-N to N2O where required | `cp_nutrient_records`; declared method factors | kg N2O/kg reference output | `ipcc-2019-managed-soils-n2o` |
| `calculate_energy_normalization` | field, conditioning, and storage energy | sum carrier-specific energy records by process and normalize to accepted reference output without merging water or material quantities | energy protocols; `cp_accepted_seed_output` | MJ or kWh/kg reference output | `mass-balance-identity` |
| `calculate_output_fates` | field, conditioning, and storage | accepted seed + intentional co-products + rejects + losses + declared residues = measured input on a common moisture basis within the declared tolerance | output and input protocols | output reconciliation and unexplained difference | `mass-balance-identity`; `fao-rice-postharvest` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference output and lots | Declare rice variety or hybrid, seed class, lot identity, geography, crop year, gate, moisture basis, treatment status, and quality-test basis. | lot certificates, field records, quality certificates, dispatch records |
| `dq_flow_resolution` | all parameterized rows | Resolve every parameterized Flow Set row to a verified platform UUID before final TIDAS exchange publication and preserve the selected group and project context. | final exchange records and Flow Set selection record |
| `dq_input_completeness` | field and conditioning inventory | Quantify or justify zero or exclusion for source seed, nutrients, irrigation, crop protection, land, field energy, pumping, drying, conditioning, packaging, storage, and direct emissions. | ledgers, logs, meters, invoices, and method declaration |
| `dq_moisture_and_mass` | harvest and conditioning | Use calibrated mass and moisture records and reconcile received, dried, accepted, rejected, and lost material on a common basis. | scale calibration, moisture tests, and reconciliation |
| `dq_representativeness` | dataset profile | Disclose temporal, geographic, varietal, production-system, technology, and facility coverage and explain deviations from the declared route. | sampling plan and metadata |
| `dq_quality_evidence` | seed quality | Retain the test method, sample size, lot coverage, laboratory or inspector identity, and release decision for purity, germination, moisture, and treatment status. | quality certificate and test record |
## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_binding` | reference product | Confirm the reference product uses the verified platform UUID and declared seed-gate qualifiers; the final exchange must retain that UUID. | `mass-balance-identity` |
| `validation_binding_coordinates` | all bound rows | Confirm every bound row uses `fixed` or `parameterized`; every fixed row has a verified UUID and every parameterized row has an existing Flow Set id, version, and compatible group or coordinate. |  |
| `validation_flow_coordinates` | all inventory rows | Confirm direction and flow type match the structural coordinate: product inputs for material, nutrient, water, energy, and packaging; product outputs for product-output; elementary inputs for natural resource extraction; elementary outputs for direct releases. |  |
| `validation_quality_identity` | reference output | Confirm seed class, lot, variety or hybrid, moisture basis, purity, germination, treatment, geography, crop year, and gate are present. | `irri-rice-seed-quality` |
| `validation_moisture_and_mass_balance` | harvest, conditioning, and storage | Confirm common-basis mass reconciliation and declared fates for accepted seed, co-products, rejects, residues, dust, and storage losses. | `fao-rice-postharvest`; `mass-balance-identity` |
| `validation_nutrient_and_emissions` | nutrients and field emissions | Confirm product nutrient mass is distinct from kg nutrient and that the selected nitrogen-emission method, unit conversion, and receiving compartment are declared. | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | irrigation and withdrawal | Confirm withdrawal, delivered irrigation, consumption, and water-footprint indicators are distinguished and not double counted. | `fao-crop-evapotranspiration-56` |
| `validation_allocation` | shared burdens and outputs | Confirm subdivision was considered first, output fates are complete, any allocation method is declared, and sensitivity is reported when material. | `iso-14044-2006` |
## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | foreground secondary dataset with background links for purchased inputs and services |
| downstream_use | construction of rice-seed supply processes and lifecycle models; comparison of declared rice seed routes at a common reference flow |
| allowed_use | rice seed for sowing matching the declared class, variety or hybrid, geography, crop cycle, quality basis, treatment status, gate, and packaging state |
| excluded_use | rice paddy for milling; husked or milled rice; food or feed grain; downstream rice cultivation; datasets with incompatible gate, moisture basis, quality state, or unexplained output loss |
| required_metadata | reference Flow Set resolution; seed class; lot and variety or hybrid; geography; crop year; production system; irrigation; nutrient and crop-protection records; land; energy; moisture basis; purity; germination; treatment; packaging; gate; output fates; allocation; data-quality disclosure |
| required_quality_disclosure | primary-record coverage; temporal and geographic representativeness; scale and moisture calibration; parameterized Flow Set resolutions; nutrient and emission methods; water source; energy carriers; gate; exclusions; allocation; sensitivity; module checklist result |
| update_trigger | material change in seed class, variety or hybrid, gate, moisture convention, quality standard, production route, irrigation, nutrient or crop-protection practice, conditioning technology, storage duration, packaging, output fate, Flow Set contract, or evidence status |
## 11. Data Sources
| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `irri-rice-seed-quality` | official_guidance | International Rice Research Institute, Rice Knowledge Bank, seed quality guidance, <https://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality> | seed class, purity, germination, lot-quality, and release evidence |
| `fao-rice-postharvest` | official_guidance | FAO, Agricultural engineering in development: post-harvest systems, <https://www.fao.org/4/t0522e/T0522E03.htm> | drying, cleaning, handling, moisture, loss, and conditioning process decomposition |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | irrigation data collection and distinctions among water quantities |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residue, land, and production-method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen-emission method and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity | moisture conversion, output reconciliation, and QA guardrails |
