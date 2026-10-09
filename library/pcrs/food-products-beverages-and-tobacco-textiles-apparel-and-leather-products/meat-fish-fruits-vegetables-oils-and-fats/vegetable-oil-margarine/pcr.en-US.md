---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oil-margarine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vegetable-oil margarine manufacture

## 1. Scope and Applicability

This PCR covers gate-to-gate manufacture of a full-fat, plant-only water-in-oil margarine from purchased food-grade refined soya bean oil and whole refined palm oil, potable water and non-hydrogenated soya lecithin, with optional dry salt. The defined representative fat-content band is 80–90% by wet product mass. It is a deliberately bounded product definition, supported by the historical margarine distinction in `codex-fat-spreads-2009`, not a statement of current food-law compliance. No fixed oil ratio, shelf life, processing temperature, holding time or nutritional benefit is prescribed. Actual recipes and acceptance evidence govern the dataset.

The route comprises phase preparation, emulsification, site-declared thermal conditioning, scraped-surface cooling/crystallization, mechanical working, tub filling and factory storage. Internally approved remelting is conditional. Historical route details in `spx-margarine-2012` are used qualitatively and checked against the current equipment catalogue `spx-margarine-current`; they do not establish mandatory equipment for every factory.

Excluded are lower-fat spreads, dairy/animal/marine-fat blends, pure butter, mayonnaise, anhydrous shortenings, puff-pastry blocks, other oil recipes, on-site hydrogenation/interesterification/fractionation, crop cultivation, oil extraction/refining, ingredient and packaging manufacture, external transport, retail, consumption and packaging end-of-life. Agricultural and refinery burdens belong in separate upstream links. The CPC 21700 heading has no substantive explanatory note in `unsd-cpc-2025`; this PCR therefore covers only a narrower representative subset.

The selected recipe is a foreground modelling target conditional on matching real factory records; no current factory observation of this minimal recipe is asserted. The current manufacturer original `landolakes-margarine` lists palm-kernel oil, buttermilk and other additives, demonstrating that commercial margarine cannot automatically match this bounded recipe; that product and its stick package remain outside scope.

