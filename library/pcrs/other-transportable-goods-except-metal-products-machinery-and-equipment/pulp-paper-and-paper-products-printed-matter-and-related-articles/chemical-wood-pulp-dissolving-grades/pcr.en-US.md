---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.chemical-wood-pulp-dissolving-grades
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Eucalyptus dissolving pulp — magnesium acid sulphite, ECF, dried baled sheets

## 1. Scope and Applicability
This manufacturing PCR covers virgin debarked eucalyptus chips converted by magnesium-base acid sulphite cooking, washing/screening, dissolving-grade purification with ECF bleaching, drying and baling into market pulp sheets for regenerated-cellulose textile manufacture. It requires a declared Eucalyptus species or measured species mixture, cooking-acid base, free/combined SO2, stage sequence and buyer-specific quality specification. Undefined cooking routes cannot use this method. A batch with calcium, sodium or ammonium cooking base, PHK kraft, soda, mechanical/recycled/non-wood pulp, a TCF bleach route or wet slurry delivery is outside this declared subset.
The functional difference from paper-grade pulp is controlled cellulose purity and dissolution performance, including alpha-cellulose, residual hemicellulose/lignin, viscosity/degree of polymerisation, ash/metals and reactivity. Brightness alone does not establish dissolving grade. Use actual purchaser limits and test results; this PCR sets no universal purity, yield, chemical dose, energy use or emission default. BREF 4.1.1.3 distinguishes textile dissolving pulp from papergrade and high-viscosity chemical specialty pulp. The historical producer description supports feasible sulphite and PHK routes as separate systems; it is not a current mill recipe. [eu-pulp-bref-2015; sappi-pulp-2015]
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.chemical-wood-pulp-dissolving-grades |
| classification_refs | CPC 3.0 32111; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Eucalyptus magnesium acid sulphite ECF dissolving-grade dried sheets, baled, textile feedstock |
| excluded_products | Papergrade pulp; other wood/base/cooking routes; TCF; slurry; recycled or non-wood pulp; fibre spinning; high-viscosity specialty chemical pulp |
| representative_product | Virgin eucalyptus dissolving pulp sheets with lot-specific acceptance certificate for regenerated-cellulose textiles |
| production_route | Debarked eucalyptus chips → magnesium acid sulphite cooking → washing/screening → alkaline purification and declared ECF bleaching → drying/baling; Mg/S chemical recovery, energy and wastewater treatment included |
| market_state | Dried baled sheets at mill gate; measured moisture; packaging separately inventoried |

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Accepted dissolving pulp feedstock for regenerated-cellulose textile production |
| How much | 1 kg oven-dry accepted pulp solids |
| How well | Measured compliance with declared buyer purity, viscosity and dissolution-suitability specification |
| How long or cycle | One delivered lot within the declared production period; no downstream service-life claim |
| reference_flow_link | pulp_out |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood Pulp `fa2fd2c0-9559-4e7f-bd48-282fe6f1a0f7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Eucalyptus species and shares; virgin debarked wood; magnesium acid sulphite; free/combined SO2 and cook programme; ECF stages and chemical supply/generation route; buyer end use and measured quality; dried baled sheets; lot net wet mass, dry fraction, sampling/testing; oven-dry denominator; recovery/energy boundary; wastewater treatment/receptor; period, geography and upstream mass convention |

Declare all required qualifiers in dataset metadata or equivalent product/process documentation. The broad UUID contains the wood-pulp subset and has no contrary route restriction; it does not certify grade, wood origin, moisture or a supplier process. A 1 kg dry reference is a declared modelling basis, not a claim that 1 kg of delivered wet pulp is dry. Accepted total dry solids can include nonvolatile dissolved solids and are not automatically pure alpha-cellulose; assess composition and buyer purity separately.
## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| dry_basis | pulp_out | Mass | kg | Use cp_pulp measured lot net wet mass and dry fraction to determine D = Σ(m_lot × d_lot), excluding packaging; every inventory denominator is 1 kg accepted oven-dry pulp in the same period. ISO 638-1:2022 public scope supports solid-pulp sample dry matter, not saleable-lot sampling/mass; cp_pulp separately defines lot sampling, rejections and stock reconciliation. |
| moisture_basis | wood, pulp_out, sludge | Mass | kg | Wet-basis w = water mass/net wet mass; d = 1-w. For dry-basis u = water mass/dry mass, d = 1/(1+u). Declare the assay basis; distinguish percent from fraction; measure wood and pulp independently. |
| chemical_basis | naoh, h2o2, clo2, chlorate, acid | Mass | kg | Keep purchased solution mass separate from active mass; active mass = solution mass × measured mass fraction. Species ClO2 mass differs from active chlorine reported as Cl2 oxidation equivalent; retain the original definition. |
| energy_basis | electricity_in, electricity_out, heat_out, gas | Energy or Volume | MJ or m3 | Convert electricity kWh by 3.6 to MJ; match gas volume state. Net useful exported heat is steam outward enthalpy flow less return condensate and losses assigned at the stated interface; an MJ property or steam mass does not establish compatible heat basis. |
| water_species_basis | cod, nwater, pwater, aox, nox, n2o | Mass | kg | COD is as O2, nitrogen as N, phosphorus as P; retain AOX halogen definition. Verify NOx NO2-equivalent convention; distinguish N2O from N2O-N. Pollutant indicators are not dry-organic-matter quantities. |
| final_water_quantity | water_out | Volume | m3 | For quantity, water_out represents actual liquid H2O-component volume, not automatically whole mixed-effluent volume. Keep bulk final outlet/bypass volume for cp_effluent pollutant loads. Determine each final liquid mass from measured mass or matched bulk volume and representative actual mixture density; determine H2O mass with an independently validated water mass fraction, then native H2O volume with a corresponding compatible water-component density/state/reference convention. Do not assume water fraction1, density1000kg/m3 or additive component volumes. Missing fraction/density/quantity convention remains unresolved alongside receptor identity before LCIA. |

## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Debarked eucalyptus chips delivered at mill gate; purchased chemicals and utilities |
| starting_condition_role | Foreground manufacturing start; upstream burdens are not zero |
| product_classification_scope | The stated narrower subset of CPC 3.0 32111 |
| recursive_input_rule | Track same-category broke/reprocessing in one physical ledger; internal returns do not generate another upstream pulp-production burden. Purchased dissolving pulp needs qualified supplier data and does not masquerade as the chip-start route. |
| upstream_dataset_requirement | Wood-chip supply must cover forestry, harvesting, debarking/chipping and actual inbound transport; chemicals, purchased energy and external waste treatment need nonzero background matched to geography, route, concentration, unit and boundary. |
| disclosure | Foreground is one integrated manufacturing unit; disclose shared assets/other pulp grades, condensate/cooling loops, chemical generators, recovery, utilities and wastewater treatment; disclose every upstream/external treatment gap. |

Include chip handling, cooking, washing/screening, hot alkaline extraction and declared ECF stages, chemical generation where on-site, final screening, pressing/drying/baling, spent-liquor evaporation/stripping, MgO/SO2 recovery and cooking-acid preparation, CHP/auxiliary combustion, water treatment, wastewater collection/treatment and residue handling. Exclude downstream dissolution/spinning, buyer use/end of life and new biorefinery products. Any lignosulphonate, ethanol, acetic-acid or furfural recovery for sale requires a reviewed scope extension with separate atomic product and process evidence; do not call internally burnt organics a sold co-product. [eu-pulp-bref-2015 §§4.1.1.3, 4.1.2–4.1.5; epa-chemical-pulp-1990 §10.2.3]
Maintain stage-resolved physical dry-solids, water, carbon, Mg and S balances before allocation. The fibre line passes pulp internally to purification and drying; weak liquor passes to evaporation/recovery, recovered chemicals return to cooking, and condensate/bleach filtrates pass to the actual recovery or treatment train. Record the same quantity and state at both ends of each internal link. Do not return sodium-rich bleach effluent automatically into magnesium recovery. Dissolved wood organics are measured by dry organic solids/TOC/carbon evidence and separately tracked through recovered fuel, products if approved, treated effluent, sludge and air releases; COD cannot substitute for their mass. [eu-pulp-bref-2015 §§4.1.3–4.1.5]
Wastewater treatment is inside this declared foreground. Residual final discharge is emitted once; raw bleach or condensate load is an internal treatment inlet, not another environmental emission. Record bypasses and external treatment explicitly. Do not combine a wastewater-treatment background with the same on-site treatment inputs/emissions. Site-specific combustion and release evidence supersedes old AP-42 examples; auxiliary wood-residue boilers use the independent EPA boiler source screening and require a verified site method and cannot use kraft-recovery or sawmill-dust factors. [eu-pulp-bref-2015 §§4.1.3.4, 4.2.2; epa-chemical-pulp-1990 §§10.2.2–10.2.3]
## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mill | Integrated magnesium sulphite dissolving-pulp manufacture | required | Declared route above | One foreground unit, with stage-specific measurements | 1 kg accepted oven-dry pulp |

Physical stage map: chip reception → cooking/washing/screening → alkaline purification/ECF → final screening/pressing/drying/baling. Parallel branches: spent liquor → evaporation/chemical recovery/CHP → acid recycle and internal utilities; filtrates/condensates → segregated wastewater treatment → final outlet and sludge. One consolidated mill unit prevents duplicate wood-pulp quantitative references across drying/packaging; no known identity is hidden. Each row below is one external exchange; internal stage movements remain measurable ledgers, not additional external exchanges.
### Process: Integrated dissolving-pulp mill (`mill`)
#### Inputs
##### Product flows
###### Wood Chip (`wood`)
Debarked virgin eucalyptus chips only. Measure species, wet net mass, dry fraction, contamination and chip volume. The UUID does not define solid versus loose bulk volume: record packing, measured mass/volume relation and supplier reference-volume definition before background linkage.
- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume / m3
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Sulphur, except sublimed sulphur, precipitated sulphur and colloidal sulphur (`sulfur`)
Fresh elemental sulphur for the sulphur burner when used; exclude sublimed, precipitated and colloidal forms. Do not count internally recovered sulphur as a fresh purchase.
- Selected flow: Sulphur, except sublimed sulphur, precipitated sulphur and colloidal sulphur `9ba64dfc-e051-4f47-a478-cb1d0bda0c3a`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Liquid sulphur dioxide for cooking-acid make-up (`so2input`)
Conditional purchased liquid SO2, distinct from burner-generated and recovered SO2; verify phase, assay and supplier. Product candidates carrying an elementary-flow comment remain unresolved.
- Selected flow: Liquid sulphur dioxide for cooking-acid make-up
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Magnesium oxide (`mgo`)
Make-up industrial MgO powder of declared reactive purity; no pharmaceutical formulation. Weigh fresh make-up separately from recovered MgO. Broad identity does not establish reactivity or supplier data.
- Selected flow: Magnesium oxide `49a9ba0a-7192-4e1d-8d10-8706ea407442`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Sodium hydroxide（30%） (`naoh`)
30% aqueous NaOH purchase only when the certificate confirms that concentration. Record solution mass and active NaOH separately for alkaline extraction; never use active mass as solution mass. Other concentrations require their own compatible identity.
- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Chlorine Dioxide (`clo2`)
External ClO2 supply only: report kg ClO2 with measured solution concentration and carrier water. When generated inside this mill, keep ClO2 production/use in the internal ledger and count external precursors instead, never both upstream ClO2 and its precursors.
- Selected flow: Chlorine Dioxide `6b2c2edb-25ce-4fc0-8a0a-8e4d0e7e1878`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Hydrogen peroxide (30%) (`h2o2`)
30% aqueous hydrogen peroxide when actually used and certified; quantity is solution mass. The identity concentration is not a dosage. A different purchased concentration needs a compatible identity.
- Selected flow: Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Industrial gaseous oxygen for bleaching (`oxygen`)
Conditional actual industrial gaseous oxygen for the declared oxygen stage only. Official source name is oxygen, produced by cryogenic air separation at plant; verify actual supplier route, purity, grade, pressure/state, gate, period and native gas Mass/kg quantity. A meter-volume conversion needs measured compatible state/composition/density, not an assumed normal density. This physical supply locator does not prove a positive stage dose or supplier background.
- Selected flow: Industrial gaseous oxygen for bleaching `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Sodium chlorate (`chlorate`)
Conditional external NaClO3 precursor for on-site ClO2 generation; measure purchased substance/solution basis and assay. No particular ClO2-generation recipe is mandated.
- Selected flow: Sodium chlorate `763dbb4e-a338-4348-b2a8-bf07b6bf7b47`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Sulfuric acid (`acid`)
Conditional industrial sulphuric acid within the identity concentration interval 93% to 98%; report actual solution mass and assay for its actual stage. Dilution water and active acid must be reconciled without double counting.
- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Methanol (market average) (`methanol`)
Conditional purchased methanol only if the declared ClO2 generator uses it. Select the actual upstream production mix; this purchase is not methanol formed from wood in condensates.
- Selected flow: Methanol (market average) `adbc8430-7937-4ade-b7a5-cb1797dda661`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Alternating current (`electricity_in`)
Grid-average electricity delivered at 1–35 kV only where this interface is verified. Record gross imports independently of mill generation, own use and exports; 1 kWh = 3.6 MJ. Match geography, voltage and loss boundary, not just the UUID. Raw geography is CN with a 1–35kV consumption mix delivered to the user. Verify actual supplier/region/year, voltage, grid/loss boundary and MJ reference quantity; physical alternating current is not a globally applicable background or this mill's export generation identity.
- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use cp_energy measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### natural gas in the gaseous state (`gas`)
Conditional pipeline gaseous natural gas for auxiliary combustion. Match metering temperature, absolute pressure, wet/dry composition and compressibility with supplier/background m3. A secondary mass coefficient is not a measured gas density.
- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Use cp_energy measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Tap water (`water_in`)
Externally supplied treated tap water only when used. Own river intake is the separate elementary resource row; exclude recirculated water from fresh purchases. The raw supply geography is HK and treatment-plant gate is Hong Kong. Verify actual supplier/basin, treatment route, region/year, delivery losses and Volume/m3 reference compatibility; this conditional physical tap-water identity does not establish a worldwide supplier background. Its non-reference 1000 kg/m3 screening descriptor is not an actual measured density.
- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Use cp_water measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Kraft paper bale wrapper (`wrap`)
One actual uncoated kraft wrapping sheet for pulp bales, weighed outside accepted pulp mass. Official broad source name is Uncoated printing, writing and packaging paper, with uncoated manufacture and no hard paper-fibre route restriction; verify actual sheet form, uncoated state, fibre composition, grammage, additives, supplier gate/year and Mass/kg basis. Source CPC32129 describes woodfree graphic paper and needs source-owner classification clarification against the actual kraft packaging sheet; do not claim all metadata verified or impose that classification as a factory recipe. Formed paper bags and coated/mixed packaging remain incompatible.
- Selected flow: Kraft paper bale wrapper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Polypropylene bale strapping (`strap`)
Conditional actual PP band, with supplier material and form; twine, fibres, resin chips and cable ties are different products. Do not silently replace a steel band with PP.
- Selected flow: Polypropylene bale strapping
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

