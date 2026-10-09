---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.citrus-pectin-powder
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Citrus pectin powder manufacture: sucrose-standardized ethanol route

## 1. Scope and Applicability

This PCR covers manufacturing of a specific sucrose-standardized, non-amidated citrus pectin powder for use as a food gelling, thickening or stabilizing ingredient. It covers purchased washed dried citrus peel, aqueous hydrochloric-acid extraction, clarification, concentration, ethanol precipitation and washing, drying, milling, measured sucrose blending and packing. It does not prescribe a food processing recipe or establish food safety compliance. Product identity and commercial standardization are supported by jecfa-pectins-2007 and hf-pectin-2026; unit operations by ippa-process.

UNSD places pectic substances within CPC 23999, a diverse residual subclass (unsd-cpc-2025, printed/PDF p.112). This scope is deliberately narrower: other plant extracts, agar/guar/locust-bean thickeners, malt extracts, dessert preparations, protein concentrates, substitutes, chewing gum, teas and sweeteners remain uncovered. Apple/beet raw materials, deliberate de-esterification/amidation, non-ethanol precipitation, buffer salts and non-food applications require another assessed route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.citrus-pectin-powder |
| classification_refs | CPC 3.0 23999; narrower; unsd-cpc-2025 |
| covered_products | Sucrose-standardized non-amidated citrus pectin powder from the declared HCl/ethanol route |
| excluded_products | Other CPC 23999 products; apple or beet pectin; amidated, intentionally de-esterified or salt-precipitated pectin; formulations containing added buffer salts or preservatives; non-food grades |
| representative_product | Sucrose-standardized non-amidated citrus pectin powder |
| production_route | Purchased washed dried citrus peel → aqueous HCl extraction and filtration → concentration → ethanol precipitation, washing and cake separation → drying and milling → sucrose standardization, testing and packing; internal solvent recovery where operated |
| market_state | Accepted dry powder ingredient at factory gate, net of packaging; measured moisture retained; no shelf-life guarantee |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared pectin ingredient for downstream food formulation; no comparative gel-performance equivalence is assumed |
| How much | 1 kg accepted net delivered powder |
| How well | Declare citrus source, no amidation or deliberate de-esterification, sucrose fraction, pectin assay, moisture, degree of esterification, gel-strength/viscosity test method and actual lot acceptance specification |
| How long or cycle | One manufacturing and factory-gate handover; downstream use and storage life are outside this unit |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sucrose-standardized non-amidated citrus pectin powder |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Citrus species and peel preparation; HCl concentration; ethanol purity and origin; no amidation/de-esterification; sucrose and pectin mass fractions; retained moisture; esterification and functional test results; batch acceptance; site/year; packaging components; solvent recovery arrangement; utility supply |

