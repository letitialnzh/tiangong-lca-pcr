---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.artichokes
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Artichokes

## 1. Scope and Applicability

This PCR covers commercial production of fresh, unprocessed artichoke flower buds from field or protected-cultivation establishment through stand management, irrigation, nutrient and crop-protection applications, harvest, grading, optional washing or cooling, primary packing, and hand-off at the declared farm gate or pack-house gate. It covers annual seeded or transplanted crops and perennial crown or division plantings when the production route and crop-cycle attribution are declared. Artichoke seed, crowns, and nursery production, mature opened flowers, canned, frozen, dried, marinated, or cooked artichokes, retail, consumer storage, and consumption are excluded. Packing, washing, cooling, and purchased transport are included only when they occur before the declared gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.artichokes |
| classification_refs | CPC 3.0:01216 Artichokes |
| covered_products | Fresh, unprocessed artichoke flower buds delivered at the declared farm-gate or pack-house gate |
| excluded_products | Artichoke seed and planting material, opened flowers, canned, frozen, dried, marinated, cooked, or otherwise processed artichokes, and downstream retail or consumption |
| representative_product | Marketable fresh artichoke buds meeting the declared size, maturity, firmness, trimming, cleanliness, and grade requirements |
| production_route | Seeded, transplanted, crown, or division establishment; managed vegetative growth; irrigation, nutrient, weed, and pest management; bud harvest; grading; optional washing, cooling, and primary packing |
| market_state | Fresh, unprocessed artichoke buds in loose, bunched, crate, carton, or other declared primary-packaging state at the farm or pack-house gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh artichoke buds at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh and unprocessed, with declared species or cultivar group, bud maturity, size or grade, stem length, cleanliness, trimming, wash and cooling state, and packaging state |
| How long or cycle | One declared annual crop cycle or one declared production year of a perennial stand, including all harvest flushes attributed to that cycle |
| reference_flow_link | `artichokes_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Artichokes, production mix, at farm gate `5e964a73-63a6-458b-a013-9785e776c3b6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; annual or perennial route; cultivar or variety group; seed, transplant, crown, or division establishment; planting or regrowth date; harvest dates and flushes; declared gate; bud size, maturity, firmness, and grade; stem and trimming state; irrigation source and method; nutrient basis; crop-protection program; washing and cooling state; packaging state; residue and reject fate |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_artichoke_mass` | marketable buds and harvest records | Mass | kg | Keep gross bud harvest, marketable fresh buds, unmarketable buds, trimming, soil or foreign material, and field residue as separate measured or calculated quantities. |
| `crop_cycle_normalization` | field, protected-cultivation, and perennial-stand records | Area and mass | ha and kg | Record inputs and harvests by field, bed, protected unit, or perennial stand and normalize them to the marketable output attributed to the same declared crop cycle or production year. |
| `nutrient_product_basis` | fertilizer, manure, compost, and other nutrient inputs | Mass of product and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | Preserve purchased product mass and convert to nutrient basis only from the documented label, supplier specification, nutrient plan, or laboratory result. |
| `water_volume_basis` | irrigation and post-harvest washing water | Volume | m3 | Record delivered crop irrigation and post-harvest washing water separately using meter records or a documented water balance. |
| `perennial_stand_attribution` | perennial artichoke stands | Area-time and mass | ha*a and kg | Attribute cutback, dormancy, regrowth, and harvest inputs to the declared production year; disclose stand age and treatment of establishment burdens. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared production bed or protected-cultivation unit receiving artichoke seed, transplant, crown, or division material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared annual crop cycle or perennial production-year accounting |
| product_classification_scope | Fresh artichokes under CPC 3.0:01216 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased artichoke seed, transplants, crowns, or divisions are upstream product inputs linked once; their own production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for planting material, fertilizers and amendments, crop-protection products, irrigation water, energy, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare geography, annual or perennial route, stand age, establishment material, crop dates or production year, irrigation source and method, nutrient basis, crop-protection program, harvest flushes, yield and reject reconciliation, washing and cooling, packaging, residue fate, and gate location. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and stand management | Include bed preparation, establishment or perennial regrowth, crop management, crop-cycle inputs, and harvest preparation that produce the declared fresh artichoke output; disclose prior land use and exclude unrelated infrastructure construction. | `ucanr-artichoke-production-1997`; `ucanr-artichoke-cultural-tips-2026` |
| `boundary_gate_conditioning` | harvest and primary conditioning | End the foreground system at the declared farm-gate or pack-house gate and include cutting, grading, trimming, washing, cooling, and primary packing when they occur before that gate. | `ucanr-artichoke-cultural-tips-2026` |
| `boundary_soil_nitrogen` | fertilizer, crop residues, and managed soil | Estimate applicable direct and indirect nitrogen emissions using one declared method and the recorded nutrient inputs and residue fate; avoid double counting a nitrogen pathway. | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | field residue, rejects, and trim | Record field return, composting, feed use, treatment, or disposal separately; a material with no demonstrated productive use remains a residue or waste flow. | `ucanr-artichoke-weed-management-2005`; `ucanr-artichoke-cultural-tips-2026` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Artichoke crop establishment | required | every represented sowing, transplanting, crown planting, or division establishment | foreground crop establishment | established field, bed, protected unit, or perennial stand |
| `crop_management` | Artichoke stand management | required | each represented annual crop cycle or perennial production year | foreground managed biological production | managed area and crop-cycle or production-year harvest |
| `harvest_and_gate_preparation` | Artichoke harvest and gate preparation | required | each represented harvest campaign and declared gate | foreground harvest, conditioning, packing, and gate hand-off | 1,000 kg marketable fresh artichokes |

### Process: Artichoke crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Flow: Artichoke seed, crown, division, or transplant material (`planting_material_input`)

Record the planting material that enters the declared field or protected unit, identifying whether it is seed, transplant, crown, or division material.

- Selected flow: Artichoke seed, crown, division, or transplant material
- Flow property / unit: Number of viable units or mass / seed, plant, crown, division, or kg
- Amount rule: Record purchased lot quantity and the viable quantity planted in each field, bed, protected unit, or perennial stand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`
- Range: Planting-material quantity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,500
  - Upper: 3,000
  - Unit: viable plants, crowns, or divisions/ha
  - Basis: broad annual or perennial establishment screen pending site records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`; `shinohara-artichoke-irrigation-nitrogen-2011`
- Range: Establishment organic-amendment screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 15000
  - Unit: kg product/ha
  - Basis: compost or manure incorporated before planting; replace with field records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-artichoke-cultural-tips-2026`

