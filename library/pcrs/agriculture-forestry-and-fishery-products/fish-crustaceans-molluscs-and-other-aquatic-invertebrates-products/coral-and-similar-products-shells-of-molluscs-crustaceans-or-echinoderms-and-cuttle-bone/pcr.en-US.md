---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Washed and drained uncalcined mussel-shell fragments

## 1. Scope and Applicability

This PCR is restricted to source-separated mussel-shell fragments from mussel processing, freshwater-washed and drained without thermal drying, calcination or milling. Its final reference is the independently defined intermediate-material handover after final dripping/storage and before a kiln; it is not an externally marketed manufactured-carbonate product. The applicable route is supported qualitatively by Barros et al. (2009), section 2.1, but current source segregation and actual operations must be evidenced.

Exclude coral, other mollusc/crustacean/echinoderm shells, cuttle-bone, mixed unsegregated shell feed, whole live animals, shell powder, shaped articles and chemically transformed derivatives. The historical facility handled mainly mussel shells, not a proven pure target recipe; it does not establish a particular Mytilus species, current quantities, sale of this intermediate, legal end-of-waste, purity or safe use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone |
| classification_refs | CPC 3.0 04911; narrower product/route boundary; no whole-leaf coverage claim |
| covered_products | Washed and drained uncalcined mussel-shell fragments |
| excluded_products | All other material families, unwashed or thermally dried/calcined/milled reference products, manufactured carbonate and downstream applications. |
| representative_product | One source-verified mussel-shell fragment lot at the washed/drained pre-calcination interface. |
| production_route | Documented mussel-processing residue; actual delivery; receipt; freshwater washing and initial drainage; actual wastewater management; final dripping/storage and pre-calcination handover. |
| market_state | Wet, washed and drained uncalcined fragments, with measured residual moisture and actual specification; an intermediate interface, not presumed external commodity. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Washed and drained uncalcined mussel-shell fragments; at the pre-calcination intermediate handover |
| how_much | 1 kg net washed/drained fragment mass including measured residual moisture, excluding free leachate and packaging. |
| how_well | Actual mussel origin/taxon, segregation, fragment state, residual moisture, grade and acceptance specification documented; no mineral-purity or end-of-waste presumption. |
| how_long_or_cycle | Matched incoming lot, washing run, drainage/storage interval, stocks and measured final accepted handover campaign. |
| reference_flow_link | `reference_product_flow` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Washed and drained uncalcined mussel-shell fragments |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual mussel taxon; source processing site and geography; segregation evidence; waste/legal status and supplier burden treatment; raw and final moisture; fragment form/grade; washing/drainage operations; lot/period/stocks; precise pre-calcination handover location/time; acceptance; packaging/free-water exclusion. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | all shell and residue masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep raw wet batch/period masses and measured moisture/solids. Q is positive accepted net mass at the single final interface. Report each actual material amount q/Q on this basis; physical transfers are not allocated or fixed to 1 kg. |
| `moisture_basis` | receipt, washing and final drainage | Mass | kg | Document each stage moisture and sampling method. Convert dry/wet bases only from matching measured solids/water content; removal of water, tissue, salt and shell has separate balances. No universal dry yield, mineral composition or monotonic wet-mass yield is supplied. |
| `water_units` | each water and aqueous-waste stream | Mass | kg | Retain native meter volume where used; conversion to the stated mass requires source-specific measured/documented density with temperature/salinity and uncertainty. If an eventual verified flow uses another native property, retain and explicitly reconcile that supported unit; do not borrow a resource UUID for supplied water. |
| `energy_units` | electricity and actual fuels | Net calorific value / Mass | kWh / kg | Electricity kWh is energy (1 kWh = 3.6 MJ); diesel kg is fuel mass, not electrical energy. Native L-to-kg or mass-to-energy conversion requires matching density/heating-value evidence, not a database-name default. |
| `transport_load` | controlled_collection_and_delivery | Mass-distance | tkm | Where a purchased transport service is used, derive tkm from actual wet cargo mass and route distance, including actual accompanying water/containers; retain empty-return and service coverage evidence. Owned fuel/combustion is not counted again for the same inclusive service. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_source` | source_qualification_and_receipt | Begin at source-separated mussel-processing shell-fragment residue available for delivery. Preserve actual upstream aquaculture/processing burden treatment, ownership, waste status and supplier dataset. Waste naming alone is not a zero-burden rule. | `eu-pef-method-2021` |
| `boundary_route` | foreground route | Include actual transport coverage, receipt, freshwater washing/dripping, final storage/drainage, included utilities/assets and actual residue/water treatment. The sole final gate is the pre-calcination intermediate handover; neither kiln energy nor post-calcination product is inside. | `barros-mussel-shell-2009` |
| `boundary_interface` | packaging_storage_and_gate_release | Product-flow terminology here identifies the physical unit-process intermediate only; it does not establish commercial sale, ownership transfer, waste classification or legal end-of-waste. Retain actual legal status and verify technical flow type/state before binding each exchange. |  |
| `boundary_water` | washing, treatment and storage | Pair internal wastewater/reuse transfers once. Count new external supply/abstraction separately; gross internal circulation is not new input and is not subtracted again. Managed wastewater handover is waste; direct discharge needs actual returned-water and substance/media records. |  |
| `boundary_exclusions` | downstream and non-target materials | Exclude coral, other shells/cuttle-bone, unsegregated mixed feeds, milling, thermal drying/calcination, manufactured carbonate, distribution after the interface and downstream use. Do not widen this PCR to retain an unrelated operation. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Source-separated unwashed mussel-shell fragment waste from a documented mussel-processing site |
| starting_condition_role | Actual upstream residue handover, not collection of natural coral or a new marine resource withdrawal |
| product_classification_scope | CPC 3.0 04911; narrower; Washed and drained uncalcined mussel-shell fragments |
| recursive_input_rule | Reference the actual supplier preparation and prior burden once; pair controlled delivery with receipt without another external supply. |
| upstream_dataset_requirement | Actual mussel-processing residue and delivery, supply utilities/materials and receiving treatment; missing supplier evidence blocks completeness, not zero. |
| disclosure | Species/source segregation, raw/final moisture, actual operations, interface, period/stocks, physical balances, transport coverage, water topology, treatment, assets, legal status, allocation and uncertainties. |

## 6. Process Inventory Structure

Each card is one concrete physical or chemical exchange. A dataset identifies one actual mussel source/taxon and fragment specification; different sources, water grades, wastes or substances need independent exchanges and records. Conditional cards apply only to actual operations. Mandatory completion duties in section 8 are not substitute exchange bindings.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_qualification_and_receipt` | Source qualification and receipt | `required` | Receive source-separated mussel-processing shell-fragment waste with actual provenance and waste status. | unit operation | actual measured native throughput |
| `controlled_collection_and_delivery` | Controlled pre-receipt delivery | `conditional` | Actual foreground-controlled movement from mussel processing to receipt; otherwise link the purchased delivery service. | unit operation | actual measured native throughput |
| `cleaning_drying_and_sorting` | Freshwater washing and initial dripping | `required` | Wash the target shell fragments and drain initially; no thermal drying, calcination or milling. | unit operation | actual measured native throughput |
| `onsite_wastewater_management` | On-site wastewater management | `conditional` | Only actual operator-controlled treatment of washing water or storage leachate; outside treatment remains an evidenced receiving service. | unit operation | actual measured native throughput |
| `packaging_storage_and_gate_release` | Storage, final dripping and pre-calcination handover | `required` | Release the measured washed, drained, uncalcined shell-fragment intermediate; no downstream kiln or manufactured-carbonate output. | final intermediate handover | 1 kg accepted washed/drained fragments |