Required qualifiers must be present in the data package. The 1 kg reference is delivered mixed powder, not 1 kg chemically pure or dry-basis pectin. Product comparisons additionally require actual functional performance and formulation context; no food safety approval follows from this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference_product_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net powder mass B over the reporting campaign, excluding packaging, rejected lots and duplicate internal rework. Collect B using cp_product. Normalize every exchange to per 1 kg reference flow. |
| `wet_dry_basis` | Peel, cake, powder and residue | Mass | kg | Record each stream as received wet mass with measured water fraction w, ethanol fraction e and any other measured volatile fraction v, all on the same wet-mass basis. Nonvolatile dry solids = wet mass × (1 - w - e - v); use e or v = 0 only when absence is established. Do not count ethanol as dry solids or subtract it twice when an assay already includes volatile loss. Never use dry-solids mass as delivered product mass. |
| `solution_basis` | Acid, ethanol and caustic | Mass | kg | Preserve actual solution mass and mass-fraction assay c; active substance = solution mass × c is a separate balance quantity, not a silent rewrite of the flow reference property. |
| `utility_basis` | Electricity and steam heat | Energy, retaining the verified property | MJ | Preserve electricity Net calorific value and heat Gross calorific value references. Convert metered kWh with 1 kWh = 3.6 MJ. Steam mass requires measured supply/return enthalpy, not an invented heat-per-kg factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Washed dried citrus peel, purchased acid, ethanol, sucrose, treated water, electricity, steam heat and packaging delivered to the manufacturing site |
| starting_condition_role | Technosphere inputs into a gate-to-gate manufacturing foreground |
| product_classification_scope | Only the stated citrus pectin powder route, a narrower pectic-substance representative of CPC 23999 |
| recursive_input_rule | Any purchased pectin intermediate is recorded once with a matching upstream dataset and declared entry stage; upstream extraction is not reconstructed recursively or treated as free |
| upstream_dataset_requirement | Link citrus cultivation/juice co-product allocation and peel washing/drying, chemical and sucrose production, water treatment, grid supply, steam generation, packaging production, inbound transport when included, and external waste treatment. Foreground alone is not complete cradle-to-gate |
| disclosure | Declare site/year, entry state, batch route, utilities, internal recycle, external waste destination, upstream links and gaps; downstream food preparation, consumption, distribution and packaging end of life are excluded |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | Declared manufacturing route | Include all actual extraction, filtration, concentration, precipitation, washing, separation, drying, milling, blending, packing and production-attributable cleaning; cp_utilities also covers any actual internal recovery equipment. | `ippa-process`; `efsa-pectin-manufacture-2017` |
| `boundary_external_links` | Purchased inputs and waste transfers | Document actual supplier and treatment links. Citrus peel described as a residue does not automatically have zero upstream burden; upstream juice/peel allocation must be evidenced. Utility boiler combustion and external treatment emissions are outside the measured foreground. |  |
| `boundary_no_default_emissions` | Elementary exchanges | Declare measured species, receiving medium and submedium. No mandatory CO2, NOx, methane or pollutant emissions are inferred from process names; expand actual atomic rows when evidence shows an omitted exchange. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `extract_clarify` | Peel receipt, aqueous acid extraction and clarification | `required` | Always for the declared extraction route | Foreground manufacturing | per 1 kg reference flow; linked intermediate mass |
| `concentrate_precipitate` | Concentration, ethanol precipitation, washing and solvent management | `required` | Always; internal solvent recovery is included only when operated | Foreground manufacturing | per 1 kg reference flow; linked intermediate mass |
| `dry_blend_pack` | Drying, milling, sucrose standardization, testing and packing | `required` | Always for standardized saleable powder | Foreground manufacturing | per 1 kg reference flow; linked intermediate mass |
| `sanitation` | Equipment cleaning and wastewater transfer | `required` | Always; caustic row only when that chemical is used | Foreground manufacturing | per 1 kg reference flow; linked intermediate mass |

### Process: Peel receipt, aqueous acid extraction and clarification (`extract_clarify`)

Inspect dried peel receipts and moisture; charge hot aqueous extraction liquor acidified with hydrochloric acid, then separate insoluble peel by filtration. The 30% reagent card is conditional on the purchased reagent actually having that concentration. Record extraction temperature, residence time, pH and filtration arrangement from operating records; this PCR provides no cooking or safety settings. [ippa-process; efsa-pectin-manufacture-2017]

#### Inputs

##### Product flows

###### Washed dried citrus peel (`peel_input`)

Collect net received washed dried peel mass and moisture; exclude bale packaging and reconcile stock movements.

- Selected flow: Washed dried citrus peel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Process Water (`extraction_water`)

Meter treated water entering extraction and dilution; do not count water already carried in peel or acid twice.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Hydrochloric acid (30%) (`hydrochloric_acid`)

Only for actual 30% by mass HCl solution; collect solution mass and certificate assay, not pure-HCl mass. Other concentrations require their own verified identity.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Alternating current (`extract_clarify_electricity`)

Collect attributed user-side electricity. This UUID applies only to matching CN grid-average 1–35 kV medium-voltage consumption mix supplied to the user; retain the actual supply country, voltage, supplier and delivery boundary. For another country, voltage or generation-side supply, use a newly verified matching identity and supplier data; neither this UUID nor its provider is a global default. Preserve the original Net calorific value reference and verified energy unit chain; convert metered kWh with 1 kWh = 3.6 MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Process heat from steam (`extract_clarify_heat`)

Record delivered industrial-boiler steam heat in MJ from heat meters or measured steam mass and supply/return enthalpy difference. Boiler fuel and stack emissions belong to its linked provider, not this heat exchange.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clarified aqueous citrus pectin extract (`clarified_extract_output`)

