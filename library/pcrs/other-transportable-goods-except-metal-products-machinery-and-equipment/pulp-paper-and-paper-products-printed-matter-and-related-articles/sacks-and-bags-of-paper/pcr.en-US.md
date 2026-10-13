---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sacks-and-bags-of-paper
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unprinted unlined open-mouth pasted kraft-paper sacks

## 1. Scope and Applicability

This candidate defines production of accepted empty, unprinted, unlined, handle-free and valve-free open-mouth pasted kraft-paper sacks from purchased uncoated unbleached sack-paper reels. The declared route uses ready-to-use aqueous natural-starch adhesive, electrically driven tube forming/cutting and bottom folding/pasting/pressing, followed by net evaporative ambient curing and gate preparation. Eligibility must be verified from the actual bill of materials and route record; no factory amounts or universal formulation are supplied. Printing, a valve, plastic film, a liner, sewn closure, handles, coating, lamination, on-site papermaking, fuel combustion and purchased heating are outside this route. If they occur, this PCR alone is insufficient: separately review the applicable methodology and add their actual atomic exchanges before reporting complete coverage. [billerud-sack-handbook]

The 1 kg production reference compares production burdens for this declared sack state. It does not establish equal carrying capacity or equal lifetime across bag constructions. A comparative study must define the same contents, rated load, closure, handling conditions and service cycle, then convert with measured sack mass and demonstrated performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sacks-and-bags-of-paper |
| classification_refs | CPC 3.0 32152; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Eligible empty open-mouth pasted unbleached kraft sacks with the declared material/route restrictions. |
| excluded_products | Raw sack paper/reels; coated or laminated bags; printed, valved, sewn or handled bags; bags with film/liner; boxes, envelopes, woven/plastic sacks; filled goods. |
| representative_product | Unprinted unlined open-mouth pasted sack; dimensions, number of plies and rated load are site-declared, never preset. |
| production_route | Purchased reel → tube forming/seam pasting/cutting → bottom folding/pasting/pressing → ambient curing/inspection → gate preparation. |
| market_state | Accepted empty cured sack at converter gate, before customer filling/top closure. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Eligible empty sack production, with its declared containment performance. |
| How much | 1 kg net accepted cured sacks. |
| How well | Declared dimensions, ply grammage/count, moisture, rated load, adhesive seam/bottom integrity and applicable performance-test conditions. |
| How long or cycle | One declared filling/handling cycle; no assumed reuse count or shelf life. |
| reference_flow_link | `finished_bag` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Paper Bag `0a8faf13-9861-4805-bcee-a212c6dceb04` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Empty formed sack; open-mouth pasted bottom; no valve/handle/film/liner/printing; uncoated unbleached kraft paper grade and fibre origin; ply count/grammage; dimensions; ready-to-use natural-starch glue composition/solids; gate moisture and net mass; rated load and performance conditions; actual curing route; packaging and gate; site/year/provider coverage. |

