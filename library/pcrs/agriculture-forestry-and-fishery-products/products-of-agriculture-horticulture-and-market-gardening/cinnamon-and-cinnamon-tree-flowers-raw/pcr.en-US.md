---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cinnamon-and-cinnamon-tree-flowers-raw
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cinnamon and cinnamon-tree flowers, raw

## 1. Scope and Applicability

This PCR covers farm-gate production of unground cinnamon bark products (peeled bark, quills, quillings, featherings or chips) and separately harvested cinnamon-tree flowers or immature flower buds sold as a raw spice. It includes nursery and establishment burdens, perennial stand management, coppice or selective stem cycles, route-specific harvest, scraping and peeling, primary shaping, conditional farm drying, and grading. Species, plant part, product form, drying state and moisture basis must be declared.

The bark and flower/bud routes share perennial cultivation but diverge at harvest. They may coexist on a farm, but one lot and one reporting-period burden cannot be credited to both outputs. Essential-oil distillation, grinding, extraction, manufactured spice formulation, retail packing and transport beyond the farm gate are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cinnamon-and-cinnamon-tree-flowers-raw |
| classification_refs | CPC 3.0 01655, mapping context only |
| covered_products | Whole raw cinnamon bark forms from declared *Cinnamomum* species; raw flowers or immature flower buds; farm-dried forms when drying is primary stabilization |
| excluded_products | Ground cinnamon, powder, essential oils, extracts, blended spices, leaves sold separately and consumer-packed products |
| representative_product | One declared lot of raw cinnamon bark/quills or cinnamon-tree flowers/buds at farm gate |
| production_route | Managed perennial stand followed by a bark harvest and peeling route or a flower/bud harvest route, with route-specific conditional drying and grading |
| market_state | Fresh or primary farm-dried, unground and otherwise unmanufactured; moisture and product form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Raw cinnamon bark product or raw cinnamon-tree flower/bud product delivered at farm gate |
| How much | 1 kg as received |
| How well | Conforming to declared species, plant part, form, grade or destination, moisture state and defect criteria; rejects excluded |
| How long or cycle | One harvest lot within a declared stand year and harvest or coppice cycle |
| reference_flow_link | Accepted graded output `accepted_cinnamon_product` from `farm_gate_grading` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | species or commercial type; plant part `bark` or `flower/bud`; bark form where applicable; fresh or farm-dried state; measured moisture fraction and basis; grade or destination; region; harvest year; stand age; coppice-cycle position; route id; gate `Production mix, at farm gate` |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net as-received mass at farm gate and measured moisture fraction. |
| `moisture_conversion` | Fresh, peeled and dried states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert only with lot-specific moisture: dry mass = wet mass × (1 − moisture mass fraction). |
| `area_time_basis` | Establishment and stand management | Mass and area-time records | kg, ha, year | Record field inputs by stand hectare and reporting year, then attribute them to measured route outputs. |
| `energy_consistency` | Fuel and electricity | Relevant energy property | MJ or kWh | Preserve carrier quantities and document conversion factors before aggregation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established or newly established managed *Cinnamomum* stand, including attributable nursery and establishment inputs |
| starting_condition_role | Beginning of foreground perennial crop production |
| product_classification_scope | Raw cinnamon bark products and raw cinnamon-tree flowers/buds sharing this category boundary |
| recursive_input_rule | Purchased raw cinnamon in this category is recorded once as an upstream product input with a conforming dataset and is not regenerated in this foreground system. |
| upstream_dataset_requirement | Product and service inputs require representative upstream datasets; actual nutrient products are resolved individually to verified UUIDs during data-package generation. |
| disclosure | Declare species, route, establishment year, stand age, planting density, coppice or selective-harvest regime, reporting years, moisture basis, intended co-products and exclusions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_stand` | Nursery, establishment and management | Include attributable nursery and establishment, soil preparation, replacement, maintenance, nutrient and water supply, crop protection, field energy and direct field emissions through harvest readiness. | `suriyagoda-2021-ceylon-cinnamon` |
| `boundary_bark_route` | Bark route | Include coppicing or stem cutting, leaf and branch separation, scraping, rubbing, peeling, quill formation where used, conditional primary drying and grading. | `sri-lanka-dcd-postharvest`; `eurlex-2020-ceylon-cinnamon` |
| `boundary_flower_route` | Flower/bud route | Include flower or immature-bud harvest, separation from bunches, cleaning, conditional primary drying and grading; never substitute bark-processing data. | `wilson-2016-cassia-buds`; `li-2018-cassia-buds`; `pnp-cassia-buds-route` |
| `boundary_conditional_drying` | Stabilization | Activate drying inputs and water removal only when a lot is dried before farm gate; otherwise record zero and declare the fresh hand-off. | `sri-lanka-dcd-postharvest`; `eurlex-2020-ceylon-cinnamon` |
| `boundary_exclusions` | Downstream manufacture | Exclude distillation, grinding, extraction, formulation, retail packing and post-farm transport. | `iso-6539-2014`; `eurlex-2020-ceylon-cinnamon` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `perennial_cinnamon_cultivation` | Perennial cinnamon establishment and stand management | required | All routes | Managed biological production parent with multi-year and reporting-period indexing by stand year and cycle | ha-year and measured route output |
| `bark_harvest_conditioning` | Bark harvest, peeling and primary conditioning | conditional | Plant part is bark | Alternative technology route delta from the harvest parent; includes primary conditioning and conditional preservation stabilization; one batch is one harvest lot | kg prepared bark |
| `flower_harvest_conditioning` | Flower or bud harvest and primary conditioning | conditional | Plant part is flower/bud | Alternative technology route delta from the harvest parent; includes primary conditioning and conditional preservation stabilization; one batch is one flower lot | kg prepared flower/bud |
| `farm_gate_grading` | Farm-gate grading and sorting | required | Selected route output | Separates accepted, downgraded and rejected states | kg incoming prepared product |

### Process: Perennial cinnamon establishment and stand management (`perennial_cinnamon_cultivation`)

#### Inputs

##### Product flows

###### Nursery plants and replacement material (`planting_material`)

Record seedlings, cuttings and replacement plants attributable to establishment and gap filling.

- Selected flow: Cinnamon nursery planting material
- Flow property / unit: Number / item
- Amount rule: Count planting material and annualize establishment only across evidenced productive stand years.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established hectare at planting
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `suriyagoda-2021-ceylon-cinnamon`
- Range: Planting-density QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 6000
  - Upper: 14000
  - Unit: item/ha established
  - Basis: per established hectare at planting
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer, manure and nutrient amendments (`nutrient_supply`)

This is the only nutrient Product-input card in the process. Raw records list every mineral fertilizer, organic fertilizer, manure and nutrient amendment separately; each actual product is resolved to a verified UUID during data generation.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum as-applied product masses while retaining product identity, nutrient composition and moisture in raw records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and reporting year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Range: Nutrient-product mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha-year as applied
  - Basis: per managed hectare and reporting year; wet mass for organic products
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record irrigation crossing the foreground boundary; exclude rainfall from the product-flow amount.

- Selected flow: Irrigation water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: Metered, pumped or otherwise evidenced water delivered to the stand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and reporting year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Range: Irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3/ha-year
  - Basis: per managed hectare and reporting year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuel and purchased energy (`field_energy`)

Record carriers used for establishment, maintenance, pumping and field operations.

- Selected flow: Field fuel and purchased energy
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy / MJ
- Amount rule: Convert carrier-specific recorded use to MJ with documented factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and reporting year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Field-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha-year
  - Basis: per managed hectare and reporting year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection`)

