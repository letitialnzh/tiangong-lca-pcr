---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.palm-nuts-and-kernels
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Palm nuts and kernels

## 1. Scope and Applicability

This PCR covers the production of oil-palm nuts or separated palm kernels from perennial oil-palm cultivation through FFB harvest, primary-mill sterilization and digestion, fibre-nut separation, optional nut cracking and kernel-shell separation, drying, grading, and hand-off before kernel-oil extraction. The declared reference state must be either oil-palm nut or separated kernel. Fresh fruit bunches (FFB), palm kernel shell, crude palm oil, refined oils, palm-kernel oil, and kernel-oil extraction are outside the reference-product identity. FFB, palm oil, fibre, shells, and rejects remain visible where they cross an included process boundary.

The managed-production parent is perennial oil-palm cultivation. Alternative plantation regimes may coexist when their land history, crop cycle, management inputs and yields are separately recorded. At the mill, batch, semi-continuous and continuous implementations may coexist only as separately indexed runs or periods; cracking is mutually exclusive with a nut-at-hand-off route for the same material lot.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.palm-nuts-and-kernels |
| classification_refs | CPC 3.0 01491, exact |
| covered_products | Nuts of oil-palm fruit; separated oil-palm kernels; whole or broken as declared, before oil extraction |
| excluded_products | FFB; palm kernel shell; palm oil; palm-kernel oil; refined oils; edible tree nuts unrelated to oil palm; kernel-oil extraction products |
| representative_product | Dried and graded oil-palm nut or separated kernel at primary mill hand-off |
| production_route | Perennial plantation and FFB harvest; mill sterilization/digestion and pressing; fibre-nut separation; optional cracking/kernel-shell separation; drying and grading |
| market_state | Production mix, in the factory; dried, graded, before oil extraction; nut versus kernel and whole versus broken state declared |

The cultivation route changes inventory and validation requirements by plantation age phase, land history, management regime and crop cycle. The mill technology route changes topology, water/energy categories, run indexing, outputs and mass-balance checks; each claimed delta requires current estate or mill records.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Oil-palm nut or separated palm kernel delivered before oil extraction |
| How much | 1 kg as-received mass at the declared moisture content |
| How well | Product state, whole/broken condition, moisture content or test basis, grade, origin, and hand-off gate declared |
| How long or cycle | Representative annual production period spanning the perennial crop cycle; mill data cover the same or reconciled reporting period |
| reference_flow_link | Accepted output `accepted_reference_product` from `grading` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Nut `ee70bc1a-99d9-40f5-905c-c0a661f21881` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oil-palm species or declared hybrid; nut or separated kernel state; whole or broken state; before oil extraction; moisture content and basis; grade; geographic origin; production period; primary-mill hand-off; explicit exclusion of FFB and palm kernel shell |
| Binding | `fixed` |

The Tiangong base name is generic. A foreground package is conforming only when the required qualifiers narrow it to an oil-palm nut or separated kernel before oil extraction. FFB and palm kernel shell are prohibited reference-flow substitutes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and measured moisture; convert dry-matter values only with the lot-specific moisture basis. |
| `mass_balance` | mill and conditioning nodes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile input, intended outputs, internal intermediates, residues, rejects and moisture change for each run or period. |
| `period_alignment` | plantation and mill records | declared property | declared unit | Align perennial establishment/mature phases, annual crop output, mill runs and storage periods; disclose any temporal scaling. |

## 5. System Boundary

The boundary begins with the declared plantation starting condition and includes managed perennial production, harvest, FFB hand-off, primary mill conditioning and treatment, fibre-nut separation, optional cracking, drying, grading and hand-off. Palm-kernel oil extraction and downstream refining are excluded. Shared nurseries, roads, irrigation, steam/electricity assets and mill utilities are included through measured use and attributed once across consuming nodes and periods.

