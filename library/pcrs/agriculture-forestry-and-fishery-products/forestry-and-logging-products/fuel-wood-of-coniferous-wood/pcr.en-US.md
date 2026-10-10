---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-coniferous-wood
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw conifer fuel wood

## 1. Scope and Applicability

This rule covers raw conifer wood supplied for fuel use at its declared producer roadside or collection-point handover. Actual short logs, split billets, rough sticks, branches, bundled twigs and evidenced raw roots/stumps retain species, form, bark and origin identification. A raw origin label is not proof of sustainability or legal harvest. Exclude non-conifer/mixed unidentified wood, industrial saw/veneer/pulp/panel/other-use logs, manufactured chips or pellets, charcoal, treated or demolition-recovered wood, finished heat/electricity and consumer delivery. Each concrete dataset declares its real included raw form; no statistical charcoal-equivalent factor changes the product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-coniferous-wood |
| classification_refs | CPC 3.0 03131 |
| covered_products | Actual raw conifer fuelwood forms; primary separately measured forest-harvest residue recovery where declared |
| excluded_products | Non-conifer fuelwood; industrial logs; manufactured wood fuels; charcoal; treated/recovered industrial wood; delivered energy |
| representative_product | A traced raw conifer fuelwood lot for fuel use at producer collection-point dispatch |
| production_route | Declared source management or natural/residue source → harvest/removal → actual extraction/preparation → destination sorting and handover |
| market_state | Net raw wood as received, with actual moisture, bark and form; not combustion-ready universal grade |

Managed-source alternatives inherit the stand_management parent. Planting/regeneration introduces actual management materials and multi-period attribution; natural/deadwood removal does not. The wood_collection and wood_preparation parents may be manual, animal-assisted or mechanized; technology changes actual service/energy and direct-emission records, not a mandatory equipment recipe. Source alternatives are exclusive for a single mass contribution but traced different lots may coexist. Retain evidence for the actual source and technology delta.

## 3. Reference Flow

### Functional Unit

| Field | Value |
| --- | --- |
| What | Qualified raw conifer fuelwood at the declared producer handover |
| How much | 1 kg |
| How well | Actual species/form/bark, moisture basis, origin and fuel destination recorded; grade is lot-specific |
| How long or cycle | Declared source cohort, harvest campaign and handover period; growth/asset phases and closing stocks linked, no universal rotation |
| reference_flow_link | `fuelwood_handover` |

### Reference Flow Definition

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw conifer fuel wood at producer roadside or collection-point handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | conifer species and source parcel; raw form and bark inclusion; net as-received mass; wet/dry moisture basis and method; actual source and operation route; energy-use destination; producer gate; harvest/dispatch periods; stock and upstream attribution boundary |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | reference product | Mass | kg | Weigh net accepted handover wood excluding tare and foreign matter. Only fuelwood_handover is fixed to 1 kg; all upstream feeds, prepared transfers and losses remain measured. |
| `moisture_bridge` | wood mass | Mass | kg | Declare wet-basis fraction w or dry-basis ratio u from matched sample; dry mass = wet mass × (1 − w); w = u / (1 + u). Moisture, bark and sample condition must match; no universal drying loss. |
| `volume_mass_bridge` | volume-based wood records | Mass | kg | Keep solid and stacked volume distinct. Measure lot-matched mass/volume and packing factor when needed; never use universal conifer density. Heating value is supplementary with matched moisture, not a mass-reference replacement. |
| `carrier_units` | operation energy | Energy | MJ | Retain original fuel, kWh, distance and service quantities; convert kWh to MJ with 3.6 exactly once when that exchange requires MJ. Fuel mass/volume-to-energy requires its actual documented factor. |



| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `independent_reference_range` | non-reference Range upper limits | matched actual exchange property | matched actual exchange unit | reference_record_max must come from an independent, pre-frozen reviewed reference sample or historical period matched for source, route, state, unit and normalization basis. Record sample IDs, time window, sample size, derivation and uncertainty; never test a batch against its own maximum. Without an independent reference the upper limit is unresolved: retain the gap and check actual balances and measurements, without claiming a passed numerical upper-limit check. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified managed cohort, declared natural source or traced primary harvest residues with explicit prior burden handoff |
| starting_condition_role | Foreground source boundary, not assumed zero-burden cut-off |
| product_classification_scope | CPC 3.0 03131; actual raw conifer fuelwood |
| recursive_input_rule | Record purchased same-category fuelwood as an upstream input with origin, state, gate and supplier dataset; do not recursively regenerate or duplicate its source/harvest burdens |
| upstream_dataset_requirement | Require compatible upstream source/material/service data or disclose a gap and bounded estimate; never assert a complete cradle-to-gate boundary without it |
| disclosure | Source sites/cohorts, included phases, omitted operations, soil/carbon coverage, actual gate, stock periods, source/residue attribution and representativeness |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `source_partition` | source interfaces | Select one source representation for each traced mass: managed transfer, natural withdrawal or prior-attributed residue feed. Growth, harvest/removal and preparation are separate responsibilities; avoid overlap, including uncollected habitat residues. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `declared_gate` | all operations | Include actual source, extraction, cutting/splitting, optional seasoning, sorting and loading before producer handover only. Exclude downstream transport, combustion and carbonisation. A charcoal-focused source informs unit operations only, not the final gate or its illustrative yields. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `cohort_assets` | sites and phases | List every contributing parcel, management/harvest/seasoning period and shared road/equipment consumer. Record establishment, maintenance, replacement and closure where relevant; allocate actual asset services over recorded use, not a default lifetime. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `boundary_direct_release_coverage` | `stand_management`; `wood_collection`; `primary_extraction`; `wood_preparation`; `handover_sorting` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_stand_management; cp_direct_release_wood_collection; cp_direct_release_primary_extraction; cp_direct_release_wood_preparation; cp_direct_release_handover_sorting. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | Conifer stand management | conditional | Only when attributable planting, tending or regeneration belongs to the declared source boundary | managed biological production | Attributed to 1 kg reference flow; raw lot/cohort records retained |
| `wood_collection` | Harvest or removal of source wood | conditional | Only actual harvest/removal or primary harvest-residue collection in the foreground; select managed, natural/deadwood or residue source without duplicating mass | source-to-collected wood | Attributed to 1 kg reference flow; raw lot/cohort records retained |
| `primary_extraction` | Extraction to producer collection point | conditional | Only the actual short-haul extraction before the declared producer handover | primary movement | Attributed to 1 kg reference flow; raw lot/cohort records retained |
| `wood_preparation` | Cutting, splitting or pre-handover seasoning | conditional | Only evidenced preparation before handover; absent operations have no invented inputs or losses | primary conditioning | Attributed to 1 kg reference flow; raw lot/cohort records retained |
| `handover_sorting` | Destination sorting and producer handover | required | Reconcile qualified fuelwood, diverted wood, rejects and stock at the actual producer gate | grading and final handover | Attributed to 1 kg reference flow; raw lot/cohort records retained |

Use actual seasonal lots/campaigns and event dates, not an assumed continuous plant. Input, output, maintenance/changeover, rework and opening/closing stock records are indexed to their real campaign. Different source sites/technologies are weighted by attributable qualified output, not an unweighted average. Every conditional card requires real zero/nonzero evidence.

Purchased already-collected same-category wood enters extraction, preparation or sorting at its actual declared upstream handoff. Carry its compatible prior burdens once and bypass stand management or collection already outside the foreground; do not invent a second harvest/removal operation. The producer handover remains required.


### Process: Conifer stand management (`stand_management`)

Node `stand_management` must complete the direct-release coverage reconciliation in `cp_direct_release_stand_management`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Actual planting and tending materials (`management_materials`)

One conditional umbrella for actual seedlings, formulated fertilizers and other tending materials. Each actual material is distinct in the dataset; keep formulated mass, nutrient/active-content bridge and supplier scope. Natural unmanaged sources do not inherit a planting recipe.

