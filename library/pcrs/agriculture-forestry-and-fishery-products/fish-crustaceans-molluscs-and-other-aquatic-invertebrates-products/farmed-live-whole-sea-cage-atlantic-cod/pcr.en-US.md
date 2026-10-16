---
pcr_id: pcr.farmed-live-whole-sea-cage-atlantic-cod
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed live whole sea-cage Atlantic cod

## 1. Scope and Applicability

This PCR covers Norwegian Atlantic cod (Gadus morhua) grown in marine net cages from purchased hatchery-origin juveniles, removed alive, sorted and delivered alive by wellboat to the first processor's physical receipt before slaughter. It defines a selected intermediate producer delivery gate, not a claim that all farmed cod is sold alive to retail. FAO describes hatchery-to-cage production and wellboat transfer to slaughterhouses; the first-party Norcod account corroborates the hatchery/fry-to-sea route. These sources support qualitative route choices only.

Exclude wild-caught juveniles or capture-based fattening, wild adult capture, other Gadiformes, wholly land-based growout, and references already slaughtered, bled, gutted, filleted or frozen. Downstream slaughter, packing of dead fish, retail, cooking and consumption are excluded. No universal feed conversion, stocking density, mortality, medicine, photoperiod outcome, cycle duration or transport temperature is imposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-sea-cage-atlantic-cod |
| classification_refs | cpc:3.0:04242 |
| covered_products | Norwegian hatchery-origin sea-cage Atlantic cod delivered whole and live to first processor physical receipt before slaughter |
| excluded_products | Wild juvenile fattening; wild adults; other Gadiformes; wholly land-based growout; dead, bled, gutted, filleted or frozen reference fish |
| representative_product | Live whole Gadus morhua from a declared Norwegian marine net-cage cohort |
| production_route | Purchased hatchery juveniles → managed sea-cage growout → live cage harvest → live grading/destination sorting → wellboat preservation and delivery |
| market_state | Whole live fish at processor physical receipt before slaughter |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole live Atlantic cod at the declared first processor physical receipt before slaughter |
| How much | 1 kg accepted net fish mass |
| How well | Verified Gadus morhua, hatchery origin, marine net-cage route and actual live acceptance; body mass included, free carrier water and equipment tare excluded |
| How long or cycle | Actual cohort from purchased juvenile receipt to final live acceptance; retain all reporting years, opening/closing stock, harvest trips, failed cycles and service periods |
| reference_flow_link | `cod_processor_receipt` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live whole Atlantic cod at first processor physical receipt before slaughter |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species; hatchery juvenile origin and upstream nursery coverage; Norwegian farm/site and cage technology; cohort/period; live whole state; actual first processor physical receipt before slaughter; grade/destination; acceptance date; net fish weighing or sampled count conversion; carrier-water/tare exclusion; mortality/reject treatment; service ownership and allocation |

