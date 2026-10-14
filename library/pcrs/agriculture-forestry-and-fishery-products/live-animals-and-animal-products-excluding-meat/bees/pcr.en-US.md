---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bees

## 1. Scope and Applicability

This PCR guides foreground data package construction for live bees transferred as live animals at a declared apiary, breeder, package producer, queen producer, holding, or delivery gate. It covers honey bees and other managed bee species where the product is live bees, including colonies, nucleus colonies, packages, queen bees with attendants, brood frames, or comparable live-bee units.

Excluded products are natural honey, beeswax, propolis, royal jelly, venom, pollination service, beekeeping service, honey extraction equipment, downstream crop pollination, and downstream honey or wax production unless a study explicitly expands scope and declares allocation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees` |
| classification_refs | CPC 3.0 `02196`, `Bees` |
| covered_products | live bees transferred as colonies, nucleus colonies, packages, queen bees with attendants, brood frames, or comparable live-bee units |
| excluded_products | honey; beeswax; propolis; royal jelly; bee venom; pollination service; beekeeping service; beekeeping equipment; downstream crop pollination; downstream honey or wax production |
| representative_product | live bees at declared colony or package condition and declared health status |
| production_route | colony stock entry, apiary establishment, colony management and feeding, health treatment and hive maintenance, live-bee packing and dispatch |
| market_state | live animal, unprocessed, at declared species, life stage, caste mix, package or colony unit, colony strength, health status, and transfer gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live bees at declared transfer gate |
| How much | 1 kg live bee mass |
| How well | declared species, life stage, caste mix, colony or package unit, queen status, colony strength, health status, and live-bee mass or count conversion |
| How long or cycle | one declared colony production, split, queen production, package production, or dispatch cycle |
| reference_flow_link | `declared_transferred_live_bees` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bees `0be7ee1d-758e-458f-9dba-56d8c5298875` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; life stage; caste mix; colony, nucleus, package, queen, brood-frame, or other unit type; queen presence and status; colony strength or bee count basis; health or certification status; geography and declared gate; transport inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass live bee basis is the primary reference flow. Colony count, package count, queen count, brood-frame count, or bee-count records may be used only when a documented conversion to live bee mass is provided.

Retain complete raw batch, herd, process-transfer and co-product quantities on their original collection bases. For each exchange, establish actual route, period and co-product attribution, then calculate attributed raw quantity × 1 kg / matching-period final accepted product mass on the same boundary. Record actual stage outputs, losses, yields and allocation; never fix intermediate transfers to the final 1 kg or infer zero losses from missing data.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_bee_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live bee mass | The reference flow must be expressed as kg live bees at the declared transfer gate. |
| `count_to_mass_conversion` | colony, package, queen, brood-frame, or bee-count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live bee mass | Count-based live-bee records must include measured mass or a documented conversion by unit type, bee count, or colony strength. |
| `colony_strength_basis` | colony and nucleus units | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` and Mass | frames, seams, adult bee count, brood area, or kg live bee mass | Declare the colony-strength metric used and preserve enough information to convert to the reference mass where needed. |
| `supplemental_feed_basis` | sugar syrup, candy, pollen substitute, and feed supplements | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg sugar, kg dry matter, or kg as-fed | Feed records must state concentration, dry matter, sugar content, or as-fed basis before normalization. |
| `treatment_active_ingredient_basis` | veterinary and pest-control treatments | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg active ingredient or product-specific unit | Treatment records must identify product, active ingredient where available, dose, treated colony count, and withholding or certification relevance. |
| `energy_inventory` | electricity, fuel, refrigeration, holding, and dispatch energy | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ or kWh | State whether each energy value is final electricity, fuel lower heating value, refrigeration energy, or transport service energy. |

## 5. System Boundary

The default boundary is foreground data collection to the declared live-bee transfer gate:

1. Live bee stock, queen stock, nucleus or package inputs, hive consumables, feed, water, medicines, pest-control products, packaging, cages, fuel, electricity, and purchased services when they are part of the foreground data package.
2. Apiary establishment and colony management: splits, queen rearing, feeding, inspections, hive maintenance, moving colonies inside the foreground system, and swarm or loss management.
3. Bee health and pest control: monitoring, sampling, treatments, certification checks, and recordkeeping for diseases and pests where material.
4. Live-bee packing, caging, holding, ventilation, temperature control, dispatch, and delivery when included in the declared gate.

Honey extraction, wax rendering, pollination service delivered to crops, and downstream crop production are outside the default boundary. Hive boxes and durable equipment are included only when the declared data package scope includes capital goods or when replacement materials cross the foreground boundary as consumables.