### Process: Source qualification and receipt (`source_qualification_and_receipt`)

#### Inputs

##### Product flows

###### Receipt-handling electricity (`receipt_electricity`)

Conditional actual receiving/conveyor electricity; supplier, geography, voltage and meter period must match.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source_receipt`

##### Waste flows

###### Received unwashed mussel-shell fragment waste (`source_material_received`)

Require actual segregation/source evidence that the feed is mussel shell, not the historical facility’s unspecified mixture. Weigh net received feed with adhering moisture/residues stated, excluding vehicle, container and separable free-water tare. Preserve actual waste status and supplier burden records.

- Selected flow: Unwashed mussel-shell fragment waste from mussel processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source_receipt`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Accepted unwashed mussel-shell fragment waste (`accepted_source_material`)

Measure actual accepted wet feed transferred to washing. Pair its lot/mass/state with washing input; separately record receipt rejects, stock and free-water separation, not a presumed source-to-product yield.

- Selected flow: Unwashed mussel-shell fragment waste from mussel processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source_receipt`

##### Elementary flows

### Process: Controlled pre-receipt delivery (`controlled_collection_and_delivery`)

#### Inputs

##### Product flows

###### Diesel actually consumed in controlled delivery (`collection_or_delivery_diesel`)

Conditional actual owned diesel consumption; do not duplicate a purchased transport service. This mass-based identity supplies no default formulation, supplier, density, heating value or emission factor; volume conversion needs matching density.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection_transport`

