---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.tableware-and-kitchenware-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
translation_status: canonical
content_maturity: authored_methodology
---

# Uncoated single-piece sugar maple cutting boards

## 1. Scope and Applicability

This PCR produces a cradle-to-factory-gate inventory for one defined product: an untreated, uncoated, unglued, single-piece face-grain sugar maple cutting board made by electrically powered sawing, planing, routing and belt sanding from purchased kiln-dried lumber, dry-cleaned and delivered in an unprinted self-locking corrugated box. Verify this route from drawings, supplier declarations, the actual bill of materials and shop records. Food-contact performance is an acceptance requirement, not a claim that the PCR certifies compliance. FDA Food Code 2022 provides a hard-maple cutting-board example; the destination-market assessment remains explicit. [fda-food-code-2022]

Exclude spoons, bowls, bamboo laminates, glued or end-grain assembled boards, thermally modified/impregnated stock, finishes applied as oil, wax or coating, wet cleaning and on-site kiln/boiler routes. A coating or adhesive discovered in the actual recipe invalidates this category applicability; obtain its real supplier formulation and define a separately reviewed method, rather than treating it as an assumed optional input. No geometry, yield, moisture target, lifetime, energy intensity or emissions default is set.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.tableware-and-kitchenware-of-wood |
| classification_refs | CPC 3.0 31912; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated unglued single-piece face-grain sugar maple cutting boards |
| excluded_products | Spoons; bowls; bamboo; glued/end-grain boards; coated/oiled/waxed boards; impregnated or thermally modified stock |
| representative_product | One accepted complete sugar maple cutting board of the declared dimensions and moisture state |
| production_route | Purchased kiln-dried solid lumber → sawing → planing/routing → belt sanding and dust extraction → dry cleaning/inspection → self-locking box packing |
| market_state | Accepted unfinished-by-coating board; packed at factory gate; no retail transport included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a rigid wooden food-preparation cutting surface |
| How much | 1 kg accepted net cutting-board mass at declared delivery moisture |
| How well | Declare dimensions, flatness, face-grain orientation, surface condition, intended food contact and destination acceptance evidence |
| How long or cycle | One manufacturing and factory-gate delivery cycle; no use-phase lifetime assumed |
| reference_flow_link | `accepted_board` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tableware and kitchenware, of wood `53ff8f39-08e3-4648-971e-b9851a4b5d44` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Acer saccharum supplier identity; single-piece face grain; no glue/coating/oil/wax/impregnation; dimensions; accepted surface and food-contact evidence; delivery moisture and net weighing; purchased kiln-dried starting condition; abrasive grade and actual formulation; dust capture system; low-voltage consumer supply; self-locking unprinted box; geographic/temporal scope |

