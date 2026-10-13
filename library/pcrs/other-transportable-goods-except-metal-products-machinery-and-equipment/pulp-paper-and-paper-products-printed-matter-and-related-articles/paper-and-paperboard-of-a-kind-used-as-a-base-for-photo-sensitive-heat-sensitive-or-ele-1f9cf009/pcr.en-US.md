---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-of-a-kind-used-as-a-base-for-photo-sensitive-heat-sensitive-or-ele-1f9cf009
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated thermal base paper from purchased bleached chemical pulp

## 1. Scope and Applicability

This PCR covers finished cellulosic thermal-coating base paper at the paper mill gate, before any thermosensitive, photosensitive or electrosensitive functional layer is applied. The representative real product is Andhra Thermal Base Paper (NS), advertised for subsequent coating, with ECF pulp and alkaline sizing [andhra-thermal-base]. This is a physical product example, not evidence of that producer’s exact mill route or formulation.

The supported foreground route receives purchased ECF-bleached chemical papermaking pulp, purchased treated water, grid electricity and separately supplied industrial steam heat; it sends wastewater to external treatment. It includes repulping/refining, wet-end preparation, formation, pressing, drying, nonfunctional sizing when used, calendering, reeling, slitting and dispatch preparation [jrc-pulp-paper-bref-2015, Chapter 7]. Integrated wood pulping/bleaching, on-site combustion, direct environmental wastewater discharge and on-site biological treatment require separate methodology and are not represented by this route. The base paper can be an intermediate in a thermal-paper life cycle while being the finished sold product of this foreground.

Exclude already coated recording paper, thermal jumbo rolls with an imaging layer, carbonless-copy coatings, photo/electrosensitive substrates, polymer film, thermal-label laminates, board, recovered-fibre furnish and mechanical pulp. Ordinary wet-end filler or starch sizing does not create a thermosensitive recording product. No leuco dye, colour developer, sensitizer or microcapsule is introduced when the actual base-paper route has no functional coating. Recipes and purchased chemicals must follow site evidence; the cards below are conditional identities, not a required universal formulation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-of-a-kind-used-as-a-base-for-photo-sensitive-heat-sensitive-or-ele-1f9cf009 |
| classification_refs | CPC 3.0 32123; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Finished uncoated thermal base paper reels made by the supported purchased-chemical-pulp route |
| excluded_products | Functional-coated recording paper; photo/electrosensitive grades; paperboard; mechanical/recovered-fibre routes; integrated pulp production |
| representative_product | Andhra Thermal Base Paper (NS); physical base-paper identity only [andhra-thermal-base] |
| production_route | Purchased ECF chemical pulp to finished reels; external electricity, steam generation and wastewater treatment |
| market_state | Accepted base-paper reels before functional coating; supplied to a coater |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cellulosic substrate for subsequent thermal coating; no recording function at this gate |
| How much | 1 kg accepted uncoated base paper, excluding packaging |
| How well | Declared grammage, moisture, caliper, smoothness, strength, absorption, furnish and coating compatibility meet the actual purchaser specification |
| How long or cycle | One factory-gate delivery; recording durability after coating is outside scope |
| reference_flow_link | base_paper |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Paper and paperboard of a kind used as a base for photo-sensitive, heat-sensitive or electro-sensitive paper or paperboard `a0b357fa-9e43-483e-806d-6a2f5c9c6357` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | uncoated thermal base paper; no functional layer; ECF chemical pulp; hardwood/softwood grade; delivery moisture; grammage; net accepted paper mass; purchaser quality specification; sizing formulation; reel dimensions; external steam and effluent treatment boundaries; supply voltage; site and collection period |

