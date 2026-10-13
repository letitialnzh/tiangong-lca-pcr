---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.uncoated-machined-hickory-tool-handles
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated solid hickory tool handles made by conventional machining

## 1. Scope and Applicability

This candidate describes sanded, uncoated solid true-hickory replacement handles for striking or garden hand tools, accepted to a declared fitting drawing. It does not cover the tool body/head, a complete tool, broom/brush bodies or handles, boot/shoe lasts or trees, coated or impregnated handles, laminated/glued handles, or resin-free heat-densified blanks. The wood is conventionally sawn, turned/shaped and sanded, without intentional thermal compression. USDA identifies high-quality true hickory as handle stock; the manufacturer documents custom tool handles supplied sanded or finished. These establish a product boundary, not a manufacturing dataset or numerical defaults [usda-wood-handbook-2021; arnold-hickory-handles].

The declared quantity is a production reference for a component, not a lifetime-equivalent service functional unit. Customer-specified fit and acceptance must be supplied. No handle mass, strength threshold, moisture target, tool lifetime, yield or emission coefficient is invented. The broad foreground wood-material locator physically includes this single-material finished handle subset, with the species/form/treatment/route qualifiers below. It does not supply a manufacturer inventory, measured reference quantity or background data. This candidate methodology is for independent review; a complete site dataset requires real collection and background compatibility.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.uncoated-machined-hickory-tool-handles |
| classification_refs | CPC 3.0 31911; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated, untreated, unglued solid true-hickory finished replacement tool handles, ready to fit the declared tool drawing |
| excluded_products | Complete tools; tool bodies/heads; broom/brush bodies and handles; shoe lasts/trees; roughly trimmed unworked wooden sticks; compressed/densified, coated, impregnated or glued handles; attached metal parts |
| representative_product | Sanded solid true-hickory hammer replacement handle with specified head fit; no head or ferrule supplied |
| production_route | Purchased kiln-dried non-coniferous sawnwood >6 mm → receipt/sorting → sawing → turning/shaping and fitting features → sanding → inspection → interlocking corrugated packaging when used |
| market_state | Finished component at handle factory gate; no further shape-making required under its declared drawing; assembly/use downstream |

CPC 31330 sticks are roughly trimmed and explicitly not turned, bent or otherwise worked; they are not an accepted handle with final grip and fitting geometry. CPC 31520 densified stock uses a materially different route and is excluded. The mixed 31911 label cannot make tool bodies, cleaning implements and shoe lasts methodologically interchangeable.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the wooden grip and fitting interface for a declared striking or garden tool |
| How much | 1 kg accepted net finished handle wood at declared delivery moisture; exclude packaging and tool heads |
| How well | Buyer drawing, species, grain/defect inspection, surface and fitting acceptance; no universal strength or fit claim |
| How long or cycle | One manufacturing and factory-gate delivery cycle; use life and replacement frequency require a separate supported study |
| reference_flow_link | finished_handle |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical true-hickory species; solid/unglued/undensified/untreated/uncoated state; procurement kiln-drying gate and incoming moisture; model and intended tool; grip dimensions and fitting drawing; grain/defect and surface acceptance records; delivered moisture method and value; net mass and packaging exclusion; foreground period/site; electricity voltage; supplier/background quantity compatibility |

