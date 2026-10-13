---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-sawn-or-chipped-lengthwise-sliced-or-peeled-of-a-thickness-exceeding-6-mm-of-non-c-2b701f10
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Indirect-steam kiln-dried planed temperate non-coniferous sawnwood, thickness exceeding 6 mm

## 1. Scope and Applicability

This PCR directly supports untreated temperate non-coniferous solid wood, longitudinally sawn from logs or received as rough green sawnwood, indirectly steam-heated in a kiln, straight-planed and dispatched at an actual finished thickness exceeding 6 mm. The unique terminal state is kiln-dried and planed. A mass declared unit is used for manufacturing; no structural or end-use functional equivalence or service life is established.

Tropical species, coniferous wood, green or air-dried terminal products, rough unplaned terminal products, sliced/peeled wood, veneer ≤6 mm, sleepers, continuous profiles, impregnated/coated/glued/laminated or engineered wood are excluded. Air predrying, direct-fired, dehumidification, vacuum and solar kilns need separately reviewed adaptations and are not represented by this inventory. Temperate versus tropical is declared from botanical identity and source growing region/ecozone, not inferred from the trade word “hardwood”; unknown provenance requires review. Do not pool the two groups.

Green means fresh/undried wood with measured initial moisture. Air-dried means ambient-air moisture reduction and depends on climate, season, storage and species; it is not a fixed moisture target. Kiln-dried means a documented controlled drying operation, not a universal final percentage. Only the last state has the terminal reference here. A green intermediate UUID is not a green terminal dataset definition. No air-dried identity/reference has been established. Never assign this kiln UUID to either state. [usda-wood-handbook-2021 Ch.4/13; corrim-hardwood-2020 §3.3–4.4.]

