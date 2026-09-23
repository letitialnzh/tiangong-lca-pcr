---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mate-leaves
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Maté leaves at the declared primary-processing gate

## 1. Scope and Applicability

This PCR covers cultivated *Ilex paraguariensis* from a managed perennial stand through leaf and fine-twig harvest, fresh-lot receipt, sapeco (brief heat treatment), drying, coarse breaking or canchado when performed, grading, and dispatch of dry maté at a declared primary-processing gate. Its reference is dry, unblended maté leaf material, with leaf and twig composition, moisture, treatment route, and gate disclosed. The fresh harvested lot is an intermediate state, not the dry reference flow. This scope reflects the CPC maté-leaves identity and its correspondence to HS 0903 Maté.

Industrial blending, long aging, fine milling, flavored products, extracts, beverages, retail packaging, and consumer brewing are excluded. A producer may report those downstream steps as a separate extension with distinct outputs. Forest-collected maté remains in the product category, but this managed-stand route does not model wild collection; that route requires separate foreground modelling and review. *Camellia sinensis* tea is excluded. FAO describes plantation and forest supply, while IARC and the yerba maté value-chain study distinguish harvest, sapeco, drying, and subsequent stages.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mate-leaves |
| classification_refs | CPC 3.0: 01630 Maté leaves; corresponding HS 0903 Maté |
| covered_products | primary-processed, dry, unblended *Ilex paraguariensis* leaves, with the declared fine-twig fraction |
| excluded_products | *Camellia sinensis* tea; other herbal leaves; maté extracts, beverages, flavored or blended maté, retail preparations |
| representative_product | dry, coarse primary-processed yerba maté leaves before aging, fine milling, blending, or packaging |
| production_route | managed stand, periodic harvest, fresh receipt, sapeco, drying, optional coarse breaking, grade sorting and primary-processing gate |
| market_state | dry unblended leaf material at a declared primary-processing gate, with moisture, grade, leaf/twig fraction and route identified |

## 3. Reference Flow

### Functional unit

| Field | Value |
| --- | --- |
| What | dry primary-processed *Ilex paraguariensis* maté leaves at the declared gate |
| How much | 1 kg net as-received dry product |
| How well | species, leaf/twig composition, moisture, grade, sapeco and drying route declared; no blends or retail package |
| How long or cycle | one processing lot linked to its harvest year; perennial establishment and replacement linked to represented productive years |
| reference_flow_link | Maté leaves; exact Tiangong product-flow UUID unresolved |

### Reference flow object

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Maté leaves |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Ilex paraguariensis*; site and crop year; harvest and dryer lot; sapeco fuel and heat route; drying method; dry moisture; leaf/twig fraction; grade; declared pre-blending processing gate |

The exact platform reference UUID remains unresolved. A generic tea, fresh leaf, or branded beverage UUID must not be substituted. Resolve a compatible product-flow identity before active or published use.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | fresh, treated, dried, graded and rejected maté states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net as-received mass and moisture at every state hand-off; keep tare and packaging separate. |
| `measurement_02` | drying and material balance | mass and wet-basis water fraction | kg; percent | Compare dry matter from paired lot weights and moisture samples; calculate evaporated water, not an assumed universal fresh-to-dry ratio. |
| `measurement_03` | perennial stand | area and period | ha; year; ha·year | Index establishment, replacement, pruning, harvest and land occupation to stand, phase and production year. |
| `measurement_04` | fertilizer and crop protection | product and nutrient or active mass | kg product; kg substance | Keep formulated product mass distinct from nutrient or active substance content. |
| `measurement_05` | fuels, electricity, irrigation and transport | source-unit amount | L; kg; MJ; kWh; m3; t·km | Preserve meter or invoice unit and use only documented density, heating value or unit conversion. |

## 5. System Boundary

The foreground starts with managed *Ilex paraguariensis* stands and attributable establishment or replacement. It includes management inputs, field emissions, independent harvest, field-to-dryer movement, fresh receipt and first sorting, sapeco, drying, optional coarse breaking, post-dry grading, temporary storage and dispatch. Nursery plants, fertilizers, crop-protection products, energy carriers, water supply, external transport and treatment services require linked upstream datasets when supplied from outside. The boundary ends before aging, fine milling, blending, flavoring, retail packaging and distribution.

