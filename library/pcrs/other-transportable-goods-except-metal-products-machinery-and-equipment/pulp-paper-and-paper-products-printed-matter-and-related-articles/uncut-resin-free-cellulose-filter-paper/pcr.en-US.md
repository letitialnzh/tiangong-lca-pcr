---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.uncut-resin-free-cellulose-filter-paper
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncut resin-free cellulose filter paper from purchased purified pulp

## 1. Scope and Applicability

This PCR covers non-integrated wet-laid manufacture of unimpregnated, resin-free qualitative cellulose filter base paper from purchased purified cotton-linters papermaking pulp and/or bleached non-dissolving chemical wood pulp, preserving porosity during dewatering and drying. Delivery is an uncut base-paper reel, before conversion into filter discs, folded filters, tubes or blocks; ordinary edge trimming and rewinding remain part of reel manufacture. Wood pulp and cotton pulp are separate inputs with no prescribed share or dosage. The representative physical product is the reel form of the ordinary Hahnemühle highly pure qualitative filter-paper series, for which the catalogue explicitly offers rolls. The ultrapure-cotton 597L grade is one product example, not a universal recipe or proof of its mill route. Resin-free scope requires actual formulation/supplier confirmation; omission of resin from a catalogue entry does not prove its absence [hahnemuhle-filter-catalog, PDF pp. 62, 64].

The method differs from commodity printing paper: filtration speed, particle retention, pore distribution, cleanliness and dry/wet strength constrain the accepted grade. BREF speciality-paper guidance identifies loss of filter-paper porosity from pressing before drying. Record the actual drainage, vacuum and drying conditions and verify accepted filter performance; do not import generic press dryness, paper recipes, water-recycle ratios or historical single-mill energy intensity. The producer general manufacturing page also describes art paper and pressing, and cannot establish this filter grade’s press pressure or resin formulation [jrc-pulp-paper-bref-2015, 7.1.11.4; hahnemuhle-paper-manufacturing].

The foreground route uses purchased electricity and externally supplied steam, internal white-water/broke recovery, and actual on-site effluent treatment or transfer to external treatment. Supplied energy may come from a separately identifiable utility unit, but its supply burden must be linked. On-site combustion/utility boilers, raw-cotton purification, wood pulping/bleaching and recovered-paper deinking are outside the listed foreground route; include them through independently evidenced supplier processes or an expanded methodology. Exclude cigarette paper, sulphite wrapping paper, felt paper, printing paper, wet-strength resin-hardened filters, acid-washed ashless quantitative paper, mineral-filled or coated/impregnated filters, glass/quartz/synthetic media, membranes and downstream filter conversion/use. Any unlisted actual process aid requires individual applicability review and a specific atomic exchange; these cards establish neither universal presence nor absence of an aid. The mixed CPC32136 label supplies no unified method [hahnemuhle-filter-catalog, PDF pp. 60, 62, 66, 74].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.uncut-resin-free-cellulose-filter-paper |
| classification_refs | CPC 3.0 32136; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Wet-laid qualitative cellulose filter base-paper reels within the stated route and resin-free condition |
| excluded_products | Cigarette, wrapping and felt paper; resin-hardened, acid-washed ashless, filled, coated or impregnated filter media; cut/formed filters |
| representative_product | Reel form of ordinary Hahnemühle highly pure qualitative filter paper; physical example, not proof of factory recipe or energy route |
| production_route | Purchased purified pulp, stock disintegration/screening/refining, wet formation and porosity-preserving dewatering, external-steam drying, reeling, quality control and packaging; no foreground combustion |
| market_state | Accepted uncut base-paper reels at actual delivery moisture; factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cellulose base paper for subsequent qualitative solid/liquid filtration conversion; no claim of final-filter lifetime or absolute retention efficiency |
| How much | 1 kg net accepted base paper, excluding packaging and reel core |
| How well | Meet the actual customer grade for grammage, thickness, porosity/permeability, retention and filtration-rate tests, ash/cleanliness, moisture and strength; retain test pressure/head and method. Equal mass does not make grades functionally equivalent. |
| How long or cycle | One factory-gate delivery; cutting, use, cleaning, clogging/replacement and disposal are modelled downstream |
| reference_flow_link | finished_filter |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sulphite wrapping paper, filter paper and paperboard, felt paper and other paper and paperboard, cigarette paper not cut to size or in the form of booklets or tubes `f0ae48ec-7a6d-4797-978d-d2fd60ab4aef` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | uncut filter base-paper reel; unimpregnated and resin-free; grade; pulp/species and purification/bleaching routes; actual furnish shares; delivery moisture; net accepted mass; grammage and thickness; porosity, filtration-rate/retention methods and test pressure; ash/cleanliness and strength; actual dewatering/drying conditions; supply voltage; steam pressure/temperature and quantity basis; water source; effluent treatment and receiver; site and period |