The broad reference UUID includes other uncoated recording-paper bases. This PCR narrows it to the stated physical subset and route; the UUID does not confer a photo/electrosensitive method or complete CPC coverage. Missing qualifiers or an imaging layer makes a concrete data package inapplicable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted paper net mass Q in cp_mass at actual delivery moisture; exclude core, wrappers and pallet. Normalize every external exchange to 1 kg reference flow. |
| dry_basis | pulp, paper, sludge and chemicals | Mass | kg | Record wet/as-received and dry masses separately: m_dry = m_wet * (1 - w), where w is measured wet-basis moisture fraction. Supplier air-dry conventions must be declared, not assumed from BREF examples. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the reference-property name from the direct record. E_MJ = 3.6 * E_kWh is a unit conversion only; reconcile the delivered supply interface and background. |
| steam_basis | steam_heat | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | Collect delivery and return enthalpy under cp_heat. A GCV/MJ property alone does not prove net delivered heat. Require a supplier-defined conversion k_bg before linking H_bg = k_bg * H_net; an unknown k_bg blocks the numeric supplier link. |
| formulation_basis | chemical rows | Mass | kg | Keep commercial-product mass, water, active solids and other ingredients distinct. Use measured concentration and supplier reference definition; never substitute emulsion mass for pure active mass or count constituents twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased bleached chemical papermaking pulp received at mill; no wood cooking or bleaching in foreground |
| starting_condition_role | foreground entry gate |
| product_classification_scope | Thermal-base-paper subset of CPC 32123, uncoated at dispatch |
| recursive_input_rule | Trace same-category purchased base paper to its upstream manufacturing dataset; do not regenerate its pulp inventory here. A purchased-base-paper converting-only route is outside this manufacturing method. |
| upstream_dataset_requirement | Require route-, state-, region-, time- and reference-basis-compatible cradle-to-gate datasets for pulp, utilities, chemicals, packaging and receiving treatment. Identity UUID verification alone does not satisfy this requirement. |
| disclosure | Declare foreground gate-to-gate collection and upstream links separately; do not present missing upstream or treatment as zero-burden cradle-to-gate results. |

- `boundary_manufacturing`: Include all observed preparation, papermaking, nonfunctional sizing, finishing, internal fibre/water recovery, utility use and dispatch packaging within the declared gate [jrc-pulp-paper-bref-2015, 7.1.1–7.1.10]. Add every actual chemical, carrier, packaging component and reject as a specific atomic exchange; the listed conditional recipe does not establish completeness.
- `boundary_external_services`: Link upstream pulp and supplied energy plus external wastewater/waste treatment without duplicating their combustion, water-abstraction or treated-outfall emissions in the foreground. No arbitrary mass cut-off; disclose each missing exchange and upstream link. An on-site boiler, biological plant or direct water discharge requires expanded, independently evidenced inventories.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| papermaking | Purchased pulp to accepted uncoated thermal base-paper reels | required | Supported external-utility and effluent-treatment route | foreground | base_paper |

Physical stages: purchased pulp → repulping/refining → furnish preparation → formation/pressing → drying → optional starch sizing and redrying → calendering → reeling/slitting/packing → accepted base paper. Keep stage-specific meters, internal wet/dry broke returns and white-water recirculation in the physical mass/water/carbon ledger. For every internal link, sender and receiver quantities share the same period, unit, wet/dry basis and composition. The single foreground unit has only one external product output; no second reference output is created at drying.

### Process: Purchased-pulp papermaking (`papermaking`)

#### Inputs

##### Product flows

###### Chemical wood pulp, other than dissolving grades (`hardwood_pulp`)

Purchased ECF-bleached hardwood kraft papermaking pulp, not dissolving pulp; measured as received. Specify species, bleaching route and lot moisture; reconcile oven-dry and supplier air-dry bases independently. The broad identity also includes other chemical pulp and does not establish the supplier inventory.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Chemical wood pulp, other than dissolving grades (`softwood_pulp`)

Include only if separately purchased ECF-bleached softwood kraft papermaking pulp is in the actual furnish. Record separately from hardwood pulp despite the shared broad UUID; no default blend ratio. Verify species, grade, moisture and supplier reference basis for this row.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Tap water (`process_water`)

Purchased treated tap water used for process and cleaning. Use measured volume and measured temperature-dependent density for mass-reference linkage; the database secondary volume coefficient is not a prescribed site density. Direct abstraction or on-site water production requires an explicitly extended boundary.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Alternating current (`electricity`)