These qualifiers must appear in the foreground package metadata or equivalent explicit fields. A commercial transaction date without physical live acceptance does not define this reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted whole live fish using a calibrated scale or traceable calibrated weighing record at physical receipt, excluding free carrier water and equipment tare; use cp_acceptance. |
| count_mass | cod_juveniles; cod_ready; harvest_cod; cod_collected; sort_cod; cod_sorted; delivery_cod; cod_processor_receipt | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain raw counts and representative lot-specific sampled live net masses, sampling design and uncertainty when counts are converted; no universal juvenile/adult count-to-mass factor. |
| native_units | all inventory rows | Actual exchange property | Actual native unit | Preserve original fuel mass/volume with density evidence, electricity kWh/MJ conversion, water volume, service functional unit and chemical/elemental basis; no automatic mass conversion for services. |
| substance_basis | growout_aquatic; growout_air; harvest_releases; sort_direct_releases; delivery_releases; delivery_air | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare chemical species and receiving medium; distinguish elemental nutrient from compound mass, fossil from biogenic carbon and carrier-water volume from added pollutant load. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased live Gadus morhua juveniles from identified hatchery and nursery suppliers at farm receipt, with complete upstream burdens |
| starting_condition_role | Biological input boundary; not a burden-free origin |
| product_classification_scope | Selected hatchery-origin marine-cage Atlantic cod route within CPC 04242; the leaf also covers excluded products |
| recursive_input_rule | A same-category juvenile or live cod input retains species/state/gate and upstream dataset lineage; use a complete supplier dataset or explicit upstream submodel once, with cycle/duplicate checks |
| upstream_dataset_requirement | Hatchery, nursery, feed, energy, consumables, services, assets and delivery inputs require geography/technology/state-compatible upstream coverage; missing coverage is a disclosed data gap |
| disclosure | Declare actual hatchery origin, receipt gate, farm/cage/cohort and reporting years, service inclusions, asset boundaries, losses, stock carryover, allocations, uncertainty and all exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | cod_growout; cod_harvest; cod_sort; cod_live_delivery | Keep hatchery/nursery upstream on purchased juveniles. Foreground growout produces live fish in cages; independent harvest removes them alive; sorting separates accepted/downgraded/rejected destinations; preservation maintains live usability through wellboat delivery. | fao-cod-2010; norcod-sea-route |
| boundary_gate | cod_live_delivery | End at evidenced live physical processor receipt before any bleeding, gutting or slaughter; missing live gate evidence cannot default to this reference. | fao-cod-2010; cod-accounting-method |
| boundary_support | all inventory rows | Include actual growout equipment cleaning, support boats, harvest handling, live preservation and logistics. Do not invent a separate fish conditioning or product packaging operation for live tanks. Instantiate each actual support exchange at its consuming node. | cod-accounting-method |
| boundary_periods | cod_growout; cod_harvest; cod_sort; cod_live_delivery | Index juvenile receipt, marine cohort growth, partial harvests, deliveries, fallow/cleaning, failures, asset replacement and termination across all relevant reporting years. Opening/closing cohort inventories carry burdens forward without repeated allocation. | cod-accounting-method |
| boundary_shared | growout_services; harvest_services; sort_services; delivery_services | Maintain one shared ledger for cages/moorings, feeding systems, craft, wellboats and utilities, naming all consuming nodes, cohorts and service periods. Each node owns only its documented share; exclusive inclusive-provider and direct component ownership applies. | cod-accounting-method |
| boundary_generation | growout_electricity; growout_fuel; harvest_electricity; harvest_fuel; sort_electricity; sort_services; sort_direct_releases; delivery_electricity; delivery_fuel | For on-site generation inventoried with its fuel and direct emissions, generated electricity is an internal energy transfer only: do not add purchased-electricity upstream burdens. Purchased electricity includes its supplier generation upstream once. Meter and distinguish imports, self-generation and transfers, with one generator owner and explicit fuel/electricity boundaries. | cod-accounting-method |
| boundary_losses | all inventory rows | Reconcile counts/biomass/feed with biological growth, intentional transfers, deaths, escapes and stocks; do not force juvenile mass to equal final mass. Ledger losses are not automatically waste or elementary exchanges. No ecological or nutrient-removal credit is assumed. | cod-accounting-method |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cod_growout | Marine cage growout | required | Selected hatchery-origin marine-cage route | Managed biological cohort production; batch/cohort and reporting-period indexed | Measured live biomass passed to harvest |
| cod_harvest | Live cage harvest | required | Actual live removal for delivery | Independent collection from production context, event/trip indexed | Live collected cod to sorting |
| cod_sort | Live grading and destination sorting | required | Actual destination decision before loading | Accepted grade, downgraded/return and reject state separation, lot indexed | Live accepted delivery lots and declared secondary states |
| cod_live_delivery | Live preservation and wellboat delivery | required | Selected live processor receipt channel | Maintain viable whole state through loading, voyage and acceptance | 1 kg accepted net live whole cod at processor receipt |

Cohorts may overlap in cages and reporting periods. Record actual operation mode and event boundaries rather than assuming one annual batch. Every transfer uses one id at both ends; internal product outputs are not additional final products. The grade/destination ledger enumerates every actual grade even when several instances share a semantic card. No unrecorded secondary product is presumed.

### Process: Marine cage growout (`cod_growout`)

Incoming state: Purchased hatchery-origin live juveniles. Outgoing usable state/handoff: Live cod ready for cage removal. Record actual cohort, event and period; conditional cards are instantiated only from actual records.