The broad reference UUID supplies physical product identity only for this filter-paper subset; other paper types in its official name are outside this method. The qualifiers must appear in dataset metadata, product description or reference-flow notes. Missing qualifiers or inclusion of incompatible products makes a concrete data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is cp_mass net paper mass of the same period and accepted grade at actual moisture, excluding cores/packaging, broke and rejects. Divide every external exchange by the same positive finite Q to express per 1 kg reference flow. |
| moisture_basis | wood_pulp, cotton_pulp, finished_filter, screen_rejects, primary_sludge, biosludge, collected_dust, discarded_broke | Mass | kg | Keep wet/as-received mass and measured wet-basis moisture w; dry mass equals wet mass multiplied by (1 - w). Air-dry pulp conventions, oven-dry fibre and delivered paper mass are distinct; an unknown supplier basis blocks the quantity link. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The direct reference property is Net calorific value; the verified unit group gives 1 kWh = 3.6 MJ. This converts the electricity unit only; it establishes neither fuel heating value nor supplier region/voltage/mix compatibility. |
| steam_basis | steam, condensate_return | Mass | kg | 0.45 MPaG is a condition of the selected steam identity, not a site default. cp_steam records actual steam mass, return, vents, leaks and stocks; usable heat comes from matched inlet/return enthalpy and loss balance. A supplier MJ or different-pressure basis needs evidenced compatibility with measured site heat or mass; the unit alone does not establish net delivered heat. |
| solution_basis | cleaning_naoh, peroxide | Mass | kg | Distinguish commercial solution mass, active mass and solvent water; solution mass is not pure substance mass. 50% limits the identified commercial product and prescribes no site recipe/dose; another concentration requires an appropriate identity and supplier basis. |
| water_basis | process_water, river_water, groundwater, exported_wastewater, water_fresh | Mass; Volume | kg; m3 | Use each row’s actual reference property. Convert water mass/volume using measured/traceable density and temperature, not a database secondary factor. Withdrawal, internal recycle, utility return, exported wastewater and final discharge have separate ledgers. |
| species_basis | ammonium, nitrate, phosphate, toc, n2o | Mass | kg | Assay reporting must define species or carbon mass. N/P-based results need stated species stoichiometry and traceable molar masses; total N/P or COD cannot substitute for a specific species. DOC is measured carbon mass only and cannot hide known chemical emissions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purified cotton pulp or bleached non-dissolving wood pulp and declared utilities handed over at paper-mill inlet |
| starting_condition_role | Foreground entry gate; pulp production and energy supply are separately linked upstream |
| product_classification_scope | Narrow uncut resin-free qualitative cellulose filter-paper subset of CPC32136 |
| recursive_input_rule | Trace purchased same-category filter paper to the actual supplier manufacturing dataset without recursively regenerating its pulp inventory; converting-only purchased-paper routes are outside this manufacturing PCR. Internal broke/white-water return is not a purchased same-category product. |
| upstream_dataset_requirement | Pulp, external electricity/steam, water, chemicals, packaging and receiving treatment need route/state/time/region/reference-basis-compatible upstream datasets; resolved UUID identity does not establish a complete supply chain. |
| disclosure | Disclose foreground gate-to-gate exchanges, supplier/treatment links and missing amounts/identities/background separately; omitted burdens are not zero or a complete cradle-to-gate result. |

- `boundary_mill`: Include stock preparation/disintegration/screening, filter-grade refining, wet forming, porosity-preserving dewatering, drying, quality control, reeling/trim handling, packaging, electric internal handling and attributable on-site effluent treatment. Add each actual aid, packaging component, waste and direct emission as an atomic row. Aggregate into one foreground unit while retaining independent stage meters; do not output the same paper again between manufacture and packaging [jrc-pulp-paper-bref-2015, 7.1.1–7.1.3, 7.1.10, 7.1.11.4].
- `boundary_services`: Link fibre purification, pulping/bleaching and steam-supply combustion through compatible upstream units; do not duplicate their resource withdrawals or emissions in this foreground. Split externally transferred wastewater and directly discharged on-site treated water by their actual quantities; do not count the same water/pollutants both at transfer and outfall. On-site boilers, acid washing, wet-strength resin or composite-fibre routes need prior evidence/method expansion, not silent inclusion.
- `boundary_recovery`: Match internal sender/receiver amounts for white water, wet/dry broke and recovered fibre in the physical process diagram; cancel internal recirculation once in the aggregated external inventory. Collect actual cleanliness constraints, grade-change flushing, downtime and effluent loads; assume neither closed water circuits nor zero losses [jrc-pulp-paper-bref-2015, 7.1.3, 7.1.11.4].

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| filter_mill | Filter base-paper manufacture, reeling/packing and utilities/treatment | required | Declared non-integrated porosity-preserving resin-free route | Aggregated foreground with stage physical diagram and meters | 1 kg reference flow |

### Process: Filter base-paper manufacture, reeling/packing and treatment (`filter_mill`)

#### Inputs

##### Product flows

###### Purchased chemical wood pulp (`wood_pulp`)

Include only purchased bleached, non-dissolving papermaking wood pulp with purity suitable for the declared filter grade. Record actual species, pulping and bleaching route, received mass and measured solids; do not use a dissolving-pulp or recovered-fibre supply dataset.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_fibre`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre`
- Sources: `jrc-pulp-paper-bref-2015`; `hahnemuhle-filter-catalog`

###### Purchased purified cotton pulp (`cotton_pulp`)

Conditional on a declared purified cotton-cellulose furnish, alone or with the wood-pulp input. Cotton purification is upstream, not omitted. No blend ratio is prescribed.