- Selected flow: Actual planting and tending materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded material quantities attributable to the harvested fuelwood cohort
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_management`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Actual operation energy carriers (`stand_management_energy`)

One conditional energy umbrella: identify actual fuel, electricity or heat carriers from records; zero, one or multiple concrete energy exchanges. Preserve original carrier units and verified bridges to MJ. If an inclusive contracted service supplies the work, record its native service quantity and upstream boundary independently, outside this energy card; do not also count its fuel or exhaust.

- Selected flow: Actual operation energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Recorded actual carrier energy attributable to the operation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_operation_at_stand_management`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: MJ
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Elementary flows

###### Actual conifer-source land occupation (`land_occupation`)

Record land category, parcel area and occupation period where in boundary; transformation is a separate actual event, never inferred from occupation. No universal rotation or land-use-change burden.

- Selected flow: Actual conifer-source land occupation
- Flow property / unit: Area time / m2*a
- Amount rule: Measured parcel area-time attributed to the output cohort
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_management`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: m2*a
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Carbon dioxide uptake from air in included managed growth (`biogenic_carbon_uptake`)

Only if the included growth boundary, declared inventory method and independently evidenced complete carbon ledger support this exchange under carbon_uptake_reconciliation. Report carbon pools and dry-matter basis; net stock change alone is not uptake, and later energy use earns no automatic negative credit. Do not duplicate uptake carried by an upstream dataset.

- Selected flow: Carbon dioxide uptake from air in included managed growth `da174fac-e567-42d3-99b5-a688913dc88e`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Determine CO2 uptake from a complete independently evidenced dry-carbon pool ledger and declared method, including harvest, transfers and respiration/releases; never from net stock change alone.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_carbon`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

#### Outputs

##### Product flows

###### Standing conifer wood available for declared harvest (`standing_source_wood`)

Managed-source intermediate handoff to wood_collection. Measure attributable standing biomass; not the final dispatched reference and not fixed to 1 kg.

- Selected flow: Standing conifer wood available for declared harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable source biomass available to the collection campaign
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_stand_management`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

### Process: Harvest or removal of source wood (`wood_collection`)

Node `wood_collection` must complete the direct-release coverage reconciliation in `cp_direct_release_wood_collection`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Standing conifer wood received from management (`managed_source_feed`)

Only for managed-source harvest. Link standing_source_wood transfer and its prior burdens once; do not also count the same biomass as natural withdrawal.

- Selected flow: Standing conifer wood received from management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured source biomass allocated to the fuelwood collection operation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Measured conifer harvest residues received for fuelwood recovery (`residue_source_feed`)

Only separately evidenced primary harvest-residue recovery, not industrial/recovered demolition waste. Declare prior producer interface, residue status and attributed upstream burdens. Mutually exclusive with another feed representation for the same lot.

- Selected flow: Measured conifer harvest residues received for fuelwood recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured received residue mass attributable to this lot
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Actual operation energy carriers (`wood_collection_energy`)

One conditional energy umbrella: identify actual fuel, electricity or heat carriers from records; zero, one or multiple concrete energy exchanges. Preserve original carrier units and verified bridges to MJ. If an inclusive contracted service supplies the work, record its native service quantity and upstream boundary independently, outside this energy card; do not also count its fuel or exhaust.

- Selected flow: Actual operation energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Recorded actual carrier energy attributable to the operation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_operation_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: MJ
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Elementary flows

###### Conifer woody biomass removed from declared natural source (`natural_wood_withdrawal`)

Only natural/deadwood source withdrawal when not already a technosphere input. Identify live/dead state and compartment. Collected logging residues with prior product attribution use their source ledger, not an invented zero-burden natural flow.

- Selected flow: Conifer woody biomass removed from declared natural source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured woody resource removal attributable to the declared fuelwood source
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

#### Outputs

##### Product flows

###### Collected raw conifer fuelwood before extraction or preparation (`collected_fuelwood`)

Intended internal transfer from actual harvest/removal responsibility, independent of stand growth and later preparation. Preserve raw moisture, bark and form; quantity is measured, not forced to 1 kg.

- Selected flow: Collected raw conifer fuelwood before extraction or preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured collected fuelwood mass traceable to the final lot
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Actual separately dispatched industrial wood co-products (`industrial_wood_coproduct`)

Conditional output register for real saw/veneer/pulp/panel/other-use lots. Enumerate every actual intended product and gate in the dataset, separate from fuelwood, and apply the explicit allocation decision.

- Selected flow: Actual separately dispatched industrial wood co-products
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured independent intended co-product quantities
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Waste flows

###### Exported collection residues sent as waste (`collection_exported_residues`)

Only material leaving the foreground with documented waste destination. Uncollected branches, retained habitat wood and on-site residues stay in the source ledger, not a fictional boundary waste exchange.

- Selected flow: Exported collection residues sent as waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exported residue mass by destination
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_source_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Elementary flows

###### Substance-specific direct operation emissions to air (`wood_collection_air_emissions`)

Conditional reporting card only for direct foreground releases. Identify each measured/modelled substance, fossil or biogenic carbon origin and receiving air compartment; do not fix a broad exhaust UUID. Exclude emissions already embedded in an inclusive contracted service.

- Selected flow: Substance-specific direct operation emissions to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded or calculated attributable substance-specific direct emissions
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_emissions_at_wood_collection`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

