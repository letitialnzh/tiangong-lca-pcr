---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.turkeys
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Turkeys

## 1. Scope and Applicability

This PCR governs live turkeys at the producing hatchery or rearing/breeder farm gate. It covers day-old poults and older birds as two mutually exclusive final-output routes. Declare head count, sampled live mass, age/class, sex where relevant, cohort and transfer state. Exclude turkey meat, slaughter, post-gate freight and independently marketed hatching eggs as the reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.turkeys` |
| classification_refs | CPC 3.0 `02152`, Turkeys |
| covered_products | live day-old turkey poults at producer hatchery gate; older live turkeys at producing farm gate |
| excluded_products | chicken, turkey eggs sold independently, slaughtered birds and turkey meat |
| representative_product | live turkey at a declared producer gate and age class |
| production_route | integrated or purchased hatching eggs → hatchery poult; or purchased/internally transferred poult → rearing → catching |
| market_state | live and unprocessed; age, gate, count and live mass declared |

The managed-biological-production parent has two route deltas: incubation and hatch selection begin with eggs, whereas growth and catching begin with poults. Their process topology, inputs, yield equations and validation differ. A vertically integrated producer can operate both stages, but must record an internal poult transfer once rather than two final sales for the same bird.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live turkey at declared producer hatchery or farm gate |
| How much | 1 kg net live weight |
| How well | saleable live bird; species, age/class, count and sampled mass declared |
| How long or cycle | hatch batch or rearing cohort, with linked breeder and shared-asset periods |
| reference_flow_link | broad reference product below; UUID unresolved |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live turkeys at hatchery or farm gate, age class declared |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | turkey species; day-old or older route; hatchery/farm gate; head count; sampled live mass; age/class; cohort; origin; sex if relevant; mortality; transfer state |

The two verified route UUIDs do not identify this combined broad reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live_mass` | final birds | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Multiply saleable head count by sampled live mass within age/class strata and reconcile weigh slips. |
| `m_eggs` | hatching eggs | count and mass | eggs, kg | Keep received, hatched, rejected and unhatched counts distinct; convert with sampled egg mass. |
| `m_feed` | feed | as-fed mass and dry matter | kg | Convert using observed moisture and retain feed source. |
| `m_emissions` | air releases | pollutant mass | kg | Keep substance, receiving medium, manure pathway and factor tier distinct. |

## 5. System Boundary

The hatchery route starts with hatching eggs bearing their upstream burden and includes incubation, hatch-pull, selection and hatchery-gate handover. An integrated breeder flock supplies eggs as an upstream node only when not also taking purchased-egg burden. The older-bird route starts with poults bearing their prior hatchery burden and includes feed, water, housing, litter/manure, health, growth and separate catching to farm gate. Catching is an independent capture node because the standing flock becomes counted, weighed saleable live birds at a handover; it is not growth or slaughter. Rejects, mortality and unmarketed litter are losses or waste. Record independently marketed manure, hatching eggs and spent breeders as intended co-products only on actual transfer. Shared incubators, buildings, utilities and equipment are attributed once over their consuming nodes and periods.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted hatching eggs at hatchery receipt or live poults at rearing receipt; integrated opening breeder flock if used |
| starting_condition_role | upstream biological stock or purchased intermediate with prior burden, not another final turkey sale |
| product_classification_scope | CPC 3.0 `02152`, live turkeys |
| recursive_input_rule | same-category incoming live poults retain prior stage burden; internal transfers are not independent final outputs |
| upstream_dataset_requirement | supplier evidence for eggs/poults, feed, energy, water, bedding and treatment services or disclosed gaps |
| disclosure | route, gate, age/class, batch/cohort, stock changes, mortality, rejects, manure fate, shared asset allocation and unresolved identity |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_routes` | all birds | Select hatchery day-old or farm older-bird final gate; predecessor stages transfer once. | `unsd-cpc-2025`; `fao-leap-poultry-2016` |
| `b_hatchery` | poults | Include accepted hatching eggs, incubation, hatch-pull, losses and hatchery dispatch. | `fao-leap-poultry-2016` |
| `b_rearing` | older birds | Include received poults, feed, water, housing, manure, mortality and live catching. | `fao-leap-poultry-2016`; `ipcc-livestock-2019` |
| `b_exclusion` | producer gate | Exclude slaughter, meat processing and post-gate freight; include inbound service only when actually bought within boundary. | `fao-leap-poultry-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Integrated breeder egg supply | conditional | producer operates breeder stage | managed breeding and egg production | accepted eggs per breeder period |
| `hatchery` | Incubation and hatch-pull | conditional | day-old final or integrated predecessor | managed embryo development and capture | saleable poults per hatch batch |
| `rearing` | Managed turkey growth | conditional | older-bird route | biological growth and manure management | live standing flock per cohort |
| `catching` | Live catching and farm handover | conditional | older-bird route | independent capture and final dispatch | saleable live mass per catch batch |

