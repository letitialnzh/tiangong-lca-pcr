---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shuttering-for-concrete-constructional-work-made-out-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Cut-to-drawing and resealed unframed phenolic-film birch concrete formwork panels

## 1. Scope and Applicability

This PCR covers one new, unframed formwork facing product: receive purchased cured all-birch all-veneer PF-bonded plywood with smooth phenolic film on both faces; cut the contour and drill where required by a specific concrete-form drawing; brush compatible waterborne acrylic paint over every exposed cut and hole; ambient dry, inspect and pack for factory delivery. It is a concrete-contact facing panel, not a complete load-bearing formwork system. Drawing, order and acceptance evidence must establish intended shuttering use and actual fabrication; relabelling stock plywood is insufficient. See `wisa-formwork-2020`, `metsa-formwork-manual`, `metsa-overlaid-epd-2024`.

Excluded: log-to-plywood manufacture, new on-site film application/hot pressing, ordinary unworked stock-sheet sales, other species/core structures, other film or edge-paint routes, scarf-jointed sheets, face-film refurbishment, support/frame assembly, supplied fastening hardware, installation, each pour/use, stripping, cleaning, repair, loss and end-of-life. Purchased bond and film production remain in matched upstream board data, not zero burdens. New film application and hardware-containing components need an explicit method extension, not omitted exchanges. No default concrete-contact service area, structural system or number of pours is specified; use service requires a separately measured reference and service ledger.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shuttering-for-concrete-constructional-work-made-out-of-wood |
| classification_refs | CPC 3.0 31623; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | New unframed birch facing panels fabricated to specific shuttering drawings with all exposed edges/holes resealed |
| excluded_products | Stock substrate sheets; other wood shuttering routes; complete formwork systems; use services |
| representative_product | One-piece drawing-specific facing, without default thickness, dimensions, recipe or mass |
| production_route | Purchased double-film board—cut/conditional drill—dust removal—brush edge paint—ambient dry—inspect—pack; electric handling, no combustion |
| market_state | Dry accepted panel ready for delivery; transport packaging accounted separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a concrete-contact facing fabricated to a shuttering drawing |
| How much | 1 kg accepted delivered net panel at measured retained-water state |
| How well | Declare contour/hole layout, thickness, tolerances, surface condition and acceptance requirements; applicability is not complete-system load certification |
| How long or cycle | One manufacture-to-factory-delivery cycle; no assumed life or reuse per pour |
| reference_flow_link | finished_panel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Shuttering for concrete constructional work made out of wood `0c63533f-7bd2-4d58-a0cb-03a1bed26179` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Birch species and all-veneer layup; PF bond and smooth double phenolic film; received/delivered film/edge-seal states; order and shuttering drawing/contour/hole layout; thickness/tolerance/surface acceptance; net mass and moisture method; waterborne acrylic paint TDS/SDS/solids/volatiles; voltage/location/period/loss boundary; manufacturing scope and waste/air outlet destinations; packaging and attribution; no frame/hardware and no use-service declaration |