Required qualifiers must be present in dataset metadata, product description or equivalent fields. Paper Bag is a formed sack here; its official Chinese label does not change the physical definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted cured empty sack net mass from cp_output; exclude rejected bags, wrap and pallets. Measure residual moisture rather than substituting oven-dry mass. |
| same_denominator | all inventory rows | Declared row property | Declared row unit | Every row and collection aggregation is per 1 kg reference flow from the same accepted campaign; total exchanges are divided by total accepted net sack mass in kg. Bag-count records require a measured same-configuration net bag mass, never a guessed weight. |
| wet_dry_basis | paper_input; starch_glue; residues | Mass | kg | Keep actual wet and dry quantities separate, with measured moisture/solids and supplier reference basis; a generic flow identity does not establish wet/dry provider compatibility. |
| electrical_energy | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the original property label for electrical work; convert metered kWh by 1 kWh = 3.6 MJ from the verified unit group. Match below-1-kV user supply and do not interpret this as a fuel calorific value or heat delivery. |
| freight_basis | inbound_road | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | Sum measured consignment kg × actual route km; 1 t*km = 1000 kg*km from the unit group. Match supplier load/empty-return definition; no default distance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased uncoated unbleached sack-paper reels and ready-to-use aqueous starch adhesive received at converter; electricity/tap water supplied at user. |
| starting_condition_role | foreground production entry |
| product_classification_scope | Narrow physical subset of CPC3.0 32152; a paper reel remains upstream material, not a bag. |
| recursive_input_rule | Purchased finished sacks are not raw paper. Record any purchased same-category intermediate distinctly with supplier gate coverage; do not recursively regenerate its burdens or reuse the finished output UUID as a second quantitative reference. |
| upstream_dataset_requirement | Providers for sack-paper manufacture (pulping/papermaking/finishing), glue, electricity, water, packaging and treatment; add actual inbound transport only if absent from delivered providers. No sawmill/plywood dataset as papermaking evidence. |
| disclosure | Declare material state, gate, site/time, provider boundary, transport, packaging, curing, waste receivers, exclusions and unresolved links; conversion-only inventory is not cradle-to-gate without upstream completion. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | paper-sack-converting | Include actual reel handling, tubing/cutting, seam/bottom pasting and pressing, ambient curing, quality rejects, extraction/cleaning and gate preparation. Printing, valve insertion and lining are not default stages. | billerud-sack-handbook |
| boundary_upstream | paper_input | Keep pulp/paper manufacture in the verified paper provider or explicit upstream processes. BREF7.1.10 cutting-dust evidence is qualitative; do not transfer mill emissions or broke recycling ratios into conversion. | eu-pp-bref-2015 |
| boundary_accounts | all inventory rows | Retain physical material, water and carbon balances before burden allocation. Measure the same quantity at both ends of every internal transfer; internal scrap return cannot also be external waste or emission. Keep unknown atmospheric moisture uptake explicit. | billerud-sack-handbook |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| paper-sack-converting | Integrated empty sack conversion and gate preparation | required | Declared eligible route only | foreground_production | 1 kg net accepted cured empty sacks |

The unit aggregates reel receipt → tube formation/seam pasting/separation → bottom forming/pasting/pressing → ambient curing → inspection/gate preparation. Preserve separate stage meters, glue application records and internal movement quantities. These are stages of one foreground unit: do not introduce a second product output carrying the finished sack reference UUID. Packaging, transport, cleaning and residues below are conditional on actual records, not a checklist to select in full.

### Process: Integrated empty sack conversion (`paper-sack-converting`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`paper_input`)

Purchased uncoated unbleached kraft sack-paper reels only. Record ply grade, grammage, fibre origin, moisture and reel remnants; paper-bag records describe formed bags and are rejected for this input. The broad name includes packaging paper; the graphic-paper classification needs clarification. Require a matching sack-paper provider, not a graphic-paper production proxy.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_materials per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Starch-based adhesive (`starch_glue`)

Purchased ready-to-use aqueous natural-starch packaging adhesive for longitudinal seam and bottom only; disclose the actual formulation and wet supplied mass, dry solids and supplier quantity basis separately. No handbook water fraction is a recipe. Additional dilution water is metered separately, not counted again from supplied glue. A dry-starch provider is incompatible with whole wet glue unless all constituents and preparation are modelled.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_materials per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `billerud-sack-handbook`

###### Alternating current (`electricity`)

Grid-average alternating current below 1 kV at the user only, for unwinding, tube cutting, folding, pasting, pressing, extraction, handling and attributable lighting. Verify voltage, country, time and losses against the actual supplier. The selected source is CN supply; another country or grid requires a compatible provider, with this geographic limitation disclosed.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_energy per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Tap water (`wash_water`)

Treated tap water for actual cleaning and any documented glue dilution. Use weighed water in kg or measured volume times measured density at the recorded temperature; the database secondary coefficient is not a site density. This is a supplied product, not elementary natural-water abstraction.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_water per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Uncoated printing, writing and packaging paper (`paper_wrap`)