### Process: Integrated breeder egg supply (`breeder`)

#### Inputs

##### Product flows

###### Breeder feed and supplies (`breeder_feed`)

Record feed and husbandry materials by breeder period; split actual material types during dataset construction.

- Selected flow: Breeder feed and husbandry materials
- Flow property / unit: Mass / kg
- Amount rule: measured issues by breeder period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted hatching eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-input completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg accepted hatching eggs
  - Basis: broad initial screen, replace with breeder records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder supplied water (`breeder_water`)

Record breeder drinking and cleaning water separately by use; the function group is chosen from foreground records.

- Selected flow: Supplied water for breeder flock
- Flow property / unit: Volume / m3
- Amount rule: metered or recorded water by use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted hatching eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg accepted eggs
  - Basis: broad initial screen, replace with use records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder housing energy (`breeder_energy`)

Record heating, ventilation and lighting by carrier and breeder period.

- Selected flow: Energy supplied to breeder housing
- Flow property / unit: Energy / kWh, MJ or native fuel unit
- Amount rule: metered or causally allocated carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted hatching eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh-equivalent/kg accepted eggs
  - Basis: broad initial screen, not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted hatching eggs (`breeder_eggs`)

Eggs selected for incubation pass once to hatchery; independently sold eggs are a separate product.

- Selected flow: Fresh turkey hatching eggs
- Flow property / unit: Mass / kg, with count
- Amount rule: accepted egg count times sampled mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per breeder period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Accepted-egg balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg gross eggs
  - Basis: accepted mass fraction of collected eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected breeder eggs (`breeder_rejects`)

Record broken or unsuitable eggs by reason and actual fate, not as poults.

- Selected flow: Rejected turkey eggs
- Flow property / unit: Mass / kg
- Amount rule: weighed rejects or count times sampled mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per breeder period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Reject-egg balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg gross eggs
  - Basis: rejected mass fraction of collected eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Breeder manure methane to air (`breeder_ch4`)

Only biogenic CH4 from identified breeder-manure storage pathways is counted here.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific volatile solids and factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted hatching eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional breeder CH4 screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg CH4/kg accepted eggs
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure nitrous oxide to air (`breeder_n2o`)

Keep breeder manure nitrogen pathways distinct from rearing-manure pathways.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific N and factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted hatching eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional breeder N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/kg accepted eggs
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure ammonia to air (`breeder_nh3`)

Count NH3 only for the identified breeder manure pathway and compatible factor basis.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific N volatilization calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted hatching eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional breeder NH3 screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NH3/kg accepted eggs
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Incubation and hatch-pull (`hatchery`)

#### Inputs

##### Product flows

###### Received hatching eggs (`hatching_eggs`)

Include supplier or integrated breeder burden exactly once.

