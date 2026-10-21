---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Farmed in-shell clams, cockles and ark shells, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides the production of foreground life cycle inventory datasets for farmed clams, cockles and ark shells supplied live, fresh or chilled. It covers grow-out aquaculture of in-shell bivalves of the clam, cockle and ark shell groups, their harvesting, and landing-site handling up to the point where the product leaves the landing-site gate. The reference product state is live, fresh or chilled; the product is not frozen, dried, salted, smoked, brined or otherwise processed.

This PCR applies to foreground data packages produced by farm operators or by practitioners using farm records. It does not cover wild-caught clams, cockles and ark shells, seed or spat production inside a hatchery or nursery as a foreground product, processed or preserved clam products, or downstream distribution, retail and consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04452; this PCR covers in-shell product only, a narrower mapping |
| covered_products | Farmed clams, cockles and ark shells, in shell, supplied live, fresh or chilled; typical species include Manila clam (Ruditapes philippinarum), blood cockle (Tegillarca granosa) and hard clam (Mercenaria mercenaria) |
| excluded_products | Wild-caught clams, cockles and ark shells (CPC 04451); frozen, smoked, dried, salted or in-brine clam products; canned or otherwise processed clam meat; live clams supplied as seed, bait or for ornamental use |
| representative_product | Manila clam (Ruditapes philippinarum), live in shell, farmed on intertidal flats and supplied fresh at a landing site |
| production_route | Clam seed (spat) supply as an upstream starting condition, grow-out culture on intertidal flats, in ponds or in suspended systems, harvesting, then landing-site washing, depuration, grading and chilling where declared |
| market_state | Declared site/lot in-shell live, fresh or chilled product at the landing-facility handover; no global or regional average production mix is assumed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Farmed clams, cockles and ark shells, live, fresh or chilled, in shell, at the landing-site gate |
| How much | 1 kg drained net in-shell mass in the actual declared live/fresh/chilled state |
| How well | Marketable size grade; live, fresh or chilled state as declared; mortality and reject share within declared limits |
| How long or cycle | One grow-out production cycle from stocking to dispatch, including landing-site handling |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed clams, cockles and ark shells, live, fresh or chilled `4a6625c6-2c26-4618-aaab-4ea8949e5635` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; culture system (intertidal flat, pond, or suspended); product state (live, fresh, or chilled); drained net in-shell mass in the actual declared state; production region and site; grow-out cycle period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product flow | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference is drained net in-shell mass in the actual declared live/fresh/chilled state; counts/crates need measured conversion and tare evidence matched to species, grade and lot. |
| `live_weight_state` | product and biomass quantities | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record drained net in-shell mass in the actual state; distinguish live, fresh, chilled, dead, seed and shell-waste states, life stages and moisture bases. Dead stock is not live weight. Do not substitute meat-only yield for in-shell mass; state conversions require matched measurements. |
| `electricity_energy` | electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Electricity is collected in kWh from meters or utility bills; when the host dataset stores electricity on an energy basis, 1 kWh is converted to 3.6 MJ. |
| `water_volume` | process water inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record external supply, direct abstraction and discharge volume separately for each actual water source; internal recirculation is not another external exchange. Convert mass/volume only with measured or evidenced density for actual temperature, salinity and water quality, not an assumed 1,000 kg/m3. Match emission concentration and volume by period, sampling point and unit. |
| `seed_dual_record` | clam seed input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Clam seed is recorded both as stocked mass in kg and as seed count with size grade, so that survival and growth can be reconciled. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Clam seed (spat) at the grow-out farm gate, ready for stocking; hatchery, nursery or natural seed collection that produced the seed is upstream of the foreground boundary |
| starting_condition_role | boundary_start |
| product_classification_scope | CPC 3.0 code 04452, farmed clams, cockles and ark shells, live, fresh or chilled |
| recursive_input_rule | Seed needs an upstream dataset for its actual hatchery/nursery or wild-collection route, not this adult grow-out PCR. Same-category clam receipts may use an upstream grow-out dataset only where boundary/stage genuinely match. Reconcile internal transfers versus purchases and carry accrued burdens once without recursive expansion of the same stage. |
| upstream_dataset_requirement | Seed supply, fertilizers, lime, electricity, diesel, gear materials, process water and ice are supplied by supplier-specific foreground datasets or by secondary background datasets |
| disclosure | The data package declares culture system, site and water body, stocking density and cycle length, fertilization and pond preparation practice, harvesting method, depuration practice, survival rate, allocation keys and cut-off choices |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_starting_condition` | foreground system boundary | The foreground boundary starts at clam seed delivered to the grow-out farm; seed production burdens enter only through the upstream dataset of the seed input flow. | `fao-cultured-aquatic-species-ruditapes-philippinarum` |
| `sb_recursive_input` | same-category inputs | Seed requires an upstream dataset for its actual hatchery/nursery or wild-collection route, not this adult grow-out PCR masquerading as seed methodology. Same-category clam receipts may use an upstream grow-out dataset only where boundary/stage genuinely match; reconcile internal transfers versus purchases, carrying accrued burdens without recursive expansion or modelling the same stage twice. |  |
| `sb_cut_off` | all foreground inputs, outputs and emissions | Justify any cut-off against the declared study goal using mass, energy and potential environmental relevance, documenting cumulative omissions and sensitivity. Low mass alone does not justify removing chemicals, pollutants or waste. Attribute long-lived gear using evidenced service life, use and replacement; annualization requires a matched reporting period and output. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grow_out_culture` | Grow-out culture on intertidal flats, in ponds or in suspended systems | required |  | foreground core | kg marketable live clams transferred to harvest per cycle |
| `harvesting` | Harvesting of market-size clams | required |  | foreground | kg harvested live clams landed per cycle |
| `landing_site_handling` | Landing-site washing, depuration, grading and chilling | required | Gate handover and acceptance are required on every route; washing, depuration, grading and cooling apply only when actually performed | foreground | 1 kg live, fresh or chilled clams at the landing-site gate |