All qualifiers must be declared in dataset metadata, process notes or equivalent product records. Wood material is a broad foreground physical locator, explicitly unspecified in species, form, treatment, moisture, production route and provider. Its use here is restricted to the single-material finished handle qualified above; it is not evidence for any supplier/background dataset, assembled mixed-material tool, numerical handle mass or performance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the positive total accepted net handle wood mass for one declared homogeneous production cohort, weighed using a calibrated scale after acceptance and before packaging; collect with cp_reference. Every physical row uses the same Q. |
| moisture_basis | wood_input; finished_handle; offcut; captured_sawdust; sanding_dust; spent_abrasive | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep delivered/received wet mass and oven-dry wood mass separate. u=(m_wet-m_dry)/m_dry is dry-basis moisture fraction; m_dry=m_wet/(1+u). Sample each state representatively; meter corrections and volatile-extractive uncertainty must be retained [usda-wood-handbook-2021]. |
| electricity_quantity | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The platform uses this energy property for electricity. Convert measured kWh to MJ with 3.6; this is electrical energy, not fuel combustion heat. Match user-side voltage, region/year, supplier and losses before background linkage. |
| transport_quantity | inbound_transport | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | Sum shipment kg × leg km. A background unit of t*km requires conversion by 1000; neither a mass-only transport flow nor truck mass represents freight work. |
| count_conversion | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Piece counts support acceptance and yield only. Convert counts through actual calibrated net weighing for each model/moisture stratum; do not invent a universal kg per handle or density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased kiln-dried untreated true-hickory sawn stock >6 mm at supplier sawmill gate; receipt moisture and delivery transport documented |
| starting_condition_role | Foreground collection gate, not exclusion of upstream forestry/sawing/drying burdens |
| product_classification_scope | Finished machined solid tool-handle component subset; external classification does not define the complete route |
| recursive_input_rule | Purchased already-shaped handles require a separately disclosed finishing-only route with their upstream dataset; do not model them as raw wood or duplicate their manufacture |
| upstream_dataset_requirement | Compatible forestry/sawing/kiln-drying stock, electrical supply, abrasive, packaging, freight and receiving waste-treatment datasets; identity UUID alone does not provide their inventory |
| disclosure | Species/model/cohort, receipt and output moisture, supplied gate, transport/loss coverage, controls, waste recipients, all gaps and separately evidenced auxiliary extensions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | handle_unit | Include receipt, sorting/rejects, sawing, turning/shaping, fitting features, sanding, extraction, inspection, packing and attributable shared electricity. Purchased kiln drying remains upstream. No onsite kiln, boiler, coating, adhesive application, thermal densification or metal-head assembly belongs to this route. | usda-wood-handbook-2021; arnold-hickory-handles |
| boundary_completeness | all inventory rows | Inspect the actual equipment/material bill and maintenance log. Add every consumed lubricant, cutting tool, packaging component and resulting waste as a separately named atomic row if present; no collective placeholder, silent cut-off or unmeasured zero. Onsite internally generated compressed air is covered by its compressor electricity; purchased air would need a separate flow. | |
| boundary_carbon | upstream and foreground ledgers | Retain biogenic CO2 in any actual upstream or separately modelled waste-treatment combustion LCI even if an LCIA convention excludes it from a headline total. No default onsite combustion is created by this dry mechanical route. Product carbon stock is disclosed separately; avoid a duplicate atmosphere uptake already represented upstream. | |
| boundary_emissions | pm25; pmcoarse; pmover10 | Measure actual post-control environmental releases and segregate captured wastes. EPA PTE sawmill factors exclude boilers and do not establish actual hickory turning/sanding releases or universal particle shares. Newly found species or moisture exchange require explicit atomic extensions and identity checks. | epa-sawmill-pte-2014 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handle_unit | Receipt, conventional machining, sanding, acceptance and packing | required | Declared purchased-kiln-dried-stock route | Single foreground manufacturing unit with stage-specific metering and physical ledgers | 1 kg accepted net handle wood |

Stage records retain stock movements and equal quantities at both ends of internal transfers; these cancel only in the unit aggregate. No intermediate handle output repeats the final reference identity. This baseline inventory is route-specific methodology; real site coverage and extensions must be checked before asserting a complete dataset.

### Process: Handle manufacture (`handle_unit`)

#### Inputs

##### Product flows

###### Purchased sawn hickory (`wood_input`)

Required kiln-dried, untreated true-hickory sawn stock >6 mm. The broad non-coniferous identity contains this subset; matching species/drying/moisture background is separately required.

