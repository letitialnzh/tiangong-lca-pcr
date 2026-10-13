---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.newsprint
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Newsprint

## 1. Scope and Applicability

This PCR covers manufacture of unprinted, uncoated, machine-finished newsprint in delivery reels, using separately supplied pure TMP and/or washed, bleached deinked recovered-paper pulp, with an actual bleached kraft strength component if used. It defines a papermaking node from received pulp to accepted reels; it is not a printed-newspaper PCR or a generic printing-paper PCR. All doses, pulp proportions and quantities are collected for the actual grade and campaign. [jrc-pp-bref-2015, norske-nornews]

Integrated sites may use this node only when wood preparation, TMP production, chemical pulping, recovery and recovered-paper deinking/bleaching are separately modelled upstream and their actual transfer amounts, moisture, energy and burdens are linked. This record supplies no stand-alone integrated-pulping methodology. Purchased finished pulp does not eliminate its upstream burden. On-site boilers, CHP, anaerobic digestion, pulp bleaching, coating, sheet delivery, supercalendered magazine paper, book paper and groundwood/CTMP substitutes are outside the authored route. A route change requires distinct atomic rows, verified evidence and review before claiming complete coverage. [jrc-pp-bref-2015, norske-skogn-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.newsprint |
| classification_refs | CPC 3.0 32121; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted uncoated machine-finished newsprint reels within the declared furnish and utility route |
| excluded_products | Printed newspapers; writing/book/magazine paper; coated paper; sheets; full integrated pulping; chemical pretreatment of TMP |
| representative_product | One actual newsprint grade, fibre furnish, ash, moisture and reel specification |
| production_route | Pulp receipt, disintegration/refining, wet-end dosing, forming/pressing, steam drying, machine calendering, slitting/winding, wrapping; white-water and broke loops; declared aerobic effluent treatment |
| market_state | Accepted delivery reels at measured moisture; net paper excludes cores and packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply newsprint paper for subsequent cold-set newspaper printing |
| How much | 1 kg net delivered paper at measured delivery moisture |
| How well | Actual contracted printability, runnability, grammage, brightness, opacity, strength, ash and reel dimensions; no universal threshold |
| How long or cycle | One declared manufacturing and delivery campaign; no assumed newspaper lifetime |
| reference_flow_link | newsprint |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Newsprint `fdb2fcca-2716-4503-8c49-59e5b557e654` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Grade and printing purpose; unprinted/uncoated machine finish; TMP/DIP/kraft actual dry furnish fractions and treatment routes; fibre source/species; ash and mineral identity; wet-end formula/active fraction; delivered moisture wet basis; net paper mass and packaging tare; grammage/area QA; reel width/diameter/core; site/time; pulp supply and integrated-node boundary; water receiver; energy supply and supplier reference bases |

Declare every qualifier in the data package. The reference is a manufacturing declared unit; equivalent newspaper-printing service must be established separately.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_paper | newsprint | Mass | kg | Weigh accepted reels on calibrated scales; subtract individually recorded core and packaging tare. P = sum of net delivered paper masses for the same grade/time. Reject gross mass, roll count, area or grammage as automatic reference equivalents. Use cp_mass. |
| dry_wet | mass-based material/product/residue and analytical moisture-component ledgers | Mass | kg | For lot j, dry solids d_j = m_j * (1-w_j), with wet-basis moisture w_j measured for that lot. For the dry-to-delivered product conversion, D = sum d_j over accepted paper lots only, matching P; other streams retain separate dry totals. Net delivered reference remains P, not D or an assumed air-dry tonne. Convert a dry-basis intensity by the measured D/P; retained moisture is part of delivered paper. These are auxiliary mass/moisture calculations only for the stated material/component scopes; native electricity MJ and water Volume/m3 exchanges retain their own reference property/unit. Independently measured component mass does not replace a native energy/volume numerator. |
| chemical_basis | mass-referenced chemical, formulation and mineral inputs | Mass | kg | Keep supplied formulation mass, dry solids and active-species mass distinct. Use supplier concentration, hydration and background reference definition, not database recipe metadata, to establish the exchange basis. |
| steam_basis | steam | Mass | kg | Steam mass is not useful heat. Reconcile measured supply/return enthalpy, condensate loss and pipe-loss boundary with supplier reference. Keep steam water/condensate in the physical balance without duplicating purchased process water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable pulp lots received at the papermaking node; actual TMP/DIP/kraft supply datasets upstream |
| starting_condition_role | intermediate_input |
| product_classification_scope | Narrower CPC 32121 scope; papermaking node does not establish full leaf or integrated-mill coverage |
| recursive_input_rule | Returned own broke and white water stay internal; externally bought newsprint/broke requires a distinct received-flow boundary and upstream history. Do not recursively select this PCR to invent its original burden. |
| upstream_dataset_requirement | Route-, state-, site-, time- and quantity-compatible pulp, utilities, chemicals, packaging, transport and residue treatment. Integrated transfers link measured wet mass, solids and energy to the matching upstream node. |
| disclosure | Cradle-to-gate inventory combines node and complete upstream supply; disclose purchased/integrated links, exclusions, transports, treatment and unresolved identities. Printing/use/end-of-life are excluded from this manufacturing node. |

The physical map is pulp receipt -> stock preparation -> forming/pressing -> drying -> machine calender/slitter/winder -> wrapped accepted reels. White water, save-all fibre and broke loop back to stock; purge goes to primary/aerobic treatment -> freshwater discharge and separate sludge removal. Retain stage meters, stocks and internal transfer ledgers despite aggregation into one foreground process. A link leaving one node equals its receiving quantity, state and time in the other node. Upstream transport needs actual origin/mode/load/return records and separate services; missing links prevent a complete cradle-to-gate dataset. [jrc-pp-bref-2015]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pm | Newsprint manufacture and finishing | required | Declared pulp/steam supply and aerobic treatment route; conditional exchanges included only when present | foreground | 1 kg net delivered newsprint |

### Process: Newsprint manufacture and finishing (`pm`)

#### Inputs

##### Product flows

###### Thermomechanical wood pulp (`tmp_pulp`)

Only purchased or separately modelled virgin wood-based pure thermomechanical pulp, without chemical impregnation or pretreatment. Declare species, thermal/mechanical refining, any later brightness treatment, delivered solids/moisture and supplier gate. The broad virgin wood paper-pulp identity permits this explicitly limited physical subset; its general chemical-or-mechanical description and CPC mechanical/semi-chemical family do not select a TMP provider or permit CTMP substitution. Supplier process and mass/dry-matter conventions must establish compatibility. Internal pulp transfers remain matched physical links, and separately modelled supply burdens are counted once.

- Selected flow: Paper Pulp `6752b268-93a1-4dca-b098-3f3afa7eaddf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pp-bref-2015`

###### Wood Pulp (`kraft_pulp`)

Use this broad identity only for the actual bleached kraft wood-pulp strength component; declare wood species, kraft route, bleaching sequence and delivered solids. No generic Wood Pulp composition or quantity is a default.

- Selected flow: Wood Pulp `fa2fd2c0-9559-4e7f-bd48-282fe6f1a0f7`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pp-bref-2015`

###### Waste Paper Pulp (`dip_pulp`)

Only deinked recovered-paper pulp with the verified washing and bleaching route; declare recovered-paper grades, ink removal, ash, contaminants and delivered solids. Unwashed or unbleached DIP requires a separately verified identity. The source descriptor lists 90% paper fibre and 10% moisture; this is a supplier-reference compatibility condition, not actual furnish, fibre fraction or a universal air-dry conversion. Distinguish oven-dry solids, fibre and mineral ash by actual assay.

- Selected flow: Waste Paper Pulp `35b4a2f9-d344-4cc9-85a1-8eb4039ef21c`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pp-bref-2015`

###### Paper-grade kaolin filler (`kaolin`)

Conditional on actual filler dosing. Record dry kaolin solids, mineral specification and slurry water separately in the physical water ledger; do not substitute a named mine for paper-grade filler.

- Selected flow: Paper-grade kaolin filler
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### Precipitated calcium carbonate filler (`calcium_carbonate`)

Conditional on actual PCC use. Declare precipitation route, purity, particle grade and dry solids; ground limestone or GCC is a different route requiring its own atomic row. No filler percentage is prescribed.

- Selected flow: Precipitated calcium carbonate filler
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### Cationic starch dry-strength aid (`cationic_starch`)

Conditional on the actual cationically modified starch formulation, substrate and charge substitution. Unmodified starch is not an identity substitute. Record as-supplied formulation and dry active solids, including cooking energy.

- Selected flow: Cationic starch dry-strength aid
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### cationic polyacrylamide (CPAM) (`cpam`)

Conditional retention or effluent-flocculation CPAM; record cationic comonomer, charge, powder/emulsion form, active fraction and stage-specific doses. Carrier oil or additional chemicals need distinct rows when independently supplied; do not inventory both formulated input and its constituents as duplicate purchases.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### Clay, bentonite (`bentonite`)

Conditional microparticle retention aid; verify actual bentonite, mineral activation, purity and suspension solids. A drilling-mud formulation or wine-treatment dataset is not a papermaking supply. The record is a natural mineral mix at a mining site, not evidence of delivered activated papermaking aid. Its physical locator is conditional on actual compatible unmodified bentonite mineral; declare beneficiation, particle grade, slurry preparation and supplier gate separately. Chemically activated or formulated products require separately reviewed identities and processing burdens.

- Selected flow: Clay, bentonite `93806a54-46f5-409c-99c5-4144a1e73b5d`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### Hydrogen peroxide (`peroxide`)

Conditional H2O2 slime-control input, CAS 7722-84-1; use active H2O2 mass only with a supplier dataset on the same active basis, or explicitly match the supplied solution concentration. Carrier water belongs in the physical water ledger. This is not an allowance for on-site pulp bleaching.

- Selected flow: Hydrogen peroxide `c566e036-2e0c-4f44-b4c2-08dc00af93c2`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### Aluminium sulfate, powder (`alum`)

Conditional powder aluminium sulfate, CAS 10043-01-3, for fixation or water treatment. Record hydration, assay and dissolution water. Potassium alum and polyaluminium chloride are distinct substances, not synonyms.

- Selected flow: Aluminium sulfate, powder `1c9f77ea-7da1-42a6-a2ec-d2d4580913c7`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `jrc-pp-bref-2015`

###### Alternating current (`electricity`)

Only grid-average 1-35 kV medium-voltage electricity at the consumer connection. Convert meter kWh using 3.6 MJ/kWh; disclose country, year, losses and supplier mix. Other voltages or captive generation require matching supply datasets and identities. The source supply geography is CN. Actual site/year/voltage/provider compatibility must be established; this record is not automatically a global electricity background.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-pp-bref-2015`

###### Purchased industrial-boiler steam (`steam`)

Record actual delivered steam mass, pressure, temperature, dryness, condensate return and industrial-boiler supplier gate. Candidate 293f9fd9 explicitly specifies 11.0 MPaG and cannot serve as generic steam of unspecified pressure; a 0.45 MPaG or other fixed-pressure record is not a default substitute. Retain the UUID gap until actual pressure and supplier reference basis are established. Steam mass and net delivered enthalpy remain independent; mass or calorific-value properties do not automatically establish useful heat.

- Selected flow: Purchased industrial-boiler steam
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-pp-bref-2015`

###### Process Water (`process_water`)

Purchased treated process water only; require actual treatment and supply boundary. Convert measured liquid volume to mass using documented density at measured conditions. Do not count internally circulated white water as fresh purchased input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-pp-bref-2015`

###### Unbleached kraft roll-wrapping paper (`wrapper`)

The broad uncoated-paper identity is used only for the actual unbleached kraft reel-wrapping sheet; declare kraft furnish, basis weight, moisture, uncoated and unlaminated state, and provider gate. Its CPC 32129 graphic-paper classification does not establish packaging grade and remains a source-metadata clarification debt. No finished bag or purchased laminate is represented. Separately purchased glue is a separate row; do not split an actual supplied composite into duplicate purchases.

- Selected flow: Unbleached kraft roll-wrapping paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

###### Cardboard tube or Paper core (`core`)

Measure the actual paperboard winding-core mass and adhesive composition; record reuse cycles and supplier manufacture. Subtract this core from gross reel mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

###### Polyethylene film (`film`)

Conditional actual PE film, CAS 9002-88-4; verify resin, recycled fraction and supplier. Its source classification defect requires clarification; a PET or multilayer barrier film is outside this identity. Subtract film mass from gross reel mass. This locator is limited to unsupported, non-self-adhesive, non-laminated PE film; do not interpret the conflicting CPC 29220 source classification as the actual resin or grade.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

##### Elementary flows

###### river water (`river_water`)

Only direct river abstraction: water resource, renewable material resource from water, CAS 7732-18-5. Declare river, basin and country. Purchased water and its upstream abstraction must not be duplicated here.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`

#### Outputs

##### Product flows

###### Newsprint (`newsprint`)

The sole finished-paper output aggregates forming, drying, calendering, slitting, winding and wrapping. Reference amount is actual net paper mass at delivery moisture; core, wrapper and film are separate inputs, not reference-product mass.

- Selected flow: Newsprint `fdb2fcca-2716-4503-8c49-59e5b557e654`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-pp-bref-2015`

##### Waste flows

###### Wet papermaking screening fibre reject (`screen_reject`)

The broad Waste solid identity locates only this independently exported wet screening reject, with actual fibre/mineral/contaminant composition, wet mass, solids, origin and receiving treatment. It does not merge this stream with sludge or authorize an unspecified disposal route. Reject transferred internally to the wastewater plant is counted there once, not also as external screen waste.

- Selected flow: Wet papermaking screening fibre reject `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

###### Dewatered paper-mill primary sludge (`primary_sludge`)

The paper-production-sludge identity conditionally locates separately removed dewatered primary sludge only. Retain source stage, wet and dry masses, fibre/fines/mineral ash/additives, carbon origin, actual hazard assessment and receiver route. It is neither the biological sludge row nor returned fibre. If combined before removal, measure and model the actual combined stream once with a reviewed identity rather than duplicate totals.

- Selected flow: Dewatered paper-mill primary sludge `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

###### Dewatered paper-mill biological sludge (`bio_sludge`)

The same broad paper-production-sludge identity locates a different, separately removed excess biological sludge from the declared aerobic paper-mill treatment. Measure wet/dry mass, biomass/mineral/additive composition, fossil and biogenic carbon, stocks and receiving route independently. It is not municipal sludge, return activated sludge or the primary-sludge quantity; no treatment or hazard category is assumed from the UUID.

- Selected flow: Dewatered paper-mill biological sludge `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

###### Separately collected paper cutting dust (`collected_dust`)

Conditional separately removed collector dust from cutting/winding the actual paper grade. Measure fibre/mineral/additive composition, moisture, net waste mass and receiver; internally returned dust remains in the broke ledger, not this external waste. This waste is distinct from airborne escaped particles.

- Selected flow: Separately collected paper cutting dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign mass X of this separate particle interval or collected residue divided by measured net delivered paper P; retain sampling interval, original mass and uncertainty without assuming a positive emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

##### Elementary flows

###### Treated water discharged to fresh water (`return_water`)

CAS 7732-18-5; liquid water emitted to a named freshwater receiver only, measured in native m3 after on-site treatment. Retain actual water content, temperature/density and outfall timing; distinguish carrier water from dissolved/suspended pollutant quantities and reconcile the physical balance without counting pollutants again as pure water. This is not river withdrawal, vapour, wastewater transferred to another treatment plant or discharge to sea.

- Selected flow: Treated water discharged to fresh water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`

###### water vapour (`water_vapour`)

CAS 7732-18-5; emissions to outdoor air, unspecified subcompartment, ordinary short-term release. Quantify dryer-hood evaporation with an actual humidity/air-flow balance or reconciled physical water balance, excluding returned condensate.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`

###### chemical oxygen demand (`cod`)

Emissions to fresh water only, kg oxygen-demand equivalent from the declared COD test, not kg organic carbon. This single sum-indicator does not hide separately identified hazardous chemicals and is not added to BOD/TOC as extra physical organic mass.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pp-bref-2015`

###### Suspended solids discharged to fresh water (`tss`)

Measured filtered suspended-solid mass in final freshwater discharge. Distinguish this measurement from sludge exported before discharge.

- Selected flow: Suspended solids discharged to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pp-bref-2015`

###### nitrogen, total (excluding N2) (`nitrogen`)

Emissions to fresh water, total nitrogen excluding dissolved molecular N2, expressed as kg N. Do not add speciated ammonium/nitrate nitrogen again to the same total in one LCIA representation. N2O air release is a distinct exchange.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pp-bref-2015`

###### phosphorus, total (`phosphorus`)

Emissions to fresh water, total phosphorus as kg P. Declare analytical digestion and dissolved/particulate coverage; do not confuse kg P with kg phosphate or duplicate phosphate species inside the same total.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pp-bref-2015`

###### carbon dioxide (biogenic) (`bio_co2`)

Conditional actual biogenic CO2 from on-site effluent treatment, CAS 124-38-9, outdoor air unspecified. Use measured gas or a documented carbon-fate model; COD removal alone is not biogenic CO2. Do not remove this LCI exchange because a greenhouse-gas reporting convention excludes it.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gases`
- Sources: `jrc-pp-bref-2015`

###### methane (biogenic) (`methane`)

Conditional measured or independently justified fugitive biogenic CH4 from treatment or sludge handling, CAS 74-82-8, outdoor air unspecified. No anaerobic treatment, gas recovery, flaring or combustion is covered by this aerobic route.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gases`
- Sources: `jrc-pp-bref-2015`

###### nitrous oxide (`n2o`)

Conditional actual N2O from biological treatment, CAS 10024-97-2, outdoor air unspecified. Record kg N2O, not kg N2O-N; nitrogen-basis reports require the molecular conversion with source and uncertainty. N2O is not included in NOx.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gases`
- Sources: `jrc-pp-bref-2015`

###### carbon dioxide (fossil) (`fossil_co2`)

Conditional actual fossil CO2 from oxidation of fossil-origin organic additives in on-site treatment, CAS 124-38-9, outdoor air unspecified. Separate it from biogenic CO2 using measured carbon origin and a source-bound site carbon-fate assessment. Purchased-utility combustion stays upstream; no positive fossil-gas amount is presumed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gases`
- Sources: `jrc-pp-bref-2015`

###### methane (fossil) (`fossil_methane`)

Conditional actual fossil CH4 from treatment/sludge handling of fossil-origin organic material, CAS 74-82-8, outdoor air unspecified. Distinguish fossil and biogenic origin with site evidence, without assigning all measured CH4 to wood carbon. Unknown partition remains unresolved; no default factor is provided.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or explicitly justified exchange attributable to the same delivered-paper campaign, divided by measured net paper mass P; retain original amount and basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gases`
- Sources: `jrc-pp-bref-2015`

###### particles (PM2.5) (`pmfine`)

Conditional actual particles up to 2.5 micrometres aerodynamic diameter released across the site boundary to outdoor air, unspecified subcompartment, from paper cutting/winding. Measure escaped particles after controls and fugitive releases; collected dust and indoor circulating dust are not this elementary exchange. No combustion source or universal emission factor is implied.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign mass X of this separate particle interval or collected residue divided by measured net delivered paper P; retain sampling interval, original mass and uncertainty without assuming a positive emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `jrc-pp-bref-2015`

###### particles (PM2.5 - PM10) (`pmmid`)

Conditional actual outdoor release from cutting/winding with aerodynamic diameter greater than 2.5 and up to 10 micrometres. Use measured interval mass; subtract compatible simultaneously measured PM2.5 from cumulative PM10 only with matching basis and uncertainty. Do not report cumulative PM10 as this interval or add it again to the fine fraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign mass X of this separate particle interval or collected residue divided by measured net delivered paper P; retain sampling interval, original mass and uncertainty without assuming a positive emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `jrc-pp-bref-2015`

###### particles (> PM10) (`pmcoarse`)

Conditional actual cutting/winding particles above 10 micrometres aerodynamic diameter escaping outdoors, unspecified subcompartment. Use a measured coarse interval or compatible total-minus-PM10 mass; no assumed size split. Keep source composition and measured moisture in dry-solids, water and carbon ledgers without classifying collected dust as an air emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign mass X of this separate particle interval or collected residue divided by measured net delivered paper P; retain sampling interval, original mass and uncertainty without assuming a positive emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `jrc-pp-bref-2015`

## 7. Allocation and Co-product Handling

First separate grades and upstream pulping/energy nodes using direct metering and subdivision. Internal broke or white-water recovery is not a co-product and carries no substitution credit. Keep gross physical fibre, dry solids, mineral ash, water, energy and fossil/biogenic carbon ledgers distinct from the allocated environmental-burden ledger. Never multiply physical co-product quantities by burden shares; keep linked transfer quantities equal. For shared meters, use measured causal drivers (dryer evaporation/enthalpy, machine hours and actual loads), documenting grade-change losses and idle consumption. If subdivision cannot resolve a genuinely shared process, state the causal physical allocation rationale and sensitivity; a demonstrably unsupported physical relationship needs separately justified economic allocation and review. Residue sales do not automatically establish co-product status. Any substitution, avoided burden or recovered-input convention requires explicit study rules, evidence and sensitivity, not an automatic credit. These are author methodological requirements informed by BREF process differentiation, not a claim that BREF prescribes LCA allocation.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | pm | accepted paper | meter/laboratory/transaction record | gross reel mass; core tare; wrapper/film tare; net mass; lot; moisture; ash; grade; width; area; grammage | Calibrated reel scales and dispatch acceptance records; paired representative sealed moisture samples, wet/dry weighing to constant mass using a documented applicable laboratory method. Retain temperature, volatile-material screening and uncertainty. ISO 638-1 scope describes solid samples, not slush or saleable pulp lots. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_furnish | pm | pulp receipt | meter/laboratory/transaction record | supplier lot; species; pulping/bleaching route; wet mass; solids; ash; storage change; upstream link | Reconcile delivery weigh tickets, tank mass/volume with density, laboratory solids and supplier lot certificates; dry furnish fractions use actual measured dry solids. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_recipe | pm | individual chemical | meter/laboratory/transaction record | chemical identity/CAS; product grade; supplied mass; solids; active fraction; hydration; stage dose; stock changes | Each dosing meter or weighed batch reconciled with purchases and stocks; record wet-end and treatment doses separately and supplier dataset reference basis. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_utilities | pm | individual utility | meter/laboratory/transaction record | electricity kWh/voltage; steam mass/pressure/temperature/dryness; condensate mass/enthalpy; water volume/density; meter; time | Read calibrated meters at each stage and reconciled node boundary; pair steam supply/return enthalpy records and separately preserve useful heat and mass-water ledgers. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_packaging | pm | individual packaging | meter/laboratory/transaction record | component; resin/fibre; mass; reused core cycles; grade; supplied assembly; receiver | Weigh actual components and tare for each accepted reel; reconcile wrapping consumption, offcuts and reusable-core stocks. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_residues | pm | individual residue | meter/laboratory/transaction record | wet mass; dry solids; ash; contaminant analysis; carbon origin; source stage; destination; treatment | Weigh outgoing batches, sample solids and composition; reconcile collection permits and receiver receipts. Track retained stocks, not just removed sludge. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_water | pm | physical water | meter/laboratory/transaction record | river abstraction; purchased water; steam water; condensate; recirculation; discharge; stock; evaporation; humidity; dry-air flow | Meter boundary liquid streams and record density; measure hood exhaust humidity/dry-air flow or close the physical water balance including product moisture, sludge moisture, condensate and measured water carried with separately collected or escaped particles; do not invent particle moisture or count it as vapour. Separate internal recirculation. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_effluent | pm | individual pollutant | meter/laboratory/transaction record | sample time; post-treatment outfall; receiver; interval discharge m3; COD mg O2/L; TSS mg/L; total N mg N/L; total P mg P/L; method; uncertainty | Pair flow-proportional composite samples and simultaneous discharge meters; capture grade changes, upsets and bypasses. Record laboratory analytical methods and scope; retain separate pollutant and carrier-water amounts. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_gases | pm | individual gas | meter/laboratory/transaction record | gas species; flow; concentration; dry/wet basis; T/P; test period; carbon/nitrogen origin; dissolved gas; model/factor provenance | Measure treatment off-gases and sludge-handling releases, or justify a source-bound site carbon/nitrogen-fate model using actual records and uncertainty. An unmeasured gas is unresolved, not zero; keep biogenic CO2 in LCI. | Original row unit; retain raw basis | Each lot or metering/sampling interval | Same complete declared campaign including changes and losses | Selected grade and node; upstream links identified | per 1 kg reference flow | Calibration; sample chain; supplier/receiver record; uncertainty |
| cp_dust | pm | cutting and winding particles | outlet/fugitive measurement | aerodynamic size cut; concentration; paired air volume; T/P and dry/wet basis; interval; control state; paper grade; fibre/mineral composition; moisture; collected and returned dust | Use calibrated size-resolved sampling appropriate to the outlet or fugitive release and simultaneous air-flow records. Derive each non-overlapping mass from compatible concentration and volume, aggregating actual operating periods. No universal paper-dust factor; unmeasured means unresolved, with evidence required for either positive or zero release. | kg; retain original concentration and volume units | Each representative condition and actual release interval | Same complete declared campaign | Actual cutting/winding and site boundary; exclude internal circulating and captured dust | per 1 kg reference flow | Calibration, sampling method, matched operating state and uncertainty |

Every protocol aggregates the actual campaign numerator X to X/P per 1 kg reference flow using cp_mass; records retain stage, lot and unnormalized numerator. Collect full production and stock-change coverage without treating selected invoice months as complete plant coverage. Optional rows require documented absence; additional actually used chemicals or packaging components require individual audited cards. No positive default amounts are supplied. [jrc-pp-bref-2015, iso638-solid-scope]

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_mass | newsprint | P = sum(gross reel mass - measured core tare - measured wrapper tare - measured film tare); delivered net mass only, excluding rejects and internal broke. | cp_mass | P | iso638-solid-scope |
| dry_conversion | mass-based material/product/residue and analytical moisture-component ledgers | d_j = m_j * (1-w_j); D = sum d_j for accepted paper lots only, matching P, without summing other input/output solids into D; a product-dry-mass intensity I_d becomes delivered-mass intensity I_d * D/P. No assumed 90% air-dry basis. These are auxiliary mass/moisture calculations only for the stated material/component scopes; native electricity MJ and water Volume/m3 exchanges retain their own reference property/unit. Independently measured component mass does not replace a native energy/volume numerator. | cp_mass; cp_furnish; cp_recipe; cp_residues | measured dry/wet conversion | iso638-solid-scope |
| campaign_normalization | all inventory rows | x = X / P, with X the attributable campaign exchange in its original row unit and P measured delivered net paper kg; preserve unallocated physical and allocated-burden ledgers separately. | cp_mass; all applicable row protocols | x | jrc-pp-bref-2015 |
| effluent_load | cod, tss, nitrogen, phosphorus | L = sum(c_k * V_k * 0.001), where c_k is the matching pollutant concentration in mg/L and V_k is measured discharge m3 for the same interval; x = L/P. COD uses O2 equivalent, N uses N and P uses P. | cp_effluent; cp_mass | kg pollutant per kg delivered paper | jrc-pp-bref-2015 |
| electricity_units | electricity | MJ = 3.6 * metered kWh; x = MJ/P. Preserve the verified Net calorific value property label without treating electric energy as fuel heat. | cp_utilities; cp_mass | MJ per kg delivered paper | jrc-pp-bref-2015 |
| steam_enthalpy | steam | H_net = sum(m_supply * h_supply - m_return * h_return) across the same metering boundary, including documented condensate losses and delivery convention; compare with supplier background definition before linking. Retain measured steam mass as its separate exchange basis. | cp_utilities; supplier enthalpy convention | net heat reconciliation; steam kg | jrc-pp-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Actual species, medium/submedium, origin, route, treatment and property/unit must match the adopted record and supplier dataset. Unresolved identities are explicit; do not use correction flows or adjacent products. | Direct identity and supplier specification |
| balances | pm | Close independent wet mass, dry solids, ash, water and carbon balances using stocks, rejects, product and escaped particle intervals; account separately for actual dust fibre, ash, moisture and carbon origin, without duplicating internal return, collected waste or outdoor release. Disclose residual and uncertainty. COD is not a carbon-balance mass. | Physical stage ledgers, laboratory tests |
| coverage | pm | Document full campaign, downtime, grade changes, purchased supplies, transport and all actual chemicals; no dataset completeness claim while important quantities or links are unresolved. | Campaign and receiver records |
| emission_basis | all inventory rows | Retain sum-indicator/species reconciliation; avoid nested totals or size fractions counted twice. Boilers require their own source and emissions if later included, not sawmill dust evidence. | Analytical reports and justified applicability |

## 9. Validation Rules

Require one completed output linked by newsprint and its reference UUID; it equals 1 kg of net delivered paper. Match bilingual reference, row identities, denominators, aggregation and equations. Reject automatic g/m2-to-kg, area-to-kg or roll-count-to-kg equivalence: measured same-lot area times actual grammage divided by 1000 is only a QA estimate until reconciled to weighed net mass and moisture. Do not use double reference outputs for an internal reel-to-wrapping handover. Check original stage meters and equal internal-link quantities. Missing receiver, solids/active fraction, pulp route, utility reference basis or material flow identity prevents a complete dataset. Record skipped measurement/emission methods and remaining uncertainty; database identities do not prove measured inventory or scientific approval. [jrc-pp-bref-2015, iso638-solid-scope]

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared newsprint-manufacture supply node with compatible upstream and downstream links; author candidate requires interpretation and review |
| excluded_use | Printed-newspaper service; generic printing/book paper; stand-alone integrated pulping; complete LCIA from missing identities/quantities |
| required_metadata | Required qualifiers; supply route; campaign P/D; moisture; formulation; stage balances; system links; allocation rationale |
| required_quality_disclosure | Actual/unmeasured exchanges, blank UUIDs, source limits, supplier basis compatibility, missing official localization, uncertainty and independent review state |
| update_trigger | Changed product finish/delivery, pulp route/furnish, chemistry, utilities, treatment, evidence or supplier reference basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Chapter 7 §§7.1.1-7.1.4, 7.1.8-7.1.10; Table 7.6 newsprint row; Table 7.7 conditional chemical aids; §7.2.2 water and residue descriptions. Process decomposition and physical circuits only; historical or single-site numbers and BAT levels are not defaults. |
| norske-nornews | literature | Norske Skog, Newsprint / Nornews, https://www.norskeskog.com/Products/Publication-paper/Newsprint/ | Manufacturer product and cold-set printing purpose, virgin/recycled-fibre possibilities. No common recipe or current site quantity inferred. |
| norske-skogn-2025 | literature | Norske Skog, Skogn to start production of book paper, 2025-06-17, https://www.norskeskog.com/blog/2025/06/17/skogn-to-start-production-of-book-paper/ | Actual TMP/virgin-fibre route and newsprint/book-paper distinction at one mill. A site observation, not a universal furnish. |
| iso638-solid-scope | standard | ISO 638-1:2022 official scope/abstract, https://committee.iso.org/standard/83614.html?browse=ics | Only applicability of oven-dry solid paper/pulp tests and exclusions for slush and saleable pulp-lot mass. Full procedure was not acquired; no compliance claim. Site laboratory method and lot sampling must be documented separately. |
