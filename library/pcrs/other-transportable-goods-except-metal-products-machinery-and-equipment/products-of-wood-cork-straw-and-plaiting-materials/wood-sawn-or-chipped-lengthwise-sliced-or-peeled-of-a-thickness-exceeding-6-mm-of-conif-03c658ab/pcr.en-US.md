---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-sawn-or-chipped-lengthwise-sliced-or-peeled-of-a-thickness-exceeding-6-mm-of-conif-03c658ab
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Wood, sawn or chipped lengthwise, sliced or peeled, of a thickness exceeding 6 mm, of coniferous wood

## 1. Scope and Applicability

This PCR directly applies only to kiln-dried, unimpregnated coniferous wood sawn or chipped lengthwise, with measured thickness exceeding 6 mm, in rough or straight-planed condition. Its supported methodology is narrower than CPC 3.0 31101, whose official full category name is retained for classification context. Green or air-dried final products and sliced or peeled forms are outside this directly supported scope and are future-adaptation context only; continuously shaped profiles, non-coniferous wood, veneer at or below 6 mm, sleepers, impregnated wood, laminated/glued products and panels are excluded. Species, dimensions and processing determine applicability; a classification code alone does not establish it.

The operational representative is kiln-dried sawn timber at the mill gate. The inventory below describes that route, including any air predrying. Green dispatch bypasses drying; air-dried dispatch has no artificial kiln heat but may use handling or fans. Neither state may use the kiln-dried reference UUID. The verified green intermediate identity can support green-route development, but a green or air-dried final dataset requires its own reviewed reference definition, denominator and linked output row. Sliced/peeled stock exceeding 6 mm requires a documented process-specific adaptation; sawing yields and emissions cannot be assumed for it. These adaptations are not established by the representative inventory.

