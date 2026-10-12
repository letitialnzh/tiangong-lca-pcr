---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.other-wild-edible-edible-products-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Other wild edible products, not elsewhere classified

## 1. Scope and Applicability

This PCR covers otherwise unclassified edible products obtained by gathering from untended sources, not only leafy vegetables. It accommodates eligible leaves, shoots, stems, flowers, roots/tubers, non-berry fruits, seeds and other edible parts or products only after exclusion of more specific classifications. Those examples are not automatic classification decisions or interchangeable foods. Record the actual edible species/part, wild-source status, incoming state, acceptance specification and primary producer/gatherer handover.

Exclude deliberately grown or managed edible production, wild nuts/mushrooms/truffles/berries assigned to their own subclasses, animal/fishery products and any other goods assigned elsewhere, and cooked, fermented, extracted or other processed food classified outside this primary category. Do not include a sap, spice, medicinal product or seed simply because it can be eaten; review its specific class first. Commercial preservation that changes classification requires another applicable PCR rather than silently extending this one.

This is a category-level data-production method, not one interchangeable commodity or one platform flow. Each foreground dataset declares one compatible product/state/gate or a measured composition; incompatible products and routes are not pooled by default. Quantities, grades, treatment recipes and concrete identities must come from the actual case.
## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.other-wild-edible-edible-products-n-e-c` |
| classification_refs | CPC 3.0 03239; `exact` |
| covered_products | This PCR covers otherwise unclassified edible products obtained by gathering from untended sources, not only leafy vegetables. It accommodates eligible leaves, shoots, stems, flowers, roots/tubers, non-berry fruits, seeds and other edible parts or products only after exclusion of more specific classifications. Those examples are not automatic classification decisions or interchangeable foods. Record the actual edible species/part, wild-source status, incoming state, acceptance specification and primary producer/gatherer handover. |
| excluded_products | Exclude deliberately grown or managed edible production, wild nuts/mushrooms/truffles/berries assigned to their own subclasses, animal/fishery products and any other goods assigned elsewhere, and cooked, fermented, extracted or other processed food classified outside this primary category. Do not include a sap, spice, medicinal product or seed simply because it can be eaten; review its specific class first. Commercial preservation that changes classification requires another applicable PCR rather than silently extending this one. |
| representative_product | A specifically eligible gathered leafy/shoot, root/stem, non-berry fruit or other edible-part lot; no fixed species or leafy-food proxy |
| production_route | Actual owned source production/collection or compatible purchased receipt; actual primary preparation/grading; actual eligible treatment/holding; eligible composition assembly only if applicable; real final producer handover |
| market_state | the actual primary producer handover of the declared material/state or eligible composition; Accepted other wild edible product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted other wild edible product; the actual primary producer handover of the declared material/state or eligible composition |
| How much | 1 kg |
| How well | One identified material/composition and declared grade/state, moisture, functional/intended-use and acceptance requirements; no universal performance or safety value |
| How long or cycle | One declared accepted dispatch lot or representative reporting period, with all contributing production/collection, treatment, stocks and shared-service periods linked |
| reference_flow_link | `dispatch_accepted_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted other wild edible product |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual product family; species/material and marketed part; composition and accepted grade; wild/managed/co-product/purchased origin and upstream coverage (managed production is excluded for wild food); actual incoming and delivered state; moisture basis; retained treatment matter and product components; selected branch and actual node/bypass graph; lot/site/season/period and stocks; net weighing/tare method; intended use and buyer specification; actual producer gate/recipient; native exchange units and evidence gaps |

Accepted net mass of the declared primary food in its actual accepted state, excluding transport packaging, soil, free washwater and rejected matter. Keep accepted peel/shell only when sold as part of the declared whole-food state, with edible fraction disclosed. Do not normalize a whole-food inventory by an edible-only denominator without an explicit separate conversion.
## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_reference with a calibrated scale and the same acceptance record. Accepted net mass of the declared primary food in its actual accepted state, excluding transport packaging, soil, free washwater and rejected matter. Keep accepted peel/shell only when sold as part of the declared whole-food state, with edible fraction disclosed. Do not normalize a whole-food inventory by an edible-only denominator without an explicit separate conversion. |
| `common_denominator` | all inventory rows | actual exchange property | actual unit | Every amount is per 1 kg reference flow. Keep attributable lot/period totals and divide by the same positive accepted net dispatch mass; never divide by an intermediate output, item count or a different moisture/state basis. |
| `moisture_and_components` | wet/dry and treated/composite material | measured substrate mass and water fraction | kg; kg/kg | State wet- or dry-basis moisture and method. Apply dry-matter conversion only to the botanical substrate; retained chemicals, foreign matter and structural components have separate ledgers. Do not apply a fresh-rattan, fresh-leaf or assumed density factor to every category member. |
| `native_units_and_formulations` | supplies, services and direct releases | actual compatible property | actual unit | Preserve each carrier/service/substance unit. Convert volume, count, nutrient/active-ingredient or solution concentration only using compatible measured/evidenced factors; do not sum unlike native units. Formulation/active contents and gross bath capacity are not interchangeable consumed amounts. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual untended source before gathering, or compatible already gathered product at its true receipt gate |
| starting_condition_role | Natural, owned-production or technosphere-receipt interface, selected from actual ownership and incoming state |
| product_classification_scope | Other wild edible products, not elsewhere classified; CPC 3.0 03239; `exact` |
| recursive_input_rule | Same-category purchased feed keeps one compatible upstream dataset link and completed-process coverage; do not recurse into or duplicate represented operations. Declare a truncated upstream gap if coverage cannot be evidenced. |
| upstream_dataset_requirement | Match material, source regime, actual state/gate, property/unit and process/burden coverage; do not use a narrower representative as proof for a different category member |
| disclosure | actual product family; species/material and marketed part; composition and accepted grade; wild/managed/co-product/purchased origin and upstream coverage (managed production is excluded for wild food); actual incoming and delivered state; moisture basis; retained treatment matter and product components; selected branch and actual node/bypass graph; lot/site/season/period and stocks; net weighing/tare method; intended use and buyer specification; actual producer gate/recipient; native exchange units and evidence gaps |

### Category Branch and Activation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `wild_aboveground_parts` | Eligible leaves, shoots, stems and flowers | Identify the actually marketed edible part and whether its acceptance includes stalks or other attached parts. Collect seasonal gathering, trimming and actual fresh protection; do not assume every species is ready to eat. | `unsd-cpc3-2025` |
| `wild_belowground_parts` | Eligible roots, tubers and below-ground parts | Activate digging, soil separation, washing and peeling only when performed. Keep removed edible biomass and incidental soil in separate ledgers; measure wet soil/washwater transfers and dry-matter losses without inventing soil-emission factors. | `unsd-cpc3-2025` |
| `wild_other_food` | Eligible non-berry fruits, seeds and other residual wild foods | Verify residual-class eligibility and edible fraction. Record actual shell/peel/seed separation, ripeness and grade; specific wild nuts or berries retain their own class. A marketed whole food is weighed whole when its acceptance basis includes the peel/shell; report edible fraction separately, not as an unannounced denominator change. | `unsd-cpc3-2025` |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_ownership` | actual route and ownership | Select actual source/receipt, preparation, treatment, assembly if eligible, and dispatch states. Owned operations must be included; purchased completed-state feed enters its true receiving node with verified upstream coverage, not a duplicated standing-resource or managed-growth stage. A mixed-origin batch retains separate origin portions and attribution. |  |
| `handoffs_and_bypass` | active nodes and internal transfers | Record predecessor, successor, state and lot IDs at every active handoff and explicit bypass. A supplied finished good can enter dispatch directly. Internal transfers cancel only inside the declared aggregate boundary; splitting aggregate nodes later requires paired measured exchanges. No process label creates another market gate. |  |
| `natural_managed_interfaces` | source responsibility | Keep untended removal, purchased feed and other-product co-product origins distinct. Where the category permits managed production, distinguish owned management from wild gathering and record establishment/growth/maintenance, harvest, relevant land/water/carbon and losses once; harvest is aggregated in source, not repeated as wild biomass removal. Managed food production remains excluded from the wild-food category. Untended collection owns one removal interface and no invented cultivation recipe. |  |
| `incidental_ledger` | target material and foreign matter | Maintain disjoint target and incidental-matter ledgers by material, true origin, node, moisture, dates, opening/closing stocks and every return/discard destination. A physical environmental return cannot exceed available received/removed material without an explained additional source. Materials left in place are not removed inputs or returned outputs. |  |
| `supplies_and_emissions` | supporting supplies and releases | Conditional energy, supplies/services, management inputs and emissions are authoring requirements, not final UUID-bound aggregate exchanges. Instantiate only actual concrete materials/carriers/substances, preserve native units and verify each identity/support. Keep emitted substance and compartment distinct from a product waste transfer. Do not claim this candidate provides a universal factor or recipe. |  |
| `gate_scope` | foreground endpoint and upstream coverage | End at the documented producer handover of the actual accepted state. Owned movement and handling before that gate are included once; onward distribution, retail, use and end-of-life are downstream unless independently declared. A purchased input retains compatible origin/state, preparation and burden coverage, including treatment/assembly if already completed. A boundary mismatch cannot be repaired by renaming a flow. |  |
| `sites_periods_assets` | campaigns, facilities and shared assets | Enumerate all contributing sites, seasons, runs, stock periods and shared consumers; link successful and unsuccessful collection work, setup/cleaning/changeovers, establishment, service and replacement/termination events to actual outputs and periods. No universal rotation, lifetime or annualization factor is prescribed. |  |

