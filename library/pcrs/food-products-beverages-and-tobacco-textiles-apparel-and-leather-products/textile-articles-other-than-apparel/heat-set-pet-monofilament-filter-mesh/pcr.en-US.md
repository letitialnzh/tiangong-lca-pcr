---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.heat-set-pet-monofilament-filter-mesh
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Heat-set PET monofilament filter mesh manufacture

## 1. Scope and Applicability

This method covers purchased drawn, undyed, unsized virgin PET monofilaments through warping, mechanical weaving, electric heat-setting, inspection and rolling to undyed, uncoated industrial screening or straining mesh. A water-only deionised-water rinse and electrically heated/driven calendering are included only where actually performed. The representative product is full-width roll mesh with order-specified geometry, rather than a fabricated filtration device [saati-pet-mesh]; [saati-ecofiltra-2022]. Heat-setting is an explicit condition of this reference endpoint, not an assumed necessary operation for every filter cloth [bolian-heat-setting].

CPC 27998 also lists wicks, gas mantles, hoses and transmission/conveyor belts [unsd-cpc-2025]. This record covers only its narrow monofilament screening/straining cloth route and does not establish whole-classification coverage. Excluded are those other articles, tyre cord, ordinary greige fabric, clothing mesh, other polymers, blends, multifilament, staple, knitted and nonwoven products; dyeing, sizing/desizing, coating, dipping, chemical surface modification, sewn filter bags, and medical or food-contact certification routes are excluded. Actual excluded operations require method extension and review before use, rather than deletion of their burdens.

Do not combine upstream monofilament polymerisation/spinning/drawing with mesh manufacture. Agriculture and food processing are outside this PET foreground; screening food does not establish food-contact approval. Inputs and utilities are supplied externally. Fuel-fired heaters, purchased heat or steam, air-/water-jet weaving, on-site water purification and wastewater treatment require additional atomic exchanges and foreground protocols before route use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.heat-set-pet-monofilament-filter-mesh |
| classification_refs | CPC 3.0: 27998 (narrower; classification context only) |
| covered_products | Virgin PET monofilament undyed uncoated heat-set screening/straining cloth rolls |
| excluded_products | Wicks, gas mantles, hoses, belts; other fibres/constructions, fabricated filters and excluded finishing routes |
| representative_product | Heat-set PET monofilament filter mesh |
| production_route | Monofilament packages → warping → mechanical weaving → conditional water-only rinse → electric heat-setting and conditional calendering → inspection/slitting/rolling/packing |
| market_state | Accepted finished cloth roll at weaving/finishing factory gate, before installation in a sieve or filter |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a material- and mesh-geometry-specified industrial screening/straining textile intermediate |
| How much | 1 kg accepted net mesh |
| How well | Declare PET monofilament, openings, open area, thread diameter, warp/weft counts, weave, thickness, usable width, measured mass per area, heat-set/calendered state, dimensional stability and visual acceptance; thresholds come from actual order and tests, without defaults |
| How long or cycle | One accepted manufacturing batch; no use life or sieving service quantity assigned |
| reference_flow_link | `finished_mesh` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Heat-set PET monofilament filter mesh |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Virgin PET and monofilament warp/weft composition; drawn feed state, diameter, finish, moisture and no-size evidence; mechanical loom type; all finishing stages and actual temperature/time/tension; measured mesh geometry and order acceptance; net-mass conditioning and packaging tare; factory geography, voltage and period; external wastewater destination, release monitoring and exclusions |

