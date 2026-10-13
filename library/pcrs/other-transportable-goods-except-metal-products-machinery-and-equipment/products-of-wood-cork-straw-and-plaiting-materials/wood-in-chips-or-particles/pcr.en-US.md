---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-in-chips-or-particles
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Wood in chips or particles

## 1. Scope and Applicability

This method covers clean, untreated, unconsolidated wood chips and mechanically produced wood particles dispatched in bulk after size preparation, screening and storage. Declare species and feedstock origin, chip size specification, bark/impurity content and measured moisture. Dedicated chipping of non-sawlog roundwood and preparation of clean wood-processing co-products are separate routes. The latter inherits burdens from the origin process; low price, pre-existence or the word residue is not a zero-burden rule. [corrim-northern-lumber-2025; fao-residue-preparation.]

Exclude bonded particleboard, OSB, pulp manufacture, wood wool/flour, densified pellets/briquettes, thermally modified/impregnated wood, post-consumer contaminated timber, bagged retail product and foreground artificial thermal drying. Natural storage moisture change is included. Prior drying of an incoming clean offcut remains in its upstream burden. A boiler or thermal dryer requires a separately reviewed extension and independent combustion evidence. Sale to fuel use does not make this a combustion or avoided-fuel dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-in-chips-or-particles |
| classification_refs | CPC 3.0 31230; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Clean uncompressed wood chips/particles with declared specification and moisture |
| excluded_products | Bonded boards; pellets; flour/wool; treated or contaminated wood; foreground thermally dried product |
| representative_product | Screened bulk untreated wood chips at preparation gate |
| production_route | Dedicated mechanical chipping or inherited wood-processing co-product; screening, recirculation, natural storage and bulk loading |
| market_state | Unconsolidated, unpackaged bulk dispatch; moisture and particle size declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide specified bulk wood-chip feedstock at the preparation gate |
| How much | 1 m3 solid wood volume at dispatch moisture, excluding interparticle air gaps |
| How well | Meet declared size, species, bark/impurity and moisture acceptance; no universal grade or moisture prescribed |
| How long or cycle | One accepted bulk dispatch after the declared storage residence |
| reference_flow_link | chips |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Route; wood origin and producer allocation boundary; species/mix; chip size and acceptance; bark/impurities; moisture value and wet/dry basis; solid-volume measurement state; batch solid and bulk volume and packing; wet/dry mass; storage residence/conditions and stock; provider and transport boundary; allocation method; geographical and temporal scope; provider reference amount and solid/bulk definition with evidence locator; linked moisture/species/packing and loss-boundary reconciliation; quantity/background compatibility status |

Required qualifiers must be declared in dataset metadata or equivalent process/reference-flow notes. Three separate claims must be retained: (a) the verified Wood Chip product identity and Volume/m3 property-unit chain; (b) this PCR’s declared 1 m3 solid wood volume at dispatch moisture, excluding interparticle gaps; and (c) the specific volume definition and reference amount of each linked supplier/background Process. The flow record establishes (a) only. Definition (b) is this PCR’s unit choice and is not evidence that the database or any background Process uses solid volume. A loose cubic metre or a kilogram cannot be copied as one reference unit. This is a declared production unit, not proof of equivalent downstream fuel, pulp or panel performance.