Weigh clarified extract sent to concentration; retain dissolved-solids concentration and paired transfer records.

- Selected flow: Clarified aqueous citrus pectin extract
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_intermediate; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intermediate`

###### Wet depectinized citrus peel for animal feed (`peel_residue_feed`)

Conditional on documented sale or transfer as usable animal-feed co-product; record wet mass, dry matter and recipient acceptance. If absent, declare not applicable.

- Selected flow: Wet depectinized citrus peel for animal feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_residue; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

##### Waste flows

###### Wet depectinized citrus peel residue (`peel_residue_waste`)

Record wet spent peel sent to waste treatment only; measure moisture and treatment destination. Never also count the same mass as feed co-product.

- Selected flow: Wet depectinized citrus peel residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_residue; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

##### Elementary flows

### Process: Concentration, ethanol precipitation, washing and solvent management (`concentrate_precipitate`)

Evaporate water from clarified extract; precipitate pectin with undenatured ethanol, wash and mechanically separate the wet cake. Include metered distillation/condensation and cooling when solvent is recovered on site. Record gross ethanol circulation separately from fresh makeup and recovery; internal recycle is neither a new purchase nor an avoided-product credit. This is an elected ethanol route, not a requirement for all pectins. [ippa-process; vincent-citrus-2015]

#### Inputs

##### Product flows

###### Alternating current (`concentrate_precipitate_electricity`)

Collect attributed user-side electricity. This UUID applies only to matching CN grid-average 1–35 kV medium-voltage consumption mix supplied to the user; retain the actual supply country, voltage, supplier and delivery boundary. For another country, voltage or generation-side supply, use a newly verified matching identity and supplier data; neither this UUID nor its provider is a global default. Preserve the original Net calorific value reference and verified energy unit chain; convert metered kWh with 1 kWh = 3.6 MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Process heat from steam (`concentrate_precipitate_heat`)

Record delivered industrial-boiler steam heat in MJ from heat meters or measured steam mass and supply/return enthalpy difference. Boiler fuel and stack emissions belong to its linked provider, not this heat exchange.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Clarified aqueous citrus pectin extract (`clarified_extract_input`)

Use the paired clarified_extract_output mass without adding upstream burdens twice.

- Selected flow: Clarified aqueous citrus pectin extract
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_intermediate; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intermediate`

###### Ethanol (`ethanol_makeup`)

Measure fresh undenatured ethanol makeup as delivered liquid mass with measured purity and water content. Select an upstream supply matching its actual origin and assay; this substance identity establishes neither food grade nor bio/fossil origin. Internal recovered liquor is excluded from purchases.

- Selected flow: Ethanol `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_solvent; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`

###### Process Water (`precipitation_water`)

Meter added wash/dilution/cooling makeup water only; record internal water recirculation separately.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed wet non-amidated citrus pectin cake (`wet_cake_output`)

Weigh washed wet cake transferred to the dryer; measure water and residual ethanol fractions separately.

- Selected flow: Washed wet non-amidated citrus pectin cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_intermediate; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intermediate`

##### Waste flows

###### Untreated citrus pectin process wastewater (`solvent_process_wastewater`)

Meter combined process liquor leaving for external treatment after any recovery; retain ethanol concentration, pH and treatment connection. Do not express this waste stream as a water-resource elementary flow.

- Selected flow: Untreated citrus pectin process wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_effluent; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`

##### Elementary flows

###### ethanol (`concentrate_precipitate_ethanol_air`)

Conditional on measured ethanol release to outdoor air with unspecified subcompartment, immediate emission. Use chemical-specific monitoring or a closed solvent balance; unaccounted ethanol loss is not automatically an air release. Different subcompartments need different identity.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_emissions; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

###### water vapour (`concentrate_precipitate_water_air`)

Conditional on actual water vapour venting to outdoor air with unspecified subcompartment; determine water mass from moisture/condensate balance. Water condensed and reused inside the site is not this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_emissions; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

### Process: Drying, milling, sucrose standardization, testing and packing (`dry_blend_pack`)

Dry the washed cake, mill and sieve, test the powder, blend with measured refined sucrose and pack the accepted product. Retained moisture belongs to delivered net product mass. Capture rejects, dust collection and rework separately. Deliberate de-esterification, amidation, buffer-salt blending and preservatives are outside this representative route. [ippa-process; hf-pectin-2026]