Harvest is independent because it removes mature FFB from the managed stand and creates a measured hand-off to the mill. Sterilization/digestion changes received FFB into pressed outputs; fibre-nut separation creates palm-nut and fibre states; cracking changes nut to kernel and shell; drying changes usable wet material to a stabilized state; grading creates accepted, downgraded/rework and rejected destinations.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Estate establishment status, previous land cover/use, palm age distribution, planting material, soil/peat status, geographic boundary and opening inventory |
| starting_condition_role | Entry condition for perennial managed biological production and cross-period attribution |
| product_classification_scope | Oil-palm nuts or separated kernels corresponding exactly to CPC 3.0 01491; classification does not authorize FFB or shell as reference |
| recursive_input_rule | A purchased nut or kernel input in the same product category is a separately identified upstream dataset and may not be recursively regenerated inside this foreground package |
| upstream_dataset_requirement | Supplier-specific dataset with product state, moisture, origin, period and hand-off; generic proxy use must be disclosed |
| disclosure | Declare plantation phase, land history, route, mill mode, nut/kernel branch, cracking decision, moisture basis, grade, location, period and all upstream proxy choices |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all foreground nodes | Include the full route from declared plantation starting condition to dried and graded nut/kernel hand-off; exclude kernel-oil extraction. | `fao-palm-oil-processing` |
| `boundary_reference_exclusions` | reference identity | FFB and palm kernel shell may appear as route flows but never satisfy the reference flow. | `unsd-cpc-3-01491` |
| `boundary_periods` | perennial plantation | Separate establishment, immature and productive periods when inputs, assets or outputs differ, then attribute them across the declared productive basis. | `rspo-ghg-procedure-v4` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cultivation | Perennial oil-palm cultivation | required | Always included | Managed biological production | kg standing FFB ready for harvest |
| harvest | FFB harvest and field hand-off | required | Always included | Independent harvest/capture | kg harvested FFB |
| mill_treatment | Primary mill sterilization, digestion and pressing | required | Always included | Primary conditioning and material treatment | kg treated FFB |
| fibre_nut_separation | Fibre-nut separation | required | Always included | Material separation | kg press cake or fibre-nut mixture |
| cracking | Nut cracking and kernel-shell separation | conditional | Include when separated kernel is the declared reference product | Alternative treatment route | kg palm nut input |
| drying | Nut or kernel drying and stabilization | required | Always included for the declared nut or kernel state | Preservation and stabilization | kg wet nut or kernel input |
| grading | Nut or kernel grading and primary mill hand-off | required | Always included | Grading and sorting | kg dried nut or kernel input |

Mill runs must be identified as batch, semi-continuous or continuous. Cleaning, start-up, shutdown and changeover records are attached to the run or operating period once. Rework loops return only to their actual producing node and never enter accepted product twice.

### Process: Perennial oil-palm cultivation (`cultivation`)

#### Inputs

##### Product flows

###### Consolidated fertilizer and nutrient supply (`cultivation_nutrients`)

Mineral fertilizer, organic fertilizer and nutrient amendments applied to managed oil-palm stands are consolidated in one card.

