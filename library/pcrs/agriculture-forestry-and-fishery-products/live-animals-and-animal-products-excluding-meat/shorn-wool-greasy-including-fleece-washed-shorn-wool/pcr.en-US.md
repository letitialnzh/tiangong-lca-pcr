---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.shorn-wool-greasy-including-fleece-washed-shorn-wool
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Shorn greasy sheep wool at the producing farm gate

## Scope and Applicability

This rule covers sheep/lamb fleece cut from live animals and transferred as greasy, unscoured wool at the producing farm gate. Optional fleece washing occurs **on the animal before shearing**. Post-shear scouring, degreasing, topmaking, pulled pelt wool, and goat or camelid hair are excluded. The CPC 02941 label is interpreted with the WCO Chapter 51 sheep/lamb definition of wool (`un-cpc-2025`; `wco-hs-2017`).

## Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.shorn-wool-greasy-including-fleece-washed-shorn-wool |
| classification_refs | CPC 3.0 02941; proposed exact relation pending decision |
| covered_products | Greasy shorn sheep/lamb wool, including fleece washed on the animal before shearing |
| excluded_products | Pulled wool, goat/camelid hair, post-shear scoured wool, clean wool top, yarn |
| representative_product | As-shorn greasy sheep fleece, skirted and baled on the producing farm |
| production_route | Managed flock → optional on-animal wash → shearing → airing/skirting → grading → baling and farm handover; wash/no-wash routes are mutually exclusive per fleece, with distinct water, effluent and dry-off records |
| market_state | Unscoured greasy wool; record moisture, vegetable matter, grade and bale state |

## Reference Flow

| Field | Value |
| --- | --- |
| What | Greasy shorn sheep wool transferred at the producing farm gate |
| How much | 1 kg net of bale tare |
| How well | Declared sheep breed, greasy/fleece-washed-on-animal state, moisture and grade; not post-shear scoured |
| How long or cycle | Declared flock year and shearing event with earlier rearing years attributed |
| reference_flow_link | `farm_wool` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Shorn greasy sheep wool at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep/lamb breed and cohort; farm; flock year; shear date; unwashed or fleece-washed-on-animal; moisture; vegetable matter; grade; net bale mass; farm handover |

## Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_greasy_mass` | wool outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net as-received greasy wool after bale tare, not clean-wool yield (`iwto-wool-lca-2016`). |
| `moisture_state` | fleece | Mass fraction | % | Record moisture method, date and wet/dry basis; fleece-washed is not scoured. |
| `flock_period` | flock activity | Original activity property | original unit | Assign events to flock/cohort and year before per-kg normalization. |

## System Boundary

Include managed sheep production, feed and pasture, manure, conditional pre-shear on-animal washing, shearing, farm airing/skirting, grade sorting, baling and producing-farm handover. Account for upstream purchased animal, feed, energy, water, fertilizer and packaging datasets once. Record rearing, replacements, culls and shared facilities across years. Stop before auction, post-farm freight, scouring, grease extraction and textile manufacture (`iwto-wool-lca-2016`).

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed sheep/lamb cohort with age, origin, opening stock and inherited burden |
| starting_condition_role | flock starting inventory, not zero-burden animals |
| product_classification_scope | greasy shorn sheep wool only |
| recursive_input_rule | Purchased greasy wool entering baling is a separately linked same-category input, never newly grown fleece |
| upstream_dataset_requirement | Purchased animals, feed, nutrient, energy, water and packaging datasets where crossing boundary |
| disclosure | breed, farm, flock-year, wash route, shear and grade balances, animal/manure co-products, attribution method |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate_limit` | all nodes | Stop at accepted greasy-wool bale handover; exclude post-shear scouring and later logistics. | `un-cpc-2025`; `iwto-wool-lca-2016` |
| `wash_gate` | optional wash | Wash fleece while still on live sheep before shearing; document water, effluent and dry-off, retaining greasy output. | `wco-hs-2017` |
| `route_delta` | wash/no-wash | Both inherit flock husbandry; one fleece uses one route. Wash adds a separate node and inventory; no double route attribution. | `iwto-wool-lca-2016` |

## Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flock` | Managed sheep flock | required | all routes | biological fleece production and manure | flock-year and cohort records |
| `fleece_wash` | On-animal fleece wash | conditional | pre-shear washing on animal | alternative route delta | wash event |
| `shearing` | Live-sheep shearing | required | all routes | independent fleece harvest | shear event |
| `conditioning` | Farm airing and skirting | required | after shearing | primary non-scouring preparation | mass balance |
| `grading` | Grade and destination sorting | required | accepted and reject states | classification handoffs | grade mass |
| `baling` | Farm baling and handover | required | accepted wool | presentation and gate | net bale mass |