- Selected flow: Fresh turkey hatching eggs received
- Flow property / unit: Mass / kg, with count
- Amount rule: accepted receipt count and sampled mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable poult live mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hatchery`
- Range: Provisional received-egg screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg saleable poult
  - Basis: broad initial screen, replace with hatch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incubation energy (`incubation_energy`)

Record actual electricity and fuel carriers, including shared-meter attribution.

- Selected flow: Incubation energy carriers
- Flow property / unit: Energy / kWh, MJ or native fuel unit
- Amount rule: metered or allocated carrier consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable poult
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hatchery`
- Range: Provisional incubation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh-equivalent/kg saleable poult
  - Basis: broad initial screen, not default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery cleaning water (`hatchery_water`)

Supplied process water for cleaning, only when used by the hatchery.

- Selected flow: Supplied hatchery process water
- Flow property / unit: Volume / m3
- Amount rule: metered supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable poult
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hatchery`
- Range: Provisional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg saleable poult
  - Basis: broad initial screen, replace with meter records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable day-old poults (`day_old_poults`)

Count and weigh live selected poults at hatchery gate; integrated transfer to rearing is not a second final sale.

- Selected flow: Day-old turkey poults at hatchery gate `f836d3cf-2f72-4d00-900d-d6e748a8c6f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: saleable count times sampled live mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatch batch, then 1 kg final route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hatchery`
- Range: Hatch count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: head/head accepted eggs
  - Basis: at most one saleable poult per accepted egg
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Hatch residues (`hatch_residues`)

Separate unhatched eggs, shells and non-saleable poults by physical identity and actual treatment destination.

- Selected flow: Hatch residues and non-saleable poults
- Flow property / unit: Mass / kg
- Amount rule: weighed or count-derived residue mass by fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatch batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hatchery`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg eggs received plus hatch biomass
  - Basis: provisional residue fraction; check detailed balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Managed turkey growth (`rearing`)

#### Inputs

##### Product flows

###### Received poults (`received_poults`)

Record purchased or internally transferred poults with preceding hatchery burden.

- Selected flow: Live turkey poults for rearing
- Flow property / unit: Mass / kg, with count
- Amount rule: receipt count times sampled live mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing`
- Range: Provisional poult-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg older saleable live bird
  - Basis: broad initial screen, replace with cohort records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing feed (`rearing_feed`)

Retain ration, source, as-fed and dry-matter amounts by growth phase.

- Selected flow: Turkey feed and forage
- Flow property / unit: Mass / kg dry matter
- Amount rule: issued feed less measured returns, moisture-adjusted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing`
- Range: Provisional feed-conversion screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter/kg live bird
  - Basis: broad initial screen, replace with ration records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied rearing water (`rearing_water`)

Retain drinking and cleaning use separately in records; select concrete functional group from the actual use.

- Selected flow: Supplied water for turkey rearing
- Flow property / unit: Volume / m3
- Amount rule: metered or recorded water by use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing`
- Range: Provisional water-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg live bird
  - Basis: broad initial screen, replace with use records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing energy (`rearing_energy`)

Record electricity and fuels for heating, ventilation and lighting by carrier and cohort.

- Selected flow: Turkey housing energy
- Flow property / unit: Energy / kWh, MJ or native fuel unit
- Amount rule: metered or allocated carrier use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing`
- Range: Provisional housing-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh-equivalent/kg live bird
  - Basis: broad initial screen, not default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing live flock (`standing_flock`)

Pass the counted standing flock internally to catching, without claiming another final sale.

- Selected flow: Standing live turkeys before catching
- Flow property / unit: Mass / kg, with count
- Amount rule: standing count times sampled live mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per rearing cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing`
- Range: Survival count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: head/head received poults
  - Basis: standing head fraction, accounting for documented transfers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Mortality and removed litter (`rearing_residues`)

Keep carcasses and litter/manure by fate; independently sold manure needs a separate co-product decision.

- Selected flow: Turkey mortality and removed litter/manure
- Flow property / unit: Mass / kg
- Amount rule: weighed material and count-derived carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per rearing cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg saleable live bird
  - Basis: broad initial screen, distinguish sold manure
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Manure methane to air (`manure_ch4`)

Model biogenic CH4 only from identified rearing-manure storage pathways.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific volatile solids and factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional CH4 screen, not a factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg CH4/kg live bird
  - Basis: broad initial screen, replace with pathway calculation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o`)