- Selected flow: Wood, sawn or chipped lengthwise, sliced or peeled, of a thickness exceeding 6 mm, of non-coniferous wood `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed consumed net wet stock, adjusted for opening/closing stock, divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `usda-wood-handbook-2021`

###### Purchased low-voltage electricity (`electricity`)

Grid-average user-side supply below 1 kV; cover sawing, turning/shaping, sanding, dust extraction, onsite air compressor, handling and packing. Other supply voltages require their own verified identities. The raw source geographic context is CN. Actual site/provider geography, year, supply mix and user-side delivery/loss-boundary compatibility remain pending; this physical locator is not a universal generation background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable metered kWh multiplied by 3.6 and divided by Q, including justified shared-service shares.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Fresh sanding paper (`abrasive`)

One paper-backed abrasive consumable; record mineral, binder, grit, backing and supplier. Furniture-plant location is not evidence for the handle site or its background supply. Do not substitute a loose abrasive oxide with conflicting CAS.

- Selected flow: Sandpaper `b09187da-c3cb-49e6-9b07-9e4ff091fd74`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: New abrasive paper consumed net mass divided by Q; exclude captured wood attached to spent paper.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aux`
- Sources:

###### Corrugated cardboard sleeve (`packing_board`)

Conditional interlocking paperboard sleeve/box with no added tape, plastic film or staples in this delivery profile. Identity specifies C/E/F flute, fibre at least 80%, and some recycled material: verify these physical conditions, or retain a different precise unresolved flow. Packaging is excluded from the reference mass. The source also specifies recyclable material; retain this as a conditional actual packaging/source compatibility requirement, not evidence of future recycling, a recycled-content recipe or an avoided-product credit.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Inventory-adjusted mass of cardboard sleeves and attributed packaging losses divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aux`
- Sources:

###### Inbound road freight service (`inbound_transport`)

Conditional for each inbound road leg not already included in delivered feedstock or auxiliary datasets. The confirmed mass*distance reference is kg*km, not mass alone; background t*km needs explicit division by 1000.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Sum transported shipment mass in kg times actual leg distance in km, divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources:

##### Waste flows

##### Elementary flows


#### Outputs

##### Product flows

###### Accepted finished handle (`finished_handle`)

One final accepted output after geometry, fit, grain/defect and moisture checks, before installing any tool head or metal part. Machining and packing are one unit; staged counts and metering remain separate collection fields.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `usda-wood-handbook-2021`

##### Waste flows

###### Clean wood offcut (`offcut`)

Unagglomerated, resin-free, uncoated hickory offcuts and rejected handle wood segregated from fine dust; record glue/coating contamination as absent only with evidence, receiving facility and treatment. The source classification conflict remains a metadata debt.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Dispatched net wet offcut mass with inventory adjustment, divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Captured clean sawdust (`captured_sawdust`)

Only untreated non-agglomerated wood particles from sawing/turning/shaping; exclude dust already discharged to air and abrasive-contaminated sanding dust. Verify actual combustion/recovery receiver; do not interpret this waste identity as onsite burning.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Dispatched captured sawdust net wet mass with inventory adjustment, divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Spent paper-backed sanding abrasive (`spent_abrasive`)

Actual removed whole paper-backed sanding consumable from wood surface finishing, including remaining mineral, binder, paper backing and attached hickory wood. Weigh dispatched mass and quantify wood/moisture/component fractions, contamination, wear entering captured dust or air and receiving treatment/provider compatibility. The broad spent-abrasive finishing identity has no metal-only or loose-powder restriction, but does not establish a specific paper-abrading or waste-treatment background. Keep this paper consumable separate from sanding dust and unused sandpaper; no belt construction or default waste fraction is inferred.

- Selected flow: Spent abrasive waste `f0a52dd6-0027-4033-9068-f293526f958f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed spent abrasive net mass divided by Q; measure attached wood fraction for the wood/carbon ledgers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Wood sanding dust containing abrasive grains (`sanding_dust`)