Conditional uncoated kraft-paper transport wrapping crossing the gate; not bag wall mass. Record only actual wrapping, grade and receiver. Its background provider must match wrapping paper, independently of the sack-paper provider; retain the classification caveat.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_packaging per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_pallet`)

Conditional new one-way wooden pallet supplied with the shipment, without importing a wood-processing recipe. Use actual pallet mass and construction. Returned pallets are physical returnable assets: record both movements and a measured reuse/loss service basis separately; never charge a new pallet at each dispatch.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_packaging per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### freight transport (`inbound_road`)

Conditional separately modelled contracted inbound road freight. Record shipped mass in kg and route distance in km by consignment; supplier-delivered datasets may already include it. Exclude duplicated legs and disclose truck class, load and empty return. Use the native mass-distance reference and the actual carrier service definition; database secondary properties do not replace a measured consignment or route.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Unit group: `3620148f-c5db-48ce-9065-a10092089aca`
- Amount rule: Measured attributable exchange from cp_transport per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

#### Outputs

##### Product flows

###### Paper Bag (`finished_bag`)

One accepted cured empty open-mouth pasted sack output, unprinted and unlined, without valve or handles. Net mass includes paper, retained dry adhesive and measured residual moisture, excluding transport wrapping/pallets. The official Chinese baseName is ambiguous, but the original comment and classification explicitly describe formed bags; do not use this UUID for raw sack paper.

- Selected flow: Paper Bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `billerud-sack-handbook`

###### Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard (`recovered_trim`)

Only separately weighed clean unbleached kraft-paper trim actually accepted as a recovered-paper product by a named receiver. It is not a second sack reference output. Glue-contaminated rejected bags and collected fine dust are excluded from this row; disclose marketability and treatment.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_residues per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `eu-pp-bref-2015`

###### Uncoated printing, writing and packaging paper (`dispatched_wrap`)

Conditional actual wrapping paper dispatched with accepted sacks, on the same mass basis as paper_wrap input after stock/waste reconciliation. Keep this physical accompanying-packaging output outside net sack reference mass and outside co-product allocation; it transfers packaging, not another paper-production function. No subtraction of its supply burden and no separate recycling credit.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_packaging per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`dispatched_pallet`)

Conditional one-way wooden pallet physically dispatched with the sacks, equal to the attributable wood_pallet input after stock reconciliation. It is accompanying packaging, not a co-product or second sack reference. Keep returnable asset movements/service accounting separate; neither cancellation of the pallet supply burden nor a new pallet at every reused trip is allowed.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_packaging per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

##### Waste flows

###### Starch-glued rejected unlined paper sacks (`reject_bags`)

Record actual rejected solid paper sacks exported, including their full paper, starch and water mass, moisture and receiver acceptance. Broad solid-waste identity does not prescribe composition, legal classification, recycling yield or treatment. Keep separately from saleable clean trim, captured dust and liquid glue. Internal rework is a physical internal return, not an additional export.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_residues per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Collected dry kraft-paper cutting dust (`collected_dust`)

Record actual collected cellulose-rich cutting dust exported, with measured moisture, starch contamination, collector opening/closing stock and receiver. This Waste flow represents collected industrial dust, not an atmospheric elementary flow, kiln ash or an assumed particle-size fraction. Internal return is not an external waste. No collection efficiency or disposal route is preset.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_residues per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `eu-pp-bref-2015`

###### Waste aqueous natural-starch sack adhesive (`waste_glue`)

Record separately collected actual liquid leftover or spilled aqueous natural-starch glue sent to a named waste receiver. Measure whole wet formulation mass, starch/other constituent and water fractions and supplier/receiver wet-basis compatibility. Dried or solidified residue needs a separate applicable identity and physical row. This broad liquid-waste identity implies no hazardous-waste legal status, pre-treatment or disposal technology. Exclude glue already counted in rejected sacks or wash effluent.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_residues per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Untreated starch-glue equipment cleaning wastewater (`cleaning_wastewater`)

Record actual separately collected untreated aqueous equipment-wash effluent sent to an identified off-site treatment provider. Use the whole mixture mass in kg, measured directly or as V_eff*rho_eff(T), not pure-water mass or an assumed water density. Retain actual starch, other constituents and water fraction separately; use whole measured effluent volume for pollutant concentrations. Receiver treatment is linked once and the same transfer is not also a direct freshwater discharge or a second water-product supply. Broad liquid-waste identity supplies no legal hazard designation or treatment route.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_water per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

##### Elementary flows

###### water vapour (`water_vapor`)

Water CAS 7732-18-5 as vapour crossing into outdoor air, unspecified subcompartment, from measured net evaporative curing. Bound the water balance with material moisture, glue water, cleaning outputs and storage changes; ventilation transfer must reach the environment. Unknown humidity uptake requires a separate physical input account, never a fabricated negative emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_moisture per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_moisture`
- Sources: `billerud-sack-handbook`