### Process: Grow-out culture on intertidal flats, in ponds or in suspended systems (`grow_out_culture`)

#### Inputs

##### Product flows


###### Urea (`urea_input`)

Only actual urea documented by the product specification belongs here. Other nitrogen fertilizers require their own identity and quantity under dq_complete_nitrogen_fertilizer. No fertilizer is assumed used, and no family total or screening range is inherited.

- Selected flow: Urea
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual product quantity, retaining native unit, supply/use period and final accepted output; report per 1 kg reference flow without inheriting a family total, range or conversion factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_records`

###### Clam seed (spat) stocked in the culture system (`clam_seed`)

Clam seed from a hatchery, nursery or natural collection crosses the foreground boundary at stocking and starts the grow-out cycle. The quantity is obtained from stocking logs and supplier delivery notes.

- Selected flow: Live clam, cockle or ark-shell spat for grow-out stocking
- Flow property / unit: Mass / kg
- Amount rule: stocked seed mass per production cycle, with seed count and size grade recorded alongside ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_stocking_records`

###### Phosphate fertilizer applied for pond fertilization (`phosphate_fertilizer`)

Use this card only when the actual specification confirms superphosphate and it is applied in the matched cycle. Other phosphate fertilizers need separate identities and measurements, not this UUID. Retain invoices, composition/nutrient content and application records; no fertilizer use is assumed.

- Selected flow: Superphosphate `8c9749b5-e19f-4480-a575-3058aff804b3`
- Flow property / unit: Mass / kg
- Amount rule: applied fertilizer mass per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_records`

###### Lime applied for pond or bottom preparation (`lime`)

Use this card only for actual dry slaked lime (calcium hydroxide), retaining purity, treatment/form, invoices and application records. Quicklime, limestone and other conditioners need their own identities and quantities; neither use nor disinfection efficacy is assumed.

- Selected flow: Calcium hydroxide, dry slaked lime
- Flow property / unit: Mass / kg
- Amount rule: applied lime mass per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_preparation_records`

###### Electricity for aeration and water pumping (`growout_electricity`)

Electricity powers aerators and water exchange pumps during grow-out. The quantity is obtained from meter readings or utility bills allocated to the grow-out process.

- Selected flow: Alternating-current electricity at the actual supply voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity allocated to grow-out per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`


Voltage level, supply region/provider and metering period must match actual service; a medium-voltage label cannot establish that every facility uses medium-voltage electricity.

###### Diesel for culture boats and machinery (`growout_diesel`)

Diesel fuels culture boats and machinery used for inspection, maintenance and in-situ work during grow-out. The quantity is obtained from fuel purchase records and equipment logs.

- Selected flow: Diesel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: diesel consumed by grow-out operations per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Bamboo stakes and supports consumed (`bamboo_stakes`)

Record only actual bamboo pole stakes. Native volume is solid bamboo-material volume, not bulk-stack volume or an outer cylinder including cavities; retain supplier specifications, measured geometry/solid volume, moisture and treatment state. Mass-to-volume conversion needs matched measured density. Attribute burdens once using actual service period, users and replacement records; do not charge a multi-year stock or the same replacement total in full to every batch. Other supports need separate cards.

- Selected flow: Bamboo pole stakes
- Flow property / unit: Volume / m3
- Amount rule: annualized bamboo consumption per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_consumption_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Market-size live clams transferred to harvesting (`marketable_clams_growout`)

Record actual live net in-shell biomass in the culture parcel after grow-out and before harvesting, using an evidenced biomass assessment or representative sampling by species, grade, cohort and time. Reconcile later harvest through actual losses and mass-basis evidence, never assumed equality; a landing-quality UUID does not verify this pre-harvest identity.

- Selected flow: Live in-shell clams, cockles or ark shells in the culture parcel before harvesting
- Flow property / unit: Mass / kg
- Amount rule: Record actual pre-harvest live net in-shell biomass with assessment evidence and report using final accepted mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide emitted to air from fuel combustion at this node (`growout_fossil_co2`)

Applicable only to actual fossil fuel combustion at this node. Do not duplicate upstream fuel-production emissions as direct node emissions; biogenic CO2 and other combustion substances need separate identities and quantities.

- Selected flow: Carbon dioxide, fossil `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate fossil CO2 emitted to air using actual fossil fuel combusted at this node and sourced applicable carbon/oxidation or emission factors, or matched monitoring. Retain sources, boundary and uncertainty and report using final accepted mass Q; no generic factor is assumed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_records`


###### Gross total nitrogen discharged to freshwater (`nutrient_n_exchange`)

Use this card only for an actual controlled discharge to freshwater. Never substitute a freshwater identity for sea water or another medium. Retain monitoring interval, flow, concentration/elemental basis, influent background and material-origin evidence; do not automatically attribute an environmental water body’s pre-existing load to farming. Do not count the same mass again through individually inventoried constituents. Report net retention/removal and closure residuals separately, not as negative emissions or avoided burdens; unmetered open-water diffuse pathways need independent model evidence.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass / kg
- Amount rule: Calculate the gross monitored indicator load by matched discharge volume and representative concentration over each interval, retaining unit conversion and origin attribution, then normalize to accepted final reference-product mass; never infer it directly from a net N/P-balance residual.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gross_discharge_sampling`

###### Gross total phosphorus discharged to freshwater (`nutrient_p_exchange`)

