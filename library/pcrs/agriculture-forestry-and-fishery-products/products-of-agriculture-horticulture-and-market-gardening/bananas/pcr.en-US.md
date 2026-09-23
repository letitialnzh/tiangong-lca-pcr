---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bananas
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Bananas

## 1. Scope and Applicability

This PCR covers fresh, unprocessed banana production from plantation establishment or the beginning of a declared ratoon cycle through managed crop growth, irrigation, nutrient and crop-protection applications, harvest, grading, optional washing or cooling, primary packing, residue routing, and hand-off at the declared farm-gate or pack-house gate. It covers commercial banana plantations and smallholder or multisite production when the plantation unit, crop cycle, production year, and gate are declared. It includes field residues and harvest or conditioning rejects when their fate is within the foreground boundary before the declared gate. Banana seed, sucker, corm, or tissue-culture planting-material production; plantain or other Musa products unless separately declared; dried, frozen, cooked, canned, processed, retail, consumer-storage, and consumption stages; unrelated land conversion or infrastructure construction; and downstream transport after the declared gate are excluded. Purchased inputs and services are included when they cross the foreground boundary and are used for the represented crop cycle or production year.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bananas |
| classification_refs | CPC 3.0:01312 Bananas |
| covered_products | Fresh, unprocessed bananas delivered at the declared farm-gate or pack-house gate |
| excluded_products | Banana planting-material production, plantains unless separately declared, dried, frozen, cooked, canned, processed, retail, consumer-storage, and consumption products, and downstream logistics after the declared gate |
| representative_product | Marketable fresh banana fruit meeting the declared cultivar or variety group, maturity, size, grade, cleanliness, trimming, packaging, and gate-state requirements |
| production_route | Plantation establishment or ratoon-cycle renewal; managed vegetative growth and bunch development; irrigation, nutrient, weed, pest, and disease management; harvest; dehanding or grading; optional washing, cooling, and primary packing; declared residue and reject routing |
| market_state | Fresh, unprocessed banana fruit in bunch, hand, carton, crate, or other declared primary-packaging state at the farm or pack-house gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh bananas at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh and unprocessed, with declared cultivar or variety group, maturity at harvest, size or grade, cleanliness, trimming or dehanding state, wash and cooling state, packaging state, and reject or residue fate |
| How long or cycle | One declared banana plantation production year or crop cycle, including all harvest flushes attributed to that cycle; establishment and shared plantation burdens must be disclosed and allocated across the declared productive cycles |
| reference_flow_link | `bananas_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh bananas at the declared farm-gate or pack-house gate `7c496507-1583-4181-9a3a-2cf56d54b99c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; cultivar or variety group; plantation, smallholder, or multisite route; establishment or ratoon-cycle status; stand age or cycle number; planting or regrowth date; harvest dates and bunch or lot identifiers; declared gate; maturity, size, grade, and trimming state; irrigation source and method; nutrient and crop-protection basis; washing and cooling state; packaging state; field-residue, reject, and wastewater fate |
| Binding | fixed |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_banana_mass` | marketable bananas and harvest records | Mass | kg | Keep gross bunch or lot harvest, marketable fresh bananas, unmarketable fruit, trimming, field residue, and documented handling loss as separate measured or calculated quantities. |
| `plantation_cycle_normalization` | plantation, field, and crop-cycle records | Area, time, and mass | ha, year, and kg | Record inputs and harvests by plantation unit, field, or production lot and normalize them to the marketable output attributed to the same declared production year or crop cycle. |
| `planting_material_basis` | suckers, corms, tissue-culture plants, and other establishment material | Count or mass | plant, sucker, corm, or kg | Preserve the material type and purchased lot quantity; convert counts to mass only when a documented supplier or site conversion is available. |
| `nutrient_product_basis` | fertilizer, manure, compost, mulch, and soil-amendment inputs | Product mass and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | Preserve purchased product mass and convert to nutrient basis only from the documented label, supplier specification, nutrient plan, or laboratory result. |
| `water_energy_basis` | irrigation, washing, cooling, electricity, and fuel | Volume, energy, or fuel | m3, kWh, MJ, or L | Record irrigation and conditioning water separately; record purchased electricity and fuel in their measured units and disclose any conversion factor used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared plantation unit or field receiving banana planting material or entering a declared ratoon cycle, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared establishment, annual production year, or ratoon crop cycle accounting |
| product_classification_scope | Fresh bananas under CPC 3.0:01312 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased banana planting material is an upstream product input linked once; its own nursery, tissue-culture, sucker, or corm production is outside this PCR unless a separate upstream dataset is supplied. A banana product used as an input to another banana production unit is not recursively expanded without explicit upstream evidence. |
| upstream_dataset_requirement | Require upstream datasets for planting material, fertilizers and amendments, crop-protection products, irrigation water, electricity, fuel, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare geography, plantation or smallholder route, cultivar or variety group, establishment or ratoon status, stand age or cycle number, crop dates, irrigation source and method, nutrient and crop-protection program, harvest lots, declared gate, yield and reject reconciliation, washing and cooling, packaging, residue and wastewater fate, and any shared plantation allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_banana_cycle` | establishment, ratoon renewal, and managed crop cycle | Include plantation establishment or declared ratoon-cycle renewal, crop management, irrigation, nutrient and crop-protection applications, harvest preparation, and the crop-cycle inputs that produce the declared fresh banana output; disclose prior land use and exclude unrelated infrastructure construction. | `fao-banana-production-guide-2015`; `fao-banana-production-manual` |
| `boundary_gate_conditioning` | harvest, grading, and primary conditioning | End the foreground system at the declared farm-gate or pack-house gate and include cutting, bunch handling, dehanding, grading, optional washing, cooling, and primary packing when they occur before that gate. | `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_managed_soil_and_residue` | nutrients, managed soil, field residue, and reject fate | Estimate applicable direct and indirect soil or residue emissions using one declared method and the recorded nutrient inputs and residue fate; do not double count a nitrogen pathway or treat unsubstantiated residue use as a co-product credit. | `ipcc-2019-refinement-afolu`; `fao-banana-production-guide-2015` |
| `boundary_biosecurity_records` | planting material, field operations, and plantation hygiene | Record the source and status of planting material and relevant plantation hygiene or biosecurity controls when they affect the represented crop cycle; keep treatment records within the same declared site scope. | `globalgap-tr4-banana-biosecurity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `plantation_establishment` | Banana plantation establishment | required | each represented planting, replanting, or declared plantation-unit establishment | foreground plantation establishment | established plantation unit, field, or crop-cycle area |
| `managed_banana_crop_cycle` | Managed banana crop cycle | required | every represented annual production year or ratoon crop cycle | foreground managed biological production | managed area and crop-cycle or production-year harvest |
| `banana_harvest_and_conditioning` | Banana harvest and gate conditioning | required | each represented harvest campaign and declared gate | foreground harvest, conditioning, packing, and gate hand-off | 1,000 kg marketable fresh bananas |
| `banana_residue_and_reject_routing` | Banana residue and reject routing | conditional | on-site or included treatment, recovery, composting, feed use, disposal, or wastewater treatment occurs before the declared gate | foreground residue and reject fate | measured field residue, rejects, trim, and wastewater routed within the boundary |

### Process: Banana plantation establishment (`plantation_establishment`)

#### Inputs

##### Product flows

###### Flow: Banana planting material (`planting_material_input`)

Record the planting material entering the represented plantation unit, identifying whether it is a sucker, corm, tissue-culture plant, or another declared establishment material.

- Selected flow: Banana planting material
- Flow property / unit: Count or mass / plant, sucker, corm, or kg
- Amount rule: Record purchased lot quantity and the viable quantity planted in each field or plantation unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-banana-production-guide-2015`; `globalgap-tr4-banana-biosecurity`