##### Elementary flows
###### river water (`water_resource`)
Own river abstraction from renewable water resources, where present; record basin, country and intake. Supplier tap-water purchases must not duplicate abstraction already in their background.
- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Use cp_water measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

#### Outputs
##### Product flows
###### Wood Pulp (`pulp_out`)
1 kg accepted oven-dry pulp solids, excluding wrapping and strapping; actual delivered wet mass and moisture are separately disclosed. This broad wood-pulp identity is qualified to eucalyptus dissolving grade, magnesium acid sulphite, ECF and dried baled sheets; it does not by itself prove purity or a matching background dry-mass basis.
- Selected flow: Wood Pulp `fa2fd2c0-9559-4e7f-bd48-282fe6f1a0f7`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pulp
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Net exported cogenerated electricity from sulphite spent liquor (`electricity_out`)
Conditional actual export after own use and relevant delivery losses; report gross exports and imports independently. Grid-average, photovoltaic, straw and unrelated case electricity identities are not this generation route.
- Selected flow: Net exported cogenerated electricity from sulphite spent liquor
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use cp_energy measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Net exported useful steam heat from sulphite spent liquor (`heat_out`)
Conditional one actual net useful steam-heat delivery from sulphite spent-liquor recovery/CHP to a named industrial manufacturing recipient. Official Heat for manufacturing is a Product flow with unspecified heat carrier at plant GLO, no hard supply-fuel restriction, and native Net calorific value/MJ. That property is source quantity metadata, not automatic equivalence to delivered enthalpy: measure steam/return-condensate mass, pressure, temperature, quality and common enthalpy reference; deduct only losses not already included at the delivery meter. Require explicit provider/recipient gate, period, actual recovery fuel and net-heat reference-quantity compatibility before linkage; no assumed efficiency, heating value or avoided credit. GCV-heat and kg-steam identities remain incompatible substitutes.
- Selected flow: Net exported useful steam heat from sulphite spent liquor `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use cp_energy measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

##### Waste flows
###### Off-site sulphite pulp screening rejects (`reject`)
One actual separately dispatched solid sulphite-screening reject stream of eucalyptus knots/fibre, weighed as shipped with measured dry fraction. Official Waste solid explicitly covers discarded industrial solids without a treatment restriction. Record stage, physical form, residual cooking chemicals, organic/inorganic composition, moisture, carbon/Mg/S, contamination, lawful waste status, named accepting receiver and provider treatment/reference-quantity compatibility. It does not establish a generic disposal background. Internally recooked or burnt rejects remain internal; do not count them as exported waste or replace this stream with food pulp or liquid spent liquor.
- Selected flow: Off-site sulphite pulp screening rejects `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Dewatered pulp-mill wastewater treatment sludge (`sludge`)
One actual separately dispatched dewatered mixed primary/biological pulp-mill wastewater sludge, weighed as collected with measured moisture. Official Waste solid explicitly includes wastewater-treatment sludge, without a treatment restriction. Record primary/biological origin and blending, solid form, actual organics/minerals, C/Mg/S, residual chemicals/contaminants, dry components, lawful waste status and named accepting receiver; verify provider treatment and as-shipped Mass/kg reference basis before background linkage. No mixture ratio or municipal treatment is assumed; activated-sludge recycle is internal and emitted PM or dissolved effluent is separate.
- Selected flow: Dewatered pulp-mill wastewater treatment sludge `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### Wood-residue auxiliary-boiler bottom ash (`ash`)
Conditional one actual external bottom-ash stream from the declared wood-residue auxiliary boiler; official source name ash has no hard coal/fly-ash or treatment restriction. Measure as-shipped mass, moisture, actual fuel mix, mineral/unburnt-carbon and contaminant composition, collection location, lawful status and accepting receiver/provider treatment/Mass basis. Keep fly ash, recovered MgO and chemical-recovery purge separately identified; the broad ash locator supplies no combustion factor, assumed composition, hazardous status or disposal default.
- Selected flow: Wood-residue auxiliary-boiler bottom ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### Magnesium sulphite recovery-system purge solids (`recovery_purge`)
One actual separately dispatched unrecovered Mg/S-bearing solid purge from magnesium sulphite chemical recovery. Official Waste solid covers industrial discarded solids, with no hard treatment restriction; qualify actual stage/form, chemical species and Mg/S, organics/carbon, moisture, pH/contaminants, lawful status, named accepting receiver and provider treatment/as-shipped Mass basis. Recovered MgO circulating to acid preparation is internal, not waste or co-product. This purge is not wood-boiler ash, liquid liquor or an invented MgO replacement credit.
- Selected flow: Magnesium sulphite recovery-system purge solids `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

