---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-coated-with-kaolin-or-with-other-inorganic-substances
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Off-machine aqueous mineral-pigment coating of purchased woodfree paper

## 1. Scope and Applicability

This method covers unprinted woodfree paper made by off-machine aqueous inorganic-pigment coating of purchased, dry, uncoated chemical-wood-pulp printing base paper. The actual product has one coated face (C1S) or two (C2S), each with its recorded layer sequence, GCC and/or coating-grade kaolin pigment and supplier-confirmed carboxylated styrene-butadiene latex binder. Oxidized starch and the individually identified auxiliaries below are included only when actually used. One-face and two-face routes share the same identity; they do not share an assumed coat weight or energy demand. Sources: `jrc-paper-bref-2015`, `upm-face-papers`, `valmet-electric-coating-drying`.

The selected foreground route is receipt/unwinding, coating kitchen and screening, actual coating application and recirculation, electrically heated hot-air drying, optional unheated/cold calendering, reeling/slitting or sheeting, acceptance and dispatch. Electrical starch cooking is conditional. Dilute equipment wash effluent and concentrated colour rejects are collected separately for actual offsite treatment/recovery; there is no onsite wastewater treatment, combustion, steam supply or heat export in this route. Confirm the actual equipment and treatment contracts before applying the method. The cited equipment source demonstrates electric air-drying capability, not a particular mill installation or a universally emission-free product.