- Range: Establishment nitrogen screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 80
  - Unit: kg N/ha
  - Basis: preplant or planting application to a fresh-artichoke crop
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-artichoke-cultural-tips-2026`

- Range: Soil-test-dependent phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 125
  - Unit: kg P2O5/ha
  - Basis: establishment application pending soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Establishment irrigation water (`establishment_irrigation_water`)

Record water delivered for bed preparation, crown or transplant establishment, and early stand establishment separately from later crop irrigation.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or water-balance estimate for establishment irrigation by field, bed, protected unit, or stand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ucanr-artichoke-production-1997`
- Range: Establishment irrigation screen
  - Range role: Typical range (`typical_range`)
  - Lower: 200
  - Upper: 600
  - Unit: m3/ha
  - Basis: delivered irrigation during establishment before full canopy development
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-artichoke-production-1997`

###### Flow: Mobile machinery fuel for establishment (`establishment_machinery_fuel`)

Record fuel used for bed preparation, planting, transplanting, crown placement, or other establishment operations when field machinery crosses the foreground boundary.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use a fuel log or equipment activity estimate allocated to the represented field or stand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes attributed to the same crop cycle or production year
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ucanr-artichoke-production-1997`
- Range: Establishment fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 600
  - Unit: MJ/ha
  - Basis: bed preparation and planting operations
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Discarded planting material (`discarded_planting_material`)

