---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.cotton-cross-stitch-retail-kits
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Cotton cross-stitch retail kits from finished components


## 1. Scope and Applicability

This method covers dry preparation and retail kitting of purchased finished 100% cotton Aida fabric and finished dyed stranded cotton embroidery floss for a consumer to stitch a decorative textile picture. Its representative configuration includes a steel tapestry needle, a printed paper chart, a punched paperboard floss organizer and a mechanically closed folding paperboard retail carton, without a hoop. The carton and organizer are declared configurations, not requirements for every market kit. `caterpillar-kit-components` establishes a commercially supplied cut-fabric/floss kit without a supplied hoop; `dmc-kit-components` documents cotton components and a contrasting hoop-inclusive SKU. Neither source establishes factory yields or a generic complete recipe. All actual lengths, sizes, colour quantities, losses and energy require factory collection.

This is a narrow subset of the retail fabric-and-yarn sets in `unsd-cpc3-2025`, not coverage of all other furnishing articles. Finished embroidered textiles, completed rugs/tapestries, cushion covers, curtains, table linen, wool/metallic/synthetic floss kits, hoop-inclusive kits, preprinted fabric kits and kits requiring on-site wet processing are excluded. Cotton cultivation, ginning, fibre/yarn production, fabric formation, bleaching, dyeing, mercerizing and upstream wastewater treatment belong to linked upstream component datasets. Consumer stitching, laundering, framing, distribution and end-of-life are outside this factory foreground. No lifetime, health, regulatory approval or cradle-to-gate completeness claim follows from the reference mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.cotton-cross-stitch-retail-kits` |
| classification_refs | CPC 3.0 27140; narrower |
| covered_products | Unstitched cotton cross-stitch fabric-and-floss retail kits; dry component preparation and kitting only |
| excluded_products | Completed furnishings and embroidery; non-cotton, hoop-inclusive, preprinted-substrate and in-house wet-processing routes |
| representative_product | Complete decorative cross-stitch kit with cotton Aida, colour-sorted cotton floss, steel needle, paper chart and punched organizer, supplied without hoop |
| production_route | Finished-component receipt → cotton fabric cutting → floss measuring/cutting/sorting → kit matching and inspection → retail packing |
| market_state | Complete unstitched kit, retail packed; no consumer stitching performed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply coordinated components for one declared cross-stitch decorative textile design |
| How much | 1 kg net contents of accepted complete kits of a single declared SKU/configuration |
| How well | Correct cotton fabric grid/dimensions, matched colour and length schedule, specified needle, legible chart and declared accessory completeness; acceptance is factory specification, not certification |
| How long or cycle | One manufacturing and kitting cycle; no stitching time or decorative service lifetime prescribed |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete unstitched cotton cross-stitch retail kit |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and design revision; fabric composition, Aida count, cut size and finish; floss colour/lot, construction, finish and quantities; needle alloy/plating/size; chart substrate/revision; organizer inclusion; no hoop; net-content conditioning; retail package; geography, voltage and reporting period |

Declare every qualifier in the foreground data package. Net contents include delivered fabric, floss, needle, chart and organizer when supplied; exclude outer retail and transport packaging. Mass is a production reference, not evidence of equivalent stitching functions across designs. The product UUID remains unresolved; the reference name equals the final output name.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect accepted complete-kit net contents using cp_output on calibrated scales in the declared conditioning state. Q is total accepted net contents mass in kg of one SKU; exclude outer packaging and incomplete kits. Every inventory denominator is the same 1 kg reference flow. |
| `count_length_mass` | received_aida; cotton_floss; thread_card; tapestry_needle; printed_chart; retail_carton | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain actual counted items, fabric area and thread length as raw records; use measured supplier-lot-specific mass per item, area or length to obtain exchange kg. Never relabel an Area or Number-of-items public property as Mass; no nominal density or piece weight is supplied. |
| `electricity_units` | cutting_electricity; sorting_electricity; packing_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public reference property Net calorific value and Units of energy; metered kWh × 3.6 gives MJ. This is electrical energy conversion, not a combustion fuel factor. |

The electricity reference property above links to Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, whose reference unit is MJ and whose kWh factor is 3.6. Mass exchanges link to Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg. Preserve these property-to-unit-group relationships; an electricity flow is not a mass exchange.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received finished cotton Aida and dyed embroidery floss, finished needle, printed chart, finished punched card and purchased flat carton; disclose supplier processing and actual moisture/conditioning |
| starting_condition_role | Technical product inputs at the kitting-site gate |
| product_classification_scope | Only the cotton cross-stitch retail-set subset of CPC 27140 |
| recursive_input_rule | An already complete kit entering repacking remains a purchased same-category input with its own dataset; this component-to-kit route cannot claim its component preparation anew |
| upstream_dataset_requirement | Link route-, composition-, location- and time-matched datasets for fabric (including fibre production and wet processing), floss, needle, printed paper, card, carton and electricity. Off-site waste treatment is linked explicitly, not counted as factory operation |
| disclosure | State gate-to-gate dry kitting scope, inbound/outbound transport treatment, manual/powered steps, conditioning, net contents, omitted routes and upstream coverage gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_dry_route` | all foreground operations | Include receipt checks, cutting, length measuring, sorting, matching, inspection, attributable utilities, retail packaging and generated waste at the site. Dyeing, wet washing, chemical finish, printed-substrate manufacture or consumer stitching require a different disclosed route; do not conceal them upstream if performed on site. | `caterpillar-kit-components`; `dmc-kit-components` |
| `boundary_upstream` | component sourcing | Carry upstream component production separately. A supplier specification is not proof of a complete cradle-to-gate model; disclose all missing upstream links. | `unsd-cpc3-2025` |
| `boundary_auxiliary` | site operation and wastes | Inspect equipment, cleaning and ventilation logs. No process water, fuel, heat or wastewater is assumed for dry kitting. If used, add each specific atomic exchange with collected quantity and identity review. Captured dust, damaged needles, rejected charts or organizer cards, incoming packing waste and any other actual loss require separate rows; missing material flows block completeness. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabric_preparation` | Receipt and cotton fabric cutting | required | Every in-scope kit; purchased pre-cut lengths disclosed as already upstream | Foreground dry kit manufacture | per 1 kg reference flow |
| `thread_preparation` | Floss measuring, cutting and colour sorting | required | Every in-scope kit; purchased pre-cut lengths disclosed as already upstream | Foreground dry kit manufacture | per 1 kg reference flow |
| `kitting_packing` | Component matching, inspection and retail packing | required | Every in-scope kit; purchased pre-cut lengths disclosed as already upstream | Foreground dry kit manufacture | per 1 kg reference flow |

Track cotton pieces from cutting and sorted floss from preparation through an internal SKU/lot ledger into packing. These are same-site transfers, not additional purchased inputs or duplicate product outputs. One aggregate gate-to-gate kit balance closes the three stages. A manufacturer component list supports the route concept; it does not prove how a particular plant cuts or sorts. Record actual factory equipment and subcontracting.

### Process: Receipt and cotton fabric cutting (`fabric_preparation`)

#### Inputs

##### Product flows

###### Finished 100% cotton Aida fabric (`received_aida`)

Receive finished woven cotton fabric ready to cut. Record weave grid, fibre composition, dimensions, supplier finishing state and conditioning humidity. Weigh fabric issued minus usable returns; do not substitute greige fabric or cotton fibre.

- Selected flow: Finished 100% cotton Aida fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_fabric; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabric`
- Sources: `dmc-kit-components`

