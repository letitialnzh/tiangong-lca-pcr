---
pcr_id: pcr.farmed-live-whole-recirculating-tank-green-sea-urchin
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed whole live green sea urchins from recirculating V-trough growout

## 1. Scope and Applicability

This PCR covers Strongylocentrotus droebachiensis of documented hatchery-seed origin, grown in land-based recirculating seawater V-troughs in Maine with a formulated sea-urchin diet, collected manually, sorted and protectively presented whole and live through first physical recipient receipt. Native test and spines remain; the reference is raw and never frozen.

The University of Maine 2009–2013 demonstration supports the growout route and equipment responsibilities, including feed-history distinctions and prior nursery phases. It produced animals for subsequent market/quality research; it does not establish an actual commercial shipment, commercial profitability or current sales. NOAA's 2023 manual discusses whole-live end-user channels as potential. Each data package must independently prove its actual eligible receipt. No source temperature, stocking density, ration, survival, duration, feed conversion, gonad yield, price, safety, disease-treatment or legal prescription is adopted.

Exclude wild-adult gonad enhancement, sea ranching, sea-cage growout, co-culture, ornamental animals, dead/fresh/chilled-only products, freezing, evisceration, roe extraction and subsequent product processing. Upstream nursery history is required; on-site nursery is separately included when actual. A cohort's actual earlier trial diets cannot be deleted to describe a formulated-diet period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-recirculating-tank-green-sea-urchin |
| classification_refs | cpc:3.0:04522; narrower selected species, origin, technology and live whole state |
| covered_products | Hatchery-origin S. droebachiensis grown by the declared land-based RAS V-trough formulated-feed route; whole live raw never-frozen animals physically received |
| excluded_products | Wild adults; enhancement-only animals; ranching/cage/co-culture products; ornamental, dead, frozen, dried, salted, eviscerated animals and extracted roe |
| representative_product | Whole live green sea urchin with native test and spines at actual first recipient receipt |
| production_route | Received hatchery-origin seed and complete nursery history; conditional on-site nursery; recirculating V-trough growout; manual collection; sorting; observed conditional holding; protective presentation; receipt logistics |
| market_state | Whole live raw never-frozen animal; actual recipient channel and acceptance evidenced, not presumed from historical trials |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole live never-frozen farmed green sea urchins at first physical recipient receipt |
| How much | 1 kg net whole-animal wet mass; native test/spines retained; exclude free water, packaging and incidental matter |
| How well | Documented species, hatchery origin, route, actual live state, never-frozen history and recipient acceptance; no universal grade or roe-quality promise |
| How long or cycle | Actual hatchery/nursery/growout cohort history through receipt; index all reporting periods, retained cohorts, failures, replacements and service periods |
| reference_flow_link | `live_urchins_receipt` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live never-frozen farmed green sea urchins at first physical recipient receipt |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Strongylocentrotus droebachiensis; Maine site; hatchery cohort and prior nursery history; V-trough recirculating seawater system; actual feed products/history; whole raw test/spines retained; live and never frozen; lot/cohort/period; net wet mass and drain/tare method; physical recipient/time/location; actual holding state; logistics and alternate destinations |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Weigh the same accepted live lot at actual recipient receipt on a calibrated scale; record tare and reproducible free-water removal without removing body parts. A is accepted whole-animal wet mass, not feed, gonad, gross package or dispatch mass. |
| `native_units` | all inventory rows | Recorded property | Native recorded unit | Record wet/dry condition, water density, feed as-fed mass, count and sampled whole-animal mass, service/energy units and pollutant chemical basis. Convert only with measured compatible records; retain kWh, t*km and h where used. No universal count-to-mass or whole-to-roe factor. |
| `transfer_mass` | internal animal transfers | Mass | kg | Pair transfer ids with one cohort, time, state, mass/count and boundary on both sides. Internal quantities remain measured and are not forced to 1 kg. Account carrying water and matter separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented hatchery-origin live seed at actual nursery/growout entry with complete preceding production, nursery and transport history |
| starting_condition_role | Foreground entry gate; upstream burdens remain linked, not cut off |
| product_classification_scope | Selected narrower aquaculture green-sea-urchin whole-live RAS route under cpc:3.0:04522 |
| recursive_input_rule | Nursery-ready seed and returned live stock carry their actual upstream and previous-period burdens; internal returns do not restart or duplicate seed production |
| upstream_dataset_requirement | Traceable hatchery/nursery seed, actual feeds, utilities, materials/assets, treatment and logistics datasets with compatible geography, period, units and boundary; unavailable inputs remain disclosed gaps |
| disclosure | Sites/cohorts/phases, stock boundaries, active/inactive/unknown holding and nursery states, complete pre-receipt route regardless payer, actual recipient receipt, exclusions, intended outputs and attribution assumptions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | nursery; growout | Include actual on-site nursery and complete prior seed history, then V-trough RAS growth, feed changes, water/solids treatment, maintenance, monitoring, failed batches and mortality. Historical methods establish route responsibilities, not site-specific quantities or proof of sale. | umaine-green-urchin-growout-2013 |
| `boundary_handoffs` | all nodes | Use T0 or external E0 for growout seed, T1/T1m for culture withdrawal, T2/T2m for collected animals/matter, T3 and T4 when holding occurs or T3b bypass when absent, T5 for dispatch and TR for sorting returns. Each actual handoff has paired outputs/inputs and one quantity/state owner. On-site nursery or holding unknown state cannot default to inactive. | |
| `boundary_receipt` | delivery | Include every actual pre-receipt loading, transport, interim holding, terminal operation and acceptance event irrespective of ownership, payer or invoice. End at evidenced first physical recipient acceptance; retain rejected dispatch burdens. Potential whole-live channels do not prove a shipment. | noaa-green-urchin-manual-2023 |
| `boundary_assets` | all nodes | Record V-troughs, plumbing, biofilter, solids filter, fractionator, oxygen/UV systems, pumps, building, tools and reuse containers as actual asset/service instances. Link consuming nodes, cohorts and periods, repair/replacement, actual service life and end-of-use fate; no prescribed lifetime. | umaine-green-urchin-growout-2013 |
| `boundary_fates` | all nodes | Supplier water is product supply; direct withdrawal is elementary input; internal circulation is neither repeated withdrawal nor discharge. Distinguish actual treatment-bound wastes from direct environmental releases, returned carrier water from each pollutant, and fossil from biogenic carbon. Expand each conditional umbrella into actual zero/one/multiple documented exchanges; unknown applicability is a gap, not zero. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `nursery` | On-site juvenile nursery | conditional | Only when nursery operations occur within the foreground facility; otherwise receive nursery-ready seed directly into growout. | Cohort biological production before V-trough growout | per 1 kg reference flow; actual cohort/period quantities retained |
| `growout` | Recirculating V-trough biological growout | required | All eligible cohorts | Land-based hatchery-seed-origin managed production | per 1 kg reference flow; actual cohort/period quantities retained |
| `collection` | Manual physical collection from V-troughs | required | All dispatched cohorts | Remove animals from culture context independently of growth | per 1 kg reference flow; actual cohort/period quantities retained |
| `sorting` | Grade and destination sorting | required | All collected cohorts | Declare accepted, retained, other intended and discarded states | per 1 kg reference flow; actual cohort/period quantities retained |
| `holding` | Observed bounded live holding | conditional | Only an actual separately bounded pre-presentation intervention with entry/exit times and service records; unknown state requires evidence. | Maintain observed live usable state before presentation | per 1 kg reference flow; actual cohort/period quantities retained |
| `presentation` | Live protective presentation | required | Every reference lot | Protect/present whole live product without conversion | per 1 kg reference flow; actual cohort/period quantities retained |
| `delivery` | All logistics through first physical recipient receipt | required | Every reference lot, including zero-distance on-site handover with recorded receipt | Pre-receipt transport, handling and acceptance gate | per 1 kg reference flow; actual cohort/period quantities retained |