##### Waste flows

###### Unwashed shell-fragment waste loaded for delivery (`material_collected_or_delivered`)

Only actual controlled delivery. Record loaded feed, adhering moisture, containers and any separately carried water as actual cargo; the shell exchange excludes container tare.

- Selected flow: Unwashed mussel-shell fragment waste from mussel processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection_transport`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Unwashed shell-fragment waste delivered to receipt (`delivered_source_material`)

Measure delivered wet feed and link to the receipt event. Do not count delivery and receipt as two external supplies. Record losses and any stock or moisture change independently.

- Selected flow: Unwashed mussel-shell fragment waste from mussel processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection_transport`

##### Elementary flows

###### Fossil carbon dioxide from owned delivery combustion to air (`delivery_fossil_co2`)

Only actual foreground fossil-fuel combustion, to air. Calculate emitted fossil CO2 from the actual measured fossil-fuel activity and an independently supported fuel/engine/carbon-origin factor, retaining dimensional units and uncertainty; no universal factor or double counting with an inclusive transport/combustion service. Other substances require independent completion. Monitoring, where available, is an independent QA comparison, not a second CO2 inventory quantity.

- Selected flow: Carbon dioxide, fossil `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Calculate fossil CO2 mass from the actual combustion activity multiplied by its independently evidenced compatible factor; retain source activity and factor units, calculation and uncertainty, and report per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_collection_transport`

### Process: Freshwater washing and initial dripping (`cleaning_drying_and_sorting`)

#### Inputs

##### Product flows

###### External freshwater supplied for shell washing (`preparation_freshwater`)

Only actual external freshwater product supply with documented source and quality. Direct natural abstraction is collected separately; internal recycled water is not new supply. Keep kg or convert a raw volume only with matching temperature/salinity density evidence.

- Selected flow: Freshwater supplied for mussel-shell washing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`

###### Reclaimed washing water returned from on-site treatment (`washing_reclaimed_water`)

Conditional actual internal treated-water transfer of one documented composition/salinity; pair with treatment output. Retain gross recirculation for unit balances, but cancel the internal transfer in the system supply total; do not subtract it again from new intake.

- Selected flow: Reclaimed water from mussel-shell wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`

###### Washing and drainage electricity (`preparation_energy_electricity`)

Meter the actual washing, conveyors and drainage equipment; identify supply and allocate only shared utility burdens by documented use.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`

##### Waste flows

###### Unwashed shell-fragment waste entering washing (`material_for_preparation`)

Actual accepted same-lot wet feed. Keep residual tissue, salts, foreign matter and water observations separate from the identified shell object; no invented composition or dry-to-wet factor.

- Selected flow: Unwashed mussel-shell fragment waste from mussel processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`

##### Elementary flows

#### Outputs

##### Product flows

###### Washed wet uncalcined shell fragments (`washed_wet_shell_fragments`)

Measure the actual wet intermediate sent to final dripping/storage without thermal drying. Keep measured residual moisture and material change; no high-purity CaCO3, dry-shell or sterilization claim.

- Selected flow: Washed wet uncalcined mussel-shell fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`

##### Waste flows

###### Washing wastewater sent to actual treatment (`washing_wastewater`)

Only a managed on-site or off-site treatment handover. Record this aqueous stream’s actual salinity/composition, quantity, receiver and fate. A direct environmental discharge instead requires separately identified returned water and each actual substance/medium, not this waste binding.

- Selected flow: Wastewater from mussel-shell washing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`

##### Elementary flows

### Process: On-site wastewater management (`onsite_wastewater_management`)

#### Inputs

##### Product flows

###### On-site wastewater-treatment electricity (`wastewater_treatment_electricity`)

Conditional actual treatment pumping, separation and associated electricity; retain meter interval, consumers and supported share, without presuming a treatment train.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_onsite_water_treatment`

##### Waste flows

###### Washing wastewater received for on-site treatment (`washing_wastewater_received`)

Conditional on operator-controlled treatment; pair with the washing outlet using the same event and quantity. Treatment resources and outputs belong here, not to a second external wastewater supply.

- Selected flow: Wastewater from mussel-shell washing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_onsite_water_treatment`

###### Shell-storage leachate received for on-site treatment (`storage_leachate_received`)

Only actual on-site receipt, paired to the storage outlet with actual quality and mass. Do not combine it with washing wastewater unless a measured combined treatment stream is separately identified.

