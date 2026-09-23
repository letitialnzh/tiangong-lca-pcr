---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pepper-piper-spp-raw
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Whole raw Piper pepper at producer dispatch

## 1. Scope and Applicability

This PCR covers whole, neither crushed nor ground *Piper* spp. pepper berries at producer dispatch. It covers fresh berries and primary dried whole berries as separately declared physical states. The representative route is *Piper nigrum* vine cultivation, berry harvest, primary cleaning and drying, and grading of whole black pepper. White or green whole-pepper routes must declare their different maturity and conditioning, including soaking and pericarp removal when performed. Fresh dispatch omits drying. It excludes crushed, ground, extracted or blended pepper, *Capsicum* and *Pimenta* fruits, and post-dispatch stages. The raw/processed classification distinction follows `un-cpc3`; route facts follow `fao-ecocrop-pepper` and `kau-pepper-harvest`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pepper-piper-spp-raw |
| classification_refs | CPC 3.0 `01651`, Pepper (Piper spp.), raw |
| covered_products | Whole unground *Piper* berries, fresh or primary dried, with declared species, form and moisture |
| excluded_products | Processed, crushed, ground or extracted *Piper* pepper; *Capsicum* and *Pimenta* peppers |
| representative_product | Primary dried whole black *Piper nigrum* berries |
| production_route | Managed perennial vines → harvest → conditional primary cleaning/drying → grading → dispatch |
| market_state | Whole berries at producer gate, with colour/form, fresh/dried state, grade and moisture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole raw *Piper* pepper berries at producer dispatch |
| How much | 1 kg net accepted berries |
| How well | Species, whole form, colour/conditioning branch, moisture and grade stated |
| How long or cycle | Output from a stated harvest season, with establishment attributed over recorded productive years |
| reference_flow_link | Accepted output of `pepper_grading` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Whole primary dried black Piper pepper; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; whole unground form; black/white/green branch; fresh/dried state; moisture; grade; producer gate; harvest period |
| Reference identity status | `unresolved` |

The verified TianGong flow for fresh raw pepper is `1015c13e-e71a-4eb4-8a03-9ce3e096cee5`. Its description says “Fresh, unprocessed produce”, so it is not assigned to the dried representative. The dried reference remains unmapped until identity review; fresh and dried kilograms are never silently interchanged.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | Accepted pepper | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net whole berries after removing packaging, rejects and foreign matter. |
| `moisture` | State conversion | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use paired measured wet-basis fractions: dry-state kg = fresh kg × (1 − fresh moisture) / (1 − dry moisture); preserve both observed masses. |
| `period` | Perennial input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Attribute establishment and replacement burdens to evidenced productive periods before dividing by accepted kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed *Piper* vines, plot, support structures and upstream inputs at reporting-period start |
| starting_condition_role | Foreground starting stock and upstream supply interface, including attributable establishment |
| product_classification_scope | CPC 01651 whole unground *Piper* berries; keep each moisture and conditioning branch distinct |
| recursive_input_rule | Purchased same-category pepper is a separate input with upstream dataset and origin; do not recreate its cultivation within this foreground system. |
| upstream_dataset_requirement | Supply-specific planting, fertilizer, water, fuel, electricity and purchased-pepper datasets |
| disclosure | Species, plot, vine age, harvest, fresh/dried state, moisture, conditioning, grades, losses, rejects and destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_dispatch` | All routes | Include attributable vine establishment, cultivation, harvest, performed primary conditioning and grading to producer dispatch; exclude grinding, extraction, retail and later transport. | `un-cpc3`; `fao-ecocrop-pepper` |
| `boundary_branch` | Fresh/black/white/green | Record only actual drying, soaking and pericarp removal with their inputs, effluent and residues; never assign zero drying to a dried lot. | `fao-ecocrop-pepper`; `kau-pepper-harvest` |
| `boundary_soil` | Fertilized plots | Calculate direct and indirect soil N₂O and applicable lime/urea CO₂ from recorded inputs and documented factors. | `ipcc-2019-afolu11` |
| `boundary_shared` | Supports, pumps and dryers | Name consuming processes and years; attribute shared asset burden once. | `fao-ecocrop-pepper` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pepper_cultivation` | Perennial vine cultivation | `required` | Include establishment and replacements over served harvests | Standing berry crop | Plot-year and harvest kg |
| `pepper_harvest` | Berry harvest | `required` | Distinct removal of berries from managed vines | Fresh collected berries | Harvest-lot kg |
| `pepper_conditioning` | Primary conditioning | `conditional` | Include actual cleaning, drying, soaking or pericarp removal; omit for fresh direct dispatch | Prepared whole berries | Paired lot kg and moisture |
| `pepper_grading` | Grading and dispatch | `required` | Distinguish accepted, downgraded and rejected states | Reference flow | Accepted net kg |