### Process: Managed sheep flock (`flock`)

#### Inputs

##### Product flows

###### Feed and pasture intake (`feed`)

Quantify purchased rations and grazed biomass by cohort, feed type, dry matter and year; owned-land feed production is linked once.

- Selected flow: Sheep feed and grazed biomass by actual identity
- Flow property / unit: Mass / kg dry matter
- Amount rule: intake from purchase, forage and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after flock-year attribution
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flock_feed`
- Sources: `iwto-wool-lca-2016`
- Range: Provisional feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg dry matter/kg greasy wool
  - Basis: broad first-pass screen, replace with flock records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drinking and husbandry water (`flock_water`)

Separate drinking and cleaning by purpose and source; concrete exchanges follow records.

- Selected flow: Water supply for flock operations
- Flow property / unit: Volume / m3
- Amount rule: metered or documented withdrawal by purpose and year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional flock water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/kg greasy wool
  - Basis: broad first-pass use screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pasture nutrient amendments (`nutrient_input`)

One consolidated card covers mineral and organic nutrients when owned pasture production is in scope; expand by actual product and N/P composition.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg product and kg N or P
- Amount rule: application records by product, nutrient and field-year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after field attribution
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock_feed`
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg product/kg greasy wool
  - Basis: zero-allowed broad first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flock energy carriers (`flock_energy`)

Expand carriers from meter/fuel records by use and service year, including shared housing and manure equipment.

- Selected flow: Energy supply for flock operations
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: meter and fuel records by carrier and year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/kg greasy wool
  - Basis: broad cross-carrier screen, retain original units
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live sheep transferred from flock (`live_sheep`)

Record sale/cull heads, live mass and destination as independently transferred outputs; avoid duplicate full burden in a live-sheep dataset.

- Selected flow: Live sheep by actual cohort and gate
- Flow property / unit: Mass and count / kg and head
- Amount rule: net transfer by cohort and date
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock_outputs`
- Sources: `iwto-wool-lca-2016`
- Range: Provisional live-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg live sheep/kg greasy wool
  - Basis: broad co-output completeness screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported manure (`manure_export`)

Only productive independently transferred manure is a co-product; otherwise manure remains in waste management.

- Selected flow: Exported sheep manure by actual wet/dry state
- Flow property / unit: Mass / kg
- Amount rule: net transferred mass after farm use and storage change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg wet manure/kg greasy wool
  - Basis: broad product-state screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Enteric biogenic methane to air (`enteric_ch4`)

Calculate sheep enteric methane by cohort, diet and year; manure methane is a different pathway.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: declared IPCC tier applied to cohort-year activity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional enteric methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg CH4/kg greasy wool
  - Basis: broad pathway screen, not an emission factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o`)