This product methodology is not restricted to CN. Its geographic applicability follows matching product and production-route records; the CN condition constrains only the selected electricity identity and supplier link, which must be replaced for other supply conditions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oil-margarine |
| classification_refs | CPC 3.0 21700; narrower context only, no accepted mapping asserted |
| covered_products | Plant-only soya/palm margarine; wet fat content 80–90%; lecithin emulsifier; salted or unsalted |
| excluded_products | Low-fat and milk-fat spreads; chemically modified feed oils; anhydrous cooking fats; other recipes and packages |
| representative_product | Vegetable-oil margarine, soya and palm oil emulsion |
| production_route | Purchased refined oils → phase preparation → emulsion/thermal conditioning → scraped-surface crystallization/working → tub filling; conditional internal remelting; purchased natural-gas heat and 1–35 kV grid supply where used |
| market_state | Accepted closed unprinted PP tub with separate PP lid; net wet food mass; factory-gate storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a declared plastic vegetable-oil margarine for use as a spread |
| How much | 1 kg net accepted wet margarine, excluding packaging |
| How well | Declared recipe, oil grades, 80–90% measured wet fat, texture and acceptance specification; retain actual release evidence without implying safety approval |
| How long or cycle | One representative production reporting period ending at factory-gate acceptance; no consumer-life equivalence claimed |
| reference_flow_link | `reference_product_margarine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Vegetable-oil margarine, soya and palm oil emulsion |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oil species and refined/unmodified grade; recipe and wet fat/water/salt content; lecithin grade; plant-only status; texture/acceptance specification; thermal treatment and actual equipment; site/year; water source; refrigerant; heat supplier/fuel; electrical supply country, supplier, voltage and user/generation-side boundary; packaging components; storage; boundary/allocation; unresolved/proxy identities |

All required qualifiers must be declared in dataset metadata or linked product specifications. Net wet mass includes incorporated water; packaging, waste and internal rework are excluded from accepted output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net wet food on calibrated scales using cp_output; all inventory denominators are per 1 kg reference flow. Never use gross tub mass or dry-fat mass. |
| `energy_conversion` | electricity and purchased heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh; MJ | Preserve the published reference property. Energy unit conversion uses 1 kWh = 3.6 MJ; meter useful delivered heat separately. Heat quantity is not a steam mass or water volume. |
| `solution_basis` | `naoh30` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Delivered 30% NaOH solution mass is the exchange. Record measured concentration c as mass fraction; active NaOH mass = delivered solution mass × c; do not add active mass as a second product input. |
| `water_basis` | ingredient and cleaning water; groundwater; effluent | Mass or Volume as declared per row | kg; m3 | Volume-to-mass conversion requires measured density in kg/m3 at recorded temperature, not a universal assumed density. Retain m3 for resource abstraction and external effluent. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food-grade refined whole oils, potable water, lecithin and packaging components received at factory gate with stocks and supplier stages declared |
| starting_condition_role | Purchased upstream products; gate-to-gate food manufacture |
| product_classification_scope | A specific plant-only emulsified margarine subset of CPC21700 |
| recursive_input_rule | Purchased margarine used as rework requires its own upstream dataset; internal same-period recirculation is recorded without a second external input/output |
| upstream_dataset_requirement | Link separate representative refined-oil, ingredient, potable-water, electricity, heat and finished-packaging datasets; include actual refining/agricultural stages there. Identity UUIDs do not establish those datasets or full cradle-to-gate coverage. |
| disclosure | Declare included tanks, lines, cleaning, storage and utility meter limits; external treatment destination; added upstream/downstream stages; unmeasured flows and proxies |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory` | manufacturing boundary | Include receipt/storage, all selected-route manufacture, net filling losses, factory storage, cleaning and allocated utilities. Crop cultivation and oil refining are upstream; no complete cradle-to-gate claim follows from factory totals. | `spx-margarine-2012` |
| `sb_route` | equipment and treatment | Record actual thermal treatment, SSHE/working arrangement and refrigeration chemistry. Ammonia refrigeration is conditional, not universally required. No historic temperature/time or savings claim becomes a default. | `spx-margarine-current` |
| `sb_transfer` | waste and utilities | Selected route purchases heat and sends effluent off-site. Connect documented external treatment separately if assessed. On-site boilers or wastewater treatment require an explicit extension with atomic fuel, chemical, sludge and verified emissions; do not hide them in a purchased utility. |  |
| `sb_internal` | internal transfers | Track intermediate phases and emulsion transfers, rework, condensate and stocks. Internal transfers carry mass/quality records but cancel in the factory external inventory; include their repeated energy and losses. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Ingredient receipt, storage and phase preparation | required | Purchased refined oils, potable water and food-grade ingredients; blend ratio measured | Foreground unit operation | 1 kg accepted net margarine |
| `thermal` | Emulsification and thermal conditioning | required | Water-in-oil mixing and declared site thermal treatment; no PCR temperature/time prescription | Foreground unit operation | 1 kg accepted net margarine |
| `crystal` | Scraped-surface cooling and mechanical working | required | Plastic margarine texture from cooling and working; ammonia refrigeration only if declared | Foreground unit operation | 1 kg accepted net margarine |
| `pack` | Tub filling, closure and factory storage | required | Purchased unprinted polypropylene tub and separate polypropylene lid; no secondary distribution package | Foreground unit operation | 1 kg accepted net margarine |
| `cip` | Cleaning and attributable utility services | required | Site cleaning, refrigeration service and water supply within declared factory boundary | Foreground unit operation | 1 kg accepted net margarine |
| `rework` | Internal remelting and return | conditional | Only when hygienically accepted material is actually remelted and returned internally | Foreground unit operation | 1 kg accepted net margarine |

Intermediate fat phase → emulsion → worked margarine transfers are connected physical streams inside one factory boundary. Record their mass, lot and rework links using cp_recipe, cp_thermal and cp_output; they are not duplicate external inventory exchanges. The listed recipe has no dairy ingredients or other additives. Any actual additional ingredient, label, seal, carton, cleaning chemical or measured release requires its own specific row and evidence before use of a dataset claiming completeness. Absence requires recipe/BOM/service evidence, not an assumed zero.