Cultivation produces standing berries; harvest independently removes them and hands fresh lots to conditioning or directly to grading. Conditioning transfers prepared whole berries to grading. Grading sends accepted and downgraded saleable whole lots to separately declared buyers. Every rejected lot has a rework, recovery or waste path; a rework loop returns to its named producing node, retaining prior burden once.

### Process: Perennial vine cultivation (`pepper_cultivation`)

#### Inputs

##### Product flows

###### Cultivation inputs (`cultivation_inputs`)

Record planting material, supports, fertilizer, amendments, irrigation and fuel as separate actual exchanges by material and year.

- Selected flow: Actual cultivation supplies; UUID unresolved per material
- Flow property / unit: Mass / kg; water / m3; fuel / L
- Amount rule: Sum field and supplier records by material and plot-year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Plot-year and accepted pepper output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`

##### Waste flows

Pruned vines, spent supports and containers follow measured recovery or disposal routes under `cp_residues`.

##### Elementary flows

Record environmental irrigation withdrawal as an input only where water is taken directly from the environment rather than supplied as a purchased product.

#### Outputs

##### Product flows

Standing berries transfer to `pepper_harvest`; they are an intermediate, not an additional sold product.

##### Waste flows

Record vine residues by mass and destination under `cp_residues`.

##### Elementary flows

Report managed-soil gas outputs as separate pollutant exchanges.

###### Managed-soil nitrous oxide to air (`soil_nitrous_oxide_emission`)

Calculate direct and indirect N₂O from recorded nitrogen inputs and site-year activity. Keep its quantity separate from carbon dioxide and verify the receiving air subcompartment before binding a UUID.

- Selected flow: Nitrous oxide to air; receiving air subcompartment to be verified
- Flow property / unit: Mass / kg N2O
- Amount rule: apply `calc_soil_gases` to nitrogen inputs and the declared N₂O factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Plot-year then accepted pepper output
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources: `ipcc-2019-afolu11`

###### Carbon dioxide from lime or urea (`soil_amendment_carbon_dioxide_emission`)

Include this exchange only when lime or urea use and the selected method support a direct CO₂ calculation. Keep its quantity separate from N₂O and verify the receiving air subcompartment before binding a UUID.

- Selected flow: Carbon dioxide to air from lime or urea; receiving air subcompartment to be verified
- Flow property / unit: Mass / kg CO2
- Amount rule: apply `calc_soil_gases` to recorded lime or urea inputs and the declared CO₂ factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Plot-year then accepted pepper output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources: `ipcc-2019-afolu11`

### Process: Berry harvest (`pepper_harvest`)

#### Inputs

##### Product flows

Standing crop and actual harvest energy enter from cultivation and supplier records.

##### Waste flows

No waste input is assumed.

##### Elementary flows

Direct equipment emissions require activity and factor evidence; avoid double counting upstream fuel burdens.

#### Outputs

##### Product flows

###### Fresh collected berries (`fresh_berries`)

Weigh each whole-berry lot before conditioning and record harvest maturity.

- Selected flow: Fresh whole *Piper* berries; intermediate UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Sum receiving scale tickets by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

##### Waste flows

Damaged berries and field losses are kept outside accepted yield and routed under `cp_residues`.

##### Elementary flows

No elementary output is assumed without evidence.

### Process: Primary conditioning (`pepper_conditioning`)

#### Inputs

##### Product flows

###### Berry feed and conditioning supplies (`conditioning_inputs`)

Record fresh berry feed, drying energy and any soaking or washing water as separate actual exchanges. Sun drying does not imply purchased heat.

- Selected flow: Whole berry feed and actual route-specific supplies; UUID unresolved per exchange
- Flow property / unit: Mass / kg; energy / kWh; water / m3
- Amount rule: Paired lot weights and meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Conditioned lot output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `kau-pepper-harvest`

##### Waste flows

No waste input is assumed.

##### Elementary flows

Direct withdrawal is recorded only for environment-supplied water.

#### Outputs

##### Product flows

###### Prepared whole berries (`prepared_berries`)

Transfer cleaned or dried whole berries to grading with measured moisture and branch.

- Selected flow: Whole prepared Piper pepper; UUID unresolved for dried state
- Flow property / unit: Mass / kg
- Amount rule: Net output scale weight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Conditioned lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`