#### Inputs

##### Product flows

###### Alternating current (`dry_blend_pack_electricity`)

Collect attributed user-side electricity. This UUID applies only to matching CN grid-average 1–35 kV medium-voltage consumption mix supplied to the user; retain the actual supply country, voltage, supplier and delivery boundary. For another country, voltage or generation-side supply, use a newly verified matching identity and supplier data; neither this UUID nor its provider is a global default. Preserve the original Net calorific value reference and verified energy unit chain; convert metered kWh with 1 kWh = 3.6 MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Process heat from steam (`dry_blend_pack_heat`)

Record delivered industrial-boiler steam heat in MJ from heat meters or measured steam mass and supply/return enthalpy difference. Boiler fuel and stack emissions belong to its linked provider, not this heat exchange.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Washed wet non-amidated citrus pectin cake (`wet_cake_input`)

Use paired wet_cake_output records with the same water/ethanol fractions.

- Selected flow: Washed wet non-amidated citrus pectin cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_intermediate; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intermediate`

###### Refined crystalline sucrose (`standardizing_sucrose`)

Weigh each batch of refined crystalline sucrose added for standardization; retain certificate and recipe. Do not infer its amount from nominal gelling strength.

- Selected flow: Refined crystalline sucrose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Paper Bag (`paper_bag`)

Conditional on a kraft paper outer bag; weigh the paper bag component excluding its separate liner. Other pack designs require separate atomic rows.

- Selected flow: Paper Bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Low-density polyethylene foil (PE-LD) (`polyethylene_liner`)

Conditional on an LDPE liner; weigh only the low-density polyethylene film, not laminated or mixed-material packaging.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sucrose-standardized non-amidated citrus pectin powder (`reference_product_output`)

1 kg accepted net sucrose-standardized non-amidated citrus pectin powder, excluding all packaging.

- Selected flow: Sucrose-standardized non-amidated citrus pectin powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_product`

##### Waste flows

###### Discarded dry citrus pectin powder (`discarded_pectin`)

Conditional on irrecoverable rejected or collected dry pectin powder; weigh actual discard and destination. Reworked powder stays internal and is not also a waste output.