For this wild-food category, managed biological production is excluded, not an alternative source branch. Digging, washing or supplier receipt does not itself demonstrate deliberate cultivation; establish actual source management independently. Food-use eligibility and later safe-use preparation must be documented without claiming that a raw gathered item is ready to eat.
## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source` | Source production, collection and receipt | conditional | Actual owned production/gathering or initial material receipt is inside the declared boundary; qualified purchased completed-state feed may enter a later receiving node | Source to identified collected/received product; managed production and harvest are explicitly aggregated where owned | per 1 kg reference flow |
| `prepare` | Primary preparation and grade separation | conditional | Actual trimming, cleaning, separating, peeling, splitting, opening, sizing or grading is performed and the result remains in the declared category | Received material to declared prepared state and each grade/destination | per 1 kg reference flow |
| `treat` | State treatment, preservation and holding | conditional | An actual intervention or attributable holding responsibility occurs before handover and the output retains category eligibility | Declared pre-intervention state to actual post-intervention usable state | per 1 kg reference flow |
| `dispatch` | Final acceptance, packaging and producer handover | required | Every reference lot has a real final producer handover; transport packaging is included only when used | Real accepted category output at one declared primary producer gate | per 1 kg reference flow |

These are declared aggregate inventory nodes. In source, managed production/harvest or wild collection is one explicit owned responsibility, never both for the same portion. Preparation owns physical cleaning/separation and grade exits; treatment owns only actual state intervention and holding; assembly is only for eligible ornamental compositions. A real operation has one owner. Bypasses link the actual preceding output/receipt to the next active node, including direct receipt at dispatch; final handover remains required. Collect each underlying activity separately even when reported within one node.