All required qualifiers must appear in the actual dataset metadata or product notes. The 1 kg unit is a manufacturing declared unit and establishes no functional equivalence across mesh geometries, applications or lifetimes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release weighs matched accepted net roll mesh on a calibrated scale, excluding film, core, carton and rejects, with conditioning recorded. |
| `area_conversion` | area or length statistics | Mass; area | kg; m2 | Use matched-lot usable width W (m), length L (m) and measured mass per area G (g/m2): A = L × W; net mass = A × G / 1000. Do not mix pre/post-finish area and G or substitute catalogue weight for output. |
| `energy_units` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve the public net calorific value property and energy unit group; collect meter kWh; 1 kWh = 3.6 MJ. Do not rewrite electricity as mass. |
| `water_conversion` | rinse water and wastewater | Mass | kg | Collect wet mass; for volume meters use measured density rho (kg/m3) at the same temperature, mass = V × rho. Do not assume a density or replace wastewater with a water-resource flow. |
| `material_balance` | PET materials and moisture | Mass | kg | Reconcile PET dry polymer, supplier finish, moisture, stocks, rejects and measured releases separately; area shrinkage is not mass loss. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased drawn undyed unsized virgin PET monofilament packages received at factory, with declared finish and moisture |
| starting_condition_role | External yarn input, not primary fibre manufacture |
| product_classification_scope | Narrow heat-set PET monofilament screening/straining cloth route within CPC 27998 |
| recursive_input_rule | Internal beams, greige mesh and wet cloth are lot transfers only. Purchased same-category finished mesh is recorded once with upstream linkage, but its changed reprocessing start requires review before using this monofilament-start method |
| upstream_dataset_requirement | Link compatible virgin drawn PET monofilament, actual electricity and packaging supplies; if rinsing, link deionised-water supply and external wastewater treatment, without duplicating internal circulation |
| disclosure | Manufacturing foreground is gate-to-gate; disclose geography/period, actual stages, finish/moisture, electricity, unlinked upstream and conditional-stage status |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | Include receipt/warping, mechanical weaving, electric stabilization, inspection/slitting/rolling/packing and attributable auxiliaries; add rinse/calendering only where actual. Temperature, pressure, recipes, energy, losses and output must come from factory records, not handbook examples. | `saati-ecofiltra-2022`; `bolian-heat-setting` |
| `boundary_wastewater` | water boundary | Supplied deionised water is a product input; untreated rinse wastewater is waste output to external treatment; evaporated water is a conditional elementary flow. Resource abstraction, wastewater treatment and final environmental release cannot share one row or be counted twice. On-site treatment requires boundary extension. |  |
| `boundary_upstream` | upstream and downstream | Exclude polymerisation, monofilament spinning/drawing, inbound transport, installation, screening operation, consumer use and end-of-life. Equipment/infrastructure are excluded by default with disclosed implications; do not claim complete cradle-to-gate until all upstream and relevant treatment links are assembled. |  |
| `boundary_releases` | auxiliaries and releases | Collect actual extraction, climate-control and maintenance records; no particulate, volatile or combustion release is assumed inevitable. Newly identified chemicals, wastes or releases require individual atomic rows and protocols by substance and compartment; missing measurements cannot be recorded as zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Yarn receipt, warping and drawing-in | required | Purchased monofilament packages in the declared route | Stage of one connected manufacturing foreground | per 1 kg reference flow |
| `weave` | Mechanical weaving | required | Specified monofilament woven mesh | Stage of one connected manufacturing foreground | per 1 kg reference flow |
| `rinse` | Water-only rinse | conditional | Actual externally supplied deionised-water rinse | Stage of one connected manufacturing foreground | per 1 kg reference flow |
| `stabilize` | Electric heat-setting and conditional calendering | required | Heat-set reference endpoint; calendering only if used | Stage of one connected manufacturing foreground | per 1 kg reference flow |
| `release` | Inspection, slitting, rolling and pack-out | required | Accepted finished mesh rolls | Stage of one connected manufacturing foreground | per 1 kg reference flow |

All stages share the matched released mesh denominator, rather than separately normalizing to unfinished intermediates. Internal transfers retain lot/mass records without extra purchased-product exchanges. Document absence of conditional rows with route evidence; disclose measurement gaps when present.

### Process: Yarn receipt, warping and drawing-in (`prepare`)

Verify warp/weft packages, prepare beams and loom; record internal lot transfers. No polymerisation, spinning, drawing, twisting or sizing is performed.

