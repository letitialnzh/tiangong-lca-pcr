---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-non-coniferous-wood
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw non-conifer fuelwood at producer handover

## 1. Scope and Applicability

Apply to untreated non-conifer wood in raw fuel forms at its declared producer roadside or collection-point handover. Logs, split billets, twigs, faggots, rough sticks, vine stems, stumps and roots may qualify when actual non-conifer origin and fuel destination are documented. The species mixture, bark, form, moisture and actual source are essential identity facts, not a universal hardwood average. Do not include conifer fuelwood, industrial-use logs, manufactured chips/pellets/briquettes, charcoal, chemically treated or demolition wood, combustion, delivered heat or retail delivery. Source controls follow unsd-nonconifer-fuelwood and fao-woodfuel-planting; the charcoal-supply examples in fao-fuelwood-harvesting support operations only, not charcoal output or conversion factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-non-coniferous-wood |
| classification_refs | cpc:3.0:03132 |
| covered_products | Untreated raw non-conifer fuelwood in the actual log/billet/twig/faggot/stick/vine/stump/root form, with fuel destination at producer handover |
| excluded_products | Conifer fuelwood; industrial timber outputs; treated/recovered demolition wood; manufactured woodfuels; charcoal; combustion products; retail-delivered fuel |
| representative_product | Species-resolved non-conifer split wood with declared bark and as-received moisture, handed over at producer roadside |
| production_route | Managed stand/coppice or selective harvest, or separately tracked pre-existing woody-residue collection; actual extraction/sizing/air seasoning followed by qualification and producer handover |
| market_state | Raw, untreated, net as-received wood; actual natural moisture and raw form, excluding packaging; no universal kiln-dried grade |

The managed-production parent is stand_management. Coppice retains an evidenced stool/root system and indexes repeated shoot harvests; seedling establishment is not repeated for every coppice cut. Selective removal or coppice-with-standards can leave reserved trees and independent timber outputs, requiring product/period attribution. Stump/root removal terminates that portion of the retained stool and requires an actual re-establishment decision, not an assumed continuing coppice credit. residue_collection instead receives already-generated branches/prunings/slash at their documented burden handoff. These sources may coexist in a disclosed mix but are mutually exclusive for the same woody portion. The harvest_removal and primary_preparation parents also support real manual/mechanised and stump-side/roadside-sizing deltas: equipment, carrier use and internal transfer location change; labels alone do not establish a delta. Source, stool, harvest and equipment records must demonstrate the actual choice (fao-woodfuel-planting; fao-dry-forest-silviculture; fao-fuelwood-harvesting).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net raw non-conifer fuelwood accepted at the declared producer roadside or collection-point gate |
| How much | 1 kg net as-received qualified wood, including its declared bark and water, excluding packaging and foreign matter |
| How well | Declared non-conifer species/mixture, origin, raw form, bark, actual moisture basis, fuel destination and accepted lot quality; no invented hardwood density or heating value |
| How long or cycle | Actual reporting period with stand establishment, seedling/coppice/selection phases, harvest events and pre-gate stock carryover linked to the accepted dispatch lots |
| reference_flow_link | nonconifer_fuelwood_handover |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw non-conifer fuel wood at producer roadside or collection-point handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-conifer species and mixture; stand/tree/residue origin; source and regeneration mode; raw form and bark; net/gross and water basis; actual collection and handover gate; fuel destination; accepted quality; reporting period and stock cohort |

