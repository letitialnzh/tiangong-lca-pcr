---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cereal-straw-husks-unprepared-ground-pressed-or-in-the-form-of-pellets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cereal straw, husks, unprepared, ground, pressed, or in the form of pellets

## 1. Scope and Applicability

This PCR covers cereal straw and cereal husks separated from grain production and supplied unprepared, chopped, ground, pressed, baled, wafered, or pelletized. It supports a feed-grade plant-gate reference while requiring cereal species, straw versus husk, physical form, moisture fraction and basis, grade, and route. Chemical or biological treatment, ensiling, complete compound feed, non-cereal residues, and fuel-only products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cereal-straw-husks-unprepared-ground-pressed-or-in-the-form-of-pellets` |
| classification_refs | `cpc:3.0:01913` (`0 > 01 > 019 > 0191 > 01913`) |
| covered_products | Cereal straw or husks, unprepared or physically chopped, ground, pressed, baled, wafered, or pelletized |
| excluded_products | Chemically treated straw; ensilage; complete feed; non-cereal residues; fuel-only products; undeclared mixtures |
| representative_product | Feed-grade cereal straw at plant gate |
| production_route | Source separation and collection, inbound movement, grading and stabilization, optional size reduction, optional forming |
| market_state | Loose, baled, chopped, ground, pressed, wafered, or pelletized; moisture and cereal source declared |

The parent route is physical collection and preparation after grain separation. Unprepared material bypasses size reduction and forming; ground material uses size reduction; pressed or pelletized material uses forming. Routes may coexist at a facility but quantities must be partitioned.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Feed-grade cereal straw, or an explicitly declared covered cereal-husk variant |
| How much | 1,000 kg as received at the plant gate |
| How well | Cereal source, straw/husk, form, moisture fraction and basis, grade, contamination status, and route recorded |
| How long or cycle | One lot or continuous reporting period ending at plant hand-off |
| reference_flow_link | `reference_straw_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Straw `b1dd1313-1bc0-4baf-8cfb-50e8ea2a307c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | `gate=Production mix, at plant`; `route=feed-grade`; cereal; straw/husk; physical form; moisture fraction and basis; grade; geography; preparation route |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg as-received mass and measured moisture for the same lot. |
| `dry_matter` | All material states | Mass | kg dry matter | Dry matter = as-received mass × (1 − moisture mass fraction). |
| `form_partition` | Route outputs | Mass | kg | Partition unprepared, ground, pressed and pelletized states without overlap. |
| `lot_balance` | Each node | Mass | kg | Reconcile input, accepted output, downgrade, rework, waste, dust and moisture change. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Grain and residue are separated and straw or husk is available at a documented source hand-off. |
| starting_condition_role | Secondary co-product hand-off from cereal production |
| product_classification_scope | CPC 3.0 `01913` |
| recursive_input_rule | Record purchased CPC 01913 material once at its incoming state and obtain prior preparation burdens from its upstream dataset. |
| upstream_dataset_requirement | Cereal, separation hand-off, grain/straw attribution, moisture basis and inherited burdens |
| disclosure | Burden inheritance or cut-off; origin; route; moisture change; grade; destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `secondary_origin` | Source material | Secondary status requires a documented grain-separation hand-off; it does not by itself authorize zero burden. | `iso-14044-2006` |
| `physical_route` | Covered product | Include physical collection, drying or ventilation, chopping, grinding, pressing, pelletizing, cooling and storage when performed; exclude chemical upgrading and complete-feed blending. | `fao-crop-residue-machinery-2002`; `fao-crop-residue-upgrading-2002` |
| `moisture_state` | Every hand-off | Record moisture on the same sampling basis as mass and separate water addition, evaporation and dry-matter loss. | `fao-feed-good-practices-2010` |
| `destinations` | Outputs | Keep accepted, downgraded, alternate-use, rework and waste states distinct. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_collection` | Source hand-off, collection and inbound movement | `required` | Always | Capture secondary material after grain separation and deliver it to the receiving facility | kg source material received |
| `grading_stabilization` | Receiving, grading and stabilization | `required` | Always | Primary conditioning separates accepted, downgraded and rejected states and stabilizes when needed | kg accepted material |
| `size_reduction` | Chopping or grinding | `conditional` | Chopped, ground, pressed or pelletized route when performed | Alternative technology route changes particle size and recovers fines | kg size-reduced output |
| `forming` | Pressing, wafering or pelletizing | `conditional` | Pressed, wafered or pelletized route | Batch mode or continuous production converts prepared material to the declared formed state | kg formed output |
| `storage_loadout` | Storage and plant-gate hand-off | `required` | Always | Preserve the selected state and issue the reference product | 1,000 kg reference product |