#### Inputs

##### Product flows

###### Polyester Filament (`warp_yarn`)

Purchased drawn virgin PET monofilament warp packages. Public filament identity includes monofilaments and multifilaments: this row is usable only with supplier records proving single-filament PET, diameter, drawing state, twist, finish and moisture. Do not substitute multifilament or recycled yarn. Record net issues less returns and stock changes.

- Selected flow: Polyester Filament `30173859-61d4-4518-ba9e-6846b8491c1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_prepare; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

###### Polyester Filament (`weft_yarn`)

Purchased drawn virgin PET monofilament weft, separately weighed from warp; same single-filament supplier qualification as warp_yarn. Supplier-applied finish is part of received yarn and not duplicated as mill chemical input.

- Selected flow: Polyester Filament `30173859-61d4-4518-ba9e-6846b8491c1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_prepare; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

###### Alternating current (`prepare_electricity`)

Meter the attributed stage electricity, including allocated auxiliary power. This UUID applies only to grid-average user supply in CN at <1 kV; it is not a generator output or a universal electricity identity. For a different location, voltage or supply technology retain the electricity exchange and select a matching verified identity before dataset use.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this row's attributable amount using cp_prepare; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

#### Outputs

##### Waste flows

###### Waste Polyethylene terephthalate (`prepare_pet_scrap`)

Weigh segregated PET yarn ends and unusable remnants sent out for treatment or recovery; use this identity only for PET scrap without mixed fibres or oil contamination. Reusable beam remnants are stock, not waste.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_prepare; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

### Process: Mechanical weaving (`weave`)

Record loom type, insertion system, yarn tension and mesh construction. This authored route uses mechanical insertion and electrically driven auxiliaries; air-jet and water-jet weaving require extension. Retain uninspected greige cloth as internal work in process, without repeated purchased input.

#### Inputs

##### Product flows

###### Alternating current (`weave_electricity`)

Meter the attributed stage electricity, including allocated auxiliary power. This UUID applies only to grid-average user supply in CN at <1 kV; it is not a generator output or a universal electricity identity. For a different location, voltage or supply technology retain the electricity exchange and select a matching verified identity before dataset use.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this row's attributable amount using cp_weave; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weave`

###### Mineral lubricating oil (`mineral_lubricant`)

Conditional on actual mineral-oil equipment lubrication. Collect product formulation and net make-up; recirculating oil is not new input each cycle. Other lubricant formulations require their own atomic row.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_weave; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weave`

#### Outputs

##### Waste flows

###### Waste Polyethylene terephthalate (`weave_pet_scrap`)

Conditional segregated clean PET selvage and broken monofilament scraps sent out for treatment or recovery. Weigh this clean PET scrap stream by lot. Keep captured dust separate and never include oil-contaminated or mixed-fibre waste under this identity.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_weave; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weave`

###### Captured PET dust (`captured_pet_dust`)

Conditional collected dust verified to consist of clean PET, sent to treatment or recovery and measured by net weighed capture-bin contents. This is one captured PET solid-waste exchange, not airborne particles. If contamination or mixed composition is present, use an independently qualified waste row instead.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_weave; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weave`

###### Spent mineral lubricating oil (`spent_mineral_oil`)

Conditional on actual oil drain. Weigh transferred spent mineral lubricant and document composition, container tare, treatment destination and any retained oil stock. Do not infer drain mass from fresh make-up alone.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_weave; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weave`

##### Elementary flows

###### Particulate matter, particle size unspecified (`airborne_particles`)