Use this card only for an actual controlled discharge to freshwater. Never substitute a freshwater identity for sea water or another medium. Retain monitoring interval, flow, concentration/elemental basis, influent background and material-origin evidence; do not automatically attribute an environmental water body’s pre-existing load to farming. Do not count the same mass again through individually inventoried constituents. Report net retention/removal and closure residuals separately, not as negative emissions or avoided burdens; unmetered open-water diffuse pathways need independent model evidence.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass / kg
- Amount rule: Calculate the gross monitored indicator load by matched discharge volume and representative concentration over each interval, retaining unit conversion and origin attribution, then normalize to accepted final reference-product mass; never infer it directly from a net N/P-balance residual.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gross_discharge_sampling`

###### Gross total nitrogen discharged to sea water (`nutrient_n_marine_discharge`)

Use this card only for an actual controlled discharge to sea water. Never substitute a freshwater identity for sea water or another medium. Retain monitoring interval, flow, concentration/elemental basis, influent background and material-origin evidence; do not automatically attribute an environmental water body’s pre-existing load to farming. Do not count the same mass again through individually inventoried constituents. Report net retention/removal and closure residuals separately, not as negative emissions or avoided burdens; unmetered open-water diffuse pathways need independent model evidence.

- Selected flow: nitrogen, total (excluding N2) `01b3863d-e1f8-4396-b9e0-7b2fdf812735`
- Flow property / unit: Mass / kg
- Amount rule: Calculate the gross monitored indicator load by matched discharge volume and representative concentration over each interval, retaining unit conversion and origin attribution, then normalize to accepted final reference-product mass; never infer it directly from a net N/P-balance residual.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gross_discharge_sampling`

###### Gross total phosphorus discharged to sea water (`nutrient_p_marine_discharge`)

The platform supplies no official Chinese name for this identity; the Chinese rendering retains the canonical English name. Use this card only for an actual controlled discharge to sea water. Never substitute a freshwater identity for sea water or another medium. Retain monitoring interval, flow, concentration/elemental basis, influent background and material-origin evidence; do not automatically attribute an environmental water body’s pre-existing load to farming. Do not count the same mass again through individually inventoried constituents. Report net retention/removal and closure residuals separately, not as negative emissions or avoided burdens; unmetered open-water diffuse pathways need independent model evidence.

- Selected flow: phosphorus, total `b92ed4fa-4e30-4cec-9e48-cef7e6fd4aa6`
- Flow property / unit: Mass / kg
- Amount rule: Calculate the gross monitored indicator load by matched discharge volume and representative concentration over each interval, retaining unit conversion and origin attribution, then normalize to accepted final reference-product mass; never infer it directly from a net N/P-balance residual.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gross_discharge_sampling`

###### Suspended solids in actual controlled grow-out discharge (`growout_suspended_solids`)

Use this card only for an actual controlled discharge to the recorded receiving water body. Never substitute a freshwater identity for sea water or another medium. Retain monitoring interval, flow, concentration/elemental basis, influent background and material-origin evidence; do not automatically attribute an environmental water body’s pre-existing load to farming. Do not count the same mass again through individually inventoried constituents. Report net retention/removal and closure residuals separately, not as negative emissions or avoided burdens; unmetered open-water diffuse pathways need independent model evidence.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: Calculate the gross monitored indicator load by matched discharge volume and representative concentration over each interval, retaining unit conversion and origin attribution, then normalize to accepted final reference-product mass; never infer it directly from a net N/P-balance residual.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gross_discharge_sampling`

### Process: Harvesting of market-size clams (`harvesting`)

#### Inputs

##### Product flows

###### Live in-shell clams, cockles or ark shells entering harvesting (`harvest_stock_input`)

Match actual species and cohort to marketable_clams_growout; carry accrued upstream burdens once across this internal handover, without adding a purchased-product background for the same transfer.

- Selected flow: Live in-shell clams, cockles or ark shells entering harvesting
- Flow property / unit: Mass / kg
- Amount rule: Independently record actual live net in-shell mass received from the matched sending lot, retaining state, time, weighing/assessment and transfer-loss evidence, and report using final accepted mass Q; do not fix internal input to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_yield_records_harvest`


###### Diesel for harvest boats and dredging or pumping machinery (`harvest_diesel`)

Diesel fuels harvest boats, dredges and pump systems during harvesting. The quantity is obtained from fuel purchase records and equipment logs allocated to harvesting.

- Selected flow: Diesel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: diesel consumed by harvesting per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records_harvest`

###### Electricity for hydraulic harvesting pumps (`harvest_electricity`)

Electricity powers hydraulic harvesting pumps and winches where used. The quantity is obtained from meter readings allocated to harvesting.

- Selected flow: Alternating-current electricity at the actual supply voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity allocated to harvesting per production cycle ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records_harvest`


Voltage level, supply region/provider and metering period must match actual service; a medium-voltage label cannot establish that every facility uses medium-voltage electricity.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested live clams landed (`harvested_clams`)

Record actual live drained net in-shell mass harvested and handed to landing handling, with weighing, species/grade/cohort and actual handover time. Match the receiving process; reconcile subsequent mortality, rejection and physical mass changes separately. Do not inherit a product UUID that verifies only another state or gate.

- Selected flow: Harvested live in-shell clams, cockles or ark shells at landing handover
- Flow property / unit: Mass / kg
- Amount rule: landed live weight per production cycle from calibrated weighing ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records_harvest`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide emitted to air from fuel combustion at this node (`harvest_fossil_co2`)

Applicable only to actual fossil fuel combustion at this node. Do not duplicate upstream fuel-production emissions as direct node emissions; biogenic CO2 and other combustion substances need separate identities and quantities.

- Selected flow: Carbon dioxide, fossil `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate fossil CO2 emitted to air using actual fossil fuel combusted at this node and sourced applicable carbon/oxidation or emission factors, or matched monitoring. Retain sources, boundary and uncertainty and report using final accepted mass Q; no generic factor is assumed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_records_harvest`


###### Suspended solids from sediment disturbance at harvest (`harvest_suspended_solids`)

Dredging, raking or hydraulic harvesting disturbs sediment and releases suspended solids. The quantity is modelled when direct measurement is unavailable.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: Determine harvesting-caused suspended-solids release using monitoring or an applicable evidenced process model, retaining matched background, material origin, receiving body and coefficient/sampling uncertainty, then report per final product mass; environmental pre-existing solids or a negative net change are not an emission. ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Collection protocol: `cp_harvest_release_records`

### Process: Landing-site washing, depuration, grading and chilling (`landing_site_handling`)

#### Inputs

##### Product flows

###### Harvested live in-shell clams, cockles or ark shells entering landing handling (`handling_stock_input`)