- Selected flow: Purified cotton-linters papermaking pulp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_fibre`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre`
- Sources: `jrc-pulp-paper-bref-2015`; `hahnemuhle-filter-catalog`

###### Purchased medium-voltage electricity (`electricity`)

Only actual 1–35 kV consumer-side grid-average supply uses this interface. Source geography is CN; actual supplier/site region, year, consumption mix, voltage and delivery/loss gate must be compatible before background linkage. Meter stock preparation, vacuum, dryer drives, rewinding, handling, treatment and actual maintenance/grade-change loads separately. Native Net calorific value/MJ is the electrical-energy reference, not fuel heat; measured kWh × 3.6 converts energy only.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual attributable amount under `cp_energy`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-pulp-paper-bref-2015`

###### Purchased steam mass (`steam`)

This identity is pressure-limited to 0.45 MPaG industrial-boiler steam delivered through pipes. Include only when the actual supply matches that pressure and physical state. Record inlet temperature, dryness, pressure gauge/absolute convention, flow, supplier interface and returned condensate. A mass identity does not establish net usable heat or the supplier dataset basis. An incompatible pressure is unresolved, never silently substituted.

- Selected flow: Steam `aefdb9e8-b74c-4d25-bbfa-c4a1ff59dcdc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_steam`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `jrc-pulp-paper-bref-2015`

###### Purchased treated tap water (`process_water`)

Conditional on purchased treated tap water at the mill inlet. Use measured mass or measured volume with actual density and temperature; the database secondary conversion is not a measured site density. Do not also inventory the supplier water abstraction as a foreground resource withdrawal.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_water`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sodium hydroxide cleaning solution (`cleaning_naoh`)

Conditional only on actual use of 50% commercial sodium hydroxide solution for circuit cleaning. Record purchased solution mass, certificate concentration, rinse disposal and stocks. This is not an ingredient requirement or a default cleaning recipe. Retain actual active chemical, remaining additives/impurities and carrier-water fractions plus provider as-supplied wet reference and stocks; source CAS is absent and must be verified with the supplier, not invented. Purchased whole formulation is counted once; components are physical balances, not second purchases.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_chemical`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

###### Hydrogen peroxide circuit hygiene solution (`peroxide`)

Conditional only on actual use of 50% aqueous hydrogen peroxide for circuit hygiene; check supplier region and concentration. Measure solution mass and active fraction independently. BREF oxidising biocide guidance does not prescribe this concentration or a positive dose. Retain actual active chemical, remaining additives/impurities and carrier-water fractions plus provider as-supplied wet reference and stocks; source CAS is absent and must be verified with the supplier, not invented. Purchased whole formulation is counted once; components are physical balances, not second purchases.

- Selected flow: Hydrogen peroxide solution, 50% in water `f151f740-6c3a-42b9-abed-e44220792750`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_chemical`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

###### Uncoated paper reel wrapper (`wrap`)

Conditional actual uncoated cellulosic reel wrapper, separate from net filter paper and never a substitute reference. Broad packaging-paper names/comment support this physical subset, but source CPC32129 wood-free graphic category is inconsistent with general packaging scope; source/provider clarification remains pending. Verify actual fibre route/composition, sizing/additives, grammage, moisture, whole shipped mass and provider wet/dry/gate basis. No laminate, resin coating, formed-bag identity or default recipe.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_pack`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Polyethylene wrapping film (`film`)

Conditional actual unbacked, non-adhesive, non-laminated PE wrapping film, separate from filter-paper mass. Record actual resin grade, additives, thickness, structure, recycled content, whole shipped mass and provider reference/gate. Other composite wrap needs independently compatible component/whole-product identities without double purchase. Film names/CAS9002-88-4/comment are concordant; CPC29220 luggage classification remains a disclosed source defect pending source/provider clarification. No default recipe or credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_pack`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Paperboard reel core (`core`)

Conditional actual cylindrical paperboard reel core; the two official synonyms describe one physical tube. Exclude tare from net paper Q but retain full new/returned receipts, gross dispatch, opening/closing stocks, internal reuse, damage/loss/discard, unit masses and return/cleaning/repair transport/utilities. Repeated circulation is not repeated new-core manufacture. Attribute actual service/manufacture burdens from period stock and use records while retaining gross physical dispatch/return amounts; do not assume a cycle count, core weight, loss fraction or recycling credit.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_pack`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Direct river-water withdrawal (`river_water`)

Conditional on own river abstraction at the environmental boundary. Measure external withdrawal before treatment and record basin, source, time and return destination. Do not label a generic freshwater resource as the confirmed river source.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable amount under `cp_water`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Direct groundwater withdrawal (`groundwater`)

Conditional on own well abstraction. Meter each well at the environmental boundary; record aquifer and level evidence. The registry resource category does not prove aquifer renewability or a regional depletion factor.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable amount under `cp_water`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Accepted uncut filter-paper reel (`finished_filter`)

Exactly one reference output: 1 kg net saleable uncut, unimpregnated, resin-free cellulose filter paper at actual delivery moisture. Packaging and reel core are excluded from this quantity. The broad official flow name is used only for this qualified subset, never to add cigarette, felt or wrapping paper manufacture. The official Chinese reference name contains the adjacent sulphite-term spelling defect 亚硫酸脂; retain the official label and source/provider clarification, not a chemistry claim about this filter-paper subset.

- Selected flow: Sulphite wrapping paper, filter paper and paperboard, felt paper and other paper and paperboard, cigarette paper not cut to size or in the form of booklets or tubes `f0ae48ec-7a6d-4797-978d-d2fd60ab4aef`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_mass`
- Sources: `jrc-pulp-paper-bref-2015`; `hahnemuhle-filter-catalog`