##### Waste flows

##### Elementary flows

###### Flow: Plantation land occupation (`plantation_land_occupation`)

Record the area-time occupied by the represented banana plantation unit or field during establishment and the declared crop cycle or production year.

- Selected flow: Land occupation by banana plantation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply the represented plantation or field area by the declared occupation period; disclose prior land use and exclude unrelated land transformation unless explicitly in scope.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plantation_register`
- Sources: `fao-banana-production-guide-2015`

##### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Managed banana crop cycle (`managed_banana_crop_cycle`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`managed_banana_crop_cycle_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-banana-production-guide-2015`; `ipcc-2019-refinement-afolu`

###### Flow: Banana crop-protection product (`crop_protection_input`)

Record each crop-protection product or active ingredient used for the represented banana crop cycle, including the target and application method.

- Selected flow: Banana crop-protection product
- Flow property / unit: Mass of product or active ingredient / kg
- Amount rule: Sum supplier product quantity and, where available, calculate active-ingredient mass from the documented formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`; `globalgap-tr4-banana-biosecurity`

###### Flow: Irrigation water supplied to banana plantation (`irrigation_water_input`)

Record water delivered to the represented banana plantation or field for crop irrigation.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Use meter, pump, controller, or documented water-balance records for water delivered to the crop; keep source and method separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