Declare every required qualifier in data-package metadata, product or process descriptions. Net mass includes retained bond, film, paint and water, excludes transport packaging; 1 kg does not establish functional equivalence across geometries or support systems.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted delivered net panel using cp_product; all inventory uses per 1 kg reference flow. Reject gross packaging mass, oven-dry wood mass or theoretical density substitutes. |
| coated_moisture | coated_board; finished_panel; coated_offcut; captured_dust | Mass | kg | Validate the coated/bonded matrix water method with cp_material/cp_product; drying mass loss may contain paint/bond volatiles, not only water. For unglued wood MC=100×water mass/oven-dry wood mass (usda-wood-handbook-2021); no default species density conversion. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use cp_energy; 1 kWh = 3.6 MJ. State that the platform Net calorific value property carries electrical energy; match consumer-side low-voltage delivery, supplier and loss basis; unknown bases leave provider linkage pending. |
| wet_paint_basis | edge_paint; waste_paint; washwater | Mass | kg | Record whole-formulation wet paint; cp_coating separates dry solids, formulation water, volatile constituents and additional water. Waterborne is not emission-free; solids, density and volatility require measurement or supplier evidence. |
| particle_partition | pm25; pmcoarse; pmover10 | Mass | kg | For the same outlet, period and method PM2.5, PM10 and total filterable PM are nested; only comparable measurements permit coarse=PM10−PM2.5 and over10=total PM−PM10. Negative differences or incompatible tests must not be clamped to zero or assigned assumed fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of purchased cured double-film all-birch all-veneer PF plywood with original edge seal and auxiliaries; upstream operations not repeated in this foreground |
| starting_condition_role | Manufacturing receiving cutoff; not a burden-free input |
| product_classification_scope | Drawing-specific unframed formwork-facing subset of CPC 31623; no mapping claim for stock plywood or other shuttering products |
| recursive_input_rule | No purchased finished shuttering for refurbishment in this route. Same-batch internal rework uses equal-quantity internal links, without another purchase/manufacturing burden; purchased fabricated/used shuttering requires a method extension. |
| upstream_dataset_requirement | Match board wood/PF/double-film/original-edge-seal state, auxiliary production, electricity, tap water, inbound transport and external waste treatment. Uncoated board alone cannot complete coated-board data; do not add already-included film or transport again. |
| disclosure | Disclose site, survey period, route/states, manufacturing/transport delivery cutoffs, providers/destinations, pending backgrounds, measurement completeness and exclusion of use service. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_actual_route | manufacturing | Include receiving, cutting, conditional drilling, dust collection, brushing exposed edges/holes, ambient drying ventilation, inspection, packing, electric handling and production-period equipment maintenance. Existing film is upstream; no new on-site film, hot press or combustion. | wisa-formwork-2020; metsa-formwork-manual; metsa-overlaid-epd-2024 |
| boundary_one_unit | manufacturing | Aggregate machining, sealing and packing as one foreground unit with one delivered finished output. Retain stage physical measurements/loops; both ends of each internal transfer have equal quantity, lot and state, not another external product exchange. | wisa-formwork-2020 |
| boundary_releases | manufacturing | Separate captured dust from actual outdoor releases. Brush washwater and residual paint go to external treatment, without assumed direct water discharge or on-site incineration; actual such routes require method/species extension. Do not duplicate background electricity emissions as on-site emissions. | epa-sawmill-pm-2014 |
| boundary_fasteners | finished_panel | Unframed panel delivery has no supplied screws, nails, clamps or supports; installation hardware belongs to a separate construction service. If hardware is actually supplied, do not silently exclude it: this scope is unavailable. | wisa-formwork-2020; metsa-formwork-manual |
| boundary_use_service | dataset | This manufacturing PCR explicitly excludes reuse service. A service extension independently measures contact area and accepted pours, panel-specific turns/retirement, replacement/loss, repair materials, cleaning water/energy/effluent, release agents, installation hardware and handling. Attribute manufacturing once across measured service, without buying/manufacturing a full panel again each pour; manufacturer reuse figures and building life are not defaults. | wisa-formwork-2020; metsa-formwork-manual; metsa-overlaid-epd-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacturing | Fabrication, edge resealing and delivery packing | required | declared purchased coated-board route | foreground production | 1 kg net finished reference panel |

Physical map: received coated board → drawing-specific cut/drill → dust removal → brush edge/hole paint → ambient dry → inspect/rework → pack/deliver. Keep separate generation-point ledgers for offcut, captured dust, residual paint, washwater and packaging waste. Same-panel stage transfer and internal rework are not duplicate inputs/outputs. Preserve stage mass/water/wood-biogenic-carbon/bond-film-paint-fossil-carbon balances separately from attributed environmental burdens. Each following card is one atomic exchange; conditional absence needs survey evidence, missing is not zero. Additional actual chemicals, packaging or pollutants require separate verified rows, not inclusion in another flow.

### Process: Fabrication, edge resealing and delivery packing (`manufacturing`)

#### Inputs

##### Product flows

###### Plywood consisting solely of sheets, with at least one outer ply of non-coniferous wood other than tropical (`coated_board`)

Purchased all-birch, all-veneer PF-bonded board with cured smooth phenolic film on both faces and original acrylic edge seal. Record actual layup, film loading/state, moisture and net received mass. This general plywood identity contains the target subset; it supplies no coated-board recipe, amount or background. An uncoated plywood dataset alone leaves the film/initial edge-seal upstream gap unresolved.