Model N2O only from identified manure nitrogen pathways and factor tier.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific N and emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional N2O screen, not a factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/kg live bird
  - Basis: broad initial screen, replace with calculated pathway value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3`)

Record volatilized NH3 only where a compatible manure pathway calculation is made.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific N and volatilization calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg older saleable live bird
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional NH3 screen, not a factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NH3/kg live bird
  - Basis: broad initial screen, replace with calculated pathway value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live catching and farm handover (`catching`)

#### Inputs

##### Product flows

###### Flock received for catching (`catching_flock`)

Receive the internally transferred standing flock once with its rearing burden.

- Selected flow: Standing live turkeys entering catching
- Flow property / unit: Mass / kg, with count
- Amount rule: standing count and sampled live mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per catching batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_catching`
- Range: Catching transfer count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: head/head standing flock
  - Basis: caught head fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable older live turkeys (`farm_live_turkeys`)

Count and weigh live unprocessed birds at farm gate, before slaughter or outbound transport.

- Selected flow: Live unprocessed turkeys at farm gate `b8c33c48-06d3-402e-9ef7-391ddec1761b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: saleable head count times sampled live mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per catching batch, then 1 kg final route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_catching`
- Range: Saleable catching count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: head/head standing flock
  - Basis: saleable head fraction of standing flock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Catching losses (`catching_losses`)

Record non-saleable or dead birds after catching with actual destination.

