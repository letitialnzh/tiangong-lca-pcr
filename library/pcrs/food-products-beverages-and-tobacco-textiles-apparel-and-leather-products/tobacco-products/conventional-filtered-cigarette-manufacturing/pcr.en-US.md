---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.conventional-filtered-cigarette-manufacturing
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Conventional filtered cigarette manufacture from purchased cut tobacco and filter rods

## 1. Scope and Applicability

Applies to an electric-powered forming and packing plant using purchased, already blended/cut/moisture-conditioned tobacco filler and purchased wrapped single-segment cellulose acetate filter rods. Include controlled holding, tobacco dosing and paper rod formation, cutting, filter attachment with tipping paper, inspection, rejection, packing and factory-gate acceptance. This is a manufacturing gate-to-gate PCR, with upstream links required for an expanded study.

Representative product: an unused conventional combustible tobacco cigarette, with tobacco rod, cigarette paper, a single-segment filter and tipping paper; declare the actual brand/SKU configuration without setting a standard piece weight. Exclude cigars, cheroots, cigarillos, non-tobacco substitute cigarettes, unfiltered products, capsule/carbon/tube filters, heated tobacco units, electronic devices/e-liquids, smoking/use and litter disposal. These exclusions are this methodology boundary, not claims that all excluded products lie outside CPC 25020.

On-site cultivation, curing/stemming, primary blending/cutting/drying, expansion, reconstitution/extraction, filter-rod manufacture, printing, combustion heat generation, steam conditioning and on-site wastewater treatment are not covered routes. A plant operating those stages requires an explicitly extended and reviewed process inventory; do not omit them and call an integrated factory covered. No numerical operating temperatures, ingredient proportions, energy intensities, losses, shelf life or health/conformance approval are prescribed. Sources establish qualitative stage/component context only (`unsd-cpc-2025`, `hmrc-cigarette-process`, `pmi-cigarette-process`, `bat-cigarette-components`).


## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.conventional-filtered-cigarette-manufacturing |
| classification_refs | CPC 3.0 25020; narrower route context, no accepted mapping |
| covered_products | Conventional tobacco cigarettes with purchased single-segment acetate filters |
| excluded_products | Cigars/cheroots/cigarillos; substitutes; special filters; unfiltered/heated/electronic products; integrated leaf/rod production |
| representative_product | Declared SKU conventional filtered tobacco cigarette |
| production_route | Purchased ready-to-form cut rag and finished filter rods → electric rod forming/filter joining → inspection/reject handling → packing |
| market_state | Unused accepted cigarettes in declared retail/shipment packaging at factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of an identified unused filtered tobacco cigarette configuration; a production accounting unit, not a health benefit or smoking-service equivalence |
| How much | 1 kg net accepted finished cigarettes, all cigarette components included, packaging excluded |
| How well | Accepted against recorded plant SKU specification for dimensions, tobacco moisture, fill mass, paper/filter identity, joining integrity and packaging integrity; no universal quality thresholds or regulatory approval |
| How long or cycle | One manufacturing and acceptance period; no use duration or shelf-life claim |
| reference_flow_link | reference_product_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished conventional filtered tobacco cigarette |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and site/year; dimensions; tobacco blend and purchased processed state; ingredient declaration; wet-basis moisture; net finished mass including filter/papers/adhesive; filter design and composition; paper grades and joining chemistry; acceptance criteria; net mass/count conversion; packaging component masses; electric-only route; reject/rework fate |