Conditionally use the verified Wood Chip identity, but confirm quantity and background compatibility independently through cp_volume_link for incoming_chips, chips and every Wood Chip supplier/background link. A provider’s generic Volume/m3 label or matching UUID is insufficient: obtain its documented solid/bulk definition, reference amount, moisture/species state and included loss boundary. If a definition or applicable measured conversion is unknown, retain quantity/background compatibility as pending, disclose the missing evidence and block a completed background link and use as a complete dataset. Do not relabel the known identity as missing.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| solid_basis | reference product | Volume | m3 | Solid volume excludes air gaps and is measured at dispatch moisture. Collect cp_reference; retain species and moisture-matched density, not generic conversion factors. |
| moisture_basis | wood exchanges | Mass | kg | Keep wet mass m_w, oven-dry mass m_d and water separately. w=(m_w-m_d)/m_w; u=(m_w-m_d)/m_d; m_d=m_w*(1-w)=m_w/(1+u). w and u are fractions, not percentages; report percent only with explicit /100 conversion. [usda-wood-handbook-2021; fao-units.] |
| volume_state | cp_reference; cp_material | Volume and mass | m3; kg | V_s=m_w/rho_ws for the same measured moisture state; V_b is measured loose bulk volume including air gaps. k=V_s/V_b is batch-specific. Do not use dry-solid density with wet mass. |
| energy_state | electricity; diesel | energy; mass | MJ; kg | Electricity kWh*3.6=MJ. Diesel remains kg; volumetric delivery needs actual supplier density. Fuel calorific energy is not useful heat. |
| nox_quantity_basis | nox | Mass; verified quantity convention | kg | Before calculation, document the actual measured or factor-derived NOx quantity convention, chemical/species scope, concentration and gas-state basis and its independently verified relation to the selected LCI flow and assessment method. Native Mass/kg does not establish an NO2-equivalent convention. Keep actual NO/NO2 species quantities and documented conversion/speciation evidence when an equivalent basis is used; no universal conversion or assumed split. Reconcile any aggregate with separately modelled NO/NO2 and keep N2O separately, without counting the same release twice. Missing convention/speciation or LCI/assessment compatibility leaves the raw result and its normalized exchange pending review; never silently label a mass as NO2-equivalent or invent zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Roundwood at forest roadside; clean offcut or imported chip at originating producer gate, with inherited burdens |
| starting_condition_role | foreground_gate_input_with_upstream_background |
| product_classification_scope | Supported clean mechanically prepared subset of CPC 31230 |
| recursive_input_rule | Imported chips keep their verified upstream preparation and origin burden; prevent recursive self-reference and count transport/storage once |
| upstream_dataset_requirement | Representative forestry and harvesting for dedicated route; origin-process allocated co-product dataset for residue route; provider-specific energy, material, transport and waste treatment; Wood Chip links additionally require documented provider reference volume and cp_volume_link compatibility evidence |
| disclosure | Upstream inclusion; producer allocation/subdivision; species; feedstock treatment history; any missing provider; transport; storage; dust/control; rejected products and allocation ledger |

Include receiving/inspection, actual debarking, chipping, screening, both return loops, conveying, dust extraction, natural storage loss and bulk loading. Include attributable maintenance and disposal. Purchased services include their emissions once; foreground diesel emissions only cover machinery outside those services. Machinery manufacture/site works require documented materiality review and an explicit boundary decision, never a universal numeric cut-off. Downstream pulping, panels, pelletizing and combustion lie beyond this gate; no avoided-fuel or storage credit.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Receiving, mechanical preparation, screening, natural storage and bulk dispatch | required | Supported route | foreground | chips |

Aggregate physically continuous preparation through bulk dispatch into one foreground unit. Preserve independent stage meters and the following internal physical ledger. Neither screened intermediate chips nor stored chips are additional reference product outputs. Return-loop paired endpoints have the same unallocated physical amount, moisture and cohort.

| transfer_id | Specific internal material | From → to | Measurement and accounting |
| --- | --- | --- | --- |
| oversize_return | Oversize untreated wood chip | screen → chipper | Weigh kg per pass in cp_recirculation; equal paired endpoints; never count as fresh feed or sold product |
| fines_return | Returned clean wood fine | screen or collector → preparation | Weigh separately from oversize; identify each return destination; do not count again as dust emission or disposal |
| storage_dry_loss | Dry wood matter consumed during storage | pile → measured fate | cp_storage residual after stock, solid exports and airborne wood loss; separate water loss; unresolved fate is a balance gap, not an exchange UUID |

### Process: Mechanical preparation (`preparation`)

#### Inputs

##### Product flows

###### Roundwood of coniferous wood, other (`conifer_roundwood`)

Dedicated chipping only, when coniferous non-sawlog roundwood is received. Record wet mass, bark fraction, moisture and forest-roadside upstream burden; inbound haulage is separate.

