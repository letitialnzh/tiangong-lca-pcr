---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plantains-and-cooking-bananas
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Plantains and cooking bananas

## 1. Scope and Applicability

This PCR covers fresh, unprocessed plantains and cooking bananas from the declared plantation, smallholder field, or ratoon-cycle starting condition through crop management, harvest, optional primary grading or washing, and hand-off at the declared farm-gate or pack-house gate. The semantic focus is plantain; cooking bananas are included when the cultivar or variety group and fresh product state are declared. The foreground system includes purchased inputs and services that cross the declared boundary, field residues and harvest rejects whose fate is determined before the gate, and optional primary packaging used before the gate.

It excludes planting-material production, dried, frozen, cooked, canned, flour, chips, puree, retail, consumer storage, consumption, downstream transport, unrelated land conversion, and infrastructure construction. A wash, trim, grade, bunch separation, or primary pack operation is allowed only as gate conditioning and does not change the product into a processed food. The data package shall state whether the product leaves as bunches, hands, loose fruit, or primary-packed fruit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plantains-and-cooking-bananas |
| classification_refs | CPC 3.0:01313 Plantains and cooking bananas |
| covered_products | Fresh, unprocessed plantains and cooking bananas delivered at the declared farm-gate or pack-house gate |
| excluded_products | Planting material; processed plantain or banana foods; dried, frozen, canned, cooked, or milled products; retail and consumer stages; downstream transport; unrelated land conversion and infrastructure |
| representative_product | Marketable fresh plantain fruit at the declared harvest maturity, grade, trimming state, and gate |
| production_route | Plantation establishment or ratoon-cycle renewal; managed vegetative growth and bunch development; irrigation, nutrient and crop-protection management; harvest; optional grading, washing, bunch separation, and primary packing; declared residue and reject routing |
| market_state | Fresh and unprocessed product in bunch, hand, loose-fruit, crate, carton, or other declared primary-packaging state at the farm or pack-house gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh plantains and cooking bananas at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh and unprocessed; declared plantain or cooking-banana cultivar or variety group, harvest maturity, size or grade, cleanliness, trimming or bunch state, washing state, packaging state, and reject or residue fate |
| How long or cycle | One declared production year or crop cycle, including all harvest flushes attributed to that cycle; establishment and shared plantation burdens shall be disclosed and allocated across the declared productive cycles |
| reference_flow_link | `plantains_cooking_bananas_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Plantains and cooking bananas `6f1b8d82-7d01-41ec-953a-c66fe7bf894f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; plantain or cooking-banana cultivar or variety group; plantation, smallholder, or multisite route; establishment or ratoon status; stand age or cycle number; planting or regrowth date; harvest dates and lot identifiers; declared gate; maturity, size, grade, and trimming state; irrigation source and method; nutrient and crop-protection basis; washing and cooling state; packaging state; field-residue, reject, and wastewater fate |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product, harvest lots, and gate output | Mass | kg | Reconcile total harvested fruit, marketable gate output, downgraded or rejected fruit, trim, field residue, and documented handling loss as separate quantities. |
| `cycle_normalization` | plantation, field, lot, and crop-cycle records | Area, time, and mass | ha, year, and kg | Record inputs and outputs by plantation unit, field, or production lot and normalize them to the marketable output attributed to the same declared production year or crop cycle. |
| `planting_material_basis` | suckers, corms, tissue-culture plants, and other establishment material | Count or mass | plant, sucker, corm, or kg | Preserve the material type and purchased-lot quantity; convert count to mass only when a documented supplier or site conversion is available. |
| `nutrient_product_basis` | fertilizer, manure, compost, mulch, and other soil amendments | Product mass and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | Record actual product mass and calculate nutrient mass only from the label, supplier specification, nutrient plan, or laboratory result. Do not infer a nutrient basis from a product name alone. |
| `water_energy_basis` | irrigation, washing, pumping, electricity, and fuel | Volume, energy, or fuel | m3, kWh, MJ, or L | Keep irrigation water, conditioning water, purchased electricity, and fuel as separate measured records and disclose every conversion or shared-equipment allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared plantation unit or field receiving plantain or cooking-banana planting material, or entering a declared ratoon cycle; prior land use and excluded infrastructure work are disclosed |
| starting_condition_role | Start of the declared establishment, annual production year, or ratoon crop-cycle accounting |
| product_classification_scope | Fresh plantains and cooking bananas under CPC 3.0:01313 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased planting material is an upstream product input linked once; its nursery, tissue-culture, sucker, or corm production is outside this PCR unless a separate upstream dataset is supplied. A product in the same CPC category used as an input is not recursively expanded without explicit upstream evidence. |
| upstream_dataset_requirement | Require upstream datasets for planting material, nutrient and soil-amendment products, crop-protection products, irrigation water, electricity, fuel, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare geography, production route, cultivar or variety group, establishment or ratoon status, stand age or cycle number, crop dates, irrigation source and method, nutrient and crop-protection program, harvest lots, declared gate, yield and reject reconciliation, washing and packaging, residue and wastewater fate, and shared-cycle allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_crop_cycle` | establishment, ratoon renewal, and managed crop cycle | Include the declared establishment or ratoon-cycle renewal, crop management, irrigation, nutrient and crop-protection applications, and crop-cycle inputs that produce the declared fresh output; disclose prior land use and exclude unrelated infrastructure construction. | `fao-plantain-postharvest-training-manual-1998`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_farm_gate_conditioning` | harvest, grading, washing, and primary packing | End the foreground system at the declared farm-gate or pack-house gate and include cutting, bunch handling, grading, optional washing, and primary packing only when they occur before that gate. | `fao-plantain-postharvest-compendium-2011`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_soil_residue_pathway` | nutrients, managed soil, residues, and rejects | Apply one declared method to eligible nutrient inputs, managed soil or residue pathways, and reject fate; do not double count a nitrogen pathway or claim a residue credit without documented destination and product function. | `ipcc-2019-refinement-afolu`; `fao-plantain-postharvest-training-manual-1998` |
| `boundary_recorded_biosecurity` | planting material and field operations | Record planting-material source and relevant crop hygiene or biosecurity controls when they affect the represented crop cycle; keep treatment records within the same declared site scope. | `globalgap-ifa-fruit-vegetables-v6` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `plantain_field_establishment` | Plantain or cooking-banana field establishment | required | each represented planting, replanting, or declared plantation-unit establishment | foreground plantation establishment | established area and attributed marketable output |
| `managed_plantain_crop_cycle` | Managed plantain or cooking-banana crop cycle | required | every represented production year or ratoon crop cycle | foreground managed biological production | managed area and crop-cycle harvest |
| `plantain_harvest_and_gate_handling` | Plantain harvest and farm-gate handling | required | each represented harvest campaign and declared gate | foreground harvest, optional conditioning, packing, and gate hand-off | 1,000 kg marketable fresh gate output |
| `plantain_residue_and_reject_routing` | Plantain residue and reject routing | conditional | on-site or included recovery, composting, feed use, disposal, or treatment occurs before the declared gate | foreground residue and reject fate | measured residue, rejected fruit, trim, and wastewater routed within the boundary |

### Process: Plantain or cooking-banana field establishment (`plantain_field_establishment`)

#### Inputs

##### Product flows

###### Plantain or cooking-banana planting material (`planting_material_input`)

Planting material crosses the field-establishment boundary as a purchased or internally transferred sucker, corm, tissue-culture plant, or other declared establishment material.

- Selected flow: Plantain or cooking-banana planting material
- Flow property / unit: Count or mass / plant, sucker, corm, or kg
- Amount rule: Record purchased lot quantity and viable quantity planted in each field or plantation unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-plantain-postharvest-training-manual-1998`; `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

##### Elementary flows

###### Plantation land occupation (`land_occupation`)

Record the area-time occupied by the represented plantation unit or field during establishment and the declared crop cycle.

- Selected flow: Land occupation by plantain or cooking-banana cultivation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply represented area by the declared occupation period and disclose prior land use; exclude unrelated transformation unless explicitly in scope.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plantation_register`
- Sources: `fao-plantain-postharvest-training-manual-1998`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Managed plantain or cooking-banana crop cycle (`managed_plantain_crop_cycle`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`managed_plantain_crop_cycle_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-afolu`; `globalgap-ifa-fruit-vegetables-v6`

###### Plantain crop-protection product (`crop_protection_input`)

Record each crop-protection product or active ingredient used for the represented cycle, including target, rate, application date, and method.

- Selected flow: Plantain or cooking-banana crop-protection product
- Flow property / unit: Mass of product or active ingredient / kg
- Amount rule: Sum supplier product quantity and, where available, calculate active-ingredient mass from the documented formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

###### Irrigation water supplied to the crop (`irrigation_water_input`)

Record water delivered to the represented field or plantation unit for crop irrigation.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Use meter, pump, controller, or documented water-balance records for water delivered to the crop; retain source and application method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

###### Field machinery fuel (`field_energy_input`)

Record fuel used by machinery and vehicles for field preparation, crop operations, pumping, and other managed crop-cycle activities inside the boundary.

- Selected flow: Field machinery fuel
- Flow property / unit: Fuel / L or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented crop cycle and disclose shared-equipment allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

##### Elementary flows

###### Irrigation water-resource withdrawal (`irrigation_withdrawal`)

Record the environmental water withdrawal associated with delivered irrigation when the source and withdrawal are inside the declared foreground boundary.

- Selected flow: Water-resource withdrawal for plantain irrigation
- Flow property / unit: Volume / m3
- Amount rule: Reconcile source-meter or permit records to water delivered to the crop and disclose return flow or consumption calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

#### Outputs

##### Product flows

##### Waste flows

###### Field residue from the crop cycle (`field_residue_output`)

Record pseudostems, leaves, bunch stems, rejected field fruit, and other crop residues leaving the managed crop process for field return, recovery, feed use, removal, or disposal.

- Selected flow: Plantain or cooking-banana field residue
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Measure or calculate residue by field or plantation unit and record the declared destination; do not infer productive use from field presence alone.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-plantain-postharvest-training-manual-1998`; `ipcc-2019-refinement-afolu`

##### Elementary flows

###### Direct nitrous oxide to air (`direct_n2o_emission`)

Calculate direct nitrous oxide emissions from eligible nutrient inputs and managed crop residues using the declared method and recorded nutrient or residue basis.

- Selected flow: Direct nitrous oxide emission to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one declared emissions method to documented nutrient inputs and residue fate without double counting.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-afolu`

###### Ammonia to air (`ammonia_emission`)

Calculate ammonia emissions from the documented nutrient product and application method when the selected method supports this pathway.

- Selected flow: Ammonia emission to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the declared nitrogen-emission method to the recorded nutrient form, application timing, and relevant site conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-afolu`

###### Nitrate to water (`water_nitrate_emission`)

Calculate nitrate loss to water only when the foreground package supplies a documented drainage, leaching, runoff, or site-specific emissions basis.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Apply the declared nitrogen-loss method to recorded nutrient input, receiving medium, and documented loss pathway; do not assign an unsupported default emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-afolu`

### Process: Plantain harvest and farm-gate handling (`plantain_harvest_and_gate_handling`)

#### Inputs

##### Product flows

###### Harvest and gate-handling fuel (`harvest_energy_input`)

Record fuel used by harvest equipment, internal transport, and gate handling when it crosses the declared foreground boundary before hand-off.

- Selected flow: Harvest and gate-handling fuel
- Flow property / unit: Fuel / L or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum receipts, tank records, or equipment records assigned to the harvest campaign and disclose shared-equipment allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_handling_records`
- Sources: `fao-plantain-postharvest-compendium-2011`; `globalgap-ifa-fruit-vegetables-v6`

###### Conditioning water (`conditioning_water_input`)

Record washing or other primary conditioning water only when it occurs before the declared gate.

- Selected flow: Primary conditioning water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum meter or batch records and disclose recirculation, treatment, and discharge handling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `fao-plantain-postharvest-compendium-2011`

###### Primary packaging (`primary_packaging_input`)

Record primary packaging used before the declared gate, including its material, mass or item count, reuse state, and losses.

- Selected flow: Primary packaging for fresh plantains or cooking bananas
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh plantain or cooking-banana gate output (`marketable_output`)

Record the product that crosses the declared gate as fresh and unprocessed marketable plantain or cooking banana.

- Selected flow: Fresh plantains and cooking bananas at the declared gate
- Flow property / unit: Mass / kg
- Amount rule: Weigh marketable output by lot at the gate and retain maturity, grade, trimming, packaging, and lot identifiers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference output of 1,000 kg marketable fresh gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources: `fao-plantain-postharvest-compendium-2011`

##### Waste flows

###### Harvest rejects and trim (`rejected_fruit_output`)

Record fruit downgraded, rejected, trimmed, damaged, or otherwise excluded from marketable gate output, together with its destination.

- Selected flow: Plantain or cooking-banana harvest rejects and trim
- Flow property / unit: Mass / kg wet material
- Amount rule: Weigh or calculate rejected and trimmed material by harvest lot and reconcile it to total harvested fruit and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-plantain-postharvest-compendium-2011`

###### Conditioning wastewater (`conditioning_wastewater_output`)

Record wastewater generated by optional washing or conditioning before the declared gate, including its treatment or discharge route.

- Selected flow: Wastewater from primary conditioning
- Flow property / unit: Volume / m3
- Amount rule: Record wastewater volume and treatment or discharge route; use a treatment-service input only when treatment occurs within the declared system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `fao-plantain-postharvest-compendium-2011`

##### Elementary flows

### Process: Plantain residue and reject routing (`plantain_residue_and_reject_routing`)

#### Inputs

##### Product flows

##### Waste flows

###### Crop residue and harvest-reject feedstock (`residue_reject_input`)

Record field residue and harvest rejects entering a separately modelled recovery, composting, feed-use, treatment, or disposal route before the declared gate.

- Selected flow: Plantain or cooking-banana residue and reject material
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Link to the originating field or harvest records and preserve wet or dry basis and destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-plantain-postharvest-training-manual-1998`; `ipcc-2019-refinement-afolu`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered organic material (`recovered_organic_material_output`)

Record recovered compost, mulch, feed material, or another product only when a documented destination and product function justify treating it as a product output.

- Selected flow: Recovered organic material from plantain residues or rejects
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Measure the recovered output and document destination, quality, intended use, and any allocation or substitution claim; otherwise retain the material as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `ipcc-2019-refinement-afolu`

##### Waste flows

###### Residue and reject disposal (`residue_disposal_output`)

Record residue or reject material sent to disposal, unmanaged decay, or another non-product destination within the declared boundary.

- Selected flow: Plantain residue and reject waste to disposal
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Reconcile disposed quantity to residue and reject inputs after documented recovery and other destinations.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `ipcc-2019-refinement-afolu`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_cycle_burden` | establishment, ratoon renewal, and shared plantation services | Allocate shared establishment and plantation burdens across the declared productive cycles using one declared physical basis, preferably attributed marketable output mass or area-time; disclose the basis and any excluded idle period. | `fao-plantain-postharvest-training-manual-1998`; `globalgap-ifa-fruit-vegetables-v6` |
| `allocation_mixed_cultivar_output` | fields or harvest campaigns producing plantain and cooking-banana outputs | Keep cultivar or variety groups and market states separate where records allow. If a shared operation cannot be separated, allocate it by recorded marketable output mass and report the mixed-output condition. | `fao-plantain-postharvest-compendium-2011` |
| `allocation_residue_recovery` | recovered organic material, feed use, compost, or mulch | Do not assign a co-product credit to field return, unmanaged decay, or undocumented use. A recovered product requires a measured output, documented destination and function, and a declared allocation or substitution rule. | `ipcc-2019-refinement-afolu` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plantation_register` | `plantain_field_establishment` | `land_occupation` | field and plantation register | field area; land-use history; planting or regrowth date; productive period | survey, farm register, and dated field records | ha, date, year | per field and cycle | full represented cycle | each represented field or plantation unit | area multiplied by declared occupation time and linked to output | field map, dated register, and site review |
| `cp_establishment_records` | `plantain_field_establishment` | `planting_material_input` | supplier invoice and planting log | material type; supplier; lot; quantity purchased; viable quantity planted; planting date | invoice review and field planting log | plant, sucker, corm, or kg | each lot and planting event | establishment or renewal period | each field or plantation unit | sum viable planted quantity and retain rejected quantity separately | invoice, lot record, and planting log |
| `cp_nutrient_records` | `managed_plantain_crop_cycle` | `nutrient_amendment_total_input` | nutrient plan, invoice, and application log | product description; mass; nutrient label or test; date; field; application method | document review and application records | kg product, kg N, kg P2O5, or kg K2O | each application | full represented cycle | each field or plantation unit | sum product mass and calculate nutrient basis from documented concentration | invoice, product label or laboratory result, and application log |
| `cp_crop_protection_records` | `managed_plantain_crop_cycle` | `crop_protection_input` | crop-protection register | product; active ingredient; dose; area; date; target; method | treatment log and supplier record review | kg product or kg active ingredient | each treatment | full represented cycle | each field or plantation unit | sum product and active-ingredient quantities by field and cycle | treatment log, product label, and applicator record |
| `cp_irrigation_records` | `managed_plantain_crop_cycle` | `irrigation_water_input; irrigation_withdrawal` | meter, pump, permit, or water-balance record | source; delivered volume; withdrawal volume; return flow; date; field; method | meter reading or documented water balance | m3 | each irrigation period | full represented cycle | each irrigation source and field | reconcile withdrawal, delivery, return, and crop allocation | meter calibration, permit, or water-balance worksheet |
| `cp_field_energy_records` | `managed_plantain_crop_cycle` | `field_energy_input` | fuel and equipment record | fuel type; quantity; equipment; operation; date; field; shared-use basis | invoice, tank, meter, or machine-hour record | L or MJ | each operation or month | full represented cycle | each field and shared equipment pool | sum direct use and allocate shared use by declared physical basis | invoices, tank log, and equipment register |
| `cp_harvest_handling_records` | `plantain_harvest_and_gate_handling` | `harvest_energy_input` | harvest and internal logistics record | fuel or electricity; equipment; harvest lot; date; quantity; shared-use basis | harvest log, meter, or invoice review | L, MJ, or kWh | each harvest campaign | all harvests in cycle | each harvest campaign and gate | sum campaign inputs and allocate shared handling to marketable output | lot register, invoice, and equipment record |
| `cp_conditioning_water_records` | `plantain_harvest_and_gate_handling` | `conditioning_water_input; conditioning_wastewater_output` | wash-batch and wastewater record | batch; input volume; recirculation; wastewater volume; treatment or discharge route; date | meter or batch log and treatment record | m3 | each batch or day | all pre-gate conditioning | each pack-house or conditioning point | sum fresh water and wastewater; document recirculation | meter, batch sheet, and treatment or discharge record |
| `cp_packaging_records` | `plantain_harvest_and_gate_handling` | `primary_packaging_input` | packaging stock and dispatch record | material; tare; item count; capacity; reuse cycles; loss; harvest lot | stock reconciliation and dispatch record | kg or item | each campaign or month | all pre-gate packing | each packing point | reconcile issued, used, returned, and lost packaging | purchase record, stock count, and lot record |
| `cp_harvest_output_records` | `plantain_harvest_and_gate_handling` | `marketable_output` | harvest, grading, and gate-weight record | lot; cultivar; maturity; grade; gross mass; marketable mass; gate date; gate state | weighbridge, scale, and lot record | kg | each lot | all harvests in cycle | each gate and harvest lot | sum marketable output and retain grade and state qualifiers | calibrated scale, lot register, and dispatch record |
| `cp_residue_and_reject_records` | `managed_plantain_crop_cycle; plantain_harvest_and_gate_handling; plantain_residue_and_reject_routing` | `field_residue_output; rejected_fruit_output; residue_reject_input; recovered_organic_material_output; residue_disposal_output` | residue and reject destination record | material; wet or dry basis; quantity; origin; destination; recovery; disposal; date | field estimate, scale, destination receipt, or treatment record | kg wet or dry material | each event or harvest lot | full represented cycle | each field, gate, and destination | reconcile all residue and reject destinations to recorded generated material | field log, scale, receipt, and destination declaration |
| `cp_emission_calculation_records` | `managed_plantain_crop_cycle` | `direct_n2o_emission; ammonia_emission; water_nitrate_emission` | calculation worksheet | nutrient basis; residue basis; method; site factors; receiving medium; result | documented calculation using one declared method | kg N2O, kg NH3, or kg nitrate | each cycle or method update | full represented cycle | each field or production unit | calculate each pathway once and link to the contributing records | input records, method version, and reviewer check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | all inventory rows | normalized amount = recorded amount × 1,000 kg / marketable fresh gate output (kg) | recorded amount; marketable gate output | amount per 1,000 kg reference output | `fao-plantain-postharvest-compendium-2011` |
| `calc_nutrient_basis` | `nutrient_amendment_total_input` | nutrient mass = documented product mass × documented nutrient fraction; retain product mass and nutrient basis as separate fields | product mass; label, supplier specification, nutrient plan, or laboratory result | kg product and kg nutrient basis | `ipcc-2019-refinement-afolu` |
| `calc_cycle_allocation` | shared establishment, machinery, irrigation, energy, and conditioning records | allocated amount = shared record × declared physical allocation fraction; use marketable output mass or area-time and disclose the choice | shared record; allocation basis; product or cycle output | crop-cycle amount | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_harvest_reconciliation` | `marketable_output; rejected_fruit_output; field_residue_output` | total recorded harvest = marketable output + rejected or trimmed fruit + field residue or other documented loss; investigate unexplained difference | lot weights; residue and reject records; loss record | reconciled harvest and loss balance | `fao-plantain-postharvest-compendium-2011` |
| `calc_water_reconciliation` | `irrigation_water_input; irrigation_withdrawal` | source withdrawal = delivered irrigation + documented return flow + documented distribution loss; use only measured or declared site-specific factors | source meter; delivery meter; return flow; loss factor | irrigation delivery and withdrawal | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_emission_pathway` | soil, nutrient, residue, and water-emission rows | apply one declared emissions method to the documented input and receiving-medium basis; do not combine overlapping default factors | nutrient and residue records; method; site factors | pathway-specific elementary flow amount | `ipcc-2019-refinement-afolu` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference flow and all inventory rows | State the plantain or cooking-banana cultivar or variety group, process role, gate, direction, flow type, and identity evidence gap status where no reviewed identity is available. | lot records, process notes, and review of identity evidence gap coverage |
| `quality_completeness` | all required and conditional processes | Include every required process and activate conditional conditioning, packaging, and residue-routing rows when the activity occurs before the declared gate. | process map, activity checklist, and site boundary review |
| `quality_temporal_geographic` | all collected records | Cover the complete declared crop cycle or production year and identify geography, field, plantation unit, harvest lot, and gate. | field register, dated records, and production-year declaration |
| `quality_measurement_traceability` | measured quantities | Retain source records, calibration or verification evidence, unit conversions, and allocation worksheets for mass, water, energy, nutrients, and packaging. | invoices, meters, scales, laboratory or label evidence, and worksheets |
| `quality_reconciliation` | output, residue, reject, water, and wastewater rows | Reconcile inputs and destinations and investigate material unexplained differences before publishing the foreground package. | reconciliation worksheets and reviewer sign-off |
| `quality_method_disclosure` | calculated emissions and recovered products | Disclose the selected method, version, input basis, receiving medium, product function, and any allocation or substitution claim. | calculation worksheet, method citation, destination record, and review note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow and dataset metadata | Reject a dataset that omits the declared product group, production geography, cycle or year, gate, maturity or grade, and product-state qualifiers required by this PCR. | `fao-plantain-postharvest-compendium-2011`; `globalgap-ifa-fruit-vegetables-v6` |
| `validation_identity_coverage` | all flow cards | Accept a parameterized Flow Set only when its group semantically covers the row. For every uncovered row, require a later verified identity or retain an explicit unmapped-coverage finding; do not substitute a nearby product identity. | `ipcc-2019-refinement-afolu` |
| `validation_process_completeness` | process map and conditional rows | Check all four process nodes, activate conditional rows when the activity occurs, and ensure every active flow card has a direction, flow type, amount rule, value mode, specificity, basis, evidence kind, collection protocol where applicable, and source or explicit evidence gap status. | `globalgap-ifa-fruit-vegetables-v6` |
| `validation_reconciliation` | output, residue, reject, irrigation, and conditioning records | Require harvest, reject, residue, water, and wastewater reconciliations and fail on unexplained material differences or double-counted emission pathways. | `fao-plantain-postharvest-compendium-2011`; `ipcc-2019-refinement-afolu` |
| `validation_boundary` | dataset scope and downstream use | Confirm that the dataset ends at the declared farm-gate or pack-house gate and contains no post-gate transport, retail, consumer, or processed-food activity unless separately declared in another dataset. | `fao-plantain-postharvest-training-manual-1998` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset for a reviewed foreground plantain or cooking-banana production dataset; background_dataset only when the documented gate and data quality are suitable for that use |
| downstream_use | Supply to product-system, process, and lifecycle-model construction for fresh unprocessed plantains or cooking bananas at the declared farm-gate or pack-house gate |
| allowed_use | Comparative or attributional modelling when geography, cultivar or variety group, crop cycle, gate, product state, inventory coverage, and identity evidence gap findings are disclosed |
| excluded_use | Processed-food, drying, freezing, cooking, retail, consumer, post-gate logistics, or site claims that exceed the declared boundary; substitution or residue credits without documented function and allocation |
| required_metadata | CPC 3.0:01313; product group; geography; farm or pack-house gate; crop year or cycle; field and plantation scope; cultivar or variety group; maturity and grade; production route; yield; nutrient, water, energy, crop-protection, residue, reject, conditioning, and packaging records; identity and method status |
| required_quality_disclosure | Temporal and geographic coverage, completeness, measurement traceability, allocation basis, calculation method, conditional-process activation, identity evidence gaps, and reconciliation results |
| update_trigger | New production route, cultivar or variety group, gate condition, nutrient or irrigation practice, residue or conditioning pathway, material identity, method version, or material quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-plantain-postharvest-compendium-2011` | official_guidance | FAO, *Post-harvest compendium: Plantain*, official PDF: https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Plantain.pdf | plantain harvest, product state, post-harvest handling, grading, and gate-conditioning scope |
| `fao-plantain-postharvest-training-manual-1998` | official_guidance | FAO, *Prevention of post-harvest food losses: fruits, vegetables and root crops*, plantain crop profile: https://www.fao.org/4/t0073e/T0073E07.htm | plantain production and harvest context, product exclusions, and residue or reject boundary decisions |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines*, Volume 4 AFOLU: https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil, nutrient, residue, and emission calculation method requirements |
| `globalgap-ifa-fruit-vegetables-v6` | extension_guidance | GLOBALG.A.P., *Integrated Farm Assurance for fruit and vegetables*, IFA v6: https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/ | farm records, traceability, input records, crop-cycle data quality, and fruit-and-vegetable gate controls |