Declare every required qualifier in the foreground package. Product UUID is intentionally absent for this mass reference; a count-based public cigarette flow must retain its Number of items property if later used with a measured conversion.


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured Q kg net accepted finished cigarettes during the collection period, excluding packaging. All rows are per 1 kg reference flow. Q must be positive. |
| piece_to_mass | count-based production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure m kg/piece from representative accepted finished cigarettes of the same SKU, including all cigarette components and stated moisture, with a tared calibrated scale; record sample count n and sample net mass W, m=W/n. When production is recorded as N accepted pieces, Q=N*m. Never invent m or use tobacco fill mass instead. |
| electricity_conversion | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public electricity energy property. For meter E kWh, use 3.6*E MJ, then divide by Q kg. Energy is not mass. |
| water_conversion | purchased water and liquid effluent | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If collected in m3, obtain density rho kg/m3 at recorded temperature/quality and use X=V*rho before X/Q; do not adopt a default density or equate delivered water with extracted resource. |

All kg inventory rows use the verified Mass property and Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; the MJ electricity row uses Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`. Preserve each public reference property and use measured component conversions; a unit group is not a flow amount.


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased prepared cut rag, wrapped finished filter rods, finished paper grades and packaging blanks at plant receipt |
| starting_condition_role | Manufacturing input interface; not raw agricultural material |
| product_classification_scope | Only the conventional-filtered-tobacco-cigarette subset of CPC 3.0 25020 |
| recursive_input_rule | Recovered tobacco from own rejects is an internal transfer; purchased returned cigarettes require separate recovery/upstream history and cannot be treated as burden-free filler |
| upstream_dataset_requirement | Link appropriate agriculture, curing/primary preparation, reconstitution if present, filter manufacture, paper/adhesive/packaging and electricity/water suppliers only when expanding beyond foreground; retain missing links explicitly |
| disclosure | Report incoming moisture/processing, site boundary, transport treatment, storage duration, process exclusions, packaging and unresolved upstream coverage; gate-to-gate is not complete cradle-to-gate |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `manufacturing_boundary` | Include all actual operations within the declared receipt-to-gate route, electricity for support systems and rejection/rework burdens. Keep packing inputs in the numerator while excluding packaging from Q. Do not silently remove an operated stage. | `pmi-cigarette-process` |
| `separate_lifecycle_stages` | Cultivation/curing and purchased primary preparation/filter manufacture belong to supplier links; transport before receipt, delivery after gate, smoking combustion and end-of-life are excluded from this foreground. Add them explicitly to an expanded study; no consumer smoke or butt litter is a manufacturing emission. | `hmrc-cigarette-process`; `bat-cigarette-components` |
| `route_extension` | If a site makes its own cut rag or filters, burns fuel, uses steam/heat, treats/discharges wastewater, prints materials or changes filter/packaging chemistry, extend the inventory with each actual atomic input/output and measured conditions before claiming applicability. Excluded routes are not zero burdens. | `hmrc-cigarette-process` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt` | Receipt and controlled holding | required | Purchased ready-to-form cut rag | foreground production | 1 kg reference flow |
| `making` | Rod forming, filter joining and inspection | required | Conventional single-segment filter cigarette | foreground production | 1 kg reference flow |
| `recovery` | Reject splitting and tobacco return | conditional | On-site separation and reuse is actually operated | foreground production | 1 kg reference flow |
| `packing` | Pack assembly and dispatch acceptance | required | Declared retail and shipment configuration | foreground production | 1 kg reference flow |
| `utilities` | Electric utilities, cleaning and environmental control | required | Electric-only forming/packing plant; water-related rows conditional | foreground production | 1 kg reference flow |

### Process: Receipt and controlled holding (`receipt`)

#### Inputs

##### Product flows

###### Prepared cut tobacco filler (`cut_rag_input`)

Receive already blended, cut and moisture-conditioned tobacco filler. Declare leaf, stem and reconstituted-tobacco fractions and all supplier-added ingredients and moisture; do not infer an additive recipe. Measure actual net withdrawals after stock reconciliation.