Record planting material discarded at establishment when it is not planted and has a distinct fate.

- Selected flow: Discarded artichoke planting material
- Flow property / unit: Mass or number / kg or viable units
- Amount rule: Weigh or count discarded material and record its destination separately from planted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Range: Establishment discard screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: percent of purchased planting material
  - Basis: documented lot loss, damage, and planting reconciliation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flow: Occupation of artichoke production area (`establishment_land_occupation`)

Record the field or protected area and represented duration used for establishment and the declared crop cycle or perennial production year.

- Selected flow: Occupation, agricultural land
- Flow property / unit: Area-time / m2*a
- Amount rule: Declared productive area multiplied by the represented crop-cycle or production-year duration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_records`
- Sources: `ucanr-artichoke-production-1997`
- Range: Production-area screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: ha per 1,000 kg marketable output
  - Basis: broad site-yield screen pending field and harvest records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Established artichoke stand (`established_artichoke_stand`)

Record the established annual crop or perennial stand state handed from establishment to management; do not count it as marketable artichoke output.

- Selected flow: Established artichoke crop or perennial stand
- Flow property / unit: Area or number / ha or viable plants
- Amount rule: Record the established area or stand count that remains in production after establishment losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes attributed to the same crop cycle or production year
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Range: Established-stand screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 85
  - Upper: 100
  - Unit: percent of planted area
  - Basis: retained stand after establishment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Artichoke stand management (`crop_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`; `shinohara-artichoke-irrigation-nitrogen-2011`
- Range: Crop-cycle nitrogen screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 180
  - Unit: kg N/ha
  - Basis: in-season and total crop nitrogen application screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `shinohara-artichoke-irrigation-nitrogen-2011`

- Range: In-season phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 125
  - Unit: kg P2O5/ha
  - Basis: soil-test-dependent in-season amendment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle potassium screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 450
  - Unit: kg K2O/ha
  - Basis: crop nutrient application screen pending soil-test and farm records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `shinohara-artichoke-irrigation-nitrogen-2011`

###### Flow: Irrigation water during stand management (`crop_irrigation_water`)

Record irrigation events during vegetative growth, bud development, perennial regrowth, and any declared active production period.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance irrigation deliveries by field, bed, protected unit, or stand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ucanr-artichoke-production-1997`; `shinohara-artichoke-irrigation-nitrogen-2011`
- Range: Crop-cycle irrigation screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1860
  - Upper: 2480
  - Unit: m3/ha/year
  - Basis: annual artichoke production irrigation in the cited California production context; adjust for local rainfall and route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ucanr-artichoke-production-1997`

###### Flow: Crop-protection product (`crop_protection_input`)

Record herbicide, insecticide, fungicide, or other crop-protection product by product, active ingredient, application date, target, and treated area.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg product or kg active ingredient
- Amount rule: Supplier invoice, treatment log, and application rate by field or stand; keep product and active-ingredient amounts distinct.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `ucanr-artichoke-weed-management-2005`
- Range: Crop-protection quantity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg product/ha
  - Basis: broad product-use screen pending application records and local label requirements
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Mobile machinery fuel during stand management (`crop_machinery_fuel`)

Record fuel for cultivation, weed control, cutback, ditch maintenance, fertigation support, and other field operations allocated to the declared cycle or production year.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel log or equipment activity estimate allocated by area, operating hours, or field record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ucanr-artichoke-weed-management-2005`
- Range: Stand-management fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 200
  - Upper: 1000
  - Unit: MJ/ha
  - Basis: cultivation, weed control, cutback, and other field operations
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Electricity for irrigation and stand management (`crop_electricity_input`)

Record electricity for pumping, fertigation, protected cultivation, or other in-scope stand-management equipment when it crosses the foreground boundary.

