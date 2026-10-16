---
pcr_id: pcr.wild-whole-chilled-midwater-trawl-atlantic-mackerel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild whole chilled midwater-trawl Atlantic mackerel

## 1. Scope and Applicability

This PCR covers the selected US Northwest Atlantic single-vessel midwater-trawl route for Scomber scombrus supplied as whole ungutted, never-frozen chilled fish at the first harvester physical recipient. It governs foreground collection and downstream projections; it does not establish legal, food-safety or stock-status compliance. A classification leaf covers more products than this route.

NOAA supports species, geographic fishery and midwater capture. Seafish supports the single-vessel pelagic trawl mechanism, incidental bycatch and possible seabed contact. Torry Note 66 supports whole ungutted handling and ice/refrigerated-seawater mechanisms as historical UK guidance; it does not establish current US route prevalence or numerical preservation limits. Actual route, preservation and recipient evidence are required. Pair/bottom trawling, purse seine, handline, other species, farmed, gutted, headed, frozen, cooked and preserved processed reference products are excluded. No independent universal washing or primary-processing operation is assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-whole-chilled-midwater-trawl-atlantic-mackerel |
| classification_refs | CPC 3.0 04261 |
| covered_products | Scomber scombrus; selected whole ungutted never-frozen chilled US Northwest Atlantic single-vessel midwater-trawl lots |
| excluded_products | Other species/geographies/routes; pair or bottom trawl; purse seine; handline; farmed; live, gutted, headed, frozen, cooked or further-processed reference products |
| representative_product | Whole ungutted chilled Atlantic mackerel accepted by a named first physical recipient |
| production_route | Single-vessel midwater trawl → whole-catch sorting → actual ice/RSW chilling and holding → conditional presentation or bulk bypass → first physical receipt |
| market_state | Raw whole ungutted never-frozen chilled; actual bulk or box/crate presentation disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted net whole ungutted never-frozen chilled Scomber scombrus at first harvester physical recipient |
| How much | 1 kg; A is the positive accepted net fish mass of the same selected lot |
| How well | Species, whole ungutted never-frozen chilled state and recorded recipient acceptance; actual grade, preservation and package declared without invented temperature or safety criteria |
| How long or cycle | Trip/haul/lot dates and reporting period; departure, unsuccessful searching/towing, handling, cleaning, holding, offloading and recipient acceptance; asset installation, replacement and retirement periods |
| reference_flow_link | `accepted_mackerel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole ungutted never-frozen chilled Atlantic mackerel accepted at first harvester physical recipient |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Scomber scombrus; wild; US Northwest Atlantic area/stock; single-vessel midwater-trawl route and actual contact/bycatch evidence; trip/haul/lot and reporting dates; whole ungutted/head-on; raw; never frozen; chilled; actual ice/RSW configuration; actual bulk or box/crate presentation and reusable packaging ownership; named first harvester physical recipient with location and handoff/acceptance time; accepted net fish mass and free ice/water/tare exclusion; grade/destination; intended output set and allocation/asset/service boundary |

Every qualifier must be declared in the foreground package. Bulk and presented lots retain the same whole-fish reference state; recipient acceptance is one final output. Internal transfers are measured, not fixed to one kilogram.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted whole-fish net mass A at recipient acceptance; include head and guts; exclude free ice/water and tare. Weigh on a calibrated scale with documented drainage and tare procedure, or use traceable matching recipient weights under cp_receipt. |
| `native_instances` | concrete inventory exchanges required by section 8 | Actual verified instance property | native unit | Instantiate zero, one or multiple exchanges; keep each native unit and independent U_instance. Convert count/volume/energy only with documented density, item mass or physical conversion; never sum incompatible dimensions. |
| `transfer_mass` | internal fish transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Pair transfer ids and record actual net fish mass, species, state, lot, time and destination; reconcile losses and additions separately. Ecological stock removal and discard mortality are separate indicators, not a fish-body equal-mass identity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild stock in declared Northwest Atlantic fishing area; equipped single vessel at departure with actual fuel, gear, preservation and asset records |
| starting_condition_role | Foreground capture starting condition; natural stock is not a purchased cultivated fish input |
| product_classification_scope | Selected Scomber scombrus route is a narrower part of its external classification leaf |
| recursive_input_rule | Pair internal fish transfers without reattaching capture burden; externally purchased fish of the same category require independently identified upstream datasets and are outside this selected harvester route unless separately governed |
| upstream_dataset_requirement | Actual fuel, ice, materials, electricity, services, gear and capital background datasets with geography/provider/technology/year and scope; full-service and direct component ownership exclusive |
| disclosure | Capture and incidental impacts; preservation and package configuration; first physical gate; all trips/periods including failed duty; asset lifetime/replacements; consuming nodes; output allocation; unresolved identities/ranges and omitted activities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | capture through receipt | Include navigation/search/tows/hauls, whole sorting, actual chilling/holding, cleaning, conditional presentation, offload and any harvester-owned transfer before first physical acceptance. Capture is independent of natural production and preservation: it removes wild fish into collected-catch state; do not invent farm inputs or primary processing. | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl`; `torry-mackerel-handling` |
| boundary_handoffs | sort/chill/pack/receipt | Enumerate selected product, other species, grades, sale destinations, downgraded sales, rejects and waste, with each handoff. For actual bulk RSW transfer, chilled_mackerel passes directly to receipt; packaged fish pass through pack. Unknown configuration blocks selection; no duplicate final output. | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl`; `torry-mackerel-handling` |
| boundary_burdens | all nodes and shared assets | Record one owner for every fuel, electricity, cleaning, refrigerant, vessel/gear/hold/pump/shore asset and service; enumerate consumers capture/sort/chill/pack/receipt and their active periods. A purchased complete service already containing fuel, capital and direct releases excludes those components; otherwise collect all components. Onboard generated electricity is an internal transfer when owned fuel/equipment/emissions are represented. | `accepted-lot-normalization` |
| boundary_impacts | capture and all actual direct releases | Record bycatch/live-dead outcomes, sea discards, lost gear and incidental seabed contact; do not infer zero ecological impact. Biomass disposal carries actual upstream and treatment burdens, without automatic ecological or substitution credits. Direct water pollutants require measured/modelled substance, basis and medium; no generic discharge factor is prescribed. | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl` |