Collection is independent because it captures residue after grain harvest and establishes the current-system hand-off. Grading creates accepted, downgraded and rejected states. Stabilization takes usable material to a declared stable hand-off. Size reduction changes particle size. Forming changes geometry into pressed, wafered or pelletized product. Each node uses lot, batch or continuous-period indexing; cleaning and changeover inputs are assigned once.

### Process: Source hand-off, collection and inbound movement (`source_collection`)

#### Inputs

##### Product flows

###### Cereal straw or husk at source hand-off (`source_residue_input`)

Record the cereal-specific secondary co-product after grain separation; it is not the confirmed at-plant reference flow.

- Selected flow: Cereal straw or husk at grain-separation hand-off
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received source mass by cereal and lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source_lot`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 2500
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Collection machinery energy supply (`collection_energy`)

Record fuel, electricity or contracted machinery energy used to gather, bale and load the residue.

- Selected flow: Collection machinery energy supply
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measured carrier quantity converted to delivered energy
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1500
  - Unit: MJ/1,000 kg reference product
  - Basis: per 1,000 kg reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Road freight from source to plant (`inbound_transport`)

Record loaded mass and actual source-to-plant distance.

- Selected flow: Road freight transport service
- Flow property / unit: Mass*distance / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Loaded tonnes multiplied by actual loaded-route kilometres
- Value mode: `calculated_value`
- Specificity: `route_specific`
- Normalization basis: per 1,000 kg reference product
- Basis kind: `transport_service`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: t*km/1,000 kg reference product
  - Basis: per 1,000 kg reference product
  - Basis kind: `transport_service`
  - Evidence kind: `reasoned_estimate`


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Collected raw straw or husk (`collected_raw_output`)

Preserve cereal, straw/husk and moisture identity at receiving.

- Selected flow: Collected raw cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Plant receipt net of vehicle tare
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per collection lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source_lot`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 500
  - Upper: 2500
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per collection lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

###### Field and handling loss (`collection_loss`)

Count only loss after the declared source hand-off.

- Selected flow: Cereal-residue collection loss
- Flow property / unit: Mass / kg
- Amount rule: Source mass minus received mass on a common dry-matter basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_source_lot`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg dry matter/1,000 kg reference product
  - Basis: per 1,000 kg reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Elementary flows

### Process: Receiving, grading and stabilization (`grading_stabilization`)

#### Inputs

##### Product flows

###### Collected raw material transfer (`raw_transfer_input`)

Internal transfer with no additional upstream burden.

- Selected flow: Collected raw cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Equal to linked collected output entering this lot
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per receiving lot
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_source_lot`
- Sources: `mass-balance-identity`
- Range: Quantitative QA range
  - Range role: `allowed_range`
  - Lower: 0
  - Upper: 2500
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per receiving lot
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Receiving and stabilization energy (`receiving_energy`)

Record conveying, screening, ventilation or drying energy by carrier.

- Selected flow: Receiving and stabilization energy supply
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered or invoiced energy assigned to the receiving lot
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg accepted stabilized output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg accepted stabilized output
  - Basis: per kg accepted stabilized output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Process water for stabilization or cleaning (`receiving_water`)

Separate supplied water from incoming moisture.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered supplied water; zero when inactive
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg accepted stabilized output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_moisture`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2
  - Unit: m3/1,000 kg accepted stabilized output
  - Basis: per 1,000 kg accepted stabilized output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Intended output: accepted stabilized material (`accepted_material_output`)

This intended product output is the unprepared-route output or feed to further processing.

- Selected flow: Accepted cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted output after grading
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per receiving lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 300
  - Upper: 2500
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per receiving lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Intended output: downgraded co-product (`downgraded_output`)

Keep this intended co-product output separate from accepted feed-grade material.

- Selected flow: Downgraded cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Weighed quantity routed to a lower grade or alternate use
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per receiving lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per receiving lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

###### Receiving rejects (`receiving_reject`)

Declare treatment or disposal destination.

- Selected flow: Rejected cereal residue
- Flow property / unit: Mass / kg
- Amount rule: Weighed unusable material leaving receiving
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per receiving lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per receiving lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Elementary flows

###### Water evaporated during stabilization (`stabilization_water_loss`)

Use the verified water-vapour elementary flow in the unspecified-air compartment; do not report dry-matter loss as water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Inlet moisture minus outlet moisture, net of supplied water and discharge
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg accepted output
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_moisture`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1
  - Unit: kg water/kg accepted output
  - Basis: per kg accepted output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Chopping or grinding (`size_reduction`)