###### Flow: Plantation energy or fuel input (`plantation_energy_input`)

Record electricity and fuel used for pumping, field machinery, crop operations, and other managed crop-cycle activities inside the declared boundary.

- Selected flow: Plantation electricity or fuel
- Flow property / unit: Energy or fuel / kWh, MJ, or L
- Amount rule: Record purchased electricity and fuel by equipment, operation, and plantation unit; disclose conversions and allocation for shared equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-banana-production-guide-2015`

##### Waste flows

##### Elementary flows

###### Flow: Irrigation water-resource withdrawal (`irrigation_withdrawal`)

Record the environmental water withdrawal associated with delivered crop irrigation when the source and withdrawal are within the declared foreground boundary.

- Selected flow: Water-resource withdrawal for banana irrigation
- Flow property / unit: Volume / m3
- Amount rule: Use the measured or calculated withdrawal associated with the irrigation-water input and disclose source, return flow, and method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-banana-production-guide-2015`

#### Outputs

##### Product flows

##### Waste flows

###### Flow: Banana field residue (`field_residue_output`)

Record pseudostem, leaves, rejected bunch material, and other crop residues leaving the managed crop process for field return, composting, feed use, removal, or disposal.

- Selected flow: Banana field residue
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Measure or calculate residue by field or plantation unit and record the declared destination; do not infer productive use from field presence alone.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-banana-production-guide-2015`; `ipcc-2019-refinement-afolu`

##### Elementary flows

###### Flow: Direct soil nitrous oxide emission (`direct_n2o_emission`)

Calculate direct nitrous oxide emissions from eligible nutrient inputs and managed crop residues using the declared method and recorded nutrient or residue basis.

- Selected flow: Direct nitrous oxide from managed banana soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared method factor to eligible nitrogen inputs and residue treatment; document whether the result is reported as N2O or N2O-N.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-afolu`

### Process: Banana harvest and gate conditioning (`banana_harvest_and_conditioning`)

#### Inputs

##### Product flows

###### Flow: Harvest and conditioning energy (`harvest_energy_input`)

Record electricity and fuel used for bunch handling, dehanding, grading, washing, cooling, and primary packing before the declared gate.

- Selected flow: Harvest and conditioning electricity or fuel
- Flow property / unit: Energy or fuel / kWh, MJ, or L
- Amount rule: Use meter, fuel, run-time, or throughput records and allocate shared utilities to banana batches by documented throughput or run time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_energy_records`
- Sources: `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

###### Flow: Conditioning or wash water (`conditioning_water_input`)

Record water used for optional washing, sanitation, or conditioning before the declared farm-gate or pack-house gate.

