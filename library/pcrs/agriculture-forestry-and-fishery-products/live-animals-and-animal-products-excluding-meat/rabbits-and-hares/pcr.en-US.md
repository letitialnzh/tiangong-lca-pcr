---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.rabbits-and-hares
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rabbits and hares

## 1. Scope and Applicability

This PCR covers living domestic rabbits (*Oryctolagus cuniculus*) produced under managed husbandry and living hares (*Lepus* spp.) delivered after demonstrably lawful live capture. It excludes dead animals, meat, fur, hides, slaughter and downstream use. Wild-hare capture is not presumed lawful or representative: declare jurisdiction, permit, welfare controls, capture lot and real handover; absent such evidence do not claim that route. A wild hare is not modelled as a farm product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.rabbits-and-hares` |
| classification_refs | CPC 3.0 `02191`, Rabbits and hares |
| covered_products | Living domestic rabbits and living hares at legitimate actual handover |
| excluded_products | Dead animals, meat, fur, hides, slaughter, trapping service and downstream use |
| representative_product | Living rabbit or hare by measured live mass, with species and gate disclosed |
| production_route | Managed domestic-rabbit breeding and rearing followed by farm live selection; cage versus floor/litter housing are managed-biological parent variants with different bedding, cleaning, energy and manure collection. Separately, lawful live-hare capture is capture-only, with short handling and capture handover, never a managed-production child. Farm and capture routes are mutually exclusive per lot; housing variants may coexist across farm periods. |
| market_state | Alive and unprocessed, with species, class, count, condition and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living rabbit or hare at legitimate producing-farm or capture handover |
| How much | 1 kg measured live mass, with head count and class-specific mass |
| How well | Alive, unprocessed and species-resolved; disclose class and condition |
| How long or cycle | Declared breeding/rearing cohort or lawful capture campaign and actual service periods |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living rabbit or hare at farm or lawful capture handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species; domestic or wild; age/class; head count; condition; measured live mass; route; actual gate; jurisdiction and permit for capture; period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The confirmed platform Product identity is farm-gate production mix only and cannot describe the broad farm-or-capture reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Final living output and incoming stock | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh lots or document class-specific sample weights and reconcile count; never assume one animal has a fixed mass. |
| `animal_ledger` | All animal lots | Count | head | Reconcile opening, births or capture, purchase, transfer, release, death and handover by species, class and period. |
| `period_basis` | Breeders, replacement and assets | Time | days or cycle | Link gestation, lactation, weaning, rearing, replacement and shared service to benefited periods; use actual capture service days. |
| `manure_basis` | Collected manure | Mass | kg | Report exported product and waste on consistent as-received or moisture-corrected basis; deposits are not exported product. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Domestic opening breeders or purchased young stock with origin/prior burden, or documented lawful pre-capture campaign condition |
| starting_condition_role | Managed stock or lawful capture context; purchased rabbit is not zero burden |
| product_classification_scope | CPC 3.0 `02191` living rabbits and hares |
| recursive_input_rule | Link purchased same-category rabbits once to a preceding-gate dataset; internal weanling transfer is not a second final product. Do not assign wild pre-capture animals fictional farm production. |
| upstream_dataset_requirement | Match purchased animals, feed, bedding, water, energy and services to real supplier, property, gate and geography. |
| disclosure | Species and domestic/wild state, housing mode or capture permit/site, gate, cohort/campaign, shared assets, product and mortality/manure destinations. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live` | Both routes | End with a living animal at the real handover; exclude slaughter, meat, hides, fur and downstream use. | `un-cpc-2025` |
| `boundary_farm` | Managed domestic rabbits | Include breeder/rearing stock, feed, water, housing, health and manure only where operated; purchases retain upstream burden. | `fao-rabbit-production`; `fao-rabbit-housing` |
| `boundary_housing` | Managed housing variants | Rabbit breeding/rearing is the biological parent. Cages versus floor/litter change bedding, cleaning, housing energy and manure handling; record real shares, not universal yields. | `fao-rabbit-housing` |
| `boundary_capture` | Living wild hares | Include only documented lawful live trapping, welfare handling and actual capture handover; no fictitious breeder, feed or farm gate. Missing legal evidence makes the route ineligible. | `vic-hare-control` |
| `boundary_shared` | Shared assets | Attribute sheds, feeders, water systems, traps and vehicles once over consuming nodes and service periods; avoid duplicate transfers. | `fao-rabbit-housing`; `vic-hare-control` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Maintain domestic breeding stock and produce live kits | conditional | Operated breeding farm | Biological production, gestation, lactation, survival and replacement | per kg live weanlings leaving breeder |
| `rearing` | Rear domestic rabbits to producer class | conditional | Operated grow-out; otherwise purchased stock has upstream burden | Biological growth with housing-specific inputs and manure | per kg live rabbits leaving rearing |
| `farm_handover` | Select, weigh and hand over live farm rabbits | conditional | Domestic farm route | Independent collection/health screen and real farm gate | per kg accepted farm-gate live rabbits |
| `hare_capture` | Lawfully capture and hand over living hares | conditional | Verified permit and observed live-capture route | Independent capture-only node and real capture gate | per kg accepted hares at capture handover |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

