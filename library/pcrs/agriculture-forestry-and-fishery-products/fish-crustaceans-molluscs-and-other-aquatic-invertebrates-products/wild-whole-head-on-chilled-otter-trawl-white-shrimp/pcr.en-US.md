---
pcr_id: pcr.wild-whole-head-on-chilled-otter-trawl-white-shrimp
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild whole head-on chilled otter-trawl white shrimp

## 1. Scope and Applicability

This PCR covers the selected US Gulf near-bottom otter-trawl channel for wild Litopenaeus setiferus delivered raw, whole, head-on, shell-on, chilled and never frozen to the first physical recipient of the harvester's product. It covers capture through recipient acceptance before heading, peeling, cooking or freezing. Other species, farmed shrimp and other gear, regions or product states require another declared methodology.

NOAA supports the species, region and near-bottom trawl route. The 2003 extension curriculum distinguishes ice and freezer boats and head-on and tail channels; its detailed washing examples largely concern headed shrimp. It establishes channel context, not universal whole-product practice. Actual whole-product washing, dip, icing and presentation must be documented; no heading operation, chemical prescription, dose, ice ratio, safety limit or trip duration is inferred. The sources do not establish current practice proportions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-whole-head-on-chilled-otter-trawl-white-shrimp |
| classification_refs | cpc:3.0:04361 |
| covered_products | Wild Litopenaeus setiferus; raw whole head-on shell-on never-frozen chilled selected lots |
| excluded_products | Other species; farmed; other gear/region; headed, peeled, cooked, frozen or live reference products |
| representative_product | US Gulf wild white shrimp, whole head-on shell-on, iced and accepted by the first harvester physical recipient |
| production_route | Near-bottom otter trawl → catch sorting → actual whole-product washing/dip if performed → icing/chilled holding → actual presentation if performed → first physical recipient acceptance |
| market_state | Raw whole head-on shell-on chilled never-frozen; actual grade and presentation declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted net whole head-on shell-on chilled wild white shrimp at first harvester physical recipient |
| How much | 1 kg accepted net shrimp mass; include head and native shell; exclude free ice/water and tare |
| How well | Actual species, grade, handling and acceptance specification; no default safety or quality threshold |
| How long or cycle | Declared trips, hauls, handling lots, holding and receipt times; reporting period also includes relevant nonproductive trips, cleaning, maintenance, asset service and replacement phases |
| reference_flow_link | `accepted_white_shrimp` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted whole head-on shell-on chilled wild white shrimp at first harvester physical recipient |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Litopenaeus setiferus; wild; US Gulf capture area; near-bottom otter trawl; trip/haul and accepted-lot ids; actual bycatch/turtle-device configuration; head-on; shell-on; raw; chilled; never-frozen; actual wash/dip state; holding time and temperature records; grade; presentation and tare; first recipient physical gate; reporting period; actual background/direct-operation ownership |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net shrimp mass A on a calibrated scale for the same identified lot; subtract measured tare and separately measured free ice/water. Head and native shell remain included. Use cp_receipt. |
| `native_units` | all inventory rows | Actual instance property | Actual native unit | Preserve each concrete exchange's verified property/unit. Convert count/volume to mass or electricity units only with traceable configuration, density or unit evidence. U_instance denotes the independently determined upper quantity bound for each actual instance, expressed in that instance's native unit; it is not a unit label or mixed-unit total. |
| `state_transfer` | product transfers | Mass | kg | Pair real upstream output and downstream input by transfer id, species, state and measured net mass; retain losses and wash/dip retention separately. Never force an internal feed to 1 kg or equal captured stock to accepted mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild white shrimp in the declared US Gulf capture context; vessel and gear readiness, trips/hauls, actual device configuration, previous stocks and supply/service ownership declared |
| starting_condition_role | Natural capture context, not a purchased farmed adult or burden-free harvested-product input |
| product_classification_scope | Selected semantic whole head-on chilled wild-white-shrimp route only; classification coverage is broader |
| recursive_input_rule | Purchased same-category shrimp must retain supplier/gate/state and complete upstream capture/handling dataset; do not restart it as wild stock or suppress previous burdens. Such mixed purchased/own-caught lots need explicit separate attribution and scope review. |
| upstream_dataset_requirement | Attach complete actual supplied fuel, electricity, ice, formulation, packaging, equipment and service datasets at their real gates. Keep foreground direct operation/emissions/assets separate only where not included in the purchased full service. |
| disclosure | Species and output destinations, capture area/gear/devices, trip and lot lineage, actual optional nodes, stock and loss records, periods/assets, data gaps, attribution and actual direct/background ownership |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `capture_context` | capture | Capture removes wild stock independently of sorting/conditioning. Record actual area, haul effort, seabed contact and turtle/bycatch devices and observed interactions. Devices do not imply zero bycatch, zero mortality or zero habitat effects. Keep ecological observations and omissions visible without inventing pollutant exchanges. | `noaa-white-shrimp` |
| `route_states` | process map | Capture hands unsorted whole catch to sorting. Sorting assigns species, selected grade, other sale destinations and discard fates. Actual whole washing/dip produces a declared prepared state before icing. If inactive, identify direct sorted-to-icing handoff. Icing produces the never-frozen chilled state. Actual presentation yields packaged/crated state; if inactive, chilled product goes directly to receipt. Only recipient accepted output is final. | `haby-miget-wild-shrimp-2003` |
| `operation_ownership` | all nodes | Record all actual fuel, power, water, cleaning, materials, direct combustion/leakage and treatment at the responsible node. A complete purchased operational service and its separately itemized fuel/emissions/assets are mutually exclusive. Purchased fuel/power production remains upstream. Onsite power is an internal transfer from recorded generation, not additional grid supply. | |
| `period_assets` | trips and infrastructure | Reporting coverage includes preparation, steaming, hauling, nonproductive/failed trips, handling/holding, cleaning, changeovers, maintenance, replacement and termination. Identify vessel/engine, gear/devices, cold hold, pumps, scales, handling equipment and crates as applicable, consuming nodes and periods; retain one owner for each event and asset service share. | |
| `recipient_gate` | receipt | Include actual unloading and acceptance needed for first physical receipt. Exclude recipient heading/freezing/processing, onward distribution and retail. Product acceptance, package handoff and waste fate are separate; receipt is not remote dispatch or retail delivery. | |
| `fate_boundary` | waste and direct discharge | Record actual retained waste with treatment/provider and full burden, or actual direct release with pollutant substance/basis/medium and water balance. Do not create elemental emissions from bulk biomass, assume disposal has no burden, or award ecological/substitution credit for discards. Returned live organisms retain recorded fate and mortality uncertainty. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Otter-trawl capture | required | US Gulf near-bottom otter trawl; trip and haul batches | Foreground otter-trawl capture; trip/haul/lot-indexed | per 1 kg reference flow |
| `sorting` | Catch sorting and destination assignment | required | Every haul; separate white shrimp, other species, grades and discard fates | Foreground catch sorting and destination assignment; trip/haul/lot-indexed | per 1 kg reference flow |
| `conditioning` | Actual whole-product washing or dip | conditional | Actual washing or dip of whole head-on shrimp; otherwise sorting hands directly to preservation | Foreground actual whole-product washing or dip; trip/haul/lot-indexed | per 1 kg reference flow |
| `preservation` | Icing and chilled holding | required | Iced never-frozen selected whole-product channel | Foreground icing and chilled holding; trip/haul/lot-indexed | per 1 kg reference flow |
| `packaging` | Actual box or crate presentation | conditional | Actual separate box/crate presentation; otherwise preservation hands directly to receipt | Foreground actual box or crate presentation; trip/haul/lot-indexed | per 1 kg reference flow |
| `receipt` | First harvester physical recipient handover | required | Physical receipt and acceptance before heading or freezing | Foreground first harvester physical recipient handover; trip/haul/lot-indexed | per 1 kg reference flow |