###### Alternating current (`cutting_electricity`)

Applicable only to actual CN grid-average user-side supply below 1 kV for powered cutting and attributable preparation lighting. Manual cutting has no cutter electricity; disclose shared lighting separately within this meter total. A different country, voltage or dedicated supply requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_cutting_energy; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cutting_energy`

#### Outputs

##### Waste flows

###### Unstitched cotton Aida fabric offcuts (`cotton_fabric_offcuts`)

Weigh segregated cotton fabric offcuts and rejected unstitched fabric leaving the process for waste management. Record moisture, dye/finish, recipient and route. Usable returned fabric is an internal return, not waste; no fixed loss percentage applies.

- Selected flow: Unstitched cotton Aida fabric offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_fabric_waste; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabric_waste`

##### Elementary flows

###### Particulate matter, particle size unspecified (`airborne_particulates`)

Conditional: use only for measured particulate mass actually released to ambient air during fabric preparation where size fraction and air subcompartment are unspecified. Worker exposure concentration and dust captured in filters are not this exchange. Record release location and monitoring; use a more specific verified identity if size or subcompartment is known. No obligatory emission or cement-derived factor is assigned.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_air; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`


### Process: Floss measuring, cutting and colour sorting (`thread_preparation`)

#### Inputs

##### Product flows

###### Finished dyed stranded cotton embroidery floss (`cotton_floss`)

Receive embroidery-grade cotton floss already spun, dyed and finished. Weigh by supplier colour and lot; record strand construction and finish. Each actual supplier colour is a separate instance of this atomic floss exchange, not a mixed-material selector. Check actual mass per measured length when shop records use metres.

- Selected flow: Finished dyed stranded cotton embroidery floss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_thread; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thread`
- Sources: `caterpillar-kit-components`; `dmc-kit-components`