This is production methodology, not a construction-function equivalence claim. No service life, strength class, regional average yield, universal final moisture or carbon-neutrality claim is assigned. [Source: corrim-northern-lumber-2025; usda-wood-handbook-2021.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-sawn-or-chipped-lengthwise-sliced-or-peeled-of-a-thickness-exceeding-6-mm-of-conif-03c658ab |
| classification_refs | CPC 3.0 31101; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Directly supported only: kiln-dried, unimpregnated coniferous longitudinally sawn/chipped wood, measured thickness >6 mm; rough or straight-planed. Green/air-dried final products and sliced/peeled forms are not covered by this reference definition |
| excluded_products | Non-coniferous timber; veneer ≤6 mm; sleepers; continuously shaped wood; impregnated wood; glued/laminated products; panels |
| representative_product | Kiln-dried coniferous sawn timber, net wet mass at declared dispatch moisture, at mill gate |
| production_route | Delivered sawlogs → debarking/sawing → optional air predrying → kiln drying → optional straight planing → grading/packing; on-site heat conditional |
| market_state | Declared kiln-dried state for representative; green and air-dried states require distinct reference definitions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply only >6-mm kiln-dried, unimpregnated coniferous longitudinally sawn/chipped timber, rough or straight-planed, for further manufacture or construction use without assigning an end-use function |
| How much | 1 kg net accepted kiln-dried timber at mill gate, excluding dispatch packaging |
| How well | Declared species mix, measured dimensions >6 mm thickness, grade, moisture basis and actual moisture; not interchangeable with green/air-dried timber |
| How long or cycle | One production-and-dispatch accounting period; no end-use service life declared |
| reference_flow_link | `finished_kiln_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species/mix; measured thickness, width and length; rough/straight-planed condition; absence of impregnation/glue; grade and rejects; kiln route and air predrying; dispatch dry-basis moisture with sampling method; net mass excluding packaging; density and actual solid volume basis if converted; site, period and upstream-log boundary |

This reference definition supports only the kiln-dried longitudinally sawn/chipped scope stated above, not all forms within CPC 31101. Required qualifiers must be declared in the concrete data package. Kiln identity does not establish a particular moisture percentage or certified structural grade.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted dispatch wet mass; collect by calibrated weighing in cp_reference. Packaging is separately counted. |
| `moisture_basis` | wood and residue mass | Water fraction on explicitly stated basis | dimensionless; % explicitly converted | USDA dry-basis moisture u=(m_wet-m_dry)/m_dry; wet-basis w=(m_wet-m_dry)/m_wet. With fractions, w=u/(1+u), u=w/(1-w), m_dry=m_wet/(1+u). Require m_dry>0, u≥0 and 0≤w<1. Divide a reported percentage by 100 before using these expressions. [usda-wood-handbook-2021, Ch.4 eqs.4-1/4-2; algebraic conversion.] |
| `volume_mass` | volume-reported wood | Mass; volume at the same moisture state | kg; m3 | m_wet=rho_u×V_u with matched species, moisture and actual solid volume. Measure density; basic density (oven-dry mass/green volume), oven-dry density and dispatch wet density are different. Nominal board-foot log scales and loose chip volume are not actual solid lumber volume. [usda-wood-handbook-2021 Ch.4; corrim-northern-lumber-2025 §3.2.4.] |
| `energy_basis` | electricity, heat and fuel | Declared carrier-specific property | MJ; kg | Convert metered kWh to MJ by ×3.6. Preserve the verified electricity flow’s reference property label Net calorific value as its database energy representation; it does not mean electricity combustion. Heat is useful delivered energy, distinct from fuel LHV/HHV input. Gas volumes require reference temperature/pressure and measured density/calorific value; no fixed wood heat value. [cp_energy; cp_energy_conditioning; cp_energy_heat; cp_fuel; cp_fuel_sawing; epa-wood-boiler-2022.] |
| nox_quantity_basis | all NOx emission rows | Mass; verified quantity convention | kg | Before calculation, document the actual measured or factor-derived NOx quantity convention, chemical/species scope, concentration and gas-state basis and its independently verified relation to the selected LCI flow and assessment method. Native Mass/kg does not establish an NO2-equivalent convention. Keep actual NO/NO2 species quantities and documented conversion/speciation evidence when an equivalent basis is used; no universal conversion or assumed split. Reconcile any aggregate with separately modelled NO/NO2 and keep N2O separately, without counting the same release twice. Missing convention/speciation or LCI/assessment compatibility leaves the raw result and its normalized exchange pending review; never silently label a mass as NO2-equivalent or invent zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Coniferous sawlogs delivered to mill, bark and moisture declared; purchased rough lumber explicitly changes starting condition |
| starting_condition_role | Foreground gate-to-gate mill production; upstream production remains required for cradle-to-gate use |
| product_classification_scope | Semantic >6-mm unimpregnated coniferous timber category; CPC 3.0 31101 is a reference |
| recursive_input_rule | Purchased green/rough timber in the same category is an explicit input with a compatible supplier dataset; stop recursion at its disclosed supplier gate and retain inherited burdens |
| upstream_dataset_requirement | Compatible forestry/harvest, transport-to-mill, purchased utilities/materials and treatment providers; verify species, moisture, allocation, carbon and geography/period. Delivered-log upstream must not be counted twice |
| disclosure | Starting gate, route, internal transfers, outside providers, excluded stages and unresolved upstream or flow identities; gate-to-gate is not a complete cradle-to-gate result |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_process` | mill production | Include actual log handling, debarking, sawing, drying route, trimming/straight planing, grading, packaging, on-site transport, dust collection and on-site heat if present. Purchased heat includes provider combustion upstream. | `corrim-northern-lumber-2025` |
| `boundary_emissions` | emissions and waste | Screen each source and actual controls. Use emitted amounts after controls; collected dust/ash is waste or a separately justified coproduct. No general mass cutoff removes known toxic compounds. Add each other site-observed substance as a separate atomic row before release; absence requires evidence. | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022`; `epa-sawmill-pte-2014` |
| `boundary_carbon` | biogenic carbon | Retain wood-derived CO2, CO and CH4 separately from fossil flows. Track dry wood carbon in log inputs, timber/coproduced material, combusted residue, ash and losses. No new atmospheric CO2 uptake is created at the mill: forestry uptake is upstream, and product carbon crossing the gate is a material carbon balance, not a negative mill emission. Preserve upstream uptake once; disclose any complete-system accounting convention and sustainability evidence. Stored carbon is not an avoided-emission credit; service storage and end-of-life remain outside this gate. | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| `boundary_exclusion` | downstream and capital | Exclude dispatch beyond mill gate, construction, use, end-of-life and substitution credits from this manufacturing dataset. Declare capital/infrastructure and employee-activity treatment and assess significance; the CORRIM case exclusion is not a universal insignificance proof. Do not describe omitted stages as zero. | `corrim-northern-lumber-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sawing` | Log yard, debarking and sawing | required | Delivered sawlogs processed on site; supplier lumber route needs boundary adaptation | Joint green timber/coproduced wood step | Same-reference inventory; reconcile rough_green_out |
| `conditioning` | Kiln drying, finishing and dispatch with stage metering | required | Kiln-dried representative; air predrying and straight planing only when present, each submetered | Water removal, trimming, grading, packing and accepted final timber; rough kiln timber stays within this unit | `finished_kiln_product` |
| `heat` | On-site steam heat generation | conditional | On-site steam boiler only; purchased-heat route omits this foreground process | Internal heat with explicit fuels and emissions | Same-reference inventory; heat_out internal link |

Maintain two separate ledgers: the original unallocated physical process graph, and the product-specific allocated LCI/environmental-burden account. The flow cards below describe physical exchanges, uniformly expressed per 1 kg reference flow by dividing unallocated cohort totals by the same accepted net kiln-product kg; normalization is not allocation. Retain raw batch/period totals and close mass, water and carbon balances before any burden partition. Internal transfer quantities on both ends must match at the same handoff state; coproduct physical outputs and the terminal 1 kg product are never multiplied by burden shares. Allocated accounting quantities for external inputs or emissions must be labelled separately and must not overwrite physical records or internal links. The data producer must collect the measurements; this PCR supplies no actual factory inventory values. Kiln drying and finishing form one foreground unit; their energy and coproduct records remain stage-specific. Intermediate rows are transfers within the process graph, not additional final products. The same biomass must not appear simultaneously as sold coproduct, discarded waste and internally burned fuel. Unresolved identity does not authorize substitution. Air emission UUIDs here use the verified unspecified outdoor-air compartment; site urban/non-urban/stack refinement requires a new direct-read match, not a name-only reassignment.

### Process: Log yard, debarking and sawing (`sawing`)

#### Inputs

##### Product flows

###### Coniferous sawlogs with bark, delivered to mill (`sawlogs_in`)

Required delivered sawlogs; record species, bark fraction, net wet mass and moisture.

- Selected flow: Coniferous sawlogs with bark, delivered to mill
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Alternating current (`sawing_electricity`)

Only customer-side grid-average alternating current below 1 kV; other supply requires an exact separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-northern-lumber-2025`

###### Diesel fuel (`yard_diesel`)

Only if yard equipment burns diesel within the foreground; exclude contracted transport already in delivered-log background.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_sawing`
- Sources: `corrim-northern-lumber-2025`

###### Petroleum lubricating oil for sawmill machinery (`sawing_oil`)

Only petroleum lubricating oil actually used by sawmill machinery; measure additions and retained stock.

- Selected flow: Petroleum lubricating oil for sawmill machinery
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Water, tap (`yard_tap_water`)

Only purchased tap water used in the log yard; freshwater abstraction is a separate upstream exchange, not tap water.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Sawnwood (green), at sawmill gate (`rough_green_out`)

Unpreserved coniferous rough green sawnwood exceeding 6 mm transferred to conditioning; record the unallocated physical handoff quantity and moisture state, matching drying_green_in exactly at that handoff.

- Selected flow: Sawnwood (green), at sawmill gate `f15bb061-fd78-47b3-9fc2-216d58b7f9fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Untreated coniferous wood chips, mill coproduct (`chips_coproduct`)

Record this distinct recoverable coproduct at its actual exit, including sale and separately identified internal transfer; no duplicate waste output.

- Selected flow: Untreated coniferous wood chips, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Coniferous bark, mill coproduct (`bark_coproduct`)

Record this distinct recoverable coproduct at its actual exit, including sale and separately identified internal transfer; no duplicate waste output.

- Selected flow: Coniferous bark, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Untreated coniferous sawdust, mill coproduct (`sawdust_coproduct`)

Record this distinct recoverable coproduct at its actual exit, including sale and separately identified internal transfer; no duplicate waste output.

- Selected flow: Untreated coniferous sawdust, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

##### Waste flows

###### Bark (`bark_discard`)

Only bark discarded as waste; exclude sold bark and separately tracked boiler fuel.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `corrim-northern-lumber-2025`

###### sawdust waste (`sawdust_discard`)

Only untreated sawdust discarded as waste; exclude marketed or internally burned sawdust.

The selected sawdust-waste record has the explicit untreated combustion/recovery route. Use this UUID only for the independently collected actual untreated sawdust sent to a documented compatible combustion or recovery receiver, with whole measured mass and treatment/provider boundary retained. Other or unverified receivers and treated/contaminated sawdust require a separately verified identity or a precise unresolved-UUID exchange; never omit the actual waste, substitute internal fuel or infer recovery credit.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `corrim-northern-lumber-2025`

###### Sawmill log-yard runoff sent to wastewater treatment (`yard_runoff`)

Only collected log-yard runoff crossing to treatment; no wastewater lumping with kiln condensate.

- Selected flow: Sawmill log-yard runoff sent to wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `corrim-northern-lumber-2025`

##### Elementary flows

###### particles (PM2.5) (`sawing_pm25`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (PM2.5 - PM10) (`sawing_pm25_10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (> PM10) (`sawing_pm_gt10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### carbon dioxide (fossil) (`yard_co2_fossil`)

Only direct diesel-combustion emission from yard equipment; apply equipment/load-specific site evidence, never a wood-boiler factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### carbon monoxide (fossil) (`yard_co_fossil`)

Only direct diesel-combustion emission from yard equipment; apply equipment/load-specific site evidence, never a wood-boiler factor.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### methane (fossil) (`yard_ch4_fossil`)

Only direct diesel-combustion emission from yard equipment; apply equipment/load-specific site evidence, never a wood-boiler factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### nitrous oxide (`yard_n2o`)

Only direct diesel-combustion emission from yard equipment; apply equipment/load-specific site evidence, never a wood-boiler factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### Nitrogen oxides (`yard_nox`)

Only direct diesel-combustion emission from yard equipment; apply equipment/load-specific site evidence, never a wood-boiler factor.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### sulfur dioxide (`yard_so2`)

Only direct diesel-combustion emission from yard equipment; apply equipment/load-specific site evidence, never a wood-boiler factor.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

### Process: Kiln drying, finishing and dispatch with stage metering (`conditioning`)

#### Inputs

##### Product flows

###### Sawnwood (green), at sawmill gate (`drying_green_in`)

Same-batch rough green coniferous sawnwood from rough_green_out: the unallocated physical amount on both sides is equal at the same handoff and moisture basis. Subsequent drying changes belong inside conditioning; no allocation share changes this transfer.

- Selected flow: Sawnwood (green), at sawmill gate `f15bb061-fd78-47b3-9fc2-216d58b7f9fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_conditioning`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Alternating current (`drying_electricity`)

Only below-1-kV grid electricity for fans and kiln controls; air predrying with fans records electricity independently.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_conditioning`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`

###### Delivered process heat from steam (`drying_heat`)

Only net delivered steam heat for indirect kiln heating. Keep purchased and internal deliveries separately traceable; the identified internal physical delivery exactly matches heat_out at the common handoff, without an allocation multiplier or duplicate MJ.

- Selected flow: Delivered process heat from steam
- Flow property / unit: Energy / MJ
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_conditioning`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`

###### Alternating current (`finishing_electricity`)

Only below-1-kV grid electricity for trimming, grading, straight planing and packing.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### Polyethylene film (`film_in`)

Only polyethylene film actually included in dispatch packaging; exclude from net reference-product mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-northern-lumber-2025`

###### Polypropylene packaging strap (`strap_in`)

Only polypropylene strapping actually included in dispatch packaging; do not substitute PP resin.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-northern-lumber-2025`

#### Outputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`finished_kiln_product`)

Accepted kiln-dried coniferous sawnwood exceeding 6 mm at mill gate, with no preservative impregnation or continuous profiling.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Untreated coniferous planer shavings, mill coproduct (`shavings_coproduct`)

Only recoverable untreated planer shavings from this finishing step; upstream bark and chips receive no finishing burden.

- Selected flow: Untreated coniferous planer shavings, mill coproduct
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_conditioning`
- Sources: `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

##### Waste flows

###### Offcut (`offcut_discard`)

Only untreated wood offcuts discarded as waste; resale and on-site fuel are distinct transfers.

Only actual non-agglomerated, untreated and unglued coarse wood offcuts belong to this row; keep moisture and recipient records, and verify their physical state and receiver/provider compatibility before treatment linkage. Do not substitute agglomerated fuel or captured powder.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_conditioning`
- Sources: `corrim-northern-lumber-2025`

##### Elementary flows

###### water vapour (`drying_water_vapour`)

Only moisture actually evaporated to air from the wood batch; deduct separately collected liquid condensate and dry-matter losses.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `usda-wood-handbook-2021`

###### methanol (`drying_methanol`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### formaldehyde (`drying_formaldehyde`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### phenol (`drying_phenol`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### acetaldehyde (`drying_acetaldehyde`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### propanal (`drying_propanal`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### acrolein (`drying_acrolein`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### pin-2(3)-ene (`drying_alpha_pinene`)

Include only if site species, kiln schedule, measurement or defensible species-resolved estimate establishes this compound at the kiln outlet; missing measurement is not zero.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `corrim-northern-lumber-2025`

###### particles (PM2.5) (`drying_pm25`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (PM2.5 - PM10) (`drying_pm25_10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (> PM10) (`drying_pm_gt10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (PM2.5) (`finishing_pm25`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (PM2.5 - PM10) (`finishing_pm25_10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (> PM10) (`finishing_pm_gt10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_conditioning`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

### Process: On-site steam heat generation (`heat`)

#### Inputs

##### Product flows

###### Untreated coniferous bark fuel (`heat_bark_fuel`)

Only this separately weighed untreated coniferous residue when actually burned; record internal origin or external supplier, moisture and calorific basis.

- Selected flow: Untreated coniferous bark fuel
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Untreated coniferous sawdust fuel (`heat_sawdust_fuel`)

Only this separately weighed untreated coniferous residue when actually burned; record internal origin or external supplier, moisture and calorific basis.

- Selected flow: Untreated coniferous sawdust fuel
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Untreated coniferous wood-chip fuel (`heat_chips_fuel`)

Only this separately weighed untreated coniferous residue when actually burned; record internal origin or external supplier, moisture and calorific basis.

- Selected flow: Untreated coniferous wood-chip fuel
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`; `usda-wood-handbook-2021`

###### Pipeline natural gas fuel (`heat_gas`)

Only actual pipeline gas used by the kiln boiler; site gas quality and volume reference temperature/pressure are required.

- Selected flow: Pipeline natural gas fuel
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### Diesel fuel (`heat_diesel`)

Only actual boiler auxiliary diesel; exclude yard diesel and imported heat fuel already included upstream.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### Alternating current (`heat_electricity`)

Only below-1-kV grid electricity for boiler auxiliaries and actual pollution controls.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

#### Outputs

##### Product flows

###### Delivered process heat from steam (`heat_out`)

Net useful steam heat supplied to the identified internal delivery in drying_heat: equal unallocated MJ at the common handoff; account for condensate return and line losses before that handoff and record them once.

- Selected flow: Delivered process heat from steam
- Flow property / unit: Energy / MJ
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

##### Waste flows

###### Bottom ash from untreated wood combustion (`heat_bottom_ash`)

Only this distinct collected wood-combustion ash stream; measure its own mass, unburned carbon and treatment destination.

- Selected flow: Bottom ash from untreated wood combustion
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_heat`
- Sources: `corrim-northern-lumber-2025`

###### Fly ash from untreated wood combustion (`heat_fly_ash`)

Only this distinct collected wood-combustion ash stream; measure its own mass, unburned carbon and treatment destination.

- Selected flow: Fly ash from untreated wood combustion
- Flow property / unit: Mass / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_heat`
- Sources: `corrim-northern-lumber-2025`

##### Elementary flows

###### carbon dioxide (biogenic) (`heat_co2_bio`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### carbon monoxide (biogenic) (`heat_co_bio`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### methane (biogenic) (`heat_ch4_bio`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### carbon dioxide (fossil) (`heat_co2_fossil`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### carbon monoxide (fossil) (`heat_co_fossil`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### methane (fossil) (`heat_ch4_fossil`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### nitrous oxide (`heat_n2o`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### Nitrogen oxides (`heat_nox`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### sulfur dioxide (`heat_so2`)

Only actual on-site combustion emission after controls; distinguish wood-derived and fossil carbon. No foreground combustion row for purely purchased heat.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### particles (PM2.5) (`heat_pm25`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### particles (PM2.5 - PM10) (`heat_pm25_10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

###### particles (> PM10) (`heat_pm_gt10`)

Record this disjoint size fraction only where emitted to outdoor air after actual controls; collected dust is not an air emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Physical-graph amount: use the measured or explicitly estimated unallocated total for this exchange in the same production cohort, divided once by accepted net kiln-product kg. Retain the raw total and origin/destination; apply no coproduct allocation share to this physical amount. Product-specific burden-accounting values belong in the separate burden account, outside this physical-amount calculation. An inapplicable exchange requires evidence of absence, not an assumed zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`; `corrim-northern-lumber-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all processes | First preserve the unallocated physical ledger, then subdivide environmental burdens with stage metering and direct attribution. CORRIM §3.2.6 partitions environmental load; Tables 8–10 are unallocated inventories, and Table 23 contains fuel/energy stage shares. These are not permission to scale internal physical transfers or coproduct outputs; do not copy the regional stage percentages as defaults. Bark/chips/sawdust that exit before kiln drying receive only upstream joint-step burdens; lumber drying does not burden them. Product-specific packaging is wholly assigned to the dispatched product. | `corrim-northern-lumber-2025` |
| `allocation_dry_mass` | unseparated joint wood steps | For comparable usable wood coproducts partition only the shared environmental burdens of each individual joint step using measured oven-dry mass shares: a_i=m_dry,i/sum(m_dry,j) over qualifying physical outputs of that step. Calculate each step’s shares independently; retain all original output masses unchanged, and keep the allocated result in a separate traceable account. The terminal reference remains 1 kg, not a_i kg. Reconcile moisture first; do not allocate by wet mass containing different water fractions. This dry-mass physical method is supported by the CORRIM wood-flow basis, not its regional average shares. Verify causal suitability; materially different cofunctions require explicit method review and economic-allocation sensitivity using contemporaneous gate values, not a price default. | `corrim-northern-lumber-2025`; `usda-wood-handbook-2021` |
| `allocation_internal_fuel` | internal residue and heat | Keep internal bark/sawdust/chip physical transfers at their unallocated measured quantities; match only the routed internal portion of each coproduct to the corresponding heat input, reconciling stock movements. Carry inherited origin burdens separately into the heat burden account without reducing the matched physical quantity. Do not also count them as sold exports or allocate the same residue a second time. Attribute heat generation to actual useful heat deliveries; no avoided fossil-fuel credit in this attributional foreground. CHP, exported heat and other fuels need a reviewed additional energy-allocation model. | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| `allocation_waste` | wastes and recovery | Waste carries required handling/treatment burdens and does not receive a saleable-output allocation share by default. Declare end-of-waste and treatment boundary explicitly; saleability is evidence-dependent. No simultaneous recovery credit and allocated coproduct output. Do not discard carbon in collected ash or wood waste. | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | conditioning | accepted output | weighing and acceptance record | species; batch; measured dimensions; grade; net dispatch mass; tare; rejects; moisture sample; kiln route | Calibrated scale, net timber excluding packaging; reconcile dispatch with production and stock change. Validate >6 mm thickness and kiln state. | kg | each batch; aggregate period | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_material` | sawing | wood and liquid exchanges | mass and moisture ledger | physical record id; cohort; step; origin/destination; unallocated wet mass; matched transfer id; species; stock change; moisture dry/wet basis; actual solid volume; density; internal partner; sale/waste status; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh each wood stream separately without applying burden allocation; pair representative moisture and density samples by batch. Oven-dry moisture at 101–105 °C to no appreciable mass change in 3-hour intervals; disclose volatile-extractive bias. Meter corrections require species/temperature evidence; above fibre saturation use gravimetric verification. [usda-wood-handbook-2021 Ch.13.] Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3 | each batch and stock close | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_material_conditioning` | conditioning | wood and liquid exchanges | mass and moisture ledger | physical record id; cohort; step; origin/destination; unallocated wet mass; matched transfer id; species; stock change; moisture dry/wet basis; actual solid volume; density; internal partner; sale/waste status; actual owner conditioning; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh each wood stream separately without applying burden allocation; pair representative moisture and density samples by batch. Oven-dry moisture at 101–105 °C to no appreciable mass change in 3-hour intervals; disclose volatile-extractive bias. Meter corrections require species/temperature evidence; above fibre saturation use gravimetric verification. [usda-wood-handbook-2021 Ch.13.] Collect only actual conditioning stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3 | each batch and stock close | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_energy` | sawing | electricity and delivered heat | meter and supplier record | meter start/end; voltage; kWh; steam mass/enthalpy; condensate return; heat delivery; internal or purchased; route and operating hours; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use process submeters or documented measured allocation; convert kWh ×3.6. Measure net delivered steam energy including return enthalpy. Direct-fired kiln exhaust is attributed once at its actual source. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ | meter interval; period aggregate | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_energy_conditioning` | conditioning | electricity and delivered heat | meter and supplier record | meter start/end; voltage; kWh; steam mass/enthalpy; condensate return; heat delivery; internal or purchased; route and operating hours; actual owner conditioning; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use process submeters or documented measured allocation; convert kWh ×3.6. Measure net delivered steam energy including return enthalpy. Direct-fired kiln exhaust is attributed once at its actual source. Collect only actual conditioning stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ | meter interval; period aggregate | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_energy_heat` | heat | electricity and delivered heat | meter and supplier record | meter start/end; voltage; kWh; steam mass/enthalpy; condensate return; heat delivery; internal or purchased; route and operating hours; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Use process submeters or documented measured allocation; convert kWh ×3.6. Measure net delivered steam energy including return enthalpy. Direct-fired kiln exhaust is attributed once at its actual source. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ | meter interval; period aggregate | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_fuel` | heat | each fuel | fuel balance and assay | individual fuel mass; source; receipt/use/stock; moisture basis; dry mass; C/N/S; LHV/HHV; gas reference temperature/pressure; boiler/load/control; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Separate bark, sawdust, chips, gas and diesel records; measured burn quantities and batch moisture/calorific assay. Internal residue origins must reconcile with upstream outputs. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; MJ | each delivery and burn period | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_fuel_sawing` | sawing | each fuel | fuel balance and assay | individual fuel mass; source; receipt/use/stock; moisture basis; dry mass; C/N/S; LHV/HHV; gas reference temperature/pressure; boiler/load/control; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Separate bark, sawdust, chips, gas and diesel records; measured burn quantities and batch moisture/calorific assay. Internal residue origins must reconcile with upstream outputs. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; MJ | each delivery and burn period | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_packaging` | conditioning | each packaging component | purchase/use/stock record | polymer and finished form; film mass; strap mass; dispatch count; stock change | Weigh film and strap separately or use traceable unit masses with actual counts; exclude packaging from timber denominator. | kg | each dispatch; period close | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_waste` | sawing | each waste stream | waste transfer and treatment record | stream identity; mass; water content; ash unburned carbon; carrier; destination; treatment; reuse evidence; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Separate waste bark, waste sawdust, offcuts, wood bottom ash, wood fly ash and yard runoff. Weigh/meter transfers and obtain actual treatment evidence; off-site water treatment is not direct elementary discharge. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | each transfer; period aggregate | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_waste_conditioning` | conditioning | each waste stream | waste transfer and treatment record | stream identity; mass; water content; ash unburned carbon; carrier; destination; treatment; reuse evidence; actual owner conditioning; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Separate waste bark, waste sawdust, offcuts, wood bottom ash, wood fly ash and yard runoff. Weigh/meter transfers and obtain actual treatment evidence; off-site water treatment is not direct elementary discharge. Collect only actual conditioning stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | each transfer; period aggregate | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_waste_heat` | heat | each waste stream | waste transfer and treatment record | stream identity; mass; water content; ash unburned carbon; carrier; destination; treatment; reuse evidence; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Separate waste bark, waste sawdust, offcuts, wood bottom ash, wood fly ash and yard runoff. Weigh/meter transfers and obtain actual treatment evidence; off-site water treatment is not direct elementary discharge. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | each transfer; period aggregate | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_allocation` | sawing | separate burden ledger | step-specific attribution/allocation record | cohort; step; original physical record ids; target product; qualifying output dry masses; original environmental burdens; direct attribution; step share; assigned LCI; inherited burden origin; method and uncertainty; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Retain immutable raw physical totals and handoff links. Measure stage burdens where possible; record direct versus shared burdens and each step share separately. Store assigned values with their raw-record links, never overwriting physical quantities. CORRIM Table 23 stage shares are case estimates, not defaults. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; MJ | each cohort and joint step | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_allocation_conditioning` | conditioning | separate burden ledger | step-specific attribution/allocation record | cohort; step; original physical record ids; target product; qualifying output dry masses; original environmental burdens; direct attribution; step share; assigned LCI; inherited burden origin; method and uncertainty; actual owner conditioning; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Retain immutable raw physical totals and handoff links. Measure stage burdens where possible; record direct versus shared burdens and each step share separately. Store assigned values with their raw-record links, never overwriting physical quantities. CORRIM Table 23 stage shares are case estimates, not defaults. Collect only actual conditioning stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; MJ | each cohort and joint step | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_allocation_heat` | heat | separate burden ledger | step-specific attribution/allocation record | cohort; step; original physical record ids; target product; qualifying output dry masses; original environmental burdens; direct attribution; step share; assigned LCI; inherited burden origin; method and uncertainty; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Retain immutable raw physical totals and handoff links. Measure stage burdens where possible; record direct versus shared burdens and each step share separately. Store assigned values with their raw-record links, never overwriting physical quantities. CORRIM Table 23 stage shares are case estimates, not defaults. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; MJ | each cohort and joint step | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_emission` | sawing | each emitted substance and size class | monitoring and reconciled estimate | substance; source/process; outdoor compartment; sample basis; dry/wet gas; flow; operating/start-up hours; actual control; activity denominator; factor source/version; PM cut sizes and condensable fraction; non-detect limit; carbon origin; actual owner sawing; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Prefer representative outlet/source measurements over source-resolved operating time. Where estimation is necessary, retain separately labelled factor × actual activity with matching route, moisture, thermal basis and controls plus uncertainty. EPA 2014 PTE is a maximum-capacity regulatory estimate, not actual LCA emissions. AP-42 wood-boiler factors apply only to matched boiler conditions, not mobile diesel or pure air drying. Resolve each VOC/HAP separately; no VOC aggregate substitution. Collect only actual sawing stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | representative tests and operating log | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_emission_conditioning` | conditioning | each emitted substance and size class | monitoring and reconciled estimate | substance; source/process; outdoor compartment; sample basis; dry/wet gas; flow; operating/start-up hours; actual control; activity denominator; factor source/version; PM cut sizes and condensable fraction; non-detect limit; carbon origin; actual owner conditioning; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Prefer representative outlet/source measurements over source-resolved operating time. Where estimation is necessary, retain separately labelled factor × actual activity with matching route, moisture, thermal basis and controls plus uncertainty. EPA 2014 PTE is a maximum-capacity regulatory estimate, not actual LCA emissions. AP-42 wood-boiler factors apply only to matched boiler conditions, not mobile diesel or pure air drying. Resolve each VOC/HAP separately; no VOC aggregate substitution. Collect only actual conditioning stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | representative tests and operating log | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |
| `cp_emission_heat` | heat | each emitted substance and size class | monitoring and reconciled estimate | substance; source/process; outdoor compartment; sample basis; dry/wet gas; flow; operating/start-up hours; actual control; activity denominator; factor source/version; PM cut sizes and condensable fraction; non-detect limit; carbon origin; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Prefer representative outlet/source measurements over source-resolved operating time. Where estimation is necessary, retain separately labelled factor × actual activity with matching route, moisture, thermal basis and controls plus uncertainty. EPA 2014 PTE is a maximum-capacity regulatory estimate, not actual LCA emissions. AP-42 wood-boiler factors apply only to matched boiler conditions, not mobile diesel or pure air drying. Resolve each VOC/HAP separately; no VOC aggregate substitution. Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg | representative tests and operating log | Declared representative production period, seasonal moisture/drying covered; no prescribed duration | One declared mill and process graph | per 1 kg reference flow | Calibration; traceable records; sample representativeness; reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_balance` | all inventory rows | Build and retain the original unallocated physical ledger from receipts, opening/closing stock and all measured outputs/losses for the same cohort. Normalize each unallocated exchange total by accepted net dispatch kg of that cohort, without a coproduct-share multiplier. Match internal handoff quantities on both sides before normalization; use the same denominator on both sides. Close physical mass/water/carbon balances in raw units first. The final product remains 1 kg. Preserve this ledger when producing the separate allocated burden account. | `cp_reference`; `cp_material`; `cp_material_conditioning`; `cp_energy`; `cp_energy_conditioning`; `cp_energy_heat`; `cp_fuel`; `cp_fuel_sawing`; `cp_packaging`; `cp_waste`; `cp_waste_conditioning`; `cp_waste_heat`; `cp_emission`; `cp_emission_conditioning`; `cp_emission_heat` | Unallocated physical exchanges per 1 kg reference flow | `corrim-northern-lumber-2025` |
| `burden_ledger` | each joint-step burden account | For each step record its original shared burden, separately directly attributable burden, target output and validated dry-mass share. Assigned burden = step share × original shared burden + directly attributable burden. Trace inherited origin burdens exactly once. Normalize assigned external-input/elementary accounting values by the same accepted net product kg, keeping per 1 kg reference flow; label these as allocated LCI, distinct from unallocated physical cards. Never multiply matched internal transfers, coproduct physical outputs or the terminal 1 kg by a share. | `cp_allocation`; `cp_allocation_conditioning`; `cp_allocation_heat`; `cp_material`; `cp_material_conditioning`; `cp_reference`; `cp_energy`; `cp_energy_conditioning`; `cp_energy_heat`; `cp_fuel`; `cp_fuel_sawing`; `cp_emission`; `cp_emission_conditioning`; `cp_emission_heat` | Traceable product-specific burden/LCI ledger, separate from physical graph | `corrim-northern-lumber-2025` |
| `drying_water_balance` | drying_water_vapour | For a batch with independently verified conserved dry matter, removed water=m_dry×(u_in−u_out). Deduct captured liquid water before assigning vapour. Otherwise close separate dry-matter and water balances including rejects, volatile losses and steam leakage; never equate shrinkage to lost dry mass. | `cp_material`; `cp_material_conditioning`; `cp_reference` | Net evaporated water mass | `usda-wood-handbook-2021` |
| `pm_disjoint` | all particle rows | For comparable cumulative measurements: PM2.5; PM2.5–10=PM10−PM2.5; PM>10=total filterable PM−PM10. Nonnegative differences require identical activity, source, control and measurement basis. Never add total PM + PM10 + PM2.5. Condensable PM requires separate identity/method and cannot be silently assigned to a size fraction. | `cp_emission`; `cp_emission_conditioning`; `cp_emission_heat` | Disjoint particle mass fractions | `epa-wood-boiler-2022`; `epa-sawmill-pte-2014` |
| `wood_carbon_balance` | wood carbon | Track carbon=m_dry×measured dry-basis carbon fraction separately in timber, each residue and ash. CO2 mass corresponds to carbon mass ×44/12 only for carbon demonstrably oxidised to CO2; account CO, CH4, organic releases and unburned carbon separately. Do not use a generic 50% wood-carbon or 99% oxidation default. Product-gate stored carbon remains a disclosed stock, not a negative foreground emission. | `cp_material`; `cp_material_conditioning`; `cp_fuel`; `cp_fuel_sawing`; `cp_waste`; `cp_waste_conditioning`; `cp_waste_heat`; `cp_emission`; `cp_emission_conditioning`; `cp_emission_heat` | Carbon balance and separate direct emissions | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | each flow | Exact product/waste/elementary type, names, route, compartment and reference property/unit. Any unresolved applicable UUID prevents a fully resolved exchange package. | Direct flow records and producer qualifiers |
| `quality_range` | site inventories | Use measured values and observed variability; no industry range is inferred from one regional report or one site. No unmeasured conditional exchange is assigned zero. Factor-derived values are labelled estimates with uncertainty and sources; this PCR supplies no generic numeric amount ranges. | Underlying meter/test record, representativeness assessment and source conditions |
| `quality_completeness` | whole mill | Close wood dry-matter, water, energy and carbon balances; record seasonal drying, site control devices, all relevant chemicals, VOC/HAP species, wastewater, combustion water and control reagents. Add missing physical exchanges individually before dataset release. Purchased heat and direct-fire variants require explicit completeness review. | Producer process diagram, material ledger, monitoring/permit species list and balance residual assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference definition | Require declared kiln-dried coniferous state, thickness >6 mm, net 1 kg, required qualifiers and the exact linked finished output. Reject use of the kiln UUID for green/air-dried timber or a non-coniferous UUID for this product. A new route cannot pass on the representative definition. | `corrim-northern-lumber-2025`; `usda-wood-handbook-2021` |
| `validate_balance` | all processes | Check identical EN/ZH denominator. In the unallocated physical graph require equal matched internal handoff quantities, unchanged coproduct physical outputs and terminal 1 kg, moisture conversion and source-specific mass/water/carbon balances. Separately check each joint step’s burden shares and their sum to one within recorded uncertainty, plus the trace from original burdens to assigned LCI. Allocation must never feed back into physical balance quantities. Unexplained residuals require review; no arbitrary closure tolerance. | `corrim-northern-lumber-2025`; `usda-wood-handbook-2021` |
| `validate_air` | air emissions | Require individual substances and nonoverlapping particle classes with actual controls and factor/measurement applicability. PTE maxima, indoor or long-term-air UUIDs, wood-boiler factors for mobile diesel, and stacked nested PM are unacceptable. No omission of biogenic CO2 because a statistical GHG convention excludes it. NOx amounts require the documented compatible quantity convention under nox_quantity_basis; an NO2-equivalent monitoring result is not automatically the native LCI mass. | `epa-wood-boiler-2022`; `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025` |
| `validate_identity_gaps` | release readiness | Every applicable row needs verified exact identity or an explicitly unresolved gap; unresolved is not a pass. Confirm site-screened additional exchanges and complete upstream boundaries before any complete dataset or methodology claim. | `corrim-northern-lumber-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific manufacturing dataset with distinct unallocated physical graph and allocated product-specific LCI per declared kiln-dried timber output |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared-species, thickness, grade, moisture, kiln and boundary-matched production modelling after identity/completeness review |
| excluded_use | EPD certification; structural equivalence; green/air-dried or glued product substitution; whole-building lifetime; unqualified carbon neutrality; a complete resolved dataset while applicable identities remain blank |
| required_metadata | Site, time, species mix, measured geometry/grade/moisture, net kg/volume conversion, starting gate, supplier coverage, drying/heat route, raw unallocated records and equal internal handoff links; separate step burden shares and assigned-LCI audit, carbon accounting convention and exact flow identities |
| required_quality_disclosure | Representativeness, calibrated records, estimated versus measured emissions, balance residuals, exclusions, unresolved UUIDs, missing empirical ranges and unreviewed scope |
| update_trigger | Changed species, moisture/grade, product dimensions, kiln/fuel/control technology, upstream boundary, allocation, emission evidence or flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory (2021), Wood handbook—wood as an engineering material, FPL-GTR-282; Ch.4 pp.4-1 and 4-11, Ch.13 pp.13-1–13-7. [Official GovInfo full original](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf). | Dry-basis moisture, density/volume-state distinction, oven-dry collection and air/kiln routes; no species-average density default |
| `corrim-northern-lumber-2025` | literature | Puettmann / CORRIM, Life Cycle Assessment of Softwood Lumber Production—Northern Region (April 28 2025; revised May 20; edited July 22 2025), §§3.2.1–3.2.6, 3.3, 4.6–4.9, unallocated Tables 8–10 and fuel/energy stage-allocation Table 23. [Full original](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf). | Process/boundary and mass-allocation evidence, dry wood balance, packaging attribution, carbon and site-resolved HAP; 2023 Northern US survey is not a global numeric range or certified PCR compliance |
| `epa-wood-boiler-2022` | official_guidance | US EPA AP-42 §1.6, Wood Residue Combustion in Boilers, March 2022, §§1.6.1–1.6.4 and Tables 1.6-1–1.6-6. [Original](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf). | Boiler/fuel/control applicability and particle/gas accounting; factors require matched thermal input and moisture. Short-cycle GHG statistical exclusion does not remove LCI biogenic CO2 |
| `epa-sawmill-pte-2014` | official_guidance | US EPA Region 10 memorandum, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country, May 8 2014; cover and activity table. [Original](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf). | Source/activity screening and nested particle definitions; regulatory PTE maximum-capacity factors are not adopted as actual LCA emission amounts |