All rows use the same accepted-lot denominator after attribution. Applicable Section 8 collection obligations require one independently identified card for each actual exchange; each species/state/fate mass instance has its own U_row,i, and no common upper bound is imposed on their sum; U_row,i is the unresolved finite upper bound for each independently recorded concrete mass instance of that row (including each species/state/fate) and U_instance is an independently determined finite upper bound for one native-unit instance. These provisional intervals document missing range evidence; they are not measured defaults or strict QA limits. Each instance retains its own property, native unit, amount, factor and destination. Do not sum unlike materials, services, species or pollutants.

### Process: Otter-trawl capture (`capture`)

#### Inputs

##### Product flows

##### Waste flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

##### Elementary flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

#### Outputs

##### Product flows

###### Raw whole head-on wild white shrimp at deck sorting handoff (`caught_white_shrimp`)

Litopenaeus setiferus only, head and native shell retained. This is the measured unsorted catch transfer to sorting, not the final reference quantity.

- Selected flow: Raw whole head-on wild white shrimp at deck sorting handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Carbon dioxide from actual directly owned combustion to air (`capture_co2`)

Conditional actual combustion only, excluding CO2 already represented by full operational background services. Record fuel carbon basis, oxidation, fossil/biogenic distinction, factor source and engine activity; purchased fuel supply is not the direct emission.

- Selected flow: Carbon dioxide from actual directly owned combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Catch sorting and destination assignment (`sorting`)

#### Inputs

##### Product flows

###### Raw whole head-on wild white shrimp at deck sorting handoff (`sorting_white_shrimp`)

Pair the measured capture output and this input using one physical transfer id; preserve measured losses between handoffs.

- Selected flow: Raw whole head-on wild white shrimp at deck sorting handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

##### Elementary flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

#### Outputs

##### Product flows

###### Selected raw whole head-on wild white shrimp at conditioning or icing handoff (`sorted_white_shrimp`)

Assign accepted selected whole head-on shell-on lots to conditioning if active, otherwise directly to preservation; record grade and transfer id.

- Selected flow: Selected raw whole head-on wild white shrimp at conditioning or icing handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Carbon dioxide from actual directly owned combustion to air (`sorting_co2`)

Conditional actual combustion only, excluding CO2 already represented by full operational background services. Record fuel carbon basis, oxidation, fossil/biogenic distinction, factor source and engine activity; purchased fuel supply is not the direct emission.

- Selected flow: Carbon dioxide from actual directly owned combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Actual whole-product washing or dip (`conditioning`)

#### Inputs

##### Product flows

###### Selected raw whole head-on wild white shrimp at conditioning or icing handoff (`conditioning_feed`)

Only active actual whole-product washing/dip lots enter; no routine heading or tail-processing operation is inferred from guidance.

- Selected flow: Selected raw whole head-on wild white shrimp at conditioning or icing handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied wash or dip water by supplier and quality (`conditioning_supplied_water`)

Record supplied technosphere water independently of direct seawater abstraction. Identify actual source, water quality, supply treatment, unit and reuse; no industrial-water default.

