---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-multi-dwelling-building-prefabricated-envelope-heat-pump-heat-recovery-ventilation-and-rooftop-photovoltaic-integrated-energy-retrofit-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Existing multi-dwelling building prefabricated envelope, heat-pump, heat-recovery ventilation and rooftop photovoltaic integrated energy retrofit services

## 1. Scope and Applicability

This category is the jointly accepted integrated energy-retrofit intervention on a named retained multi-dwelling apartment building with at least three dwellings. It combines factory-prefabricated insulated facade/window and roof systems with heat-pump heating/hot-water, heat-recovery ventilation and rooftop PV; the result is a completed service on an existing building, not a newly manufactured building or a promise of future savings. Record actual occupancy/vacating, retained/replaced services and competent project-specific design.

Do not apply this category to new/rebuilt buildings, enlarged floor space/additional storeys/dwellings, isolated facade/roof/HVAC/PV supply or maintenance, uninstalled modules or later energy operation. Survey, selective removal, interfaces, complete upstream packages, actual provider resources, commissioning/retests and defect closure are part of the intervention. Historical Annex50/Hameln evidence establishes the route, not a universal target or annual operating outcome.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-multi-dwelling-building-prefabricated-envelope-heat-pump-heat-recovery-ventilation-and-rooftop-photovoltaic-integrated-energy-retrofit-services |
| classification_refs | CPC:3.0:54112 (narrower) |
| covered_products | Complete existing apartment-building integrated prefab-envelope/heat-pump/HRV/roof-PV retrofit at joint acceptance |
| excluded_products | New whole buildings; reconstruction/enlargement; added dwellings/storeys; isolated trades or equipment; later operation |
| representative_product | Completed accepted integrated existing multi-dwelling building energy retrofit service |
| production_route | Survey/design → selective removal → prefab package delivery/site integration → integrated tests/retests/defect closure → signed whole-building retrofit handover |
| market_state | Installed and jointly accepted construction alteration service on retained structure |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed accepted integrated existing multi-dwelling building energy retrofit service |
| How much | 1 item |
| How well | Entire specified integrated retrofit complete; actual approved structural/envelope/moisture/fire/service-interface criteria and required commissioning tests satisfied, defects closed and owner/authority signoff as applicable |
| How long or cycle | Actual project from survey/design through final joint handover; report each phase/period and all attempts, with no future operating-energy service-life normalization |
| reference_flow_link | `accepted_retrofit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed accepted integrated existing multi-dwelling building energy retrofit service |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | unique existing physical building ID; at least three dwellings and actual dwelling count; retained structure and occupancy/vacating state; measured floor area and convention; retained/replaced schedule; actual prefab facade/window/roof package specifications; heat-pump/HRV/PV installed configuration; actual approved project targets and jurisdiction; survey and compatibility evidence; gross test-energy source and meter boundary; refrigerant species/precharge/topup/fates; event/phase/period coverage; tests/retests/defect closure; signed final acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_reference` | accepted_retrofit | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One reference is one complete accepted physical building retrofit. N>0 counts unique IDs, with at least three dwellings and no added dwellings; floor area/dwelling count/configuration are comparability qualifiers, never denominators or equivalent output counts. |
| `m_native` | all inventory rows | actual physical property | actual native unit | Preserve actual Count/Area/Length/Volume/Mass supply and matched-return units. Any independent mass conversion requires SKU, material state, moisture basis, density value/unit, temperature value/unit and source, with uncertainty. This mass audit and physical native view are nonadditive. Actual electrical energy, time or provider units require independent verified support; no NCV/GCV/Count substitution. |
| `m_fates` | fuel_species; refrigerant_releases; support_releases; installation_releases; preparation_releases | Mass | kg | Use actual species and receiving medium. Measured species mass OR matched activity-species factor OR actual whole-fluid release times evidenced composition/fate are alternatives. Complete species factors already include their declared basis and must not receive a second composition/fate multiplier; whole-fluid audit is nonadditive. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Named retained qualified existing apartment building, actual geometry/structure/occupancy/services survey and approved integrated retrofit design; historic assets and actual interfaces identified |
| starting_condition_role | existing_asset_intervention_start |
| product_classification_scope | CPC:3.0:54112; narrower integrated retrofit subset |
| recursive_input_rule | A same-category subcontract service may enter only as a bounded actual completed upstream service with physical native quantity and full scope; exclude this foreground job from that input and resolve overlapping nodes/resources |
| upstream_dataset_requirement | Complete applicable manufacture/materials, energy, transport, assets, service delivery, loss/waste and end-of-life coverage for each purchased package or service; explicitly collect gaps |
| disclosure | Retained baseline, all phases/periods, actual design/test gate, provider/asset coverage, stock convention, actual refrigerant and gross power fates, exclusions and uncertainty |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_start` | prepare | Start at the named existing qualified apartment building with at least three dwellings, actual structure/occupancy/services survey and approved retrofit design. Retained baseline manufacture and later operation are outside this intervention; actual disturbance, removal and incremental works are inside. | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `b_integrated` | integrate | The service owns installed envelope anchorage, air/weather/water/moisture and fire continuity with heat-pump heating/hot water, HRV distribution, rooftop PV, electrical protection and control compatibility. Factory packages and bounded providers retain complete upstream coverage; do not buy covered BOM or precharge twice. | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `b_periods` | all inventory rows | Index survey/design, selective removal, installation, commissioning/retests and final acceptance by actual event, phase and reporting period. Record opening/closing stock and asset maintenance/replacement/termination across all relevant periods; no future operating-energy, refrigerant or avoided-impact scenario enters the construction reference. |  |
| `b_support` | support | Crane/scaffold/access/tools/test kits and temporary heat/water/power shared by prepare, integrate and accept have one asset/provider/event owner and a complete all-consumer lifetime service boundary. Include all direct and provider-paid transport, tests, temporary supplies and spares once; disclose actual resource coverage, uncertainty and gaps. |  |
| `b_excluded` | accepted_retrofit | Exclude new buildings, reconstruction, extensions/additional dwellings/storeys, facade-only/roof-only/HVAC-only maintenance and uninstalled modules. No universal performance threshold, lifetime, panel size, apartment count or sensor count is imported from historical demonstrations. Net-zero annual operation is not established by construction acceptance. | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Project survey and retrofit integration design service (`survey_design`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Survey the named retained building, geometry, foundation/wall/roof capacity, thermal bridges, moisture, existing air paths, fire compartments and retained/replaced services. Record occupancy arrangements and project-specific approved targets before fabrication.

- Collection subject: Project survey and retrofit integration design service
- Flow property / unit: actual native service property / actual native unit
- Amount rule: Record the actually completed survey/design deliverables in their verified native unit, with complete provider resources and upstream scope; divide attributable job quantity by N once. Neither fee nor professional hours implies one service item.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare`

Range evidence need: actual survey/design deliverable quantity, provider native result and coverage depend on building geometry, condition and occupied work plan; obtain the signed scope and primary provider result rather than a cost/hour-to-item ratio. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_prepare.

#### Collection requirement: Actually removed historic components transferred for reuse (`historic_reusable`)

