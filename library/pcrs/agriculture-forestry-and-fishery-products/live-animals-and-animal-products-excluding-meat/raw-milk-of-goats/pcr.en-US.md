---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-goats
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw milk of goats

## 1. Scope and Applicability

This rule covers unprocessed goat milk accepted at the producing dairy farm gate, either warm after first farm conditioning or cooled by that farm. It covers managed lactating goats and replacements, feed and water, enteric and manure pathways, milking capture, first straining and quality acceptance, and conditional farm cooling. Grazing and housed management are alternative implementations of the same herd node: record grazed feed and pasture manure for the former; delivered feed and collected manure for the latter; mixed systems report both without duplicating animal-days. Exclude independent collection/cooling centres, post-gate transport, pasteurization, standardization, and consumer packaging. Do not silently substitute sheep, cow or buffalo milk.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-goats` |
| classification_refs | CPC 3.0 `02292` |
| covered_products | Warm raw goat milk and farm-chilled raw goat milk transferred at the producing farm gate |
| excluded_products | Other species' milk; processed milk; milk from independent collection or cooling centres |
| representative_product | As-collected accepted unprocessed goat milk |
| production_route | Managed goat herd → separate milking capture → first farm conditioning → optional farm cooling; grazing, housed or mixed herd management documented |
| market_state | Unprocessed liquid milk, warm or farm-chilled, at producing farm handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted raw goat milk at the producing farm gate |
| How much | 1 kg as-collected accepted milk |
| How well | Goat species, raw/unprocessed state, temperature, fat/protein or solids, rejection and sampling basis declared |
| How long or cycle | Defined reporting period spanning lactation and replacement phases; disclose herd-period attribution |
| reference_flow_link | Accepted warm output `warm_milk` or accepted chilled output `chilled_milk`, never both for the same milk lot |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw milk of goats at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | goat species; farm identifier; lactation and replacement period; herd route; accepted and rejected mass; warm or farm-chilled state; milk temperature; fat/protein or solids; transfer gate |

The broad warm-or-chilled reference has no verified single flow UUID. The chilled-specific identity applies only to `chilled_milk`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_mass` | reference milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventories to measured accepted milk; subtract rejected or lost milk once. |
| `milk_quality` | accepted milk | measured fat/protein or solids | reported concentration basis | Retain the sampled composition and temperature with the exact lot or period; do not silently standardize milk mass. |
| `period_link` | herd and milk | Mass and time | kg, days | Link animal-days, feed, replacement and manure records to the milk reporting period before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Goats already in or entering the managed herd, with purchased replacement animals and feed explicitly identified |
| starting_condition_role | Foreground herd production beginning at recorded herd entry and feed purchase/grazing boundary |
| product_classification_scope | Raw goat milk only; live-goat and independently transferred manure outputs retain distinct identities |
| recursive_input_rule | A same-category purchased raw goat milk input needs an upstream dataset and separate mass balance, never a second copy of this foreground milk output. |
| upstream_dataset_requirement | Supply verified upstream datasets for purchased replacements, feed, utilities and other purchased inputs; no duplicate replacement-goat burden when a live-goat PCR dataset already carries it. |
| disclosure | Farm gate, grazing/housed share, herd and lactation period, feed origin, manure destinations, milk temperature and rejects, shared equipment and output attribution |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate` | all routes | End at producing farm transfer of accepted raw milk; independent collection/cooling and later processing are excluded. | `fao-small-ruminant-2016` |
| `separate_capture` | milking | Milk removal is its own measured handoff from managed herd to raw collected milk; do not book milking services again in herd inventory. | `fao-small-ruminant-2016` |
| `conditional_cooling` | cooling | Farm cooling applies only to milk actually cooled before gate; warm milk bypasses this node. | `fao-small-ruminant-2016` |
| `route_delta` | herd | Grazing/housed/mixed modes change feed source, manure location and energy or housing records; animal-days remain one herd ledger. | `fao-small-ruminant-2016` |
| `phase_boundary` | herd | Record lactation, dry/replacement and culling events by period; carry multi-period burdens to outputs once. | `fao-small-ruminant-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | Managed goat herd | required | Lactating and replacement goats under farm management | Biological production of milk potential; feed, water, animal and manure responsibility | animal-days and accepted milk period |
| `milking` | Milking capture | required | Each accepted or rejected milking lot | Independent removal from herd and collected-liquid handoff | gross captured milk kg |
| `conditioning` | First farm milk conditioning | required | Straining, first quality test and acceptance at producing farm | Raw collected to accepted warm state and rejects | accepted warm milk kg |
| `cooling` | Farm milk cooling | conditional | Producing farm cools milk before gate | Warm accepted to stabilized chilled state | chilled accepted milk kg |