- Selected flow: Leachate from wet mussel-shell storage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_onsite_water_treatment`

##### Elementary flows

#### Outputs

##### Product flows

###### Reclaimed washing water returned to washing (`reclaimed_water_output`)

Conditional actual water meeting the recorded reuse specification; pair with washing input. This internal recovery is not an external-water credit or a second intake reduction.

- Selected flow: Reclaimed water from mussel-shell wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_onsite_water_treatment`

##### Waste flows

##### Elementary flows

### Process: Storage, final dripping and pre-calcination handover (`packaging_storage_and_gate_release`)

#### Inputs

##### Product flows

###### Washed wet fragments entering final dripping (`product_entering_gate_handling`)

Actual measured wet intermediate, with lot, residual moisture and storage/carryover records. It can differ from final accepted mass as water drains, material is lost or stock changes.

- Selected flow: Washed wet uncalcined mussel-shell fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual unallocated material mass and its stage moisture, retain raw lot quantities and report per 1 kg reference flow; never set an internal transfer to 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging_and_gate_release`

###### Final storage and handover electricity (`packaging_and_storage_energy_electricity`)

Only actual storage, ventilation, drainage, internal handling or gate-weighing electricity under this node; no default storage duration.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging_and_gate_release`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed drained uncalcined fragments at pre-calcination handover (`reference_product_flow`)

One physically identified intermediate at the final drainage/storage handover before any kiln. Reference mass includes its measured residual moisture, excludes separate free leachate and packaging, and does not imply external sale, chemical purity or legal end-of-waste.

