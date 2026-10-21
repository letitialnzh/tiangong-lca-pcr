---
pcr_id: pcr.constructions-and-construction-services.construction-services.supported-modular-steel-facade-scaffolding-cycle-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Supported modular steel facade scaffolding cycle services


## 1. Scope and Applicability

This PCR governs a stationary, rigid-supported modular galvanized-steel facade access scaffold as one actual configuration episode. The service starts with issue of the actual kit and ends only after erection, inspected handover, actual availability closure, dismantling, assessed return/repair/discard and owned site restoration are reconciled. Height, loading, deck and tie arrangements and dates characterize the service; area alone is insufficient.

Exclude rental without erection/dismantling, suspended, mobile and mast-climbing scaffolds, falsework/shoring, permanent access structures and the trade executed by users from the platform. A materially changed configuration requires a new cohort and scope review. Ordinary manufacturer-compatible cleaning and evidenced minor upkeep are included when owned; structural welding or independently owned component-repair technology requires further review. PERI and OSHA evidence supports these responsibilities and distinctions, not universal input rates. The CPC 2.1 note is historical boundary context only.


## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.supported-modular-steel-facade-scaffolding-cycle-services |
| classification_refs | CPC 3.0 54570 Scaffolding services; narrower |
| covered_products | Complete stable-configuration supported modular galvanized-steel facade access scaffolding episodes |
| excluded_products | Rental alone; suspended/mobile/mast-climbing systems; falsework/shoring; permanent access; user trade; unreviewed structural repair |
| representative_product | An actual supported modular galvanized-steel facade scaffold kit over its declared accepted elevation and complete episode |
| production_route | Kit issue/owned transport → erection/joining/tying → inspection/handover → actual availability/unavailability → dismantling → cleaning/assessment/return/repair/discard and owned restoration |
| market_state | Accepted complete scaffolding cycle service with actual configuration, dates and custody/fate closure |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supported modular galvanized-steel facade scaffolding cycle service |
| How much | 1 m2 |
| How well | Unique accepted facade elevation under the declared height, loading class, platform/deck/tie design, substrate and inspection gate |
| How long or cycle | One actual stable-configuration episode: dated issue, inspected handover, all available/unavailable intervals, dismantling and assessed return/repair/discard/restoration closure |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Supported modular galvanized-steel facade scaffolding cycle service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | configuration and kit IDs; surveyed unique elevation A and polygons; height; loading class; deck/lift pattern; ties/anchors and substrate release; handover date; actual availability/unavailability intervals and duration; dismantling and return/repair/discard closure; owned restoration; provider and asset coverage |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| unique_elevation | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure A from disjoint accepted facade-elevation polygons of the same stable configuration and closed episode. Exclude unserved gaps, overlap, ground-plan area and repeated deck/lift areas. A must be positive and independently surveyed under cp_scaffold_cycle_material. |
| concrete_numerators | all inventory rows | Mass / Area / Energy / Duration | native unit to kg, m2, kWh or h | Keep each concrete SKU, current state, substance and receiver separate. Use traceable count-to-mass, volume-to-mass or other same-state bridges where needed; divide each attributable episode numerator by A once. Mixed totals are QA rather than exchange identities. |
| time_qualifier | reference product; asset services | Duration | h | Actual dates, availability and unavailability intervals, height, loading and deck/tie layout are required qualifiers. Do not replace the area reference with area multiplied by time. Resolve standalone time support before binding hour exchanges; no default day or shift. |
| energy_integrity | electricity | Energy | kWh | Preserve metered electrical energy and its supply boundary; verify the compatible flow property independently. Do not substitute net calorific value for Energy or equipment useful work for metered use. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary


### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Released existing building/substrate attachment interface, actual kit at issue with condition/custody records, and actual design/configuration and service ownership |
| starting_condition_role | existing_asset_context |
| product_classification_scope | Supported modular galvanized-steel facade scaffolding cycle; narrower context within CPC 3.0 54570, not the whole leaf |
| recursive_input_rule | A separately purchased same-category service is an explicit upstream service with its actual gate and coverage; do not silently unfold or duplicate it inside this episode. Review genuine separate responsibility/handoffs. |
| upstream_dataset_requirement | Use compatible material/service and reusable-asset datasets matching concrete identity, state, geography, technology, provider coverage and actual use. Missing coverage or owned-asset lifetime/capacity is a gap. |
| disclosure | Disclose starting asset/substrate state, ownership, all actual phases/users, external handoffs, geometry cohorts, actual dates, omitted/unresolved quantities and denominator acceptance |


### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| cycle_responsibility | scaffold_cycle | Maintain one event-linked responsibility across kit issue and owned transport, erection/joining/tying and inspection, handover, all actual available/unavailable intervals, dismantling, cleaning/assessment, return/repair/discard decisions and owned site restoration. The erected state is an observed gate inside this node, not another product output. | peri-instructions; cycle-normalization-method |
| components_and_joining | scaffold_cycle | Inventory standards, ledgers, decks, braces, access, guardrails, ties and base supports by actual kit IDs and condition. Observe system-compatible connections and actual support/attachment design. Distinguish reusable kit from consumed replacements, boards, anchors and enclosures; never infer component density or labour rate from area. | peri-instructions; osha-scaffold |
| existing_interface | scaffold_cycle | Declare released substrate/building attachment interface and kit condition at issue. Existing building, substrate and stock are context and asset observations. New consumed attachments and owned restoration remain attributable actual burdens. A genuinely separate material-state or repair handoff requires explicit transfer and boundary review. | peri-instructions; cycle-normalization-method |
| maintenance_limit | scaffold_cycle | Include actual manufacturer-compatible ordinary cleaning, lubrication and evidenced minor maintenance within contractual responsibility. Provider-covered repair stays covered once. Independently owned structural/component welding or a different repair technology requires scope review. User-trade production is outside this service, although its separately evidenced deposited matter is recorded for cleaning closure. | peri-instructions; compatible-pool-ledger-method |
| cohort_and_fates | scaffold_cycle | Retain actual failed inspection, unavailable scaffold, altered geometry, damaged/quarantined components, wear, approved maintenance, return and discard states with dated events. Geometry changes open a separate cohort and review. Unknown component fates prevent complete-cycle acceptance; loss or theft does not prove waste. | peri-instructions; compatible-pool-ledger-method |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Reusable scaffold-kit occupation service (`kit_occupation_service`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Record the actual kit asset and covered occupation interval, including its attributable unavailable time. Physical issued and returned kit mass is a stock observation, not newly purchased steel. The same kit cannot also be auxiliary hired equipment. Range evidence need: kit IDs, dated issue/return and availability records, all users, provider coverage or evidenced owned-asset capacity and use are needed to derive hours; no shift or reuse count is presumed.

- Collection subject: Reusable scaffold-kit occupation service

- Flow property / unit: Duration / h

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_asset`

- Sources: `cycle-normalization-method`; `asset-attribution-method`

#### Collection requirement: Consumed sole boards and support products (`consumed_sole_boards`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Include only nonreturning support products consumed under the actual foundation arrangement. Reusable boards remain in the kit or auxiliary asset ledger. Range evidence need: substrate survey, support layout, actual board SKU, current-state mass and return policy; supports must reconcile to their own input and fate records rather than a generic facade-area rate.

- Collection subject: Consumed sole boards and support products

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Consumed anchors, ties and attachment products (`consumed_anchors_ties`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Separate each consumed attachment SKU from reusable ties and from the pre-existing building. Range evidence need: released substrate, project anchor/tie schedule and item-specific mass bridge; illustrative manufacturer spacing is not a universal count or kg per area. Reconcile actual installation, removal, retained attachment and dispatch fates.

- Collection subject: Consumed anchors, ties and attachment products

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Consumed protective sheets and nets (`protective_sheet_net_products`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Record concrete sheet/net products only to the extent consumed by this configuration episode; reusable enclosure belongs to assets. Range evidence need: actual enclosure geometry, SKU areal mass, deployment and retirement evidence. Its quantity is not determined by facade elevation alone; separate torn, returned and retained states.

- Collection subject: Consumed protective sheets and nets

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Ordinary cleaning and maintenance consumables (`cleaning_maintenance_products`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Separate actual cleaners, lubricants, abrasives and cloth by formulation and SKU during manufacturer-compatible ordinary upkeep. Water, fuel, electricity and packaging have separate roles. This row does not authorize structural welding or an unresearched component-repair route. Range evidence need: observed contamination, maintenance method, formulation and measured issues/residues; cleaning instructions contain no consumption rate.

- Collection subject: Ordinary cleaning and maintenance consumables

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Distinct hired lifting, access and logistics services (`hired_equipment_services`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Identify each actual auxiliary equipment asset and service coverage; exclude the scaffold kit itself. Range evidence need: provider boundary, occupied and working intervals, relevant phase consumers and the accepted denominator. Labour hours or default shifts do not establish equipment-service hours; provider-covered fuel, maintenance and manufacture must not be added again.

- Collection subject: Distinct hired lifting, access and logistics services

- Flow property / unit: Duration / h

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_asset`

- Sources: `cycle-normalization-method`; `asset-attribution-method`

#### Collection requirement: Packaging received with episode inputs (`packaging_received`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Identify each actual packaging material and current state on receipt, separate from its contents and reusable scaffold stock. Range evidence need: supplier packing records, measured packaging mass and unpacking/return events. There is no default packaging fraction; keep each material pool traceable to subsequent return, retention or waste.

- Collection subject: Packaging received with episode inputs

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Direct freshwater abstraction (`direct_freshwater_abstraction`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `elementary`.

Record actual freshwater withdrawal from its specified environmental medium only when the episode directly abstracts it. Range evidence need: source identity, separately metered withdrawal and the wet-operation demand. Do not record the same water again as supplied water; withdrawals and discharges require their respective source and receiving compartments.

- Collection subject: Direct freshwater abstraction

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Usable material returns and transfers (`usable_material_exits`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `product`.

Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return. Range evidence need: matching input material pools and dispatch/weighing records, with wear and contamination resolved; heterogeneous return totals are QA only and give no avoided-production credit.

- Collection subject: Usable material returns and transfers

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Returnable packaging dispatched (`returnable_packaging_exit`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `product`.

Record each reusable packaging product leaving custody in its measured current state. Range evidence need: matching received packaging, custody/dispatch records and actual recipient. Do not simultaneously classify the same packaging as waste or claim avoided manufacture from return alone.

- Collection subject: Returnable packaging dispatched

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Documented discarded scaffold components (`discarded_kit_waste`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `waste`.

Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced. Range evidence need: measured current-state discarded quantity and linked issue/repair/retirement ledger. Missing, stolen, unlocated and unreturned stock remains an explicit fate gap and cannot be converted into this waste by subtraction.

- Collection subject: Documented discarded scaffold components

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Discarded ancillary support and enclosure materials (`support_sheet_residue_waste`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `waste`.

Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver. Range evidence need: their respective consumptive input pools, separately observed adhering contamination and waste-state masses. Reusable assets, retained attachments and still-usable returns are different fates; do not close a mixed-material pool by treating it as one waste flow.

- Collection subject: Discarded ancillary support and enclosure materials

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Discarded packaging materials (`packaging_waste`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `waste`.

Record actual packaging waste for each material/state/receiver after unpacking. Range evidence need: matched packaging receipt, observed contamination, measured discard and mutually exclusive return/reuse/retention decisions. Contents and external deposits must not inflate the matching clean packaging pool without independent evidence.

- Collection subject: Discarded packaging materials

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Oily maintenance and cleaning waste (`oily_consumable_waste`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `waste`.

Identify the actual waste mixture and receiver, separating oil/fluid, cloth or absorber, water and contaminants. Range evidence need: independently measured constituent availability and waste-state mass. Oil input alone cannot bound wet oily cloth mass; do not count the same spent cleaner or carrier in another solid or slurry waste exit.

- Collection subject: Oily maintenance and cleaning waste

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Other engine emission substances to air (`other_engine_species_air`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `elementary`.

Instantiate each actual reported substance and air compartment separately; an umbrella species label has no fixed exchange identity. Range evidence need: exact species/basis, engine/fuel/duty and applicable factor or measurement uncertainty. Fuel mass is not each pollutant mass; avoid counting fossil CO2 or physical dust twice.

- Collection subject: Other engine emission substances to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Uncaptured operation-derived particulate to air (`physical_particulate_air`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `elementary`.

Record only supported uncaptured particles from the owned operation, by size/composition and air compartment. Range evidence need: actual source-material pool, generation and capture measurements/model, and particle basis. Do not invent a dust fraction or use a closure deficit; captured cleaning solids remain in their waste receiver rows.

- Collection subject: Uncaptured operation-derived particulate to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Volatile chemical species to air (`volatile_species_air`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `elementary`.

Identify the emitted constituent and receiving air compartment from the actual coating or maintenance formulation and operation. Range evidence need: independently evidenced factory coating or added cleaner/coating, constituent content, actual application/removal and measured or modelled fates. Total formulated-product mass is not emitted volatile mass.

- Collection subject: Volatile chemical species to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Substance-specific direct releases to water (`specific_direct_water_releases`)

Process / prospective direction / type: `scaffold_cycle` / `outputs` / `elementary`.

Record each actual direct release by substance and receiving water compartment; collected treatment waste is not a direct release. Range evidence need: actual discharge quantity, concentration/speciation and medium, with source-water constituents and added pollutants distinguished. Neither a generic discharge label nor a missing water balance supplies a numerical envelope.

- Collection subject: Substance-specific direct releases to water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

#### Collection requirement: Consumed new scaffold-component replacements (`replacement_kit_products`)

Process / prospective direction / type: `scaffold_cycle` / `inputs` / `product`.

Resolve each actual SKU, composition/state and custody into a separate atomic exchange. This requirement is not a generic pooled flow. A genuinely complete purchased assembly may use its own verified package boundary; its already included parts are not additional purchases.

Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components. Range evidence need: component schedule, measured current-state mass and wear, approved repair and retirement decisions; a stock shortage or unreturned component proves neither consumption nor discard.

- Collection subject: Consumed new scaffold-component replacements

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

## 6. Process Inventory Structure


### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| scaffold_cycle | Supported modular steel facade scaffolding cycle services | required | actual complete episode and declared responsibility | single accountable foreground service node; phase gates are observations | reference_service; 1 m2 |


Reusable kit retains distinct issued, erected, used and return-assessment states. Record actual joining, tying and dismantling from the project design and compatible system requirements without invented performance values. Defective, unaccepted, quarantined, repair-pending or unreturned states do not establish accepted final service; review a genuine independent handoff before changing the node. The conditional roles below are resolved from actual events into zero, one or multiple evidenced concrete exchanges, never bound by a conceptual umbrella.


### Process: Scaffolding cycle (`scaffold_cycle`)


#### Inputs


##### Product flows


###### Diesel fuel (`diesel_fuel`)


Actual upstream fuel supplied to this node, before usable outward exits. Apply fuel_supply_fate to retain the supply burden of nonreturned waste/loss and derive burned activity separately. Keep actual fuel grade, equipment duty, provider coverage, density/state and measurement uncertainty. Range evidence need: equipment and interval logs plus calibrated stock or meter reconciliation; useful lifting work cannot substitute for consumed fuel mass.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Actual upstream supplied fuel mass G_fuel divided once by the independently measured positive accepted lot quantity D_fuel in the declared reference unit; retain all exclusive fuel outlets and derive actual burned B_fuel separately under section 8.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_utility`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`



###### Attributed electricity supply (`electricity`)

Identify actual supply geography, voltage and meter boundary before choosing a concrete exchange. Range evidence need: meter topology, complete intervals, all consumers and device duty records. Record measured kWh; an energy unit group does not establish a compatible flow property and net calorific value must not be relabelled as generic Energy.

- Selected flow: Attributed electricity supply

- Flow property / unit: Energy / kWh

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_utility`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


###### Supplied cleaning and process water (`water_supplied`)

Record water delivered across the technosphere boundary, separately from direct abstraction. Range evidence need: actual wet operations, calibrated draws, recirculation and returns, with measured water-only fates. Internal recirculation does not create repeated incoming water; do not infer a universal water demand from scaffold area.

- Selected flow: Supplied cleaning and process water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_utility`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


##### Waste flows


##### Elementary flows


#### Outputs


##### Product flows


###### Supported modular galvanized-steel facade scaffolding cycle service (`reference_service`)

The sole final service covers one stable configuration from issue through erection and inspected handover, actual availability closure, dismantling, assessed component return/repair/discard and owned site restoration. Independently measure positive unique accepted elevation A; the normalized output is A/A. An open episode, unresolved return fate or unaccepted assembly does not establish this gate.

- Selected flow: Supported modular galvanized-steel facade scaffolding cycle service

- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2

- Amount rule: 1 m2

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

- Range: Final reference self-normalization

  - Range role: `qa_guardrail`

  - Lower: 1

  - Upper: 1

  - Unit: m2

  - Basis: per reference flow

  - Basis kind: `reference_flow`

  - Evidence kind: `calculated_from_collection`

  - Sources: `cycle-normalization-method`


##### Waste flows


###### Removed dry deposits from used scaffold (`removed_deposit_waste`)

Treat deposits arriving with issued kit or accumulating from outside user operations as independently observed incoming matter. Range evidence need: those additions and composition/moisture, cleaning-added solids and removed dry mass with actual waste receiver. A kit issue-minus-return deficit is not a deposit input; reconcile deposits separately from consumed kit and avoid repeating slurry-borne solids.

- Selected flow: Removed dry deposits from used scaffold

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


###### Collected wastewater and cleaning slurry (`collected_wastewater_slurry`)

Represent actual collected liquid waste sent to an identified treatment receiver, retaining its current solids and water composition. Range evidence need: source water, chemicals and entrained solids, measured capture and constituent analyses. Do not treat a mixture mass as water-only, or also report captured solids as dry waste or direct environmental releases.

- Selected flow: Collected wastewater and cleaning slurry

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


##### Elementary flows


###### Carbon dioxide (fossil), to air unspecified (`fossil_co2_air`)

Record actual fossil CO2 from the attributable combustion using measured emissions or a documented applicable method and independent fossil-carbon consumption. This identity represents air unspecified only. The carbon upper constraint is not a fuel-to-CO2 factor and does not assert complete oxidation; preserve carbon in other products or pollutants separately.

- Selected flow: Carbon dioxide (fossil), to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `carbon-oxidation-identity`


- Range: CO2 upper constraint per independently measured fossil carbon burned

  - Range role: `qa_guardrail`

  - Lower: 0

  - Upper: 3.6666666666666667

  - Unit: kg CO2/kg fossil carbon burned

  - Basis: per kg independently measured fossil carbon burned; 44/12 constraint

  - Basis kind: `fuel_inventory`

  - Evidence kind: `method_formula`

  - Sources: `carbon-oxidation-identity`


###### Water vapour, to air unspecified (`water_vapour_air`)

Use this air-unspecified H2O identity only for independently supported actual evaporation from owned wet operations. Range evidence need: independently measured available water-only pools and an evaporation measurement/model with uncertainty. A water closure residual is a data gap, not vapour; zero also needs evidence, and a more specific compartment needs its own identity.

- Selected flow: Water vapour, to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_episode | scaffold_cycle | Attribute direct events to the actual configuration and phase first; all erection, idle, unavailable, test, dismantling and ordinary rework burdens belonging to this episode remain in its numerator. Repeated inspections or use periods do not create additional accepted area. | cycle-normalization-method |
| shared_consumers | scaffold_cycle | Enumerate every real kit, auxiliary equipment and meter consumer and relevant period, including outside consumers. Subdivide actual measured use first; allocate only the remaining shared burden by a documented causal capacity/use basis with exclusive shares and uncertainty. Reconcile the whole provider/meter total before dividing this episode share by A. | asset-attribution-method |
| asset_coverage | scaffold_cycle | Keep scaffold-kit occupation and auxiliary hired equipment mutually exclusive for each actual asset. Count provider-included manufacture, fuel and maintenance once. For self-owned assets require evidenced service capacity/lifetime, actual use, wear, repair and damage/retirement attribution, or declare a gap. No assumed reuse count and no full new-kit manufacture per deployment. | asset-attribution-method |
| replacement_and_return | scaffold_cycle | Avoid charging the same replacement manufacture both as consumed product and unadjusted kit-service manufacture. Used kit return records its worn/cleaned/repair state and is not unused input return. Product/waste exits retain real recipients; return or recycling alone supplies no automatic substitution credit. | asset-attribution-method; compatible-pool-ledger-method |
| rejected_cycle | scaffold_cycle | Link failed inspection, repeat joining, cleaning, quarantine, approved repair and exit decisions to the originating kit/configuration. Retain their actual burdens and unresolved fates. A partial handover, changed cohort or open return ledger cannot be allocated into a fictitious completed service output. | cycle-normalization-method; compatible-pool-ledger-method |


## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols below are compact node-owned event ledgers. Raw quantities are retained before attribution or conversion; their aggregation delivers the normalized amount per reference flow using the section 8 methods. Each actual exchange retains its own identity/state/receiver numerator, while aggregate totals serve reconciliation only.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_scaffold_cycle_material | scaffold_cycle | configuration geometry; materials; product and waste exits | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty | Survey disjoint accepted elevation polygons independently and reconcile handover and closure. Weigh each concrete material/current state and dispatch; retain counts and traceable same-state conversion when direct weighing is unavailable. Observe outside deposits and constituent moisture independently; identify actual receiver and phase. | kg; m2 | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | survey and acceptance records; scale calibration; component/SKU and dispatch documents; moisture/constituent evidence |
| cp_scaffold_cycle_utility | scaffold_cycle | fuel; electricity; supplied water | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | Read calibrated fuel/utility meters and opening/closing stocks over the entire owned duty, idle, test and rework intervals. Record supply identity and meter topology; reconcile every consumer and provider-covered quantities before episode attribution. Convert native units only using an independently evidenced same-state bridge. Supply and burn are separate under fuel_supply_fate; collect every exclusive outlet, actual denominator and its unit, keep nonreturned waste/loss supply burdens, and report missing fates. | kg; kWh | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | meter calibration and readings; supply documents; equipment/phase log; allocation reconciliation |
| cp_scaffold_cycle_asset | scaffold_cycle | kit occupation; distinct auxiliary services; asset observations | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty | Follow asset and component IDs from issue through handover, actual available/unavailable periods, dismantling and assessed return/repair/retirement. Record every user, provider boundary and actual occupation/use intervals. For self-owned attribution collect actual lifetime/capacity, use, wear and damage evidence rather than assuming cycles. | h; kg observations | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | custody and condition ledger; dated user/availability log; provider contract; evidenced owned-asset attribution |
| cp_scaffold_cycle_release | scaffold_cycle | abstraction; substance/compartment releases | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty | Measure actual abstraction and releases by source/substance/compartment; use documented applicable emission or evaporation models only with observed activity, composition and uncertainty. Preserve raw concentration/flow and capture records; separate direct discharge from treatment waste and fossil carbon from water pools. | kg | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | sampling and analytical QA; meter/model provenance; activity and composition records; capture/receiver evidence |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area | reference_service | A = sum of disjoint accepted facade-elevation polygon areas for the stable configuration. Remove unserved gaps and duplicate overlap; do not sum decks, lifts, repeated days or ground plan. | survey; configuration; gate; cp_scaffold_cycle_material | A | cycle-normalization-method |
| cycle_numerators | all inventory rows | For each concrete identity/state/receiver j, N_j = attributed episode quantity in its declared numerator unit, after measured same-state conversion and exclusive attribution; E_j = N_j / A. Retain distinct j values; heterogeneous totals only test ledger completeness. | N_j; A; cp_scaffold_cycle_material; cp_scaffold_cycle_utility; cp_scaffold_cycle_asset; cp_scaffold_cycle_release | E_j | cycle-normalization-method; asset-attribution-method |
| final_area_output | reference_service | Final output = A / A = 1 m2 for the complete accepted cycle, with actual duration and configuration qualifiers retained. No other observation self-normalizes into a final product. | A; closed gate; cp_scaffold_cycle_material | 1 m2 | cycle-normalization-method |
| exclusive_attribution | all inventory rows | Attribute independently metered events first. Partition only the residual shared provider/meter burden among all evidenced consumers by actual causal use/capacity; preserve exhaustive exclusive shares and uncertainty. Provider-included and separately recorded quantities must be reconciled before calculating E_j. | consumer/phase register; provider coverage; cp_scaffold_cycle_asset; cp_scaffold_cycle_utility | attributed N_j | asset-attribution-method |
| compatible_closure | all inventory rows | For each compatible material/state/constituent pool, opening stock + observed external additions = closing stock + independently measured retained, returned, discarded and released constituents + residual. Evaluate uncertainty in residual; do not generate a balancing exchange. Keep used kit state and external deposits distinct. | state/constituent ledgers; cp_scaffold_cycle_material; cp_scaffold_cycle_release | closure findings | compatible-pool-ledger-method |
| water_only_closure | water_supplied; direct_freshwater_abstraction; collected_wastewater_slurry; water_vapour_air; specific_direct_water_releases | Reconcile independently observed water-only inputs and opening water against water-only closing/retained/returned content, collected liquid waste, supported evaporation and direct releases. Internal recirculation cancels; solids and chemicals are separate constituents. Residual does not establish evaporation. | water-only measurements; cp_scaffold_cycle_utility; cp_scaffold_cycle_release; cp_scaffold_cycle_material | water closure findings | compatible-pool-ledger-method |
| fossil_carbon_constraint | fossil_co2_air | For independently measured fossil carbon burned C_f, fossil CO2 <= C_f * 44 / 12. Record actual CO2 by applicable measurement/model; account separately for carbon in other species and residual uncertainty. This upper constraint does not assume complete oxidation and is not kg CO2 per kg diesel. | C_f; actual emission evidence; cp_scaffold_cycle_utility; cp_scaffold_cycle_release | fossil-carbon QA | carbon-oxidation-identity |
| fuel_supply_fate | diesel_fuel | For each actual fuel identity and nonoverlapping node/event period, G_fuel = opening usable fuel + external receipts - closing usable fuel stock, including equipment tanks, with container tare excluded and same-boundary issues/transfers not added as new receipts. G_fuel is the gross physical product input before genuine usable outward U_fuel, outward transfer X_fuel, collected unburned fuel W_fuel and uncontained fuel P_fuel. Keep those exclusive outlets separate and resolve actual product, waste stream or substance/medium identities; a total spill is an incident diagnostic, never another deduction. W_fuel and P_fuel mean the contained fuel mass, not the total mass of contaminated absorbent or wastewater. B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel only with a complete supported fate ledger; unknown fate stays a gap and is not presumed burned. Only independently supported B_fuel drives combustion emissions. Retain upstream supply burdens of all nonreturned unburned fuel, waste and loss; only original unused-material burden may follow a documented usable exit, without a second net-input deduction or avoided-production credit. Carry opening/closing stock burden once. Normalize each physical quantity once by D_fuel, the independently measured positive accepted lot quantity in this PCR reference unit (accepted volume, area, axial length, steel mass or complete accepted count as defined in sections 3-4), never by a fuel quantity or an intermediate output. Existing actual_consumed/fuel-use fields are burn-activity records; they cannot replace G_fuel as the upstream input. Provider-included fuel and its emissions have one owner; do not add overlapping foreground supply or combustion. | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration_gate | reference_service | Retain configuration/kit IDs, surveyed elevation polygons and positive A, height, loading class, deck/lift and tie pattern, substrate release, handover and dismantling/return/restoration records, actual dated availability and unavailability and responsible parties. Changed geometry requires a separately reviewed cohort. | survey, design and closed acceptance journal |
| actual_condition | all inventory rows | Each conditional card needs actual yes/no/unresolved occurrence and evidence. Instantiate each concrete material, SKU, state, species and receiver separately with its own native observation, conversion and N_j/A; unresolved occurrence cannot be set to zero. | event evidence and concrete exchange register |
| temporal_asset_coverage | scaffold_cycle | Connect all phase events, inputs, assets, exits, deposits and maintenance to actual dates and IDs. Enumerate all kit/equipment/meter consumers and period shares. Retain provider coverage or evidenced owned lifetime/capacity, actual use, wear, damage, repair and retirement; disclose missing evidence. | phase ledger; contracts; asset condition and attribution reconciliation |
| reject_and_fate | scaffold_cycle | Identify unready or altered scaffold, failed inspections and defective/quarantined components. Link repeat work and actual ordinary maintenance, external repair, usable return, retention or documented discard to the originating episode. Open return/fate is incomplete; lost/stolen stock is not waste. Used kit is not an unused return. | inspection and custody/fate records; positive discard/receiver evidence |
| compatible_constituents | all inventory rows | Preserve independent incoming/use-period deposits and actual moisture, contamination and constituent bridges. Close each compatible material/state pool; do not equate whole wet mixture to its dry constituent. Separate water-only and fossil-carbon accounts; do not add O2 or fabricate dust, waste, vapour or other balancing flows. | independent measurements; compositional analyses; uncertainty and residual report |
| range_evidence | all inventory rows | The 25 cards without numeric ranges each state the concrete missing evidence and physical constraint in their description. Collect those records and assess the actual envelope before treating a range as known. Do not insert broad arbitrary bounds or imply that manufacturer safety/design examples are LCA consumption factors. | row-specific collection and physical-QA assessment; supported normalization/carbon ranges |
| identity_support | all inventory rows | Confirm actual flow identity and compatible support independently before final exchange creation. Keep Area and Mass support distinct from unresolved Energy and standalone Duration support. Identity confirmation is separate from quantity, range, actual activation and engineering acceptance. | identity/support verification and actual foreground evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | reference_service | Require positive independently measured A, inspected handover, dated availability closure, dismantling and reconciled component return/repair/discard plus owned restoration. Count each accepted elevation once; verify all required qualifiers and separate changed geometry. | cycle-normalization-method |
| identity_and_activation | all inventory rows | Resolve each instantiated concrete identity, state, property, unit and receiver before final exchange delivery. Report actual occurrence as yes/no/unresolved with evidence; no evidence is not zero. A verified UUID does not prove quantity or activation. Use unspecified-air fixed identities only for that compartment. | compatible-pool-ledger-method |
| phase_and_asset_coverage | scaffold_cycle | Check phase event continuity, kit/component identities and every shared consumer/period. Verify one owner and no duplicate kit, manufacture, maintenance, fuel or meter burden. Check failed/reworked states against their actual fate and prohibit unaccepted service in the denominator. | asset-attribution-method; cycle-normalization-method |
| physical_qa | all inventory rows | Reconcile compatible material/current-state/constituent pools with opening and closing stocks and separately observed additions. Test water-only and fuel-carbon constraints separately. Never balance fuel kg against CO2 kg or invent oxygen, waste, dust, vapour or other exchanges from residuals. | compatible-pool-ledger-method; carbon-oxidation-identity |
| range_and_gaps | all inventory rows | Preserve the two supported ranges and each of the other 25 row-specific range evidence needs. Assess the actual physical constraint using measured inputs and fates; missing range evidence, uncertain state, support identity or asset attribution remains a disclosed gap, never an invented bound. | cycle-normalization-method; compatible-pool-ledger-method |
| report_completeness | foreground dataset | Report accepted input, performed and skipped checks, findings, uncertainty and completeness. An automated structural pass does not certify engineering compliance, final UUID readiness or closure of an incomplete cycle. | cycle-normalization-method |
| validate_fuel_supply_fate | diesel_fuel | Check G_fuel, B_fuel and all exclusive outlets against the actual fuel protocol, stock and provider coverage. Nonreturned unburned waste/loss keeps its upstream burden; unresolved fate, fuel constituent or positive D_fuel blocks a complete quantitative fuel inventory. Do not substitute burned activity for purchased fuel or deduct total spill plus its component outlets. |  |
| validate_physical_slurry_stream | all collected wastewater/slurry | A wastewater/slurry card denotes one actual physically unseparated liquid/solid mixture at one receiver gate. Independently collected liquids, separated solids or different treatment destinations require distinct actual exchanges; do not recombine them to fit this card. Mixture mass and constituent water/solids are nonadditive views. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground scaffolding-cycle data package with process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible supported modular galvanized-steel facade scaffold episodes with explicit area, configuration, actual duration and asset/provider coverage |
| excluded_use | Engineering safety certification; rental alone; other scaffold systems; user-trade inventory; unqualified area-day comparison; incomplete cycles |
| required_metadata | Site/geography; actual configuration/kit IDs; positive A and polygons; height/load/decks/ties/substrate; phase dates and actual availability duration; handover/closure; concrete identities; asset/provider and meter coverage |
| required_quality_disclosure | Performed/skipped checks and completeness; unresolved identities, support, ranges, fates and owned-asset attribution; measured conversions, factor/model applicability, uncertainty and closure residuals |
| update_trigger | Configuration/geometry, load/deck/tie, source/technology, ownership/provider coverage, duration/cohort, maintenance/fate evidence or identity/method changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| peri-instructions | handbook | PERI UP Scaffolding Kit, Core components, Assembly instructions, Version 2.2, pp. 8, 10, 12–14. https://www.peri.ie/dam/jcr%3A8e2c13f7-1dd2-337d-a227-cb3329355256/peri-up-scaffolding-kit-core-components-instructions-for-assembly-and-use.pdf | Manufacturer-specific cleaning/maintenance, component condition, support/anchoring, transport, marking and inspected handover. No universal lifespan, reuse count, consumption rate or safety threshold is adopted. |
| osha-scaffold | official_guidance | US OSHA, Scaffolding eTool, General Requirements, Scaffold Platform Construction and Criteria for Supported Scaffolds. https://www.osha.gov/etools/scaffolding/general-requirements | Rigid-supported distinction and support/bracing/platform context. US safety guidance does not provide an LCA inventory rate or replace actual local design and acceptance. |
| unsd-cpc21-scaffold | official_guidance | UNSD, CPC Version 2.1, 54570 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54570 | Historical context for erection/dismantling and associated rental versus rental alone. Explicitly not a CPC 3.0 explanatory note. |
| cycle-normalization-method | method_factor | PCR normative method defined in sections 3, 4 and 8: unique accepted facade elevation and complete-episode normalization. | Author-defined collection/normalization contract, not an external publication or empirical rate. |
| asset-attribution-method | method_factor | PCR normative method defined in sections 7 and 8: exclusive event/provider/asset attribution. | Author-defined attribution and coverage method; real lifetime/capacity/use evidence remains necessary. |
| compatible-pool-ledger-method | method_factor | PCR normative method defined in sections 6 and 8: compatible current-state/constituent closure. | Author-defined physical QA and independent deposit/water accounting; residuals remain findings. |
| carbon-oxidation-identity | method_factor | Normative carbon accounting identity defined in section 8: fossil-carbon CO2 mass upper constraint 44/12. | Molecular mass constraint only; no empirical fuel factor, complete oxidation or invented external publication. |