### Process: Ingredient receipt, storage and phase preparation (`prepare`)

#### Inputs

##### Product flows

###### Soya bean oil, refined (`soy_oil`)

Food-grade, unmodified refined soya bean oil received as liquid oil. Receipt and stock movements identify supplier and refine-state; oil cultivation, extraction and refining are upstream.

- Selected flow: Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_recipe` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`

###### Palm oil, refined (`palm_oil`)

Food-grade whole refined palm oil, not palm-kernel oil or isolated stearin; document melting/storage duty. Do not infer blend ratio from a catalogue.

- Selected flow: Palm oil, refined `029b6008-a809-4d77-8612-47451f7c98fa`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_recipe` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`

###### Potable water for margarine aqueous phase (`ingredient_water`)

Purchased water incorporated into the emulsion; potable specification and actual supply treatment must be documented separately from CIP water. Volume records require measured density at recorded temperature.

- Selected flow: Potable water for margarine aqueous phase
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_recipe` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`

###### Food-grade sodium chloride, dry salt (`salt`)

Only for a salted recipe; weigh dry food-grade salt as delivered and record purity. Industrial-feedstock and environmental-resource salt are not food-grade identity substitutes.

- Selected flow: Food-grade sodium chloride, dry salt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_recipe` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`

###### Non-hydrogenated food-grade soya lecithin (`lecithin`)

Emulsifier for the selected lecithin recipe. Record delivered grade, phospholipid content and any carrier oil; total supplied lecithin ingredient mass is the exchange, not pure phosphatidylcholine mass.

- Selected flow: Non-hydrogenated food-grade soya lecithin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_recipe` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`

###### Alternating current (`electricity_prepare`)

Meter ingredient receipt, storage and phase preparation including attributable standby/start-up losses. This UUID is applicable only to matching CN (China) user-side 1–35 kV medium-voltage grid-average consumption mix at the factory supply meter. Record supply country, supplier, year and transformer boundary. Other countries, voltages or generation-side supplies require a separately verified identity and matching supplier data; neither this UUID nor its provider is a global default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Heat (`heat_prepare`)

Purchased useful heat from a natural-gas-based district or industrial supply; record delivered heat and supply/return conditions. No on-site boiler is included in this selected utility route. Electric heating is counted in electricity; do not add this heat row when absent.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

#### Outputs

##### Product flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

### Process: Emulsification and thermal conditioning (`thermal`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_thermal`)

Meter emulsification and thermal conditioning including attributable standby/start-up losses. This UUID is applicable only to matching CN (China) user-side 1–35 kV medium-voltage grid-average consumption mix at the factory supply meter. Record supply country, supplier, year and transformer boundary. Other countries, voltages or generation-side supplies require a separately verified identity and matching supplier data; neither this UUID nor its provider is a global default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Heat (`heat_thermal`)

Purchased useful heat from a natural-gas-based district or industrial supply; record delivered heat and supply/return conditions. No on-site boiler is included in this selected utility route. Electric heating is counted in electricity; do not add this heat row when absent.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

#### Outputs

##### Product flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

### Process: Scraped-surface cooling and mechanical working (`crystal`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_crystal`)

Meter scraped-surface cooling and mechanical working including attributable standby/start-up losses. This UUID is applicable only to matching CN (China) user-side 1–35 kV medium-voltage grid-average consumption mix at the factory supply meter. Record supply country, supplier, year and transformer boundary. Other countries, voltages or generation-side supplies require a separately verified identity and matching supplier data; neither this UUID nor its provider is a global default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Ammonia, anhydrous (`ammonia_makeup`)

Only for an anhydrous-ammonia refrigeration circuit. Record fresh charge/make-up attributable to the period, supplier purity, opening/closing charge and recovered transfers. Recirculating charge is not repeatedly purchased.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_refrigerant` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

#### Outputs

##### Product flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

###### ammonia (`ammonia_air`)

Conditional actual short-term NH3 loss to outdoor air with unspecified subcompartment. Use charge balance after recovered transfers; do not equate all make-up with leakage. If urban/rural release location is known, replace the unspecified-air identity with a directly verified matching flow. No fixed leak rate is prescribed.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_refrigerant` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