Grid AC delivered at a 1–35 kV supply interface, including preparation, paper machine, finishing, recovery, ventilation and maintenance. If the real interface is outside that band, resolve another exact identity. Convert metered kWh to MJ and verify supplier geography, time and losses.
 The source identity specifies CN; actual region, reference year, supplier mix, voltage and loss boundary must be independently compatible before quantitative linking.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-pulp-paper-bref-2015`

###### Heat from steam (`steam_heat`)

Industrial-boiler steam heat supplied across the foreground boundary to paper drying; preserve the direct record reference property Gross calorific value. Physical identity is compatible, but supplier/background reference-energy definition must be reconciled with measured delivery enthalpy before numeric linking. The database benchmark is not a PCR default. Unknown energy basis remains pending.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `jrc-pulp-paper-bref-2015`

###### Calcium carbonate (`calcium_carbonate`)

Conditional calcium carbonate wet-end filler, not a pigment precoat. Record supplier assay, mineral form, particle size, production route and dry-solids fraction. This identity contains no verified CAS or grade specification; supplier confirmation is required. A formulated slurry must account separately for carrier water and other constituents without double counting.
 The source synonym is limestone filler and its CPC 15200 classification is calcareous stone, not proof of papermaking grade or precipitated carbonate. Limit this locator to actual compatible ground natural calcium-carbonate filler with verified mineral species, processing, purity and particle grade. Precipitated, surface-modified or formulated alternatives need a separately verified identity; source CAS is absent.

- Selected flow: Calcium carbonate `dfce1026-0ad5-4362-87de-4b425a583e6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Cationic starch for wet-end strength (`cationic_starch`)

Include only when the actual recipe uses cationic starch. Record substitution/charge, botanical source, grade and dry-solids mass. Native starch and modified food starch are not verified substitutes; UUID remains unresolved.

- Selected flow: Cationic starch for wet-end strength
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Starch (`surface_starch`)

Conditional native starch used for nonfunctional surface sizing; measure dry starch and process-water carrier separately. This UUID must not stand for chemically modified/cationic starch or a thermal coating. If another grade is used, add its specific atomic row.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Alkyl Ketene Dimer (`akd`)

Conditional AKD sizing material from synthesis/emulsification, never a colour developer. Record commercial formulation, concentration and wet-versus-active mass. The direct record does not define an emulsion strength or active-mass reference; do not automatically convert active solids into the linked reference quantity. Supplier/background formulation compatibility is required.

- Selected flow: Alkyl Ketene Dimer `095d668d-6196-43d7-82b2-655ac9d26693`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### cationic polyacrylamide (CPAM) (`pam`)

Conditional cationic polyacrylamide retention aid; verify polymer charge, grade and delivered solids. The broad CPAM identity does not cover anionic PAM or K-PAM. Supplier dry/wet reference basis must be documented.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sodium hydroxide (`sodium_hydroxide`)

Conditional industrial solid sodium hydroxide used in actual cleaning/alkalinity control, not kraft cooking within this boundary. For solution preparation record NaOH purity and carrier water; a purchased solution requires concentration-compatible identity and background rather than assuming pure NaOH mass is solution mass.
 This source is specifically industrial solid NaOH at 95–98% purity; use only for an actually compatible supplied grade. A different concentration, solution or formulation requires its own verified identity and reference basis.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Low-density polyethylene foil (PE-LD) (`pe_film`)

Conditional noncellular, nonadhesive LDPE transport wrapping film; record resin identity, thickness and net installed film mass. Exclude other plastics and finished packaging assemblies.
 The classified film is also unreinforced, unlaminated and unsupported; verify actual construction. Do not apply this identity to a composite moisture-barrier laminate.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Uncoated printing, writing and packaging paper (`kraft_wrap`)

Conditional uncoated kraft reel wrapping paper within this broad uncoated-packaging-paper identity. Record actual kraft grade, moisture and supply route; do not use the paper-bag record for a wrapping sheet or coated moisture barrier.
 The source CPC 32129 graphic-paper classification is a documented limitation relative to its broader packaging-paper name. Confirm the actual uncoated wrapping sheet, fibre composition, grammage, moisture, source gate and compatible supplier inventory; this classification does not itself establish packaging grade.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Cardboard tube or Paper core (`paper_core`)

Purchased paperboard winding core for dispatched reels. Record core mass, dimensions, composition and supplier background; exclude core from reference paper mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`pallet`)