### Process: On-site juvenile nursery (`nursery`)

Only when nursery operations occur within the foreground facility; otherwise receive nursery-ready seed directly into growout. Cohort biological production before V-trough growout. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Hatchery-origin live juvenile green sea urchins received for nursery (`nursery_seed`)

Record hatchery cohort, prior nursery history, count and measured wet whole-animal mass; upstream hatchery/earlier phases and inbound transport remain required.

- Selected flow: Hatchery-origin live juvenile green sea urchins received for nursery
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nursery`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_nursery_seed
  - Unit: kg
  - Basis: per 1 kg reference flow; U_nursery_seed must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for actual nursery equipment (`nursery_electricity`)

Meter or attribute pumping, aeration, lighting, temperature control and treatment to nursery periods once.

- Selected flow: Electricity for actual nursery equipment
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nursery`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_nursery_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow; U_nursery_electricity must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Live nursery-ready juveniles transferred to growout (`nursery_ready`)

T0: whole live juveniles with count, wet mass, cohort and transfer time; pair exactly with growout_seed. Internal transfer is not 1 kg.

- Selected flow: Live nursery-ready juveniles transferred to growout
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nursery`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_nursery_ready
  - Unit: kg
  - Basis: per 1 kg reference flow; U_nursery_ready must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Recirculating V-trough biological growout (`growout`)

All eligible cohorts Land-based hatchery-seed-origin managed production. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Nursery-ready live green sea urchin seed entering growout (`growout_seed`)

T0 from nursery_ready when active, or external seed receipt E0 when nursery is absent; retain hatchery proof and all prior nursery/feed/transport burdens. Do not count both routes.

- Selected flow: Nursery-ready live green sea urchin seed entering growout
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_growout`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_seed
  - Unit: kg
  - Basis: per 1 kg reference flow; U_growout_seed must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live undersize cohort returned from sorting (`growout_returns`)

TR: pair sort_return with identical live state, mass, count and cohort; transfer preserves previously carried burdens without treating them as new seed production.

- Selected flow: Live undersize cohort returned from sorting
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_growout`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_returns
  - Unit: kg
  - Basis: per 1 kg reference flow; U_growout_returns must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formulated sea-urchin feed supplied to growout (`growout_feed`)

Record actual feed product, supplier, manufacture and transport, deliveries, stocks, ration and leftovers. Actual earlier Cargill trial or nursery kelp history is retained, not relabelled as the selected formulated diet.

- Selected flow: Formulated sea-urchin feed supplied to growout
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_growout`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_feed
  - Unit: kg
  - Basis: per 1 kg reference flow; U_growout_feed must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### RAS operating electricity (`growout_electricity`)

Attribute pumps, solids separation, biofilter, foam fractionation, oxygen delivery, UV, measured heating/cooling and other actual equipment; count shared plant once.