###### Returned condensate (`condensate_return`)

Conditional actual treated industrial utility liquid-water condensate physically returned to the heat supplier and accepted for industrial reuse. Broad Process Water names/synonyms explicitly include utility and recirculating process water, with no opposed treatment route or temperature field; native Mass/kg is a physical water exchange, not a verified hot-return/background dataset. Record actual composition/boiler additives, water quality, whole return mass, T/P/liquid state, stocks, return enthalpy, receiving gate and provider reference/basis compatibility. Keep supply and return masses gross and distinct. No negative steam purchase, second manufactured-water burden, avoided-energy credit, or conversion to wastewater, drinking water, vapour or an additional paper reference. If actual quality/status is incompatible, obtain its own identity.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_steam`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `jrc-pulp-paper-bref-2015`

##### Waste flows

###### Screening rejects leaving the mill (`screen_rejects`)

Conditional actual wet screening rejects exported from this purchased-purified-pulp stock-preparation route. Broad industrial Waste solid includes industrial discards and has no opposed origin/treatment field. Record actual wood/cotton fibre and contaminant composition, entrained water/chemicals, wet handover mass/dry solids, carbon origin, stocks, legal status and receiver/provider wet/dry basis. Do not merge with primary or biological sludge or invent a dry-paper-scrap/ash composition. Internally recovered fibre is an equal-endpoint return, not this waste export; no default treatment or credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_waste`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Separated primary papermaking sludge (`primary_sludge`)

Conditional on physically exported primary clarification sludge from this papermaking route. Record dry fibre/mineral/chemical composition, water fraction, dewatering energy and receiver. Do not merge with biological sludge.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_waste`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Separated biological papermaking sludge (`biosludge`)

Conditional on exported excess biomass from on-site treatment of this paper effluent. Use the broad paper-production sludge identity only with explicit biological origin, solids/composition and treatment receiver. Its mass is separately measured and never duplicated as primary sludge.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_waste`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Dust collected by extraction equipment (`collected_dust`)

Conditional actual captured dry cellulose-filter-paper dust from winding/trim handling and physically exported. Broad industrial collector Dust supports captured Waste/Mass identity without an opposed material/route. Record actual cotton/wood fibres, moisture, impurities, collection device, stocks, legal status and recipient/provider reference basis; no default purity, capture fraction or disposal. Captured, internally repulped and exported amounts are weighed separately with equal internal endpoints; captured waste is not atmospheric PM. Source general housekeeping advice is not a sampling, maintenance-frequency or non-biodegradability rule.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_waste`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Uncoated cellulose broke exported as waste (`discarded_broke`)

Conditional only on uncoated paper broke leaving the mill as waste. Keep wet-end/dry-end origin, moisture, resin-free status and receiver. Internal broke repulping is not a second virgin fibre input or an exported output. Sold co-product recovered paper requires a separately verified product-flow identity and allocation assessment.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_waste`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Process wastewater to external treatment (`exported_wastewater`)

Conditional actual process/cleaning wastewater handed to an external treatment operator. Broad Waste liquid explicitly includes industrial wastewater without an opposed origin/route. Native Mass/kg is whole wet handover mass, measured directly or matched measured V × actual effluent density at the same T/state; retain volume, H2O fraction, suspended/dissolved solids, chemicals, C/N/P/species/QA loads, stocks and receiver/provider wet/dry reference separately. These loads are not complete liquid mass. The same external-treatment branch cannot also release foreground freshwater carrier or its provider downstream pollutants; actual split branches have distinct measurements. No assumed treatment or credit.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual complete wet handover mass, weighed or matched measured volume × measured effluent density at the same T/state / accepted net paper Q. No default density, pollutant-load substitution or repeated normalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Water vapour released outdoors (`water_air`)