#### Inputs

##### Product flows

###### Accepted material transfer to size reduction (`size_reduction_feed`)

Internal transfer on the same moisture basis.

- Selected flow: Accepted cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Linked accepted output entering the run
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per run
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_run_balance`
- Sources: `mass-balance-identity`
- Range: Quantitative QA range
  - Range role: `allowed_range`
  - Lower: 0
  - Upper: 2500
  - Unit: kg/run normalized to 1,000 kg reference product
  - Basis: per run
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Size-reduction energy (`size_reduction_energy`)

Retain actual energy carrier in foreground records.

- Selected flow: Size-reduction energy supply
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy assigned to cutting, milling, conveying and dust collection
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg size-reduced output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg size-reduced output
  - Basis: per kg size-reduced output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Chopped or ground material (`size_reduced_output`)

Record particle-size method and post-treatment state.

- Selected flow: Chopped or ground cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Weighed conforming output
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg run feed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_run_balance`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 500
  - Upper: 1200
  - Unit: kg/1,000 kg run feed
  - Basis: per 1,000 kg run feed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Captured fines returned to the run (`size_reduction_rework`)

Exclude returned fines from saleable output.

- Selected flow: Captured cereal-residue fines for rework
- Flow property / unit: Mass / kg
- Amount rule: Weighed fines returned once to an identified run
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg run feed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rework`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg run feed
  - Basis: per 1,000 kg run feed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows


##### Elementary flows

###### Uncaptured particulate from size reduction (`size_reduction_dust`)

Use the verified unspecified-particle-size elementary flow in the unspecified-air compartment.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured uncaptured particulate; disclose any measured size fraction as supporting detail
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg size-reduced output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_run_balance`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg size-reduced output
  - Basis: per kg size-reduced output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Pressing, wafering or pelletizing (`forming`)

#### Inputs

##### Product flows

###### Prepared material transfer to forming (`forming_feed`)

Declare pre-form state and moisture.

- Selected flow: Prepared cereal straw or husk for forming
- Flow property / unit: Mass / kg
- Amount rule: Linked size-reduced output entering the forming run
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per forming run
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_run_balance`
- Sources: `mass-balance-identity`
- Range: Quantitative QA range
  - Range role: `allowed_range`
  - Lower: 0
  - Upper: 1500
  - Unit: kg/run normalized to 1,000 kg reference product
  - Basis: per forming run
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Forming electricity and mechanical energy (`forming_energy`)

Assign by batch or continuous reporting period.

- Selected flow: Forming energy supply
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy for pressing, pelletizing, cooling and screening
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg formed output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg formed output
  - Basis: per kg formed output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Steam or purchased process heat for forming (`forming_heat`)

Keep this independently measured conditioning service separate from mechanical energy.

- Selected flow: Steam or purchased process heat
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered steam energy or purchased heat; zero when inactive
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg formed output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg formed output
  - Basis: per kg formed output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Water added for forming (`forming_water`)

Distinguish added water from incoming material moisture.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered water added for moisture conditioning
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg formed output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_moisture`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1
  - Unit: m3/1,000 kg formed output
  - Basis: per 1,000 kg formed output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Pressed, wafered or pelletized material (`formed_output`)

Record geometry, dimensions, cooling state and moisture.

- Selected flow: Pressed, wafered or pelletized cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Weighed conforming output after cooling and screening
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg forming feed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_run_balance`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 500
  - Upper: 1200
  - Unit: kg/1,000 kg forming feed
  - Basis: per 1,000 kg forming feed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Forming fines returned for rework (`forming_rework`)

Count each return loop once.

- Selected flow: Cereal-residue forming fines for rework
- Flow property / unit: Mass / kg
- Amount rule: Weighed fines returned to one named run
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg forming feed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rework`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg forming feed
  - Basis: per 1,000 kg forming feed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

###### Forming rejects (`forming_reject`)

Declare downgrade, recovery or disposal destination.