- Selected flow: Actual supplied wash or dip water by supplier and quality
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

##### Elementary flows

###### Seawater directly abstracted for actual whole-product washing or dip (`conditioning_seawater`)

Use only for real direct abstraction from the marine environment; record salinity/source and pumping owner, never duplicate supplier water.

- Selected flow: Seawater directly abstracted for actual whole-product washing or dip `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Actually washed or dipped whole head-on wild white shrimp at icing handoff (`conditioned_white_shrimp`)

Keep head and native shell intact. Record actual wash/dip state and drained transfer mass to preservation, including retained solution only as actually measured.

- Selected flow: Actually washed or dipped whole head-on wild white shrimp at icing handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent wash or dip liquid sent to actual treatment (`conditioning_effluent`)

Conditional technosphere waste; record composition, water and chemical basis, destination and treatment owner. Direct discharge instead belongs under measured pollutant releases and a water balance, without duplicate treatment.

- Selected flow: Spent wash or dip liquid sent to actual treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Carbon dioxide from actual directly owned combustion to air (`conditioning_co2`)

Conditional actual combustion only, excluding CO2 already represented by full operational background services. Record fuel carbon basis, oxidation, fossil/biogenic distinction, factor source and engine activity; purchased fuel supply is not the direct emission.

- Selected flow: Carbon dioxide from actual directly owned combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Icing and chilled holding (`preservation`)

#### Inputs

##### Product flows

###### Whole head-on wild white shrimp received for icing by actual conditioning state (`preservation_feed`)

Input is sorted shrimp directly when conditioning is inactive, or actual conditioned shrimp when active. Pair to the real upstream output and preserve its measured amount.

- Selected flow: Whole head-on wild white shrimp received for icing by actual conditioning state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased ice for capture-fishery shrimp preservation (`supplied_ice`)

This card covers purchased ice supplied for onboard capture-fishery preservation and landing chilling only. Measure initial and replacement ice at these gates with supplier and production burden. Any later ice needed between landing and first physical receipt belongs to an independently verified actual collect_receipt_operations instance. Onsite ice production is separately owned operations, never a second purchased-ice burden.

- Selected flow: Purchased ice for capture-fishery shrimp preservation `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

##### Elementary flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

#### Outputs

##### Product flows

###### Iced never-frozen whole head-on wild white shrimp at presentation or receipt handoff (`chilled_white_shrimp`)

Declare holding time, actual temperature records, ice state and native shell. Handoff to packaging if active, otherwise directly to receipt. No default ice ratio, safe trip duration or quality threshold.

- Selected flow: Iced never-frozen whole head-on wild white shrimp at presentation or receipt handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Carbon dioxide from actual directly owned combustion to air (`preservation_co2`)

Conditional actual combustion only, excluding CO2 already represented by full operational background services. Record fuel carbon basis, oxidation, fossil/biogenic distinction, factor source and engine activity; purchased fuel supply is not the direct emission.

- Selected flow: Carbon dioxide from actual directly owned combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Actual box or crate presentation (`packaging`)

#### Inputs

##### Product flows

###### Iced never-frozen whole head-on wild white shrimp at presentation or receipt handoff (`packaging_feed`)

Use the actual preservation transfer, net of declared free ice/water and tare, not a second reference output.

- Selected flow: Iced never-frozen whole head-on wild white shrimp at presentation or receipt handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

##### Elementary flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

#### Outputs

##### Product flows

###### Presented iced never-frozen whole head-on wild white shrimp at recipient handoff (`presented_white_shrimp`)

Packaging changes presentation only; shrimp net mass remains separate from ice and package tare. Record actual package configuration and handover.

- Selected flow: Presented iced never-frozen whole head-on wild white shrimp at recipient handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Carbon dioxide from actual directly owned combustion to air (`packaging_co2`)

Conditional actual combustion only, excluding CO2 already represented by full operational background services. Record fuel carbon basis, oxidation, fossil/biogenic distinction, factor source and engine activity; purchased fuel supply is not the direct emission.

- Selected flow: Carbon dioxide from actual directly owned combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: First harvester physical recipient handover (`receipt`)

#### Inputs

##### Product flows

###### Whole head-on chilled wild white shrimp arriving at first harvester physical recipient (`receipt_feed`)

Use presented shrimp if packaging is active, otherwise direct preservation output; record lot transfer id and actual arrival state before any heading or freezing.

- Selected flow: Whole head-on chilled wild white shrimp arriving at first harvester physical recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

##### Elementary flows

No separate exchange is presumed; record an actual crossing only when evidenced and owned here.

#### Outputs

##### Product flows

###### Accepted whole head-on shell-on chilled wild white shrimp at first harvester physical recipient (`accepted_white_shrimp`)

Litopenaeus setiferus, US Gulf near-bottom otter trawl, raw never-frozen accepted lot. This is the only reference product output; head and native shell included, free ice/water and tare excluded.

- Selected flow: Accepted whole head-on shell-on chilled wild white shrimp at first harvester physical recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Range: Same-lot accepted-output normalization
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

###### Carbon dioxide from actual directly owned combustion to air (`receipt_co2`)

Conditional actual combustion only, excluding CO2 already represented by full operational background services. Record fuel carbon basis, oxidation, fossil/biogenic distinction, factor source and engine activity; purchased fuel supply is not the direct emission.