Record commercial products applied to the stand with active ingredient and treated area.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg
- Amount rule: Measured commercial-product mass applied in the reporting year.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and reporting year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Range: Crop-protection QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha-year commercial product
  - Basis: per managed hectare and reporting year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct managed-soil nitrous oxide (`soil_n2o`)

Calculate direct soil N2O from actual nitrogen inputs with the declared inventory method.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg N2O-N
- Amount rule: Apply the named current managed-soil method to collected nitrogen inputs and site conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg nitrogen applied
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_stand_management`
- Sources: `ipcc-2019-managed-soils`
- Range: Method-result QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O-N/kg N input
  - Basis: per kg nitrogen input evaluated for direct managed-soil emissions
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`

#### Outputs

##### Product flows

###### Harvest-ready crop allocated to the selected route (`harvest_ready_crop`)

Record dry-matter-equivalent bark or flower/bud output attributable to the stand before the independent harvest node; keep routes separate.

- Selected flow: Harvest-ready cinnamon crop
- Flow property / unit: Mass / kg dry-matter equivalent
- Amount rule: Reconcile measured route output backward through conditioning losses without counting standing biomass twice.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and reporting year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot_balance`
- Sources: `sri-lanka-dcd-postharvest`
- Range: Reported bark-yield comparison range
  - Range role: Typical range (`typical_range`)
  - Lower: 741
  - Upper: 1483
  - Unit: kg dried quills/ha-year
  - Basis: per managed hectare and year for Sri Lankan bark production; not a flower-route limit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `sri-lanka-dcd-postharvest`

##### Waste flows

##### Elementary flows

### Process: Bark harvest, peeling and primary conditioning (`bark_harvest_conditioning`)

#### Inputs

##### Product flows

###### Harvest-ready stems for the bark lot (`bark_route_crop`)

Record stems cut under the declared coppice or selective-harvest regime.

- Selected flow: Harvest-ready cinnamon stems
- Flow property / unit: Mass / kg dry-matter equivalent
- Amount rule: Reconcile stems and recovered bark to the cultivation intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted bark at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot_balance`
- Sources: `suriyagoda-2021-ceylon-cinnamon`
- Range: Stem-to-bark QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg dry-matter-equivalent stem/kg accepted bark
  - Basis: per 1 kg accepted bark at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bark-route energy (`bark_conditioning_energy`)