Report direct manure-management N2O; field-soil and indirect pathways are separate where applicable.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: excreted N × management share × declared factor and N-to-N2O conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg N2O/kg greasy wool
  - Basis: broad pathway screen, not a factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3`)

Track NH3 from documented manure storage/application pathway and reconcile N.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: manure N × documented volatilization method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greasy wool after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional ammonia screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NH3/kg greasy wool
  - Basis: broad pathway screen, not a factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: On-animal fleece wash (`fleece_wash`)

#### Inputs

##### Product flows

###### Pre-shear fleece-washing water (`wash_water`)

Use water while fleece remains on living sheep; record source, collection/discharge and wash event.

- Selected flow: Water supply for on-animal fleece wash
- Flow property / unit: Volume / m3
- Amount rule: metered or estimated use by event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fleece-washed greasy wool
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_shear`
- Range: Provisional on-animal wash screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/kg washed greasy wool
  - Basis: wash-route-only screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Captured wash effluent (`wash_effluent`)

If collected, record volume and recipient; direct release requires medium-specific elementary modelling, not a guessed waste UUID.

- Selected flow: Collected on-animal wash effluent
- Flow property / unit: Volume / m3
- Amount rule: measured captured outflow by event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fleece-washed greasy wool
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_shear`
- Range: Provisional effluent screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/kg washed greasy wool
  - Basis: zero permitted when no effluent captured
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live-sheep shearing (`shearing`)

Independent harvest: fleece is removed from a living production animal and moves to farm preparation; the sheep remains in the flock.

#### Inputs

##### Product flows

###### Shearing equipment energy (`shear_energy`)

Record electric or fuel-powered clippers and related equipment by carrier and event.

- Selected flow: Energy for shearing
- Flow property / unit: Energy or carrier / kWh, MJ or L
- Amount rule: meter or equipment log per event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg captured fleece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_shear`
- Range: Provisional shearing energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh-equivalent/kg captured fleece
  - Basis: broad clipper-energy screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Captured greasy shorn fleece (`captured_fleece`)

Weigh fleece by animal/cohort and shear event before sorting; retain the on-animal wash state.

- Selected flow: Greasy sheep fleece immediately after shearing
- Flow property / unit: Mass / kg
- Amount rule: gross captured fleece net of collection tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final greasy wool
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_shear`
- Sources: `iwto-wool-lca-2016`
- Range: Capture-to-gate mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg captured fleece/kg final greasy wool
  - Basis: broad loss screen, not a yield claim
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm airing and skirting (`conditioning`)

First post-capture preparation airs and removes visible contaminants by hand. It does not post-shear wash, extract grease or create clean wool. Skirted greasy fleece moves to grading; rejects are measured.

#### Outputs

##### Product flows

###### Skirted greasy fleece (`skirted_fleece`)

Record still-greasy prepared fleece mass and moisture before grade assignment.

- Selected flow: Skirted unscoured greasy fleece
- Flow property / unit: Mass / kg
- Amount rule: measured prepared fleece
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final greasy wool
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_bale`
- Range: Skirted fleece screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg skirted fleece/kg final greasy wool
  - Basis: broad mass-balance screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Skirting and contamination rejects (`skirting_reject`)

Separate unmarketable soil, vegetation and fibre from independently sold low-grade wool; record disposal/recovery destination.

- Selected flow: Farm skirting rejects by material and destination
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg captured fleece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_bale`
- Range: Reject fraction screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg captured fleece
  - Basis: physical mass-balance bound
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grade and destination sorting (`grading`)

Incoming material is skirted greasy fleece. Declare accepted commercial grades and downgraded/reject destinations with handoff. Each saleable grade goes to baling; unmarketable matter is waste, not a low-grade co-product.

#### Outputs

##### Product flows

###### Accepted greasy wool grades (`accepted_grades`)

Measure accepted grade-specific net mass transferred to farm baling.

- Selected flow: Accepted grade-specific greasy sheep wool
- Flow property / unit: Mass / kg
- Amount rule: measured grade-specific mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg final greasy wool
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_bale`
- Range: Accepted-grade share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted grade/kg final greasy wool
  - Basis: grade shares sum to accepted mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded saleable greasy wool (`downgraded_wool`)