- Selected flow: fertilizer and nutrient supply
- Flow property / unit: Mass or nutrient mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured applied nutrient products and nutrient composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing FFB ready for harvest
- Basis kind: Process output (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg standing FFB
  - Basis: per kg standing FFB ready for harvest
  - Basis kind: Process output (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supply (`cultivation_water`)

Irrigation water crossing the plantation boundary is recorded; rainfall is excluded from this product-flow card.

- Selected flow: irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: measured delivered irrigation water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing FFB ready for harvest
- Basis kind: Process output (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3/kg standing FFB
  - Basis: per kg standing FFB ready for harvest
  - Basis kind: Process output (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cultivation energy supply (`cultivation_energy`)

Purchased electricity and fuels used by plantation operations are recorded by actual carrier.

- Selected flow: cultivation energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or purchased carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing FFB ready for harvest
- Basis kind: Process output (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg standing FFB
  - Basis: per kg standing FFB ready for harvest
  - Basis kind: Process output (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing FFB ready for harvest (`standing_ffb`)

The managed perennial stand hands mature FFB to the independent harvest node; this is an internal foreground intermediate.

- Selected flow: standing FFB ready for harvest
- Flow property / unit: Mass / kg
- Amount rule: measured harvestable FFB mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing FFB ready for harvest
- Basis kind: Process output (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg standing FFB
  - Basis: per kg standing FFB ready for harvest
  - Basis kind: Process output (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Plantation residues and biological losses (`cultivation_residues`)

Prunings, failed fruit and other non-product biomass are classified as retained residue, recovered material or waste from actual fate records.

- Selected flow: plantation residues and losses
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated dry/wet mass by declared basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing FFB ready for harvest
- Basis kind: Process output (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg standing FFB
  - Basis: per kg standing FFB ready for harvest
  - Basis kind: Process output (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: FFB harvest and field hand-off (`harvest`)

#### Inputs

##### Product flows

###### Harvest energy supply (`harvest_energy`)

Fuel or electricity used for cutting, collection and in-field handling is recorded by actual carrier.

- Selected flow: harvest energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or purchased carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg harvested FFB
  - Basis: per kg harvested FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Standing FFB from managed palms (`harvestable_ffb_input`)

This internal foreground intermediate links managed production to harvest without a database identity.

- Selected flow: standing FFB ready for harvest
- Flow property / unit: Mass / kg
- Amount rule: mass accepted for harvesting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg harvested FFB
  - Basis: per kg harvested FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested FFB delivered to primary mill (`harvested_ffb`)

Harvested fresh fruit bunches are handed to mill reception promptly; FFB is an internal route intermediate and is not the reference product.

- Selected flow: harvested FFB
- Flow property / unit: Mass / kg
- Amount rule: weighbridge or calibrated field-scale mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg harvested FFB
  - Basis: per kg harvested FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest losses and incidental biomass (`harvest_losses`)

Dropped fruit, cut fronds and rejected bunches are distinguished by actual recovery, retention or disposal fate.

- Selected flow: harvest losses and incidental biomass
- Flow property / unit: Mass / kg
- Amount rule: measured or sampled mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvested FFB
  - Basis: per kg harvested FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Primary mill sterilization, digestion and pressing (`mill_treatment`)

#### Inputs

##### Product flows

###### Harvested FFB received (`received_ffb`)

The mill receives the internal harvested-FFB intermediate; no FFB UUID is bound because FFB is explicitly excluded as the PCR reference.

- Selected flow: harvested FFB
- Flow property / unit: Mass / kg
- Amount rule: weighbridge mass accepted at mill
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mill_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg treated FFB
  - Basis: per kg treated FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mill process water (`mill_water`)

Water used for wet heat, washing and processing is recorded by actual use.

- Selected flow: process water
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or balance-derived water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mill_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated FFB
  - Basis: per kg treated FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mill energy supply (`mill_energy`)

Steam, electricity and fuels crossing the process boundary are resolved by actual carrier.

- Selected flow: mill energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered energy and fuel use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mill_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg treated FFB
  - Basis: per kg treated FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude palm oil co-product (`crude_palm_oil`)

Crude palm oil produced during digestion and pressing is an intended co-product subject to explicit attribution.

- Selected flow: Palm oil, crude `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured crude palm oil mass at its hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mill_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg treated FFB
  - Basis: per kg treated FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fibre-nut mixture for separation (`fibre_nut_mix`)

This intended output from the mill-treatment node is an internal press-cake fibre and nut intermediate handed to fibre-nut separation.

- Selected flow: fibre-nut mixture
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-derived mixture mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mill_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg treated FFB
  - Basis: per kg treated FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Empty bunches and mill rejects (`mill_residues`)

Empty fruit bunches and rejected material are recorded by actual use, recovery or disposal fate and are not silently assigned zero burden.

- Selected flow: empty bunches and mill rejects
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated FFB
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mill_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg treated FFB
  - Basis: per kg treated FFB
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Fibre-nut separation (`fibre_nut_separation`)

#### Inputs

##### Product flows

###### Fibre-nut mixture received (`separation_feed`)

The internal press-cake mixture is received from mill treatment.

- Selected flow: fibre-nut mixture
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg separation feed
  - Basis: per kg separation feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separation energy supply (`separation_energy`)

Electricity, steam or fuel used by depericarping and separation is recorded by actual carrier.

- Selected flow: separation energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg separation feed
  - Basis: per kg separation feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Palm nuts for drying or cracking (`separated_palm_nuts`)

Separated palm nuts are an internal product intermediate handed either to nut drying or to the conditional cracking route.

- Selected flow: separated palm nuts
- Flow property / unit: Mass / kg
- Amount rule: measured separated nut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg separation feed
  - Basis: per kg separation feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mesocarp fibre co-product or recovered fuel (`mesocarp_fibre`)

Separated fibre is classified by its actual intended use and hand-off; intended exported or internally recovered fibre is treated consistently in attribution.

- Selected flow: Mesocarp fibre `a9b37001-a69f-4d00-bf11-6ce763cac036`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured separated fibre mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg separation feed
  - Basis: per kg separation feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Nut cracking and kernel-shell separation (`cracking`)

#### Inputs

##### Product flows

###### Separated palm nuts for cracking (`nuts_for_cracking`)

The internal palm-nut intermediate enters cracking only when kernel is the declared reference state.

- Selected flow: separated palm nuts
- Flow property / unit: Mass / kg
- Amount rule: measured nut feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg nut feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cracking_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg nut feed
  - Basis: per kg nut feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Kernel separation water (`cracking_water`)

Water used in hydrocyclone or clay-bath separation is included when that technology is operated.

- Selected flow: process water
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`technology_specific`)
- Normalization basis: per kg nut feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cracking_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg nut feed
  - Basis: per kg nut feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cracking and separation energy supply (`cracking_energy`)

Electricity or fuel for cracking, winnowing and separation is recorded by actual carrier.

- Selected flow: cracking energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`technology_specific`)
- Normalization basis: per kg nut feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cracking_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg nut feed
  - Basis: per kg nut feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separated palm kernels (`separated_kernels`)

Separated kernels are an internal intermediate handed to drying; kernel-oil extraction is outside the boundary.

- Selected flow: separated palm kernels
- Flow property / unit: Mass / kg
- Amount rule: measured kernel mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg nut feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cracking_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg nut feed
  - Basis: per kg nut feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Palm kernel shell co-product or residue (`kernel_shell`)

Shell from nut cracking is classified by its actual intended use and hand-off and is never used as the reference product.

- Selected flow: Palm kernel shell `ac6ce69c-ddd1-400d-a603-901313253baa`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured shell mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg nut feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cracking_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg nut feed
  - Basis: per kg nut feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Nut or kernel drying and stabilization (`drying`)

#### Inputs

##### Product flows

###### Wet nut or kernel feed (`wet_nut_kernel`)

The selected internal state is either separated palm nut or separated kernel, declared explicitly and never mixed without reconciliation.

- Selected flow: wet palm nut or kernel
- Flow property / unit: Mass / kg
- Amount rule: measured wet feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`product_specific`)
- Normalization basis: per kg wet nut or kernel feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg wet feed
  - Basis: per kg wet nut or kernel feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying energy supply (`drying_energy`)

Solar, thermal fuel, steam or electricity use is recorded by actual route and carrier.

- Selected flow: drying energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or route-recorded carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`technology_specific`)
- Normalization basis: per kg wet nut or kernel feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg wet feed
  - Basis: per kg wet nut or kernel feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried stabilized nut or kernel (`dried_nut_kernel`)

Dried nuts or kernels are handed to grading with product state and moisture basis declared.

- Selected flow: dried palm nut or kernel
- Flow property / unit: Mass / kg
- Amount rule: measured dry product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`product_specific`)
- Normalization basis: per kg wet nut or kernel feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg wet feed
  - Basis: per kg wet nut or kernel feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Nut or kernel grading and primary mill hand-off (`grading`)

#### Inputs

##### Product flows

###### Dried nut or kernel for grading (`grading_feed`)

The dried internal intermediate enters sorting by product state and declared moisture basis.

- Selected flow: dried palm nut or kernel
- Flow property / unit: Mass / kg
- Amount rule: measured grading feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`product_specific`)
- Normalization basis: per kg grading feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg grading feed
  - Basis: per kg grading feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grading energy supply (`grading_energy`)

Electricity or fuel used by screens, aspiration and handling is recorded by actual carrier.

- Selected flow: grading energy supply
- Flow property / unit: Energy or mass / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg grading feed
  - Basis: per kg grading feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted oil-palm nut or separated kernel (`accepted_reference_product`)

Accepted graded material is the sole reference output: oil-palm nut or separated kernel before oil extraction, never FFB or palm kernel shell.

- Selected flow: Nut `ee70bc1a-99d9-40f5-905c-c0a661f21881`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`product_specific`)
- Normalization basis: per kg grading feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading feed
  - Basis: per kg grading feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded or rework material (`grading_downgrade`)

Off-grade material routed to re-drying, re-sorting or a declared lower-grade destination is tracked separately from accepted output.

- Selected flow: downgraded or rework nut/kernel
- Flow property / unit: Mass / kg
- Amount rule: measured downgraded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading feed
  - Basis: per kg grading feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects and foreign matter (`grading_rejects`)

Rejected material leaving the product route is recorded by final recovery or disposal fate.

- Selected flow: grading rejects and foreign matter
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional physical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading feed
  - Basis: per kg grading feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | plantation and mill | First subdivide independently measured estate blocks, mill nodes, runs and product routes; do not allocate burdens already separable. | `iso-14044-2006` |
| `allocation_multi_output` | crude palm oil, nut/kernel, fibre, shell and other intended outputs | Enumerate every intended output and hand-off. Where subdivision cannot avoid allocation, use a documented physical causal relation; use economic allocation only when no defensible physical relation exists, with prices, period and sensitivity disclosed. | `iso-14044-2006`; `fao-palm-oil-processing` |
| `allocation_period` | perennial crop and shared assets | Attribute establishment, immature-phase and shared-infrastructure burdens once over the declared productive output or service basis; record period-specific decisions and prevent double attribution. | `rspo-ghg-procedure-v4` |
| `allocation_rework` | downgraded and rejected material | Rework retains the producing-node burden and receives only incremental rework burdens; accepted output excludes unrecovered rejects. Recovered residues are classified consistently as intended output, residue or waste by actual fate. |  |
| `allocation_shared_runs` | batch and continuous mill operation | Attribute cleaning, start-up, shutdown and shared utilities to the corresponding run or operating period once; document the driver and reconciliation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cultivation_records | cultivation | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_harvest_records | harvest | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_mill_records | mill_treatment | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_mill_calculation | mill_treatment | calculated or reconciled flows | calculated record | measured inputs, outputs, moisture change and residual | run-level reconciled mass balance | declared card unit | per run | representative annual period including crop cycle | all included mill lines | calculate from linked run records and retain the residual | linked measurements and calculation record |
| cp_separation_records | fibre_nut_separation | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_cracking_records | cracking | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_drying_records | drying | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_grading_records | grading | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | nut/kernel mass | dry mass = as-received mass × (1 − moisture fraction); reverse conversion uses the target moisture fraction | as-received mass; moisture fraction; test basis | dry mass or adjusted as-received mass |  |
| `calc_mass_balance` | each mill node | residual = input mass + auxiliary material mass − intended outputs − residues/waste − measured moisture loss | linked mass records by run | reconciliation residual and percentage | `fao-palm-oil-processing` |
| `calc_period_attribution` | plantation phases and shared infrastructure | attributed burden = period burden × declared allocation share ÷ accepted reference-product mass | phase/run burden; service or output driver; accepted mass | burden per kg reference product | `rspo-ghg-procedure-v4` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference output | Retain species/hybrid, nut/kernel state, whole/broken state, before-oil-extraction status, moisture, grade, origin, period and hand-off evidence. | lot specification and grading record |
| `dq_completeness` | all processes | Cover all included estates and mill lines; quantify missing data and explain every mass-balance residual and cut-off. | coverage register and reconciliation |
| `dq_temporal` | perennial and mill data | Use a representative annual period and document phase scaling, storage carryover and run-period alignment. | dated estate and batch records |
| `dq_calibration` | measured flows | Retain calibration status or supplier invoice evidence for scales, meters and laboratory moisture tests. | calibration and invoice records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Reject a package whose reference is FFB, palm kernel shell, palm oil or kernel oil, or whose oil-palm nut/kernel qualifier, before-extraction state, moisture basis or hand-off is missing. | `unsd-cpc-3-01491` |
| `validate_route` | process map | Require plantation, harvest, mill treatment, fibre-nut separation, drying and grading; require cracking only for the separated-kernel branch and prohibit kernel-oil extraction. | `fao-palm-oil-processing` |
| `validate_mass_balance` | every treatment/conditioning run | Check inputs against intended outputs, intermediates, residues, rejects and moisture change; investigate values outside the card QA ranges. | `fao-palm-oil-processing` |
| `validate_multi_output` | intended outputs | Require enumerated hand-offs and one explicit attribution decision for crude palm oil, accepted nut/kernel, fibre, shell and any other intended output. | `iso-14044-2006` |
| `validate_period_and_assets` | plantation phases and shared infrastructure | Require phase/run links and verify that each shared burden is attributed once. | `rspo-ghg-procedure-v4` |
| `validate_mode_rework` | batch/continuous runs and grading | Require run indexing, cleaning/changeover attribution, rework destinations, and exclusion of rejects from accepted output. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for oil-palm nut or separated kernel before oil extraction |
| downstream_use | `secondary_dataset`; `background_dataset` when geography, plantation phase, mill route and product state match |
| allowed_use | LCA of oil-palm nut/kernel supply and downstream oil extraction using the declared state and gate |
| excluded_use | FFB supply; palm kernel shell supply; palm oil or kernel-oil production; refined oil; routes that omit the declared qualifier or included upstream plantation burdens |
| required_metadata | species/hybrid; origin; estate and mill; land history; palm age/phase; period; mill mode; nut/kernel branch; cracking route; moisture and basis; grade; whole/broken state; allocation method; hand-off |
| required_quality_disclosure | coverage, primary-data share, missing data, substitutions, mass-balance residuals, temporal scaling, allocation sensitivity and provisional Range replacements |
| update_trigger | material route, technology, plantation-phase, land-history, output mix, allocation, moisture/grade specification, source or UUID identity change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01491` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC boundary and oil-palm nut/kernel identity |
| `fao-palm-oil-processing` | handbook | https://www.fao.org/4/y4355e/y4355e04.htm | primary mill sequence, fibre-nut separation, cracking, shell separation and drying |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and transparency |
| `rspo-ghg-procedure-v4` | official_guidance | https://rspo.org/endorsed-greenhouse-gas-ghg-assessment-procedure-v4/ | plantation starting conditions, land/peat context and period disclosure |
