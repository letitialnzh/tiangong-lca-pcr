---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.natural-cork-debacked-or-roughly-squared-or-in-blocks-plates-sheets-or-strip-crushed-gr-6a65ac8e
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Prepared natural cork planks: electric water-boiling and stabilization

## 1. Scope and Applicability

This PCR supports manufactured natural Quercus suber cork planks that are water-boiled using electricity, stabilized by resting/ambient drying, graded and edge-trimmed for delivery as unagglomerated planks. It is a narrower production-route subset of CPC 3.0 31921. It starts with delivered unboiled bark planks; tree stripping is an upstream forestry operation, not industrial debacking. Mechanical removal of the outer back is not assumed. No end-use closure function, insulation performance or service life is assigned. [Source: jrc-cork-preparation-2016; spanish-cork-manufacturing-2022.]

Raw bark differs from prepared planks in boiling history, moisture, leached solids and acceptance grade. Squared planks retain continuous cork structure; granules require grinding, particle-size separation and bulk-density/moisture control. A mass reference does not make these states interchangeable. Finished punched/turned stoppers, discs, laminated cork, resin-bonded agglomerates and expanded cork boards are excluded. No wood-panel adhesive formulation is used. [Source: jrc-cork-preparation-2016, printed pp.172–173.]

The supported foreground profile requires water-only treatment, electric site operations, ambient stabilization, no saleable material/fuel coproducts, and documented external treatment of discarded residues and bath liquor. Loose dispatch or PE-film protection is represented. Supplier returns are reconciled as returns, not saleable coproducts. If a site sells usable edge pieces/dust, uses chemicals, fuel, purchased steam, active drying, debacking or other packaging, stop automatic application of this profile and review a complete atomic inventory extension with the actual reference and allocation relationships. Never relabel an actual coproduct as waste to fit this profile.