Conditional measured post-capture particulate release from loom handling to air, with particle size and air subcompartment genuinely unspecified. Collect source, sampling, capture efficiency and uncertainty. No default emission is asserted. If size fraction or release subcompartment is known, resolve the matching elementary flow instead; captured waste is excluded here.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_releases; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`

### Process: Water-only rinse (`rinse`)

Include only where the actual route rinses with water alone. Collect both make-up and untreated wastewater sent to external treatment. No cleaning chemicals, dyeing, desizing, on-site purification or effluent treatment is covered. Absence must be supported by route records.

#### Inputs

##### Product flows

###### Deionised water (`rinse_water`)

Only for an actual water-only rinse with externally supplied deionised water. Measure fresh make-up and distinguish internal recirculation. Supplier water-quality and delivery records must match deionisation; this is not direct river abstraction. Chemical-assisted washing or on-site water purification needs applicability extension and separate atomic exchanges.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_rinse; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rinse`

###### Alternating current (`rinse_electricity`)

Meter the attributed stage electricity, including allocated auxiliary power. This UUID applies only to grid-average user supply in CN at <1 kV; it is not a generator output or a universal electricity identity. For a different location, voltage or supply technology retain the electricity exchange and select a matching verified identity before dataset use.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this row's attributable amount using cp_rinse; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rinse`

#### Outputs

##### Waste flows

###### Untreated PET mesh rinse wastewater (`rinse_wastewater`)

Conditional on the water-only rinse. Record wastewater leaving the foreground to an external treatment provider, as wet mass with measured density if metered by volume, and analyse carried yarn finish and suspended PET. This is not an elementary water release. On-site treatment or direct environmental discharge requires reviewed treatment and individual effluent exchanges before use.

- Selected flow: Untreated PET mesh rinse wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_rinse; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rinse`

### Process: Electric heat-setting and conditional calendering (`stabilize`)

Include electric thermal stabilization with actual temperature, dwell time, tension and usable-width records. Conditional electric calendering requires pressure, line speed and mass/geometry before and after. Heater, drive, extraction and attributable climate-control power are included once. Neither heat-setting nor calendering is asserted mandatory for every technical textile [bolian-heat-setting]; [saati-ecofiltra-2022].

#### Inputs

##### Product flows

###### Alternating current (`stabilize_electricity`)

Meter the attributed stage electricity, including allocated auxiliary power. This UUID applies only to grid-average user supply in CN at <1 kV; it is not a generator output or a universal electricity identity. For a different location, voltage or supply technology retain the electricity exchange and select a matching verified identity before dataset use.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this row's attributable amount using cp_stabilize; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilize`

#### Outputs

##### Waste flows

###### Waste Polyethylene terephthalate (`stabilize_pet_scrap`)

Conditional clean PET rejected during heat-setting or optional calendering; weigh by reason and lot. Do not invent a loss fraction or treat shrinkage in area as PET mass loss.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_stabilize; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilize`

##### Elementary flows

###### water vapour (`evaporated_water`)

Conditional on measured evaporation from rinsed cloth or received moisture, emitted immediately to air with unspecified subcompartment. Use a measured water balance including carried-in moisture, drains, condensate returns and final moisture. Do not confuse purchased steam, wastewater, freshwater resource or long-term air release with this flow. Resolve a more specific air subcompartment if known.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_releases; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`

### Process: Inspection, slitting, rolling and pack-out (`release`)

Inspect mesh openings, open area, thread diameter, count, weave, thickness, usable width, dimensional stability and visual defects against the real order. Record edge slitting and accepted net mass, separate packaging and rejects. Cut-and-sewn filter articles are excluded.

#### Inputs

##### Product flows

###### Alternating current (`release_electricity`)

Meter the attributed stage electricity, including allocated auxiliary power. This UUID applies only to grid-average user supply in CN at <1 kV; it is not a generator output or a universal electricity identity. For a different location, voltage or supply technology retain the electricity exchange and select a matching verified identity before dataset use.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Collect this row's attributable amount using cp_release; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Low-density polyethylene foil (PE-LD) (`ldpe_wrap`)

Conditional supplied non-cellular, non-adhesive, unreinforced and unlaminated PE-LD roll wrap, by net kg. Verify polymer and configuration, not generic polyethylene resin; other wrap constructions need their own identity. Film tare is excluded from reference mesh mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_release; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Paperboard winding tube (`paperboard_core`)

