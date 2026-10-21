---
pcr_id: pcr.construction-services.existing-concrete-irrigation-canal-movement-joint-polyurethane-sealant-replacement-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing concrete irrigation canal movement joint polyurethane sealant replacement services

## 1. Scope and Applicability

This PCR covers bounded replacement of failed applied elastomeric sealant in movement joints of retained concrete irrigation canals. The actual route uses an approved compatible one-part moisture-curing polyurethane system with specified primer and backing. Removal, face preparation, local job-caused minor repair, application, protection, full required cure and acceptance belong to the service. [sika-civil-water-joints; sika-pro3-purform-2024]

It excludes new canal formation or lining, major joint-edge reconstruction, embedded waterstop replacement, mechanically locked preformed glands, two-part or booster-assisted sealants, water-supply aqueducts, pipelines, navigation canals, dams/levees and subsequent water conveyance. Canal irrigation function must be verified; CPC 54234 is broader than this maintenance service. [un-cpc3-2025]

The cited NZ product sheet demonstrates the route, rather than approving every canal or regional product. Project/manufacturer approval must cover actual water chemistry, immersion/head, movement, substrate and old-residue compatibility, regional instruction and full cure before water return. Skin formation or laboratory millimetres per day alone cannot release the joint.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-concrete-irrigation-canal-movement-joint-polyurethane-sealant-replacement-services |
| classification_refs | CPC 3.0 54234; narrower; General construction services of irrigation and flood control waterworks |
| covered_products | Accepted replacement of applied one-part polyurethane movement-joint sealant in retained concrete irrigation canals |
| excluded_products | New canal or lining; water-supply/navigation structures; major edge repair; embedded waterstops; preformed glands; two-part/booster routes |
| representative_product | One complete bounded irrigation canal movement joint resealed and accepted for declared exposure |
| production_route | Failed seal removal and qualified dry sound faces → backing/primer/one-part application → protected full required cure and owner acceptance |
| market_state | Installed cured bonded joint resealing service at owner handover; retained canal remains in place |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted resealing of an existing concrete irrigation canal movement joint with an approved one-part polyurethane system |
| How much | 1 m accepted resealed joint centreline; actual accepted complete-joint length L in m |
| How well | Approved geometry/movement/exposure, compatible old residue and regional system, sound clean dry faces, bonded correctly tooled seal, full required cure and closed defects; owner acceptance including required adhesion/leakage checks |
| How long or cycle | One removal/preparation/application/protected-cure/acceptance event across actual reporting periods; no universal service life |
| reference_flow_link | `accepted_joint_reseal` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted one-part polyurethane joint resealing service on retained concrete irrigation canal |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | irrigation function; owner/joint ID; complete accepted centreline L; movement/width/depth/head/water chemistry; retained host state; old/new material compatibility; approved regional sealant/primer/backing; preparation and full-cure criteria; adhesion/leakage requirements; water-reintroduction authority; providers; reporting periods |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_length | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Measure unique accepted centreline L with calibrated tape/survey and joint map via cp_accept; two faces, rod, bead passes and failed attempts never multiply L. Only complete joints meeting the full gate contribute. |
| material_state | sealant_supplied; concrete_primer; repair_mortar; preparation_cleaner; tooling_cleaner | Mass | kg | Use gross supplied net-content mass before outward returns, after tare removal. Pack count/nominal volume is not mass; any conversion needs actual quantity, exact product density at stated temperature/state and evidence via cp_prep_material or cp_apply_material. |
| backing_length | polyethylene_backing; backing_returns | Length | m | Collect actual gross backing length and diameter/profile separately from final joint centreline; cuts/overlaps/waste do not alter accepted L. |
| transport_activity | prep_transport; apply_transport | mass*distance | kg*km | For each leg multiply actual net cargo kg excluding vehicle/container tare by loaded distance km. kg*km is native; 1 t*km = 1000 kg*km only using verified unit support and actual leg basis. |
| energy_preservation | prep_electricity; apply_electricity | Energy | kWh | Keep measured electricity kWh without inferring Energy UUID from calorific-value properties. Confirm actual supplier exchange support before final dataset. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing failed applied joint in retained concrete irrigation canal; authorised isolation/dewatering/access and observed damage/contamination recorded |
| starting_condition_role | Retained host condition, not purchased new canal; removal/preparation is included foreground work |
| product_classification_scope | Irrigation waterworks repair under CPC 54234; water-supply and navigation function excluded |
| recursive_input_rule | A purchased same-category resealing service substitutes its documented owned work; preserve its input boundary and never charge both contractor inventory and included subcontract service |
| upstream_dataset_requirement | Actual supplied sealant/primer/backing/consumables, utilities, logistics, treatment and allocated assets require compatible upstream datasets with geography/time/technology and inclusion boundaries |
| disclosure | Identify every provider, host condition, isolation responsibility, incremental pumping/diversion and protection, minor repairs, testing, failures, actual period bridge, and upstream exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retained_host | all inventory rows | Exclude historic whole-canal construction and future conveyance; include all incremental current removal, minor job-caused remedies, pumping/cleanup, application, protection/cure and required test resources regardless of payer. No avoided-new-canal credit. | un-cpc3-2025; sika-pro3-purform-2024 |
| prepare_gate | prepare_joint | Input is failed contaminated seal/retained concrete. Remove incompatible residues and loose material, repair actual minor damaged edges, remove dust; sound clean dry faces and geometry require documented release to reseal_joint. Primer does not compensate for poor preparation. Major reconstruction leaves scope. | sika-pro3-purform-2024 |
| application_gate | reseal_joint | Input is qualified faces; approved regional system and project-specific adhesion trial cover old residues, movement and water exposure/head/chemistry. Place specified closed-cell PE backing, primer and ready-to-use one-part sealant; tool/protect and verify full required cure, required checks and owner acceptance before water return. No independent mixing or skin-time output. | sika-pro3-purform-2024; sika-civil-water-joints |
| stock_custody | all inventory rows | Gross external receipt and internal issue ledgers are distinct. Record outward product returns as real custody exits without first netting input; closing stock is not an output exchange. Opening-stock upstream burden and closing-stock carry-forward accompany physical lots across periods; supplier-included packaging/services are charged once. |  |
| fluid_outlets | prep_fuel; apply_fuel; prep_spill; apply_spill; prep_combustion; apply_combustion; curing_release | Use gross fuel input when returns/waste/releases are separately represented; burned fuel is derived after mutually exclusive unburned outlets/stock. Total spill is audit only; partition recovered, treated, retained outside closing stock and whole uncontained fluid, never deduct total again. Whole fluid kg is the physical incident/fuel ledger; elementary exchanges require identified constituents/media with measured species or evidenced composition/fate fractions. Whole-fluid and partial species views are nonadditive. Retained contaminated residue outside closing stock is a mutually exclusive outlet; never subtract it again when already in closing stock. |  |
| period_asset_boundary | prep_assets; apply_assets | Index removal, application, cure/protection, tests, failures and handover by period. Shared equipment and temporary works link every consuming job/node/period; complete manufacture/maintenance/replacements/EOL coverage is required with explicit observed or justified prospective remaining-life scenario. Direct fuel/spares and supplier-included equipment must not duplicate allocated asset burden. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual approved preparation cleaning formulation (`preparation_cleaner`)

Process / prospective direction / type: `prepare_joint` / `inputs` / `product`.

Conditional on approved cleaning method; expand each actual formulation/lot as a separate exchange, preserve contaminants and old-residue compatibility. Do not call mixed solvent cleaner a generic substance.

Range evidence need: Actual approved cleaner formulation, issue weights, outward returns and residue measurements; no generic solvent loss factor.