- Selected flow: Plywood consisting solely of sheets, with at least one outer ply of non-coniferous wood other than tropical `897daeae-8210-4a8e-af21-7ad112411dc5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_material; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `metsa-overlaid-epd-2024`

###### Water-Based Paint (`edge_paint`)

Whole wet waterborne acrylic edge paint, brush-applied to exposed cuts and holes, compatible with purchased film and cured at ambient conditions. Require supplier TDS/SDS and recipe; no UV cure, solvent-borne varnish or assumed solids/VOC factor. Wider binder examples in this identity do not authorize alkyd substitution or its generic emission claims.

- Selected flow: Water-Based Paint `47411f13-cc57-455b-ba23-dafbaeef17db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_coating; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coating`
- Sources: `wisa-formwork-2020`

###### Alternating current (`electricity`)

Low-voltage (<1 kV) consumer-side AC grid supply for cutting, drilling, dust extraction, ambient drying ventilation, electric handling and packing. The selected identity is CN supply; require actual voltage, location/year/mix and supplier loss boundary. Different receiving voltages/geographies need a verified compatible identity/background extension; supplier linkage remains pending until evidenced. Net calorific value is the database reference property; for electricity it carries electrical MJ, not combustion heat.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect amount per 1 kg reference flow using cp_energy; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Water, tap (`tap_water`)

Meter purchased tap water actually used for brush/tool cleaning or supplier-authorized paint dilution; do not count water already inside purchased wet paint again. Record temperature and measured density when converting volume to mass; no generic density default.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_water; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Polyethylene film (`pe_wrap`)

Polyethylene shipment wrapping film only where actually used; weigh net film and identify grade/recycled content. Generic film identity does not establish a packaging recipe. Film retained as transport packaging is outside reference panel mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_pack; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `metsa-formwork-manual`

###### Polypropylene packaging strap (`pp_strap`)

Only actual polypropylene flat packaging strap. Twine, resin granules, cable ties and recycled steel band are incompatible substitutes; UUID unresolved.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_pack; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_pallet`)

Actual supplied wooden load-board pallet within the broader identity; specify construction and measured net mass. Track retained/reused pallets and charge only evidenced attributable production/repair burden; no default pallet reuse count and no collar input when absent.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_pack; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `metsa-formwork-manual`

###### Lubricating oil (`mineral_oil`)

Petroleum-derived liquid lubricating oil added to machining/handling equipment during the surveyed production period, only if present. Reconcile stocks and retained equipment charge; no synthetic oil, grease or release-agent proxy.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_maintenance; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`

###### freight transport (`road_freight`)

Actual road-freight service for incoming coated board and auxiliaries, and external waste legs only where not included in the chosen treatment provider. Record each shipment leg, wet transported mass, distance, carrier/vehicle/load/backhaul and provider inclusions. No default distance, payload, return fraction or fuel. Do not repeat delivered-material or waste-provider transport; outbound delivery to a construction site is excluded from factory-gate reference. Other transport modes require distinct verified service rows.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / unit group `3620148f-c5db-48ce-9065-a10092089aca` / kg*km
- Amount rule: Collect amount per 1 kg reference flow using cp_transport; retain raw leg totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `route_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

#### Outputs

##### Product flows

###### Shuttering for concrete constructional work made out of wood (`finished_panel`)

Exactly one shipment-accepted, cut-to-drawing unframed birch formwork facing panel reference. Net panel includes wood, cured PF bond, retained face film, new cured edge paint and retained water; excludes transport packaging, support frame and installation fasteners. Same panel moving between machining, sealing and packing is not another product output.

- Selected flow: Shuttering for concrete constructional work made out of wood `0c63533f-7bd2-4d58-a0cb-03a1bed26179`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_product`
- Sources: `wisa-formwork-2020`

##### Waste flows

###### Phenolic-film-coated PF-bonded birch plywood offcut (`coated_offcut`)

Unagglomerated coated/bonded offcuts and rejected pieces sent to external treatment. Retain resin/film/water content and destination. Agglomerated wood briquettes and untreated sawdust are incompatible; internal rework stays an internal loop.

- Selected flow: Phenolic-film-coated PF-bonded birch plywood offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_waste; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Captured PF-bonded phenolic-film plywood machining dust (`captured_dust`)

Captured sawing/drilling dust containing wood, cured bond and film. Weigh container tare/net mass, record moisture/composition and external receiver; do not treat captured dust as air emission or clean biomass fuel.

- Selected flow: Captured PF-bonded phenolic-film plywood machining dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_waste; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-sawmill-pm-2014`

###### Waste paint, water-based (`waste_paint`)

Separately collected waterborne acrylic paint residue at generation, with solids/water state and actual treatment. Do not include separately weighed washwater or container polymer in this row.