Biological production creates harvestable foliage; cutting is an independent harvest event with a measured fresh-lot hand-off. First conditioning removes foreign matter and damaged material from the collected state before sapeco. Sapeco is a bounded heat-treatment node converting raw prepared leaves to heat-treated leaves. Drying is a distinct stabilization node converting treated leaves to a dry storable state with water loss and heat inputs. Final grading assigns accepted, downgraded, and rejected states, each with a destination. Shared vehicles, boilers, dryers or buildings used by more than one lot, site or period need one documented attribution.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | identified managed stand or all contributing stands at a declared phase and reporting-year start |
| starting_condition_role | perennial biological source of harvestable maté foliage |
| product_classification_scope | CPC 3.0: 01630 Maté leaves; dry primary-processed *Ilex paraguariensis* reference state |
| recursive_input_rule | purchased same-category dry or fresh maté entering a receiving lot remains a separately identified upstream input; its cultivation and processing burdens are not expanded again inside the receiving lot |
| upstream_dataset_requirement | verified datasets for nursery plants, nutrients, crop protection, fuels, electricity, water, off-site transport and treatment when outside the foreground |
| disclosure | every site, stand phase, harvest year and lot; fresh and dry mass and moisture; leaf/twig fraction; sapeco and drying route; fuel and electricity; grade destinations; shared-service attribution; gate and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | managed stand and harvest | Include represented stand management, actual inputs, direct field emissions and independently measured harvest; attribute establishment and replacement to represented production years. | `fao-yerba-mate-forest-products`; `chifarelli-2024-yerba-mate-lca` |
| `boundary_02` | sapeco and drying | Include heat-treatment and drying fuel, electricity, material transfer, water loss, emissions and rejects up to the dry gate; keep each material state and operation distinct. | `iarc-mate-processing`; `chifarelli-2024-yerba-mate-lca` |
| `boundary_03` | downstream gate | Declare any coarse breaking inside the gate; exclude aging, fine milling, blending and packaging unless separately reported with a new gate and output. | `iarc-mate-processing` |
| `boundary_04` | multi-site and shared assets | List all supplying stands, dryers and other contributing sites, reconcile transfers and assign shared services once by an evidenced driver and service period. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mate_stand_management` | Managed maté stand | required | managed cultivated lot or identified upstream stand dataset | perennial production | site-year and 1 kg dry output |
| `mate_harvest` | Leaf and fine-twig harvest | required | every lot | independent capture and collected-state hand-off | kg fresh collected foliage |
| `mate_first_conditioning` | Fresh receipt and first sorting | required | every lot | raw-to-prepared hand-off | kg fresh received and prepared |
| `mate_sapeco` | Sapeco heat treatment | required | every primary-processed route | material treatment | kg prepared and heat-treated leaves |
| `mate_drying` | Drying and stabilization | required | every dry reference lot | preservation and stabilization | kg treated input and dry output |
| `mate_grade_gate` | Coarse breaking, grade sorting and dispatch | required | every accepted dry lot; coarse breaking only where performed | accepted, downgraded and rejected hand-offs | 1 kg dry accepted output |

### Process: Managed maté stand (`mate_stand_management`)

#### Inputs

##### Product flows

###### Stand management materials (`mate_management_inputs`)

Record actual planting stock, nutrient and crop-protection products, irrigation supply, fuel and electricity by stand and phase; classify each actual exchange separately at dataset construction.

- Selected flow: site-specific management products; UUID unresolved
- Flow property / unit: Mass, Volume or Energy / kg, m3, L or kWh
- Amount rule: dated purchase, application and meter records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per site-year and 1 kg accepted dry maté
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mate_site_year`

##### Waste flows

No waste input is presumed; a recovered organic amendment needs its own identity and actual entry record.

##### Elementary flows

Record direct water withdrawal by source and compartment separately from purchased water.

#### Outputs

##### Product flows

###### Harvestable maté foliage (`mate_harvestable_foliage`)

Hand the harvestable stand state to the independent cutting node; unharvested growth is not a marketed co-product.