##### Elementary flows
###### Liquid water discharged to receiving surface water (`water_out`)
Measured final liquid water discharge after the included wastewater treatment, with separately identified bypasses counted once. Official Water, CAS7732-18-5, is an Elementary flow to water unspecified, native Volume/m3; it is neither an extracted resource nor water vapour. This provisional medium locator does not establish the actual receptor: record named freshwater or marine receiving body, location, discharge route and temperature, and verify or replace with the compatible specific-water-medium identity before LCIA. Do not broaden a known freshwater/marine receptor to unspecified, duplicate pollutant loads, or infer evaporated water from discharge volume. For quantity, water_out represents actual liquid H2O-component volume, not automatically whole mixed-effluent volume. Keep bulk final outlet/bypass volume for cp_effluent pollutant loads. Determine each final liquid mass from measured mass or matched bulk volume and representative actual mixture density; determine H2O mass with an independently validated water mass fraction, then native H2O volume with a corresponding compatible water-component density/state/reference convention. Do not assume water fraction1, density1000kg/m3 or additive component volumes. Missing fraction/density/quantity convention remains unresolved alongside receptor identity before LCIA.
- Selected flow: Liquid water discharged to receiving surface water `a3876d9b-a3e8-4680-861a-4e08642f1392`
- Flow property / unit: Volume / m3
- Amount rule: Use cp_water measured final H2O-component mass and compatible water-component density/state/reference to obtain native V_water; divide same-period native m3 by D once. Keep matched bulk outlet/bypass volume for cp_effluent pollutant loads. Missing quantity compatibility is unresolved, not zero. Conditional absence requires screening evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### water vapour (`water_evap`)
Net water vapour from pulp drying/cooling to outdoor air, unspecified subtype until actual release location is documented; distinguish water originally in chips, reaction water and freshwater consumption.
- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### carbon dioxide (biogenic) (`co2bio`)
Actual wood-derived CO2 from recovery and residue combustion or wastewater treatment; retain in LCI even when a climate-accounting convention excludes it. Do not import a forestry uptake credit at this gate. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### carbon dioxide (fossil) (`co2fossil`)
Actual fossil CO2 from auxiliary fuel and fossil chemical carbon, independently of biogenic CO2. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### sulfur dioxide (`so2`)
Actual SO2 after capture from cooking, blow tanks, evaporation, sulphur burner and recovery/auxiliary stacks; not aggregate SOx. Recovery efficiency is measured, not the historical AP-42 default. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### Nitrogen oxides (`nox`)
Actual combustion NOx excluding N2O. UUID Mass/kg does not establish NO2-equivalent versus summed species mass; monitoring, inventory and LCIA definition agreement remains a precondition. Never duplicate the NO and NO2 components. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### carbon monoxide (biogenic) (`cobio`)
Actual biogenic CO from incomplete combustion; apportion mixed-fuel measured CO only with measured carbon/combustion evidence. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### carbon monoxide (fossil) (`cofossil`)
Actual fossil CO from combustion, separate from biogenic CO with an evidenced split. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### methane (biogenic) (`ch4`)
Conditional biogenic methane from wastewater treatment or incomplete wood combustion; measured capture, flaring and residual release are reconciled. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### methane (fossil) (`ch4fossil`)
Conditional fossil methane from fuel leakage or incomplete combustion, not the biogenic methane row. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### nitrous oxide (`n2o`)
Conditional N2O from combustion and biological wastewater treatment; report species mass, not N2O-N, after an explicit conversion where needed. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### particles (PM2.5) (`pm25`)
Actual PM2.5 mass; size-cut basis, filterable/condensable distinction and control equipment are recorded. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### particles (PM2.5 - PM10) (`pm10`)
Actual exclusive PM2.5–PM10 interval, not cumulative PM10; derive by subtraction only from comparable paired measurements. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### particles (> PM10) (`pmover`)
Actual exclusive particles larger than PM10; reconcile with the other two intervals without adding cumulative total dust again. Outdoor air, unspecified; document source location and retarget when the subtype is known.
- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### chemical oxygen demand (`cod`)
Final treated-effluent COD as oxygen-equivalent mass, not dry dissolved-organic mass. Do not add COD, BOD and TOC as independent mass pollutants for the same material. Emissions to water, unspecified; disclose the actual receptor and retarget known freshwater/marine releases.
- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ef-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_effluent measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### nitrogen, total (excluding N2) (`nwater`)
Total nitrogen excluding N2, measured as N at the final outlet; species-specific emissions must not duplicate this sum. Emissions to water, unspecified; disclose the actual receptor and retarget known freshwater/marine releases.
- Selected flow: nitrogen, total (excluding N2) `3624d70d-4e4b-4927-9b84-b40e26c58e6d`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_effluent measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### phosphorus, total (`pwater`)
Final-outlet total phosphorus as P; individual species cannot be hidden or double counted in a sum indicator. Emissions to water, unspecified; disclose the actual receptor and retarget known freshwater/marine releases.
The direct record has no Chinese baseName; retain its original English display.
- Selected flow: phosphorus, total `46854df3-e13d-4a5a-9e11-6319f1f8347e`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_effluent measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### adsorbable organic halogen compounds (`aox`)
Final-outlet AOX with the laboratory halogen-mass convention; require agreement with the flow/LCIA sum definition before quantitative use. ECF is not proof of zero AOX; identify high-impact substances separately where possible. Emissions to water, unspecified; disclose the actual receptor and retarget known freshwater/marine releases.
The direct record has no Chinese baseName; retain its original English display.
- Selected flow: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_effluent measured external quantity for the same period divided by D. Conditional absence requires screening evidence; missing quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: eu-pulp-bref-2015; epa-chemical-pulp-1990

