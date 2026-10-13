---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.cellular-board
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Wood-lattice cellular board — dry-input UF electric-press manufacture

## 1. Scope and Applicability

This method covers factory manufacture of uncoated interior cellular wood panels whose skins are bonded to a frame and deliberately spaced coniferous wood laths, either parallel or in a lattice. The support core has designed cavities; continuous edge-glued solid strip cores are outside scope. Purchased kiln-dried coniferous lumber is cut into the core; purchased unbonded non-tropical hardwood veneer sheets not exceeding 6 mm form the skins. Powder UF adhesive is mixed with separately recorded water, and supplier-qualified solid ammonium chloride and wheat-flour extender when used. Press heating is electric. Separate rock-wool cavity infill is conditional on actual construction, not prescribed. Sources: `un-cpc-cellular-3`, `usda-wood-handbook-2021`.

Exclude solid blockboard/battenboard, all-veneer plywood, paper-honeycomb door cores, aluminium honeycomb, bamboo cores, foamed plastic cores, assembled doors/hardware, coated/preserved panels, purchased bonded skins, liquid premixed UF, other adhesive chemistries, raw-log conversion, on-site green-wood drying and fuel/steam/purchased-heat press routes. These require new physical inventory and applicability review. This recipe is an evidence-informed collection route; it is not an industry-average recipe, emission factor or claim of structural/fire/acoustic equivalence.

UN CPC 3.0 31610 identifies spaced wood laths, whereas the broader 31411 explanatory inclusion also mentions cellular board, and the 31421 title/note distinction does not settle every physical core. Resolve using the actual cross-section and bill of materials; retain classification overlap for maintainer mapping review. No method or accepted coverage of 3141/3142 is inferred from that wording. This route is limited to the narrower 31610 subset; the canonical mapping and its ADR govern accepted coverage. Sources: `un-cpc-cellular-3`, `un-cpc-plywood-3`, `un-cpc-laminated-3`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.cellular-board |
| classification_refs | CPC 3.0 31610; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated interior spaced-lath/lattice wood-core panels of the declared UF electric-press route |
| excluded_products | Solid strip cores, all-veneer boards, paper/aluminium honeycomb and all exclusions in section 1 |
| representative_product | Trimmed panel with coniferous spaced wood core and non-tropical hardwood veneer skins |
| production_route | Purchased dry inputs; core cutting/assembly; powder-UF mixing; skin bonding; electric pressing; conditioning; trimming and packing |
| market_state | Accepted uncoated interior panel at factory gate; no fittings; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a cellular wood panel of declared physical construction |
| How much | 1 kg accepted net finished panel at measured final moisture |
| How well | Declared thickness, skin/core species, lath spacing and orientation, bond acceptance and intended interior use; no assumed strength/fire/acoustic grade |
| How long or cycle | One factory production/acceptance cycle; no service-life assumption |
| reference_flow_link | `finished_panel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cellular board `4b4e8668-1076-4cb6-ac5c-2334d535b1fb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Spaced parallel/lattice wooden core and frame geometry; wood species and grades per component; face/back thickness and grain axes; measured panel area/thickness/net mass/final moisture; cavity fraction and infill identity/mass; powder UF formulation, separate additives/water and solids; glue-contact area and actual spread; cure temperature/pressure/time and acceptance; uncoated interior state; site/period; input supplier/delivery gates; electricity voltage; packaging excluded; waste/air compartments and treatment destinations |