The herd node's intended milk potential transfers once to milking; measured gross milk is recorded at milking, not also as a separate sale. Grazed biomass and housed feed are mutually resolved by site records. Kids/culls and usable exported manure are independently transferred co-products only when documented, whereas residual manure and rejected milk remain waste or internal handling, not invented sales.

### Process: Managed goat herd (`herd`)

#### Inputs

##### Product flows

###### Feed, forage and grazed biomass (`feed`)

Record purchased feed and actual grazed biomass by dry matter and origin; distinguish purchased input from farm-grown feed already inside this foreground boundary.

- Selected flow: Goat feed and forage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Feed ledger plus measured or documented grazing intake, assigned by animal-days.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd`
- Range: Provisional feed completeness screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per kg accepted milk; replace with herd records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied herd water (`herd_water`)

Record drinking and managed cleaning water crossing the herd boundary; direct rainfall is not this Product input.

- Selected flow: Supplied herd water
- Flow property / unit: Mass / kg
- Amount rule: Meter or delivery record allocated to herd use, excluding milking and conditioning meters.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd`
- Range: Provisional herd water completeness screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per kg accepted milk; replace with meters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased replacement goats (`replacements`)

Include only animals entering the dairy herd from outside; use a verified upstream live-goat burden once.

- Selected flow: Purchased replacement goats
- Flow property / unit: Mass / kg live weight
- Amount rule: Recorded entering live mass assigned across actual productive periods.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk over attributed periods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd`
- Range: Provisional replacement screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg live weight
  - Basis: per kg accepted milk; replace with herd register
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independently transferred kids and culled goats (`live_goats`)

Count only documented animal handovers; retained replacements are internal transfers, not sold outputs.

- Selected flow: Live goat kids and culled goats
- Flow property / unit: Mass / kg live weight
- Amount rule: Weighed or sampled transfer mass by animal class and handover date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd`
- Range: Provisional live-animal transfer screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg live weight
  - Basis: per kg accepted milk; replace with handover records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently exported usable manure (`manure_export`)

Count only manure with a documented useful recipient; manure remaining on pasture or handled as waste is not this co-product.

- Selected flow: Usable goat manure for independent transfer
- Flow property / unit: Mass / kg wet mass
- Amount rule: Weighed export mass and moisture by recipient and date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Range: Provisional exported-manure screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet mass
  - Basis: per kg accepted milk; replace with manure ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Residual manure requiring management (`manure_residue`)

Record collected or deposited manure not independently transferred as product, including pasture deposition by location.

- Selected flow: Residual goat manure
- Flow property / unit: Mass / kg wet mass
- Amount rule: Manure balance by housing, storage, land application and pasture deposition; avoid duplicate entry with exported manure.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional residual-manure screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet mass
  - Basis: per kg accepted milk; replace with balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane to air (`enteric_ch4`)

Calculate goat enteric methane from the evidenced herd method and animal-days, separately from manure methane.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Apply declared IPCC enteric method to goat classes and animal-days; disclose factor and climate assumptions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional enteric methane screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure biogenic methane to air (`manure_ch4`)

Calculate methane from manure actually assigned to each management pathway, including pasture deposition as relevant.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Apply declared IPCC manure pathway method, not the enteric result a second time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure methane screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o`)

Calculate direct manure-system nitrous oxide by goat nitrogen and pathway; indirect effects remain separately declared.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Use declared IPCC manure nitrogen and pathway method with documented volatilization and leaching boundary.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure nitrous oxide screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3`)

Record ammonia volatilization from the actual manure pathway only where the selected method provides it.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from collected manure nitrogen and selected volatilization factor; retain factor evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure ammonia screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Milking capture (`milking`)

#### Inputs

##### Product flows

###### Milking energy (`milking_energy`)

Include measured electricity or fuel used by milking equipment, not cooling energy.

- Selected flow: Milking equipment energy
- Flow property / unit: Energy / kWh equivalent
- Amount rule: Meter or fuel log assigned to milking shift.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg gross captured milk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking`
- Range: Provisional milking energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh equivalent
  - Basis: per kg gross captured milk; replace with meter data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross captured raw goat milk (`gross_milk`)

Milk removed from goats is measured before first straining and acceptance; this internal handoff is not a farm-gate sale.

- Selected flow: Gross captured raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Sum calibrated milking lot masses, including later rejected portions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking`
- Range: Gross-to-accepted mass reconciliation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with lot balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: First farm milk conditioning (`conditioning`)

#### Inputs

##### Product flows