##### Waste flows

Detached stalks, damaged berries and any removed pericarp are weighed and routed under `cp_residues`.

##### Elementary flows

Moisture lost to air is calculated by paired mass/moisture balance; water-using routes record effluent and treatment. UUID remains unresolved by compartment.

### Process: Grading and dispatch (`pepper_grading`)

#### Inputs

##### Product flows

Link prepared or fresh whole lots to grading. Purchased same-category pepper carries a separate upstream dataset. Record grading electricity under `cp_grading`.

##### Waste flows

Returned rejects require origin-lot linkage.

##### Elementary flows

No elementary output is assumed for mechanical grading.

#### Outputs

##### Product flows

###### Accepted whole raw pepper (`accepted_pepper`)

Only saleable whole berries meeting declared grade and moisture enter the reference output. This is an intended output, separately from the downgraded saleable grade.

- Selected flow: Whole raw Piper pepper; UUID unresolved for dried state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calibrated net dispatch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg accepted raw pepper
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

###### Downgraded saleable whole pepper (`downgraded_pepper`)

Weigh each separately sold whole grade and record destination. This is a second intended output; dried-state UUID remains unresolved.

- Selected flow: Whole raw Piper pepper; UUID unresolved for dried state
- Flow property / unit: Mass / kg
- Amount rule: Net weighed downgraded lot mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

##### Waste flows

###### Grading rejects (`grading_rejects`)

Weigh off-spec berries and foreign matter by lot; record rework, recovery or disposal destination, excluding them from accepted kg.