The Spanish stopper case demonstrates electric boiling and resting/drying, but its batch sizes, nominal equipment power, time and downstream stopper inventory are not plank defaults. The Portuguese wastewater experiment establishes the need for effluent characterization, not universal treatment efficiency, chemical doses or concentrations. All actual amounts require the protocols below; unavailable identities and measurements prevent a fully resolved dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.natural-cork-debacked-or-roughly-squared-or-in-blocks-plates-sheets-or-strip-crushed-gr-6a65ac8e |
| classification_refs | CPC 3.0 31921; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Boiled, ambient-stabilized, graded and edge-trimmed unagglomerated Quercus suber natural cork planks under the declared single-product electric profile |
| excluded_products | Raw/simply prepared bark as final product; granules/powder; waste cork as reference product; industrial debacking; stoppers/discs; adhesive-bonded/expanded/laminated cork |
| representative_product | Accepted prepared natural cork planks, net mass at measured dispatch moisture, at preparation-plant gate |
| production_route | Unboiled bark receipt/storage → water-only electric boiling → ambient stabilization → grading/edge trimming → loose or PE-protected dispatch; waste streams to external treatment |
| market_state | Uncoated, unglued manufactured plank semi-product ready for further manufacture; not a finished closure |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply natural cork plank semi-product for further manufacture |
| How much | 1 kg net accepted prepared planks at plant gate, excluding packaging |
| How well | Declared Quercus suber origin, water-boiling history, grade, thickness/geometry, measured moisture and absence of glue/coating |
| How long or cycle | One matched production-and-dispatch accounting period; no end-use lifetime |
| reference_flow_link | `finished_planks` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural cork, debacked or roughly squared, or in blocks, plates, sheets or strip, crushed, granulated or ground cork, waste cork `e03a0a0b-6dd8-4190-8204-3210fa9b51f4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species and origin; unboiled intake; no glue/coating/cleaning additive; electric water-boiling route; ambient stabilization; actual geometry/grade; dispatch wet/dry moisture convention and measured value; net mass excluding packaging; waste/coproduct status; site/period; provider boundaries |

The broad reference name contains multiple products, but only the accepted prepared planks define this reference. Record all qualifiers in the foreground package. Weighing is at actual dispatch moisture, not oven-dry mass or nominal solid/bulk volume. No second internal prepared-plank output is created between finishing and dispatch.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net accepted dispatch mass P with calibrated scales and packaging tare; all inventory rows use per 1 kg reference flow. |
| `moisture_basis` | cork physical ledger | Mass | kg | For each lot measure m_wet and dry mass m_dry using a documented cork-appropriate constant-mass laboratory protocol. u_d=(m_wet−m_dry)/m_dry; w_w=(m_wet−m_dry)/m_wet. m_dry=m_wet/(1+u_d)=m_wet*(1−w_w). Do not equate leached organics with evaporation. |
| `electric_basis` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Record metered electrical energy; 1 kWh = 3.6 MJ. This energy-property token does not measure thermal efficiency. Require compatible supplying background, voltage and loss boundary. |
| `water_volume` | boiling_water; boiling_wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter liquid volumes at recorded temperature. For water balance convert with measured liquid density; do not treat a secondary database property coefficient as measured density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unboiled harvested Quercus suber bark planks delivered at preparation plant; prior storage and transport disclosed |
| starting_condition_role | Upstream delivered input; not a burden-free raw material |
| product_classification_scope | Prepared plank subset of CPC 31921; raw harvesting input context CPC03220; finished articles context CPC31922 excluded |
| recursive_input_rule | Already-boiled/finished planks are outside the intake profile. Do not recurse into the same preparation dataset or count previous boiling twice. Internal bath reuse and handling are ledger movements, not purchased exchanges. |
| upstream_dataset_requirement | Use origin-matched forestry/harvest, pre-storage and transport to gate plus compatible electricity, water, packaging and waste-treatment backgrounds; document any missing upstream stage |
| disclosure | Factory gate starting and ending states; original unallocated material/water/carbon ledger; stage metering; zero/absent evidence; unresolved identities/providers; waste destinations and complete treatment boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_preparation` | preparation | Include receiving/storage, water-only electric boiling, stabilization, selection, edge trimming, dust control and dispatch in one foreground unit with stage records. Leaching, purge, evaporation and rejects remain explicit. Exclude cutting/punching/turning stoppers and granulation. | `jrc-cork-preparation-2016`; `spanish-cork-manufacturing-2022` |
| `boundary_treatment` | waste outputs | Foreground ends at waste transfer; link actual downstream treatment burdens exactly once in the combined model. No untreated direct discharge is authorized. On-site treatment requires its own chemical/energy/sludge and species/compartment-resolved discharge inventory before application. Do not double-count transfer chemistry as direct emissions. | `cork-boiling-wastewater-2022` |
| `boundary_energy_carbon` | electric route | No on-site fuel, combustion or purchased steam in this profile. Do not import wood boiler/sawmill factors. Upstream forest carbon uptake stays upstream; product/waste carbon stocks are not a second negative CO2 input. Retain measured biogenic releases regardless of impact-method convention. | `spanish-cork-manufacturing-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Cork receipt, water boiling, stabilization, grading/trimming and dispatch | required | Within declared electric single-product profile | foreground aggregate; stage records retained | 1 kg reference flow |

Unboiled bark → boiling → stabilization → grading/trimming → accepted dispatch. Fresh water → reused bath → purge to external treatment and net vapour. Trimming → captured solid waste plus disjoint residual air particles. These are physical stage relationships; the aggregate has one terminal reference-product row. When stage graphs are retained, link both sides of each internal material or bath transfer at identical unallocated amount and state.

### Process: Cork preparation (`preparation`)

#### Inputs

##### Product flows

###### Unboiled Quercus suber cork bark planks (`raw_cork`)

Weigh delivered unboiled bark, excluding supplier packaging. Record pre-boiling storage, origin, previous treatments and lot moisture; do not select wood, preserved demolition wood, granulation oversize or manufactured cork article identities.

- Selected flow: Unboiled Quercus suber cork bark planks
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-cork-preparation-2016`

###### Electricity (`electricity`)