### Process: Tub filling, closure and factory storage (`pack`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_pack`)

Meter tub filling, closure and factory storage including attributable standby/start-up losses. This UUID is applicable only to matching CN (China) user-side 1–35 kV medium-voltage grid-average consumption mix at the factory supply meter. Record supply country, supplier, year and transformer boundary. Other countries, voltages or generation-side supplies require a separately verified identity and matching supplier data; neither this UUID nor its provider is a global default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### New food-contact polypropylene tub (`pp_tub`)

Purchased complete unprinted primary tub, with supplier manufacturing included upstream. Weigh the tub alone; resin production alone does not represent container manufacture.

- Selected flow: New food-contact polypropylene tub
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_pack` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`

###### New food-contact polypropylene lid (`pp_lid`)

Purchased separate unprinted closure matching the tub. Record component mass and issue count independently of the tub and net food mass. No foil seal, label or carton is assumed for this deliberately limited configuration.

- Selected flow: New food-contact polypropylene lid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_pack` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

#### Outputs

##### Product flows

###### Vegetable-oil margarine, soya and palm oil emulsion (`reference_product_margarine`)

Accepted finished water-in-oil margarine in closed tubs at the factory gate. Count net edible content only; packaging is accounted separately. Fat content, recipe identity, texture specification and acceptance records must match the period.

- Selected flow: Vegetable-oil margarine, soya and palm oil emulsion
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`

##### Waste flows

###### Rejected vegetable-oil margarine emulsion for external treatment (`rejected_emulsion`)

Only unrecovered, de-packaged margarine leaving the factory for treatment. Weigh wet emulsion with oil/water composition; internally remelted material is not this waste.

- Selected flow: Rejected vegetable-oil margarine emulsion for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_waste` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

### Process: Cleaning and attributable utility services (`cip`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_cip`)

Meter cleaning and attributable utility services including attributable standby/start-up losses. This UUID is applicable only to matching CN (China) user-side 1–35 kV medium-voltage grid-average consumption mix at the factory supply meter. Record supply country, supplier, year and transformer boundary. Other countries, voltages or generation-side supplies require a separately verified identity and matching supplier data; neither this UUID nor its provider is a global default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Heat (`heat_cip`)

Purchased useful heat from a natural-gas-based district or industrial supply; record delivered heat and supply/return conditions. No on-site boiler is included in this selected utility route. Electric heating is counted in electricity; do not add this heat row when absent.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Process Water (`cleaning_water`)

Purchased treated process water for cleaning and service use, excluding ingredient water. Meter external supply only. Water treated internally from an owned well is represented by abstraction and treatment burdens, not an additional external water purchase.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_water` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`

###### Sodium hydroxide（30%） (`naoh30`)

Only when fresh 30% by mass aqueous NaOH is purchased for CIP. Record as-delivered solution mass and concentration; working dilution and reused CIP tank contents are internal. Different delivered concentration requires a matching identity, not relabelling this one.

- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_cleaning` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

###### ground water (`groundwater`)

Conditional direct groundwater abstraction for cleaning/service supply; meter well extraction in m3, identify aquifer and basin, and record treatment electricity in CIP utilities. No abstraction row for purchased water. This flow is a water resource, never effluent.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_water` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`

#### Outputs

##### Product flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Waste flows

###### Margarine CIP wastewater for external treatment (`cip_effluent`)

Spent aqueous cleaning liquor and rinses crossing the factory boundary as one characterized liquid stream for external wastewater treatment. Record volume, density, pH, oil, COD and destination; this is not an elementary water emission and COD is a quality parameter, not a chemical exchange.

- Selected flow: Margarine CIP wastewater for external treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_waste` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

### Process: Internal remelting and return (`rework`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_rework`)