#### Inputs

##### Product flows

###### Hatchery-origin live Atlantic cod juveniles (`cod_juveniles`)

Retain supplier hatchery and nursery burdens through juvenile delivery; record species, origin, count and sampled net mass. Wild-caught juveniles are excluded.

- Selected flow: Hatchery-origin live Atlantic cod juveniles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cod_juveniles
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered cod feed (`cod_feed`)

Record each actual formulation, moisture basis, supplier and delivery; distinguish opening/closing feed stocks, fed amounts and unconsumed disposal. No default feed mix or FCR.

- Selected flow: Atlantic cod feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cod_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Growout electricity (`growout_electricity`)

Meter feeding, support and any actual photoperiod lighting separately where practicable; lighting does not imply prevention of maturation.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_growout_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is presumed; record and classify any actual crossing of this type.

##### Elementary flows

No exchange is presumed; record and classify any actual crossing of this type.

#### Outputs

##### Product flows

###### Live cage-grown Atlantic cod ready for harvest (`cod_ready`)

Measure cohort biomass handed to harvest, with transfer id and live state. This is an internal transfer, not a second final product.

- Selected flow: Live cage-grown Atlantic cod ready for harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cod_ready
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air from direct growout combustion (`growout_fossil_co2`)

Calculate only actual direct fossil combustion; exclude biological respiration, biogenic carbon and provider-inclusive service emissions.

- Selected flow: Fossil carbon dioxide to unspecified air from direct growout combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_growout_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live cage harvest (`cod_harvest`)

Incoming state: Live cod in growout cages. Outgoing usable state/handoff: Live collected cod for sorting. Record actual cohort, event and period; conditional cards are instantiated only from actual records.

#### Inputs

##### Product flows

###### Live cage-grown Atlantic cod ready for harvest (`harvest_cod`)

Match cod_ready transfer id and measured biomass; harvest removes fish from the cage independently of biological growth or slaughter.

- Selected flow: Live cage-grown Atlantic cod ready for harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_cod
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest electricity (`harvest_electricity`)

Record actual pumping, handling or lifting electricity where used; no assumed technology or power demand.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is presumed; record and classify any actual crossing of this type.

##### Elementary flows

No exchange is presumed; record and classify any actual crossing of this type.

#### Outputs

##### Product flows

###### Live collected Atlantic cod for sorting (`cod_collected`)

Record viable collected fish at sorting handoff separately from incidental material and lost fish.

- Selected flow: Live collected Atlantic cod for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cod_collected
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air from direct harvest combustion (`harvest_fossil_co2`)

Calculate only direct fossil fuel emissions owned by harvest, excluding biological carbon and inclusive service burdens.

- Selected flow: Fossil carbon dioxide to unspecified air from direct harvest combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live grading and destination sorting (`cod_sort`)

Incoming state: Live harvested cod. Outgoing usable state/handoff: Live accepted delivery lots and independently declared secondary live outputs. Record actual cohort, event and period; conditional cards are instantiated only from actual records.

#### Inputs

##### Product flows

###### Live collected Atlantic cod for sorting (`sort_cod`)

Match cod_collected at entry and retain lot and transfer ids.

- Selected flow: Live collected Atlantic cod for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_cod
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting electricity (`sort_electricity`)

Record actual live sorting equipment and support electricity, indexed to sorting events.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is presumed; record and classify any actual crossing of this type.

##### Elementary flows

No exchange is presumed; record and classify any actual crossing of this type.

#### Outputs

##### Product flows

###### Live accepted Atlantic cod for wellboat loading (`cod_sorted`)

Record every actual accepted grade and delivery lot with live state and handoff to preservation. Grade names and thresholds come from records, not this PCR.

- Selected flow: Live accepted Atlantic cod for wellboat loading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cod_sorted
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live preservation and wellboat delivery (`cod_live_delivery`)

Incoming state: Live accepted cod at loading. Outgoing usable state/handoff: Live whole cod at first processor physical receipt before slaughter. Record actual cohort, event and period; conditional cards are instantiated only from actual records.

#### Inputs

##### Product flows

###### Live accepted Atlantic cod for wellboat loading (`delivery_cod`)