The final card alone is fixed to the normalized reference amount. Intermediate wet wood, pre-seasoning feed and stock remain measured. Pre-gate air seasoning may change moisture but does not make this a processed retail fuel; if an actual output form/gate is outside the selected identity it needs its own verified identity, not a relabelled raw flow. When building a data package, declare every qualifier and use dispatch acceptance records; unknown source, gate or moisture is a data gap.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_gate_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use paired calibrated gross/tare/foreign-matter records to obtain accepted net as-received wood mass at the actual producer gate using cp_dispatch; do not replace this with dry mass or thermal output. |
| water_dry_bridge | wood at every source and transfer | Mass | kg | Record sampling state and wet-basis or dry-basis water definition. Reconcile actual wet mass, water and dry wood with matched lots; correct rewetting, bark and deterioration separately, without a universal drying loss. |
| volume_mass_bridge | any solid or stacked-volume record | Volume and Mass | m3 and kg | Record solid/bulk/stacked volume, void/bark convention and paired site/species/form/moisture density or weighing evidence. A stere is not solid volume and hardwood is not one density. |
| energy_carrier_bridge | energy umbrella cards | Energy | MJ | Preserve original carrier and unit; convert kWh to MJ only using the exact unit relation, and fuel quantity only with matched heating-value/unit evidence. No default LHV. Purchases of energy or services must not duplicate their embedded fuel exchanges. |
| resource_carbon_ledger | standing removal and stock changes | Dry mass and carbon mass | kg | Record actual removed dry biomass, retained stools/root/foliage stocks, dry-carbon evidence, land-use change and period. Carbon contained in wood is not an automatic sequestration credit or a use-stage emission. Required site-specific direct emissions need identified substance, medium and method evidence. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual non-conifer stand/tree with recorded management and stocks, or already-generated untreated woody feed with its upstream burden handoff |
| starting_condition_role | Source and inventory initialization before actual harvest/removal or collection; not an unburdened default |
| product_classification_scope | Raw non-conifer wood intended as fuel at producer handover; industrial wood co-products remain separately identified |
| recursive_input_rule | Purchased same-category wood enters at its real incoming gate with one resolved upstream dataset; do not re-execute its prior stand management, resource removal or harvest for the same portion |
| upstream_dataset_requirement | Use compatible source/management, bought energy/material/service and waste-treatment datasets; record supplier scope, gap and attribution ownership |
| disclosure | Species and origin; regeneration/source mode; management and removal owner; source/producer gate; land and initial carbon stocks; co-products; stock periods; conditioning state; carrier/provider mix; missing data |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| producer_gate | all operations | Include only actual source management attributable to this wood, removal/collection, extraction and pre-gate preparation/qualification; customer delivery, charcoal making and combustion are outside. | fao-fuelwood-harvesting; unsd-nonconifer-fuelwood |
| removal_ownership | harvest_removal; residue_collection | Harvest and resource removal are two responsibilities of the same actual removal event, not two energy operations. Managed standing_stock_handoff enters as managed_stock_feed with its burden ownership; the same woody portion must not simultaneously enter as wood_resource_removed. Use the environmental resource card only for actual natural removal without an already attributed technosphere standing-input representation. Keep the physical removal/stock ledger regardless of exchange representation. Stand growth precedes removal; conditioning follows a measured collected handoff. Already-removed purchased/residue material carries upstream burdens without a second standing-resource exchange. | fao-woodfuel-planting; fao-fuelwood-harvesting |
| residue_state | source residues and rejects | Distinguish collected wood, independently sold co-products, off-site waste and on-site retained material. Retained nutrient-rich foliage/stools are not automatically waste, and recovery does not imply zero upstream burden. | fao-woodfuel-planting |
| shared_period_boundary | stand_management; shared_assets | Index establishment, each seedling/coppice/selection harvest, replant/termination events, stock carryover and service periods; keep initial capital/maintenance, energy and shared-road burdens in one non-overlapping ledger. | fao-woodfuel-planting; fao-dry-forest-silviculture |
| conditional_operation | source and preparation | Select actual source, equipment and conditioning from records; document omitted processes and zero use. No universal coppice rotation, harvest yield or seasoning time; no forced coexistence of fresh harvest and residue recovery for one portion. | fao-dry-forest-silviculture; fao-fuelwood-harvesting |
| `boundary_direct_release_coverage` | `stand_management`; `harvest_removal`; `residue_collection`; `primary_preparation`; `qualification_dispatch`; `shared_assets` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_stand_management; cp_direct_release_harvest_removal; cp_direct_release_residue_collection; cp_direct_release_primary_preparation; cp_direct_release_qualification_dispatch; cp_direct_release_shared_assets. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stand_management | Non-conifer stand and coppice management | conditional | Actual managed stand, woodlot or trees-outside-forest inputs are attributable; do not recreate management already included in an upstream source dataset. | managed biological production parent; standing-stock handoff to harvesting, not final dispatch | per 1 kg reference flow |
| harvest_removal | Harvest and resource removal | conditional | The foreground actually removes standing/dead wood, stems, stumps or roots; source-ledger ownership excludes purchased already-removed wood and duplicate residue removal. | source-to-collected harvest and resource-removal responsibility; stump-side material handoff | per 1 kg reference flow |
| residue_collection | Collection of previously generated woody residues | conditional | Actual non-conifer branch, pruning or harvest-residue source is collected rather than freshly felled; retain its original burden handoff. | alternative source-collection responsibility; collected raw fuelwood feed handoff | per 1 kg reference flow |
| primary_preparation | Roadside sizing and primary conditioning | conditional | Actual bucking, splitting, cleaning or air seasoning occurs before the producer gate; omit operations not performed. | primary conditioning parent; sized raw wood handoff, not manufactured chips or kiln-dried retail product | per 1 kg reference flow |
| qualification_dispatch | Qualification and producer dispatch | required | Every declared reference lot; actual acceptance and final mass must be recorded. | grading and sorting; reference fuelwood and independent non-fuel destinations at declared handoffs | per 1 kg reference flow |
| shared_assets | Shared access and equipment attribution | conditional | Actual roads, landing, scales or tools serve multiple nodes, sources, outputs or periods. | one shared service ledger with consuming-node and period attribution | per 1 kg reference flow |

### Process: Non-conifer stand and coppice management (`stand_management`)

Node `stand_management` must complete the direct-release coverage reconciliation in `cp_direct_release_stand_management`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

managed biological production parent; standing-stock handoff to harvesting, not final dispatch. Actual managed stand, woodlot or trees-outside-forest inputs are attributable; do not recreate management already included in an upstream source dataset.

#### Inputs

##### Product flows

###### Non-conifer planting stock used for establishment (`planting_stock`)

Record actual species/provenance stock net mass and surviving establishment event; seedlings are absent where an existing stool is retained.

- Selected flow: Non-conifer planting stock used for establishment
- Flow property / unit: Mass / kg
- Amount rule: Record actual species/provenance stock net mass and surviving establishment event; seedlings are absent where an existing stool is retained.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual stand-management fertilizers and amendments (`management_materials`)

One umbrella for actual fertilizer or amendment products: preserve each product and nutrient assay; zero, one or several concrete exchanges follow records, never a guessed nitrogen dose.

- Selected flow: Actual stand-management fertilizers and amendments
- Flow property / unit: Mass / kg
- Amount rule: One umbrella for actual fertilizer or amendment products: preserve each product and nutrient assay; zero, one or several concrete exchanges follow records, never a guessed nitrogen dose.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual energy carriers for stand management (`management_energy`)