Record cutting, handling and conditioning energy. Drying energy is zero for passive drying without purchased energy.

- Selected flow: Bark conditioning energy
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy / kWh
- Amount rule: Sum metered electricity and converted fuel assigned to the lot; include drying only when active.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted bark at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Conditional bark-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg accepted bark
  - Basis: per 1 kg accepted bark; zero purchased drying energy when that intervention is inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared whole bark product (`prepared_bark`)

Record peeled bark, quills, quillings, featherings or chips after primary conditioning and before grading; product remains unground.

- Selected flow: Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured net intended output of prepared bark at lot-specific moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bark-conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_balance`
- Sources: `sri-lanka-dcd-postharvest`; `iso-6539-2014`
- Range: Farm-dried Ceylon bark moisture range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 15
  - Unit: percent moisture by mass
  - Basis: prepared bark as received; applies only to farm-dried Ceylon-type bark claiming the cited specification
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eurlex-2020-ceylon-cinnamon`

###### Wood, leaves and twigs sold as co-products (`bark_route_coproducts`)

Record every independently sold output separately. Material retained on site as mulch is a residue; oil distillation is outside scope.

- Selected flow: Cinnamon wood, leaves and twigs
- Flow property / unit: Mass / kg
- Amount rule: Measured intended co-product output leaving for an intended destination, with wet or dry state declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_balance`
- Sources: `suriyagoda-2021-ceylon-cinnamon`
- Range: Co-product mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg co-product/kg prepared bark
  - Basis: per 1 kg prepared bark; moisture basis declared consistently
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Bark rejects (`bark_rejects`)

Record unusable bark separately from downgraded saleable bark and declare recovery or disposal.

- Selected flow: Cinnamon bark residue
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass outside the accepted-product balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_balance`
- Range: Bark-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg prepared bark
  - Basis: per 1 kg prepared bark
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed during bark drying (`bark_drying_water`)