Match the actual harvested_clams handover; preserve receipts versus later mortality, grading, wet storage, final acceptance and opening/closing stocks. Never backfill incoming mass from the final 1 kg reference.

- Selected flow: Harvested live in-shell clams, cockles or ark shells entering landing handling
- Flow property / unit: Mass / kg
- Amount rule: Independently record actual live net in-shell mass received from the matched sending lot, retaining state, time, weighing/assessment and transfer-loss evidence, and report using final accepted mass Q; do not fix internal input to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product_dispatch_records`



###### Supplied treated freshwater for bivalve washing or depuration (`supplied_freshwater`)

Only actual externally supplied treated freshwater belongs here. Identify provider, water quality and meter boundary. Do not count directly abstracted sea water or internal recirculation as this product supply.

- Selected flow: Supplied treated freshwater for bivalve washing or depuration
- Flow property / unit: Volume / m3
- Amount rule: Independently measure this actual product quantity, retaining native unit, supply/use period and final accepted output; report per 1 kg reference flow without inheriting a family total, range or conversion factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`

###### Supplied sea water for bivalve washing or depuration (`supplied_seawater`)

Only actual sea water supplied across the facility boundary by another provider belongs here. Do not also count it as direct natural abstraction. Record actual source, salinity, treatment, volume and provider burden coverage.

- Selected flow: Supplied sea water for bivalve washing or depuration
- Flow property / unit: Volume / m3
- Amount rule: Independently measure this actual product quantity, retaining native unit, supply/use period and final accepted output; report per 1 kg reference flow without inheriting a family total, range or conversion factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`

###### Electricity for depuration, aeration and refrigeration (`handling_electricity`)

Electricity powers depuration pumps, aeration, ice making and cold storage at the landing facility. The quantity is obtained from meter readings allocated to handling.

- Selected flow: Alternating-current electricity at the actual supply voltage
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity allocated to handling per season ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records_handling`

- Range: Handling electricity intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh
  - Basis: kWh per kg dispatched live, fresh or chilled clams
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


Voltage level, supply region/provider and metering period must match actual service; a medium-voltage label cannot establish that every facility uses medium-voltage electricity.

###### Ice used for chilling (`ice`)

Record this product input only for actual externally supplied artificial water ice used for chilling, with supplier, water quality, form and independent mass evidence. On-site ice production is covered through actual water and energy inputs; internal ice transfer must not duplicate a purchased-ice background burden. Dry ice, gel packs and other coolants need their own identities. Ice is not assumed necessary for live lots.

- Selected flow: Ice and snow `1ff2c05e-4b5d-4971-9883-65f2a6b0007f`
- Flow property / unit: Mass / kg
- Amount rule: ice consumed per handling season ; retain the original total and divide by matched final accepted net mass Q to report per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ice_records`

- Range: Ice consumption guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: kg ice per kg dispatched live, fresh or chilled clams
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live, fresh or chilled farmed clams at the landing-site gate (`reference_product_output`)

The reference product leaves the landing-site gate live, fresh or chilled for first sale. The quantity is obtained from dispatch weighing records and equals the reference flow amount of 1 kg in the normalized data package.

- Selected flow: Farmed clams, cockles and ark shells, live, fresh or chilled `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_dispatch_records`

- Range: Final-reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

##### Elementary flows

###### Chemical oxygen demand in depuration and washing effluent (`effluent_cod`)

Use only for COD in an actual direct environmental discharge, calculated from matched discharge volume and representative concentration. Native amount is oxygen-equivalent demand, not the mass of one organic compound. Record actual receiver and material origin; wastewater sent for external treatment is a separate actual waste handover, not simultaneously direct discharge at the same boundary.

- Selected flow: Chemical Oxygen Demand `e57fc631-2c77-457a-aa30-be79e357792b`
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual load from matched measured discharge volume and representative indicator concentration, retaining unit conversion, background and origin attribution, and report per final accepted product mass; do not also count individually inventoried constituents for the same mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_discharge_sampling`

- Range: Effluent COD screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg
  - Basis: kg COD per kg dispatched live, fresh or chilled clams
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Suspended solids in washing effluent (`effluent_suspended_solids`)