- Selected flow: standing *Ilex paraguariensis* foliage; internal state, UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: removed foliage estimated from harvest event and field residue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mate_harvest_lot`

##### Waste flows

Record prunings left on site or removed, with destination and no presumed co-product credit.

##### Elementary flows

Calculate named field emissions by substance and receiving medium only with documented activity data and an applicable method.

### Process: Leaf and fine-twig harvest (`mate_harvest`)

#### Inputs

##### Product flows

###### Harvest context and service (`mate_harvest_service`)

Link the identified stand; record cutting fuel and contracted harvest service where used.

- Selected flow: harvestable foliage and identified energy or service; UUID unresolved
- Flow property / unit: Mass or Energy / kg, L or kWh
- Amount rule: event mass, fuel and service record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_harvest_lot`

##### Waste flows

No waste input is presumed.

##### Elementary flows

Record direct equipment emissions where fuel is burned inside the foreground.

#### Outputs

##### Product flows

###### Collected fresh foliage (`mate_collected_foliage`)

Weigh the fresh collected lot and disclose leaf, fine-twig and coarse-wood fractions; hand it once to first conditioning.

- Selected flow: fresh collected maté foliage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: net collected scale weight and composition sample
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_harvest_lot`

##### Waste flows

Record field left cuttings and incidental material separately from the intended collected lot.

##### Elementary flows

No universal emission amount is assumed.

### Process: Fresh receipt and first sorting (`mate_first_conditioning`)

#### Inputs

##### Product flows

###### Received fresh foliage (`mate_fresh_receipt`)

Match each harvest lot to one receipt, record tare, on-site movement and any handling energy.

- Selected flow: received fresh maté foliage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: net receipt weight by linked harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process input (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

No waste input is presumed.

##### Elementary flows

Record water withdrawal only when the actual first-conditioning operation uses water.

#### Outputs

##### Product flows

###### Prepared fresh foliage (`mate_prepared_foliage`)

Remove foreign matter and visibly damaged material; hand accepted fresh foliage to sapeco.

- Selected flow: prepared fresh maté foliage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured prepared mass and composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

Record coarse wood, damaged leaves and foreign matter as separate rejects with destination.

##### Elementary flows

Record dust or wastewater only if generated, naming substance and receiving medium.

### Process: Sapeco heat treatment (`mate_sapeco`)

#### Inputs

##### Product flows

###### Fresh foliage and heat supply (`mate_sapeco_inputs`)

Receive prepared fresh foliage; record actual fuel, heat source, electricity and batch or line service time.

- Selected flow: prepared foliage and specified fuel or electricity; UUID unresolved
- Flow property / unit: Mass or Energy / kg, L, MJ or kWh
- Amount rule: lot mass and metered or invoice energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per sapeco lot
- Basis kind: Process input (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

No waste input is presumed.

##### Elementary flows

Record directly withdrawn combustion air or water only where the inventory method requires it.

#### Outputs

##### Product flows

###### Heat-treated maté foliage (`mate_sapeco_output`)

Hand the heat-treated, still-moist material to drying with lot mass and moisture; it is not the dry reference output.

- Selected flow: sapeco-treated maté foliage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed treated output and moisture sample
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per sapeco lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

Record burnt or off-spec leaves separately and route to rework, downgrade, recovery or waste exit.

##### Elementary flows

Record named direct combustion emissions to air and any ash or wastewater with an evidenced method and destination.

### Process: Drying and stabilization (`mate_drying`)

#### Inputs

##### Product flows

###### Treated foliage and dryer services (`mate_drying_inputs`)

Record the usable heat-treated input and all actual heat, fuel, electricity and shared dryer services.

- Selected flow: sapeco-treated foliage and specified dryer energy; UUID unresolved
- Flow property / unit: Mass or Energy / kg, MJ, L or kWh
- Amount rule: paired input mass and dryer energy meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per dryer lot
- Basis kind: Process input (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

No waste input is presumed.

##### Elementary flows

Record direct water withdrawal only for an actual dryer service.

#### Outputs

##### Product flows

###### Stabilized dry foliage (`mate_dried_foliage`)

Hand dry material with measured final moisture to coarse breaking or grading; track evaporated water separately in the mass balance.

- Selected flow: dry primary-processed maté foliage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: net dry output weight and wet-basis moisture sample
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per dryer lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

Record scorched, mouldy or otherwise rejected dried material and its destination.

##### Elementary flows

Record water vapour and named direct dryer emissions only where relevant to the selected inventory method.

### Process: Coarse breaking, grade sorting and dispatch (`mate_grade_gate`)

#### Inputs

##### Product flows

###### Dry foliage and grading service (`mate_grading_inputs`)

Receive the dry lot once, and record optional coarse breaking and actual shared grader or store energy.

- Selected flow: dry maté foliage and documented service; UUID unresolved
- Flow property / unit: Mass or Energy / kg or kWh
- Amount rule: input weight, operating time and meter record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per graded lot
- Basis kind: Process input (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

Returned off-spec material is a traced rework input, not a second harvest.

##### Elementary flows

No elementary input is presumed.

#### Outputs

##### Product flows

###### Accepted dry maté leaves (`mate_accepted_dry`)

Dispatch accepted dry unblended leaves at the declared gate. A separately marketed fine-twig or lower-grade output needs its own mass and hand-off.

- Selected flow: dry maté leaves; exact UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: net accepted gate weight and measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg accepted dry maté leaves
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

###### Downgraded or intended twig grade (`mate_downgraded_grade`)

Record a separate intended product only with a buyer, specification, mass and distinct hand-off; otherwise classify as residue or waste.

- Selected flow: documented lower-grade or fine-twig maté; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: net separately dispatched weight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per graded lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Waste flows

###### Rejected and off-spec material (`mate_grade_rejects`)

Identify dust, woody residue, scorched or mouldy material; link each rework loop or boundary exit to this grading node.

- Selected flow: identified rejected maté material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: rejected mass by cause and rework, recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per graded lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mate_processing_lot`

