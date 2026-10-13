---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.medium-density-fibreboard-mdf
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dry-process wood medium-density fibreboard manufacture

## 1. Scope and Applicability

Applies to conventional uncoated MDF made by dry forming wood fibres with the actual adhesive system, hot curing, cooling, sanding and trimming. Furnish may be traceable softwood or hardwood residues or whole logs. Dry process describes the forming route and medium; it does not mean steam-free or water-free production. Wet-process hardboard uses aqueous forming and dewatering, sometimes relying on lignin self-bonding, and requires a different methodology. Excluded are other high-density hardboards, wet low-density fibreboards, particleboard, OSB, nonwood fibreboards, veneered/coated boards and recipes requiring dedicated fire-retardant or preservative chemicals. Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`.

Wood provenance, species mix, density, thickness, moisture, declared formaldehyde class, binder composition and market requirements need dataset-specific evidence. No universal recipe, density cutoff, statutory formaldehyde limit or service life is prescribed. Product certification does not replace manufacturing stack-emission data.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.medium-density-fibreboard-mdf |
| classification_refs | CPC 3.0 31441; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Conventional dry-process uncoated wood MDF |
| excluded_products | Wet hardboard; other fibreboards; nonwood fibreboard; particleboard; OSB; coated board; special fire-retardant/preservative recipes |
| representative_product | Medium density fiberboard `57c184ac-a2d3-4500-af7b-80609ed89d2f` |
| production_route | Steam digestion/refining; binder dosing at actual location; fibre drying; dry forming/prepress; hot press; cooling; sanding/trimming/packaging |
| market_state | Uncoated cooled accepted MDF at mill gate; packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted dry-process wood MDF at mill gate |
| How much | 1 kg net finished board, including moisture at the declared delivery condition |
| How well | Declare actual density, thickness, mechanical grade and formaldehyde test method/class with applicable evidence |
| How long or cycle | One manufacturing delivery; no assumed use life |
| reference_flow_link | `mdf_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Medium density fiberboard `57c184ac-a2d3-4500-af7b-80609ed89d2f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Wood provenance and species mix; dry route; adhesive type/solids/addition point; delivery moisture and dry/wet basis; measured density and volume condition; thickness/tolerance; uncoated state; formaldehyde claim and test method/date/class basis; delivery location/year; steam/indirect-heat measurement boundary; packaging exclusion; accepted-output and recirculation/waste fates |

Required qualifiers must appear in metadata, process notes, reference-flow comments or equivalent fields; missing qualifiers leave the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_output to weigh accepted net MDF at the same declared state, excluding packaging. All rows are per 1 kg reference flow; wet furnish, dry wood mass and unsanded rough panels are not the denominator. |
| `moisture_basis` | furnish_chips, furnish_sawdust, furnish_shavings, mdf_output | Auxiliary wet/oven-dry Mass; each exchange retains its verified native reference property | kg for auxiliary solids/water ledgers and mass-reference exchanges; m3 for native furnish_chips exchange | Use cp_furnish and cp_output to retain auxiliary wet mass, oven-dry solids and water separately; dry-basis moisture u is water/dry mass and wet-basis moisture w is water/wet mass, both as fractions. These auxiliary kg measurements do not replace furnish_chips verified Volume/m3 exchange or normalized numerator. Convert its auxiliary kg ledger only with measured same-lot/moisture/material-state density; volume_basis and volume_conversion separately require the actual supplier solid/bulk volume definition, Vs/Vb/k and loss/gate correspondence, with unknown links unresolved. |
| `volume_basis` | furnish_chips, dryer_gas, control_gas, boiler_gas | Volume | m3 | Volume/m3 identity defines neither solid/bulk wood volume nor gas state. cp_furnish obtains supplier actual reference A, volume definition, same-lot/moisture Vs/Vb and measured k with loss/gate conversion. The applicable cp_energy or cp_energy_utilities record obtains gas T/P, dry-wet composition, Z and background-m3 reference conditions. Any unproven correspondence remains quantity compatibility pending. |
| `electricity_conversion` | line_electricity, boiler_electricity | Energy | MJ | Convert metered kWh to MJ by multiplying by 3.6. The electricity dataset net-calorific-value property represents electric energy bookkeeping and proves no steam/process-heat net-heat basis. |
| `thermal_basis` | line_steam, line_heat, boiler_steam, boiler_heat, condensate_return, boiler_condensate | Steam mass; delivered heat | kg; MJ | The applicable cp_thermal or cp_thermal_utilities record retains steam mass, condensation/return mass, temperature/pressure/quality and enthalpy boundary. Populate heat MJ only when supplier/background definition agrees with site supply-return enthalpy balance; property or product name alone is insufficient and unknown basis remains unresolved. |
| `nox_mass_basis` | dryer_nox, handling_nox, boiler_nox | Mass | kg | NOx kg requires a demonstrated common monitoring/LCI/LCIA-mapping mass basis and NO/NO2 boundary, excluding N2O and speciated duplicates; otherwise quantity compatibility pending. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Furnish/chemicals/energy delivered to mill; on-site line to accepted uncoated MDF at mill gate; link upstream production/inbound transport and actual waste treatment separately |
| starting_condition_role | foreground production |
| product_classification_scope | Conventional dry-process uncoated wood subset of CPC 3.0 31441 |
| recursive_input_rule | Record recycled MDF state, resin composition, provenance and actual mass without adding another finished output. Internal recirculation retains equal physical links; purchased recovered board carries supplier upstream boundary |
| upstream_dataset_requirement | Bind each actual furnish, resin, energy, transport and treatment to location/year/route-compatible background data; residues are not assumed burden-free |
| disclosure | Declare survey period, plant and output, stage coverage, on-site/purchased energy, controls, stock changes, exclusions, assumptions and actual use/disposal |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | mdf-line | Include receipt, size preparation, digestion/refining, actual resin dosing, drying, forming/prepress, hot pressing, cooling, sanding/trimming and packaging; measure each stage even within one aggregated process. | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |
| boundary_energy | mdf-line; utilities | Choose on-site utility generation or purchased carrier for each supply share. Link equal carrier quantities at both internal ends and cancel internal transfers when aggregating; do not add purchased heat burdens to the same on-site fuels. Direct dryer/oxidizer/mobile combustion and boiler stacks remain distinct. | `corrim-mdf-2024`; `epa-mdf-2002`; `epa-wood-boiler-2022` |
| boundary_upstream | all inventory rows | Include actual upstream manufacture and inbound transport and disclose residue allocation/recovery boundary. End at the uncoated mill gate; downstream use, service life and disposal are separate scenarios, never copied from CORRIM cradle-to-grave averages. | `corrim-mdf-2024` |
| boundary_coverage | all inventory rows | Conditional rows are included only with actual activity/composition evidence. Missing UUID or amount is not zero and blocks complete use of the affected route. Expand every additional actual chemical, fuel, packaging or treatment exchange as its own atomic row; never conceal it in a collection label. | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mdf-line` | Aggregated MDF manufacturing line | required | In-scope production | foreground production | 1 kg accepted net MDF |
| `utilities` | On-site utilities | conditional | On-site boiler supplies MDF steam/heat; purchased shares exclude the same generation burdens | utility generation | per 1 kg reference flow |