This boundary is a data-production abstraction. Declared parent colonies, purchased queens, packages, or nucleus colonies are starting-condition records. Same-category live-bee inputs are not recursively traced as a new live-bee PCR inside the same package; their identity, unit type, mass or count conversion, source, and prior-burden treatment are disclosed.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | parent_colony_or_live_bee_stock_entry |
| starting_condition_role | live_bee_identity_and_reproduction_condition |
| product_classification_scope | current CPC 3.0 product category `02196`, `Bees` |
| recursive_input_rule | input flow in the same product category that causes recursive tracing is recorded as declared starting condition or purchased live-bee stock entry, with prior-burden treatment disclosed |
| upstream_dataset_requirement | disclose source, unit type, species, life stage, caste mix, queen status, health status, mass or count conversion, acquisition date, and whether upstream live-bee burdens are included, excluded, or represented by secondary data |
| disclosure | record apiary or breeder boundary, production route, colony-strength basis, live-bee mass conversion, health or certification status, feed basis, treatment regime, mortality or escape fate, package or cage state, and declared gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| live_bee_stock_entry | Live Bee Stock Entry | required |  | foreground | live bee stock entering the foreground system |
| colony_management_and_feeding | Colony Management and Feeding | required |  | foreground | maintained colony, nucleus, package, queen, or brood unit |
| health_treatment_and_hive_maintenance | Health Treatment and Hive Maintenance | required |  | foreground | treated and maintained live-bee unit |
| live_bee_packing_and_dispatch | Live Bee Packing and Dispatch | conditional | include when the declared gate includes caging, package assembly, holding, loading, or delivery | foreground/downstream | live bees transferred at declared gate |

### Process: Live Bee Stock Entry (`live_bee_stock_entry`)

#### Inputs

##### Product flows

###### Parent colony or purchased live bee stock (`parent_colony_or_purchased_live_bee_stock`)