Process / prospective direction / type: `prepare` / `outputs` / `product`.

The retained building is an existing starting asset. Any removed historic window, boiler, roof or other component leaves only when actually removed and transferred; retained structure is not newly manufactured input.

- Collection subject: Actually removed historic components transferred for reuse
- Flow property / unit: actual native Count, Area, Length, Volume or Mass / matched native unit
- Amount rule: Record each real usable recovered component, actual native quantity and destination, divided by N; no negative new-material purchase and no automatic avoided-production credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare`

Range evidence need: actual removed usable component quantity/quality by SKU and recipient depends on the retained/replaced schedule; obtain measured native transfers and acceptance, without presuming a recovery rate. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_prepare.

#### Collection requirement: Removed historic materials and hazardous contents sent to actual treatment (`historic_waste`)

Process / prospective direction / type: `prepare` / `outputs` / `waste`.

Own debris and actual asbestos/lead or other hazardous findings only when present, including containment and qualified disposal; do not presume a composition or zero disturbance. Old refrigerant is booked once under integrate/cp_refrigerant. Actual required isolation and refrigerant recovery with circuit-record handoff must precede removal of the affected old HVAC equipment; node accounting never reverses physical chronology or safety entry. One event/resource owner prevents duplicate old-fluid waste.

- Collection subject: Removed historic materials and hazardous contents sent to actual treatment
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual segregated historic waste by material, hazard, wet/dry state and destination; retain treatment and transfer evidence and normalize each stream by N once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare`

Range evidence need: segregated historic waste mass, hazard composition and treatment depend on survey and actual removals; obtain weigh tickets and qualified recipient records, without a demolition-per-area factor. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_prepare.

#### Collection requirement: Measured preparation release by actual species and receiving medium (`preparation_releases`)

Process / prospective direction / type: `prepare` / `outputs` / `elementary`.

Capture actual dust or other releases caused by opening and removal, distinct from contained debris. No generic dust or hazard label supplies a species UUID or emission amount.

- Collection subject: Measured preparation release by actual species and receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Record each actual pollutant species/particle fraction and receiving air, water or soil compartment using measured mass or matched activity-specific factor; divide by N. Unknown composition is a data gap.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`

Range evidence need: actual released species/particle size and receiving-medium mass depend on the specific opening/removal event; obtain measurements or applicable event factors with uncertainty, not a generic dust percentage. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_prepare.

#### Collection requirement: Separately supplied counted installation components (`loose_count`)

Process / prospective direction / type: `integrate` / `inputs` / `product`.

Identify every actually required anchorage, flashing, air/weather/fire interface, distribution, electrical protection, control and connection item. Counts, metres, volumes and masses are separate ledgers, not additive views of the same purchase.

- Collection subject: Separately supplied counted installation components
- Flow property / unit: Count / item
- Amount rule: Apply S/N by actual SKU in its native unit to actual additional components outside every package/provider scope; retain waste and failed installations in S and never substitute installed activity for external supply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual separately supplied supports/controls/connection item counts depend on the uncovered as-built bill of materials; obtain native SKU stock and matching returns, without counting package-covered components again. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Separately supplied pipes cables and linear joints (`loose_length`)

Process / prospective direction / type: `integrate` / `inputs` / `product`.

Identify every actually required anchorage, flashing, air/weather/fire interface, distribution, electrical protection, control and connection item. Counts, metres, volumes and masses are separate ledgers, not additive views of the same purchase.

- Collection subject: Separately supplied pipes cables and linear joints
- Flow property / unit: Length / m
- Amount rule: Apply S/N by actual SKU in its native unit to actual additional components outside every package/provider scope; retain waste and failed installations in S and never substitute installed activity for external supply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual separately supplied pipe/cable/joint lengths and cut waste depend on surveyed routing; obtain native measured supply/returns and internal cut records, not installed metres alone. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Separately supplied volume-measured installation materials (`loose_volume`)

Process / prospective direction / type: `integrate` / `inputs` / `product`.

Identify every actually required anchorage, flashing, air/weather/fire interface, distribution, electrical protection, control and connection item. Counts, metres, volumes and masses are separate ledgers, not additive views of the same purchase.

- Collection subject: Separately supplied volume-measured installation materials
- Flow property / unit: Volume / m3
- Amount rule: Apply S/N by actual SKU in its native unit to actual additional components outside every package/provider scope; retain waste and failed installations in S and never substitute installed activity for external supply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual volume-measured materials, state and usable returns depend on actual SKU/packaging and installation; obtain native receipts/stock, with density/moisture/temperature only for a justified independent conversion. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Separately supplied mass-measured fasteners sealants and materials (`loose_mass`)

Process / prospective direction / type: `integrate` / `inputs` / `product`.

Identify every actually required anchorage, flashing, air/weather/fire interface, distribution, electrical protection, control and connection item. Counts, metres, volumes and masses are separate ledgers, not additive views of the same purchase.

- Collection subject: Separately supplied mass-measured fasteners sealants and materials
- Flow property / unit: Mass / kg
- Amount rule: Apply S/N by actual SKU in its native unit to actual additional components outside every package/provider scope; retain waste and failed installations in S and never substitute installed activity for external supply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual separate fastener/sealant/material mass, tare, curing and residue depend on uncovered SKU scope; obtain stock and fate measurements without a generic kilograms-per-facade rule. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Actual separately supplied field refrigerant (`field_refrigerant`)

Process / prospective direction / type: `integrate` / `inputs` / `product`.

Record actual unit/circuit ID, refrigerant specification and factory charge, opening/closing cylinders, external receipts and usable returns, measured transferred charge and recovery. No default leakage percentage or future-use replenishment.

- Collection subject: Actual separately supplied field refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Use the actual species/mixture stock ledger S/N for field top-up or replacement only; factory precharge remains inside its equipment input and is not bought again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: actual field top-up/replacement mass depends on named circuit and charge records; obtain tare-corrected cylinder stock and transfers, without re-purchasing factory precharge or imposing a leak fraction. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_refrigerant.

#### Collection requirement: Usable outward returns of new packages and installation materials (`installation_returns`)

Process / prospective direction / type: `integrate` / `outputs` / `product`.

This umbrella instantiates distinct native units without forcing packages or liquids into mass; internal reissue and returned items entering rework are transfers, not new purchases.

- Collection subject: Usable outward returns of new packages and installation materials
- Flow property / unit: actual native Count, Area, Length, Volume or Mass / matched native unit
- Amount rule: Record actual usable outward returns by exact matched input SKU, unit, condition and ownership. Use either gross supply with this outlet or consumed-only supply subtracting this return once; never both credits; closing stock is not a return.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual usable outward-return quantity by matched SKU/native unit and condition depends on recipient acceptance; obtain transfer receipts, with no universal return rate and no closing-stock-as-return assumption. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Recovered usable refrigerant transferred to a named recipient (`recovered_refrigerant`)

Process / prospective direction / type: `integrate` / `outputs` / `product`.

Distinguish historic contained charge and new top-up origins; contained recovery is a product only when its actual usable state and recipient support that status.

- Collection subject: Recovered usable refrigerant transferred to a named recipient
- Flow property / unit: Mass / kg
- Amount rule: Measure each actual recovered refrigerant/mixture transfer mass and quality, receiver and circuit origin; divide by N, with no avoided virgin-refrigerant credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: actual usable recovered mass/quality and historic/new origin depend on circuit-specific recovery and recipient evidence; obtain cylinder tare and acceptance without a generic recovery efficiency. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_refrigerant.

#### Collection requirement: Contained refrigerant waste sent to actual treatment (`contained_refrigerant_waste`)

Process / prospective direction / type: `integrate` / `outputs` / `waste`.

Include actual historic and new fluid waste with distinct origins; no generic refrigerant mixture is an elementary emission.

- Collection subject: Contained refrigerant waste sent to actual treatment
- Flow property / unit: Mass / kg
- Amount rule: Measure actual contained unreusable fluid mass, container tare, composition and treatment destination separately from usable recovery and uncontained release; normalize by N.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: actual contained unreusable refrigerant mass/composition and destination depend on treatment transfer; obtain tare-corrected containment and treatment records, separate from useful recovery and uncontained release. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_refrigerant.

#### Collection requirement: New installation rejects packaging and residues sent to treatment (`installation_waste`)

Process / prospective direction / type: `integrate` / `outputs` / `waste`.

Link rejected installation at integrate back to its producing attempt and rework event; if repaired in place, no fictitious waste exit. Contained refrigerant waste is outside this card.

- Collection subject: New installation rejects packaging and residues sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated nonreturned rejects, damaged modules, offcuts, packaging, unused cured material and actual destinations; divide by N, retaining upstream supply burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual nonreturned installation reject/packaging/offcut mass and rework exits depend on each failed attempt; obtain segregated weights and treatment receipts without a universal module-loss rate. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Actual refrigerant species released to the recorded receiving medium (`refrigerant_releases`)

Process / prospective direction / type: `integrate` / `outputs` / `elementary`.

Whole-fluid loss is a nonadditive audit view, not an additional elementary exchange; SDS hazard statements and factory precharge do not establish a release.

- Collection subject: Actual refrigerant species released to the recorded receiving medium
- Flow property / unit: Mass / kg
- Amount rule: For each actual species and receiving medium use measured species mass, valid matched activity-times-species-factor, or measured whole-fluid release times evidenced mass composition and fate. Normalize by N; do not multiply a complete species factor by composition/fate again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigerant`