- Selected flow: Waste paint, water-based `3ec596f0-fe78-40d3-be98-8ef4e3cb99e5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_waste; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Acrylic edge-paint brush-cleaning wastewater to external treatment (`washwater`)

Separately collected acrylic-paint brush/tool washwater; measure wet mass and suspended/dissolved constituents and receiver. No direct discharge covered. Mining, manganese-slag washing or already-treated wastewater identities are incompatible.

- Selected flow: Acrylic edge-paint brush-cleaning wastewater to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_water; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Empty HDPE edge-paint container with residual acrylic paint (`paint_container`)

If the actual paint arrives in HDPE containers, record net empty container polymer and adherent residue separately, without counting residue twice in waste_paint. Other container materials require separate atomic rows and verified identities.

- Selected flow: Empty HDPE edge-paint container with residual acrylic paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_waste; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Discarded unwashed polyethylene packaging film (`discarded_pe`)

Actual discarded incoming/packing-trim PE film at generation, excluding film leaving with shipment. Cleaned mechanical-recycling output and PET scrap are incompatible; track contaminant state and treatment.

- Selected flow: Discarded unwashed polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_waste; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Used lubricating oil (`used_oil`)

Actual removed petroleum-based lubricating oil from equipment maintenance; track contamination and external treatment, retained charge and stocks. Generated waste identity does not imply recycling credit or a treatment process.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_maintenance; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Outdoor-air unspecified PM2.5 mass at actual exhaust/fugitive release, after control. No correction flow or indoor exposure concentration. Use the finest measured bin only once.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_air; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pm-2014`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Outdoor-air unspecified particles in the disjoint PM2.5–PM10 bin; same outlet/time/method as nested totals. No simultaneous extra full PM10 exchange.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_air; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pm-2014`

###### particles (> PM10) (`pmover10`)

Outdoor-air unspecified particles >PM10 from the same measured distribution. Do not equate unspecified particle size with this bin; no extra total-PM exchange.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_air; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pm-2014`

###### water vapour (`water_vapour`)

Water actually evaporated from paint, cleaned tools or changed board moisture and released outdoors; derive a closed water balance after separating non-water volatile loss. Ambient humidity is not process input. No steam energy exchange is implied.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_water; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### formaldehyde (`formaldehyde`)

Actual formaldehyde, CAS 50-00-0, released outdoors during machining/storage/drying only if demonstrated by site screening or measurements. Cured-panel chamber ppm, hot-press factors and total VOC cannot substitute for factory emitted kg.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_air; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `metsa-overlaid-epd-2024`

###### 2-n-butoxy-1-ethanol (`butoxyethanol`)

Outdoor-air unspecified 2-butoxyethanol, CAS 111-76-2, only if the actual waterborne paint/SDS and site balance identify it. No default positive emission or assumption that all acrylic paints contain it. Retained, waste and airborne fractions are measured separately.