###### Punched paperboard thread organizer card (`thread_card`)

Receive finished punched organizer cards; card converting is upstream. Weigh cards issued and returned, and disclose board composition, printing and coating. The card is retained as a kit accessory in net contents, not an outer retail box.

- Selected flow: Punched paperboard thread organizer card
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_thread; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thread`
- Sources: `caterpillar-kit-components`

###### Alternating current (`sorting_electricity`)

Applicable only to actual CN grid-average user-side supply below 1 kV. Meter thread measuring/cutting equipment and attributable sorting lighting; disclose manual operations and shared-meter attribution. Do not duplicate the preparation or packing meter.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_sorting_energy; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_energy`

#### Outputs

##### Waste flows

###### Dyed cotton embroidery floss trimmings (`cotton_thread_trimmings`)

Weigh segregated unusable cotton floss ends and rejected floss sent to waste management. Keep recoverable returned floss separate; record recipient, finish and treatment destination without assuming a recycling credit.

- Selected flow: Dyed cotton embroidery floss trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_thread_waste; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thread_waste`


### Process: Component matching, inspection and retail packing (`kitting_packing`)

#### Inputs

##### Product flows

###### Finished steel hand tapestry needle (`tapestry_needle`)

Receive finished steel needles of the SKU specification; disclose alloy, plating and size. Count and weigh a traceable sample to obtain actual net needle mass for issued quantities. No default needle mass or universal coating is specified.

- Selected flow: Finished steel hand tapestry needle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_kitting; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitting`
- Sources: `caterpillar-kit-components`

###### Printed paper cross-stitch instruction sheet (`printed_chart`)

Receive a finished printed paper chart carrying the design and instructions. Printing and paper production are upstream. Weigh issued sheets and record size, substrate, printing and revision; instantiate a separate paper sheet row if instructions are supplied on a second sheet.

- Selected flow: Printed paper cross-stitch instruction sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_kitting; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitting`
- Sources: `caterpillar-kit-components`; `dmc-kit-components`

###### Paper box (`retail_carton`)

Conditional: purchased flat folding paperboard carton matching the verified cut/fold/laminate plant-gate identity. Record actual construction, coating and mass; erect and close mechanically. Plastic sleeves, adhesives, labels and shipping cartons are outside this selected carton configuration and require separate atomic rows if actually used.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_packaging; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Alternating current (`packing_electricity`)

Applicable only to actual CN grid-average user-side supply below 1 kV. Meter kit inspection and packing equipment and attributable lighting; manual assembly requires no assumed motor consumption. Treat all three electricity rows as disjoint measured allocations.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_packing_energy; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing_energy`

#### Outputs

##### Product flows

###### Complete unstitched cotton cross-stitch retail kit (`reference_product_output`)

Accept only kits with matched cut cotton Aida, colour-sorted cotton floss, steel needle, paper chart and declared organizer card configuration. Net contents include these delivered components and exclude outer retail and transport packaging. Record complete-kit count and measured net contents mass; incomplete kits are not accepted output.

- Selected flow: Complete unstitched cotton cross-stitch retail kit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `caterpillar-kit-components`; `dmc-kit-components`

##### Waste flows

###### Packaging waste, cardboard (`carton_waste`)