### Process: Source production, collection and receipt (`source`)

Declare actual owned untended gathering or purchased already gathered portions, species/part, site, seasonal trips including unsuccessful trips, and removal/soil/source-return ledgers. Managed growth is outside this category.

#### Inputs

##### Product flows

###### Actual received material in its evidenced incoming state (`source_feed`)

Record each actual purchased receipt, paired internal transfer or rework return separately by material, supplier/source, state and gate. Receipt may bypass already completed upstream nodes, but must inherit compatible upstream burdens once. Do not insert an input for a route that has none.

- Selected flow: Actual received material in its evidenced incoming state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual operational energy supply (`source_energy`)

One conditional energy requirement: identify each actual carrier/provider and native quantity from meters, fuel records or included-service coverage. Keep electricity, fuel and heat as separate concrete exchanges in the eventual dataset; do not add unlike units or duplicate inclusive service energy.

- Selected flow: Actual operational energy supply
- Flow property / unit: Actual carrier property / native unit
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual auxiliary materials and services (`source_materials_services`)

One conditional supplies/service requirement. Identify every actual consumable, tool/asset service, cleaning input and provider; retain its own unit and consuming node/period. No input is mandatory merely because it is named as a possible role. Final datasets must resolve each concrete exchange and avoid overlap with the separately listed water, treatment, component and package roles.

- Selected flow: Actual auxiliary materials and services
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual supplied process water (`source_water`)

Record supplied water when used in management, washing or treatment, in the actual product unit. A direct withdrawal belongs to the natural-water role instead, unless a separately modelled supply process converts that withdrawal into this product. Internal recirculation is not repeated new supply; retain make-up, discharge and stock records.

- Selected flow: Actual supplied process water
- Flow property / unit: Actual water property / kg or m3 with recorded conversion
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

No routine exchange is prescribed. Record actual observed concrete exchanges if this direction/type occurs; do not assume absence from the template proves zero.

##### Elementary flows

###### Actual target material removed from an untended natural source (`source_natural_removal`)

Only for actual owned untended gathering: record source-, species- and part-qualified removal mass, including collected target material and target portions actually removed then rejected/returned. Exclude matter never removed. Do not apply this wild-resource input to managed production or purchased completed feed. Natural removal and the downstream collected product are different interface roles, not two purchases.

- Selected flow: Actual target material removed from an untended natural source
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual incidental natural matter removed with the target (`source_incidental_removal`)

Measure each incidental attached soil, bark, stone or non-target biomass component separately, with its actual source and moisture. Keep its receipts, transfers, stock, return and discard ledger distinct from target removal; purchased-feed foreign matter is carried by its product receipt, not a second natural removal.

- Selected flow: Actual incidental natural matter removed with the target
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual attributable land occupation and transformation (`source_land_use`)

Record evidenced area, land class, duration and actual transformation where the selected accounting method requires them. Determine management and harvest effects independently; no universal zero land use, regeneration period, avoided land use or stock-change credit follows from wild origin. Each concrete occupation or transformation exchange requires its own identity and support.

- Selected flow: Actual attributable land occupation and transformation
- Flow property / unit: Actual land property / m2.a or m2 as applicable
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual direct water withdrawal at this node (`source_water_withdrawal`)

Only when this owned node directly withdraws water: identify source/compartment, measured volume or mass, return destination and supply boundary. Pair internal supply transfers where withdrawal belongs to a different node. Do not also book the same withdrawal as externally supplied water with all abstraction burdens included.

- Selected flow: Actual direct water withdrawal at this node
- Flow property / unit: Actual resource property / native water unit
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

#### Outputs

##### Product flows

###### Actual collected or prepared material at this node handoff (`source_product_out`)

Measure actual output state and net quantity with recipient/next-node and lot IDs. The next active node records the same physical transfer, with conversion and time/stock differences explained. Measure any attached incidental matter separately at both ends; never hide its transfer or add it to accepted reference mass. Do not set this intermediate amount to 1 kg merely because the final reference is 1 kg.

- Selected flow: Actual collected or prepared material at this node handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual other intended goods or reusable material exits (`source_other_goods`)

Separate each intentionally supplied grade, co-product or actual rework return, with state, recipient and destination. Internal rework retains original burdens and is not an independent co-product; a sold downgrade and a waste must not share the same classification. Enumerate the complete independent output set for allocation.

- Selected flow: Actual other intended goods or reusable material exits
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

###### Actual waste transferred to a managed recipient (`source_waste`)

Identify each actual solid reject, spent agent, used package or wastewater and its recipient/treatment. Separate water and solute composition when required; record physical waste once and treatment burden once. Do not record waste to treatment as a direct environmental emission, or assume unmeasured conditional waste is zero.

- Selected flow: Actual waste transferred to a managed recipient
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Elementary flows

###### Actual environmental returns and identified direct releases (`source_returns_releases`)

Separate returned target/incidental matter, discharged water and each named emitted substance with receiving compartment. Use measured quantities or a documented compatible activity-factor calculation, including treatment emissions, evaporation, combustion, field losses or refrigerant leakage only when actual and evidenced. Reconcile returns with available receipts/removal. A balancing residual is not an emission, and a return is not an automatic credit.

- Selected flow: Actual environmental returns and identified direct releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_source divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

### Process: Primary preparation and grade separation (`prepare`)

Document the actual incoming and prepared material, physical actions, accepted and downgraded grade definitions, cleaning/washwater, separated parts and every recipient. For a bypassed preparation, preserve the compatible earlier state rather than inventing cleaning or a yield.