This is a declared production unit, not equal service across different board designs. Record item count only for traceability; the denominator is measured net accepted mass, not count, gross packed mass or oven-dry mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted net board at its recorded delivery moisture; exclude boxes. Collect using cp_mass. All inventory rows and collection aggregation use per 1 kg reference flow. |
| dry_basis | wood material balance | Mass | kg | MC is percent water per oven-dry wood, not wet-basis percentage. Convert each measured stream separately; never substitute a survey density or common moisture for measured stream states. [usda-wood-handbook-2021] |
| energy_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The property is the database energy identity. Use the energy-unit conversion 1 kWh = 3.6 MJ for electrical work; identify consumer voltage and background supply boundaries. It does not imply fuel or net steam heat. |
| air_size | pm25; pmcoarse; pmover10 | Mass | kg | Use mutually exclusive outdoor-air particulate bins for the same measurement scope and period. Keep captured waste dust and air release separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated kiln-dried single-piece sugar maple blanks received at the machining plant |
| starting_condition_role | foreground_input |
| product_classification_scope | Specific cutting-board subset of wooden kitchenware; CPC 31912 narrower candidate only |
| recursive_input_rule | Finished cutting boards are not purchased normal inputs. Internal rework stays inside the unit; any purchased same-category board requires separate starting-condition review and excludes reusing this primary-manufacture result without disclosure. |
| upstream_dataset_requirement | Match wood forestry, sawing and actual kiln drying through delivery to receipt; match electricity, complete belts, actual applicable oil and box supply. Add inbound freight separately when not included in a verified delivered-input dataset; record actual route, mode, load and distance. Do not double count freight or drying. |
| disclosure | Supplier/site/year/species/moisture, actual recipe and starting state, foreground map, upstream delivery scope, waste receivers, omissions and uncertainty |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_route | p_board | Verify the single-piece uncoated route. Include actual machining, extraction, inspection, packaging and attributable site utilities; no foreground kiln, boiler, coating, lamination or wet wash is permitted by this boundary. | usda-wood-handbook-2021 |
| sb_supply | maple_blank; electricity; abrasive_belt; machine_oil; box | Complete the upstream supply and delivery chain using compatible supplier data. A flow UUID confirms exchange identity only. Missing moisture, formulation, voltage, delivery scope or inventory quantity compatibility prevents a complete background link. |  |
| sb_waste | p_board | Declare each waste receiver and treatment outside the foreground; never give avoided-product or combustion credits automatically. Internal collection/recirculation is not an external output until actual dispatch. |  |
| sb_carbon | p_board | Retain wood biogenic carbon in the physical material account and upstream LCI, including any upstream biogenic CO2. This no-combustion foreground does not justify deleting such flows from the supply chain. Use-phase release/storage, future disposal and carbon-neutrality claims are outside this production result. | usda-wood-handbook-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_board | Blank receipt, electric machining, conditioning, inspection and packing | required | Declared single-piece sugar maple route | foreground_production | accepted_board; 1 kg |

Receipt → sawing → planing/routing → sanding/capture → ambient conditioning/dry cleaning → inspection → packing → factory-gate delivery. Keep stage meters and wood-transfer quantities in raw records. If subdivided later, each actual internal transfer has equal quantities at both ends and cancels on aggregation; do not list an internal finished board again as a reference output. Input logging, sawmilling, kiln drying and supply transport remain in verified upstream links.

### Process: Board manufacture and delivery (`p_board`)

#### Inputs

##### Product flows

###### Purchased kiln-dried sugar maple blank (`maple_blank`)

Receive untreated single-piece sugar maple (Acer saccharum) lumber suitable for machining a cutting board. Record supplier, species, dimensions, moisture and kiln-drying route; no resin, impregnation or laminated stock. This broad intermediate identity covers the specified solid hardwood subset; require a supplier background at the same as-received kg moisture basis and delivery boundary. The raw identity specifies non-coniferous sawn stock thicker than 6 mm and a kiln-dried at-plant GLO intermediate supply context. Measure actual incoming thickness, verify sugar-maple species, kiln route, moisture and provider gate/period/reference quantity; stock at or below 6 mm requires a separately verified compatible identity. GLO does not establish the actual supplier background.

- Selected flow: Kiln-dried wood boards and blanks `92c2e870-95ba-46bf-a6f6-f4680080df1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Electric machining and extraction (`electricity`)

Purchased low-voltage alternating current below 1 kV, metered at the consumer. Include saw, planer, router, sanding, extractor, inspection, packaging and attributable services. Preserve supplier geography, year, voltage and loss boundary; this UUID does not select a generation dataset. Convert measured kWh to MJ using the energy unit group, not a fuel heating value. The raw geography is CN. Verify the actual supplier/region/year, below-1-kV delivery gate, loss convention and MJ reference-quantity compatibility; this physical AC identity does not establish a globally applicable background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Whole abrasive belt for sanding (`abrasive_belt`)

Record one purchased coated abrasive belt as a complete consumable, not bare alumina. Capture actual grain species, grit, backing, binder formulation information, supplier grade, dimensions, dry new mass and replacement count. Do not infer binder or food-contact coating use from sanding. Prevent abrasive contamination of accepted boards. The source records at-plant CN grinding/polishing consumables. Verify actual supplier geography/period, complete backing-binder-grain grade/formulation and Mass/kg gate compatibility; the broad belt identity is not an exact supplier inventory.

- Selected flow: Abrasive belt `8240432e-9d1c-43e0-aa76-70e9905b2895`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aux`

###### Formulated mineral machine lubricating oil (`machine_oil`)