Parent colonies, purchased queens, packages, nucleus colonies, brood frames, or comparable live-bee stock are recorded as the live-bee starting condition.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured live bee mass or documented count-to-mass conversion by unit type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per live-bee stock entry lot

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_stock_entry_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`
- Range: Provisional live-bee stock entry screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg live bee input/kg live bee output
  - Basis: broad first-pass live-bee stock mass entering the foreground system
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sawn wood for hive components (`hive_consumables_for_stock_entry_wood`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Frames, comb foundation, cages, feed cans, screens, and short-life hive consumables are recorded when they cross the foreground boundary for live-bee production.

- Selected flow: Sawn wood for hive components
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per live-bee stock entry lot

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

###### Beeswax foundation (`hive_consumables_for_stock_entry_wax`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Frames, comb foundation, cages, feed cans, screens, and short-life hive consumables are recorded when they cross the foreground boundary for live-bee production.

- Selected flow: Beeswax foundation
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per live-bee stock entry lot

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

###### Polypropylene queen cage (`hive_consumables_for_stock_entry_cage`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Frames, comb foundation, cages, feed cans, screens, and short-life hive consumables are recorded when they cross the foreground boundary for live-bee production.

- Selected flow: Polypropylene queen cage
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per live-bee stock entry lot

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

##### Waste flows

No waste input is normally required for stock entry. Include recovered comb, used cages, or other recovered materials only when they cross the foreground boundary as inputs.

##### Elementary flows

No elementary input is normally required beyond land or site occupation when the declared data package includes apiary land occupation.

#### Outputs

##### Product flows

###### Accepted live bee stock for management (`accepted_live_bee_stock_for_management`)

Accepted live bee stock is the live-bee output entering colony management and feeding.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: accepted live bee mass or count-to-mass conversion after stock-entry inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: stock entry process output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_stock_entry_records`
- Range: Accepted live-bee stock identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg stock entry process output
  - Basis: accepted live-bee stock process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Dead bee biomass (`rejected_or_dead_bees_at_stock_entry_dead_bees`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Dead bees, rejected queens, failed packages, or condemned stock are recorded with mass or count conversion and fate.

- Selected flow: Dead bee biomass
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per live-bee stock entry lot

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_escape_and_reject_records`
- Sources: `fao-good-beekeeping-2019`

##### Elementary flows

Record direct site emissions only when site-specific records show material emissions from stock entry operations.

### Process: Colony Management and Feeding (`colony_management_and_feeding`)

#### Inputs

##### Product flows

###### Live bee stock under management (`live_bee_stock_under_management`)

Live bee stock under management is the accepted stock maintained, split, requeened, or grown for transfer.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion by colony, package, queen, nucleus, or brood unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed live-bee unit

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_colony_management_records`
- Range: Managed live-bee stock reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg managed live bee/kg live bee output
  - Basis: broad first-pass live-bee mass retained, split, or prepared for sale
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glucose feed (`supplemental_sugar_feed_glucose`)

Activate only where the actual route and site records establish this identity. This is not a mandatory input, default recipe, treatment or dosage recommendation. Record formulation and concentration for supplier products without double counting formulation mass and active ingredient. Other actual identities require separate cards; missing records are not zero.

Sugar syrup, candy, fondant, dry sugar, and similar supplemental carbohydrate feeds are recorded by product mass and sugar concentration.

- Selected flow: Glucose feed
- Flow property / unit: Mass / kg
- Amount rule: Collect only the actual quantity of this identity, retaining supplier composition, state, unit and use records; apply the original process attribution and reference-flow basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed colony, package, queen-production batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Sources: `fao-good-beekeeping-2019`

###### Sucrose feeding solution (`supplemental_sugar_feed_sucrose_solution`)

Activate only where the actual route and site records establish this identity. This is not a mandatory input, default recipe, treatment or dosage recommendation. Record formulation and concentration for supplier products without double counting formulation mass and active ingredient. Other actual identities require separate cards; missing records are not zero.

Sugar syrup, candy, fondant, dry sugar, and similar supplemental carbohydrate feeds are recorded by product mass and sugar concentration.

- Selected flow: Sucrose feeding solution
- Flow property / unit: Mass / kg solution
- Amount rule: Collect only the actual quantity of this identity, retaining supplier composition, state, unit and use records; apply the original process attribution and reference-flow basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed colony, package, queen-production batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Sources: `fao-good-beekeeping-2019`

###### Protein feed and supplements (`protein_feed_and_supplements`)

Pollen substitute, pollen patties, protein supplements, and mineral or vitamin supplements are recorded when used.

- Selected flow: Prepared fermentable feed `b25e209d-4bef-4a2f-8fad-46e4d7de3d76`
- Flow property / unit: Mass / kg as-fed and kg dry matter where available
- Amount rule: measured feed issue and declared composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per managed colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Range: Provisional protein supplement screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg feed/kg live bee output
  - Basis: broad first-pass protein supplement assigned to live-bee production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for feeding and handling (`water_for_feeding_and_handling`)

Water used to mix feed, maintain bees, clean equipment, or support holding is recorded by source and use.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg, L, or m3
- Amount rule: measured water use or calculated water content of prepared feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Range: Provisional water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg live bee output
  - Basis: broad first-pass water used for feed mixing, handling, and holding
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at equipment supply (`apiary_energy_and_movement_fuel_electricity`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Electricity and fuel used for apiary visits, lifting, feeding, ventilation, short-distance movement, refrigeration, and holding are recorded by carrier.

- Selected flow: Electricity at equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed colony, batch, route, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_movement_records`

###### Diesel fuel (`apiary_energy_and_movement_fuel_diesel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Electricity and fuel used for apiary visits, lifting, feeding, ventilation, short-distance movement, refrigeration, and holding are recorded by carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed colony, batch, route, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_movement_records`

##### Waste flows

No waste input is normally required for colony management. Include recovered feed, used packaging, or other recovered materials only when they cross the foreground boundary as inputs.

##### Elementary flows

###### Water withdrawal for live bee management (`water_withdrawal_for_live_bee_management`)

Water withdrawal is calculated from feed-mixing, cleaning, and holding water records when elementary water flows are reported.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Mass / kg
- Amount rule: calculated from water source and quantity records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_water_records`
- Range: Provisional water withdrawal screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg water/kg live bee output
  - Basis: broad first-pass water withdrawal for live-bee management
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Managed live bee unit (`managed_live_bee_unit`)

Managed live bee unit is the colony, nucleus, package, queen batch, or brood unit prepared for health treatment, maintenance, or dispatch.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: colony management process output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_colony_management_records`
- Range: Managed live-bee output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg colony management process output
  - Basis: managed live-bee process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Dead bee biomass (`dead_bees_failed_queens_and_swarm_loss_dead_bees`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Dead bees, failed queens, non-marketable colonies, swarm losses, and escape losses are recorded with mass or count conversion and fate.

- Selected flow: Dead bee biomass
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per managed colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_escape_and_reject_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`

##### Elementary flows

###### Fossil carbon dioxide from apiary energy (`fossil_carbon_dioxide_from_apiary_energy`)

Account only for foreground direct-combustion fossil CO2.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate this CO2 exchange only from actual fossil fuel used in directly operated foreground equipment and a compatible combustion factor; exclude purchased-electricity generation and emissions already covered by outsourced transport services.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
Raw collection or process basis: per fuel inventory

- Normalization basis: per declared reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_movement_records`
- Range: Provisional apiary energy fossil CO2 screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg CO2/kg live bee output
  - Basis: broad first-pass fossil CO2 from apiary energy and movement fuel
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Health Treatment and Hive Maintenance (`health_treatment_and_hive_maintenance`)

#### Inputs

##### Product flows

###### Formic acid treatment formulation (`veterinary_and_pest_control_treatments_formic_acid`)

Activate only where the actual route and site records establish this identity. This is not a mandatory input, default recipe, treatment or dosage recommendation. Record formulation and concentration for supplier products without double counting formulation mass and active ingredient. Other actual identities require separate cards; missing records are not zero.

Bee medicines, varroa or pest treatments, disinfectants, sanitation chemicals, and other health inputs are recorded when applied or material to certification.

- Selected flow: Formic acid treatment formulation
- Flow property / unit: Mass / kg formulation
- Amount rule: Collect only the actual quantity of this identity, retaining supplier composition, state, unit and use records; apply the original process attribution and reference-flow basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per treated colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_and_health_records`
- Sources: `fao-good-beekeeping-2019`, `woah-varroosis-code`; `codex-organic-beekeeping`

###### Oxalic acid treatment formulation (`veterinary_and_pest_control_treatments_oxalic_acid`)

Activate only where the actual route and site records establish this identity. This is not a mandatory input, default recipe, treatment or dosage recommendation. Record formulation and concentration for supplier products without double counting formulation mass and active ingredient. Other actual identities require separate cards; missing records are not zero.

Bee medicines, varroa or pest treatments, disinfectants, sanitation chemicals, and other health inputs are recorded when applied or material to certification.

- Selected flow: Oxalic acid treatment formulation
- Flow property / unit: Mass / kg formulation
- Amount rule: Collect only the actual quantity of this identity, retaining supplier composition, state, unit and use records; apply the original process attribution and reference-flow basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per treated colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_and_health_records`
- Sources: `fao-good-beekeeping-2019`, `woah-varroosis-code`; `codex-organic-beekeeping`

###### Sawn wood for hive components (`hive_repair_and_maintenance_materials_wood`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Replacement frames, comb foundation, cages, screens, fasteners, paint, cleaning materials, and other short-life materials are recorded when used.

- Selected flow: Sawn wood for hive components
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per maintained colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

###### Beeswax foundation (`hive_repair_and_maintenance_materials_wax`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Replacement frames, comb foundation, cages, screens, fasteners, paint, cleaning materials, and other short-life materials are recorded when used.

- Selected flow: Beeswax foundation
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per maintained colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

###### Steel wire (`hive_repair_and_maintenance_materials_steel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Replacement frames, comb foundation, cages, screens, fasteners, paint, cleaning materials, and other short-life materials are recorded when used.

- Selected flow: Steel wire
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per maintained colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

##### Waste flows

No waste input is normally required for health treatment and hive maintenance.

##### Elementary flows

Include direct emissions from treatment application only when the declared method, product label, or site record supports an emission flow.

#### Outputs

##### Product flows

###### Healthy live bee unit for dispatch (`healthy_live_bee_unit_for_dispatch`)

Healthy live bee unit for dispatch is the treated or inspected live-bee product output.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion after inspection or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: health treatment process output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_inspection_and_certification_records`
- Range: Healthy live-bee output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg health treatment process output
  - Basis: treated or inspected live-bee process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Discarded beeswax comb (`treatment_residues_and_condemned_bee_material_wax_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Treatment packaging, contaminated comb, condemned bees, diseased colonies, and rejected hive materials are recorded with mass and fate.

- Selected flow: Discarded beeswax comb
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per treated colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_residue_and_waste_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`

###### Discarded wooden hive components (`treatment_residues_and_condemned_bee_material_wood_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Treatment packaging, contaminated comb, condemned bees, diseased colonies, and rejected hive materials are recorded with mass and fate.

- Selected flow: Discarded wooden hive components
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per treated colony, batch, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_residue_and_waste_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`

##### Elementary flows

Declare product-specific direct emissions only when a treatment method, measurement record, or reviewed emission factor supports the flow.

### Process: Live Bee Packing and Dispatch (`live_bee_packing_and_dispatch`)

#### Inputs

##### Product flows

###### Live bee unit entering pack-out (`live_bee_unit_entering_pack_out`)

Live bees entering pack-out are recorded when caging, package assembly, queen shipment, holding, loading, or delivery is inside the declared gate.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or count-to-mass conversion entering pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: pack-out input

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_packing_dispatch_records`
- Range: Pack-out live-bee input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg/kg dispatched live bee output
  - Basis: live-bee mass entering pack-out relative to dispatched output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polypropylene queen cage (`live_bee_packaging_and_holding_materials_cage`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Cages, package boxes, screens, cans, queen cages, labels, feed for transit, absorbents, and other dispatch materials are recorded by item count and mass where available.

- Selected flow: Polypropylene queen cage
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per package, queen shipment, colony shipment, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

###### Sawn wood for hive components (`live_bee_packaging_and_holding_materials_wood`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Cages, package boxes, screens, cans, queen cages, labels, feed for transit, absorbents, and other dispatch materials are recorded by item count and mass where available.

- Selected flow: Sawn wood for hive components
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per package, queen shipment, colony shipment, or kg live-bee output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Sources: `fao-bee-hive-materials`

###### Electricity at equipment supply (`dispatch_energy_and_transport_service_electricity`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Electricity, ventilation, cooling, fuel, and route-specific transport service are recorded when included in the declared gate.

- Selected flow: Electricity at equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw collection or process basis: per dispatched kg live bee mass

- Normalization basis: per declared reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_energy_and_transport_records`

###### Diesel fuel (`dispatch_energy_and_transport_service_diesel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Electricity, ventilation, cooling, fuel, and route-specific transport service are recorded when included in the declared gate.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw collection or process basis: per dispatched kg live bee mass

- Normalization basis: per declared reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_energy_and_transport_records`

###### Road freight service (`dispatch_energy_and_transport_service_road_freight`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Electricity, ventilation, cooling, fuel, and route-specific transport service are recorded when included in the declared gate.

- Selected flow: Road freight service
- Flow property / unit: Transport / t km
- Amount rule: measured fuel, electricity, carrier invoice, route distance, or tonne-km
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw collection or process basis: per dispatched kg live bee mass

- Normalization basis: per declared reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_energy_and_transport_records`

Only actual outsourced road transport applies. Retain live mass, distance, vehicle type, loading and service boundary. Do not count this service together with its fuel, electricity or direct emissions for the same carrier leg.

##### Waste flows

No waste input is normally required.

##### Elementary flows

Include direct combustion emissions from dispatch only when fuel is combusted inside the foreground system.

#### Outputs

##### Product flows

###### Declared transferred live bees (`declared_transferred_live_bees`)

The kg reference is net live mass at handoff, excluding packaging, cages and ancillary materials; retain measured live-mass conversion for corresponding animal or colony counts.

Declared transferred live bees are the reference product output at the declared gate.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: PCR reference output

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_packing_dispatch_records`
- Range: Live-bee reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg PCR reference output
  - Basis: live-bee reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Dead bee biomass (`dispatch_mortalities_and_returned_packaging_dead_bees`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Dead bees during holding or dispatch, failed shipments, returned cages, feed cans, and packaging waste are recorded with mass and fate.

- Selected flow: Dead bee biomass
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per dispatched kg live bee mass

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_mortality_and_packaging_waste_records`

###### Discarded wooden hive components (`dispatch_mortalities_and_returned_packaging_wood_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Dead bees during holding or dispatch, failed shipments, returned cages, feed cans, and packaging waste are recorded with mass and fate.

- Selected flow: Discarded wooden hive components
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per dispatched kg live bee mass

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_mortality_and_packaging_waste_records`

##### Elementary flows

###### Fossil carbon dioxide from dispatch energy (`fossil_carbon_dioxide_from_dispatch_energy`)

Fossil carbon dioxide from dispatch energy is calculated from fuel and energy records.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate this CO2 exchange only from actual fossil fuel used in directly operated foreground equipment and a compatible combustion factor; exclude purchased-electricity generation and emissions already covered by outsourced transport services.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw collection or process basis: per dispatch energy inventory

- Normalization basis: per declared reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_energy_and_transport_records`
- Range: Provisional dispatch fossil CO2 screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg CO2/kg dispatched live bee mass
  - Basis: broad first-pass fossil CO2 from dispatch energy and route fuel
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

No allocation is required when the only product output is transferred live bees and dead bees or packaging residues are treated as wastes with declared treatment. If honey, wax, propolis, royal jelly, venom, pollination service, queen breeding service, hive products, or another co-product is credited inside the foreground boundary, allocation must be declared before publication.

Preferred hierarchy:

1. Subdivide processes when records separate live-bee production from honey extraction, wax rendering, pollination service, or other co-product routes.
2. Use physical allocation only when a causal physical relationship is documented, such as mass for hive product streams or colony-use time for pollination service.
3. Use economic allocation when physical allocation is not defensible and market values are available.
4. Report system expansion or substitution only as an additional scenario, with substituted product, geography, and avoided-burden dataset disclosed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_live_bee_stock_entry_records | live_bee_stock_entry | parent colony or purchased live bee stock | purchase, split, queen, package, nucleus, brood-frame, or receiving record | source; species; unit type; queen status; life stage; caste mix; colony strength; bee count or mass; health status; acquisition date; upstream burden treatment | receiving record, breeder certificate, health certificate, scale record, colony inspection, or count-to-mass conversion; original activity aggregation: convert unit records to live bee mass and reconcile accepted, rejected, dead, or escaped bees | kg live bee mass, colony, nucleus, package, queen, frame, or head | per stock entry or batch | production cycle | apiary, breeder, or stock-entry lot | per declared reference flow | scale record, receiving record, health certificate, inspection record |
| cp_live_bee_colony_management_records | colony_management_and_feeding | managed live bee stock | colony inspection, split, queen rearing, package production, or apiary management record | colony id; unit type; queen status; brood stage; adult bee estimate; frame or seam count; date; management action | apiary log, inspection record, production batch record, or breeder log; original activity aggregation: reconcile live-bee stock entries, splits, losses, and outputs by unit type and mass conversion | colony, frame, seam, head, or kg live bee mass | inspection, batch, week, month, or production cycle | production cycle | apiary, breeder yard, queen yard, or package production unit | per declared reference flow | apiary log, inspection sheet, breeder record |
| cp_feed_and_water_records | colony_management_and_feeding | supplemental feed and water | feed issue, syrup preparation, water, or feeding record | feed type; sugar concentration; dry matter or as-fed basis; product mass; water quantity; treated colonies; date | feed log, invoice, syrup mixing sheet, meter, or tank record; original activity aggregation: convert to kg sugar or dry matter where needed and allocate by colony, batch, or live-bee output | kg, L, m3, kg dry matter, kg sugar | per feeding event, batch, or reporting period | production cycle | apiary, feed room, or production batch | per declared reference flow | invoice, feed log, mixing sheet, meter record |
| cp_energy_and_movement_records | colony_management_and_feeding | apiary energy and movement fuel | electricity, fuel, equipment, or movement record | carrier; quantity; route; operation; colonies served; period; allocation method | utility bill, fuel invoice, route log, equipment log, or telematics; original activity aggregation: convert to MJ or kWh and allocate to live-bee production using documented basis | kWh, MJ, L, kg fuel, km, or tonne-km | operation, route, month, or cycle | production cycle | apiary, route, holding room, or production site | per declared reference flow | invoice, meter record, fuel log, route record |
| cp_treatment_and_health_records | health_treatment_and_hive_maintenance | veterinary and pest-control treatments | treatment, pest monitoring, medicine, or certification record | product; active ingredient; dose; treated colony count; date; target pest or disease; certification relevance | treatment log, veterinary record, product label, laboratory result, health certificate, or inspection record; original activity aggregation: sum active ingredient or product amount and normalize to treated units and live-bee output | kg, L, dose, strip, item, or product-specific unit | per treatment or inspection event | production cycle | apiary, colony, queen yard, or package lot | per declared reference flow | treatment log, product label, inspection result, health certificate |
| cp_hive_material_and_packaging_records | live_bee_stock_entry; health_treatment_and_hive_maintenance; live_bee_packing_and_dispatch | hive consumables and packaging | material purchase, cage, frame, comb, package, or dispatch material record | material type; mass; item count; capacity; reuse status; batch or shipment | inventory issue record, packing log, invoice, or unit mass specification; original activity aggregation: sum material mass and item count; allocate reusable materials by declared reuse or depreciation rule only when in scope | kg or item | per batch, shipment, replacement, or reporting period | production cycle or dispatch period | apiary, shop, packing room, or shipment | per declared reference flow | invoice, packing log, inventory record |
| cp_health_inspection_and_certification_records | health_treatment_and_hive_maintenance | healthy live bee unit for dispatch | inspection, certification, or release record | species; unit type; queen status; colony strength; disease or pest status; treatment status; release date | apiary inspection, veterinary certificate, lab result, or dispatch approval; original activity aggregation: identify accepted live-bee units and convert to reference mass | kg live bee mass, colony, package, queen, or frame | per inspection, lot, or shipment | dispatch cycle | apiary, breeder, or dispatch lot | per declared reference flow | certificate, inspection record, laboratory result |
| cp_treatment_residue_and_waste_records | health_treatment_and_hive_maintenance | treatment residues and condemned bee material | residue, contaminated comb, condemned colony, or disposal record | waste type; mass; treatment product; colony or batch; fate | scale record, disposal ticket, treatment log, or inspection record; original activity aggregation: sum residue and condemned material mass by fate | kg | per event or reporting period | production cycle | apiary, treatment area, or waste route | per declared reference flow | disposal ticket, treatment log, inspection record |
| cp_live_bee_packing_dispatch_records | live_bee_packing_and_dispatch | declared transferred live bees | package, queen cage, colony, nucleus, brood frame, or shipment record | unit type; unit count; bee count or mass; queen status; shipment id; gate; date; receiver; health status | packing log, scale record, shipping document, certificate, or count-to-mass conversion; original activity aggregation: convert package or colony records to kg live bee mass and reconcile dispatched output | kg live bee mass, package, colony, queen, frame, or head | per shipment or batch | dispatch period | packing room, apiary, holding room, or route | per declared reference flow | packing log, scale record, dispatch note, health certificate |
| cp_dispatch_energy_and_transport_records | live_bee_packing_and_dispatch | dispatch energy and transport | holding, ventilation, cooling, carrier, fuel, or route record | route; distance; vehicle; energy; fuel; carrier invoice; shipment mass; holding duration | carrier invoice, route log, fuel log, utility meter, or dispatch record; original activity aggregation: normalize route-specific energy to dispatched kg live bee mass | kWh, MJ, L fuel, km, tonne-km | per shipment or dispatch period | dispatch period | holding room, loading area, route, or declared gate | per declared reference flow | carrier invoice, route record, fuel or energy record |
| cp_mortality_escape_and_reject_records | live_bee_stock_entry; colony_management_and_feeding | mortality, rejected bees, and swarm loss | dead bee, failed queen, rejected stock, swarm, escape, or non-marketable colony record | unit id; event date; unit type; estimated mass or count; cause where available; fate | apiary log, inspection record, disposal record, or count-to-mass estimate; original activity aggregation: convert event records to mass, sum by fate, and normalize to live-bee output | kg live bee mass, head, colony, queen, or package | per event or reporting period | production cycle | apiary, breeder yard, holding room, or shipment | per declared reference flow | apiary log, inspection record, disposal record |
| cp_dispatch_mortality_and_packaging_waste_records | live_bee_packing_and_dispatch | dispatch mortalities and returned packaging | shipment loss, returned package, cage, feed can, or waste record | shipment id; dead bee count or mass; returned material; waste mass; fate | receiving claim, return record, scale ticket, or waste contractor record; original activity aggregation: sum dispatch mortality and package waste by fate | kg or item | per shipment or return | dispatch period | route, receiver, packing room, or waste route | per declared reference flow | claim record, return log, disposal ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_live_bee_mass_output | reference product | kg transferred live bee mass / PCR reference amount | cp_live_bee_packing_dispatch_records | kg live bees per reference output | `mass-balance-identity` |
| convert_count_to_live_bee_mass | colony, package, queen, brood-frame, or bee-count records | convert count-based units to kg live bee mass using documented mass, unit conversion, or colony-strength basis | cp_live_bee_stock_entry_records; cp_live_bee_colony_management_records; cp_live_bee_packing_dispatch_records | kg live bee mass by unit type | `fao-good-beekeeping-2019` |
| normalize_supplemental_feed | supplemental feed | convert syrup, candy, dry sugar, pollen substitute, and protein feed to declared sugar, dry matter, or as-fed basis and allocate by colony, batch, or live-bee output | cp_feed_and_water_records | kg feed per reference output | `fao-good-beekeeping-2019` |
| calculate_apiary_energy_co2 | apiary energy fossil CO2 | Calculate fossil fuel combustion CO2 only for directly operated foreground equipment, then normalize to accepted output; purchased electricity and outsourced transport emissions belong to their linked upstream datasets and must not be duplicated | cp_energy_and_movement_records | kg fossil CO2 per reference output |  |
| calculate_dispatch_energy_co2 | dispatch energy fossil CO2 | Calculate fossil fuel combustion CO2 only for directly operated foreground equipment, then normalize to accepted output; purchased electricity and outsourced transport emissions belong to their linked upstream datasets and must not be duplicated | cp_dispatch_energy_and_transport_records | kg fossil CO2 per reference output |  |
| allocate_colony_coproducts | co-products | subdivide or allocate burdens when honey, wax, pollination service, queen breeding service, or other co-products are credited inside the foreground boundary | cp_live_bee_colony_management_records; co-product records | allocation factors or subdivision rule | `fao-leap-guidelines` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_live_bee_identity | live bee identity | Species, unit type, life stage, caste mix, queen status, colony strength or bee-count basis, health status, geography, and declared gate must be stated for the reference flow and major live-bee lots. | inspection record, breeder certificate, health certificate, dispatch record |
| dq_mass_conversion | count and colony records | Count, colony, package, queen, and frame records must include measured mass or a documented conversion to kg live bee mass. | scale record, unit conversion note, colony-strength record |
| dq_feed_basis | supplemental feed | Feed records must preserve feed type, concentration, dry matter or sugar basis, treated colony count, and time period. | invoice, feed log, syrup mixing sheet |
| dq_health_status | disease and pest status | Health, pest monitoring, treatment, inspection, certification, and rejection status must be documented when live bees are transferred. | treatment log, inspection result, laboratory result, health certificate |
| dq_temporal_coverage | production cycle | Foreground records should cover the declared colony, package, queen, or dispatch production cycle; annualized apiary records must disclose allocation method. | apiary log, stock entry record, dispatch record |
| dq_completeness | material flows | Live-bee stock, feed, water where used, treatments, short-life hive or packaging materials, energy and movement, mortality, rejects, and dispatch waste must be addressed or explicitly excluded with rationale. | collection protocol checklist and data quality review |

## 9. Validation Rules

Before publishing a foreground data package using this PCR, check:

- reference flow is expressed as kg live bees and includes species, unit type, queen status, colony strength or bee-count basis, health status, geography, and declared gate
- live-bee product is not confused with honey, wax, pollination service, beekeeping service, or equipment
- starting-condition treatment for parent colonies, purchased queens, packages, nucleus colonies, brood frames, and same-category live-bee inputs is declared
- count-to-mass conversion and colony-strength basis are documented
- supplemental feed, water where used, treatments, hive consumables, packaging, energy, and movement or dispatch transport are addressed
- disease, pest, treatment, inspection, certification, rejected stock, mortality, and swarm or escape losses have declared records and fates
- co-product handling is declared when honey, wax, pollination service, queen breeding service, or other outputs are credited
- values outside provisional screening ranges include source notes, corrected data, or method rationale

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream live-bee supply chain, apiary input, queen or package production, colony replacement, pollination-service model input, or managed-bee inventory modelling where live-bee qualifiers, geography, production route, and declared gate match the dataset metadata |
| excluded_use | honey, wax, propolis, royal jelly, venom, pollination service, beekeeping service, equipment manufacture, and downstream crop pollination unless separately modelled |
| required_metadata | reference flow; geography; production cycle; species; unit type; life stage; caste mix; queen status; colony strength or bee-count basis; live-bee mass conversion; health status; treatment status; declared gate; transport inclusion; collection protocol coverage; DQR |
| required_quality_disclosure | record coverage, allocation choices, starting-condition treatment, count-to-mass conversion, calculation rules, measurement devices or primary records, unresolved omissions, and data quality scores |
| update_trigger | material change in species, unit type, production route, geography, feed basis, treatment regime, disease or certification status, packaging route, declared gate, transport inclusion, collection protocol coverage, or data quality score |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-beekeeping-2019` | official_guidance | <https://openknowledge.fao.org/handle/20.500.14283/ca4271en> | good beekeeping practice, bee health, management records, disease control, and production boundary context |
| `woah-bee-diseases` | official_guidance | <https://www.woah.org/en/disease/diseases-of-bees/> | listed bee diseases, health status, inspection, and certification context |
| `woah-varroosis-code` | official_guidance | <https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_varroa_spp.htm> | live bee, queen, larva, pupa, and brood-comb health recommendations for varroosis context |
| `oregon-honeybee-colony-evaluation` | extension_guidance | <https://extension.oregonstate.edu/catalog/pnw-623-evaluating-honey-bee-colonies-pollination> | colony-strength and managed honey bee colony evaluation context |
| `fao-leap-guidelines` | official_guidance | <https://www.fao.org/partnerships/leap/resources/publications/fao-leap-guidelines/en> | livestock and animal supply-chain LCA boundary, data quality, and allocation context |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for live-bee output, stock reconciliation, and process reference outputs. | QA guardrails for reference outputs and live-bee mass-balance checks |
| `fao-bee-hive-materials` | official_guidance | FAO Beekeeping and sustainable livelihoods; hive and wax material identity context, https://www.fao.org/4/y5110e/y5110e0e.htm | Conditional identity context; verify actual site use, quantities and applicability separately |
| `codex-organic-beekeeping` | official_guidance | Codex organically produced foods, beekeeping provisions; conditional treatment identities, no dose or prescription, https://www.fao.org/docrep/pdf/010/a1385e/a1385e00.pdf | Conditional identity context; verify actual site use, quantities and applicability separately |