Conditional disposable paperboard winding tube. Weigh each core or use traceable batch net-mass records; disclose fibre content and dimensions. Reusable cores need observed reuse-cycle attribution and loss records, without invented reuse life.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_release; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Corrugated paperboard shipping carton (`corrugated_carton`)

Conditional carton enclosing the mesh roll. Weigh net carton mass and record actual fibre composition and packing configuration. Do not force a fibre-ratio-specific public box identity onto an unspecified carton.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_release; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

#### Outputs

##### Product flows

###### Heat-set PET monofilament filter mesh (`finished_mesh`)

Reference output is full-width, undyed, uncoated, dimensionally stabilized PET monofilament woven cloth in rolls, for industrial screening or straining. Record mesh geometry and acceptance tests after all declared finishing; this is not a completed filter, medical device or installed sieve.

- Selected flow: Heat-set PET monofilament filter mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

##### Waste flows

###### Waste Polyethylene terephthalate (`release_pet_scrap`)

Conditional clean PET trimmed edges and rejected mesh sent to treatment or recovery. Segregate and weigh by lot; downgraded marketable cloth is evaluated as a co-product, not automatically waste.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this row's attributable amount using cp_release; divide by matched accepted net mesh mass; per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | co-production and shared equipment | First subdivide by lot and submeter. Attribute shared loom, stabilization and climate-control burdens using measured electricity or verified operating-time/load drivers. Net-mass allocation within comparable runs is allowed only with observed equal process/resource relationships; different mesh geometries are not assumed equally energy intensive per kg. |  |
| `allocation_internal` | internal reuse and waste | Transfer internal beams/cloth burdens once; retain accumulated burdens in rework. Link PET waste treatment to actual destinations without presumed avoided-virgin-PET credit from sale or recovery; oil and wastewater treatment are not omitted. |  |
| `allocation_coproduct` | marketable downgraded mesh | Distinguish waste from saleable downgraded mesh and record grade, use and net mass. Subdivide separable lots first, then allocate remaining shared burdens by observed physical relationships. Where none is supported, use actual contemporaneous revenue allocation with price evidence and sensitivity, rather than burden-free downgraded cloth. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | `prepare` | warp/weft yarn, beams, remnants, preparation power | batch ledger; weighing; meter | lot; virgin PET/monofilament certificate; diameter/drawn-state/finish/moisture; net warp/weft issues; returns/stocks; PET scrap kg; kWh | Calibrated scales less tare; submeter and work orders; reconcile beam transfers | kg; kWh | each lot; continuous meter readings | current representative consecutive production period, declaring dates, downtime and seasonality; no invented duration | one identified factory with shared-utility attribution | per 1 kg reference flow | calibration, work orders, raw records, stock/balance reconciliation, detection limits and gaps |
| `cp_weave` | `weave` | weaving, electricity, lubricant and PET waste | work orders; weighing; meter; maintenance logs | lot; loom/insertion type; tension/counts; kWh; mineral-oil formulation and net make-up kg; oil drain kg; clean PET waste kg; captured dust and gaps | Submeter; calibrated scales; oil-container stocks and maintenance logs; lot-segregated waste | kg; kWh | each lot; continuous meter readings | current representative consecutive production period, declaring dates, downtime and seasonality; no invented duration | one identified factory with shared-utility attribution | per 1 kg reference flow | calibration, work orders, raw records, stock/balance reconciliation, detection limits and gaps |
| `cp_rinse` | `rinse` | fresh water, rinse power, exported wastewater | flow/weighing records; water quality; transfer slips | lot; presence/absence evidence; water quality; fresh water kg; circulation; wastewater kg; m3 and measured density kg/m3; finish and suspended PET; treatment provider; kWh | Calibrated flowmeter and density determination or weighing; treatment-transfer slips; exclude repeated circulation | kg; kWh; m3; kg/m3 | each lot; continuous meter readings | current representative consecutive production period, declaring dates, downtime and seasonality; no invented duration | one identified factory with shared-utility attribution | per 1 kg reference flow | calibration, work orders, raw records, stock/balance reconciliation, detection limits and gaps |
| `cp_stabilize` | `stabilize` | heat-setting/calendering, moisture and rejects | work orders; submeters; thermal/pressure and weighing records | lot; kWh; actual temperature/time/tension/width; calender presence, pressure/speed; pre/post moisture and mass; condensate; clean PET rejects kg | Submeter heater and auxiliaries; thermal logs/work orders; matched moisture tests/calibrated scales; separate optional calendering records | kg; kWh | each lot; continuous meter readings | current representative consecutive production period, declaring dates, downtime and seasonality; no invented duration | one identified factory with shared-utility attribution | per 1 kg reference flow | calibration, work orders, raw records, stock/balance reconciliation, detection limits and gaps |
| `cp_release` | `release` | accepted net output, packaging and rejects | quality tests; weighing; meter; release records | lot; net roll mesh kg; each packaging component tare kg; rejects kg; L m, W m, G g/m2; measured openings/open area/diameter/counts/thickness; stability; conditioning; kWh | Calibrated scales gross less individual tares; matched release lots; geometry/conditioning tests; area conversion verified only within the same lot | kg; kWh; m; g/m2; µm | each lot; continuous meter readings | current representative consecutive production period, declaring dates, downtime and seasonality; no invented duration | one identified factory with shared-utility attribution | per 1 kg reference flow | calibration, work orders, raw records, stock/balance reconciliation, detection limits and gaps |
| `cp_releases` | `weave; stabilize` | airborne particles and evaporated water | monitoring; water-balance records | lot; stage; release source and immediacy; compartment/subcompartment; particulate sampling before/after capture kg; size status; incoming/drained/moisture/condensate kg; evaporation kg; detection limit and uncertainty | Actual release monitoring; full measured water balance over matched period; use specific flows when subcompartment is known; missing measurement is not zero | kg | each lot; continuous meter readings | current representative consecutive production period, declaring dates, downtime and seasonality; no invented duration | one identified factory with shared-utility attribution | per 1 kg reference flow | calibration, work orders, raw records, stock/balance reconciliation, detection limits and gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | For each row divide the exchange total attributable to the matched accepted lot by its net mesh mass; the finished output is 1 kg per 1 kg reference flow. Measure conditional rows only where actual, without numerical defaults. | cp_prepare; cp_weave; cp_rinse; cp_stabilize; cp_release; cp_releases | row amount per 1 kg reference flow |  |
| `matched_area` | area records | A = L × W; net mesh kg = A × G / 1000; use matched-lot final-finish measured L, W and G, reconciled against calibrated weighed output. | cp_release | mass reconciled to net output |  |
| `water_mass` | water volume records | Water/wastewater kg = V (m3) × measured rho (kg/m3) at matched temperature/state; wet wastewater mass includes measured carried constituents. | cp_rinse | water and wastewater mass |  |
| `energy_conversion` | electricity unit conversion | MJ = kWh × 3.6; retain Net calorific value property. | cp_prepare; cp_weave; cp_rinse; cp_stabilize; cp_release | consistent energy units |  |
| `balance_pet_water` | materials and moisture | Reconcile dry PET and wet mass separately across issues, stocks, finished cloth, scrap, carried constituents and measured releases; water balance includes fresh input, yarn/wet-cloth moisture, drains, condensate returns and final moisture. Do not label unexplained residuals as inevitable air releases; report residual uncertainty. | cp_prepare; cp_weave; cp_rinse; cp_stabilize; cp_release; cp_releases | evidenced closure and remaining residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | feed and product | Verify virgin PET monofilament/no-size, incoming processing state and all final mesh qualifiers; reference product and output row names remain identical. | supplier certificates, work orders and acceptance tests |
| `quality_basis` | measurement | Every row uses matched accepted net mesh denominator; exclude packaging from mesh mass; record moisture, finish and dry polymer separately with calibration/unit traceability. | cp_release; cp_prepare; cp_rinse |
| `quality_coverage` | representativeness/completeness | Disclose actual period, geography/supply, product mix, downtime/rework, optional stages, release monitoring, gaps and allocation; absence and missing measurement are not collapsed to zero. | production logs, submeters, monitoring and gap ledger |
| `quality_evidence` | external sources | Sources support product/process context; historical handbook does not supply current quantitative defaults. Virgin yarn upstream burdens, wastewater treatment and final releases require separate links. | source applicability, supplier data and actual treatment chain |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Reference product name matches finished_mesh; reference output is 1 kg accepted net mesh in the same state with all qualifiers. Do not equate a mass declared unit with equivalent screening function. |  |
| `validate_route` | actual route | Verify mechanical insertion, electric heat-setting and actual optional stages. Finishing chemicals, fuel heat or on-site wastewater treatment make this narrow route incomplete until extended. |  |
| `validate_atomic` | all exchanges | Each row is one specific physical/chemical exchange; public UUID property/unit group, material origin, feed state and compartment/subcompartment must match. Do not force unresolved identities or represent them as verified. |  |
| `validate_balances` | amounts and allocation | Amounts are finite and nonnegative; reconcile matched stocks/inputs/output/wastes/water without duplicate internal transfers. Explain residuals and allocation sensitivity without unsupported tolerance thresholds. |  |
| `validate_completeness` | dataset | Report performed, skipped, not-applicable, unmeasured and identity-unresolved checks separately. Missing release measurements do not prove no release; unlinked upstream prevents whole-lifecycle claims. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site- and specification-specific mesh manufacturing foreground process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing modelling of matching material/geometry/finish screening cloth; downstream assembly linkage after explicit matching |
| excluded_use | Whole CPC27998 coverage; agriculture/food manufacture; food/medical approval; lifetime screening service or complete cradle-to-gate claims; products outside this route |
| required_metadata | monofilament/feed state, mesh/quality qualifiers, actual route, site/period/voltage, net mass, packaging configuration, upstream/treatment links, allocation and stage status |
| required_quality_disclosure | representativeness, calibration/raw records, denominator, moisture/finish, monitoring/detection limits, gaps, unresolved identities and sensitivity; no implied methodology approval |
| update_trigger | change in polymer/monofilament state, geometry, finishing/cleaning chemistry, heat source, electricity, packaging, treatment chain or acceptance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p. 130, 27998. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Broad classification context only; contains no factory recipe or coverage acceptance. |
| `saati-pet-mesh` | handbook | SAATI, Polyester Woven Meshes, undated manufacturer page, accessed 2026-10-06, sections Explore Our Polyester Woven Meshes and SAATIfil. https://www.saati.com/products/filtration/filter-meshes-fabrics/pet/ | Current commercial PET woven filtration-product and aperture context; no compliance, lifetime or numeric default adopted. |
| `saati-ecofiltra-2022` | handbook | SAATI, Ecofiltra brochure, March 2022, PDF p. 5 / printed pp. 6–7, Monofilament Mesh; PDF p. 6 / printed pp. 8–9, weave distinctions. https://www.saati.com/media/wc5dcx45/emea_ecofiltra_brochure_mar-2022_eng_v5.pdf | Historical monofilament versus multifilament/staple construction and weaving distinctions; optional calendering context. No historical specification values or performance claims transferred to current production. |
| `bolian-heat-setting` | handbook | Bolian Filtration, Heat-setting of Filter Cloth, undated manufacturer article, accessed 2026-10-06, heading and paragraphs on pore morphology and stress relaxation. https://www.bolianfiltration.com/heat-setting-of-filter-cloths.html | Heat-setting process and dimensional-stabilization rationale only; factory records establish actual electric route and settings. Marketing life/efficiency claims and chemical treatment are not adopted. |