Match cod_sorted lots and measured loading mass; retain viable state before preservation.

- Selected flow: Live accepted Atlantic cod for wellboat loading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_cod
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live preservation electricity (`delivery_electricity`)

Record actual water circulation, oxygenation and temperature-control power where used, separate from inclusive service power.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditional supplied oxygen (`delivery_oxygen`)

Record actual purchased oxygen grade, purity and net use where supplied; no oxygen default is assumed.

- Selected flow: Oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_oxygen
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is presumed; record and classify any actual crossing of this type.

##### Elementary flows

###### Conditional directly abstracted wellboat seawater (`delivery_seawater`)

Record metered or justified actual abstraction source and withdrawal volume only when the model owns direct intake; recirculation is not repeated withdrawal.

- Selected flow: Conditional directly abstracted wellboat seawater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_seawater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Live whole Atlantic cod at first processor physical receipt before slaughter (`cod_processor_receipt`)

Use the same accepted net fish-mass receipt as the reference denominator. Verify actual live physical receipt before any bleeding, gutting or slaughter; commercial farm-gate labels alone are insufficient.

- Selected flow: Live whole Atlantic cod at first processor physical receipt before slaughter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `cod-accounting-method`
- Range: Normalization identity using the same accepted net live-mass record
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `cod-accounting-method`

##### Waste flows

##### Elementary flows

###### Conditional carrier seawater return (`delivery_water_return`)

Record actual receiving compartment and returned volume, matched to intake/reuse ledger; this is not fish mass or an ecological credit.

- Selected flow: Conditional carrier seawater return
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_water_return
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fossil carbon dioxide to unspecified air from direct live-delivery combustion (`delivery_fossil_co2`)

Calculate direct wellboat fossil combustion only when owned here; exclude respiration and inclusive-provider emissions.