- Selected flow: Carbon dioxide from actual directly owned combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Range: Provisional unresolved range evidence; independently establish actual bound
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_row,i
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `direct_assignment` | all nodes | Subdivide independently measured haul, species, grade, handling lot and destination first. Directly assign dedicated conditioning, ice, packaging, receipt and treatment to their actual lots. Internal handoffs carry lineage, not a second allocated final product. | |
| `mixed_trip` | unresolved shared capture duty | For indivisible mixed-catch trip propulsion/gear duty, retain all intended sale products, including other shrimp species and retained bycatch, at their actual states and gates. After direct assignment, use observed sale-value shares at the same first-recipient transaction period for residual mixed-product capture burdens, because effort jointly obtains economically intended catch and unlike states are not physically equivalent. Record species/grade-specific net quantities and realized unit prices, aggregate value once, explain this causal choice and report mass-share sensitivity using comparable recorded whole-product bases. Missing prices, output sets or state conversions require review, not a default share. Waste/discards receive no sale-value share but their handling/treatment remains with the generating product system. | |
| `period_assignment` | reporting-period trip and fixed events | Assign each productive trip once; assign failed/nonproductive trips and period cleaning/maintenance to the declared fleet/gear output population of the same period before residual mixed-output allocation. Include all intended outputs of that population. Never divide nonproductive duty by zero or drop it; disclose the pooling boundary and sensitivity. | |
| `asset_assignment` | shared assets and services | Use actual metered consumption for shared energy/water; otherwise documented equipment operating hours or load-time for the consuming nodes and periods. Allocate capital/gear replacement by documented service consumption over actual lifetime with maintenance/replacement/termination evidence. Enumerate every consumer, reconcile shares to one supplied total and exclude shares already inside full services. Crates use documented completed uses and actual losses; no universal lifetime or reuse count. | |
| `single_denominator` | all rows | After attribution, divide each actual exchange by A, accepted net kg of the same final selected lot or explicitly matched reporting population. Do not allocate internal product transfers again or treat mixed catch, rejected biomass, ice, tare or headed/frozen destinations as reference output. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | Actual otter-trawl capture transfers, supplies, assets, waste and releases | calibrated measurement; log; supplier/service scope; factor record | reporting period; trip/haul/lot/transfer id; species/state/grade; supplier/gate; actual activity/configuration; native amount/unit; complete intended-output set; realized species/grade-specific transaction prices; comparable whole-product mass and attribution drivers; fuel carbon and pollutant substance/basis/medium; waste destination; measured free ice/water/tare; accepted net kg A; uncertainty; consumer/period shares; finite row/instance bound evidence | Weigh net biomass and separately record ice/water/tare with calibrated equipment; meter or reconcile supplies from opening/purchases/closing records; match actual otter-trawl capture event to its own node and physical transfer. For each release retain measurement or actual owned activity and compatible factor; for each service/asset retain inclusions and shared-consumer ledger. Retain actual absence/unknown, not assumed zero.  | kg for biomass and measured substances; native unit per other actual instance | each haul/lot/event; period reconciliation | complete declared trips and reporting periods, including nonproductive duty, cleaning/changeovers, stock carryover and asset phases | actual vessel, deck/hold and first-recipient consumers of this node | per 1 kg reference flow | calibration; original logs/invoices; lot/transfer matching; source/factor applicability; service scopes; share reconciliation; uncertainty and range-bound rationale |
| `cp_sorting` | `sorting` | Actual catch sorting and destination assignment transfers, supplies, assets, waste and releases | calibrated measurement; log; supplier/service scope; factor record | reporting period; trip/haul/lot/transfer id; species/state/grade; supplier/gate; actual activity/configuration; native amount/unit; complete intended-output set; realized species/grade-specific transaction prices; comparable whole-product mass and attribution drivers; fuel carbon and pollutant substance/basis/medium; waste destination; measured free ice/water/tare; accepted net kg A; uncertainty; consumer/period shares; finite row/instance bound evidence | Weigh net biomass and separately record ice/water/tare with calibrated equipment; meter or reconcile supplies from opening/purchases/closing records; match actual catch sorting and destination assignment event to its own node and physical transfer. For each release retain measurement or actual owned activity and compatible factor; for each service/asset retain inclusions and shared-consumer ledger. Retain actual absence/unknown, not assumed zero.  | kg for biomass and measured substances; native unit per other actual instance | each haul/lot/event; period reconciliation | complete declared trips and reporting periods, including nonproductive duty, cleaning/changeovers, stock carryover and asset phases | actual vessel, deck/hold and first-recipient consumers of this node | per 1 kg reference flow | calibration; original logs/invoices; lot/transfer matching; source/factor applicability; service scopes; share reconciliation; uncertainty and range-bound rationale |
| `cp_conditioning` | `conditioning` | Actual whole-product washing or dip transfers, supplies, assets, waste and releases | calibrated measurement; log; supplier/service scope; factor record | reporting period; trip/haul/lot/transfer id; species/state/grade; supplier/gate; actual activity/configuration; native amount/unit; complete intended-output set; realized species/grade-specific transaction prices; comparable whole-product mass and attribution drivers; fuel carbon and pollutant substance/basis/medium; waste destination; measured free ice/water/tare; accepted net kg A; uncertainty; consumer/period shares; finite row/instance bound evidence | Weigh net biomass and separately record ice/water/tare with calibrated equipment; meter or reconcile supplies from opening/purchases/closing records; match actual whole-product washing or dip event to its own node and physical transfer. For each release retain measurement or actual owned activity and compatible factor; for each service/asset retain inclusions and shared-consumer ledger. Retain actual absence/unknown, not assumed zero.  | kg for biomass and measured substances; native unit per other actual instance | each haul/lot/event; period reconciliation | complete declared trips and reporting periods, including nonproductive duty, cleaning/changeovers, stock carryover and asset phases | actual vessel, deck/hold and first-recipient consumers of this node | per 1 kg reference flow | calibration; original logs/invoices; lot/transfer matching; source/factor applicability; service scopes; share reconciliation; uncertainty and range-bound rationale |
| `cp_preservation` | `preservation` | Actual icing and chilled holding transfers, supplies, assets, waste and releases | calibrated measurement; log; supplier/service scope; factor record | reporting period; trip/haul/lot/transfer id; species/state/grade; supplier/gate; actual activity/configuration; native amount/unit; complete intended-output set; realized species/grade-specific transaction prices; comparable whole-product mass and attribution drivers; fuel carbon and pollutant substance/basis/medium; waste destination; measured free ice/water/tare; accepted net kg A; uncertainty; consumer/period shares; finite row/instance bound evidence | Weigh net biomass and separately record ice/water/tare with calibrated equipment; meter or reconcile supplies from opening/purchases/closing records; match actual icing and chilled holding event to its own node and physical transfer. For each release retain measurement or actual owned activity and compatible factor; for each service/asset retain inclusions and shared-consumer ledger. Retain actual absence/unknown, not assumed zero.  | kg for biomass and measured substances; native unit per other actual instance | each haul/lot/event; period reconciliation | complete declared trips and reporting periods, including nonproductive duty, cleaning/changeovers, stock carryover and asset phases | actual vessel, deck/hold and first-recipient consumers of this node | per 1 kg reference flow | calibration; original logs/invoices; lot/transfer matching; source/factor applicability; service scopes; share reconciliation; uncertainty and range-bound rationale |
| `cp_packaging` | `packaging` | Actual box or crate presentation transfers, supplies, assets, waste and releases | calibrated measurement; log; supplier/service scope; factor record | reporting period; trip/haul/lot/transfer id; species/state/grade; supplier/gate; actual activity/configuration; native amount/unit; complete intended-output set; realized species/grade-specific transaction prices; comparable whole-product mass and attribution drivers; fuel carbon and pollutant substance/basis/medium; waste destination; measured free ice/water/tare; accepted net kg A; uncertainty; consumer/period shares; finite row/instance bound evidence | Weigh net biomass and separately record ice/water/tare with calibrated equipment; meter or reconcile supplies from opening/purchases/closing records; match actual box or crate presentation event to its own node and physical transfer. For each release retain measurement or actual owned activity and compatible factor; for each service/asset retain inclusions and shared-consumer ledger. Retain actual absence/unknown, not assumed zero.  | kg for biomass and measured substances; native unit per other actual instance | each haul/lot/event; period reconciliation | complete declared trips and reporting periods, including nonproductive duty, cleaning/changeovers, stock carryover and asset phases | actual vessel, deck/hold and first-recipient consumers of this node | per 1 kg reference flow | calibration; original logs/invoices; lot/transfer matching; source/factor applicability; service scopes; share reconciliation; uncertainty and range-bound rationale |
| `cp_receipt` | `receipt` | Actual first harvester physical recipient handover transfers, supplies, assets, waste and releases | calibrated measurement; log; supplier/service scope; factor record | reporting period; trip/haul/lot/transfer id; species/state/grade; supplier/gate; actual activity/configuration; native amount/unit; complete intended-output set; realized species/grade-specific transaction prices; comparable whole-product mass and attribution drivers; fuel carbon and pollutant substance/basis/medium; waste destination; measured free ice/water/tare; accepted net kg A; uncertainty; consumer/period shares; finite row/instance bound evidence | Weigh net biomass and separately record ice/water/tare with calibrated equipment; meter or reconcile supplies from opening/purchases/closing records; match actual first harvester physical recipient handover event to its own node and physical transfer. For each release retain measurement or actual owned activity and compatible factor; for each service/asset retain inclusions and shared-consumer ledger. Retain actual absence/unknown, not assumed zero. Use calibrated recipient scale and lot acceptance record for A before heading/freezing. | kg for biomass and measured substances; native unit per other actual instance | each haul/lot/event; period reconciliation | complete declared trips and reporting periods, including nonproductive duty, cleaning/changeovers, stock carryover and asset phases | actual vessel, deck/hold and first-recipient consumers of this node | per 1 kg reference flow | calibration; original logs/invoices; lot/transfer matching; source/factor applicability; service scopes; share reconciliation; uncertainty and range-bound rationale |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_normalization` | all inventory rows | Divide the attributable measured exchange quantity by accepted net kg A of the same reference lot or explicitly matched population. Internal transfers retain their measured quantities; each native-unit instance is calculated independently. | attributable quantity; accepted net kg A; node-specific protocol; attribution ledger | exchange per 1 kg reference flow | |
| `acceptance_identity` | accepted_white_shrimp | A / A = 1 kg per 1 kg reference flow for the same accepted positive-mass lot; this is normalization, not a catch-yield equation. | accepted net kg A; cp_receipt | 1 kg accepted reference output | |
| `direct_release` | direct emissions | Use actual measured release or actual owned activity times a documented compatible factor. Retain fuel carbon/substance basis, source version, receiving medium and uncertainty; factor emissions are absent when the complete operational service already owns them. | node activity; measured release or compatible factor; ownership ledger | independent actual pollutant amount | |
| `balance_reconciliation` | product water and waste records | Reconcile per-species measured capture, retained products, live returns, dead discards, losses and recipient outcomes. Reconcile wash/dip water, solution retention, ice, meltwater and actual destinations separately; biomass is not required to equal accepted product plus pollutant mass. | transfer ids; species/state masses; water/ice/solution records; destination records | documented physical balances and uncertainty | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | all exchanges | Resolve each actual instance with verified flow/property/unit support, supplier/gate, species/state or pollutant substance/basis/medium before final exchange construction; collection scopes do not supply a universal UUID. | detail confirmation and foreground specifications |
| `period_quality` | trips and assets | Cover the declared representative reporting period, all included failed/nonproductive trips, holding, cleaning/changeover and replacement phases; reconcile opening/closing stocks and asset service consumption. | trip logs; receipts; stock ledger; asset register |
| `amount_quality` | every card | Record calibrated or traceable measurements, units, uncertainty and A. All 0..U_row,i or 0..U_instance ranges are provisional unresolved evidence placeholders with independently established finite actual bounds still required; they are not empirical intervals, hard acceptance defaults or replacement measurements. Final 1..1 is only same-lot normalization. | node protocols; bound rationale; calibration and checks |
| `source_quality` | route and amount evidence | Historical handling guidance is qualitative route context, especially for headed examples; actual whole-product practice and all quantities need current foreground records. No cited route source establishes fuel, ice, chemical, release or capital amounts. | declared source applicability and actual records |
| `coverage_quality` | direct ownership and outputs | List all intended products, waste fates, direct combustion and non-CO2 releases/leaks including actual conditional zero cases. Missing observations or factor coverage remain gaps, not assumed zero. | output-set ledger; service scopes; release inventory |
| `collect_capture_operations` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual otter-trawl capture fuels electricity materials and services by instance. Conditional zero, one or multiple actual supplier/equipment instances. Keep fuel and grid electricity supply upstream; full background operational services include their operational emissions and assets, which must not be added separately. Directly operated equipment owns fuel, emissions and asset shares here; onsite generated electricity is an internal transfer. Identify every native-unit instance and provider/gate; never sum incompatible quantities. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_assets` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual otter-trawl capture equipment gear and shared asset service shares. Conditional actual assets not already included in a purchased full service. Record vessel/engine/otter boards/nets and devices where owned here, or pumps/cold hold/scales/handling assets as applicable; resolve lifetime, replacement, maintenance, consuming nodes, operating hours and reporting periods. One asset share owner prevents duplicate capital burden. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_caught_other_retained` | `capture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other retained catch by actual species at deck sorting handoff. Record each retained species/state independently for sorting, including intended non-reference sale products; never relabel mixed shrimp as white shrimp. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_discarded_biomass` | `capture`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Discarded or lost catch biomass by species and fate. Record dead discarded/lost biomass and actual disposal fate independently by species; this conditional waste exchange applies only where the actual waste boundary is supported. Live returns, survival/mortality uncertainty and ecological observations remain separate fate records with actual modelling type requiring confirmation, not automatic waste treatment or pollutant exchanges. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_other_releases` | `capture`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual non-CO2 pollutant and leakage releases by substance basis and medium. Conditional zero, one or multiple actual direct emissions/leakages, excluding this node's separately listed CO2 and all full-service releases. Specify each combustion substance/species/particle size, refrigerant identity or measured discharged pollutant, amount basis and air/water/soil receiving medium; bulk biomass and wastewater are not automatic elemental pollutants. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_capture; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_other_retained` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other retained catch by actual species at deck sorting handoff. Each actual species/state transfer is distinct; mixed catch totals cannot establish the white-shrimp input. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_operations` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual catch sorting and destination assignment fuels electricity materials and services by instance. Conditional zero, one or multiple actual supplier/equipment instances. Keep fuel and grid electricity supply upstream; full background operational services include their operational emissions and assets, which must not be added separately. Directly operated equipment owns fuel, emissions and asset shares here; onsite generated electricity is an internal transfer. Identify every native-unit instance and provider/gate; never sum incompatible quantities. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_assets` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual catch sorting and destination assignment equipment gear and shared asset service shares. Conditional actual assets not already included in a purchased full service. Record vessel/engine/otter boards/nets and devices where owned here, or pumps/cold hold/scales/handling assets as applicable; resolve lifetime, replacement, maintenance, consuming nodes, operating hours and reporting periods. One asset share owner prevents duplicate capital burden. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_other_sale_outputs` | `sorting`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended catch sale products by species grade state and destination. Enumerate all other species and downgraded sale lots separately and record their recipient gate, own conditioning/preservation branch and attribution; heading or frozen branches are outside the reference product but keep shared trip burdens. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_rejects` | `sorting`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Sorting rejects and incidental debris by fate. Record actual unsaleable dead biomass/debris waste separately from downgraded sale products. Record live returns and uncertain survival separately as ecological fate observations; do not bind them to waste treatment merely because they are non-sale outputs. Confirm actual waste boundary/destination and burden owner. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_other_releases` | `sorting`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual non-CO2 pollutant and leakage releases by substance basis and medium. Conditional zero, one or multiple actual direct emissions/leakages, excluding this node's separately listed CO2 and all full-service releases. Specify each combustion substance/species/particle size, refrigerant identity or measured discharged pollutant, amount basis and air/water/soil receiving medium; bulk biomass and wastewater are not automatic elemental pollutants. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_sorting; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_conditioning_formulations` | `conditioning`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual dip or cleaning formulations by composition. Conditional actual zero, one or multiple formulation instances. Record trade formulation, constituent/active basis, supplier, batch and actual use; this PCR recommends no substance, dose or residue limit. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_conditioning` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_conditioning_operations` | `conditioning`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual whole-product washing or dip fuels electricity materials and services by instance. Conditional zero, one or multiple actual supplier/equipment instances. Keep fuel and grid electricity supply upstream; full background operational services include their operational emissions and assets, which must not be added separately. Directly operated equipment owns fuel, emissions and asset shares here; onsite generated electricity is an internal transfer. Identify every native-unit instance and provider/gate; never sum incompatible quantities. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_conditioning` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_conditioning_assets` | `conditioning`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual whole-product washing or dip equipment gear and shared asset service shares. Conditional actual assets not already included in a purchased full service. Record vessel/engine/otter boards/nets and devices where owned here, or pumps/cold hold/scales/handling assets as applicable; resolve lifetime, replacement, maintenance, consuming nodes, operating hours and reporting periods. One asset share owner prevents duplicate capital burden. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_conditioning` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_conditioning_losses` | `conditioning`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Whole-product conditioning rejects and solids by fate. Separate actual biomass rejects, dirt and solids from wastewater; no fabricated head or shell yield for this head-on route. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_conditioning` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_conditioning_other_releases` | `conditioning`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual non-CO2 pollutant and leakage releases by substance basis and medium. Conditional zero, one or multiple actual direct emissions/leakages, excluding this node's separately listed CO2 and all full-service releases. Specify each combustion substance/species/particle size, refrigerant identity or measured discharged pollutant, amount basis and air/water/soil receiving medium; bulk biomass and wastewater are not automatic elemental pollutants. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_conditioning; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_conditioning` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_preservation_operations` | `preservation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual icing and chilled holding fuels electricity materials and services by instance. Conditional zero, one or multiple actual supplier/equipment instances. Keep fuel and grid electricity supply upstream; full background operational services include their operational emissions and assets, which must not be added separately. Directly operated equipment owns fuel, emissions and asset shares here; onsite generated electricity is an internal transfer. Identify every native-unit instance and provider/gate; never sum incompatible quantities. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_preservation` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_preservation_assets` | `preservation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual icing and chilled holding equipment gear and shared asset service shares. Conditional actual assets not already included in a purchased full service. Record vessel/engine/otter boards/nets and devices where owned here, or pumps/cold hold/scales/handling assets as applicable; resolve lifetime, replacement, maintenance, consuming nodes, operating hours and reporting periods. One asset share owner prevents duplicate capital burden. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_preservation` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_preservation_losses` | `preservation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Chilled-storage rejects meltwater and residual ice by actual fate. This waste card covers only actual discarded biomass, meltwater or residual ice sent to a confirmed treatment/disposal provider, recorded separately by instance and fate. Directly discharged carrier water belongs in the water balance and its measured/modelled pollutants in collect_preservation_other_releases; reusable/resale ice or products are not automatically waste. Keep whole-biomass fates independent of water/pollutant records and exclude free ice/water from reference shrimp mass. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_preservation` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_preservation_other_releases` | `preservation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual non-CO2 pollutant and leakage releases by substance basis and medium. Conditional zero, one or multiple actual direct emissions/leakages, excluding this node's separately listed CO2 and all full-service releases. Specify each combustion substance/species/particle size, refrigerant identity or measured discharged pollutant, amount basis and air/water/soil receiving medium; bulk biomass and wastewater are not automatic elemental pollutants. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_preservation; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_preservation` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `packaging`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual boxes crates liners and labels by material and reuse status. Record each actual packaging component separately in its native unit, including single-use versus returnable state, tare, replacement, washing and return-loop ownership; no prescribed material. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_packaging` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_packaging_operations` | `packaging`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual box or crate presentation fuels electricity materials and services by instance. Conditional zero, one or multiple actual supplier/equipment instances. Keep fuel and grid electricity supply upstream; full background operational services include their operational emissions and assets, which must not be added separately. Directly operated equipment owns fuel, emissions and asset shares here; onsite generated electricity is an internal transfer. Identify every native-unit instance and provider/gate; never sum incompatible quantities. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_packaging` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_packaging_assets` | `packaging`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual box or crate presentation equipment gear and shared asset service shares. Conditional actual assets not already included in a purchased full service. Record vessel/engine/otter boards/nets and devices where owned here, or pumps/cold hold/scales/handling assets as applicable; resolve lifetime, replacement, maintenance, consuming nodes, operating hours and reporting periods. One asset share owner prevents duplicate capital burden. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_packaging` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_rejects` | `packaging`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual packaging rejects and end-of-use materials by destination. Keep returnable assets in the reuse ledger; record discarded packaging/liners and any damaged shrimp separately. Distribution is not part of this node. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_packaging` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_packaging_other_releases` | `packaging`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual non-CO2 pollutant and leakage releases by substance basis and medium. Conditional zero, one or multiple actual direct emissions/leakages, excluding this node's separately listed CO2 and all full-service releases. Specify each combustion substance/species/particle size, refrigerant identity or measured discharged pollutant, amount basis and air/water/soil receiving medium; bulk biomass and wastewater are not automatic elemental pollutants. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_packaging; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_packaging` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_operations` | `receipt`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual first harvester physical recipient handover fuels electricity materials and services by instance. Conditional zero, one or multiple actual supplier/equipment instances. Keep fuel and grid electricity supply upstream; full background operational services include their operational emissions and assets, which must not be added separately. Directly operated equipment owns fuel, emissions and asset shares here; onsite generated electricity is an internal transfer. Identify every native-unit instance and provider/gate; never sum incompatible quantities. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_assets` | `receipt`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual first harvester physical recipient handover equipment gear and shared asset service shares. Conditional actual assets not already included in a purchased full service. Record vessel/engine/otter boards/nets and devices where owned here, or pumps/cold hold/scales/handling assets as applicable; resolve lifetime, replacement, maintenance, consuming nodes, operating hours and reporting periods. One asset share owner prevents duplicate capital burden. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_other_sale` | `receipt`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recipient downgraded or redirected sale lots by species state and gate. Retain intended sale status and separate acceptance gate; heading/freezing destinations cannot enter the selected whole chilled reference denominator. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_rejects` | `receipt`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recipient unsaleable rejects and removed ice or water by fate. This waste card covers only actual unsaleable biomass or removed ice/water sent to a confirmed treatment/disposal provider, independently recorded by fate and next owner. Returned, reusable or resale products are not automatically waste and remain traceable in product/return ledgers without disappearing from trip accounting. Directly discharged carrier water belongs in the water balance and its measured/modelled pollutants in collect_receipt_other_releases; whole-biomass fates remain independent. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_row,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_other_releases` | `receipt`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual non-CO2 pollutant and leakage releases by substance basis and medium. Conditional zero, one or multiple actual direct emissions/leakages, excluding this node's separately listed CO2 and all full-service releases. Specify each combustion substance/species/particle size, refrigerant identity or measured discharged pollutant, amount basis and air/water/soil receiving medium; bulk biomass and wastewater are not automatic elemental pollutants. <br> - Flow property / unit: Actual instance property / native unit of each actual instance <br> - Amount rule: Collect attributable physical quantity using cp_receipt; retain actual transfer and destination records. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved range evidence; independently establish actual bound <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit of each actual instance <br> - Basis: per 1 kg reference flow; independent actual native-unit instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_validation` | accepted_white_shrimp | Verify species, wild US Gulf near-bottom otter-trawl route, whole head-on shell-on raw chilled never-frozen accepted state and first-recipient physical gate; A is positive and excludes measured free ice/water and tare. Reject other species/states as reference denominator. | |
| `handoff_validation` | process map and transfers | Verify actual optional-node states and transfer ids. Each real transfer has one output/input pairing at measured mass; only accepted_white_shrimp is normalized final output. Unknown washing/dip/presentation state requires review, not an inactive default. | |
| `mixed_output_validation` | capture sorting and receipt | Reconcile all species/grade/state destinations, intended sale outputs, live returns, rejects and discards. Check direct assignment, observed-value residual mixed-trip shares and comparable mass-share sensitivity; no duplicate final gates or waste sale allocation. | |
| `period_shared_validation` | operations assets and periods | Check all productive/nonproductive trip coverage, event ownership, consumer/period shares, actual lifetime/replacement evidence, and capital/service exclusions. Shares reconcile to one total before same-lot normalization. | |
| `release_validation` | each direct-operation node | Verify direct fuel and CO2 plus actual non-CO2 combustion/leak/discharge coverage for capture, sorting, conditioning, preservation, packaging and receipt when present. Separate CO2 from other releases; confirm pollutant identity/basis/medium, measured/factor evidence and no full-service duplicate. Onsite electricity is not additional grid demand. | |
| `evidence_validation` | all amounts and bindings | Check node-specific collection links, actual native units and uncertainty, independently supported instance bounds, current projection and bilingual alignment. Provisional symbolic ranges and unresolved identities cannot certify empirical quantities or final UUID readiness; unresolved final reference product blocks active/publication. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground capture-to-first-physical-recipient accepted-product data package |
| downstream_use | secondary_dataset; background_dataset after declared review and concrete exchange resolution |
| allowed_use | Declared US Gulf near-bottom otter-trawl Litopenaeus setiferus whole head-on shell-on chilled never-frozen channel with actual trip/lot and recipient gate |
| excluded_use | Other species, farming, other gear/regions, live/headed/peeled/cooked/frozen references, retail delivery, legal/safety or zero-ecological-impact claims |
| required_metadata | PCR/version; species; region/gear/devices; all trip/haul/lot ids; reporting period; actual handling and optional states; grade; holding conditions; acceptance net mass; tare/ice; recipients; suppliers/services; assets and native units; attribution |
| required_quality_disclosure | Sampling/calibration; representativeness; failed-trip coverage; bycatch/discard fate and ecological limitations; supplier scope; factor/identity gaps; range evidence limits; shared capital/period/output allocation and sensitivity |
| update_trigger | Species/route/state/gate, handling configuration, provider/equipment, reporting coverage, asset service, bycatch/destination, price/attribution or identity/factor evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `noaa-white-shrimp` | official_guidance | NOAA Fisheries, White Shrimp, https://www.fisheries.noaa.gov/species/white-shrimp | Species/region and near-bottom trawl context; device and bycatch/habitat observations, not amount factors or legal prescriptions |
| `haby-miget-wild-shrimp-2003` | extension_guidance | Haby and Miget, Texas Cooperative Extension / Texas A&M Sea Grant, Wild-Harvested Shrimp Technical Assistance Curriculum, December 2003, physical pp.55,65–68 (printed pp.50,60–63), https://www2.lsuagcenter.com/seafood/pdfs/TAAWildShrimp.pdf | Distinction of ice/freezer and head-on/tail channels; headed-product examples delimit applicability; no transferred dose, ice ratio, safety or trip threshold |