#### Inputs

##### Product flows

###### Actual received material in its evidenced incoming state (`prepare_feed`)

Record each actual purchased receipt, paired internal transfer or rework return separately by material, supplier/source, state and gate. Receipt may bypass already completed upstream nodes, but must inherit compatible upstream burdens once. Do not insert an input for a route that has none.

- Selected flow: Actual received material in its evidenced incoming state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual operational energy supply (`prepare_energy`)

One conditional energy requirement: identify each actual carrier/provider and native quantity from meters, fuel records or included-service coverage. Keep electricity, fuel and heat as separate concrete exchanges in the eventual dataset; do not add unlike units or duplicate inclusive service energy.

- Selected flow: Actual operational energy supply
- Flow property / unit: Actual carrier property / native unit
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual auxiliary materials and services (`prepare_materials_services`)

One conditional supplies/service requirement. Identify every actual consumable, tool/asset service, cleaning input and provider; retain its own unit and consuming node/period. No input is mandatory merely because it is named as a possible role. Final datasets must resolve each concrete exchange and avoid overlap with the separately listed water, treatment, component and package roles.

- Selected flow: Actual auxiliary materials and services
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual supplied process water (`prepare_water`)

Record supplied water when used in management, washing or treatment, in the actual product unit. A direct withdrawal belongs to the natural-water role instead, unless a separately modelled supply process converts that withdrawal into this product. Internal recirculation is not repeated new supply; retain make-up, discharge and stock records.

- Selected flow: Actual supplied process water
- Flow property / unit: Actual water property / kg or m3 with recorded conversion
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

No routine exchange is prescribed. Record actual observed concrete exchanges if this direction/type occurs; do not assume absence from the template proves zero.

##### Elementary flows

###### Actual direct water withdrawal at this node (`prepare_water_withdrawal`)

Only when this owned node directly withdraws water: identify source/compartment, measured volume or mass, return destination and supply boundary. Pair internal supply transfers where withdrawal belongs to a different node. Do not also book the same withdrawal as externally supplied water with all abstraction burdens included.

- Selected flow: Actual direct water withdrawal at this node
- Flow property / unit: Actual resource property / native water unit
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

#### Outputs

##### Product flows

###### Actual collected or prepared material at this node handoff (`prepare_product_out`)

Measure actual output state and net quantity with recipient/next-node and lot IDs. The next active node records the same physical transfer, with conversion and time/stock differences explained. Measure any attached incidental matter separately at both ends; never hide its transfer or add it to accepted reference mass. Do not set this intermediate amount to 1 kg merely because the final reference is 1 kg.

- Selected flow: Actual collected or prepared material at this node handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual other intended goods or reusable material exits (`prepare_other_goods`)

Separate each intentionally supplied grade, co-product or actual rework return, with state, recipient and destination. Internal rework retains original burdens and is not an independent co-product; a sold downgrade and a waste must not share the same classification. Enumerate the complete independent output set for allocation.

- Selected flow: Actual other intended goods or reusable material exits
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

###### Actual waste transferred to a managed recipient (`prepare_waste`)

Identify each actual solid reject, spent agent, used package or wastewater and its recipient/treatment. Separate water and solute composition when required; record physical waste once and treatment burden once. Do not record waste to treatment as a direct environmental emission, or assume unmeasured conditional waste is zero.

- Selected flow: Actual waste transferred to a managed recipient
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Elementary flows

###### Actual environmental returns and identified direct releases (`prepare_returns_releases`)

Separate returned target/incidental matter, discharged water and each named emitted substance with receiving compartment. Use measured quantities or a documented compatible activity-factor calculation, including treatment emissions, evaporation, combustion, field losses or refrigerant leakage only when actual and evidenced. Reconcile returns with available receipts/removal. A balancing residual is not an emission, and a return is not an automatic credit.

- Selected flow: Actual environmental returns and identified direct releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_prepare divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

### Process: State treatment, preservation and holding (`treat`)

Actual fresh holding, cooling or preservation that does not move the food outside this primary classification. Record time/state, energy, losses and refrigerant leakage where applicable. Drying/freezing/other preservation is not automatically admissible: establish the resulting classification first; excluded processing belongs downstream.

#### Inputs

##### Product flows

###### Actual received material in its evidenced incoming state (`treat_feed`)

Record each actual purchased receipt, paired internal transfer or rework return separately by material, supplier/source, state and gate. Receipt may bypass already completed upstream nodes, but must inherit compatible upstream burdens once. Do not insert an input for a route that has none.

- Selected flow: Actual received material in its evidenced incoming state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual operational energy supply (`treat_energy`)

One conditional energy requirement: identify each actual carrier/provider and native quantity from meters, fuel records or included-service coverage. Keep electricity, fuel and heat as separate concrete exchanges in the eventual dataset; do not add unlike units or duplicate inclusive service energy.

- Selected flow: Actual operational energy supply
- Flow property / unit: Actual carrier property / native unit
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual auxiliary materials and services (`treat_materials_services`)

One conditional supplies/service requirement. Identify every actual consumable, tool/asset service, cleaning input and provider; retain its own unit and consuming node/period. No input is mandatory merely because it is named as a possible role. Final datasets must resolve each concrete exchange and avoid overlap with the separately listed water, treatment, component and package roles.

- Selected flow: Actual auxiliary materials and services
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual supplied process water (`treat_water`)

Record supplied water when used in management, washing or treatment, in the actual product unit. A direct withdrawal belongs to the natural-water role instead, unless a separately modelled supply process converts that withdrawal into this product. Internal recirculation is not repeated new supply; retain make-up, discharge and stock records.