The 2020 CORRIM report describes NE/NC US mills in production year 2017. It supports the process decomposition and a regional mass-allocation case, not tropical data or universal species density, moisture, yield, kiln energy or emission factors. Coniferous resin/terpene surveys cannot be relabelled as hardwood measurements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-sawn-or-chipped-lengthwise-sliced-or-peeled-of-a-thickness-exceeding-6-mm-of-non-c-2b701f10 |
| classification_refs | CPC 3.0 31102; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Untreated kiln-dried straight-planed temperate non-coniferous longitudinally sawn solid wood; actual thickness >6 mm |
| excluded_products | Tropical or coniferous wood; green/air-dried or unplaned final products; sliced/peeled products; veneer ≤6 mm; sleepers; profiles; treated/glued/engineered wood; alternative drying routes |
| representative_product | Accepted kiln-dried planed temperate hardwood at dispatch moisture, mill gate |
| production_route | Log receiving/debarking/sawing → rough green handoff → indirect steam kiln → rough kiln handoff → straight planing/grading/packing; boiler conditional |
| market_state | Kiln-dried, straight-planed, untreated; moisture and grade declared for the actual product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply >6-mm kiln-dried planed temperate non-coniferous sawnwood for further manufacture |
| How much | 1 kg accepted net dispatch mass excluding packaging |
| How well | Declared botanical species, origin, grade, measured geometry and dispatch moisture; kiln-dried and planed |
| How long or cycle | One recorded production accounting period; no end-use lifetime |
| reference_flow_link | `finished_kiln_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sawnwood, hardwood `e58cb409-74f7-4f0b-bfc0-9261c27c14be` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species and mix; temperate growing region/ecozone and forestry origin; actual thickness >6 mm, width, length, grade and rejects; unimpregnated/unglued state; indirect steam kiln schedule; planed state; dispatch dry-basis moisture and sample method; calibrated net wet mass excluding packaging; matched-state solid-volume/density conversion if used; site, period, supplier gate and allocation |

Declare all required qualifiers in each concrete dataset. The generic hardwood identity provides neither species-specific measurements nor a moisture percentage. This one object and its uniquely linked output do not cover green/air-dried dispatch.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated accepted net dispatch wet mass from cp_reference, excluding packaging. Each dataset fixes one species/grade/moisture/geometry scope. |
| `moisture_basis` | wood and wood residues | Explicit dry or wet water fraction | dimensionless fractions | u=(m_wet-m_od)/m_od; w=(m_wet-m_od)/m_wet; w=u/(1+u); u=w/(1-w); m_od=m_wet/(1+u)=m_wet×(1-w). Convert percentages by /100; m_od>0, u≥0, 0≤w<1. Measure each species/state separately, including bark and fuels. [usda-wood-handbook-2021 Ch.4 eqs.4-1/4-2; corrim-hardwood-2020 §3.3; algebraic conversion.] |
| `solid_volume` | wood reported in volume | Matched mass and solid volume | kg; m3 | m_wet=rho_u×V_u, with species, moisture and geometry matched. Basic density is oven-dry mass/green solid volume, unlike oven-dry density or dispatch wet density. Measure dimensions and density; keep drying shrinkage and planing loss separate. Nominal board-foot/log scales and stacked/loose volume cannot substitute for solid volume without a measured conversion. No universal hardwood density. [usda-wood-handbook-2021 Ch.4 Table4-5; corrim-hardwood-2020 Tables2–4.] |
| `carrier_units` | electricity, steam heat and fuels | Verified reference property | MJ; kg; m3 | Retain each verified reference property/unit. Electricity kWh×3.6 gives MJ. Steam heat requires the separately documented heat boundary and condensate convention below: equal MJ units or a database Gross calorific value label do not equate fuel HHV, total boiler production and receiver net useful heat. Fuel mass/volume/heat conversions require actual composition, density, moisture and a stated measured LHV/HHV basis. Do not assume biomass heating value, gas reference conditions or boiler efficiency. |
| `steam_heat_basis` | drying_heat; heat_out | Documented transferred heat boundary | MJ | The chosen steam flow confirms an industrial-steam identity and Gross calorific value/MJ reference only; its original does not define receiver net useful heat or condensate reference enthalpy. Before using its UUID with an amount/background dataset, obtain supplier or matched-background documentation defining the same delivery point, included losses, steam/condensate streams and enthalpy reference as this row. Confirm on site using the piping/meter diagram, calibrated heat-meter definition or measured mass/pressure/temperature/steam quality and traceable steam-property calculation; record return fraction, condensate temperature/pressure, enthalpy datum and discharged/leaking streams. Retain the boundary comparison and any measured conversion/loss reconciliation. A label or common MJ unit is not conversion evidence. Unknown compatibility remains pending review: retain the site record, but do not treat the UUID–quantity/background binding as established or the dataset as complete. |
| `gas_volume_basis` | heat_gas | Volume at documented gas conditions | m3 | Use gaseous pipeline natural gas on its verified Volume/m3 reference; record m3 per 1 kg terminal reference without forcing kg. Match supplier/meter and background reference temperature, absolute pressure, dry/wet basis and composition. If conversion is needed, use a documented meter/supplier correction with actual compressibility/composition and conditions; disclose its inputs and uncertainty. A normal/standard m3 state, pure methane composition, generic density/heating value or a Mass meanValue of 1.0 is not established by the original. Unknown volume/background compatibility remains unresolved for the concrete dataset. |
| nox_quantity_basis | yard_nox; heat_nox | Mass; verified quantity convention | kg | Before calculation, document the actual measured or factor-derived NOx quantity convention, chemical/species scope, concentration and gas-state basis and its independently verified relation to the selected LCI flow and assessment method. Native Mass/kg does not establish an NO2-equivalent convention. Keep actual NO/NO2 species quantities and documented conversion/speciation evidence when an equivalent basis is used; no universal conversion or assumed split. Reconcile any aggregate with separately modelled NO/NO2 and keep N2O separately, without counting the same release twice. Missing convention/speciation or LCI/assessment compatibility leaves the raw result and its normalized exchange pending review; never silently label a mass as NO2-equivalent or invent zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered temperate hardwood sawlogs with measured bark and moisture, or declared purchased rough green hardwood at supplier gate |
| starting_condition_role | Foreground manufacturing starting gate; upstream production separately linked |
| product_classification_scope | Narrower subset of CPC 31102; excludes tropical, non-kiln/air-predried and sliced/peeled routes |
| recursive_input_rule | Purchased green lumber carries its supplier production and transport; record exact state and stop local recursion at verified supplier gate. Internal handoffs cancel once and are never new purchases. |
| upstream_dataset_requirement | Link species/origin-matched forest management, harvesting, land-use change/carbon and delivery transport plus utility/fuel/material production. Delivered logs are not burden-free; no cradle-to-gate claim if upstream is missing. |
| disclosure | Site/period, species/provenance, starting gate, supplier coverage, bark, moisture, kiln/control/heat technology, allocated versus physical records and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | mill manufacture | Include receiving, debarking, sawing, internal transfers, kiln fans/controls/steam, drying rejects, planing/grading, packing, wastewater and actual emissions. On-site boiler is conditional; purchased heat has upstream coverage and no duplicated on-site emissions. No use/end-of-life or employee commute; disclose capital scope. No automatic small-mass cut-off for hazardous flows. | corrim-hardwood-2020 |
| `boundary_screening` | actual site | Screen actual process diagram, supplier SDS, permit/stack speciation and wastewater destinations. Add each actual missing chemical, waste or elementary species as one atomic exchange before a complete site dataset claim. Do not force all conditional example pollutants to occur or treat missing data as zero. | corrim-hardwood-2020; epa-wood-boiler-2022 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sawing | Receiving, debarking and sawing | conditional | When converting delivered sawlogs; purchased green supplier boundary remains linked | Rough green intermediate and physical co-products | per 1 kg reference flow |
| processing | Kiln drying, straight planing, grading and packing | required | Green feedstock; no air predrying represented; stages separately metered | Aggregated terminal unit; unique finished output | per 1 kg reference flow |
| heat | On-site indirect steam generation | conditional | On-site boiler; omit if heat purchased with verified upstream boundary | Useful steam heat, fuels and emissions | per 1 kg reference flow |

Physical map: sawing rough_green_out → processing drying_green_in; purchased_green_in enters additionally; heat_out → processing drying_heat. Rough-kiln handoffs inside the aggregate processing unit remain in cp_material stage records, not a separate exported exchange. Drying and planing have separate meters, losses and allocation ledgers. Record exactly equal quantities and states on both ends of every internal handoff. Final finished_kiln_product is the sole reference output. Branch sold versus internally burned residues explicitly; final packaging is excluded from wood net mass. Drying does not create dry wood mass; moisture loss and shrinkage differ.

All cards use the same terminal 1 kg denominator. Physical exchange totals and burden allocation are separate ledgers; the cards describe physical exchanges. Individual air cards are conditional screening targets, not measured hardwood emission factors. Report outdoor-air unspecified subclass only when a more specific compartment cannot be established; do not silently remap measured high-stack/urban/indoor releases.

### Process: Receiving and sawing (`sawing`)

#### Inputs

##### Product flows

###### Non-coniferous sawlogs with bark, delivered to mill (`sawlogs_in`)

Required delivered sawlogs; record species, bark fraction, net wet mass and moisture.

- Selected flow: Non-coniferous sawlogs with bark, delivered to mill
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Alternating current (`sawing_electricity`)

Only customer-side grid-average alternating current below 1 kV; other supply requires an exact separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Diesel fuel (`yard_diesel`)

Only if yard equipment burns diesel within the foreground; exclude contracted transport already in delivered-log background.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Petroleum lubricating oil for sawmill machinery (`sawing_oil`)

Only petroleum lubricating oil actually used by sawmill machinery; measure additions and retained stock.

- Selected flow: Petroleum lubricating oil for sawmill machinery
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_lubricant`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Water, tap (`yard_tap_water`)