Meter purchased electricity separately for receiving, water heating, trimming, dust extraction and dispatch. Record voltage, grid region/year, supplier and loss boundary. The electricity record specifies supply at point of use in the Republic of Korea and originates in a soil-washing case; neither that location nor the original operation is a default cork-factory background. Its supply technology, voltage and loss boundary are unspecified. Confirm the actual site region/year, voltage, provider and delivery boundary before linking a background; use the measured electrical-energy basis, not useful delivered heat or an assumed efficiency.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use cp_energy to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `spanish-cork-manufacturing-2022`

###### Tap water (`boiling_water`)

Meter fresh treated tap-water fill, top-up and rinsing that cross the gate. Record circulating bath volume separately; repeated baths reuse the same water and must not repeatedly count the full tank as fresh intake. This route uses water only, without cleaning additives. The adopted water record is a production mix at a Hong Kong water-treatment plant, so physical tap-water identity alone does not establish the actual plant-gate supply, regional treatment or distribution background. Confirm provider, quality, location/year and delivery boundary; use measured density at recorded temperature rather than the record's secondary screening coefficient.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Use cp_water to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-cork-preparation-2016`; `cork-boiling-wastewater-2022`

###### Polyethylene film (`pe_film`)

Conditional on PE-film protection at dispatch; weigh net film used, reconcile discarded film and supplier polymer specification. Loose dispatch uses a documented absent status. This identity is PE film, not resin or PET; the source classification anomaly requires supplier confirmation. Require actual unsupported non-self-adhesive PE film with no laminated substrate; the adopted identity does not cover adhesive tape, laminated protection or a different polymer. Supplier composition, recycled content and native background quantity require separate compatibility checks. Other packaging components require separate atomic rows.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_packaging to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-cork-preparation-2016`

#### Outputs

##### Product flows

###### Natural cork, debacked or roughly squared, or in blocks, plates, sheets or strip, crushed, granulated or ground cork, waste cork (`finished_planks`)

1 kg net accepted boiled, stabilized and edge-trimmed natural cork planks at declared dispatch moisture, excluding packaging. The broad database name is restricted here to this manufactured plank subset; never include waste cork or granules in the reference denominator.

- Selected flow: Natural cork, debacked or roughly squared, or in blocks, plates, sheets or strip, crushed, granulated or ground cork, waste cork `e03a0a0b-6dd8-4190-8204-3210fa9b51f4`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `jrc-cork-preparation-2016`

##### Waste flows

###### Unagglomerated natural cork edge-trimming waste for external waste treatment (`cork_trimming_waste`)

Weigh discarded edge pieces, record moisture, absence of glue, segregation and receiving waste operator. Only the documented waste fraction belongs here. A sold granulation-feed coproduct is outside this single-product dataset profile and must not be relabelled as waste.

- Selected flow: Unagglomerated natural cork edge-trimming waste for external waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-cork-preparation-2016`

###### Rejected Quercus suber cork planks for external waste treatment (`rejected_cork_waste`)

Record rejected planks at their actual pre/post-boiling rejection stage, net mass, moisture, defect and disposal destination. Separate these intact rejects from edge waste and dust. Supplier returns retain traceable whole mass, stage, state, moisture and receiver movements. Only returns compatible with the unboiled raw_cork input and not boiled/processed at this plant may net against unboiled receipts on the same stock basis. Boiled/processed returns require their own actual-state output/handover identity and receiver, retaining an explicit identity gap if needed; they are not negative raw_cork inputs. Already-incurred storage, boiling, handling, cleaning and other preparation burdens remain attributable and do not disappear on return.

- Selected flow: Rejected Quercus suber cork planks for external waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-cork-preparation-2016`

###### Captured natural cork plank trimming dust for external waste treatment (`captured_cork_dust`)

Weigh captured dry trimming dust and filter stock changes; document receiver and absence of sanding coatings or glue. This is collected solid waste, not an emission to air. Stopper-finishing and granulate-sieving dust identities are not applicable to this route. A recoverable fuel coproduct requires a separate applicability review. The generic industrial-collector Dust Waste identity below has no contrary material or treatment restriction; condition its use on measured Quercus suber trimming-particle composition, moisture, contamination, collection stage and actual receiving treatment. It does not supply a cork-specific waste-treatment dataset or an emission factor.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_dust to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-cork-preparation-2016`