- Selected flow: Electricity, medium voltage or applicable supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use a meter record or allocate electricity by pumping hours, flow, area, or throughput with the allocation basis disclosed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ucanr-artichoke-production-1997`
- Range: Stand-management electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/ha
  - Basis: pumping and protected-cultivation equipment pending meter records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Flow: Occupation of managed artichoke production area (`management_land_occupation`)

Record the area-time of the actively managed crop or perennial stand; do not count the same area twice if establishment and management are represented as one continuous land-use record.

- Selected flow: Occupation, agricultural land
- Flow property / unit: Area-time / m2*a
- Amount rule: Calculate managed area multiplied by the represented active production duration and reconcile it with establishment land occupation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_records`
- Sources: `ucanr-artichoke-production-1997`

#### Outputs

##### Product flows

###### Flow: Harvest-ready artichoke flower buds (`harvest_ready_buds`)

Record the mature but uncut buds handed from managed production to harvest, including harvest flush or date and the maturity or grade state used for the gate product.

- Selected flow: Harvest-ready artichoke flower buds
- Flow property / unit: Mass / kg wet buds
- Amount rule: Record or calculate harvest-ready bud mass by field, flush, and harvest date before separating marketable output and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `ucanr-artichoke-cultural-tips-2026`

##### Waste flows

###### Flow: Artichoke crop residue from cutback or senescence (`field_crop_residue`)

Record cutback, senesced leaves, stems, and other field residue and identify whether it is returned to soil, composted, removed, or disposed.

- Selected flow: Artichoke crop residue
- Flow property / unit: Mass / kg wet residue
- Amount rule: Reconcile pre-harvest biomass, cutback or senescence records, harvested bud mass, and residue destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `ucanr-artichoke-weed-management-2005`; `ucanr-artichoke-cultural-tips-2026`

###### Flow: Unmarketable artichoke heads and field loss (`unmarketable_heads`)

Record buds rejected for maturity, damage, size, disease, frost, or other field causes and document their destination separately from crop residue.

- Selected flow: Unmarketable artichoke heads and field loss
- Flow property / unit: Mass / kg wet material
- Amount rule: Weigh or calculate rejected heads and field loss by harvest flush, then reconcile them with gross harvest and marketable buds.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `ucanr-artichoke-cultural-tips-2026`
- Range: Field reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: percent of gross harvested bud mass
  - Basis: quality and harvest-loss reconciliation pending lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flow: Direct nitrous oxide from managed soil (`direct_n2o_air_output`)

Estimate direct soil nitrous oxide from eligible nitrogen inputs and the declared soil, climate, and method parameters.

- Selected flow: Nitrous oxide, emissions to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the selected IPCC-compatible factor to eligible nitrogen inputs and document the factor and climate or soil method in the dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-nitrogen`
- Range: Direct nitrous-oxide QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O/ha
  - Basis: method-dependent managed-soil screening range; replace with declared factor calculation
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Nitrate to freshwater from field losses (`nitrate_freshwater_output`)

Calculate nitrate loss from eligible nitrogen surplus using the declared site or method factor; do not infer nitrate loss from fertilizer purchase alone.

- Selected flow: Nitrate, emissions to freshwater
- Flow property / unit: Mass / kg NO3-
- Amount rule: Calculate from eligible nitrogen surplus and the selected site or method factor, with the nitrogen pathway and receiving compartment documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Flow: Ammonia from managed nutrient inputs (`ammonia_air_output`)

Estimate ammonia emissions only for nutrient and soil pathways covered by the selected method and recorded application conditions.

- Selected flow: Ammonia, emissions to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the declared method factor to eligible fertilizer or amendment inputs and disclose the application and incorporation conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-refinement-nitrogen`

### Process: Artichoke harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Flow: Harvest-ready artichoke flower buds for conditioning (`conditioning_bud_input`)

Record the harvest-ready buds received for cutting, grading, trimming, washing, cooling, or primary packing before the declared gate.