Only purchased tap water used in the log yard; freshwater abstraction is a separate upstream exchange, not tap water.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Gasoline (`yard_gasoline`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`
- Sources: `corrim-hardwood-2020`

###### Propane forklift fuel (`yard_propane`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Propane forklift fuel
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`
- Sources: `corrim-hardwood-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Green non-coniferous sawnwood, rough-sawn (`rough_green_out`)

Unpreserved non-coniferous rough green sawnwood exceeding 6 mm transferred to processing; record the unallocated physical handoff quantity and moisture state, matching drying_green_in exactly at that handoff.

- Selected flow: Green non-coniferous sawnwood, rough-sawn `e882cc86-ffc0-4470-8534-84fef54f20a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Untreated non-coniferous wood chips, mill coproduct (`chips_coproduct`)

Record this distinct recoverable coproduct at its actual exit, including sale and separately identified internal transfer; no duplicate waste output.

- Selected flow: Untreated non-coniferous wood chips, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Non-coniferous bark, mill coproduct (`bark_coproduct`)

Record this distinct recoverable coproduct at its actual exit, including sale and separately identified internal transfer; no duplicate waste output.

- Selected flow: Non-coniferous bark, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Untreated non-coniferous sawdust, mill coproduct (`sawdust_coproduct`)

Record this distinct recoverable coproduct at its actual exit, including sale and separately identified internal transfer; no duplicate waste output.

- Selected flow: Untreated non-coniferous sawdust, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### Waste flows

###### Bark (`bark_discard`)

Only bark discarded as waste; exclude sold bark and separately tracked boiler fuel.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### sawdust waste (`sawdust_discard`)

Only untreated sawdust discarded as waste; exclude marketed or internally burned sawdust.

This selected untreated sawdust-waste identity is restricted to a documented compatible external combustion or material-recovery receiver and matching untreated waste state. Retain whole measured waste mass, moisture/composition, actual receiver and treatment/provider boundary. Other or unverified routes and treated/contaminated material require a separately verified compatible identity or a precise UUID gap; preserve every actual physical waste exchange without assumed treatment, internal-fuel substitution or recovery credit.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Sawmill log-yard runoff sent to wastewater treatment (`yard_runoff`)

Only collected log-yard runoff crossing to treatment; no wastewater lumping with kiln condensate.

- Selected flow: Sawmill log-yard runoff sent to wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### Elementary flows

###### particles (PM2.5) (`sawing_pm25`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### particles (PM2.5 - PM10) (`sawing_pm25_10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### particles (> PM10) (`sawing_pm_gt10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### carbon dioxide (fossil) (`yard_co2_fossil`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### carbon monoxide (fossil) (`yard_co_fossil`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### methane (fossil) (`yard_ch4_fossil`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### nitrous oxide (`yard_n2o`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### Nitrogen oxides (`yard_nox`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

###### sulfur dioxide (`yard_so2`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `corrim-hardwood-2020`

### Process: Kiln drying, planing and dispatch (`processing`)

#### Inputs

##### Product flows

###### Green non-coniferous sawnwood, rough-sawn (`drying_green_in`)

Same-batch rough green non-coniferous sawnwood from rough_green_out: the unallocated physical amount on both sides is equal at the same handoff and moisture basis. Subsequent drying changes belong inside processing; no allocation share changes this transfer.

- Selected flow: Green non-coniferous sawnwood, rough-sawn `e882cc86-ffc0-4470-8534-84fef54f20a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_processing`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Alternating current (`drying_electricity`)

Only customer-side below-1-kV grid electricity for fans and indirect-steam kiln controls; separately meter this stage from planing/packing.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_processing`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Process heat from steam (`drying_heat`)

Only process steam heat for indirect kiln heating, with supplier/matched-background heat boundary and condensate convention demonstrably equal to the row quantity. The original UUID record does not confirm net useful delivery. Collect and compare steam input, condensate return and other discharge/line-loss boundaries on site; purchased and internally generated heat remain separately traceable. For an internal handoff, heat_out and drying_heat are identical only at the same verified boundary and convention. Unknown compatibility is a pending measurement/background gap; do not equate fuel HHV, total boiler output and receiver net useful heat.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: After documented supplier/background heat-basis compatibility is established, use the measured unallocated heat total at the common delivery boundary divided once by accepted terminal net wet kg. Keep heat_out and drying_heat equal at that boundary; unknown compatibility is pending review, not a confirmed UUID–amount binding. Retain original quantities and losses separately; no co-product-share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_processing`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Alternating current (`finishing_electricity`)

Only below-1-kV grid electricity for trimming, grading, straight planing and packing.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_processing`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Polyethylene film (`film_in`)

Only polyethylene film actually included in dispatch packaging; exclude from net reference-product mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Polypropylene packaging strap (`strap_in`)

Only polypropylene strapping actually included in dispatch packaging; do not substitute PP resin.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Green non-coniferous sawnwood, rough-sawn (`purchased_green_in`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Green non-coniferous sawnwood, rough-sawn `e882cc86-ffc0-4470-8534-84fef54f20a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_processing`
- Sources: `corrim-hardwood-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sawnwood, hardwood (`finished_kiln_product`)

Accepted untreated kiln-dried straight-planed temperate non-coniferous sawnwood, actual finished thickness >6 mm, at mill gate. This is the unique terminal product; no tropical, green or air-dried substitution.

- Selected flow: Sawnwood, hardwood `e58cb409-74f7-4f0b-bfc0-9261c27c14be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Untreated non-coniferous planer shavings, mill coproduct (`shavings_coproduct`)

Only recoverable untreated planer shavings from this finishing step; upstream bark and chips receive no finishing burden.

- Selected flow: Untreated non-coniferous planer shavings, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_processing`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Untreated non-coniferous sawdust, mill coproduct (`finishing_sawdust`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Untreated non-coniferous sawdust, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_processing`
- Sources: `corrim-hardwood-2020`

##### Waste flows

###### Offcut (`offcut_discard`)

Only untreated wood offcuts discarded as waste; resale and on-site fuel are distinct transfers.

Only actual non-agglomerated, untreated and unglued coarse wood offcuts belong to this row; keep moisture and recipient records, and verify their physical state and receiver/provider compatibility before treatment linkage. Do not substitute agglomerated fuel or captured powder.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_processing`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### Elementary flows

###### water vapour (`drying_water_vapour`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### methanol (`drying_methanol`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### formaldehyde (`drying_formaldehyde`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### phenol (`drying_phenol`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### acetaldehyde (`drying_acetaldehyde`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### propanal (`drying_propanal`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### acrolein (`drying_acrolein`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### particles (PM2.5) (`drying_pm25`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### particles (PM2.5 - PM10) (`drying_pm25_10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### particles (> PM10) (`drying_pm_gt10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### particles (PM2.5) (`finishing_pm25`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### particles (PM2.5 - PM10) (`finishing_pm25_10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

###### particles (> PM10) (`finishing_pm_gt10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_processing`
- Sources: `corrim-hardwood-2020`

### Process: Steam generation (`heat`)

#### Inputs

##### Product flows

###### Untreated non-coniferous bark fuel (`heat_bark_fuel`)

Only this separately weighed untreated non-coniferous residue when actually burned; record internal origin or external supplier, moisture and calorific basis.

- Selected flow: Untreated non-coniferous bark fuel
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Untreated non-coniferous sawdust fuel (`heat_sawdust_fuel`)

Only this separately weighed untreated non-coniferous residue when actually burned; record internal origin or external supplier, moisture and calorific basis.

- Selected flow: Untreated non-coniferous sawdust fuel
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Untreated non-coniferous wood-chip fuel (`heat_chips_fuel`)

Only this separately weighed untreated non-coniferous residue when actually burned; record internal origin or external supplier, moisture and calorific basis.

- Selected flow: Untreated non-coniferous wood-chip fuel
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### natural gas in the gaseous state (`heat_gas`)

Only actual gaseous natural gas delivered by pipeline to the kiln boiler, matching the directly read consumption-stage gas identity. Verify supplier composition and delivery condition; record metered volume with reference temperature, absolute pressure and dry/wet basis, matched to the linked background dataset. The original does not specify these numerical gas conditions or a usable density; unresolved reference-state compatibility must be disclosed before a complete dataset claim.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Use the actual metered gas volume at its documented supplier/background-matched conditions, divided once by accepted terminal net wet kg; retain m3 as numerator. Any pressure/temperature/dryness correction needs the recorded supplier/meter method and actual inputs. Unknown volume/background compatibility is pending review; no automatic kg or fuel-energy conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Diesel fuel (`heat_diesel`)

Only actual boiler auxiliary diesel; exclude yard diesel and imported heat fuel already included upstream.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Alternating current (`heat_electricity`)

Only below-1-kV grid electricity for boiler auxiliaries and actual pollution controls.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Water, tap (`heat_water`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_heat`
- Sources: `corrim-hardwood-2020`

###### Untreated non-coniferous planer shavings fuel (`heat_shavings_fuel`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Untreated non-coniferous planer shavings fuel
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_heat`
- Sources: `corrim-hardwood-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Process heat from steam (`heat_out`)

Only process steam heat for indirect kiln heating, with supplier/matched-background heat boundary and condensate convention demonstrably equal to the row quantity. The original UUID record does not confirm net useful delivery. Collect and compare steam input, condensate return and other discharge/line-loss boundaries on site; purchased and internally generated heat remain separately traceable. For an internal handoff, heat_out and drying_heat are identical only at the same verified boundary and convention. Unknown compatibility is a pending measurement/background gap; do not equate fuel HHV, total boiler output and receiver net useful heat.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: After documented supplier/background heat-basis compatibility is established, use the measured unallocated heat total at the common delivery boundary divided once by accepted terminal net wet kg. Keep heat_out and drying_heat equal at that boundary; unknown compatibility is pending review, not a confirmed UUID–amount binding. Retain original quantities and losses separately; no co-product-share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### Waste flows

###### Bottom ash from untreated wood combustion (`heat_bottom_ash`)

Only this distinct collected wood-combustion ash stream; measure its own mass, unburned carbon and treatment destination.

- Selected flow: Bottom ash from untreated wood combustion
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Fly ash from untreated wood combustion (`heat_fly_ash`)

Only this distinct collected wood-combustion ash stream; measure its own mass, unburned carbon and treatment destination.

- Selected flow: Fly ash from untreated wood combustion
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_heat`
- Sources: `corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### Boiler blowdown sent to wastewater treatment (`heat_blowdown`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: Boiler blowdown sent to wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_heat`
- Sources: `corrim-hardwood-2020`

##### Elementary flows

###### carbon dioxide (biogenic) (`heat_co2_bio`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### carbon monoxide (biogenic) (`heat_co_bio`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### methane (biogenic) (`heat_ch4_bio`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### carbon dioxide (fossil) (`heat_co2_fossil`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### carbon monoxide (fossil) (`heat_co_fossil`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### methane (fossil) (`heat_ch4_fossil`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### nitrous oxide (`heat_n2o`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### Nitrogen oxides (`heat_nox`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### sulfur dioxide (`heat_so2`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### particles (PM2.5) (`heat_pm25`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### particles (PM2.5 - PM10) (`heat_pm25_10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### particles (> PM10) (`heat_pm_gt10`)

Include this specific outdoor-air emission when demonstrated by site measurements or an applicable species/source/fuel/control-specific model; no reported value means unknown, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### formaldehyde (`heat_formaldehyde`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### methanol (`heat_methanol`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### phenol (`heat_phenol`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### acetaldehyde (`heat_acetaldehyde`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### propanal (`heat_propanal`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### acrolein (`heat_acrolein`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### hydrogen chloride (`heat_hcl`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### lead (`heat_lead`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### mercury (`heat_mercury`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: mercury `fe0acd60-3ddc-11dd-a8c4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### naphthalene (`heat_naphthalene`)

Include when physically present on the declared route; measure separately and disclose absence or missing data.

- Selected flow: naphthalene `fe0acd60-3ddc-11dd-a682-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### water vapour (`heat_water_vapour`)

Record boiler exhaust water from fuel moisture, combustion-generated water and any entrained process water separately from kiln wood-moisture loss; reconcile the boiler physical water ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Unallocated physical exchange total in the matching production cohort divided once by accepted terminal net wet kg. Retain raw totals and origin/destination; no co-product share multiplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_heat`
- Sources: `epa-wood-boiler-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | physical graph and burden account | Keep the unallocated physical process graph, dry-matter/water/carbon balances, equal internal links and complete co-product masses separate from the environmental burden ledger. Never multiply physical co-product outputs or internal handoffs by an allocation share. Allocate original shared energy/upstream/emission burdens only after reconciling measured physical totals; do not break the terminal 1 kg object. | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `allocation_steps` | joint wood-producing steps | First subdivide metered steps and assign exclusive operations directly. For inseparable same-material wood co-products use measured oven-dry mass shares a_i=m_od_i/sum(m_od_j) for products leaving that joint step; this is a PCR methodological choice informed by the report’s mass-allocation case, not reported site shares. Include internally used fuel residues in the joint-step product denominator and carry their production burden to heat. Green bark/chips leaving before drying receive no subsequent kiln/planing burden. Drying burdens attach to the lumber actually dried; planing shares apply only at planing. | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `allocation_destination` | residue and waste destinations | Separate each residue’s sold, internally burned and discarded portions using transfers and sales/treatment evidence. Waste without product function gets treatment burden, not a manufactured negative credit. Internal fuel cannot be simultaneously exported or assigned zero inherited burden. No automatic avoided fossil-fuel/disposal credit. Keep economic allocation or substitution as separately justified sensitivity cases with prices/time/boundary and results, not mixed with the baseline. | corrim-hardwood-2020 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | processing | reference net mass and state | Acceptance/dispatch records | lot; species; provenance/ecozone; grade; finished dimensions; net wet kg; rejects; moisture; packaging tare reporting-period pool; wholly failed batches; rework origin and final acceptance IDs | Calibrated net weighing excluding packaging; reconcile acceptance and dispatch; match sampled moisture and actual geometry Reconcile the complete pool including failed and rework records; only finally accepted net output enters the denominator once, and a zero-output pool remains unnormalized. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_material | sawing | wood and co-products | Lot and transfer ledger | species; actual solid dimensions/volume; net wet mass; dry/wet basis; oven-dry sample; bark; destination; internal handoff pair; stock changes; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh lots and residues; stratify species/thickness/heartwood/sapwood; promptly seal/weigh representative samples, oven dry to stable mass following USDA Ch.13, assess extractive bias; paired volume and mass at same moisture. Meters need species/temperature calibration and oven-dry checks. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3; moisture fraction | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_material_processing | processing | wood and co-products | Lot and transfer ledger | species; actual solid dimensions/volume; net wet mass; dry/wet basis; oven-dry sample; bark; destination; internal handoff pair; stock changes; actual owner processing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh lots and residues; stratify species/thickness/heartwood/sapwood; promptly seal/weigh representative samples, oven dry to stable mass following USDA Ch.13, assess extractive bias; paired volume and mass at same moisture. Meters need species/temperature calibration and oven-dry checks. Collect only actual processing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3; moisture fraction | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_lubricant | sawing | Actual separately supplied lubricant | Lubricant receipt, issue and stock ledger | grade/SDS and composition; supplier; raw kg; opening/closing stock; issues/returns; equipment; spent-oil destination; reporting pool and failed-batch IDs | Weigh actual issues, returns and stock; reconcile additions, actual consumption, retained oil and separate spent-oil handoff. Preserve absolute kg before normalization; no timber species or oven-dry sampling applies to lubricant. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_energy | sawing | electricity and useful heat | Meter and kiln records | kWh; steam heat MJ and its accounting boundary; supplier/background heat-definition evidence; piping/meter location; steam/condensate masses, absolute pressure, temperature, steam quality, enthalpies and common reference datum; condensate return fraction/destination; vent/leak/line losses; meter definition/calibration; kiln batch/species/thickness; time/temperature/humidity; boiler/control; shared-meter split; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Read calibrated stage meters and inspect the steam/return piping diagram. Obtain the supplier statement or matched-background quantitative-reference definition and compare boundary, loss inclusion and condensate/enthalpy convention against the meter quantity. If enthalpy differences are calculated, use measured fluid states and a documented property method with consistent datum and all relevant return/discharge streams; never assume all steam returns or use boiler feedwater as receiver condensate without evidence. Record a source-specific measured reconciliation for any different boundary before binding heat to a UUID/background. Unknown definitions are retained as pending compatibility gaps, not verified conversions. Record batch schedules, seasons and rejects separately. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ; kWh | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, steam/return diagram and supplier/background reference definitions; signed boundary comparison and measured reconciliation; pending definitions explicitly disclosed |
| cp_energy_processing | processing | electricity and useful heat | Meter and kiln records | kWh; steam heat MJ and its accounting boundary; supplier/background heat-definition evidence; piping/meter location; steam/condensate masses, absolute pressure, temperature, steam quality, enthalpies and common reference datum; condensate return fraction/destination; vent/leak/line losses; meter definition/calibration; kiln batch/species/thickness; time/temperature/humidity; boiler/control; shared-meter split; actual owner processing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Read calibrated stage meters and inspect the steam/return piping diagram. Obtain the supplier statement or matched-background quantitative-reference definition and compare boundary, loss inclusion and condensate/enthalpy convention against the meter quantity. If enthalpy differences are calculated, use measured fluid states and a documented property method with consistent datum and all relevant return/discharge streams; never assume all steam returns or use boiler feedwater as receiver condensate without evidence. Record a source-specific measured reconciliation for any different boundary before binding heat to a UUID/background. Unknown definitions are retained as pending compatibility gaps, not verified conversions. Record batch schedules, seasons and rejects separately. Collect only actual processing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ; kWh | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, steam/return diagram and supplier/background reference definitions; signed boundary comparison and measured reconciliation; pending definitions explicitly disclosed |
| cp_energy_heat | heat | electricity and useful heat | Meter and kiln records | kWh; steam heat MJ and its accounting boundary; supplier/background heat-definition evidence; piping/meter location; steam/condensate masses, absolute pressure, temperature, steam quality, enthalpies and common reference datum; condensate return fraction/destination; vent/leak/line losses; meter definition/calibration; kiln batch/species/thickness; time/temperature/humidity; boiler/control; shared-meter split; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Read calibrated stage meters and inspect the steam/return piping diagram. Obtain the supplier statement or matched-background quantitative-reference definition and compare boundary, loss inclusion and condensate/enthalpy convention against the meter quantity. If enthalpy differences are calculated, use measured fluid states and a documented property method with consistent datum and all relevant return/discharge streams; never assume all steam returns or use boiler feedwater as receiver condensate without evidence. Record a source-specific measured reconciliation for any different boundary before binding heat to a UUID/background. Unknown definitions are retained as pending compatibility gaps, not verified conversions. Record batch schedules, seasons and rejects separately. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ; kWh | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, steam/return diagram and supplier/background reference definitions; signed boundary comparison and measured reconciliation; pending definitions explicitly disclosed |
| cp_fuel | sawing | individual fuels | Fuel receipt/use/test | fuel identity; supplier gas composition/delivery; gas meter raw and corrected m3; reference temperature/absolute pressure; dry/wet basis; correction method/compressibility and calibration; matched-background volume definition; species/residue origin; wet kg; dry fraction; density; measured LHV/HHV on matching basis; start/end stock; internally supplied mass; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Reconcile receipts, stocks and metered use. For gas inspect the meter/correction certificate and supplier billing gas conditions/composition; obtain the linked-background reference-volume definition and compare temperature, absolute pressure and dryness. Preserve volume/m3; any mass/energy conversion needs actual matched-condition density/heating value, not database meanValues or labels. Missing reference-state compatibility is pending review. Weigh internal wood fuels and sample moisture, carbon, ash/heating value and combustion air for the physical balance; do not import generic species fuel properties. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3; MJ | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_fuel_heat | heat | individual fuels | Fuel receipt/use/test | fuel identity; supplier gas composition/delivery; gas meter raw and corrected m3; reference temperature/absolute pressure; dry/wet basis; correction method/compressibility and calibration; matched-background volume definition; species/residue origin; wet kg; dry fraction; density; measured LHV/HHV on matching basis; start/end stock; internally supplied mass; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Reconcile receipts, stocks and metered use. For gas inspect the meter/correction certificate and supplier billing gas conditions/composition; obtain the linked-background reference-volume definition and compare temperature, absolute pressure and dryness. Preserve volume/m3; any mass/energy conversion needs actual matched-condition density/heating value, not database meanValues or labels. Missing reference-state compatibility is pending review. Weigh internal wood fuels and sample moisture, carbon, ash/heating value and combustion air for the physical balance; do not import generic species fuel properties. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3; MJ | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_water | sawing | water and discharge | Water meter and effluent records | supplied kg/m3; source; recycle; runoff/blowdown; return condensate; destination; measured composition; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Meter net water crossing boundary; reconcile recirculation, condensate, vapour, wastewater and changes in product moisture; treat off-site wastewater as waste, direct environmental releases as individual species with actual compartment Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3 | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_water_heat | heat | water and discharge | Water meter and effluent records | supplied kg/m3; source; recycle; runoff/blowdown; return condensate; destination; measured composition; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Meter net water crossing boundary; reconcile recirculation, condensate, vapour, wastewater and changes in product moisture; treat off-site wastewater as waste, direct environmental releases as individual species with actual compartment Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3 | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_packaging | processing | film and strap | Packaging issue ledger | each material; formulation; mass; recovered/reused; supplier boundary | Weigh or reconcile material purchases, usage and stock; split components and keep packaging outside wood reference mass | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_waste | sawing | each discarded residue | Waste transfer record | identity; mass/moisture; destination; treatment; product versus waste evidence; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh and retain treatment/sales evidence; separate captured dust from airborne release and bottom from fly ash Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_waste_processing | processing | each discarded residue | Waste transfer record | identity; mass/moisture; destination; treatment; product versus waste evidence; actual owner processing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh and retain treatment/sales evidence; separate captured dust from airborne release and bottom from fly ash Collect only actual processing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_waste_heat | heat | each discarded residue | Waste transfer record | identity; mass/moisture; destination; treatment; product versus waste evidence; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh and retain treatment/sales evidence; separate captured dust from airborne release and bottom from fly ash Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_air | heat | individual outdoor-air species | Monitoring/model record | species/CAS; source/fuel biogenic or fossil; stack flow; duration; concentration; controls; method/detection limit; PM fractions/filterable/condensable; NOx as NO2; sample period; route/species/factor conditions; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use representative post-control tests or independently justified source-specific models; screen kiln organics by actual hardwood species/schedule. Regional mixed boiler LCI and coniferous resin VOCs are not hardwood kiln measurements. Reconcile cumulative PM to disjoint fractions, retaining limitations and nondetect handling. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_air_sawing | sawing | individual outdoor-air species | Monitoring/model record | species/CAS; source/fuel biogenic or fossil; stack flow; duration; concentration; controls; method/detection limit; PM fractions/filterable/condensable; NOx as NO2; sample period; route/species/factor conditions; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use representative post-control tests or independently justified source-specific models; screen kiln organics by actual hardwood species/schedule. Regional mixed boiler LCI and coniferous resin VOCs are not hardwood kiln measurements. Reconcile cumulative PM to disjoint fractions, retaining limitations and nondetect handling. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_air_processing | processing | individual outdoor-air species | Monitoring/model record | species/CAS; source/fuel biogenic or fossil; stack flow; duration; concentration; controls; method/detection limit; PM fractions/filterable/condensable; NOx as NO2; sample period; route/species/factor conditions; actual owner processing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use representative post-control tests or independently justified source-specific models; screen kiln organics by actual hardwood species/schedule. Regional mixed boiler LCI and coniferous resin VOCs are not hardwood kiln measurements. Reconcile cumulative PM to disjoint fractions, retaining limitations and nondetect handling. Collect only actual processing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_emission | sawing | individual outdoor-air species | Monitoring/model record | species/CAS; source/fuel biogenic or fossil; stack flow; duration; concentration; controls; method/detection limit; PM fractions/filterable/condensable; NOx as NO2; sample period; route/species/factor conditions; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use representative post-control tests or independently justified source-specific models; screen kiln organics by actual hardwood species/schedule. Regional mixed boiler LCI and coniferous resin VOCs are not hardwood kiln measurements. Reconcile cumulative PM to disjoint fractions, retaining limitations and nondetect handling. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_emission_processing | processing | individual outdoor-air species | Monitoring/model record | species/CAS; source/fuel biogenic or fossil; stack flow; duration; concentration; controls; method/detection limit; PM fractions/filterable/condensable; NOx as NO2; sample period; route/species/factor conditions; actual owner processing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use representative post-control tests or independently justified source-specific models; screen kiln organics by actual hardwood species/schedule. Regional mixed boiler LCI and coniferous resin VOCs are not hardwood kiln measurements. Reconcile cumulative PM to disjoint fractions, retaining limitations and nondetect handling. Collect only actual processing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |
| cp_emission_heat | heat | individual outdoor-air species | Monitoring/model record | species/CAS; source/fuel biogenic or fossil; stack flow; duration; concentration; controls; method/detection limit; PM fractions/filterable/condensable; NOx as NO2; sample period; route/species/factor conditions; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use representative post-control tests or independently justified source-specific models; screen kiln organics by actual hardwood species/schedule. Regional mixed boiler LCI and coniferous resin VOCs are not hardwood kiln measurements. Reconcile cumulative PM to disjoint fractions, retaining limitations and nondetect handling. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | Each lot/batch and meter/monitoring interval | Complete declared production period, with seasonal drying coverage | Declared mill and matched suppliers only | per 1 kg reference flow | Calibration, lot/stock reconciliation, sampling and source applicability; unknown records excluded from averages with coverage disclosed |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | all inventory rows | Sum each attributable physical exchange over the same declared period and divide by accepted terminal net wet kg; preserve its numerator unit. Terminal product equals 1 kg; no denominator change to dry kg, m3, kiln batch or green output. Aggregate sites only within one qualified state/species/route using sum exchange / sum matched output; unknown is not zero. Use one documented same-product, grade, route, configuration and site reporting-period pool across every card and linked protocol; include all attributable startup, shutdown, wholly failed batches, rejects and rework in the raw numerator totals. Count reworked product once only when finally accepted. Divide each summed native-unit exchange once by the same strictly positive pooled accepted net kg; do not average batch ratios or discard a zero-output batch. If the complete matched pool has zero accepted output, retain the absolute inventory and require review without a per-kg result; do not invent output or transfer burdens to an unrelated product/period. Preserve physical handoffs and stock balances independently of burden allocation. | Each row protocol; cp_reference; attributable exchange totals; accepted net kg | physical exchange per 1 kg reference flow | corrim-hardwood-2020 |
| `convert_moisture_volume` | wood mass and volume | Apply moisture_basis and solid_volume to paired measured states; dry wood, contained water, solid volume shrinkage and machining loss are separate. Use same-state measured density for a volume-reference database row rather than rejecting it solely for its unit. | cp_material; cp_material_processing; cp_reference | traceable mass/volume/moisture conversion | usda-wood-handbook-2021; corrim-hardwood-2020 |
| `steam_heat_reconciliation` | drying_heat; heat_out | First compare the site heat-meter boundary/definition with supplier or matched-background heat reference, including condensate enthalpy datum, return fraction, discharge and line-loss treatment. Use the documented meter quantity, or a recorded fluid energy balance from measured mass/state/enthalpy on a consistent datum, only after establishing equivalence or an evidenced conversion. Keep fuel-HHV input, total boiler heat and receiver useful transfer as separate quantities; no coefficient is inferred from equal MJ or the Gross calorific value label. Apply the same verified delivery quantity at both internal ends, then divide by the same accepted net terminal kg. If evidence is absent, retain raw totals and mark compatibility pending; do not invent a delivered-MJ conversion. | cp_energy; cp_energy_processing; cp_energy_heat; cp_water; cp_water_heat; cp_reference | conditionally verified delivery MJ per 1 kg reference flow, or pending compatibility | corrim-hardwood-2020 |
| `gas_volume_reconciliation` | heat_gas | Keep the supplier/meter volume at explicitly documented temperature, absolute pressure and dry/wet/composition basis, matched to background gas reference volume. Normalize the verified m3 total by accepted terminal net kg; no gas-to-kg conversion is required. Any correction between states uses the actual documented meter/supplier procedure and inputs, not an assumed normal state, density or property meanValue. Missing background/reference conditions are pending compatibility. | cp_fuel; cp_fuel_heat; cp_reference | m3 per 1 kg reference flow, or pending compatibility | epa-wood-boiler-2022 |
| `drying_water` | kiln water balance | For each matched charge reconcile wood water in minus wood water out plus spray/steam additions, less condensate/liquid discharge and stock change, to vented water. Do not count contained input water again as a separate purchased flow, and do not attribute boiler combustion water to kiln wood moisture loss. | cp_material; cp_material_processing; cp_energy; cp_energy_processing; cp_energy_heat; cp_water; cp_water_heat | water ledger and vapour amount | usda-wood-handbook-2021; corrim-hardwood-2020 |
| `particle_fractions` | PM air rows | Only with matched method/source/control/time and compatible particle definition: PM2.5–10=PM10-PM2.5; PM>10=total compatible PM-PM10. Require nonnegative differences. Do not add total PM, PM10 and PM2.5; condensable PM requires a separately supported definition and must not be subtracted across incompatible tests. | cp_air; cp_air_sawing; cp_air_processing; cp_emission; cp_emission_processing; cp_emission_heat | nonoverlapping PM fractions | epa-wood-boiler-2022; epa-sawmill-pte-2014 |
| `allocated_burdens` | environmental burden ledger | At each joint step assign shared burden a_i×original shared burden; sum shares to one and trace carry-over to later processing/heat. Keep unallocated physical rows and equal handoffs intact. Directly assign exclusive burdens; retain economic sensitivity separately. | cp_material; cp_material_processing; cp_energy; cp_energy_processing; cp_energy_heat; cp_air; cp_air_sawing; cp_air_processing; cp_emission; cp_emission_processing; cp_emission_heat; allocation_steps | separate assigned product LCI | corrim-hardwood-2020 |
| `carbon_balance` | wood and combustion carbon | Use sampled dry fuel/wood carbon and documented fossil fractions to reconcile carbon in wood products/residues, CO2, CO, CH4, other carbon-containing species, ash and stocks; CO2 carbon mass=CO2 mass×12/44. Report biogenic CO2 in LCI irrespective of GHG statistical conventions; uptake/storage/end-of-life are disclosed separately without automatic neutrality. | cp_fuel; cp_fuel_heat; cp_material; cp_material_processing; cp_air; cp_air_sawing; cp_air_processing; cp_emission; cp_emission_processing; cp_emission_heat | separate biogenic/fossil carbon ledger | epa-wood-boiler-2022; corrim-hardwood-2020 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_species` | product and timber inputs | Botanical identity, temperate source ecozone and mix fractions; measure state-specific moisture/density/yield. No tropical extrapolation, universal hardwood density or resin-based VOC default. Table4 of CORRIM is a regional mix and is not a species-identification authority. | Supplier/provenance documentation and lot sampling |
| `quality_missing` | all rows | Distinguish measured, calculated, modelled, nondetect and missing amounts; conditional absence needs documented physical absence. Publish coverage and uncertainty; no universal numeric range or fabricated mill data. | Raw records, monitoring basis and detection limits |
| `quality_identity` | all applicable exchanges | Confirm exact flow type, reference property/unit, state and compartment. Identity verification alone does not confirm quantity/background compatibility: require explicit supplier/background heat and condensate definitions for steam and matching gas reference-volume conditions. Unknown identities or physical conventions remain disclosed review gaps and prevent a complete dataset claim. Elementary total-metal identities require measured total metal, not arbitrary compounds. | Producer identity and compartment reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | one dataset reference | Require 1 kg net kiln-dried planed temperate non-coniferous >6-mm sawnwood and exactly one linked finished_kiln_product. Reject tropical, green/air-dried, rough, sliced/peeled, treated or alternate-kiln use of this reference. Check all qualifiers and identical EN/ZH denominators, formulas, row and source counts. | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `validate_balances` | all stages | Check dry wood, water, energy and carbon physical balances, stock movements, source-specific losses and equal internal links. Check burden shares separately and trace to original totals; do not scale co-product physical outputs. Explain residuals with measured uncertainty, not an invented tolerance. | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `validate_emissions` | air and other releases | No coniferous resin factors as hardwood measurements, no CORRIM secondary boiler LCI as kiln-specific monitoring, no PTE capacity factors as actual emissions and no sawmill dust memo for boilers. Require matched chemical/source/fossil-biogenic/medium and measured controls, disjoint PM; retain biogenic CO2. Report NOx as NO2-equivalent mass only when measurement basis supports it. | corrim-hardwood-2020; epa-wood-boiler-2022; epa-sawmill-pte-2014 |
| `validate_energy_compatibility` | drying_heat; heat_out; heat_gas | Require site meter/supplier evidence and matching background quantitative-reference definitions. For steam check common delivery/loss boundary, condensate return and enthalpy datum; require evidence for any conversion and equal internal handoffs. A Gross calorific value label or common MJ units cannot prove equality of fuel HHV, total boiler heat and receiver net useful heat. For gas require pipeline-gaseous state, actual composition and matching temperature/absolute-pressure/dryness volume convention. Unsupported or missing compatibility is pending review/incomplete applicability, never a validated binding merely because the flow UUID is known. Builder reference-basis checks do not verify these site conditions. | corrim-hardwood-2020; epa-wood-boiler-2022 |
| `validate_completeness` | site dataset readiness | Confirm every applicable identity, site-screened missing exchange and upstream boundary before claiming a complete resolved dataset. Blank identities are review gaps, not a pass; no scientific approval follows from builder checks. | corrim-hardwood-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific manufacturing method with separate unallocated physical graph and allocated kiln-product LCI |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Species/origin, kiln, planing, dimensions, moisture and boundary-matched manufacturing after identity/completeness review |
| excluded_use | EPD certification; structural equivalence; tropical/green/air-dried/rough or other kiln substitution; carbon-neutrality or complete resolved inventory claims while applicable identities remain unresolved |
| required_metadata | Required reference qualifiers; process/physical diagram; period/site; supplier coverage; measured conversion; equal handoffs; co-product destinations; burden shares; biogenic/fossil carbon convention |
| required_quality_disclosure | Measured versus estimated records, uncertainty, losses, exclusions, missing identities and unreviewed applicability |
| update_trigger | Species/origin/state, product geometry/grade, kiln/heat/control route, allocation, boundary or evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA FPL (2021), Wood handbook—wood as an engineering material, FPL-GTR-282. Ch.4 pp.4-1,4-11 and Table4-5; Ch.13 pp.13-1–13-7. [Official original](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf). | Moisture/density-state definitions, sampling and air/kiln distinction; no numerical density default |
| `corrim-hardwood-2020` | literature | Hubbard, Bergman, Sahoo and Bowe (2020-04-27), A Life Cycle Assessment of Hardwood Lumber Production in the Northeast and North Central United States, CORRIM, 45 pp. §§1.2.3–1.2.6,3.2–3.3,4.4,6.4; Tables2–10. [USDA original](https://research.fs.usda.gov/download/treesearch/60571.pdf); [CORRIM original](https://corrim.org/wp-content/uploads/2020/06/FINAL-Northeast-and-Northcentral-Hardwood-Lumber-Production-LCA-CORRIM-Report.pdf). | 2017 six-mill NE/NC case: physical stages, indirect steam kiln, planing/packaging, mass-allocation precedent and limits. No survey quantity or tropical default adopted |
| `epa-wood-boiler-2022` | official_guidance | EPA (March 2022), AP-42 §1.6 Wood Residue Combustion in Boilers; §§1.6.1–1.6.4 and Table1.6-1 footnotes. [Original](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf). | Boiler source/fuel/moisture/control dependence, emissions screening and nested PM caution; no generic emission factor adopted, biogenic CO2 retained |
| `epa-sawmill-pte-2014` | official_guidance | EPA Region10 (2014-05-08), Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country; memorandum p.1 and table p.2. [Original](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf). | Scope exclusion and cumulative PM method warning only; PTE is capacity, not actual mill emission; no numerical factors adopted |