Exclude paperboard, corrugated/composite multi-sheet constructions, integrated pulp/base-paper manufacture, mechanical-fibre and recovered-fibre base-paper grades, already pigment-coated starting stock, impregnation/latex saturation, polymer-film laminating, barrier/release/thermal coats, printed or varnished finished articles, and gas/steam-heated dryers or heated calenders. These need their own applicability decision and complete additional methodology. Purchased substrate manufacture remains an upstream burden. No plant formulation, universal water fraction, efficiency, coat mass, loss or emission factor is supplied by this PCR; actual recipes and quantities come from the protocols below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-coated-with-kaolin-or-with-other-inorganic-substances |
| classification_refs | CPC 3.0 32143; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted C1S/C2S woodfree paper with actual aqueous GCC/kaolin carboxylated-SB pigment coating, electric hot-air drying and any actual cold calendering |
| excluded_products | Board; integrated pulping/papermaking; mechanical/recovered-fibre substrate; incompatible coating, impregnation, lamination, printing, combustion/steam heating and heated calender routes |
| representative_product | Unprinted mineral-coated printing/label-face reel or sheet; a declared product grade, not a universal commercial recipe |
| production_route | Purchased dry uncoated woodfree base paper -> actual off-machine coating -> electric air drying -> optional cold calendering -> slitting/reeling/sheeting and dispatch |
| market_state | Accepted paper at actual delivery moisture, without adhesive label conversion; net mass excludes core/wrapper/film |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unprinted mineral-coated paper substrate for the declared downstream printing/converting use |
| How much | 1 kg accepted net paper at actual gate moisture |
| How well | Meet declared grade specification for grammage, thickness, coating sides/layers, surface finish, opacity/brightness, printability and moisture; no functional equivalence across grades is presumed |
| How long or cycle | One production-to-plant-gate delivery; no service life or number of prints assumed |
| reference_flow_link | `product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual uncoated chemical-wood-pulp base-paper grade/furnish/fillers/sizing, supplier and water fraction; C1S/C2S and actual layer order per face; actual pigment mineral/ground versus precipitated route and grade; binder carboxylation and complete wet recipe/solid fractions; delivered grammage and thickness; net paper moisture on wet basis; electric hot-air dryer and actual cold-calender setting/bypass; reel/sheet state and packaging ledger; site/period; effluent recipients and upstream dataset boundaries |

The broad reference UUID supports this mineral-coated physical subset, subject to these qualifiers; it does not prove recipe, route or a matching background process. Missing required qualifiers make the data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference amount is 1 kg net accepted paper including retained coating and actual water, excluding transport packaging. Collect accepted paper mass P using cp_output. Every inventory quantity and protocol aggregate is per 1 kg reference flow. |
| moisture_recipe | base_paper; product; recipe and wastes | Mass | kg | Use wet-basis water fraction w = water mass / whole wet mass. Dry matter = wet mass * (1-w). Keep base fibre/filler/sizing, coating solids and water distinct. An oven-loss result needs a paper/coating-appropriate validated method and correction for non-water volatiles; do not transplant a wood assay. |
| formulation_basis | gcc; kaolin; latex; starch; dispersant; lubricant; alkali; defoamer; coating_colour | Mass | kg | Declare whole delivered formulation versus isolated active/component basis and supplier reference quantity. Wet latex/dispersions are not dry polymer or mineral mass. Record each actual constituent, active fraction and carrier; never count complete upstream colour and the same included ingredients again. |
| water_conversion | water; effluent | Mass | kg | Convert measured liquid volume by measured actual density at its sampling state. Effluent density is not pure-water density. Composition water fraction remains separate from the whole effluent mass. |
| electricity_units | electricity | Net calorific value | MJ | Native electricity reference property is Net calorific value; convert metered kWh using 3.6 MJ/kWh. This is an energy-unit conversion, not a heating-value or dryer-efficiency assumption. Verify 1-35 kV supply/provider scope. |
| coating_area | product; recipe | Mass | kg | Measure substrate area A and retained dry coat weight c_s,l for each actual face/layer. Retained coat solids = A * sum(c_s,l) / 1000 when A is m2 and c_s,l is g/m2. Never automatically double a C1S coating quantity to obtain C2S. |
| air_bins | pm25; pm25_10; pm10plus; styrene | Mass | kg | Keep mutually exclusive particle bins, measured outdoor receiving medium and specified chemical mass definitions. Total VOC/as-carbon is not styrene mass. Quantities, controls and uncertainty require cp_air; no default positive releases. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dry uncoated woodfree base paper, actual ingredients or complete colour, metered electricity/tap water and individually identified ancillary materials received at the coating site |
| starting_condition_role | Foreground gate-to-gate off-machine coating and finishing; upstream substrate and input production are represented by compatible background datasets |
| product_classification_scope | Physical C1S/C2S mineral-coated paper subset of CPC 3.0 32143, not the full paper-and-board leaf |
| recursive_input_rule | Internal colour recirculation and paper rework are internal links recorded at equal physical amounts on both ends. Purchased externally coated paper is not allowed as the base-paper input; external compatible uncoated paper is a measured input with its own upstream burden |
| upstream_dataset_requirement | Match actual substrate furnish/sizing/moisture, pigment processing and formulation, binder/additives, utility geography/voltage/quantity basis, packaging and each actual waste treatment. Include actual supplier-to-coating-site transport upstream for each material using measured mass, distance, mode and load; a supplier plant-gate dataset does not automatically include delivery. A physical UUID alone does not establish compatible production data |
| disclosure | Site/period, product/campaign mix, supplier boundaries, actual layers and formulation ledger, coating application, electric drying, cold calender/bypass, separately collected waste recipients, meter scope, stock changes, internal recovery, exclusions and unresolved provider substitutions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | coating | Include receipt/unwinding, actual kitchen/screening, every coating pass, electric hot-air drying, optional cold calendering, cutting/reeling/sheeting, packing, dust extraction, cleaning, rejects and directly supporting electrical operations. | jrc-paper-bref-2015; valmet-electric-coating-drying |
| boundary_upstream | purchased inputs | Retain all supplier production burdens once. Do not enter upstream wood/pulp/base-paper ingredients again as onsite inputs; verify the supplier base-paper specification and boundary. | jrc-paper-bref-2015 |
| boundary_formulation | coating_colour and ingredient rows | For each supplied colour lot choose one complete formulation background or one documented component reconstruction. Record its recipe for material/water/carbon balance in both cases. Include only additionally purchased onsite adjustments alongside a complete formulation background. | jrc-paper-bref-2015 |
| boundary_effluent | effluent; coating_reject | Keep concentrated colour/filter rejects separate from dilute washes and attach actual external treatment. Do not report the whole external wastewater simultaneously as an elementary water/pollutant discharge from this foreground site. Any direct discharge or onsite treatment invalidates this route selection until fully modelled. | jrc-paper-bref-2015 |
| boundary_real_route | drying and finishing | Apply only to confirmed electric air drying and actual cold calendering/bypass; do not omit a real steam cylinder, boiler, heated roll or supplementary fuel. A changed route needs explicit additional input/output and emissions methodology before use. | jrc-paper-bref-2015; valmet-electric-coating-drying |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coating | Purchased base paper coating, electric drying and delivery | required | Declared physical/equipment route matches | Single aggregate foreground unit, with independently metered stage records and equal internal links | 1 kg reference flow |

Physical stage map: base-paper receipt/unwinding -> kitchen/screened colour and actual coating passes -> electric hot-air dryer -> actual cold calender or bypass -> dry slitting/reeling/sheeting -> acceptance/packing. Colour recirculation, recovered colour and same-paper rework remain internal measured loops. This aggregate avoids a second intermediate output using the final reference UUID; it preserves all stage measurements. Ancillary packaging leaves in its own physical rows. Rejects, captured dust, net outdoor emissions and external washes are measured at their actual exit points. All row quantities below are normalized to the same accepted paper mass; a row condition is not a zero-emission assumption.

### Process: Purchased-paper coating and delivery (`coating`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`base_paper`)

Purchased unprinted, unimpregnated chemical-wood-pulp paper of the actual supplier grade. Measure as-received net paper mass and moisture; verify coating suitability, fibre/filler/sizing composition and supplier boundary. Paperboard, mechanical-fibre grades and integrated wet-web supply are excluded.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-paper-bref-2015`

