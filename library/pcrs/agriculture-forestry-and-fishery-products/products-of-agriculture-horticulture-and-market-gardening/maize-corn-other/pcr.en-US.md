---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other"
language: "en-US"
status: candidate
sync_with: "pcr.zh-CN.md"
content_maturity: authored_methodology
translation_status: aligned
---
# Non-seed Maize Grain at Farm Gate
## 1. Scope and Applicability
This PCR guides construction of a foreground data package for non-seed maize grain corresponding to CPC 3.0 `01122`, from cultivated field production through harvest and the declared farm gate. The default declared gate is the farm gate. A data package may instead declare a primary processing gate when it includes only the bounded first conditioning needed to deliver grain, such as shelling, drying, cleaning, or grading.
Food, feed, and industrial end use are alternatives to be declared by the data package; they do not create separate PCR identities here. Irrigated and rain-fed production, production systems, varieties or hybrids, tillage routes, and primary conditioning routes are included only when their identity and evidence are declared.
Maize seed, maize grown for forage or silage, sweet or baby corn marketed as a vegetable, food or feed manufacturing, starch or ethanol conversion, milling, formulation, retail packaging, distribution, consumption, and downstream storage are excluded by default. A downstream process may consume this PCR as an input only after the product state, moisture basis, grade, and gate are declared.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other` |
| classification_refs | CPC 3.0 `01122`, `Maize (corn), other` |
| covered_products | Non-seed maize grain from a declared crop route, at the farm gate or declared primary processing gate |
| excluded_products | maize seed; forage or silage maize; sweet or baby corn sold as a vegetable; milled, cooked, fermented, formulated, starch, ethanol, feed, or other downstream maize products |
| representative_product | Marketable non-seed maize grain, bulk, with moisture basis, grade, end-use route, and gate declared |
| production_route | Managed annual maize cultivation, harvest and collection, with optional primary conditioning before the declared gate |
| market_state | Food, feed, or industrial grain route declared as received at the gate; no downstream food or feed processing |
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Non-seed maize grain at the declared farm gate or primary processing gate |
| How much | 1 kg net accepted grain |
| How well | Variety or hybrid, end-use route, moisture basis, grade, foreign material or dockage rule, production system, geography, irrigation status, and gate declared |
| How long or cycle | One declared crop season and harvest year |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | end-use route; variety or hybrid; grain state; moisture basis; grade and foreign-material rule; geography; crop season and harvest year; irrigated or rain-fed status; production system; declared gate; packaging or bulk state |
| Binding | `fixed` |
The reference amount is net accepted non-seed maize grain. Tare, foreign material, dockage, moisture removed during conditioning, rejected grain, and residues are reported separately and must not be silently merged into the reference output.
## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Express the reference flow as net accepted non-seed maize grain at the declared gate and exclude container tare. |
| `moisture_basis` | grain output and moisture removal | Mass and moisture content | kg and declared mass fraction | Record as-received mass and moisture basis. Any conversion to another moisture basis must use measured or declared moisture and an explicit calculation; no universal moisture factor is supplied here. |
| `yield_basis` | harvest and normalized inputs | Mass and area | kg and ha | Record harvested grain, accepted grain, non-marketable grain, residues, losses, and cultivated area for the same crop season before normalization. |
| `fertilizer_n_basis` | fertilizer and soil emissions | Mass | kg product and kg N | Record formulated product mass and nutrient content separately; nitrogen emission calculations use the declared kg N input. |
| `water_basis` | irrigation and withdrawal | Volume or Mass | m3 or kg | Declare water source and distinguish withdrawal, delivered irrigation, consumption, and any separately reported water indicator. |
| `energy_inventory` | fuel, electricity, and drying | Mass, Volume, or Energy | L, kg, MJ, or kWh | Preserve energy carrier, measurement unit, conversion basis, operation, and whether the value belongs to field or conditioning work. |
| `land_basis` | land occupation and crop production | Area-time | ha·season or declared area-time unit | Record cultivated area and the declared crop-season occupation basis; do not use land occupation as a proxy for land transformation. |
## 5. System Boundary
The default foreground boundary includes source planting material as an identified input, field preparation and sowing, fertilization and soil amendments, irrigation where applicable, crop protection, field machinery and energy, managed-soil emissions, harvest, shelling or collection when part of the declared route, and field-to-gate handling. Optional primary conditioning is included only when the declared gate is after that operation. Upstream production of seed, fertilizers, crop-protection products, water supply, fuels, electricity, machinery services, and treatment services uses representative background datasets. Food, feed, industrial conversion, and downstream distribution are outside the default boundary.
### Boundary Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | foreground system | Include field production, harvest, collection, and gate-delivery handling required to provide the declared non-seed maize grain; treat purchased inputs as upstream datasets unless they are explicitly inside the foreground package. | `fao-maize-harvest-postharvest-2023`; `ipcc-2019-cropland` |
| `boundary_gate_definition` | reference product | Use farm gate by default. A primary processing gate is allowed only when shelling, drying, cleaning, grading, and their losses are explicitly recorded and no later food, feed, starch, ethanol, or other manufacturing is included. | `fao-maize-drying-handling`; `mass-balance-identity` |
| `boundary_primary_conditioning` | optional conditioning | Treat first conditioning as a separate conditional node with its own energy, water, rejects, moisture change, and hand-off; do not infer a conditioning route from the CPC title. | `fao-maize-drying-handling` |
| `boundary_input_completeness` | crop production | Provide a value, justified zero, or documented exclusion for planting material, nutrient inputs, crop protection, irrigation, field energy, land, managed-soil emissions, and residue fate. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | all outputs | Separate accepted grain, non-marketable grain, intentionally recovered co-products, field residues, conditioning rejects, moisture removed, and unexplained loss by measured mass and fate. | `mass-balance-identity`; `fao-maize-drying-handling` |
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | source planting-seed lot for an annual non-seed maize crop |
| starting_condition_role | crop production input and identity condition |
| product_classification_scope | Non-seed maize grain corresponding to CPC 3.0 `01122`; maize seed `01121` and forage or silage maize `01911` are excluded |
| recursive_input_rule | Planting seed is recorded as a separate declared input and is not counted as reference grain. Any same-category maize grain entering the foreground route is separately identified by origin and purpose and is not merged with current-crop output. |
| upstream_dataset_requirement | Seed, fertilizers, amendments, crop-protection products, irrigation-water supply, fuel, electricity, machinery services, packaging when applicable, and waste-treatment services require representative upstream datasets or a documented exclusion. |
| disclosure | variety or hybrid, end-use route, field and geography, crop season, production system, irrigation, planting material, gate, grain state, moisture basis, grade, foreign material rule, accepted output, residue and reject fate, and allocation decision |
## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_maize_production | Field Maize Production | required |  | foreground | crop-season production normalized to accepted grain output |
| maize_harvest_and_collection | Maize Harvest and Collection | required |  | foreground | harvested and collected grain before the declared gate |
| primary_maize_conditioning | Primary Maize Conditioning | conditional | include when shelling, drying, cleaning, grading, or equivalent first conditioning occurs before the declared gate | foreground | accepted grain after the declared conditioning hand-off |
### Process: Field Maize Production (`field_maize_production`)
#### Inputs
##### Product flows
###### Source planting-seed lot (`source_planting_seed_lot`)
The planting-seed lot is a declared crop input, not the reference product. Record its identity, treatment status, mass basis, and source without treating it as maize seed output for CPC 01121.
- Selected flow: Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured mass of the planting-seed lot used for the declared crop area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Provisional seed-input screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg planting seed/1,000 kg accepted grain
  - Basis: broad first-pass screening interval; not a default crop rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Agricultural nutrient and fertilizer inputs (`field_maize_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`
- Range: Provisional nutrient-input screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg formulated input/1,000 kg accepted grain
  - Basis: broad first-pass screening interval; product and nutrient records remain mandatory
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_supplied`)
Record metered or otherwise evidenced irrigation delivered to the crop. Verified rain-fed routes may record zero with supporting evidence.
- Selected flow: irrigation water supplied to field
- Flow property / unit: Volume or Mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: source-specific metered or evidenced delivered irrigation; zero only for verified rain-fed production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`
- Range: Provisional irrigation screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted grain
  - Basis: broad first-pass screening interval; not a geographic or crop default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Crop-protection inputs (`crop_protection_inputs`)
Record named formulated products and active substances used for weeds, pests, or diseases, with application date, field, and product identity.
- Selected flow: named crop-protection product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by named product and active substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Provisional crop-protection screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg product/1,000 kg accepted grain
  - Basis: broad first-pass screening interval; actual applications are required
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Field energy and machinery services (`field_energy_and_machinery_services`)
Record fuel, electricity, contracted machinery, and other energy carriers used by field operations and irrigation pumping.
- Selected flow: field fuel, electricity, and machinery service inputs
- Flow property / unit: Mass, Volume, or Energy / L, kg, MJ, or kWh
- Amount rule: measured or supplier-recorded energy by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`
- Range: Provisional field-energy screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: L diesel-equivalent/1,000 kg accepted grain
  - Basis: broad first-pass screening interval; not a fuel factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