- Selected flow: Discarded dry citrus pectin powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_residue; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`

##### Elementary flows

###### ethanol (`dry_blend_pack_ethanol_air`)

Conditional on measured ethanol release to outdoor air with unspecified subcompartment, immediate emission. Use chemical-specific monitoring or a closed solvent balance; unaccounted ethanol loss is not automatically an air release. Different subcompartments need different identity.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_emissions; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

###### water vapour (`dry_blend_pack_water_air`)

Conditional on actual water vapour venting to outdoor air with unspecified subcompartment; determine water mass from moisture/condensate balance. Water condensed and reused inside the site is not this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_emissions; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

### Process: Equipment cleaning and wastewater transfer (`sanitation`)

Include production-attributable equipment rinsing, cleaning, pumps and effluent transfer. The sodium hydroxide 50% solution card applies only to that measured purchased solution; add separately identified atomic rows for any other actual cleaner. Wastewater treatment is an external downstream link in this boundary; no wastewater discharge to the environment is inferred.

#### Inputs

##### Product flows

###### Alternating current (`sanitation_electricity`)

Collect attributed user-side electricity. This UUID applies only to matching CN grid-average 1–35 kV medium-voltage consumption mix supplied to the user; retain the actual supply country, voltage, supplier and delivery boundary. For another country, voltage or generation-side supply, use a newly verified matching identity and supplier data; neither this UUID nor its provider is a global default. Preserve the original Net calorific value reference and verified energy unit chain; convert metered kWh with 1 kWh = 3.6 MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_utilities; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Process Water (`cleaning_water`)

Meter cleaning and rinsing water allocated to the reporting product campaign, excluding recycled water already recorded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Sodium hydroxide solution, 50% (`cleaning_caustic`)

Only when purchased 50% by mass NaOH solution is actually used; weigh solution makeup and retain assay. Record dilution water separately. The chemical and concentration are not a required cleaning recipe.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_material; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline pectin-equipment cleaning wastewater (`cleaning_effluent`)

Measure the alkaline cleaning effluent handed to external wastewater treatment; preserve pH and dissolved chemical analysis. Avoid overlap with solvent_process_wastewater.

- Selected flow: Alkaline pectin-equipment cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount per 1 kg reference flow using cp_effluent; retain the stated applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Shared equipment and utilities | Use product-campaign submetering and separately observed operations first. cp_utilities records measured causal drivers and reconciles the allocated shares to the site total. Do not allocate steam, electricity or cleaning from assumed market averages. |  |
| `allocation_spent_peel` | Spent citrus peel | Classify each physical spent-peel shipment once as waste or documented usable feed co-product using cp_residue. For co-production collect all product quantities, dry matter, metered separable operations and the evidence for the remaining physical relationship. A remaining shared burden without a verified relationship requires methodological review; no automatic wet-mass allocation or avoided-feed credit is provided. | `vincent-citrus-2015` |
| `allocation_internal_recycle` | Solvent, water and pectin rework | Account internal recycling by mass balance, not negative purchases or external co-products. Include recovery utilities and purge treatment; only actual exported recovered solvent is a potential co-product and requires a separate verified row, identity, quantity and allocation assessment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | dry_blend_pack | reference product | weighing | batch_id; net accepted powder mass B; gross/tare; moisture; sucrose fraction; esterification; lot test results | Calibrated net weighing and lot release records excluding packaging, rejects and duplicate rework; retain actual gel/viscosity method |kg Calculation: Sum accepted B; express output as 1 kg reference flow.| Each batch | One complete reporting campaign with all accepted lots | Declared powder line at one site | per 1 kg reference flow | Scale calibration; release certificate; batch and stock reconciliation |
| cp_material | all | atomic incoming material | weighing_and_metering | row_id; lot; gross/tare; meter totals; stock start/end; moisture; solution concentration; supplier assay; density if volume used | Separate material issue records, calibrated scales and water meters; convert volume only with measured temperature-specific density; retain atomically separate packaging components |kg Calculation: Attributable net external consumption / B; per 1 kg reference flow.| Every batch and campaign reconciliation | Same reporting campaign as B | Actual process inlet, including production cleaning | per 1 kg reference flow | Invoices; assays; receipts/issues; stock balance; calibration |
| cp_intermediate | extract_clarify; concentrate_precipitate; dry_blend_pack | paired pectin intermediate | weighing | transfer_id; source/destination; wet mass; water fraction; ethanol fraction; dissolved solids | Calibrated tank/transfer weighing and paired batch samples; link the same intermediate on both sides |kg Calculation: Matched transfer mass / B; per 1 kg reference flow; cancel internal transfers in aggregated foreground.| Every transfer | Same campaign as B, include work-in-progress stock changes | Internal process interfaces only | per 1 kg reference flow | Transfer pairing; concentration assays; stock reconciliation |
| cp_utilities | all | electricity and steam heat separately | metering | process_id; meter start/end; kWh; voltage; grid location; MJ heat; steam mass; supply/return pressure and enthalpy; causal allocation driver | Submeter equipment including evaporation, solvent recovery and cleaning; use heat meter or measured steam/enthalpy; reconcile site totals |MJ Calculation: Attributable MJ / B; per 1 kg reference flow.| Continuous meters reconciled by campaign | Same complete campaign as B including startup/shutdown | User-side electricity and delivered steam heat only | per 1 kg reference flow | Meter calibration; grid/steam delivery records; documented drivers |
| cp_solvent | concentrate_precipitate; dry_blend_pack | ethanol makeup and recovery balance | mass_balance | fresh makeup mass; ethanol assay; gross circulation; recovered liquor mass/assay; opening/closing stocks; purges; cake retention; measured releases | Weigh transfers and tank stocks, assay each solution, and retain solvent recovery operating records. Monitor cooling water/heat and electricity in cp_utilities |kg Calculation: Fresh delivered makeup / B; per 1 kg reference flow; internal circulation excluded from external consumption.| Every batch; campaign balance | Same campaign as B | Entire solvent circuit and dryer retention | per 1 kg reference flow | Tank calibration; ethanol assays; recovery and purge records |
| cp_residue | extract_clarify; dry_blend_pack | spent peel and discarded pectin separately | weighing | row_id; shipment; wet mass; dry matter; discard or feed status; recipient; separable-operation meters; all co-product amounts | Weigh each physical residue shipment and verify waste treatment or feed acceptance; reconcile rejected powder and rework |kg Calculation: Each mutually exclusive outlet mass / B; per 1 kg reference flow.| Each shipment/batch | Same campaign as B | Process residue outlets | per 1 kg reference flow | Manifests; recipient acceptance; moisture assay; allocation evidence |
| cp_effluent | concentrate_precipitate; sanitation | process and cleaning effluent separately | metering_and_sampling | outlet; liquid mass; volume; density/temperature; ethanol concentration; pH; sampled composition; receiving treatment | Separate effluent metering and representative sampling; use measured density for volume-to-mass conversion; distinguish external transfer from internal condensate reuse |kg Calculation: Transferred liquid mass / B; per 1 kg reference flow.| Each discharge with campaign reconciliation | Same campaign as B including cleaning | External wastewater treatment handover | per 1 kg reference flow | Meters; density; analysis; treatment receipt |
| cp_emissions | concentrate_precipitate; dry_blend_pack | ethanol and water vapour separately | monitoring_and_balance | species; gas flow; concentration; operating duration; release location; water/ethanol inputs and stocks; collected condensate; product retention; abatement | Use chemical-specific monitoring or independently closed species balances; distinguish outdoor air from indoor air and long-term releases. Do not assign unexplained solvent losses to air |kg Calculation: Measured species mass / B; per 1 kg reference flow.| Representative production/startup/shutdown monitoring | Same campaign as B; state any monitoring gaps | Actual releases crossing site boundary only | per 1 kg reference flow | Sampling QA; uncertainty; mass-balance closure; medium evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_campaign` | all inventory rows | Divide each attributable campaign exchange by accepted net powder mass B in kg; report per 1 kg reference flow. Reference product output is 1 kg. Pair internal transfers before aggregation. | B; cp_product; cp_material; cp_intermediate; cp_utilities; cp_solvent; cp_residue; cp_effluent; cp_emissions | Exchange amount per 1 kg reference flow |  |
| `energy_conversion` | Electricity rows | Convert kWh to MJ by multiplying by 3.6; retain the verified Net calorific value property and actual supply state. | cp_utilities | MJ per 1 kg reference flow |  |
| `composition_balance` | Peel, pectin cake, product and solvent | For balance checks use distinct measured fractions on the same wet-mass basis: nonvolatile dry solids = wet stream mass × (1 - water fraction - ethanol fraction - other volatile fraction); ethanol mass = wet stream mass × ethanol fraction. Establish absent volatile fractions before using zero and avoid double subtraction when an assay includes volatile loss. Reconcile water, ethanol, nonvolatile solids, internal recovery and stock change separately. Sucrose is part of nonvolatile solids but not pectin solids; retained ethanol is neither. Keep actual wet mass for transfers and delivered product mass for the reference flow. | cp_material; cp_intermediate; cp_solvent; cp_product | Separate water, ethanol and solids balances with disclosed residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product` | Accepted powder | Retain lot-specific pectin identity, esterification, sucrose fraction, moisture and functional test results. Do not extrapolate a supplier declaration into food safety or use authorization. Historical JECFA evidence informs identity only. | cp_product; jecfa-pectins-2007; hf-pectin-2026 |
| `quality_complete` | Foreground campaign | Cover all batches, startup/shutdown, cleaning, reject disposition and recycle stock changes. Extend the atomic inventory for actual omitted auxiliaries, filter media or packaging components; do not replace them with collection labels. | cp_material; cp_utilities; cp_residue |
| `quality_identity` | All rows | Use verified public identity, original reference property/unit and actual route/compartment. Unresolved identities and upstream representativeness gaps remain visible; do not silently substitute generic food or wastewater flows. | Supplier assays; medium records; verified flow definitions |
| `quality_uncertainty` | Balances and monitoring | Report meter/assay uncertainty, missing periods, balances and unresolved allocation; assess residuals against measured uncertainty, not invented universal tolerances. | cp_intermediate; cp_solvent; cp_effluent; cp_emissions |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Reference product | Require 1 kg accepted net mixed powder output, the reference_product_output link, all qualifiers and cp_product. Do not validate pure pectin, wet cake or sugar-only output as this product. | `jecfa-pectins-2007` |
| `validate_route` | Process inventory | Require evidence for every declared process, matching intermediate transfers and site utilities. Conditional residue/feed, caustic, packaging and elementary rows need measured inclusion or an explicit absence explanation. Missing required records are incomplete, not zero. | `ippa-process` |
| `validate_balance` | Solvent, water, solids and allocation | Check nonnegative physical exchanges, positive B, solution assay consistency, matched transfers, mass-balance closure and no duplicate waste/feed or recycle credits. Unresolved residuals, composition, identity or allocation prevent a conclusive dataset claim. |  |
| `validate_electricity_supply` | Electricity rows and linked providers | Verify country, voltage, consumption/production mix and user-side/generation-side boundary against supply records. UUID 3d76981f-964a-4865-b588-0e067a2a1163 is restricted to matching CN grid-average 1–35 kV user-side consumption mix; other supplies require a newly verified identity and supplier data. Do not use this UUID or its provider as a global default. This identity condition does not restrict the product methodology to CN. Preserve the original Net calorific value reference, verified energy unit chain and 1 kWh = 3.6 MJ conversion. |  |
| `validate_boundary_claim` | Dataset completeness | A gate-to-gate foreground cannot be called complete cradle-to-gate without verified upstream and external-treatment links. LCA validation does not establish food safety, health claims or regulatory approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate manufacturing foreground dataset for the declared pectin powder route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Link the matching powder ingredient to downstream food formulation with declared composition and upstream coverage |
| excluded_use | Whole CPC 23999 coverage; pure-pectin functional equivalence; generic other-food dataset; other pectin routes; safety approval; complete cradle-to-gate without upstream links |
| required_metadata | Product/lot, composition and moisture, function-test method, extraction and solvent route, site/year, net output B, supplier and treatment links, utility state, recovery arrangement, residue status and allocation basis |
| required_quality_disclosure | Actual metering/sample coverage, uncertainty, missing identities, upstream/treatment gaps, balance residuals, excluded operations and unresolved allocation |
| update_trigger | Change in citrus feed preparation, formulation, acid/solvent grade, de-esterification/amidation, energy supply, recovery system, residue destination, packaging or material data coverage |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.112, 23999. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-10-05 UTC) | Narrow pectic-substance classification context only |
| jecfa-pectins-2007 | official_guidance | FAO JECFA Monographs 4 (2007), PECTINS, individual specification PDF p.1: definition, commercial descriptors. https://www.fao.org/fileadmin/user_upload/jecfa_additives/docs/monograph4/additive-306-m4.pdf (accessed 2026-10-05 UTC) | Historical identity and aqueous extraction/ethanol compatibility only; no contemporary safety approval or factory parameter limits adopted |
| ippa-process | handbook | International Pectin Producers Association, How is Pectin Made?, steps 1-5, undated publisher page. https://pectinproducers.com/factsheet-hub/how-is-pectin-made/ (accessed 2026-10-05 UTC) | Qualitative current manufacturing route; no universal yield, energy, recipe or mandatory standardization proportion |
| vincent-citrus-2015 | handbook | Vincent Corporation, Citrus Pectin, 15 October 2015, Spent Pectin Peel and alcohol separation sections. https://www.vincentcorp.com/content/citrus-pectin/ (accessed 2026-10-05 UTC) | Historical route-specific residue/feed and separation example only; no contemporary market quantities, mandatory equipment or wash concentrations adopted |
| hf-pectin-2026 | handbook | Herbstreith & Fox, Statement concerning gene technological status of pectins, 2 January 2026, v15, p.1. https://www.herbstreith-fox.de/wp-content/uploads/2026/01/GMO-Pectin.pdf (accessed 2026-10-05 UTC) | Manufacturer corroboration of citrus raw material and possible sucrose standardization; supplier-specific, no general GMO/safety claim |
| efsa-pectin-manufacture-2017 | official_guidance | EFSA ANS Panel (2017), Re-evaluation of pectin (E 440i) and amidated pectin (E 440ii), section 3.1.3 Manufacturing process, DOI:10.2903/j.efsa.2017.4866; https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4866 (accessed 2026-10-06 UTC) | Historical technical description supporting hydrochloric-acid aqueous extraction, alcohol separation and route alternatives; no numerical operating ranges or food safety conclusions adopted. |