- Selected flow: Fossil carbon dioxide to unspecified air from direct live-delivery combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cod-accounting-method`
- Range: Unresolved provisional screening evidence need; no empirical bound asserted
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | First attribute independently metered inputs and events to their node, cohort, lot and period. For this live-cod route, unresolved common operating burdens are assigned by documented causal service usage (metered power, vessel hours, cage occupancy/biomass-time as supported); disclose the selected driver and alternatives. | cod-accounting-method |
| allocation_outputs | sort_secondary; delivery_returns; cod_processor_receipt | Enumerate actual intended accepted grades, separately sold live downgraded fish and any other intentional outputs with physical handoffs. Use subdivision first; distribute remaining homogeneous live-cod joint burdens by accepted net live mass across intended sold grades, documenting why the mass driver fits this route. Different functions/states need a separate reviewed attribution decision. No default substitution credit. | cod-accounting-method |
| allocation_rejects | growout_waste; harvest_waste; sort_waste; delivery_waste | Rejects, mortalities and wastes are not automatically co-products. Their accountable production and treatment burdens remain with the responsible cohort/output; returned live stock carries its assigned burden once and is not counted as final sold mass. | cod-accounting-method |
| allocation_period | all inventory rows | Carry accumulated juvenile/growout burdens with surviving cohort stocks across year boundaries, assign partial harvests consistently and reconcile remaining stocks. Include failed cohorts, fallow support, cleaning and nonproductive services in the accountable ledger; disclose redistribution/terminal treatment rather than deleting them or allocating twice. | cod-accounting-method |
| allocation_assets | growout_services; harvest_services; sort_services; delivery_services | Use actual asset inventories, supported service lives, maintenance/replacement and service-use shares across named consumers/periods; shares exhaust the included burden once. No default lifetime. Inclusive purchased services and explicit fuel/power/capital/direct-emission components are mutually exclusive. | cod-accounting-method |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_growout | cod_growout | Juveniles, feed, support inputs, grown biomass, wastes and releases | Supplier, meter, cohort and emission records | Species/origin; juvenile counts and sample mass; feed composition/moisture and stocks; cage/cohort/year; inputs; meters; asset/service id and shares; mortality/escapes; waste destinations; release species/medium and factor/model provenance | Reconcile purchase/feeding/stock records, calibrated meters and biomass samples; instantiate each conditional exchange separately; calculate substances only with compatible factors or measured concentrations/loads | kg; kWh; m3; each service native unit | Every receipt, feeding/accounting period and event | Full cohort and opening/closing periods including failed cycles | Named Norwegian farm, cages and suppliers | per 1 kg reference flow | Invoices; calibrations; sampling; supplier coverage; asset ledger; model/factor uncertainty |
| cp_harvest | cod_harvest | Removal, handling, fuel/services, collected live fish and losses | Trip/event and transfer records | Cohort; harvest event; transfer id; live entry/exit biomass/counts; fuel/power; service ownership; deaths/escapes; actual waste and direct-release species/medium | Pair cage-removal and sorting handoff records; meter actual owned inputs; retain incident and destination evidence | kg; kWh; each service native unit | Every harvest trip/event | All cohort harvests and failed removals in selected periods | Named cage and harvest craft | per 1 kg reference flow | Signed handoffs; scales; logs; service invoices; fuel/factor provenance |
| cp_sort | cod_sort | Live grading, accepted, downgraded, return and reject states ; actual direct substance releases| Lot/grade/destination records | Input/output transfer ids; live state; every actual grade/threshold; net masses/count samples; destinations; power; consumables/services; discard treatment ; direct fuel/activity and chemical identity; receiving medium; elemental/compound and fossil/biogenic basis; measured load or compatible factor/model; supplier exclusions; separately inventoried emissions| Match incoming collected lots to all destination states; obtain actual grade criteria and independently measured inputs ; measure actual direct releases or calculate from compatible recorded activity/factors, keeping one sorting owner and excluding duplicate supplier/separate burdens| kg; kWh; each consumable/service native unit | Every sorting lot and destination event | All accepted/rejected lots across selected cohorts/years | Named sorting location and recipients | per 1 kg reference flow | Grade tickets; weighing/sampling; recipient acceptance; waste receipts ; release measurements/factor provenance and uncertainty|
| cp_delivery | cod_live_delivery | Live preservation, voyage, owned inputs, service, returns, wastes and releases | Loading, vessel, live-state and discharge records | Lot; route/time; live loading/receipt; fuel/power/oxygen; actual water intake/reuse/return; temperature/oxygen observations; service inclusions; dead/rejected fish; discharge constituents/medium; equipment and cleaning events | Reconcile loading to physical receipt and losses; collect actual viability observations, meters and service inclusions; resolve individual conditional exchanges, with intake background separated from added loads | kg; kWh; m3; each service native unit | Every loading, voyage, discharge and receipt | Entire wellboat duty through first processor live receipt | Named vessel/route and receiving processor | per 1 kg reference flow | Voyage logs; live acceptance; meters; receipts; water sampling; factor/model provenance |
| cp_acceptance | cod_live_delivery | Final live reference product | Physical acceptance and calibrated weighing records | Species; hatchery origin; cohort/lot; processor; time; live state before slaughter; gross fish/carrier mass; free water/tare; accepted net live mass; rejects; count/sample evidence where used | Weigh accepted whole live fish with calibrated equipment or reconcile traceable calibrated receipt weights; document water/tare removal and live state before slaughter, pairing loading and acceptance | kg | Every physical receipt lot | All final reference lots in selected cohort/period | First processor physical receiving gate | per 1 kg reference flow | Calibration; signed live receipt; tare checks; sample uncertainty; gate timestamps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| same_reference_normalization | all inventory rows | Divide each attributable actual exchange by accepted net live fish mass for the same accountable cohort/output scope; preserve raw native units and original quantities. Final reference equals accepted mass divided by that same accepted mass, not a yield estimate. | Node protocols; cp_acceptance; attribution ledger | Exchange amount per 1 kg reference flow | cod-accounting-method |
| cohort_reconciliation | cod_growout; cod_harvest; cod_sort; cod_live_delivery | Reconcile opening stock, purchases, biological growth, internal transfers, closing stock, intended outputs, deaths and escapes; retain counts and biomass evidence separately. Biological growth prevents a simple juvenile-mass-equals-final-mass identity. | Cohort/feed/transfer/acceptance and loss records | Traceable stock and burden carryover without duplicate transfers | cod-accounting-method |
| direct_release_calculation | growout_aquatic; growout_fossil_co2; growout_air; harvest_fossil_co2; harvest_releases; delivery_releases; delivery_fossil_co2; delivery_air | Use compatible measured load/concentration-flow or documented fuel/feed substance-balance factors; retain substance, elemental/compound basis, medium, technology and uncertainty. Remove background and provider-inclusive overlap; no default release factor. | Node activity; measurements; factor provenance; service ownership | Individual actual substance loads on reference basis | cod-accounting-method |
| range_resolution | all inventory rows | Except the final 1..1 normalization identity, 0..U_row denotes an unresolved screening evidence need, never an observed or accepted empirical bound. For every instantiated exchange approve a separate U_instance in its own property/native unit and record evidence, reviewer and scope; aggregate bounds cannot cover mixed exchanges. | Actual exchange scope; node protocols; reviewed range evidence | Independent replaceable screening limits, or explicitly unresolved evidence | cod-accounting-method |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Match every actual exchange identity, state, gate, property, native unit, direction and destination; final dataset exchanges need verified concrete identities. | Supplier and receiving records; identity/support verification |
| quality_completeness | all inventory rows | Retain all inputs, support, services, wastes, emissions, failures and opening/closing stocks over complete cohort and service periods. Missing values are gaps, never automatic zero. | Cohort reconciliation and node coverage ledger |
| quality_uncertainty | all inventory rows | Disclose sampling, scale/meter, factor/model, temporal/geographic and upstream-data uncertainty. Every provisional upper bound remains unresolved until separately reviewed. | Calibration; samples; source applicability; uncertainty and bound decision records |
| quality_live_gate | cod_processor_receipt | Confirm actual viable whole fish physically accepted before slaughter; record live-state failure, rejection and returns independently. No universal survival, shelf-life or food-safety guarantee. | Signed physical receipt, state observations and timestamps |
| quality_translation | all inventory rows | Keep bilingual rules, card ids, units, quantities and source roles aligned with the canonical structured projection. | Paired text and projection comparison |
| `collect_growout_fuel` | `cod_growout`; Inputs; Product flows: Growout direct fossil fuel | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record fuel grade and measured use by farm boats and generators; exclude fuel already owned by an inclusive purchased service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_fuel Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_growout_management` | `cod_growout`; Inputs; Product flows: Conditional management materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate separately each actual medicine, disinfectant, net consumable or other mass-measured material with composition and use; medicine is never presumed required. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_management Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_growout_water` | `cod_growout`; Inputs; Product flows: Supplied support and cleaning water | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual supplied water and its source for equipment cleaning/support. Natural water-column exposure through cages is not metered abstraction. Flow property / unit: Volume / m3; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_water Unit: m3 Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_growout_services` | `cod_growout`; Inputs; Product flows: Conditional growout shared asset and service use | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each cage, mooring, feeding system, workboat or contracted service using its native service unit; hours are only the time-based case. Record asset id, consumers, periods, replacements and exclusive burden ownership. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Service time / h; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_services Unit: h Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_growout_waste` | `cod_growout`; Outputs; Waste flows: Conditional collected growout wastes | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actually collected mortalities, discarded feed, spent gear and chemical containers by waste type and receiving treatment. Escapes and uncollected mortalities stay in the cohort ledger unless an actual exchange is evidenced. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_waste Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_growout_aquatic` | `cod_growout`; Outputs; Elementary flows: Conditional growout substance releases to seawater | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each supported nutrient, faecal/feed-loss constituent, medicine residue or respiration substance with chemical identity, receiving seawater compartment and elemental/compound basis. Do not convert whole lost fish directly to an elementary flow or count whole waste plus constituents twice. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_aquatic Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_growout_air` | `cod_growout`; Outputs; Elementary flows: Conditional other growout air pollutants | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate reported combustion pollutant species, basis and receiving air medium; a broad NOx/SOx or particulate label cannot resolve a specific identity. Exclude fossil CO2 already carried by the node's separate fossil_co2 card. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_growout; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_growout`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_growout_air Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_growout`; `cod-accounting-method` |
| `collect_harvest_fuel` | `cod_harvest`; Inputs; Product flows: Harvest direct fossil fuel | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual craft or generator fuel for the cage-removal operation and its event id. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_harvest`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_fuel Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `cod-accounting-method` |
| `collect_harvest_services` | `cod_harvest`; Inputs; Product flows: Conditional harvest asset and service use | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual lifting, pumping, craft and contracted harvest services in native units, retaining the common shared-asset ledger and handoff owner. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Service time / h; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_harvest`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_services Unit: h Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `cod-accounting-method` |
| `collect_harvest_waste` | `cod_harvest`; Outputs; Waste flows: Conditional collected harvest waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actually collected dead fish and spent materials with destinations; accidental escapes are a ledger event, not automatic waste delivery. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_harvest`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_waste Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `cod-accounting-method` |
| `collect_harvest_releases` | `cod_harvest`; Outputs; Elementary flows: Conditional harvest substance releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual cleaning runoff constituents and direct air pollutant species with their receiving medium and chemical basis. Unmeasured whole-fish loss is not a pollutant mass. Exclude fossil CO2 already carried by the node's separate fossil_co2 card. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_harvest; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_harvest`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_releases Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `cod-accounting-method` |
| `collect_sort_services` | `cod_sort`; Inputs; Product flows: Conditional sorting service and consumable use | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual sorting service in native units and separately quantify its consumables; do not bury independent exchanges in a time amount. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Service time / h; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_services Unit: h Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `cod-accounting-method` |
| `collect_sort_secondary` | `cod_sort`; Outputs; Product flows: Conditional independently intended live cod outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate downgraded but sold live fish, returns to growout and other intended destinations separately; identify buyer/receiving cage and handoff. Returns remain stock transfers, not co-products by default. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_secondary Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `cod-accounting-method` |
| `collect_sort_waste` | `cod_sort`; Outputs; Waste flows: Rejected cod and sorting waste sent to treatment | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actually discarded or dead fish by treatment destination; rejected fish are not intended products merely because they have mass. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_waste Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `cod-accounting-method` |
| `collect_sort_direct_releases` | `cod_sort`; Outputs; Elementary flows: Conditional sorting direct substance releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate only actual sorting-node combustion or other direct releases supported by event records. Each substance requires its own chemical identity, receiving air/water/soil compartment, elemental/compound and fossil/biogenic basis, quantity method and independently reviewed U_instance in its native unit. Keep releases at sorting; exclude supplier-inclusive emissions and any separately inventoried release, including separately counted fossil CO2. No release or fixed identity is presumed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_sort; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_direct_releases Unit: kg Basis: per 1 kg reference flow; each actual substance requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `cod-accounting-method` |
| `collect_delivery_fuel` | `cod_live_delivery`; Inputs; Product flows: Live delivery direct fossil fuel | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual wellboat propulsion and auxiliary fuel only when the foreground directly owns it. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_delivery`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_fuel Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_delivery`; `cod-accounting-method` |
| `collect_delivery_services` | `cod_live_delivery`; Inputs; Product flows: Conditional live wellboat preservation and logistics service | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual provider services, equipment, water treatment and vessel capacity use with native units and route. An inclusive service owns its declared fuel, power, capital and direct releases; separately inventoried components are excluded from that service burden. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Service time / h; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_delivery`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_services Unit: h Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_delivery`; `cod-accounting-method` |
| `collect_delivery_returns` | `cod_live_delivery`; Outputs; Product flows: Conditional live receipt returns or secondary intended outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual live rejected-but-retained or separately sold fish with destination, acceptance and burden treatment; never include them in the accepted reference mass. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_delivery`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_returns Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_delivery`; `cod-accounting-method` |
| `collect_delivery_waste` | `cod_live_delivery`; Outputs; Waste flows: Conditional collected live-delivery waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate collected dead fish, spent filters and other actual wastes by treatment destination. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_delivery`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_waste Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_delivery`; `cod-accounting-method` |
| `collect_delivery_releases` | `cod_live_delivery`; Outputs; Elementary flows: Conditional live-delivery receiving-water releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate measured or modelled nutrient, faecal, medicine or cleaning constituents with species and receiving compartment. Record carrier-water return volume separately from pollutant mass and distinguish intake water background from added loads. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_delivery`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_releases Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_delivery`; `cod-accounting-method` |
| `collect_delivery_air` | `cod_live_delivery`; Outputs; Elementary flows: Conditional other live-delivery air pollutants | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual direct pollutant species and air compartment from compatible engine/fuel evidence. Exclude fossil CO2 already carried by the node's separate fossil_co2 card. Each actual exchange needs its own identity, property/native unit and independent U_instance; the displayed unit is only the stated case. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual attributable quantity per 1 kg reference flow; retain raw records and cp_delivery; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_delivery`; Sources: `cod-accounting-method` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Unresolved provisional screening evidence need; no empirical bound asserted Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_air Unit: kg Basis: per 1 kg reference flow; each actual exchange requires independently reviewed U_instance in its own native unit Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_delivery`; `cod-accounting-method` |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | cod_processor_receipt | Reject wild-origin growout juveniles, other species/route, or fish slaughtered before receipt from this reference; require all qualifiers and upstream juvenile coverage. | fao-cod-2010; cod-accounting-method |
| validate_measurement | all inventory rows | Verify same 1 kg accepted net live mass basis, native-unit conversions, lot-specific count samples, water/tare exclusions and node-owned collection links. Final 1..1 is normalization identity only. | cod-accounting-method |
| validate_outputs | cod_sort; cod_live_delivery | Enumerate every grade/destination, accepted output, independently intended secondary product, return, reject and waste with handoff; reconcile transfers and prevent two final claims for one fish. | cod-accounting-method |
| validate_mode_period | all inventory rows | Check actual cohort/batch and overlapping reporting periods, input/output/cleaning/changeover events, partial harvests, failed cycles and opening/closing burden carryover once. | cod-accounting-method |
| validate_shared | growout_services; harvest_services; sort_services; delivery_services | Check every named asset/service consumer and period, causal driver, total shares, supported asset life/replacement and exclusive service/direct component ownership. | cod-accounting-method |
| validate_environment | all elementary rows | Require actual substance and receiving medium/basis, distinguish direct fossil carbon from respiration, and avoid waste/constituent or service-emission duplication; ambient seawater exposure and lost biomass are not automatic elementary exchanges or credits. | cod-accounting-method |
| validate_ranges | all inventory rows | Resolve independent U_instance bounds before treating ranges as empirical acceptance limits; missing quantity evidence or identities remains a gap even if structural checks pass. | cod-accounting-method |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground package and downstream process/lifecyclemodel supply of Norwegian hatchery-origin cage-grown cod at live processor receipt before slaughter |
| allowed_use | Matching species, route, live whole state, gate, geography and documented period/quality assumptions |
| excluded_use | Wild capture or wild-juvenile fattening; other Gadiformes; wholly land-based growout; slaughtered/gutted/filleted/frozen fish; downstream slaughter/retail/cooking without added stages |
| required_metadata | Reference qualifiers; node/transfer/cohort ledger; upstream hatchery/nursery and input coverage; native units; allocations; shared service ownership; periods/assets; actual range evidence |
| required_quality_disclosure | Coverage and gaps; unresolved identities/ranges; meter/sample/factor uncertainty; losses/rejects; live acceptance; temporal/geographic applicability; upstream exclusions |
| update_trigger | Route, seed origin, farm/feed/service technology, live gate, allocation, assets, periods, source/factor or data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-cod-2010 | official_guidance | Håkon Otterå, FAO Cultured Aquatic Species Information Programme: Gadus morhua, text updated 2010-11-26; https://www.fao.org/fishery/culturedspecies/gadus_morhua/en/en ; retrieved 2026-10-12 | Qualitative hatchery juvenile, marine cage and live wellboat-to-slaughterhouse route; no numeric defaults |
| norcod-sea-route | literature | Norcod, The Snow Cod, https://www.norcod.com/the-snow-cod ; retrieved 2026-10-12; first-party company route account | Qualitative hatchery/fry-to-sea corroboration only; no commercial sustainability claims, time/size/feed percentages or medicine defaults adopted |
| cod-accounting-method | method_factor | This PCR, sections 3–9: declared selected gate and foreground accounting/measurement method | Net live-mass normalization, conditional exchange/range resolution, node/cohort/period/service ownership and explicit attribution; not an external empirical factor or measured range |
