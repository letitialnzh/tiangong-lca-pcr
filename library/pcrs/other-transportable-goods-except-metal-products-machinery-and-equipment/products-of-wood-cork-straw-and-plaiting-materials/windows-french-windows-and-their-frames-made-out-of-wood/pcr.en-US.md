---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.windows-french-windows-and-their-frames-made-out-of-wood
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Single-sash spruce windows with triple insulating glazing, factory gate

## 1. Scope and Applicability

This method is restricted to manually operated single-sash spruce windows for vertical wall openings, factory delivered with installed triple-pane argon insulating glazing, hardware, seals and actual coatings. Foreground starts from purchased kiln-dried laminated window scantlings and sealed insulating glazing assemblies; it includes machining, corner-joint bonding, finishing, assembly, acceptance and packaging. The electric foreground route excludes on-site drying, wood lamination, IGU fabrication and combustion boilers.

Excluded products are bare frames, unglazed sashes, French windows, multiple-sash windows, roof windows, aluminium-clad timber windows, other species routes and products requiring special fire/smoke performance. Frame stock, glazing assembly and accepted complete window have distinct delivery identities and cannot share one reference output. Mass is a manufacturing inventory basis, not proof of equivalent installed area, thermal service or fixed service life.

Bau EPD original pages 4–6 and 10–11 support complete-window composition and prefabrication-dependent boundaries. Its four Austrian manufacturers and 2019 production sample provide no default for all wood industries, recipes, quantities or life cycles. See `bau-timber-window-2022`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.windows-french-windows-and-their-frames-made-out-of-wood |
| classification_refs | CPC 3.0 31621; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Manually operated single-sash spruce complete window; purchased triple-argon IGU; purchased kiln-dried laminated scantlings; electric machining/assembly route |
| excluded_products | Frame-only; unglazed window; French window; roof window; multiple sashes; aluminium cladding; other species; fire/smoke special performance; in-house glazing fabrication or combustion route |
| representative_product | Single-sash complete spruce window with actual glazing and hardware, configuration and finish declared from product originals |
| production_route | Delivered dried laminated scantling → machining → corner bonding/finishing → glazing/hardware/seal assembly → acceptance weighing/packaging |
| market_state | Accepted complete window at factory gate; packaging accounted separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and delivery of accepted complete timber window |
| How much | 1 kg reference flow |
| How well | Delivered with measured or original-declared opening geometry, window area, operation, thermal performance, glazing assembly and coating configuration |
| How long or cycle | One manufacturing delivery; service life and maintenance belong to separately declared downstream scenarios, with no fixed lifetime |
| reference_flow_link | `finished_window` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Exterior Window `7a7a325e-e8b3-4497-bf32-fca70491694a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Spruce species/origin; laminated stock state; measured net mass; window area and opening geometry; operation; original thermal performance; each IGU pane count/thickness/coating/spacer/gas; hardware alloys/finishes; each gasket; every coating layer and complete formulation; gate; production site/time; upstream compatibility |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_mass to weigh each accepted complete same-configuration window net mass and sum cohort Q. Exclude packaging; impose no universal per-window weight. Frame or glazing mass cannot replace complete-window mass. |
| `glass_area` | `glazing_unit` | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use cp_components measured delivered-assembly area. Numerator is area while inventory denominator remains 1 kg window. Opening area or an unverified kg/m2 factor cannot replace the declared area. |
| `energy_unit` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain meter kWh records; 1 kWh = 3.6 MJ. Verify <1 kV consumer supply and background region/year. This electricity unit rule establishes no net delivered steam heat. |
| `wood_moisture` | `wood_blank`, `offcut`, `waste_wood` | Mass | kg | Use dry-basis moisture u = (wet mass - oven-dry mass)/oven-dry mass; retain wet physical mass and dry wood separately. Wood mass excludes adhesive/coating. See usda-wood-handbook-2021 chapter 13. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased kiln-dried laminated spruce window stock and sealed triple-argon glazing assembly, each at an explicit delivery gate |
| starting_condition_role | Foreground machining/assembly feed; resource extraction and upstream manufacture carried by matching supplier backgrounds |
| product_classification_scope | Narrow complete-window route within 31621; excludes frame-only and French-window products |
| recursive_input_rule | Purchased same-category complete window is an explicit external input with its upstream link; do not recursively unfold this method indefinitely or relabel it as scantling |
| upstream_dataset_requirement | Stock lamination/drying, every glazing constituent, hardware manufacture/finish, each chemical and formulation burden, electricity and water need state-compatible backgrounds; UUID identity is not a complete dataset |
| disclosure | Declare site/time, delivered states, upstream gates, actual factory stages and meter coverage, recipe completeness, shared-load attribution, packaging and external waste destination |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_complete_window` | Terminal complete-window boundary includes glazing, hardware, seals and retained finish; bare-frame output cannot replace it. | `bau-timber-window-2022` |
| `boundary_upstream` | Count upstream manufacture of purchased dried laminated stock and sealed glazing once. Moving processes upstream does not remove their burdens or biogenic CO2. | `bau-timber-window-2022`; `usda-wood-handbook-2021` |
| `boundary_route` | Include machining, finishing, assembly, acceptance, packaging and auxiliaries. Actual boilers, steam, on-site stock drying or glazing fabrication make this route inapplicable and require a new evidenced boundary; do not silently set them to zero. | `bau-timber-window-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `window_manufacture` | Wood-window machining, finishing, glazing/hardware assembly, acceptance and packaging | required | Purchased dried laminated spruce stock and sealed IGU; electric route | One complete-window foreground unit with separate stage measurement | `finished_window` |

All physical external rows use the same complete-period pool measured net finished mass Q under complete_period_normalization. Retain the unallocated process graph and wood mass, water, glazing and carbon balances. Stage transfers of the same material stay in raw records with equal amounts at both ends; no duplicate reference output is created. Keep a separate environmental attribution/allocation ledger: a burden share cannot reduce physical coproduct output. For supplier-made corner adhesive and each coating layer, retain one external exchange for each actual whole supplied formulation, including its carrier and additives; verify its own complete-product identity or keep a precise UUID-free row. The nine stable ingredient IDs glue_pvac, glue_water, coat_acrylic, coat_pur, coat_alkyd, coat_butoxy, coat_water, coat_tio2 and coat_pg also label composition/fate diagnostic records inside those formulations. Supplier-confirmed presence alone does not create a separate external purchase. Their Product input cards apply only to actual separately purchased compatible ingredients used in onsite preparation. Count actual onsite additions/mixing/dilution, supplier formulation/manufacture/preparation utilities and losses, packaging and delivery once at their actual boundary. Unknown composition or procurement remains a gap, not absence. Add each actual distinct supplied formulation, separately purchased additive, other packaging item or waste as a specific atomic row, never a collection label.

### Process: Window manufacture (`window_manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried laminated spruce window scantling (`wood_blank`)