- Selected flow: Prepared cut tobacco filler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources: `hmrc-cigarette-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Rod forming, filter joining and inspection (`making`)

#### Inputs

##### Product flows

###### Cigarette Paper (`cigarette_paper`)

Paper enclosing the tobacco rod. Record width, basis weight, porosity, coating and supplier grade; weigh reel consumption less returns. This identity is not tipping paper.

- Selected flow: Cigarette Paper `ae3a445e-c064-4cba-abd3-cfeab698f8ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_making`
- Sources: `bat-cigarette-components`

###### Wrapped cellulose acetate cigarette filter rod (`filter_rods`)

Purchased finished single-segment filter rods, including plug wrap and plasticizer. Declare net rod mass, dimensions and composition. Tow manufacture and filter-rod production are upstream; tow alone is not an equivalent input. Exclude capsules, activated carbon and tube-filter designs.

- Selected flow: Wrapped cellulose acetate cigarette filter rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_making`
- Sources: `bat-cigarette-components`

###### Printed cigarette tipping paper (`tipping_paper`)

Purchased tipping paper joins the tobacco rod and filter. Specify coatings, printing and perforation state. Purchased preprinted paper includes upstream printing; on-site printing is outside this route.

- Selected flow: Printed cigarette tipping paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_making`
- Sources: `pmi-cigarette-process`

###### Glue (Polyvinyl Acetate, PVA) (`making_pvac_glue`)

Applicable only where the measured seam or tipping adhesive is PVAc-based glue. Record delivered wet mass and measured/supplier solids fraction; do not use neat PVAc resin as wet glue or infer universal adhesive chemistry. Other adhesives require a separately identified atomic row.

- Selected flow: Glue (Polyvinyl Acetate, PVA) `e0d87fbd-b6d2-4e8d-a923-268e54f981ea`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_making`
- Sources: `pmi-cigarette-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected tobacco dust (`tobacco_dust_waste`)

Collected dry tobacco dust crossing the plant boundary for documented treatment or external reconstitution. Keep it separate from airborne particles, recovered tobacco and wet mass moisture corrections.

- Selected flow: Collected tobacco dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_making`
- Sources: `hmrc-cigarette-process`

###### Rejected assembled filter cigarette (`unrecovered_reject_cigarette`)

Only intact rejected cigarettes leaving for treatment without on-site splitting. One assembled waste article; disclose tobacco, paper and filter fractions and destination. Do not also count its constituents as separate outgoing waste.