- Selected flow: Banana conditioning or wash water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Record delivered water by batch or meter period and distinguish crop irrigation from post-harvest conditioning water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `fao-banana-production-guide-2015`

###### Flow: Primary packaging for fresh bananas (`primary_packaging_input`)

Record the primary packaging that crosses the boundary before the declared gate, including reusable crates or pallets when the represented batch carries a documented share.

- Selected flow: Fresh-banana primary packaging
- Flow property / unit: Mass or count / kg material or packaging unit
- Amount rule: Use supplier specification and batch count; disclose material, unit mass, reuse status, and allocation to banana output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Flow: Marketable fresh bananas at the declared gate (`marketable_banana_output`)

Record the fresh banana lots that meet the declared maturity, size, grade, cleanliness, trimming, packaging, and gate-state qualifiers.

- Selected flow: Fresh bananas at the declared farm-gate or pack-house gate
- Flow property / unit: Mass / kg wet fresh bananas
- Amount rule: Use final scale and dispatch records; normalize all foreground inputs and losses to 1,000 kg of this gate output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

###### Flow: Banana harvest and conditioning rejects (`harvest_reject_output`)

Record unmarketable bunches, hands, fingers, trimming, and grading or conditioning rejects separately from field residue and document their destination.

- Selected flow: Banana harvest and conditioning rejects
- Flow property / unit: Mass / kg wet material
- Amount rule: Reconcile received harvest, marketable gate output, rejects, residue, wastewater-related solids, and documented handling loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `fao-banana-production-guide-2015`

###### Flow: Banana conditioning wastewater (`conditioning_wastewater_output`)

Record wash or conditioning wastewater leaving the included preparation operation and identify whether it is treated, reused, discharged, or transferred to another dataset.

- Selected flow: Banana conditioning wastewater
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Use meter or batch records and keep wastewater quantity separate from clean conditioning-water input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `fao-banana-production-guide-2015`

##### Elementary flows

### Process: Banana residue and reject routing (`banana_residue_and_reject_routing`)

#### Inputs

##### Product flows

##### Waste flows

###### Flow: Banana residue or reject stream routed within the boundary (`residue_reject_routing_input`)

Record field residue, harvest rejects, conditioning trim, or wastewater entering an on-site or included recovery, treatment, composting, feed-use, or disposal route before the declared gate.

- Selected flow: Banana residue, reject, or wastewater stream
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Use the measured quantity and declared destination from the corresponding field, harvest, or conditioning record; do not duplicate a stream routed outside the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

##### Elementary flows

#### Outputs

##### Product flows

###### Flow: Recovered organic material from banana residues or rejects (`recovered_organic_product_output`)

Record compost, mulch, feed material, or another recovered product only when a documented recipient, quantity, quality basis, and intended use exist.

- Selected flow: Recovered organic material from banana residues or rejects
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Record recovered output and quality basis; apply a co-product or recovered-material rule only when the recipient and intended use are documented.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-banana-production-guide-2015`; `iso-14044-2006`

##### Waste flows

###### Flow: Residual banana organic waste after routing (`residual_organic_waste_output`)

Record the fraction of residue or rejects that remains a waste flow after recovery, treatment, composting, feed use, or disposal.

- Selected flow: Residual banana organic waste
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Calculate as routed input less documented recovered product and other measured outputs; report the treatment or disposal destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-banana-production-guide-2015`

###### Flow: Treated banana conditioning wastewater (`treated_wastewater_output`)

Record wastewater leaving an included treatment route and distinguish it from untreated conditioning wastewater transferred to a downstream service.