###### First-conditioning water (`conditioning_water`)

Conditional umbrella: record only actual supplied water crossing for straining, equipment hygiene and first farm quality preparation, excluding herd drinking water. Resolve the concrete water function from site records.

- Selected flow: First-conditioning water
- Flow property / unit: Mass / kg
- Amount rule: Assigned meter or batch cleaning record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional first-conditioning water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per kg accepted milk; replace with meter data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted warm raw goat milk (`warm_milk`)

This milk is ready for farm-gate handover warm, or for the optional farm cooling node; a cooled lot must not also be sold warm.

- Selected flow: Accepted warm raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Gross milk less first-conditioning rejects; record warm gate transfers and cooling transfers separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Warm milk reconciliation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; warm-only or cooling-bound lot
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### First-conditioning rejected milk and residues (`conditioning_reject`)

Record rejected or spilled milk and retained straining residues with documented treatment; do not assign them accepted milk status.

- Selected flow: Rejected raw goat milk and straining residues
- Flow property / unit: Mass / kg
- Amount rule: Measure rejected milk mass and separately describe residue destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional conditioning reject screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with reject log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Farm milk cooling (`cooling`)

#### Inputs

##### Product flows

###### Farm cooling energy (`cooling_energy`)

Include only energy used by cooling equipment controlled by the producing farm before gate.

- Selected flow: Farm cooling energy
- Flow property / unit: Energy / kWh equivalent
- Amount rule: Cooling meter or assigned equipment log, with shared tank service allocated once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg farm-chilled accepted milk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Range: Provisional farm cooling energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh equivalent
  - Basis: per kg farm-chilled milk; replace with meter data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted chilled raw goat milk at farm gate (`chilled_milk`)

This is the cooled portion accepted and transferred at the producing farm gate, not milk cooled later by a collection centre.

- Selected flow: Raw goat milk, chilled, farm gate `2c001731-6bd5-4e32-b3cf-15f4c67d4038`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Measure cooled accepted mass at gate after any cooling reject or spill.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Range: Chilled milk reconciliation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted milk at farm gate; replace with gate log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cooling loss and rejected chilled milk (`cooling_reject`)

Record milk spilled or rejected during farm-controlled cooling; do not count it as accepted chilled output.