## 6. Process Inventory Structure

Production mode is trip/haul/lot batches with time-resolved chilling and recipient lots. Nodes are responsibilities, not an assumed strict temporal separation: actual sorting and chilling may interleave. Trace transfers and burden ownership without inventing duplicated operations.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Single-vessel midwater-trawl capture | required | required; departure, navigation, search, towing and retrieval through captured-catch handoff; unloading belongs only to receipt | Wild-stock capture and collected-catch handoff to sorting; vessel navigation included | per 1 kg reference flow |
| `sort` | Whole-catch species and destination sorting | required | required; actual sorting may interleave with icing; preserve transfer timing | Whole caught mackerel to selected chilling lot; retained other sale states and rejects separated | per 1 kg reference flow |
| `chill` | Whole ungutted chilling and onboard holding | required | required; actual ice, refrigerated seawater or documented combined configuration | Selected whole never-frozen mackerel to chilled whole handoff for presentation or bulk receipt | per 1 kg reference flow |
| `pack` | Box or crate presentation | conditional | conditional; actual box/crate presentation before first physical receipt | Whole chilled fish enclosed or presented without changing fish state; bulk route bypasses | per 1 kg reference flow |
| `receipt` | Harvester handover and first physical acceptance | required | required; first physical recipient accepts whole chilled fish | Offload/transfer and acceptance, ending at named recipient before processing or distribution | per 1 kg reference flow |

For all ranges except the final A/A identity, 0..U_row or 0..U_instance is a provisional unresolved evidence envelope, not an empirical range, default quantity or hard validation limit. Obtain a positive finite upper bound from actual records and uncertainty before finalization. An umbrella range applies separately to every concrete native-unit instance. Conditional zero means documented absence, not missing data.

### Process: Single-vessel midwater-trawl capture (`capture`)

#### Inputs

##### Product flows

###### Marine diesel supplied to capture vessel (`capture_fuel`)

Record actual marine diesel composition, supplier and gate, tank movement and fuel allocated to navigation, searching, towing, retrieval and unsuccessful duty. Chilling fuel separately owned by chill is excluded.

- Selected flow: Marine diesel supplied to capture vessel
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned capture_fuel per 1 kg reference flow from cp_capture.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_capture`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_capture_fuel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

##### Elementary flows

#### Outputs

##### Product flows

###### Whole ungutted caught Atlantic mackerel at sorting handoff (`caught_mackerel`)

Measure species-specific whole mackerel transferred from codend/deck handling into sorting, excluding free seawater and ice; retain haul-to-lot transfers. This internal mass is measured independently from final accepted mass.

- Selected flow: Whole ungutted caught Atlantic mackerel at sorting handoff
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned caught_mackerel per 1 kg reference flow from cp_capture.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_capture`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_caught_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct fossil carbon dioxide to air (`capture_co2`)

Conditional on direct fossil combustion owned by capture: calculate actual fossil CO2 using measured fuel composition or a cited factor, oxidation assumptions and fuel records, or measure releases. Exclude fossil CO2 included in purchased full-service/background records and all other nodes.

- Selected flow: Actual direct fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned capture_co2 per 1 kg reference flow from cp_capture.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_capture`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_capture_co2
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

### Process: Whole-catch species and destination sorting (`sort`)

#### Inputs

##### Product flows

###### Whole caught Atlantic mackerel received for sorting (`sort_mackerel`)

Use the paired caught_mackerel transfer id and independently check gross/tare, seawater exclusion and species identity; internal transfer has no duplicate upstream burden.

- Selected flow: Whole caught Atlantic mackerel received for sorting
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned sort_mackerel per 1 kg reference flow from cp_sort.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_sort`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_sort_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

##### Elementary flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

#### Outputs

##### Product flows

###### Selected whole ungutted Atlantic mackerel for chilling (`selected_mackerel`)

Measure selected whole never-frozen mackerel at chill handoff. Declare actual quality/destination grade and timing; no gutting, heading or universal washing is introduced.

- Selected flow: Selected whole ungutted Atlantic mackerel for chilling
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned selected_mackerel per 1 kg reference flow from cp_sort.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_sort`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_selected_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct fossil carbon dioxide to air (`sort_co2`)

Conditional on direct fossil combustion owned by sort: calculate actual fossil CO2 using measured fuel composition or a cited factor, oxidation assumptions and fuel records, or measure releases. Exclude fossil CO2 included in purchased full-service/background records and all other nodes.

- Selected flow: Actual direct fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned sort_co2 per 1 kg reference flow from cp_sort.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_sort`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_sort_co2
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