Conditional wooden pallet actually supplied with dispatched product; measure net complete-pallet mass, including actual fasteners, and reuse/replacement records. Keep wood moisture and biogenic carbon separately from metal and other components; a wood-only mass cannot represent the complete pallet. This broad wooden-load-board identity is limited here to the actual pallet; no default per-reel pallet or reuse lifetime.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Lubricating oil (`lubricant`)

Conditional petroleum-fraction lubricating oil consumed by foreground machinery; exclude fully synthetic oil from this identity. Record stock changes and maintenance use; no fuel combustion is presumed.
 Only an actual formulation compatible with the source petroleum-oil classification (at least 70% petroleum oils by mass) may use this locator; verify SDS and additives. Its 40.5 MJ/kg descriptor is metadata, not an adopted calorific value or emission factor. Keep whole supplied lubricant mass and avoid duplicate constituent purchases.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Paper and paperboard of a kind used as a base for photo-sensitive, heat-sensitive or electro-sensitive paper or paperboard (`base_paper`)

The sole reference product output: accepted, dried, sized and finished uncoated thermal base paper, net of paper core and transport packaging, at the declared delivery moisture. One consolidated process prevents the same paper being counted again between drying and dispatch.

- Selected flow: Paper and paperboard of a kind used as a base for photo-sensitive, heat-sensitive or electro-sensitive paper or paperboard `a0b357fa-9e43-483e-806d-6a2f5c9c6357`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `jrc-pulp-paper-bref-2015`

##### Waste flows

###### Untreated papermaking wastewater to external treatment (`wastewater`)

Actual untreated virgin-pulp papermaking wastewater sent to an identified external treatment plant, conditionally located by the broad industrial Waste liquid identity. Verify whole-liquid composition, contamination, liquid state, receiver and compatible treatment provider; the generic source wording is not a site hazard classification. Native reference is Mass/kg: measure whole wet handover mass, or use matched measured volume times actual effluent density at recorded temperature. Retain volume and COD/BOD/TSS/N/P species loads for treatment-inlet characterization; these are neither total liquid mass nor foreground elementary discharges. Carrier-water mass requires actual water fraction, not an assumption that mixed effluent is pure water. Recovered-fibre fluting and manganese-slag wastewater records remain incompatible.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### sludge (paper production) (`fibre_sludge`)

Conditional dewatered primary fibre/filler sludge from white-water recovery that leaves the site. Record wet mass, dry solids, fibre/filler composition and receiving facility; no biological-treatment sludge is presumed in this outsourced-treatment route. Retained recoverable fibre is internal recycle, not waste output.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### waste paper (unspecified) (`paper_reject`)

Only uncoated paper trim/rejects exported as waste. Measure net mass, moisture, sizing contamination and receiver. Internal wet/dry broke returned to stock is excluded from external exchanges but retained in the physical stage ledger. Functional-coated broke is outside scope.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Used lubricating oil (`waste_oil`)

Conditional used lubricating oil leaving machinery maintenance; keep source, contamination and actual treatment recipient. This is generated waste mass without an assumed regeneration credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Collected dry-paper cutting dust (`collected_dust`)

Conditionally include actual dust collected from dry-paper cutting, winding and handling and exported as a separately identified waste [jrc-pulp-paper-bref-2015, 7.1.10, printed p. 670]. Verify fibre/filler/sizing composition, moisture, contamination, collector stock, net consignment mass and recipient. The broad industrial collector-dust identity does not prescribe composition or treatment. Dust returned internally to stock preparation stays in the internal physical ledger; exported captured dust is distinct from paper trim and from outdoor PM size fractions. Neither capture efficiency nor a positive quantity is assumed.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### water vapour (`water_vapour`)

Net process-water vapour released to outdoor air, unspecified. H2O CAS 7732-18-5; determine from moisture/air-flow measurements or the closed water balance. Distinguish steam delivery/condensate from paper moisture evaporation; no evapotranspiration correction flow.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (PM2.5) (`pm25`)