- Selected flow: Harvest-ready artichoke flower buds
- Flow property / unit: Mass / kg wet buds
- Amount rule: Reconcile received bud mass to field harvest tickets and the conditioning batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`

###### Flow: Water for washing or conditioning (`conditioning_water_input`)

Record water used for washing, misting, or other primary conditioning only when it occurs before the declared gate.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Use a meter, batch record, or documented allocation from the conditioning line and keep it separate from field irrigation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`
- Range: Conditioning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 3
  - Unit: m3 per 1,000 kg gate output
  - Basis: optional washing or conditioning before the declared gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Electricity for cooling and primary packing (`conditioning_electricity_input`)

Record electricity for cooling, washing pumps, grading, and primary packing when the equipment is inside the declared foreground boundary.

- Selected flow: Electricity, medium voltage or applicable supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Allocate meter electricity to the represented conditioning batch by throughput, run time, or equipment record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_energy_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`
- Range: Conditioning electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 25
  - Unit: kWh per 1,000 kg gate output
  - Basis: optional cooling, pumping, grading, and primary-packing energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Reusable crate or pallet packaging (`primary_packaging_input`)

Record crates, pallets, cartons, or other primary packaging only when they are part of the declared gate state, retaining material, unit mass, reuse, and loss information.

- Selected flow: Pallet and crate packaging
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Count packaging units, multiply by documented unit mass, and account for reuse cycles or packaging losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`
- Range: Primary-packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg packaging material per 1,000 kg gate output
  - Basis: declared packaging format and reuse practice
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Trimming and conditioning rejects (`conditioning_rejects`)

Record trimmed, damaged, diseased, overmature, or otherwise rejected material removed during grading and conditioning, with its destination.

- Selected flow: Artichoke trimming and conditioning rejects
- Flow property / unit: Mass / kg wet material
- Amount rule: Weigh rejects by batch and reconcile them with received buds and marketable gate output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`
- Range: Conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: percent of received bud mass
  - Basis: grading, trimming, and quality-loss reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Wash water and conditioning wastewater (`conditioning_wastewater`)

Record wastewater or spent wash water that leaves the conditioning process as a distinct waste stream and document treatment, discharge, or reuse.

- Selected flow: Artichoke wash water and wastewater
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Record discharged or reused quantity from the batch water balance; do not count water retained in product as wastewater.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`

##### Elementary flows

#### Outputs

##### Product flows

###### Flow: Fresh artichokes at the declared gate (`fresh_artichokes_gate_output`)

Record the marketable fresh artichoke buds that meet the declared grade and product-state qualifiers at the farm or pack-house gate.