Use incoming dried laminated spruce scantling, not green sawnwood or a bare window frame. Measure moisture and gross delivered quantity; upstream includes lamination and drying.

- Selected flow: Kiln-dried laminated spruce window scantling
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `bau-timber-window-2022`; `usda-wood-handbook-2021`

###### Supplier-formulated PVAc corner-joint adhesive (`bought_glue_pvac`)

Conditional on actual bought complete PVAc corner-joint adhesive. One external Product exchange represents the whole supplied product including carrier, binders, additives and actual supplied state. Record supplier/product/layer, net whole supplied use, complete composition and material/emission/waste fate. Supplier formulation, manufacture, preparation utilities/losses, packaging and delivery remain in a matched complete-product background once; onsite application and actual separately bought additions/mixing/dilution remain foreground once. Composition diagnostics under the listed nine ingredient IDs are not extra purchases. The pure ingredient UUIDs cannot identify this whole formulation; its specific complete-product UUID remains absent until verified. Distinct actual supplied products require separate atomic rows.

- Selected flow: Supplier-formulated PVAc corner-joint adhesive
- Flow property / unit: Mass / kg
- Amount rule: Actual whole supplied formulation net use for the matched complete reporting-period pool, with opening/closing stock and unused returns reconciled, divided once by cp_mass accepted complete-window Q . Retain raw whole-product and constituent/fate records separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Supplier-formulated acrylic primer (`bought_coat_acrylic`)