###### Calcium carbonate (`gcc`)

Conditional separate procurement: actual fine-ground CaCO3 pigment, with measured purity, particle distribution and delivered water fraction. The broad identity has no CAS or grinding specification and a calcareous-stone classification; provider compatibility requires supplier confirmation, not a generic limestone dataset. A wet slurry is not one kg dry CaCO3.

- Selected flow: Calcium carbonate `dfce1026-0ad5-4362-87de-4b425a583e6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Paper-coating grade kaolin pigment (`kaolin`)

Conditional separate kaolin procurement. Record hydrous/calcined state, grade, mineral purity, particle size and water fraction. Mine-site and other-product hits do not establish a processed coating pigment identity.

- Selected flow: Paper-coating grade kaolin pigment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Aqueous carboxylated styrene-butadiene latex (`latex`)

Conditional separately purchased binder formulation: supplier-confirmed carboxylated SB latex with actual solids, water, residual monomers and auxiliaries. Record whole emulsion mass for a matching formulation dataset. The broad two-monomer styrene/butadiene polymer row does not establish this carboxylated aqueous formulation or its concentration.

- Selected flow: Aqueous carboxylated styrene-butadiene latex
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Oxidized starch (`starch`)

Conditional separately added oxidized starch in the actual colour recipe. The native comment specifies starch oxidized with sodium hypochlorite under good manufacturing practice; actual material/oxidation route, grade and delivered water must match before using this locator. Its food-use context does not establish a paper-grade background or dosage. Other oxidation routes need another verified identity. Meter actual electric cooking and fresh water; do not infer dosage from literature examples or repeat upstream base-paper sizing.

- Selected flow: Oxidized starch `539d5015-900f-4778-89d1-499f7855edf9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Sodium polyacrylate dispersant (`dispersant`)

Only if the actual recipe separately uses polymeric sodium polyacrylate. The native Sodium carboxylate family has no CAS or molecular-mass/form specification; its generic salt definition conditionally includes the actual polymeric sodium carboxylate, not proof of an exact polymer or supplier formulation. Supplier SDS/CoA must establish actual CAS, polymer structure, molecular-mass distribution, neutralization, grade, additives, water/active fraction and supplied physical state. Match the native mass reference and provider boundary to the actual isolated salt or complete supplied formulation; never substitute a small-molecule salt, monomer or polyacrylic acid background, or count a whole solution as dry polymer. In component reconstruction, carrier/auxiliary inputs need separate actual rows and quantities; in a matching whole-formulation background count included constituents only as composition observations.

- Selected flow: Sodium polyacrylate dispersant `d1456413-4931-406b-95a1-c2c3193f38fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Calcium stearate coating lubricant (`lubricant`)

Only if separately added. Identify calcium stearate, grade, actual dispersion composition and active fraction. Neither sodium carboxylate nor calcium phosphate matches. Whole purchased dispersions require formulation-specific background; an active-only reconstruction includes carrier and auxiliaries once.

- Selected flow: Calcium stearate coating lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Sodium hydroxide (`alkali`)

Conditional actual solid industrial-grade procurement only; direct name specifies purity 95%-98%. Require the actual grade to meet that restriction, measure water/impurities and dissolution water. It is not an arbitrary caustic solution or pure active-NaOH mass. Other concentration/form requires its own verified identity.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Organic Silicone (`defoamer`)

Only separately procured primary PDMS fluid or a verified component reconstruction: the source is a broad primary polysiloxane family. Require supplier-confirmed PDMS species, primary route and pure-polymer quantity/provider basis. It does not identify a complete aqueous defoamer emulsion. Additional surfactant/carrier constituents need their own atomic rows if present.

- Selected flow: Organic Silicone `4af74934-ef9f-40c1-9de6-e6223ca0b4fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Purchased aqueous GCC/kaolin carboxylated-SB coating colour (`coating_colour`)