- Selected flow: Fresh artichokes at declared gate
- Flow property / unit: Mass / kg wet artichokes
- Amount rule: Use final scale and lot records; normalize all foreground inputs and losses to 1,000 kg of this gate output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable fresh artichokes at declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`

##### Waste flows

###### Flow: Final gate rejects and handling loss (`final_gate_rejects`)

Record material rejected after conditioning or at dispatch and keep its destination separate from field residue and conditioning rejects already recorded.

- Selected flow: Final artichoke rejects and handling loss
- Flow property / unit: Mass / kg wet material
- Amount rule: Reconcile received material, gate output, final rejects, and measured handling loss in the dispatch lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh artichokes at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `ucanr-artichoke-cultural-tips-2026`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | shared field, bed, protected unit, or perennial stand | Attribute crop-cycle or production-year inputs to artichokes using the recorded area, stand, dates, and marketable output; do not allocate to another crop or year without its own records. | `ucanr-artichoke-production-1997` |
| `allocation_perennial_stand` | perennial artichoke establishment, cutback, dormancy, and regrowth | Disclose stand age and assign establishment or shared stand burdens across the declared production years using a documented attribution rule; do not silently assign all stand establishment to one harvest year. | `ucanr-artichoke-cultural-tips-2026` |
| `allocation_residue_fate` | crop residue, field loss, rejects, and trim | Do not assign a co-product credit to residue or rejects unless a documented recipient, quantity, and intended use exists; otherwise retain the burden with artichoke production and report the fate. | `ucanr-artichoke-weed-management-2005` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material and establishment inputs | planting-material invoice, lot record, and establishment log | lot; material type; viable quantity; field or bed; date; product mass; nutrient amendment | retain supplier record and field establishment record | seed, plant, crown, division, kg product, kg nutrient | each establishment campaign and application | full represented crop cycle or production year | each field, bed, protected unit, or perennial stand | sum by campaign and normalize to marketable output | supplier lot trace, application record, and stand reconciliation |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | crop irrigation | meter, pump, controller, or water-balance record | source; meter start and end; event date; area; method; rainfall adjustment | meter reading or documented water-balance calculation | m3 | each event or meter period | full represented crop cycle or production year | each field, bed, protected unit, or stand | sum delivered irrigation by cycle, year, and source | calibrated meter or documented balance inputs |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | mobile machinery fuel and field electricity | fuel invoice, equipment activity log, and electricity meter | fuel or electricity; equipment; operation; field; date; allocation basis | supplier record plus equipment or meter log | L, kg, MJ, or kWh | each refuelling, operation, or meter period | full represented crop cycle or production year | each artichoke production unit | allocate shared operations by area, hours, flow, or throughput | invoice, equipment log, meter record, and allocation calculation |
| `cp_nutrient_records` | `crop_establishment`; `crop_management` | nutrient inputs and nitrogen basis | nutrient plan, supplier invoice, and application log | product; nutrient concentration; date; area; quantity; method; soil test | reconcile product records with field application records | kg product and kg nutrient | each application | full represented crop cycle or production year | each artichoke production unit | sum nutrient mass by cycle or year and declared nutrient basis | soil test, label or supplier specification, and application log |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | treatment log and supplier record | product; active ingredient; rate; area; date; target; equipment | record each application and product lot | kg product or kg active ingredient | each application | full represented crop cycle or production year | each artichoke production unit | sum by product, active ingredient, and cycle or year | application log and product label |
| `cp_field_records` | `crop_establishment`; `crop_management` | land occupation, area, and stand attribution | field, bed, protected-unit, or perennial-stand register | area; unit; land use; crop dates; stand age; bed identifier; protection structure | verify area, dates, and stand age against production register | ha, m2, days, and years | each crop cycle or production year | full represented cycle or year | each artichoke field, bed, protected unit, or stand | calculate area-time and allocate shared stand burdens with the declared rule | field map, register, dates, and stand evidence |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | harvest, field residue, and field loss | harvest ticket, scale record, and residue or loss record | field; flush; date; gross mass; marketable mass; residue; loss; destination | weigh each harvest or use documented lot reconciliation | kg wet material | each harvest flush or lot | full represented harvest campaign | each artichoke field, bed, or stand | reconcile gross harvest, marketable buds, rejects, residue, and losses | scale record, lot ticket, and destination record |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | washing, wastewater, rejects, and packaging | conditioning batch and utility records | received mass; wash water; discharge; trim; packaging; batch; date; fate | batch record plus meter and packaging allocation | kg, m3, kWh, and packaging units | each batch or meter period | full represented harvest campaign | each preparation line or pack-house | aggregate by batch and normalize to marketable gate output | meter record, batch sheet, and waste or treatment receipt |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | cooling, grading, washing, and packing electricity | electricity meter and equipment throughput record | meter period; line; kWh; throughput; cooling duration; batch | meter allocation by throughput or run time | kWh | each meter period or batch | full represented harvest campaign | each in-scope preparation line | allocate shared electricity by throughput and reconcile to batch output | meter data and allocation calculation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary packaging | packaging specification, bill of materials, and count record | material; unit mass; units; reuse status; batch; output mass | packaging count and specification reconciliation | kg material and units | each packaging lot or batch | full represented harvest campaign | each preparation line | sum packaging material per gate output and disclose reuse | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable output and final rejects | dispatch scale, lot record, and reject record | lot; date; gate; packed mass; grade; reject; destination; gate state | final scale and lot reconciliation | kg wet artichokes | each dispatch lot | full represented harvest campaign | declared gate | sum marketable output and final reject streams; normalize to 1,000 kg | calibrated scale or lot record and grade record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | fertilizer, manure, compost, and amendment rows | Product mass multiplied by the documented nutrient fraction; retain original product mass and nutrient basis. | product invoice; nutrient concentration; application record | kg N, kg P2O5, or kg K2O by cycle or year | `ucanr-artichoke-cultural-tips-2026` |
| `calc_crop_cycle_normalization` | all crop-cycle and production-year inputs | Crop-cycle or production-year quantity divided by marketable fresh artichoke mass and multiplied by 1,000 kg. | input record; marketable gate output | normalized quantity per 1,000 kg output |  |
| `calc_perennial_attribution` | perennial stand establishment, cutback, and regrowth | Apply the documented stand-age or production-year attribution rule to shared stand inputs, then reconcile each year to its marketable output. | stand register; dates; input records; annual output | production-year quantity | `ucanr-artichoke-cultural-tips-2026` |
| `calc_area_time` | land occupation | Production area multiplied by represented crop-cycle or production-year duration; disclose protected area treatment. | area register; crop or production dates | area-time quantity | `ucanr-artichoke-production-1997` |
| `calc_nitrogen_emission` | direct soil nitrous oxide and ammonia | Apply the selected IPCC-compatible factor to eligible nutrient inputs and declared soil or climate method; document factors in the dataset. | nutrient records; method choice; soil or climate parameters | kg N2O or kg NH3 emitted | `ipcc-2019-refinement-nitrogen` |
| `calc_nitrate_loss` | nitrate to freshwater | Calculate from eligible nitrogen surplus and selected site or method factor; do not infer loss from purchase alone. | nutrient records; surplus calculation; factor | kg NO3- emitted | `ipcc-2019-refinement-nitrogen` |
| `calc_gate_mass_balance` | harvest and gate preparation | Received bud mass equals marketable gate output plus field or conditioning rejects, residue, wastewater-related solids, and documented handling loss within measurement uncertainty. | harvest tickets; conditioning records; dispatch and reject records | reconciled mass balance | `ucanr-artichoke-cultural-tips-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all flow and product records | Declare artichoke form, cultivar group, annual or perennial route, stand age where relevant, gate, bud maturity and grade, wash or cooling state, and packaging state; resolve platform identities during foreground dataset construction where required. | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | inputs and outputs | Prefer calibrated meters, scales, supplier invoices, nutrient plans, and application logs; document estimation and allocation methods where direct measurement is unavailable. | meter calibration, scale record, invoice, or calculation sheet |
| `quality_temporal` | crop-cycle or production-year inventory | Cover the full represented establishment, active management, cutback or dormancy where applicable, harvest campaign, and gate preparation period. | establishment dates, application log, irrigation records, harvest tickets, and dispatch records |
| `quality_completeness` | crop-cycle or production-year balance | Reconcile planting material, nutrients, irrigation, energy, crop protection, gross buds, marketable output, residue, rejects, wastewater, and packaging streams. | crop-cycle or production-year input and mass reconciliation |
| `quality_disclosure` | dataset metadata | Disclose annual or perennial route, stand age, irrigation source, nutrient basis, crop-protection products, harvest flushes, washing, cooling, packaging, and residue or reject destination. | dataset metadata and supporting records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow and gate output | The declared reference output must be marketable fresh artichoke buds at the declared gate and use mass in kg; opened flowers, frozen, canned, cooked, or retail products are outside this PCR. | `ucanr-artichoke-cultural-tips-2026` |
| `validate_crop_cycle_dates` | establishment, management, harvest, and gate preparation | Establishment, applications, irrigation, cutback or dormancy, harvest flushes, conditioning, and gate output must fall within the declared crop cycle or production year or be explicitly attributed to it. | `ucanr-artichoke-production-1997`; `ucanr-artichoke-cultural-tips-2026` |
| `validate_nutrient_basis` | nutrient inputs and emissions | Product mass, nutrient concentration, nutrient basis, and emission calculation method must be present and internally consistent; do not count product mass and nutrient mass as the same exchange. | `ucanr-artichoke-cultural-tips-2026`; `ipcc-2019-refinement-nitrogen` |
| `validate_mass_balance` | harvest and gate preparation | Gross harvest and received mass must reconcile with marketable output, rejects, residues, wastewater-related solids, and losses within the declared measurement uncertainty. | `ucanr-artichoke-cultural-tips-2026` |
| `validate_flow_set_resolution` | parameterized rows | During foreground data generation, each parameterized row must resolve to a verified UUID compatible with its specified Flow Set group, property, unit, and geography; otherwise retain an explicit coverage finding. |  |
| `validate_qualifiers` | reference flow and dataset metadata | Required qualifiers must be present, including annual or perennial route, stand age where relevant, bud maturity and grade, harvest flushes, gate, washing, cooling, packaging, and residue or reject fate. | `ucanr-artichoke-cultural-tips-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural production dataset for fresh artichokes at a farm-gate or pack-house gate |
| downstream_use | secondary_dataset for fresh-artichoke product systems; background_dataset only when the provider explicitly publishes a representative regional or market-average dataset with the required metadata |
| allowed_use | Comparative product studies, crop-cycle or production-year inventory modelling, farm or pack-house improvement, and declared fresh-artichoke supply-chain assessments within the stated geography and product state |
| excluded_use | Canned, frozen, dried, marinated, cooked, retail, consumption, seed-production, or unqualified vegetable substitution; do not extrapolate across annual and perennial routes without scenario disclosure |
| required_metadata | product form; cultivar group; annual or perennial route; stand age; geography; dates or production year; harvest flushes; gate; yield; irrigation source and quantity; nutrient basis; crop-protection program; washing and cooling; packaging; residue and reject fate |
| required_quality_disclosure | temporal coverage, site scope, measurement versus calculated values, stand attribution and allocation rules, mass-balance result, platform identity resolution status, and all provisional estimates requiring replacement by foreground records |
| update_trigger | change in crop route, stand age, irrigation method, nutrient program, crop-protection program, harvest form, wash or cooling line, packaging format, gate definition, or evidence that changes material quantities or boundary rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ucanr-artichoke-production-1997` | literature | University of California Agriculture and Natural Resources, *Artichoke Production in California*, ANR Publication 7221, https://my.ucanr.edu/repository/a/?a=54030 | production route, perennial and annual management, irrigation, and field boundary context |
| `ucanr-artichoke-cultural-tips-2026` | official_guidance | UC Statewide IPM Program, *Cultural Tips for Growing Artichoke*, https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-artichoke/ | establishment, nutrient practice, irrigation principles, harvest maturity, product qualifiers, and gate conditioning context |
| `ucanr-artichoke-weed-management-2005` | official_guidance | UC Statewide IPM Program, *Agriculture: Artichoke Pest Management Guidelines — Integrated Weed Management*, https://ipm.ucanr.edu/agriculture/artichoke/integrated-weed-management/ | annual and perennial stand management, weed control, cutback, residue, and crop-protection context |
| `shinohara-artichoke-irrigation-nitrogen-2011` | literature | Shinohara, Agehara, Yoo, and Leskovar, *Irrigation and Nitrogen Management of Artichoke: Yield, Head Quality, and Phenolic Content*, HortScience 46(3), 377–386, https://doi.org/10.21273/HORTSCI.46.3.377 | irrigation and nitrogen treatment ranges and yield-quality relationship |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | managed-soil nitrogen-emission method and calculation rules |