Only actual separately collected sanding dust containing hickory wood and worn mineral/binder particles, distinct from clean cutting/turning sawdust and removed paper-backed consumables. Weigh as collected with measured moisture, wood/mineral/binder fractions, dry component masses/carbon, contamination and actual receiver/provider acceptance. The generic industrial Dust waste locator has no opposing material, originating process or treatment route, but establishes no specific composition or treatment background. Captured mass is not stack PM; no clean-wood, coal/cork or metal-polishing-sludge substitution.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Dispatched captured sanding dust mass with inventory adjustment, divided by Q; exclude spent abrasive paper and airborne particles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

##### Elementary flows

###### Fine particulate emission (`pm25`)

Actual post-control emission from machining, extraction exhaust and material handling to outdoor air, unspecified; particle size at or below 2.5 micrometres. Do not represent indoor workplace dust as an environmental release.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emitted PM2.5 mass divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`

###### Intermediate particulate emission (`pmcoarse`)

Outdoor air, unspecified; the exclusive fraction above 2.5 and at or below 10 micrometres. Nested PM10 is not this interval. Use matched source/control/time measurements.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched cumulative PM10 minus PM2.5 mass, divided by Q, or direct measured exclusive interval.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`

###### Large particulate emission (`pmover10`)

Outdoor air, unspecified; particles above 10 micrometres. No correction flow or total unspecified particulate replaces this precise interval. Confirm total particulate and PM10 methods are comparable.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched total filterable particulate minus PM10 mass, divided by Q, or direct measured exclusive interval.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single_product | handle_unit | This baseline has one accepted product and separately segregated wastes sent to disclosed receiving treatment/recovery facilities. Assign its attributable manufacturing burdens to accepted handles; record actual waste-treatment burdens and any separately declared recycling convention without automatic substitution credits. A saleable coproduct is not silently labelled waste: identify its physical state, recipient and economic function and establish a separately justified allocation rule before using a coproduct route. | |
| allocation_shared_services | electricity; inbound_transport | First meter/separate shared operations. Where separation is infeasible, use documented causal machine-time/power or actual transport service shares, retain totals and sensitivity. Equal-share, value-share and dry-wood share are not interchangeable or universal defaults. | |
| allocation_physical_ledgers | all inventory rows | Keep unallocated wood, water, carbon and packaging physical ledgers distinct from the environmental burden account. Never multiply real residue/product output quantities or either end of an internal link by burden-allocation shares. Rejected/reworked wood is reconciled once and not counted as accepted output twice. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The following protocols specify future real collection; this PCR contains no obtained factory measurements. Use one declared period and homogeneous species/model/moisture cohort. Q is accepted net wood kg and is positive. Retain stage logs inside the aggregate unit. Collection aggregation below describes the final inventory basis; preserve raw cohort totals before normalization.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | handle_unit | finished_handle | acceptance/weighing | botanical species; model/drawing; stage accepted and rejected counts; batch net wet mass Q; tare; moisture samples; oven-dry wood mass; measured dry-wood carbon fraction and method; acceptance defects | Weigh accepted bare handles using a calibrated scale after acceptance, excluding packaging; representative moisture sampling and oven-dry comparison or species-corrected meter with documented uncertainty. Retain grip/fit and grade checks. | kg; count; moisture fraction | Each accepted lot; representative moisture by lot/state | Complete declared production period | Selected handle site and homogeneous cohort | per 1 kg reference flow | Scale calibration, tare records, drawing, inspection and moisture test originals |
| cp_wood | handle_unit | wood_input | receipt/stock/weighing | botanical species; kiln-drying delivery gate; incoming dimensions >6 mm; receipt kg; opening/closing stock; reject/rework movements; moisture at each state; dry-wood carbon fraction from representative analysis or traceable compatible supplier evidence; supplier dataset basis | Trace invoices and inventory, weigh actual consumed net wood, sample moisture in each state; reconcile upstream stock species, treatment/drying and delivered quantity definition. | kg; moisture fraction | Each receipt and stock movement | Same period as Q | Feedstock lots for selected cohort | per 1 kg reference flow | Supplier and batch records, calibration, moisture tests and background gate declaration |
| cp_energy | handle_unit | electricity | metering | stage meter readings kWh; dates; voltage; supplier/region/year; extraction/compressor/packing meter or causal shared-service evidence; idle/startup quantities | Read calibrated meters; retain attributable stage and common-service totals, idle/startup coverage and utility invoice reconciliation. Electricity mix and user-side losses are selected separately. | kWh; MJ | Continuous or each production shift | Same period as Q, representative duty cycles | Selected line plus attributable services | per 1 kg reference flow | Meter calibration, invoice reconciliation and service allocation records |
| cp_aux | handle_unit | abrasive; packing_board | invoice/stock/weighing | new abrasive mineral/binder/backing/grit and mass; cardboard flute/fibre/recycled content and mass; opening/closing stock; stage losses; equipment bill and maintenance auxiliaries | Weigh actual fresh consumption with stock adjustment; distinguish whole abrasive paper from loose mineral; check packaging specification. Inspect maintenance and supplement every real lubricant/tool replacement as its own flow; exclude unrelated stock. | kg | Each issue and replacement/packing lot | Same period as Q | Selected line and packaging cohort | per 1 kg reference flow | Supplier specifications, weighing/stock records, maintenance bill and gap register |
| cp_transport | handle_unit | inbound_transport | freight records | leg; supplier gate; shipment kg; actual distance km; truck/load class; allocation/load/empty-return definition; delivered dataset transport inclusion | Reconcile waybills and actual road legs; use shipment masses and distances, record background vehicle/load basis and prevent overlap with delivered material datasets. | kg; km; kg*km | Each inbound shipment | Same cohort supply period as Q | Actual inbound legs only | per 1 kg reference flow | Waybills, routing evidence, supplier delivery coverage and background quantity definition |
| cp_residue | handle_unit | offcut; captured_sawdust; spent_abrasive; sanding_dust | waste dispatch/stock tests | segregated stream; mass/tare; opening/closing stock; wood moisture; wood/mineral fraction and each component dry carbon fraction; glue/coating status; destination/treatment; receipt; economic status | Weigh each distinct stream at dispatch with calibrated scales; retain moisture and representative wood/mineral composition, receiver acceptance and treatment evidence. Keep clean cutting dust, contaminated sanding dust and spent paper separate. | kg; moisture and wood/mineral fractions | Each dispatch, representative composition per stream/lot | Same period as Q | Every waste source and receiving facility | per 1 kg reference flow | Waste receipts, calibration, contamination tests and receiver specifications |
| cp_emission | handle_unit | pm25; pmcoarse; pmover10 | environmental release testing/activity | source/control state; concentration and gas flow; test duration; operating hours; aerodynamic cut and filterable/condensable convention; wood/mineral carbon fraction; fugitive sampling; detection limits | Obtain representative actual after-control source tests and matched activity logs; document fugitives separately. Use compatible cumulative particle tests or directly measured exclusive bins. Unmeasured sources/unknown compatible size splits are gaps, not zero. | kg; mg/m3; m3; h | Representative source tests plus continuous activity/control logs | Same period as Q with documented extrapolation | Actual environmental release points and fugitive sources, excluding captured waste and workplace exposure | per 1 kg reference flow | Original reports, method compatibility, controls, activity, uncertainty, medium and double-count audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | all inventory rows | x_i=q_i/Q; q_i is the attributable inventory-adjusted physical cohort total in its own unit. Q is accepted final net wood kg excluding packaging for that same cohort. Reference output Q/Q=1 kg. This normalization is not burden allocation. | q_i; Q; cp_reference; linked protocol | x_i per 1 kg reference flow | |
| calculate_moisture | wood_input; finished_handle; offcut; captured_sawdust; spent_abrasive; sanding_dust | u=(m_wet-m_dry)/m_dry; m_dry=m_wet/(1+u); m_water=m_wet-m_dry; m_dry>0. u is a fraction: divide dry-basis percent by 100. For mixed sanding residues, first separate measured wood mass from mineral/binder mass; do not apply wood moisture to the whole mixture. | cp_reference; cp_wood; cp_residue | Wood dry mass and associated water kg | usda-wood-handbook-2021 |
| calculate_electricity | electricity | Energy_MJ=3.6 × attributable electricity_kWh; x_electricity=Energy_MJ/Q. Do not apply calorific-value or boiler-efficiency factors to electricity. | cp_energy; Q | MJ per 1 kg reference flow | |
| calculate_transport | inbound_transport | Work_kgkm=sum(shipment_kg × leg_km); Work_tkm=Work_kgkm/1000; x_transport=Work_kgkm/Q. Retain actual load/empty-return conventions in the compatible background service rather than counting the same leg twice. | cp_transport; Q | kg*km per 1 kg reference flow | |
| calculate_particles | pm25; pmcoarse; pmover10 | E25=E_PM2.5; Ecoarse=E_PM10-E_PM2.5; Elarge=E_filterable_total-E_PM10. Only matched method/source/control/time/quantity basis permits subtraction; each fraction must be nonnegative within reported uncertainty. Air mass from concentration × actual matching gas volume uses 1 mg=0.000001 kg. Sum actual source interval emissions before dividing by Q. Do not sum nested PM2.5, PM10 and total as separate releases. | cp_emission; Q | Exclusive kg per 1 kg reference flow | epa-sawmill-pte-2014 |
| reconcile_physical_ledgers | all inventory rows | Dry wood input + opening dry stock = accepted dry wood + offcut dry wood + captured clean dry wood + measured wood in spent paper/sanding dust + wood-origin airborne particulate + closing dry stock + unexplained residual. Water input + opening water + measured uptake = water in accepted wood/residues + measured release + closing water + water residual. Carbon input + opening carbon = carbon in accepted wood/residues + wood-origin airborne carbon + closing carbon + carbon residual, using each measured dry carbon fraction. Any actual volatile carbon release needs a separate specific emission extension. Net atmospheric moisture exchange requires evidence, not a zero assumption. Quantify residuals and uncertainty; do not rename unmeasured loss as zero or manufacture an emission. Keep paper/mineral packaging and abrasive balances separate; internal transfers retain equal ends then cancel. | cp_reference; cp_wood; cp_aux; cp_residue; cp_emission | Separate physical dry-wood, water and carbon balances, residuals and material composition ledgers | usda-wood-handbook-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | finished_handle | Confirm one published usable reference flow and compatible property/unit basis before a completed dataset; no neighbouring-product substitution | Verified identity plus drawing, species and acceptance records |
| quality_quantities | all inventory rows | Preserve raw period totals, stage quantities, stock/rework adjustments, one common Q, actual uncertainty and all source coverage; no generic numeric defaults | Linked protocols and separate physical/burden ledgers |
| quality_background | UUID-bearing flows | Physical identity and background quantity compatibility are separate checks. Match wood species/drying/moisture, abrasive/board specification, user voltage and supply boundary, freight kg*km/t*km and receiver treatment; metadata contradiction or unknown compatibility is pending | Supplier primary definitions, support property/unit records and dataset gates |
| quality_completeness | all inventory rows | Unknown amounts or identities, uncovered equipment auxiliaries, volatile releases if present, atmospheric moisture exchanges and incompatible particle methods prevent a claim of complete LCI; make actual extensions atomic | Site bill, gap register, source tests, stock balances and coverage audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_handle | Exactly one accepted finished product output uses the declared reference object and net 1 kg basis. Confirm its physical identity and quantity support; the broad locator must always carry the declared actual wood species, finished handle form, treatment/route, moisture and net mass qualifiers. Identity confirmation does not establish supplier/background quantity compatibility. | |
| validate_basis | all inventory rows | English and Chinese use the same cohort Q, 1 kg net wood denominator, source IDs, row IDs, protocols and conversions. Counts, gross packed mass, dry mass and delivered wet mass cannot silently replace that denominator. | usda-wood-handbook-2021 |
| validate_route | handle_unit | Verify solid true-hickory finished tool-handle status, final grip/fit, no densification/resin/coating/impregnation or installed metal. Neither 31330 rough sticks nor 31520 densified blanks satisfy it. | usda-wood-handbook-2021; arnold-hickory-handles |
| validate_atomic | all inventory rows | Each selected flow is one exchange with verified reference property and unit. Missing identities stay concrete and unresolved; do not replace elementary emissions with correction/aggregate flows, or waste sandpaper with unused sandpaper. | |
| validate_mass_carbon | all inventory rows | Review unallocated stock/wood/water/carbon balances and residuals with measured uncertainty. Captured wood, wood on paper, contaminated dust and environmental emissions are disjoint. Do not drop real biogenic CO2 from upstream/waste-treatment LCI or assign a universal wood-carbon fraction. | usda-wood-handbook-2021 |
| validate_particles | pm25; pmcoarse; pmover10 | Confirm outdoor-air unspecified compartment and matching exclusive size definitions; exclude indoor exposures, nested double counting, negative interval differences and unsupported PTE-to-actual conversion. | epa-sawmill-pte-2014 |
| validate_readiness | all inventory rows | Confirm qualified reference applicability. Resolve waste identity gaps, real site coverage and supplier/background compatibility before declaring complete LCI; independently review methodology before reviewed status. Authored candidate guidance remains review-required. A passed mechanical check does not establish scientific approval. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset after actual foreground collection, identity completion and independent review |
| downstream_use | background_dataset for fitting the declared uncoated solid-hickory handle into a separately modelled tool; no such dataset is produced by this PCR |
| allowed_use | Compatible species/model/drawing, moisture, route, gate and quantity basis after gaps are resolved |
| excluded_use | Lifetime/service substitution; complete tools; generic all-wood industry averages; cleaning handles/brush bodies; shoe lasts; coated, glued or densified handles; unsupported environmental declarations |
| required_metadata | Reference UUID and properties, model/drawing/species, state/moisture and net mass, period/site, starting gate, process map, supplier/background gates, waste receivers, protocols and calculation versions |
| required_quality_disclosure | Sampling/meter coverage, uncertainty, material/particle/biogenic-carbon ledgers, auxiliary extensions, supplier compatibility, allocation choices and remaining gaps |
| update_trigger | Changed species/geometry/drying/finish/densification route, equipment/control/packaging, supplier quantity definitions, reference metadata or new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook—Wood as an Engineering Material, FPL-GTR-282 (2021), chapter 2 p.2–7 (PDF35), chapter 13 pp.13–1–13–3 (especially PDF324, Eq.13–1 and sampling/meter limitations). [Official retained edition](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | True-hickory handle-stock identity; moisture/dry-mass measurement. Not a handle-manufacturing parameter survey. |
| arnold-hickory-handles | literature | H. Arnold Wood Turning, Hickory Tool Handles, publisher page sections Custom Hickory Handles for OEM Production, Common Uses, Finishing & Options; page timestamp 2026-08-19, read 2026-10-12. [Primary manufacturer document](https://www.arnoldwood.com/wood-products/handles/hickory-tool-handles/) | Technical market evidence for specified hickory tool-handle components and sanded versus finished options; not peer reviewed, no quantitative or kiln-route defaults. |
| epa-sawmill-pte-2014 | official_guidance | US EPA Region 10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (2014-05-08), pp.1–2, scope footnote and PM/PM10/PM2.5 table headings. [Official memorandum](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | Scope limitation and nested particle-indicator caution only. Regional sawmill PTE coefficients and softwood drying shares are not adopted for actual hickory handle machining. |