### Process: Extraction to producer collection point (`primary_extraction`)

Node `primary_extraction` must complete the direct-release coverage reconciliation in `cp_direct_release_primary_extraction`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Collected conifer fuelwood entering primary extraction (`extraction_feed`)

Actual collected_fuelwood transfer or directly matched source lot; an internal transfer carries prior burdens once, never an additional harvested yield.

- Selected flow: Collected conifer fuelwood entering primary extraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured mass entering extraction
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_movement`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Actual operation energy carriers (`primary_extraction_energy`)

One conditional energy umbrella: identify actual fuel, electricity or heat carriers from records; zero, one or multiple concrete energy exchanges. Preserve original carrier units and verified bridges to MJ. If an inclusive contracted service supplies the work, record its native service quantity and upstream boundary independently, outside this energy card; do not also count its fuel or exhaust.

- Selected flow: Actual operation energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Recorded actual carrier energy attributable to the operation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_operation_at_primary_extraction`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: MJ
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

#### Outputs

##### Product flows

###### Raw conifer fuelwood at producer collection point before preparation (`collection_point_wood`)

Measured internal handoff to preparation or sorting; loading and own short-haul movement stop at the chosen producer point. Neither consumer delivery nor an invariant 1 kg output.

- Selected flow: Raw conifer fuelwood at producer collection point before preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured wood mass delivered to this internal collection point
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_movement`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Waste flows

###### Extraction losses exported to actual waste destination (`extraction_losses`)

Separate actual losses and destination from stock retained at source; no preset transport loss percentage.

- Selected flow: Extraction losses exported to actual waste destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured exported loss mass
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_movement`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Elementary flows

###### Substance-specific direct operation emissions to air (`primary_extraction_air_emissions`)

Conditional reporting card only for direct foreground releases. Identify each measured/modelled substance, fossil or biogenic carbon origin and receiving air compartment; do not fix a broad exhaust UUID. Exclude emissions already embedded in an inclusive contracted service.

- Selected flow: Substance-specific direct operation emissions to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded or calculated attributable substance-specific direct emissions
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_emissions_at_primary_extraction`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

### Process: Cutting, splitting or pre-handover seasoning (`wood_preparation`)

Node `wood_preparation` must complete the direct-release coverage reconciliation in `cp_direct_release_wood_preparation`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Raw conifer fuelwood entering cutting or seasoning (`preparation_feed`)

Measured feed from collection or extraction in its actual moisture state. Stacked volume is not solid volume; match conversion to form, bark, species and moisture.

- Selected flow: Raw conifer fuelwood entering cutting or seasoning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured raw feed mass before preparation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_preparation`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Actual operation energy carriers (`wood_preparation_energy`)

One conditional energy umbrella: identify actual fuel, electricity or heat carriers from records; zero, one or multiple concrete energy exchanges. Preserve original carrier units and verified bridges to MJ. If an inclusive contracted service supplies the work, record its native service quantity and upstream boundary independently, outside this energy card; do not also count its fuel or exhaust.