- Selected flow: Cooling loss and rejected raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Incoming warm milk less accepted chilled milk, with rejection reason and destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted milk at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional cooling reject screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with tank balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set` | herd and gate | Enumerate accepted milk, independently handed-over kids/culls and usable exported manure; residual manure, mortality and rejected milk are not automatically co-products. Record each handover once. | `fao-small-ruminant-2016` |
| `allocation_order` | multi-output herd | Prefer physical subdivision of independently metered activities. For inseparable herd burdens, document and apply a consistent biophysical allocation supported by herd energy/feed and milk/live-growth data; if not feasible, disclose and justify another reviewed allocation basis. Do not silently use zero burden for kids or exported manure. | `fao-small-ruminant-2016` |
| `period_attribution` | herd lifecycle | Index lactation, dry/replacement and culling phases; assign multi-period feed, replacement and capital burdens to actual service and output periods once, with no second allocation through live-goat upstream data. | `fao-small-ruminant-2016` |
| `shared_assets` | milking and cooling | Inventory shared buildings, water/energy meters, tanks and equipment by consuming node and service period; assign service share using measured use or documented capacity-time, never duplicate full asset burden. | `fao-small-ruminant-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | feed, water, replacement and animal outputs | herd and purchase ledger | goat class; head; animal-days; lactation phase; feed dry matter; grazing estimate; water; purchase and transfer live mass | farm logs, scale, invoices and meter | kg, head, days | daily and event | full milk reporting period and replacement phase | producing herd | Sum by goat class and phase; attribute once to milk and other outputs | signed ledger, scale and invoices |
| `cp_manure` | `herd` | exported and residual manure | manure pathway ledger | housing/pasture shares; collection; storage; export mass; moisture; recipient | weighbridge, farm log and pathway inspection | kg, days | daily and event | full reporting period | herd pasture and housing | Reconcile total manure by mutually exclusive destination | transfer receipts and pathway record |
| `cp_emissions` | `herd` | air emissions | method worksheet | animal-days; feed energy; nitrogen; manure pathway; factor; climate | calculate from `cp_herd` and `cp_manure` under declared IPCC method | kg | reporting period | same herd period | emitting farm | Sum distinct enteric and manure terms once | factor citation and calculation worksheet |
| `cp_milking` | `milking` | gross milk and energy | batch meter log | goat herd; milk kg; milking time; meter; rejected later | calibrated milk scale and energy meter | kg, kWh | each milking | full reporting period | producing farm | Sum gross lot mass and assigned milking energy | calibration, shift log |
| `cp_conditioning` | `conditioning` | accepted warm milk, rejects and water | lot quality and cleaning log | gross kg; straining loss; rejected kg; temperature; fat/protein or solids; water | scale, sample and water meter | kg, concentration | each lot | full reporting period | producing farm | Gross = accepted warm + reject/loss; transfer warm to gate or cooling once | test sheet and reject disposition |
| `cp_cooling` | `cooling` | chilled milk and energy | farm cooling log | incoming warm kg; outgoing chilled kg; temperature; energy; time; losses | calibrated tank and energy meter | kg, kWh, temperature | each chilled lot | only farm-controlled cooling periods | producing farm | Incoming warm = chilled accepted + cooling loss; never duplicate warm sale | tank log and transfer receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `milk_balance` | milk lots | Gross captured milk = accepted warm milk + first-conditioning rejects; accepted warm milk = warm gate transfer + cooling input; cooling input = chilled gate transfer + cooling loss. | `cp_milking`, `cp_conditioning`, `cp_cooling` | accepted reference kg and losses | `fao-small-ruminant-2016` |
| `herd_intensity` | herd inputs | Period assigned quantity / accepted milk kg after documented output and period attribution. | `cp_herd`, `cp_manure`, `cp_conditioning` | reference-normalized herd inventory | `fao-small-ruminant-2016` |
| `enteric_and_manure` | air emissions | Calculate distinct goat enteric methane and manure CH4/N2O under declared IPCC pathway and factor set; ammonia only with documented volatilization method. | `cp_emissions` | kg of each substance to air | `ipcc-livestock-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_route` | herd | Prove goat species, actual grazing/housed shares and goat-class animal-days; do not import cow or sheep coefficients without justified adaptation. | herd register, grazing and housing records |
| `mass_balance` | milk | Link accepted, rejected and cooling transfers by lot; retain temperature and quality sample basis. | signed batch balance and laboratory sheet |
| `phase_match` | allocation | Align animal, feed, manure, replacement and asset records with actual lactation and reporting period. | dated herd and asset ledger |
| `identity_gap` | UUIDs | Resolve broad reference and every unbound output/management identity before active/publication use. | flow detail and support-row confirmation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_check` | reference | Confirm goat raw milk is warm or cooled by the producing farm; reject independent-centre or processed milk as this reference. | `fao-small-ruminant-2016` |
| `route_check` | herd | Verify grazing, housed or mixed route against feed origin, manure location and animal-days; no route label without changed records. | `fao-small-ruminant-2016` |
| `balance_check` | milk | Require lot balance and distinct warm/chilled gate destinations; zero double booking across conditioning and cooling. | `fao-small-ruminant-2016` |
| `output_check` | co-products | Require documented live-goat and manure handovers, method precedence and shared-period attribution; no burden counted twice. | `fao-small-ruminant-2016` |
| `identity_check` | flow cards | Check exact substance, medium, property, state and gate for fixed UUIDs; expand unresolved inputs from actual records, and leave unverified identities unresolved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate goat milk data package; process and lifecyclemodel projections follow it. |
| downstream_use | Reviewed secondary or background dataset only after all identity and evidence gates close. |
| allowed_use | Unprocessed goat milk supply at a declared producing farm gate and temperature state. |
| excluded_use | Other species, pasteurized or standardized dairy, independent collection/cooling and post-gate transport. |
| required_metadata | Farm and herd; period; goat class; grazing/housed route; accepted and rejected milk; warm/chilled lot gate; composition; temperature; co-product destinations; allocation. |
| required_quality_disclosure | Measured versus calculated inputs, IPCC factors, missing meters, provisional ranges, unresolved UUIDs and shared-asset attribution. |
| update_trigger | Material route, milk state, herd management, factor, output mix, gate, identity or quality evidence changes. |

## 11. Data Sources

| source_id | type | citation | use |
| --- | --- | --- | --- |
| `cpc-3-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Explanatory Notes (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification product scope |
| `fao-small-ruminant-2016` | `official_guidance` | FAO LEAP, Greenhouse gas emissions and fossil energy use from small ruminant supply chains (2016), https://www.fao.org/partnerships/leap/resources/publications/ | Farm route, boundary, allocation and reporting questions |
| `fao-small-ruminant-dairy` | `official_guidance` | FAO, Small ruminants: dairy production and products, https://www.fao.org/dairy-production-products/dairy/small-ruminants/en | Goat milk production context |
| `ipcc-livestock-2019` | `method_factor` | IPCC, 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Enteric and manure emission calculation methods |