Conditional on actual bought complete acrylic primer for the declared layer. One external Product exchange represents the whole supplied product including carrier, binders, additives and actual supplied state. Record supplier/product/layer, net whole supplied use, complete composition and material/emission/waste fate. Supplier formulation, manufacture, preparation utilities/losses, packaging and delivery remain in a matched complete-product background once; onsite application and actual separately bought additions/mixing/dilution remain foreground once. Composition diagnostics under the listed nine ingredient IDs are not extra purchases. The pure ingredient UUIDs cannot identify this whole formulation; its specific complete-product UUID remains absent until verified. Distinct actual supplied products require separate atomic rows.

- Selected flow: Supplier-formulated acrylic primer
- Flow property / unit: Mass / kg
- Amount rule: Actual whole supplied formulation net use for the matched complete reporting-period pool, with opening/closing stock and unused returns reconciled, divided once by cp_mass accepted complete-window Q . Retain raw whole-product and constituent/fate records separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Supplier-formulated polyurethane finish (`bought_coat_pur`)

Conditional on actual bought complete polyurethane finish for the declared layer. One external Product exchange represents the whole supplied product including carrier, binders, additives and actual supplied state. Record supplier/product/layer, net whole supplied use, complete composition and material/emission/waste fate. Supplier formulation, manufacture, preparation utilities/losses, packaging and delivery remain in a matched complete-product background once; onsite application and actual separately bought additions/mixing/dilution remain foreground once. Composition diagnostics under the listed nine ingredient IDs are not extra purchases. The pure ingredient UUIDs cannot identify this whole formulation; its specific complete-product UUID remains absent until verified. Distinct actual supplied products require separate atomic rows.

- Selected flow: Supplier-formulated polyurethane finish
- Flow property / unit: Mass / kg
- Amount rule: Actual whole supplied formulation net use for the matched complete reporting-period pool, with opening/closing stock and unused returns reconciled, divided once by cp_mass accepted complete-window Q . Retain raw whole-product and constituent/fate records separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Supplier-formulated alkyd impregnation coating (`bought_coat_alkyd`)

Conditional on actual bought complete alkyd impregnation formulation for the declared layer. One external Product exchange represents the whole supplied product including carrier, binders, additives and actual supplied state. Record supplier/product/layer, net whole supplied use, complete composition and material/emission/waste fate. Supplier formulation, manufacture, preparation utilities/losses, packaging and delivery remain in a matched complete-product background once; onsite application and actual separately bought additions/mixing/dilution remain foreground once. Composition diagnostics under the listed nine ingredient IDs are not extra purchases. The pure ingredient UUIDs cannot identify this whole formulation; its specific complete-product UUID remains absent until verified. Distinct actual supplied products require separate atomic rows.

- Selected flow: Supplier-formulated alkyd impregnation coating
- Flow property / unit: Mass / kg
- Amount rule: Actual whole supplied formulation net use for the matched complete reporting-period pool, with opening/closing stock and unused returns reconciled, divided once by cp_mass accepted complete-window Q . Retain raw whole-product and constituent/fate records separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Polyvinyl acetate (`glue_pvac`)

Separately purchased PVAc polymer for actual onsite corner-joint adhesive preparation only; verify its actual supplied polymer grade/state and compatible provider. Monomer and complete formulated glue are different flows. PVAc contained in bought corner adhesive is a glue_pvac composition/fate diagnostic under cp_formula, not this external input.