Alternative to reconstructing the components of that purchased lot: this is one complete supplied liquid formulation exchange, not a selector or the finished coated paper. Native Product Coating explicitly includes materials applied as liquids, without a hard material or supply route; it conditionally locates this actual aqueous mineral-pigment/carboxylated-SB colour, not an exact recipe. Confirm actual liquid phase, full pigment/binder/auxiliary/water composition, supplier boundary, lot assays and native whole-wet mass reference. Use measured whole wet mass only with a compatible complete upstream formulation dataset; an already applied dry layer or a generic paint background is not automatically compatible. All already included constituents are composition observations, not repeated inventory inputs. Separately purchased adjustments remain separate inputs. Background formulation and quantity compatibility remain pending until demonstrated.

- Selected flow: Purchased aqueous GCC/kaolin carboxylated-SB coating colour `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `jrc-paper-bref-2015`

###### Alternating current (`electricity`)

One net imported electricity exchange; retain separate kitchen/cooker, coater, electric hot-air heater/fans, cold calender, slitter, extraction and packing meter records. Native identity requires 1-35 kV grid-average supply to user and its raw geography is CN. Confirm actual voltage, supplier region, reporting year, consumption mix and loss boundary; identifying physical alternating current does not establish a global or automatically matching background. Require a compatible actual supply dataset and native quantity basis; incompatible supply needs its own verified identity/provider decision. Native property is Net calorific value, MJ: metered kWh converts by 3.6 MJ/kWh without assigning fuel heating value.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`; `valmet-electric-coating-drying`

###### Tap water (`water`)

Fresh imported treated tap water for preparation and cleaning only, measured separately from water already in purchased emulsions/slurries. The reference property is Mass/kg; volumetric meters require actual density at measured state. Confirm source treatment and supplier boundary; internal recirculation is not a fresh import.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`

###### Uncoated printing, writing and packaging paper (`wrapper`)

Conditional purchased uncoated paper wrapper of verified compatible grade; no plastic-laminated, impregnated or bag-converted material is represented by this row. Record moisture, supplier and actual mass; distinguish from the base-paper web.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`

###### Polyethylene film (`film`)

Conditional actual polyethylene film, CAS9002-88-4, excluding PET and multilayer laminates. Its name/CAS/comment support film but source classification points to bags/luggage; disclose that defect and verify polymer, additives, thickness and supplier. Do not borrow source quantities.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`

###### Cardboard tube or Paper core (`core`)

Conditional paperboard tube/core procurement. Verify actual construction, adhesives, moisture, dimensions and supplier. Weigh full physical cores and keep return/reuse stock records; an environmental reuse factor does not shrink physical mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`

###### Steel paper-coating doctor blade (`blade`)

Conditional actual steel coater blade replacement. Record alloy, any hard surface treatment, dimensions, mass, purchased replacements and service interval. A steel saw blade or machinery component is not a paper-coating blade. Other actual knives, roll covers, lubricant oils or cleaning agents require separately specified rows and verified quantities.

- Selected flow: Steel paper-coating doctor blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-paper-bref-2015`

#### Outputs

##### Product flows

###### coated printing, writing and packaging paper (`product`)

One finished reference product after coating, drying, any actual cold calendering, reeling/cutting and acceptance. It is unprinted, not laminated/impregnated, and contains the actual retained coating plus water. The broad record also describes varnish examples but has no mandatory varnish/printing route; use only this physically delimited mineral-coated subset with supplier/product evidence.

- Selected flow: Finished unprinted aqueous mineral-coated woodfree paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `jrc-paper-bref-2015`

###### Uncoated printing, writing and packaging paper (`wrapper_shipped`)

Ancillary packaging physically shipped with the reference paper; record full delivered mass separately. It is excluded from net paper mass and is not a saleable co-product for allocation. Retain returns, stock changes and separate discards in the dispatch ledger.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`

###### Polyethylene film (`film_shipped`)

Ancillary packaging physically shipped with the reference paper; record full delivered mass separately. It is excluded from net paper mass and is not a saleable co-product for allocation. Retain returns, stock changes and separate discards in the dispatch ledger.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`

###### Cardboard tube or Paper core (`core_shipped`)

Ancillary packaging physically shipped with the reference paper; record full delivered mass separately. It is excluded from net paper mass and is not a saleable co-product for allocation. Retain returns, stock changes and separate discards in the dispatch ledger.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`

##### Waste flows

###### waste paper (unspecified) (`broke`)