- Selected flow: Non-saleable turkey catching losses
- Flow property / unit: Mass / kg
- Amount rule: observed loss count times sampled mass or direct weighing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per catching batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_catching`
- Range: Catching loss count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: head/head standing flock
  - Basis: non-saleable head fraction of standing flock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | breeder, hatchery, rearing | Enumerate marketed eggs, poults, older birds, spent breeders and exported manure with handover; reject eggs, shells, mortality and unsold litter are loss/waste. | `fao-leap-poultry-2016` |
| `a_allocation` | independent co-products | Prefer documented physical causality; otherwise declare one mass or economic allocation basis, matching period-specific output masses/prices and disclosing sensitivity. | `fao-leap-poultry-2016` |
| `a_period` | breeder years and cohorts | Link inputs, assets, stock changes, deaths and outputs to breeder year, hatch batch and grow-out cohort; allocate replacements and spent breeders once. | `fao-leap-poultry-2016` |
| `a_shared` | shared buildings, incubators and meters | Attribute by measured use or documented capacity-time across all consuming nodes/periods; sum shares to one original burden. | `fao-leap-poultry-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeder` | `breeder` | feed, accepted/rejected eggs, stock | breeder ledger | stock; feed; egg counts/mass; rejects; spent birds; period | farm logs and scales | head, kg | daily/period | full breeder period | integrated breeder | sum by period, attribute to accepted eggs and marketed co-products | signed stock/egg balance |
| `cp_breeder_manure` | `breeder` | CH4, N2O, NH3 | breeder manure pathway | bird stock; volatile solids; excreted N; pathway shares; factor tier | manure records and pathway calculation | kg, fraction | breeder period | full breeder and manure period | integrated breeder | calculate each pollutant and pathway once | inputs, factor and fate log |
| `cp_hatchery` | `hatchery` | eggs, utilities, poults, residues | hatch batch | receipts; origin; set/hatch dates; meter readings; water; outcome counts; sample masses | logs, meters and scales | head, kg, kWh, m3 | each batch | incubation to hatch-pull | producer hatchery | sum per batch, convert counts by samples | signed hatch balance |
| `cp_rearing` | `rearing` | poults, feed, water, energy, standing stock, residues | cohort ledger | origin/count; ration/moisture; meters; mortality; stock; litter fate | receipts, meters, logs and scales | head, kg, m3, kWh | daily/cohort | full growth cohort | producing farm | sum by material/period and assign shared use once | invoices, meters, stock reconciliation |
| `cp_manure` | `rearing` | CH4, N2O and NH3 | manure pathway | volatile solids; excreted N; storage/deposition; pathway shares; factor tier | records and IPCC-compatible calculation | kg, fraction | cohort/period | full manure period | producing farm | calculate distinct pollutants and pathways | factor and input log |
| `cp_catching` | `catching` | standing, saleable, losses | dispatch batch | standing/saleable/loss counts; sampled mass; gate; time | dispatch count and weighing | head, kg | each dispatch | catching to gate | producing farm | count × sampled mass, reconcile one final output | weigh slips and dispatch signature |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_mass` | live birds | heads × representative sampled mass by age/class | count, sample weights, route | kg live output | `mass-balance-identity` |
| `c_hatch` | hatchery | accepted eggs = saleable + non-saleable + unhatched + documented other outcomes in counts | hatch ledger | reconciled hatch count | `mass-balance-identity` |
| `c_cohort` | rearing | opening + receipts − deaths − dispatch = closing heads, with internal transfers separately identified | cohort ledger | reconciled live stock | `mass-balance-identity` |
| `c_manure` | emissions | model CH4, N2O and NH3 by non-overlapping manure volatile-solids and nitrogen pathways and factor tier | VS, N, pathway shares, factors | kg CH4, N2O and NH3 | `ipcc-livestock-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_route` | reference and final output | identify exact day-old/hatchery or older/farm route and only one final gate | dispatch and receipt |
| `q_count_mass` | birds and eggs | retain count, age/class, sample size and sampled mass | scale and count log |
| `q_predecessor` | eggs/poults | trace purchased or integrated prior burden without duplicate transfer | supplier dataset or internal ledger |
| `q_period` | breeders and shared assets | reconcile opening/closing stock, deaths, service period and share | period ledger |
| `q_fate` | waste and co-products | record independently marketed outputs and each residue fate | transfer/treatment record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_route` | all final birds | Reject unidentified age/gate mixtures; route UUID must match exact output, broad reference remains unresolved. | `unsd-cpc-2025` |
| `v_hatch` | hatchery | Reconcile egg input and all hatch outcomes; at most one saleable poult per accepted egg. | `mass-balance-identity` |
| `v_cohort` | rearing/catching | Reconcile poult receipts, mortality, internal standing transfer, final dispatch and live mass. | `mass-balance-identity` |
| `v_attribution` | co-products and shared periods | Require all intended output gates, allocation basis and breeder/cohort period; no double-burden of assets or internal birds. | `fao-leap-poultry-2016` |
| `v_manure` | air emissions | Check substance, air medium, non-overlapping manure pathway, factor tier and time period. | `ipcc-livestock-2019` |
| `v_flow_identity` | water and energy | unresolved Product inputs resolve to verified concrete UUID only from actual water function and energy carrier. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | producer-gate live-turkey foreground dataset |
| downstream_use | secondary_dataset; background_dataset for process and lifecyclemodel |
| allowed_use | declared route, age, gate and live state with complete preceding burden |
| excluded_use | turkey meat, slaughter, unidentified mixed routes, separately sold eggs or post-gate freight |
| required_metadata | route, producer, gate, age/class, head count, sampled weight, cohort, breeder period, mortality, prior transfer, shared assets |
| required_quality_disclosure | coverage, attribution, samples, prior-stage gaps, manure factors and unresolved identities |
| update_trigger | route, supplier, hatch yield, housing, manure or output-mix change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | [CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | live-turkey category |
| `fao-leap-poultry-2016` | official_guidance | [FAO LEAP poultry supply-chain guidelines](https://openknowledge.fao.org/handle/20.500.14283/i6421en) | stage boundaries, data and attribution |
| `ipcc-livestock-2019` | method_factor | [IPCC 2019 Refinement Volume 4 Chapter 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | manure emissions |
| `mass-balance-identity` | method_factor | Count and mass conservation at declared process boundaries | stock, egg and catching balances |