Use only for suspended solids in actual direct environmental discharge from washing or depuration, retaining matched volume/concentration, background, actual receiver and origin attribution. Wastewater sent for external treatment is a separate waste handover, not simultaneously direct discharge at the same boundary; unknown load is not zero.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual load from matched measured discharge volume and representative indicator concentration, retaining unit conversion, background and origin attribution, and report per final accepted product mass; do not also count individually inventoried constituents for the same mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_discharge_sampling`

- Range: Effluent suspended solids screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: kg suspended solids per kg dispatched live, fresh or chilled clams
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_shell_part_of_product` | reference product | Shells are part of the live in-shell reference product; no allocation between meat and shell is performed. |  |
| `al_polyculture_shared_inputs` | shared multi-species inputs | First avoid allocation through separable processes and direct measurement. For inseparable shared quantities use an evidenced physical/causal relationship; if none is applicable or can be established, justify an economic or other relationship. Disclose all co-products, periods, prices/physical drivers, keys and sensitivity; economic allocation is not an unconditional default. | `iso-14044-2006` |
| `al_mortality_no_coproduct` | mortality, rejects, retained stock and live returns | Distinguish useful co-products, retained/returned stock, managed waste and environmental releases by actual use and fate; do not assume all rejects or undersized live animals have no value. Waste is not allocated as a useful product, but its collection, treatment and disposal remain covered. Release or sediment retention does not automatically create avoided-burden/removal credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_stocking_records` | `grow_out_culture` | clam seed input | stocking log | seed batch id; stocked mass; seed count; size grade; stocking date | farm stocking records with supplier delivery notes ; Raw-record aggregation: sum of stocked seed mass per cycle | kg | per stocking event | full grow-out cycle | each pond or culture parcel | per 1 kg reference flow | supplier invoices; signed stocking log |
| `cp_fertilizer_records` | `grow_out_culture` | fertilizer inputs | purchase and application log | product name; nutrient content; applied mass; application date | purchase invoices and field application log ; Raw-record aggregation: sum per cycle by fertilizer product | kg | per application | full grow-out cycle | each pond | per 1 kg reference flow | invoices; fertilizer label or specification |
| `cp_pond_preparation_records` | `grow_out_culture` | lime input | preparation record | lime product; applied mass; date; pond area | pond preparation log with purchase invoices ; Raw-record aggregation: sum per cycle | kg | per pond preparation | one preparation per production cycle | each pond | per 1 kg reference flow | preparation log; purchase invoices |
| `cp_electricity_records` | `grow_out_culture` | electricity input | metered consumption record | meter reading; period; allocated equipment | meter readings or utility bills, allocated by equipment hours where shared ; Raw-record aggregation: sum per period allocated to each process | kWh | monthly | at least one full production cycle | whole farm allocated to processes | per 1 kg reference flow | utility bills; meter reading records |
| `cp_electricity_records_handling` | `landing_site_handling` | electricity input | metered consumption record | meter reading; period; allocated equipment | meter readings or utility bills, allocated by equipment hours where shared ; Raw-record aggregation: sum per period allocated to each process | kWh | monthly | at least one full production cycle | whole farm allocated to processes | per 1 kg reference flow | utility bills; meter reading records |
| `cp_fuel_records` | `grow_out_culture` | diesel input | fuel log | fuel type; mass or volume; date; equipment | fuel purchase records and equipment logs ; Raw-record aggregation: sum per cycle allocated to each process | kg | per purchase or monthly | full production cycle | farm fleet allocated to processes | per 1 kg reference flow | fuel invoices; equipment hour logs |
| `cp_material_consumption_records` | `grow_out_culture` | gear material inputs | consumption record | material type; mass or volume; service life; replaced share | stock records and replacement logs annualized over service life ; Raw-record aggregation: annualized consumption summed per cycle | kg or m3 | per replacement event | full production cycle | each culture parcel | per 1 kg reference flow | purchase invoices; inventory counts |
| `cp_harvest_yield_records` | `grow_out_culture` | marketable grow-out biomass before harvesting | harvest log | parcel/species/cohort; assessment time; evidenced in-culture biomass assessment or sampling design; grade and individual mass; original results; actual loss/output linkage to harvesting | use declared evidenced pre-harvest biomass assessment; reconstruction from later harvest requires actual loss and mass-basis evidence, not equality with landed weight. Retain method, original records and uncertainty. | kg | per harvest event | harvest season of the cycle | each harvested parcel | per 1 kg reference flow | weighing records; sales slips |
| `cp_mortality_records` | `grow_out_culture` | dead stock output | mortality log | event date; estimated mass; cause; disposal route | periodic mortality estimates during culture inspection ; Raw-record aggregation: sum per cycle | kg | monthly or per event | full production cycle | each culture parcel | per 1 kg reference flow | inspection notes; disposal records |
| `cp_waste_records` | `grow_out_culture` | waste gear output | waste transfer log | waste type; mass; disposal route | waste transfer notes or weighed disposal records ; Raw-record aggregation: sum per cycle | kg | per disposal event | full production cycle | whole farm | per 1 kg reference flow | waste contractor receipts |
| `cp_nutrient_balance_records` | `grow_out_culture` | nutrient balance inputs | water and biomass test record | fertilizer nutrient input; influent water nutrient concentration; harvested biomass nutrient content | laboratory analysis of water and biomass samples with fertilizer specifications ; Raw-record aggregation: cycle nutrient balance normalized per kg output | kg | water sampled at stocking, mid-cycle and harvest; biomass at harvest | full production cycle | each pond or water exchange zone | per 1 kg reference flow | laboratory reports; sampling records |
| `cp_water_records` | `landing_site_handling` | process water input | water meter log | source type; volume; period | water meter readings or pumping records ; Raw-record aggregation: sum per season | m3 | monthly | handling season of the cycle | landing facility | per 1 kg reference flow | meter readings; utility bills |
| `cp_ice_records` | `landing_site_handling` | ice input | ice consumption log | ice mass; date; source | purchase invoices or ice-maker records ; Raw-record aggregation: sum per season | kg | per dispatch day | handling season of the cycle | landing facility | per 1 kg reference flow | invoices; ice-maker logs |
| `cp_product_dispatch_records` | `landing_site_handling` | reference product output | dispatch log | dispatch date; product state; mass; grade | calibrated scale weighing at dispatch ; Raw-record aggregation: sum per season | kg | per dispatch | handling season of the cycle | landing facility | per 1 kg reference flow | dispatch notes; sales records |
| `cp_reject_records` | `landing_site_handling` | grading rejects output | grading log | reject mass; cause; disposal route | grading line records ; Raw-record aggregation: sum per season | kg | per grading batch | handling season of the cycle | landing facility | per 1 kg reference flow | grading logs; disposal records |
| `cp_electricity_records_harvest` | `harvesting` | electricity input | metered consumption record | meter reading; period; allocated equipment | meter readings or utility bills allocated to harvesting equipment ; Raw-record aggregation: sum per harvest season allocated to the process | kWh | monthly | harvest season of the cycle | farm allocated to harvesting | per 1 kg reference flow | utility bills; meter reading records |
| `cp_fuel_records_harvest` | `harvesting` | diesel input | fuel log | fuel type; mass or volume; date; equipment | fuel purchase records and equipment logs allocated to harvesting ; Raw-record aggregation: sum per harvest season allocated to the process | kg | per purchase or monthly | harvest season of the cycle | farm fleet allocated to harvesting | per 1 kg reference flow | fuel invoices; equipment hour logs |
| `cp_harvest_yield_records_harvest` | `harvesting` | harvested output and returned undersized | harvest and sorting log | harvest date; parcel; landed live weight; returned undersized and by-catch estimate | landing weighing with calibrated scales and sorting estimates ; Raw-record aggregation: sum per cycle | kg | per harvest event | harvest season of the cycle | each harvested parcel | per 1 kg reference flow | weighing records; sorting notes |
| `cp_gross_discharge_sampling` | `grow_out_culture` | controlled-discharge indicators by medium | matched flow and laboratory sampling record | outlet and receiving body/salinity; interval; measured discharge; meter calibration; concentration and elemental basis; sample time; detection limit; influent background; material origin; matched final accepted product mass | Match metering and representative sampling at actual controlled outlets; retain original interval/substance/medium records, origin attribution and uncertainty. Without point-discharge evidence do not treat an open-water net balance as discharged load ; Raw-record aggregation: attribute evidenced per-flow load totals per 1 kg reference flow, retaining original flow/concentration records | m3; kg/m3; kg | actual discharge intervals and representative sampling schedule | matched full production cycle and final accepted lot | each controlled outlet and actual receiving body | per 1 kg reference flow | flow calibration, sampling plan, laboratory report, background and origin-attribution evidence |
| `cp_handling_discharge_sampling` | `landing_site_handling` | actual discharged COD and suspended solids | matched flow/laboratory sampling record | outlet/receiver; interval; discharge volume; COD oxygen-equivalent or suspended-solids concentration; background; material origin; sampling/detection limits; final accepted mass | Match actual outlet flow and representative samples; retain unit conversions, origin attribution and uncertainty. Wastewater sent for external treatment is not direct environmental discharge at this same boundary | m3; kg/m3; kg | actual discharge intervals | full handling period and matched dispatch lots | actual process outlets and receivers | per 1 kg reference flow | calibration, laboratory, sampling and fate records |
| `cp_harvest_release_records` | `harvesting` | harvesting-caused suspended-solids release | site monitoring or evidenced process-model record | harvest method/area/interval; disturbance and receiver; matched background; measurements or model name/parameter sources; uncertainty; harvest and final product mass | Distinguish actual harvesting-caused release from pre-existing environmental load; any model needs site applicability, coefficient sources, boundary and uncertainty. Unknown is not zero | kg | actual harvest events and associated monitoring | matched harvest season and dispatch lots | actual harvest parcel and receiving body | per 1 kg reference flow | monitoring, model/parameter sources and representativeness |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_output_normalization` | all foreground inventory rows | amount_per_kg = recorded_cycle_amount / dispatched_reference_product_kg | recorded cycle amounts; dispatched reference product mass | inventory amount normalized to 1 kg reference product |  |
| `cr_electricity_unit_conversion` | electricity rows | electricity_MJ = electricity_kWh x 3.6 | metered electricity in kWh | electricity amount on an energy basis where the dataset requires it |  |
| `cr_nutrient_balance` | complete N/P balance indicator, not an elementary exchange | Reconcile fertilizer, incoming/outgoing water, stocked seed, harvest, mortality/waste, opening/closing biomass and sediment stocks and other identified N/P pathways on matched-period elemental-mass bases; report closure residuals and uncertainty. Net retention/removal is a boundary-specific balance indicator, not a substitute for measured discharge, evidence of receiving medium, or a negative elementary emission/avoided burden. Unknown pathways are not zero. | fertilizer records; influent water nutrient tests; harvested biomass nutrient tests | separately reported N/P balance, closure residual and evidence gaps |  |
| `cr_harvest_mass_closure` | harvest, holding and handover | On consistent in-shell product-mass bases reconcile opening stock and actual harvested receipts against accepted dispatch, other useful outputs, mortality/rejects, closing stock and evidenced physical mass changes. Deduct ice, carrier water and packaging tare once only from gross weights that include them. Explain closure residuals using actual measurement uncertainty; an unsupported fixed tolerance cannot make unknown losses acceptable. | opening/closing stock, harvest, dispatch, other-output, reject and mass-basis records | product-mass balance with residual and uncertainty |  |
| `cr_gross_discharge_load` | controlled-discharge N, P and suspended-solids cards | For each matched interval multiply measured discharge volume by the corresponding indicator concentration with explicit unit conversion; sum actual interval loads and report using declared origin attribution/shared allocation and final accepted product mass. Retain influent background, detection limits and errors; a negative system net balance does not produce a negative emission. | cp_gross_discharge_sampling; actual unit conversions; origin and allocation records; final accepted mass | controlled-discharge gross indicator load and uncertainty per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all concrete exchanges | Confirm each physical/chemical identity, species/stage, actual state, supply/handover gate, receiving medium and compatible property/unit. A matching name does not prove UUID compatibility; explicitly track and resolve unknown identities before final dataset completion. | per-flow identity and measurement evidence |
| `dq_measurement` | collected foreground amounts | Amounts derive from calibrated meters, scales, invoices or laboratory analyses; any estimation method is declared. | calibration records; invoices; laboratory certificates |
| `dq_temporal_coverage` | foreground dataset | Records cover at least one full grow-out production cycle including its harvest and handling season. | stocking, harvest and dispatch logs spanning the cycle |
| `dq_completeness` | process inventory | Every required process and flow row is populated or explicitly justified as not applicable to the declared route. | completeness checklist against the process map |
| `dq_disclosure` | dataset metadata | Culture system, site, fertilization practice, depuration practice, survival rate, allocation keys and cut-off choices are disclosed. | dataset metadata fields |
| `dq_waterborne_pathways` | all waterborne loads and open-water pathways | Separate controlled discharge, open-water diffuse pathways, natural background, intake and actually evidenced uptake/retention. Use separate monitoring or an applicable process model with coefficient evidence for each substance/medium; a net N/P system balance does not identify released species, media or pathways automatically. Unknown is not zero or a credit; origin/pathway gaps block final data-package completion. Do not double-count indicator totals and individually inventoried constituents for the same mass. | outlet/water-body records, matched sampling, species/pathway evidence, model applicability, coefficient sources and uncertainty |
| `dq_atomic_completion` | every process and inventory-completion obligation | These are mandatory per-identity collection obligations, not exchanges, default inputs or emissions. Create separate cards and independent measurements for each actual substance, product, waste stream, emitted substance and receiving medium; retain native units, original batch/stage output, final-gate reference output, attribution/allocation and range/uncertainty evidence. Normalize original totals using matched final output; stage-normalized data require measured stage output to recover the numerator, never an assumption that stage and final output coincide. Do not copy a family total, mixed-unit range, default estimate or one UUID onto children. Unknown is not zero. Purchased materials are product inputs; only direct natural-resource abstraction is an elementary input. Determine the direction/type of mortality/managed waste, direct releases and useful co-products separately from actual fate. | per-flow coverage ledger, measurements/sampling, allocation, original/final outputs, identity and fate records |
| `dq_complete_nitrogen_fertilizer` | `grow_out_culture`; Nitrogen fertilizer applied for pond fertilization | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Nitrogen fertilizer such as urea is recorded when pond fertilization is practised to sustain phytoplankton. The quantity is obtained from purchase invoices and field application logs. ; Flow property / unit: Mass / kg ; Amount rule: applied fertilizer mass per production cycle ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_fertilizer_records` ; Range: Fertilizer nitrogen intensity guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.05 ; Unit: kg ; Basis: kg nitrogen fertilizer per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_gear_plastics` | `grow_out_culture`; Plastic gear materials consumed | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Nets, mesh bags, ropes and other plastic culture gear are consumed over their service life. The quantity is obtained from stock records and replacement logs annualized per cycle. ; Flow property / unit: Mass / kg ; Amount rule: annualized consumption of plastic gear per production cycle ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_material_consumption_records` ; Range: Plastic gear consumption guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.05 ; Unit: kg ; Basis: kg plastic gear per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_culture_gear_waste` | `grow_out_culture`; End-of-life plastic culture gear | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Worn-out nets, ropes and other plastic gear leave the process as waste at replacement. The quantity is obtained from waste transfer notes or weighed disposal records. ; Flow property / unit: Mass / kg ; Amount rule: disposed plastic gear mass per production cycle ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_waste_records` ; Range: Plastic gear waste guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.05 ; Unit: kg ; Basis: kg plastic waste per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_mortality_shell_residue` | `grow_out_culture`; Dead stock and shell residues | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Clams that die during grow-out and their shell residues are collected or returned to the culture bottom. The quantity is estimated from periodic mortality inspections. ; Flow property / unit: Mass / kg ; Amount rule: estimated dead stock mass per production cycle ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_records` ; Range: Mortality residue guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.5 ; Unit: kg ; Basis: kg dead stock per kg marketable live clams transferred to harvest ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) Retain separate mortality/shell state, wet/dry basis and actual fate. Biomass remaining in sediment is not automatically a waste transfer across the system boundary or a quantified elemental emission; relevant releases need evidenced decomposition/release models or monitoring. Unknown is not zero. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_undersized_bycatch_return` | `harvesting`; Undersized clams and incidental by-catch returned to the water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Record actual state and fate of undersized clams and incidental organisms sorted at harvest. The quantity is estimated from sorting records at landing. ; Flow property / unit: Mass / kg ; Amount rule: estimated returned mass per production cycle ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg harvested live clams landed ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_harvest_yield_records_harvest` ; Range: Returned undersized and by-catch guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.3 ; Unit: kg ; Basis: kg returned per kg harvested live clams landed ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) Record actual fate separately by species/state. Live retained/returned stock is not waste and creates no automatic negative resource input or avoided-emission credit. Verify mortality/disposal, saleable co-products and environmental release separately; not every undersized or incidental organism is assumed returned. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_process_water` | `landing_site_handling`; Process water for washing and depuration | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Clean water for washing and depuration crosses the boundary at the landing facility; seawater may substitute tap water and is recorded as water volume with the source declared. The quantity is obtained from water meters or pumping records. ; Flow property / unit: Volume / m3 ; Amount rule: metered water volume per handling season ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg dispatched live, fresh or chilled clams ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_water_records` ; Range: Process water intensity guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.05 ; Unit: m3 ; Basis: m3 per kg dispatched live, fresh or chilled clams ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) Distinguish externally supplied product water, this facility’s direct natural-resource abstraction and internal recirculation for each actual source. Create independently identified native-property/unit cards for actual sea water, freshwater or groundwater abstraction, using meter records and matched temperature/salinity/density when converting mass/volume. Record actual discharge/treatment fate. Fresh/sea water use requires site/species suitability, not assumed interchangeability. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_grading_rejects` | `landing_site_handling`; Dead or broken clams rejected at grading | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: Record actual use, state and fate of grading rejects. The quantity is obtained from grading line records. ; Flow property / unit: Mass / kg ; Amount rule: rejected mass per handling season ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per kg dispatched live, fresh or chilled clams ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_reject_records` ; Range: Grading reject guardrail ; Range role: QA guardrail (`qa_guardrail`) ; Lower: 0 ; Upper: 0.15 ; Unit: kg ; Basis: kg rejects per kg dispatched live, fresh or chilled clams ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) Distinguish saleable downgraded product, retained/returned stock, dead organic waste and shells by actual use and fate, not the word reject. Actual waste needs receiving/treatment evidence; do not count whole-animal mass and its contained shells twice. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_stage_ratio_clam_seed` | `grow_out_culture`; `clam_seed` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Seed stocking intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0.02; Upper: 0.6; Unit: kg; Basis: kg stocked seed per kg marketable live clams transferred to harvest; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_phosphate_fertilizer` | `grow_out_culture`; `phosphate_fertilizer` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Fertilizer phosphate intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.05; Unit: kg; Basis: kg phosphate fertilizer per kg marketable live clams transferred to harvest; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_lime` | `grow_out_culture`; `lime` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Lime application intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.15; Unit: kg; Basis: kg lime per kg marketable live clams transferred to harvest; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_growout_electricity` | `grow_out_culture`; `growout_electricity` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Grow-out electricity intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.5; Unit: kWh; Basis: kWh per kg marketable live clams transferred to harvest; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_growout_diesel` | `grow_out_culture`; `growout_diesel` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Grow-out diesel intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.1; Unit: kg; Basis: kg diesel per kg marketable live clams transferred to harvest; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_bamboo_stakes` | `grow_out_culture`; `bamboo_stakes` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Bamboo consumption guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.005; Unit: m3; Basis: m3 bamboo per kg marketable live clams transferred to harvest; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_marketable_clams_growout` | `grow_out_culture`; `marketable_clams_growout` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Harvest multiple over stocked seed guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 2; Upper: 20; Unit: kg; Basis: kg marketable live clams per kg stocked seed; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_harvest_diesel` | `harvesting`; `harvest_diesel` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Harvest diesel intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.15; Unit: kg; Basis: kg diesel per kg harvested live clams landed; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_harvest_electricity` | `harvesting`; `harvest_electricity` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Harvest electricity intensity guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 0.3; Unit: kWh; Basis: kWh per kg harvested live clams landed; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_harvested_clams` | `harvesting`; `harvested_clams` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Harvest recovery over marketable stock guardrail; Range role: QA guardrail (`qa_guardrail`); Lower: 0.8; Upper: 1; Unit: kg; Basis: kg harvested live clams landed per kg marketable live clams transferred from grow-out; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_stage_ratio_harvest_suspended_solids` | `harvesting`; `harvest_suspended_solids` | The following broad screen concerns only its declared raw stage intensity/ratio with a matched measured stage denominator, not the exchange amount per kg final reference. Final-reference conversion requires actual stage/final outputs; no default yield or empirical-limit claim is allowed: Range: Harvest sediment disturbance screening estimate; Range role: QA guardrail (`qa_guardrail`); Lower: 0; Upper: 5; Unit: kg; Basis: kg suspended solids per kg harvested live clams landed; Basis kind: Process output (`process_output`); Evidence kind: Reasoned estimate (`reasoned_estimate`) | matched stage/final outputs, measurement, range and uncertainty evidence |
| `dq_reporting_basis_and_ranges` | all exchanges, stage intensities and co-products | Final reference output is fixed at 1 kg with denominator Q, the matched cohort/period measured accepted net mass at landing handover. Preserve other exchanges as their own original physical quantities reported using Q; do not multiply internal animal/co-product mass by an allocation share and present it as physical quantity. Attribute/allocate shared LCA burdens separately from unallocated physical ledgers and once only. Numerical screens are reasoned_estimate on their declared basis, not model defaults, empirical distributions or mandatory cut-offs; stage screens need their actual stage denominator, not direct application to amounts per kg final output. Each concrete new flow needs independent measured range/uncertainty evidence, not inherited family bounds. | original physical ledgers, final accepted Q, stage outputs, measurements/allocation and range evidence |
| `dq_route_completeness` | actual route at every node | Reconcile direct natural abstraction versus supplied water, seabed/water-area occupation and changes, all actual fuels/electricity, chemicals/fertilizers, maintenance/cleaning, containers/packaging, facility materials/replacement, air substances, discharge/external treatment, sediment/biomass changes and fate. Materialize independently identified actual applicable exchanges with sources, quantity, native unit, basis and uncertainty. Listing diesel/CO2 does not establish absence of other fuels or pollutants. The FAO Manila-clam route does not prove all cockle/ark-shell or suspended grow-out systems; each actual species/technology requires applicability evidence. Unverified gaps block final completeness, never become zero. | per-node coverage ledger, actual site records and method-applicability evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_flow_identity` | reference flow definition | The data package reference flow carries the product flow, flow property and unit group UUIDs declared in section 3, with reference amount 1 and unit kg. |  |
| `vr_required_qualifiers` | dataset metadata and reference flow comment | Every required qualifier in section 3 is declared; a data package with a missing qualifier fails validation. |  |
| `vr_mass_closure` | harvest and handling mass balance | Retain the measurements, same-basis balance, residual and uncertainty required by cr_harvest_mass_closure, with investigation and disposition of unexplained terms. A percentage screen alone does not establish closure. |  |
| `vr_unit_consistency` | inventory rows | Amounts use the units declared in the flow rows and section 4; electricity is stored consistently in kWh or MJ with the conversion documented. |  |
| `vr_range_conformance` | collected foreground amounts | Verify original records and uncertainty for each QA flag, distinguishing a genuine extreme from an evidenced error; never truncate or replace true observations to fit a broad screen. Where no numeric interval is supplied, provide independent measurement uncertainty/representativeness evidence rather than an invented upper limit. |  |

Final data-package validation must read back dq_atomic_completion and every dq_complete_ requirement. Every applicable obligation must have concrete exchanges with independent quantities, units, sources, normalization, range/uncertainty, fate and verified UUIDs. Use not_applicable only for evidenced absence. Unknown identities, missing quantities, unclassified fates or unfulfilled obligations block final data-package completion. Static PCR checking is not a substitute for this validation.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_product_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Life cycle modelling of farmed clams, cockles and ark shells supplied live, fresh or chilled; upstream dataset for same-category transfers between farms under this PCR |
| excluded_use | Representing wild-caught products; representing processed, frozen or preserved clam products; use outside the declared culture system, region and cycle without remodelling |
| required_metadata | required qualifiers of section 3; data quality disclosures of section 8; allocation keys; cut-off disclosures |
| required_quality_disclosure | measurement basis, temporal coverage, completeness against the process map, and guardrail range flags |
| update_trigger | new production cycle data; change of culture system, fertilization or depuration practice; correction of a referenced Tiangong UUID; methodological update of this PCR |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-ver-3-0` | Standard (`standard`) | United Nations Central Product Classification Version 3.0, code 04452 | product category identity and classification scope |
| `fao-cultured-aquatic-species-ruditapes-philippinarum` | Official guidance (`official_guidance`) | FAO (2009), Ruditapes philippinarum, text by P. Goulletquer. https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_japanesecarpetshell.htm | qualitative Manila-clam bottom/pond grow-out, harvesting and handling; not PCR quantity defaults or proof of every cockle/ark-shell or suspended grow-out route |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006 Environmental management - Life cycle assessment - Requirements and guidelines | allocation hierarchy for shared inputs |