Farm and capture routes are mutually exclusive per animal. Cage and floor/litter modes can coexist by cohort/period. Capture is not a managed-production variant. Live collection is independent of biological growth because acceptance, weighing and handover follow production; losses or releases are not intended live output. Index breeding, weaning, rearing, replacement, asset service and capture events by period.

### Process: Maintain domestic breeding stock and produce live kits (`breeder`)

#### Inputs

##### Product flows

###### Incoming breeding rabbits (`breeder_stock`)

Purchased breeding animals enter with upstream burden; opening owned stock is declared separately.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: measured received live mass Original collection denominator kind: process_output.

- Selected flow: Living breeding rabbits (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder feed and forage (`breeder_feed`)

Record supplied feed, forage and stock changes; grazed material is not purchased feed.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: delivered feed less stock change and measured losses Original collection denominator kind: process_output.

- Selected flow: Rabbit feed and forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied breeder water (`breeder_water`)

Separate drinking from cleaning by actual use; a water group is deferred.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: metered or recorded supplied water Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder energy supply (`breeder_energy`)

Record heating, ventilation, lighting and pumping by real carrier and service.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: metered or invoiced energy by carrier Original collection denominator kind: process_output.

- Selected flow: Energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder bedding and care materials (`breeder_materials`)

Record route-specific litter and veterinary materials by separate actual identity.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: measured supplied material by identity Original collection denominator kind: process_output.

- Selected flow: Bedding and veterinary materials (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living weanlings transferred or sold (`weanlings`)

Reconcile live count and mass; an internal transfer is not a second final sale.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: measured live weanling mass Original collection denominator kind: process_output.

- Selected flow: Living weanling rabbits (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Live output balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Living culled breeding rabbits (`breeder_culls`)

A distinct product only if actually sold alive; otherwise classify actual disposal state.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: measured sold live mass Original collection denominator kind: process_output.

- Selected flow: Living culled breeder rabbits (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported usable breeder manure (`breeder_manure_product`)

Product only on documented beneficial-use transfer, not grazing deposits or disposal.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: weighed exported mass on disclosed moisture basis Original collection denominator kind: process_output.

- Selected flow: Usable rabbit manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Breeder mortality and disposal (`breeder_waste`)

Record dead animals and disposal bedding/manure by actual identity and destination.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: measured waste mass by identity and destination Original collection denominator kind: process_output.

- Selected flow: Breeder mortality and disposal material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Methane from breeder manure to air (`breeder_manure_ch4`)

Calculate manure-path methane from observed storage and treatment, not a universal animal factor.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: site-specific manure pathway calculation Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from breeder manure to air (`breeder_manure_n2o`)

Calculate direct manure-management N2O only for the observed storage/treatment path and nitrogen activity; do not apply farm factors to captured wild hares.

Denominator and scope requirements：per kg live weanlings leaving breeder

Raw quantity and calculation requirements: manure-management N2O from observed nitrogen and pathway Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional N2O investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live weanlings
  - Basis: per kg live weanlings leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Rear domestic rabbits to producer class (`rearing`)

#### Inputs

##### Product flows

###### Incoming live young rabbits (`rearing_stock`)

Measure the transferred or purchased young stock once with inherited burden.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: received live mass Original collection denominator kind: process_output.

- Selected flow: Living young rabbits (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing feed (`rearing_feed`)

Measure delivered ration and losses by cohort rather than assuming feed conversion.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: delivered mass less stock change and losses Original collection denominator kind: process_output.

- Selected flow: Rabbit rearing feed (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied rearing water (`rearing_water`)

Disaggregate drinking and cleaning by real use; defer group on this combined card.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: metered supplied water Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing energy supply (`rearing_energy`)

Record actual ventilation, temperature and lighting carrier consumption.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: metered or invoiced energy Original collection denominator kind: process_output.

- Selected flow: Energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing bedding and care materials (`rearing_materials`)

Record litter and care materials separately for the actual housing mode.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: measured supplied material Original collection denominator kind: process_output.

- Selected flow: Bedding and veterinary materials (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living reared rabbits (`reared_rabbits`)

Transfer accepted living animals to final handover and reconcile count and mass.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: measured live transferred mass Original collection denominator kind: process_output.

- Selected flow: Living reared rabbits (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Live output balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Exported usable rearing manure (`rearing_manure_product`)

Product only with a distinct beneficial-use receiver and measured mass.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: weighed exported mass on disclosed moisture basis Original collection denominator kind: process_output.

- Selected flow: Usable rabbit manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rearing mortality and disposal (`rearing_waste`)

Dead animals and disposed litter/manure follow their actual waste destination.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: measured waste mass by identity and destination Original collection denominator kind: process_output.

- Selected flow: Rearing mortality and disposal material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Methane from rearing manure to air (`rearing_manure_ch4`)

Calculate for the observed rearing manure pathway and storage period.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: site-specific manure pathway calculation Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from rearing manure to air (`rearing_manure_n2o`)

Calculate direct manure-management N2O only for the observed storage/treatment path and nitrogen activity; do not apply farm factors to captured wild hares.

Denominator and scope requirements：per kg live rabbits leaving rearing

Raw quantity and calculation requirements: manure-management N2O from observed nitrogen and pathway Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional N2O investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live rabbits
  - Basis: per kg live rabbits leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Select, weigh and hand over live farm rabbits (`farm_handover`)

#### Inputs

##### Product flows

###### Living farm rabbits entering selection (`handover_stock`)

The producing-stage animal and prior burden enter once.

Denominator and scope requirements：per kg accepted farm-gate live rabbits

Raw quantity and calculation requirements: measured received live mass Original collection denominator kind: process_output.

- Selected flow: Living farm rabbits (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg accepted farm-gate live rabbits
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live rabbits at farm gate (`live_handover`)

This narrow live unprocessed farm-gate output matches the confirmed platform Product/Mass identity.

Denominator and scope requirements：per kg accepted farm-gate live rabbits

Raw quantity and calculation requirements: weighed accepted live mass Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Rabbits and hares, production mix at farm gate, live animal unprocessed `e501d3c2-f4f4-4fa0-9d52-ce0947f69797`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Live output balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg accepted farm-gate live rabbits
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Mortality at farm handover (`handover_waste`)

Only observed non-live losses are waste; living rejects retained on farm remain in the ledger.

Denominator and scope requirements：per kg accepted farm-gate live rabbits

Raw quantity and calculation requirements: measured disposal mass Original collection denominator kind: process_output.

- Selected flow: Farm handover mortality (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg accepted farm-gate live rabbits
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lawfully capture and hand over living hares (`hare_capture`)

#### Inputs

##### Product flows

###### Capture and short-holding consumables (`capture_materials`)

Record actual consumed trap and welfare materials; reusable equipment is allocated service, not consumed anew each campaign.

Denominator and scope requirements：per kg accepted hares at capture handover

Raw quantity and calculation requirements: measured consumed mass by material Original collection denominator kind: process_output.

- Selected flow: Capture and holding consumables (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg accepted hares at capture handover
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Capture and handling energy (`capture_energy`)

Record trap-check and short-holding fuel/electricity by carrier and actual service.

Denominator and scope requirements：per kg accepted hares at capture handover

Raw quantity and calculation requirements: measured campaign fuel and electricity Original collection denominator kind: process_output.

- Selected flow: Energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/kg
  - Basis: per kg accepted hares at capture handover
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live hares at lawful capture handover (`hare_capture_output`)

Weigh living Lepus at the real permitted capture handover; do not attach a farm-gate UUID.

Denominator and scope requirements：per kg accepted hares at capture handover

Raw quantity and calculation requirements: measured accepted live mass Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Living hares at lawful capture handover (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Live output balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg accepted hares at capture handover
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Capture mortality and disposal (`capture_waste`)

Record dead hares and disposal materials; released living animals are separate ledger events, not product or waste.

Denominator and scope requirements：per kg accepted hares at capture handover

Raw quantity and calculation requirements: measured waste mass by category Original collection denominator kind: process_output.

- Selected flow: Capture mortality and disposal material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg accepted hares at capture handover
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Living rabbit or hare at farm or lawful capture handover for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `live_handover`, `hare_capture_output` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `live_handover`, `hare_capture_output`

Required product-instance qualifiers: Species; domestic or wild; age/class; head count; condition; measured live mass; route; actual gate; jurisdiction and permit for capture; period

- Selected flow: Living rabbit or hare at farm or lawful capture handover for actual producer-handover linkage
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted same-lot quantity reconciled to the linked source rows; normalize once to the declared reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living rabbit or hare at farm or lawful capture handover (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `live_handover`, `hare_capture_output`

Required product-instance qualifiers: Species; domestic or wild; age/class; head count; condition; measured live mass; route; actual gate; jurisdiction and permit for capture; period

- Selected flow: Living rabbit or hare at farm or lawful capture handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | All nodes | Assign measured inputs, emissions and losses directly to breeder, rearing, farm handover or lawful capture first. Wild hares inherit no farm breeding burden. | `fao-rabbit-production`; `vic-hare-control` |
| `allocation_outputs` | Weanlings, live culls, final animals and usable exported manure | Enumerate distinct intended outputs only with actual handover, mass and receiver. Internal transfers are not second final outputs; deaths, disposal and released hares are not saleable co-products. For inseparable farm burdens use animal-days or measured feed/service causality; if unsupported use same-period economic values, documented prices and sensitivity. | `fao-rabbit-production`; `fao-rabbit-housing` |
| `allocation_periods` | Breeding, rearing and capture | Assign breeder maintenance, gestation, lactation, weaning, replacement and housing service to benefited cohorts over documented periods. Transfer each kit's prior burden once to rearing. Capture equipment/handling belongs only to observed campaign. | `fao-rabbit-production`; `vic-hare-control` |
| `allocation_shared` | Sheds, feeders, water systems, traps and vehicles | Name every consuming node/period; allocate measured burden once by meter, occupied animal-days, service-hours or trips. Document a share sum of one and avoid charging again at internal transfer. | `fao-rabbit-housing`; `vic-hare-control` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | `breeder`, `rearing`, `farm_handover` | Living incoming, transferred, culled and final animals | herd/weigh ledger | species, class, count, mass, origin, destination, date | lot count and calibrated scale or documented class sample; Raw aggregation requirements: reconcile opening + births + purchases - deaths - sales - transfers = closing; normalize to accepted live mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event | entire cohort | actual farm sites | per reference flow | weigh slips, herd ledger, scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | `breeder`, `rearing` | feed and forage | purchase/ration ledger | material, mass, stock change, loss, cohort | delivery ticket and ration log; Raw aggregation requirements: delivered less stock change and recorded loss by cohort. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | batch and cycle | operated periods | houses/pasture | per reference flow | invoices and feed logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | `breeder`, `rearing` | water and energy | meter/invoice | water source/use, carrier, readings, shared consumer | meter read and use split; Raw aggregation requirements: convert units then attribute once by observed use. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; MJ | meter interval | operated periods | all supply connections | per reference flow | meter images, invoices; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_materials` | `breeder`, `rearing` | bedding and care | material issue | identity, dose, mass, animal group, date, housing route | material issue and veterinary log; Raw aggregation requirements: sum actual consumption by material/cohort. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each use | operated periods | houses | per reference flow | stock and care logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `breeder`, `rearing` | manure product/emission | pathway ledger | collected mass, moisture, nitrogen, storage, treatment, export, period | weigh, sample, transfer and storage record; Raw aggregation requirements: distinguish beneficial product, disposal and deposit; calculate pathway emission. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; days | removal/cycle | operated periods | manure systems | per reference flow | weigh slips, nitrogen analysis, receiver and method inputs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_waste` | `breeder`, `rearing`, `farm_handover` | mortality/disposal | loss ledger | species, count, mass, material, destination, date | count/weigh or documented estimate; Raw aggregation requirements: sum by waste identity/destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | event | whole cohort | operated nodes | per reference flow | disposal receipts, mortality log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_capture` | `hare_capture` | permit, animals, materials, energy and losses | permit/campaign ledger | jurisdiction, permit, trap, checks, species, captured/released/dead/handed-over counts and masses, material, energy, destination | legal-document check and observed event/meter log; Raw aggregation requirements: captured = released + dead + handover + held; attribute shared equipment by service. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg; MJ | event | full lawful campaign | permitted site/handover | per reference flow | permit, welfare log, scale, trip/fuel log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | Both final outputs | Measured accepted live kg / same accepted live kg = 1 kg reference; disclose heads per kg by class. | accepted kg, count, species, class | 1 kg living animal and heads/kg | `un-cpc-2025` |
| `calc_ledger` | Animal stages | Reconcile stock and events without counting internal transfers twice. | opening, births/capture, purchases, release, death, transfer, sale, closing | balanced count and mass | `fao-rabbit-production`; `vic-hare-control` |
| `calc_manure_ch4` | Farm manure | Apply documented applicable livestock/manure method to observed manure and storage/treatment; no universal rabbit factor. | measured manure, route activity and method parameters | kg biogenic CH4 by stage | `ipcc-livestock-2019` |
| `calc_manure_n2o` | Farm manure | Apply pathway-specific direct N2O method to measured manure nitrogen and observed storage/treatment; do not transfer this farm method to wild hare capture. | manure nitrogen, management share, method parameters | kg direct N2O by stage | `ipcc-livestock-2019` |
| `calc_shared` | Shared assets | Allocate one observed burden across recorded consumers/periods; fractions sum to one. | service, animal-days/hours/trips, period | burden by node/cohort | `fao-rabbit-housing`; `vic-hare-control` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Final live output | Distinguish Oryctolagus and Lepus, class, alive state, mass, count and real gate; no meat/slaughter identity. | species ledger and calibrated weight |
| `dq_route` | Farm/capture | Record housing shares; wild capture requires jurisdictional permission and welfare/transport evidence. | husbandry log or permit/campaign log |
| `dq_period` | Multi-period farm/assets | Date breeding, rearing, replacement and asset service; avoid duplicated transfer/asset burdens. | cohort/asset ledger |
| `dq_inventory` | All flows | Reconcile animal, feed, water, material, manure and mortality balances; investigate out-of-screen ranges rather than treating them as defaults. | meters, inventories and transfers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_species_gate` | Reference/final output | Require species-specific live mass/count at actual farm or lawful capture gate; reject farm-gate UUID on capture and slaughter/meat records. | `un-cpc-2025`; `vic-hare-control` |
| `validate_capture` | Wild hare route | Require observed permit, jurisdiction, capture count, welfare/handling and live handover; missing legal evidence excludes capture route, not replaced by farm production. | `vic-hare-control` |
| `validate_route` | Managed rabbits | Check cage/floor housing, bedding, utilities and manure by cohort; variants may coexist but capture is not a managed parent variant. | `fao-rabbit-housing` |
| `validate_balance` | Outputs/loss | Reconcile weanlings, live breeder culls, final live animals, deaths, released hares, manure product and disposal by distinct gate. | `fao-rabbit-production`; `vic-hare-control` |
| `validate_attribution` | Shared/period burdens | Check output set, handover, allocation method, phase linkage and one-time assignment of sheds, water systems, traps and vehicles. | `fao-rabbit-production`; `fao-rabbit-housing` |
| `validate_ranges` | Inventory cards | Provisional zero-to-upper ranges are QA investigation screens, never assumed amounts or emission factors; replace with measured/reviewed values. | `fao-rabbit-production` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground living-animal package for declared farm rabbit or lawful hare-capture route |
| downstream_use | Secondary/background dataset for process or lifecyclemodel after identity and quality review |
| allowed_use | Living rabbits/hares only at declared species, gate and eligible route |
| excluded_use | Meat, fur, hides, slaughter, unpermitted capture, relabelled wild farm production and post-handover service |
| required_metadata | Species, domestic/wild, class, count, mass, condition, geography, route, gate, dates, housing/permit, allocation and manure destination |
| required_quality_disclosure | Measurement/sampling, coverage, missing exchanges, provisional screens, UUID gaps, legal evidence, allocation/sensitivity |
| update_trigger | Changed legal status, route, housing, gate, animal state, flow identity, emission method or observed records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Living rabbit and hare CPC scope |
| `fao-rabbit-production` | `extension_guidance` | https://www.fao.org/4/x5082e/X5082E00.htm | Domestic breeding/rearing and health |
| `fao-rabbit-housing` | `extension_guidance` | https://www.fao.org/4/X5082E/X5082E0f.htm | Housing, cleaning and manure route |
| `vic-hare-control` | `official_guidance` | https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-hare-control | Capture possibility and jurisdiction-sensitive welfare; not universal permission |
| `ipcc-livestock-2019` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Manure emission method; no universal rabbit factor |