- Selected flow: Actual supplied process water
- Flow property / unit: Actual water property / kg or m3 with recorded conversion
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual treatment or preservation ingredients (`treat_treatment_inputs`)

Identify each actual agent/formulation, concentration, make-up and withdrawal, reused bath stock and retained product fraction. Record carrier water separately without double counting formulation water. A hypothetical treatment recipe or the full bath capacity is not the consumed amount; verify product-class eligibility after treatment.

- Selected flow: Actual treatment or preservation ingredients
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

No routine exchange is prescribed. Record actual observed concrete exchanges if this direction/type occurs; do not assume absence from the template proves zero.

##### Elementary flows

###### Actual direct water withdrawal at this node (`treat_water_withdrawal`)

Only when this owned node directly withdraws water: identify source/compartment, measured volume or mass, return destination and supply boundary. Pair internal supply transfers where withdrawal belongs to a different node. Do not also book the same withdrawal as externally supplied water with all abstraction burdens included.

- Selected flow: Actual direct water withdrawal at this node
- Flow property / unit: Actual resource property / native water unit
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

#### Outputs

##### Product flows

###### Actual collected or prepared material at this node handoff (`treat_product_out`)

Measure actual output state and net quantity with recipient/next-node and lot IDs. The next active node records the same physical transfer, with conversion and time/stock differences explained. Measure any attached incidental matter separately at both ends; never hide its transfer or add it to accepted reference mass. Do not set this intermediate amount to 1 kg merely because the final reference is 1 kg.

- Selected flow: Actual collected or prepared material at this node handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual other intended goods or reusable material exits (`treat_other_goods`)

Separate each intentionally supplied grade, co-product or actual rework return, with state, recipient and destination. Internal rework retains original burdens and is not an independent co-product; a sold downgrade and a waste must not share the same classification. Enumerate the complete independent output set for allocation.

- Selected flow: Actual other intended goods or reusable material exits
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

###### Actual waste transferred to a managed recipient (`treat_waste`)

Identify each actual solid reject, spent agent, used package or wastewater and its recipient/treatment. Separate water and solute composition when required; record physical waste once and treatment burden once. Do not record waste to treatment as a direct environmental emission, or assume unmeasured conditional waste is zero.

- Selected flow: Actual waste transferred to a managed recipient
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Elementary flows

###### Actual environmental returns and identified direct releases (`treat_returns_releases`)

Separate returned target/incidental matter, discharged water and each named emitted substance with receiving compartment. Use measured quantities or a documented compatible activity-factor calculation, including treatment emissions, evaporation, combustion, field losses or refrigerant leakage only when actual and evidenced. Reconcile returns with available receipts/removal. A balancing residual is not an emission, and a return is not an automatic credit.

- Selected flow: Actual environmental returns and identified direct releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_treat divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

### Process: Final acceptance, packaging and producer handover (`dispatch`)

Weigh the actual accepted final state with cp_reference and record the producer/recipient gate. Include actual packaging, final handling and actual warehouse responsibility here only if not owned by treatment. Distinguish product-bound components from transport tare and record each package reuse/loss.

#### Inputs

##### Product flows

###### Actual received material in its evidenced incoming state (`dispatch_feed`)

Record each actual purchased receipt, paired internal transfer or rework return separately by material, supplier/source, state and gate. Receipt may bypass already completed upstream nodes, but must inherit compatible upstream burdens once. Do not insert an input for a route that has none.

- Selected flow: Actual received material in its evidenced incoming state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual operational energy supply (`dispatch_energy`)

One conditional energy requirement: identify each actual carrier/provider and native quantity from meters, fuel records or included-service coverage. Keep electricity, fuel and heat as separate concrete exchanges in the eventual dataset; do not add unlike units or duplicate inclusive service energy.

- Selected flow: Actual operational energy supply
- Flow property / unit: Actual carrier property / native unit
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual auxiliary materials and services (`dispatch_materials_services`)

One conditional supplies/service requirement. Identify every actual consumable, tool/asset service, cleaning input and provider; retain its own unit and consuming node/period. No input is mandatory merely because it is named as a possible role. Final datasets must resolve each concrete exchange and avoid overlap with the separately listed water, treatment, component and package roles.

- Selected flow: Actual auxiliary materials and services
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

###### Actual detachable transport packaging (`dispatch_packaging`)

Identify material, measured tare and single-use or returnable status; retain service-cycle, replacement, cleaning and end-of-use records for reusable items. Product components are not package tare. Include packaging burdens even though packaging is excluded from reference net mass.

- Selected flow: Actual detachable transport packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

No routine exchange is prescribed. Record actual observed concrete exchanges if this direction/type occurs; do not assume absence from the template proves zero.

##### Elementary flows

No routine exchange is prescribed. Record actual observed concrete exchanges if this direction/type occurs; do not assume absence from the template proves zero.

#### Outputs

##### Product flows

###### Accepted other wild edible product (`dispatch_accepted_product`)

The only reference output: accepted product of one declared material/composition, grade, actual state and final producer gate. Keep actual lot mass in cp_reference; normalization makes this row 1 kg. Internal transfers, rejected lots and closing stock never create additional reference output.