Calculate water removed from paired mass and moisture measurements; record zero when drying is inactive.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Pre-drying water mass minus post-drying water mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg farm-dried prepared bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_moisture_and_drying`
- Sources: `sri-lanka-dcd-postharvest`
- Range: Conditional bark water-removal QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg water/kg farm-dried bark
  - Basis: per 1 kg farm-dried bark; zero when drying is inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Flower or bud harvest and primary conditioning (`flower_harvest_conditioning`)

#### Inputs

##### Product flows

###### Harvest-ready flowers or immature buds (`flower_route_crop`)

Record flower-bearing material entering this route; do not substitute mature fruit, bark or clove buds.

- Selected flow: Harvest-ready cinnamon-tree flowers or immature buds
- Flow property / unit: Mass / kg
- Amount rule: Measured harvested mass before cleaning and conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted flower/bud at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flower_lot_balance`
- Sources: `wilson-2016-cassia-buds`; `li-2018-cassia-buds`
- Range: Flower-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg harvested material/kg accepted flower product
  - Basis: per 1 kg accepted flower/bud at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flower-route energy (`flower_conditioning_energy`)

Record handling and conditioning energy; drying energy is zero for a fresh hand-off or passive drying.

- Selected flow: Flower conditioning energy
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity and converted fuel assigned to the flower lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted flower/bud at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Conditional flower-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg accepted flower product
  - Basis: per 1 kg accepted flower/bud; zero when purchased energy use is absent
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared flowers or immature buds (`prepared_flowers`)

Record cleaned fresh or primary dried flowers/buds before grading; declare whether traded material is flower, immature bud or immature fruit marketed as a bud.

- Selected flow: Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured net prepared flower/bud mass at lot-specific moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per flower-conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flower_lot_balance`
- Sources: `wilson-2016-cassia-buds`; `pnp-cassia-buds-route`
- Range: Flower-product moisture QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: percent moisture by mass
  - Basis: prepared flower/bud as received; provisional screen because no cross-species official limit was located
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flower stems and rejects (`flower_rejects`)

Record removed stems, foreign matter and spoiled buds with recovery or disposal destination.

- Selected flow: Cinnamon flower conditioning residue
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass excluded from accepted flower product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared flower/bud
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flower_lot_balance`
- Sources: `pnp-cassia-buds-route`
- Range: Flower-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg reject/kg prepared flower product
  - Basis: per 1 kg prepared flower/bud
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed during flower drying (`flower_drying_water`)

Calculate removed water from paired states; record zero for a fresh hand-off or inactive drying.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Pre-drying water mass minus post-drying water mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg farm-dried flower/bud
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_moisture_and_drying`
- Sources: `pnp-cassia-buds-route`
- Range: Conditional flower water-removal QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg water/kg farm-dried flower product
  - Basis: per 1 kg farm-dried flower/bud; zero when drying is inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm-gate grading and sorting (`farm_gate_grading`)

#### Inputs

##### Product flows

###### Prepared route-specific product (`ungraded_cinnamon_product`)

Record exactly one route output entering grading and retain bark or flower/bud identity.

- Selected flow: Prepared raw cinnamon product
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming mass from `prepared_bark` or `prepared_flowers`, never both for one reference lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Range: Grading-input reconciliation
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg incoming/kg incoming grading basis
  - Basis: per 1 kg incoming prepared product used as denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted raw cinnamon product at farm gate (`accepted_cinnamon_product`)

This is the reference-flow hand-off and excludes downgraded product and rejects.

- Selected flow: Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured accepted intended output mass normalized to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Range: Reference-output range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/reference flow
  - Basis: per declared 1 kg accepted reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Downgraded saleable product (`downgraded_cinnamon_product`)

Record a separately sold lower grade as an intended output, never as accepted reference product or waste.

- Selected flow: Downgraded raw cinnamon product
- Flow property / unit: Mass / kg
- Amount rule: Measured downgraded intended output mass with destination and price.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg incoming prepared product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Range: Downgraded-output reconciliation
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg incoming prepared product
  - Basis: per 1 kg incoming prepared product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Grading rejects (`grading_rejects`)

Record non-saleable material and its rework, recovery, field-return, composting or disposal route.

- Selected flow: Cinnamon grading reject
- Flow property / unit: Mass / kg
- Amount rule: Measured reject after one documented internal rework loop.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg incoming prepared product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_balance`
- Range: Grading-reject reconciliation
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg incoming prepared product
  - Basis: per 1 kg incoming prepared product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | Bark and flower routes | Subdivide direct route records first. Routes may coexist on a farm, but harvest and conditioning burdens are mutually exclusive for one lot. | `suriyagoda-2021-ceylon-cinnamon`; `wilson-2016-cassia-buds` |