## 7. Allocation and Co-product Handling
First subdivide stage meters and shared services where causal use can be measured. Keep a physical mass/water/carbon/Mg/S/energy ledger separate from the allocated environmental-burden account. Internally recovered chemicals, fuel liquor and process steam are loops, not sold co-products and earn no avoided-purchase credit on top of reduced purchases. Net exported electricity and useful heat are co-products only with actual recipient, accepted delivery and consistent net basis. Keep their full physical quantities after allocation.
For inseparable shared burdens, document the goal-specific physical causal relationship first. If it cannot be justified, use a disclosed economic allocation based on comparable period, currencies and saleable output prices, with sensitivity to alternatives. A share is product revenue divided by total revenue from actual joint products; shares sum to one. Apply shares to joint environmental burdens, not to physical co-product outputs or internal link quantities. A mass share between pulp kg and energy MJ is invalid. Do not combine allocation with substitution credits for the same exported energy. These are PCR modelling requirements, not a claim that the BREF prescribes an LCA allocation formula. [eu-pulp-bref-2015 §4.1.4 for physical recovery/energy separation]
## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pulp | mill | Accepted pulp and dry denominator | lot mass and assay | lot; species; cook base; ECF stages; buyer specification; quality tests; net wet mass m_lot; representative sample dry fraction d_lot; packaging tare; rejected lots; opening/closing stock | Calibrated net weighing excluding wrapping/strapping; sample across bale locations and lots using a documented stratified site plan, sealed moisture samples, replicate oven-dry assays to constant mass and retained lab method/calibration. Use the applicable solid-pulp dry-matter method after checking non-water volatiles; separately validate saleable-lot sampling. Reject incomplete CoA lots. | kg; fraction | Each accepted lot and moisture-changing event | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Calibrations, sampling plan, raw wet/dry weights, replicate variation, CoA and stock reconciliation |
| cp_material | mill | External wood, chemicals and packaging | material ledger | purchase/stock/return; supplier; exact substance and form; concentration; wet/dry mass; wood species; chip volume; packing; density protocol; actual stage; internal recycle | Weigh or meter actual external consumption with opening stock plus receipts less closing stock and returned material; record stage dosing independently of fresh purchase. Use paired chip wet/dry mass and measured volume; retain supplier reference-basis proof. | kg; m3; fraction | Per delivery and batch | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Supplier assays, scale/meter calibration, inventory receipts and stage-material balance |
| cp_energy | mill | Import, generation, own use, export and fuel | energy ledger | meter identifier; voltage; imported/generated/own-use/exported kWh; gas volume T/P/Z wet/dry composition; steam/condensate masses P/T/quality/enthalpy; losses; receiving interface | Separate calibrated meters and fuel records, matched to production timestamps. Reconcile CHP fuel/recovered-organic energy, boiler/generator efficiency, own use and independent import/export. Verify background gas volume and heat convention in writing; an unverified steam identity is not usable net heat. | kWh; MJ; m3; kg | Continuous meters and daily reconciliation | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Energy diagram, supplier conventions, calibration and heat balance |
| cp_water | mill | Water abstraction, supply, return and evaporation | water ledger | intake source/basin; tap supply; fresh make-up; circulation; wood water; reaction water; final liquid discharge/bypass and named freshwater/marine receptor/location; evaporation; product/sludge water; stock change; interval final mixed-liquid mass/volume and representative mixture density; independently validated water fraction; corresponding H2O-component density/state/reference; selected flow/LCIA quantity convention | Independent intake/outlet meters, pulp/wood/sludge moisture measurements and dryer/cooling balance; disclose evaporation measured or balance-derived and associated uncertainty. Reconcile liquid volume to mass with site temperature/density where needed. For quantity, water_out represents actual liquid H2O-component volume, not automatically whole mixed-effluent volume. Keep bulk final outlet/bypass volume for cp_effluent pollutant loads. Determine each final liquid mass from measured mass or matched bulk volume and representative actual mixture density; determine H2O mass with an independently validated water mass fraction, then native H2O volume with a corresponding compatible water-component density/state/reference convention. Do not assume water fraction1, density1000kg/m3 or additive component volumes. Missing fraction/density/quantity convention remains unresolved alongside receptor identity before LCIA. | m3; kg | Continuous meters and matched daily totals | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Water diagram, calibration and balanced uncertainty |
| cp_air | mill | Each species and exclusive particulate interval | release monitoring | source; fuel carbon origin; stack/fugitive; species; concentration; gas flow; duration; temperature/pressure; moisture/O2 convention; detection limit; controls; PM cut; NOx definition | Use measured species concentrations and compatible volumetric gas flow integrated over release time, including startup/upset; correct dilution/O2/wet-dry conventions consistently. Site-specific carbon balance may support CO2 after reconciliation. Screen each source for additional organics/metals; unknown values are gaps, not zero. | kg; mg/m3; m3; time | Continuous where available; documented representative campaigns otherwise | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Monitoring method, raw signals, calibration, detection limits, operating coverage and C/Mg/S balances |
| cp_effluent | mill | Final outlet pollutants and internal treatment loads | water-quality ledger | stream location; inlet/outlet/bypass; flow; sample time; COD as O2; TN as N; TP as P; AOX convention; dissolved solids/TOC; sludge; treatment route | Take flow-proportional composite final-outlet samples and paired calibrated discharge volumes over the same intervals. Sample bleach filtrates and condensates separately at treatment inlets; use inlet measurements for treatment/organic balance, not duplicate releases. Retain chemical species, laboratory methods and detection limits. | mg/L; m3; kg | Flow continuously; composite samples per operating day with documented campaign coverage | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Laboratory QA, sample-chain records, flow meters, treatment diagram and bypass reconciliation |
| cp_waste | mill | Individual off-site waste stream | waste manifest | waste identity; stage and solid form; wet mass; dry fraction; measured constituents/organic carbon/Mg/S/contamination; internal recycle; lawful waste status; accepting receiver; treatment and provider reference basis; transfer date | Calibrated weighed consignment and representative solids/composition assay for each separately identified stream; reconcile recycled versus shipped amounts and verify actual receiver treatment. | kg; fraction | Every consignment | Entire declared production period including startup/upset | Same mill, eucalyptus and declared route; subdivide other grades | per 1 kg reference flow | Weighbridge tickets, assays, waste manifest and receiver acceptance |

### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| dry_output | pulp_out | D = Σ(m_lot × d_lot); m_lot excludes packaging; d_lot is the measured dry fraction; reject nonconforming lots. | m_lot; d_lot; cp_pulp | D in kg oven-dry accepted pulp | iso-solid-dry-matter-2022 |
| normalize_period | all inventory rows | Period-specific exchange = sum of actual external quantity / D; keep numerator unit; 1 kg accepted dry reference output. Do not average daily intensities without dry-production weights. | period exchange totals; D; cp_pulp | exchange per 1 kg reference flow |  |
| dry_wet_conversion | wood, pulp_out, sludge | dry mass = net wet mass × (1-w); dry mass = net wet mass / (1+u); w and u are distinct wet/dry-basis moisture fractions. BREF ADt is 90% solids only when that source convention is explicitly used: 1 ADt = 900 kg dry solids, not measured delivery moisture. | net wet mass; w or u; cp_material; cp_pulp; cp_waste | kg dry solids | eu-pulp-bref-2015; iso-solid-dry-matter-2022 |
| effluent_load | cod, nwater, pwater, aox | Load kg = Σ(C_j mg/L × V_j m3) / 1000 for matched sampling intervals; normalize by D. Retain pollutant-equivalent convention; add separately measured bypass once. | C_j; V_j; D; cp_effluent | kg indicator per 1 kg reference flow | eu-pulp-bref-2015 |
| physical_balance | mill | For conserved C, Mg and S separately: external inputs + opening stock = external outputs + closing stock; reactions change species/phase but cannot create an element-balance offset. Dry-solids and water ledgers additionally record measured or independently supported species/phase transformations, including oxygen uptake and reaction water; cancel equal internal links. Report unexplained residual with measurement uncertainty, never repair by invented correction emissions. | stage ledgers; composition; stocks; cp_material; cp_water; cp_air; cp_effluent | pre-allocation physical balances | eu-pulp-bref-2015 |
| export_heat | heat_out | Delivered heat MJ = (Σ steam mass × delivery specific enthalpy - Σ returned condensate mass × return specific enthalpy - declared delivery losses) / 1000 when enthalpy is in kJ/kg and loss quantities are kJ; deduct only losses not already reflected in the delivery measurement, without double deduction. Use the same state/reference convention and explicitly verified provider net-heat reference quantity; NCV/MJ metadata alone does not prove that correspondence. Do not substitute fuel heat or gross boiler heat. | cp_energy; steam/condensate metering; enthalpy convention | raw same-period net delivered MJ; then normalize once by D under normalize_period | eu-pulp-bref-2015 |
| final_water_component | water_out | M_liquid_i = measured final liquid mass or V_bulk_i × measured rho_liquid_i; M_water_i = M_liquid_i × independently validated water fraction_i; V_water = sum(M_water_i / compatible rho_water_i). Native V_water/D once; bulk V_bulk remains pollutant-load volume. All quantities have matching interval/state/reference; unknown remains unresolved. | cp_water; cp_effluent; water fraction; compatible density; D | native H2O-component m3 per 1kg accepted oven-dry pulp |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | One physical exchange per row; selected UUID is not quantity/background approval. Keep unknown identity/amount gaps specific; add actual extra chemicals, nutrient salts, VOC species and wastes individually. | Supplier/product evidence; flow record; site ledger |
| purity | pulp_out | Buyer specification, applicable methods and measured alpha-cellulose, viscosity, residual hemicellulose/lignin, ash/metals and dissolution performance; brightness/classification label does not establish acceptance. | Lot CoA and cp_pulp |
| scope | mill | Declare period/geography/species/base/ECF sequence; meter shared grades separately; include upset, stock, rejects and broke. | Plant diagram, production log and meters |
| source_limits | mill | Do not transfer historical or single-mill doses, recovery rates, yields or emission ranges. Public standard scope is not full-standard access or proof of saleable-lot compliance. | eu-pulp-bref-2015; sappi-pulp-2015; iso-solid-dry-matter-2022 |
| missing_not_zero | all inventory rows | Retain conditional-absence evidence, detection limits and coverage; a search hit does not establish a positive release; unknown/unmonitored is not zero. | cp_air; cp_effluent; cp_waste |