- Selected flow: Accepted other wild edible product
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`

- Range: Definitional reference normalization, not a measured yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

Range evidence: the normalized reference equals 1 kg by definition, not an empirical yield or a required actual lot size. Check actual accepted lot mass is positive and retain its measurement uncertainty.

###### Actual other intended goods or reusable material exits (`dispatch_other_goods`)

Separate each intentionally supplied grade, co-product or actual rework return, with state, recipient and destination. Internal rework retains original burdens and is not an independent co-product; a sold downgrade and a waste must not share the same classification. Enumerate the complete independent output set for allocation.

- Selected flow: Actual other intended goods or reusable material exits
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Waste flows

###### Actual waste transferred to a managed recipient (`dispatch_waste`)

Identify each actual solid reject, spent agent, used package or wastewater and its recipient/treatment. Separate water and solute composition when required; record physical waste once and treatment burden once. Do not record waste to treatment as a direct environmental emission, or assume unmeasured conditional waste is zero.

- Selected flow: Actual waste transferred to a managed recipient
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

##### Elementary flows

###### Actual environmental returns and identified direct releases (`dispatch_returns_releases`)

Separate returned target/incidental matter, discharged water and each named emitted substance with receiving compartment. Use measured quantities or a documented compatible activity-factor calculation, including treatment emissions, evaporation, combustion, field losses or refrigerant leakage only when actual and evidenced. Reconcile returns with available receipts/removal. A balancing residual is not an emission, and a return is not an automatic credit.

- Selected flow: Actual environmental returns and identified direct releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable quantity from cp_dispatch divided by the same accepted net dispatch mass from cp_reference; retain each concrete exchange and its actual unit separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`