- Selected flow: Rejected assembled filter cigarette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_making`
- Sources: `hmrc-cigarette-process`

##### Elementary flows

###### Particulate matter, particle size unspecified (`dust_air`)

Conditional actual residual release after extraction/control, to air, unspecified subcompartment and unspecified size. Measure concentration and exhaust volume plus separately assessed fugitive releases; captured tobacco dust is not this exchange. No emission factor is prescribed and presence is not assumed. If size or compartment is established, use the corresponding verified identity instead.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `hmrc-cigarette-process`

### Process: Reject splitting and tobacco return (`recovery`)

Rejects sent to this internal process and usable rag returned to making are balancing transfers, not external exchanges. Retain gross transfers, separation yields and electricity in the process records; only outgoing unusable fractions cross the reported foreground boundary.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Unusable recovered cut tobacco (`recovery_tobacco_waste`)

Weigh tobacco separated from rejected cigarettes but unsuitable for internal return. Record moisture and external fate. Suitable returned rag stays in the internal loop and is not a fresh input or credited co-product.

- Selected flow: Unusable recovered cut tobacco
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `hmrc-cigarette-process`

###### Rejected wrapped cellulose acetate filter segment (`recovery_filter_waste`)

One separated filter assembly with declared plug wrap and plasticizer content, not neat acetate tow. Collect its actual mass and treatment destination.

- Selected flow: Rejected wrapped cellulose acetate filter segment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `hmrc-cigarette-process`

###### Tobacco-contaminated cigarette wrapping paper (`recovery_paper_waste`)

Paper fraction separated from rejected cigarettes. Declare adhesive/tobacco contamination, measured mass and fate; ordinary clean recycled paper identity is not assumed.

- Selected flow: Tobacco-contaminated cigarette wrapping paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `hmrc-cigarette-process`

##### Elementary flows

### Process: Pack assembly and dispatch acceptance (`packing`)

#### Inputs

##### Product flows

###### Paper box (`carton_input`)

Purchased printed folding carton supplied flat; record coatings, grammage, count per pack and net mass. Supplier cutting/printing/laminating are upstream. Define any liner separately rather than treating it as carton mass.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

###### Aluminum foil (`foil_input`)

Conditional only for unlaminated aluminium inner wrap consistent with this identity. Record thickness and alloy. A paper/foil laminate requires one separately identified laminate product row, not this neat-foil identity or an invented composition.

- Selected flow: Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

###### Biaxially oriented polypropylene overwrap film (`overwrap_input`)

Conditional for the declared BOPP-film configuration; measure actual reel use, thickness and coating. Other polymers or multilayers require separate identities and composition disclosure; no universal packaging film is assumed.

- Selected flow: Biaxially oriented polypropylene overwrap film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

###### Corrugated fibreboard shipping case (`shipping_case_input`)

For actual case-packed delivery. Record case grade, recycled content, count and net mass without imposing a recycled-fibre ratio from an unrelated flow. Reusable pallets and tape, if consumed or allocated to this output, require their own atomic rows.

- Selected flow: Corrugated fibreboard shipping case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

###### Glue (Polyvinyl Acetate, PVA) (`packing_pvac_glue`)

Conditional only for PVAc-based carton glue actually applied at this plant. Record wet mass and solids, separate from making adhesive; a different hot-melt chemistry is a different flow.

- Selected flow: Glue (Polyvinyl Acetate, PVA) `e0d87fbd-b6d2-4e8d-a923-268e54f981ea`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished conventional filtered tobacco cigarette (`reference_product_output`)

Accepted unused cigarettes at factory gate, net mass including tobacco, cigarette paper, filter assembly, tipping and retained adhesive, excluding all retail and shipping packaging. The quantity is exactly 1 kg on this net as-delivered moisture basis, not 1 kg tobacco filler.

- Selected flow: Finished conventional filtered tobacco cigarette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `bat-cigarette-components`

##### Waste flows

###### Packaging waste, cardboard (`cardboard_waste`)

Actual damaged carton/case and trim mass sent off site. Identity only: no loss percentage from the flow comment is adopted. Exclude foil, plastic and rejected cigarettes from this row.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

###### Aluminium foil packaging offcut (`foil_waste`)

Conditional for actual unlaminated foil offcuts. Weigh separately and record contamination and recycling/treatment fate; do not credit an assumed recycling rate.

- Selected flow: Aluminium foil packaging offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

###### Biaxially oriented polypropylene film offcut (`film_waste`)

Conditional where the BOPP input applies and scrap leaves the plant. Keep actual film offcuts separate from mixed plastic waste and recycled granules.

- Selected flow: Biaxially oriented polypropylene film offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources: `pmi-cigarette-process`

##### Elementary flows

### Process: Electric utilities, cleaning and environmental control (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`plant_electricity`)

Meter electricity for receipt, rod forming, filter joining, rejection, recovery, packing, air compression, extraction and environmental control. Keep process/submeter splits; do not add them to a total that already includes them. This point-of-use identity leaves provider and voltage unspecified; attach actual electricity supply datasets separately.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q MJ/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `pmi-cigarette-process`

###### Process Water (`cleaning_water`)

Conditional purchased treated water for actual cleaning or humidification. Record each use separately. Use measured density at stated temperature for volumetric meter conversion; this is a technosphere supply, not freshwater extraction.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Untreated tobacco-plant cleaning wastewater (`cleaning_wastewater`)

Conditional wastewater handed to external treatment before discharge. Measure liquid mass or volume and density, solids and measured pollutant composition. Do not represent it as water emitted to nature. On-site wastewater treatment/discharge needs an extended process inventory with separately measured pollutant rows.

- Selected flow: Untreated tobacco-plant cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

##### Elementary flows

###### water vapour (`water_vapour_air`)

Conditional measured or closed-balance evaporation to air, unspecified subcompartment, from humidification/cleaning. Separate retained product moisture, liquid effluent and captured condensate; do not infer evaporation from purchased water alone. This is not a water-resource input or combustion-emission claim.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect X for this exact exchange over the same period as Q; calculate X/Q kg/kg; conditional rows only when present, otherwise retain evidence of absence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `internal_rework` | Own reject splitting and returned rag receive no avoided-product credit or second upstream tobacco burden; retain the extra electricity, handling and unrecoverable losses on the accepted output. Recovered material crossing the site boundary requires explicit mass/fate records. | `hmrc-cigarette-process` |
| `shared_resource_assignment` | First subdivide by SKU/line/time using direct meters and job records. When subdivision is infeasible, use documented physical drivers: operating time with measured load for electric equipment, actual withdrawals for ingredients/packaging and measured exhaust for emissions. Disclose the driver and reconciliation to site totals; do not allocate by cigarette count across unequal configurations without net-mass/configuration correction. |  |
| `external_residue` | Outgoing tobacco scrap and packaging scrap are waste or separately documented recovered products according to actual fate, not automatically revenue co-products. Retain waste-treatment links and disclose cut-off conventions. If a marketable co-product exists, document separate output mass, quality and economic/physical relationship and review allocation; no default recycling or displacement credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt` | `receipt` | cut_rag_input | lot and stock record | lot; blend components; purchased processing state; incoming/closing stock; gross withdrawals/returns; tobacco moisture | Calibrated net weighing, supplier specifications and period stock reconciliation | kg | each lot and period close | Same declared representative period as Q; include start-up, changeover, rejects and normal downtime; disclose seasonality and missing intervals | supplier/receipt lots | per 1 kg reference flow | Calibration, raw logs, supplier/SKU specifications, reconciliation, sampling/detection evidence and uncertainty |
| `cp_making` | `making` | paper/filter/tipping/glue/rejects | production and material balance | SKU; paper reel masses; filter rod count/mass; tipping use; glue wet mass/solids; reject routing; dust collected; internal transfer | Reconcile line issues, unused returns, reel weighing, filter sampling and separated reject weighing | kg | batch/shift | Same declared representative period as Q; include start-up, changeover, rejects and normal downtime; disclose seasonality and missing intervals | forming/filter-joining line | per 1 kg reference flow | Calibration, raw logs, supplier/SKU specifications, reconciliation, sampling/detection evidence and uncertainty |
| `cp_recovery` | `recovery` | internal tobacco return and unusable fractions | separation balance | reject mass received; returned rag; unusable tobacco; filter segment; separated paper; moisture; downtime | Weigh separation outputs separately, reconcile internal return with making logs and record handling energy | kg | each recovery run | Same declared representative period as Q; include start-up, changeover, rejects and normal downtime; disclose seasonality and missing intervals | actual recovery line only | per 1 kg reference flow | Calibration, raw logs, supplier/SKU specifications, reconciliation, sampling/detection evidence and uncertainty |
| `cp_packing` | `packing` | accepted net product and packaging | acceptance/packing record | SKU; N; sample n; sample net W; m; Q; moisture; acceptance/reject count; carton/foil/film/case/glue issues and returns; component scrap | Count accepted pieces and sample unwrapped intact cigarettes with calibrated tared scale; weigh each packaging issue/return and scrap separately | kg | SKU batch and shipment; resample after specification/moisture change | Same declared representative period as Q; include start-up, changeover, rejects and normal downtime; disclose seasonality and missing intervals | packing and factory-gate acceptance | per 1 kg reference flow | Calibration, raw logs, supplier/SKU specifications, reconciliation, sampling/detection evidence and uncertainty |
| `cp_utilities` | `utilities` | electricity/water/effluent/evaporation | meter and water balance | E kWh by operation; meter boundaries; allocated loads; water V and rho; effluent V and rho; moisture stocks; condensate; ventilation; temperature | Submeter electric loads; meter actual water/effluent and measure density; close water balance with product moisture and retained condensate, retaining uncertainty | MJ; kg | shift meters and period reconciliation | Same declared representative period as Q; include start-up, changeover, rejects and normal downtime; disclose seasonality and missing intervals | declared electric-only manufacturing boundary | per 1 kg reference flow | Calibration, raw logs, supplier/SKU specifications, reconciliation, sampling/detection evidence and uncertainty |
| `cp_air` | `making` | residual particulate to air | release monitoring | outlet concentration c mg/m3; exhaust volume V m3; time; gas basis; controls; detection limits; fugitive estimate basis | Use representative release tests with paired concentration/volume under compatible dry/wet and temperature conditions; distinguish pre-control capture and residual release | kg | representative production/control states and changes | Same declared representative period as Q; include start-up, changeover, rejects and normal downtime; disclose seasonality and missing intervals | actual air releases at manufacturing outlets | per 1 kg reference flow | Calibration, raw logs, supplier/SKU specifications, reconciliation, sampling/detection evidence and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_product | cp_packing and reference product | m=W/n kg/piece; Q=sum(N_j*m_j) kg for accepted SKU batches j. Use direct net weighing where available and reconcile count conversion. Do not use a nominal tobacco-fill weight. | N; n; W; m | Q kg, excluding packaging |  |
| normalization | all exchange rows and collection protocols | q_i=X_i/Q per 1 kg reference flow; no normalization by gross production including rejects. Q>0 and X_i must cover the same output period. | X_i; Q | kg/kg or MJ/kg as appropriate |  |
| electricity_mj | plant_electricity; cp_utilities | X_E=3.6*E kWh in MJ; q_E=X_E/Q. Reconcile allocated operation totals to the plant meter without duplicating compressor/HVAC/extraction. | E; Q | MJ/kg |  |
| materials_conversion | cp_making and cp_packing | Convert filter/carton counts using measured net component kg/item; convert paper/film area with actual batch grammage kg/m2. For wet glue use measured wet mass, with solids and water separately disclosed; do not replace delivered mass with dry polymer mass. | count; net sample mass; area; batch grammage; solids | X_i kg then X_i/Q |  |
| water_balance | cp_utilities; water_vapour_air | Liquid X=V*rho. Evaporation = actual water entering the boundary plus incoming moisture minus outgoing liquid water, outgoing product/waste moisture and measured net water-stock increase; include condensate transfers consistently. Report residual and uncertainty; negative or unexplained residual is review, not an emission. | V; rho; moisture; water stocks; condensate | kg evaporated water and uncertainty then /Q |  |
| air_monitoring | dust_air; cp_air | X_PM=sum(c_k*V_k)*10^-6 kg for paired mg/m3 and m3 observations; add only separately justified non-overlapping fugitive mass. Normalize X_PM/Q. No smoke-toxicant or default PM factor. | c_k; V_k; fugitive mass; Q | kg/kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| sku_composition | input/reference identity | Retain brand/SKU composition, moisture, filter/paper/adhesive and packaging state; disclose supplier ingredients already included in purchased rag and avoid counting them twice. | Supplier specification and accepted-product sample records |
| complete_period | all processes | Cover actual operation modes, rework and rejects, stock change and site utilities; quantify missing records and attribution uncertainty. No unmeasured flow is silently zero. | Meter/stock reconciliation and collection completeness statement |
| mass_and_water_closure | tobacco/filter/paper/packaging/cleaning | Reconcile separate material streams and moisture; reject discrepancies exceeding measured instrument/sampling uncertainty for investigation without inventing a universal tolerance. | Mass balances, calibrated weights, uncertainty and moisture tests |
| no_default_ranges | amounts and release monitoring | Collect recipes, energy, temperature if relevant, yields, losses and net output from the actual plant. No boundary-compatible empirical ranges established here; do not treat descriptive sources or UUID comments as numerical benchmarks. | Raw factory evidence; unresolved range needs retained in manifest |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `reference_and_measurement` | Require the stated qualifiers, Q>0, same-period exchange numerator and denominator, complete-component net mass and packaging exclusion. Count-based records must carry measured m=W/n and Q=N*m; no invented piece weight. |  |
| `route_and_inventory` | Check purchased input state and all actual process stages against this narrow route; validate individual atomic identities and public reference property/unit chain. Unresolved UUIDs remain explicit gaps, not approved substitutions. Confirm optional rows present/absent from evidence. | `hmrc-cigarette-process` |
| `rework_balance` | Reconcile accepted output, rejects, internal rag return, outgoing tobacco/paper/filter waste and moisture. Prevent duplicate accounting of whole rejected cigarettes and separately counted constituent fractions. | `hmrc-cigarette-process` |
| `release_and_completeness` | Validate particulate monitoring gas basis and control boundary; water vapour is only justified evaporation to air. Wastewater to external treatment is technosphere waste, never a freshwater-resource input or unmeasured elementary discharge. State performed, skipped and unresolved checks and characterization coverage; missing evidence is inconclusive. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/SKU-specific foreground manufacturing process dataset |
| downstream_use | secondary_dataset; background_dataset only with disclosed gate-to-gate scope and verified links |
| allowed_use | Declared electric forming/packing route inventory per kg net accepted cigarette; expanded studies with explicit upstream/downstream linking |
| excluded_use | Whole-CPC coverage, integrated leaf processing/filter manufacture, full cradle-to-gate claim without linked evidence, health/risk reduction or regulatory conformance endorsement, cross-SKU smoking-service comparison |
| required_metadata | PCR version; SKU; site/geography/year; input state; tobacco/ingredient/filter/paper composition and moisture; Q/count conversion; process map; packaging; meters; allocation; internal loops; waste fate; upstream links |
| required_quality_disclosure | UUID gaps, scientific review status, missing/range evidence, collection coverage, uncertainty, material/water closure, skipped emission checks and LCIA characterization limitations |
| update_trigger | SKU/material/filter/adhesive/packaging change; boundary or utility route change; new supplier evidence; revised public identity; new measured loss or release data |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD. CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed/PDF page 116, division 25 and code 25020. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; narrower route is an explicit methodology choice, not CPC-wide acceptance |
| hmrc-cigarette-process | official_guidance | HMRC. Tobacco Products Duty, TPD6130 Manufacture: The Cigarette Manufacturing Process (text version), Primary/Secondary Stage and Additional notes; manual updated 18 December 2025. https://www.gov.uk/hmrc-internal-manuals/tobacco-products-duty/tpd6130 | Qualitative rag-to-making/packing interface and reject return/offal fate; UK duty-accounting description, not a universal process or factor |
| pmi-cigarette-process | extension_guidance | Philip Morris International. How cigarettes are made, undated manufacturer webpage, Manufacturing cigarettes and Preparing the final pack. https://www.pmi.com/faq-section/smoking-and-cigarettes/how-cigarettes-are-made | Rod/filter/tipping and pack assembly context only; self-description does not establish universal recipes, energy or quality approval |
| bat-cigarette-components | extension_guidance | British American Tobacco. Tobacco, undated manufacturer webpage, How cigarettes work. https://www.bat.com/brands-and-innovation/product-categories/tobacco | Conventional components and distinction from special filters; descriptive context, not an endorsement or measured amount source |