Waste-derived amendments or returned materials are recorded only when they cross the field boundary with declared origin, quality, and burden treatment. They are not silently merged with fertilizer inputs.
##### Elementary flows
###### Cultivated land occupation (`cultivated_land_occupation`)
Record cultivated area and crop-season occupation as an elementary land-use flow when required by the study scope.
- Selected flow: applicable cultivated land occupation elementary flow
- Flow property / unit: Area-time / ha·season
- Amount rule: cultivated area multiplied by the declared crop-season occupation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `ipcc-2019-cropland`
- Range: Land-occupation QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: ha·season/1,000 kg accepted grain
  - Basis: non-negative area-time normalized to accepted output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Managed-soil water withdrawal (`managed_soil_water_withdrawal`)
Record elementary water withdrawal by source where irrigation is included, without double counting delivered irrigation as an environmental withdrawal.
- Selected flow: water withdrawn from declared source
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: calculate source-specific withdrawal from irrigation records and declared system losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`
- Range: Water-withdrawal QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted grain
  - Basis: non-negative source-specific withdrawal screen; not a water-footprint default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
#### Outputs
##### Product flows
###### Harvested maize grain (`harvested_maize_grain`)
Harvested maize grain is the collected crop output entering the gate or the optional conditioning process. Its as-received mass, moisture, foreign material, and grade state are measured.
- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured harvested grain mass before any included primary conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Harvested-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg harvested grain
  - Basis: quantitative process reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Intentionally recovered corn straw (`intentionally_recovered_corn_straw`)
Record the non-cob straw or stover fraction as a product output only when it is intentionally collected or transferred with a declared destination. The fixed flow below applies only when the recovered material is the explicitly identified corn-straw fraction; corn cobs and other biomass are recorded separately.
- Selected flow: Corn straw `10041d22-3cea-4f73-b597-3c75f8bf3883`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200c9a66` / kg as received and dry matter when required
- Binding: `fixed`
- Amount rule: measured corn-straw mass by destination; zero when no intentional recovery occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Provisional corn-straw recovery screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg corn straw/kg accepted grain
  - Basis: broad first-pass fraction screen; actual destination evidence is required
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Intentionally recovered corn cobs (`intentionally_recovered_corn_cobs`)
Record corn cobs as a separate product output when they are intentionally collected or transferred with a declared destination. Do not use the corn-straw identity for cobs; declare the concrete cob identity and gate before constructing the final exchange.
- Selected flow: Corn cobs / maize cobs
- Flow property / unit: Mass / kg as received and dry matter when required
- Amount rule: measured corn-cob mass by destination; zero when no intentional recovery occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Provisional corn-cob recovery screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg corn cobs/kg accepted grain
  - Basis: broad first-pass fraction screen; actual destination evidence is required
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
**Field residues and non-marketable crop material (`field_residues_and_non_marketable_crop_material`)**
Record non-recovered cobs, stover, damaged grain, and other crop material by fate, including retention, incorporation, grazing, open burning, disposal, or transfer to another system.
- Selected flow: maize residue, damaged grain, or agricultural waste by declared fate
- Flow property / unit: Mass / kg as received and dry matter when required
- Amount rule: measured or calculated mass by fate after reconciling harvested material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`
- Range: Residue-and-loss reconciliation interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg non-reference output/kg harvested grain
  - Basis: non-negative mass-balance fraction before fate-specific treatment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
##### Elementary flows
###### Direct managed-soil nitrogen emissions (`direct_managed_soil_nitrogen_emissions`)
Calculate direct nitrogen emissions from declared nutrient inputs and the selected IPCC method tier. Keep the nitrogen input, emission species, factor source, and conversion visible.
- Selected flow: one measured or method-calculated nitrogen species to one declared receiving medium; create separate foreground exchanges for N2O, NH3, nitrate, and any other supported species
- Flow property / unit: Mass / kg emitted substance; record kg N only as the calculation basis and convert to species mass
- Amount rule: calculate from collected nutrient inputs, declared soil and climate context, and the selected method tier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrogen-pathway QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg emitted-N/kg applied N
  - Basis: broad reconciliation screen; selected factors and species remain method-specific
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils-n2o`; `mass-balance-identity`
###### Fossil carbon dioxide from field fuel (`fossil_carbon_dioxide_from_field_fuel`)
Calculate direct fossil carbon dioxide from recorded field fuel using a declared fuel identity and factor source.
- Selected flow: fossil carbon dioxide to air from field fuel
- Flow property / unit: Mass / kg
- Amount rule: recorded fuel by operation multiplied by the declared combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy_records`
- Sources: `mass-balance-identity`
- Range: Fuel-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CO2/kg fuel-carbon inventory
  - Basis: declared-fuel calculation reconciliation; not an emission factor
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
### Process: Maize Harvest and Collection (`maize_harvest_and_collection`)
#### Inputs
##### Product flows
###### Harvested grain received (`harvested_grain_received`)
The harvest node receives measured grain from field production, including the declared harvested state and any attached foreign material or moisture information.
- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured mass received by the harvest or collection operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Harvest-receipt reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg received/kg harvested grain
  - Basis: receipt mass must reconcile to the field harvest record
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
##### Waste flows
No waste input is required by default. Material transferred from another system is recorded with origin, status, and burden treatment rather than as an unqualified waste input.
##### Elementary flows
Harvest-related direct emissions are recorded here only when the harvest operation is separately metered or modelled; field-operation emissions must not be counted again.
#### Outputs
##### Product flows
###### Grain delivered to gate or conditioning (`grain_delivered_to_gate_or_conditioning`)
This is the collected grain hand-off. It is the reference output when no primary conditioning is included and is the input to the conditional conditioning node otherwise.
- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured net grain transferred to the declared gate or conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `fao-maize-harvest-postharvest-2023`
- Range: Harvest hand-off reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg hand-off/kg harvested grain
  - Basis: hand-off mass reconciled to received harvest and fates
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
##### Waste flows
**Harvest rejects and field losses (`harvest_rejects_and_field_losses`)**
Record damaged, dropped, spoiled, or otherwise rejected material leaving the harvest boundary, with fate and whether any burden is retained or transferred.
- Selected flow: harvest reject or agricultural loss by fate
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated rejected mass reconciled to harvest receipt and accepted hand-off
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `mass-balance-identity`
- Range: Harvest-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg harvested grain
  - Basis: broad reconciliation interval, not a loss default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
Direct harvest-operation emissions are included only when they are inside the declared harvest boundary and not already included in field energy records.
### Process: Primary Maize Conditioning (`primary_maize_conditioning`)
#### Inputs
##### Product flows
###### Grain entering primary conditioning (`grain_entering_primary_conditioning`)
This conditional node receives grain when the declared gate is after first conditioning. The data package states whether shelling, drying, cleaning, or grading is included.
- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg with declared moisture basis
- Binding: `fixed`
- Amount rule: measured received grain mass and moisture at the conditioning boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioned maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-maize-drying-handling`
- Range: Conditioning-input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg received grain/kg accepted conditioned grain
  - Basis: input and output must be reconciled with moisture and rejects
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Conditioning energy (`conditioning_energy`)
Record drying fuel, electricity, and other energy carriers only when the operation is inside the declared gate.
- Selected flow: drying fuel, electricity, and conditioning energy inputs
- Flow property / unit: Mass, Volume, or Energy / kg, L, MJ, or kWh
- Amount rule: measured conditioning input by batch or reporting record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted conditioned maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-maize-drying-handling`
- Range: Provisional conditioning-input screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: declared input unit/1,000 kg accepted conditioned grain
  - Basis: broad first-pass screening interval; no default energy factor is supplied
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Conditioning water (`conditioning_water`)
Record cleaning and conditioning water only when the operation is inside the declared gate, keeping supplied water distinct from source withdrawal.
- Selected flow: cleaning and conditioning water
- Flow property / unit: Volume or Mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: measured conditioning water by batch or reporting record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted conditioned maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-maize-drying-handling`
- Range: Provisional conditioning-water screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: declared water unit/1,000 kg accepted conditioned grain
  - Basis: broad first-pass screening interval; no default water factor is supplied
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
No waste input is required by default. Recovered secondary material requires an explicit origin and burden decision.
##### Elementary flows
Conditioning water withdrawal and direct combustion emissions are recorded only when the conditioning operation is included and the corresponding input records exist.
#### Outputs
##### Product flows
###### Accepted maize grain at declared gate (`accepted_maize_grain_at_declared_gate`)
Accepted maize grain is the reference output after the optional conditioning node. It is reported with moisture, grade, foreign-material rule, and gate metadata.
- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured net accepted grain after included conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_output_records`
- Sources: `fao-maize-drying-handling`; `mass-balance-identity`
- Range: Reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: quantitative reference output after declared gate conditioning
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
##### Waste flows
**Conditioning rejects and removed moisture (`conditioning_rejects_and_removed_moisture`)**
Record dockage, screenings, broken or rejected grain, removed moisture, and cleaning residues separately, with measured mass or an explicit moisture calculation and a destination or fate.
- Selected flow: conditioning reject, removed moisture, screening, or cleaning residue by fate
- Flow property / unit: Mass / kg as received or dry matter as declared
- Amount rule: measured or calculated from input-output reconciliation and moisture records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted conditioned maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_output_records`
- Sources: `fao-maize-drying-handling`; `mass-balance-identity`
- Range: Conditioning-reconciliation interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg non-reference output/kg conditioning input
  - Basis: broad mass-and-moisture reconciliation interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