### Process: Whole ungutted chilling and onboard holding (`chill`)

#### Inputs

##### Product flows

###### Selected whole ungutted Atlantic mackerel entering chilling (`chill_mackerel`)

Pair selected_mackerel by transfer id; retain actual interleaving of sorting and chilling and assign each input once.

- Selected flow: Selected whole ungutted Atlantic mackerel entering chilling
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned chill_mackerel per 1 kg reference flow from cp_chill.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_chill`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_chill_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

###### Purchased capture-fishery ice delivered for whole-fish chilling (`purchased_ice`)

Conditional on actual purchased ice; record supplier, ice production scope and delivered mass. Onboard ice made from owned water, fuel/electricity and equipment is an internal transfer; do not add a purchased-ice background burden.

- Selected flow: Purchased capture-fishery ice delivered for whole-fish chilling `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned purchased_ice per 1 kg reference flow from cp_chill.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_chill`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_purchased_ice
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

##### Elementary flows

###### Seawater withdrawn for actual refrigerated-seawater system (`chill_seawater`)

Conditional on direct seawater withdrawal: meter make-up and replacement water, not recirculation throughput; identify marine source and returned water separately. Purchased water is a technosphere instance under chill_resources.

Measure seawater mass directly; conversion from metered volume requires evidenced density at the same temperature and salinity, retaining raw volume, density and uncertainty. Internal circulation is not deducted again from new intake, and a treated product-water identity cannot replace this natural seawater resource.

- Selected flow: Seawater withdrawn for actual refrigerated-seawater system `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned chill_seawater per 1 kg reference flow from cp_chill.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_chill`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_chill_seawater
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole ungutted never-frozen chilled Atlantic mackerel at presentation or bulk handoff (`chilled_mackerel`)

Measure whole chilled fish net of free ice/water. Actual box/crate lots go to pack; bulk RSW lots bypass pack to receipt using distinct transfer ids and measured quantities. This is an internal output, not the final reference exchange.

- Selected flow: Whole ungutted never-frozen chilled Atlantic mackerel at presentation or bulk handoff
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned chilled_mackerel per 1 kg reference flow from cp_chill.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_chill`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_chilled_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct fossil carbon dioxide to air (`chill_co2`)

Conditional on direct fossil combustion owned by chill: calculate actual fossil CO2 using measured fuel composition or a cited factor, oxidation assumptions and fuel records, or measure releases. Exclude fossil CO2 included in purchased full-service/background records and all other nodes.

- Selected flow: Actual direct fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned chill_co2 per 1 kg reference flow from cp_chill.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_chill`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_chill_co2
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

### Process: Box or crate presentation (`pack`)

#### Inputs

##### Product flows

###### Whole chilled Atlantic mackerel entering presentation (`pack_mackerel`)

Only actual packaged lots enter; pair chilled_mackerel transfers and keep net fish mass distinct from package mass.

- Selected flow: Whole chilled Atlantic mackerel entering presentation
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned pack_mackerel per 1 kg reference flow from cp_pack.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_pack`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_pack_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

##### Elementary flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

#### Outputs

##### Product flows

###### Whole ungutted chilled Atlantic mackerel in actual presentation at handoff (`presented_mackerel`)

Keep fish net mass and package composition separate; handoff to receipt identifies the actual recipient and lot. Distribution after recipient acceptance is excluded.

- Selected flow: Whole ungutted chilled Atlantic mackerel in actual presentation at handoff
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned presented_mackerel per 1 kg reference flow from cp_pack.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_pack`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_presented_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct fossil carbon dioxide to air (`pack_co2`)

Conditional on direct fossil combustion owned by pack: calculate actual fossil CO2 using measured fuel composition or a cited factor, oxidation assumptions and fuel records, or measure releases. Exclude fossil CO2 included in purchased full-service/background records and all other nodes.

- Selected flow: Actual direct fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned pack_co2 per 1 kg reference flow from cp_pack.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_pack`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_pack_co2
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

### Process: Harvester handover and first physical acceptance (`receipt`)

#### Inputs

##### Product flows

###### Whole chilled Atlantic mackerel received from bulk or presented handoff (`receipt_mackerel`)

Pair either chilled_mackerel for actual bulk bypass or presented_mackerel for actual packaged lots, never both for the same fish. Include unloading/transfer and any harvester-owned transport before this first physical recipient.

- Selected flow: Whole chilled Atlantic mackerel received from bulk or presented handoff
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned receipt_mackerel per 1 kg reference flow from cp_receipt.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_receipt`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_receipt_mackerel
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

##### Elementary flows

No separate exchange is presumed; any actual crossing must be identified, classified and collected under this node protocol.

#### Outputs

##### Product flows

###### Whole ungutted never-frozen chilled Atlantic mackerel accepted at first harvester physical recipient (`accepted_mackerel`)

Final reference product: actual accepted net whole fish, head and guts included; free ice/water and tare excluded. Record the named first physical recipient and acceptance event before gutting, freezing, wholesale distribution or retail.

- Selected flow: Whole ungutted never-frozen chilled Atlantic mackerel accepted at first harvester physical recipient
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：1 kg
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_receipt`
- Sources：`accepted-lot-normalization`