Declare every qualifier in the dataset metadata or equivalent package field. A kilogram of production is not an equal area, load capacity or service between different panel designs. Do not replace the finished-product reference with an unpressed lay-up, blockboard or complete door.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | B = total accepted net finished panel mass of the same design, site, lots and period; weigh on calibrated scales excluding packaging using cp_output. Inventory denominator is B, not input mass or dry wood mass. |
| panel_geometry | reference product | Mass; area; length | kg; m2; m | Measure each accepted panel area A and final thickness t with calibrated length/thickness tools; rho_app = B / sum(A*t). Area per 1 kg = sum(A)/B. Apparent envelope volume includes cavities and is never solid wood volume. Separate actual solid face, frame and lath volumes, avoid overlapping lattice joints, and measure infill independently. |
| wood_moisture | core_stock; face_veneer; residue ledger | Mass | kg | u = (m_wet - m_od) / m_od; m_od = m_wet / (1 + u). Determine representative material moisture by sealed samples and oven-dry weighing or a calibrated instrument checked against it, cp_wood. Do not confuse dry-basis u with wet-basis water fraction. Keep panel net mass B at actual moisture. Source: usda-wood-handbook-2021. |
| glue_component_basis | uf_powder; nh4cl; wheat_extender; mix_clean_water | Mass | kg | Record as-supplied mass, measured solids and separately added water per recipe batch; glue-contact spread uses actual wood/skin contact area, not total cavity envelope. Dry resin solids are a composition ledger, not a second exchange. No fixed recipe or supplier solids default. Source: usda-wood-handbook-2021. |
| electric_energy | electricity | Net calorific value | MJ | E_MJ = 3.6 * E_kWh; use matched customer-side electricity meters, cp_energy. The database energy label does not make electricity combustible fuel. MJ steam/heat alone never establishes useful delivered heat; a heat route needs supplier boundary and measured enthalpy balance before adoption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received kiln-dried coniferous sawn timber, unbonded non-tropical hardwood veneers and separately supplied listed recipe/packaging inputs |
| starting_condition_role | Purchased-input gate for foreground conversion |
| product_classification_scope | Physically spaced wood-core subset of cellular board; 31610 context with 3141/3142 overlap retained |
| recursive_input_rule | Purchased already bonded cellular panels are outside this production route; internal rework stays in the same ledger and never creates another completed reference output |
| upstream_dataset_requirement | Link verified input suppliers covering forestry, sawnwood/veneer manufacture and drying, chemical and packaging production, electricity and matched delivery gates. Foreground alone is not cradle-to-gate; missing links remain explicit |
| disclosure | Actual component species/state, treatment, suppliers/geography/year, meters, infill, utility route, delivery inclusion, loss and waste destinations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_foreground | cellular_manufacture | Include receipt/conditioning, core ripping and frame/lattice assembly, powder UF mixing and spread, skin lay-up, electric pressing/cure, cooling, final conditioning, trimming, acceptance, packing and controls. Keep phase throughput and energy/waste measurements within one foreground unit. | usda-wood-handbook-2021 |
| b_route | cellular_manufacture | Exclude on-site combustion from this declared route. If actual fuel use, kiln drying, steam or purchased heat is present, expand the physical inventory and evidence before use; never hide it in electricity. Any biogenic CO2 actually emitted in an expanded route stays in LCI independently of an impact-reporting convention. |  |
| b_delivery | inbound_freight | Include actual inbound delivery either once in the matched supplier dataset or once as the specific freight exchange. Record delivery/treatment provider endpoints; missing supplier coverage is not a cutoff. Waste treatment burdens remain linked to actual destination. |  |
| b_identity | finished_panel | Physical core construction governs scope. Record photographs/cross-sections and separate skin/core/glue/infill bills. Classification words cannot substitute for a physical spaced wood support structure or accepted mapping. | un-cpc-cellular-3; un-cpc-plywood-3; un-cpc-laminated-3 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cellular_manufacture | Dry-input wood-lattice cellular panel manufacture | required | Declared recipe/utility route | Foreground receipt through packaged gate, with net panel reference | 1 kg accepted net panel |

The physical sequence is receipt → cutting/frame and spaced-core assembly → skin/glue lay-up → press/cure → cooling/conditioning → trim/acceptance → packaging. Phase transfers are internal to this unit; preserve matched quantities on both sides of every handoff. Packaging follows acceptance without a second output with the same reference UUID. Track rework and glue/scrap/dust capture explicitly before burden attribution.