Range evidence need: actual refrigerant species and receiving-medium mass need event measurement or matched activity factor, or measured whole-fluid loss and evidenced mixture/fate; obtain those operands without a default leak rate. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_refrigerant.

#### Collection requirement: Actual installation species releases excluding refrigerant (`installation_releases`)

Process / prospective direction / type: `integrate` / `outputs` / `elementary`.

Do not treat purchased whole sealant, recovered fluid or contained residue as an emission. Keep any emitted species masses separate from their nonadditive parent-fluid audit.

- Collection subject: Actual installation species releases excluding refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record each actual sealant/cleaner constituent or particle release and its receiving medium using measured mass or valid matching activity factor/composition/fate; normalize by N. No default VOC fraction.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packages`

Range evidence need: actual non-refrigerant constituent/particle release depends on the used formulation and event fate; obtain species/medium measurement or valid factors/composition/fate, not SDS hazard limits as emission rates. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Collection requirement: Actually completed bounded specialist work and temporary services (`provider_work`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Own occupied-building temporary heating/hot water, safeguarding and actual lift/scaffold/installation/test services only once. Invoice price or hours alone cannot become Count; provider-paid fuel and tests are not free resources.

- Collection subject: Actually completed bounded specialist work and temporary services
- Flow property / unit: actual native service property / actual native unit
- Amount rule: For each provider record actual physical completed result, native unit and full included manufacturing/material/energy/transport/asset/waste scope, then quantity/N. Explicitly collect every uncovered resource; missing scope blocks a final dataset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: actual completed physical provider service quantity and uncovered resources depend on the signed scope; obtain primary native-result and complete resource records rather than a fee/hour equivalence. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_provider.

#### Collection requirement: Actual freight service for packages equipment returns and waste (`freight`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Include actual delivery, equipment mobilization/demobilization, outward usable returns and waste transport; allocate shared loads physically and include empty legs in the service dataset or explicit vehicle activity, never invent positive cargo for an empty leg.

- Collection subject: Actual freight service for packages equipment returns and waste
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum attributable actual load_kg times distance_km for each leg and divide by N; preserve mode, load, route, empty-return coverage and upstream transport scope. Do not duplicate legs included in provider or package data.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_freight`

Range evidence need: actual kg*km and empty-return coverage depend on each measured load/route/mode and shared-load allocation; obtain leg-level load/distance records and service scope without a universal haul distance. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_freight.

#### Collection requirement: Lifecycle-complete shared asset service in its actual driver unit (`asset_native_service`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Hours are acceptable only when actual service identity/unit support and complete burden per hour are verified. An operating-fuel-only rental factor does not cover an asset lifecycle; obtain missing burdens or keep the dataset incomplete.

- Collection subject: Lifecycle-complete shared asset service in its actual driver unit
- Flow property / unit: actual native service property / actual native driver unit
- Amount rule: Only with a verified lifecycle-complete provider burden per compatible driver unit, record job_driver/N in that same native unit; its burden denominator is the same driver unit and already includes full-life manufacture, maintenance, replacement and end-of-life. Do not divide by full_life_driver again or use asset_equivalent too.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: actual job driver and complete burden per identical native driver unit require provider lifetime scope/support; obtain all-consumer history/remainder and denominator evidence, without converting hours or price into Count. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_assets.

#### Collection requirement: Actual fuel externally supplied for attributed construction activity (`fuel_supply`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Include actual generators, heaters, mobile plant and provider equipment outside covered service scopes. Supply retains nonreturned waste and uncontained loss; do not infer all apparent missing fuel was burned.

- Collection subject: Actual fuel externally supplied for attributed construction activity
- Flow property / unit: actual native Mass or Volume / kg or m3
- Amount rule: Record upstream fuel S/N by actual fuel/specification; retain native mass or volume supply from the actual SKU. Only an independently required conversion needs matched density/state/temperature and unit evidence. Keep purchased fuel distinct from measured burned activity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

Range evidence need: actual native fuel supply and fates depend on net-tare stock and equipment records; obtain measured burn or audited complete disjoint fates, density/state/temperature only where needed, without residual-inferred combustion. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_fuel.

#### Collection requirement: Actual temporary spares protection and test consumables (`support_materials`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Use distinct native ledgers and documented density, material state, moisture and temperature only if an independent mass view is needed; do not add the mass view to native supply.