The following physical stage ledger stays within one foreground unit; it is not repeated finished-product trading. Retain physical mass/water/carbon balances separately from allocated environmental-burden accounts, with equal quantities at both ends of state transfers and recirculation. Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`.

| stage_id | entering state | leaving state | separate collection |
| --- | --- | --- | --- |
| receipt | Wet chips, sawdust, dry shavings or logs; separate species/moisture/bark states | Screened/chipped furnish; bark separately routed | Lot net mass, volume, moisture, stocks |
| refining | Steam-softened wet furnish | Unresinated wet fibres/bundles; if resin is added in refiner record actual point | Electricity, steam mass, condensation, fibre solids/water |
| blend-dry | Wet fibres, with resin status determined by blowline or post-drying dosing route | Loose dried resinated fibres at measured moisture; water vapour and controlled gas | Each resin/wax/hardener, carrier water, dryer fuel, stack species |
| form-press | Loose resinated fibres; uncured formed mat | Cured hot unsanded rough panel; pressing/cooling exhaust | Mat mass/water, prepress recirculation, heat, rough-panel mass, press species |
| finish-pack | Cooled cured rough panel | Sanded/trimmed accepted MDF; resin-bearing dust/offcuts; separate packaging | Accepted net mass, thickness/density/moisture, captured dust/uncollected PM, packaging |

Recovered fibres, mat trim and cured sanding dust are different material states. Record each origin/destination, dry solids, water and resin separately for rerefining, reforming, combustion or disposal. Refining creates fibres; OSB strands and particleboard particles are not fibre intermediates.

### Process: MDF manufacturing line (`mdf-line`)

#### Inputs

##### Product flows

###### Purchased wood chips (`furnish_chips`)

Record untreated chips delivered for fibre preparation; measure volume, wet mass, species and moisture for the same lot. Identity is retained but quantity compatibility is pending. Obtain the supplier/background process actual reference quantity A (m3), its solid-wood or loose/compacted bulk-volume definition and measurement gate. Measure solid volume Vs and bulk volume Vb on the same representative lot and moisture/material state, with packing fraction k = Vs/Vb and a documented sampling/displacement/geometric method. Reconcile delivery gates, stock changes and measured losses; neither the flow name nor Volume/m3 defines the required volume basis. If A, volume definition, k or state/gate conversion is unknown, the upstream link remains incomplete.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect this actual exchange using cp_furnish and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnish`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Purchased green sawdust (`furnish_sawdust`)

Use only untreated sawdust entering refining; record its moisture and supplier coproduct boundary.

- Selected flow: Untreated green wood sawdust for MDF refining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_furnish and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnish`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Purchased dry shavings (`furnish_shavings`)

Record untreated dry shavings as a separate feedstock; do not substitute OSB strands or particleboard furnish.

- Selected flow: Untreated dry wood shavings for MDF refining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_furnish and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnish`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Coniferous pulpwood roundwood (`furnish_conifer`)

Conditional on actual whole-log furnish; include debarking/chipping and bark fate inside the line; declare roadside-to-mill transport.

- Selected flow: Coniferous pulpwood roundwood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_furnish and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnish`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Non-coniferous pulpwood roundwood (`furnish_hardwood`)

Conditional on actual whole-log furnish; include debarking/chipping and bark fate inside the line; declare roadside-to-mill transport.

- Selected flow: Non-coniferous pulpwood roundwood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_furnish and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnish`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### UF binder (`binder_uf`)

Include only the resin actually used, in an independently supplied state matching the selected resin identity and actual provider reference. Record supplied mass, measured resin solids, water, supplier recipe and addition point. A bought prepared aqueous or otherwise compounded UF formulation requires one specific complete-formulation supply row and compatible provider preserving supplier manufacture/preparation/delivery before use; the generic resin UUID alone does not establish that complete supply. Its included resin, urea, water and additives are analytical composition only. Real independently purchased additions and actual onsite mixing water/utilities remain separate exchanges. Report resin solids separately; never equate wet formulation kg to dry resin kg or count included formulation water again as purchased process water.