- Range：Same-lot reference normalization identity A/A
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：1
  - Upper：1
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Method formula (`method_formula`)
  - Sources：`accepted-lot-normalization`

##### Waste flows

##### Elementary flows

###### Actual direct fossil carbon dioxide to air (`receipt_co2`)

Conditional on direct fossil combustion owned by receipt: calculate actual fossil CO2 using measured fuel composition or a cited factor, oxidation assumptions and fuel records, or measure releases. Exclude fossil CO2 included in purchased full-service/background records and all other nodes.

- Selected flow: Actual direct fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding：Fixed (`fixed`)
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Actual owned receipt_co2 per 1 kg reference flow from cp_receipt.
- Value mode：Calculated value (`calculated_value`)
- Specificity：Site-specific (`site_specific`)
- Normalization basis：per 1 kg reference flow
- Basis kind：Reference flow (`reference_flow`)
- Evidence kind：Calculated from collection (`calculated_from_collection`)
- Collection protocol：`cp_receipt`
- Sources：`accepted-lot-normalization`

- Range：Provisional unresolved envelope; actual records required
  - Range role：Uncertainty range (`uncertainty_range`)
  - Lower：0
  - Upper：U_receipt_co2
  - Unit：kg
  - Basis：per 1 kg reference flow
  - Basis kind：Reference flow (`reference_flow`)
  - Evidence kind：Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all output sets | Subdivide and directly assign haul/node/lot-specific activity first. Identify all intended species/grades/states/destinations, their split-off and physical handoff, including frozen or other nonreference products that share upstream duty; include their measured masses without treating them as the reference. | `accepted-lot-normalization` |
