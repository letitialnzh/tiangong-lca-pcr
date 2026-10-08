---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-sheep
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw milk of sheep

## 1. Scope and Applicability

This PCR covers unprocessed ovine milk from a dairy sheep herd at the actual producing-farm handover. Warm raw and on-farm chilled raw milk are alternative final states, with exactly one selected per lot. Exclude heat-treated, formulated, independently skimmed or partly skimmed milk, collection-centre processing and downstream dairy products. The CPC low-fat exclusion is not a universal measured-fat cut-off for naturally variable unprocessed milk. Record breed, herd, lactation phase, temperature, first conditioning and cooling status. Sources: `un-cpc-3-2025`, `fao-small-ruminant-dairy`, `fao-leap-small-ruminants-2016`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-sheep |
| classification_refs | CPC 3.0 02291 Raw milk of sheep |
| covered_products | Unprocessed raw sheep milk at producing-farm handover, warm or chilled on farm. |
| excluded_products | Pasteurized, heat-treated, formulated, independently skimmed or partly skimmed milk; downstream dairy products. |
| representative_product | 1 kg measured raw sheep milk at actual producing-farm gate. |
| production_route | Managed dairy ewe biological production, independent milking/collection, optional first straining/filtration, optional on-farm chilling, then one final handover. Pasture and housed/concentrate management are evidence-specific alternatives of the same managed herd parent. |
| market_state | Raw liquid sheep milk, warm or chilled at producing-farm gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Raw liquid sheep milk from the producing dairy herd at actual farm handover. |
| How much | 1 kg measured accepted milk; retain measured volume and density if converting. |
| How well | Unheated, unformulated, unseparated; disclose temperature and first filtration/chilling. |
| How long or cycle | Milking batch and linked ewe lactation, breeding and replacement periods. |
| reference_flow_link | `warm_final_milk` or `chilled_final_milk`, never both for one lot. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw sheep milk at producing-farm handover, warm or chilled; broad UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep species and dairy breed; herd/farm; milking batch; warm/chilled state; actual temperature; first filtration/chilling; actual producer gate; lactation period; mass or volume-density method |