One energy umbrella; retain metered electricity, actual fuel and machinery task records with their original units and supported conversions. Do not add carrier use already inside a purchased service.

- Selected flow: Actual energy carriers for stand management
- Flow property / unit: Energy / MJ
- Amount rule: One energy umbrella; retain metered electricity, actual fuel and machinery task records with their original units and supported conversions. Do not add carrier use already inside a purchased service.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Irrigation water supplied to the managed stand (`irrigation_water`)

Include only water crossing as an actual supplied product, identified by supplier and supply gate. Direct abstraction from nature belongs to direct_water_abstraction, not this product card; rainfall is excluded.

- Selected flow: Irrigation water supplied to the managed stand
- Flow property / unit: Mass / kg
- Amount rule: Measure actual supplied irrigation water product by supplier/gate; direct environmental abstraction is separately recorded and never bound to this product identity.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Occupation of the actual non-conifer growing site (`land_occupation`)

Measure area and attributable occupation time by stand/stool cohort and land-use class; disclose land-use transformation and initial carbon stocks separately, never presume zero change.

- Selected flow: Occupation of the actual non-conifer growing site
- Flow property / unit: Area-time / m2a
- Amount rule: Measure area and attributable occupation time by stand/stool cohort and land-use class; disclose land-use transformation and initial carbon stocks separately, never presume zero change.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: m2a
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual direct water abstraction for non-conifer stand management (`direct_water_abstraction`)

Only actual direct surface-water or groundwater abstraction crosses this environmental resource boundary. Declare the exact water source/compartment and verification for concrete exchanges. Purchased water and rainfall are not this exchange; irrigation output use cannot count the same withdrawal twice.

- Selected flow: Actual direct water abstraction for non-conifer stand management
- Flow property / unit: Mass / kg
- Amount rule: Measure actual withdrawn water by source and meter; keep supply/withdrawal ownership and actual water balance separate from supplied irrigation_water.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or water-use factor
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Managed non-conifer standing biomass available for harvest (`standing_stock_handoff`)

Measured stock/harvest-ready cohort handoff, not a fixed one-kilogram removal. It is an internal interface carrying management burdens; do not add it as a second natural-resource removal exchange. Retained stools and foliage remain in the stock ledger.

- Selected flow: Managed non-conifer standing biomass available for harvest
- Flow property / unit: Mass / kg
- Amount rule: Measured stock/harvest-ready cohort handoff, not a fixed one-kilogram removal. It is an internal interface carrying management burdens; do not add it as a second natural-resource removal exchange. Retained stools and foliage remain in the stock ledger.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_management
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

### Process: Harvest and resource removal (`harvest_removal`)

Node `harvest_removal` must complete the direct-release coverage reconciliation in `cp_direct_release_harvest_removal`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

source-to-collected harvest and resource-removal responsibility; stump-side material handoff. The foreground actually removes standing/dead wood, stems, stumps or roots; source-ledger ownership excludes purchased already-removed wood and duplicate residue removal.

#### Inputs

##### Product flows

###### Managed non-conifer standing stock received by harvesting (`managed_stock_feed`)

Match actual managed standing_stock_handoff to the receiving harvest event and source cohort, retaining wet mass, moisture, bark, species and attributed management burdens. This product interface and wood_resource_removed are mutually exclusive representations for the same woody portion; it is not a second purchase of nature and not a fixed final reference quantity.

- Selected flow: Managed non-conifer standing stock received by harvesting
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual wet standing-stock input assigned to the matched harvest event and management handoff; preserve the physical removal ledger without duplicating environmental resource exchange ownership.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_harvest
- Sources: fao-woodfuel-planting; fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not a fixed feed or yield ceiling
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual energy carriers for harvesting and extraction (`harvest_energy`)

One actual-energy umbrella for manual/mechanical felling, stump-side sizing and extraction up to the next handoff; human labour is a task record, not presumed fossil fuel.

- Selected flow: Actual energy carriers for harvesting and extraction
- Flow property / unit: Energy / MJ
- Amount rule: One actual-energy umbrella for manual/mechanical felling, stump-side sizing and extraction up to the next handoff; human labour is a task record, not presumed fossil fuel.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_harvest
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Actual non-conifer wood resource removed from nature (`wood_resource_removed`)

Report actual dry woody resource removed by source, plant part and carbon basis using paired moisture and dry-matter records only where no already-attributed technosphere standing input represents that woody portion. Do not record this exchange for material represented by managed_stock_feed. Retain the physical removal and carbon/stock ledger in either case; representation does not erase real removal.

- Selected flow: Actual non-conifer wood resource removed from nature
- Flow property / unit: Dry mass / kg
- Amount rule: Measure actual dry natural woody removal only where that portion has no already-attributed managed_stock_feed or other technosphere standing input; keep one exchange owner and a physical removal ledger.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_harvest
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Collected non-conifer raw wood for fuel preparation (`harvested_raw_wood`)

Weigh actual collected wood and bark at stump/collection handoff, recording species, form and water; this internal feed is not fixed to final reference quantity. Match extraction distance and destination.

- Selected flow: Collected non-conifer raw wood for fuel preparation
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual collected wood and bark at stump/collection handoff, recording species, form and water; this internal feed is not fixed to final reference quantity. Match extraction distance and destination.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_harvest
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Independent industrial-use wood co-product at harvest handoff (`industrial_wood_coproduct`)