### Process: Cellular panel manufacture (`cellular_manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`core_stock`)

Purchased kiln-dried coniferous sawn timber for frame and spaced parallel laths or a lattice. Record species, grade, moisture and actual solid member dimensions; do not count air spaces as timber.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`

###### Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood (`face_veneer`)

Only unbonded non-tropical non-coniferous veneer sheets not exceeding 6 mm for the two skins; keep face and back quantities separately in raw records and sum this one material exchange. Previously bonded plywood skins require a new applicability and identity assessment.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`

###### Dry powdered urea-formaldehyde adhesive resin (`uf_powder`)

Record the purchased dry powder formulation and moisture/solids. Do not substitute an unspecified liquid UF resin record or create separate fictitious resin and carrier exchanges from a purchased premixed liquid glue.

- Selected flow: Dry powdered urea-formaldehyde adhesive resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`

###### Ammonium Chloride (`nh4cl`)

Only separately supplied solid ammonium chloride used when the supplier-qualified powder recipe requires it. Weigh the salt; other hardeners require separate rows.

- Selected flow: Ammonium Chloride `0d0e3c27-1f93-4dc1-80d0-392a3226cd4f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`

###### Wheat flour (`wheat_extender`)

Only separately added wheat flour when used in the qualified recipe. Record as-received moisture and mass; not wood flour, starch or an inferred universal addition.

- Selected flow: Wheat flour `f87532de-91ec-4971-8cde-7cb05b236b0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`

###### Process Water (`mix_clean_water`)

Purchased treated process water for mixing and cleaning. Submeter the two uses and reconcile stock; water already included in supplied materials is not a second purchased-water exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Alternating current (`electricity`)

Grid-average customer-side AC below 1 kV, including cutting, electric press heating, mixing, trimming, handling, ventilation and controls. Preserve stage submeters; no fuel, steam or purchased heat is hidden in this row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### rock wool (`rock_wool`)

Conditional separately supplied rock-wool cavity infill supported by the actual design and measured loading. Wooden laths remain the spaced support system. No paper, aluminium honeycomb or automatic acoustic/fire rating; no prescribed fill fraction.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_filler`

###### Polyethylene film (`pe_wrap`)

Only polyethylene protective packaging film if used; weigh net issue minus returned stock. Packaging is outside accepted panel mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

###### Corrugated cardboard (`corrugated_pack`)

Only corrugated cardboard protective pads if used; this identity requires actual C-, E- or F-flute multilayer board with at least 80% fibre content, containing recycled material and recyclable. Verify grade, composition and delivered mass against the supplier specification; these identity limits are not default recipe fractions or assumed recycling credits. An incompatible grade requires a separately verified specific flow. This packaging material never establishes a paper-honeycomb core.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

###### Non-refrigerated diesel rigid-truck inbound freight service (`inbound_freight`)

Conditional only for documented matching road delivery omitted by delivered-input providers. Use actual cargo mass and loaded distance, vehicle/emission class, load factor and empty-return convention. Other vehicle classes/modes require separate rows.

- Selected flow: Non-refrigerated diesel rigid-truck inbound freight service
- Flow property / unit: Mass-distance / t*km
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

#### Outputs

##### Product flows

###### Cellular board (`finished_panel`)

One accepted trimmed, uncoated interior cellular wood panel output after cure and conditioning, excluding all packaging. Use the actual final net mass and skin/core geometry, not a lay-up or a finished door with hardware.

- Selected flow: Cellular board `4b4e8668-1076-4cb6-ac5c-2334d535b1fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`

###### Sold clean coniferous sawdust (`sold_sawdust`)

Conditional only for segregated clean pre-gluing sawdust demonstrably sold as a coproduct. Keep physical mass and revenue records; it is mutually exclusive with the same lot in waste_sawdust. Resin-contaminated sanding dust is excluded.