###### Untreated natural cork boiling wastewater transferred to external treatment (`boiling_wastewater`)

Meter bath purge and rinse wastewater leaving for external treatment; sample flow-weighted pH, COD, soluble COD, TOC, total nitrogen, suspended solids, total solids and total phenols with analytical definitions. Attach receiving-provider acceptance of the actual organic load. Tank recirculation is internal. Do not use direct-to-water, silicon, manganese-slag or already-treated identities. Wastewater is one bulk waste exchange; its chemistry describes treatment suitability.

- Selected flow: Untreated natural cork boiling wastewater transferred to external treatment
- Flow property / unit: Volume / m3
- Amount rule: Use cp_water to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-cork-preparation-2016`; `cork-boiling-wastewater-2022`

##### Elementary flows

###### particles (PM2.5) (`pm25_air`)

Record net PM2.5 emitted to outdoor air from dry handling and trimming after controls, when present; use representative size-resolved outlet/fugitive measurements. Unspecified air is the selected subcompartment, not indoor occupational exposure. Do not assume an emission factor from sawmills.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_dust to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-cork-preparation-2016`

###### particles (PM2.5 - PM10) (`pm_mid_air`)

Record the disjoint PM2.5–PM10 ambient-air fraction on the same activity/control/time basis as PM2.5. Obtain it directly or subtract comparable cumulative PM2.5 from PM10. Do not report a second cumulative PM10 exchange.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_dust to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-cork-preparation-2016`

###### particles (> PM10) (`pm_coarse_air`)

Record outdoor-air filterable particles above PM10, directly or as comparable total filterable PM minus PM10. Keep collected dust separate. Condensable aerosol is not automatically in this size class; identify additional measured species separately. Unknown fractions remain unresolved, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_dust to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-cork-preparation-2016`

###### water vapour (`water_vapour`)