The confirmed chilled farm-gate Product UUID is not a broad warm-or-chilled reference identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `milk_mass` | Final raw milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted mass at producing-farm gate; record density and temperature for volume conversion. |
| `milk_state` | Warm/chilled route | Mass and temperature | kg; °C | Preserve actual state; never infer chilled identity from a generic raw-milk name. |
| `feed_basis` | Ewe feed/forage | As-fed or dry basis | kg | State feed moisture and pasture-intake method before aggregation. |
| `energy_basis` | Milking/chilling energy | Carrier-specific property | supplier unit | Preserve carrier, unit and documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dairy ewe herd with documented replacement stock, feed/forage, water, milking services and any operated conditioning/chilling equipment. |
| starting_condition_role | Biological production starting point and purchased input/service provenance. |
| product_classification_scope | CPC 3.0 02291 raw sheep milk; lambs, culls, wool and independently transferred manure are distinct products where actually sold. |
| recursive_input_rule | Purchased raw sheep milk from another farm carries upstream burden once; internal milk transfers link to producing nodes and are not re-imported as external input. |
| upstream_dataset_requirement | Link purchased feed, replacement stock, water, energy, filter media and services to source-specific upstream data; disclose missing inputs. |
| disclosure | Declare farm/herd/breed, pasture or housed period, lactation and replacement, lamb suckling/retained milk, milking/filter/chilling route, final state/gate, manure fate, co-outputs and shared facilities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_final_state` | Final lot | Choose exactly one warm or chilled final producing-farm milk state; intermediate transfers are not additional final sold milk. | `un-cpc-3-2025` |
| `milking_capture` | Ewe milk | Separate milking from herd biological production because collection establishes measured saleable milk versus spill/reject before conditioning. | `fao-small-ruminant-dairy` |
| `first_conditioning` | Optional straining | Include only actually operated first filtration with warm collected input, prepared raw output, material input and rejects; no heat treatment. | `fao-small-ruminant-dairy` |
| `farm_chilling` | Optional cooling | Include only actual farm cooling, recording warm input, energy, chilled raw output, losses and final temperature. | `fao-small-ruminant-dairy` |
| `pasture_housed_delta` | Alternative herd regimes | Both retain managed ewe production; pasture changes grazed-feed measurement and manure placement, while housed/concentrate management changes feed sourcing, housing water and manure storage. Choose evidenced categories and calculation per flock-period, splitting documented mixed periods. | `fao-small-ruminant-dairy` |
| `period_shared` | Herd and milk nodes | Link breeding, lactation, dry and replacement periods and shared parlour/tank/pump services to beneficiary output batches once. | `fao-leap-small-ruminants-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ewe_herd` | Dairy ewe herd | `required` | Always for milk-producing sheep. | Managed breeding, lactation and dry-period biological production. | per 1 kg final raw sheep milk |
| `milking` | Milking and raw collection | `required` | Actual collection of raw milk. | Independent milk harvest and hygienic first handover. | per 1 kg final raw sheep milk |
| `primary_conditioning` | First straining or filtration | `conditional` | Only when first on-farm filtration is operated. | Raw collected milk to prepared raw milk, not heat treatment. | per 1 kg final raw sheep milk |
| `farm_chilling` | On-farm raw-milk chilling | `conditional` | Only for actual chilled final route. | Usable warm state to stabilized chilled raw state. | per 1 kg final raw sheep milk |
| `farm_handover` | Producing-farm milk handover | `required` | One warm or chilled final gate per lot. | Accepted final milk and losses at actual producing farm. | per 1 kg final raw sheep milk |

### Process: Dairy ewe herd (`ewe_herd`)

#### Inputs

##### Product flows

###### Ewe feed and forage (`herd_feed`)

Record actual grazed, harvested and purchased feed by origin and basis.

- Selected flow: Ewe feed/forage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Calculate delivered plus opening minus closing stock, with separately evidenced pasture intake.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_herd_inputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Ewe drinking and service water (`herd_water`)

Actual drinking and service uses are split from foreground records; group deferred.

- Selected flow: Ewe-herd water by actual use
- Flow property / unit: Mass / kg
- Amount rule: Meter water assigned to ewe herd and period.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_herd_inputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Biological milk transferred to milking (`milk_to_milking`)

This internal herd output is measured by the matching milking lot and is not final sold milk.

- Selected flow: Internal warm sheep milk; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Assign collected milk mass to the ewe period once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_milking_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Independently sold lambs (`sold_lambs`)

Only actual lamb handovers are co-products; record live mass and count.

- Selected flow: Live lambs; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure lamb mass/count at their own handover.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_herd_outputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Independently sold culled ewes (`culled_ewes`)

Separate sold living ewes from mortality.

- Selected flow: Live culled ewes; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure live mass/count at separate transfer.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_herd_outputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Sold manure product (`sold_manure`)

Only intentionally transferred manure with product handover evidence.

- Selected flow: Sheep manure product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh manure at independent sale/transfer.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_herd_outputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

###### Unsold manure (`unsold_manure`)

Manure not sold remains residue/waste by fate; do not duplicate sold fraction.

- Selected flow: Sheep manure residue/waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh/reconcile manure and disposal destination.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_herd_outputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Ewe mortality (`ewe_mortality`)

Record dead ewes separately from independently sold live culls and document their disposal route.

- Selected flow: Dead ewe biological waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Count mortalities and calculate mass from observed class-specific weights or weigh removals.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_herd_outputs`
- Range: Provisional mortality screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Enteric biogenic methane to air (`enteric_ch4`)

Use the ewe enteric pathway and air receiving medium, not a factor from the UUID.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from observed ewe class/feed and documented enteric method.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-livestock-2019`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Manure biogenic methane to air (`manure_ch4`)

Identify manure storage/treatment pathway separately from enteric methane.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from observed manure system and documented method.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-livestock-2019`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Manure nitrous oxide to air (`manure_n2o`)

Identify specific manure nitrogen pathway and air medium.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from observed nitrogen/system and documented method tier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-livestock-2019`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Manure ammonia to air (`manure_nh3`)

Use independent NH3 measurement or separately sourced factor, not IPCC CH4/N2O factor.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Record measured NH3 for actual manure/housing pathway.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manure_records`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
### Process: Milking and raw collection (`milking`)

#### Inputs

##### Product flows

###### Biological ewe milk entering collection (`milk_at_udder`)

Internal herd milk crosses into collection once, measured at this milking lot.