- Selected flow: Sold clean coniferous sawdust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

##### Waste flows

###### Untreated coniferous wood offcuts (`clean_offcuts`)

Segregated solid wood offcuts before gluing, sent to documented waste treatment; keep moisture and destination. Internal reuse is an internal loop and is not counted twice as disposal.

- Selected flow: Untreated coniferous wood offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

###### sawdust waste (`waste_sawdust`)

Only clean untreated sawdust from pre-gluing cutting or separately collected cutting dust, with actual receiver evidence matching the selected e1a44d20 untreated combustion/recovery route. Record whole physical mass, composition/moisture, stocks, transport and the receiving operation; the UUID does not authorize arbitrary disposal. Other actual disposal modes or treated/glue-contaminated states remain separately measured physical streams pending compatible identity/provider review, not omitted or zero. Captured particles are waste, not atmospheric PM; do not overlap sold_sawdust or internal return.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

###### UF-bonded cellular wood panel offcuts (`bonded_offcuts`)

Cured panel trims and rejected panel pieces, including their bonded wood and cured glue. Separate rock-wool-containing reject pieces into an additional composition-specific flow when present; do not call resin-contaminated wood clean biomass fuel.

- Selected flow: UF-bonded cellular wood panel offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

###### Uncured urea-formaldehyde mixed adhesive waste (`uncured_glue`)

Separately weighed expired mixed adhesive and squeeze-out not incorporated into cured rejects. Record recipe, water, cure state and actual treatment; adhesive-coated label residue is not this flow.

- Selected flow: Uncured urea-formaldehyde mixed adhesive waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

###### UF adhesive preparation and equipment-cleaning wastewater (`wastewater`)

A single combined wastewater stream from UF adhesive preparation and equipment cleaning, sent to external treatment and measured at handoff with composition, suspended solids, COD and formaldehyde where present. No simultaneous direct environmental discharge of its pollutant mass; direct-discharge sites require expanded specific elementary rows.

- Selected flow: UF adhesive preparation and equipment-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Outdoor-air release, subcompartment unspecified, fine fraction at or below 2.5 micrometres only. Measure residual stack plus fugitive emissions after controls; source uncertainty cannot turn total dust into PM2.5.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (PM2.5 - PM10) (`pm25_10`)

Outdoor-air release, subcompartment unspecified, fraction greater than 2.5 and at or below 10 micrometres only. When tests report nested PM10 and PM2.5, subtract matching samples rather than summing the nested totals.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (> PM10) (`pm_over10`)

Outdoor-air release, subcompartment unspecified, particles greater than 10 micrometres only. Derive from size-resolved measurement or matched total-PM minus PM10; keep confidence and sampling conventions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### formaldehyde (`formaldehyde`)

Formaldehyde species only, released to outdoor air with unspecified subcompartment during mixing, pressing/cure and conditioning. Use site speciation and operating time; indoor exposure or later service chamber concentration is not a factory emitted mass.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### methanol (`methanol`)

Conditional methanol species only when site recipe/emission testing shows it is emitted to outdoor air, unspecified subcompartment. Do not use total VOC as methanol or copy a plywood survey emission factor.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### water vapour (`water_vapour`)