Record net evaporation to ambient air from boiling and stabilization, excluding captured condensate. Reconcile water in incoming cork, make-up, dispatched product, wet wastes, wastewater and bath stocks. Changing moisture during boiling does not demonstrate conserved dry matter.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-cork-preparation-2016`; `cork-boiling-wastewater-2022`

###### carbon dioxide (biogenic) (`biogenic_co2`)

Conditional on measured biogenic CO2 released during storage/conditioning. Establish biogenic origin and species-specific measurement before assigning a positive amount; a carbon-balance residual is not proof of CO2. Do not delete this LCI exchange because an LCIA convention excludes it. This electric route has no on-site combustion; background emissions remain in the supplying datasets.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_carbon to divide the matched physical exchange total by accepted net dispatch kg of the same cohort; unknown quantities remain unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon`
- Sources: `cork-boiling-wastewater-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | preparation | This profile has one accepted product and no saleable coproducts. Assign measured preparation and required waste-treatment burdens to the accepted planks; product reference remains 1 kg. Document residue waste status with receiver and payment/acceptance records. Do not allocate to water content or discarded waste. | `jrc-cork-preparation-2016` |
| `allocation_scope_change` | saleable side output or shared operation | Subdivision and causal stage metering come first. If trimmings, rejects, dust or heat are saleable coproducts, this single-product profile is insufficient: establish complete output identities, dry-matter/carbon balances and a reviewed allocation basis rather than imposing wood-board recipes or a universal mass/economic share. Preserve physical output and internal-transfer quantities; allocate environmental burdens only in a separate account. No automatic avoided-product credit. | `spanish-cork-manufacturing-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | preparation | net accepted product | weighing and lot acceptance | lot; grade; species; geometry; m_wet; m_dry; tare; accepted kg P; dispatch date | Calibrated net weighing, lot-stratified cork moisture sampling, laboratory constant-mass endpoint with recorded temperature/time and absence of degradation | kg | each lot/dispatch | Matched complete production/dispatch period; stock cohorts reconciled | Preparation plant; only eligible accepted planks | per 1 kg reference flow | Scale calibration; tare; lot/moisture tests; acceptance slips |
| cp_material | preparation | raw cork and stage ledger | receipts, sampling and stock ledger | origin; species; previous treatment; gross receipts; whole supplier returns/stage/boiled-or-processed state/moisture/receiver; opening/closing stock; stage wet/dry masses | Weigh receipts, returns and stocks; sample moisture at receipt, post-boiling and dispatch; retain stage transfers. Net only compatible unboiled unprocessed returns against raw_cork receipts; processed returns retain their own actual output state/receiver and incurred work, not negative raw input wet mass | kg | each lot and period stock close | Same cohorts as cp_reference; storage time stated | Preparation plant and originating supplier | per 1 kg reference flow | Supplier traceability; calibrated weighing; sampling uncertainty |
| cp_energy | preparation | electricity | submeters and billing | stage; start/end kWh; transformer boundary; idle consumption; grid region/year; voltage; provider | Read calibrated electricity meters; reconcile bills and shared equipment with recorded metering-based attribution; record water-heating energy separately | kWh; MJ | each production campaign and billing period | All preparation/storage/dispatch periods linked to product cohort | Site electric equipment; electricity at declared delivery boundary | per 1 kg reference flow | Meter calibration; bills; stage-meter reconciliation; supplier background |
| cp_water | preparation | fresh water, wastewater, vapour | flow meters, bath logs and laboratory tests | fresh m3; bath stock; recycle; purge m3; wastewater density/temperature; condensate; moisture; evaporation; pH; COD; sCOD; TOC; TN; TSS; total solids; dissolved/volatile non-water constituents; total phenols; receiver | Meter liquid intake/purge; weigh or measure moisture and condensate; flow-weighted samples at transfer; document methods and detection limits. Independently close dry-solids and water balances before assigning net vapour | m3; kg; mg/L | each bath purge/cohort; composite samples per campaign | Same baths and lots as cp_reference; opening/closing tank stocks included | Preparation plant to external-treatment handoff | per 1 kg reference flow | Meter calibration; bath cycles; analytical QA; laboratory results; receiver acceptance/provider suitability |
| cp_packaging | preparation | PE film | weighing and supplier records | polymer; recycled content; batch kg; dispatch kg; discarded film; opening/closing stocks; loose/film dispatch | Weigh film and reconcile material issue/returns/waste; retain supplier film specification and actual packaging bill | kg | each dispatch and period stock close | Matched dispatch cohort | Plant gate dispatch only | per 1 kg reference flow | Tare; supplier resin/film specification; discrepancy/waste records |
| cp_waste | preparation | edge waste and rejected planks | segregated weighing and waste receipts | row; stage; wet mass; moisture; dry mass; defect; contamination; receiver; treatment; paid/sold status | Weigh each physically separate stream; document disposal contract and receipt. An actual sale triggers scope review; never infer waste from a database label | kg | each removal/lot | Matched cohort and bin stock changes | Plant to contracted external waste operator | per 1 kg reference flow | Scale calibration; moisture tests; waste transfer receipts; treatment background suitability |
| cp_dust | preparation | captured dust and air size fractions | filter weighing and emission measurements | source; activity; control; outlet flow; concentration; runtime; PM2.5; PM10; total filterable PM; captured kg; filter stock; fugitive mass; limits | Weigh captured dust; sample representative outlets/fugitive sources with compatible particulate size cuts and flow/runtime. Occupational concentration alone cannot determine mass emitted to outdoor air | kg; mg/m3; m3; h | each representative operating condition; period runtime | Full matched cohort; operating/control changes included | Handling/trimming/extraction at plant; outdoor release only | per 1 kg reference flow | Filter blanks; laboratory/flow QA; operating logs; size-cut definitions; control efficiency evidence |
| cp_carbon | preparation | carbon stocks and conditional biogenic CO2 | material carbon assays and species-resolved gas measurement | dry mass; dry-basis carbon fraction; wastewater organic carbon; CO2 flow/concentration; origin; time; stocks | Measure lot-specific carbon in cork, waste and aqueous organics; where release is demonstrated, use calibrated species-specific CO2 measurements and origin evidence. A missing carbon residual is investigated, not assigned to CO2 | kg C; kg CO2 | representative lots/conditions and period stocks | Same cohort as reference; forest uptake background disclosed | Factory materials, wastes and ambient gas release; no on-site combustion | per 1 kg reference flow | Carbon assays; gas calibration; origin proof; water/solid/gas carbon closure |