- Selected flow: Rejected formed cereal residue
- Flow property / unit: Mass / kg
- Amount rule: Weighed off-spec material leaving the rework loop
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg forming feed
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rework`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg forming feed
  - Basis: per 1,000 kg forming feed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Elementary flows

### Process: Storage and plant-gate hand-off (`storage_loadout`)

#### Inputs

##### Product flows

###### Route-selected product transfer (`storage_feed`)

Choose accepted unprepared, size-reduced, or formed material without overlap.

- Selected flow: Route-selected cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Linked output of exactly one selected upstream route
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per storage lot
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_storage`
- Sources: `mass-balance-identity`
- Range: Quantitative QA range
  - Range role: `allowed_range`
  - Lower: 0
  - Upper: 1500
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per storage lot
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Storage and loadout energy (`storage_energy`)

Assign energy to the storage lot or period once.

- Selected flow: Storage and loadout energy supply
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy for ventilation, conveying, weighing and loadout
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 3
  - Unit: MJ/kg reference product
  - Basis: per kg reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Flexible packaging for bagged product (`packaging_input`)

Include bags, liners or film only when actually used.

- Selected flow: Flexible packaging
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Net packaging mass issued; zero for bulk or unpackaged bales
- Value mode: `foreground_record`
- Specificity: `route_specific`
- Normalization basis: per 1,000 kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Feed-grade straw at plant gate (`reference_straw_output`)

Issue only product matching the declared cereal, material state, moisture and feed-grade route.

- Selected flow: Straw `b1dd1313-1bc0-4baf-8cfb-50e8ea2a307c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Fixed reference amount of accepted product
- Value mode: `fixed_value`
- Specificity: `generic`
- Normalization basis: per 1,000 kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Sources: `mass-balance-identity`
- Range: Quantitative QA range
  - Range role: `allowed_range`
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: one reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Downgraded stored material (`storage_downgrade`)

Keep its destination separate from reference output.

- Selected flow: Downgraded stored cereal straw or husk
- Flow property / unit: Mass / kg
- Amount rule: Weighed quantity routed out of reference-grade stock
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per storage lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per storage lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

###### Storage and cleaning waste (`storage_waste`)

Declare treatment destination.

- Selected flow: Cereal-residue storage waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed spoiled material and sweepings leaving storage
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per storage lot
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg/lot normalized to 1,000 kg reference product
  - Basis: per storage lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`


##### Elementary flows

###### Uncaptured storage particulate (`storage_dust`)

Use the verified unspecified-particle-size elementary flow in the unspecified-air compartment.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured uncaptured particulate; disclose any measured size fraction as supporting detail
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage`
- Range: Quantitative QA range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg reference product
  - Basis: per kg reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


## 7. Allocation and Co-product Handling

Enumerate grain, straw, husks and every other intended product at the upstream separation point. Use the upstream cereal PCR or supplier allocation when available. Otherwise test subdivision first; if shared cultivation burdens remain, apply and disclose one consistent physical or economic allocation in accordance with ISO 14044. Zero-burden cut-off is allowed only when an applicable study rule explicitly requires it. Within the foreground route, use measured lot balances for accepted, downgraded and waste states. Rework stays inside its producing node. Each reject has exactly one rework, downgrade, recovery or disposal path. Reconcile source, transfers and final hand-offs on a common dry-matter basis to prevent double counting.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_lot` | `source_collection` | source and received mass | weighbridge and source record | cereal; straw/husk; mass; moisture; dates | calibrated weighing and paired sampling | kg; fraction | each load | full period | all sources | sum after moisture reconciliation | calibration and sample chain |
| `cp_transport` | `source_collection` | inbound transport | dispatch record | mass; origin; destination; distance; vehicle | invoice and route log | t; km; t*km | each load | full period | all routes | sum loaded t*km | dispatch record |
| `cp_energy` | all applicable nodes | energy inputs | meter, invoice and equipment log | carrier; quantity; node; run; allocation key | direct metering preferred | carrier unit; MJ | each run or monthly | representative year | all nodes | convert and assign once | meter or invoice |
| `cp_water_moisture` | grading and forming | water and moisture | meter and laboratory record | water; inlet/outlet mass; moisture method; time | meter and paired samples | m3; kg; fraction | each lot/run | full period | applicable nodes | water addition and removal separately | meter and test record |
| `cp_grading` | `grading_stabilization` | grade destinations | grade and dispatch record | criterion; mass; grade; destination; moisture | lot grading and weighing | kg | each lot | full period | receiving site | sum mutually exclusive states | signed grade record |
| `cp_run_balance` | size reduction and forming | run balance | production log | run; input; output; fines; reject; dust; moisture | linked reconciliation | kg | each run/period | full period | each line | cancel internal rework once | production log |
| `cp_rework` | size reduction and forming | rework and reject | movement ticket | producing run; receiving run; mass; state; route | tagged movement record | kg | each movement | full period | each line | count return and exit once | movement ticket |
| `cp_storage` | `storage_loadout` | storage and dispatch | stock and dispatch record | lot; state; input; outputs; packaging; dust | stock reconciliation | kg | each dispatch/monthly | full period | all stores | reconcile by lot and route | stock record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | Material states | dry matter = as-received mass × (1 − moisture fraction) | paired mass and moisture | kg dry matter | `mass-balance-identity` |
| `calc_transport` | Inbound movement | t*km = loaded tonnes × loaded-route kilometres | mass and distance | t*km | `mass-balance-identity` |
| `calc_node_balance` | Each node | input dry matter = accepted + downgrade + reject + uncaptured loss; cancel internal rework | linked records | residual and completeness flag | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Each lot | Record cereal, straw/husk, form, grade and contamination decision. | lot and grade record |
| `dq_moisture` | Each hand-off | State moisture method, sampling time and wet/dry basis. | test record |
| `dq_route` | Optional nodes | Demonstrate active route; inactive nodes have zero inputs and outputs. | production log |
| `dq_mode` | Batch/continuous period | Link meters, cleaning and changeover to one run or period. | meter and run log |
| `dq_completeness` | Each node | Reconcile all output states without double counting. | mass-balance result |
| `dq_attribution` | Secondary origin | Document upstream output set and allocation, inheritance or cut-off. | supplier dataset |