Actual unreworked coating rejects and trim sent to recycling/treatment. Record moisture, fibre, pigment/binder contamination and recipient. Internal reuse or rework is neither fresh input nor external waste; offsite pulp recycling requires its actual treatment dataset.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Waste paint, water-based (`coating_reject`)

Segregated actual unrecovered colour/filter rejects from this water-based surface coating. Measure whole wet waste mass, water, pigment/binder composition and recipient acceptance; do not call this generic biological paper sludge. Recovered colour returning internally is not an external waste.

- Selected flow: Waste paint, water-based `3ec596f0-fe78-40d3-be98-8ef4e3cb99e5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Waste liquid (`effluent`)

Separate actual diluted cleaning effluent sent to a contracted offsite treatment route; the broad liquid-waste identity includes industrial wastewater. Record whole wet mass from weighing or measured volume times actual effluent density, pollutant concentrations/loads and water fraction. Do not use manganese-slag wastewater or treat the whole liquid as pure water. No direct freshwater discharge is represented here.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Dust (`captured_dust`)

Actual separately captured solids from dry handling, coating-pigment handling and cutting. Measure full dry/wet mass, fibre/mineral composition and recipient. Captured-and-reused dust is an internal loop, and collected dust is not ambient PM emission.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Spent steel paper-coating doctor blade (`spent_blade`)

Only one actual spent steel paper-coating doctor blade stream sent externally is represented. Native Waste solid explicitly includes discarded industrial material, scrap metal and machinery, with no prescribed treatment route; this is a conditional physical locator, not a fabrication-offcut or machine-shop-swarf background. Preserve measured whole solid mass, actual alloy, dimensions, surface coating, moisture and adhered coating-colour residues, replacement/dispatch records, legal waste status, recipient acceptance and actual treatment. Each distinct actual blade or separately collected residue needs its own physical record. Match recipient composition, recovery/treatment boundary and native whole-mass reference before linking data; do not assume clean steel, treatment, saleable coproduct status or avoided credit.

- Selected flow: Spent steel paper-coating doctor blade `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

##### Elementary flows

###### water vapour (`evaporated_water`)

Actual evaporation reaching outdoor air from electric air drying/cooking, after any condensation/recovery. Determine a measured water balance and validate it against exhaust humidity/flow when available; use emitted water mass, not all purchased water. Native medium is air, unspecified, not water resource or freshwater effluent.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5) (`pm25`)