##### Elementary flows

Record dust emissions only when their substance and receiving medium are specified.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | intended outputs | Enumerate accepted dry leaves and every independently sold fine-twig or lower-grade output with a single hand-off; residues and rejects are not automatically co-products. | `chifarelli-2024-yerba-mate-lca` |
| `allocation_02` | multiple intended products | Prefer measured subdivision; if a process is inseparable, declare a programme-specific physical or other allocation method and rationale rather than assuming a universal split. | `iso-14044-2006` |
| `allocation_03` | perennial phases | Link establishment, immature, productive, replacement and termination events to represented years and their outputs; assign each event once with declared service years. | `iso-14044-2006` |
| `allocation_04` | shared sites and assets | Attribute vehicles, sapeco heat system, dryers, grader and storage once to consuming nodes, lots, sites and periods using logged time, throughput or other evidenced physical driver. | `iso-14044-2006` |
| `allocation_05` | rejects and rework | Keep burdens with the producing lot until documented sale, recovery, treatment or disposal; rework cannot create a second accepted output or duplicate energy input. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mate_site_year` | `mate_stand_management` | perennial inputs and emissions | field ledger and meters | stand, phase, year, area, planting, fertilizer, crop protection, irrigation, fuel, electricity, shared driver | dated field log, invoice and calibrated meter | ha; year; kg; m3; L; kWh | each event or month | full represented year and attributable establishment | every supplying stand | sum within site-year then output-weight across sites | map, invoice, calibration and activity log |
| `cp_mate_harvest_lot` | `mate_harvest` | removed, collected and residual biomass | harvest lot | stand, date, collected mass, leaf/twig fraction, field residue, cutting fuel, receipt link | field tally and net scale | kg; L | each harvest | complete harvest season | every supplying block | link once to receipt lot | scale ticket and traceable lot record |
| `cp_mate_processing_lot` | `mate_first_conditioning`; `mate_sapeco`; `mate_drying`; `mate_grade_gate` | each material state, energy, grade, reject and gate | processing and dispatch lot | incoming lot, tare, weights and moisture by stage, fuel by type, electricity, dryer time, grades, rework, reject and buyer | paired scale, moisture sample, meter and dispatch record | kg; percent; MJ; L; kWh; h | each lot and each rework event | complete processing period | every included facility | reconcile stage by stage, then mass-weight across sites | scale and moisture calibration, fuel invoice, meter log and destination receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | dry matter | dry matter kg = as-received kg × (1 − wet-basis moisture fraction); compare paired stage balances and separate evaporated water | lot mass and moisture | stage dry-matter balance | `iarc-mate-processing` |
| `calculation_02` | accepted output | fresh input = accepted dry product + intended co-products + rejects + measured water loss + other measured losses + investigated residual, on consistent basis | stage scale, composition and moisture | reconciled processing lot | `chifarelli-2024-yerba-mate-lca` |
| `calculation_03` | multi-site normalization | sum attributed site and process burdens divided by sum accepted dry reference mass; keep every site's numerator and denominator | site-year, lot and dispatch records | amount per 1 kg dry maté | `iso-14044-2006` |
| `calculation_04` | period and shared service | event burden × documented period and service-driver share; shares across all recipients must sum to one | event, period, asset and recipient logs | attributable burden per lot | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | reference identity | Verify an exact compatible dry maté product-flow UUID before active or published use. | confirmed Tiangong flow record and product specification |
| `quality_02` | site and period | List all contributing stands, dryers, phases and crop years, with geographic and temporal representativeness and excluded units. | site register, field map and inclusion decision |
| `quality_03` | mass and grades | Retain paired mass/moisture observations for fresh, treated, dried and dispatched states; trace intended grades, rejects and rework. | scale, moisture and destination records |
| `quality_04` | heat and shared assets | Name sapeco and dryer fuel, energy meter, shared consumers, service period and attribution driver. | meter, fuel and equipment logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | identity and gate | Accepted reference is dry unblended *Ilex paraguariensis* leaf material, with moisture, leaf/twig fraction, treatment route and primary-processing gate declared; exact UUID is required for active use. | `fao-yerba-mate-forest-products`; `iarc-mate-processing` |
| `validation_02` | phase and sites | Each site-year, planting or replacement event and processing site links to a represented phase, harvest lot and output period exactly once. | `iso-14044-2006` |
| `validation_03` | material balance | Reconcile fresh, prepared, heat-treated, dried, accepted, downgraded, rejected and lost mass using measured moisture; investigate unexplained residuals. | `chifarelli-2024-yerba-mate-lca` |
| `validation_04` | co-products and rework | A separately sold twig or lower grade needs mass, buyer and attribution decision; rejected material needs rework or exit and cannot count twice as accepted. | `iso-14044-2006` |
| `validation_05` | shared services | Enumerate consumers and service periods for shared vehicles, heat system, dryer, grader and storage; assigned shares sum to one. | `iso-14044-2006` |
| `validation_06` | boundary extension | Aging, fine milling, blending and retail packaging, if reported, have distinct output states and boundaries and do not reuse the primary-processing reference amount. | `iarc-mate-processing` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package for cultivated dry primary-processed maté leaves |
| downstream_use | `secondary_dataset` or `background_dataset` after review and identity resolution |
| allowed_use | declared dry unblended *Ilex paraguariensis* primary-processing gate and represented site, year, leaf/twig composition and route |
| excluded_use | fresh-only leaves, tea, blended or flavored maté, beverage, extract, aged or retail-packed products without a separately modelled extension |
| required_metadata | PCR id and version; exact product UUID; sites and phases; harvest and processing lots; moisture by state; heat and drying route; grade and co-product decision; gate |
| required_quality_disclosure | primary-data share, site coverage, meter and sample quality, mass residual, shared-asset method, emission method, upstream datasets and unresolved flows |
| update_trigger | changed product state, gate, species, site mix, heat or drying route, grading specification, co-product treatment or reviewed UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-01630` | official_guidance | UNSD, CPC 3.0 class 0163 Maté leaves, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/0163 ; CPC 2.1 subclass 01630 correspondence to HS 090300, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01630 | classification and market-state scope |
| `fao-yerba-mate-forest-products` | official_guidance | FAO, *Non-Wood Forest Products from Temperate Broad-Leaved Trees*, Chapter 4, https://www.fao.org/4/Y4351E/y4351e08.htm | species, plantation and forest distinction, leaf harvest and processing |
| `chifarelli-2024-yerba-mate-lca` | literature | Chifarelli et al., *Carbon Footprint of Yerba Mate (Ilex paraguariensis) Value Chain in Misiones Province (Argentina)*, Sustainability 2024, 16, 10127, https://www.mdpi.com/2071-1050/16/22/10127 | stage decomposition, cultivation, harvest, processing and activity collection |
| `iarc-mate-processing` | official_guidance | IARC, *Drinking Coffee, Mate, and Very Hot Beverages*, mate processing section, https://publications.iarc.who.int/_publications/media/download/5606/1d2030b4b02d9c682ccf2a55d0bf7c871405fc2b.pdf | sapeco, drying and downstream state distinction |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | boundaries, subdivision, allocation and data quality |