- Selected flow: Polyvinyl acetate `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### de-ionised water (`glue_water`)

Separately supplied de-ionised water actually added onsite to corner-joint adhesive preparation/dilution only; verify the supplied water state and provider. De-ionised carrier water already inside bought glue remains the glue_water composition/water/fate diagnostic, not an additional purchase or cleaning-water input.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Acrylic resin waterborne binder (`coat_acrylic`)

Separately purchased acrylic binder actually used in onsite primer preparation only; verify polymer chemistry, grade, supplied formulation/state and provider. A generic water-paint resin is insufficient identity evidence. Binder contained in bought acrylic primer remains a coat_acrylic composition/fate diagnostic, not another external purchase.

- Selected flow: Acrylic resin waterborne binder
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Polyurethane resin coating binder (`coat_pur`)

Separately purchased polyurethane binder actually used in onsite finish preparation only, with actual chemistry, grade, supplied state and provider verified. The source supports some PUR finishes, not a universal recipe. Binder already contained in bought polyurethane finish remains a coat_pur composition/fate diagnostic, not an external ingredient purchase.

- Selected flow: Polyurethane resin coating binder
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources: `bau-timber-window-2022`

###### Alkyd resin (`coat_alkyd`)

Separately purchased alkyd binder actually used in onsite impregnation-layer preparation only; verify actual chemistry, grade, supplied state and provider. Alkyd already contained in bought impregnation formulation remains a coat_alkyd composition/fate diagnostic, not a separate purchase; do not infer this ingredient for every window.

- Selected flow: Alkyd resin
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources: `bau-timber-window-2022`

###### 2 Butoxyethanol (`coat_butoxy`)

Separately purchased 2-butoxyethanol CAS111-76-2 actually added onsite only; keep supplied mass, retained amount, air release and waste fate distinct. The same substance inside a bought coating remains a coat_butoxy composition/fate diagnostic, not an external purchase.

- Selected flow: 2 Butoxyethanol
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### de-ionised water (`coat_water`)

Separately supplied de-ionised water actually added onsite to coating preparation/dilution only, with actual water grade/state and provider verified. De-ionised carrier water already contained in each bought layer remains a coat_water composition/water/fate diagnostic. Retain separate layer/formulation records, sum identical diagnostic constituents once, and never turn the summed contained water into an external purchase.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Titanium Dioxide (`coat_tio2`)

Separately purchased titanium dioxide pigment actually added onsite only; verify actual grade, supplied state and provider. Titanium dioxide confirmed only as a constituent of bought coating remains a coat_tio2 composition/fate diagnostic, not an additional external input. No source recipe fraction is imposed.

- Selected flow: Titanium Dioxide `12525dde-1d7a-4024-9ea3-5b90912a48f8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Propylene glycol (`coat_pg`)

Separately purchased propylene glycol CAS57-55-6 actually added onsite only; verify actual supplied grade/state and provider, distinct from propylene carbonate or glycol ether. Propylene glycol contained in bought coating remains a coat_pg composition/fate diagnostic, not another purchase.

- Selected flow: Propylene glycol
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula`
- Sources:

###### Hollow Glass (`glazing_unit`)

One separately identified purchased triple-pane argon insulating glazing assembly. Record its measured area, mass, pane schedule, low-emissivity surfaces, aluminium spacer, gas fill, desiccant and edge-seal declaration. Its upstream carries these components; do not count purchased assembly and its upstream constituent panes again in foreground. A second physically delivered glazing assembly requires its own atomic row. In-house IGU fabrication is outside this route.

- Selected flow: Hollow Glass `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Silicone sealant (`glazing_sealant`)

Silicone applied to the glass-to-wood installation joint, distinct from edge seals already embodied in the purchased IGU. Declare supplier formulation and application loss.

- Selected flow: Silicone sealant
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Zinc plated steel window hinge (`hinge`)

A separately weighed zinc-plated steel hinge; received hinge identity must include surface state.

- Selected flow: Zinc plated steel window hinge
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Zamak window locking fitting (`locking`)

A separately weighed zamak locking part; declare alloy and geometry, not a mixed hardware mass.

- Selected flow: Zamak window locking fitting
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Anodised aluminium window handle (`handle`)

One anodised aluminium window handle, separate from hinge, lock and rain profile.

- Selected flow: Anodised aluminium window handle
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Thermoplastic elastomer window gasket (`gasket_tpe`)

A TPE sash gasket with declared grade, profile, length and measured mass.

- Selected flow: Thermoplastic elastomer window gasket
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### EPDM window gasket (`gasket_epdm`)

Conditional EPDM rain-profile gasket, separate from the TPE sash seal.