Conditional actual as-supplied formulated petroleum/mineral machinery lubricating oil, recorded as one complete purchased liquid mixture including its additives; never a board coating. Collect SKU/SDS, actual base-oil and additive constituents, petroleum mass fraction, measured consumed mass, campaign attribution, opening/closing stock, retained oil and dispatched used oil. The raw petroleum-fraction route and CPC class for preparations containing at least 70% petroleum oil require supplier compatibility; actual formulation remains to be verified. Its 40.5 MJ/kg name descriptor is source grade/quantity metadata requiring provider clarification, not a default actual calorific value, maintenance fuel/heat or a second energy exchange. Verify supplier gate/period and native Mass/kg basis; do not duplicate separate base/additive purchases on top of the whole mixture. Pure Mineral Oil and full-synthetic candidates remain incompatible substitutes. Document absence if unused; resolve actual formulation/background compatibility before a complete dataset.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aux`

###### Self-locking corrugated box (`box`)

One unprinted self-locking corrugated box delivered as a finished packaging component; no tape, film, glued closure or label in this delivery configuration. Weigh actual boxes including their purchased construction; obtain actual paper grades, supplier composition and upstream manufacturing data. Box manufacturing adhesive, if present upstream, belongs to the supplied box background and is not an invented foreground input. The raw name descriptor states 16.6% primary fibre and 83.4% recycled fibre. These are source supplier-composition/quantity compatibility constraints, not this factory's recipe, an assumed actual fibre mix or a recycling credit. Retain only a supplier-supported compatible finished box; a differing actual composition requires unresolved compatibility or another verified identity before completeness. Collect actual composition and provider gate/year/Mass reference basis, without changing the actual box formulation.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

#### Outputs

##### Product flows

###### Accepted uncoated single-piece cutting board (`accepted_board`)

The sole reference output: sugar maple, single-piece face-grain board, mechanically finished, dry-cleaned and accepted for food preparation. Its broad wooden kitchenware UUID is bound by these physical qualifiers; it cannot authorize spoon, bowl, bamboo or glued-board alternatives. Packaging accompanies delivery but is excluded from the net reference mass.

- Selected flow: Tableware and kitchenware, of wood `53ff8f39-08e3-4648-971e-b9851a4b5d44`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `fda-food-code-2022`

##### Waste flows

###### Segregated solid maple offcut (`offcut`)

Untreated non-agglomerated machining offcut only, segregated from dust and rejected whole boards. Record moisture, actual absence or presence of adhesive/abrasive/oil contamination and receiving facility; contaminated material cannot be treated as clean fuel by default. The source CPC agglomerated-wood classification conflicts with its woodworking name/comment and empty treatment field; physical use is conditional pending source clarification.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Captured clean sawing dust (`sawdust`)

Separately captured pure wood sawing dust leaving for a declared receiver, weighed with its measured moisture. Keep sanding abrasive dust out of this stream; capture is not an elementary air emission. The untreated combustion/recovery locator is usable only with a confirmed compatible receiver; do not assume combustion, emission credits or an energy content.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Segregated planer shavings (`shavings`)

Pure sugar maple planer shavings, independently weighed and moisture-tested with documented receiver. Broad wood-waste identity includes this uncoated material; disclose source route wording primary production route and clarify its applicability with the receiver/background. Do not assume the municipal proportions described in its comment. Actual shavings must remain non-agglomerated. Source CPC39282 instead denotes agglomerated wood waste; the concordant broad physical wood identity is conditionally retained, with classification clarification by the source owner and receiver/provider compatibility pending. Do not claim all database metadata verified or infer agglomeration/treatment.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Rejected whole maple board (`rejected_board`)

Whole uncoated boards rejected at inspection and actually dispatched as wood waste. Record defect, net mass, moisture and receiver separately from offcut/shavings. Reworked boards remaining inside the unit are not additional boundary outputs; accepted rework enters accepted_board only once. The broad wood-waste identity requires the same source route clarification as shavings. Actual whole rejected boards must remain non-agglomerated. Source CPC39282 instead denotes agglomerated wood waste; conditional broad physical identity requires source-owner classification clarification plus receiver/provider compatibility, including the existing primary-production wording debt. Do not invent agglomeration or treatment, or claim all source metadata verified.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Captured wood sanding dust with spent abrasive particles (`sanding_dust`)

One actual separately captured post-sanding mixed wood/mineral/binder dust stream, weighed as collected with its actual moisture. Record collection origin, actual wood/abrasive/binder constituents, their measured dry masses and contamination, biogenic/fossil carbon attribution, container/stock change and named receiver. The broad industrial-collector Dust waste identity does not establish a composition or treatment background: verify receiver acceptance and provider route/reference-quantity compatibility before linking it. Keep distinct from pure sawing dust, removed whole abrasive belts and emitted stack/fugitive PM; do not substitute metal sludge, coal, cork, pure alumina or clean wood. Preserve the actual wood fraction in the physical carbon/water balance; no mixture ratio is assumed.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Spent whole sanding belt (`spent_belt`)

Whole exhausted belt from wood surface finishing, weighed as dispatched with residual wood contamination. This broad spent-abrasive surface-finishing record has no metal-only restriction; confirm the full belt/backing identity and receiver background, not loose mineral powder. Reconcile abrasive input, wear in captured dust or air and remaining belt; do not transfer any candidate record percentage estimate.

- Selected flow: Spent abrasive waste `f0a52dd6-0027-4033-9068-f293526f958f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