##### Elementary flows
###### Conditioning dust and direct fuel emissions (`conditioning_dust_and_direct_fuel_emissions`)
Record dust or direct combustion emissions only when supported by the conditioning operation records and selected receiving-compartment identities.
- Selected flow: conditioning dust and fossil combustion emissions by receiving compartment
- Flow property / unit: Mass / kg
- Amount rule: measured, supplier-recorded, or calculated from included conditioning records and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted conditioned maize grain
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-maize-drying-handling`; `mass-balance-identity`
- Range: Conditioning-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg emission/kg relevant input
  - Basis: reconciliation screen; no universal emission factor is supplied
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
## 7. Allocation and Co-product Handling
### Allocation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | field and conditioning processes | First avoid allocation by subdividing operations or collecting separate records for grain, intentionally recovered residue, rejects, and fate-specific treatment. | `iso-14044-2006` |
| `allocation_grain_and_recovered_residue` | grain and intentional residue co-products | When subdivision is not possible, use a declared allocation method supported by representative product properties or values, document the choice, and provide a sensitivity to a materially different defensible method. | `iso-14044-2006` |
| `allocation_residue_fate` | field residue and rejects | Keep residue collection, incorporation, grazing, burning, disposal, and transfer distinct. Do not credit a displaced product unless the destination, function, market, and substitution evidence are declared. | `ipcc-2019-cropland`; `iso-14044-2006` |
| `allocation_moisture_conditioning` | primary conditioning | Allocate conditioning burdens using the measured mass and moisture transformation of each output; do not allocate removed moisture as accepted grain. | `fao-maize-drying-handling`; `mass-balance-identity` |
## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_maize_production` | source planting-seed lot | seed and input record | variety or hybrid; lot; treatment; supplier; mass; planting date; field; source status | invoice, seed tag, field log | kg, date, field | per planting event | complete crop season | field or production unit | sum by field and normalize to accepted grain | lot label, invoice, field log |
| `cp_nutrient_input_records` | `field_maize_production` | fertilizer and soil amendments | purchase and application record | product; formulation; nutrient content; mass; date; field; application method | invoice, label, application log | kg product, kg nutrient, date | per application | complete crop season | field and production unit | sum by input and field; retain nutrient mass | invoice, label, application record |
| `cp_irrigation_records` | `field_maize_production` | irrigation and withdrawal | meter or source record | source; meter; readings; volume; date; field; pumping energy | calibrated meter, pump log, supplier record | m3, kg, kWh | event or month | irrigation portion of crop season | field and source | sum by source and normalize to accepted grain | calibration, readings, source record |
| `cp_crop_protection_records` | `field_maize_production` | crop protection | application record | product; active substance; dose; area; date; field; target | label and application log | kg product, kg active substance, ha | per application | complete crop season | field | sum by product and active substance | label, applicator log |
| `cp_field_energy_records` | `field_maize_production` | field energy and machinery | fuel, electricity, or service record | operation; carrier; quantity; machine or supplier; date; field | fuel log, meter, invoice, contractor record | L, kg, MJ, kWh, service unit | operation or billing interval | complete crop season | field or production unit | attribute to field operations without double counting | meter, invoice, log |
| `cp_land_and_output_records` | `field_maize_production` | land, harvest, grain, residue, and loss | field and harvest record | area; dates; harvested grain; accepted grain; moisture; grade; residues; rejects; losses; fate | calibrated scale, field map, dispatch and fate records | ha, kg, moisture fraction, date | harvest and reconciliation | complete crop season | field and gate | reconcile all outputs before normalization | scale calibration, field map, tickets, fate records |
| `cp_conditioning_input_records` | `primary_maize_conditioning` | conditioning energy and water | batch and utility record | batch; received mass; moisture; operation; carrier; quantity; water; date | batch sheet, meter, invoice | kg, moisture fraction, L, m3, MJ, kWh | batch or utility interval | declared conditioning coverage | conditioning facility | sum by batch and normalize to accepted grain | batch sheet, meter, invoice |
| `cp_conditioning_output_records` | `primary_maize_conditioning` | accepted grain and rejects | batch output and quality record | input mass; output mass; moisture; grade; dockage; screening; removed moisture; fate; gate | calibrated scale, moisture test, quality record | kg, moisture fraction, date | batch | declared conditioning coverage | conditioning facility and gate | reconcile input, accepted output, rejects, and moisture | calibration, moisture test, dispatch and fate records |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_grain` | all foreground rows | divide the measured or calculated row amount by net accepted grain at the same declared gate and basis | output and input records | amount per 1 kg reference product | `mass-balance-identity` |
| `convert_moisture_basis` | grain and conditioning rows | convert only from measured as-received mass and declared moisture using an explicit mass-and-water equation; retain both original and converted values | `cp_land_and_output_records`; `cp_conditioning_output_records` | declared moisture-basis mass | `mass-balance-identity`; `fao-maize-drying-handling` |
| `calculate_managed_soil_emissions` | nitrogen emissions | apply the selected IPCC method tier to collected nutrient inputs and declared soil, climate, and management context; disclose factors and species conversions | `cp_nutrient_input_records`; declared method factors | species-specific emissions | `ipcc-2019-managed-soils-n2o` |
| `calculate_land_occupation` | land occupation | cultivated area multiplied by the declared crop-season occupation basis and normalized to accepted grain | `cp_land_and_output_records` | area-time per reference product | `ipcc-2019-cropland`; `mass-balance-identity` |
| `reconcile_field_outputs` | field production | accepted grain plus recovered residue, rejects, field residue, and unexplained loss must reconcile to the harvested record within a declared tolerance | `cp_land_and_output_records` | output mass balance and unexplained fraction | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | primary conditioning | received grain mass and water content must reconcile to accepted grain, rejects, removed moisture, and documented loss | `cp_conditioning_input_records`; `cp_conditioning_output_records` | conditioning mass-and-moisture balance | `mass-balance-identity`; `fao-maize-drying-handling` |
| `apply_co_product_allocation` | grain and intentionally recovered residue | apply the declared subdivision, mass, economic, or other defensible method only after output identities and destinations are documented; run a sensitivity | output records; allocation decision | allocated burdens by output | `iso-14044-2006` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and field | Declare variety or hybrid, end-use route, geography, crop season, production system, irrigation, gate, grain state, moisture basis, grade, foreign-material rule, and packaging or bulk state. | dataset metadata, field records, quality and gate records |
| `dq_temporal_coverage` | crop production | Cover the complete declared crop season and harvest year; if an aggregated dataset is used, disclose the contributing seasons and weighting. | dated field, input, harvest, and dispatch records |
| `dq_input_completeness` | crop and conditioning inputs | Quantify or justify zero or exclusion for seed, nutrient inputs, crop protection, irrigation, field energy, conditioning energy and water, land, and treatment. | ledgers, labels, meters, logs, invoices, process records |
| `dq_moisture_and_grade` | grain output | Retain sampling method, moisture result, grade, dockage or foreign material, rejected mass, and the conversion basis used for normalization. | calibrated scale, moisture test, quality record |
| `dq_mass_balance` | all outputs | Reconcile field and conditioning outputs, including accepted grain, residues, rejects, removed moisture, and unexplained loss; document tolerance and calibration. | scale records, batch sheets, calculation workbook |
| `dq_method_identity` | UUID-bearing rows and factors | Verify each Tiangong flow, property, and unit-group identity and keep external factors separate from identity evidence. | reviewed identity record, source factor, method note |
| `dq_allocation_and_fate` | co-products and residues | Record the output destination, burden treatment, allocation method, substitution evidence, and sensitivity whenever multiple intended outputs are reported. | dispatch, fate, allocation, and sensitivity records |
## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm one 1 kg net accepted non-seed maize grain reference flow, all required qualifiers, and a reviewed Tiangong product, property, and unit-group identity before publication. | `mass-balance-identity` |
| `validation_scope` | boundary | Confirm maize seed, forage or silage routes, and downstream food, feed, starch, ethanol, milling, and distribution activities are excluded unless a separate declared dataset boundary is used. | `fao-maize-harvest-postharvest-2023`; `fao-maize-drying-handling` |
| `validation_process_map` | process inventory | Confirm field production and harvest are present and that primary conditioning is included only when its condition, hand-off, inputs, outputs, and gate are explicit. | `fao-maize-drying-handling` |
| `validation_mass_balance` | outputs | Confirm harvested grain, accepted grain, residues, rejects, removed moisture, and losses reconcile within the declared tolerance, with every non-reference output assigned a fate. | `mass-balance-identity` |
| `validation_moisture` | grain and conditioning | Confirm as-received mass, moisture basis, grade, dockage, and any conversion equation are retained; do not apply an undocumented default moisture factor. | `fao-maize-drying-handling`; `mass-balance-identity` |
| `validation_nitrogen` | fertilizer and emissions | Confirm product mass, nutrient mass, selected IPCC tier, factor source, species, unit, and conversion are declared and not supplied by a module. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_energy` | water and energy | Confirm source, carrier, unit, operation, meter or record, and upstream versus foreground treatment are explicit and no supplied water or fuel is counted twice. | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_allocation` | multiple outputs | Confirm intentional residue co-products are distinguished from waste, the allocation decision is explicit, and an alternative defensible method is tested when allocation is material. | `iso-14044-2006` |
| `validation_identity_review` | all bound flow rows | Reject finalization when a flow binding is absent or does not match direction, flow type, property, unit group, geography, or gate. | `mass-balance-identity` |
| `validation_data_quality` | data package | Confirm every required category has a collected value, calculated value with inputs, justified zero, or documented exclusion, and disclose open review items. | `fao-maize-harvest-postharvest-2023`; `ipcc-2019-cropland` |
## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Non-seed maize grain matching the declared variety or hybrid, end-use route, geography, production system, irrigation, crop season, moisture basis, grade, and farm or primary processing gate |
| excluded_use | maize seed; forage or silage maize; sweet or baby corn as a vegetable; food, feed, starch, ethanol, milling, formulation, retail, distribution, consumption, or unqualified storage datasets |
| required_metadata | reviewed reference-flow identity; variety or hybrid; end-use route; geography; field and season; seed input status; production system; irrigation; gate; grain state; moisture and grade; accepted output; residue and reject fate; allocation; source and protocol coverage |
| required_quality_disclosure | crop seasons; field and supplier coverage; primary-record coverage; mass-balance tolerance; scale and moisture calibration; nutrient and emission methods; water source; energy carriers; gate; exclusions; allocation and sensitivity; identity coverage and unmapped-flow disclosure |
| update_trigger | material change in gate, grain state, moisture convention, grade rule, production route, irrigation, nutrient or crop-protection practice, conditioning technology, output fate, allocation method, or representativeness |
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-maize-harvest-postharvest-2023` | official_guidance | FAO, Maize harvesting and post-harvesting handling, <https://www.fao.org/family-farming/detail/en/c/1619514/> | field-to-harvest and first post-harvest process decomposition, handling and loss questions |
| `fao-maize-drying-handling` | official_guidance | FAO, Agricultural engineering in development: Grain and post-harvest systems, <https://www.fao.org/4/t0522e/T0522E03.htm> | primary drying, moisture, shelling, conditioning, and gate distinctions |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residue treatment, land and crop-management method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen-emission calculation and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for crop harvest, conditioning, reject, moisture, and reference-flow reconciliation. | output reconciliation, normalization, and QA guardrails |