## 9. Validation Rules
Reject applicability when species, cook base, bleaching route, delivery state or end-use quality is missing or incompatible. Require exactly one pulp_out quantitative reference; both languages use 1 kg dry solids, the same D, rows, units, qualifiers and aggregation. Verify chip and pulp moisture separately; reject gross package mass, air-dry trading mass or unconverted wet mass as the dry denominator.
Check physical solids/water/C/Mg/S and energy ledgers before checking allocation accounts. Internal links must match at both ends. Check fresh versus recovered chemicals and actual routing of dissolved organics, bleach sodium and condensates. Verify CHP gross generation, own use, imports, exports and heat return; do not multiply physical output by allocation shares. Allocation shares must sum to one and apply only to assigned shared burdens.
Check final treated effluent once, bypasses, sludge moisture, receiver/treatment and missing pollutant species. Do not use kraft/sawmill emission factors for sulphite recovery or auxiliary boilers without route-specific evidence. Reject overlapping particulate totals, NOx/NO/NO2 duplication, fossil/biogenic confusion, erased biogenic CO2 and indicator/species-basis substitutions. Unknown gas volume, chip volume, NOx, AOX, heat or supplier pulp-mass conventions prevent those quantitative links from being treated as complete.
## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | manufacturing_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Textile dissolving-pulp manufacture for the declared subset; upstream background only after external links are complete |
| excluded_use | Whole-CPC32111 averages; papergrade; other wood/base/PHK; slurry; TCF; high-viscosity chemical specialty pulp; downstream fibres/service life |
| required_metadata | All reference qualifiers, D, stage material/water/carbon/Mg/S/energy maps, recovery/effluent route, allocation basis/recipients and upstream links |
| required_quality_disclosure | Measurement coverage, uncertainty, unresolved identity/quantity bases, unknown releases and supplier/treatment gaps; no complete-dataset or reviewed-methodology claim |
| update_trigger | Changes to wood, cooking, bleaching/generator, purity target, moisture basis, recovery/energy, receptor/treatment or supplier basis |