- Selected flow: EPDM window gasket
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Polyethylene foam glazing tape (`glazing_tape`)

Conditional polyethylene foam glazing tape, not generic foam or packing tape.

- Selected flow: Polyethylene foam glazing tape
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Polypropylene glazing block (`glazing_block`)

Polypropylene glazing support block as a finished part, not PP granulate.

- Selected flow: Polypropylene glazing block
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Galvanized steel glazing bead pin (`pins`)

Galvanized steel pin used to fix a glazing bead; retain count and measured total mass.

- Selected flow: Galvanized steel glazing bead pin
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Anodised aluminium window rain protection profile (`rain_profile`)

Anodised aluminium rain-protection profile with declared finish and section. Full aluminium cladding is excluded.

- Selected flow: Anodised aluminium window rain protection profile
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `bau-timber-window-2022`

###### Alternating current (`electricity`)

Meter actual low-voltage consumption for machining, extraction, finishing, compressed air, assembly and packaging; retain stage records. Supplier/site region and year must match the background. No purchased steam or boiler is within this electric route.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `bau-timber-window-2022`

###### Process water (`cleaning_water`)

Water supplied for actual equipment cleaning; distinguish gross supply, reuse, effluent and evaporation. Do not count formulation carrier water again.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `bau-timber-window-2022`

###### Low-density polyethylene foil (PE-LD) (`pack_film`)

LDPE protective/shrink film crossing the gate with the window; measured mass separate from net finished mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `bau-timber-window-2022`

###### Spruce wooden transport rack (`pack_rack`)

Spruce transport rack; retain full physical rack mass and actual reuse/return ledger. Allocate only its service burden by documented trips, never reduce the physical transported mass.

- Selected flow: Spruce wooden transport rack
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `bau-timber-window-2022`

###### Polyester packaging strap (`pack_strap`)

PET packaging strap measured separately; steel band is a different material and route.

- Selected flow: Polyester packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `bau-timber-window-2022`

#### Outputs

##### Product flows

###### Exterior Window (`finished_window`)

Terminal complete accepted window including frame, sash, installed glass, hardware, gaskets and retained coatings, excluding transport packaging. Machining through packing is one foreground unit, with no duplicate intermediate finished-window output.