| allocation_trip | residual inseparable trip capture burdens | For residual joint capture/navigation duty use relative whole retained intended-product mass at common first split-off, after excluding water/ice/tare, as the disclosed physical loading proxy. Apply the fraction before same-lot A normalization; do not allocate to discards to erase burdens. Declare why mass represents the shared duty for this trip and compare a consistent species/grade revenue allocation sensitivity; if mass is causally unsuitable, retain a review blocker and supply an evidenced trip-specific alternative rather than silently selecting it. | `accepted-lot-normalization` |
| allocation_assets | shared vessel, gear, chilling and shore assets/services across nodes and periods | Assign observed fuel/electricity by metered consuming node or engine/pump run-hours and measured load; residual shared asset service by documented service-hours over actual useful lifetime, replacements and terminal losses. Include installation, maintenance, cleaning, idle and failed trips in the declared period pool; apportion that pool to all intended productive lots, never dividing each asset's full burden into every trip. Enumerate consuming nodes/periods and prove shares sum to the pool once; test load/time alternatives when important. | `accepted-lot-normalization` |
| allocation_losses | rejects, returns, discards and package reuse | Saleable downgrades and other intended products retain assigned upstream burdens; wastes are not intended products. Retain rejection, mortality and discard management burdens on intended production with actual treatment/disposal, no unproven avoidance credit. Reusable package service includes manufacture, actual rotations/cleaning, losses and end-of-use under one owner, with return transport disclosed. | `accepted-lot-normalization` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | All actual node cards and their concrete instances | Weighing, activity, transfer, supplier and emissions records | trip/haul/lot; node/event/transfer id; timestamp; reporting period; species/state/grade/destination; accepted net fish mass A link; actual exchange quantity/property/native unit; supplier/gate; asset/service scope and ownership; meter/load/run hours; full-service exclusions; substance/medium and measured/modelled releases with factor source; rejected/discarded live-dead biomass; uncertainty and upper-bound evidence; stock/area; gear/doors; departure, search, tow/retrieval time and unsuccessful trips; tank start/end/deliveries; observer/bycatch/contact evidence; vessel/gear replacement and lifetime | Reconcile calibrated weighing/meters, logs, delivery invoices, transfer and acceptance records; retain actual instance composition/provider, actual absence, activity allocation and emissions method. Treat all units separately; no automatic factor or amount defaults. Attribute owned amounts to the same accepted lot and divide by positive accepted net fish mass A; final accepted fish output is A/A; preserve each instance unit. | kg fish; each actual native unit separately | Every haul/lot/event; meter intervals and asset/service updates | All trips and holding/cleaning/idle/failed periods; commissioning, replacement and retirement | Actual vessel and capture handoff sites; named recipient | per 1 kg reference flow | Scale/meter calibration, invoices, transfer pairs, trip/observer logs, asset ownership/lifetime ledger, factor provenance, reconciliation and uncertainty |
| `cp_sort` | `sort` | All actual node cards and their concrete instances | Weighing, activity, transfer, supplier and emissions records | trip/haul/lot; node/event/transfer id; timestamp; reporting period; species/state/grade/destination; accepted net fish mass A link; actual exchange quantity/property/native unit; supplier/gate; asset/service scope and ownership; meter/load/run hours; full-service exclusions; substance/medium and measured/modelled releases with factor source; rejected/discarded live-dead biomass; uncertainty and upper-bound evidence | Reconcile calibrated weighing/meters, logs, delivery invoices, transfer and acceptance records; retain actual instance composition/provider, actual absence, activity allocation and emissions method. Treat all units separately; no automatic factor or amount defaults. Attribute owned amounts to the same accepted lot and divide by positive accepted net fish mass A; final accepted fish output is A/A; preserve each instance unit. | kg fish; each actual native unit separately | Every haul/lot/event; meter intervals and asset/service updates | All trips and holding/cleaning/idle/failed periods; commissioning, replacement and retirement | Actual vessel and sort handoff sites; named recipient | per 1 kg reference flow | Scale/meter calibration, invoices, transfer pairs, trip/observer logs, asset ownership/lifetime ledger, factor provenance, reconciliation and uncertainty |
| `cp_chill` | `chill` | All actual node cards and their concrete instances | Weighing, activity, transfer, supplier and emissions records | trip/haul/lot; node/event/transfer id; timestamp; reporting period; species/state/grade/destination; accepted net fish mass A link; actual exchange quantity/property/native unit; supplier/gate; asset/service scope and ownership; meter/load/run hours; full-service exclusions; substance/medium and measured/modelled releases with factor source; rejected/discarded live-dead biomass; uncertainty and upper-bound evidence; actual ice/RSW configuration; purchased/onboard ice; withdrawal/make-up/replacement versus recirculation; holding times; refrigerant type and leakage; spent water destination | Reconcile calibrated weighing/meters, logs, delivery invoices, transfer and acceptance records; retain actual instance composition/provider, actual absence, activity allocation and emissions method. Treat all units separately; no automatic factor or amount defaults. Attribute owned amounts to the same accepted lot and divide by positive accepted net fish mass A; final accepted fish output is A/A; preserve each instance unit. | kg fish; each actual native unit separately | Every haul/lot/event; meter intervals and asset/service updates | All trips and holding/cleaning/idle/failed periods; commissioning, replacement and retirement | Actual vessel and chill handoff sites; named recipient | per 1 kg reference flow | Scale/meter calibration, invoices, transfer pairs, trip/observer logs, asset ownership/lifetime ledger, factor provenance, reconciliation and uncertainty |
| `cp_pack` | `pack` | All actual node cards and their concrete instances | Weighing, activity, transfer, supplier and emissions records | trip/haul/lot; node/event/transfer id; timestamp; reporting period; species/state/grade/destination; accepted net fish mass A link; actual exchange quantity/property/native unit; supplier/gate; asset/service scope and ownership; meter/load/run hours; full-service exclusions; substance/medium and measured/modelled releases with factor source; rejected/discarded live-dead biomass; uncertainty and upper-bound evidence; active/bypassed; box/crate/liner composition and tare; reusable inventory/rotations/cleaning/return ownership | Reconcile calibrated weighing/meters, logs, delivery invoices, transfer and acceptance records; retain actual instance composition/provider, actual absence, activity allocation and emissions method. Treat all units separately; no automatic factor or amount defaults. Attribute owned amounts to the same accepted lot and divide by positive accepted net fish mass A; final accepted fish output is A/A; preserve each instance unit. | kg fish; each actual native unit separately | Every haul/lot/event; meter intervals and asset/service updates | All trips and holding/cleaning/idle/failed periods; commissioning, replacement and retirement | Actual vessel and pack handoff sites; named recipient | per 1 kg reference flow | Scale/meter calibration, invoices, transfer pairs, trip/observer logs, asset ownership/lifetime ledger, factor provenance, reconciliation and uncertainty |
| `cp_receipt` | `receipt` | All actual node cards and their concrete instances | Weighing, activity, transfer, supplier and emissions records | trip/haul/lot; node/event/transfer id; timestamp; reporting period; species/state/grade/destination; accepted net fish mass A link; actual exchange quantity/property/native unit; supplier/gate; asset/service scope and ownership; meter/load/run hours; full-service exclusions; substance/medium and measured/modelled releases with factor source; rejected/discarded live-dead biomass; uncertainty and upper-bound evidence; named first physical recipient/location; bulk or presented transfer; calibrated gross/tare/drainage and accepted net mass A; acceptance/rejection event | Reconcile calibrated weighing/meters, logs, delivery invoices, transfer and acceptance records; retain actual instance composition/provider, actual absence, activity allocation and emissions method. Treat all units separately; no automatic factor or amount defaults. Attribute owned amounts to the same accepted lot and divide by positive accepted net fish mass A; final accepted fish output is A/A; preserve each instance unit. For A, weigh accepted whole ungutted fish on a calibrated scale after documented free ice/water removal and tare deduction; verify the same lot/species/state and first physical acceptance record. | kg fish; each actual native unit separately | Every haul/lot/event; meter intervals and asset/service updates | All trips and holding/cleaning/idle/failed periods; commissioning, replacement and retirement | Actual vessel and receipt handoff sites; named recipient | per 1 kg reference flow | Scale/meter calibration, invoices, transfer pairs, trip/observer logs, asset ownership/lifetime ledger, factor provenance, reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_normalization` | all inventory rows | Retain the unallocated physical ledger and divide actual material transfers by positive accepted net fish mass A of that same lot. Apply evidenced allocation shares only to genuinely shared LCA burdens in the separate attribution view before dividing by A; do not scale species-specific physical fish transfers or use allocation to close mass. Final reference output is A/A = 1 kg. Preserve each numerator's native unit; aggregate compatible instances only. | cp_capture; cp_sort; cp_chill; cp_pack; cp_receipt; A | Native exchange quantity per 1 kg reference flow and separate unallocated physical ledger | `accepted-lot-normalization` |
| `direct_releases` | all direct CO2 and other release cards | Use actual measured releases or activity times an explicitly identified factor with matching substance, medium, fuel/composition and unit; document oxidation/abatement/leakage and uncertainty. Apply lot_normalization only to direct releases owned by that node, excluding purchased full-service coverage. | Node-specific protocol; measured release or activity and externally cited factor | Substance/medium-specific release per reference flow | `accepted-lot-normalization` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all exchanges | Verify concrete identity/property/unit/provider/gate before final exchange publication; conditional service/material/release cards require actual instances. Unresolved candidate identities are not fixed matches. | Supplier composition, scope and verified detail/support records |
| `quality_completeness` | all node/period/output records | Use the same accepted lot denominator; collect every active node and bypass evidence, failed and idle duty, grades/species/destinations, waste treatment and asset replacements; retain full-service versus component exclusions. | Transfer, output, asset and ownership ledgers with reconciliation |
| `quality_quantities` | all nonreference ranges and emissions | Resolve U_row/U_instance with actual observed/modelled bounds and uncertainty; record factor provenance and applicability. Qualitative route sources cannot justify numerical fuel/ice/emission ranges. No invented zero, numeric ice ratio, shelf-life, safety threshold or stock status. | Collection protocols, underlying records, applicable factor sources and sensitivity |
| `collect_capture_resources` | `capture`; Inputs; Product flows: Actual capture materials, assets and native-unit services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual net/door/rope replacement, lubricant, vessel asset share, cleaning input, shore service or purchased electricity separately with its own identity, property and native unit. Full service versus component inventory is exclusive; replacement and lifetime records include nonproductive periods. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned capture_resources per 1 kg reference flow from cp_capture.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `accepted-lot-normalization` |
| `collect_wild_stock_removal` | `capture`; Inputs; Elementary flows: Actual wild biomass removal by species and fate | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record ecological stock removal with species, stock/area, live/dead status and mortality method from haul and observer records. Mackerel and incidental taxa are separate actual instances. Do not equate removal or discard mortality to the accepted reference mass or invent a generic fish UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned wild_stock_removal per 1 kg reference flow from cp_capture.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `accepted-lot-normalization` |
| `collect_capture_other_products` | `capture`; Outputs; Product flows: Other retained intended catch products at actual handoff | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: list each other species or nonreference mackerel destination intended for sale, its state and first downstream handoff. Avoid relabelling mixed catch as reference mackerel; later sorting records identify the same transfer rather than a second sale. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned capture_other_products per 1 kg reference flow from cp_capture.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `accepted-lot-normalization` |
| `collect_capture_discard_waste` | `capture`; Outputs; Waste flows: Discarded biomass and actual capture wastes by destination | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: separate retained waste to treatment, sea discards by species/live status, lost gear and oily waste. Stock removal and sea-discard fate are linked ecological records of one event, not two independent resource-removal exchanges. Record each destination and native quantity; sea discards are not automatically elementary pollutant emissions or a substitution credit. Document incidental seabed contact and protected-species interactions separately. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned capture_discard_waste per 1 kg reference flow from cp_capture.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `accepted-lot-normalization` |
| `collect_capture_other_releases` | `capture`; Outputs; Elementary flows: Actual other direct releases by substance and receiving medium | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual combustion pollutant including actual biogenic CO2, refrigerant leakage, oily discharge or cleaning/water pollutant owned by capture; retain substance/speciation, mass or native basis, air/water/soil compartment, method and factor source. Explicitly exclude fossil CO2 in capture_co2, other nodes and releases already covered by full services; uncharacterized biomass/water is not a pollutant UUID. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned capture_other_releases per 1 kg reference flow from cp_capture.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `accepted-lot-normalization` |
| `collect_sort_other_catch` | `sort`; Inputs; Product flows: Other retained catch actually entering species sorting | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: pair the capture_other_products transfer only for other retained species or nonreference whole mackerel that actually enter this sorting node; record each species/state/destination and actual mass separately. Retained products handed directly elsewhere bypass this input. A paired sorting transfer is not a second sale or duplicate capture burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned sort_other_catch per 1 kg reference flow from cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-lot-normalization` |
| `collect_sort_resources` | `sort`; Inputs; Product flows: Actual node energy, materials, assets and native-unit services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual purchased electricity, direct fuel, lubricant, cleaning material, equipment share or complete service used by sort, with independent identity, property and native unit. Declare component or full-service ownership; fuel/equipment/emissions-owned onboard electricity is an internal transfer. Include idle, cleaning and failed duty and all actual consuming periods. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned sort_resources per 1 kg reference flow from cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-lot-normalization` |
| `collect_sort_other_products` | `sort`; Outputs; Product flows: Other intended species, grades and destinations after sorting | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: instantiate each retained intended product with species, whole/processed state, commercial destination and handoff; a downgraded sale is still a product, while routes beyond this PCR end at their split-off. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned sort_other_products per 1 kg reference flow from cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-lot-normalization` |
| `collect_sort_rejects` | `sort`; Outputs; Waste flows: Sorting rejects sent to actual waste destination | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: record biomass, cause, retained/discarded status and treatment or disposal destination. Reconcile rejects, other products and selected product with incoming species-specific mass without forcing captured stock into equal body mass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned sort_rejects per 1 kg reference flow from cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_sort_rejects Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-lot-normalization` |
| `collect_sort_other_releases` | `sort`; Outputs; Elementary flows: Actual other direct releases by substance and receiving medium | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual combustion pollutant including actual biogenic CO2, refrigerant leakage, oily discharge or cleaning/water pollutant owned by sort; retain substance/speciation, mass or native basis, air/water/soil compartment, method and factor source. Explicitly exclude fossil CO2 in sort_co2, other nodes and releases already covered by full services; uncharacterized biomass/water is not a pollutant UUID. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned sort_other_releases per 1 kg reference flow from cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-lot-normalization` |
| `collect_chill_resources` | `chill`; Inputs; Product flows: Actual node energy, materials, assets and native-unit services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual purchased electricity, direct fuel, lubricant, cleaning material, equipment share or complete service used by chill, with independent identity, property and native unit. Declare component or full-service ownership; fuel/equipment/emissions-owned onboard electricity is an internal transfer. Include idle, cleaning and failed duty and all actual consuming periods. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned chill_resources per 1 kg reference flow from cp_chill.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_chill`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`; `accepted-lot-normalization` |
| `collect_chill_diverted_products` | `chill`; Outputs; Product flows: Intended fish diverted during chilling or holding | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: record each actual saleable grade or nonreference destination with species, fish state and handoff; retain its share of prior burdens. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned chill_diverted_products per 1 kg reference flow from cp_chill.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_chill`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`; `accepted-lot-normalization` |
| `collect_chill_waste` | `chill`; Outputs; Waste flows: Chilling biomass rejects and water sent to treatment | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: instantiate rejected biomass, spent RSW, meltwater or cleaning water only when actually transferred to treatment/disposal, with its waste destination and native quantity. For direct discharge, carrier water is only a water-balance record under cp_chill, not an extra waste exchange or treatment burden; model actual measured/modelled pollutant substances under chill_other_releases without duplicate pollutants. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned chill_waste per 1 kg reference flow from cp_chill.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_chill`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`; `accepted-lot-normalization` |
| `collect_chill_other_releases` | `chill`; Outputs; Elementary flows: Actual other direct releases by substance and receiving medium | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual combustion pollutant including actual biogenic CO2, refrigerant leakage, oily discharge or cleaning/water pollutant owned by chill; retain substance/speciation, mass or native basis, air/water/soil compartment, method and factor source. Explicitly exclude fossil CO2 in chill_co2, other nodes and releases already covered by full services; uncharacterized biomass/water is not a pollutant UUID. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned chill_other_releases per 1 kg reference flow from cp_chill.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_chill`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_chill`; `accepted-lot-normalization` |
| `collect_pack_materials` | `pack`; Inputs; Product flows: Actual boxes, crates, liners and presentation materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate actual materials and their native units. Distinguish single-use from reusable items; document tare, reuse rotations, losses, replacement, cleaning and return transport ownership. No default box material or reuse count. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned pack_materials per 1 kg reference flow from cp_pack.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_pack`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_pack`; `accepted-lot-normalization` |
| `collect_pack_resources` | `pack`; Inputs; Product flows: Actual node energy, materials, assets and native-unit services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual purchased electricity, direct fuel, lubricant, cleaning material, equipment share or complete service used by pack, with independent identity, property and native unit. Declare component or full-service ownership; fuel/equipment/emissions-owned onboard electricity is an internal transfer. Include idle, cleaning and failed duty and all actual consuming periods. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned pack_resources per 1 kg reference flow from cp_pack.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_pack`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_pack`; `accepted-lot-normalization` |
| `collect_pack_waste` | `pack`; Outputs; Waste flows: Presentation rejects and packaging wastes | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: separate fish rejection from broken packaging, liners and cleaning effluent; instantiate each destination and native unit; record reusable materials remaining in circulation rather than treating each rotation as new production. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned pack_waste per 1 kg reference flow from cp_pack.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_pack`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_pack`; `accepted-lot-normalization` |
| `collect_pack_other_releases` | `pack`; Outputs; Elementary flows: Actual other direct releases by substance and receiving medium | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual combustion pollutant including actual biogenic CO2, refrigerant leakage, oily discharge or cleaning/water pollutant owned by pack; retain substance/speciation, mass or native basis, air/water/soil compartment, method and factor source. Explicitly exclude fossil CO2 in pack_co2, other nodes and releases already covered by full services; uncharacterized biomass/water is not a pollutant UUID. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned pack_other_releases per 1 kg reference flow from cp_pack.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_pack`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_pack`; `accepted-lot-normalization` |
| `collect_receipt_resources` | `receipt`; Inputs; Product flows: Actual node energy, materials, assets and native-unit services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual purchased electricity, direct fuel, lubricant, cleaning material, equipment share or complete service used by receipt, with independent identity, property and native unit. Declare component or full-service ownership; fuel/equipment/emissions-owned onboard electricity is an internal transfer. Include idle, cleaning and failed duty and all actual consuming periods. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned receipt_resources per 1 kg reference flow from cp_receipt.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_receipt`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_receipt`; `accepted-lot-normalization` |
| `collect_receipt_diverted_products` | `receipt`; Outputs; Product flows: Other saleable products diverted at first receipt | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: enumerate actual grade/state/destination handoffs and accepted amounts; keep nonreference intended products distinct from rejected waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual owned receipt_diverted_products per 1 kg reference flow from cp_receipt.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_receipt`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：kg Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_receipt`; `accepted-lot-normalization` |
| `collect_receipt_rejects` | `receipt`; Outputs; Waste flows: First-recipient biomass and transfer wastes | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional: measure rejected whole fish, damaged packaging or water wastes, their cause and destination. Rejected or returned fish retain their attributable pre-gate burdens; a later return after acceptance is disclosed separately without a second reference product. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned receipt_rejects per 1 kg reference flow from cp_receipt.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_receipt`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_receipt`; `accepted-lot-normalization` |
| `collect_receipt_other_releases` | `receipt`; Outputs; Elementary flows: Actual other direct releases by substance and receiving medium | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection: instantiate each actual combustion pollutant including actual biogenic CO2, refrigerant leakage, oily discharge or cleaning/water pollutant owned by receipt; retain substance/speciation, mass or native basis, air/water/soil compartment, method and factor source. Explicitly exclude fossil CO2 in receipt_co2, other nodes and releases already covered by full services; uncharacterized biomass/water is not a pollutant UUID. Flow property / unit: Actual instance property / native unit of each actual instance; Amount rule: Actual owned receipt_other_releases per 1 kg reference flow from cp_receipt.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_receipt`; Sources: `accepted-lot-normalization` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range：Provisional unresolved envelope; actual records required Range role：Uncertainty range (`uncertainty_range`) Lower：0 Upper：U_instance Unit：native unit of each actual instance Basis：per 1 kg reference flow Basis kind：Reference flow (`reference_flow`) Evidence kind：Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_receipt`; `accepted-lot-normalization` |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_scope | reference product and route | Require all qualifiers and proof of species/area/single-vessel midwater gear, whole ungutted never-frozen chilled state and actual first physical recipient acceptance; reject out-of-scope reference states or unknown preservation/package configuration. | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl`; `torry-mackerel-handling` |
| validation_balance | all transfers and outputs | Check actual internal mass and paired handoffs; enumerate every intended grade/species/destination, rejects and wastes. Exactly one accepted_mackerel final exchange per lot; bulk bypass must not also count pack. Do not force ecological stock removal/discard mortality to equal accepted body mass. | `accepted-lot-normalization` |
| validation_ownership | all nodes, services, direct releases and periods | Verify one owner and complete consumers/periods for each shared burden, full-service exclusions, asset replacement/lifetime, failed/idle duty and all actual combustion/leakage releases. Direct CO2 cards and other-release instances must be mutually exclusive; all release substances, receiving media and factors need evidence. | `accepted-lot-normalization` |
| validation_limits | candidate identities, quantities and automated checks | Unresolved UUIDs, support identities, actual native-unit instances, U bounds or allocation evidence must remain disclosed and block final exchange/dataset claims where required. A structural checker pass does not prove identity, current practices, numerical ranges or complete environmental characterization. | `accepted-lot-normalization` |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground capture package to process/lifecyclemodel projections, then downstream supply modelling with matching gate |
| allowed_use | Declared species/area/route/state/gate with concrete exchanges, actual quantities and reviewed allocation |
| excluded_use | Generic pelagic fish, other gears/species, farmed, frozen/gutted reference, retail product, safety/legal or ecological-zero certification |
| required_metadata | All required qualifiers, trips/hauls/lots/periods, transfer and output ledger, node ownership, supplier scope, asset/reuse life, allocation and verified concrete identity/supports |
| required_quality_disclosure | Temporal/geographic/provider fit, uncertainty and factor basis, missing activities/identities/ranges, incidental ecological impacts, failed duty, allocation sensitivity and performed/skipped validation |
| update_trigger | Species/gear/area/recipient, preservation or packaging change; supplier/energy/emission/asset method change; new foreground or impact evidence; unresolved evidence closure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `noaa-atlantic-mackerel` | official_guidance | NOAA Fisheries, Atlantic Mackerel (Scomber scombrus), updated 2026-10-01; https://www.fisheries.noaa.gov/species/atlantic-mackerel ; retrieved 2026-10-12 | Species, US Northwest Atlantic fishery, midwater gear and incidental catch; not quantity factors or stock-status/safety claims |
| `seafish-pelagic-trawl` | handbook | Seafish, Fishing gear database: Pelagic trawl; https://www.seafish.org/responsible-sourcing/fishing-gear-database/gear/pelagic-trawl/ ; retrieved 2026-10-12 | Single-vessel trawl mechanism and possible incidental contact/bycatch; not a route-specific amount dataset |
| `torry-mackerel-handling` | official_guidance | J. N. Keay, MAFF Torry Research Station, Handling and Processing Mackerel, Torry Advisory Note 66 (revised), FAO archive; https://www.fao.org/4/x5938e/x5938e01.htm ; retrieved 2026-10-12 | Historical UK whole ungutted chilling, ice/RSW mechanisms only; not current US prevalence, fixed thresholds, safety limits or quantitative ranges |
| `accepted-lot-normalization` | method_factor | PCR sections 4, 7 and 8; declared foreground collection, ownership and same-lot normalization method | Actual-record attribution, A/A reference identity, native-unit normalization and ownership; no empirical amount or emission factor |