## 11. Data Sources

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pulp-bref-2015` | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Qualitative grade, cooking, recovery, effluent and absolute/air-dry basis; case quantities excluded. |
| `epa-chemical-pulp-1990` | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c10s02.pdf | Acid sulphite process and emission-source screening; no historical default factors. |
| `sappi-pulp-2015` | literature | https://cdn-s3.sappi.com/s3fs-public/2015-Sappi-Group-Sustainability-Report.pdf | Historical producer route and wood context, not a current recipe or numeric default. |
| `iso-solid-dry-matter-2022` | standard | https://www.iso.org/standard/83614.html | Official public solid-pulp dry-matter scope and exclusions; not full-standard access. |
| `epa-wood-boiler-2022` | official_guidance | https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | Sections 1.6.1–1.6.3: pulp-mill wood-residue auxiliary boiler source/species screening; excludes chemical-recovery boilers; no numerical defaults. |

### eu-pulp-bref-2015

- Source type: official_guidance
- Title: European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), DOI 10.2791/370629
- Reference: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf
- Applicability and limitations: Sections 4.1.1.3 (printed p372), 4.1.2–4.1.5 (pp376–385), 4.2.2 and Glossary (p840): qualitative grade, chemical recovery, segregated effluent and dry/air-dry basis. Single-mill examples, papergrade ECF recipes and BAT ranges are not universal dissolving-pulp doses or release defaults.

### epa-chemical-pulp-1990

- Source type: official_guidance
- Title: US EPA, AP-42 Section 10.2 Chemical Wood Pulping (September 1990; reformatted January 1995)
- Reference: https://www.epa.gov/sites/default/files/2020-10/documents/c10s02.pdf
- Applicability and limitations: Section 10.2.3 pp10.2-4, 10.2-13–14: acid sulphite cooking, Mg/S recovery and SO2-source screening; historical factors are not modern site defaults. Section 10.2.2 explicitly routes boiler factors to Chapter 1.

### sappi-pulp-2015

- Source type: literature
- Title: Sappi Group Sustainability Report 2015
- Reference: https://cdn-s3.sappi.com/s3fs-public/2015-Sappi-Group-Sustainability-Report.pdf
- Applicability and limitations: Printed pp41,50,116 (PDF pp42,51,117): producer sulphite/PHK distinction, eucalyptus cellulose feedstock and regional ECF/oxygen bleaching. This is historical technical evidence, not a current selected-mill recipe. Diagram bisulphite formulas are incorrect; use BREF/EPA chemistry instead.

### iso-solid-dry-matter-2022

- Source type: standard
- Title: ISO 638-1:2022, official public scope: Paper, board, pulps and cellulosic nanomaterials — Determination of dry matter content by oven-drying — Part 1: Materials in solid form
- Reference: https://www.iso.org/standard/83614.html
- Applicability and limitations: Official scope, edition 2, 2022: solid-pulp dry matter; non-water volatility limitation. Excludes slush pulp and saleable lot mass; total dry matter can include dissolved solids. Full paywalled standard was not read; the foreground lot protocol is declared here independently and must be validated by the data producer.

### epa-wood-boiler-2022

US EPA AP-42 1.6, March 2022, original pp1.6-1–2. Supports fuel-state, PM, NOx, CO, CO2, CH4 and N2O screening for wood-residue boilers. Spent-liquor recovery boilers use pulp-specific sources separately. Temperatures, moisture, conversion percentages and factors are not PCR defaults; the source GHG accounting convention does not remove biogenic CO2 from this LCI.