- Selected flow: Roundwood of coniferous wood, other `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Roundwood of non-coniferous wood, other (`hardwood_roundwood`)

Dedicated chipping only, when non-coniferous non-sawlog roundwood is received; use its own species, mass and moisture records. Do not substitute coniferous yields or densities.

- Selected flow: Roundwood of non-coniferous wood, other `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Unimpregnated wood offcut (`offcuts`)

Co-product route: one clean solid offcut exchange at the producer gate. Attach producer joint-stage allocation and any prior drying burden, then measure chipping separately. Existing residue is not burden-free because its price is low or zero.

- Selected flow: Unimpregnated wood offcut
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `fao-residue-preparation`

###### Wood Chip (`incoming_chips`)

Only when already-chipped clean co-product is imported for screening/storage; record inherited chip-production burden and receipt quantity. Confirm the supplier/background reference amount and solid/bulk convention, moisture/species state, packing and loss boundary using cp_volume_link. Calculate receipt solid volume with matched measurement evidence before normalization; background demand is expressed in the provider’s own verified reference volume. Unknown definition or conversion leaves the link pending and affected dataset incomplete. This is not the finished reference output; do not also count this wood as roundwood or offcut.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `fao-units`; `corrim-northern-lumber-2025`

###### Alternating current (`electricity`)

Grid electricity delivered below 1 kV for debarking, chipping, screens, conveyors, dust collection and loading. Meter stages separately and include reprocessing power. Other voltage or on-site generation needs a separately verified identity/provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value (electrical energy) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange from cp_energy divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Diesel fuel (`diesel`)

Petroleum diesel for the foreground chipper/loader when used; weigh or reconcile purchase, use and stock. Fuel supply ends before combustion. Keep foreground engine emissions separate and do not double count transport-service fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_energy divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Lubricating oil (`lubricant`)

Petroleum lubricating oil actually consumed in machinery maintenance; use mass, not its displayed calorific value as useful heat. Synthetic oils need their own identity.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_energy divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Tap water (`water`)

Supplied tap water for actual cleaning or dust suppression; record source/provider and kg. Convert volumetric meters with documented water density; raw river water is not this exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Road Transport (`freight`)

Inbound road freight only when the actual vehicle/provider matches the 30-ton diesel-truck identity. Use carried wet payload times loaded distance; document load and empty return in the provider. Other vehicles need separate flow verification.

- Selected flow: Road Transport `9425f2bf-e734-4884-be1b-645473a3e82d`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Actual attributable exchange from cp_transport divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources:

##### Elementary flows

###### Rainwater absorbed by outdoor wood-chip pile (`rain`)

Outdoor storage only: water entering from rainfall, excluding runoff that never enters the pile. Estimate through measured rainfall, exposed area and monitored uptake; do not treat wet-mass gain as wood production.

- Selected flow: Rainwater absorbed by outdoor wood-chip pile
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_storage divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage`
- Sources:

#### Outputs

##### Product flows

###### Wood Chip (`chips`)

One finished bulk dispatch after screening, stock reconciliation and loading. The 1 m3 solid-volume definition is authored here; substantiate its actual amount through cp_reference and retain measured wet/dry mass and bulk volume. Confirm any receiving/background link’s own solid/bulk reference amount, moisture/species, packing and loss boundary through cp_volume_link. Product identity alone does not complete this quantity or link; missing measurement or provider compatibility evidence leaves it pending and blocks use as a complete dataset.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference`
- Sources: `usda-wood-handbook-2021`; `fao-units`

###### Clean unimpregnated bark co-product (`bark`)

Only the separately saleable bark fraction. Record wet/dry mass and destination without reducing physical output by a burden share. Do not adopt mixed hog fuel as pure bark identity.

- Selected flow: Clean unimpregnated bark co-product
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `fao-residue-preparation`

###### Clean wood sawdust fines (`fines`)

Only separated saleable sawdust fines outside the accepted chip specification, not internal returned fines or atmospheric dust; weigh separately.

- Selected flow: Clean wood sawdust fines
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_material divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `fao-residue-preparation`

##### Waste flows

###### Bark (`bark_waste`)