Protocol aggregation detail: `cp_reference`: Sum accepted net planks; each flow total / P, per 1 kg reference flow; `cp_material`: Unboiled receipts + matched unboiled opening stock − compatible unboiled unprocessed supplier returns − matched unboiled closing stock allocated to the same dispatched cohort; boiled/processed returns are separate actual-state outputs with incurred preparation burdens retained, not netted against raw_cork input; per 1 kg reference flow; `cp_energy`: Matched attributable metered electricity / P; per 1 kg reference flow; `cp_water`: Matched fresh-water, wastewater and net-vapour totals separately / P; per 1 kg reference flow; `cp_packaging`: Net film used / P; per 1 kg reference flow; `cp_waste`: Each waste stream total / P; per 1 kg reference flow; `cp_dust`: Captured solid dust and each disjoint emitted fraction separately / P; per 1 kg reference flow; `cp_carbon`: Each measured stock/exchange on matched basis; positive measured CO2 / P, per 1 kg reference flow.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_normalization` | all inventory rows | Let P be measured accepted dispatch kg for the matched lot cohort. Original physical exchange per kg = cohort exchange total / P. Reconcile opening/closing material and bath stocks before dividing. Preserve stage handoffs and the terminal 1 kg, with no allocation multiplier. | `cp_reference`; `cp_material`; `cp_energy`; `cp_water`; `cp_packaging`; `cp_waste`; `cp_dust`; `cp_carbon` | Unallocated physical ledger per 1 kg reference flow | `jrc-cork-preparation-2016` |
| `water_balance` | water_vapour | Net evaporated water = fresh water mass + incoming cork water + opening water stocks − dispatched product water − waste-bound water − transferred wastewater water − captured condensate − closing water stocks. Include precipitation/runoff only if the actual site has these exchanges, separately identified. For wastewater water mass, subtract measured non-water constituents from measured liquor mass; include dissolved and volatile organics. COD is oxygen demand, not solute mass. Dry-solids leaching enters a separate balance; do not assign total wet-mass loss to vapour. | `cp_reference`; `cp_material`; `cp_water`; `cp_waste` | Net vapour kg and reconciled dry-solids/water ledger | `cork-boiling-wastewater-2022` |
| `dust_fractions` | pm25_air; pm_mid_air; pm_coarse_air | For identical filterable measurement/source/control/time bases, report PM2.5; PM2.5–PM10 = PM10 − PM2.5; PM>10 = total filterable PM − PM10. Require nonnegative values and matching aerosol basis. When only cumulative PM10 or total is known, collect the missing split; never fabricate fractions or sum nested totals. Concentration × compatible gas volume × unit conversion yields emitted mass; runtime must match sampling conditions. | `cp_dust` | Disjoint emitted fractions and separate captured dust |  |
| `carbon_balance` | biogenic_co2 | Track measured dry-basis cork and solid-waste carbon, wastewater organic carbon and retained stocks separately. Convert demonstrably emitted carbon as CO2 to CO2 mass with 44/12; carbon loss alone does not establish species or origin. No default carbon fraction, complete oxidation or negative foreground forest uptake. | `cp_material`; `cp_reference`; `cp_water`; `cp_waste`; `cp_carbon` | Physical carbon ledger and independently measured conditional biogenic CO2 | `cork-boiling-wastewater-2022` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | each exchange | Verify physical/chemical identity, route, reference property and units, exact localized names and ambient subcompartment. An applicable unresolved UUID or incompatible provider blocks complete data delivery. | Direct flow and property/unit records; actual supplier/treatment documents |
| `quality_amount` | all non-reference rows | Collect matched site data and measured variability. Unknown is not zero; absent status requires operation/contract evidence. No borrowed nominal energy, density, moisture, reuse or concentration defaults. | Calibration, lot records, analytical uncertainty, presence screen |
| `quality_balances` | preparation | Retain unallocated dry solids, water and carbon balances with measured uncertainty. Leached organics and dust remain explicit. Investigate unexplained residuals; do not force closure by invented emissions. | Reconciled physical ledger, lab QA and stock records |
| `quality_extension` | actual additional exchange | Screen lubrication, broken packaging, consumables, condensate, yard runoff and unusual emissions; add each actual atomic exchange with physical identity and provider/measurement audit before final dataset delivery. | Site inspection, purchases, incident/maintenance and waste logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference and outputs | Require exactly one accepted prepared-plank reference output of 1 kg net dispatch mass, matching the functional-unit link and all qualifiers. Reject granule/waste inclusion in P or another internal output using the reference UUID. | `jrc-cork-preparation-2016` |
| `validate_route` | all processes | Prove single-product electric water-only profile, actual waste destinations and absence of saleable coproducts; a conflicting chemical/thermal/manufacturing route requires method adaptation and fresh inventory check. Upstream datasets are mandatory for a combined model. | `spanish-cork-manufacturing-2022` |
| `validate_environment` | wastewater, dust and carbon | Require untreated bath liquor transfer to compatible treatment, not direct receiving-water emissions. Check disjoint air-particle fractions and separate captured dust; matched water/dry-solids/carbon ledgers; retain conditional measured biogenic CO2. Identity success alone does not establish complete LCI or suitable background. | `cork-boiling-wastewater-2022` |
| `validate_measurement` | all inventory rows | Require per 1 kg reference flow in both languages and matched protocol aggregation. P must be actual accepted net dispatch kg; no mixture with raw input, stock, rejects or packing. Missing identity, amount, measurement split or provider is an explicit unresolved data-package finding. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground preparation process; completed linked model may be a secondary_dataset/background_dataset |
| downstream_use | Further natural-cork manufacture using declared prepared-plank input state |
| allowed_use | Actual matching water-only electric single-product route after identity, quantity and provider gaps are closed |
| excluded_use | Whole CPC31921 default; granules, waste as reference, stoppers, agglomerates, forestry-only data; saleable coproduct routes without reviewed adaptation; product carbon-negativity or end-use-performance claims |
| required_metadata | Site/year/origin, species, actual boiling/resting/geometry/grade/moisture, all reference qualifiers, P and cohort, supply and treatment boundaries, waste status |
| required_quality_disclosure | Candidate methodology, independent scientific review pending; four unresolved identities; source case limitations; measurements/uncertainties, missing backgrounds and balance residuals |
| update_trigger | Heating or chemical route, coproduct market, grade/moisture/geometry, packaging, wastewater/dust controls, supplier identities or boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-cork-preparation-2016 | official_guidance | European Commission JRC, Simoneau et al., Non-harmonised food contact materials in the EU: regulatory and market situation, EUR 28357 EN, 2016; final file January 2017, printed pp.172–173. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC104198/en_jrc104198_fcm%20baseline%20final%20report%202017-01-16_all.pdf | Industry-code summary separating preparation, granulation and stopper activities; qualitative boundary only, not emission factors or certification |
| spanish-cork-manufacturing-2022 | literature | Environmental Impact Analysis of Natural Cork Stopper Manufacturing, Agriculture 12(5), 636 (2022), DOI 10.3390/agriculture12050636, §§2.3–2.5.2. https://www.mdpi.com/2077-0472/12/5/636 | Spanish factory-case electric boiling, resting/drying and later stopper processes; plant-gate concept. No numerical transfer from stopper denominator to plank denominator |
| cork-boiling-wastewater-2022 | literature | Combined Electrocoagulation and Physicochemical Treatment of Cork Boiling Wastewater, Sustainability 14(7), 3727 (2022), DOI 10.3390/su14073727, §§1–2.2. https://www.mdpi.com/2071-1050/14/7/3727 | Cork effluent complexity and analytical characterization; one Alentejo effluent and laboratory treatment, not a universal influent composition or removal model |