Where separately marketed, retain grade, buyer gate and mass. Unsaleable material is reject.

- Selected flow: Downgraded but saleable greasy sheep wool
- Flow property / unit: Mass / kg
- Amount rule: net downgraded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg final greasy wool
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_bale`
- Range: Downgraded-grade share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgrade/kg final greasy wool
  - Basis: zero where all fleece accepted standard grade
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm baling and handover (`baling`)

Pack or present accepted greasy wool for protection at farm. Record bale reuse, ownership and returns. Exclude distribution after handover.

#### Inputs

##### Product flows

###### Bale and wrap materials (`bale_material`)

Record actual textile, film, ties and labels; determine reuse cycles from farm records.

- Selected flow: Baling and presentation materials
- Flow property / unit: Mass or count / kg or item
- Amount rule: net material consumed per bale, net of documented reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net greasy wool at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_bale`
- Range: Presentation-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg material/kg greasy wool
  - Basis: zero permitted for unpackaged transfer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net farm-gate greasy wool (`farm_wool`)

Final net mass by grade, bale and wash state is the reference output. The platform plant-gate Raw Wool candidate is not fixed here.

- Selected flow: Shorn greasy sheep wool at producing farm gate
- Flow property / unit: Mass / kg
- Amount rule: accepted and saleable downgraded dispatch, net of bale tare
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net greasy wool at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_bale`
- Sources: `un-cpc-2025`; `iwto-wool-lca-2016`
- Range: Reference output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg net greasy wool
  - Basis: one declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

## Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `flock_outputs` | fleece, live sheep/lambs, exported manure and other independent products | Prefer physical subdivision where separable; for shared flock burdens disclose and consistently apply a justified allocation such as period-specific economic value, with price and sensitivity. No zero-burden cull sheep or dual product/waste manure. | `iwto-wool-lca-2016` |
| `period_link` | breeding, replacement, growth, shearing and culling years | Link inputs, animal stocks, events and outputs across relevant years; amortize only with observed service/lifetime evidence. Assign animal-year burden once. | `iwto-wool-lca-2016` |
| `shared_assets` | pasture, housing, water system, shearing shed and equipment | Identify flock/shearing/baling consumers and service years; allocate shared use by documented hours, area or animal-time before product allocation; avoid node duplication. | `iwto-wool-lca-2016` |
| `grade_accounting` | accepted, downgraded and rejected fleece | Keep grade outputs and destinations separate; marketable downgrade is product, unsaleable skirtings waste, and fibre cannot be both. | `iwto-wool-lca-2016` |

## Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_feed` | `flock` | feed, nutrients | flock/field/invoice | cohort; pasture area; diet; dry matter; nutrient composition; date; stock | farm records and documented intake model | kg, ha | monthly/event | flock and rearing years | farm | reconcile purchased, grown and consumed | receipts, feed tests |
| `cp_water_energy` | `flock` | water, energy | meter/invoice | source; carrier; purpose; period; shared consumer | meter and invoice | m3, kWh, L | monthly | flock year | farm | allocate by consumer | meter images, invoices |
| `cp_flock_outputs` | `flock` | live animals | sale/stock register | cohort; head; live mass; date; gate | weighbridge and stock count | kg, head | event | flock year | farm | opening + additions - removals = closing | sale slips, register |
| `cp_manure` | `flock` | manure and emissions | activity register | cohort; N intake/excretion; management; storage; transfer; factors | collect activity and IPCC tier | kg N, kg manure | monthly/event | flock year | farm | distinct CH4, N2O, NH3 pathways | activity/factor sheets |
| `cp_wash_shear` | `fleece_wash`, `shearing` | wash and capture | event | sheep; wash date/water/effluent/dry-off; shear date; raw mass; energy | event log, scale, meter | kg, m3, kWh | event | shear season | farm | link one route to one fleece | event and calibration sheets |
| `cp_grade_bale` | `conditioning`, `grading`, `baling` | mass/presentation | grade/bale register | capture; skirtings; grade; moisture; tare; packing/reuse; dispatch | scale and buyer docket | kg, item | bale | shear season | farm | capture = grades + rejects + change/loss | scale tickets, grading records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `wool_balance` | shear to gate | captured = accepted grades + downgraded grades + skirtings + measured moisture/other loss; disclose residual | event and bale records | net reference mass and balance | `iwto-wool-lca-2016` |
| `enteric_method` | enteric CH4 | declared IPCC tier on age/diet/productivity-specific activity, with factor and unit conversion | cohort, diet, duration | kg CH4 distinct from manure | `ipcc-livestock-2019` |
| `manure_n_method` | manure N2O/NH3 | excreted N × management shares × distinct factors and conversions; reconcile N | excretion, management, factors | kg N2O and NH3 | `ipcc-livestock-2019` |
| `allocated_reference` | shared activities | activity × documented service-period and co-product shares ÷ net greasy wool | use logs, years, outputs and values | activity per kg reference | `iwto-wool-lca-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | wool | Document sheep/lamb origin, greasy state, on-animal wash, grade and farm gate; reject unknown post-shear wash. | shear and sale records |
| `completeness` | flock/fleece | Reconcile animals, feed, manure, capture, grades, co-products and rejects. | mass and stock balances |
| `temporal` | multi-year flock | Link animal age, events and shared assets to service years; disclose gaps. | cohort and asset registers |
| `measurement` | masses/moisture/energy | Retain calibration and original units; disclose estimates. | scale/meter records |

## Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference/grades | Reject goat/camelid/pulled wool, post-shear scoured fibre, non-farm gate or unknown species; check greasy net kg. | `un-cpc-2025`; `wco-hs-2017` |
| `validate_route` | wash/no-wash | Confirm wash on living sheep before shear with water/effluent/dry-off evidence; one fleece uses one route. | `wco-hs-2017`; `iwto-wool-lca-2016` |
| `validate_balance` | fleece/co-products | Reconcile capture, grades, rejects, bale tare, live animals and manure; no product/waste dual classification. | `iwto-wool-lca-2016` |
| `validate_period` | flock/shared assets | Verify period, replacement, service and co-product shares sum once; no inherited-burden omission. | `iwto-wool-lca-2016` |
| `validate_binding` | concrete exchanges | Resolve unresolved inputs from actual records and exact UUIDs for concrete outputs before dataset publication. | |

## Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-category package for shorn greasy sheep wool |
| downstream_use | `secondary_dataset` or `background_dataset` after review and concrete identity verification |
| allowed_use | process/lifecycle model for declared breed, farm, period, grade and farm gate |
| excluded_use | scoured/pulled wool, goat hair, generic plant-gate raw wool, unverified UUID publication |
| required_metadata | farm; years; cohort; wash route; shear/bale dates; grade; moisture; mass balance; allocation; UUID evidence |
| required_quality_disclosure | measured/calculated values, factor tier, gaps, provisional ranges, co-product sensitivity |
| update_trigger | route, species, gate, grade, allocation, factor or identity evidence changes |

## Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | [UNSD CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | shorn versus pulled identity |
| `wco-hs-2017` | `official_guidance` | [WCO HS Chapter 51](https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2017/2017/1151_2017e.pdf?la=en) | sheep/lamb wool versus other hair |
| `iwto-wool-lca-2016` | `official_guidance` | [IWTO wool LCA guidelines](https://iwto.org/wp-content/uploads/2020/04/IWTO-Guidelines-for-Wool-LCA.pdf) | farm gate, scouring split, inventory, allocation |
| `ipcc-livestock-2019` | `method_factor` | [IPCC 2019 Refinement Vol. 4 Ch. 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | enteric and manure pathways |