| `allocation_perennial_establishment` | Establishment and stand inputs | Attribute establishment and replacement across evidenced productive stand years and measured outputs; identify establishment, immature, productive and termination phases. | `suriyagoda-2021-ceylon-cinnamon` |
| `allocation_coppice_cycles` | Repeated bark cycles | Link inputs, maintenance and output to stand year and coppice/selective-harvest cycle; prevent one event entering two cycles. | `sri-lanka-dcd-postharvest`; `suriyagoda-2021-ceylon-cinnamon` |
| `allocation_intended_coproducts` | Bark, flowers, wood, leaves, twigs and downgraded product | Prefer subdivision. For inseparable burdens use documented dry-mass allocation; if the study requires economic allocation, report prices, period and sensitivity. Residues without a product destination receive no credit. |  |
| `allocation_rework` | Rework and rejects | Retain burdens on reworked material, link the loop once, and exclude rejects from accepted output. |  |
| `allocation_batch_period` | Lots and reporting years | Assign cleaning, shared handling and changeover to the causative lot or period and allocate any remainder once across measured outputs. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_management` | `perennial_cinnamon_cultivation` | Establishment and annual inputs | field log, invoice, meter, application record | stand_id, area, species, planting_date, planting_count, product_name, product_uuid, nutrient_composition, wet_mass, water, treated_area, date, stand_age, cycle_id | Reconcile logs to invoices and meters; retain nutrient products separately | item, kg, m3, ha | Each event; annual aggregate | Complete reporting year plus establishment records | Every included stand | Sum by stand-year and identity; annualize establishment | invoices, labels, meters, mapped area and dated logs |
| `cp_energy_records` | all foreground processes | Fuel and electricity | invoice, fuel log, meter | process_id, lot_id, carrier, quantity, unit, date, conversion_factor | Meter or reconcile purchases and stocks | native unit, MJ, kWh | Each lot or monthly | Complete reporting year and every included lot | Every included site | Convert by carrier and assign once to process, lot and period | invoices, calibrated meters and conversion reference |
| `cp_harvest_lot_balance` | `perennial_cinnamon_cultivation`; `bark_harvest_conditioning` | Bark inputs, products, co-products and rejects | harvest mass balance | stand_id, cycle_id, lot_id, stem_mass, bark_mass_before, bark_mass_after, bark_form, wood_mass, leaf_mass, twig_mass, reject_mass, destination, moisture | Weigh every hand-off | kg, mass fraction | Each bark lot | All bark lots in the reporting year | Every bark stand and peeling site | Reconcile dry matter and aggregate accepted lots to stand-year | scale checks, moisture test, lot linkage and receipts |
| `cp_flower_lot_balance` | `perennial_cinnamon_cultivation`; `flower_harvest_conditioning` | Flower inputs, products and rejects | harvest mass balance | stand_id, lot_id, botanical_part, maturity, harvested_mass, prepared_mass, stem_mass, foreign_matter, reject_mass, destination, moisture | Weigh every hand-off and verify plant part | kg, mass fraction | Each flower lot | All flower lots in the reporting year | Every flower stand and site | Reconcile product, removed matter and moisture by lot | scale checks, botanical record, moisture test and lot linkage |
| `cp_moisture_and_drying` | `bark_harvest_conditioning`; `flower_harvest_conditioning` | Conditional drying | drying log and moisture test | lot_id, route_id, drying_active, method, start_mass, end_mass, start_moisture, end_moisture, duration, energy | Paired mass and moisture before and after drying | kg, mass fraction, hour, kWh | Each drying lot | All drying lots in the reporting year | Every drying site | Calculate dry-matter closure and evaporated water; zero when inactive | test method, calibrated balance, timestamps and meters |
| `cp_grading_balance` | `farm_gate_grading` | Accepted, downgraded, reworked and rejected states | grading and destination record | lot_id, route_id, incoming_mass, grade, accepted_mass, downgraded_mass, rework_mass, reject_mass, defect, destination, price | Weigh each state and link its hand-off | kg, currency/kg | Each lot | All grading lots in the reporting year | Every grading site | Incoming = accepted + downgraded + reject + documented loss after one linked rework loop | scale checks, grade sheet, sales and reject record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | Fresh and dried states | dry_mass = wet_mass × (1 − moisture_fraction) | paired mass and moisture | dry mass | `iso-6539-2014` |
| `calc_drying_water` | Conditional drying | evaporated_water = start_mass × start_moisture − end_mass × end_moisture | paired mass and moisture | kg water to air |  |
| `calc_perennial_attribution` | Establishment and shared stand burdens | Allocate establishment across evidenced productive years; within each year assign shared burdens to separately measured outputs by the declared allocation rule. | productive years, stand inputs, route outputs | burden per route and reference kg | `suriyagoda-2021-ceylon-cinnamon` |
| `calc_lot_yield` | Harvest lots | accepted_yield = accepted_mass ÷ incoming_route_mass; report co-product and reject fractions separately | lot mass balance | yield and fractions |  |
| `calc_grading_balance` | Grading | incoming = accepted + downgraded + reject + documented loss; rework is one internal loop | grading record | reconciled states |  |
| `calc_managed_soil_emissions` | Nitrogen inputs | Apply the named current method and factors to product-specific nitrogen inputs, climate and management and disclose factor version. | applied N and method parameters | direct and indirect N emissions | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Route products | Verify species/type, plant part, form, flower/bud maturity, fresh/dried state and grade for every lot. | identity record, photograph or botanical record and grade sheet |
| `dq_temporal` | Perennial attribution | Cover a complete reporting year and all included lots; disclose establishment, productive and termination phases and partial cycles. | dated stand and harvest records |
| `dq_completeness` | All processes | Account for at least 95 percent by mass of each harvest or conditioning lot or quantify and explain the gap. | signed mass balance |
| `dq_moisture` | Conversions | Use paired lot-specific moisture whenever fresh and dried states are compared; identify test method and date. | laboratory or calibrated rapid test |
| `dq_nutrients` | Nutrient supply | Preserve actual product, UUID resolution, composition, moisture basis and event although the PCR has one consolidated nutrient card. | labels, invoices and application logs |
| `dq_route_separation` | Alternative routes | Show direct inputs and outputs assigned to one route and shared stand burdens allocated once. | lot-to-stand linkage and allocation worksheet |
| `dq_representativeness` | Published dataset | State geography, species mix, stand-age distribution, harvest regime, technology, drying share, coverage and year. | metadata and coverage table |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Reject missing species/type, plant part, form, moisture status, grade/destination, harvest year, cycle position or farm-gate declaration. |  |
| `validate_route_exclusivity` | Process map | Exactly one harvest-conditioning route supplies a reference lot; shared cultivation may be allocated, but direct route burdens cannot appear in both. |  |
| `validate_nutrient_binding` | `nutrient_supply` | Require at most one nutrient Product-input card in cultivation, bound to `flow-set.agricultural-nutrient-supply` version `0.3.0` with no group; foreground records must itemize products and resolve UUIDs. |  |
| `validate_conditional_drying` | Drying | If inactive, drying energy and removed water are zero. If active, require paired mass, moisture, duration and energy and dry-matter closure. | `sri-lanka-dcd-postharvest` |
| `validate_mass_balance` | Harvest, conditioning and grading | Require lot closure within 5 percent or a documented correction; accepted, downgraded, co-product and waste states are mutually exclusive. |  |
| `validate_moisture` | Farm-dried bark | Ceylon-type bark claiming the cited specification shall not exceed 15 percent moisture; other species and flowers require the declared applicable specification. | `eurlex-2020-ceylon-cinnamon`; `iso-6539-2014` |
| `validate_period_attribution` | Perennial stand and cycles | Identify establishment, immature, productive and termination phases; reject double attribution across stand years or cycles. |  |
| `validate_multioutput` | Intended outputs | Require measured hand-off and allocation decision for every intended output; residues or discards receive no product credit. |  |
| `validate_rework` | Rejects | Require one rework, downgrade, recovery or disposal path; exclude unresolved rejects and count a rework loop once. |  |
| `validate_exclusions` | Boundary | Reject results containing distillation, grinding, extraction or manufactured-spice formulation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate dataset for one declared raw cinnamon bark or flower/bud route |
| downstream_use | Eligible as `secondary_dataset` or `background_dataset` after methodology, identity and representativeness review |
| allowed_use | Attributional LCA for the declared species, plant part, route, state, geography, technology and period |
| excluded_use | Essential-oil, ground or formulated spice production; undeclared route mixing; extrapolation beyond declared scope |
| required_metadata | PCR id/version; reference UUID; species/type; plant part; form; gate; geography; harvest year; stand age; establishment year; cycle; moisture; grade; allocation; drying method/share; coverage |
| required_quality_disclosure | Measured and estimated shares, range exceptions, mass closure, UUID resolution, allocation sensitivity, missing data and representativeness limits |
| update_trigger | Material change in species, stand regime, yield, nutrient or irrigation practice, route, drying, co-product destination, allocation, grade specification, geography, or data older than five years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `sri-lanka-dcd-postharvest` | official_guidance | Sri Lanka Department of Cinnamon Development, “Post Harvest Technology”, https://cinnamon.gov.lk/about-cinnamon/post-harvest-technology/ | Harvest, scraping, peeling, 4–7 day drying, grading and reported 300–600 kg/acre-year quill yield |
| `suriyagoda-2021-ceylon-cinnamon` | literature | Suriyagoda et al. (2021), “Ceylon cinnamon: Much more than just a spice”, *Plants, People, Planet*, https://doi.org/10.1002/ppp3.10192 | Establishment, stand life, coppicing, process decomposition and co-products |
| `eurlex-2020-ceylon-cinnamon` | official_guidance | European Commission (2020), Ceylon Cinnamon GI specification, CELEX 52020XC0622(05), https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52020XC0622(05) | Product forms, route, 15 percent moisture limit and grading context |
| `iso-6539-2014` | standard | ISO 6539:2014, Cinnamon — Specification, https://www.iso.org/standard/64797.html | Whole cinnamon identity and quality context |
| `wilson-2016-cassia-buds` | literature | L. Wilson (2016), “Spices and Flavoring Crops: Leaf and Floral Structures”, *Encyclopedia of Food and Health*, https://www.sciencedirect.com/topics/medicine-and-dentistry/cinnamomum-cassia | Cassia flower/bud identity and harvest state |
| `li-2018-cassia-buds` | literature | Li et al. (2018), “Chemical constituents from the immature buds of Cinnamomum cassia”, *Biochemical Systematics and Ecology* 78, 102–105, https://doi.org/10.1016/j.bse.2018.04.008 | Independent immature-bud identity evidence |
| `pnp-cassia-buds-route` | handbook | Wuzhou P&P Spices, “Cassia Buds”, https://www.pnp6.com/html/en-detail-52.html | Industry route evidence for bunch harvest, drying and stem removal; not used as a universal limit |
| `ipcc-2019-managed-soils` | method_factor | IPCC (2019), 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | Managed-soil nitrogen emission method |