Water vapour released to outdoor air, unspecified subcompartment, from conditioning and aqueous-glue cure. Quantify from matched moisture/recipe water balance and discharge records, with reaction-water assumptions disclosed. It is not purchased steam or a heat-energy flow.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Physical total of this exchange for the same design, lots, site and period divided by B, the accepted net panel kg from cp_output. Retain unallocated totals and destinations; missing is not zero; verify actual absence before marking a conditional flow inapplicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule |
| --- | --- | --- |
| a_physical | all inventory rows | Maintain an unallocated process graph, dry wood/water/carbon ledger and physical external amounts first. Internal rework/captured dust never becomes a second final output. Never multiply physical product or coproduct mass by an allocation share. |
| a_subdivide | cellular_manufacture | Separate measurable product-specific phases and design cohorts before allocating joint environmental burdens. Shared meter attribution between lines requires observed phase energy/operating evidence, never a fabricated recipe average. |
| a_coproduct | sold_sawdust; waste_sawdust | Treat clean sawdust as a coproduct only with actual sale/function evidence, otherwise as waste. Preserve physical mass and equal lot identities. If unavoidable joint burdens cannot be related by a documented physical relation, use disclosed same-period net sales revenue shares for panels and that coproduct; retain a physical-basis sensitivity, prices, currency and zero/negative-price handling. |
| a_no_credit | waste outputs | Waste-treatment burden links follow the actual destination. Do not combine allocation with automatic avoided-fuel/recycling credits. A substitution scenario needs separately documented receiving function, quality, displacement and boundaries. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | cellular_manufacture | finished_panel | foreground_record | lot_id; design; accepted/reject count; tare; net mass; final moisture; A; t; cross-section; core spacing; skin axes; bond acceptance | Calibrated net panel weighing excluding packaging; calibrated area/thickness measurements and representative oven-dry moisture samples; archive design/BOM and acceptance records | kg; m2; m | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_wood | cellular_manufacture | core_stock; face_veneer | foreground_record | supplier; species; grade; received/issued/returned mass; moisture; solid dimensions; opening/closing stock; phase handoffs | Weigh and reconcile material stock by species and lot; sealed representative moisture samples, oven-dry check; dimensional survey excludes cavities and lattice joint overlap | kg; m | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_recipe | cellular_manufacture | uf_powder; nh4cl; wheat_extender | foreground_record | supplier powder recipe; each separate ingredient mass; solids/moisture; water; pot-life timestamps; contact area; spread; cure schedule; unused mixed glue | Calibrated ingredient scales and mixing batch records; supplier certificate plus tested solids; actual lath/skin glue-contact survey and press logs; record actual recipe rather than handbook defaults | kg; m2 | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_filler | cellular_manufacture | rock_wool | foreground_record | design; infill product; density; delivered/issued/returned mass; cavity placement; reject composition | Weigh rock-wool loading separately and inspect the wooden support path; determine whether infill changes declared product function; retain supplier/acceptance evidence | kg | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_energy | cellular_manufacture | electricity | foreground_record | voltage; supplier/time mix; phase meters; press heaters; cutting; controls; idle/shared consumption; accepted mass | Calibrated customer-side meters; submeter phases and reconcile main meter, idle operation and shared users; electricity heating cannot be replaced by steam or fuel energy | kWh; MJ | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_water | cellular_manufacture | mix_clean_water; wastewater; water_vapour | foreground_record | mix/clean water; material moisture; recipe water; discharge mass/composition; retained water; phase evaporative loss; reaction-water assumptions | Matched water meters/scales and stock reconciliation; sample outgoing wastewater composition; reconcile measured incoming/retained/discharged water before estimating vapour with stated uncertainty | kg | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_pack | cellular_manufacture | pe_wrap; corrugated_pack | foreground_record | material identity; film/pad grade; issued/returned stock; actual net consumption; reused protection | Weigh film and corrugated pads separately; reconcile stock and reuse cycles; keep packaging outside B; record any additional real packing component as its own exchange | kg | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_transport | cellular_manufacture | inbound_freight | foreground_record | cargo mass; loaded km; origin/destination; truck class; fuel/emission class; load; empty return; provider delivery coverage | Actual trip records and weighbridge logs; sum each matched cargo mass in tonnes times loaded distance; disclose background empty-return/load convention and prevent duplicate delivery | t*km | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_residue | cellular_manufacture | sold_sawdust; clean_offcuts; waste_sawdust; bonded_offcuts; uncured_glue | foreground_record | phase; lot; moisture; glue contamination; mass; internal return; destination; treatment; sale invoice/price; opening/closing stock | Segregated calibrated waste/coproduct weighing and manifest/invoice records; reconcile each lot disposition and rework; separate clean wood, cured panel and uncured adhesive; never infer fuel eligibility from colour | kg | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |
| cp_air | cellular_manufacture | pm25; pm25_10; pm_over10; formaldehyde; methanol | foreground_record | phase/source; species; aerodynamic size fraction; sample dry/wet conditions; concentrations; exhaust flow; hours; capture/control efficiency; fugitive release; detection limits | Representative site stack/fugitive sampling under recorded production and ventilation; integrate matched mass rate/time, preserve raw nested PM results and derive only disjoint fractions; speciate gases, quantify censored results/uncertainty | kg | Each lot and representative phase testing | Same declared production period including startup/idle/rejects and actual variation | Same design and factory boundary | per 1 kg reference flow | Calibration/test reports; supplier and lot evidence; controls and missing scope |