- Selected flow: Warm raw sheep milk before collection; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure milk from lactating ewes, including retained lamb milk disclosure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_milking_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Milking hygiene process water (`milking_water`)

Teat and equipment cleaning water is distinct from ewe drinking water.

- Selected flow: Milking process water
- Flow property / unit: Mass / kg
- Amount rule: Meter milking-cleaning water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_milking_services`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Milking pump energy (`milking_energy`)

Record actual energy carrier and assigned service period.

- Selected flow: Milking energy carriers
- Flow property / unit: Mass / kg
- Amount rule: Meter/invoice energy attributable to milking.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_milking_services`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: MJ/kg milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected warm raw milk (`warm_collected_milk`)

This usable milk is before optional filtration/chilling or warm final gate.

- Selected flow: Warm collected raw sheep milk; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure hygienically accepted warm milk.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_milking_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

###### Milking rejects and spills (`milking_rejects`)

Separate rejected milk from saleable collected milk.

- Selected flow: Rejected sheep milk waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile input versus accepted milk and disposal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_milking_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Milking cleaning wastewater (`milking_wastewater`)

Track cleaning effluent and its destination, separate from milk rejects.

- Selected flow: Milking wastewater; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile discharge with supplied cleaning water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_milking_services`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Elementary flows

### Process: First straining or filtration (`primary_conditioning`)

#### Inputs

##### Product flows

###### Warm milk entering first filtration (`conditioning_milk`)

Collected warm milk enters one bounded non-thermal filtering step.

- Selected flow: Warm raw sheep milk for filtration; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure transferred warm milk mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Filter material (`filter_media`)

Use only the actual single-use media; reusable equipment is shared service.

- Selected flow: Filter medium by actual material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh media issued per lot.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warm raw milk (`conditioned_warm_milk`)

First filtered milk remains unheated/raw and transfers to chilling or handover.

- Selected flow: Filtered warm raw sheep milk; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure net prepared milk mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

###### Filter residue and milk rejects (`conditioning_rejects`)

Record solids/media and retained milk loss by actual disposal route.

- Selected flow: Filter residue/milk waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile filtering input, prepared output and residual.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Elementary flows

### Process: On-farm raw-milk chilling (`farm_chilling`)

#### Inputs

##### Product flows

###### Usable warm milk before chilling (`chilling_milk`)

Receive milk from milking or conditioning once for this physical lot.

- Selected flow: Warm raw sheep milk before chilling; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure warm milk and starting temperature.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chilling_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Refrigeration energy (`chilling_energy`)

Record actual carrier and meter; no universal refrigeration factor.

- Selected flow: Farm chilling energy carriers
- Flow property / unit: Mass / kg
- Amount rule: Assign metered energy to milk lot.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chilling_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: MJ/kg milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled raw milk before farm gate (`chilled_internal_milk`)

Milk remains raw after cooling; internal transfer is not the farm-gate identity.

- Selected flow: Internal chilled raw sheep milk; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure chilled mass and ending temperature.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chilling_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

###### Chilling losses and rejects (`chilling_losses`)

Separate spills/rejected milk from usable chilled milk.

- Selected flow: Chilling rejected milk; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile input versus accepted output and disposal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chilling_lot`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Elementary flows

### Process: Producing-farm milk handover (`farm_handover`)

#### Inputs

##### Product flows

###### Warm raw milk for farm handover (`warm_for_gate`)

Only non-chilled route, from milking or conditioning once.

- Selected flow: Warm raw sheep milk before gate; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure warm milk presented for handover.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_farm_handover`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
###### Chilled raw milk for farm handover (`chilled_for_gate`)

Only chilled route, from farm-chilling node once.

- Selected flow: Chilled raw sheep milk before gate; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure chilled milk presented for handover.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_farm_handover`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Warm raw sheep milk at farm gate (`warm_final_milk`)

Final warm/unprocessed milk; chilled UUID is incompatible.

- Selected flow: Warm raw sheep milk at producing-farm gate; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg measured accepted warm milk if warm route selected.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_farm_handover`
- Range: Reference mass-balance QA
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`
###### Chilled raw sheep milk at farm gate (`chilled_final_milk`)

Exact chilled unprocessed sheep-milk Product at producing farm gate.