- Selected flow: Actual reject material; UUID unresolved by destination
- Flow property / unit: Mass / kg
- Amount rule: Lot-specific weighed rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`

##### Elementary flows

No elementary output is assumed for mechanical grading.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_periods` | Establishment and replacements | Assign recorded vine and support burdens to evidenced productive years and outputs; retain nonproductive establishment and termination events and count each burden once. | `fao-ecocrop-pepper` |
| `allocate_shared` | Supports, pumps and dryers | List consumers and service years, allocate by measured use or documented physical proxy, and reconcile assigned burden to recorded total. | `fao-ecocrop-pepper` |
| `allocate_grades` | Saleable whole grades | Partition common burdens by measured mass when grades have the same physical function; justify another rule if materially different. Rejects receive no co-product credit. | `un-cpc3` |
| `allocate_rework` | Reworked or recovered berries | Keep prior lot burden and add incremental rework once; credit recovery only with evidenced destination and method. | `kau-pepper-harvest` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `pepper_cultivation` | vine, supports, inputs and soil gases | Plot-year ledger | plot; year; planting/replacement; material; nutrient content; quantity; supplier; meter | Invoice, field log and meter | kg, plant, m3, kWh, L | Each event | Establishment through harvest | Each plot | Sum by material and year, then assign service periods | Invoice, nutrient certificate and meter |
| `cp_harvest` | `pepper_harvest` | standing and fresh berries | Harvest lot | plot; date; species; maturity; fresh kg; field loss; energy | Scale and field log | kg, kWh, L | Each lot | Every reported harvest | Each plot | Sum non-overlapping lots | Scale ticket and trace |
| `cp_conditioning` | `pepper_conditioning` | state conversion, energy, water, losses | Batch ledger | lot; incoming/outgoing kg; moisture before/after; energy; water; effluent; branch | Scale, test and meter | kg, %, kWh, m3 | Each batch | Every conditioned lot | Each facility | Paired mass/moisture balance | Batch sheet and test |
| `cp_grading` | `pepper_grading` | accepted and downgraded output | Grade ledger | lot; species; state; moisture; grade; accepted/downgraded kg; buyer | Scale and dispatch ticket | kg, % | Each lot | All dispatches | Each facility | Sum accepted after rejects | Scale ticket and sale |
| `cp_residues` | all nodes | rejects, rework and residues | Destination ledger | origin lot; material; kg; return node; destination | Scale and destination receipt | kg | Each event | Same harvest period | Each site | Count each route once | Weigh ticket and receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_conditioning_balance` | Drying and cleaning | Incoming kg = prepared whole kg + separated solids + water loss + other recorded loss; investigate residual. | Paired weights, moisture and residues | Reconciled lot outputs | `kau-pepper-harvest` |
| `calc_soil_gases` | Managed soil | Apply IPCC direct/indirect N₂O and applicable lime/urea CO₂ equations with site-year activity and documented factors. | Nitrogen/amendment inputs and factors | Gas-specific kg | `ipcc-2019-afolu11` |
| `calc_intensity` | All nodes | Sum attributed site-period inputs after shared-asset and rework reconciliation, divide by accepted kg in the same physical-state stratum. | Ledgers and accepted kg | Exchange per reference kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference output | Verify *Piper* species, whole form, state and producer gate. | Classification and flow review |
| `dq_mass` | Harvest to dispatch | Link lots, weights, moisture, grades and reject routes; disclose balance discrepancy. | Scale tickets and tests |
| `dq_period` | Perennial assets | Identify establishment, productive, replacement and termination years and consumers. | Plot and asset ledger |
| `dq_coverage` | Inputs and emissions | Disclose missing meters, estimated amounts, factor choices and unresolved UUIDs. | Completeness register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Reject processed, crushed, ground, non-*Piper* or unidentified state; require a reviewed dried-state flow UUID before publication. | `un-cpc3` |
| `validate_balance` | Harvest, conditioning and grading | Require moisture and reconcile input, accepted, downgraded, rejected and moisture-loss masses within documented tolerance. | `kau-pepper-harvest` |
| `validate_route` | Process graph | Check cultivation → harvest → optional conditioning → grading hand-offs and every grade, reject and rework path. | `fao-ecocrop-pepper` |
| `validate_shared` | Perennial/shared assets | Each attributed asset has service years and consumers; assigned totals equal recorded totals once. | `fao-ecocrop-pepper` |
| `validate_soil` | Fertilized plots | Report N activity and direct/indirect factors; flag relevant uncalculated soil emissions. | `ipcc-2019-afolu11` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for whole raw *Piper* pepper at producer dispatch |
| downstream_use | `secondary_dataset` or `background_dataset` for matching species, state, geography, time and gate |
| allowed_use | Per-kg whole raw pepper supply with compatible moisture and form |
| excluded_use | Ground/processed or non-*Piper* products; unqualified fresh/dried substitution; post-dispatch stages |
| required_metadata | Species, colour/form, moisture, grade, location, period, gate, route, asset attribution and flow identity review |
| required_quality_disclosure | Primary-data share, mass balance, missing inputs, factors, reject destinations and UUID gaps |
| update_trigger | New state/route, revised flow identity, changed CPC scope, moisture basis or material site-period data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3` | official_guidance | UN Statistics Division, CPC 3.0 explanatory notes, 01651 and 23921, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product boundary |
| `fao-ecocrop-pepper` | official_guidance | FAO Ecocrop, *Piper nigrum*, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=1714 | Cultivated route and states |
| `kau-pepper-harvest` | extension_guidance | Kerala Agricultural University, Pepper harvesting and processing, https://www.celkau.in/Crops/spices/pepper/harvesting.php | Harvest and conditioning |
| `ipcc-2019-afolu11` | method_factor | IPCC, 2019 Refinement, Vol. 4 Ch. 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil gases |