- Selected flow: Actual operation energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Recorded actual carrier energy attributable to the operation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_operation_at_wood_preparation`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: MJ
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

#### Outputs

##### Product flows

###### Prepared raw conifer fuelwood before handover sorting (`prepared_fuelwood`)

Shortened/split or seasoned raw fuelwood; record each actual operation and exit moisture. No manufacture of chips, pellets or charcoal. Preserve measured prepared quantity and stock movements.

- Selected flow: Prepared raw conifer fuelwood before handover sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured prepared wood transferred to sorting
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_preparation`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Waste flows

###### Preparation rejects and bark exported as waste (`preparation_exported_rejects`)

Actual exported waste only; saleable bark or wood is a separately identified co-product, not automatically waste. Retain rework destinations and prevent counting rejects as accepted fuelwood.

- Selected flow: Preparation rejects and bark exported as waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured rejected mass leaving this process as waste
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_preparation`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Elementary flows

###### Water evaporated to air during actual seasoning (`seasoning_water_to_air`)

Only water loss to air with moisture/stock evidence. Separate rainfall uptake, drainage and dry-matter losses; no generic fresh-to-dry yield or historical tropical-hardwood example applied to conifers.

This selected identity is water vapour to explicitly unspecified air. Use it only when the disclosed receiving compartment is unspecified; a known specific air compartment requires its own verified compatible identity and is not automatically replaced by this generic compartment.

- Selected flow: Water evaporated to air during actual seasoning `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Matched measured moisture-balance-derived evaporation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_preparation`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Substance-specific direct operation emissions to air (`wood_preparation_air_emissions`)

Conditional reporting card only for direct foreground releases. Identify each measured/modelled substance, fossil or biogenic carbon origin and receiving air compartment; do not fix a broad exhaust UUID. Exclude emissions already embedded in an inclusive contracted service.

- Selected flow: Substance-specific direct operation emissions to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded or calculated attributable substance-specific direct emissions
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_emissions_at_wood_preparation`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

### Process: Destination sorting and producer handover (`handover_sorting`)

Node `handover_sorting` must complete the direct-release coverage reconciliation in `cp_direct_release_handover_sorting`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Actual conifer fuelwood received for final sorting (`sorting_feed`)

Use the last actual preceding node: collection, extraction or preparation. Distinct lots can coexist; bypassed operations have no invented transfers.

- Selected flow: Actual conifer fuelwood received for final sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured received wood and attributable stock drawdown
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Actual operation energy carriers (`handover_sorting_energy`)

One conditional energy umbrella: identify actual fuel, electricity or heat carriers from records; zero, one or multiple concrete energy exchanges. Preserve original carrier units and verified bridges to MJ. If an inclusive contracted service supplies the work, record its native service quantity and upstream boundary independently, outside this energy card; do not also count its fuel or exhaust.

- Selected flow: Actual operation energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Recorded actual carrier energy attributable to the operation
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_operation_at_handover_sorting`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: MJ
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

#### Outputs

##### Product flows

###### Raw conifer fuel wood at producer roadside or collection-point handover (`fuelwood_handover`)

The sole final reference: net qualified raw wood, excluding packaging and soil/foreign matter not part of the product; as-received bark/moisture basis is disclosed. Record actual raw form and energy-use destination.

- Selected flow: Raw conifer fuel wood at producer roadside or collection-point handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_handover`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Reference normalization identity; not a yield
  - Range role: qa_guardrail
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: calculated_from_collection

###### Actual diverted saleable wood products (`diverted_wood_products`)

Enumerate real non-reference grade/destination products and their handovers; do not hide them inside fuelwood yield or use a universal waste-cutoff claim.

- Selected flow: Actual diverted saleable wood products
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured diverted product mass by declared destination
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

##### Waste flows

###### Final rejected wood sent to declared waste management (`handover_rejects`)

Actual off-spec/contaminated rejects leaving the boundary. Re-cutting returns to wood_preparation as linked rework, counted once; unresolved contaminated material cannot enter the reference.