- Collection subject: Actual temporary spares protection and test consumables
- Flow property / unit: actual native Count, Area, Length, Volume or Mass / matched native unit
- Amount rule: Record actual additional temporary stock S/N by SKU and native unit, including real testing/cleaning fluids and spare replacement; exclude items already inside package, asset or provider complete scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supportstock`

Range evidence need: actual temporary protection/spares/test-fluid native quantities depend on uncovered provider/asset scope and SKU stock; obtain actual receipts/closing/returns and replacement event evidence without universal test-consumable rates. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_supportstock.

#### Collection requirement: Actual usable outward temporary-material and unburned-fuel returns (`support_returns`)

Process / prospective direction / type: `support` / `outputs` / `product`.

Reconcile fuel return identifiers with cp_fuel without creating a second physical transfer; no avoided-production credit from an unused item or fuel.

- Collection subject: Actual usable outward temporary-material and unburned-fuel returns
- Flow property / unit: actual native Count, Area, Length, Volume or Mass / matched native unit
- Amount rule: Record each actual usable outward return with matched SKU, fuel specification, native unit and receipt; gross-with-outlets or consumed-only subtraction exactly once. Closing stock and internally recovered material are not outward returns.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supportstock`

Range evidence need: actual usable outward temporary/fuel returns need matching native SKU/specification and recipient evidence; obtain real transfer IDs and reconcile cp_fuel without a default return fraction. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_supportstock.

#### Collection requirement: Actual temporary consumable packaging and nonburned-fuel waste (`support_waste`)

Process / prospective direction / type: `support` / `outputs` / `waste`.

Recovered spills held at closing are closing inventory, not waste as well. Containment, recovery, disposal and uncontained emission are independent fates tied to the same event.

- Collection subject: Actual temporary consumable packaging and nonburned-fuel waste
- Flow property / unit: Mass / kg
- Amount rule: Record actual segregated waste mass, state, origin, treatment and transport, including nonburned fuel waste; each quantity/N once. Do not duplicate installation waste, contained refrigerant or wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supportstock`

Range evidence need: actual temporary consumable/packaging/nonburned-fuel waste mass and treatment depend on segregated event fates; obtain weights and recipient scope, excluding recovered closing inventory and already-owned waste. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_supportstock.

#### Collection requirement: Actual test flushing cleaning and temporary wastewater transferred (`wastewater`)

Process / prospective direction / type: `support` / `outputs` / `waste`.

Whole wastewater volume is a waste stream, not an additional pollutant mass or water-supply subtraction. Retained circulating system water does not count as discharged unless it actually crosses the boundary.

- Collection subject: Actual test flushing cleaning and temporary wastewater transferred
- Flow property / unit: Volume / m3
- Amount rule: Meter actual wastewater by quality, receiving treatment and contamination, quantity/N; separate treated outlet from direct elementary waterborne species. Retain actual treatment chemicals and resources if not included in the purchased treatment service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: actual flushing/test/cleaning wastewater volume, quality and recipient depend on event measurement and retained circulation; obtain measured discharge and treatment scope without equating water supply to effluent. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_water.

#### Collection requirement: Actual fuel-combustion species to their receiving medium (`fuel_species`)

Process / prospective direction / type: `support` / `outputs` / `elementary`.

Returned, nonburned waste, uncontained loss and carried stock are mutually exclusive with burn. Total spill is audit-only; complete species factors are not multiplied by composition or fate again.

- Collection subject: Actual fuel-combustion species to their receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Use actual measured burned fuel or audited complete disjoint native-unit fates with uncertainty and unknown-loss investigation, times a valid actual-fuel/equipment species factor, or measured species mass; normalize by N. Do not infer burn as a balance residual.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`

Range evidence need: actual combustion species mass needs measured burned activity or audited complete disjoint fates and actual fuel/equipment factors, or species measurement; obtain raw factor units/basis and unknown-loss investigation, not an assumed burn fraction. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_fuel.

#### Collection requirement: Actual uncontained support-fluid or dust species releases (`support_releases`)

Process / prospective direction / type: `support` / `outputs` / `elementary`.

Record actual fuel spills, cleaners, test fluids or dust only when released; do not invent species from safety sheets or label a recovered spill as an elementary release. Combustion and refrigerant releases have separate cards.

- Collection subject: Actual uncontained support-fluid or dust species releases
- Flow property / unit: Mass / kg
- Amount rule: Use actual measured species mass, valid matching activity-species factor, or measured whole-fluid release times evidenced species mass composition and receiving-medium fate; divide by N once. Whole fluid is nonadditive audit only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_supportstock`

Range evidence need: actual uncontained support-fluid/dust species and receiving-medium mass need event measurement or valid matched factor/composition/fate evidence; obtain true released mass separately from recovered/contained/closing amounts, not hazard declarations. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_supportstock.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Existing-building survey and independent selective removal | required | Always; actual removal follows retained/replaced schedule, with explicit zero where no item is removed. | Retained-building starting condition, survey/design, separately accountable selective removal and actual source-to-usable-recipient or qualified waste-treatment handoff; recorded hazard clearance releases the retained structure to integrate. This responsibility ends before integration, not at final retrofit acceptance, and does not perform waste treatment. | per reference flow |
| `integrate` | Prefab envelope and building-services integration | required | Always; actual item ledger defines zero, one or multiple concrete exchanges per role. | Join insulated facade/windows and roof, heat pump/hot water, HRV, roof PV, distribution, electrical protection and controls to retained structure; rework loops remain here until conforming. | per reference flow |
| `support` | Project-owned logistics temporary utilities and shared resources | required | Always; only actually incurred resources and individually documented absent roles. | One owner for direct/provider/rental freight, scaffold/lift/tools, fuel, gross test power/water and fates across prepare, integrate and accept. | per reference flow |
| `accept` | Integrated commissioning defect closure and handover | required | Always; N follows actual complete physical joint acceptance. LCA quantity/identity/scope gaps block dataset finalization without reversing a physically accepted building. | Actual required blower-door/ventilation balance, heat-pump/hydronic, electrical/PV protection/control tests and signed owner acceptance; failed tests return to integrate and support resources remain in numerator. | per reference flow |

### Process: Existing-building survey and independent selective removal (`prepare`)

Retained-building starting condition, survey/design, separately accountable selective removal and actual source-to-usable-recipient or qualified waste-treatment handoff; recorded hazard clearance releases the retained structure to integrate. This responsibility ends before integration, not at final retrofit acceptance, and does not perform waste treatment.

#### Inputs

##### Product flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Prefab envelope and building-services integration (`integrate`)

Join insulated facade/windows and roof, heat pump/hot water, HRV, roof PV, distribution, electrical protection and controls to retained structure; rework loops remain here until conforming.

#### Inputs

##### Product flows

###### Factory-prefabricated insulated facade and window packages (`prefab_facade`)

Use actual supplier production gate, specification, installed configuration and complete upstream package coverage. Where a SKU is sold under another native unit, instantiate that actual unit and verify support rather than forcing the representative card unit.

- Selected flow: Factory-prefabricated insulated facade and window packages
- Flow property / unit: Area / m2
- Amount rule: Apply the actual SKU stock ledger to supplied facade packages in the stated native unit; use S/N once. State included windows, insulation, ducts, cables, coatings, supports, controls and precharge; exclude their already-covered constituent purchases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual facade/window package supplied and returned area, opening convention, package constituents and installation rejects depend on surveyed elevations and actual SKU; obtain net-tare native delivery, stock, return and defect records. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

###### Factory-prefabricated insulated roof packages (`prefab_roof`)

Use actual supplier production gate, specification, installed configuration and complete upstream package coverage. Where a SKU is sold under another native unit, instantiate that actual unit and verify support rather than forcing the representative card unit.

- Selected flow: Factory-prefabricated insulated roof packages
- Flow property / unit: Area / m2
- Amount rule: Apply the actual SKU stock ledger to supplied roof packages in the stated native unit; use S/N once. State included windows, insulation, ducts, cables, coatings, supports, controls and precharge; exclude their already-covered constituent purchases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual prefab roof supplied/returned area and installed net-versus-lap convention depend on surveyed roof geometry and actual SKU; obtain package delivery/stock and waste/rework evidence without multiplying the service by roof area. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

###### Factory-complete heat-pump heating and hot-water equipment (`heat_pump`)

Use actual supplier production gate, specification, installed configuration and complete upstream package coverage. Where a SKU is sold under another native unit, instantiate that actual unit and verify support rather than forcing the representative card unit.

- Selected flow: Factory-complete heat-pump heating and hot-water equipment
- Flow property / unit: Count / item
- Amount rule: Apply the actual SKU stock ledger to supplied heatpump packages in the stated native unit; use S/N once. State included windows, insulation, ducts, cables, coatings, supports, controls and precharge; exclude their already-covered constituent purchases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual heat-pump/hot-water equipment count, configuration and included factory refrigerant depend on the approved design; obtain equipment IDs, complete package scope and external stock, not a generic pumps-per-dwelling rate. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

###### Factory-complete heat-recovery ventilation equipment (`hrv`)

Use actual supplier production gate, specification, installed configuration and complete upstream package coverage. Where a SKU is sold under another native unit, instantiate that actual unit and verify support rather than forcing the representative card unit.

- Selected flow: Factory-complete heat-recovery ventilation equipment
- Flow property / unit: Count / item
- Amount rule: Apply the actual SKU stock ledger to supplied hrv packages in the stated native unit; use S/N once. State included windows, insulation, ducts, cables, coatings, supports, controls and precharge; exclude their already-covered constituent purchases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual HRV equipment counts, rated configuration and included duct/control boundaries depend on the balanced ventilation design; obtain actual equipment/package IDs and commissioned scope, not a universal air-change or per-dwelling count. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

###### Factory-complete rooftop photovoltaic and conversion equipment (`pv_equipment`)

Use actual supplier production gate, specification, installed configuration and complete upstream package coverage. Where a SKU is sold under another native unit, instantiate that actual unit and verify support rather than forcing the representative card unit.

- Selected flow: Factory-complete rooftop photovoltaic and conversion equipment
- Flow property / unit: Count / item
- Amount rule: Apply the actual SKU stock ledger to supplied pv packages in the stated native unit; use S/N once. State included windows, insulation, ducts, cables, coatings, supports, controls and precharge; exclude their already-covered constituent purchases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packages`