Measure actual saw/veneer/pole/pulp/panel or other industrial-use wood independently from fuelwood and declare each product handoff. This umbrella expands to actual identities, not an assumed timber co-product.

- Selected flow: Independent industrial-use wood co-product at harvest handoff
- Flow property / unit: Mass / kg
- Amount rule: Measure actual saw/veneer/pole/pulp/panel or other industrial-use wood independently from fuelwood and declare each product handoff. This umbrella expands to actual identities, not an assumed timber co-product.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_harvest
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Harvest rejects transferred to waste treatment (`removed_harvest_rejects`)

Record only removed rejects crossing a waste-treatment handoff with actual composition and destination. Slash retained on site is stock/residue disclosure, not this waste exchange and not sold fuelwood.

- Selected flow: Harvest rejects transferred to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Record only removed rejects crossing a waste-treatment handoff with actual composition and destination. Slash retained on site is stock/residue disclosure, not this waste exchange and not sold fuelwood.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_harvest
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Carbon dioxide from actual fossil-fuel harvesting combustion to air (`harvest_fossil_co2`)

Calculate only fossil CO2 from documented on-site fuel combustion and a declared compatible factor; exclude upstream fuel production, fuelwood use-stage combustion and alleged avoided emissions. This identity is air, unspecified: known specific air subcompartments require separately verified actual identities, never automatic relabelling.

- Selected flow: Carbon dioxide (fossil), air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: fixed
- Amount rule: Calculate only fossil CO2 from documented on-site fuel combustion and a declared compatible factor; exclude upstream fuel production, fuelwood use-stage combustion and alleged avoided emissions.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_at_harvest_removal`
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Collection of previously generated woody residues (`residue_collection`)

Node `residue_collection` must complete the direct-release coverage reconciliation in `cp_direct_release_residue_collection`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

alternative source-collection responsibility; collected raw fuelwood feed handoff. Actual non-conifer branch, pruning or harvest-residue source is collected rather than freshly felled; retain its original burden handoff.

#### Inputs

##### Product flows

###### Previously generated untreated non-conifer woody residues (`prior_woody_residue`)

Record pruning/branch/harvest source, original generation event, transfer status, moisture and upstream burden ownership. Do not treat standing biomass and already-removed material as the same source for the same portion.

- Selected flow: Previously generated untreated non-conifer woody residues
- Flow property / unit: Mass / kg
- Amount rule: Record pruning/branch/harvest source, original generation event, transfer status, moisture and upstream burden ownership. Do not treat standing biomass and already-removed material as the same source for the same portion.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residue
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual energy carriers for woody-residue collection (`collection_energy`)

One umbrella for actual gathering, local movement and loading energy; retain actual transport loads and distances and avoid repeating the original harvest energy.

- Selected flow: Actual energy carriers for woody-residue collection
- Flow property / unit: Energy / MJ
- Amount rule: One umbrella for actual gathering, local movement and loading energy; retain actual transport loads and distances and avoid repeating the original harvest energy.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residue
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected untreated non-conifer wood for fuel preparation (`collected_residue_wood`)

Measure the accepted raw woody portion at collection handoff; exclude soil/stones/foreign material from wood mass, record bark, and preserve rejected mass separately.

- Selected flow: Collected untreated non-conifer wood for fuel preparation
- Flow property / unit: Mass / kg
- Amount rule: Measure the accepted raw woody portion at collection handoff; exclude soil/stones/foreign material from wood mass, record bark, and preserve rejected mass separately.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residue
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Collection rejects leaving for actual waste treatment (`residue_collection_rejects`)

Record only waste actually transferred off-site, identifying contamination and treatment; uncollected nutrient-rich foliage and retained residues are not a purchased waste exchange.

- Selected flow: Collection rejects leaving for actual waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Record only waste actually transferred off-site, identifying contamination and treatment; uncollected nutrient-rich foliage and retained residues are not a purchased waste exchange.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residue
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

### Process: Roadside sizing and primary conditioning (`primary_preparation`)

Node `primary_preparation` must complete the direct-release coverage reconciliation in `cp_direct_release_primary_preparation`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

primary conditioning parent; sized raw wood handoff, not manufactured chips or kiln-dried retail product. Actual bucking, splitting, cleaning or air seasoning occurs before the producer gate; omit operations not performed.

#### Inputs

##### Product flows

###### Raw non-conifer wood entering sizing or air seasoning (`preparation_feed`)

Match actual gross feed mass, moisture, bark and species to harvested_raw_wood or collected_residue_wood; store paired lot records and do not force feed to one kilogram.

- Selected flow: Raw non-conifer wood entering sizing or air seasoning
- Flow property / unit: Mass / kg
- Amount rule: Match actual gross feed mass, moisture, bark and species to harvested_raw_wood or collected_residue_wood; store paired lot records and do not force feed to one kilogram.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_preparation
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual energy carriers for sizing and primary conditioning (`preparation_energy`)

One actual-energy umbrella for the performed cutting/splitting/handling operation; natural air seasoning does not imply purchased heat. Preserve original energy units and factor evidence.

- Selected flow: Actual energy carriers for sizing and primary conditioning
- Flow property / unit: Energy / MJ
- Amount rule: One actual-energy umbrella for the performed cutting/splitting/handling operation; natural air seasoning does not imply purchased heat. Preserve original energy units and factor evidence.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_preparation
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sized or air-seasoned raw non-conifer fuelwood feed (`prepared_raw_wood`)

Measured prepared raw wood at qualification handoff; preserve actual moisture and form. It remains raw logs/billets/sticks, not manufactured wood chips or standardized dried retail fuel. Do not fix this intermediate transfer to the reference.

- Selected flow: Sized or air-seasoned raw non-conifer fuelwood feed
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared raw wood at qualification handoff; preserve actual moisture and form. It remains raw logs/billets/sticks, not manufactured wood chips or standardized dried retail fuel. Do not fix this intermediate transfer to the reference.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_preparation
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Preparation rejects transferred to waste treatment (`preparation_rejects`)

Record waste sawdust, bark or contaminated wood only where actual destination is waste treatment; useful recovered product pieces instead enter the accepted or non-fuel output ledger.

- Selected flow: Preparation rejects transferred to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Record waste sawdust, bark or contaminated wood only where actual destination is waste treatment; useful recovered product pieces instead enter the accepted or non-fuel output ledger.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_preparation
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Water vapour released to air during pre-gate air seasoning (`seasoning_water_vapour`)

Use paired wet/dry-matter stock measurements to separate evaporated water from dry wood deterioration; account for rain/rewetting separately. No universal drying-loss ratio. This water-vapour identity is air, unspecified; a known specific air subcompartment needs its own verified actual identity, not this generic compartment.

- Selected flow: Water vapour, air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: fixed
- Amount rule: Use paired wet/dry-matter stock measurements to separate evaporated water from dry wood deterioration; account for rain/rewetting separately. No universal drying-loss ratio.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_preparation
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Particulate matter below 2.5 micrometres released to air during sizing (`preparation_pm25`)

Include only an evidenced PM2.5 air release at the actual equipment boundary; source-specific measurement/factor must match capture controls. Bulk sawdust is not automatically PM2.5; other reported pollutants require their own substance and medium records. This PM2.5 identity is air, unspecified; known specific air subcompartments and other particle-size fractions require independently verified actual identities.

- Selected flow: Particles (PM2.5), air unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: fixed
- Amount rule: Include only an evidenced PM2.5 air release at the actual equipment boundary; source-specific measurement/factor must match capture controls. Bulk sawdust is not automatically PM2.5; other reported pollutants require their own substance and medium records.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_emissions_at_primary_preparation`
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Qualification and producer dispatch (`qualification_dispatch`)