Measure drying evaporation and other actual outdoor vapour with a reconciled water balance; account separately for exhaust ventilation and collected condensate. No transpiration identity or indoor compartment substitution.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_water`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Liquid effluent discharged to freshwater (`water_fresh`)

Conditional actual final liquid H2O carrier released to a documented freshwater recipient after onsite treatment, native Volume/m3/CAS7732-18-5. Derive actual H2O mass from measured mixed-effluent wet mass and water fraction or equivalent verified water-component balance, then divide by documented water density at discharge T. Do not equate whole mixed-effluent volume to pure water. Retain species and DOC/QA load ledgers separately, avoiding duplicate physical constituent mass. Exclude internal white water, returned utility condensate and the same externally treated wastewater branch; record actual split branches and recipient/state separately.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual final H2O component mass / documented water density at discharge T / accepted net paper Q, once; whole-liquid volume and species/QA loads retained separately, external-treatment branch excluded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Biogenic carbon dioxide from on-site treatment (`co2_bio`)

Conditional on actual biological conversion of biogenic fibre carbon at the on-site wastewater plant. Use measured source-resolved carbon balance or validated site method, distinguishing fossil chemical carbon. Keep actual biogenic CO2 in LCI irrespective of GHG reporting exclusions; do not infer it from total COD removed alone.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_bio`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bio`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### Biogenic methane from on-site treatment (`ch4_bio`)

Conditional on actual measured or site-validated uncollected methane release from the treatment route. Record substrate carbon origin, dissolved methane and capture/oxidation. Aerobic treatment is not assumed to give a default positive methane factor or an automatic zero.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_bio`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bio`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### Nitrous oxide from on-site treatment (`n2o`)

Conditional on demonstrated N2O release from the actual nitrogen-treatment route. Use N2O mass, not N2O-N mass without a documented species conversion. N2O is not part of NOx or a proxy for other nitrogen species.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_bio`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bio`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### Fine cellulose particles released outdoors (`pm25`)

Conditional on actual airborne particles in the PM2.5 fraction after capture, including fugitive reeling or trim handling. Measure size-specific release; do not substitute captured dust or a universal cutting factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_air`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Intermediate-size cellulose particles released outdoors (`pm2510`)

Conditional on actual particles above PM2.5 and up to PM10. If observations are cumulative PM10 and PM2.5, derive this disjoint fraction only from compatible simultaneous measurements and documented uncertainty; do not add cumulative PM10 to these fractions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_air`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Coarse cellulose particles released outdoors (`pmover10`)

Conditional on actual particle release above PM10; retain measurement cutoff and sampling conditions. In a disjoint size ledger this fraction is counted once, separately from captured dust and from particulate matter already retained in wastewater or sludge.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_air`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Ammonium discharged to freshwater (`ammonium`)

Conditional on measured NH4+ at the final freshwater outfall. Convert NH4-N to NH4+ only with stated stoichiometry and laboratory reporting definition. Do not substitute gaseous ammonia or total nitrogen.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_species`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-pulp-paper-bref-2015`

###### Nitrate discharged to freshwater (`nitrate`)

Conditional on measured NO3- at the final freshwater outfall. Preserve ionic-species versus nitrate-N basis and documented conversion. Nitrite and organic nitrogen require separate identified rows if present; total nitrogen does not confirm their composition.

- Selected flow: nitrate `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_species`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-pulp-paper-bref-2015`

###### Phosphate discharged to freshwater (`phosphate`)

Conditional on measured phosphate at the final freshwater outfall with the laboratory reporting species defined. Convert phosphate-P only with corresponding stoichiometry. Do not assign all total phosphorus to phosphate, or count total phosphorus and its resolved phosphate again.

- Selected flow: phosphate `08a91e70-3ddc-11dd-9787-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_species`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-pulp-paper-bref-2015`

###### Dissolved organic carbon discharged to freshwater (`toc`)

Conditional on a direct DOC assay reported as carbon mass at the final freshwater outfall. This single identified analytical carbon pool is supplementary to pollutant speciation; it cannot replace a known chemical emission or be inferred from COD/BOD using an unsupported factor. Keep carbon-balance bookkeeping separate from any LCIA treatment of overlapping indicators.