Conditional: weigh damaged paperboard cartons generated during packing and transferred to waste management, before treatment. This identity does not justify its database example percentage. Record recipient and actual route; keep incoming transport boxes and reusable cartons separately inventoried.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected attributable exchange quantity divided by accepted net contents Q in kg using cp_packaging_waste; no default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging_waste`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared cutting, sorting and packing | First separate SKU lots, metered operations and component issue records. A kit has one combined product output; do not allocate its burden among the components delivered together. | `ghg-product-2011` |
| `allocation_shared_energy` | unavoidable shared utilities | Use a documented causal physical relationship such as measured machine operating time with observed power, before a justified alternative. Do not assume every SKU has identical mass or energy intensity. Disclose driver, denominator, uncertainty and conservation to meter total. | `ghg-product-2011` |
| `allocation_scrap` | offcuts and rejected components | Usable stock returned internally is not a co-product. Classify discarded cotton and packaging by actual recipient and route. If sold as a secondary product, disclose that status and apply a justified subdivision/physical allocation or evidenced alternative consistently; never apply an automatic avoided-production credit. | `ghg-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | kitting_packing | reference_product_output | weighing | SKU; design revision; component checklist; accepted net contents mass Q; accepted complete-kit count; conditioning | Weigh complete contents on calibrated scales after subtracting outer retail packaging tare; reconcile fabric/floss/needle/chart/card contents and acceptance; segregate incomplete kits | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | Q = accepted net contents mass; reference output per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_fabric | fabric_preparation | received_aida | issue_ledger | supplier lot; composition; weave grid; dimensions; finish; humidity; issued/returned mass; measured area mass | Weigh fabric issue/return and cut piece samples; reconcile cutting plan, remaining stock and internal transfer ledger | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_thread | thread_preparation | cotton_floss; thread_card | issue_ledger | floss colour/lot; length; measured mass per length; issued/returned mass; card count and measured mass | Measure lengths and weigh conditioned floss by colour; separately weigh finished organizer cards and returned stock | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_kitting | kitting_packing | tapestry_needle; printed_chart | issue_ledger | needle alloy/coating/size/count/sample mass; printed chart revision/count/mass; rejects; returns | Count incoming finished components, weigh traceable lots/samples and reconcile issued and returned quantities to accepted-kit checklists | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_packaging | kitting_packing | retail_carton | issue_ledger | carton construction/coating; count; measured piece mass; issued/returned mass | Weigh supplied flat cartons and reconcile erected cartons, usable returns and rejects; exclude carton mass from Q | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_cutting_energy | fabric_preparation | cutting_electricity | meter_reading | meter id; start/end; kWh; CN site; user-side voltage; machine and lighting driver; batch attribution | Read disjoint calibrated electricity meters or document causal attribution of a shared total; convert recorded kWh to MJ | MJ | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_sorting_energy | thread_preparation | sorting_electricity | meter_reading | meter id; start/end; kWh; CN site; user-side voltage; machine and lighting driver; batch attribution | Read disjoint calibrated electricity meters or document causal attribution of a shared total; convert recorded kWh to MJ | MJ | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_packing_energy | kitting_packing | packing_electricity | meter_reading | meter id; start/end; kWh; CN site; user-side voltage; machine and lighting driver; batch attribution | Read disjoint calibrated electricity meters or document causal attribution of a shared total; convert recorded kWh to MJ | MJ | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_fabric_waste | fabric_preparation | cotton_fabric_offcuts | waste_weighing | cotton composition/finish; waste mass; moisture; usable returns; recipient; destination | Weigh segregated discarded fabric and reconcile waste transfer tickets with lot balance | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_thread_waste | thread_preparation | cotton_thread_trimmings | waste_weighing | colour/finish; trimmings mass; usable returns; recipient; destination | Weigh discarded cotton thread separately from fabric and match collection manifests | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_packaging_waste | kitting_packing | carton_waste | waste_weighing | carton reject mass; construction; recipient; destination; period | Weigh packing-stage carton rejects; reconcile supplied and returned packaging | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |
| cp_air | fabric_preparation | airborne_particulates | emission_monitoring | actual exhaust location; size fraction; air subcompartment; outlet concentration; gas volume; time; captured dust; detection limit | Use documented site emission measurements after control, concentration times compatible gas volume; distinguish ambient release, captured dust and exposure; absence must be evidenced, not assumed | kg | Each lot or metering/monitoring interval | Declared representative reporting period including normal operation, changeovers and rejects; disclose seasonality | Declared kitting site and single SKU; all in-scope stages | per 1 kg reference flow | Calibration, dated ledger, supplier specification, reconciliation and coverage evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_normalization` | all inventory rows | Divide each attributable exchange total in its declared unit by Q kg accepted net contents; report per 1 kg reference flow. The reference output is 1 kg. Exclude incomplete kits from Q and retain their consumed materials as losses. | batch exchange totals; Q; cp_output | normalized exchange quantities |  |
| `meter_energy` | cutting_electricity; sorting_electricity; packing_electricity | Convert attributable measured electricity kWh to MJ by multiplying by 3.6 before batch normalization; use the verified Units of energy conversion. | kWh meter records; attribution records | MJ |  |
| `sample_mass_conversion` | received_aida; cotton_floss; thread_card; tapestry_needle; printed_chart; retail_carton | When collected by area, length or count, multiply the recorded area, length or count by corresponding measured net mass per area, length or item of that same lot. Weighing remains primary; document sample spread and uncertainty. | area/length/count; traceable measured mass ratios | kg |  |
| `air_mass` | airborne_particulates | Multiply measured released particulate concentration by compatible actual exhaust volume over the covered interval, converting to kg. Do not convert workplace concentration to emission mass without a release-volume model and evidence. | cp_air | released particulate kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | accepted kit | Maintain design-specific BOM, colour lengths and complete component checklist; no quantity, cotton purity, finish, needle alloy or life claim without records. Separate different configurations. | SKU BOM, supplier specification and acceptance records |
| `dq_balance` | all components and utilities | Reconcile issued stock, accepted kit content, returned stock, internal transfer, rejects and waste by component; investigate gaps including dust and defective cards/needles/charts. Set reconciliation tolerance from measurement uncertainty, not a guessed percentage. | Lot ledger, calibration and residual investigation |
| `dq_representativeness` | reporting period and upstream links | Record actual site/time, supplier route and voltage; assess both production and standby/changeover coverage. Unknown data remain missing with uncertainty and replacement plans, never zero by default. | Period log and dataset selection record |
| `dq_identity` | every exchange | Match material, production state, compartment and actual reference property before using a UUID; resolve site-specific chemical or waste identities separately. Database quantities are not factory evidence. | Supplier specification, measurement records and verified flow identity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product_output | Check Q > 0, net-content tare/conditioning and complete accepted-kit configuration; reference output must be exactly 1 kg and use the same name as the reference flow. No extrapolation to completed decoration or all CPC 27140. | `unsd-cpc3-2025`; `caterpillar-kit-components` |
| `validate_completeness` | foreground inventory | Check each actual material, electricity share, loss and ambient release against ledgers. Conditional absence requires evidence. Quantify and add missing chart/card/needle rejects, cleaning, captured dust or packaging components as separate exchanges before claiming complete coverage. Do not sum cotton solid waste and airborne particulate twice. |  |
| `validate_identity_basis` | all UUID-bearing rows | Verify actual CN <1 kV electricity scope and retain Net calorific value/MJ; check waste versus product and air versus captured dust. Known particulate size/subcompartment needs a specific identity. Review every empty UUID explicitly; none implies acceptable publication. |  |
| `validate_allocation` | shared activity attribution | Reconcile allocation shares to measured totals and ensure no component transfers or electricity meters are counted twice. Justify co-product status and sensitivity of alternatives. | `ghg-product-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory dry component-to-kit production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Configured cotton kit supply after applicability, scientific and data-quality review; link each upstream component separately |
| excluded_use | Full CPC 27140 coverage; finished embroidery/furnishing production; consumer use; comparison of designs by mass alone; complete cradle-to-gate assertions with missing upstream data |
| required_metadata | SKU/BOM/revision; all section-3 qualifiers; site/period; manual or powered steps; supplier starting states; Q and accepted count; normalization and allocation; upstream links; waste routes |
| required_quality_disclosure | Meter/sample uncertainty; missing exchanges and identities; conditional flow evidence; upstream completeness; scientific review status and method limits |
| update_trigger | Change in design/BOM, cotton source/finish, supplier state, hoop or accessory configuration, packaging, voltage, processing route or measured loss profile |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.126, 27140 and adjacent categories. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification subset boundary only; no production quantities |
| `caterpillar-kit-components` | handbook | Caterpillar Cross Stitch, Cross Stitch Kits, “What's Inside Every Kit” and hoop FAQ. https://www.caterpillarcrossstitch.com/collections/cross-stitch-kits | Manufacturer finished-component and hoop-free configuration example; product description is not a manufacturing inventory |
| `dmc-kit-components` | handbook | DMC Learning Cross Stitch Kit, SKU BK1986/BE, Kit Content. https://www.dmc.com/GB/en-GB/products/learning-cross-stitch-kit | Cotton fabric/floss example and hoop-inclusive counterexample; no published lengths adopted as recipe defaults |
| `ghg-product-2011` | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p.63, PDF p.65, Tables 9.1/9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical published allocation hierarchy used as methodological guidance only, not current legal obligation or certification; no emission factors |