- Selected flow: Washed and drained uncalcined mussel-shell fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_packaging_and_gate_release`
- Sources: `mass-balance-identity`
- Range: Defined reference normalization
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

##### Waste flows

###### Shell-storage leachate sent to actual treatment (`storage_leachate`)

Actual aqueous drainage sent to managed treatment; record composition, mass and receiver, paired to on-site receipt only if that route is used. Direct release has separately identified medium-specific exchanges.

- Selected flow: Leachate from wet mussel-shell storage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure this exchange independently in its native unit under the owning-node protocol; retain raw lot/period quantity and report per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging_and_gate_release`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all nodes and lots | Subdivide independently metered operations and lots and directly assign identifiable resources first. Keep physical material/water masses and paired transfers unallocated; allocation changes only shared LCA burden numerators. | `eu-pef-method-2021` |
| `allocation_prior_burden` | source_qualification_and_receipt | Retain supplier waste/by-product status and upstream mussel aquaculture/processing burden rule and evidence. No automatic zero burden, avoided-disposal credit or sale revenue is assumed. | `eu-pef-method-2021` |
| `allocation_shared` | shared equipment, treatment and assets | Document consumers, service periods and causal use keys (for example measured use or load where supported). If causal allocation cannot be supported, disclose an alternative relationship, complete output set, prices/period if economic, and sensitivity. Do not repeat a total at every node. | `eu-pef-method-2021` |
| `allocation_residue` | losses, rejects and internal reuse | Separate actual useful outputs from managed wastes using evidenced destinations; losses retain their burdens in the product-system accounting. Internal shell/water transfers cancel in the system inventory, not in node balances. No negative nutrient balance or recycling credit is implied. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_receipt` | source_qualification_and_receipt | Source qualification and receipt | owned-node event and meter ledger | supplier; actual mussel taxon; segregation/source evidence; prior waste status; gross/tare/net received feed; adhering/free water; moisture; accepted feed; each reject/fate; electricity; event_id; owning node; linked lot/period; raw quantity/unit; same final Q; stage yields; stocks; included assets/materials/consumers/service periods and attribution key | Measure each actual exchange at this node using calibrated scales/meters, inventory and receipt records. Preserve raw native quantities and moisture/density evidence; cross-reference paired transfers and the one shared ledger. Aggregate attributable exchange quantities and report per 1 kg reference flow using the same positive actual final Q; never duplicate shared totals or fix intermediate mass to 1 kg. | kg; kWh; native measured units | each lot, operation and meter interval | matched whole campaign, carryover and asset service periods | source_qualification_and_receipt | per 1 kg reference flow | calibration; original meters/invoices; source and quality evidence; receiver records; paired transfers; balances and uncertainty |
| `cp_collection_transport` | controlled_collection_and_delivery | Controlled pre-receipt delivery | owned-node event and meter ledger | loaded/delivered wet feed; actual accompanying water and containers; route/distance; mode; supplier service coverage; fuel identity/use; electricity; engine/factor evidence; measured fossil-fuel activity and unit; supported factor value/unit/source; carbon-origin/oxidation or engine applicability; factor/activity uncertainty; monitoring QA if available; empty return; losses; event_id; owning node; linked lot/period; raw quantity/unit; same final Q; stage yields; stocks; included assets/materials/consumers/service periods and attribution key | Measure each actual exchange at this node using calibrated scales/meters, inventory and receipt records. Preserve raw native quantities and moisture/density evidence; cross-reference paired transfers and the one shared ledger. Aggregate attributable exchange quantities and report per 1 kg reference flow using the same positive actual final Q; never duplicate shared totals or fix intermediate mass to 1 kg. | kg; kWh; native measured units | each lot, operation and meter interval | matched whole campaign, carryover and asset service periods | controlled_collection_and_delivery | per 1 kg reference flow | calibration; original meters/invoices; source and quality evidence; receiver records; paired transfers; balances and uncertainty |
| `cp_preparation` | cleaning_drying_and_sorting | Freshwater washing and initial dripping | owned-node event and meter ledger | wet feed/output and moisture; new supplied/abstracted water by source; raw meters; density/temperature/salinity; paired reuse; electricity; actual agents/other utilities; separate solids/wastewater/outlets; event_id; owning node; linked lot/period; raw quantity/unit; same final Q; stage yields; stocks; included assets/materials/consumers/service periods and attribution key | Measure each actual exchange at this node using calibrated scales/meters, inventory and receipt records. Preserve raw native quantities and moisture/density evidence; cross-reference paired transfers and the one shared ledger. Aggregate attributable exchange quantities and report per 1 kg reference flow using the same positive actual final Q; never duplicate shared totals or fix intermediate mass to 1 kg. | kg; kWh; native measured units | each lot, operation and meter interval | matched whole campaign, carryover and asset service periods | cleaning_drying_and_sorting | per 1 kg reference flow | calibration; original meters/invoices; source and quality evidence; receiver records; paired transfers; balances and uncertainty |
| `cp_onsite_water_treatment` | onsite_wastewater_management | On-site wastewater management | owned-node event and meter ledger | each inlet/outlet quantity and composition; paired washing water/leachate/reuse events; actual treatment train; electricity; each reagent/fuel; sludge/solids and moisture; direct returned water/substances; receiver/media; event_id; owning node; linked lot/period; raw quantity/unit; same final Q; stage yields; stocks; included assets/materials/consumers/service periods and attribution key | Measure each actual exchange at this node using calibrated scales/meters, inventory and receipt records. Preserve raw native quantities and moisture/density evidence; cross-reference paired transfers and the one shared ledger. Aggregate attributable exchange quantities and report per 1 kg reference flow using the same positive actual final Q; never duplicate shared totals or fix intermediate mass to 1 kg. | kg; kWh; native measured units | each lot, operation and meter interval | matched whole campaign, carryover and asset service periods | onsite_wastewater_management | per 1 kg reference flow | calibration; original meters/invoices; source and quality evidence; receiver records; paired transfers; balances and uncertainty |
| `cp_packaging_and_gate_release` | packaging_storage_and_gate_release | Storage, final dripping and pre-calcination handover | owned-node event and meter ledger | incoming washed wet fragments; final net accepted Q; stage moisture/solids; drainage/leachate; shell rejects/losses; opening/closing stock; drainage/storage time; acceptance; exact pre-kiln interface; actual packaging and electricity; event_id; owning node; linked lot/period; raw quantity/unit; same final Q; stage yields; stocks; included assets/materials/consumers/service periods and attribution key | Measure each actual exchange at this node using calibrated scales/meters, inventory and receipt records. Preserve raw native quantities and moisture/density evidence; cross-reference paired transfers and the one shared ledger. Aggregate attributable exchange quantities and report per 1 kg reference flow using the same positive actual final Q; never duplicate shared totals or fix intermediate mass to 1 kg. | kg; kWh; native measured units | each lot, operation and meter interval | matched whole campaign, carryover and asset service periods | packaging_storage_and_gate_release | per 1 kg reference flow | calibration; original meters/invoices; source and quality evidence; receiver records; paired transfers; balances and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `final_gate_normalization` | each concrete exchange | For each actual raw exchange quantity q_i in its own unit and matched positive final accepted wet mass Q (kg), report q_i/Q per 1 kg reference flow. Preserve q_i, Q and their lot/period linkage. A physical shell/water quantity is unallocated; only supported shared LCA burden numerators receive an allocation share before division. If Q is zero/unknown, keep raw and stock records and do not invent a normalized dataset. | raw q_i; actual final Q; lot/period; attribution records | each exchange per kg of the actual final intermediate | `mass-balance-identity` |
| `stage_yields` | actual receipt, washing and drainage stages | Retain each measured stage input S_in and output S_out with moisture and stocks; stage wet yield is S_out/S_in where S_in is positive. It is not automatically the final yield Q/S_in or a dry-shell yield. If a source record reports intensity x_i=q_i/S_stage, retain its measured stage denominator and explicitly reconstruct q_i=x_i*S_stage, then report q_i/Q; do not replace S_stage by 1 kg or a fictitious machine mass. | measured stage masses; moisture/solids; raw intensity if used; final Q | actual stage yield and final-basis exchange | `mass-balance-identity` |
| `physical_balances` | shell, water and stock ledgers | Reconcile each stage opening stock plus actual arrivals and water/material additions with outputs, rejects, residues, drainage, evaporation where actually established and closing stock. Track shell solids, adhering water, tissue/salts separately where measured; disclose unexplained residuals and uncertainty. Do not assume a fixed mass loss, force a zero residual or use allocation shares to close physical balances. | stage ledgers; paired transfers; raw meters; stocks | unallocated physical balances and disclosed residuals | `mass-balance-identity` |
| `emission_calculation` | actual direct releases | Use monitored emitted substance mass or a cited supported model matched to actual activity, fuel/engine, carbon origin and receiving medium. Discharged concentration requires matched aqueous flow and speciation; concentration, odour or net nutrient balance alone is not a mass exchange or credit. | actual activity; supported factor/model; native units; medium | each actual substance/medium exchange |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_unique_reference_object` | every stage and final reference | Require actual source segregation and mussel taxon/source verification, one fragment specification, measured stage moisture, and the precise single pre-calcination gate. Other shell families, raw mixture, powder and post-kiln states cannot inherit the reference identity or UUID. The historical mainly-mussel facility is not proof of pure target feed. | source, segregation, lot and gate specifications |
| `dq_shared_ledger` | all protocols | Use one physical event/water/asset ledger with unique IDs, owning nodes, paired transfers, native raw amounts and common final Q. Preserve stocks and delayed handovers. Shared totals are recorded once and only attributable shares are assigned; internal reuse is neither new supply nor another deduction. | event/asset ownership, paired receipts and meters |
| `dq_ranges_uncertainty` | each important atomic exchange | Collect independent observed operating range or justified uncertainty, units, denominator and source applicability for each exchange. No empirical bounds are supplied here. Barros’s historical 0.2–0.8 m3/t washing-water observation is per shell feed at one facility, not separate child-flow quantities or a final-Q cap; any use must verify matching feed/water boundaries, actual density and measured feed/Q ratio and retain outliers. | per-flow records, uncertainty and evidence applicability |
| `dq_completion` | all applicable collection duties | Every applicable duty below must become independent actual physical/chemical exchanges with node, direction/type, own quantity/native unit, composition/form/moisture, source, normalization, range/uncertainty and actual fate/medium, plus verified compatible UUID before final dataset completion. No collection total/range/UUID is copied to all children. Unknown is not zero; absence needs evidenced not_applicable. No unresolved applicable duty or reference identity can pass final data-package validation. | per-duty coverage and original quantitative/identity records |
| `collect_receipt_rejects` | `source_qualification_and_receipt` | Each actual receipt reject, foreign material or separated liquid; retain independent mass, composition, receiver and product/waste disposition. Use its owning-node protocol `cp_source_receipt`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_receipt_energy` | `source_qualification_and_receipt` | Any actual fuel, purchased heat or other receiving utility not represented by the electricity card; no generic energy mixture. Use its owning-node protocol `cp_source_receipt`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_collection_energy` | `controlled_collection_and_delivery` | Every actual carrier other than the diesel card, and any purchased delivery service with mode and coverage; retain loaded wet cargo, containers, route distance and evidenced empty-return burden, without service/fuel duplication. Use its owning-node protocol `cp_collection_transport`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_collection_losses` | `controlled_collection_and_delivery` | Every actual delivery loss or spill by composition, receiving route/medium and measured mass; a stock or water change is not automatically shell loss. Use its owning-node protocol `cp_collection_transport`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_collection_direct_releases` | `controlled_collection_and_delivery` | Every actual combustion substance or environmental release not covered by the fossil-CO2 card, with engine/fuel, monitored mass or supported factor, native units and receiving medium. Use its owning-node protocol `cp_collection_transport`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_cleaning_agents` | `cleaning_drying_and_sorting` | Each chemical or cleaning/disinfection product actually dosed, its composition/concentration, active/product basis, measured stock change and destination; no assumed reagent or dose. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_preparation_energy` | `cleaning_drying_and_sorting` | Each actual washing/drainage fuel, heat or utility not already included, with meter/stock records and carrier-specific property/unit; thermal drying and calcination are outside this boundary. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_preparation_water` | `cleaning_drying_and_sorting` | Each actual directly abstracted freshwater source with its natural compartment and own quantity, plus any distinct external water grade not covered by the specific supply card. Distinguish new supply, internal reuse and outlets; preserve raw meters and actual density conversion. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_preparation_solid_residues` | `cleaning_drying_and_sorting` | Each actual separated residual tissue, mud, foreign matter or shell reject as its own material and moisture state, quantity and evidenced recovery/disposal destination. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_cleaning_wastewater` | `cleaning_drying_and_sorting` | Every additional distinct washing-water outlet, quality or receiving route beyond the explicit wastewater card, including separate direct returned-water and substance releases when applicable; do not copy a water total into every outlet. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_preparation_direct_releases` | `cleaning_drying_and_sorting` | Each actual dust, volatile substance, water-vapour or other direct release crossing the environmental boundary, with substance/speciation, mass and medium; no generic emissions or odour quantity. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_treatment_inputs` | `onsite_wastewater_management` | Each actual wastewater-treatment reagent, fuel, water, heat or other input with its own composition/form, measured amount, native unit and supported attribution; do not presume flocculant, treatment equipment or dose. Use its owning-node protocol `cp_onsite_water_treatment`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_treatment_wastes` | `onsite_wastewater_management` | Each actual screen reject, separated sludge or other generated waste with its own solids/moisture, measured quantity and actual treatment/receiver; a generic sludge identity cannot stand for every residue. Use its owning-node protocol `cp_onsite_water_treatment`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_treatment_releases` | `onsite_wastewater_management` | Each actual returned-water outlet and substance-specific environmental release with receiver/medium and quantity; paired reuse remains internal, and net nutrient balances are not negative emissions or credits. Use its owning-node protocol `cp_onsite_water_treatment`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_packaging_materials` | `packaging_storage_and_gate_release` | Each actual container, liner, bag, label or packaging component used at this intermediate interface, with material, measured quantity, reuse/replacement and fate. Bulk internal handover does not imply packaging use. Use its owning-node protocol `cp_packaging_and_gate_release`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_packaging_and_storage_energy` | `packaging_storage_and_gate_release` | Each actual storage/handover fuel, heat or utility not already included, with duration, consumers, independently measured quantity and supported sharing key. Use its owning-node protocol `cp_packaging_and_gate_release`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_packaging_and_gate_handling_waste` | `packaging_storage_and_gate_release` | Every actual rejected shell, packaging loss or handling waste by specific material/form, measured quantity and receiving destination; keep it separate from the leachate card. Use its owning-node protocol `cp_packaging_and_gate_release`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_gate_water_and_releases` | `packaging_storage_and_gate_release` | Every actual cooling or washdown water input and additional aqueous outlet/direct release during storage and handover, with source, quality, mass, receiver/medium and density evidence where needed. No second deduction of recirculation. Use its owning-node protocol `cp_packaging_and_gate_release`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_assets_source_qualification_and_receipt` | `source_qualification_and_receipt` | Each actual included asset replacement, cleaning material and end-of-service exchange owned by this node, with component material, raw amount, consumers, service periods, actual use key and fate. Share one asset ledger; never repeat its full total at every node. Use its owning-node protocol `cp_source_receipt`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_assets_controlled_collection_and_delivery` | `controlled_collection_and_delivery` | Each actual included asset replacement, cleaning material and end-of-service exchange owned by this node, with component material, raw amount, consumers, service periods, actual use key and fate. Share one asset ledger; never repeat its full total at every node. Use its owning-node protocol `cp_collection_transport`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_assets_cleaning_drying_and_sorting` | `cleaning_drying_and_sorting` | Each actual included asset replacement, cleaning material and end-of-service exchange owned by this node, with component material, raw amount, consumers, service periods, actual use key and fate. Share one asset ledger; never repeat its full total at every node. Use its owning-node protocol `cp_preparation`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_assets_onsite_wastewater_management` | `onsite_wastewater_management` | Each actual included asset replacement, cleaning material and end-of-service exchange owned by this node, with component material, raw amount, consumers, service periods, actual use key and fate. Share one asset ledger; never repeat its full total at every node. Use its owning-node protocol `cp_onsite_water_treatment`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |
| `collect_assets_packaging_storage_and_gate_release` | `packaging_storage_and_gate_release` | Each actual included asset replacement, cleaning material and end-of-service exchange owned by this node, with component material, raw amount, consumers, service periods, actual use key and fate. Share one asset ledger; never repeat its full total at every node. Use its owning-node protocol `cp_packaging_and_gate_release`; preserve raw native quantities, actual stage yields and common positive final Q. Instantiate each actual exchange with independent direction/type, identity, amount/unit, range/uncertainty and receiver/medium; no grouped amount or UUID is binding. | original meters/stock/composition/fate records and compatible identity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference and all shell stages | Require source-verified mussel-shell fragments, freshwater washing/dripping, measured residual moisture and exact pre-calcination intermediate acceptance; reject other materials, unsegregated mixed feed, thermal drying/calcination, milling and manufactured carbonate. No commercial-sale/end-of-waste claim follows from this reference. | `barros-mussel-shell-2009` |
| `validate_reference` | packaging_storage_and_gate_release | Exactly one final product reference is 1 kg at the stated intermediate interface; reference amount, mass property/unit, net weighing, residual moisture, final positive Q and every qualifier must agree. Internal inputs/outputs retain actual measured q/Q, never fixed reference mass. | `mass-balance-identity` |
| `validate_measurement` | all exchanges | Trace all amounts to raw calibrated records, node-specific CP, native unit, actual density/heating-value conversions and common Q. Check real stage/final yields and wet/solids balances, disclose uncertainty and unexplained residuals; no imposed cap or invented factor. |  |
| `validate_water_and_fate` | water, treatment and wastes | Reconcile new water, paired recirculation, storage drainage, actual treatment and each environmental outlet without repeat intake deductions. Every waste has actual composition/moisture and receiver/treatment; each elementary release has its own substance and medium. Do not use sludge identity for shell/tissue waste or water-CO2 identity for air emission. |  |
| `validate_allocation_period` | burdens, stocks and assets | Verify upstream prior burdens, all intended outputs, subdivision/sharing evidence and sensitivity. Keep physical masses unallocated, internal movements paired and event/asset totals once; match period, carryover, replacements and end-of-service exchanges. | `eu-pef-method-2021` |
| `validate_atomic_completion` | every actual card and completion duty | Read back every applicable collect_ requirement into independent actual exchanges and verify own quantity/unit, normalization, range/uncertainty, source and fate/medium, and semantically compatible UUID/property/flow type/state. Any unknown applicable quantity, identity, fate or missing duty makes the final dataset incomplete and validation fails; a static PCR check pass cannot replace this assessment. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for the washed/drained uncalcined mussel-shell fragment intermediate; process/lifecyclemodel are downstream projections. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual source-, species-, fragment-, moisture-, operation-, site- and pre-calcination-interface-matched datasets with verified exchanges and complete prior-burden/waste coverage. |
| excluded_use | Other materials or mixed feeds; dry/powder/calcined/manufactured products; legal product/end-of-waste certification; external-sale assertion; subsequent kiln/milling/use. |
| required_metadata | Actual source/taxon/segregation, incoming and final physical/legal states, all moisture/grade and lot/period/stocks, precise intermediate gate, process responsibility, transport coverage, water topology, energy, assets, allocation, raw records and UUIDs. |
| required_quality_disclosure | Measurement/range uncertainty, physical residuals, unknown identities/amounts, historical-source applicability, allocation sensitivity, source segregation and legal-status limitations. |
| update_trigger | Change of target material/state/interface, source segregation, washing/drainage/water or treatment route, energy, stock period, asset, allocation or relevant new evidence. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc3-hs-scope` | official_guidance | UNSD CPC Version 3.0 explanatory notes (30 June 2025), subclass 04911. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; this PCR is narrower, not a whole-leaf product identity or range source. |
| `barros-mussel-shell-2009` | literature | Barros, M.C., Bello, P.M., Bao, M. and Torrado, J.J. (2009). From waste to commodity: transforming shells into high purity calcium carbonate. Journal of Cleaner Production 17, 400–407. DOI:10.1016/j.jclepro.2008.08.013. Section 2.1, pp. 401–402. https://doi.org/10.1016/j.jclepro.2008.08.013 | Primary historical evidence for shell receipt, freshwater washing/dripping and storage before calcination. Only these interfaces support the selected route; later manufactured-carbonate properties, whole-plant totals and legal statements are not defaults for this intermediate. |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 | Prior qualitative methodological basis for primary data, allocation, boundary and disclosure; not evidence of product-specific quantities or complete PEF conformity. |
| `mass-balance-identity` | method_factor | This PCR sections 3–9: measured raw/native quantities, stage balances/yields and actual final-Q normalization. | Self-defined conservation and normalization identities; no empirical yield, machine mass, density, emission factor or measured range. |