## 9. Validation Rules

1. Require cereal, straw/husk, form, moisture fraction and basis, grade, route and plant gate.
2. Use the fixed feed-grade Straw flow only for the declared at-plant product, never chemical treatment, complete feed or fuel-only dry matter.
3. Unprepared bypasses size reduction and forming; ground uses size reduction; pressed or pelletized uses forming; inactive nodes carry zero.
4. Every node declares before/after states, service roles, loss, reject and hand-off; every intended output has one destination.
5. Secondary origin requires evidence and an explicit inherited, allocated or cut-off burden decision with no duplication.
6. Rework links producing and receiving runs, and rejected material cannot be accepted output.
7. Shared batch or continuous-period inputs are assigned once.
8. Wet-mass and dry-matter balances separate water change from dry-matter loss.
9. Parameterized Product inputs resolve to verified UUIDs during foreground generation. Internal transfers, outputs, waste and elementary flows have no Flow Set.
10. The recovered-material set is inapplicable because its current groups cover recycled metal and paper fibre, not cereal residues. Nutrient, construction and waste-treatment sets are also inapplicable to this physical route.
11. Every quantitative card has exactly one Range and EN, ZH and structured fields agree.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cereal-residue collection and physical-preparation dataset |
| downstream_use | Secondary or background supply dataset |
| allowed_use | Matching cereal, material identity, form, moisture, grade, route, geography and attribution |
| excluded_use | Chemical treatment, ensilage, complete feed, non-cereal residue, undeclared mixture or fuel-only product |
| required_metadata | Cereal; straw/husk; origin; hand-off; form; moisture; grade; route; mode; geography; allocation; destinations |
| required_quality_disclosure | Balance residual; coverage; methods; source attribution; allocation sensitivity; unresolved identities; provisional ranges |
| update_trigger | Change in cereal, grade, state, technology, moisture method, attribution, destination or Flow Set version |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-residue-machinery-2002` | official_guidance | FAO, Chapter 6, machinery and equipment for utilization of crop residues as feed, https://www.fao.org/4/y1936e/y1936e0a.htm | Collection, transport, grinding and forming route decomposition |
| `fao-crop-residue-upgrading-2002` | official_guidance | FAO, Chapter 2, composition, nutritive value and upgrading of crop residues, https://www.fao.org/4/y1936e/y1936e06.htm | Physical route and complete-feed exclusion |
| `fao-feed-good-practices-2010` | official_guidance | FAO and IFIF, Manual of Good Practices for the Feed Industry, 2010, https://www.fao.org/4/i1379e/i1379e04.pdf | Moisture, handling and storage controls |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Co-product attribution and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to paired mass and moisture records | Conversion and balance calculations |