- Collection subject: Actual approved preparation cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Gross net-content kg issued from traced external/stock lots / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_material`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual face preparation abrasive or expendable tool material (`abrasive_consumable`)

Process / prospective direction / type: `prepare_joint` / `inputs` / `product`.

Conditional wire brushing/grinding/blasting consumables are recorded by distinct actual material. Reusable tool body belongs to allocated assets; consumable wear/replacement and debris are separately traced. Select one actual representation per material: gross supplied input when returned/unconsumed waste outlets are represented; consumed-only input excludes those already-netted unconsumed outlets for that same exchange. Never combine the two boundaries.

Range evidence need: Actual method, abrasive material, wear/issue weights and tool inclusion boundary required.

- Collection subject: Actual face preparation abrasive or expendable tool material
- Flow property / unit: Mass / kg
- Amount rule: Actual material-specific kg / L under one declared gross-supply-with-outlets or consumed-only-without-already-netted-outlets boundary.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_material`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual preparation equipment fuel formulation supplied (`prep_fuel`)

Process / prospective direction / type: `prepare_joint` / `inputs` / `product`.

Conditional combustion equipment records each actual fuel separately. Use gross fuel with physical stock and mutually exclusive return/waste/uncontained-fluid outlets; burned activity is derived for emissions. Exclude electricity-generator fuel already covered by purchased generated electricity.

Range evidence need: Actual fuel grade/lot, opening/receipts/closing, tare-free mass or actual volume/density/temperature and all unburned outlets; no generic fuel burn.

- Collection subject: Actual preparation equipment fuel formulation supplied
- Flow property / unit: Mass / kg
- Amount rule: Gross actual net-content fuel kg / L; derive burned kg separately from fuel ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_utilities`

#### Collection requirement: Actual preparation cargo transport service (`prep_transport`)

Process / prospective direction / type: `prepare_joint` / `inputs` / `product`.

Split actual routes/modes/providers and loaded legs for consumables, equipment and wastes. Direct vehicle operation inventory is an alternative to purchased transport service for the same leg. Empty-leg policy and inclusion are disclosed rather than inventing cargo.

Range evidence need: Actual weighbridge tare, consignment cargo, route km, vehicle/mode, return legs and service boundary required.

- Collection subject: Actual preparation cargo transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual net cargo kg × loaded distance km for attributed legs / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_logistics`

#### Collection requirement: Attributed preparation equipment and temporary works service (`prep_assets`)

Process / prospective direction / type: `prepare_joint` / `inputs` / `product`.

Conditional semantic service requirement expands each actual grinder/extractor/pump/access or isolation asset; never sum unlike equipment as one product. Record fractional complete-life service share per asset after identifying all nodes/jobs/periods.

Range evidence need: Actual asset inventory, full-life manufacture/maintenance/replacement/EOL coverage and observed or justified prospective service driver; missing denominator blocks finalisation.

- Collection subject: Attributed preparation equipment and temporary works service
- Flow property / unit: Count / item
- Amount rule: Per actual asset: attributable measured service driver / complete-life service driver, divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_assets`

#### Collection requirement: Actual preparation cleanup containment and absorbent consumable (`prep_containment_consumable`)

Process / prospective direction / type: `prepare_joint` / `inputs` / `product`.

Conditional actual disposable containment liner, cleanup wipe or absorbent is expanded by distinct material and contamination destination. Reusable containment belongs to asset service; abrasive wear remains separate. If real returns/unconsumed wastes are modelled use gross supplied input; consumed-only representation excludes already-netted unconsumed outlets for the same exchange.

Range evidence need: Actual cleanup/containment method, distinct material/lot, tare-free supply/use weights, returns and contaminated outlet record with provider inclusion required; no assumed absorbent ratio.

- Collection subject: Actual preparation cleanup containment and absorbent consumable
- Flow property / unit: Mass / kg
- Amount rule: Actual distinct material kg under the explicitly selected gross-supply or consumed-only boundary / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_material`

#### Collection requirement: Actual outward returned preparation material (`prep_returns`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `product`.

Conditional genuine usable cleaner/repair material/fuel return crosses custody boundary, split by actual product/lot/state and actual property. Not a negative input, recovered waste or retained closing stock. Upstream burden travels with returned stock exactly once.

Range evidence need: Actual dispatch receipt, identity, custody and unconsumed quantity needed; no assumed return rate.