Conditional emitted particles at or below PM2.5 to outdoor air, unspecified, after controls. Use measured disjoint size fraction; collected filter dust is waste, not this emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pm2510`)

Conditional emitted particles above PM2.5 through PM10 to outdoor air, unspecified. Subtract PM2.5 from a consistently measured cumulative PM10 total only when sampling/operating basis matches.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (> PM10) (`pmover10`)

Conditional emitted particles above PM10 to outdoor air, unspecified. Use size-resolved measurements or total suspended particles minus compatible cumulative PM10; do not infer coarse dust from a name-only particulate factor.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### carbon dioxide (biogenic) (`bioco2`)

Only physically evidenced short-term biogenic CO2 releases from this foreground to outdoor air, unspecified; CAS 124-38-9. No boiler or biological treatment is assumed here. Verify actual carbon source; never relabel fossil CO2, use uptake/correction flows, or omit a real biogenic release because a GHG reporting convention excludes it. Upstream heat/treatment emissions remain in their supplier datasets.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol; retain period amount X_i and net paper Q in the collection record. No default amount; unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

## 7. Allocation and Co-product Handling

- `allocation_subdivision`: First isolate the actual thermal-base-paper campaign using production lots, submetering and causal service records. Other mill grades retain their own physical production quantities. A shared-meter share may apply to an environmental-burden account, never to the measured real mass of pulp, accepted paper, broke or internal transfers.
- `allocation_residues`: No automatic avoided-product or energy-recovery credit for internal broke, white water or exported waste. Record exported material fate and legal/physical waste status. A genuine saleable co-product requires separately evidenced subdivision or causal allocation and transparent physical and allocated ledgers; economic allocation is not inferred from waste revenue. This default route has one reference product, not an invented pulp co-product.

## 8. Foreground Data Collection, Calculation, and Quality Rules

These protocols specify records to be collected for the first real foreground dataset; they do not assert that plant measurements already exist. Collect a complete declared operating period for one identified grade and route, including start-up, shutdown, grade changes and rejects; disclose seasonal/temporal limitations and reconcile beginning/end inventories.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | papermaking | reference output | weighing | lot; reel; gross mass; core and wrapper tare; accepted net mass; moisture w; grammage; grade; beginning/end accepted stock | Calibrated reel scale and traceable tare; representative gravimetric moisture sample to documented constant-dry-mass endpoint; record method, temperature, sampling and repeatability. Reconcile accepted production and dispatch stocks. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: Q = sum accepted net paper mass; exclude returned/rejected lots and packaging | kg | Every lot and moisture sample | Same complete declared period | Accepted uncoated grade | per 1 kg reference flow | Calibration; acceptance certificates; moisture records |
| cp_material | papermaking | pulp and individual chemical/maintenance input | stock and dosing | row_id; supplier; species/CAS where relevant; grade; supply route; lot; delivered mass; stock changes; formulation; solids; dosing; background reference basis | Reconcile receipts, calibrated dosing scales and beginning/end stores for each atomic material; measure moisture/solids and retain supplier composition documents. Account constituent water exactly once. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: X_i = receipts + opening stock - closing stock - other-grade transfers; preserve physical total and trace attributable use | kg | Each delivery and dosing lot | Same complete declared period | Thermal-base-paper campaign | per 1 kg reference flow | Invoices; scale/doser calibration; assays; supplier basis |
| cp_water | papermaking | purchased water and external wastewater | meter and laboratory | row_id; meter total; volume; temperature; density; receiver; inlet/outlet stock; moisture; COD; BOD; TSS; N/P; constituent analysis | Calibrated water/effluent totalizers; flow-proportional representative composite sampling and documented lab methods. Measure separate actual densities and temperatures for purchased water and wastewater; X_water = V_water*rho_water and X_wastewater = V_wastewater*rho_wastewater, or independently calibrated whole-liquid weighing. Retain each water fraction for the water balance; neither density is defaulted to 1000 kg/m3. Record treatment-inlet composition and trace the receiving external plant. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: Aggregate net boundary volumes; keep recycled white water separate; reconcile water balance and inlet pollutants with external treatment inputs | m3; kg | Continuous totals; representative samples | Same complete declared period | Mill boundary excluding external treatment | per 1 kg reference flow | Meter calibration; laboratory blanks/standards; receiver records |
| cp_energy | papermaking | grid electricity | submeter | supply voltage; region; time; meter kWh; preparation/drying/sizing/finishing readings; loads; transformations; other grades | Calibrated submetering with campaign timestamps; reconcile whole-site and grade/stage records, supply interface and transformer boundary. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: E_MJ = 3.6 * E_kWh; retain separate physical meter total and causal attributable consumption | kWh; MJ | Continuous and campaign totals | Same complete declared period | Purchased-grid interface and scoped equipment | per 1 kg reference flow | Meter calibration; bills; reconciliation; supplier mix |
| cp_heat | papermaking | delivered steam heat | enthalpy and supplier definition | steam mass; pressure; temperature; quality; enthalpy; condensate mass and return enthalpy; vent/blowdown; supplier reference state; k_bg; drying/sizing loads | Calibrated steam/condensate meters and pressure/temperature records; use documented thermodynamic tables and measured steam quality; reconcile all return/vent states with supplier energy accounting. Supplier must define how net delivered heat relates to the GCV reference. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: H_net = (sum m_s*h_s - sum m_r*h_r)/1000; declare reference states for unreturned streams; H_bg = k_bg*H_net only with verified k_bg | kg; kJ/kg; MJ | Continuous totals and state readings | Same complete declared period | External supply boundary to drying/redrying | per 1 kg reference flow | Calibration; enthalpy method/version; return ledger; supplier agreement |
| cp_pack | papermaking | each packaging input | weigh and reuse | row_id; net installed mass; core dimensions; packing count; grade; supplier; pallet reuse/replacement and losses | Weigh individual installed components net of offcuts; reconcile issued stock, waste and reuse records; exclude packaging from Q. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: X_i = attributable component consumption; reuse service and replacement based on actual records without default lifetime | kg | Each packing lot | Same complete declared period | Finished reels leaving gate | per 1 kg reference flow | Packing list; scale calibration; reuse log |
| cp_waste | papermaking | each exported waste | weighbridge and recipient | row_id; wet mass; dry solids; origin; contamination; receiver; treatment route; internal recovery; stock | Calibrated scales and waste manifests; sample solids/composition, including separately collected paper-cutting dust and its collector opening/closing stocks; reconcile internal returned fibre and exported rejects independently; retain receiver confirmation. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: X_i = net exported waste mass; no internal broke as an export; record fate without automatic credit | kg | Each consignment | Same complete declared period | External waste gate | per 1 kg reference flow | Waste manifests; receiver; sample and weighing records |
| cp_air | papermaking | each elementary emission | measurement and balance | row_id; species; CAS; carbon origin; medium/submedium; sampling location; size bins; concentration; dry/wet gas basis; flow; time; control status; water balance | Representative outlet and fugitive monitoring or an explicitly supported closed balance; retain operating hours, blanks, uncertainty and control conditions. Screen actual cutting/winding sources and controls; measure residual outdoor dust separately from captured material and internal recovery. Do not treat detection limits as zero. Identify fossil/biogenic source independently. Preserve physical period totals, perform the following aggregation, then divide by Q from cp_mass to produce amounts per 1 kg reference flow: X_i = sum c_i*V_i/1000000 for c_i in mg/m3 and matching V_i in m3; use disjoint PM bins; H2O may use closed water balance; no unmeasured emission factor | kg | Representative operating modes and period totals | Same complete declared period | Actual outdoor releases from scoped equipment | per 1 kg reference flow | Lab methods; calibration; operating log; detection limits; balance residuals |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | q_i = X_i / Q; X_i is the measured grade-attributable exchange amount; Q is accepted net paper kg from the same period and route. Reference product q = Q/Q = 1 kg. | X_i; Q; cp_mass; row protocol | amount per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| dry_solids | physical ledger | m_dry = m_wet * (1 - w); w is measured, no default pulp/finished-paper moisture | m_wet; w; cp_mass; cp_material; cp_waste | kg dry solids | jrc-pulp-paper-bref-2015 |
| steam_link | steam_heat | H_bg = k_bg * H_net; use cp_heat enthalpy balance and supplier-defined reference basis; unknown k_bg is pending and does not equal 1 | cp_heat; supplier definition | MJ; pending if unknown | jrc-pulp-paper-bref-2015 |
| physical_balances | material/water/carbon ledgers | For each conserved quantity: external inputs = accepted paper + dispatched packaging + external wastes + elementary releases + returned utility water + closing-minus-opening stocks + documented residual. Include real dispatched cores, wrappers and pallets even though excluded from Q. Reconcile steam supply/condensate return as a separate physical utility-water circuit when the LCI energy exchange is net heat; do not count supply steam as purchased process water or its condensate as external wastewater. Internal recirculation cancels once, with equal sender/receiver quantities. Use each particulate stream’s actual carried moisture in the water ledger without duplicating vapour; do not invent a moisture fraction or treat a dry particulate metric as extra water. Carbon uses measured elemental fractions; actual biogenic CO2 remains in the inventory. | cp_mass; cp_material; cp_water; cp_waste; cp_air; measured composition | unallocated kg solids/water/C and explained residual | jrc-pulp-paper-bref-2015 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every row | Verify physical identity, route, grade, chemical/CAS consistency, reference property and unit; identity and numeric background compatibility are separate decisions. Unresolved rows remain specific with no substitute UUID. | Supplier specifications and actual reference definitions |
| dq_completeness | foreground and upstream | Reconcile physical solids/water/carbon ledgers and all utility/stage records. Add each actual unlisted chemical, packaging waste, VOC species or direct emission as its own atomic row. Neither this conditional list nor a non-detect alone proves absence. | Process diagram; purchase/reject records; balance residual and uncertainty |
| dq_temporal | collection period | Same period and grade for Q and all exchanges; document coverage, abnormal operations, uncertainty and supplier vintage. No historical single-mill factor as a generic default. | Time-stamped logs and complete record coverage |
| dq_linkage | steam_heat; akd; pam; pulp; wastewater | Missing supplier enthalpy/formulation/moisture bases or compatible external treatment are explicit dataset gaps, even when flow identity is known. Do not report a linked complete dataset until resolved. | Supplier contracts and independently documented background quantities |

## 9. Validation Rules

- `validate_product`: Require all reference qualifiers and exactly one base_paper output at 1 kg; reject an imaging coating, incompatible furnish or the unsupported mill route [andhra-thermal-base].
- `validate_measurement`: Q must be positive, finite, net of packaging and common to every normalized row in both languages. Preserve mass/volume/NCV/GCV distinctions and documented conversions; missing steam or chemical supplier-basis compatibility makes the concrete dataset incomplete.
- `validate_balances`: Check unallocated physical mass/water/carbon balances before allocation; explain residuals with measurement uncertainty and stock changes. Require equal internal-link endpoints, disjoint PM fractions and no duplicated treatment/combustion emissions. Real biogenic CO2 must remain visible independent of LCIA or GHG reporting conventions.
- `validate_completeness`: Reject unresolved positive-exchange identity or missing upstream/treatment linkage when delivering a complete dataset. An absent exchange needs evidenced nonoccurrence; a pending row, detection limit or unavailable tool is not a passing result.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package; linked cradle-to-gate product dataset only after upstream and treatment compatibility is established |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Uncoated thermal base-paper supply to a downstream coater within the declared route and quality scope |
| excluded_use | Finished thermal recording paper; photo/electrosensitive grades; complete label; universal CPC 32123 proxy; direct claims about the named producer’s LCI |
| required_metadata | Reference qualifiers; gates; site; period; stage meters; supplier bases; all actual atomic exchanges; treatment recipient |
| required_quality_disclosure | Physical and allocated ledgers; balance residuals; uncertainty; identities; missing upstream links; pending steam/formulation bases; applicability limits |
| update_trigger | Changed furnish, coating state, sizing formulation, utility interface, treatment route, supplier reference basis or purchaser specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-paper-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), JRC95678. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf ; Chapter 7, 7.1.1–7.1.10, 7.2.2.6–7.2.2.7; printed pp. 660–670, 711–714 | Applicable papermaking-stage distinctions and residual/air-emission identification; not wood-processing evidence. Optional coating, integrated routes and historical/case numeric values are not adopted as default recipes or quantities. Collection protocols and scoped boundary are explicit PCR authoring choices, not a claim that BREF is an LCA allocation standard. |
| andhra-thermal-base | literature | Andhra Paper Limited, Andhra Thermal Base Paper (NS), https://andhrapaper.com/product/andhra-thermal-base-paper-ns/ ; product description and Features | Verifiable real base-paper product before customer coating, with advertised ECF pulp and alkaline sizing. Manufacturer specifications are product-specific; no mill recipe, supplier quantities or non-integrated production route is inferred. |