- Selected flow: RAS operating electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_growout`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow; U_growout_electricity must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Whole live green sea urchins designated for collection (`growout_collectable`)

T1: measured cohort withdrawal authorization/state, count and wet mass paired with collection_stock; still attached or within the culture context before physical removal.

- Selected flow: Whole live green sea urchins designated for collection
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_growout`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_collectable
  - Unit: kg
  - Basis: per 1 kg reference flow; U_growout_collectable must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Carrier water returned directly to the environment (`growout_returned_water`)

Record actual discharge water separately from contained pollutants, net environmental withdrawal and internal circulation; identify seawater outlet and any observed change in fate.

- Selected flow: Carrier water returned directly to the environment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_growout`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_returned_water
  - Unit: kg
  - Basis: per 1 kg reference flow; U_growout_returned_water must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Manual physical collection from V-troughs (`collection`)

All dispatched cohorts Remove animals from culture context independently of growth. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Live whole cohort in growout context before removal (`collection_stock`)

T1 paired with growout_collectable; retain observed collection event and culture location.

- Selected flow: Live whole cohort in growout context before removal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_stock
  - Unit: kg
  - Basis: per 1 kg reference flow; U_collection_stock must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manual physical collection from V-troughs electricity (`collection_electricity`)

Meter actual equipment energy and attribute shared services once to this node/period; no equipment is presumed merely from category.

- Selected flow: Manual physical collection from V-troughs electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow; U_collection_electricity must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Collected whole live green sea urchins (`collection_collected`)

T2 animals go to sort_incoming; measure net whole-animal wet mass/count separately from collect_collection_carried_out. Growth is not repeated here.

- Selected flow: Collected whole live green sea urchins
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_collected
  - Unit: kg
  - Basis: per 1 kg reference flow; U_collection_collected must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grade and destination sorting (`sorting`)

All collected cohorts Declare accepted, retained, other intended and discarded states. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Collected whole live green sea urchins before sorting (`sort_incoming`)

T2 from collection_collected; reconcile cohort count and drained animal mass separately from incidental matter.

- Selected flow: Collected whole live green sea urchins before sorting
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_incoming
  - Unit: kg
  - Basis: per 1 kg reference flow; U_sort_incoming must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grade and destination sorting electricity (`sorting_electricity`)

Meter actual equipment energy and attribute shared services once to this node/period; no equipment is presumed merely from category.

- Selected flow: Grade and destination sorting electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow; U_sorting_electricity must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Selected whole live never-frozen animals for presentation (`sort_selected`)

T3 goes to holding_in when bounded holding is observed, otherwise bypass T3b goes directly to presentation_in; record exactly one actual branch with same state/mass/count.

- Selected flow: Selected whole live never-frozen animals for presentation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_selected
  - Unit: kg
  - Basis: per 1 kg reference flow; U_sort_selected must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retained live undersize animals returned to growout (`sort_return`)

TR paired with growout_returns; retain cohort and previously attributed burden, exclude from accepted receipt denominator until a later actual receipt.

- Selected flow: Retained live undersize animals returned to growout
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_return
  - Unit: kg
  - Basis: per 1 kg reference flow; U_sort_return must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Observed bounded live holding (`holding`)

Only an actual separately bounded pre-presentation intervention with entry/exit times and service records; unknown state requires evidence. Maintain observed live usable state before presentation. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Selected whole live animals entering observed holding (`holding_in`)

T3 from sort_selected; record actual starting live state, count, mass and time.

- Selected flow: Selected whole live animals entering observed holding
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_in
  - Unit: kg
  - Basis: per 1 kg reference flow; U_holding_in must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Observed bounded live holding electricity (`holding_electricity`)

Meter actual equipment energy and attribute shared services once to this node/period; no equipment is presumed merely from category.

- Selected flow: Observed bounded live holding electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow; U_holding_electricity must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Whole live animals leaving the bounded intervention (`holding_live`)

T4 paired with presentation_in; reconcile wet animal mass/count and live eligibility at exit without asserting shelf life or roe quality.

- Selected flow: Whole live animals leaving the bounded intervention
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_live
  - Unit: kg
  - Basis: per 1 kg reference flow; U_holding_live must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live protective presentation (`presentation`)

Every reference lot Protect/present whole live product without conversion. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Whole live animals entering presentation (`presentation_in`)

T4 from holding_live if holding active, otherwise T3b from sort_selected; record actual branch and identical matched quantity.

- Selected flow: Whole live animals entering presentation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_in
  - Unit: kg
  - Basis: per 1 kg reference flow; U_presentation_in must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live protective presentation electricity (`presentation_electricity`)

Meter actual equipment energy and attribute shared services once to this node/period; no equipment is presumed merely from category.

- Selected flow: Live protective presentation electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow; U_presentation_electricity must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Presented whole live never-frozen green sea urchins dispatched (`presentation_dispatch`)

T5 paired with delivery_in; net animal mass/count separate from protective package, free water and carrier mass. Presentation does not guarantee recipient acceptance.

- Selected flow: Presented whole live never-frozen green sea urchins dispatched
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_dispatch
  - Unit: kg
  - Basis: per 1 kg reference flow; U_presentation_dispatch must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: All logistics through first physical recipient receipt (`delivery`)

Every reference lot, including zero-distance on-site handover with recorded receipt Pre-receipt transport, handling and acceptance gate. Index actual cohort/run, operating period and event; unknown conditional instances remain evidence gaps. Other intended outputs have separate recipient/stock gates and allocation records.

#### Inputs

##### Product flows

###### Presented whole live dispatch received into receipt logistics (`delivery_in`)

T5 from presentation_dispatch; preserve dispatch count, animal mass, package/carrier mass and live/never-frozen state.

- Selected flow: Presented whole live dispatch received into receipt logistics
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Range: Unresolved instance-specific range evidence; no empirical bound supplied
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_in
  - Unit: kg
  - Basis: per 1 kg reference flow; U_delivery_in must be established for this actual instance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole live never-frozen farmed green sea urchins at first physical recipient receipt (`live_urchins_receipt`)

1 kg. The reference lot's measured accepted net whole-animal mass A divided by that same A; native test/spines retained, free water/package/incidental matter excluded. Actual receipt/live eligibility is mandatory; dispatch/invoice or historic market-size research is insufficient.

- Selected flow: Whole live never-frozen farmed green sea urchins at first physical recipient receipt
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `mass-normalization-identity`
- Range: Same-lot reference identity
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow; same accepted lot A/A
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-normalization-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_cohorts` | nursery; growout; all subsequent nodes | Index hatchery, nursery, growout and dispatch cohorts against continuously operated RAS periods. Subdivide independently metered feed/equipment/events first; carry the remaining shared operating burden using documented biomass-time and actual service demand, with metered energy alternatives and sensitivity where these differ. Record all cohorts served, including failures and live closing stock. No burden is assigned only to survivors of a convenient period. | |
| `allocation_outputs` | all intended product outputs | List every intended animal destination, grade, research/outplant transfer, live retained cohort and return with its gate and quantity. Attribute separable activities directly; allocate residual shared animal production burden using measured animal biomass-time/service demand before final mass normalization, justify physical causality, and test receipt-mass or documented relative-value sensitivity if causality is unresolved. Retained live stock carries accumulated burden into its later period rather than becoming current waste or accepted A. No avoided-production credit. | |
| `allocation_assets` | shared infrastructure; reusable containers | Maintain one asset/service ledger covering construction materials, service-life evidence, repairs, replacements, idle/failed periods, cleanup and termination. Enumerate every consuming node and period; use measured pump/filter hours, metered service, occupied volume/time or actual reuse turns as appropriate, explain selection and alternatives. Sum assigned fractions to the recorded service total; no universal lifetime or free reusable container. | |
| `allocation_service` | complete supplier services | A complete purchased transport, handling, treatment or asset service owns its included components once. If component modelling replaces it, document consistent coverage and remove overlapping service burden. Internal paired transfers move physical quantities and accumulated burdens without creating new production or a second final animal output. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each inventory card represents one stated exchange. Section 8 collection obligations require separate additional cards wherever actual material/substance, product state, destination or native unit differs. Record observed absence with evidence. Every row's U_row is a separately documented site/period/instance upper uncertainty bound in that row's native unit per 1 kg reference flow. The symbolic interval 0..U_row is an unresolved range-evidence requirement, not an observed range, default rate, universal cap or permission to treat a required active input as zero. Replace it with traceable records/uncertainty before final exchange production; a positive active event requires its actual positive quantity. Only the same-lot final reference has the algebraic 1..1 interval.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_nursery` | `nursery` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | hatchery receipt/cohort; settlement/earlier nursery history; seed count and sampled wet mass; nursery entry/exit; food as-fed stocks/rations; water sources and exchanges; mortality; T0; other destinations; nursery-active/absent evidence; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Inspect actual seed receipt and nursery start/end records; count and calibrated sample/whole-lot weighing; reconcile food, water, mortality and nursery-ready handoff T0. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual nursery periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for nursery | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |
| `cp_growout` | `growout` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | RAS/trough/cohort; E0/T0 and TR receipts; feed product/history/as-fed stocks/ration/leftovers; meters; seawater make-up and purge; recirculated volume; inlet/outlet species samples; filter sludge; mortality; repairs; T1/T1m; live closing stock; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Read cohort/feed and actual continuously operated RAS logs; meter energy/make-up/purge, sample matched inlet/outlet substances and weigh filter solids; reconcile mortality/stock and collection withdrawal T1/T1m. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual growout periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for growout | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |
| `cp_collection` | `collection` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | collection event/trough; pre-removal live state; T1 and T1m; animal count/wet mass T2; separate matter mass T2m; actual incidental environmental matter; removed matter/loss; tools and service time; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Observe actual manual removal and separately weigh/count animals and carried matter; pair T1/T1m inputs and distinct T2/T2m outputs; record own tools, losses and fates without repeating growth. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual collection periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for collection | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |
| `cp_sorting` | `sorting` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | T2 animal mass/count; T2m water/biofilm/fragments; grade criterion/result; T3 or T3b branch; TR returned cohort; alternate recipient/stock gates; animal rejects and removed-matter fates; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Grade actual incoming lot, separately weigh each animal destination and carried matter, inspect live state, and match sorting returns and selected holding/bypass branch with receiving node. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual sorting periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for sorting | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |
| `cp_holding` | `holding` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | holding-active/absent/unknown evidence; T3 entry time/state/mass/count; actual bounded intervention and equipment; duration; water/oxygen/energy; T4 exit time/live state/mass/count; alternate outputs/mortality; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Read actual entry/exit and equipment/service records for the bounded intervention; observe exit live eligibility and paired T3/T4, reconcile duration, resources, wastes and losses; otherwise substantiate T3b bypass. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual holding periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for holding | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |
| `cp_presentation` | `presentation` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | T4 or T3b branch; live animal mass/count; T5 dispatch; package/tote/liner/moisture material; reuse/replacement/cleaning/return; separate animal/package/free-water mass; alternate destinations; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Inspect presentation entry/dispatch, weigh net animal mass separately from packaging and carriers, record package/reuse ledger and cleaning, pair T5 and identify actual non-reference destinations. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual presentation periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for presentation | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |
| `cp_delivery` | `delivery` | Every actual card instance in this node | Measured event, supplier/service record and cohort/asset ledger | T5 dispatch; every actual leg/operator/payer; cargo animal/package/water mass; mode/distance/load/return; interim/terminal services; arrival time/location/live/never-frozen state; gross/tare/drain and accepted net A; rejects; alternate recipients/returns; instance identity/property/native unit/quantity/U_row; chemical/carbon/medium basis; service coverage/life; A | Trace actual dispatch through each pre-receipt leg/service to physical acceptance; inspect arrival live state and never-frozen chain, weigh calibrated gross/tare/net/drained same-lot animals and reconcile accepted A, rejected/returned goods and carriers. Retain each material and service's own native measurement; do not unify unlike services into kg or h. Attribute each actual instance once under Section 7, dividing its attributable native amount by same-lot accepted net animal mass A. | kg; kWh; t*km; actual carrier/service native unit and evidenced equivalent conversion | Each transfer/use/release/event; stock and shared services each reporting period | All actual delivery periods serving the cohort, including failure, idle, cleanup and closing stock | Declared site and actual suppliers/recipients for delivery | per 1 kg reference flow | Calibration/tare; cohort receipt/stock records; invoices; meters; fate receipts; lab and factor basis; allocation/life sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `same_lot_reference` | live_urchins_receipt | A / A = 1 kg reference animal output when A is a positive measured accepted same-lot mass; retain raw A and reject zero/missing A. | accepted receipt mass A; cp_delivery | reference amount 1 kg | mass-normalization-identity |
| `period_attribution` | all inventory rows | Attribute recorded period exchanges to cohorts and intended outputs under the allocation rules, then divide attributable exchange by the actual positive accepted animal mass A; retain native numerator units and carry closing-stock burdens forward. | node records; cohort/asset ledgers; A | attributable native-unit exchange per 1 kg reference flow | |
| `water_pollutant_balance` | direct water releases | Calculate each actual outfall substance mass from compatible measured discharge concentration and discharge volume with explicit unit conversion. Retain compatible inlet mass, stock change and biological retention separately. Outfall-minus-inlet increment is a balance diagnostic only, never automatically a negative elementary output or credit. Disclose chemical speciation, carbon origin, medium, uncertainty and any factor. Returned carrier-water mass remains separate. | inlet/outlet sample and volume; species basis; density | pollutant-specific mass and separate water mass | |
| `stock_transfer_reconciliation` | animal and carried-matter transfers | Reconcile opening stock, received seed/returns, growth, collected departures, other intended outputs, actual mortalities and closing stock by cohort; reconcile separately each T0/T1/T1m/T2/T2m/T3/T3b/T4/T5/TR pair. Biomass growth is not count creation; do not balance animals by including water. | cohort counts/masses; transfer ids; loss/matter records | disclosed stock and transfer reconciliation with uncertainty | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and actual exchanges | Prove species/hatchery origin, production state and selected formulated-feed route; verify each concrete flow and property/unit before downstream exchange binding. | supplier/cohort records; feed history; detail verification |
| `dq_receipt` | live_urchins_receipt | Actual recipient location/time, acceptance, live state and never-frozen history with net mass method are mandatory. Market-size research or a potential channel is insufficient. | physical receipt record; calibrated scale/tare/draining log; lot state |
| `dq_completeness` | all periods/nodes | Include failed and rejected cohorts, mortality, feed changes, water and pollutant fates, incident matter, retained stock, assets/reuse, all actual logistics and unknown conditional states. | cohort/stock balances; event logs; route and service reconciliation |
| `dq_uncertainty` | all variable amounts | Obtain instance-specific U_row and data provenance; explain sampling, missingness, conversion and allocation sensitivity. Symbolic ranges and absent identities remain disclosed candidate gaps. | measured records; uncertainty bounds; method assumptions; sensitivity report |
| `collect_nursery_feed_materials` | `nursery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual nursery foods and mass-measured consumable materials. Separate actual kelp, manufactured feed, oxygen and chemicals by supplied material and native mass basis. No trial diet recipe is prescribed. Asset/container services are separate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_feed_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_nursery_feed_materials must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_non_electric_energy` | `nursery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: On-site juvenile nursery actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_nursery_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_asset_services` | `nursery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: On-site juvenile nursery actual asset and reusable-container services. For each actual asset/tool/container service, declare the supplier/physical service definition and native property/unit, e.g. item-use, occupied volume-time or metered hours. Range U_row uses that same instance unit; never convert all services into kg. Retain construction composition, service-life/use evidence, repairs/replacements, cleaning and returns; avoid overlapping complete services. <br> - Flow property / unit: Actual instance property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_asset_services <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_nursery_asset_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_supplied_water` | `nursery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water received from a supplier for nursery. Retain supply source and actual density conversion; do not relabel supplier water as elementary abstraction. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_supplied_water <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_nursery_supplied_water must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_abstracted_water` | `nursery`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water abstracted directly from the environment for nursery. Instantiate actual seawater or freshwater source and withdrawal location; exclude supplier water and internal recirculation. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_abstracted_water <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_nursery_abstracted_water must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_other_intended` | `nursery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended nursery destinations and retained live stock. Instantiate each actual sale, research/outplant destination or retained cohort separately, with recipient/stock gate, mass, count and carried burdens; not waste or reference delivery. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_nursery_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_wastes` | `nursery`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Nursery mortalities, residues and discarded materials sent to treatment. Separate dead animals, uneaten food, solids, wastewater and packaging by actual treatment destination; preserve wet/dry and liquid/solid basis. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_nursery_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_nursery_direct_releases` | `nursery`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Nursery direct environmental releases by substance and medium. Instantiate separately returned carrier water and measured/modelled individual pollutants to seawater or air, retaining chemical and carbon basis. Treatment-routed waste is not a direct release. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_nursery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_nursery_direct_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_nursery_direct_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_non_electric_energy` | `growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recirculating V-trough biological growout actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_growout_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_materials` | `growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual growout oxygen and mass-measured consumable materials. Instantiate actual oxygen, chemical/additive formulations, filter consumables and repair materials as supplied products by their native mass basis; asset service is separate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_materials must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_asset_services` | `growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recirculating V-trough biological growout actual asset and reusable-container services. For each actual asset/tool/container service, declare the supplier/physical service definition and native property/unit, e.g. item-use, occupied volume-time or metered hours. Range U_row uses that same instance unit; never convert all services into kg. Retain construction composition, service-life/use evidence, repairs/replacements, cleaning and returns; avoid overlapping complete services. <br> - Flow property / unit: Actual instance property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_asset_services <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_growout_asset_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_supplied_water` | `growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Supplied seawater or freshwater for growout. Record each purchased water supply separately from abstraction and recirculated volumes. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_supplied_water <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_supplied_water must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_abstracted_water` | `growout`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Growout direct environmental water abstraction. Record actual withdrawal source, volume, density and pumping responsibility; recycled water is internal, not repeated abstraction. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_abstracted_water <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_abstracted_water must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_carried_matter` | `growout`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water, biofilm and fragments accompanying collection withdrawal. T1m: measure separately from animal mass and pair with collect_collection_carried_matter; retain origin and subsequent T2m sorting fate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_carried_matter <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_carried_matter must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_other_intended` | `growout`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended growout destinations and live closing stock. Separate retained small cohorts, actual research/outplant transfers and other intended products with their own gate and carried burdens; no implicit sale or reference output. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_wastes` | `growout`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Growout solids, mortalities and wastes routed to treatment. Separate mortality, rejected feed, filter sludge, wastewater, removed biofilm and spent assets by actual treatment route; include abnormal and failed cohorts. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_aqueous_pollutants` | `growout`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual growout pollutants discharged directly to seawater. Instantiate only evidenced substance rows, e.g. measured ammonium ion versus ammonia-N, nitrate versus nitrate-N, phosphate versus P and organic carbon on its stated basis; subtract inlet background using compatible mass and water records. Do not label nutrient removal as an avoided burden. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_aqueous_pollutants <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_aqueous_pollutants must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_air_releases` | `growout`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual direct RAS air releases with explicit carbon origin. Instantiate actual off-gas/combustion substances; retain measured or modelled CO2, CH4 or N2O basis and separate fossil from biogenic carbon. No assumed zero, generic all-carbon flow or default nitrification factor. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_growout` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_air_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_growout_air_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_carried_matter` | `collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Internal water, biofilm and fragments accompanying culture animals. T1m from collect_growout_carried_matter; this is carried production material, not fresh environmental abstraction; add observed collect_collection_incidental separately into T2m. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_carried_matter <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_carried_matter must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_non_electric_energy` | `collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Manual physical collection from V-troughs actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_collection_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_materials` | `collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Mass-measured collection consumables. Record actual wash chemicals and consumable collection materials by item and native mass basis; reusable tools, containers and asset services are separate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_materials must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_asset_services` | `collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Manual physical collection from V-troughs actual asset and reusable-container services. For each actual asset/tool/container service, declare the supplier/physical service definition and native property/unit, e.g. item-use, occupied volume-time or metered hours. Range U_row uses that same instance unit; never convert all services into kg. Retain construction composition, service-life/use evidence, repairs/replacements, cleaning and returns; avoid overlapping complete services. <br> - Flow property / unit: Actual instance property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_asset_services <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_collection_asset_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_incidental` | `collection`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental seawater and attached environmental matter entering collection. Record only matter drawn from the environment at this event; RAS water, algae/solids from production are internal carried material T1m, not new elementary abstraction. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_incidental <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_incidental must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_carried_out` | `collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Carried water, biofilm and fragments transferred to sorting. T2m paired only with collect_sort_incidental, with separately measured quantity by matter type; reconcile incoming T1m and collect_collection_incidental, removal and actual loss. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_carried_out <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_carried_out must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_other_intended` | `collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other live intended destinations from collection. Instantiate actual direct research/stock/alternate-grade handoffs separately; no collected lot disappears into unspecified losses. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_wastes` | `collection`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Collection losses and discarded materials routed to treatment. Record actual dead/damaged rejected animals, spent materials and wastewater by fate; damage alone does not make an intended lower grade waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_direct_releases` | `collection`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Collection direct releases by substance and medium. Separate returned water from pollutant substance rows and identify actual outlet; do not also count treatment-bound quantities. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_direct_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_collection_direct_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_incidental` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water, biofilm and fragments carried into sorting. T2m from collect_collection_carried_out; trace T1m carried from growout and any collect_collection_incidental; these are never silently included in accepted animal mass. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_incidental <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_sort_incidental must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_non_electric_energy` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Grade and destination sorting actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_sorting_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_materials` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Mass-measured sorting consumables. Record actual cleaning chemicals and consumable sorting aids by supplied item/native mass; scale, tray and reuse services are separate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_sort_materials must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_asset_services` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Grade and destination sorting actual asset and reusable-container services. For each actual asset/tool/container service, declare the supplier/physical service definition and native property/unit, e.g. item-use, occupied volume-time or metered hours. Range U_row uses that same instance unit; never convert all services into kg. Retain construction composition, service-life/use evidence, repairs/replacements, cleaning and returns; avoid overlapping complete services. <br> - Flow property / unit: Actual instance property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_asset_services <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_sorting_asset_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_other_intended` | `sorting`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live grades and non-reference destinations. Instantiate every actual downgraded sale, research/seed/outplant destination or closing live stock with separate recipient gate and quantity. They are intended products, not automatic rejects or waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_sort_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_wastes` | `sorting`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Dead/rejected animals and removed matter sent to treatment. Separate animal discards, carried solids/water and consumables by actual treatment fate; account removed matter T2m. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_sort_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_direct_releases` | `sorting`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Sorting water and pollutants directly released. Instantiate carrier water and each evidenced pollutant with receiving medium; no automatic return to sea or pollutant-free discharge. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_direct_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_sort_direct_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_materials` | `holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding oxygen and mass-measured consumables. Expand actual oxygen, chemicals and consumable materials by item/native mass; use observed records. Asset/container services are separate. No cooling, medication, temperature or duration is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_holding_materials must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_non_electric_energy` | `holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Observed bounded live holding actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_holding_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_asset_services` | `holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Observed bounded live holding actual asset and reusable-container services. For each actual asset/tool/container service, declare the supplier/physical service definition and native property/unit, e.g. item-use, occupied volume-time or metered hours. Range U_row uses that same instance unit; never convert all services into kg. Retain construction composition, service-life/use evidence, repairs/replacements, cleaning and returns; avoid overlapping complete services. <br> - Flow property / unit: Actual instance property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_asset_services <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_holding_asset_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_supplied_water` | `holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding supplied water. Record actual supplier seawater/freshwater, volume/density and use once; distinguish recirculation. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_supplied_water <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_holding_supplied_water must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_abstracted_water` | `holding`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding direct environmental abstraction. Instantiate actual source and withdrawal event; do not duplicate supplier or recirculated water. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_abstracted_water <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_holding_abstracted_water must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_other_intended` | `holding`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended holding exit destinations or retained live stock. Instantiate each actual alternate live-product recipient or retained cohort with own exit/stock record and burden. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_holding_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_wastes` | `holding`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding mortalities, residues and wastewater sent to treatment. Record failed holding batches, removed animals, spent media and actual treatment destination; maintain wet/dry basis. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_holding_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_direct_releases` | `holding`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding direct releases by substance and medium. Separate carrier water, individual aqueous pollutants, refrigerant and combustion/biological gases when actually released; preserve carbon origin and substance basis. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_direct_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_holding_direct_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Mass-measured protective presentation materials. Instantiate actual liners, labels, moisture media and single-use protective materials by supplied item/native mass; reuse/container services are separate. Exclude all from animal reference mass. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_presentation_materials must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_non_electric_energy` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Live protective presentation actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_presentation_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_asset_services` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Live protective presentation actual asset and reusable-container services. For each actual asset/tool/container service, declare the supplier/physical service definition and native property/unit, e.g. item-use, occupied volume-time or metered hours. Range U_row uses that same instance unit; never convert all services into kg. Retain construction composition, service-life/use evidence, repairs/replacements, cleaning and returns; avoid overlapping complete services. <br> - Flow property / unit: Actual instance property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_asset_services <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_presentation_asset_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_other_intended` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended presentation destinations and reusable containers. Instantiate each alternate live grade destination and reusable container return separately, with receiver, reuse/service ledger and quantity; container return is not a second animal output. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_presentation_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_wastes` | `presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Presentation rejects, mortalities and discarded packaging to treatment. Separate actual product disposal from intended lower-grade products and package replacement; identify treatment and wastewater fate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_presentation_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_direct_releases` | `presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Presentation direct releases by substance and medium. Instantiate actual water returns and pollutants separately and any direct energy/refrigerant emissions; upstream supply emissions remain upstream. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_direct_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_presentation_direct_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_services` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Complete pre-receipt transport services by leg. Record every actual transport leg, cargo including package/water, distance, vehicle/load/return leg and integrated cooling irrespective of payer. A complete service includes its energy/assets/releases; do not add them again. Terminal handling is separate. <br> - Flow property / unit: Transport / t*km <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_services <br> - Unit: t*km <br> - Basis: per 1 kg reference flow; U_delivery_services must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_non_electric_energy` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: All logistics through first physical recipient receipt actual non-electric energy carriers. Conditional on actual use: instantiate each fuel or supplied thermal energy carrier with native mass/volume/energy unit and matching U_row unit, supplier and measured quantity. Link combustion/off-gas to the same event and carbon origin; complete supplier services already containing fuel are not duplicated. Observed absence requires evidence. <br> - Flow property / unit: Actual carrier property / actual native carrier unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_non_electric_energy <br> - Unit: actual native carrier unit <br> - Basis: per 1 kg reference flow; U_delivery_non_electric_energy must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_handling` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Complete pre-receipt handling, terminal or interim holding service. Instantiate each actual complete handling/terminal/interim service with its defined native unit (e.g. lot-handled or occupied time/volume); retain own U_row unit and measured quantity. Do not force unlike services to h. Include all pre-receipt events regardless operator; exclude component burdens inside complete service. <br> - Flow property / unit: Actual instance service property / actual native service unit <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_handling <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; U_delivery_handling must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_intended` | `delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live destinations, returned goods and reusable carriers. Instantiate every actual lower-grade acceptance, diverted recipient, returned live lot and reusable carrier return at its own gate; exclude from selected A and carry its burdens. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_other_intended <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_delivery_other_intended must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_wastes` | `delivery`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Pre-receipt mortality, rejected goods and wastes to treatment. Include all dispatch losses and actual disposal/cleanup fate even when recipient rejects the entire lot; no accepted lot means no fabricated reference dataset. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_wastes <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_delivery_wastes must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_direct_releases` | `delivery`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Direct pre-receipt releases outside purchased complete services. Record separately owned actual release substances/medium, carbon origin and quantity; exclude emissions already inside collect_delivery_services and distinguish wastewater treatment. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Measured attributable instance amount per 1 kg reference flow; preserve raw node/period quantity and native unit. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unresolved instance-specific range evidence; no empirical bound supplied <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_direct_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow; U_delivery_direct_releases must be established for this actual instance <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | reference | Require S. droebachiensis, hatchery origin, Maine land-based V-trough RAS/formulated-feed history, whole native test/spines, live never-frozen state and actual first physical receipt. Excluded routes or missing acceptance cannot be relabelled to pass. | |
| `validation_mass` | all nodes | Check calibrated receipt net mass, positive A, final 1 kg, native units, feed/water/count conversions and exact matched transfer state/mass/count, including carrying matter and both holding branches. Internal quantities need not equal 1 kg. | mass-normalization-identity |
| `validation_outputs` | all nodes | Account every intended grade/destination and retained/returned cohort separately from wastes; require receipt/stock gate and burden ownership, no duplicated final output and no environmental credit. Include collection independent of growth and sorting's incident matter. | |
| `validation_periods` | nursery; growout; shared assets | Reconcile run/period/cohort boundaries, cleaning/changeover/repair/replacement/termination, failed periods, mortality, open stock and shared service fractions. Require attribution rationale, actual service-life evidence and sensitivity; prevent repeated asset or complete-service components. | |
| `validation_fates` | water; wastes; direct releases | Require actual supplier/abstraction distinction, wastewater treatment versus direct discharge, carrier water versus pollutant species, chemical/N/P/carbon/medium basis and fossil/biogenic distinction. Unknown fate or release is unresolved, not zero. | |
| `validation_states` | nursery; holding; all applicable collection obligations | Select actual observed active/absent state and populate zero/one/multiple concrete instances with own quantity, native unit, recipient and verified UUID. Missing state, symbolic U_row, identity or method evidence must remain disclosed; checker success is not publication readiness. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package; after review may serve as secondary_dataset or background_dataset |
| downstream_use | Traceable process and lifecyclemodel projections for the same declared live whole animal receipt state |
| allowed_use | Matching species, hatchery origin, technology, diet history, geography, period and physically evidenced receipt gate with stated uncertainty |
| excluded_use | Wild-adult enhancement, ranching/cage/co-culture, extracted roe, dead/eviscerated/frozen product; assumed shipment, profitability, legal eligibility, safety, treatment efficacy or quality guarantees |
| required_metadata | PCR/version; cohort/site/periods; seed/nursery/feed history; reference/state/receipt; native units; transfer/stock ledgers; asset/services; logistics; allocation and actual active/absent states |
| required_quality_disclosure | Sources and measured coverage; upstream gaps; failed cohorts; open stock; unresolved identities/ranges/states/fates; allocation and lifetime sensitivity; performed/skipped validation checks |
| update_trigger | Changed origin, diet, site, technology, output state, recipient gate, treatment, period/asset assumptions, new primary data or verified identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| umaine-green-urchin-growout-2013 | literature | University of Maine CCAR, Assessment of grow-out strategies for the green sea urchin, 2009–2013 final report, objectives/summary and land nursery/RAS methods, PDF pp. 1–3, 6–10; https://umaine.edu/cooperative-aquaculture/wp-content/uploads/sites/75/2016/03/Final-report-NRAC-Sea-urchin-project.pdf | Historical hatchery/nursery and recirculating V-trough route, formulated-feed trial history and actual equipment responsibilities; no numerical PCR defaults or commercial shipment claim |
| noaa-green-urchin-manual-2023 | handbook | Eddy, Morse, Kogson and Suckling (2023), Green Sea Urchin Aquaculture in the Northeast US: Hatchery, Nursery, and Growout, marketing, PDF pp. 12–13; https://repository.library.noaa.gov/view/noaa/70579/noaa_70579_DS1.pdf | Potential whole-live recipient channel; actual eligible receipt must be independently evidenced; no safety, disease, legal, shelf-life, profitability or roe-quality prescription |
| un-cpc3-04522-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, 04522; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only: farmed sea urchins with/without shell, live/fresh/chilled; this PCR is narrower |
| mass-normalization-identity | method_factor | Same measured accepted lot identity A/A, defined in Section 8 of this PCR | Algebraic final reference normalization only; not empirical yield or internal transfer amount |