Non-saleable debarking residue sent to treatment; disjoint from the bark co-product row. Record destination, moisture and treatment burden; do not assume energy substitution.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Clean wood screening reject for disposal (`reject_wood`)

Only wood rejected across the foreground boundary after internal reprocessing is exhausted. Exclude saleable fines and matched return-loop mass.

- Selected flow: Clean wood screening reject for disposal
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Non-contaminated mineral soil screening reject (`soil_reject`)

Mineral soil separated from clean incoming wood; record kg and actual treatment. Do not use mining waste or contaminated soil identity.

- Selected flow: Non-contaminated mineral soil screening reject
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Steel scrap, for recycling (`metal_reject`)

Only recovered steel impurity routed for recycling; weigh separately from mineral soil. Other metal species and disposal routes require their own row/identity.

- Selected flow: Steel scrap, for recycling `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Captured clean wood dust for disposal (`captured_dust`)

Dust collector material crossing the treatment boundary, weighed by bin change and stock; not emitted airborne PM. Internally reused captured dust belongs only in the internal ledger.

- Selected flow: Captured clean wood dust for disposal
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-sawmill-pte-2014`

###### Spoiled wood chips removed from storage (`spoiled_wood`)

Separately weigh removed decayed wood. This solid output is distinct from biological dry-matter loss and from screening rejects.

- Selected flow: Spoiled wood chips removed from storage
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Collected wood-chip storage runoff for wastewater treatment (`runoff`)

Collected contaminated storage water delivered to treatment; measure mass and suspended/dissolved load. Actual environmental discharge requires separate receiving-medium/species rows; it cannot be modelled as this treatment export.

- Selected flow: Collected wood-chip storage runoff for wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_storage divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage`
- Sources:

###### Used lubricating oil (`spent_oil`)

Actual oil removed during maintenance; measure separately and attach actual treatment, without combining with water or wood waste.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Airborne particles in the PM2.5 interval from mechanical handling and actual engines; include only emissions escaping controls.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_dust divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust`
- Sources: `epa-sawmill-pte-2014`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Airborne particles above PM2.5 up to PM10; derive only from compatible nested measurements, never add PM10 total again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_dust divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust`
- Sources: `epa-sawmill-pte-2014`

###### particles (> PM10) (`pmover10`)

Airborne particles above PM10 from chips handling/storage; exclude captured material and do not replace with PM10.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_dust divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust`
- Sources: `epa-sawmill-pte-2014`

###### carbon dioxide (fossil) (`co2f`)

Actual petroleum-engine carbon dioxide; retain fossil carbon origin and separate from storage biogenic carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_engine divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine`
- Sources:

###### carbon dioxide (biogenic) (`co2b`)

Biogenic carbon dioxide actually released during storage decay. Measure or use a site-calibrated species-resolved carbon model; LCI retains it regardless of LCIA reporting conventions.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_storage divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage`
- Sources:

###### methane (fossil) (`ch4f`)

Fossil methane from actual petroleum-engine operation; supplier/load-specific emission evidence is required.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_engine divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine`
- Sources:

###### methane (biogenic) (`ch4b`)

Biogenic methane where actual storage conditions and measurements establish release; do not infer it solely from wood dry-mass loss.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_storage divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage`
- Sources:

###### Nitrogen oxides (`nox`)

Engine nitrogen oxides when measurements report NOx with the declared mass convention; do not substitute nitric oxide for the aggregate.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_engine divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine`
- Sources:

###### carbon monoxide (fossil) (`co`)

Fossil carbon monoxide from actual petroleum engines; retain species and origin.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_engine divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine`
- Sources:

###### nitrous oxide (`n2o`)

Nitrous oxide from actual engines if present; report as N2O mass, not nitrogen equivalent.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_engine divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine`
- Sources:

###### sulfur dioxide (`so2`)

Sulfur dioxide from actual engine fuel; do not substitute sulfur oxides aggregate or elemental sulfur.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_engine divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine`
- Sources:

###### water vapour (`vapour`)