Range evidence need: actual PV/inverter/protection package counts and included area/capacity depend on the roof/load/electrical design; obtain actual equipment IDs and package ledgers, without converting kWp or annual kWh into service counts. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_packages.

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Project-owned logistics temporary utilities and shared resources (`support`)

One owner for direct/provider/rental freight, scaffold/lift/tools, fuel, gross test power/water and fates across prepare, integrate and accept.

#### Inputs

##### Product flows

###### Attributed shared temporary asset equivalents (`asset_equivalent`)

Select this view or asset_native_service for each crane, scaffold, access platform, tool, test kit or temporary unit, never both. Full life is observed completed life or observed history plus evidenced remaining use, replacements, termination and end-of-life, with uncertainty, sensitivity and updates; no invented life.

- Selected flow: Attributed shared temporary asset equivalents
- Flow property / unit: Count / item
- Amount rule: Only when the input is a lifecycle-complete asset burden per asset, use (job_driver/full_life_driver)/N item; job_driver and full_life_driver share the same physical unit. Include manufacture, maintenance, replacements and end-of-life across all jobs/nodes/periods.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: the asset-equivalent fraction depends on compatible job/full-life driver records across all consumers and observed/evidenced lifetime; obtain manufacture, maintenance, replacement, termination and end-of-life plus uncertainty/sensitivity, without a default life. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_assets.

###### Gross construction and commissioning electricity imports (`electricity_import`)

Separate grid import, retained on-site generation consumed, test load/circulation and losses using a reconciled meter boundary. Never net exports or future operational savings against imported electricity.

- Selected flow: Gross construction and commissioning electricity imports
- Flow property / unit: Energy / kWh
- Amount rule: Meter gross imported electricity by actual source and interval for temporary works, tools, heat-pump/HRV/hydronic/PV tests, failed tests and retests, then divide attributable kWh by N. Verify actual electrical-energy support independently; NCV/GCV is not a substitute.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: gross source-resolved imported test/temporary kWh, retained-generation consumption and circulation/loss need interval meters, actual test IDs and ownership; obtain those records without net-billing or future-saving proxies. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_power.

###### Actual temporary and commissioning water supply (`water_supply`)

Do not treat retained hydronic contents as new water manufacture. Separate added water, recovered water, carried inventory and actual discharge with state/quality evidence.

- Selected flow: Actual temporary and commissioning water supply
- Flow property / unit: Volume / m3
- Amount rule: Meter external actual supply by source, grade and process use including flushing, testing and cleaning; record recirculation as internal activity, not another supply; quantity/N once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: actual external supply, retained hydronic contents and circulation depend on meter boundary and water grade; obtain event readings and stock/recovery evidence without a water-per-dwelling assumption. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_water.

#### Outputs

##### Product flows

###### Gross commissioning electricity exported at the actual boundary (`electricity_export`)

Rooftop PV equipment belongs to the retrofit package; only actual pre-handover test flows are within this service. Annual generation and later household demand are separate operating scenarios.

- Selected flow: Gross commissioning electricity exported at the actual boundary
- Flow property / unit: Energy / kWh
- Amount rule: Meter actual exported commissioning electricity by interval, source and recipient, separately from imports, internal circulation and retained-generation baseline; quantity/N, with declared treatment and no automatic displacement credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: actual gross exported commissioning kWh and recipient/source depend on interval meters and retained-generation baseline; obtain reconciled boundary evidence without assuming PV capacity implies output or avoided grid power. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_power.

##### Waste flows

##### Elementary flows

### Process: Integrated commissioning defect closure and handover (`accept`)

Actual required blower-door/ventilation balance, heat-pump/hydronic, electrical/PV protection/control tests and signed owner acceptance; failed tests return to integrate and support resources remain in numerator.

#### Outputs

##### Product flows

###### Completed accepted integrated existing multi-dwelling building energy retrofit service (`accepted_retrofit`)

Count N>0 unique physical building retrofit IDs only after joint final acceptance, commissioned envelope/heat-pump/HRV/PV interfaces, required tests, retests and defect closure. Apartments, sections, panels, floors, floor area, kWp, kWh and test attempts are not additional reference outputs.