Node `qualification_dispatch` must complete the direct-release coverage reconciliation in `cp_direct_release_qualification_dispatch`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

grading and sorting; reference fuelwood and independent non-fuel destinations at declared handoffs. Every declared reference lot; actual acceptance and final mass must be recorded.

#### Inputs

##### Product flows

###### Raw non-conifer wood entering producer qualification (`dispatch_intake`)

Record actual incoming wood from the selected source/preparation handoff, including inventory carryover; it is measured intake, not a fixed final net mass. If preparation is absent, source wood enters directly.

- Selected flow: Raw non-conifer wood entering producer qualification
- Flow property / unit: Mass / kg
- Amount rule: Record actual incoming wood from the selected source/preparation handoff, including inventory carryover; it is measured intake, not a fixed final net mass. If preparation is absent, source wood enters directly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: unsd-nonconifer-fuelwood
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual energy carriers for producer qualification and loading (`dispatch_energy`)

One umbrella for actual weighing/sorting/loading energy at the producer gate; exclude customer delivery and avoid carrier burdens already in bought handling services.

- Selected flow: Actual energy carriers for producer qualification and loading
- Flow property / unit: Energy / MJ
- Amount rule: One umbrella for actual weighing/sorting/loading energy at the producer gate; exclude customer delivery and avoid carrier burdens already in bought handling services.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw non-conifer fuel wood at producer roadside or collection-point handover (`nonconifer_fuelwood_handover`)

Actual non-conifer untreated raw wood is accepted for fuel at producer roadside/collection point. Only this output is final reference; declared bark and water are included but packaging and foreign matter are excluded. Actual form and gate must fit its concrete identity.

- Selected flow: Raw non-conifer fuel wood at producer roadside or collection-point handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: unsd-nonconifer-fuelwood
- Range: Final normalized reference definition
  - Range role: qa_guardrail
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Independent non-fuel wood product at producer sorting handoff (`nonfuel_destination`)

Measure actual material diverted to an independent industrial or other non-fuel product, record its identity and destination, and reconcile it with source-stage co-products without double counting the same wood.

- Selected flow: Independent non-fuel wood product at producer sorting handoff
- Flow property / unit: Mass / kg
- Amount rule: Measure actual material diverted to an independent industrial or other non-fuel product, record its identity and destination, and reconcile it with source-stage co-products without double counting the same wood.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: fao-woodfuel-planting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Producer qualification rejects transferred as waste (`dispatch_rejects`)

Record off-spec or contaminated material crossing an actual waste handoff. A downgraded but sold qualified fuelwood lot is its own qualified product lot, not automatically waste.

- Selected flow: Producer qualification rejects transferred as waste
- Flow property / unit: Mass / kg
- Amount rule: Record off-spec or contaminated material crossing an actual waste handoff. A downgraded but sold qualified fuelwood lot is its own qualified product lot, not automatically waste.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: unsd-nonconifer-fuelwood
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

### Process: Shared access and equipment attribution (`shared_assets`)

Node `shared_assets` must complete the direct-release coverage reconciliation in `cp_direct_release_shared_assets`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