- Selected flow: Exterior Window `7a7a325e-e8b3-4497-bf32-fca70491694a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `bau-timber-window-2022`

###### Clean spruce machining offcut (`offcut`)

Conditional sold clean spruce offcut; separate dry wood, moisture and adhesive contamination. Keep its full physical amount before any allocation of environmental burdens.

- Selected flow: Clean spruce machining offcut
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `bau-timber-window-2022`; `usda-wood-handbook-2021`

##### Waste flows

###### Waste wood chemically treated (`waste_wood`)

Coated or adhesive-contaminated wood sent to a declared external treatment; do not combine it with clean sold offcut.

- Selected flow: Waste wood chemically treated
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `bau-timber-window-2022`; `usda-wood-handbook-2021`

###### Paint sludge (`waste_sludge`)

Captured coating sludge with measured wet mass and solids content; it is not all coating consumed.

- Selected flow: Paint sludge
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `bau-timber-window-2022`

###### Wastewater from coating cleaning (`wastewater`)

Coating-cleaning effluent sent to a declared external wastewater treatment. Record pollutant assays; do not also report this transfer as direct water emissions.

- Selected flow: Wastewater from coating cleaning
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `bau-timber-window-2022`

###### Broken insulating glass unit (`waste_glass`)

Broken purchased IGU transferred as an assembly waste; retain pane, spacer and seal composition. Pure cullet is not the same waste state.

- Selected flow: Broken insulating glass unit
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `bau-timber-window-2022`

###### Waste polyethylene film (`waste_film`)

LDPE film trimming or rejected film sent to treatment; separate outgoing useful film from waste.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `bau-timber-window-2022`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Measured particulate release to outdoor air at aerodynamic diameter at most 2.5 micrometres, after actual capture. Collected dust is not this release.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### particles (PM2.5 - PM10) (`pmcoarse`)

Measured outdoor fraction above 2.5 and at most 10 micrometres. Use the disjoint fraction, not cumulative PM10 together with PM2.5.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### particles (> PM10) (`pmover10`)

Measured outdoor fraction above 10 micrometres; never substitute total dust or cumulative PM10 for this interval.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### pin-2(3)-ene (`pinene`)

Conditional measured alpha-pinene CAS 80-56-8 to outdoor air from wood processing; no assumed enantiomer fraction or generic VOC replacement.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### 2-n-butoxy-1-ethanol (`butoxyethanol`)

Conditional measured solvent release CAS 111-76-2 to outdoor air; reconcile actual recipe and capture. This compound is chemically specific; no bulk VOC or correction flow substitution.

- Selected flow: 2-n-butoxy-1-ethanol `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide this row’s net physical cohort exchange by cp_mass measured accepted net window mass Q; retain gross totals, stock changes and returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_subdivide` | First subdivide the cohort by separate stage measurements from other products. Attribute shared energy only with measured operating-time/load causal evidence; disclose coverage and unmeasured shares rather than transferring industry averages. | `bau-timber-window-2022` |
| `allocation_physical_ledger` | Keep process graph, mass/water/carbon balances and coproduct outputs at full unallocated physical quantities. Allocate only in a separate environmental burden ledger. Internal links match at both ends; transferred offcuts cannot also fuel foreground. | `bau-timber-window-2022` |
| `allocation_coproduct_review` | Trace sold offcut use, price and treatment gate. The original EPD’s negligible-share rationale is no automatic allocation exemption. If measured causal subdivision is unavailable, declare alternative method, shares, rationale and sensitivity for independent methodological review; do not hide default credits. | `bau-timber-window-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `window_manufacture` | accepted finished product | foreground and original records | product/configuration; unit serial; net weighed mass; tare; rejected output; cohort; Q | Weigh every accepted complete same-configuration window using a calibrated scale, excluding rack, film and straps; sum measured net masses to Q. No generic per-window mass. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | weighing and calibration records |
| `cp_stock` | `window_manufacture` | wood input | foreground and original records | supplier/lot; species; lamination; drying state; gross incoming mass; opening/closing stock; returns; moisture sample wet/dry mass | Weigh incoming stock and retained inventories; measure representative moisture by oven-dry comparison or calibrated species-specific meter cross-check. Supplier background includes drying/lamination. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg; % | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | scale, oven and supplier gate documentation |
| `cp_formula` | `window_manufacture` | each bought formulation; composition/fate diagnostics; actual separate ingredient purchases | foreground and original records | procurement status; supplier/product/layer; whole supplied formulation mass/state; complete component fractions/CAS; actual separate purchase receipts; opening/closing stock; unused returns; onsite additions/preparation; supplier manufacture/preparation utilities/losses/packaging/delivery; retained film; air/waste fate | Obtain complete supplier composition and actual whole supplied usage per product/layer; weigh and stock/return-adjust each whole formulation. Preserve listed nine ingredient IDs as separate composition/fate diagnostics using documented fractions; presence in a bought formulation alone creates no external ingredient purchase. External ingredient cards use actual separately purchased compatible quantities for onsite preparation only. Retain complete supplier formulation/manufacture/preparation utilities/losses/packaging/delivery once and genuine onsite mixing/additions once; do not add diagnostic ingredient burdens to an already complete formulation background. Unknown identity, fractions or procurement/boundaries stay specific gaps. Normalize each actual external whole-product or separate-purchase raw total once by Q under complete_period_normalization; never normalize a previously divided amount again. | kg | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | supplier formulation originals; batch/return and loss records |
| `cp_components` | `window_manufacture` | each purchased glass assembly and each hardware/seal part | foreground and original records | part/lot; material; finish; incoming installed rejected masses; delivered IGU area; individual pane schedule; argon; spacer; desiccant; seals; net geometry; thermal declaration | Weigh each material-specific part; measure each delivered IGU area and mass; verify constituent/geometry/performance original declarations and supplier manufacturing boundary. Count each assembly separately. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg; m2 | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | supplier bill of materials, drawings, performance originals and calibration |
| `cp_energy` | `window_manufacture` | electricity | foreground and original records | meter start/end; voltage; region/year; stage; compressed-air/extraction loads; other products; attribution basis | Meter each stage and shared auxiliaries; subtract separately measured unrelated consumption. Use measured operating-time/load evidence only when direct subdivision is unavailable; disclose unmeasured shares. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | MJ | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | meter records and attribution ledger |
| `cp_water` | `window_manufacture` | cleaning water | foreground and original records | supply meter; water specification; reusable volume; density if converted; discharge meter; opening/closing tanks; evaporation | Measure supply, reuse and external discharge separately; conversion from volume to mass requires measured temperature/density and compatible supplier quantity. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | meter, density and tank-balance records |
| `cp_packaging` | `window_manufacture` | each packaging item | foreground and original records | film grade; strap grade; rack species/net mass; shipped mass; scrap; return/reuse trips; opening/closing stock | Weigh film, rack and strap separately. Preserve full physical delivery quantities; retain an independent returnable-rack service ledger. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | weighing, dispatch and rack reuse records |
| `cp_residues` | `window_manufacture` | each coproduct or waste | foreground and original records | stream; contamination; wet/dry mass; glass assembly composition; storage changes; recipient; treatment; sold quantity; price | Weigh each separated stream and verify treatment/recipient; retain physical wood, water, glass and coating balance before environmental allocation. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | transfer tickets, assays, invoices and balance ledger |
| `cp_emissions` | `window_manufacture` | each outdoor species or disjoint particle interval | foreground and original records | species/CAS; air compartment; process; post-control concentration; exhaust volume; operating time; particle cutpoints; captured amount; detection limits | Use species-specific measured post-control releases for the cohort, including fugitive releases. Integrate calibrated concentration and compatible exhaust volume; unknown is not zero. Keep captured waste separate. Aggregate each atomic cohort exchange total divided by measured accepted net mass Q. | kg | each cohort and delivery | same declared production period and acceptance cohort | same factory, configuration and route | per 1 kg reference flow | sampling methods, assays and exhaust/control records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_normalization` | all inventory rows | Normalized row amount = net physical atomic cohort exchange total / Q; Q = sum of individually measured accepted complete-window net masses in the same cohort, kg. Output remains 1 kg; glazing is m2/kg, electricity MJ/kg, other rows kg/kg. | row protocol; cp_mass | normalized atomic exchange | `bau-timber-window-2022` |
| `formulation_constituents` | `glue_pvac`, `glue_water`, `coat_acrylic`, `coat_pur`, `coat_alkyd`, `coat_butoxy`, `coat_water`, `coat_tio2`, `coat_pg` | Diagnostic constituent mass = actual net whole supplied formulation usage × complete original supplier constituent mass fraction; calculate each product/layer separately, sum identical diagnostic constituent once and trace retained/air/waste/stock fate. These contained quantities are not external purchases or extra background exchanges. Whole bought formulations retain their own whole-product amount and matched complete supplier formulation/manufacture/preparation utilities/losses/packaging/delivery once; pure ingredient UUIDs cannot represent them. Only actual separately purchased compatible ingredients for onsite preparation use the corresponding external ingredient cards and measured stock/return-adjusted quantities, with onsite mixing/dilution/additions once. Do not add diagnostic constituent production burdens to a complete supplied-product background. Unknown complete-product identity, recipe or procurement remains pending. | cp_formula | diagnostic constituent/fate totals; actual whole-formulation and separate-purchase ledgers kept distinct | `bau-timber-window-2022` |
| `physical_closure` | `wood_blank`, `offcut`, `waste_wood`, `glazing_unit`, `finished_window` | Cohort inputs + opening stock = retained window composition + physical outputs/waste + releases + closing stock. Close dry wood, water, glazing and chemicals separately; carbon uses supplier/measured fractions, with no universal wood carbon fraction. | cp_stock; cp_formula; cp_components; cp_mass; cp_residues; cp_emissions | unallocated mass/water/carbon balances | `usda-wood-handbook-2021`; `bau-timber-window-2022` |
| `particles_disjoint` | `pm25`, `pmcoarse`, `pmover10` | If measurements are cumulative PM2.5, PM10 and total particulate, disjoint intervals are PM2.5, PM10-PM2.5 and total-PM10; require identical sampling, basis and control state, with nonnegative intervals. Incompatible measurements cannot be subtracted. | cp_emissions | three disjoint measured intervals |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all inventory rows | Match configuration, species, moisture, glazing and delivery route; source averages serve only as boundary evidence. | supplier and acceptance originals |
| `dq_recipes` | `cp_formula` | Resolve every actual adhesive, primer, preservative treatment and finish composition and fate under the listed ingredient IDs; unknown additives/fractions block composition completeness and cannot default to zero. Separately verify each actual whole supplied formulation or true separately purchased ingredient, its physical identity/reference basis and compatible supplier/onsite preparation boundary. Composition presence alone does not establish procurement. | complete recipes, procurement originals and whole-product/diagnostic/separate-purchase usage ledgers |
| `dq_coverage` | all inventory rows | Retain metering period, calibration, stocks and detection limits; distinguish missing, below-detection and evidenced inapplicability. | raw records and coverage table |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Exactly one terminal complete-window output uses the 1 kg measured net complete-window basis. Do not substitute frame or glazing UUIDs, or hide known identity to evade multiple-output checks. |  |
| `validate_native_quantities` | Measured glazing assembly area matches upstream Area/m2; window/opening area and thermal performance come from measurement/originals and establish no fixed mass or lifetime. | `bau-timber-window-2022` |
| `validate_atomic` | Each external row contains one actual supplied physical product or released species; each bought whole formulation remains one product, while ingredients contained in it remain composition/fate diagnostics and are not additional purchases. Ingredient external cards apply only to actual separate purchases for onsite preparation. Add each actual distinct formulation, separately purchased additive, glazing assembly and hardware item separately; verify whole supplied identity/reference basis, supplier manufacture/preparation/delivery and actual onsite additions once. Verify elementary species, medium/submedium, unit and fossil/biogenic origin where applicable; correction flows and broad substitutes are prohibited. |  |
| `validate_balances` | Check unallocated physical mass/water/carbon balances separately from environmental allocation. Do not double-count particles or delete background/actual combustion biogenic CO2 from LCI because of a GHG impact convention. Foreground combustion requires a new boundary and is not covered by this route. |  |
| `validate_completeness` | Missing reference identity, complete recipe, upstream compatibility, actual measurement or unresolved relationships remain incomplete; tool failure and unsupported relationships cannot be reported as passing. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground manufacturing process linked to verified upstreams |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing inventory for the declared single-sash spruce, triple-argon glazing, electric machining/assembly route |
| excluded_use | Full CPC coverage; frame-only or French-window products; equivalent thermal-service comparison; fixed service life; building EPD certification |
| required_metadata | Site/time, configuration, measured net mass, separate areas, performance originals, incoming states, component recipes, meter coverage and upstream gates |
| required_quality_disclosure | Missing identities, recipes and background compatibility; sampling uncertainty; shared-load attribution; allocation method and sensitivity |
| update_trigger | Changed configuration, species, glazing/recipe, gate, energy route, supplier background or methodological evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bau-timber-window-2022 | literature | Bau EPD GmbH, HOLZFENSTER, BAU-EPD-PLATTFORM-FENSTER-FVHOLZ-ÖSTERREICH-2022-1-Ecoinvent, 2022-11-09. https://www.bau-epd.at/fileadmin/user_upload/epds_Deutsch/BAU-EPD-PLATTFORM-FENSTER-HOLZ-VERBAND-OESTERREICH-2022-1-Ecoinvent-Holzfenster-2022-11-09.pdf | pp.4–6 identity/components, pp.10–11 manufacture/packaging, p.20 shared energy/allocation limitations. Four Austrian manufacturers, 2019 production; no transferred quantities, universal recipe, negligible-share exemption or lifetime. |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282, 2021. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Chapter 13 p.13–2, PDF p.324: oven-dry method, representative specimens and meter conditions. Wood moisture collection and wet/dry measurement only; no window weight, industry-wide emissions or complete finish recipe. |