Water vapour leaving chips during natural storage conditioning; distinguish evaporated water from lost dry wood.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_storage divided by accepted dispatch solid volume V_s; retain the unallocated physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage`
- Sources:

## 7. Allocation and Co-product Handling

Keep two linked accounts: an unallocated wood/water/carbon physical process ledger, and an environmental-burden allocation ledger. Directly attribute exclusive receiving, rechipping, screening and storage burdens wherever measurable; subdivide before joint allocation. Co-products already separated at an upstream sawmill must arrive with that stage’s inherited burden. Do not reassign upstream lumber drying to chips separated before drying; do retain any actual drying of the received offcut. [corrim-northern-lumber-2025, §3.2.6, Northern US sawmill case only.]

For a causally suitable joint wood-material step, allocate only shared burdens by measured oven-dry useful output mass: a_i=d_i/sum(d_j). Use outputs of that same step, excluding waste and internal loops. The cohort’s shares sum to one; all physical output masses stay unchanged and finished reference remains 1 m3. This is this PCR’s dry-mass implementation, not a universal surveyed yield. If outputs have materially different functions or causal basis, require explicit review and contemporaneous economic sensitivity before dataset use; no universal price or allocation share.

Dedicated chipping assigns its dedicated burdens to the produced chips, with explicit jointly saleable bark/fine treatment. Imported residue never becomes a free input by assumption. Waste receives actual handling/treatment burden without a saleable-output share by default. Partition bark/fines by actual sale, return and waste destinations without overlap. Internal energy use requires a distinct verified energy unit and transfer ledger; excluded foreground boiler operation cannot be hidden as a credit. No avoided-fuel, avoided-disposal or substitution credit is allowed in this attributional gate dataset. [usda-wood-handbook-2021; corrim-northern-lumber-2025.]

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | preparation | accepted dispatch | measurement and traceable record | lot; species; specification; moisture; wet mass; tare; accepted solid volume V_s; bulk volume V_b; particle density; packing; storage age; provider reference amount/solid-bulk definition; documented moisture/species/packing and included loss gate; compatibility evidence locator | Weigh net accepted bulk product on calibrated scales. Sample representative particles by species/size and moisture at dispatch; measure solid displacement volume with absorption correction or traceable same-state density and derive V_s. Measure calibrated vessel/truck bulk volume with recorded settling, without imposing generic solid/bulk factors. Check cp_volume_link independently; measured foreground solid volume is not proof of the provider reference convention. | kg; m3 | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_material` | preparation | each wood or water exchange | measurement and traceable record | source; gate; species; producer route/allocation; upstream prior drying; wet/dry mass; moisture basis; bark; impurity; receipt; stock; destination; V_s; V_b; provider reference amount/solid-bulk definition; documented moisture/species/packing and included loss gate; compatibility evidence locator | Weigh streams separately and pair batch moisture samples. Oven-dry representative wood samples using the handbook Ch.13 method to stable mass, retaining temperature, interval, extractive bias and uncertainty. Supplier moisture meters require species/temperature calibration. Treat sampled moisture as material evidence, not a universal range. Check cp_volume_link independently; measured foreground solid volume is not proof of the provider reference convention. | kg; m3 | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_energy` | preparation | each energy/material input | measurement and traceable record | stage meter start/end; voltage; kWh; diesel receipts/use/stock/density; lubricant mass; hours; reprocessing | Use stage submeters and documented reconciliation; separate carrier and maintenance oil; include reprocessing and dust collection consumption. | MJ; kg | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_transport` | preparation | inbound haulage | measurement and traceable record | truck class; provider; origin/gate; wet payload; loaded km; load factor; empty return; duplicate provider boundary | Use dispatch weights and route records; check actual 30-ton diesel service. Match each upstream delivery gate to haulage start to avoid missing or duplicate legs. | kg*km | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_recirculation` | preparation | oversize and fines returns | measurement and traceable record | transfer id; stage; pass; cohort; wet/dry mass; moisture; return origin/destination; meter energy | Weigh oversize returns and fine returns separately each pass. Pair physical endpoints at identical quantities before burden attribution; track accumulated processing energy without treating circulation as new yield. | kg | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_waste` | preparation | each separate residue | measurement and traceable record | stream; material; sale/waste status; destination; wet/dry mass; moisture; receiver/treatment; bin and stock; recovery route | Weigh bark waste, wood screening reject, mineral soil, steel, captured dust, spoiled wood and used oil separately; retain receiver and treatment evidence. Add a specific row for any additional actual material. | kg | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_storage` | preparation | water and biological storage losses | measurement and traceable record | cohort; opening/closing wet/dry stock; receipts/dispatch; residence; temperature; cover; rain uptake; evaporated water; runoff; dry removal; C content; gas species; measurement uncertainty | Measure cohort stock, moisture and losses repeatedly over actual residence. Meter collected runoff and rain uptake. Measure gases or calibrate a species-specific carbon model with real monitoring. Separate biological loss, wood dust export and water change; unexplained deficit is a data gap, never assigned wholly to CO2. | kg | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_dust` | preparation | each nonoverlapping particle fraction | measurement and traceable record | source stage; operating hours; handling mass; PMtotal; PM10; PM2.5; sampling method; control; capture; escape; blank; size definition | Use compatible actual emissions measurements or site-specific validated factors matched to stage/control. Reconcile captured solids. EPA PTE table is a scope and size-definition check, not actual emission data and not boiler evidence. | kg | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_engine` | preparation | each engine gas | measurement and traceable record | fuel identity; grade; fossil/biogenic fraction; engine type; load/hours; measured burn; C/N/S; species-resolved measured emissions or supplier factor; control; unit | Use actual engine test/monitoring evidence or applicable supplier factors with their units and load conditions; multiply by measured activity. Retain uncertainty; missing species is a gap, not zero. Diesel row here is petroleum-only; any blend needs separated identity and carbon origin. | kg | Each lot or metering interval; storage repeated over residence | Declared representative operating period, including seasonal moisture variation; no invented minimum duration | One declared site and matched cohorts/routes | per reference flow | Calibration; raw records; matched stock; sampling representativeness; uncertainty; supplier/test boundaries |
| `cp_volume_link` | preparation | Wood Chip quantity and provider-link compatibility | provider reference documentation and matched measurement | supplier/background Process id and version; reference amount A_provider and unit; solid/bulk definition; definition locator; species/mix; moisture value and basis; chip size; packing/settling; rho_ws; V_s; V_b; k; measurement cohort and calibration; uncertainty; supplier/receipt/dispatch gates; included losses and storage; evidence locator; compatibility decision and missing evidence | Read the provider reference-exchange documentation and obtain a traceable supplier declaration if ambiguous. Compare it independently with receipt and output solid-volume definitions. Measure packing/density on the same batch or use representative traceable data with documented species, moisture, size, packing and state applicability. Match delivery and loss gates without double counting; moisture/species changes require an evidenced material-state reconciliation. Database secondary-property coefficients and FAO average tables do not establish a matched conversion. If provider definition, conversion or boundary evidence is missing, record pending, withhold the completed link and mark the affected dataset incomplete. | m3; kg | Each proposed provider link and batch; recheck on state/provider change | Declared measured cohort or documented representative coverage | Supplier gate, receipt, accepted output and each proposed background interface | per reference flow | Provider reference locator; calibrated matched measurements; representativeness; uncertainty; nonduplicated loss reconciliation; explicit pending gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_solid | all inventory rows | x_i=X_i/V_s; X_i is the attributable exchange quantity for the matched production cohort and V_s its accepted solid-volume dispatch. Reference chips output equals 1 m3. Divide sums by the sum of matched V_s; do not average batch ratios. | X_i; V_s; cp_reference | Exchange per reference flow |  |
| wood_moisture | cp_material; cp_reference | w=(m_w-m_d)/m_w; u=(m_w-m_d)/m_d; m_d=m_w*(1-w)=m_w/(1+u). Convert measured percentages to fractions first. | m_w; m_d; cp_material | Wet/dry wood and water masses | usda-wood-handbook-2021; fao-units |
| solid_bulk | cp_reference | V_s=m_w/rho_ws; k=V_s/V_b. Use same-state measured particle density and retain uncertainty; density must exclude interparticle voids. | m_w; rho_ws; V_b; cp_reference | Solid and bulk volumes kept distinct | usda-wood-handbook-2021; fao-units |
| particle_intervals | pm25; pmcoarse; pmover10 | PMfine=PM2.5; PMcoarse=PM10-PM2.5; PMlarge=PMtotal-PM10. All measurements must cover the same source, time, aerosol method and control. Negative differences are inconsistent evidence; neither nested totals nor captured wood mass are added to emitted intervals. | cp_dust | Three disjoint airborne particle quantities | epa-sawmill-pte-2014 |
| storage_balance | cp_storage | Opening dry stock + dry receipts = closing dry stock + dry dispatch + dry solid rejects + dry wood dust leaving + biological dry loss + unresolved residual. Reconcile water separately, including rain/suppression inputs, runoff, retained moisture and vapour. Compare like moisture/volume states; volume settling alone is not wood loss. | cp_material; cp_storage; cp_waste; cp_dust | Unallocated wood and water reconciliation | usda-wood-handbook-2021 |
| carbon_balance | cp_storage; cp_engine | Keep biogenic and fossil carbon accounts separate. Measured dry mass times measured carbon fraction defines material carbon; reconcile carbon in product, stock, residues, dissolved/suspended carbon and gases. C in CO2=12/44 times CO2 mass; C in CH4=12/16 times CH4 mass. Missing gas partition or carbon fate remains explicit, not a forced CO2 closure or carbon-storage credit. | cp_storage; cp_engine | Physical carbon closure and explicit gaps |  |
| joint_burdens | joint wood step | a_i=d_i/sum(d_j); B_i=a_i*B_joint+B_exclusive,i. d_j is measured oven-dry useful output of that same step; apply shares only in the burden account, not to physical exchanges. | cp_material; joint-step data | Separate allocated burden account | corrim-northern-lumber-2025; usda-wood-handbook-2021 |
| provider_volume_link | incoming_chips; chips | For a matched provider gate/state, V_b,provider=V_s,link/k_provider, where k_provider=V_s,provider/V_b,provider is the evidenced solid/bulk packing conversion applicable to that provider state. For a bulk-m3 background, n_provider=V_b,provider/A_provider; for a solid-m3 background, n_provider=V_s,link/A_provider. A_provider is the provider’s documented reference amount in its stated volume convention. V_s,link is the physical quantity at the matched provider gate, not automatically receipt or final dispatch volume; reconcile actual losses and stocks between gates independently. Apply these relations only after moisture/species/packing and loss-boundary compatibility is established; any state adjustment needs its own measured evidence. Unknown definition, k_provider or required adjustment gives pending compatibility, not a numerical demand, generic fallback or completed link. | cp_volume_link; cp_reference; cp_material; cp_storage | Provider-reference demand with verified compatibility, or explicit pending |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | One actual flow, compatible public identity, property, unit and medium; unresolved UUID stays blank. Identity does not establish a representative upstream provider. | Direct identity and provider checks |
| measurement_quality | cp_reference; cp_material | Same-state solid/bulk volume and wet/dry mass; separate bark/impurity; calibrated scales and representative sampling | cp_reference; cp_material |
| balance_quality | preparation | Stage physical wood/water/carbon ledger closes within stated measurement uncertainty; unresolved losses remain disclosed. Internal transfer endpoints match before allocation. | cp_recirculation; cp_storage |
| representativeness | preparation | Route, species, season, actual control, engine and provider coverage; no regional survey or PTE factor extrapolated as global default | cp_energy; cp_dust; cp_engine |
| completeness | preparation | Absent equipment may be documented not applicable; unknown emissions/UUID/provider are gaps, not zero. An extra actual chemical/material/emission requires its own atomic row and lookup. | Route inspection and signed balance records |
| quantity_background_compatibility | incoming_chips; chips; Wood Chip links | Separately verify identity, PCR solid-volume quantity and provider-reference compatibility. Require cp_volume_link evidence for solid/bulk, species/moisture/packing, conversion and loss gates. A known identity plus generic Volume/m3 never resolves these quantities. Missing evidence remains pending and blocks completed linkage/use as a complete dataset. | cp_reference; cp_material; cp_volume_link; provider definition and measurement locators |

## 9. Validation Rules

Validate one accepted final chips output of 1 m3 and a matching cohort denominator in every protocol and inventory row. Verify all required qualifiers, upstream origin burden, delivery gates and provider coverage. Compare solid/bulk volume and wet/dry mass independently; do not accept an unsupported packing factor or density. Check each return pair, bark sale/waste split, fines sale/return split, stock and storage balances before burden allocation. Check allocation shares sum to one for each actual joint step and that physical outputs were not scaled.

For incoming_chips, chips and each Wood Chip supplier/background link, validate three distinct statuses: known product/property-unit identity, measured PCR solid-volume quantity, and provider-reference compatibility. Inspect provider reference amount/definition and its evidence locator, then independently verify solid/bulk, moisture/species/packing, same-state conversion and included transport/handling/storage losses. If the background is per bulk m3, express demand through the evidenced provider-state k_provider and A_provider in provider_volume_link, not a copied solid-m3 quantity. Do not substitute database secondary-property coefficients or FAO average values for matching measurement evidence. A missing provider volume definition or applicable conversion/state/loss evidence keeps quantity/background compatibility pending and the affected dataset incomplete; block a completed link and complete-dataset use while retaining the verified Wood Chip identity. Builder checks passing does not resolve this pending state.

Check elemental mass/species/medium and fossil/biogenic origin, three disjoint particle intervals, captured dust versus emitted dust, and water evaporation versus dry-matter loss. Retain biogenic CO2 in LCI. A missing or incompatible identity, unexplained balance, unsupported amount, direct wastewater discharge without species/medium rows, or foreground thermal drying/boiler makes the affected dataset incomplete and requires resolution before use as a complete dataset. Builder measurement checks verify declared denominator relationships; they do not establish scientific approval, measured yields, provider validity or all balance equations.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_production_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared bulk clean chips gate supply for later material/fuel modelling with its own downstream unit |
| excluded_use | Pellet or board manufacture, delivered useful heat, zero-burden residue claim, avoided fuel, unqualified comparative performance |
| required_metadata | Reference qualifiers; source gate; provider; route; physical balances; allocation account; collection coverage and units |
| required_quality_disclosure | Unresolved flow/provider/species; pending quantity/background compatibility with missing provider definition or conversion evidence; missing losses; uncertainty; seasonal coverage; source limitations; gate exclusions |
| update_trigger | Changed species, origin process allocation, feedstock treatment, preparation/drying, moisture/packing, storage/control, transport or flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory (2021), Wood handbook—wood as an engineering material, FPL-GTR-282; Ch.4 pp.4-1, 4-11; Ch.13 pp.13-1–13-2. [GovInfo](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Moisture/density-state definitions and gravimetric collection; no density default |
| `corrim-northern-lumber-2025` | literature | CORRIM, Life Cycle Assessment of Softwood Lumber Production—Northern Region, July 22 2025 revision; §§3.2.4, 3.2.6, pp.14,16. [CORRIM](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf) | Northern US 2023 sawmill case of physical accounting and partitioned environmental load. No global yield, species density or allocation share |
| `epa-sawmill-pte-2014` | official_guidance | EPA Region 10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (May 8 2014), cover and activity table/notes. [EPA](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | Mechanical handling/control scope and nested filterable particle definitions only; regulatory maximum PTE is not actual LCA. Boilers excluded |
| `fao-units` | official_guidance | FAO, Unified Bioenergy Terminology (UBET), §5.1.1 and §5.1.3. [FAO](https://www.fao.org/4/j4504e/j4504e08.htm) | Wet/dry moisture basis and distinct solid/bulk measurement concepts, not the tabulated generic conversion values or fuel performance |
| `fao-residue-preparation` | official_guidance | FAO, Energy conservation in the mechanical forest industries, §6.2 and §6.4. [FAO](https://www.fao.org/4/T0269E/t0269e08.htm) | Origin/residue distinctions and preparation/screening/storage route; no industry numeric yield, fuel-credit or combustion factor |
