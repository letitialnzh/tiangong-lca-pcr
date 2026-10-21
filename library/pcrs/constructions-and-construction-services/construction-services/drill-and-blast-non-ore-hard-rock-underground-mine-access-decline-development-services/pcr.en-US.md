---
pcr_id: pcr.constructions-and-construction-services.construction-services.drill-and-blast-non-ore-hard-rock-underground-mine-access-decline-development-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Drill-and-blast non-ore hard-rock underground mine access decline development services

## 1. Scope and Applicability

This PCR covers a finite permanent underground mine access decline segment developed by drilling and blasting non-ore hard rock, then scaled, supported, connected to the actual drainage, ventilation and service interfaces, tested and accepted. The handed-over product is a supported usable segment, not loose rock or excavation alone. Competent site design and actual governing requirements determine geometry, support and safe access. Minto is historical route evidence only; no case dimensions, explosive recipes, production ratios, licences or emission factors become defaults. [minto-development-plan-2014; ontario-ground-control]

Exclude ore-production stopes, saleable ore co-products, exploration-only drilling, shafts and raises, mechanical excavation routes, non-mine transport tunnels, whole mine construction/operation and unlined excavation-only contracts. Discovery of intentional saleable ore, an incompatible route or missing support/handover evidence blocks use of this PCR until scope review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.drill-and-blast-non-ore-hard-rock-underground-mine-access-decline-development-services |
| classification_refs | CPC 3.0 54261; proposed narrower relation, mine-associated tunnel/drift construction subset [un-cpc-3-2025] |
| covered_products | Accepted permanent non-ore hard-rock mine access decline segments with actual engineered support and service interfaces |
| excluded_products | Whole mining facilities; ore extraction; shafts/raises; TBM/roadheader; transport tunnels; excavation-only outputs |
| representative_product | An identified surveyed supported mine access decline segment at signed owner handover |
| production_route | Survey and qualify existing access; drill, charge and blast; ventilate and clear re-entry; muck/haul and scale; install engineered support and actual service extensions; verify, repair/retest and hand over |
| market_state | Completed construction service; existing mine and rock remain declared state interfaces |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted supported non-ore mine access decline development |
| How much | 1 m unique accepted developed centreline length |
| How well | Actual approved cross-section, gradient, endpoints, ground class and support design; blast clearance, scaling, support QC, actual drainage/ventilation/service-interface tests and signed segment acceptance |
| How long or cycle | Finite job/campaign and identified rounds from access qualification to handover, including setup, failed rounds, remediation and repeated tests; report all development, support and commissioning periods |
| reference_flow_link | `accepted_decline` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Accepted supported non-ore hard-rock mine access decline development service |
| reference_flow_property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| reference_unit_group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| reference_unit | m |
| required_qualifiers | Mine/site; job/segment/endpoints; non-ore geology and ground class; surveyed centreline and cross-section/gradient; excavation/overbreak survey; actual support specification and installed QC; blast/re-entry approval; water/rock-spoil classification and destinations; service interfaces; dates/periods; acceptance signatory and governing requirements |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_length` | accepted_decline | Length | m | L > 0 is unique final accepted developed centreline length from traceable survey and signed segment acceptance in cp_accept. Drillhole length, planned advance, round count, overbreak and repeat attempts never increase L. |
| `native_ledger` | all inventory rows | Actual native property | Actual native unit | Retain each actual SKU/native unit and each output state independently. Net-tare receipts, issues, returns and carried stock reconcile in that same unit; internal issues are not purchases. No invented count-to-mass or length-to-mass conversion. |
| `rock_states` | rock_spoil | Mass; Volume | kg; m3 | Independently record surveyed excavated in-situ volume, loose spoil volume and net weighed wet/dry mass. Use conversion only when independently needed, with matched density/state/moisture/temperature/source; never a generic swell factor. |
| `explosive_states` | explosives; initiators; explosive_return; initiator_return; development_waste; development_air | Mass; Count | kg; item | Supplied, issued, charged, actually detonated, misfired, unused carried stock, usable outward return and hazardous disposal are distinct traced states. Initiators stay in native Count unless an independently necessary measured mass view exists. |
| `environment_views` | development_air; support_air; development_water_out; support_water_out | Actual species/medium and whole fluid | kg; m3 | Whole gas/fluid balance and species elementary releases are nonadditive views. Safety air concentrations and clearance thresholds do not establish emitted mass. Wet mix, dry binder, added water and cured installed state remain distinct. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified existing mine access/portal and surveyed non-ore hard-rock face before finite development rounds |
| starting_condition_role | Existing host and geological state, not purchased new mine/portal/rock |
| product_classification_scope | Bounded permanent mine access decline construction, CPC 54261 subset |
| recursive_input_rule | Existing same-category segments are starting states. Include actual attributable job-induced maintenance/extension resources; do not recursively repurchase earlier segments. Purchased bounded subcontract work requires explicit scope and no overlapping resource ownership. |
| upstream_dataset_requirement | Actual supplies, utilities, transport, subcontract services and attributable asset lifecycle require compatible upstream datasets; all actual provider-paid resources are owned once. |
| disclosure | Document retained host; excavation and support boundaries; all rounds/periods/events; shared ventilation/pump/fleet consumers; waste/water fates; supplied versus detonated explosive; exclusions and unresolved data |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_handoff` | development; support | Development independently changes in-situ rock to cleared excavated opening plus removed waste rock; its internal survey/ground-inspection record authorizes only the next task under competent safe-work controls, never unrestricted entry into unsupported ground or final acceptance. Support integrates bolts/mesh/actual binder and service extensions into inspected usable segment. Joining, grouting/shotcrete preparation and tests stay embedded; no fictitious separate formulation factory. | minto-development-plan-2014; ontario-ground-control |
| `full_job` | all inventory rows | Include access qualification, setup, drilling/blast/re-entry ventilation, mucking/haul/scaling, support, temporary and permanent service extensions actually required, cleanup, defect removal, failed rounds, misfire response and retesting to signed handover. Exclude later mine operation and intentional ore production. | minto-development-plan-2014 |
| `ground_gate` | support; accepted_decline | Require current actual competent geotechnical/ground-control design, inspected/scaled ground and installed support quality evidence. Actual bolt/mesh/binder/support and testing duties follow approved site design. Do not universalize Ontario jurisdiction or historical case dimensions. | ontario-ground-control |
| `blast_gate` | development; accepted_decline | Require actual authorized blast design, explosive traceability, exclusion and re-entry/air clearance and safe interface handover under actual governing requirements. Unresolved misfire or unsafe ground cannot contribute accepted output. | minto-development-plan-2014 |
| `water_spoil` | development; support | Include actual supply and abstraction, drilling/dust-suppression/cleaning/test water, mine inflow interception/pumping/treatment and classified destinations. Rock spoil is separately traced by classification/receiver; no generic useful-product or avoided-disposal credit. | minto-development-plan-2014 |
| `ownership` | all inventory rows | Maintain one resource owner for direct work, site utilities, transport, subcontractors, rentals, assets and spares. Factory packages and separately purchased constituent parts are exclusive; disclose provider coverage and eliminate overlaps. |  |
| `period_boundary` | development; support | Link all inputs, transfers, failed and accepted events, assets, stock changes and replacements to actual job/campaign/round/phase/reporting period. Closing stock is carried state, not outward return. |  |
| `installed_states` | support_bolts; support_mesh; support_binder; service_extensions; support_other_native; support_waste | Installed/retained final materials exclude outward usable returns, waste, release and carried supply stock. Used/dosed/charged/fresh-mix activity is a nonadditive process view. Record actual dry powder, added water, fresh wet mix and cured installed mass/volume separately with matched state/density/moisture/temperature/unit/source where independently needed. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual supplied initiation components (`initiators`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Record native counted detonators, boosters only where counted in actual supplier records, connectors and other actual initiation components separately; do not substitute bulk explosive mass.

- Collection subject: Actual supplied initiation components
- Flow property / unit: Count / item
- Amount rule: Attributable actual initiation components in item / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Actual component BOM, receipts and round issue/return ledger are needed; no default count per round.

#### Collection requirement: Actual drilling and development consumables (`drill_consumables`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Includes actual drill steel/bits consumed, lubricants, cleaning and containment materials; exclude attributable equipment lifecycle already owned by assets.

- Collection subject: Actual drilling and development consumables
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual net supplied consumable mass in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Obtain actual material-specific supply/wear records and compatible output basis; no standard wear allowance.

#### Collection requirement: Actual development fuel supplied (`development_fuel`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Record actual fuel grade and native receipts; measure independently necessary mass from matched density/state if receipts use volume. Burned activity is separate from supply.

- Collection subject: Actual development fuel supplied
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual fuel supply in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Actual supply, stock, return, combustion, waste and spill records are required; no default fuel burn per metre.

#### Collection requirement: Attributable development asset lifecycle service (`development_assets`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Actual drill rigs, loaders, haulage, fans, pumps and infrastructure include manufacture, maintenance, replacements and end of life across all consumers and periods. Count is an equivalent share of an identified complete asset, never rental hours.

- Collection subject: Attributable development asset lifecycle service
- Flow property / unit: Count / item
- Amount rule: Actual equivalent complete asset lifecycle shares attributable to development / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_services`

Range evidence need: Require whole-life compatible driver denominator or observed history plus evidenced remaining life/replacements/termination/end-of-life with sensitivity; missing coverage blocks finalization.

#### Collection requirement: Actual development freight service (`development_freight`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Own actual incoming supplies and outward rock/spoil/waste/return freight, including load, distance, mode and empty-return treatment. Direct fuel/vehicle lifecycle versus purchased freight/provider scope is exclusive; no duplicate haulage already owned by direct plant.

- Collection subject: Actual development freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual owned mass-distance service in kg*km / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_services`

Range evidence need: Obtain actual load-distance legs, mode, return/empty treatment and exclusive provider/direct ownership.

#### Collection requirement: Actual development supplies in other native units (`development_other_native`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Conditional actual counted/area/length-native development consumables or components not already represented in mass-native supply cards. Retain actual native property/unit and verify its support before concrete exchange creation; never force a bit, sheet or length through kg without independently necessary measured mass.

- Collection subject: Actual development supplies in other native units
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributable supply in its verified native unit / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Require actual supplier-native unit and measured supply/outlet ledger; alternate unit views are nonadditive.

#### Collection requirement: Actual development water withdrawal from environment (`development_withdrawal`)

Process / prospective direction / type: `development` / `inputs` / `elementary`.

Conditional actual environmental resource withdrawal by identified source/compartment. Purchased/provided water belongs only to development_water; intercepted mine inflow is a separate host-state water balance, not automatically purchased supply or a second abstraction.

- Collection subject: Actual development water withdrawal from environment
- Flow property / unit: Volume / m3
- Amount rule: Actual source-specific environmental water withdrawal in m3 / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_environment`

Range evidence need: Require abstraction authority/source, meter and compartment with no overlap with purchased water or host inflow.

#### Collection requirement: Usable explosive outward return (`explosive_return`)

Process / prospective direction / type: `development` / `outputs` / `product`.

Only a traced physical outward return; usable material retained in closing stock is not an outward output. Exclude hazardous waste and misfired material.

- Collection subject: Usable explosive outward return
- Flow property / unit: Mass / kg
- Amount rule: Actual usable outward returned explosive mass in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Obtain actual supplier return receipt, state and exact mass; no assumed return fraction.

#### Collection requirement: Usable initiation component outward return (`initiator_return`)

Process / prospective direction / type: `development` / `outputs` / `product`.

Keep counted actual components distinct from bulk explosive returns and from disposal/misfires.

- Collection subject: Usable initiation component outward return
- Flow property / unit: Count / item
- Amount rule: Actual usable outward returned initiation components in item / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Obtain actual counted outward return confirmation in the native unit.

#### Collection requirement: Actual usable nonexplosive mass supply outward return (`development_mass_return`)

Process / prospective direction / type: `development` / `outputs` / `product`.

Conditional usable actual mass-native fuel, consumables or other nonexplosive supply physically returned outward; explosive and counted initiation returns remain separate. Closing carried stock is not outward return.

- Collection subject: Actual usable nonexplosive mass supply outward return
- Flow property / unit: Mass / kg
- Amount rule: Actual usable nonexplosive outward returned mass in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Require actual SKU, mass-native supply ledger, usable state and receiver return confirmation; no duplicate upstream credit.

#### Collection requirement: Actual usable other-native development supply outward return (`development_other_return`)

Process / prospective direction / type: `development` / `outputs` / `product`.

Conditional usable Count/Area/Length-native nonexplosive supplies physically returned outward, matched to development_other_native. No mass forcing, closing-stock output or second return credit.

- Collection subject: Actual usable other-native development supply outward return
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual usable outward returned quantity in its verified native unit / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Require matched native-unit supply and usable return receiver confirmation.

#### Collection requirement: Actual development hazardous and other material waste (`development_waste`)

Process / prospective direction / type: `development` / `outputs` / `waste`.

Includes nonusable explosive/misfire remnants under authorized handling, packaging, spent consumables, fuel waste and spill cleanup material; classify each actual destination.

- Collection subject: Actual development hazardous and other material waste
- Flow property / unit: Mass / kg
- Amount rule: Actual separately classified waste mass leaving development in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Obtain classified waste tickets and disjoint explosive/fuel outlets; no assumed waste fraction.

#### Collection requirement: Actual development water and slurry to treatment or disposal (`development_water_out`)

Process / prospective direction / type: `development` / `outputs` / `waste`.

Track pumped mine inflow, supplied water, recirculation, stocks, contained sludge and destinations separately. Whole-fluid transport/treatment and pollutant elementary release views are nonadditive.

- Collection subject: Actual development water and slurry to treatment or disposal
- Flow property / unit: Volume / m3
- Amount rule: Actual whole water/slurry outflow in m3 / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_environment`

Range evidence need: Require source/flow/receiver records, slurry solids and moisture states; no assumed full conversion of water supply to discharge.

#### Collection requirement: Actual development substance release to identified medium (`development_air`)

Process / prospective direction / type: `development` / `outputs` / `elementary`.

Instantiate blast-fume species, fuel combustion species, dust size fraction or actual water/soil substance releases separately with receiving medium. Actual detonation and actual burned fuel drive their respective methods. Safety concentration, SDS composition and arithmetic residual are not emitted mass.

- Collection subject: Actual development substance release to identified medium
- Flow property / unit: Mass / kg
- Amount rule: Actual measured or valid activity-factor/composition-fate substance release in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_environment`

Range evidence need: Require actual species/medium, sampling/flow/time or compatible validated factor, capture/retention/fate and uncertainty; no theoretical complete-detonation or generic air-emission factor.

#### Collection requirement: Actual supplied ground-support bolts and fittings (`support_bolts`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Actual engineered support specification and installed QC determine component identities and native count. Include wasted/nonreturned failed components in supply.

- Collection subject: Actual supplied ground-support bolts and fittings
- Flow property / unit: Count / item
- Amount rule: Attributable actual supplied bolts/fittings in item / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Obtain actual support design, BOM, received/installed/rejected/returned ledger and inspection results; no default bolt spacing/count.

#### Collection requirement: Actual supplied ground-support mesh and reinforcement (`support_mesh`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Use measured actual native mass; do not silently convert sheet counts or covered area without independently needed measured unit mass.

- Collection subject: Actual supplied ground-support mesh and reinforcement
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual supplied support mesh/reinforcement mass in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual material grade and mass/area/count records with any independently needed conversion; no standard mesh loading.

#### Collection requirement: Actual supplied support binder or shotcrete constituents (`support_binder`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Actual resin/grout/shotcrete SKU depends on site design. Factory ready-mix versus separately procured constituents is exclusive; added water and fresh wet mix/cured installed state are separate physical views. On-site preparation serves support, not a separate marketed formulation.

- Collection subject: Actual supplied support binder or shotcrete constituents
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual supplied binder or actual ready-mix mass in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Obtain actual approved mix/SKU, delivery state, composition and batch QC; no universal recipe, thickness or wet-to-cured yield.

#### Collection requirement: Actual supplied mine service extension materials (`service_extensions`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Actual drainage lines, ventilation ducting and service cables/hoses are distinct identities and native-length ledgers where actually supplied by length. Other native units require actual verified supports before exchange creation.

- Collection subject: Actual supplied mine service extension materials
- Flow property / unit: Length / m
- Amount rule: Attributable actual supplied extension material length in m / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual design, delivered and installed native lengths plus waste and return ledger; no fixed extension length per accepted metre.

#### Collection requirement: Actual support setup cleaning testing and containment supplies (`support_consumables`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Includes actual cleaning agents, curing/test supplies, containment and installation consumables, beyond the installed components.

- Collection subject: Actual support setup cleaning testing and containment supplies
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual net supplied consumable mass in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual supplies and QC/test/cleanup records including provider-paid incremental resources.

#### Collection requirement: Actual support fuel supplied (`support_fuel`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Separate supplied fuel from actual combustion, usable return, carried stock, nonburned waste and uncontained loss.

- Collection subject: Actual support fuel supplied
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual fuel supply in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Obtain full actual fuel supply/outlet and combustion reconciliation; no default equipment burn.

#### Collection requirement: Actual bounded completed support and acceptance provider service (`support_provider`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Conditional only for an identified countable completed service unit with result and full resources/upstream coverage; actual hours or price require the correct native property/support and are never Count.

- Collection subject: Actual bounded completed support and acceptance provider service
- Flow property / unit: Count / item
- Amount rule: Actual completed native-count provider service units attributable to support / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_services`

Range evidence need: Require actual competent design/testing/installation provider scope, completed evidence and native unit; documented absence is acceptable.

#### Collection requirement: Attributable support and handover asset lifecycle service (`support_assets`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Include actual installation/test plant and shared fans/pumps/host infrastructure lifecycle with complete maintenance, replacement and end-of-life coverage. Do not buy retained mine again.

- Collection subject: Attributable support and handover asset lifecycle service
- Flow property / unit: Count / item
- Amount rule: Actual equivalent complete asset lifecycle shares attributable to support / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_services`

Range evidence need: Require measured compatible lifetime driver across all jobs/nodes/periods and uncertainty/sensitivity for evidenced remainder; unknown denominator blocks final data.

#### Collection requirement: Actual support freight service (`support_freight`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Own actual support supply, waste and usable-return freight legs with actual load/distance/mode. Exclude freight already covered by supplier, direct fuel/asset or bounded provider.

- Collection subject: Actual support freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual owned mass-distance service in kg*km / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_services`

Range evidence need: Require actual route/load/distance records and provider upstream scope; no default route or credit.

#### Collection requirement: Actual support supplies in other native units (`support_other_native`)

Process / prospective direction / type: `support` / `inputs` / `product`.

Conditional actual area/count/length-native mesh, consumables or components not already owned by the matching mass/count/length cards. Preserve actual native property/unit and verify support before concrete exchange creation; independently needed mass view is measured and nonadditive.

- Collection subject: Actual support supplies in other native units
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributable supply in its verified native unit / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual native supply/installed/return/waste ledger and any independently necessary measured unit-mass or area view.

#### Collection requirement: Actual support water withdrawal from environment (`support_withdrawal`)

Process / prospective direction / type: `support` / `inputs` / `elementary`.

Conditional actual source/compartment-specific environmental withdrawal for support; purchased/provided water remains support_water. Internal recycled water and host inflow are separately traced nonadditive states.

- Collection subject: Actual support water withdrawal from environment
- Flow property / unit: Volume / m3
- Amount rule: Actual source-specific environmental water withdrawal in m3 / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_environment`

Range evidence need: Require actual source/compartment and metered withdrawal, with exclusive ownership.

#### Collection requirement: Usable support component outward return (`support_return`)

Process / prospective direction / type: `support` / `outputs` / `product`.

Only actual bolts/fittings counted in the supplier-native ledger. Other actual materials stay in their own native-unit outward-return ledger and require separate concrete exchanges, never forced through this counted card.

- Collection subject: Usable support component outward return
- Flow property / unit: Count / item
- Amount rule: Actual usable outward returned counted support components in item / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual counted return receipts; do not infer a return fraction or convert all returns to mass.

#### Collection requirement: Actual usable mass support supply outward return (`support_mass_return`)

Process / prospective direction / type: `support` / `outputs` / `product`.

Conditional actual mass-native mesh, binder, consumables or fuel physically returned usable; counted bolts and native-length extension returns are separately owned.

- Collection subject: Actual usable mass support supply outward return
- Flow property / unit: Mass / kg
- Amount rule: Actual usable mass-native support supply returned in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual native mass return records and usable receiver state, excluding closing stock and waste.

#### Collection requirement: Actual usable native-length service material outward return (`support_length_return`)

Process / prospective direction / type: `support` / `outputs` / `product`.

Conditional actual supplied-by-length duct, pipe, hose or cable returned usable outward; do not force it through mass or counted bolt returns.

- Collection subject: Actual usable native-length service material outward return
- Flow property / unit: Length / m
- Amount rule: Actual usable native-length outward return in m / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require paired actual SKU/native-length supply and return receipts; no length-to-mass conversion unless independently required and measured.

#### Collection requirement: Actual usable other-native support supply outward return (`support_other_return`)

Process / prospective direction / type: `support` / `outputs` / `product`.

Conditional usable actual native-unit return matched to support_other_native, excluding quantities already in Count/Mass/Length return cards. Preserve actual unit and verified support.

- Collection subject: Actual usable other-native support supply outward return
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual usable outward returned quantity in its verified native unit / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require matched native supplier and receiver ledger, excluding closing stock and duplicate return views.

#### Collection requirement: Actual rejected support and installation material waste (`support_waste`)

Process / prospective direction / type: `support` / `outputs` / `waste`.

Removed failed support, overspray/rebound, unused nonreturnable mix, packaging, test residues and cleanup wastes retain supply burdens; route each to actual receiver. Cured installed material excludes these exits.

- Collection subject: Actual rejected support and installation material waste
- Flow property / unit: Mass / kg
- Amount rule: Actual separately classified waste mass leaving support in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_ledger`

Range evidence need: Require actual rejected/removed material, fresh/cured/moisture states and waste tickets; no fixed rebound or reject fraction.

#### Collection requirement: Actual support wash test water and slurry to treatment or disposal (`support_water_out`)

Process / prospective direction / type: `support` / `outputs` / `waste`.

Separate actual retained/cured water, evaporation, recirculation, contained sludge and outward fluid; substance releases are a separate nonadditive view.

- Collection subject: Actual support wash test water and slurry to treatment or disposal
- Flow property / unit: Volume / m3
- Amount rule: Actual whole support water/slurry outflow in m3 / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_environment`

Range evidence need: Require measured actual outflow and destination/state; no automatic difference-as-emission.

#### Collection requirement: Actual support substance release to identified medium (`support_air`)

Process / prospective direction / type: `support` / `outputs` / `elementary`.

Instantiate actual combustion species, material emissions, dust fraction or aqueous/soil releases separately by substance/medium, with capture and fate. No SDS or no-VOC claim becomes an emission amount.

- Collection subject: Actual support substance release to identified medium
- Flow property / unit: Mass / kg
- Amount rule: Actual measured or valid activity-factor/composition-fate substance release in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_environment`

Range evidence need: Require actual species/medium quantity method, capture/retention and uncertainty; no generic emission factor.

#### Collection requirement: Actual approved supplied explosive product (`explosives`)

Process / prospective direction / type: `development` / `inputs` / `product`.

Resolve each actual SKU, composition/state and custody into a separate atomic exchange. This requirement is not a generic pooled flow. A genuinely complete purchased assembly may use its own verified package boundary; its already included parts are not additional purchases.

Actual supplier form/SKU and approved use determine each concrete exchange; ANFO and emulsion are alternatives only where actual records show them.

- Collection subject: Actual approved supplied explosive product
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual explosive supply in kg / L; retain upstream burden of nonreturned disposal, misfire residue and loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_ledger`

Range evidence need: Obtain actual SKU supply and blast reconciliation by round, ground class and section; no default explosive recipe or kg per metre.

## 6. Process Inventory Structure

These mass-supply cards apply only to actual mass-native supplies. Other native counted, area or length supplies retain their units in the node-specific other_native cards; no mass forcing without independently required measured conversion.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Drill-blast excavation mucking and scaling | required | Actual non-ore hard-rock decline development | Independent resource removal from in-situ face to cleared excavated opening and classified spoil, handed to support; no ore production | Actual job inventory per 1 m reference flow |
| support | Engineered ground support service integration and acceptance | required | All included segments require actual engineered support and handover | Integrate support components and actual extensions; inspect/test, remediate/retest and sign accepted usable segment | 1 m accepted supported decline |

The internal opening handoff is a task/ground-condition record under competent safe-work controls, using job/segment/round and survey identifiers; it does not imply general access to unsupported ground, a separately purchased service or a second final output. Muck transfer uses paired transfer IDs. Failed geometry/support returns to its producing development/support node for actual remediation; removed materials exit by that node waste card.

### Process: Drill-blast development (`development`)

#### Inputs

##### Product flows

###### Actual development electricity supplied (`development_electricity`)

Own drilling, lighting, charging, ventilation, compressed-air and pumping energy once, including actual shared period shares and blast clearance runs.

- Selected flow: Actual development electricity supplied
- Flow property / unit: Energy / kWh
- Amount rule: Attributable actual electrical energy in kWh / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_services`

Range evidence need: Obtain meters and complete mine-wide shared-consumer driver records; safety clearance time is not an energy default.

###### Actual purchased or provided development water (`development_water`)

Only actual purchased/provided water enters this product card, for actual drilling, dust suppression, cleanup and flushing. Actual environmental withdrawal has a separate elementary input; intercepted mine inflow remains a separate host-state water balance.

- Selected flow: Actual purchased or provided development water
- Flow property / unit: Volume / m3
- Amount rule: Attributable actual water entering development in m3 / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_environment`

Range evidence need: Obtain water meters, source, inflow separation and actual reuse loops; no arbitrary water use per metre.

###### Actual bounded completed development provider service (`development_provider`)

Conditional only when provider contract identifies a completed countable service unit and full resource/result/upstream coverage. Otherwise collect actual native service property and verified support before a concrete exchange; price or hours are not item.

- Selected flow: Actual bounded completed development provider service
- Flow property / unit: Count / item
- Amount rule: Actual completed native-count provider service units attributable to development / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_services`

Range evidence need: Obtain the actual bounded provider unit, completed results and resource coverage; absence must be evidenced.

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Actual non-ore excavated rock spoil to classified destination (`rock_spoil`)

Geological rock is not a purchased material. Record internal muck transfer/haul separately; boundary waste destinations own disposal or actual documented reuse without invented co-product value.

- Selected flow: Actual non-ore excavated rock spoil to classified destination
- Flow property / unit: Mass / kg
- Amount rule: Actual net weighed non-ore rock spoil delivered to each destination in kg / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dev_environment`

Range evidence need: Require paired spoil tickets, rock characterization and measured state conversions where needed; no assumed bulk density or swell.

##### Elementary flows

### Process: Support integration and acceptance (`support`)

#### Inputs

##### Product flows

###### Actual support and handover electricity supplied (`support_electricity`)

Own actual support installation, pumping, ventilation, commissioning, lighting and repeat tests once by actual meters or complete compatible period drivers.

- Selected flow: Actual support and handover electricity supplied
- Flow property / unit: Energy / kWh
- Amount rule: Attributable actual electrical energy in kWh / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_services`

Range evidence need: Require actual energy and full shared-consumer driver coverage; no universal ventilation power or runtime.

###### Actual purchased or provided support and handover water (`support_water`)

Includes actual grout/shotcrete addition, cleaning, curing, flushing, containment and interface tests. Internal recovered water is a nonadditive transfer.

- Selected flow: Actual purchased or provided support and handover water
- Flow property / unit: Volume / m3
- Amount rule: Attributable actual entering water in m3 / L.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sup_environment`

Range evidence need: Obtain actual mix/test/cleanup water records and stock/outlet states; no water-to-binder ratio imposed by this PCR.

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted supported non-ore hard-rock mine access decline development service (`accepted_decline`)

Only unique final surveyed accepted supported centreline advance, after all actual blast/ground/support/drainage/ventilation/service-interface gates and signed owner handover.

- Selected flow: Accepted supported non-ore hard-rock mine access decline development service
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accept`

Range evidence need: 1 m is exact reference normalization, not an empirical yield or acceptance tolerance.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `no_ore` | all inventory rows | This subset has no intentional saleable ore product. Non-ore spoil receives actual classified treatment/reuse/disposal fate without default avoided product or disposal credit. Valuable ore production requires another reviewed methodology. |  |
| `stock_supply` | explosives; initiators; drill_consumables; development_fuel; support_bolts; support_mesh; support_binder; service_extensions; support_consumables; support_fuel; development_other_native; support_other_native | Per actual SKU/native unit: attributable supply = opening attributable stock + external net-tare gross receipts - closing carried stock. Gross-with-outlets retains all actual outward exits; consumed-only may exclude matched usable outward return once with corresponding upstream burden. Never add a duplicate return credit. Nonreturned waste/loss keeps upstream burden. |  |
| `fuel_balance` | development_fuel; support_fuel; development_air; support_air | Actual supplied fuel is allocated to actual combustion, usable outward return, nonburned waste and uncontained loss with opening/closing state reconciled. Total spill is audit-only: recovered retained spill is already closing stock or a traced waste/return. Only actual combustion drives combustion emissions; fuel supply is not set to burned fuel only. |  |
| `blast_balance` | explosives; initiators; explosive_return; initiator_return; development_waste; development_air | Reconcile external supply and carried stock independently from issue, charge, actual detonation, misfire resolution, waste and usable returns by round. Internal issue/charging are nonadditive activity; use actual detonation for a compatible blast-emission method and retain upstream burden of nonreturned unused/misfired/disposed material. |  |
| `failed_rounds` | development; support; accepted_decline | Setup, failed rounds, repeat blasting/scaling/support, removals and retests retain their attributable burdens in the same unique accepted segment denominator. Failed/incomplete gates yield no accepted metres. Keep remediation loop and waste exit linked to the producing node. |  |
| `shared_periods` | development_electricity; support_electricity; development_assets; support_assets; development_provider; support_provider | Enumerate every consuming job/node/period and lifecycle phase. Direct meters first; otherwise use an actual compatible measured driver numerator divided by the complete consumer/period driver denominator. Allocate complete asset manufacture, maintenance, replacements and end of life across all jobs/nodes/periods. Whole-life denominator requires completed observed life or observed history plus evidenced remainder, replacements, termination and end of life with uncertainty, sensitivity and updates. Missing coverage/denominator blocks finalization. Period shares and direct/provider resource shares must reconcile once. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | support | Final accepted output | survey_acceptance | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; start_chainage; end_chainage; centreline_m; cross_section; gradient; ground_class; non_ore_evidence; blast_clearance; scaling_record; support_design; support_qc; drainage_test; ventilation_test; service_test; defects_closed; signatory; acceptance_date | Traceable before/after centreline survey reconciled to unique segment IDs, competent actual design and signed acceptance after all required gates | m | Each final segment and each failed/retested event | Whole campaign through final acceptance | Same named mine/site/segment | per reference flow | Survey calibration; drawings; round logs; blast/ground/support/interface tests; signed handover |
| cp_dev_ledger | development | Supply stock return installation activity and waste | native_stock_ledger | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; sku; supplier; native_property; native_unit; opening_stock; gross_receipts; net_tare; closing_stock; internal_issue; charged; detonated; misfire_state; installed; usable_return; nonburned_waste; uncontained_loss; total_spill_audit; recovered_spill_fate; waste_id; receiver; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; temperature_unit; actual_fuel_volume; fuel_volume_unit; fuel_density_source | Reconcile actual SKU-native supply/outlet records, blast and fuel activity logs, installed records and receiver confirmations. Inapplicable fields require actual absence evidence; no inferred zero. Preserve event and transfer links | Actual native unit; kg; item; m | Every receipt/issue/round/installation/return/waste and stock boundary | Opening through closing actual job periods including failures | Same named site and process owner | per reference flow | Calibrated stock/weigh records; supplier/return notes; actual blast log; installed QC; waste tickets |
| cp_dev_environment | development | Water rock spoil and substance release | flow_fate_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; source; destination; transfer_id; material_id; rock_class; in_situ_volume; loose_volume; wet_mass; dry_mass; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; inflow; supplied_water; recirculation; closing_water; outflow; sludge; species; medium; particle_fraction; sampling_method; concentration; gas_flow; sampling_time; activity; factor; factor_basis; capture; retention; fate; uncertainty; temperature_unit; activity_unit; factor_unit; factor_source; composition_basis; composition_source; fate_source | Use meters/survey/scales and receiver records for distinct rock/water states; for each actual species and medium use traceable sampling with flow/time or compatible validated activity-factor/composition-fate. Air clearance concentrations are safety evidence only | m3; kg; substance-specific kg | Each round/event/outlet and reporting period | Whole campaign including blast clearance and incidents | Same site/process; actual receiving medium and receiver | per reference flow | Meter/survey/scale calibration; laboratory characterization; destination tickets; factor validity and uncertainty; incident owner |
| cp_dev_services | development | Utilities freight providers and full asset lifecycle | resource_ownership_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; asset_id; provider_id; service_id; consumer_id; ownership_scope; completed_native_unit; completed_quantity; electricity_kwh; transport_load; distance; transport_mode; direct_resources; provider_resources; lifecycle_manufacture; lifecycle_maintenance; lifecycle_replacement; lifecycle_eol; driver_unit; actual_driver; all_consumer_driver; observed_history; evidenced_remainder; termination; uncertainty; sensitivity; update_date; remainder_source; transport_load_unit; distance_unit; empty_return_method; upstream_scope | Meter utilities and freight activity; reconcile bounded completed provider resources/results and compatible native unit; enumerate full asset/utility consumer universe and actual lifecycle driver with evidenced remaining life. Provider fuel/utilities and freight must have one owner | Actual verified native unit; kWh; kg*km; equivalent item | Each job/event, meter period and asset lifecycle update | All service periods and observed/evidenced remaining asset life | Actual mine plus complete shared asset consumer universe | per reference flow | Meters; waybills; actual provider scope/result; fleet history; manufacture/maintenance/replacement/EOL coverage; lifetime evidence; sensitivity |
| cp_sup_ledger | support | Supply stock return installation activity and waste | native_stock_ledger | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; sku; supplier; native_property; native_unit; opening_stock; gross_receipts; net_tare; closing_stock; internal_issue; charged; detonated; misfire_state; installed; usable_return; nonburned_waste; uncontained_loss; total_spill_audit; recovered_spill_fate; waste_id; receiver; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; temperature_unit; actual_fuel_volume; fuel_volume_unit; fuel_density_source | Reconcile actual SKU-native supply/outlet records, blast and fuel activity logs, installed records and receiver confirmations. Inapplicable fields require actual absence evidence; no inferred zero. Preserve event and transfer links | Actual native unit; kg; item; m | Every receipt/issue/round/installation/return/waste and stock boundary | Opening through closing actual job periods including failures | Same named site and process owner | per reference flow | Calibrated stock/weigh records; supplier/return notes; actual blast log; installed QC; waste tickets |
| cp_sup_environment | support | Water rock spoil and substance release | flow_fate_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; source; destination; transfer_id; material_id; rock_class; in_situ_volume; loose_volume; wet_mass; dry_mass; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; inflow; supplied_water; recirculation; closing_water; outflow; sludge; species; medium; particle_fraction; sampling_method; concentration; gas_flow; sampling_time; activity; factor; factor_basis; capture; retention; fate; uncertainty; temperature_unit; activity_unit; factor_unit; factor_source; composition_basis; composition_source; fate_source | Use meters/survey/scales and receiver records for distinct rock/water states; for each actual species and medium use traceable sampling with flow/time or compatible validated activity-factor/composition-fate. Air clearance concentrations are safety evidence only | m3; kg; substance-specific kg | Each round/event/outlet and reporting period | Whole campaign including blast clearance and incidents | Same site/process; actual receiving medium and receiver | per reference flow | Meter/survey/scale calibration; laboratory characterization; destination tickets; factor validity and uncertainty; incident owner |
| cp_sup_services | support | Utilities freight providers and full asset lifecycle | resource_ownership_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; asset_id; provider_id; service_id; consumer_id; ownership_scope; completed_native_unit; completed_quantity; electricity_kwh; transport_load; distance; transport_mode; direct_resources; provider_resources; lifecycle_manufacture; lifecycle_maintenance; lifecycle_replacement; lifecycle_eol; driver_unit; actual_driver; all_consumer_driver; observed_history; evidenced_remainder; termination; uncertainty; sensitivity; update_date; remainder_source; transport_load_unit; distance_unit; empty_return_method; upstream_scope | Meter utilities and freight activity; reconcile bounded completed provider resources/results and compatible native unit; enumerate full asset/utility consumer universe and actual lifecycle driver with evidenced remaining life. Provider fuel/utilities and freight must have one owner | Actual verified native unit; kWh; kg*km; equivalent item | Each job/event, meter period and asset lifecycle update | All service periods and observed/evidenced remaining asset life | Actual mine plus complete shared asset consumer universe | per reference flow | Meters; waybills; actual provider scope/result; fleet history; manufacture/maintenance/replacement/EOL coverage; lifetime evidence; sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `native_supply` | explosives; initiators; drill_consumables; development_fuel; support_bolts; support_mesh; support_binder; service_extensions; support_consumables; support_fuel; development_other_native; support_other_native | For each actual SKU/native unit, opening attributable stock + external net-tare gross receipts - closing carried stock; choose gross-with-outlets or matched usable-return exclusion once. Divide actual attributable native quantity by L. | cp_dev_ledger; cp_sup_ledger; cp_accept | Native supply per 1 m reference flow |  |
| `native_outlets` | explosive_return; initiator_return; support_return; rock_spoil; development_waste; support_waste; development_water; support_water; development_water_out; support_water_out; development_withdrawal; support_withdrawal; development_mass_return; support_mass_return; support_length_return; development_other_return; support_other_return | Sum actual separately traced native boundary quantities for same owner/state, then divide by L. Pair internal transfer IDs without summing them as extra external supply/output. Only actual independently necessary conversion uses matched measured state/density/moisture and source. | cp_dev_ledger; cp_sup_ledger; cp_dev_environment; cp_sup_environment; cp_accept | Actual native exchange per 1 m reference flow |  |
| `owned_services` | development_electricity; support_electricity; development_provider; support_provider; development_assets; support_assets; development_freight; support_freight | Actual direct resources plus actual compatible period/lifecycle-driver share of complete shared resources, excluding overlap already owned by provider/direct/asset; divide attributable native quantity by L. Asset driver denominator covers all lifecycle consumers. Freight uses actual load and distance with upstream scope owned once. | cp_dev_services; cp_sup_services; cp_accept | Native resources, provider units and lifecycle equivalents per 1 m reference flow |  |
| `species_release` | development_air; support_air | For each actual substance/medium, integrate measured concentration with compatible flow/time or use actual activity times a matched species emission factor, OR whole-fluid mass times matched composition and fate fraction; a complete species emission factor must not be multiplied by composition again, exclude captured/retained/returned/waste once, then divide by L. Keep detonation and fuel-combustion activity separate; never use safety readings as emitted mass or residual difference alone. | cp_dev_environment; cp_sup_environment; cp_dev_ledger; cp_sup_ledger; cp_accept | Actual species release per 1 m reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_scope` | all inventory rows | Resolve each actual final exchange to one verified concrete UUID and independently verified property/unit support fitting actual SKU/provider/species/medium; unknown is a gap, never zero. | Actual supplier/flow detail and support records; site route/geology |
| `complete_campaign` | all inventory rows | Cover full job and all direct/provider resources, periods, failed rounds and incidents; document absence when actual zero applies. | Owned event/period ledger and signed completeness review |
| `state_reconciliation` | all inventory rows | Reconcile stock/outlets, explosive states, fuel burn, rock volume/mass/moisture, fresh/cured support and fluid/species views; report unresolved balances and uncertainty. | Calibrated raw records; paired transfer and receiver evidence |
| `gate_quality` | accepted_decline | Missing actual design, safe blast/re-entry, support QC or interface/signed acceptance prevents accepted output. | Competent approval, calibrated tests, defect closure, unique survey |
| `lifetime_quality` | development_assets; support_assets | Missing complete observed/evidenced lifetime driver or consumer coverage blocks final data; disclose sensitivity and update remaining-life evidence. | Asset history/remainder/replacements/termination/EOL and allocation audit |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `acceptance_check` | accepted_decline | Confirm L > 0 and exact final 1 m reference; unique survey/endpoints, non-ore geology, actual cross-section/gradient, blast/re-entry/scaling/support/drainage/ventilation/service gates and signed acceptance. No failed segment or repeated attempt counts. | minto-development-plan-2014; ontario-ground-control |
| `native_check` | all inventory rows | Verify native property/unit, stock/outlet rules, direct denominator L, measured state conversions only where needed, no invented support recipe/ore yield/swell or theoretical blast emissions. |  |
| `coverage_check` | development; support | Verify all periods/phases, incidents, misfires, rejected support remediation/waste exits, direct/provider and freight ownership, complete shared consumer/lifetime driver and sensitivity. No missing coverage or unresolved replacement/termination treated as zero. |  |
| `identity_check` | all inventory rows | Verify each actual concrete flow/property/unit and actual qualifiers before final TIDAS exchange; unresolved supplier/provider/species/support prevents final exchange and must be disclosed. A candidate methodology is not a publication-ready dataset. |  |
| `environment_check` | development_air; support_air; rock_spoil; development_water_out; support_water_out | Validate actual detonation/burn activity and species/medium method; distinguish air safety criterion from mass release, in-situ/loose/weighed spoil states, supplied/inflow/recirculated water and final fates without additive duplicate views or generic credits. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for completed supported mine decline construction service |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections |
| allowed_use | Actual matching non-ore drill-blast supported decline service with disclosed site geometry, geology, support, periods, interfaces and acceptance |
| excluded_use | Whole mine; ore-production; shafts/raises; mechanical tunnel; transport tunnel; excavation-only; future operation or avoided ore/energy/disposal credit |
| required_metadata | Mine/site/job/segment/campaign/round/event/phase/period; geometry and unique L; non-ore geology; actual design/support/QC; blast/re-entry; interface tests and signoff; actual SKU/provider/unit; stock and outlet states; water/spoil fates; shared consumer/lifecycle scope |
| required_quality_disclosure | Boundary and data coverage, direct/provider ownership, measurement and state conversions, actual species/factors, unknown identities/supports, missing records, uncertainty/sensitivity, life-history/remainder evidence and date |
| update_trigger | Changed actual geology/route/support/geometry/gates, governing requirements, suppliers/providers/destinations, period ownership or remaining-life evidence; corrected measurements/identities |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, p. 287, subclass 54261; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; mine-associated tunnels/drifts, not production quantities |
| minto-development-plan-2014 | literature | Minto Explorations Ltd, Underground Mine Development and Operations Plan, June 2014, sections 4.1, 6.3.5, 7.5–7.8; https://emr-ftp.gov.yk.ca/emrweb/COMM/major-mines/minto/mml_minto_11underground_mine_development_operations_plan_june2014.pdf | Historical operator case for decline access, support, drill-blast development/waste separation and water/explosive roles; broader mine/ore scope and numerical patterns not adopted |
| ontario-ground-control | official_guidance | Ontario Ministry of Labour, Immigration, Training and Skills Development, Ground control in underground mines, published/updated 21 December 2023; https://www.ontario.ca/page/ground-control-underground-mines | Site-specific ground design/examination/scaling/support-installation and QC rationale; actual governing jurisdiction and project design control; no LCA stock/fuel/asset algebra claimed |