###### particles (PM2.5) (`pm25`)

Actual emitted cutting particulate with aerodynamic diameter at or below 2.5 micrometres, into outdoor air unspecified. Not collected dust, workplace dust concentration or a default emission factor. Site testing must support the fraction and material scope.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_air per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-pp-bref-2015`; `epa-method-201a-2020`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Actual emitted cutting particulate above 2.5 and at or below 10 micrometres, into outdoor air unspecified. Obtain the exclusive fraction directly or from compatible paired PM10 minus PM2.5 measurements; do not emit cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_air per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-pp-bref-2015`; `epa-method-201a-2020`

###### particles (> PM10) (`pm_large`)

Actual emitted cutting particulate above 10 micrometres, into outdoor air unspecified. Derive only from a directly measured exclusive interval or compatible total filterable particulate minus PM10 on the same test basis; total-minus-PM10 is not valid across incompatible sampling definitions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable exchange from cp_air per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-pp-bref-2015`; `epa-method-201a-2020`



## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | paper-sack-converting | Prefer process subdivision and direct campaign/stage attribution. Investigate system expansion where justified by the study; otherwise use a demonstrated causal physical relationship, and only then a justified other relationship. Do not preset mass or revenue shares. | ec-pef-2021 |
| allocation_physical | recovered_trim; finished_bag | Keep full actual sack/trim/waste masses in the physical ledger. Delivered wrapping/pallet outputs are accompanying packaging, not co-products; their physical transfers do not cancel upstream packaging burdens. Any burden share acts on attributable environmental burdens, not on the physical kilograms of co-products or on equality of internal transfer quantities. Document marketability before declaring trim a co-product; no automatic avoided-paper credit. | ec-pef-2021 |
| allocation_shared | electricity; inbound_road; wood_pallet | Record directly metered stage use where possible; shared utilities require actual driver records and reconciliation. Separate returnable pallet physical movements from amortised production/service burdens, with measured trips/losses. Do not infer an industry allocation coefficient. | ec-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | paper-sack-converting | finished_bag | measured campaign records | accepted lot masses; bag counts; configuration; moisture; dimensions; rated load; test conditions; rejected lots | Weigh accepted cured empty sacks on calibrated scales with packaging tare; sample same-configuration unit mass if only count records exist; retain moisture/performance results. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_materials | paper-sack-converting | paper_input; starch_glue | measured campaign records | receipts/issues/returns; beginning/end stocks; paper grade/plies/grammage/moisture; glue formulation/solids/grade/supplied basis | Weigh material issues and returns; reconcile purchased lots and stock changes to each campaign. Retain supplier grade/SDS and wet/dry provider declarations. Measure seam and bottom glue separately then sum once. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_energy | paper-sack-converting | electricity | measured campaign records | start/end kWh; meter calibration; voltage; stage/runtime; shared driver; supply geography/time/losses | Use stage and shared-service meters covering drives, extraction, handling and attributable lighting. Reconcile campaign sums to the site meter and provider boundary. | MJ | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_water | paper-sack-converting | wash_water; cleaning_wastewater | measured campaign records | cleaning/dilution events; supply volume/mass/temperature/density; effluent mass/volume; starch load; receiver and treatment gate | Weigh water and effluent or use calibrated volume meters with measured temperature-specific density; separately collect effluent, sample composition and confirm the external receiver. Do not double count water already in purchased glue. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_packaging | paper-sack-converting | paper_wrap; wood_pallet; dispatched_wrap; dispatched_pallet | measured campaign records | wrapping and pallet grade; weighed mass; dispatch lot; one-way/returnable status; trips/losses | Weigh actual gate wrapping and one-way pallets excluding sack net mass; retain physical two-way asset logs for returnable pallets and a separately reviewed service allocation. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_transport | paper-sack-converting | inbound_road | measured campaign records | consignment mass; origin/destination; measured route km; truck/load/empty return; supplier-delivered coverage | Use weighbridge/dispatch records and actual route logs for contracted inbound road legs absent from other providers. Calculate kg*km separately for each leg. | kg*km | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_residues | paper-sack-converting | recovered_trim; reject_bags; collected_dust; waste_glue | measured campaign records | segregated stream mass; moisture/solids; glue contamination; internal rework; receiver acceptance; dispatch documents | Weigh each atomic residue separately and sample moisture/composition; reconcile captures, internal returns and off-site shipments. Do not merge fine dust with clean commercial trim or wet glue with rejected sack mass. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_moisture | paper-sack-converting | water_vapor | measured campaign records | paper/glue water; accepted/rejected/residue moisture; washwater; stock changes; cure climate; ventilation destination; atmospheric uptake | Use traceable moisture/solids measurements before/after curing and a bounded water balance, with measured atmospheric uptake if present. Quantify only net evaporative emission reaching the environment; unresolved terms prevent a complete balance. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |
| cp_air | paper-sack-converting | pm25; pm_coarse; pm_large | measured campaign records | sampling method; dry/wet gas basis; ventilation flow; time; filterable/condensable scope; size fractions; capture destination; fugitive evidence; detection limits | Measure external dust discharge by qualified size-selective sampling and ventilation records; EPA201A is an option only for compatible dry stationary-source sampling with all method conditions met. It is not a fugitive method. Assess fugitive transfers separately; unknown fractions are pending, not zero. | kg | Each campaign; every relevant event and representative test | Declared representative period including starts/stops/rejects; disclose coverage | Declared site and eligible configuration only | per 1 kg reference flow | Calibration; lot traceability; stock/meter reconciliation; supplier/test/receiver evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | Divide each actual attributable campaign exchange by the accepted net cured empty sack mass in kg from cp_output; retain row numerator units. Never divide by gross packed mass or nominal rated load. | cp_output; campaign records | exchange per 1 kg reference flow |  |
| electricity_conversion | electricity | Metered kWh × 3.6 MJ/kWh, then the same campaign denominator. | cp_energy; cp_output | MJ per 1 kg reference flow |  |
| transport_calculation | inbound_road | Sum actual consignment kg × actual route km, then the same campaign denominator. | cp_transport; cp_output | kg*km per 1 kg reference flow |  |
| whole_liquid_mass | waste_glue; cleaning_wastewater | A_wet_kg = V_m3 * rho_mixture(T), or direct calibrated wet weighing. Water-component mass is A_wet_kg*x_water; retain actual solids/other constituents and whole effluent volume for pollutant loads. Divide by the same Q only once; do not use a pure-water density or create duplicate treatment. | cp_residues; cp_water; cp_output | kg per 1 kg reference flow and separate physical water balance |  |
| water_balance | water_vapor | Water entering in paper, wet glue and supplied cleaning/dilution water plus measured atmospheric uptake = water retained in accepted sacks, residues, cleaning effluent and inventory increase plus external water-vapour emission. Retain unresolved terms and uncertainty; do not force closure with an assumed factor. | cp_materials; cp_water; cp_moisture; cp_output; cp_residues | Physical water balance and conditional emission | billerud-sack-handbook |
| particle_intervals | pm25; pm_coarse; pm_large | Use mutually exclusive measured aerodynamic intervals. Coarse fraction = compatible PM10 − PM2.5; >10 fraction = compatible total filterable particulate − PM10. Pair tests on the same gas/temperature/filterable scope; negative differences or incompatible totals require review. Do not add cumulative PM10 or total PM to the three interval exchanges. | cp_air; cp_output | Exclusive particle masses per 1 kg reference flow | epa-method-201a-2020 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qa_route | paper-sack-converting | Verify all exclusion/eligibility claims from the actual BOM, flow diagram, glue SDS and equipment records; unknown liner or printing state is not evidence of absence. | Site route record and BOM |
| qa_provider | all inventory rows | Resolve UUID identity separately from quantity/provider basis. Retain exact material state, geography/year, declared reference quantity, background coverage and receiver interfaces; disclose unresolved links. | Supplier declarations and reviewed dataset linkage |
| qa_balance | paper-sack-converting | Reconcile stage transfers, material solids, water and carbon before allocation. Keep biogenic and fossil carbon origins distinct; preserve real biogenic CO2 exchanges if present upstream or in an added actual process regardless of climate reporting exclusions. No direct combustion is inferred for this route. | Physical balance ledger and separate allocated burden ledger |
| qa_air | cp_air | Assess actual external particulate and ventilation, collected dust and fugitive scope independently. No sawmill PTE factor, default particle distribution or forced positive emission. | Qualified test reports and capture/destination records |
| qa_maintenance | paper-sack-converting | Before completing a site inventory, survey actual cutting knives, belts, adhesive-application parts, lubricants, cleaning agents, packaging losses and replaced equipment consumables. Record material/formulation, issue/return, stock, service use, wear and the full discarded physical item separately. Add each actual exchange as an atomic row with its own verified identity and measurement; no default maintenance package, lifetime, frequency or zero use is assumed. Returnable pallet and wrapping losses retain whole physical masses and do not shrink with burden allocation. | Itemized purchase/issue/return/stock/maintenance, measured service and whole discarded-item records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_bag | Exactly one finished sack reference product output must declare 1 kg accepted net mass and required qualifiers. No intermediate sack output may reuse its reference UUID. | billerud-sack-handbook |
| validate_denominator | all inventory rows | Inventory bases, campaign aggregation and both language renderings use per 1 kg reference flow with cp_output net mass; every amount has a traceable protocol and no fabricated quantity. |  |
| validate_route | paper-sack-converting | Reject claims of complete applicability when printing, film/liner, valve, handles, heat supply, combustion or papermaking occurs without separately reviewed coverage. Classification mapping acceptance does not itself establish methodology approval or complete dataset coverage. | billerud-sack-handbook |
| validate_balance | all inventory rows | Require reconciled physical material/water/carbon records, compatible upstream/treatment providers and a separately justified burden allocation. Unresolved identity, provider basis, atmosphere uptake or particle fractions makes affected dataset coverage incomplete. | ec-pef-2021 |
| validate_particles | pm25; pm_coarse; pm_large; collected_dust | Keep external exclusive air fractions distinct from captured waste, internal reuse and workplace measurements. EPA201A is not applicable to water-droplet emissions or fugitive ambient sampling; no unsupported size-fraction subtraction. | epa-method-201a-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Eligible empty-sack supply at declared converter gate after upstream and receiver links are completed; scaling by measured net sack mass for the same configuration. |
| excluded_use | Raw paper manufacture; filled goods or customer closure; equal-performance claims without evidence; printed/lined/valved/handled/sewn bags; universal bag recipe or unqualified cradle-to-gate inventory. |
| required_metadata | Required qualifiers; BOM/route; physical ledger; measured amounts/protocols; providers and quantity bases; site/period; allocation; gate packaging and transport; waste receivers. |
| required_quality_disclosure | Candidate methodology review state; sampling uncertainty; exclusions; any unresolved identity/quantity/provider; air and water completeness; no methodology approval implied by technical checks. |
| update_trigger | Changes in sack design, paper/glue composition, liner/printing/valve/closure route, curing energy, supplier, treatment, transport, performance or measured quality. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| billerud-sack-handbook | handbook | [Billerud, Handbook for Sack Kraft Papers and Paper Sacks (2025-12-18 file edition)](https://www.billerud.com/globalassets/billerud/packaging-materials/sack-paper/sack-handbook-251218.pdf); printed/PDF pp.25,28,30–32,53 | Open-mouth pasted sack identification; conditional tube/bottom conversion; curing water mechanism and glue performance. No numerical recipe/time/strength default. |
| eu-pp-bref-2015 | official_guidance | [European Commission JRC, Production of Pulp, Paper and Board BREF (2015)](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf); DOI 10.2791/370629; §7.1.10, printed p.670/PDF p.708 | Upstream pulp/paper scope and qualitative finishing cutting-dust recognition; converter analogy requires actual site checks. No mill emission quantities imported. |
| epa-method-201a-2020 | official_guidance | [US EPA, Method 201A (October 7, 2020)](https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf); §§1–4, PDF pp.1–3 | Conditional compatible stationary-source filterable PM size sampling, limitations and exclusive-interval interpretation. No fugitive factor. |
| ec-pef-2021 | official_guidance | [European Commission, C(2021)9332 Annex I](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf); §4.5, PDF pp.63–64 | Allocation hierarchy; document causal relationship and discarded alternatives. Not a PEF compliance claim. |