- Selected flow: Raw milk of sheep, chilled, farm gate `8b3a0949-2be7-413b-bdc3-0f1f8942eb61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: 1 kg measured accepted chilled milk if chilled route selected.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_farm_handover`
- Range: Reference mass-balance QA
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`
##### Waste flows

###### Final milk losses and rejects (`gate_losses`)

Do not count rejected milk as final saleable raw milk.

- Selected flow: Rejected sheep milk waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Presented minus accepted sold mass, reconciled with disposal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg final raw sheep milk
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_farm_handover`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final raw sheep milk
  - Basis: per 1 kg final raw sheep milk
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_census` | Ewe herd | Enumerate raw milk, independently sold lambs/culls, wool if shorn and sold, and exported manure at actual handovers. Mortality and unsold manure remain waste/residue. A sold-wool exchange must be added from actual records. | `fao-small-ruminant-dairy` |
| `allocation_precedence` | Joint herd outputs | Subdivide measured activity where possible; otherwise use documented physical causality where defensible, then contemporaneous economic value with period and sensitivity. No default substitution credit. | `fao-leap-small-ruminants-2016` |
| `period_attribution` | Breeding/lactation/replacement | Attribute feed, service, milk, lambs, culls and events to observed periods; carry cross-period burden once and disclose lamb milk retention. | `fao-leap-small-ruminants-2016` |
| `shared_attribution` | Parlour, tank, pump, meter | List every herd/milking/conditioning/chilling consumer and service period; allocate by metered use or documented time/throughput and reconcile to total without duplication. | `fao-leap-small-ruminants-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_inputs` | `ewe_herd` | Feed, forage, water | Feed stock/grazing and meter | herd; period; feed type; stocks; pasture method; water source/meter | Reconcile intake by ewe class and period | kg | per feed/meter interval | full lactation and dry periods | ewe herd | one measured share per period | feed ledger; grazing estimate; meter |
| `cp_herd_outputs` | `ewe_herd` | Lambs, culls, manure, mortality | Birth/movement/sales/death | herd; period; lamb/cull/death count and mass; manure mass; gate; destination | Count/weigh separate output, loss and mortality | kg; head | per event | reproductive/replacement period | ewe herd | product versus waste by handover | birth/death register; scale; sales/disposal |
| `cp_manure_records` | `ewe_herd` | Manure and air species | Manure/N/enteric records | ewe class; period; feed; manure pathway; volatile solids; N; CH4/N2O factor; independent NH3 observation | CH4/N2O by actual method; NH3 only measured or separately sourced | kg substance | per herd period | full housing/grazing/manure period | ewe herd/manure node | one pathway per manure fraction | analysis; method worksheet; NH3 record |
| `cp_milking_lot` | `milking` | Biological/collected/rejected milk | Milking sheet and tank | herd; ewe count; time; volume; density; temperature; mass; rejects | Meter each lot and reconcile retained/spilled milk | kg; L | per milking | full milking period | parlour | sum accepted and loss by lot | tank calibration; milking log |
| `cp_milking_services` | `milking` | Hygiene water, energy, wastewater | Meter/invoice and washdown | lot; water; carrier; cleaning interval; wastewater destination | Assign shared services to lots | kg; kWh; MJ | per meter interval | full milking period | parlour | reconcile water in/out | meter; cleaning log; invoice |
| `cp_conditioning_lot` | `primary_conditioning` | Milk, filter, rejects | Filter/lot sheet | lot; input mass; filter mass; accepted mass; residue; destination | Weigh/reconcile input, output and rejects | kg | per lot | full conditioning | farm conditioning | one physical milk transfer | scale; filter log |
| `cp_chilling_lot` | `farm_chilling` | Warm/chilled milk, energy, loss | Tank/meter | lot; warm mass/temp; chilled mass/temp; energy; reject | Measure before/after state and carrier energy | kg; °C; kWh; MJ | per lot | full chilling | farm chilling | reconcile milk balance | tank; meter log |
| `cp_farm_handover` | `farm_handover` | Warm/chilled final milk and loss | Farm-gate acceptance | lot; gate; raw status; mass; temp; sold/returned/lost | Weigh accepted milk and record one route | kg; °C | per lot | milking to gate | producing farm | normalize accepted milk to 1 kg | delivery note; scale; temperature log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `feed_consumed` | Ewe feed | Opening stock + deliveries/harvest − closing stock − returns; pasture intake separately evidenced. | stocks; supply; grazing | kg feed by type/period | `mass-balance-identity` |
| `milk_volume_mass` | Volume records | Milk kg = measured L × lot-measured density, not a universal density. | L; density; temp | kg raw milk | `mass-balance-identity` |
| `milk_balance` | Milking to handover | At each node input milk = accepted output + rejected/lost milk within meter uncertainty; internal transfer not sale twice. | input; accepted; rejects | kg accepted and lost | `mass-balance-identity` |
| `herd_ch4_n2o` | Enteric/manure emissions | Use observed ewe class, feed, volatile solids/N and manure pathway with documented method tier; UUID is not a factor. | herd; feed; VS; N; pathway; factor | kg CH4/N2O separately | `ipcc-livestock-2019` |
| `nh3_measurement` | Manure NH3 | Use independent measured NH3 or separately sourced compatible method, not CH4/N2O factor. | NH3 observation/method | kg NH3 |  |
| `shared_reconcile` | Shared parlour/chiller | Node-period shares sum to measured service total within uncertainty. | meter; time/throughput | allocated service | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Final milk | Record ovine herd/breed, farm/gate, batch, raw/warm/chilled state, temperature and mass. | herd register; acceptance note; tank log |
| `dq_route` | All nodes | Identify pasture/housed periods, actual conditioning/chilling, lamb suckling/retention, purchased/internal inputs. | enterprise map; herd/milk ledger |
| `dq_complete` | Milk, feed, water, energy, manure | Reconcile whole-period inputs/outputs, missing data, losses, manure fate and co-output handovers. | stock, meter, sales/disposal |
| `dq_attribution` | Joint and shared | Archive period, physical/economic allocation basis, shares and sensitivity; prevent duplicate burden. | attribution worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_raw_state` | Final reference | Verify unheated, unseparated ovine raw milk and exactly one warm/chilled farm-gate product; chilled UUID cannot fill broad reference or warm output. | `un-cpc-3-2025` |
| `validate_balance` | Milk nodes | Reconcile collected, filtered, chilled and accepted lots with rejects; no intermediate milk sold-final twice. | `mass-balance-identity` |
| `validate_outputs` | Herd allocation | Check milk, sold lambs/culls, actual wool/manure transfer, mortality and unsold manure status/gates before allocation. | `fao-small-ruminant-dairy` |
| `validate_periods` | Herd/milking | Link breeding, lactation, dry and replacement periods/events to benefiting milk and animals once. | `fao-leap-small-ruminants-2016` |
| `validate_shared` | Shared assets | Identify all parlour, tank, pump, chiller and meter consumers/periods; reconcile allocated shares to totals. | `fao-leap-small-ruminants-2016` |
| `validate_route` | Pasture/housed | Require actual feed, water and manure evidence; never stack incompatible route assumptions. | `fao-small-ruminant-dairy` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for one producing-farm raw sheep-milk lot. |
| downstream_use | After review, may become `secondary_dataset` or `background_dataset` for process/lifecyclemodel projection. |
| allowed_use | Declared ovine raw milk state and farm gate with measured mass, herd/period, inputs, emissions, losses and co-outputs. |
| excluded_use | Processed/skimmed milk, inferred chilled state, collection-centre gate or undeclared joint-output assumptions. |
| required_metadata | Farm/gate, herd/breed, milking lot, warm/chilled state, temperature, raw conditioning, period and verified concrete flow selection. |
| required_quality_disclosure | Feed/pasture measurement, lamb milk retention, milk loss, manure pathway, emission method, allocations and unresolved identities/ranges. |
| update_trigger | Changed product state/gate, herd route, manure system, allocation basis or verified UUID. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Raw sheep milk classification/exclusion. |
| `fao-small-ruminant-dairy` | `official_guidance` | https://www.fao.org/dairy-production-products/dairy/small-ruminants/en | Dairy sheep routes and output context. |
| `fao-leap-small-ruminants-2016` | `official_guidance` | https://openknowledge.fao.org/handle/20.500.14283/i6434en | Small-ruminant LCA boundary, allocation and activity data. |
| `ipcc-livestock-2019` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Enteric and manure CH4/N2O methods. |
| `mass-balance-identity` | `method_factor` | Conservation of measured milk, material and service quantities | QA identity, not empirical sheep-milk factor. |