Only actual emitted particle mass in the <=2.5 micrometre aerodynamic bin from cutting or pigment handling, after controls. Include fugitive and exhaust pathways without counting worker exposure as an environmental exchange. No default positive factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pm25_10`)

Actual exclusive >2.5 to <=10 micrometre bin. If only nested PM10 and PM2.5 are monitored, subtract matched-period matched-method quantities, document uncertainty and reject a negative result; never add PM10 to these exclusive bins.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (> PM10) (`pm10plus`)

Actual exclusive >10 micrometre bin, derived only from compatible measured total suspended particulate and PM10 quantities or direct size-resolved measurements. Captured dust is excluded. Missing size distribution is an explicit gap, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### styrene (`styrene`)

Conditional actual styrene CAS100-42-5 released from the declared SB binder/recipe; verify fossil provenance, residual monomer assay and speciated exhaust mass after controls. Polymer input is not emitted monomer. A total VOC/as-carbon measurement is not kg styrene; add each other actual species separately. No assumed positive emission.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable period exchange amount / accepted net paper mass P, reported per 1 kg reference flow. Conditional rows require actual use/release evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | Subdivide by physically recorded campaign/grade and meter scope first. Attribute kitchen/dryer/finisher and shared support by documented causal physical drivers using cp_energy/cp_material. A chosen driver needs plant evidence and uncertainty disclosure; this PCR supplies no generic allocation fraction. | jrc-paper-bref-2015 |
| allocation_burdens | all inventory rows | Maintain a full pre-allocation physical flow/mass/water/carbon ledger and a separate attributed environmental burden ledger. Preserve whole output/waste/packaging and equal internal transfers; do not multiply physical co-product quantities by a burden-allocation fraction. |  |
| allocation_recovery | broke; coating_reject; captured_dust; packaging | Internal rework/recovery is neither a purchased avoided-product credit nor an external output. Record external waste treatment and separately identified actual saleable downgraded material according to legal product/waste status, receiver-accepted specifications, actual function/use and recipient contracts. Payment alone does not establish product status. A genuine product requires its own compatible Product flow identity; do not relabel a Waste flow exchange merely because it earns revenue. If a saleable co-product remains inseparable, document a reviewed physical relationship or justified economic sensitivity before dataset acceptance; never relabel waste solely to earn credit. |  |
| allocation_packaging | wrapper_shipped; film_shipped; core_shipped | Shipped ancillary packaging is not a marketable co-product and creates no allocation share. Reuse burdens follow a documented return/life evidence ledger, while full physical masses remain unchanged. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Use one declared continuous reporting period that captures actual campaigns, grade changes, cleaning, startup/shutdown and rejects. Do not mix unmatched periods; disclose excluded downtime, material stocks and shared-meter boundaries. P is the sum of accepted net paper produced in that period at its measured actual moisture, excluding all cores and wrappers. The physical ledger also records shipments and accepted stock change. Each protocol below aggregates its attributable totals / P, per 1 kg reference flow. No actual plant data have been supplied with this methodology.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | coating | accepted paper | weighing and quality records | campaign; grade; net paper P; gross/tare/core/wrapper masses; accepted stocks; moisture w; grammage; area A; coating sides/layers; finish; acceptance/reject record | Calibrated reel/sheet weighing with component tare; representative sealed moisture/solids samples and validated paper/coating-appropriate laboratory method; cross-check moisture scanner and area/grammage | kg; m2; g/m2; wet-basis fraction | Each accepted lot and representative samples | Full declared reporting period | Selected coating line and same accepted grades | per 1 kg reference flow | Scale calibration, sample custody, laboratory method/volatile correction and acceptance specification |
| cp_material | coating | base paper and blade | receipts, stock, issues and maintenance | lot; actual grade/composition; opening/closing stock; receipts; returns; line issues; net mass; moisture; blade alloy/treatment and replacements | Weigh or trace supplier-certified receipt/issue masses; reconcile stock and maintenance records; verify supplier production scope | kg | Each lot/issue/change | Same declared reporting period | Selected line/campaign and attributed shared maintenance | per 1 kg reference flow | Supplier CoA, invoices, calibrated scales and reconciliation |
| cp_recipe | coating | each pigment, binder, additive or complete colour | lot recipe and analytical records | supplier formulation; SDS/CoA; constituent identity; batch wet mass; solids/water/active fractions; pigment route/size; each face/layer; retained dry coat; residual monomers; stocks; recirculation/recovery; background basis | Verify actual recipe by supplier documents and lot assays; weigh each preparation addition; measure solids/moisture and retained coat by validated grade-specific differential/assay methods; distinguish complete procurement from component reconstruction | kg; g/m2; dimensionless fractions | Each recipe/lot/layer and change | Same declared reporting period | Actual coating kitchen, each coating face/pass and its purchased lots | per 1 kg reference flow | Lot assays, recipe reconciliation, background boundary and retained-coat tests |
| cp_energy | coating | electricity | meter records | voltage; supplier/mix/year; import meter; stage submeters; cooker/heater/fans/coater/calender/slitter/extraction/packing; startups; shared drivers | Read calibrated electrical meters; reconcile master and stage totals and justified causal shared-use attribution; record actual dryer and unheated calender/bypass equipment | kWh; MJ | Continuous with campaign reconciliation | Same declared reporting period | Entire selected foreground including actual stage support | per 1 kg reference flow | Meters, utility contracts, equipment heat-source records and shared-use evidence |
| cp_water | coating | fresh tap water | meter and density records | fresh volume or mass; actual temperature/density; kitchen/cleaning use; recipe-carrier water; recirculation; opening/closing tanks; water recovery | Use calibrated meter/weighing and measured supply density at state; keep fresh, carrier, internal and recovered water separate | kg; m3; kg/m3 | Continuous meters and representative density samples | Same declared reporting period | Actual fresh-water interface and kitchen/cleaning | per 1 kg reference flow | Meter calibration, density samples and water reconciliation |
| cp_pack | coating | each wrapper, film and core input/output | purchase and dispatch ledger | material; construction; physical mass; opening/closing stock; issues; shipped mass; damage/discards; full returned core mass; reuse cycles; supplier | Weigh each actual packaging component and reconcile purchases, stocks, dispatch and returns independently of net paper mass | kg | Each shipment/lot and return | Same declared reporting period | Packing and dispatch/returns interfaces | per 1 kg reference flow | Mass/tare records, supplier specifications and separate return/discard receipts |
| cp_waste | coating | each external waste stream | weighing, analysis and recipient records | whole wet mass; actual density/volume; water/solids; fibre/pigment/binder; COD and relevant species/load; blade alloy/coating; recipient and treatment; internal recovery | Separately weigh external broke, concentrated colour, dilute wash, captured dust and worn blades; analyze representative fractions and recipient-required pollutants; validate transport/treatment receipts | kg; m3; kg/m3; mg/L | Each dispatch plus representative samples/cleaning events | Same declared reporting period | Each actual waste exit and recipient | per 1 kg reference flow | Weighbridge/lab reports, treatment contracts, contaminant acceptance and stock closure |
| cp_air | coating | each actual outdoor elementary emission | emissions testing and water balance | dryer/cutting/handling path; controls; outdoor medium; exhaust flow; wet/dry standard state; concentrations/species; times; water balance; humidity; exclusive particle bins; detection/uncertainty | Use representative accredited source/fugitive monitoring and time/flow-integrated mass; validate evaporation with measured water balance and humidity; match particle methods/periods before subtraction; preserve all detected species | kg; mg/m3; m3/time; time | Representative campaigns/control states with operating duration | Same declared reporting period | Actual post-control exhaust and fugitive site exits | per 1 kg reference flow | Sampling/flow method, blanks/detection limits, control operation and mass-balance uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | n_i = attributable period exchange amount A_i / accepted net paper mass P; record n_i per 1 kg reference flow. P includes actual gate water and coating, excludes all packaging. Reference output is 1 kg. | A_i; P; cp_output; applicable collection protocol | n_i |  |
| net_consumption | input rows | External consumption = opening stock + receipts - closing stock - external returns; reconcile issues, spills and internally recovered quantities separately. Do not add recirculation throughput to external consumption. | cp_material; cp_recipe; cp_water; cp_pack | actual external consumption |  |
| paper_composition | product | Accepted dry paper = P * (1-w_product); retained dry base solids plus retained dry coating solids must equal that value within documented measurement uncertainty. P*w_product is retained product water. Measure base dry solids and each coating ingredient retention; do not assume every consumed ingredient is retained. | cp_output; cp_recipe; cp_material | accepted fibre/mineral/polymer/additive and water ledger |  |
| coating_solids | product; gcc; kaolin; latex; starch; dispersant; lubricant; alkali; defoamer; coating_colour | Retained dry coat = A * sum(c_s,l) / 1000; cross-check with independent ingredient solids input, externally lost solids and colour/paper stock change. Keep actual C1S/C2S layers distinct and whole-colour constituents only in the composition ledger when their complete background is used. | cp_recipe; cp_output | retained coating solids and constituents |  |
| water_closure | evaporated_water; water; effluent | Input water in base paper, every delivered formulation and fresh supply + opening water stocks = retained product water + external waste water fractions + net outdoor evaporation + closing stocks + other measured external water exits. Condensation/internal recovery is not a new external input. Investigate residuals against uncertainty; never force missing data to evaporation. | cp_output; cp_recipe; cp_material; cp_water; cp_waste; cp_air | separate physical water ledger |  |
| carbon_closure | base_paper; product; recipe; wastes; styrene | Track biogenic fibre/starch carbon and fossil polymer/additive carbon separately by actual assays or supplier composition, and reconcile product, waste, emission and stock changes. No assumed cellulose-carbon fraction or combustion CO2 is imposed. Upstream/external-treatment datasets must retain their actual biogenic CO2 exchanges even if an impact reporting convention treats them separately. | cp_material; cp_recipe; cp_output; cp_waste; cp_air | separate physical carbon ledger |  |
| air_load | pm25; pm25_10; pm10plus; styrene | For each matched measured species/bin, integrate concentration * compatible exhaust flow * operating duration with recorded unit/state conversions and divide period mass by P. Report fugitive mass separately before summing the same species; do not add VOC totals to speciated VOC or PM10 totals to exclusive bins. | cp_air; cp_output | actual speciated outdoor emissions per reference flow |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all rows | Verify actual physical material, complete recipe, wet/dry state and every hard native route/concentration/voltage qualification. Resolve blank UUID rows before linking background data; record actual supplier/recipient compatibility separately from identity. | Supplier assays/specifications, native identity and background boundary |
| quality_closure | all rows | Reconcile period-specific physical mass, water, carbon, layer retention, equal internal transfers and packaging with uncertainty. Preserve pre-allocation ledger separately. | All protocol records and documented residual investigation |
| quality_emissions | elementary rows | Distinguish measured absence, below detection, omitted pathway and missing measurement; quantify compatible particle bins and chemical masses. Add each additional actual detected species as its own row. | Representative monitoring, controls, scope and detection report |
| quality_complete | all rows | Declare actual recipe additions, cleaners, blade/roll/knife maintenance, packaging discards and other consumed materials as additional atomic rows when present. This inventory is a selected route core, not permission to omit actual exchanges or infer zero for blanks. | Stock/maintenance/SDS completeness audit |
| quality_sources | all rows | Do not transfer historical BREF mill numbers, supplier marketing savings or another product recipe as defaults. Quantitative data use actual recorded period/grade and applicable upstream boundary. | Source applicability and original collection records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | Exactly one final reference product output is 1 kg accepted net wet paper. No intermediate output reuses its UUID; packaging is excluded from P and tracked at full mass. Required physical/route qualifiers must be complete. |  |
| validate_formulation | all recipe rows | Require actual constituent identities/assays, C1S/C2S layer masses and retained moisture. Reject double counting complete purchased colour versus included ingredients, arbitrary active/wet conversion, pigment-route substitution or a fabricated recipe. | jrc-paper-bref-2015 |
| validate_measurement | all inventory rows | Every row, collection aggregation and calculation must normalize to the same P and period, with the actual native reference property and compatible supplier quantity basis. Unknown density/solids/provider scope stays unresolved. |  |
| validate_boundary | coating | Verify actual electric drying, cold calender/bypass and external effluent route. A real boiler/steam/heated calender/onsite treatment/direct discharge cannot be hidden; reject application of this route until complete additional methodology is available. | jrc-paper-bref-2015; valmet-electric-coating-drying |
| validate_emissions | elementary rows; captured_dust | Verify species/CAS, outdoor-air receiving subcompartment, property/unit and bound source measurements. Keep captured dust separate from emitted dust, mutually exclusive particle bins and speciated VOC; no correction flow or assumed positive emission. If actual receiving subcompartment is known, use its corresponding verified identity rather than an unspecified-air default. |  |
| validate_balances | all inventory rows | Check physical solids/water/carbon and packaging closures, equal internal links and distinct allocated burdens. Disclose unexplained gaps and uncertainty; do not force a balance by altering output mass or deleting biogenic CO2 from supplier/treatment inventories. |  |
| validate_readiness | all rows | Unresolved flow identities, scientific review, missing actual collection or incompatible background bases must remain explicit. This candidate methodology is not independent approval, actual plant validation or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground off-machine coating process; downstream secondary_dataset or background_dataset only after actual data qualification |
| downstream_use | Declared unprinted mineral-coated paper input to printing/converting; compatible grade and wet-reference basis |
| allowed_use | Physical subset and actual electric-air/cold-finishing/external-waste route after qualifiers, collection and provider compatibility are complete |
| excluded_use | Full CPC leaf coverage; integrated paper/pulp or board routes; different heat sources, coatings/lamination; comparative claims across unmatched paper functions; treating candidate status as review/publication |
| required_metadata | Actual product/site/period; base grade/furnish and suppliers; full wet formulation and layers; moisture/grammage; equipment and energy; measured quantity bases; packing/returns; waste recipients; internal links; upstream references; allocation ledger and original protocols |
| required_quality_disclosure | Measurement uncertainty/coverage; unmeasured exchanges and blank identities; native metadata defects; provider-basis gaps; source applicability; allocation sensitivity; separate biogenic/fossil carbon; scientific and translation review states |
| update_trigger | Actual recipe/base grade/layers/moisture/route/supply voltage/provider/treatment/packaging changes; new measurement or contradictory identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), DOI 10.2791/370629; [official PDF](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf), printed pp.48-50, 665, 667-670 (PDF86-88,703,705-708) | Papermaking monitoring context; broke interface; coating ingredients, application, recovery/wash segregation and possible VOC; calendering and cutting dust. Descriptive route support only: no historical factory values, recipes, efficiencies or BAT limits adopted as generic quantities. Onsite papermaking/broke repulping is excluded here. |
| valmet-electric-coating-drying | handbook | [Valmet coating drying for board and paper machines](https://www.valmet.com/board-and-paper/board-and-paper-machines/coating-drying/), section Replacing gas with electricity, publisher page snapshot 2026-10-11 | Electric-heated coating air-dryer capability; no claimed efficiency/savings factor, product-zero-emission claim or particular mill installation. Actual equipment/meter evidence remains mandatory. |
| upm-face-papers | handbook | [UPM Specialty Materials Face papers](https://www.upmspecialtymaterials.com/products/paper-catalogue/categories/face-papers/), introductory product portfolio, publisher page snapshot 2026-10-11 | Producer example of C1S/C2S and woodfree uncoated paper market states; no producer recipe, process inventory or proof of this selected factory route. |