###### Used machinery lubricating oil (`used_oil`)

Conditional spent machinery lubricant, measured in kg with actual oil grade, contamination, waste classification and receiver/treatment. Resolve the matching input formulation and use/stock/retained-oil balance; do not infer an oil consumption or disposal fraction.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aux`

###### Damaged corrugated box at packing (`box_scrap`)

Actual unused/damaged box scrap dispatched from pack-out, separated from delivered packaging. Use measured mass; the database comment estimate of 2% is not a PCR default and is not evidence for this factory.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

##### Elementary flows

###### Outdoor fine particulate (`pm25`)

Air release with aerodynamic diameter at or below 2.5 micrometres; outdoor air, unspecified subcompartment, contemporaneous, Mass/kg. Use site measurements after capture and add fugitive releases once. Not occupational dust exposure, soil deposition or stratospheric emission. Wood/abrasive particulate is not assigned fossil or biogenic CO2 identity.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### Outdoor particulate between 2.5 and 10 micrometres (`pmcoarse`)

Exclusive size band above 2.5 and at or below 10 micrometres, outdoor air unspecified, Mass/kg. Derive from compatible cumulative PM10 minus PM2.5 measurements for the same stack/fugitive scope and period. Never add cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### Outdoor particulate above 10 micrometres (`pmover10`)

Exclusive particles above 10 micrometres, outdoor air unspecified, Mass/kg. Derive from compatible total particulate minus PM10 measurements with matching test definition; particle-size-unspecified or correction flows cannot replace this band. No PTE factors or assumed fractions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### Measured ambient moisture loss (`water_vapour`)

Water (CAS 7732-18-5) released as vapour during ambient conditioning, only when net evaporation is established by a consistent measured water balance. Outdoor air unspecified, contemporaneous, Mass/kg. No purchased steam, boiler, kiln or evapotranspiration identity. Do not force a negative evaporation residual to zero: moisture uptake needs its own specific resource exchange and review before dataset completion.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Unallocated physical exchange total in the matching production period divided once by accepted net board mass in kg; retain stage records and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

The listed residue cards represent waste dispatches. If no genuine co-product leaves a joint stage, the board receives all its burdens. If actual evidence establishes a co-product, add its specifically verified product-output identity and applicable collection before using the allocation method; do not relabel a waste UUID as a product.

The following physical-allocation method is an author adaptation of the CORRIM softwood case, not a transfer of that survey to sugar maple factories. No survey density, yield, energy, price or allocation share is adopted. Establish whether a dispatched residue is waste or a co-product from actual contracts, specification, demand and handling; a sale alone does not erase waste treatment. [corrim-northern-lumber-2025]

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| al_separate | p_board | First separate product-specific stages using measured electricity/work and material records. Assign board-only sanding, acceptance and packaging burdens directly to boards; do not allocate their burdens to residues that left at earlier stages. | corrim-northern-lumber-2025 |
| al_joint | p_board | For an inseparable joint stage with genuine wood co-products, use measured oven-dry wood mass fractions within that stage. If every residue is waste, the board fraction is 1. Treat actual waste disposal as a board-production burden; exclude wastes, packaging, water and abrasive mass from the co-product denominator. Disclose stage outputs, causal limits and an economic sensitivity using measured revenues when physical shares may distort value. | corrim-northern-lumber-2025 |
| al_physical | p_board | Keep a complete unallocated physical ledger and a separate allocated environmental-burden ledger. Preserve actual product/co-product/waste quantities and carbon/water balances; never multiply real co-product outputs or internal transfers by a burden share. Internal reuse is measured once with no external substitution credit. | corrim-northern-lumber-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | p_board | accepted_board | weighing | lot; species; dimensions; accepted count; delivery moisture; net accepted board mass B; box tare; rejects; stock change; surface acceptance | Calibrated net weighing of accepted bare boards before pack-out, reconcile packed gross minus actual tare and actual matched-period packed dispatches and stocks; inspect declared material/surface; retain item-level records without using count as denominator | kg | each lot and acceptance | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |
| cp_material | p_board | maple_blank; water_vapour | weighing_and_moisture | supplier; species; drying/delivery data; blank net mass; receipts/stock; each stream wet and oven-dry sample mass; MC; ambient humidity/time; sample location; carbon fraction test | Calibrated receipt and dispatch weighing with representative species/stream-specific moisture samples; immediate sample weighing and oven-dry constant mass per USDA ch.13 (101–105°C; no appreciable change at 3-hour intervals), or a validated corrected moisture meter cross-checked to this basis; record volatilization bias and sample coverage | kg; % dry basis | each receipt/lot and balance campaign | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |
| cp_energy | p_board | electricity | meter | stage meter start/end; kWh; dates; voltage; supplier mix/loss boundary; machine/extractor hours; shared-service attribution | Read calibrated submeter or attributable plant meters; retain stage totals and shared-use driver; include idle and auxiliary demand attributable to the campaign without double counting | kWh; MJ | meter intervals and each lot | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |
| cp_aux | p_board | abrasive_belt; machine_oil; used_oil | stock_and_supplier_records | SKU; supplier; actual grain/backing/binder or complete oil base/additives; petroleum mass fraction; supplier grade/40.5 descriptor and gate/reference-basis compatibility; SDS; new unit mass; replacements; used belt/oil mass; receipts/returns; opening/closing stock; machine retained oil; cross-contamination | Actual supplier composition and purchasing/maintenance records with calibrated mass measurements; complete product mass includes actual formulation; track belt abrasion separately and do not infer recipe from trade names | kg | each replacement and stock period | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |
| cp_residue | p_board | offcut; sawdust; shavings; rejected_board; sanding_dust; spent_belt | weighing_and_dispatch | stream/container id; gross/tare/net; moisture; wood fraction; actual mineral/binder constituents and measured dry component masses; moisture/carbon attribution; receiver acceptance and provider quantity basis; abrasive/adhesive/oil contamination; rejected-board defect; receiver; treatment; revenue/specification; dispatch and stored mass | Weigh segregated actual streams and reconcile bins, collector, rejected boards and dispatch/stock. Test composition of sanding dust and residual belt wood; define mutually exclusive bins for sawdust and shavings. Confirm receiver and waste/co-product legal/commercial status | kg; % | each bin/dispatch; campaign composition tests | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |
| cp_pack | p_board | box; box_scrap | packing_stock_records | box SKU/construction; actual supplier fibre composition; source 16.6/83.4 descriptor/gate/quantity-basis compatibility; net new box mass; box count; receipts/stock; dispatched accompanying packaging mass; damaged box mass; no closure/label/film declaration | Weigh complete purchased boxes and scrap separately, reconcile stock and delivered packaging; count conversion uses measured actual box mass, never a default percentage | kg | each packing lot | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |
| cp_air | p_board | pm25; pmcoarse; pmover10 | emission_monitoring | outlet/fugitive points; test method; aerodynamic fraction; total/PM10/PM2.5 cumulative or exclusive status; concentration; dry/wet gas basis; flow/time; capture/bypass; background subtraction; wood/abrasive composition; uncertainty; species screen | Use representative post-control stack and fugitive measurements for actual wood machinery; integrate compatible concentration and gas volume/time. Reconcile collected dust separately; document outlet, worker exposure and off-site boundary distinctions. Screen actual nonparticulate releases and add detected species as individually verified atomic rows before dataset completeness; do not assume zero from absence of a boiler | kg; concentration; gas volume/time | representative campaign across operating/control conditions | Same documented representative production period and lots as cp_mass | Specified sugar maple board line plus attributable services | per 1 kg reference flow | Calibration, supplier originals, timestamps, coverage and reconciliation evidence |

For every protocol, aggregate matched-period physical quantities and divide once by measured accepted net board mass B (kg) from cp_mass. Retain raw lot/stage amounts and opening/closing stocks. Count is traceability only; no per-item or per-machine collection denominator is used.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | For each row, q = A / B; A is its matched-period measured or calculated amount in the row unit; B is accepted net board mass in kg crossing the packed factory-gate boundary in the matched period from cp_mass. q is per 1 kg reference flow. Preserve actual unallocated outputs before any burden allocation. | A; B; cp_mass | row amount per 1 kg reference flow |  |
| moisture_balance | maple_blank; accepted_board; offcut; sawdust; shavings; rejected_board; sanding_dust; spent_belt; water_vapour | MC = 100*(wet_sample - dry_sample)/dry_sample; dry_wood = measured_wood_mass/(1 + MC/100). For mixed waste first separate measured dry non-wood content from dry wood. In each balance, input = output + closing_stock - opening_stock + documented_residual; retained wood includes accepted boards, all wood residues, wood in spent belt and emitted wood particles. Water input in wood = water in all dispatched/stored streams + net evaporation + water stock change. Do not label an unexplained residual as water, carbon or particulate release. | cp_material; cp_residue; cp_mass; cp_air | Dry wood and water ledgers with explicit uncertainty | usda-wood-handbook-2021 |
| electric_work | electricity | Electrical MJ = measured kWh * 3.6. Reconcile stage submeters with attributable plant supply; apply normalize_batch only after unit conversion. | cp_energy | MJ per period, then MJ per 1 kg reference flow |  |
| particulate_bins | pm25; pmcoarse; pmover10 | At each compatible measurement scope: fine = PM2.5; coarse = PM10 - PM2.5; over10 = total_particulate - PM10. Require total_particulate >= PM10 >= PM2.5 >= 0 within uncertainty. Sum mutually exclusive bins across stack and separately evidenced fugitive outlets once. Reject incompatible wet/dry gas, averaging periods, condensable definitions or test cut-offs; remeasure rather than force a bin. | cp_air | Exclusive kg air emissions, then per 1 kg reference flow | epa-sawmill-pte-2014 |
| joint_burdens | p_board | For each inseparable joint stage, f_board = dry_board_equivalent / sum(dry genuine wood co-product equivalents leaving that stage, including board precursor). All fractions sum to 1. Board burden = f_board * joint_stage_burden + direct_board_stage_burden. Preserve actual physical outputs; allocation changes only attributed joint burdens. Use stage-specific measured dry masses, not final-stage wet masses. | cp_material; cp_residue; cp_energy | Allocated burden ledger separate from physical ledger | corrim-northern-lumber-2025 |
| wood_carbon | p_board | Wood carbon = measured oven-dry wood mass * measured supplier/site carbon mass fraction for each actual stream. Reconcile input carbon with accepted board, residues, stored wood, emitted wood particles and any measured carbon-containing gaseous release. Track biogenic and fossil carbon separately where binder/oil occurs. No default wood-carbon fraction, negative carbon credit or deletion of upstream biogenic CO2. | cp_material; cp_residue; cp_air | Physical carbon ledger with residual and evidence | usda-wood-handbook-2021 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | p_board | Match actual species, material/recipe, finishing route and packaging; no hidden coating or adhesive. A broad UUID never substitutes for physical applicability. | Drawings, supplier composition, bills and acceptance records |
| dq_complete | all inventory rows | Resolve every applicable identity, support unit and background quantity basis. Prove absence to mark a conditional row not applicable; missing measurement is not zero. Add actual unlisted inputs/emissions atomically before completeness. | Protocol coverage and gap register |
| dq_period | p_board | Use matched periods and measured stock changes; retain raw stage data, detector limits, uncertainty and mass/water/carbon reconciliation without hiding residuals. | Calibrations, timestamps, raw data and balance report |
| dq_transfer | p_board | No CORRIM Northern softwood parameter, EPA sawmill PTE factor, database estimate or guessed supplier formula becomes a board-factory default. | Source-scope and foreground compatibility review |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_reference | accepted_board | Require exactly one accepted_board product output linked to the 1 kg net reference with declared qualifiers and matched cp_mass denominator in both languages. Broad kitchenware identity cannot be switched to another product. | fda-food-code-2022 |
| vr_flow | all inventory rows | Check flow type, physical species/material, treatment, medium/submedium, reference property/unit, supplier formulation and compatible background. Reject correction flows, particle-size substitutions and contradictory hard process/CAS restrictions. Applicable unresolved rows keep the dataset incomplete. |  |
| vr_balance | p_board | Reconcile unallocated wood/water/carbon, package, abrasive and oil accounts with stock changes and uncertainty. Stage internal transfers match at both ends. Retain real co-product quantities after burden allocation; no lost moisture is invented as emissions. | usda-wood-handbook-2021; corrim-northern-lumber-2025 |
| vr_air | pm25; pmcoarse; pmover10; water_vapour | Require actual consistent outlet/fugitive sampling or documented justified nonoccurrence, exclusive particulate bins and evidence for net evaporation. Do not turn PTE capacity, missing monitoring or a no-boiler route into measured zero emissions. | epa-sawmill-pte-2014 |
| vr_recipe | p_board | Verify no glue, coating, wax or applied oil on the reference board. Discovering one stops applicability and requires actual ingredient/formulation collection and separately reviewed methodology. Machine oil is not food-contact finishing oil. |  |
| vr_review | p_board | Report identity, measurement and source-scope coverage separately from methodological approval; candidate authorship or a CLI pass does not establish scientific review, food-contact certification or accepted mapping. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Production supply modelling of the same physically qualified sugar maple cutting board after all applicable collection/identity/background gaps are closed |
| excluded_use | Automatic modelling of spoons/bowls/bamboo/glued/coated boards; lifetime comparison; carbon neutrality; food-contact certification; applying factory inventory to all CPC 31912 products |
| required_metadata | Product qualifiers, source PCR/version, supplier/site/time, species and moisture, net output denominator, actual recipe, electricity supply boundary, upstream routes/freight, stage map, protocols and receivers |
| required_quality_disclosure | Coverage, unresolved identities/metadata, actual measurements, uncertainty/residuals, unallocated physical and allocated burden accounts, source transfer limits and independent review state |
| update_trigger | Species, single-piece construction, coating/glue, abrasive/oil recipe, moisture/drying supplier, energy, capture control, packaging, receiver or evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fda-food-code-2022 | official_guidance | [FDA Food Code 2022](https://www.fda.gov/media/184685/download), §§4-101.11 and 4-101.17(B)(1), printed pp.91–93 | Hard-maple cutting-board and surface acceptance example; no recipe, lifetime or global compliance claim |
| usda-wood-handbook-2021 | handbook | [USDA Forest Products Laboratory, Wood Handbook, FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf), ch.4 p.4–1, ch.13 p.13–2; sugar maple scientific-name list | Dry-basis moisture and specimen/oven-dry method; sugar maple identity; no factory density, target moisture, carbon fraction or yield default |
| epa-sawmill-pte-2014 | official_guidance | [EPA Region 10, Particulate Matter PTE factors for sawmill activities excluding boilers (8 May 2014)](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf), memo p.1 and nested PM tables p.2 | PTE limitation and cumulative particle-size accounting caution only; no sawmill, kiln, boiler or control factor adopted |
| corrim-northern-lumber-2025 | literature | [CORRIM, LCA of Softwood Lumber Production – Northern Region (22 July 2025 revision)](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf), §3.2.6 p.16 | Limited physical-allocation/packaging worked example adapted by author using actual site measurements; no Northern softwood survey parameters transferred |