one shared service ledger with consuming-node and period attribution. Actual roads, landing, scales or tools serve multiple nodes, sources, outputs or periods.

#### Inputs

##### Product flows

###### Attributed shared forest access and landing service (`shared_access_service`)

Measure actual service use by stand/source, consuming node, reporting period and intended output; assign road/landing burdens once through one ledger. Expand actual underlying exchanges only when not embedded in service supply.

- Selected flow: Attributed shared forest access and landing service
- Flow property / unit: Service / h
- Amount rule: Measure actual service use by stand/source, consuming node, reporting period and intended output; assign road/landing burdens once through one ledger. Expand actual underlying exchanges only when not embedded in service supply.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_shared
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Attributed shared equipment and measurement service (`shared_equipment_service`)

Record actual saw/splitter/tractor/scales service time and useful-life/repair boundary; allocate by evidenced use across harvesting, collection, preparation and dispatch, excluding fuel already charged to node energy rows.

- Selected flow: Attributed shared equipment and measurement service
- Flow property / unit: Service / h
- Amount rule: Record actual saw/splitter/tractor/scales service time and useful-life/repair boundary; allocate by evidenced use across harvesting, collection, preparation and dispatch, excluding fuel already charged to node energy rows.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_shared
- Sources: fao-fuelwood-harvesting
- Range: Replaceable provisional broad QA screen, not an allowed ceiling or yield
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide_first | all intended outputs | Separate measured operations and output destinations before allocation. Enumerate fuelwood, each industrial-use timber product, and other independent non-fuel products; grade downgrading alone does not create waste. Where common burdens remain, use a declared evidenced physical causal relation; absent one, report the economic allocation data and sensitivity rather than silently picking a ratio. No automatic substitution credit. | fao-woodfuel-planting |
| unique_handoff | all wood portions | Count one woody portion at one external intended-product handoff. Internal stock/preparation/dispatch transfers cancel within the combined package; source-stage timber and dispatch-stage diversion must be reconciled, not duplicated. Off-site wastes carry the actual treatment boundary. | fao-fuelwood-harvesting |
| temporal_source | stand and stool cohorts | Attribute establishment and management across actual harvest events and intended outputs using a disclosed cohort/period ledger; distinguish retained-stool regrowth, replanting and stump/root termination. Link carryover stock and losses to their actual period; never apply a universal rotation or re-charge establishment for every coppice harvest. | fao-woodfuel-planting; fao-dry-forest-silviculture |
| single_shared_owner | shared access and equipment | Keep one asset/service total, list consumers and periods, and allocate measured use once; reconcile totals before assigning each output share. Node energy excludes service-embedded energy. A purchased already-removed wood dataset and foreground standing removal cannot own the same burden. | fao-fuelwood-harvesting |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_management | stand_management | management and stock handoff | foreground events and raw measurements | stand/species; source map; stool cohort; establishment/replant/termination event; planted stock; actual material/product assay; water; energy carrier and original unit; area/time; stock and harvest-ready mass; consuming output/period | Use stand registers, invoices, meter readings and paired stock surveys; separate initial seedling from each retained-stool harvest. | carrier-native; kg; m2a | each event/lot or service period | actual reporting period and attributable historical source phases | stand/source and rotation phase | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| cp_harvest | harvest_removal | harvest/remove wood and co-products | foreground events and raw measurements | event/source/species/plant part; management owner; removed wet/dry mass; retained biomass; fuel and equipment; extraction leg and load; all product/waste destinations; source carbon/land-use evidence | Match authorized source map and harvesting/extraction records to paired scales/moisture samples and product dispatch/waste manifests. | kg; carrier-native; km | each event/lot or service period | actual reporting period and attributable historical source phases | harvest event and next handoff | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| cp_residue | residue_collection | already-generated raw woody-source collection | foreground events and raw measurements | original generation event; species/part; product versus waste status; transfer and upstream burden owner; wet/dry/foreign mass; actual collection energy/load/distance; retained versus collected material | Use source supplier and generation/transfer records plus collection scales and sampling; preserve original burden handoff instead of assuming free residue. | kg; carrier-native; km | each event/lot or service period | actual reporting period and attributable historical source phases | collection event and source | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| cp_preparation | primary_preparation | raw-to-sized/air-seasoned wood handoff | foreground events and raw measurements | matched feed/output lots; species/form/bark; gross/net/wet/dry mass; moisture basis; rewetting; residue/waste; stock period; energy carrier/unit; measured solid/stacked volume and density pairing | Take paired incoming/outgoing scales and moisture/dry-matter samples; reconcile stock and rejects before interpreting water evaporation. | kg; m3; carrier-native | each event/lot or service period | actual reporting period and attributable historical source phases | conditioning lot and stock interval | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| cp_dispatch | qualification_dispatch | final reference, independent products and rejects | foreground events and raw measurements | lot/species/origin/form/gate; accepted grade; fuel destination; gross; tare; foreign matter; net as-received mass; wet/dry moisture; bark; accepted/rejected/diverted destinations; stock inflow/outflow; energy | Weigh actual accepted wood using calibrated scales; reconcile incoming wood, accepted fuelwood, independently diverted non-fuel products, waste and stock changes; exclude packaging. | kg; carrier-native | each event/lot or service period | actual reporting period and attributable historical source phases | accepted producer dispatch lot | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| cp_shared | shared_assets | shared assets, service and period attribution | foreground events and raw measurements | asset/service id; construction/maintenance/repair boundary; actual useful life; period; consumers; task hours; area/load/distance where relevant; allocation key; embedded energy; charge owner | Use asset registers and service/task meters; reconcile a single total ledger across every consuming node and period and exclude charges embedded elsewhere. | h; underlying-native units | each event/lot or service period | actual reporting period and attributable historical source phases | asset service period and all consumers | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| `cp_emissions_at_harvest_removal` | `harvest_removal` | actual substance-specific direct releases | foreground events and raw measurements | equipment/source; substance/species/particle size; air/water/soil medium; direct boundary; measured release or factor and original activity unit; factor provenance and uncertainty; capture controls; assigned process/period; event_id; transfer_id; counterparty_process_id | Prefer measured site releases; otherwise apply an explicitly cited factor matched to the actual carrier, equipment and control. Record other actual pollutants separately; do not assign bulk dust to PM2.5.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; activity-native | each event/lot or service period | actual reporting period and attributable historical source phases | actual emitting operation and period | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| `cp_emissions_at_primary_preparation` | `primary_preparation` | actual substance-specific direct releases | foreground events and raw measurements | equipment/source; substance/species/particle size; air/water/soil medium; direct boundary; measured release or factor and original activity unit; factor provenance and uncertainty; capture controls; assigned process/period; event_id; transfer_id; counterparty_process_id | Prefer measured site releases; otherwise apply an explicitly cited factor matched to the actual carrier, equipment and control. Record other actual pollutants separately; do not assign bulk dust to PM2.5.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; activity-native | each event/lot or service period | actual reporting period and attributable historical source phases | actual emitting operation and period | per 1 kg reference flow | calibration/source handoff evidence, matched ledgers, factor provenance and uncertainty |
| `cp_direct_release_stand_management` | `stand_management` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_harvest_removal` | `harvest_removal` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_residue_collection` | `residue_collection` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_primary_preparation` | `primary_preparation` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_qualification_dispatch` | `qualification_dispatch` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_shared_assets` | `shared_assets` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

Each aggregation rule explicitly reports per 1 kg reference flow; it is not the raw collection denominator. Preserve raw stand area/time, wet/dry batch mass, source stock, carrier energy, transport load/distance and service-hours with their original units. Reconcile those records, allocate legitimate shared output/period burdens, convert the actual measurement unit once, then divide by actual accepted net dispatch mass once. Keep intermediate feed and water-loss amounts measured; returning to raw data must reproduce each normalized value. Range denominators remain the stated physical screening basis; do not treat a screen as a yield, default quantity or exclusion threshold.

The source ledger links standing_stock_handoff to managed_stock_feed by actual cohort, harvest event and burden owner. For each woody portion, resolve whether the exchange is an attributed technosphere standing input or actual natural resource removal; never both. Physical dry biomass removed, retained stock and carbon-change observations remain required even when the input representation is technosphere. Bought previously removed residue/feed instead follows its original upstream handoff.

The provisional Range magnitudes are subjective broad screening buckets, not measured or statistical FAO thresholds: 10 kg for planting/materials, 100 kg for measured raw feed/rejects/water vapour, and 1,000 kg for shared standing-stock or independent-product pools deliberately leave room for a source pool much larger than one final lot. The 1,000 MJ energy, 10,000 kg water, 10,000 m2a occupation and 100 h service screens likewise accommodate variable source periods, low-output operations and attribution before net dispatch. The 100 kg fossil CO2 and 1 kg PM2.5 screens are broad release prompts, not fuel factors or physical emission limits. Zero lower values permit actually absent conditional operations. These author-selected orders of magnitude claim no yield, density, efficiency, area or pollutant distribution; the final 1..1 kg range alone defines normalized reference quantity. Preserve accurate measurements outside every screen, review their actual raw basis/attribution/uncertainty, and replace provisional screens with reviewed local evidence rather than deleting exchanges or clipping values.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_net | nonconifer_fuelwood_handover | Derive accepted net as-received wood from actual gross mass minus measured tare and foreign matter; retain declared bark and water. Use only actually accepted qualified fuelwood as final denominator. | cp_dispatch | accepted net wood mass | unsd-nonconifer-fuelwood |
| normalize_actual_records | all inventory rows | Report attributable actual exchange quantity per 1 kg reference flow after actual-unit conversion and output/period attribution; divide by matched accepted net dispatch mass exactly once. Retain original basis and intermediate transfers. No fixed internal yield. | cp_management; cp_harvest; cp_residue; cp_preparation; cp_dispatch; cp_shared; cp_emissions_at_harvest_removal; cp_emissions_at_primary_preparation | reference-basis exchanges | fao-fuelwood-harvesting |
| matched_wood_balance | wood transfers and seasoning | For each matched lot reconcile wet wood, water, dry wood, bark, foreign matter, retained stock, rejects and product destinations. Apply measured wet-basis or dry-basis moisture definitions consistently; use site/species/form/moisture-matched volume bridges only. Separate evaporation from dry-matter deterioration and rain rewetting. | cp_harvest; cp_residue; cp_preparation; cp_dispatch | reconciled stock and material/water ledger | fao-fuelwood-harvesting |
| direct_releases | actual direct releases | Use the declared measured release or explicitly documented carrier/equipment/control-specific factor and its exact activity unit; identify substance and receiving medium. No downstream fuelwood-combustion emission is attributed here. Carbon stock reporting is not a negative emission without an evidenced inventory method. | cp_emissions_at_harvest_removal; cp_emissions_at_primary_preparation; cp_management; cp_harvest | direct release and separate carbon-stock records | fao-fuelwood-harvesting |
| `calculate_direct_release_ledger` | `stand_management`; `harvest_removal`; `residue_collection`; `primary_preparation`; `qualification_dispatch`; `shared_assets` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_stand_management; cp_direct_release_harvest_removal; cp_direct_release_residue_collection; cp_direct_release_primary_preparation; cp_direct_release_qualification_dispatch; cp_direct_release_shared_assets; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_source | all wood | Verify actual non-conifer botanical identity or disclosed mix, source part, untreated state and fuel/non-fuel destination; unknown species cannot be replaced by universal hardwood. | Source maps; supplier/source declarations; lot sampling |
| matched_quantity | all quantity bridges | Match scale calibration, moisture sample, stock dates, volume convention and conversion evidence to the same species/form/source and lot; quantify uncertainty and missing coverage. | cp_harvest; cp_residue; cp_preparation; cp_dispatch |
| period_completeness | managed/source and shared burdens | Cover actual establishment, each relevant harvest/regrowth, termination/replanting, reporting period and opening/closing stock; disclose observations rather than invented rotation/yield. | cp_management; cp_shared |
| quantitative_evidence | all Range cards | Provisional reasoned screens are replaceable QA prompts, not maximum allowed use, loss/yield coefficients or publication-grade defaults. Retain evidence for real values and explain observations outside a screen without deleting a real flow. | Raw records; actual factors; paired balances; uncertainty |
| concrete_identity | all exchange identities | Resolve actual carrier/service/product/waste/substance UUID with compatible property/unit/medium before final dataset exchange; a semantic umbrella is not one guessed exchange. Missing identity is disclosed, not manufactured. | Actual exchange detail and support verification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | nonconifer_fuelwood_handover | Verify actual final producer gate and qualifiers, same card/reference identity and exactly 1 kg normalized net as-received qualified fuelwood. Packaging, soil and stones are not reference wood. | unsd-nonconifer-fuelwood |
| validate_source_choice | stand_management; harvest_removal; residue_collection | Resolve actual source and parent/delta evidence for every portion; do not count harvest and already-generated collection twice. Coppice cannot silently continue after removing its stool/root. Declare omitted processes and no-use evidence. | fao-woodfuel-planting; fao-dry-forest-silviculture |
| validate_balance | all wood and water | Reconcile actual incoming, intended products, waste, retained material, stock carryover, moisture and dry-matter changes; not all pre-gate mass is fixed to 1 kg. Volume/LHV conversions without matched evidence are gaps, not default constants. | fao-fuelwood-harvesting |
| validate_attribution | all outputs and periods | Require a complete intended-output set and every handoff, explicit attribution priority, stand/stool cohort ledger, shared consumers/service periods and unique burden owner; report sensitivity and prevent duplicate establishment/asset/energy charges. | fao-woodfuel-planting; fao-fuelwood-harvesting |
| validate_exchange | every inventory card | Expand actual zero/one/multiple umbrella exchanges from records, verify concrete UUID/property/unit and emitting substance/medium, preserve original physical bases and exactly-once conversion and accepted-mass normalization. Actual pollutants not covered by the two displayed air cards still require substance-specific records and evidence. | fao-fuelwood-harvesting |
| `validate_direct_release_coverage` | `stand_management`; `harvest_removal`; `residue_collection`; `primary_preparation`; `qualification_dispatch`; `shared_assets` | For every activated node, reconcile its activity list against cp_direct_release_stand_management; cp_direct_release_harvest_removal; cp_direct_release_residue_collection; cp_direct_release_primary_preparation; cp_direct_release_qualification_dispatch; cp_direct_release_shared_assets: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package for raw non-conifer fuelwood at declared producer gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Source/management/collection/preparation and producer dispatch inventory for actual qualified raw non-conifer fuelwood, with explicit boundary and attribution |
| excluded_use | Conifer or industrial-log substitution; unspecified average hardwood; woodfuel combustion, charcoal/pellet/chip manufacture; heat reference; universal dried retail fuel or delivered-customer gate |
| required_metadata | Species/mix; provenance/source part; stool/seedling/selection or residue source; raw form/bark/moisture; source and producer gate; period/stock/cycle; carrier/service suppliers; product/waste handoffs; allocation and land/carbon ownership |
| required_quality_disclosure | Actual coverage and measured/calculated values; density/water/dry-matter/LHV evidence where used; emission-factor boundary; provisional ranges; omitted/no-use operations; unresolved identity/support and quantitative gaps; period/shared-burden sensitivity |
| update_trigger | Source or species mix, management/harvest/conditioning technology, producer gate, reference quality, supplier, attribution, factor or measured performance changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-nonconifer-fuelwood | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03132 | Non-conifer raw fuelwood forms and classification boundary |
| fao-woodfuel-planting | official_guidance | https://www.fao.org/4/AC125E/ac125e03.htm | Site/species-specific woodlots, coppice/stand management, trees outside forest, residue and multi-output source context; no universal quantities adopted |
| fao-fuelwood-harvesting | handbook | https://www.fao.org/4/x5328e/x5328e04.htm | Removal/extraction, cutting/splitting, roadside measurement, drying/storage and variable raw-wood handling; charcoal quantities not adopted |
| fao-dry-forest-silviculture | official_guidance | https://www.fao.org/4/w4442e/w4442e0b.htm | Coppice/selection/reserved-tree regeneration differences and actual source/period requirements |