- Selected flow: Completed accepted integrated existing multi-dwelling building energy retrofit service
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accept`

Range evidence need: 1 item is only the reference normalization, not an observed yield interval; collect actual N unique accepted building IDs, complete installed configuration and signed gate evidence, excluding unfinished buildings and repeated test attempts. No transferable numeric interval is established by the available historical route evidence; retain actual observations and uncertainty through cp_accept.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_reference` | all inventory rows | Aggregate actual attributable resources from all successful and failed attempts and preparation into the job numerator; divide by N unique finally accepted building retrofit IDs exactly once. Retests, dwellings, panels and shared phase events never increase N. Missing final acceptance does not erase incurred burdens. |  |
| `a_stock` | all inventory rows | For each SKU/native unit use S = attributed opening stock + external net-tare gross receipts - carried closing stock. Choose declared gross-with-outlets OR consumed-only subtracting actual matched usable outward returns once. Internal issue/installation is not supply; closing is not outward return. Nonreturned waste/loss retains upstream burden. Historic removals cannot be negative purchases. |  |
| `a_assets` | asset_equivalent; asset_native_service | One asset ledger spans all consumers/jobs/nodes/periods, manufacture, maintenance, replacement and end-of-life. Compatible actual job_driver/full_life_driver gives asset-equivalent item, then /N; alternatively actual job_driver/N native service units multiply a lifecycle-complete burden per identical driver unit. Never combine views, divide by life again in service view or normalize twice. Observed life or observed history plus evidenced remainder/replacement/termination/end-of-life needs sources, uncertainty, sensitivity and update triggers. |  |
| `a_rejects` | integrate | Tie failed installations and retests to the producing attempt and integrate-to-integrate rework loop. Use actual repaired-in-place, usable outward return, recovery, downgrade or waste destination. Rework adds its real resources but no duplicate purchase or accepted output; unclosed defects cannot enter N. |  |
| `a_outlets` | all outputs | Record usable historic recovery, new outward returns and actual test electricity export with recipient and declared treatment, distinct from intended accepted service; no automatic avoided production, fuel, energy, disposal or future saving credit. Recycled-content inputs require actual SKU coverage, never inferred from recovered outlets. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | `prepare` | Starting condition, survey and historic removal | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; survey_id; occupancy_state; dwelling_count; floor_area; floor_area_unit; floor_area_convention; structural_capacity_evidence; thermal_bridge_record; moisture_record; fire_interface_record; air_path_record; retained_replaced_schedule; hazardous_clearance; retained_structure_release_id; integration_recipient; design_target_id; provider_deliverable; native_quantity; native_unit; material_state; hazard; recipient; waste_mass; species; receiving_medium; species_mass; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; source_id | Survey and document qualified existing structure/services with competent approved design; measure actual physical provider deliverables and removed materials by native unit/weighing and trace actual reuse/treatment recipient; measure actual species releases or use valid matched factors with original operands. Aggregation detail: Aggregate attributable actual quantities per reference flow; each job quantity divided by N once; historic baseline is not new supply. | actual native unit; kg | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Signed survey/design, calibrated records, recipient and hazardous-handling evidence, direct-release/factor applicability. |
| `cp_packages` | `integrate` | Package and separate installation stock, returns, rejects and releases | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; sku; specification; unit; native_quantity; activity; activity_unit; opening_attributed; external_gross_receipts; container_tare; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt; ledger_view; package_scope; precharge_included; provider_scope; reject_id; rework_event; destination; waste_mass; density; density_unit; material_state; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; species; receiving_medium; species_mass; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; source_id | Use actual purchase/delivery net-tare, opening/closing stock, SKU specifications and installed as-built records; document package constituents and covered upstream scope before adding any loose input. Match each usable outward return to its input and each reject/rework exit to its attempt. Collect actual species/medium and conversion operands only where needed. Aggregation detail: Per reference flow use S/N for each SKU/native unit with one declared return convention; do not sum nonadditive views or normalize twice. | item; m2; m; m3; kg | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Supplier production gate/BOM scope, calibrated quantities, return receipts, rejection and fate evidence. |
| `cp_refrigerant` | `integrate` | Circuit-specific refrigerant stock and disjoint fates | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; circuit_id; equipment_id; refrigerant_specification; historic_charge; factory_precharge; cylinder_id; cylinder_tare; opening_attributed; external_receipts; carried_closing; usable_return; topup_measured; circuit_closing; recovered_usable_mass; contained_waste_mass; whole_fluid_release_mass; species; receiving_medium; measured_species_mass; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; recipient; treatment_id; uncertainty; source_id | Weigh cylinders and actual transfers with tare; distinguish historic charge, factory-precharged equipment and separately supplied field top-up. Complete required old-equipment isolation/recovery and circuit-record handoff before the affected prepare removal; this integrate ledger keeps the true event phase/time with one owner, not a later physical recovery assumption. Link each circuit event to retained charge, usable recovery, contained waste and actual release; obtain actual species, medium and measured/factor/composition/fate evidence without default leakage. Aggregation detail: Per reference flow field stock S/N and each independent actual fate/N once; factory precharge is inside equipment, and whole-fluid audit is nonadditive to species. | kg | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Calibrated scales, charge sheets, recipient/treatment documents, mixture and factor basis plus uncertainty. |
| `cp_provider` | `support` | Provider scope and native completed result | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; provider_id; contract_scope; native_result; native_quantity; native_unit; verified_service_id; verified_property_id; verified_unit_group_id; included_materials; included_energy; included_transport; included_assets; included_tests; included_waste; uncovered_resources; overlap_owner; allocation_driver; allocation_source; uncertainty; source_id | Obtain primary provider records for actual completed physical results and complete lifecycle/upstream scope, reconcile every direct and provider-paid resource with one owner; missing coverage must be collected rather than inferred from cost or hours. Aggregation detail: Per reference flow attributable actual physical service quantity/N once, or uncovered individual resources in their own ledgers, without overlap. | verified actual native service unit | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Signed scope matrix, physical completion, native unit support, uncovered-resource closure. |
| `cp_freight` | `support` | Actual transport legs and empty returns | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; leg_id; shipment_id; mode; vehicle_id; load_kg; load_mass_unit; distance_km; distance_unit; empty_return_activity; empty_activity_unit; shared_load_driver; driver_unit; provider_scope; included_legs; uncovered_activity; upstream_dataset_scope; uncertainty; source_id | Retain actual load and travel records, route and delivery/return/waste recipient; reconcile complete transport upstream and empty-return inclusion, using compatible physical allocation of shared loads. Aggregation detail: Per reference flow sum attributable load_kg*distance_km/N once; empty legs need explicit service coverage or separate vehicle activity and are not fictitious cargo work. | kg*km | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Weighbridge/load records, measured routes, provider scope, conversion and allocation evidence. |
| `cp_assets` | `support` | All-consumer temporary asset lifecycle and one native view | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; asset_id; provider_id; consumer_jobs; consumer_nodes; consumer_periods; service_start; service_end; attribution_view; job_driver; driver_unit; full_life_driver; full_life_driver_unit; observed_history; evidenced_remaining_use; manufacture_scope; maintenance_events; replacement_events; termination_event; end_of_life_scope; lifecycle_burden; burden_unit; burden_denominator_unit; verified_service_id; verified_property_id; verified_unit_group_id; evidence_source; uncertainty; sensitivity; update_trigger | Build complete all-consumer lifecycle ledgers from actual asset/provider records. Resolve observed completed life or observed history plus evidenced remainder, maintenance, replacements, termination and end-of-life; use a physically compatible driver and verify its native service support. Select exactly one quantity/burden view per asset. Aggregation detail: Per reference flow asset-equivalent=(job_driver/full_life_driver)/N with per-asset lifecycle burden OR native-service=job_driver/N with complete burden per same driver unit; do not combine or divide again. | item or verified actual native driver unit | Each actual event, stock interval and final close | Complete asset lifetime across ALL consumers/jobs/nodes/periods: observed history plus evidenced remaining use, maintenance, replacement, termination and end-of-life | Named job/site/building and attributable provider/asset scopes | per reference flow | Complete manufacture/maintenance/replacement/end-of-life coverage, denominator evidence, uncertainty/sensitivity and live update requirement. |
| `cp_power` | `support` | Gross temporary and integrated test electricity | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; meter_id; source_id; recipient_id; electricity_origin; baseline_retained_generation; interval_start; interval_end; import_start; import_end; export_start; export_end; meter_multiplier; electricity_unit; circulation; test_load; loss; test_id; failed_test_id; retest_id; attribution_driver; attribution_unit; included_provider_scope; uncertainty; verification_record | Use source-resolved import/export meters, not net billing. Log actual test run/failed/retest loads, retained PV/generator baseline and internal circulation/loss boundaries; separate production factors and provider coverage. Independently verify actual electrical-energy property/unit support. Aggregation detail: Per reference flow actual gross attributable imports/N and exports/N separately; no future savings or netting and no duplicate internal circulation. | kWh | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Calibrated meter intervals, energy reconciliation, native support and source/provider ownership. |
| `cp_water` | `support` | Supply, hydronic contents and wastewater fates | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; source_id; water_grade; meter_id; opening_contents; external_supply; natural_water_resource_id; natural_abstraction_quantity; natural_abstraction_unit; environment_discharge_quantity; environment_discharge_unit; receiving_water_medium; water_property_id; water_unit_group_id; closing_contents; circulation; recovered_quantity; discharge_quantity; quantity_unit; material_state; temperature; temperature_unit; quality_analysis; receiving_treatment; included_treatment_scope; direct_species; direct_medium; species_mass; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; evidence_id | Meter actual external water, retained circuit contents, recovery and wastewater destination by actual event; distinguish internal recirculation and quality. Obtain direct species/medium evidence separately when present; no discharge assumed from supply. Aggregation detail: Per reference flow each independent actual supply/wastewater quantity/N once, with contained and direct-release boundaries separate. | m3; kg actual species when present | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Calibrated readings, circuit and discharge balance, treatment acceptance and contaminant quality records. |
| `cp_fuel` | `support` | Fuel supply, measured burn and mutually exclusive fates | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; fuel_specification; equipment_id; supplier_scope; native_unit; opening_attributed; external_receipts; tare; carried_closing; usable_return; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing; measured_burn; complete_fates_audit; unknown_loss_investigation; density; density_unit; density_source; conversion_value; conversion_unit; conversion_source; material_state; moisture; moisture_basis; temperature; temperature_unit; species; receiving_medium; measured_species_mass; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; evidence_id | Obtain actual fuel net-tare stock and calibrated burn records or audited complete disjoint native-unit fates; investigate unknown losses rather than label a residual as burn. Reconcile returned, nonburned waste, loss and carried stock, and actual equipment/fuel-specific species factors or measurement. If an independent Mass fuel/waste/activity view is required from native Volume, retain the measured density value/unit/source, state/moisture/temperature and temperature_unit, and conversion value/unit/source; this Mass view is nonadditive to the native ledger. Aggregation detail: Per reference flow supplied S/N once and independent actual species/N once; measured burned activity is not another fuel purchase and total-spill audit is nonadditive. | kg or actual native fuel unit; kg species | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Calibrated burn/stock, complete fates and unknown-loss audit, factor applicability and uncertainty. |
| `cp_supportstock` | `support` | Temporary materials, usable returns, waste and direct releases | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; sku; specification; unit; native_quantity; activity; activity_unit; opening_attributed; external_gross_receipts; container_tare; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt; ledger_view; package_scope; precharge_included; provider_scope; reject_id; rework_event; destination; waste_mass; density; density_unit; material_state; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; species; receiving_medium; species_mass; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; source_id; whole_fluid_release_mass; recovered_closing; total_spill_audit; fuel_return_transfer_id | Reconcile actual stock/native receipts and actual usable outward returns, spares, test/cleaning materials, contained waste and direct species/medium fates. Fuel outward return and nonburned waste reference cp_fuel event IDs once; full fluid and species audit views are nonadditive. Aggregation detail: Per reference flow S/N with one return convention and each independent actual waste/release/N once; no duplicate package/provider/asset coverage. | actual native unit; kg species | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Net-tare stock, receipts, treatment destinations and actual species/factor/composition/fate evidence. |
| `cp_accept` | `accept` | Unique final building retrofit gate | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; accepted_building_ids; N; dwelling_count; floor_area; floor_area_unit; floor_area_convention; configuration; design_target_id; asbuilt_envelope; anchorage_record; weather_air_water_fire_interfaces; blowerdoor_required_result; airflow_balance; heatpump_hydronic_result; electrical_PV_protection_control_result; failed_test_ids; retest_ids; defect_closure; owner_signoff; authority_signoff_if_applicable; acceptance_date; evidence_id | Reconcile unique retained building IDs against completed integrated scope, as-built interfaces, actual approved tests/retests, closed defects and signed handover. Treat sections of one physical building as one ID; record dwelling count/area convention for comparability only. Aggregation detail: N unique finally accepted physical building retrofit IDs; reference output is 1 item; supporting job quantities divide by N once. | item | Each actual event, stock interval and final close | All survey/removal/integration/test/retest/acceptance periods | Named job/site/building and attributable provider/asset scopes | per reference flow | Signed owner/authority records as applicable, as-builts, calibrated tests, defect and duplicate-ID closure. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_normalize` | all inventory rows | Sum actual attributable job quantities of the same flow, unit and scope including failed attempts and divide by N once; final service is 1 item. Do not apply a second normalization to already per-reference asset or provider quantities. | actual job quantities; N; cp_accept | Exchange amount per reference flow |  |
| `c_stock` | all stock-linked inventory rows | S = attributed opening + external net-tare gross receipts - carried closing; declared gross-with-outlets uses S and actual matched return outlet; consumed-only subtracts that same usable outward return once. Internal installation, loss and waste do not become another purchase. | opening; external receipts; tare; closing; usable outward return; ledger view | Actual native supply with one return convention |  |
| `c_species` | preparation_releases; refrigerant_releases; installation_releases; fuel_species; support_releases | Choose measured species mass OR actual compatible activity * valid species factor OR measured whole-fluid release * evidenced mass composition * receiving-medium fate. Preserve units/bases/sources. Complete species factor receives no extra composition/fate multiplier; fluid audit is nonadditive. | measured species mass; actual activity; factor unit/basis/source; whole-fluid release; composition basis/source; fate basis/source | Species mass per receiving medium before one normalization |  |
| `c_asset_views` | asset_equivalent; asset_native_service | Choose asset_equivalent = (job_driver/full_life_driver)/N item with per-asset complete lifecycle burden OR asset_native_service = job_driver/N actual native units with complete burden per identical driver unit. Driver units must match; no combined views or extra life/N division. | job_driver; full_life_driver; driver units; burden denominator; attribution_view; N; cp_assets | One asset contribution per reference flow |  |
| `c_freight` | freight | Sum attributable load_kg * distance_km over actual cargo legs, then /N; empty-return service coverage or vehicle activity remains explicit. Convert t*km to kg*km only with the factor 1000 and declared input units. | load_kg; distance_km; empty-return coverage; actual allocation; N; cp_freight | kg*km per reference flow with empty activity coverage |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all inventory rows | Use actual project, geography, period, retained structure, occupancy and configuration; compare only like scope, dwelling count and declared area convention, without declaring unlike buildings equivalent. | Survey, actual design/as-builts and signed handover |
| `dq_operands` | all protocols | Retain original operands, units, factor/composition/fate basis and sources, uncertainty and calibration. Every event has one node owner and transfer/period link; no duplicated raw field names or hidden netting. | Primary measurements and audited source/scope matrices |
| `dq_gaps` | all inventory rows | Individually document absence or measured coverage; do not replace missing provider/asset scope, species, native unit or range evidence with a universal zero/default. Update when actual design, supplier, refrigerant, tests or asset lifetime evidence changes. | Completeness, uncertainty/sensitivity and update log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_environment_water` | water_supply; wastewater; support_releases | If actual direct natural-water abstraction or direct environmental whole-water Volume discharge occurs, the foreground package MUST add independently measured elementary input/output exchanges in the verified actual water-resource/receiving-medium identity and native Volume unit, with its own event/owner and original quantity. It is not purchased product water or wastewater-to-treatment. Keep whole-water Volume and any actual dissolved species Mass as distinct nonadditive physical/species views; c_species/m_fates govern only the named species-Mass rows, never convert or replace environmental water Volume. Missing actual water-resource identity/unit support blocks dataset finalization, not physical acceptance. |  |
| `v_identity` | all inventory rows | Require actual SKU/service/species/destination and verified concrete flow/property/unit group for final exchanges. Reject at-plant Mass building flows as Count retrofit services and unknown native provider/energy support. Track each missing identity; a methodological target check cannot prove external identity verification. |  |
| `v_gate` | accepted_retrofit | Check retained-building survey/compatibility, actual design and installed anchorage/thermal/moisture/fire/air/weather interfaces; actual required blower-door, airflow balance, heat-pump/hydronic and electrical-PV-protection-control tests/retests, defect closure and signed owner/authority acceptance as applicable. Historical PHPP2007 targets and annual net-zero claims are not default handover tests. | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `v_stock_fates` | all inventory rows | Reconcile stock, external receipts, closing and matched usable outward returns once. Reconcile factory precharge, field supply, circuit closing, usable recovery, contained waste and actual species releases without overlapping origin or mass views. Fuel burned must be measured or supported by audited complete disjoint fates with unknown-loss investigation; never residual burn. |  |
| `v_power` | electricity_import; electricity_export | Require gross source-resolved imports/exports and retained-generation baseline, test circulation/load/loss ownership and meter reconciliation. Reject netting and future energy credits; construction handover does not certify annual operation. |  |
| `v_assets` | support | Check all asset consumers, nodes, jobs, periods, driver units, full-life denominator, observed history and evidenced remainder/replacement/termination/end-of-life. Check mutually exclusive asset-equivalent/native-service views, provider full upstream coverage and numerator/N once; missing lifecycle scope or unresolved replacements block finalization. |  |
| `v_rework` | integrate; accept | Every reject has producing node/event and repair, return, recovery, downgrade or disposal path; failed attempts/retests retain all real resources. Rejected or partially commissioned buildings do not enter N and shared events cannot be duplicated across periods. |  |
| `v_completeness` | all inventory rows | No missing role is assumed zero. Require documented absence or actual measured coverage, source applicability, full provider coverage and species fates. Preserve actual ranges/uncertainty; missing numerical range evidence is disclosed rather than invented. Any material measurement, acceptance, resource or identity gap prevents final data delivery. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground integrated construction-retrofit service dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual completed integrated retrofit comparison within matching retained-building/configuration and acceptance scope; downstream process/lifecyclemodel projections of this foreground package |
| excluded_use | New-building manufacture, isolated trades, uninstalled equipment, annual net-zero/operating performance guarantees, universal energy-saving or future avoided-impact credits |
| required_metadata | unique existing physical building ID; at least three dwellings and actual dwelling count; retained structure and occupancy/vacating state; measured floor area and convention; retained/replaced schedule; actual prefab facade/window/roof package specifications; heat-pump/HRV/PV installed configuration; actual approved project targets and jurisdiction; survey and compatibility evidence; gross test-energy source and meter boundary; refrigerant species/precharge/topup/fates; event/phase/period coverage; tests/retests/defect closure; signed final acceptance date |
| required_quality_disclosure | Identity/support gaps; scope exclusions; actual measurement/factor provenance; stock/native units and return view; factory/provider double-count checks; asset complete-life attribution; gross power and species fates; numerical-range limits; uncertainty/sensitivity and data completeness |
| update_trigger | Changed retained condition/design, jurisdiction/required acceptance tests, prefab supplier/BOM/precharge, refrigerant, provider scope, actual generation/test boundary, asset history/remainder/replacement/termination or new measured range evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: official CPC3.0 explanatory notes, 30 June2025, printed282;54112 includes alteration/repair of multi-dwelling buildings, broader than this retrofit subset. |
| iea-annex50-design-guide-2011 | handbook | https://www.iea-ebc.org/Data/publications/EBC_Annex_50_Retrofit_Strategies_Design_Guide.pdf | March2011 guide: whole existing apartment prefab retrofit; printed61–63 detailed air/structural survey,65–66 project targets,71ff fire and airtight interfaces. Historical technical evidence only, not current law or universal numerical criteria. |
| iea-annex50-factsheet-2014 | official_guidance | https://www.iea-ebc.org/Data/publications/EBC_Annex_50_Factsheet.pdf | 2014 two-page factsheet: integrated existing-apartment roof/facade/HVAC/solar concept and isolated-retrofit condensation/overheating risks; no quantitative default. |
| energiesprong-hameln-completed-2021 | literature | https://www.energiesprong.org/news/serial-renovation-germanys-first-pilot-project-completed/ | 4March2021 primary completion account: actual factory facade/windows/insulation/ventilation/cables installed with roofPV, heatpump and HRV. Case apartment/sensor counts and annual net-zero claims are not service reference quantities or construction acceptance guarantees. |