- Selected flow: Urea-formaldehyde resin `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### MUF binder (`binder_muf`)

Include only the resin actually used. Record delivered formulation mass, solids, water, supplier recipe and addition point; report resin solids separately and never count formulation water again as purchased process water.

- Selected flow: Melamine-urea-formaldehyde adhesive resin for MDF
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pMDI binder (`binder_pmdi`)

Include only the resin actually used. Record delivered formulation mass, solids, water, supplier recipe and addition point; report resin solids separately and never count formulation water again as purchased process water.

- Selected flow: Polymeric diphenylmethane diisocyanate adhesive resin for MDF
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Separate urea addition (`additive_urea`)

Conditional on separate urea dosing supported by the actual recipe; report product mass, not nitrogen mass. Embedded urea already in purchased resin is not another exchange.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Paraffin wax addition (`additive_wax`)

Conditional on petroleum-fraction paraffin wax actually supplied independently in a state and mass reference matching the selected identity and provider. Measure actual supplied wax mass/state; no wax dosage is prescribed. A bought wax emulsion requires one specific complete-emulsion supply row and compatible provider including supplier manufacture/emulsification/preparation/delivery before use; its included wax, carrier water and additives remain analytical subledgers, not extra purchases. Actual separately purchased wax/other constituents and real onsite emulsification or mixing water/utilities are separate exchanges. Never assign whole wet emulsion kg to the paraffin-wax UUID; an unresolved complete-emulsion identity remains pending.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Ammonium sulphate hardener (`additive_hardener`)

Conditional on ammonium sulphate actually purchased separately in a supplied state matching the selected chemical identity and provider, and actually added in the evidenced recipe. Never infer catalyst species from a generic catalyst survey entry. Record actual supplied chemical mass/state and any independently added onsite carrier water/mixing utilities. A bought prepared hardener solution or formulation requires its own specific complete-product supply row and compatible provider preserving supplier manufacture/preparation/delivery before use; included ammonium sulphate, water and additives are analytical composition only. Record its measured concentration/carrier water without assigning whole formulation kg to the constituent UUID. Other real separately supplied hardeners require their own atomic rows.

- Selected flow: Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Low-voltage purchased electricity (`line_electricity`)

Use this identity only for grid-average supply below 1 kV at the user. Meter refining, drying fans, forming, press hydraulics, finishing and emission control separately. Other voltages require matching identities.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect this actual exchange using cp_energy and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Make-up process water (`line_water`)

Meter newly supplied treated process water for washing and manufacture; keep reused water, condensate and formulation water in separate physical ledgers.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_water and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Digester steam (`line_steam`)

Measure steam mass at the MDF digester boundary and record absolute pressure, temperature and quality; specify condensation into furnish. No pressure or saturation default is set.

- Selected flow: Process steam delivered to MDF digester
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_thermal and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Indirect process heat (`line_heat`)

Conditional on indirect heat delivered to drying or pressing. MJ requires a supplier/background energy definition reconciled with measured supply/return enthalpy or a calibrated heat meter. Until then retain an unresolved measurement basis.

- Selected flow: Indirect process heat delivered to MDF manufacture
- Flow property / unit: Delivered heat measurement basis unresolved; MJ; flow property/unit group UUID unresolved / MJ
- Amount rule: Collect this actual exchange using cp_thermal and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Direct dryer natural gas (`dryer_gas`)

Conditional on direct-fired drying; measure delivered gas volume at disclosed conditions and fuel composition. This row excludes the boiler and oxidizer fuel. Identity is retained but quantity compatibility with background m3 remains pending. Record supplier/background reference quantity A, reference temperature T, absolute pressure P, dry/wet composition and compressibility Z, plus meter conditions and composition on the same basis. Reconcile the actual delivery/loss gate and convert only with these measured/declared conditions; a Volume/m3 property establishes neither Nm3 nor standard conditions. An unknown supplier or background volume definition leaves the link incomplete.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect this actual exchange using cp_energy and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Oxidizer natural gas (`control_gas`)

Conditional on a fuel-fired emissions-control oxidizer; meter separately and bind downstream stack tests, including any destruction of incoming organics. Identity is retained but quantity compatibility with background m3 remains pending. Record supplier/background reference quantity A, reference temperature T, absolute pressure P, dry/wet composition and compressibility Z, plus meter conditions and composition on the same basis. Reconcile the actual delivery/loss gate and convert only with these measured/declared conditions; a Volume/m3 property establishes neither Nm3 nor standard conditions. An unknown supplier or background volume definition leaves the link incomplete.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect this actual exchange using cp_energy and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Internal handling diesel (`handling_diesel`)

Conditional on diesel-powered loaders/forklifts; collect purchased fuel and model actual combustion exhaust separately. This excludes inbound road transport datasets.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_energy and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Petroleum lubricating oil (`line_oil`)

Conditional on matching petroleum-fraction lubricant; retain equipment application and replacement records, distinct from recirculating hot-oil heat transfer.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_recipe and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Polyethylene transport film (`pack_film`)

Conditional on polyethylene packaging; measure attributable film consumed and exclude it from net MDF reference mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_pack and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Steel packaging strap (`pack_strap`)

Conditional on actual steel strap; require supplier grade and production route instead of substituting a recycled 99% Fe/1% C band with an unconfirmed route.

- Selected flow: Steel strapping for MDF transport packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_pack and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished uncoated MDF (`mdf_output`)

One accepted cooled, sanded and trimmed board output at the mill gate, excluding transport packaging. There is no second finished-MDF handoff output in this aggregated line.

- Selected flow: Medium density fiberboard `57c184ac-a2d3-4500-af7b-80609ed89d2f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_output`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Returned heating condensate (`condensate_return`)

Conditional on recovered condensate leaving the line for utility generation; reconcile its mass and enthalpy at both link ends. Direct digester condensate retained in fibres is not this return.

- Selected flow: Returned steam condensate from MDF indirect heating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_thermal and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

##### Waste flows

###### Debarking bark sent to treatment (`bark_disposal`)

Conditional on this specific outgoing waste. Weigh or meter the stream and document its composition, actual recipient and treatment boundary; internal recirculation is not an external disposal.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Resin-bearing rejected board (`mdf_offcuts`)

Conditional on this specific outgoing waste. Weigh or meter the stream and document its composition, actual recipient and treatment boundary; internal recirculation is not an external disposal.

- Selected flow: Resin-bearing MDF offcuts sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Resin-bearing captured sanding dust (`mdf_dust`)

Conditional on this specific outgoing waste. Weigh or meter the stream and document its composition, actual recipient and treatment boundary; internal recirculation is not an external disposal.

- Selected flow: Captured MDF sanding dust sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Wastewater sent to treatment (`line_effluent`)

Conditional on this specific outgoing waste. Weigh or meter the stream and document its composition, actual recipient and treatment boundary; internal recirculation is not an external disposal.

- Selected flow: Untreated MDF process wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### Spent lubricating oil (`spent_oil`)

Conditional on this specific outgoing waste. Weigh or meter the stream and document its composition, actual recipient and treatment boundary; internal recirculation is not an external disposal.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

##### Elementary flows

###### fibre drying air release: formaldehyde (`dryer_formaldehyde`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: methanol (`dryer_methanol`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: phenol (`dryer_phenol`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: acetaldehyde (`dryer_acetaldehyde`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: acrolein (`dryer_acrolein`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: propanal (`dryer_propionaldehyde`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: water vapour (`dryer_water-vapour`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: particles (PM2.5) (`dryer_pm25`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: particles (PM2.5 - PM10) (`dryer_pmcoarse`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: particles (> PM10) (`dryer_pmover10`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: carbon dioxide (biogenic) (`dryer_co2bio`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: carbon dioxide (fossil) (`dryer_co2fossil`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: carbon monoxide (biogenic) (`dryer_cobio`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: carbon monoxide (fossil) (`dryer_cofossil`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: methane (biogenic) (`dryer_ch4bio`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: methane (fossil) (`dryer_ch4fossil`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: nitrous oxide (`dryer_n2o`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: Nitrogen oxides (`dryer_nox`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero. This is one real ILCD NOx aggregate parameter; Mass/kg does not define its reporting mass. Quantity compatibility is pending until the monitoring report, LCI flow definition and selected LCIA mapping demonstrate the same basis: NO2-equivalent mass or actual summed NO and NO2 mass, with explicit species coverage. Exclude N2O from NOx. Do not populate by assuming NOx equals NO2 mass, invent a NO/NO2 ratio, or also add separately modelled NO/NO2 for the same release. If the common basis cannot be demonstrated, retain the pending quantity; a future speciation route requires independently verified NO and NO2 identities and actual speciation evidence.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### fibre drying air release: sulfur dioxide (`dryer_so2`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: formaldehyde (`press_formaldehyde`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: methanol (`press_methanol`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: phenol (`press_phenol`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: acetaldehyde (`press_acetaldehyde`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: acrolein (`press_acrolein`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: propanal (`press_propionaldehyde`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: water vapour (`press_water-vapour`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: particles (PM2.5) (`press_pm25`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: particles (PM2.5 - PM10) (`press_pmcoarse`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### pressing and cooling air release: particles (> PM10) (`press_pmover10`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### sanding and trimming air release: particles (PM2.5) (`finish_pm25`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### sanding and trimming air release: particles (PM2.5 - PM10) (`finish_pmcoarse`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### sanding and trimming air release: particles (> PM10) (`finish_pmover10`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: particles (PM2.5) (`handling_pm25`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: particles (PM2.5 - PM10) (`handling_pmcoarse`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: particles (> PM10) (`handling_pmover10`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: carbon dioxide (fossil) (`handling_co2fossil`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: carbon monoxide (fossil) (`handling_cofossil`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: methane (fossil) (`handling_ch4fossil`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: nitrous oxide (`handling_n2o`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: Nitrogen oxides (`handling_nox`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero. This is one real ILCD NOx aggregate parameter; Mass/kg does not define its reporting mass. Quantity compatibility is pending until the monitoring report, LCI flow definition and selected LCIA mapping demonstrate the same basis: NO2-equivalent mass or actual summed NO and NO2 mass, with explicit species coverage. Exclude N2O from NOx. Do not populate by assuming NOx equals NO2 mass, invent a NO/NO2 ratio, or also add separately modelled NO/NO2 for the same release. If the common basis cannot be demonstrated, retain the pending quantity; a future speciation route requires independently verified NO and NO2 identities and actual speciation evidence.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### furnish handling and mobile equipment air release: sulfur dioxide (`handling_so2`)

Collect this species after control at the stated source; record stack or fugitive capture coverage and carbon origin where specified. Applicable combustion species require actual firing/mobile activity; an untested or below-detection result is not zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

### Process: On-site utilities (`utilities`)

#### Inputs

##### Product flows

###### Boiler natural gas (`boiler_gas`)

Measure auxiliary gas separately from direct dryer and oxidizer fuel. Identity is retained but quantity compatibility with background m3 remains pending. Record supplier/background reference quantity A, reference temperature T, absolute pressure P, dry/wet composition and compressibility Z, plus meter conditions and composition on the same basis. Reconcile the actual delivery/loss gate and convert only with these measured/declared conditions; a Volume/m3 property establishes neither Nm3 nor standard conditions. An unknown supplier or background volume definition leaves the link incomplete.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect this actual exchange using cp_energy_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler bark fuel (`boiler_bark`)

Conditional on bark actually burned; retain moisture, ash and provenance; do not substitute mixed hog fuel.

- Selected flow: Bark fuel delivered to MDF wood-residue boiler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_fuel and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler MDF sanding dust fuel (`boiler_dust`)

Conditional on resin-bearing MDF dust burned; separate wood biogenic carbon and adhesive fossil carbon with actual composition evidence. A clean-wood factor does not establish its applicability.

- Selected flow: Resin-bearing MDF sanding dust as boiler fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_fuel and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler low-voltage electricity (`boiler_electricity`)

Measure boiler auxiliaries and control; apply below-1-kV identity only when actual supply matches.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect this actual exchange using cp_energy_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler make-up water (`boiler_water`)

Measure new treated make-up water and exclude recovered condensate from this input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_water_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Returned condensate received (`boiler_condensate`)

Same physical stream and quantity as condensate_return; do not apply allocation factors to either link end.

- Selected flow: Returned steam condensate from MDF indirect heating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_thermal_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Digester steam delivered (`boiler_steam`)

Conditional on on-site generation of this carrier. The output equals the linked line input for the same scope; document exports, losses and the supplier-compatible measurement basis before assigning MJ.

- Selected flow: Process steam delivered to MDF digester
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_thermal_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Indirect process heat delivered (`boiler_heat`)

Conditional on on-site generation of this carrier. The output equals the linked line input for the same scope; document exports, losses and the supplier-compatible measurement basis before assigning MJ.

- Selected flow: Indirect process heat delivered to MDF manufacture
- Flow property / unit: Delivered heat measurement basis unresolved; MJ; flow property/unit group UUID unresolved / MJ
- Amount rule: Collect this actual exchange using cp_thermal_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

##### Waste flows

###### Wood-residue boiler bottom ash (`boiler_bottom_ash`)

Conditional on this collected boiler waste; measure separately, identify fuel mix and actual treatment, and distinguish retained ash from emitted particulate.

- Selected flow: Wood-residue boiler bottom ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Wood-residue boiler captured fly ash (`boiler_fly_ash`)

Conditional on this collected boiler waste; measure separately, identify fuel mix and actual treatment, and distinguish retained ash from emitted particulate.

- Selected flow: Wood-residue boiler captured fly ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Wood-residue boiler blowdown water sent to treatment (`boiler_blowdown`)

Conditional on this collected boiler waste; measure separately, identify fuel mix and actual treatment, and distinguish retained ash from emitted particulate.

- Selected flow: Wood-residue boiler blowdown water sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_residues_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

##### Elementary flows

###### Boiler air release: carbon dioxide (biogenic) (`boiler_co2bio`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: carbon dioxide (fossil) (`boiler_co2fossil`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: carbon monoxide (biogenic) (`boiler_cobio`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: carbon monoxide (fossil) (`boiler_cofossil`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: methane (biogenic) (`boiler_ch4bio`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: methane (fossil) (`boiler_ch4fossil`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: nitrous oxide (`boiler_n2o`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: Nitrogen oxides (`boiler_nox`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas. This is one real ILCD NOx aggregate parameter; Mass/kg does not define its reporting mass. Quantity compatibility is pending until the monitoring report, LCI flow definition and selected LCIA mapping demonstrate the same basis: NO2-equivalent mass or actual summed NO and NO2 mass, with explicit species coverage. Exclude N2O from NOx. Do not populate by assuming NOx equals NO2 mass, invent a NO/NO2 ratio, or also add separately modelled NO/NO2 for the same release. If the common basis cannot be demonstrated, retain the pending quantity; a future speciation route requires independently verified NO and NO2 identities and actual speciation evidence.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: sulfur dioxide (`boiler_so2`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: particles (PM2.5) (`boiler_pm25`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: particles (PM2.5 - PM10) (`boiler_pmcoarse`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

###### Boiler air release: particles (> PM10) (`boiler_pmover10`)

Collect the boiler stack species after control; bind fuel mix, operating mode and test method. Preserve biogenic CO2 in LCI and separate fossil carbon from resin or support gas.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this actual exchange using cp_air_utilities and divide by accepted net MDF mass for the same period; apply the corresponding calculation rules; missing values remain unresolved with no literature default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_utilities`
- Sources: `epa-wood-boiler-2022`; `corrim-mdf-2024`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all inventory rows | Retain unallocated physical stream quantities and mass/water/carbon balances; do not multiply actual MDF, residue or internal-link quantities by a burden-allocation fraction. Internal recovered dust is not a second saleable output. | `corrim-mdf-2024` |
| allocation_single_product | mdf-line | Where accepted MDF is the only valuable product, assign attributable line burdens to MDF and retain actual waste/energy recovery separately. Determine waste versus saleable coproduct from contracts and actual use, not from the word residue. | `corrim-mdf-2024` |
| allocation_shared | mdf-line; utilities | First separate causal stage/customer loads using submetering and source-specific activity. If irreducible shared coproduct burdens remain, document the chosen physical relationship and consistent moisture/energy basis; any economic alternative needs current transaction evidence, sensitivity and review. Do not assume that CORRIM upstream residue mass allocation or one-product A3 condition applies to every plant. | `corrim-mdf-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | mdf-line | accepted MDF | weighing | time, lot, board type, accepted net mass, area, thickness, volume, moisture/test basis, density, packaging tare, opening/closing stocks | Use calibrated scales and same-lot dimension/moisture tests to measure net board mass; exclude packaging/rejects and reconcile counts/stocks. Aggregation calculation: accepted net board mass in same period is denominator for per 1 kg reference flow | kg | batch | complete same declared survey period | declared plant and board grade | per 1 kg reference flow | calibration, acceptance and moisture tests |
| cp_furnish | mdf-line | furnish | receipt and sampling | each furnish lot, supplier/species, wet/oven-dry mass, moisture basis, bulk volume/density, transport, allocation, stocks and stage transfers; supplier/background actual reference A and solid/bulk volume definition, Vs, Vb, k, matched moisture/state, loss/delivery gate | Weigh each furnish and use representative same-lot oven-dry/moisture testing; measure volume directly or convert with same-lot density; record bark/fibre stage ledger. Aggregation calculation: sum attributable amount of each furnish / accepted net MDF mass, per 1 kg reference flow Verify supplier A and background quantity definition. Measure representative same-lot/same-moisture Vs and Vb with loose/compacted state; k = Vs/Vb. Retain receipt-gate, loss and stock conversions; unknown correspondence leaves the link incomplete. | kg; m3 | lot and shift | complete same declared survey period | suppliers and plant | per 1 kg reference flow | weighbridge, sampling, moisture and upstream-boundary records |
| cp_recipe | mdf-line | each chemical | supplier and dosing | separate resin/wax/hardener/urea/lubricant identity, delivered mass, solids, carrier water, carbon origin, dosing point, batch, stocks, recirculation | Reconcile supplier specifications and actual recipes with calibrated dosing scales/pumps and purchases/stocks; infer no universal concentration or urea nitrogen content. Distinguish each actual independently supplied chemical from a bought complete resin/emulsion/hardener formulation. Whole bought formulations require specific compatible complete-product identities/providers retaining supplier manufacture/preparation/delivery once; included constituents/carrier water stay analytical. Actual separately purchased additions and onsite mixing/emulsification water/utilities/losses remain separate foreground records. Aggregation calculation: attributable consumption of each separate product / accepted net MDF mass, per 1 kg reference flow; solids/carrier water retained in separate physical ledgers | kg | batch | complete same declared survey period | plant recipe and suppliers | per 1 kg reference flow | supplier evidence, recipe and dosing calibration |
| cp_energy | mdf-line | electricity and each fuel; scoped to mdf-line | meter and invoice | stage, meter, voltage, kWh, each fuel mass/volume, temperature/pressure/composition/calorific basis, hours, control use, output and stocks; each gas supplier/background actual reference A, T, absolute P, dry-wet composition, Z, background-m3 and site-meter reference conditions/gate | Submeter refining, drying, pressing, finishing, controls and boiler; reconcile fuel purchases/stocks and purchased/on-site shares. Aggregation calculation: sum attributable stage amount of each carrier / accepted net MDF mass, per 1 kg reference flow; electricity converted to MJ Match supplier/background m3 quantity definition to site meters; unknown T/P, dry-wet composition, Z or loss gate prevents assumed conversion. This protocol attributes only actual mdf-line rows/sources; the other process uses cp_energy_utilities. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kWh; MJ; kg; m3 | shift and billing period | complete same declared survey period | plant and energy-supply boundary; actual owning process: mdf-line | per 1 kg reference flow | meter calibration, bills, fuel certificates, boundary reconciliation |
| cp_energy_utilities | utilities | electricity and each fuel; scoped to utilities | meter and invoice | stage, meter, voltage, kWh, each fuel mass/volume, temperature/pressure/composition/calorific basis, hours, control use, output and stocks; each gas supplier/background actual reference A, T, absolute P, dry-wet composition, Z, background-m3 and site-meter reference conditions/gate | Submeter refining, drying, pressing, finishing, controls and boiler; reconcile fuel purchases/stocks and purchased/on-site shares. Aggregation calculation: sum attributable stage amount of each carrier / accepted net MDF mass, per 1 kg reference flow; electricity converted to MJ Match supplier/background m3 quantity definition to site meters; unknown T/P, dry-wet composition, Z or loss gate prevents assumed conversion. This protocol attributes only actual utilities rows/sources; the other process uses cp_energy. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kWh; MJ; kg; m3 | shift and billing period | complete same declared survey period | plant and energy-supply boundary; actual owning process: utilities | per 1 kg reference flow | meter calibration, bills, fuel certificates, boundary reconciliation |
| cp_thermal | mdf-line | steam, indirect heat, condensate; scoped to mdf-line | mass and enthalpy metering | supply/return point, mass, temperature, absolute pressure, quality, enthalpy definition, condensation into fibres, recovery, losses, exports, meter, supplier/background energy definition | Reconcile calibrated mass/heat meters and temperature/pressure records at a common enthalpy basis; obtain supplier definition and demonstrate agreement with background exchange; unknown heat basis stays unresolved. Aggregation calculation: actual delivered quantity of each carrier / accepted net MDF mass, per 1 kg reference flow; equal internal link ends, steam mass and net heat separate This protocol attributes only actual mdf-line rows/sources; the other process uses cp_thermal_utilities. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg; MJ | shift | complete same declared survey period | plant steam/heat carrier links; actual owning process: mdf-line | per 1 kg reference flow | heat-meter calibration, supply-return enthalpy balance, supplier/background definition |
| cp_thermal_utilities | utilities | steam, indirect heat, condensate; scoped to utilities | mass and enthalpy metering | supply/return point, mass, temperature, absolute pressure, quality, enthalpy definition, condensation into fibres, recovery, losses, exports, meter, supplier/background energy definition | Reconcile calibrated mass/heat meters and temperature/pressure records at a common enthalpy basis; obtain supplier definition and demonstrate agreement with background exchange; unknown heat basis stays unresolved. Aggregation calculation: actual delivered quantity of each carrier / accepted net MDF mass, per 1 kg reference flow; equal internal link ends, steam mass and net heat separate This protocol attributes only actual utilities rows/sources; the other process uses cp_thermal. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg; MJ | shift | complete same declared survey period | plant steam/heat carrier links; actual owning process: utilities | per 1 kg reference flow | heat-meter calibration, supply-return enthalpy balance, supplier/background definition |
| cp_water | mdf-line | water; scoped to mdf-line | water meter | fresh make-up, recirculation, formulation water, steam condensation, fibre/board moisture, effluent, opening/closing storage, meter | Calibrate boundary meters and weigh/sample fibre/board moisture; avoid duplicate fresh/recycled/steam water accounting. Aggregation calculation: attributable fresh water amount / accepted net MDF mass, per 1 kg reference flow; retain internal water balances separately This protocol attributes only actual mdf-line rows/sources; the other process uses cp_water_utilities. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | shift | complete same declared survey period | plant line/boiler boundary; actual owning process: mdf-line | per 1 kg reference flow | meter and water balance |
| cp_water_utilities | utilities | water; scoped to utilities | water meter | fresh make-up, recirculation, formulation water, steam condensation, fibre/board moisture, effluent, opening/closing storage, meter | Calibrate boundary meters and weigh/sample fibre/board moisture; avoid duplicate fresh/recycled/steam water accounting. Aggregation calculation: attributable fresh water amount / accepted net MDF mass, per 1 kg reference flow; retain internal water balances separately This protocol attributes only actual utilities rows/sources; the other process uses cp_water. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | shift | complete same declared survey period | plant line/boiler boundary; actual owning process: utilities | per 1 kg reference flow | meter and water balance |
| cp_pack | mdf-line | each packaging component | mass and count | material, supply route, count, unit net mass, loss, stocks, corresponding accepted board mass | Weigh each actual packaging material or multiply counts by measured unit mass; exclude packaging from MDF net mass. Aggregation calculation: consumption of each packaging component / accepted net MDF mass, per 1 kg reference flow | kg | batch | complete same declared survey period | plant packaging | per 1 kg reference flow | weighing, supplier route and packing records |
| cp_residues | mdf-line | each waste; scoped to mdf-line | transfer and composition | separate dust/offcut/bark/ash/effluent/oil, moisture and resin/ash composition, source, recirculation destination, mass, recipient/treatment | Weigh/meter each stream and reconcile transfer records; collected ash differs from air PM and cured residues differ from uncured fibres. Aggregation calculation: each actual external waste amount / accepted net MDF mass, per 1 kg reference flow; internal recovery retains equal links only This protocol attributes only actual mdf-line rows/sources; the other process uses cp_residues_utilities. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | shift and transfer | complete same declared survey period | plant and recipients; actual owning process: mdf-line | per 1 kg reference flow | transfer receipts, composition, destination, stocks |
| cp_residues_utilities | utilities | each waste; scoped to utilities | transfer and composition | separate dust/offcut/bark/ash/effluent/oil, moisture and resin/ash composition, source, recirculation destination, mass, recipient/treatment | Weigh/meter each stream and reconcile transfer records; collected ash differs from air PM and cured residues differ from uncured fibres. Aggregation calculation: each actual external waste amount / accepted net MDF mass, per 1 kg reference flow; internal recovery retains equal links only This protocol attributes only actual utilities rows/sources; the other process uses cp_residues. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | shift and transfer | complete same declared survey period | plant and recipients; actual owning process: utilities | per 1 kg reference flow | transfer receipts, composition, destination, stocks |
| cp_fuel | utilities | each wood fuel | weighing and analysis | each fuel mass, moisture, heating value and gross/net basis, resin/carbon origin, ash, provenance/internal link, firing conditions | Weigh each actual fuel and sample moisture/carbon composition representatively; external factors require demonstrated matching fuel/equipment conditions. Aggregation calculation: actual consumption of each fuel / accepted net MDF mass, per 1 kg reference flow | kg | fuel lot and shift | complete same declared survey period | plant boiler | per 1 kg reference flow | weighing, composition, heating value and equipment evidence |
| cp_air | mdf-line | each emission species and source; scoped to mdf-line | stack and fugitive tests | source/stack/stage, species, compartment, carbon origin, concentration, gas flow, hours, oxygen/dry-wet/temperature-pressure basis, control state, detection limits, size/condensable fraction, factor applicability; NOx NO2-equivalent or actual NO+NO2 mass definition, NO/NO2 coverage, N2O exclusion and selected LCIA-mapping mass definition | Test drying, pressing/cooling, finishing/handling and boiler separately or use applicability-verified factors times measured activity; count a shared final stack once while retaining source decomposition. Aggregation calculation: attributable post-control release mass of each species / accepted net MDF mass, per 1 kg reference flow; no overlapping size bins Prove the same monitoring/LCI/LCIA-mapping mass definition for aggregate NOx; assume no NO2 equivalence, do not duplicate speciated releases and retain pending quantity compatibility if unproven. This protocol attributes only actual mdf-line rows/sources; the other process uses cp_air_utilities. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | representative operating modes plus activity logs | same declared period including abnormal/start-stop modes | each plant emission source; actual owning process: mdf-line | per 1 kg reference flow | test methods, detection limits, stack diagram, control records, factor boundaries |
| cp_air_utilities | utilities | each emission species and source; scoped to utilities | stack and fugitive tests | source/stack/stage, species, compartment, carbon origin, concentration, gas flow, hours, oxygen/dry-wet/temperature-pressure basis, control state, detection limits, size/condensable fraction, factor applicability; NOx NO2-equivalent or actual NO+NO2 mass definition, NO/NO2 coverage, N2O exclusion and selected LCIA-mapping mass definition | Test drying, pressing/cooling, finishing/handling and boiler separately or use applicability-verified factors times measured activity; count a shared final stack once while retaining source decomposition. Aggregation calculation: attributable post-control release mass of each species / accepted net MDF mass, per 1 kg reference flow; no overlapping size bins Prove the same monitoring/LCI/LCIA-mapping mass definition for aggregate NOx; assume no NO2 equivalence, do not duplicate speciated releases and retain pending quantity compatibility if unproven. This protocol attributes only actual utilities rows/sources; the other process uses cp_air. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | representative operating modes plus activity logs | same declared period including abnormal/start-stop modes | each plant emission source; actual owning process: utilities | per 1 kg reference flow | test methods, detection limits, stack diagram, control records, factor boundaries |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_output` | all inventory rows | Normalized exchange = attributable actual total exchange for that row in the period / accepted net MDF mass. Preserve numerator kg, m3 or MJ; denominator is cp_output kg; mdf_output is fixed at 1 kg per reference flow. | actual row amount; accepted net mass; cp_output | per 1 kg reference flow | `corrim-mdf-2024` |
| `moisture_conversion` | furnish_chips, furnish_sawdust, furnish_shavings, mdf_output | Dry mass = wet mass/(1+u); water = wet mass - dry mass; w=u/(1+u). u is dry-basis and w wet-basis fraction; resin and inorganic additives are not dry wood. | wet mass; dry-basis moisture; cp_furnish; cp_output | dry solids and water | `usda-wood-handbook-2021` |
| `recipe_split` | binder_uf, binder_muf, binder_pmdi, additive_wax, additive_hardener | Formulation solids = delivered formulation mass × measured solids fraction; carrier water uses its actual formulation fraction, not assumed all nonsolids. Apply this analytical split to each actual supply in its verified complete-product or independently supplied chemical reference basis; a whole prepared formulation cannot be assigned to a constituent UUID. These component ledgers do not create duplicate purchases. Preserve supplier manufacture/preparation/delivery once and separately record true onsite purchases, mixing water/utilities and losses. | delivered formulation; solids fraction; water fraction; cp_recipe | component ledger | `corrim-mdf-2024` |
| `volume_conversion` | furnish_chips, mdf_output, dryer_gas, control_gas, boiler_gas | Board volume = measured area × thickness. Measure chip k = Vs/Vb on the same lot/moisture/state: use Vs for a supplier/background solid-volume definition or Vb at matching compaction for bulk volume; reconcile gates using measured stocks/losses. Background-process multiplier = matching volume / its actual reference amount A; normalize the actual inventory exchange by accepted net MDF mass separately. Unknown A/definition leaves the link incomplete; unknown density/packing is no substitute. Gas quantity conversion requires measured meter T/P, dry-wet composition, Z and matching background-m3 state, with no assumed standard volume. | Vs; Vb; k; A; measured stocks/losses; gas T/P/composition/Z; cp_furnish; cp_energy; cp_energy_utilities; cp_output | consistent volume or mass | `usda-wood-handbook-2021`; `corrim-mdf-2024` |
| `thermal_reconciliation` | line_steam, line_heat, boiler_steam, boiler_heat, condensate_return, boiler_condensate | Indirect net delivered heat = sum(supply mass × supply specific enthalpy) - sum(return mass × return specific enthalpy), using common enthalpy datum and period. Supplier/background definition must match this boundary. For no-return/direct digestion disclose condensate fate and reference datum; fuel calorific value or property name is no substitute. Heat remains unresolved until demonstrated. | mass; supply/return states; enthalpy definition; cp_thermal; cp_thermal_utilities | carrier mass and verified delivered heat | `epa-mdf-2002`; `corrim-mdf-2024` |
| `emission_mass` | all elementary outputs | Emission mass = species concentration on consistent dry/wet, temperature/pressure and oxygen basis × matching gas flow × operating time, or applicability-verified factor × measured activity on the same basis. Do not count both upstream and final stack for a shared exhaust. | concentration; gas flow; operating time; activity; cp_air; cp_air_utilities | species emission mass | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| `pm_partition` | all particulate outputs | Only for the same stack/test coverage with compatible cumulative sizes: PM2.5 row = cumulative PM2.5; PM2.5–10 row = cumulative PM10 - cumulative PM2.5; >PM10 row = total PM - cumulative PM10. Check nonnegativity; incompatible condensable/filterable definitions or missing sizes prevent partition and remain unresolved. | same-basis total PM; cumulative PM10; cumulative PM2.5; cp_air; cp_air_utilities | nonoverlapping particulate masses | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| `physical_reconciliation` | mdf-line; utilities | Retain each stage unallocated wood solids, resin solids, water and carbon: inputs = product/residue/emission outputs + stock change. Equal internal transfers; combustion carbon tracks wood biogenic origin separately from resin/fuel fossil origin without assuming complete combustion. | stage flows; stocks; component composition; cp_furnish; cp_recipe; cp_water; cp_water_utilities; cp_air; cp_air_utilities; cp_fuel | physical mass/water/carbon ledgers | `corrim-mdf-2024`; `epa-wood-boiler-2022` |
| `nox_compatibility` | dryer_nox, handling_nox, boiler_nox | Compare monitoring, LCI and selected LCIA-mapping NOx mass definitions and NO/NO2 coverage. Generate an aggregate quantity using the applicable cp_air or cp_air_utilities record only when all three share the same basis; infer neither NO2-equivalent mass nor NO/NO2 ratio, exclude N2O and avoid speciated duplicates. Otherwise quantity remains pending. | monitoring mass definition; flow mass definition; LCIA mapping; cp_air; cp_air_utilities | compatible NOx quantity or explicit pending result | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_primary | all inventory rows | Retain actual production, metering, stocks and representative operating modes for the same period; never generalize CORRIM regional recipes/energy or softwood sawmill surveys into category parameters. | collection originals and applicability review |
| quality_missing | all inventory rows | Distinguish unknown, unmeasured, BDL and true zero; ranges need independent compatible evidence. This candidate has no synthesized reviewed universal ranges. | missingness, detection limits, range-evidence gaps |
| quality_claims | mdf_output | Density, thickness, moisture and formaldehyde class require test state/method/date and applicable version; report titles/classification labels establish no performance/regulatory conformity. | product tests and supplier declarations |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | mdf_output | Require one final reference output, matched mass property/unit and every qualifier; same-period net accepted mass excludes packaging. Other stage states are physical-ledger entries within the line, not duplicate MDF outputs. | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |
| validation_quantity_compatibility | furnish_chips; dryer_gas; control_gas; boiler_gas; dryer_nox; handling_nox; boiler_nox | Confirmed UUID/property/unit does not establish quantity compatibility. Chips require supplier A, volume definition, matched-moisture/state Vs/Vb/k and loss/gate correspondence; gas requires T/P, dry-wet composition, Z and background-m3 correspondence; NOx requires common monitoring/LCI/LCIA mass definition, NO/NO2 coverage, N2O exclusion and no speciated duplicates. Any unknown remains quantity compatibility pending and the affected link/result incomplete. | `corrim-mdf-2024`; `epa-mdf-2002`; `epa-wood-boiler-2022` |
| validation_inventory | all inventory rows | Each actual exchange has one atomic identity, state, direction, type, property/unit, protocol and denominator. Resolve blank UUIDs and route/grade mismatches before complete use of the affected route; never select a nearby board or correction flow. | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |
| validation_balances | mdf-line; utilities | Reconcile separate physical solids/water/carbon ledgers and environmental-burden accounts. Demonstrate equal internal links, actual recirculation fates and allocation evidence without scaling physical coproduct outputs. | `corrim-mdf-2024` |
| validation_thermal | line_steam; line_heat; boiler_steam; boiler_heat | A steam/heat MJ property is insufficient evidence of net delivered heat. Require supplier/background definition, metering boundary and matched state/enthalpy balance; unknown basis is inconclusive. Do not double count utility fuels and purchased heat. | `epa-mdf-2002`; `corrim-mdf-2024` |
| validation_air | all elementary outputs | Verify species, outdoor-air medium, actual source and biogenic/fossil origin; retain biogenic CO2 in LCI regardless of impact-accounting conventions. Use compatible nonoverlapping PM bins and disclose detection limits/condensables. Manufacturing factors are not boiler factors; clean-wood factors require review for resin-bearing dust. | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| validation_readiness | all inventory rows | Methodology is authored candidate guidance requiring independent scientific review. Passing structural/measurement checks establishes neither legal conformity nor a completed site LCI; unresolved identities, heat definitions and range evidence remain explicit. | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Upstream manufacture for uncoated dry-process wood MDF inputs |
| allowed_use | Use after matching route/recipe/delivery state/location-year and resolving applicable gaps; disclose quality and boundary |
| excluded_use | Wet hardboard, other fibreboard, nonwood fibre, special/coated recipes, default life/end-use scenario or formaldehyde legal proof |
| required_metadata | PCR identity/version; survey period/location/output; full reference qualifiers; energy/upstream boundary; atomic flows/protocols; allocation/physical ledgers |
| required_quality_disclosure | Unresolved UUIDs/measurement basis, exclusions/detection limits, range evidence, location/year/route proxies and review state |
| update_trigger | Changes to furnish species/provenance, recipe/moisture, drying/dosing sequence, press, fuel/heat definition, controls, electricity, grade or background boundary |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `corrim-mdf-2024` | literature | [Cradle-to-grave Life Cycle Assessment of North American Medium Density Fiberboard](https://corrim.org/wp-content/uploads/2024/07/MDF-Cradle-to-grave-LCA-Final.pdf); pp. 1, 13, 18–19, 24–30, 32; Tables 4, 7, 9, 11 | Report December 22, 2023, final revision April 3, 2024; 2021/2022 North American CPA-member survey. Supports route, components, collection and allocation conditions, not transferable recipes/density/moisture/energy/legal findings or cradle-to-grave scenarios. Section 3.2.4 states 12 facilities supplied data and also 13 manufacturers; weighting uses 13. Preserve the discrepancy instead of inventing one sample count. |
| `usda-wood-handbook-2021` | handbook | [Wood handbook—wood as an engineering material, FPL-GTR-282](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf); Chapters 4 and 11, pp. 4–1 to 4–3, 11–13 to 11–15 | 2021 technical handbook: wood-moisture definitions, fibre formation and dry MDF versus wet hardboard. Other fibreboard/adhesive and historical certification examples are not universal recipes or limits for this PCR. |
| `epa-mdf-2002` | official_guidance | [AP-42 Section 10.6.3 Medium Density Fiberboard Manufacturing](https://www.epa.gov/sites/default/files/2020-10/documents/c10s0603.pdf); August 2002; §§10.6.3.1–3; Figure 10.6.3 process diagram; Tables 10.6.3-1 onward with footnotes | Supports blowline/post-drying dosing routes, pressing, finishing, source decomposition and testing bases. Historical factors require compatible equipment/fuel/species/resin/control/unit evidence; no default amounts/current legal limits and no substitute for boiler evidence. |
| `epa-wood-boiler-2022` | official_guidance | [AP-42 Section 1.6 Wood Residue Combustion in Boilers](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf); March 2022; §§1.6.1–3; Tables 1.6-1 onward and PM/factor footnotes | Supports separate boiler boundary, fuel/moisture/control dependence and GHG/PM bases; resin-bearing fuel requires specific applicability evidence. Treatment of biogenic CO2 in greenhouse-gas reporting is no basis for omitting it from LCI. |