- Selected flow: Final rejected wood sent to declared waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured final waste rejects
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Sources: `fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- Range: Foreground-conditioned record envelope; no universal numeric default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: reference_record_max
  - Unit: kg
  - Basis: per 1 kg reference flow; actual lot/source denominator preserved in the collection ledger
  - Basis kind: reference_flow
  - Evidence kind: collected_record

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `attribution_priority` | intended outputs | First subdivide independently measured source/operations. For inseparable common burdens document a physical causal relation using compatible dry wood/biomass or service records; if unsupported, use justified economic allocation with actual prices/period and sensitivity. No automatic zero burden for fuelwood/residues or substitution credit. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `output_partition` | stock and rejects | Enumerate fuelwood, industrial wood, diverted products, waste exits and retained stock by lot and handover. Internal transfer, rework to wood_preparation and stock movement are not extra sales; retain their burdens and count eventual accepted dispatch once. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `period_shared_assets` | cohorts and consumers | Assign growth/management and shared road/equipment services across recorded cohorts, sites, consuming nodes and periods with an explicit denominator and sum-to-one shares. Link maintenance/changeovers/replacement/closure once; do not annualize and allocate the same burden again at dispatch. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols retain original lot, source-area/time and campaign totals with their original denominators. Contracted service quantities preserve native property/unit and supplying-service inclusions; they are not part of the MJ energy-card envelopes. Apply source/output/period attribution once, convert units on matched records once, then divide by matched qualified net handover kg once to report per 1 kg reference flow. Already normalized records are not divided again. These steps also apply to each concrete exchange selected from an umbrella card; they do not fix an internal feed or intermediate output to 1 kg.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_management` | stand_management | management inputs/land | cohort records | parcel; species; establishment/tending dates; materials and original units; area; occupation years; asset IDs; output cohorts; allocation shares | Traceable original records and calibrated measurements; match lot, campaign and scope | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_source_at_wood_collection` | `wood_collection` | source/harvest/removal | lot ledger | source parcel/cohort; natural/managed/residue status; live/dead state; form; bark; gross/tare/net; moisture; actual outputs and destinations; retained residues; prior burden link; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_source_at_stand_management` | `stand_management` | source/harvest/removal | lot ledger | source parcel/cohort; natural/managed/residue status; live/dead state; form; bark; gross/tare/net; moisture; actual outputs and destinations; retained residues; prior burden link; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_operation_at_stand_management` | `stand_management` | energy/material service | operation records | process and campaign; actual carrier/service; supplier; original quantity/unit; fuel factor or kWh bridge; hours/distance; consumers; service inclusions; zero evidence; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_operation_at_wood_collection` | `wood_collection` | energy/material service | operation records | process and campaign; actual carrier/service; supplier; original quantity/unit; fuel factor or kWh bridge; hours/distance; consumers; service inclusions; zero evidence; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_operation_at_primary_extraction` | `primary_extraction` | energy/material service | operation records | process and campaign; actual carrier/service; supplier; original quantity/unit; fuel factor or kWh bridge; hours/distance; consumers; service inclusions; zero evidence; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_operation_at_wood_preparation` | `wood_preparation` | energy/material service | operation records | process and campaign; actual carrier/service; supplier; original quantity/unit; fuel factor or kWh bridge; hours/distance; consumers; service inclusions; zero evidence; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_operation_at_handover_sorting` | `handover_sorting` | energy/material service | operation records | process and campaign; actual carrier/service; supplier; original quantity/unit; fuel factor or kWh bridge; hours/distance; consumers; service inclusions; zero evidence; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_movement` | primary_extraction | extraction/transport balances | movement tickets | source/destination lot; start/end gate; carried net mass; trip/distance; vehicle/animal/service; load utilization; damage/loss destination; stock | Traceable original records and calibrated measurements; match lot, campaign and scope | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_preparation` | wood_preparation | conditioning mass/water | paired batch measurements | linked batch; operation dates; incoming/outgoing net masses; paired moisture with basis/method; solid/stacked volumes and measured factors; water uptake/drainage; bark/dry losses; stock; rework | Traceable original records and calibrated measurements; match lot, campaign and scope | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_handover` | handover_sorting | reference/destinations | weighing and dispatch records | lot/source/process; calibrated scale; gross/tare/net accepted mass; form/bark/moisture; energy destination; producer gate; grades; diverted/waste quantities; opening/closing stock; packaging excluded | Traceable original records and calibrated measurements; match lot, campaign and scope | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_emissions_at_stand_management` | `stand_management` | direct substance releases | measurement/factor ledger | process/campaign; actual fuel/material; named substance; air compartment; fossil/biogenic origin; measured release or documented factor and original basis; upstream-service inclusion; uncertainty; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_emissions_at_wood_collection` | `wood_collection` | direct substance releases | measurement/factor ledger | process/campaign; actual fuel/material; named substance; air compartment; fossil/biogenic origin; measured release or documented factor and original basis; upstream-service inclusion; uncertainty; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_emissions_at_primary_extraction` | `primary_extraction` | direct substance releases | measurement/factor ledger | process/campaign; actual fuel/material; named substance; air compartment; fossil/biogenic origin; measured release or documented factor and original basis; upstream-service inclusion; uncertainty; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_emissions_at_wood_preparation` | `wood_preparation` | direct substance releases | measurement/factor ledger | process/campaign; actual fuel/material; named substance; air compartment; fossil/biogenic origin; measured release or documented factor and original basis; upstream-service inclusion; uncertainty; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_emissions_at_handover_sorting` | `handover_sorting` | direct substance releases | measurement/factor ledger | process/campaign; actual fuel/material; named substance; air compartment; fossil/biogenic origin; measured release or documented factor and original basis; upstream-service inclusion; uncertainty; event_id; transfer_id; counterparty_process_id | Traceable original records and calibrated measurements; match lot, campaign and scope; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_carbon` | stand_management | carbon stock/uptake | matched carbon ledger | cohort/parcel; carbon pools; period opening/closing biomass; dry-matter and actual carbon fraction; exports/retained stocks; upstream carbon inclusion; source method | Traceable original records and calibrated measurements; match lot, campaign and scope | Original units retained; declared exchange unit | Each event/lot and period closure | Actual cohort and reporting period | Every contributing parcel/site and handover point | per 1 kg reference flow | Calibration, invoices/logs, moisture method, transfer IDs and reconciliation trail |
| `cp_direct_release_stand_management` | `stand_management` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_wood_collection` | `wood_collection` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_primary_extraction` | `primary_extraction` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_wood_preparation` | `wood_preparation` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_handover_sorting` | `handover_sorting` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | all inventory rows | Preserve original totals and unit bridges; attribute each source/output/period share once; inventory per 1 kg reference flow = attributable exchange total / matched net accepted handover kg. The reference card alone reports 1 kg. | source totals; allocation; cp_handover | per-reference exchange | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `paired_wood_balance` | wood transfers and losses | Reconcile dry wood, water, bark, foreign matter, stock and destinations using paired records. Wet net mass changes are not automatically dry-matter loss or emissions. | cp_source_at_wood_collection; cp_source_at_stand_management; cp_preparation; cp_handover | reconciled mass/water ledger | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| carbon_uptake_reconciliation | Actual biogenic CO2 uptake | Record CO2 uptake only when the declared inventory method requires it and independent evidence supports it. Net carbon-stock change is not uptake: reconcile the same dry-carbon pools and period as C_open + C_atmosphere + C_nonair_in = C_close + C_harvest_out + C_other_out. Independently record non-atmospheric inputs, harvest/transfers out and evidenced respiration/other releases; cancel internal pool transfers once. Missing terms cannot be replaced by closing minus opening stock. Convert only method-verified atmospheric carbon corresponding to CO2 using 44/12, accounting for other carbon gases separately. Do not duplicate upstream uptake or assign an automatic negative credit. | cp_carbon; independent pool/transfer/release records; declared inventory method | evidenced CO2 uptake and unresolved gaps | |
| `site_weighting` | contributing sites | Sum attributable exchange totals and qualified handover kg over traced comparable lots; compute their quotient, not an average of site ratios. Preserve excluded/nonrepresentative site disclosures. | site records; cp_handover | representative per-reference exchanges | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `calculate_direct_release_ledger` | `stand_management`; `wood_collection`; `primary_extraction`; `wood_preparation`; `handover_sorting` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_stand_management; cp_direct_release_wood_collection; cp_direct_release_primary_extraction; cp_direct_release_wood_preparation; cp_direct_release_handover_sorting; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `traceability` | all lots | Record species, form, source, site, dates, gate and upstream boundaries; mixed unidentified material is not the conifer reference | cp_source_at_wood_collection; cp_source_at_stand_management; cp_handover |
| `measurement_coverage` | mass/water/energy | Calibrated net mass and matched moisture; missing conversions/zero evidence/identity details are disclosed gaps, not assumed values | cp_preparation; cp_operation_at_stand_management; cp_operation_at_wood_collection; cp_operation_at_primary_extraction; cp_operation_at_wood_preparation; cp_operation_at_handover_sorting |
| `representativeness` | sites and periods | List all contributors, weighting, harvest/seasoning conditions, stock closure and included/excluded asset phases; retain uncertainty and sensitivity | site/cohort ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | fuelwood_handover | Require one final 1 kg net as-received conifer raw-fuelwood reference at actual producer gate, qualifiers and concrete identity evidence; neither drying feed nor internal transfer is fixed to 1 kg. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_route` | source and technology | Validate actual source/technology evidence and parent/delta records; no duplicate managed and natural/residue input, no invented omitted operation, no manufactured chips/charcoal/consumer delivery in this boundary. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_measurement` | all inventory rows | Require same-reference bilingual and projected bases, real collection links and exactly-once original-unit conversion/attribution. Require every actual concrete exchange from umbrella cards, with correct direction, type, property/unit and identity confirmation. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_balance` | lots and periods | Reconcile accepted/diverted/rejected/rework/retained stocks, moisture and dry matter with actual destinations; no unexplained biomass yield or universal density/LHV, and no unsupported carbon credit. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_attribution` | cohorts/sites/assets | Check complete output sets, common-burden decision, sum-to-one shares, site weights, source/phase/event indexing and no double-counted shared infrastructure or inclusive service. Unknown actual state or missing evidence blocks the corresponding dataset claim. | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_direct_release_coverage` | `stand_management`; `wood_collection`; `primary_extraction`; `wood_preparation`; `handover_sorting` | For every activated node, reconcile its activity list against cp_direct_release_stand_management; cp_direct_release_wood_collection; cp_direct_release_primary_extraction; cp_direct_release_wood_preparation; cp_direct_release_handover_sorting: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Raw conifer fuelwood producer-gate supply modelling with stated form, moisture, source and attribution |
| excluded_use | Non-conifer substitution; manufactured fuels; delivered heat/electricity; unsupported full forest carbon or sustainability claims |
| required_metadata | Species/form/bark/moisture; origin and site mix; source/operation/gate; reference lot; periods/stocks; upstream/asset scope; allocation and unit bridges |
| required_quality_disclosure | Identity/measurement/source gaps, excluded phases, concrete exchange coverage, range evidence, stock closure, uncertainty and sensitivity |
| update_trigger | Changed source/technology/gate, form/moisture, attribution, assets, supplier identity or better measurement/evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-fuelwood-conifer` | official_guidance | UNSD CPC 3.0 03131, Fuel wood of coniferous wood; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03131 | Official category context; retrieved 2026-10-08 through reviewed classification source |
| `fao-fuelwood-harvesting` | handbook | FAO, Simple technologies for charcoal making, Chapter 3: Harvesting and transporting fuelwood; https://www.fao.org/4/x5328e/x5328e04.htm | Harvest/movement/preparation decomposition only; retrieved 2026-10-08; illustrative charcoal/hardwood quantities not adopted |
| `fao-forest-product-definitions` | official_guidance | FAO, Classifications and definitions, Production and trade of wood-based forest products; https://www.fao.org/4/x2613e/x2613e2w.htm | Raw fuelwood versus industrial roundwood/chips/charcoal; retrieved 2026-10-08; statistical equivalents not used as conversion factors |