- Selected flow: 2-n-butoxy-1-ethanol `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_air; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### carbon dioxide (biogenic) (`co2_bio`)

Biogenic carbon dioxide to outdoor-air unspecified only if actual on-site wood-carbon oxidation during storage is evidenced; no combustion in the declared route. Record demonstrated absence separately from unmeasured amounts. Do not delete actual biogenic CO2 from LCI because of an LCIA or GHG reporting convention; fossil resin/coating carbon is separate.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 kg reference flow using cp_carbon; retain raw totals and the same accepted net-mass denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | manufacturing | Prefer dedicated batch measurements, submeters or equipment-time attribution backed by measured causal relationships; include standby/control loads. Retain site totals, physical and burden ledgers; attribution shares sum to one, never multiply physical coproduct outputs by burden shares to manufacture a balance. |  |
| allocation_waste | coated_offcut; captured_dust; waste_paint; washwater | Accepted panels are the only manufacturing reference in this route; waste-treatment burdens belong to production. Scrap sale alone does not establish an independent coproduct; no default negative burden, recycling or fuel-substitution credit. Internal rework reduces only actual new-material demand; do not repeat prior manufacture. | metsa-overlaid-epd-2024 |
| allocation_extension | dataset | Actual independent coproducts, shared other routes or reuse services require disclosed independent measurements, subdivision or justified physical/economic methods and sensitivity; unresolved choices preclude a complete dataset, and softwood survey shares cannot be transplanted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | manufacturing | finished_panel | acceptance records and weighing | order/drawing revision; lot; birch/PF/film state; contour/holes/thickness/area; batch tare-excluded net mass; matrix moisture method; acceptance/rework/rejects; shipments | Weigh dry accepted panels on a calibrated scale, excluding transport packaging; reconcile same-order configuration, drawings, holes and surface acceptance, not catalogue mass. | kg; m; m2; moisture fraction | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_material | manufacturing | coated_board | incoming lots and stock weighing | supplier/background; species/layup/PF; double-film and original edges; incoming net mass/dimensions; opening/closing/WIP; consumption; returns; water/dry wood/bond-film composition and method | Check supplier declarations lot by lot, weigh incoming/stock net material; use a water method validated for coated/bonded matrix, separate non-water volatiles and track cut lists/stage physical totals. | kg; m; moisture fraction | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_coating | manufacturing | edge_paint | formulation/issue-return/weighing | paint name/TDS/SDS; waterborne acrylic evidence; wet mass/density/solids/volatile CAS; brush and edge/hole area; extra dilution water; retained dry coat; residue; cleaning fate | Weigh issued/returned wet paint, verify actual application/drying and supplier suitability; formulation/test distinguishes retention, volatilization, waste and residue on containers/tools. | kg; mass fraction; m2 | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_energy | manufacturing | electricity | meter/runtime records | submeter start/end kWh; production/standby/extraction/ventilation/packing/handling runtime; lots; voltage/location/provider/period; loss and attribution evidence | Use submeters or measured calibrated power/runtime against invoices; identify shared loads. Match low-voltage consumer background to meter boundary; do not attach a high-voltage production mix directly to an end-use meter. | kWh; MJ; h | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_water | manufacturing | tap_water; washwater; water_vapour | meters/weighing/water ledger | tap/paint/additional/tool/board water; washwater mass; density/temperature; retention/evaporation/stocks; suspended/dissolved constituents; receiver | Measure fresh/effluent/board/paint water and close water ledger; separate wastewater water and constituents to avoid mass duplication. Drying loss is vapour only after confirming water identity. | kg; m3; density; temperature | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_pack | manufacturing | pe_wrap; pp_strap; wood_pallet | packaging BOM/weighing/return ledger | each packaging material/net mass; pack/pallet specification; batch issues/returns/stocks; actual retention/loss/repair; background inclusions | Weigh each material separately; reconcile shipped packaging and actual pallet returns, check whether upstream already contains containers/packaging; no assumed reuse allocation. | kg; count | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_waste | manufacturing | coated_offcut; captured_dust; waste_paint; paint_container; discarded_pe | waste weighing and transfer records | material/bond/film/paint/water; container tare/net; capture point; rework/stocks; receiver/transport/actual treatment; adhered residue | Weigh streams separately, retain treatment receipts and reconcile dust capture/outlets; do not duplicate empty container polymer/residue with wet paint/washwater. | kg; mass fraction | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_maintenance | manufacturing | mineral_oil; used_oil | equipment oil issue/drain records | oil formulation; equipment/lot; additions/drains; stock/equipment retention; attributable runtime; waste-oil fate | Weigh additions/drains for the production period, reconcile equipment retention/stocks; shared maintenance needs attribution evidence. | kg; h | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_air | manufacturing | pm25; pmcoarse; pmover10; formaldehyde; butoxyethanol | outlet measurements and species screening | outlet/location/compartment; gas flow/T/P/humidity/dry-wet standard; concentration/time; filtration/size definition; measured control performance; CAS/SDS; detection limit/non-detect; captured fate/shared outlet | Use traceable outlet measurements or validated species balances; match concentration/gas volume dry-wet/standard states and actual operating time; count shared outlets once, report non-detects rather than automatic zeros. | kg; mass/volume; gas volume/time; h; T/P | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_carbon | manufacturing | co2_bio | material carbon analysis and release screening | dry wood/carbon content; PF/film/paint fossil carbon; product/waste/stocks; biogenic oxidation evidence and CO2; residual/measurement error | Close biogenic/fossil carbon using actual material analysis or supplier primary records; do not convert unexplained residual entirely to CO2 or invent forest uptake credit at fabrication boundary. | kg; mass fraction | each batch and relevant event | same declared continuous production period; retain dates and abnormal intervals | same factory and order route | per 1 kg reference flow | calibration, supplier evidence, lot records, anomalies/uncertainty and closure residuals |
| cp_transport | manufacturing | road_freight | carrier leg records | load/lot; origin/destination; actual wet transported kg and packaging; km; vehicle/fuel/payload/backhaul; delivered-provider inclusions; treatment transport inclusions | Reconcile each leg with weigh tickets, invoices and actual route measurements; match provider service boundaries, without counting internal electric handling as road transport. | kg*km; kg; km | each actual shipment | actual supply/waste legs for the declared production cohort | same factory and order | per 1 kg reference flow | weigh tickets, route records, carrier background and duplication check |

All protocols retain absolute batch/event records, aggregate the attributable inventory-adjusted totals over the same accepted delivered net-panel kg cohort, and report per 1 kg reference flow using calc_normalize. Never average batch ratios or divide by panel count/pours. cp_product establishes that same net-mass denominator; its final reference amount is 1 kg.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | x_i = attributable inventory-adjusted exchange total / Q; Q is same-cohort accepted delivered net panel kg from cp_product; finished reference output is 1 kg. Match stocks/WIP to cohorts, never normalize by pours. | cp_product; all row collection protocols | inventory per 1 kg reference flow |  |
| calc_electricity | electricity | Electricity MJ=measured kWh×3.6; establish attribution and meter boundary first, retain raw kWh. | cp_energy | MJ |  |
| calc_paint | edge_paint; waste_paint; washwater; water_vapour; butoxyethanol | Whole wet-paint consumption=issued−returned−stock increase; wet paint=retained solids/water/volatiles+waste+air+equipment-stock change, with measured constituent partitions and extra water separate. Unknown volatilization is not all water or VOC. | cp_coating; cp_water; cp_air; cp_waste | wet-paint component ledger | wisa-formwork-2020 |
| calc_physical_balance | manufacturing | Received+opening stocks=accepted shipments+each waste+actual air+closing stocks; reconcile dry wood, bond/film/paint solids and water separately; equal-quantity internal loops cancel. Packaging and equipment oil have separate subledgers, not panel mass. | cp_material; cp_coating; cp_product; cp_water; cp_waste; cp_pack; cp_maintenance; cp_air | absolute physical ledger and residuals | usda-wood-handbook-2021 |
| calc_particles | pm25; pmcoarse; pmover10 | Same-method/outlet bins are PM2.5, PM10−PM2.5 and total filterable PM−PM10, summed once; separate captured dust, keep negative differences/unknown size/condensable-method mismatch pending. | cp_air; cp_waste | disjoint particle masses | epa-sawmill-pm-2014 |
| calc_air_mass | formaldehyde; butoxyethanol | Actual emitted mass=concentration×gas volume on matching standard states, integrated over actual operation and converted to kg; validated site constituent balance provides independent reconciliation. Chamber ppm or worker exposure is not factory kg. | cp_air; cp_coating | actual outdoor species mass | metsa-overlaid-epd-2024 |
| calc_carbon | co2_bio | Input biogenic carbon=product+waste+actual air+stock-change biogenic carbon, with a separate fossil-carbon ledger. Only evidenced oxidized wood carbon uses the CO2/C molar-mass ratio; resin/film/paint are not assumed biogenic, and CO2 remains in LCI. | cp_carbon; cp_product; cp_waste; cp_air | biogenic/fossil carbon ledger | metsa-overlaid-epd-2024 |
| calc_transport | road_freight | Actual leg kg*km=wet transported kg×measured leg km; convert original t*km with 1 t*km=1000 kg*km, then divide by same-cohort accepted net product kg. Match return/payload boundary to carrier background without an additional assumed empty-return burden. | cp_transport; cp_product | road-freight mass-distance per 1 kg reference flow |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | dataset | Establish scope with order/drawing, supplier board/paint evidence and actual route. Unknown recipe, film burden, compartment or supplier basis is a specific pending gap; identity success is not a complete dataset. | cp_product; cp_material; cp_coating; cp_energy |
| dq_period | all inventory rows | All flows match site/period/cohort of the product denominator; retain stocks, rework, rejects and abnormal intervals. Multi-site/period results use total attributable amounts/total net output, not simple ratio means. | all collection protocols |
| dq_complete | all inventory rows | No universal consumption/emission factor; distinguish measured, not applicable, below detection and unmeasured. Unknown UUIDs, supply chains and destinations persist explicitly, with uncertainty/completeness disclosure. | calibration; records; supplier declarations; outlet tests |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | dataset | Confirm distinct purchased-board and drawing-fabricated finished states and finished_panel as the sole reference output; verify birch/all-veneer/PF/double-film, actual fabrication, edge/hole reseal and no frame/supplied hardware. Stock-sheet sale or service is unavailable. | wisa-formwork-2020; metsa-overlaid-epd-2024 |
| validation_measurement | all inventory rows | Check one accepted net-mass denominator, formulation water/solids/volatiles, absolute physical balance and attributed burden ledger. Reference is not uses; unsupported measurement, unexplained residual or unknown bases cannot be reported passing. | usda-wood-handbook-2021 |
| validation_emissions | pm25; pmcoarse; pmover10; formaldehyde; butoxyethanol; co2_bio | Check air compartment/species/CAS/biogenic-fossil source and actual quantity definition; particle bins do not overlap and capture differs from emission. No nearby species or correction substitutes; unknown fractions, gas standard, size or detection limits leave affected conclusions pending. | epa-sawmill-pm-2014 |
| validation_background | dataset | Verify complete flow identity route/reference property/unit chain and provider quantity/state/location/period/packaging/included manufacture or transport. Blank UUIDs and pending providers are unresolved; uncoated board, briquettes, clean sawdust, mining wastewater or high-voltage production electricity cannot replace the respective exchanges. | metsa-overlaid-epd-2024 |
| validation_service | dataset | Manufacturing result supports net panel delivery only; without independently measured turns/repair/loss/cleaning/release agent and once-only manufacturing attribution, it cannot claim per-pour or multi-use formwork service. Scientific review and mapping acceptance are separate. | wisa-formwork-2020; metsa-formwork-manual |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same-route drawing-specific unframed panel manufacture after qualifiers/background matching and completeness disclosure; an isolated fabrication unit may be supplied with explicit disclosure that it is not complete cradle-to-gate. |
| excluded_use | Integrated substrate manufacture, other woods/coatings/systems, per-pour/multi-use service, support-load performance claims, automatic methodology approval or mapping acceptance |
| required_metadata | PCR id/version; drawing/material/PF/film/edge/net-mass/moisture; site/period/voltage/supply-chain/boundary/protocol/attribution/destinations/non-applicability; all pending identity/quantity links |
| required_quality_disclosure | Method not independently scientifically reviewed; measured coverage/skips/detection limits, samples/uncertainty, stock closure/residuals, unresolved UUIDs/background applicability; no false completeness |
| update_trigger | Change in supplier board/film/PF/paint, geometry/machining, drying/energy/packaging, waste treatment, provider voltage/location/period or boundary |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| metsa-overlaid-epd-2024 | dataset | Metsä Wood, Overlaid birch plywood, S-P-03018, published 2024-10-11, p4. https://www.metsagroup.com/contentassets/9a224a9f84e54845add88157b7e658d7/epd-metsa-wood-overlaid-birch-plywood.pdf; original read 2026-10-11 | Upstream PF veneer/film/edge-seal distinction only; multi-product average, no recipe/density, chamber-emission, building-life or end-of-life default. |
| wisa-formwork-2020 | handbook | UPM, WISA Plywood for Concrete Forming, February 2020, pp3–4. https://www.wisaplywood.com/siteassets/documents/brochures/wisa_concrete-forming-plywood-en.pdf; original read 2026-10-11 | Customer-specific machining, acrylic resealing of cuts/holes, separate fastening/use maintenance; reuse guidance is non-warranted, not a default. |
| metsa-formwork-manual | handbook | Metsä Wood plywood for Concrete Formwork, undated retained official edition, pp2,4,11–12. https://www.metsagroup.com/contentassets/a8523a58d22c4f00831390ad8a4369ad/metsa_wood_plywood_for_concrete_formwork.pdf; original read 2026-10-11 | Independent manufacturer: phenol-film birch form panel, acrylic edge protection, shipment wrap and site care. No numerical defaults. |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), ch4 p4-1. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; original read 2026-10-11 | Wood dry-basis moisture definition; coated/resin-bearing panel requires a validated matrix method, no species density default. |
| epa-sawmill-pm-2014 | official_guidance | EPA Region 10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (May 2014), table and footnotes. https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf; original read 2026-10-11 | Nested filterable PM semantics only. Sawmill PTE, not bonded birch-panel factors; no factor, indoor-zero or boiler transfer. |