Range evidence requirement: no category-wide numerical bound is prescribed for this conditional role. Establish a quantitative screen only after the concrete identity, state, native unit, denominator and compatible route/site/period evidence are known; document bounds and uncertainty without clipping measured values. Until then range screening is explicitly unavailable, not a default zero or a completeness claim.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_precedence` | complete intended output set | First subdivide independently measured operations and directly trace burdens. For remaining shared burdens, use a documented causal physical driver; if no defensible physical relation exists, disclose why and apply gate- and period-matched economic allocation with sensitivity. Enumerate all intended outputs and state precedence; no automatic substitution credits or universal mass allocation across unlike products. |  |
| `allocation_origin_and_stock` | source, crop co-products and inventory carryover | Purchased feed retains supplier burdens once. Crop by-products and recovered material require explicit origin, handoff and inherited-burden/cut-off decisions; secondary or low-priced material is not automatically burden-free. Carry actual stock burdens across periods; closing stock is not dispatched reference output and later release must not repeat original burdens. |  |
| `allocation_shared_services` | shared assets, failed trips and periods | Identify all consuming nodes/outputs and service periods; shares of a fully assigned record sum to one. Attribute failed-trip, idle/service and changeover burdens to the evidenced campaign/output set, with no-output periods separately disclosed. An inclusive transport, drying or assembly service excludes duplicate embedded energy/material/asset burdens. |  |
| `allocation_rework_waste` | rework, downgrade and waste | Internal rework retains original burdens and adds measured incremental work only. Sold downgrades are independent intended exits when actually sold; pending rework is not accepted output. Record waste handling/treatment under the declared boundary without relabelling a discarded stream as saleable to avoid burdens; environmental return has no automatic credit. |  |
| `allocation_aggregation` | multiple sites, grades and materials | For the same declared product/state and boundary, divide summed attributable inventory totals by summed accepted mass; do not take an unweighted average of site intensities. Unlike species/materials, treated states or compositions require separate datasets or an explicitly identified representative mix with measured proportions; one kilogram is not proof of functional equivalence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | `dispatch` | accepted reference product | final acceptance and weighing | lot; material/species/part; category eligibility; intended use; state; moisture method; whole-good and botanical/retained-treatment/structural mass breakdown; edible fraction if relevant; gross; excluded transport tare/soil/free water/rejects; net accepted mass; producer gate; recipient; dates; scale/calibration | Weigh the accepted good on a calibrated scale; reconcile the same configuration/state/composition and acceptance record, tare and all exclusions. Record actual positive net lot mass before normalization. | kg | each final accepted dispatch lot | complete declared source/production and dispatch periods, with stock and asset carryover | all actual contributing source, preparation, treatment and handover sites | per 1 kg reference flow | calibration, traceable raw records, source/classification and recipient evidence, compatible factors and complete attribution |
| `cp_source` | `source` | all actual node exchange roles | activity, material and service ledger | lot/site/source/species/part/composition/state; branch; upstream dataset and process coverage; incoming/outgoing/returned IDs; gross/tare/net mass and moisture; incidental-matter ledgers; opening/closing stocks and dates; actual activity, setup/cleaning/changeover; each supply/service/carrier/provider/native quantity; actual waste recipient; named release/substance/compartment/activity/factor provenance; shared assets/consumers/periods; exclusions and uncertainty; untended-source evidence; gathered species/part and seasonal campaign; collection and unsuccessful trips; digging/removal and attached soil; target/incidental transfers and returns; purchased portions and completed upstream coverage | Measure physical receipts, outputs, stocks and relevant moisture/composition; meter actual supplies and retain invoices/operation and factor records. Identify material/grade/state at each handoff and preserve independent evidence of absence. Keep each concrete exchange in its native unit; do not backfill missing values. | kg; actual concrete exchange units | each lot, activity, stock movement and attributable service period | complete declared source/production and dispatch periods, with stock and asset carryover | all actual contributing source, preparation, treatment and handover sites | per 1 kg reference flow | calibration, traceable raw records, source/classification and recipient evidence, compatible factors and complete attribution |
| `cp_prepare` | `prepare` | all actual node exchange roles | activity, material and service ledger | lot/site/source/species/part/composition/state; branch; upstream dataset and process coverage; incoming/outgoing/returned IDs; gross/tare/net mass and moisture; incidental-matter ledgers; opening/closing stocks and dates; actual activity, setup/cleaning/changeover; each supply/service/carrier/provider/native quantity; actual waste recipient; named release/substance/compartment/activity/factor provenance; shared assets/consumers/periods; exclusions and uncertainty; incoming/output parts and grades; actual cleaning, trimming, peeling, splitting or opening actions; removed parts, soil and washwater composition; every grade/recipient; before/after moisture and stocks | Measure physical receipts, outputs, stocks and relevant moisture/composition; meter actual supplies and retain invoices/operation and factor records. Identify material/grade/state at each handoff and preserve independent evidence of absence. Keep each concrete exchange in its native unit; do not backfill missing values. | kg; actual concrete exchange units | each lot, activity, stock movement and attributable service period | complete declared source/production and dispatch periods, with stock and asset carryover | all actual contributing source, preparation, treatment and handover sites | per 1 kg reference flow | calibration, traceable raw records, source/classification and recipient evidence, compatible factors and complete attribution |
| `cp_treat` | `treat` | all actual node exchange roles | activity, material and service ledger | lot/site/source/species/part/composition/state; branch; upstream dataset and process coverage; incoming/outgoing/returned IDs; gross/tare/net mass and moisture; incidental-matter ledgers; opening/closing stocks and dates; actual activity, setup/cleaning/changeover; each supply/service/carrier/provider/native quantity; actual waste recipient; named release/substance/compartment/activity/factor provenance; shared assets/consumers/periods; exclusions and uncertainty; state intervention and time; initial/final substrate moisture; bath opening/closing stock, make-up/withdrawal, formulation and concentration; retained agents and water; discharge, evaporation, named releases; cold-store service and refrigerant stocks/leaks if actual | Measure physical receipts, outputs, stocks and relevant moisture/composition; meter actual supplies and retain invoices/operation and factor records. Identify material/grade/state at each handoff and preserve independent evidence of absence. Keep each concrete exchange in its native unit; do not backfill missing values. | kg; actual concrete exchange units | each lot, activity, stock movement and attributable service period | complete declared source/production and dispatch periods, with stock and asset carryover | all actual contributing source, preparation, treatment and handover sites | per 1 kg reference flow | calibration, traceable raw records, source/classification and recipient evidence, compatible factors and complete attribution |
| `cp_dispatch` | `dispatch` | all actual node exchange roles | activity, material and service ledger | lot/site/source/species/part/composition/state; branch; upstream dataset and process coverage; incoming/outgoing/returned IDs; gross/tare/net mass and moisture; incidental-matter ledgers; opening/closing stocks and dates; actual activity, setup/cleaning/changeover; each supply/service/carrier/provider/native quantity; actual waste recipient; named release/substance/compartment/activity/factor provenance; shared assets/consumers/periods; exclusions and uncertainty; actual acceptance specification and grade; final product state/gate; net product versus detachable package tare; permanent product components; packaging reuse and losses; stock release versus current production; final handling/warehouse service ownership | Measure physical receipts, outputs, stocks and relevant moisture/composition; meter actual supplies and retain invoices/operation and factor records. Identify material/grade/state at each handoff and preserve independent evidence of absence. Keep each concrete exchange in its native unit; do not backfill missing values. | kg; actual concrete exchange units | each lot, activity, stock movement and attributable service period | complete declared source/production and dispatch periods, with stock and asset carryover | all actual contributing source, preparation, treatment and handover sites | per 1 kg reference flow | calibration, traceable raw records, source/classification and recipient evidence, compatible factors and complete attribution |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | For each compatible exchange i, amount_i = attributable_quantity_i / accepted_net_kg. Use the same accepted product/state and lot/period; the reference amount is 1 kg. Retain numerator totals and their attribution records. | attributable_quantity_i; accepted_net_kg; cp_reference | native exchange unit per kg reference product |  |
| `substrate_moisture` | measured botanical substrate only | dry_substrate_kg = wet_substrate_kg * (1 - water_fraction_wb); water_fraction_wb = water_kg / (water_kg + dry_substrate_kg). For dry-basis water_ratio_db = water_kg / dry_substrate_kg, water_fraction_wb = water_ratio_db / (1 + water_ratio_db). Require positive dry substrate and 0 <= water_fraction_wb < 1; declare method and sampling. Do not apply these equations to retained treatment agents or non-botanical components. | wet_substrate_kg; water_kg; measured composition; moisture method | declared dry substrate and moisture basis |  |
| `node_stock_balance` | each physical material ledger, node and period | balance_gap = opening_stock + incoming_mass + evidenced_added_mass - closing_stock - intended_exits - waste_exits - environmental_returns - independently_evidenced_releases. Keep composition/water and actual reaction or carbon boundaries explicit so terms do not overlap; account for additional sources where actual. Record uncertainty and investigate the gap without converting it automatically into an emission. | dated quantities; material composition; stocks; independently evidenced release records | mass balance and unexplained difference |  |
| `retained_components` | treated materials and compositions | accepted_net_kg = accepted_botanical_substrate_kg + retained_treatment_matter_kg + permanent_other_components_kg, using disjoint mass definitions; botanical substrate includes its declared inherent water. Transport packaging and incidental matter are excluded; retained treatment solution water must belong to exactly one mass component. | measured product composition; botanical/moisture ledger; retained agents; permanent components | reconciled whole-product reference mass |  |
| `shared_attribution` | shared service records and independent outputs | assigned_quantity_k = total_quantity * share_k; sum of shares = 1 for a fully assigned record. Select the driver using allocation precedence and preserve all consumers, periods and exclusions. Rework receives only its incremental share in addition to retained original burdens. | total_quantity; complete consumers; driver evidence; share_k | complete nonduplicated quantity attribution |  |
| `direct_release` | each identified emitted substance and compartment | Use a measurement or emission_kg = activity_in_declared_unit * compatible_factor_kg_per_unit with documented scope, period, substance basis and uncertainty. Avoid overlap with treatment/service datasets. Formulated product mass, elemental nutrient mass and compound emission mass are not interchangeable without explicit evidenced stoichiometry. | measured release or compatible activity/factor; actual substance/compartment | substance-specific direct release |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_eligibility | each product, part and route | Demonstrate category eligibility and actual state/origin/use; species list and a generic name are not sufficient. Food applicability is not food-safety certification, and source permits do not prove sustainability or management status. | original classification, source/part/composition and acceptance records |
| quality_measurement | quantities, moisture and components | Retain calibrated net weighing, sampling, native units, composition and stock records; explain conversions and uncertainty. No unverified numeric category default substitutes for foreground evidence. | raw readings, scales/meters, composition tests and reconciliations |
| quality_coverage | sites, seasons, activities and suppliers | Enumerate contributors, unsuccessful work, actual treatments/bypasses, shared services and upstream coverage; retain inclusion/exclusion and representativeness decisions. Unknown quantities or UUIDs block complete dataset claims even if the methodology projection passes. | complete source/campaign/run/site/period and supplier coverage registers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_class_scope` | category and route branches | Check actual category eligibility against specific exclusions and the product/part/state/use evidence. Activate every applicable branch and record explicit absence/bypass. A broad category title does not certify every species, composition or treatment; uncertain classification blocks the corresponding dataset applicability claim. |  |
| `validate_reference` | final output and denominator | Check dispatch_accepted_product is the real output, normalized to 1 kg, with measured positive accepted lot mass, complete gate/composition/state qualifiers and consistent EN/ZH definitions. Packaging, incidental matter, rejected goods and closing stock must not enter the denominator. Retained product components cannot be removed as package tare. |  |
| `validate_balances` | each node, lot and period | Reconcile measured inputs/opening stock against outputs/closing stock and independently evidenced water/substance changes. Check paired internal transfers and disjoint incidental/target ledgers. Investigate residuals and uncertainty; never manufacture evaporation, pollutant emissions, yield or carbon uptake to force closure. |  |
| `validate_quantities_units` | all concrete exchanges and calculations | Use each exchange native unit and the common accepted-mass denominator. Moisture conversion applies only to the measured botanical substrate, not an entire treated/composite product. Preserve formulation versus active-ingredient basis, bath stocks, count/volume conversions and direction of losses. Every missing quantity/factor remains a gap, not zero. |  |
| `validate_output_attribution` | output sets, sites, periods and services | Verify complete intended output handoffs, causal/economic precedence, campaign failed work, site totals, stock carryover and complete shared-consumer shares. Do not double-count source production, treatment, component or packaging supply already represented in upstream/inclusive records. |  |
| `validate_uuid_and_ranges` | identities and evidence | Before final exchange use, verify concrete UUID, flow type, source/state/gate/provider, property and unit-group support for each actual exchange. No broad-category UUID is inferred from one representative. Every card has an explicit range-evidence requirement; where no compatible numerical evidence exists, disclose unavailable screening and do not claim a default, validation completeness or publication readiness. Do not introduce Flow Sets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset; secondary_dataset; background_dataset |
| downstream_use | Supply the explicitly identified material/state/composition at its actual producer gate; match the receiving application independently |
| allowed_use | Only the measured product and disclosed representative scope, with complete upstream and foreground coverage |
| excluded_use | Automatic substitution across species, states or uses; universal category average without mixture evidence; safety/sustainability claims; treating an unresolved category identity as a verified concrete exchange |
| required_metadata | actual product family; species/material and marketed part; composition and accepted grade; wild/managed/co-product/purchased origin and upstream coverage (managed production is excluded for wild food); actual incoming and delivered state; moisture basis; retained treatment matter and product components; selected branch and actual node/bypass graph; lot/site/season/period and stocks; net weighing/tare method; intended use and buyer specification; actual producer gate/recipient; native exchange units and evidence gaps |
| required_quality_disclosure | actual collection coverage, method/quantity/identity gaps, uncertainty, provisional or unavailable range screening, allocation and aggregation, boundary truncation and source independence |
| update_trigger | changed product family, parts, source regime, state, treatment/composition, gate, upstream coverage, unit basis, factor evidence or actual route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | UNSD, CPC Version 3.0 explanatory notes (10 February 2025), printed pp. 39-40, subclasses 03231-03252; https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Category inclusions/exclusions and scope; not a quantitative recipe or safety approval |
| `unsd-cpc-03239` | official_guidance | UNSD, CPC 3.0 detail 03239; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03239 | Untended gathering and exclusion of intentionally grown/managed edible production |
| `fao-wild-food-diversity` | official_guidance | FAO, Use and potential of wild plants in farm households, Food diversity and household sufficiency; https://www.fao.org/4/w8801e/w8801e04.htm | Diversity of edible plant parts and uses; does not establish the CPC class or safe use of a particular species |
| `fao-food-storage` | official_guidance | FAO, Food security, nutrition and health, processing and storage distinctions; https://www.fao.org/4/W6864E/w6864e06.htm | Distinguish fresh handling from food processing; no historic nutrient-loss or shelf-life defaults |

These sources support classification and possible responsibilities only. The equations and collection requirements above are explicit mass-accounting/attribution rules, not numerical values copied from a representative study. No historic recipe, universal yield, loss, life, dose, emission factor or food-safety assurance is adopted.