- Collection subject: Actual outward returned preparation material
- Flow property / unit: Mass / kg
- Amount rule: Actual tare-free outward product return kg / L, with matching gross input and burden ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_outlets`

#### Collection requirement: Removed failed old applied sealant and backing waste (`removed_sealant`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `waste`.

Separate old sealant and old backing by actual material/hazard/destination where separable; otherwise use evidenced composite waste identity. Removed old host inventory has no invented new-material upstream burden.

Range evidence need: Actual old sealant/backing composition, weighed removal, receiver and hazardous contamination; old profile geometry alone is insufficient.

- Collection subject: Removed failed old applied sealant and backing waste
- Flow property / unit: Mass / kg
- Amount rule: Actual tare-free removed material kg dispatched / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_outlets`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual minor concrete edge debris and captured mineral dust (`concrete_debris`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `waste`.

Record actual removed concrete and captured dust separately when identity/route differs. Avoid adding airborne fraction to the weighed captured stream. Old host moisture/mineral solids remain distinct from new repair material.

Range evidence need: Actual debris weights, moisture/solids where needed and receiver; no whole-canal removal or assumed dry mass.

- Collection subject: Actual minor concrete edge debris and captured mineral dust
- Flow property / unit: Mass / kg
- Amount rule: Actual destination-specific net debris kg / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_outlets`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Captured preparation washwater or chemical residues (`prep_liquid_waste`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `waste`.

Split actual aqueous washwater, recovered cleaning liquid and contaminated absorbents by composition/receiver; captured waste is not an elementary release. Original cleaner/water and removed contamination must not be counted twice in mixture balance.

Range evidence need: Actual capture weights/volume-density state, contents/solids and disposal records; no assumed all water becomes effluent.

- Collection subject: Captured preparation washwater or chemical residues
- Flow property / unit: Mass / kg
- Amount rule: Actual net material-specific captured waste kg dispatched / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_outlets`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual preparation material packaging waste (`prep_packaging`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `waste`.

Split actual packaging materials and contamination/treatment routes; packaging production is counted once within supplied product dataset or explicit separate upstream component. Containers retained/reused are stock/assets, not discarded output.

Range evidence need: Actual package material tare, contamination, reuse and receiver records; no generic packaging fraction.

- Collection subject: Actual preparation material packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual tare-free discarded packaging kg / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_outlets`

#### Collection requirement: Actual airborne preparation particulate by species and size (`prep_dust`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `elementary`.

Conditional measured or justified modelled airborne release requires actual substance/size and receiving air compartment. Captured extraction dust is waste; unknown difference in mass balance is not automatically emission.

Range evidence need: Actual particle basis, air destination, capture evidence and representative factor/activity uncertainty needed; no generic dust fraction.

- Collection subject: Actual airborne preparation particulate by species and size
- Flow property / unit: Mass / kg
- Amount rule: Actual measured or source-factor-supported species/size release kg / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_releases`

#### Collection requirement: Actual preparation combustion species to air (`prep_combustion`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `elementary`.

Conditional each actual pollutant is a distinct exchange using verified species/compartment, burned fuel activity and exact equipment/fuel-control factor. Do not emit fuel mass as CO2 or add emissions from upstream electricity/transport services.

Range evidence need: Actual equipment/fuel technology, burned mass and factor units/scope or monitored species required; NOx/VOC labels alone cannot bind substance UUID.

- Collection subject: Actual preparation combustion species to air
- Flow property / unit: Mass / kg
- Amount rule: Per actual species: derived burned fuel activity × matching evidenced factor / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_releases`

#### Collection requirement: Actual preparation incident constituent release to stated environment (`prep_spill`)

Process / prospective direction / type: `prepare_joint` / `outputs` / `elementary`.

Conditional each actual elementary exchange is an identified constituent/species in its actual receiving medium. Whole uncontained formulation mass remains an incident and fuel-burn physical ledger field, not an elementary chemical identity. Measure the constituent release or derive it from whole uncontained fluid with evidenced composition and fate/release fraction. Recovered, captured, retained outside stock and closing-stock portions are mutually exclusive; whole-fluid and partial-species views are nonadditive. Unknown actual species/medium blocks final exchange selection.

Range evidence need: Actual incident whole-fluid partition plus identified constituent/medium, measured species or composition/fate fractions with source and mass basis required; no generic formulation UUID or default release fraction.

- Collection subject: Actual preparation incident constituent release to stated environment
- Flow property / unit: Mass / kg
- Amount rule: Per actual constituent and receiving medium: measured species kg or whole uncontained fluid kg × evidenced constituent mass fraction × evidenced medium-specific fate/release fraction, divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_releases`

#### Collection requirement: Actual application masking and protection consumable (`masking_consumable`)

Process / prospective direction / type: `reseal_joint` / `inputs` / `product`.

Conditional actual tape, disposable nozzle, wipe or protective sheet is expanded into distinct material exchanges. Reusable protection belongs to actual asset ledger; supplier-included materials do not receive duplicate upstream charge.

Range evidence need: Actual distinct materials, net weights, reuse state and disposal/return evidence needed; no mixed-consumable average.

- Collection subject: Actual application masking and protection consumable
- Flow property / unit: Mass / kg
- Amount rule: Actual material-specific gross net-content kg supplied / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_material`

#### Collection requirement: Actual application protection and test equipment fuel (`apply_fuel`)

Process / prospective direction / type: `reseal_joint` / `inputs` / `product`.

Conditional each actual fuel formulation supplied for protection/pumping/test equipment is distinct. Gross input and exclusive unburned outlets/stock derive burned fuel; purchased utility/service boundaries exclude duplicate direct fuel.

Range evidence need: Actual grade/lot, mass or volume-density-temperature, opening/closing, return/waste/spill partitions and equipment runtime required.

- Collection subject: Actual application protection and test equipment fuel
- Flow property / unit: Mass / kg
- Amount rule: Gross actual net-content fuel kg / L; emissions use separately derived burned activity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_utilities`

#### Collection requirement: Actual application cargo transport service (`apply_transport`)

Process / prospective direction / type: `reseal_joint` / `inputs` / `product`.

Split actual sealant/primer/backing deliveries, equipment and outlet transport legs by mode/provider. Do not count actual subcontract transport both as service and vehicle fuel inventory; document empty-leg treatment.

Range evidence need: Actual consignment weights/tare, loaded km, modes and supplier-included delivery boundaries required.

- Collection subject: Actual application cargo transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual net cargo kg × loaded route distance km / L for attributed legs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_logistics`

#### Collection requirement: Attributed application protection and test asset service (`apply_assets`)

Process / prospective direction / type: `reseal_joint` / `inputs` / `product`.

Conditional requirement expands actual guns, pumps, access/protection and test assets separately. Each fractional service share carries complete-life manufacture/maintenance/replacement/EOL with all consuming nodes/jobs/periods and explicit prospective remaining-service evidence when still in use.

Range evidence need: Actual asset IDs, complete-life coverage/driver and evidence-based retirement/replacement/EOL scenario, sensitivities and updates required; no universal lifetime.

- Collection subject: Attributed application protection and test asset service
- Flow property / unit: Count / item
- Amount rule: Per actual asset: attributable measured service driver / complete-life service driver, divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_assets`

#### Collection requirement: Actual atmospheric water uptake in moisture-curing sealant (`cure_moisture_uptake`)

Process / prospective direction / type: `reseal_joint` / `inputs` / `elementary`.

Conditional reaction intake is atmospheric water participating in actual one-part cure, distinct from supplied cleaning/test water, retained concrete moisture and rain. Use only actual formulation/reaction or field mass evidence; not a humidity-to-water conversion assumption.

Range evidence need: Actual formulation stoichiometry or controlled wet/cured mass and reaction-product data plus field state/source uncertainty required; unknown wet-to-cured residual is not moisture uptake.

- Collection subject: Actual atmospheric water uptake in moisture-curing sealant
- Flow property / unit: Mass / kg
- Amount rule: Actual evidenced reaction water uptake kg / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_releases`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual outward returned application material (`apply_returns`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `product`.

Conditional unused sealant/primer/cleaner/fuel product returned across custody boundary expands each formulation/lot separately. Closing stock stays internal with carried-forward upstream burden.

Range evidence need: Actual dispatch/custody/product state and corresponding gross receipts/stock burden bridge required; no presumed return or credit.

- Collection subject: Actual outward returned application material
- Flow property / unit: Mass / kg
- Amount rule: Actual tare-free outward returned product kg / L, with matching gross input and burden ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_outlets`

#### Collection requirement: Actual application chemical residue and failed seal waste (`application_waste`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `waste`.

Separate uncured sealant, cured cut-outs from rejected/reworked seals, primer/cleaner residues and contaminated absorbents by actual composition/receiver. Rework retains all burdens and no accepted length until repaired gate closes.

Range evidence need: Actual wet/cured state, formulation, weighed net wastes, rejection/removal event and receiver needed; no assumed wet-to-cured retention or disposal factor.

- Collection subject: Actual application chemical residue and failed seal waste
- Flow property / unit: Mass / kg
- Amount rule: Actual material-specific net waste kg dispatched / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_outlets`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual application packaging and uncontaminated offcut waste (`apply_packaging`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `waste`.

Separate actual foil/plastic/cardboard and uncontaminated PE offcuts by material/route. Contaminated chemical packages belong to identified chemical waste. Retained reusable containers are not discarded output and upstream package burden is charged once.

Range evidence need: Actual packaging tare/material, contamination, PE offcut weights and receiver evidence needed; no fixed pack-to-waste factor.

- Collection subject: Actual application packaging and uncontaminated offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Actual destination-specific net discarded material kg / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_outlets`

#### Collection requirement: Actual captured application cleanup or test effluent (`captured_test_water`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `waste`.

Conditional water captured for treatment is distinct from chemical residue and direct environmental discharge. Record actual contaminants/wet solids, receiver and net mixture mass without summing input water twice. Actual direct discharge requires separately identified substances/receiving medium.

Range evidence need: Actual capture/receiver record, water/solids/contaminants and measured volume-density or mass needed; no assumption all test water is waste.

- Collection subject: Actual captured application cleanup or test effluent
- Flow property / unit: Mass / kg
- Amount rule: Actual captured destination-specific net water/effluent kg / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_outlets`

#### Collection requirement: Actual application cleaning and moisture-cure species release (`curing_release`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `elementary`.

Each actual emitted species and receiving medium requires formulation/reaction or monitored evidence. Primer/cleaner volatiles and moisture-cure chemistry cannot be inferred from low-monomer/EC1plus/VOC labels; retain measured water uptake/reaction terms separate from retained host/weather moisture and residual balance.

Range evidence need: Actual species, receiving medium, wet solids/volatile fraction, moisture uptake/reaction products, field cure and captured residues with uncertainty needed; missing balance is not emission.

- Collection subject: Actual application cleaning and moisture-cure species release
- Flow property / unit: Mass / kg
- Amount rule: Per actual species: monitored release or actual applicable formulation/reaction/activity calculation / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_releases`
- Sources: `sika-pro3-purform-2024`

#### Collection requirement: Actual application protection and test combustion species (`apply_combustion`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `elementary`.

Conditional each pollutant requires actual equipment/fuel/controls and air compartment, using exclusive burned activity. Emissions covered by purchased power/transport or supplier service must not be repeated.

Range evidence need: Actual fuel-equipment factor with units/scope/control and burned activity or monitoring required; no generic combustion species factor.

- Collection subject: Actual application protection and test combustion species
- Flow property / unit: Mass / kg
- Amount rule: Per actual species: derived burned fuel activity × matching evidenced factor / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_releases`

#### Collection requirement: Actual application incident constituent release to stated environment (`apply_spill`)

Process / prospective direction / type: `reseal_joint` / `outputs` / `elementary`.

Conditional each actual elementary exchange is an identified constituent/species in its actual receiving medium. Whole uncontained formulation mass remains an incident and fuel-burn physical ledger field, not an elementary chemical identity. Measure the constituent release or derive it from whole uncontained fluid with evidenced composition and fate/release fraction. Recovered, captured, retained outside stock and closing-stock portions are mutually exclusive; whole-fluid and partial-species views are nonadditive. Unknown actual species/medium blocks final exchange selection.

Range evidence need: Actual incident whole-fluid partition plus identified constituent/medium, measured species or composition/fate fractions with source and mass basis required; no generic formulation UUID or default release fraction.

- Collection subject: Actual application incident constituent release to stated environment
- Flow property / unit: Mass / kg
- Amount rule: Per actual constituent and receiving medium: measured species kg or whole uncontained fluid kg × evidenced constituent mass fraction × evidenced medium-specific fate/release fraction, divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_releases`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare_joint | Remove failed seal and qualify concrete joint faces | required | Every in-scope replacement; minor repair/cleaning/pumping resources conditional on actual work | material_treatment_responsibility | Measured prepared joint centreline handed to reseal_joint; not final accepted output |
| reseal_joint | Apply system, protect full cure and accept joint | required | Every in-scope replacement; required trials/tests and rework owned here | surface_or_property_finishing_responsibility | 1 m accepted resealed joint centreline from complete accepted joint L |

The two responsibilities have physical states and a documented handoff; receipt, mixing, cure and paperwork are not separate nodes. Failed face/geometry release loops in prepare_joint. Adhesion, cure, tooling or leakage failures return reseal_joint to preparation/removal when needed; repeat resources/wastes retain their originating node/event IDs and accepted length is counted once. Actual provider ownership may differ without losing the complete gate.

### Process: Remove failed seal and qualify concrete joint faces (`prepare_joint`)

#### Inputs

##### Product flows

###### Supplied water for actual preparation or leakage-related cleanup (`preparation_water`)

Record only actual purchased/supplied water crossing preparation boundary for flushing after actual cutting, cleanup or incremental dewatering support. Retained canal water is not automatically supplied product water. Distinguish abstracted environmental water in a separate actual exchange if used.

Range evidence need: Actual metered/weighted job water and preparation method, including density if converting volume; no per-metre default.

- Selected flow: Supplied water for actual preparation or leakage-related cleanup
- Flow property / unit: Mass / kg
- Amount rule: Actual supplied water kg / L; meter volume needs actual water density and temperature/state evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_material`
- Sources: `sika-pro3-purform-2024`

###### Actual compatible minor joint edge repair material (`repair_mortar`)

Include only actual local minor edge repairs needed for this seal renewal. Split differing mortar/resin components and actual mixing water; substantial structural reconstruction is outside scope. Observe actual material cure before face qualification.

Range evidence need: Actual damaged volume, approved repair product and gross receipt/issue/outlet records; no universal mortar quantity or assumed density.

- Selected flow: Actual compatible minor joint edge repair material
- Flow property / unit: Mass / kg
- Amount rule: Gross net-content kg supplied for actual minor repair / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_material`
- Sources: `sika-pro3-purform-2024`

###### Actual preparation electricity supply (`prep_electricity`)

Meter cutting/grinding, extraction, cleaning and actual incremental pumping/drying attributable to preparation, identifying provider and electricity source. Purchased complete service cannot also carry its included electricity.

Range evidence need: Actual meters, operating intervals, provider boundaries and measured shared-load attribution; no default power or operating time.

- Selected flow: Actual preparation electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributed metered preparation kWh / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_utilities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified existing concrete irrigation canal joint faces (`prepared_joint`)

Internal service handoff after removal of failed sealant/contamination, actual minor remedies and dust, verified sound clean dry concrete and geometry, with trial/compatibility conditions assigned to application. Retained concrete is not newly produced mass.

Range evidence need: Actual mapped prepared length and face/geometry release record; may exceed accepted length through excluded/failed portions, so no assumed 1:1 quantity.

- Selected flow: Qualified existing concrete irrigation canal joint faces
- Flow property / unit: Length / m
- Amount rule: Measured released prepared centreline m / L; retain failed/repeated preparation quantities in event ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_gate`
- Sources: `sika-pro3-purform-2024`

##### Waste flows

##### Elementary flows

### Process: Apply system, protect full cure and accept joint (`reseal_joint`)

#### Inputs

##### Product flows

###### Qualified existing concrete irrigation canal joint faces (`qualified_joint_input`)

Same actual prepared service handed from prepare_joint, with mapped centreline/face release. This internal link carries preparation burden once; never purchase its duplicate full service while also including its component inventory.

Range evidence need: Actual signed prepared/received length and unreleased/rework exclusions; no fixed equality to final 1 m.

- Selected flow: Qualified existing concrete irrigation canal joint faces
- Flow property / unit: Length / m
- Amount rule: Actual received qualified centreline m / L with same event/lot as prepared_joint.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_gate`
- Sources: `sika-pro3-purform-2024`

###### Actual one-part moisture-curing polyurethane sealant supplied (`sealant_supplied`)

Gross wet supplied formulation remains distinct from cured retained seal. Record approved regional product and lot, shelf/storage state and actual supplier boundaries. Neither generic polyurethane resin nor low monomer/VOC label establishes supplied identity or release quantity.

Range evidence need: Actual wet formulation issue weights, returns, retained stock and wet-to-cured mass/reaction evidence needed; NZ density/pack metres are not universal.

- Selected flow: Actual one-part moisture-curing polyurethane sealant supplied
- Flow property / unit: Mass / kg
- Amount rule: Gross actual net-content wet sealant kg supplied from receipt/stock lot / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_material`
- Sources: `sika-pro3-purform-2024`

###### Actual compatible concrete joint primer formulation (`concrete_primer`)

Use the project-approved concrete primer for the actual regional system, separately from cleaning liquid and sealant. NZ PDS names Primer-3 N for concrete; actual primer instruction/flash-off and compatibility are collected rather than assumed across regions.

Range evidence need: Actual primer formulation, issue/return weights, wet solids/volatile data and approved application/flash-off record needed.

- Selected flow: Actual compatible concrete joint primer formulation
- Flow property / unit: Mass / kg
- Amount rule: Gross actual net-content primer kg supplied / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_material`
- Sources: `sika-pro3-purform-2024`

###### Actual closed-cell polyethylene backing rod (`polyethylene_backing`)

Record actual closed-cell PE rod of approved diameter/profile, placement depth and condition. Physical rod length differs from centreline due to actual cuts and wasted pieces; backing is not joint sealant mass.

Range evidence need: Actual profile/diameter, supplied/installed/cut/returned length and approval required; no default rod mass or diameter.

- Selected flow: Actual closed-cell polyethylene backing rod
- Flow property / unit: Length / m
- Amount rule: Gross actual rod m supplied / L, with returns and retained stock in same native length ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_material`
- Sources: `sika-pro3-purform-2024`

###### Actual approved tool cleaning formulation (`tooling_cleaner`)

Conditional actual cleaning formulation for uncured tools is separate from primer and preparation cleaner. NZ sheet names Remover-208; actual regional cleaner and compatibility govern, and cured material removal is mechanical.

Range evidence need: Actual cleaner product, cleaning method and weighed issue/return/recovered liquid records required; no solvent evaporation default.

- Selected flow: Actual approved tool cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Gross actual net-content cleaner kg supplied / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_material`
- Sources: `sika-pro3-purform-2024`

###### Actual application cure protection and test electricity (`apply_electricity`)

Meter actual gun/temporary protection/drying/pumping/test loads attributable through full required cure/acceptance, including contractor-operated resources. Passive atmospheric cure does not imply powered heating.

Range evidence need: Actual equipment/meter periods, load allocation and complete cure/testing coverage required; no assumed heating or laboratory cure-time power.

- Selected flow: Actual application cure protection and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributed metered application/protection/test kWh / L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_apply_utilities`

###### Actual supplied application cleanup and required test water (`application_test_water`)

Conditional incremental supplied cleanup or required leakage/adhesion verification water is assigned to application/test responsibility. Do not include subsequent irrigation conveyance or automatically treat retained canal water as supplied product. Any actual environmental abstraction is separately identified as elementary intake with source.

Range evidence need: Actual test/cleanup method, water supply/source, metered quantity and density/state when converting; no default test volume.

- Selected flow: Actual supplied application cleanup and required test water
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied water kg / L; volume conversion requires actual density and temperature/state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_material`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted one-part polyurethane joint resealing service on retained concrete irrigation canal (`accepted_joint_reseal`)

Final installed service is only released after approved system/geometry/exposure, compatible old residues, sound dry face gate, backing/primer/application/tooling/protection, full required cure, closed defects and required owner adhesion/leakage verification. One metre intensity never releases an incomplete joint.

Range evidence need: Exact 1 m is definition, not empirical Range: collect complete accepted joint L and gate/tolerances; no skin time, laboratory cure rate, two-face multiplier or rejected length.

- Selected flow: Accepted one-part polyurethane joint resealing service on retained concrete irrigation canal
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accept`
- Sources: `sika-pro3-purform-2024`; `sika-civil-water-joints`

###### Actual outward returned closed-cell polyethylene backing rod (`backing_returns`)

Conditional genuine unused rod returns across custody boundary retain actual approved material/profile and native length. They are not waste or retained closing stock. Corresponding gross rod input is not first netted.

Range evidence need: Actual dispatch/custody/profile and measured length with gross receipt/stock burden bridge required; no nominal return fraction.

- Selected flow: Actual outward returned closed-cell polyethylene backing rod
- Flow property / unit: Length / m
- Amount rule: Actual outward returned backing m / L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apply_outlets`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| no_coproduct | all inventory rows | This service has no assumed sale co-product. Retained concrete, removed old seal and rejected work are not accepted service. Record actual recovered material route separately without automatic substitution credit. |  |
| rework_burden | prepare_joint; reseal_joint | Failed preparation loops within prepare_joint; failed application/adhesion/cure/leakage loops reseal_joint to its actual responsible node. All repeat inputs, protection, tests/removal and exits stay with the job; accepted complete length enters denominator once. Unrepaired defects block acceptance. | sika-pro3-purform-2024 |
| shared_assets | prep_assets; apply_assets | Use per-asset physical service drivers justified by actual use (metered operating time or measured activity), enumerating all jobs, nodes and periods. Numerator is actual job service; denominator covers complete observed life or observed service plus evidenced prospective remaining service/replacement/termination/EOL scenario. Include manufacture, maintenance, replacements and EOL once; exclude direct fuel/spares already counted. Missing complete coverage/denominator blocks final dataset. |  |
| period_bridge | all inventory rows | Enumerate removal, application, protected cure, tests/rework and acceptance dates/reporting periods. Carry unfinished-work burden to the accepted job, never release a period-cut uncured output. Assign shared events once by job/node/period. Opening-stock burden plus gross receipts equals attributable used/dispatched burden plus closing-stock carry-forward; disclose returns/wastes and never call closing stock outward flow. |  |
| service_overlap | prep_transport; apply_transport; prep_electricity; apply_electricity; prep_assets; apply_assets | Document provider inclusion matrices; purchased complete service and its included energy/equipment/packaging/logistics are alternative representations. Internal prepared_joint transfer moves burden without purchasing the same complete treatment again. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_material | prepare_joint | Distinct materials and stock | Actual foreground records | job_id; joint_id; period_id; event_id; material_id; formulation; product_revision; lot_id; supplier; state; opening_stock_native; gross_receipt_native; internal_issue_native; outward_return_native; retained_closing_stock_native; native_unit; gross_weight_kg; container_tare_kg; net_content_kg; actual_volume_L; actual_density_kg_per_L; density_temperature_degC; density_state; density_source; backing_length_m; backing_diameter_mm; opening_burden; receipt_burden; closing_carried_burden; inclusion_boundary | Record gross external receipts and internal issues without double burden. Weigh gross minus real tare before returns; map each product/lot to outward return, retained stock, installed/consumed material and waste. If mass derived from actual volume, use exact lot/formulation density at recorded temperature/state; if backing use actual m/profile. Link period stock burden and accepted L via cp_accept; divide attributable job-native quantity by L. | kg; L; kg/L; degC; m; mm | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Calibrated scales/meters; supplier/lot instructions; signed custody and stock/burden bridge; no nominal pack density default |
| cp_prep_utilities | prepare_joint | Electricity and distinct fuels | Actual foreground records | job_id; node_id; period_id; event_id; provider; equipment_id; energy_source; meter_start_kWh; meter_end_kWh; shared_load_driver; fuel_id; fuel_grade; opening_fuel_kg; gross_fuel_receipt_kg; closing_fuel_kg; outward_fuel_return_kg; fuel_waste_kg; recovered_spill_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fuel_kg; fuel_volume_L; fuel_density_kg_per_L; fuel_density_temperature_degC; fuel_density_state; runtime_h; included_service | Read actual meters and justified shared-load allocation. Fuel physical ledger identifies all exclusive unburned outlets; recovered spill is counted only at final return/waste/retained destination, never twice. Derive burned fuel separately. Actual volume conversion uses exact density/state/temperature. Assign all cure/pumping/test providers and divide job quantity by accepted L. | kWh; kg; L; kg/L; degC; h | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Meter calibration; tank/receipt/custody evidence; no total-spill extra deduction; service inclusion matrix |
| cp_prep_logistics | prepare_joint | Distinct actual transport legs | Actual foreground records | job_id; node_id; period_id; leg_id; consignment_id; provider; mode; cargo_id; loaded_gross_kg; vehicle_container_tare_kg; net_cargo_kg; loaded_distance_km; empty_return_distance_km; inclusion_boundary; attribution_driver | Match actual consignment and route; cargo kg is gross less vehicle/container tare. Calculate net cargo kg × loaded km per leg; use explicit actual allocation and disclose empty-leg treatment. Divide attributed leg activity by accepted L. Do not add direct vehicle fuel to purchased same-leg service. | kg; km; kg*km | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Weighbridge/movement/GPS records; route/provider and included delivery agreement; kg*km support chain |
| cp_prep_assets | prepare_joint | Distinct asset complete-life service shares | Actual foreground records | asset_id; node_id; job_id; period_id; manufacture_dataset; manufacture_boundary; maintenance_history; replacement_history; end_of_life_route; direct_fuel_spares_excluded; service_driver_unit; job_driver; all_node_job_period_drivers; observed_life_driver; forecast_remaining_driver; forecast_source; termination_replacement_scenario; forecast_EOL_route; uncertainty; sensitivity; update_date | For each actual asset inventory manufacture, maintenance, replacements and EOL across complete life. Completed lives use history; in-service life uses observed driver plus evidenced prospective remaining-service scenario and projected replacement/termination/EOL labelled forecast. Allocate job/node driver over full-life total and divide by accepted L; track all consumers and no repeated fuel/spares. Missing coverage/driver evidence blocks finalisation. | item; actual declared service-driver unit | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Asset register/history and justified forecast sources, uncertainty/sensitivity/update; per-asset shares across complete scope sum to one |
| cp_prep_outlets | prepare_joint | Distinct custody exits and retained balances | Actual foreground records | job_id; node_id; period_id; event_id; outlet_id; material_id; formulation; state; destination; receiver; custody_dispatch; gross_weight_kg; tare_kg; net_weight_kg; actual_volume_L; density_kg_per_L; density_temperature_degC; solids_kg; water_kg; returned_backing_m; contamination; waste_manifest; upstream_burden_transferred; retained_closing_stock | Weigh actual net material exits and document receiver/custody. Expand every material/state/route as separate product return or waste; backing returns retain m. Distinguish old host material, new repair, captured liquids and packaging; solids/water reconcile mixtures without double counting. Closing stock stays internal with carried burden; divide actual outward quantities by accepted L. | kg; L; kg/L; degC; m | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Calibrated scale/receiving ticket; waste classification; no negative input plus duplicate return; no fictitious closing-stock output |
| cp_prep_releases | prepare_joint | Actual species and uncontained-fluid releases | Actual foreground records | job_id; node_id; period_id; event_id; substance_id; formulation_id; species; particle_size; receiving_medium; monitored_mass_kg; monitoring_method; factor_value; factor_numerator_unit; factor_activity_unit; factor_source; equipment_fuel_technology; burned_activity; wet_mass_kg; retained_cured_mass_kg; actual_solids_fraction; actual_volatile_fraction; moisture_uptake_kg; reaction_extent; reaction_extent_basis; formulation_water_demand_kg_per_kg; water_demand_source; reaction_product_kg; weather_water_kg; retained_host_water_kg; captured_mass_kg; spill_total_audit_kg; recovered_outlet_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fluid_kg; constituent_mass_fraction; fraction_mass_basis; composition_source; medium_release_fraction; fate_fraction_basis; fate_source; uncertainty | Measure actual species/size/medium or calculate from row-applicable source factor and collected matching activity. Record wet/cured and reaction/water terms only with actual formulation evidence; unknown mass residual remains gap. Incident total is partition audit; count final exclusive outlets, no extra total deduction. Whole uncontained formulation and partial species report are nonadditive views; divide actual releases by accepted L. | kg; actual factor/activity units | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Actual monitored data or factor scope/units/source, reaction/formulation evidence and uncertainty; labels are not emission factors |
| cp_apply_material | reseal_joint | Distinct materials and stock | Actual foreground records | job_id; joint_id; period_id; event_id; material_id; formulation; product_revision; lot_id; supplier; state; opening_stock_native; gross_receipt_native; internal_issue_native; outward_return_native; retained_closing_stock_native; native_unit; gross_weight_kg; container_tare_kg; net_content_kg; actual_volume_L; actual_density_kg_per_L; density_temperature_degC; density_state; density_source; backing_length_m; backing_diameter_mm; opening_burden; receipt_burden; closing_carried_burden; inclusion_boundary | Record gross external receipts and internal issues without double burden. Weigh gross minus real tare before returns; map each product/lot to outward return, retained stock, installed/consumed material and waste. If mass derived from actual volume, use exact lot/formulation density at recorded temperature/state; if backing use actual m/profile. Link period stock burden and accepted L via cp_accept; divide attributable job-native quantity by L. | kg; L; kg/L; degC; m; mm | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Calibrated scales/meters; supplier/lot instructions; signed custody and stock/burden bridge; no nominal pack density default |
| cp_apply_utilities | reseal_joint | Electricity and distinct fuels | Actual foreground records | job_id; node_id; period_id; event_id; provider; equipment_id; energy_source; meter_start_kWh; meter_end_kWh; shared_load_driver; fuel_id; fuel_grade; opening_fuel_kg; gross_fuel_receipt_kg; closing_fuel_kg; outward_fuel_return_kg; fuel_waste_kg; recovered_spill_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fuel_kg; fuel_volume_L; fuel_density_kg_per_L; fuel_density_temperature_degC; fuel_density_state; runtime_h; included_service | Read actual meters and justified shared-load allocation. Fuel physical ledger identifies all exclusive unburned outlets; recovered spill is counted only at final return/waste/retained destination, never twice. Derive burned fuel separately. Actual volume conversion uses exact density/state/temperature. Assign all cure/pumping/test providers and divide job quantity by accepted L. | kWh; kg; L; kg/L; degC; h | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Meter calibration; tank/receipt/custody evidence; no total-spill extra deduction; service inclusion matrix |
| cp_apply_logistics | reseal_joint | Distinct actual transport legs | Actual foreground records | job_id; node_id; period_id; leg_id; consignment_id; provider; mode; cargo_id; loaded_gross_kg; vehicle_container_tare_kg; net_cargo_kg; loaded_distance_km; empty_return_distance_km; inclusion_boundary; attribution_driver | Match actual consignment and route; cargo kg is gross less vehicle/container tare. Calculate net cargo kg × loaded km per leg; use explicit actual allocation and disclose empty-leg treatment. Divide attributed leg activity by accepted L. Do not add direct vehicle fuel to purchased same-leg service. | kg; km; kg*km | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Weighbridge/movement/GPS records; route/provider and included delivery agreement; kg*km support chain |
| cp_apply_assets | reseal_joint | Distinct asset complete-life service shares | Actual foreground records | asset_id; node_id; job_id; period_id; manufacture_dataset; manufacture_boundary; maintenance_history; replacement_history; end_of_life_route; direct_fuel_spares_excluded; service_driver_unit; job_driver; all_node_job_period_drivers; observed_life_driver; forecast_remaining_driver; forecast_source; termination_replacement_scenario; forecast_EOL_route; uncertainty; sensitivity; update_date | For each actual asset inventory manufacture, maintenance, replacements and EOL across complete life. Completed lives use history; in-service life uses observed driver plus evidenced prospective remaining-service scenario and projected replacement/termination/EOL labelled forecast. Allocate job/node driver over full-life total and divide by accepted L; track all consumers and no repeated fuel/spares. Missing coverage/driver evidence blocks finalisation. | item; actual declared service-driver unit | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Asset register/history and justified forecast sources, uncertainty/sensitivity/update; per-asset shares across complete scope sum to one |
| cp_apply_outlets | reseal_joint | Distinct custody exits and retained balances | Actual foreground records | job_id; node_id; period_id; event_id; outlet_id; material_id; formulation; state; destination; receiver; custody_dispatch; gross_weight_kg; tare_kg; net_weight_kg; actual_volume_L; density_kg_per_L; density_temperature_degC; solids_kg; water_kg; returned_backing_m; contamination; waste_manifest; upstream_burden_transferred; retained_closing_stock | Weigh actual net material exits and document receiver/custody. Expand every material/state/route as separate product return or waste; backing returns retain m. Distinguish old host material, new repair, captured liquids and packaging; solids/water reconcile mixtures without double counting. Closing stock stays internal with carried burden; divide actual outward quantities by accepted L. | kg; L; kg/L; degC; m | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Calibrated scale/receiving ticket; waste classification; no negative input plus duplicate return; no fictitious closing-stock output |
| cp_apply_releases | reseal_joint | Actual species and uncontained-fluid releases | Actual foreground records | job_id; node_id; period_id; event_id; substance_id; formulation_id; species; particle_size; receiving_medium; monitored_mass_kg; monitoring_method; factor_value; factor_numerator_unit; factor_activity_unit; factor_source; equipment_fuel_technology; burned_activity; wet_mass_kg; retained_cured_mass_kg; actual_solids_fraction; actual_volatile_fraction; moisture_uptake_kg; reaction_extent; reaction_extent_basis; formulation_water_demand_kg_per_kg; water_demand_source; reaction_product_kg; weather_water_kg; retained_host_water_kg; captured_mass_kg; spill_total_audit_kg; recovered_outlet_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fluid_kg; constituent_mass_fraction; fraction_mass_basis; composition_source; medium_release_fraction; fate_fraction_basis; fate_source; uncertainty | Measure actual species/size/medium or calculate from row-applicable source factor and collected matching activity. Record wet/cured and reaction/water terms only with actual formulation evidence; unknown mass residual remains gap. Incident total is partition audit; count final exclusive outlets, no extra total deduction. Whole uncontained formulation and partial species report are nonadditive views; divide actual releases by accepted L. | kg; actual factor/activity units | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Actual monitored data or factor scope/units/source, reaction/formulation evidence and uncertainty; labels are not emission factors |
| cp_prepare_gate | prepare_joint | Qualified preparation handoff | Actual foreground records | job_id; joint_id; period_id; event_id; original_sealant; residue_compatibility; host_condition; minor_repair_product; repair_cure_release; preparation_method; released_length_m; joint_width_mm; joint_depth_mm; movement_mm; surface_temperature_degC; dewpoint_degC; moisture_method; dryness_result; cleanliness_result; soundness_result; geometry_tolerance_source; approver; handoff_date | Map failed joint and actual removed/retained states; verify actual specified soundness/cleanliness/dryness/geometry after minor repair cure and dust removal. Record actual approved tolerances and method. Sum uniquely released prepared length by event, link received application length, and divide measured job handoff length by final accepted L; repeated attempts remain traceable. | m; mm; degC; actual moisture test unit | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Signed face release and project-specific approved instruction; no generic PDS floor width/depth or dewpoint setting imposed on other system |
| cp_apply_gate | reseal_joint | Application interface and full cure | Actual foreground records | job_id; joint_id; period_id; event_id; prepared_event_id; received_length_m; regional_product; instruction_revision; formulation_lot; primer_id; backing_profile; width_mm; depth_mm; movement_mm; water_head_m; water_chemistry; exposure_temperature_degC; substrate_temperature_degC; air_temperature_degC; relative_humidity_percent; dewpoint_degC; primer_flashoff_min; application_start_utc; cure_start_utc; protection_end_utc; cure_verification_method; cure_required_criterion; cure_actual_result; criterion_source; adhesion_trial; inspection_result; leakage_test_pressure_kPa; leakage_test_duration_min; test_method; acceptance_tolerance_source; rework_event; water_release_authority | Receive exact qualified face event; obtain project/manufacturer approval for regional system, old residue, head/chemistry/movement and project adhesion trial. Record actual geometry/weather/primer conditions, protection/full-cure criterion and actual result. Record only required actual tests with method/units/tolerance source; skin time/lab cure rate cannot establish complete cure. Link rework to originating node and carry full event burden through final acceptance. | m; mm; degC; %; min; kPa; actual chemistry/test units | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Signed approved product/instruction, trial/field cure/test and owner records; unknown criterion or unresolved failure blocks output |
| cp_accept | reseal_joint | Unique final accepted centreline | Actual foreground records | job_id; joint_id; mapped_segments; period_id; acceptance_date_utc; start_station_m; end_station_m; unique_accepted_length_L_m; survey_method; calibration; full_joint_gate_closed; cure_release_id; required_test_release_id; defect_closure_id; owner_acceptance_id; authorised_water_return | Measure unique accepted complete-joint centreline using calibrated tape/survey with mapped segment endpoints; count once, not two faces/rod/passes. Sum complete accepted joints to L; failed/uncured/unreleased length contributes zero until all gates closed. Use 1 m as defined reference and divide job attributable amounts by this observed L while preserving complete-joint acceptance. | m | Each event/lot and reporting-period reconciliation | Whole job including failed attempts through acceptance | Actual canal joint and responsible provider | per reference flow | Survey/calibration and signed complete gate/test/defect/owner records; positive L required, no inferred uncured acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| length_intensity | all inventory rows | For each distinct exchange, intensity = attributable job quantity in its stated unit / accepted complete-joint centreline L in m. Reference output is exactly 1 m; internal prepared/received lengths remain observed and burden transfers once. | actual job quantity; L; cp_accept | exchange quantity per reference flow |  |
| actual_density_conversion | preparation_water; application_test_water; preparation_cleaner; repair_mortar; sealant_supplied; concrete_primer; tooling_cleaner; prep_fuel; apply_fuel | Net content kg = gross weighed kg - actual container tare kg. Only if directly recorded in volume: actual mass kg = actual volume L × exact formulation/lot density kg/L at recorded temperature/state. For fuel rows use fuel_volume_L × fuel_density_kg_per_L at fuel_density_temperature_degC/fuel_density_state from the linked utilities protocol. Nominal pack count/density cannot replace evidence. Do not use return-netted input. | gross_weight_kg; container_tare_kg; actual_volume_L; actual_density_kg_per_L; density_temperature_degC; density_state; density_source; fuel_volume_L; fuel_density_kg_per_L; fuel_density_temperature_degC; fuel_density_state; cp_prep_material; cp_apply_material; cp_prep_utilities; cp_apply_utilities | gross net-content material kg |  |
| fuel_burned_activity | prep_fuel; apply_fuel; prep_combustion; apply_combustion | Burned fuel kg = opening fuel kg + gross received fuel kg - closing fuel kg - actual outward unburned return kg - actual unburned waste kg - retained contaminated fuel residue outside closing stock kg - whole uncontained fuel kg; recovered spills enter only their final exclusive outlet. Retained contaminated residue outside closing stock is mutually exclusive with closing fuel stock; if included in closing stock, do not subtract it again. Total incident spill is audit only and is never an additional subtraction. | cp_prep_utilities; cp_apply_utilities; cp_prep_outlets; cp_apply_outlets; cp_prep_releases; cp_apply_releases | actual burned fuel activity for species calculation |  |
| transport_work | prep_transport; apply_transport | Each loaded leg activity kg*km = actual net cargo kg × loaded distance km; sum attributed legs and divide by L. If actual provider unit t*km is used, 1 t*km = 1000 kg*km; preserve listed factor and real cargo/route. | net_cargo_kg; loaded_distance_km; cp_prep_logistics; cp_apply_logistics; cp_accept | transport intensity kg*km per reference flow |  |
| asset_share | prep_assets; apply_assets | For each actual asset, fractional complete-life service = actual job/node service driver / complete-life driver; complete-life driver = observed driver plus justified prospective remaining driver for in-service assets. Multiply full-life manufacture/maintenance/replacements/EOL inventory by fractional share, divide by L, and exclude separately counted fuel/spares. Shares across all jobs/nodes/periods sum to one over complete life. | job_driver; observed_life_driver; forecast_remaining_driver; complete asset inventory; cp_prep_assets; cp_apply_assets; cp_accept | per-asset allocated service and inventory per reference flow |  |
| species_release | prep_dust; prep_combustion; apply_combustion; curing_release; prep_spill; apply_spill | Per actual species/size/medium: release kg = monitored kg or actual matching activity × evidenced factor in kg/activity-unit. For incident constituent releases use measured species kg or whole_uncontained_fluid_kg × constituent_mass_fraction × medium_release_fraction, each fraction with actual source and mass/fate basis. Whole fluid is an incident ledger quantity, not an elementary identity. Select one accounting route per release. Moisture-cure reaction/wet-to-cured retention requires actual formulation/field evidence; no conversion from low-monomer/VOC labels or unknown residual. Divide actual release by L. | monitored_mass_kg; factor_value; factor_numerator_unit; factor_activity_unit; factor_source; matching burned/reaction/material activity; whole_uncontained_fluid_kg; constituent_mass_fraction; fraction_mass_basis; composition_source; medium_release_fraction; fate_fraction_basis; fate_source; cp_prep_releases; cp_apply_releases; cp_accept | species-specific release intensity kg per reference flow |  |
| stock_material_bridge | preparation_water; application_test_water; preparation_cleaner; abrasive_consumable; prep_containment_consumable; repair_mortar; sealant_supplied; concrete_primer; polyethylene_backing; backing_returns; tooling_cleaner; prep_returns; apply_returns; application_waste; curing_release; cure_moisture_uptake | For each material/state/native unit: opening stock + gross external receipts = actual outward product returns + retained closing stock + mutually exclusive final installed or retained material, outward waste and actual whole uncontained fluid outlet; intermediate consumed/issued quantity is a process ledger movement, never added to its own waste/releases, with internal issue logged but not added as another receipt. For backing retain native m and distinguish final installed length, outward returned length, retained stock and measured cut waste length before any separately evidenced mass conversion. The component/reaction/speciation ledger is separate and nonadditive with whole-fluid physical outlets. For reaction balance separately identify actual atmospheric water uptake, supplied water, retained-host/weather moisture and evidenced reaction products; these terms are not generic ingredient losses. Wet-to-cured balance additionally identifies evidenced reaction/moisture/water terms; unknown residual blocks balance closure rather than becoming emission. Opening upstream burden + receipt burden = used/dispatched burden + closing carried-forward burden with no duplicate issue charge. | cp_prep_material; cp_apply_material; cp_prep_outlets; cp_apply_outlets; cp_apply_releases | reconciled physical and upstream-burden ledgers |  |
| atmospheric_reaction_intake | cure_moisture_uptake | Actual atmospheric water uptake kg = measured reaction-specific intake or actual reacted formulation quantity × evidenced formulation-specific water demand per same quantity; require actual reaction extent/state and distinguish reaction products, host/weather/supplied water. Humidity or unknown wet-to-cured residual alone is not uptake evidence. Divide actual uptake kg by L. | moisture_uptake_kg; wet_mass_kg; retained_cured_mass_kg; reaction_product_kg; actual reaction extent and formulation-specific stoichiometry/source; weather_water_kg; retained_host_water_kg; cp_apply_releases; cp_accept | actual atmospheric water intake kg per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | Expand conditional roles into distinct actual material/formulation/provider/waste/species/medium identities. Verify UUID/type/property/unit support before final dataset; unknown actual identities stay unresolved rather than adopting nearest match. | Actual supplier/receiver/species evidence and verified detail/support rows |
| representative_range | all inventory rows | Every card states an actual evidence need; collect representative repeated-job uncertainty, actual geometry/conditions and completeness. Manufacturer floor pack coverage, laboratory cure/density and labels are not site consumption or release distributions. | cp records; sika-pro3-purform-2024 |
| acceptance_quality | accepted_joint_reseal | Record actual approved geometry/tolerances, compatibility, exposure/head, full-cure method/result and required tests/defect closure/owner release. Missing actual criteria blocks final service. | cp_prepare_gate; cp_apply_gate; cp_accept |
| balance_quality | all inventory rows | Reconcile gross tare-free inputs, old retained-host removals, distinct new repair, physical stock/returns/wastes/releases and opening/closing burden. Dry solids, supplied water, retained host moisture/weather and reaction water remain distinct. | Lot/event/material balance with uncertainty and unresolved residual |
| period_quality | prep_assets; apply_assets; accepted_joint_reseal | Coverage includes all removal/application/protected-cure/test/rework periods and complete asset lives. Justify prospective remaining-life/replacement/termination/EOL source, denominator and sensitivity; unknown coverage blocks finalisation. | Job/node/period matrix and asset register/source/forecast updates |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_validation | all inventory rows | Verify irrigation canal repair function and exclusions; a water-supply/navigation/new lining or major structural reconstruction job cannot use this category. | un-cpc3-2025 |
| gate_validation | accepted_joint_reseal | Require face release, project/regional system and compatibility/exposure/head/movement approval, full required cure evidence, actual required adhesion/leakage verification, closed defects and owner acceptance before water reintroduction. Skin time/lab rate alone fails. | sika-pro3-purform-2024; sika-civil-water-joints |
| length_validation | accepted_joint_reseal; prepared_joint; qualified_joint_input | Reference equals 1 m unique accepted centreline from complete accepted joints. Positive measured L, same mapped handoff and acceptance event are required; two faces/rod/passes/rework never increase accepted L. Internal lengths remain observed. |  |
| outlet_validation | all inventory rows | Reconcile actual gross net-content receipts before returns, exclusive outlets, stock/burden bridge and old/new material states. Partial species sum cannot stand for whole uncontained fluid; total incident spill cannot be deducted again. Unknown residual is not elementary emission. |  |
| period_asset_validation | prep_assets; apply_assets; accepted_joint_reseal | All nodes/jobs/periods, failure loops and shared service drivers must be explicit with complete manufacture/maintenance/replacement/EOL coverage. Observed completed lives or evidenced prospective remaining-service scenario must support denominator/termination; missing evidence blocks final dataset. No duplicate fuel/spares/service burden. |  |
| identity_validation | all inventory rows | Final exchanges need verified exact identity and support; candidate unresolved rows do not authorise substituted generic resin/cleaner/waste/species. Preserve actual units and source scope. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for bounded accepted existing-canal joint resealing |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Actual compatible in-scope one-part polyurethane repair job with complete accepted joint and declared measurement/provider/period boundary |
| excluded_use | Universal sealant specification; new canal/lining; aqueduct/navigation/dam/pipeline work; major reconstruction; booster/two-part/preformed systems; uncured or rejected seal; service-life or avoided-replacement credit |
| required_metadata | PCR identity/version; canal irrigation function/joint map; complete L; regional system/lot; geometry/head/movement/chemistry; host/residue compatibility; preparation/full cure/tests/owner release; providers; reporting periods; asset/allocation/inclusion boundary |
| required_quality_disclosure | Actual measurement/source/date/uncertainty; unresolved identities and quantities; supplier geography/time/technology; excluded or incomplete releases; material and stock-burden balances; observed/forecast asset coverage; failed/rework events |
| update_trigger | Regional instruction/product/exposure/geometry change; new foreground quantity evidence; cure/test failure; actual provider/inclusion or asset remaining-life scenario revision; newly verified identity |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division CPC Version 3.0 explanatory notes, 30 June 2025, printed pp285–286; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 54234 irrigation repair/restoration scope and 54231 water-supply exclusion; not quantities |
| sika-civil-water-joints | handbook | Sika, Civil Engineering Joint Sealing, section 9 Water Infrastructure Joints; https://www.sika.com/en/construction/joint-sealing/civil-engineering.html | Canal water-management joint-sealing context and polyurethane route; not universal regional product/head approval |
| sika-pro3-purform-2024 | handbook | Sika (NZ) Sikaflex PRO-3 Purform Product Data Sheet, November 2024, version 03.04, document 020515010000000028, pp1–5; https://nzl.sika.com/dam/dms/nz01/t/sikaflex-pro-3-purform.pdf | One-part moisture-cure route, sound clean dry faces/old-seal removal, minor edge repair, concrete primer, closed-cell PE backing, ready-to-use and cleaning; product/local/laboratory limitations and project substrate testing. Floor geometry/pack coverage and lab skin/cure/density are not universal canal quantities or full cure acceptance. |