Meter internal remelting and return including attributable standby/start-up losses. This UUID is applicable only to matching CN (China) user-side 1–35 kV medium-voltage grid-average consumption mix at the factory supply meter. Record supply country, supplier, year and transformer boundary. Other countries, voltages or generation-side supplies require a separately verified identity and matching supplier data; neither this UUID nor its provider is a global default. Record only when remelting occurs.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Heat (`heat_rework`)

Purchased useful heat from a natural-gas-based district or industrial supply; record delivered heat and supply/return conditions. Only for actual remelting. No on-site boiler is included in this selected utility route. Electric heating is counted in electricity; do not add this heat row when absent.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow, derived from accepted net wet output and `cp_utilities` records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

#### Outputs

##### Product flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Waste flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

##### Elementary flows

No external exchange of this type is specified for the selected operation; retain an applicability record and add any actual exchange separately.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_direct` | all foreground consumption | First separate line/batch measurements and meter loads directly. Accepted margarine is the only normal saleable output of this recipe; rejected emulsion is waste unless destination and saleable specification establish a real co-product. Do not grant an avoided-product credit to internal rework. |  |
| `al_shared` | shared utilities and cleaning | Use cp_allocation to measure common load and operation shares. Time/load attribution is allowed only when logs and meter trials support the physical relation. Include start-up, standby, remelting and cleaning duty in the period. Do not prescribe mass allocation for all utilities or an unsupported economic split. |  |
| `al_residual` | unresolved multifunctionality | If a real co-product or shared-load relation cannot be separated, retain output quantities, disposition, measured drivers and alternative allocations for scientific review; disclose residual uncertainty instead of selecting an arbitrary fraction. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe` | prepare | Each ingredient and internal phase transfer | Measured records | lot; supplier; recipe; wet mass; stocks; grade; fat/water/salt; density; temperature; rework links | Calibrated tank load cells or mass meters; supplier specifications and batch issue reconciled to receipt/stocks | kg | Each receipt and batch | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Net external ingredient consumption / accepted net margarine kg; internal transfers retained separately  |
| `cp_thermal` | thermal | Process configuration and quality state | Measured records | lot; emulsion transfer mass; thermal steps; temperatures; holding records; cooling/working arrangement; test/acceptance status | Record actual line recipe and calibrated instrument traces; no externally assumed safe temperature or time | kg; °C; s | Each batch and change | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Link actual operation/quality records to output lots; quality readings are not inventory quantities  |
| `cp_output` | pack | Accepted net product | Measured records | lot; accepted net margarine kg; gross/tare weights; fat/water content; closure; rejected mass; stocks | Calibrated net-content weighing or gross less measured component tare; reconcile batch acceptance and stock changes | kg | Each batch | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Sum accepted net wet margarine kg; exclude packaging, rejects and internal rework; basis per 1 kg reference flow  |
| `cp_utilities` | prepare; thermal; crystal; pack; cip; rework | Each electricity and heat row | Measured records | meter id; readings; unit; operation; electricity supply country/supplier; voltage; user/generation-side and transformer boundary; heat supplier/fuel; supply/return state; operating/standby time; driver | Calibrated submeter intervals and utility invoices reconciled with cp_allocation; record start-up/storage/CIP/rework load | kWh; MJ | Continuous meters with batch/shift reconciliation | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Attributable measured energy / accepted net margarine kg; each carrier independently  |
| `cp_pack` | pack | Tub and lid independently | Measured records | component id; polymer; new/recycled state; mass; count; issues; rejects; stocks; supplier manufacturing | Weigh representative individual components on calibrated scales; reconcile issue counts and stock; supplier bill of materials | kg | Each delivery/configuration and batch | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Separate total issued component kg / accepted net margarine kg; never normalize by gross package mass  |
| `cp_water` | cip | Purchased process water and direct well abstraction separately | Measured records | source; meter; m3 or kg; density; temperature; treatment; purchased/internal state; returns; basin | Calibrated water meters and measured density where required; well/purchase boundaries reconciled | kg; m3 | Each shift and cleaning event | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Each external supply or resource quantity / accepted net margarine kg; exclude duplicate internal distribution  |
| `cp_cleaning` | cip | Fresh NaOH solution | Measured records | product id; solution kg; concentration; CIP cycle; tank opening/closing; purge; reused volume | Weigh fresh solution issue and verify concentration certificate or analysis; document dilution/recirculation | kg | Each cleaning event | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Fresh external solution kg / accepted net margarine kg; do not count recirculated tank solution again  |
| `cp_refrigerant` | crystal | NH3 charge and actual loss | Measured records | chemical; purity; opening/closing charge; make-up; recovery; transfers; event; medium/submedium; product share | Weighed charge/service records and leak events; reconcile system balance with uncertainty and shared-service allocation | kg | Each service event and period balance | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Separately normalize attributable purchased NH3 and actual outdoor-air loss / accepted net margarine kg  |
| `cp_waste` | pack; cip | Rejected emulsion and external CIP effluent separately | Measured records | stream; wet mass/volume; density; composition; COD; oil; pH; destination; internal recovery; manifest | Calibrated weighing and effluent flowmeters; representative samples; destination transfer evidence | kg; m3 | Each batch disposal and cleaning discharge | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Each exported waste quantity / accepted net margarine kg; no internal rework or duplicate elementary discharge  |
| `cp_allocation` | prepare; thermal; crystal; pack; cip; rework | Shared utilities/cleaning attribution | Measured records | total load; submeter load; operating time; measured driver; product lots; fractions; residual; trials | Compare driver shares against actual meter trials; retain all product shares and uncertainties; prefer direct measurement | kWh; MJ; kg; m3 | Each shared cycle and reporting period | One representative full reporting period covering production, changeovers, cleaning and service events; disclose dates and gaps | Named factory and lines only | per 1 kg reference flow | Calibration, original logs, supplier specs, reconciliations and uncertainty retained  ; aggregation detail: Attributed load must sum to measured total; each row normalized per 1 kg reference flow  |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalization` | all inventory rows | For each non-reference row, divide its attributable external measured amount in its declared numerator unit by total accepted net wet margarine kg from cp_output. The reference-product row is exactly 1 kg; its source total is not divided by itself as another input. | `cp_output`; relevant row protocol | Row quantity per 1 kg reference flow |  |
| `mass_conversion` | `ingredient_water`; `cleaning_water`; `pp_tub`; `pp_lid` | Water mass kg = measured m3 × measured density kg/m3; each component mass kg = issued count × measured mean component net kg. Retain sampling dispersion and temperature. | `cp_recipe`; `cp_water`; `cp_pack` | Measured mass before normalization |  |
| `refrigerant_balance` | `ammonia_air` | Actual loss = opening charge + fresh additions + documented incoming transfers − closing charge − recovered outgoing transfers, with reconciliation of all system movements. Negative residual or uncertain recovery requires review, not a forced zero. Normalize only the share attributable to margarine. | `cp_refrigerant`; `cp_allocation`; `cp_output` | kg NH3 to declared air subcompartment per 1 kg reference flow |  |
| `product_balance` | recipe and output period | Reconcile external ingredient wet masses and opening stock against accepted net output, closing stock, externally removed emulsion, effluent entrainment and measured other losses. Internal remelting cancels as mass transfer but retains energy. Do not assume fat inputs equal total wet output or impose a universal yield. | `cp_recipe`; `cp_output`; `cp_waste` | Documented wet mass and fat/water balance residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_recipe` | product and feeds | Supplier food-grade/unmodified-oil identity, lecithin composition and measured wet fat/water/salt match accepted recipe; record actual product specification and test status. PCR interpretation is not food safety or health approval. | Supplier certificates; recipe; tests; release records |
| `dq_coverage` | whole period and processes | Use one consistent period covering all selected operations, utilities, cleaning, storage and losses. Explain each conditional absence, zero and unmeasured amount; no universal cut-off removes minor ingredients or leaks. | Period logs; BOM; event records; reconciliations |
| `dq_identity` | linked flows and datasets | Verify chemical/grade, property/unit, supply geography, electrical voltage and user/generation-side boundary, heat fuel and release compartment. Accept electricity UUID 3d76981f-964a-4865-b588-0e067a2a1163 only for matching CN user-side 1–35 kV grid-average consumption mix; reject its use for other countries, voltages or generation-side supplies and require a newly verified identity with matching supplier data. Neither the UUID nor its provider is a global default. Identity matching does not establish temporal or supplier-dataset representativeness; document supplier datasets and all proxies separately. | Published identity and upstream source records |
| `dq_uncertainty` | balances and attribution | Retain instrument accuracy, density/packaging samples, recipe changes and allocations; set site-derived tolerance from uncertainty, not invented PCR yield or energy ranges. Unresolved balance/identity remains explicit. | Calibration; samples; allocation trials; sensitivity records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_scope` | product applicability | Require plant-only recipe with the named unmodified oils, lecithin, measured 80–90% wet fat and declared primary packaging. Other formulations/routes require separate applicability review and cannot inherit full coverage. | `codex-fat-spreads-2009` |
| `val_measure` | reference and every row | Reference output name must match the output card; reference quantity is 1 kg net wet food. Check protocol links and normalization denominator, density/count conversions, solution concentration and units; reject gross/dry-fat denominators or energy/volume/mass substitutions. |  |
| `val_boundary` | completeness and balances | All actual ingredients, utilities, cleaning and wastes must be atomic exchanges. Reconcile wet/fat/water balance, common loads, internal rework and net filling. Missing measurements, unknown destinations or unexplained residuals yield incomplete validation, not a passing zero. |  |
| `val_identity` | flow identity and review | Check each selected public flow including its reference property, route and medium/submedium; retain exact localized names. Keep unconfirmed identities unresolved and distinguish performed/skipped checks. Structural checks do not establish scientific, food-grade, safety or methodology approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate margarine manufacture |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A documented recipe/site/period margarine manufacturing contribution with explicit upstream and external-treatment links for expanded studies |
| excluded_use | Unqualified full CPC21700 coverage; complete cradle-to-gate without linked stages; food-safety, shelf-life or health approval; comparison across differing fat/function/configuration without review |
| required_metadata | All reference qualifiers; reference/output name; wet mass; process map; dates; geography; upstream sources; waste destination; allocations; exact identity gaps |
| required_quality_disclosure | Measured versus absent/unmeasured exchanges; balance residuals; uncertainty; coverage of supplier manufacture; proxies; scientific review status and original source limitations |
| update_trigger | Changed oil recipe, fat fraction, emulsifier, processing/thermal route, refrigerant, water/heat/power supply, package, site, allocation or upstream identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed page 94, 21693 and 21700. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context; 21700 heading has no substantive explanation; does not establish complete product coverage |
| `codex-fat-spreads-2009` | standard | FAO/WHO, Standard for Fat Spreads and Blended Spreads, CODEX STAN 256-2007 amended 2009, page 1 sections 1–3.1. https://www.fao.org/input/download/standards/10742/CXS_256e.pdf | Historical naming distinction and representative subset; retained edition only, not current additive/safety/labelling/analytical compliance or current legal approval |
| `spx-margarine-2012` | handbook | SPX, Margarine Production - Technology and Process, issued 07/2012 GB, pages 4–8, phase preparation, emulsion, thermal conditioning, crystallization/working, filling, remelting and CIP. https://www.spxflow.com/assets/pdf/gerstenberg-schroder-margarine-production-gb.pdf | Historical qualitative process decomposition only; no numeric settings, energy savings, universal cleaning interval or obligatory refrigerant adopted |
| `spx-margarine-current` | handbook | SPX FLOW / ITT Flow Technologies, Margarine & Shortening Processing Solutions, undated manufacturer catalogue, SSHE, Pin Rotor Machine, Plate Pasteurizer Unit and Hot Water Unit entries. https://www.spxflow.com/product-applications/margarine-shortening/ | Contemporary catalogue corroboration of available route equipment, not an independent factory observation or industry factor |
| `landolakes-margarine` | handbook | Land O'Lakes, Margarine Sticks, undated official manufacturer listing, Ingredients. https://www.landolakes.com/products/margarine/margarine-sticks/ | Current commercial recipe counterevidence; contains palm-kernel oil, buttermilk and additional additives, not proof of this representative recipe/tub configuration |