For every protocol, the aggregation basis means the recorded physical total divided by the same cohort accepted net panel mass B. Retain unallocated raw totals, lot mass/area/thickness and destinations; the denominator is neither panel count nor cavity volume.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_reference | all inventory rows | x_norm = sum(x_physical) / B; retain raw exchange totals for the matched accepted panel cohort; never apply burden shares to these physical totals. The finished reference output is 1 kg. | x_physical; B; cp_output | x_norm |  |
| geometry_conversion | finished_panel | A_norm = sum(A) / B; V_envelope_norm = sum(A*t) / B. Solid wood volume is the measured sum of actual skins, frame and laths minus overlapping joints. V_void is the remaining designed cavity envelope; record actual infill separately. No solid-wood-density multiplication of V_envelope or V_void. | A; t; B; component dimensions; cp_output; cp_wood; cp_filler | measured mass-area-thickness relation |  |
| material_water_carbon | cellular_manufacture | Balance dry wood, water and carbon separately before allocation: inputs plus opening stock = product plus externally routed residues/emissions plus closing stock, within measured uncertainty. Include measured adhesive solids/water and fossil organic carbon separately from wood carbon; use measured or cited species carbon fractions, not a universal default. Explain unresolved residuals, reaction water and missing volatile species; never assign residual mass automatically to water vapour. | cp_output; cp_wood; cp_recipe; cp_residue; cp_water; cp_air | unallocated physical balances | usda-wood-handbook-2021 |
| disjoint_particles | pm25; pm25_10; pm_over10 | For matched tests, PM_2.5_10 = PM10 - PM2.5 and PM_over10 = total_PM - PM10, only when sampling boundaries are compatible. Physical particulate mass is the sum of the three disjoint fractions. Do not add nested total_PM or PM10 again; negative differences require review rather than clamping to zero. | matched total_PM; PM10; PM2.5; cp_air | disjoint particulate exchanges |  |
| burden_attribution | cellular_manufacture | Keep a separate burden ledger. For documented economic allocation of unavoidable joint burdens only, f_j = revenue_j / sum(revenue_j); assigned burden_j = f_j * joint burden plus product-specific burden. Keep all physical outputs unchanged; disclose sensitivity and actual sales basis. | joint burden; product-specific burden; sales; cp_residue | separate attributed burden ledger |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_boundary | all inventory rows | Retain actual cross-section/BOM, delivery endpoints, identity/property/unit matches, species, treated state, supplier/time and complete measurement scope. UUID identity alone does not establish a usable provider. | Actual raw records and scope/uncertainty disclosure |
| dq_primary | all inventory rows | Collect site data under the declared protocols before dataset completion. No synthetic values, literature-to-industry extrapolation or default recipe. Record missing/under-detection observations and whether each conditional row is absent or unresolved. | Actual raw records and scope/uncertainty disclosure |
| dq_units | all inventory rows | B, lot cohort and moisture/area/thickness basis must match. Keep calibration, repeat measurements, uncertainties, disjoint PM size definitions, concentration and wet/dry corrections. Supply actual provider conversions; secondary database property coefficients are not measured density. | Actual raw records and scope/uncertainty disclosure |
| dq_completeness | cellular_manufacture | List omitted operations, unmatched suppliers, additional real ingredients/consumables/packaging/wastes/species and their material significance. Add atomic exchanges before use when these occur. No all-tools-failed or unsupported measurement result can certify completeness. | Actual raw records and scope/uncertainty disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule |
| --- | --- | --- |
| v_construction | finished_panel | Require spaced wooden parallel/lattice support and separate skins, glue and optional infill. Reject solid blockboard, paper/aluminium honeycomb and complete doors even when a label says cellular board. |
| v_reference | all inventory rows | Exactly one completed reference product output equals 1 kg net panel; all amounts and protocol aggregation are per the same 1 kg reference flow. Missing UUIDs stay unresolved, not replaced with near products or hidden identities. |
| v_balances | cellular_manufacture | Audit unallocated physical transfers and separate dry-wood, water and carbon balances before inspecting burden allocation. Cavities never become solid wood volume. Internal link quantities must agree; rejects, stock and rework cannot vanish. |
| v_air | pm25; pm25_10; pm_over10; formaldehyde; methanol; water_vapour | Verify exact substance/size/medium and post-control release basis. No correction flows, total VOC proxy, nested-PM double count or indoor-to-outdoor substitution. Keep biogenic and fossil origins separate whenever actual carbon exchanges are added. |
| v_readiness | all inventory rows | A dataset is incomplete when actual flow/provider identity, quantities, useful-heat basis, source scope or measurement relationships are unresolved. State performed/skipped checks and uncertainty. Classification acceptance and scientific review are separate decisions. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground cellular wood-panel conversion with verified upstream links |
| downstream_use | secondary_dataset; background_dataset only with declared route/provider completeness |
| allowed_use | Matched interior panel manufacturing studies after applicability and dataset-completeness review |
| excluded_use | Universal 31610/3141/3142 coverage, solid blockboard, paper/aluminium honeycomb, lifetime/equivalent-service claims, unverified provider substitution |
| required_metadata | Spaced parallel/lattice wooden core and frame geometry; wood species and grades per component; face/back thickness and grain axes; measured panel area/thickness/net mass/final moisture; cavity fraction and infill identity/mass; powder UF formulation, separate additives/water and solids; glue-contact area and actual spread; cure temperature/pressure/time and acceptance; uncoated interior state; site/period; input supplier/delivery gates; electricity voltage; packaging excluded; waste/air compartments and treatment destinations |
| required_quality_disclosure | Primary period, represented production, measured mass/area/thickness, moisture, balances, unresolved identities/providers, omissions, allocation and uncertainty |
| update_trigger | Changed core/skin/infill design, adhesive recipe/route, utilities, species, delivery/treatment, controls, supplier boundaries or material new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-cellular-3 | official_guidance | UNSD, CPC Version 3.0, 31610 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31610 | Spaced parallel/lattice wood core and downstream panel uses; classification only, no quantities |
| un-cpc-plywood-3 | official_guidance | UNSD, CPC Version 3.0, 31411 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31411 | Broader plywood explanatory inclusion mentioning cellular board; unresolved mapping overlap, no automatic coverage |
| un-cpc-laminated-3 | official_guidance | UNSD, CPC Version 3.0, 31421 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31421 | Title/note physical-classification caution for laminated/veneered wood; no inferred core identity |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, 2021, FPL-GTR-282, https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf ; pp. 4–1, 10–11 Table 10–1, 10–12 to 10–13, 11–4 and G–8 | Dry-basis moisture; powder/liquid UF forms and separate mixing constituents; bonding/clamping/cure/conditioning and interior UF limitations; hollow-core glossary includes broader paper constructions, of which only the spaced wooden construction is adopted. No handbook recipe percentages, thresholds or survey factors are defaults. |