- Selected flow: DOC, Dissolved Organic Carbon `21291e2b-f570-4264-a430-1522a6d67805`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable amount under `cp_species`; divide by cp_mass net accepted paper mass Q for the same period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-pulp-paper-bref-2015`

## 7. Allocation and Co-product Handling

- `allocation_subdivide`: First avoid allocation using batches, grade-specific records and measured machine-time/submeters; retain an independent unallocated physical ledger for materials, water, dry solids and carbon. Do not mechanically multiply physical paper, broke, sludge or condensate outputs by an environmental-burden allocation share. Both endpoints of an internal stage transfer must have the same physical amount.
- `allocation_shared`: At a multi-grade mill attribute actual stock preparation, porosity-preserving dewatering/drying, grade changes and cleaning before allocating inseparable utilities using evidenced causal drivers such as metered electricity/heat or occupancy time. Mass or economic allocation requires explanation of causal limits, actual period/prices and sensitivity; do not apply one tonne-of-paper coefficient to all speciality grades. This allocation order is an explicit PCR method choice; BREF supports only the factual grade-change and water/energy differences [jrc-pulp-paper-bref-2015, 7.1.11.4].
- `allocation_residuals`: Link wastes to actual receiving treatment without automatic credits from sale or a co-product label. For a usable sold co-product, first identify it and retain its full physical yield, then decide appropriate allocation or independently reviewed substitution; apply no unsupported avoided-emission credit in the baseline inventory. Count reuse and releases once.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | filter_mill | finished_filter | foreground_record | batch; grade; reel ID; net paper mass Q; packaging/core tare; moisture; grammage/caliper/porosity/retention-rate/ash/strength tests and conditions; rejects/stocks | Calibrated weighing with reel-specific tare, traceable sales/stocks and actual customer grade tests retaining pressure and particle definitions. First retain unallocated physical period totals. Specific aggregation: net accepted paper mass Q of the same period at actual moisture, excluding packaging; then divide by cp_mass Q to report per 1 kg reference flow. | kg | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_fibre | filter_mill | wood_pulp; cotton_pulp | foreground_record | each pulp supplier; purification/bleaching route; grade; batch; net received wet mass; solids; stocks; internal broke | Weigh each pulp separately, reconcile receipt/issues and representative moisture assays, obtain supplier upstream reference basis. First retain unallocated physical period totals. Specific aggregation: attributable period quantity of each external pulp / Q; internal broke cancels separately; this is the single normalization to per 1 kg reference flow. | kg | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_energy | filter_mill | electricity | foreground_record | stage electricity meters; inlet voltage; load/time; changeover/downtime; shared driver; supplier region/period | Calibrated meters and supplier bills, reconcile stage meters to mill total and attribute shared grade loads by evidenced driver. First retain unallocated physical period totals. Specific aggregation: attributable purchased electricity / Q; unit-group conversion of kWh to MJ only; this is the single normalization to per 1 kg reference flow. | kWh; MJ | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_steam | filter_mill | steam; condensate_return | foreground_record | inlet pressure/temperature/dryness; steam mass flow; returned-condensate mass/temperature; vents/leaks; stocks; supplier pressure and mass/energy reference basis | Calibrated inlet/return meters, matched-period thermodynamic states and pipe losses reconciled to supplier invoice; missing supplier definition leaves quantity link pending. First retain unallocated physical period totals. Specific aggregation: each actual external steam/condensate mass separately / Q; retain separate unallocated enthalpy balance; this is the single normalization to per 1 kg reference flow. | kg; MJ | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_water | filter_mill | process_water; river_water; groundwater; water_air | foreground_record | purchased/abstracted water source; calibrated meters; density/temperature; white-water recycle; cleaning/cooling; actual H2O fractions; recovered condensate; moisture in solids; evaporation; stock change | Meter separate sources, reconcile environmental/technosphere boundaries, use actual density and collect moisture/evaporation physical basis and uncertainty. First retain unallocated physical period totals. Specific aggregation: each external water quantity / Q; internal circulation recorded separately without duplicate external exchanges; this is the single normalization to per 1 kg reference flow. | kg; m3 | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_chemical | filter_mill | cleaning_naoh; peroxide | foreground_record | each commercial name/composition/CAS; supplier; concentration; wet mass; active content; receipts/issues/stocks; cleaning/changeover use; disposal | Reconcile purchases, weighing/dosing logs and safety/quality certificates for each substance; include a specific solution only with actual use evidence, add other substances separately. First retain unallocated physical period totals. Specific aggregation: actual consumed mass of each commercial solution / Q; avoid duplicated active/solvent mass; this is the single normalization to per 1 kg reference flow. | kg | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_pack | filter_mill | wrap; film; core | foreground_record | net mass of each packaging item; grade; core specification; new/returned receipts; opening/closing stocks; dispatch/return/internal reuse/damage/loss/discard; actual unit mass; actual cycles; dispatched amounts; waste | Weigh each component, reconcile stocks/despatch and link reusable-item burdens by real use cycles; do not divide dispatched physical mass by an assumed lifetime. First retain unallocated physical period totals. Specific aggregation: actual consumed quantity of each component / Q; retain complete physical dispatch ledger; this is the single normalization to per 1 kg reference flow. | kg | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_waste | filter_mill | screen_rejects; primary_sludge; biosludge; collected_dust; discarded_broke | foreground_record | each exported stream; source stage; net wet mass; dry fraction; composition/contamination; receiver/route/acceptance; internal recovery | Calibrated stream-specific weighing and transfer tickets, separate sludge/reject sampling, distinguish captured dust, airborne release and internal return. First retain unallocated physical period totals. Specific aggregation: actual exported mass of each stream / Q; no waste output without evidence of crossing the boundary; this is the single normalization to per 1 kg reference flow. | kg | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_effluent | filter_mill | exported_wastewater; water_fresh | foreground_record | flow/sampling interval; actual transfer/outfall; pretreatment; receiver; temperature/state; measured density; wet mass; H2O fraction; analysed loads; stocks; uncovered periods | Calibrated flow meters and representative flow-matched composite sampling; separate on-site/external-treatment branches and reconcile receiver dataset. First retain unallocated physical period totals. Specific aggregation: each exported whole-liquid wet mass and final freshwater H2O-component volume separately / Q; count the same water once; this is the single normalization to per 1 kg reference flow. | kg; m3 | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_species | filter_mill | ammonium; nitrate; phosphate; toc | foreground_record | each species concentration/basis; matched-interval water volume; assay method/limits/non-detect; N/P/C mass definitions; other known chemical species; COD/BOD/TSS/TN/TP/AOX indicators | Use matched final-outfall flows/assays to calculate species loads; document molar-mass source and stoichiometry for conversions. Keep COD and other aggregate tests as separate QA indicators, never fabricated speciation. First retain unallocated physical period totals. Specific aggregation: sum interval-specific loads / Q; avoid double counting resolved species with carbon/nitrogen/phosphorus aggregates; this is the single normalization to per 1 kg reference flow. | mg/l; kg; m3 | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_air | filter_mill | pm25; pm2510; pmover10 | foreground_record | exhaust/fugitive source; sampling position; temperature/humidity/pressure and standard/actual state; wet/dry gas basis; flow/duration; disjoint size fractions; collected dust; operation; uncertainty | Inspect actual dry reeling/trim and dryer exhaust, measure size-specific residual outdoor release with concentration/airflow at the same gas state; no universal cutting factor. First retain unallocated physical period totals. Specific aggregation: actual release of each disjoint particle fraction / Q; collected dust is not added as airborne release; this is the single normalization to per 1 kg reference flow. | kg; mg/m3; m3 | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |
| cp_bio | filter_mill | co2_bio; ch4_bio; n2o | foreground_record | treatment route; C/N origin/composition; influent/effluent/sludge; measured gas/dissolved gas; capture/oxidation; method applicability/uncertainty | Actual gas measurements or evidenced site species/C/N-conversion method; no unverified COD-to-CO2 or default methane factor. First retain unallocated physical period totals. Specific aggregation: actual release load of each gas / Q; distinguish biogenic/fossil carbon; this is the single normalization to per 1 kg reference flow. | kg | per batch/continuous, including abnormal/changeover records | same complete representative production period; disclose gaps/abnormality | declared grade and attributable shared units | per 1 kg reference flow | calibration, raw tickets/assays, supplier definitions and reconciliation uncertainty |

Maintenance and wear-material investigation: Survey actual forming wire/fabric, transport/dryer felts, suction covers, trim/cutting blades, lubricating oil/grease and cleaning/service materials for the declared equipment. Record material/grade/composition, replacement/consumption and opening/closing stock, service stages, energy/water, collected wear particles/used items and recipient. Add each actual positive input and output as its own atomic material/status row with a real flow query/direct/native-unit review; do not use one functional maintenance bundle, inferred plastic/steel/felt chemistry, generic default frequency or the art-paper pressing route. Evidence of no exchange in the period is distinct from absent investigation.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide each actual attributable external exchange quantity by net accepted paper mass Q of the same period; finished_filter is fixed at 1 kg. Reconcile physical balances using original unallocated amounts, not physical co-product yields multiplied by burden-allocation shares. | cp_mass; all collection protocols | per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| species_load | ammonium, nitrate, phosphate, toc | For each interval, load kg = concentration mg/l * matched volume m3 * 0.001; first reconcile the assay species/N/P/C basis using traceable stoichiometry, then sum and divide by Q. Unknown species composition is not inferred from an aggregate indicator. | cp_species; cp_effluent; cp_mass | kg species or measured DOC carbon per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| particle_load | pm25, pm2510, pmover10 | Determine interval mass from actual concentration, state-matched airflow and duration or an evidenced fugitive method; count disjoint PM2.5, PM2.5–PM10 and >PM10 once, sum the period and divide by Q. Do not add cumulative PM10/TSP to these fractions; unresolved size splits remain gaps. | cp_air; cp_mass | kg per disjoint particle fraction per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| steam_compatibility | steam, condensate_return | Normalize actual steam and return masses separately; retain an inlet/return/vent/leak/stock enthalpy balance. Supplier mass or energy reference definition must explicitly match the site; an unknown definition is neither net delivered heat nor a conversion factor of 1. | cp_steam; cp_mass; supplier definition | kg steam and returned condensate; separate heat QA and compatible provider link | jrc-pulp-paper-bref-2015 |
| physical_balances | material, water and carbon ledgers | Unallocated external inputs = physical paper/packaging/core dispatch + exported wastes + elementary releases + utility return + closing-minus-opening stocks + explained residual. Reconcile solids/water in each wet stream; keep steam-water and process-water circuits distinct, with equal internal endpoints cancelled once. Carbon follows actual composition/origin; retain actual biogenic CO2 and avoid duplicate DOC/identified chemical carbon. | all collection protocols; measured stream composition | unallocated solids/water/carbon ledgers and explained residual | jrc-pulp-paper-bref-2015 |
| effluent_native_basis | exported_wastewater; water_fresh | Whole handed-off liquid kg = measured V_m3 × measured effluent density_kg/m3 at the same T/state, or direct wet weighing. Final liquid H2O m3 = actual H2O component kg / documented water density at discharge T. Divide each resulting external quantity by Q once; treatment-transfer and direct-discharge branches are mutually exclusive. | cp_effluent; cp_water; cp_mass | kg whole external liquid and m3 final H2O carrier per 1 kg reference flow | jrc-pulp-paper-bref-2015 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_grade | finished_filter | Retain grade, filtration-test conditions, porosity and furnish; mill-gate paper mass cannot replace functional comparison of final filters. | hahnemuhle-filter-catalog; customer specification |
| dq_identity | all inventory rows | Check name/CAS/classification/route/compartment/property/unit for each row. Decide physical identity, quantity basis and supplier/receiver compatibility separately; unresolved identities retain specific names and blank UUID. | supplier/receiver records; direct identity and property definitions |
| dq_balance | all inventory rows | Reconcile complete same-period physical mass/water/carbon ledgers, quantify residual/measurement uncertainty; allocated burdens do not substitute for physical balances. | cp_mass; stock and calibrated stage records |
| dq_emissions | all elementary outputs | Separate size-resolved airborne dust, captured dust and waterborne particles; add each actual species. One non-detect proves no period-wide zero; any external factor needs actual technology/operation applicability, not a transplanted single-mill default. | cp_air; cp_species; cp_bio; jrc-pulp-paper-bref-2015 |
| dq_linkage | all positive external exchanges | A concrete data package remains incomplete while actual amounts, supplier reference conditions, cotton-purification burden, steam or external-treatment links are unknown; methodology text is not a completed dataset. | supplier and treatment reference definitions; collection records |

The IPCC industrial-wastewater original distinguishes CH4 under significant organic loading and intended/unintended anaerobic conditions, treatment-system N2O and downstream receiving-water emissions. This PCR requires actual site species evidence and adopts no national-inventory default factors or downstream receiving-water emissions as treatment-plant foreground. Its national GHG exclusion of biogenic CO2 does not apply to this complete LCI; retain measured biogenic CO2 and any evidenced fossil-carbon release [ipcc-wastewater-2019, 6.1, 6.2.3, 6.4.1.1].

## 9. Validation Rules

- `validate_scope`: Require all reference qualifiers and exactly one finished_filter output at 1 kg; reject cigarette, resin-hardened, coated/impregnated, converted filter media and unsupported routes. Neither shared CPC nor a broad UUID widens scope.
- `validate_measurement`: All rows use the same positive finite Q at actual delivery moisture; EN/ZH reference amount, denominator, collection aggregation and formulas agree. Property/unit/species/supplier definitions must match; unknown steam pressure/heat basis, purified-pulp state or unsupported conversion cannot pass.
- `validate_physical`: Check unallocated mass/water/carbon, stocks/residuals and equal internal endpoints. Packaging is outside reference-paper mass but remains in physical dispatch. Captured dust is not airborne release; particle fractions are disjoint; transferred/direct-discharge water is not duplicated; retain real biogenic CO2.
- `validate_dataset_completeness`: Resolve identity, amount, supply and receiving-treatment links for every actual positive exchange before delivering a complete dataset. Add each actual unlisted substance as a specific atomic row; evidenced nonoccurrence may be not applicable. Blank UUID, missing monitoring, tool failure or absent measurements are not zero or successful validation.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground filter-paper manufacturing package; cradle-to-gate dataset only after compatible supplier and receiving-treatment links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply of uncut qualitative cellulose filter base paper within the stated grade/route; consumer models subsequent conversion |
| excluded_use | Proxy for all CPC32136; cigarette, ashless/hardened filters, formed filters, membranes; mass-only filtration service comparison; claims of measured LCI at the cited producer |
| required_metadata | Reference qualifiers; process/boundaries; each atomic row; site/period; mass/water/carbon ledgers; allocation drivers; supplier/treatment links |
| required_quality_disclosure | Identity/amount/upstream gaps; steam pressure and return basis; purified-cotton-pulp identity; unknown pollutants/measurement limits; metadata defects; balance residual and uncertainty |
| update_trigger | Changed pulp/purification, resin or impregnation, porosity/performance grade, dewatering/drying, energy interface, packaging/treatment or supplier reference basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-paper-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), JRC95678, DOI 10.2791/370629. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf ; 2.2.2.1.4–2.2.2.2 (printed pp.48–50), 7.1.1–7.1.3 (pp.660–665), 7.1.10 (p.670), 7.1.11.4 (pp.674–676), 7.2.2.3 (pp.687–688) | Original supports papermaking stages, filter-paper porosity/drying distinctions, grade-change/water-loop limits, net saleable output and matched flow/concentration measurement. Sector/case quantities are not default recipes/values; allocation and specific site protocols are explicit PCR choices. |
| hahnemuhle-filter-catalog | literature | Hahnemühle, Filter Papers & Membranes, official English catalogue, https://www.hahnemuehle.com/fileadmin/user_upload/bilder/Filtration/pdf/web-10603856_Katalog_Filtration_EN.pdf ; PDF pp.60/62/64/66/74/124 (printed pp.59/61/63/65/73/123); dated access snapshot 2026-10-11 | Producer original distinguishes ordinary highly pure qualitative paper from resin-hardened/ashless, glass/quartz and other media; supports reel delivery and filtration-test qualifiers. Grade-specific performance/purity/output are not universal values; no factory purification/energy recipe is inferred. |
| hahnemuhle-paper-manufacturing | literature | Hahnemühle, Paper manufacturing, https://www.hahnemuehle.com/en/about-us/paper-quality.html ; Fourdrinier paper machine and continuously checked/wound paper paragraphs; dated access snapshot 2026-10-11 | Supports only that its Fourdrinier machine also makes filter paper which is dried/checked/wound. Mixed art-paper pressing/smoothing description does not prove this grade’s process; BREF and actual acceptance govern porosity preservation. |
| ipcc-wastewater-2019 | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 5 Chapter 6, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/5_Volume5/19R_V5_6_Ch06_Wastewater.pdf ; 6.1 (p.6.7), 6.2.3 (pp.6.30–6.31), industrial N2O in 6.4.1.1 (pp.6.44–6.45) | Supports only industrial wastewater CH4/N2O route, C/N-source and quantity-basis distinctions. Prefer actual point-source data; adopt no national/sector default factors or downstream receiving-water release as foreground. Its biogenic-CO2 reporting exclusion is not an LCI omission rule. |