- Selected flow: Treated banana conditioning wastewater
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Use treatment records or water balance and disclose whether the treated stream leaves to a downstream service, is reused, or is discharged within the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-banana-production-guide-2015`

##### Elementary flows

###### Flow: Emissions from included residue or wastewater treatment (`routing_treatment_emissions`)

Record or calculate emissions from an included treatment route only when the route, method, and measured or documented inputs support the emission pathway.

- Selected flow: Emissions from included banana residue or wastewater treatment
- Flow property / unit: Mass / kg substance
- Amount rule: Apply the declared treatment method and documented factor or measurement; do not infer treatment emissions when the route is transferred to a separate downstream dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `ipcc-2019-refinement-afolu`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_banana_cycle` | shared plantation, field, irrigation, machinery, and utility records | Attribute inputs and emissions to bananas using the recorded plantation unit, area, dates, crop cycle or production year, and marketable output; do not allocate to another crop or year without its own records. | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `allocation_plantation_establishment` | establishment, replanting, ratoon renewal, and shared plantation burdens | Disclose plantation age and cycle number, then assign establishment or shared plantation burdens across the declared productive cycles using a documented attribution rule; do not silently assign all establishment burdens to one harvest year. | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `allocation_residue_reject_fate` | field residue, harvest rejects, trim, recovered material, and wastewater | Do not assign a co-product credit to residue or rejects unless a documented recipient, quantity, quality basis, and intended use exist; otherwise retain the burden with banana production and report the fate. | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `allocation_shared_conditioning` | shared harvest, conditioning, packing, and utilities | Allocate shared conditioning inputs by measured banana throughput, run time, or another documented physical relationship; disclose the allocation basis and reconcile it to gate output. | `globalgap-ifa-fruit-vegetables-v6`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `plantation_establishment` | planting material and establishment inputs | planting-material invoice, lot record, and plantation establishment log | lot; material type; viable quantity; field or plantation unit; date; planting or regrowth status; product mass | retain supplier record and field establishment record | plant, sucker, corm, kg product, and kg nutrient | each establishment or replanting campaign | full represented crop cycle or production year | each field or plantation unit | sum by campaign and normalize to marketable output | supplier lot trace, planting record, and cycle reconciliation |
| `cp_plantation_register` | `plantation_establishment`; `managed_banana_crop_cycle` | area, crop dates, stand age, cycle number, and shared plantation attribution | field, plantation-unit, and crop-cycle register | area; unit; prior land use; planting or regrowth date; stand age; cycle number; crop dates; shared-use flag | verify register against field map and production records | ha, m2, days, years, and crop-cycle identifier | each crop cycle or production year | full represented crop cycle or production year | each banana field, plantation unit, or smallholder site | calculate area-time and assign shared burdens with the declared rule | field map, production register, dates, and stand evidence |
| `cp_irrigation_records` | `managed_banana_crop_cycle` | crop irrigation and water withdrawal | meter, pump, controller, or water-balance record | source; meter start and end; event date; area; method; rainfall adjustment; withdrawal and return flow | meter reading or documented water-balance calculation | m3 | each event or meter period | full represented crop cycle or production year | each banana field or plantation unit | sum delivered irrigation and withdrawal by cycle, year, and source | calibrated meter or documented balance inputs |
| `cp_field_energy_records` | `managed_banana_crop_cycle` | plantation fuel and electricity | fuel invoice, equipment activity log, and electricity meter | fuel or electricity; equipment; operation; field; date; allocation basis | supplier record plus equipment or meter log | L, MJ, or kWh | each refuelling, operation, or meter period | full represented crop cycle or production year | each banana field or plantation unit | allocate shared operations by area, hours, throughput, or declared physical basis | invoice, equipment log, meter record, and allocation calculation |
| `cp_nutrient_records` | `managed_banana_crop_cycle` | nutrient and soil-amendment inputs | nutrient plan, supplier invoice, and application log | product; material description; nutrient concentration; date; area; quantity; method; soil or tissue test | reconcile product records with field application records | kg product and kg nutrient | each application | full represented crop cycle or production year | each banana field or plantation unit | sum product and nutrient mass by cycle or year and declared basis | label or supplier specification, soil or tissue evidence, and application log |
| `cp_crop_protection_records` | `managed_banana_crop_cycle` | crop-protection products and biosecurity actions | treatment log, supplier record, and site hygiene register | product; active ingredient; rate; area; date; target; equipment; hygiene action; site | record each application and relevant hygiene or biosecurity action | kg product, kg active ingredient, and declared action count | each application or action | full represented crop cycle or production year | each banana field or plantation unit | sum by product, active ingredient, action, and cycle or year | application log, product label, and site record |
| `cp_residue_and_reject_records` | `managed_banana_crop_cycle`; `banana_harvest_and_conditioning`; `banana_residue_and_reject_routing` | field residue, rejects, trim, recovered material, and wastewater fate | residue, reject, treatment, recovery, and destination record | source stream; field or batch; date; wet or dry mass; volume; destination; recipient; quality basis | weigh or meter each stream and retain destination evidence | kg wet, kg dry, and m3 | each harvest lot, treatment batch, or routing event | full represented crop cycle or production year | each field, plantation unit, preparation line, or treatment route | reconcile each source stream to recovered product, residual waste, treatment, or downstream transfer | scale or meter record, recipient record, and treatment or disposal receipt |
| `cp_harvest_records` | `managed_banana_crop_cycle`; `banana_harvest_and_conditioning` | harvest and crop-cycle output | harvest ticket, bunch or lot register, and scale record | field; bunch or lot; date; gross mass; marketable mass; maturity; grade; reject; destination | weigh each harvest lot or use documented lot reconciliation | kg wet bananas | each harvest lot or campaign | full represented harvest campaign | each banana field or plantation unit | sum gross harvest, marketable output, rejects, and losses by cycle or year | calibrated scale, lot ticket, and grade record |
| `cp_postharvest_records` | `banana_harvest_and_conditioning` | washing, wastewater, rejects, and batch conditioning | conditioning batch and utility records | received mass; wash water; discharge; trim; packaging; batch; date; fate; gate state | batch record plus meter and packaging allocation | kg, m3, kWh, and packaging units | each batch or meter period | full represented harvest campaign | each preparation line or pack-house | aggregate by batch and normalize to marketable gate output | meter record, batch sheet, and waste or treatment receipt |
| `cp_postharvest_energy_records` | `banana_harvest_and_conditioning` | cooling, grading, washing, and packing electricity or fuel | electricity meter, fuel record, and throughput record | meter period; line; kWh or fuel; throughput; cooling duration; batch | meter or fuel allocation by throughput or run time | kWh, MJ, or L | each meter period or batch | full represented harvest campaign | each in-scope preparation line | allocate shared utility by throughput or run time and reconcile to batch output | meter data, fuel record, and allocation calculation |
| `cp_packaging_records` | `banana_harvest_and_conditioning` | primary packaging | packaging specification, bill of materials, and count record | material; unit mass; units; reuse status; batch; output mass | packaging count and specification reconciliation | kg material and packaging units | each packaging lot or batch | full represented harvest campaign | each preparation line or pack-house | sum packaging material per gate output and disclose reuse | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `banana_harvest_and_conditioning` | marketable output and final rejects | dispatch scale, lot record, and reject record | lot; date; gate; packed mass; maturity; grade; reject; destination; gate state | final scale and lot reconciliation | kg wet bananas | each dispatch lot | full represented harvest campaign | declared gate | sum marketable output and final reject streams; normalize to 1,000 kg | calibrated scale or lot record and grade record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | fertilizer, manure, compost, mulch, and amendment rows | Product mass multiplied by the documented nutrient fraction; retain original product mass and nutrient basis. | product invoice; nutrient concentration; application record | kg N, kg P2O5, or kg K2O by cycle or year | `fao-banana-production-guide-2015` |
| `calc_cycle_normalization` | all crop-cycle and production-year inputs | Crop-cycle or production-year quantity divided by marketable fresh banana mass and multiplied by 1,000 kg. | input record; marketable gate output | normalized quantity per 1,000 kg output |  |
| `calc_plantation_attribution` | plantation establishment, replanting, ratoon renewal, and shared plantation inputs | Apply the documented stand-age, cycle-number, or production-year attribution rule to shared plantation inputs, then reconcile each cycle or year to its marketable output. | plantation register; dates; input records; cycle output | crop-cycle or production-year quantity | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `calc_area_time` | plantation land occupation | Plantation or field area multiplied by the represented occupation period; disclose prior land use and any excluded land transformation. | plantation register; crop or production dates | area-time quantity | `fao-banana-production-guide-2015` |
| `calc_nitrogen_emission` | direct soil nitrous oxide and nutrient-loss rows | Apply the selected IPCC-compatible factor or site method to eligible nutrient inputs and declared residue fate; document factors and whether the result is reported as substance or element mass. | nutrient records; residue records; method choice; soil or climate parameters | kg substance emitted | `ipcc-2019-refinement-afolu` |
| `calc_gate_mass_balance` | harvest, conditioning, and gate preparation | Received harvest mass equals marketable gate output plus rejects, residue, wastewater-related solids, recovered product, and documented handling loss within measurement uncertainty. | harvest tickets; conditioning records; dispatch, routing, and reject records | reconciled mass balance | `fao-banana-production-guide-2015` |
| `calc_routing_balance` | residue and reject routing | Routed stream equals recovered product plus residual waste, treated wastewater, measured emissions basis, and any documented downstream transfer; do not credit an unverified destination. | routed input; recovery record; treatment record; downstream receipt | routing balance | `fao-banana-production-guide-2015`; `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all flow and product records | Declare banana form, cultivar or variety group, plantation or smallholder route, establishment or ratoon status, stand age or cycle number, gate, maturity, grade, wash or cooling state, packaging state, and residue or reject fate; resolve platform identities during foreground dataset construction where required. | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | inputs and outputs | Prefer calibrated meters, scales, supplier invoices, nutrient plans, application logs, and treatment receipts; document estimation and allocation methods where direct measurement is unavailable. | meter calibration, scale record, invoice, receipt, or calculation sheet |
| `quality_temporal` | crop-cycle or production-year inventory | Cover the full represented establishment or ratoon renewal, active management, harvest campaign, conditioning, routing, and gate hand-off period. | plantation register, application log, irrigation records, harvest tickets, batch sheets, and dispatch records |
| `quality_completeness` | crop-cycle or production-year balance | Reconcile planting material, nutrients, irrigation, energy, crop protection, gross harvest, marketable output, field residue, rejects, wastewater, packaging, and routing streams. | crop-cycle or production-year input and mass reconciliation |
| `quality_disclosure` | dataset metadata | Disclose annual or ratoon route, stand age or cycle number, irrigation source, nutrient basis, crop-protection products, harvest lots, washing, cooling, packaging, gate, and residue or reject destination. | dataset metadata and supporting records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow and gate output | The declared reference output must be marketable fresh, unprocessed bananas at the declared gate and use mass in kg; processed banana products, retail products, and unqualified Musa products are outside this PCR. | `fao-banana-production-guide-2015` |
| `validate_cycle_dates` | establishment, management, harvest, routing, and gate preparation | Establishment or ratoon renewal, applications, irrigation, harvest lots, conditioning, routing, and gate output must fall within the declared crop cycle or production year or be explicitly attributed to it. | `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6` |
| `validate_nutrient_basis` | nutrient inputs and emissions | Product mass, nutrient concentration, nutrient basis, residue treatment, and emission calculation method must be present and internally consistent; do not count product mass and nutrient mass as the same exchange. | `fao-banana-production-guide-2015`; `ipcc-2019-refinement-afolu` |
| `validate_mass_balance` | harvest, conditioning, and routing | Gross harvest and received mass must reconcile with marketable output, rejects, residue, wastewater-related solids, recovered product, downstream transfers, and losses within the declared measurement uncertainty. | `fao-banana-production-guide-2015` |
| `validate_flow_set_resolution` | parameterized rows | During foreground data generation, each parameterized row must resolve to a verified UUID compatible with its specified Flow Set group, property, unit, and geography; otherwise retain an explicit coverage finding. |  |
| `validate_qualifiers` | reference flow and dataset metadata | Required qualifiers must be present, including cultivar or variety group, establishment or ratoon status, stand age or cycle number, harvest lots, maturity and grade, gate, washing, cooling, packaging, and residue, reject, and wastewater fate. | `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural production dataset for fresh bananas at a farm-gate or pack-house gate |
| downstream_use | secondary_dataset for fresh-banana product systems; background_dataset only when the provider explicitly publishes a representative regional or market-average dataset with the required metadata |
| allowed_use | Comparative product studies, plantation or crop-cycle inventory modelling, farm improvement, and declared fresh-banana supply-chain assessments within the stated geography and product state |
| excluded_use | Planting-material production, plantain or other Musa substitution without disclosure, dried, frozen, cooked, canned, retail, consumption, or downstream logistics after the declared gate; do not extrapolate across plantation ages, ratoon cycles, or conditioning routes without scenario disclosure |
| required_metadata | product form; cultivar or variety group; plantation or smallholder route; establishment or ratoon status; stand age or cycle number; geography; dates or production year; harvest lots; declared gate; yield; irrigation source and quantity; nutrient basis; crop-protection program; washing and cooling; packaging; residue, reject, and wastewater fate |
| required_quality_disclosure | temporal coverage, site scope, measurement versus calculated values, plantation-cycle attribution and allocation rules, mass-balance and routing results, platform identity resolution status, and all provisional estimates requiring replacement by foreground records |
| update_trigger | change in cultivar or route, plantation age or cycle, irrigation method, nutrient program, crop-protection program, harvest form, wash or cooling line, packaging format, gate definition, residue or reject destination, or evidence that changes material quantities or boundary rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-banana-production-guide-2015` | official_guidance | FAO and partners, *Good Agricultural Practices and Biosecurity for Banana Production*, 2015, https://www.fao.org/fileadmin/templates/banana/documents/Docs_Resources/2015/TR4/cartilla_banano_definitiva_-_ENGLISH_final.pdf | banana plantation establishment, crop management, harvest, post-harvest facilities, biosecurity, residue context, and production records |
| `fao-banana-production-manual` | official_guidance | FAO, *Bananas*, Agriculture Services Bulletin, https://www.fao.org/4/T0308E/T0308E00.htm | banana plant and commercial plantation production context, crop-cycle operations, and farm boundary interpretation |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4 AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil nitrogen, crop-residue, and agricultural emission calculation methods |
| `globalgap-ifa-fruit-vegetables-v6` | official_guidance | GLOBALG.A.P., *Integrated Farm Assurance guideline for Fruit and Vegetables v6*, https://documents.globalgap.org/documents/230414_IFA_guideline_FV_v6_0_Apr23_en.pdf | production records, fertilizer and crop-protection records, traceability, harvest, and post-harvest quality evidence |
| `globalgap-tr4-banana-biosecurity` | official_guidance | GLOBALG.A.P., *TR4 Biosecurity Add-on for Bananas*, https://globalgap.org/what-we-offer/solutions/tr4-biosecurity-add-on/ | banana planting-material traceability, plantation hygiene, and biosecurity disclosure |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | allocation hierarchy, co-product handling, and documented attribution rules |

###### Flow: Nitrogen and nutrient loss to water or soil (`nutrient_loss_emission`)

Calculate nitrate, phosphate, or other documented nutrient loss only when the selected method and site records support the pathway.

- Selected flow: Nutrient loss from managed banana plantation
- Flow property / unit: Mass / kg nutrient or substance
- Amount rule: Use a declared surplus or loss-factor method based on nutrient records, soil or climate information, and documented water or soil pathway; do not estimate loss from purchase mass alone.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh bananas attributed to the same crop cycle or production year
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-afolu`
