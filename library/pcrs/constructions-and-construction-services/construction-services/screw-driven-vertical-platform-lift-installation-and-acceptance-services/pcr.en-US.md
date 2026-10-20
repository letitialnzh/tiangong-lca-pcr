---
pcr_id: pcr.screw-driven-vertical-platform-lift-installation-and-acceptance-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Screw-driven vertical platform lift installation and acceptance services

## 1. Scope and Applicability

This PCR covers first installation and acceptance of one fixed, unenclosed, two-landing ACME screw-driven wheelchair vertical-platform lift in a documented self-supporting-width configuration. The authorized mechanic integrates the supplied tower/platform with the ramp, guards, landing gate, controls, interlocks, anchors and declared final electrical connection. The accepted installation is the output; later passenger journeys and maintenance are outside this construction-stage service. It is suitable for indoor or outdoor projects only where the actual model and jurisdiction permit.

Exclude hydraulic or traction lifts, escalators and travelators, mobile lifts, wide wall-supported configurations, factory enclosures, constructed hoistways and pits, onsite lift manufacture, general building construction and subsequent routine operation. Required job-specific concrete pad and dedicated supply preparation must be explicitly owned and quantified upstream; their new construction cannot be treated as an unburdened existing host. If no accepted bounded preparatory handoff exists, include that preparation in the foreground package with measured work and appropriate additional processes before using this PCR. The route must fail applicability if its actual support/configuration requires an excluded structure. [`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.screw-driven-vertical-platform-lift-installation-and-acceptance-services |
| classification_refs | CPC 3.0 54691; narrower scope than all lift/escalator installation |
| covered_products | Fixed unenclosed two-landing self-supporting-width screw-platform lift installation, commissioned at declared pad and dedicated supply interfaces |
| excluded_products | Hydraulic/traction equipment; escalators/travelators; mobile/enclosed/pit/hoistway or wide wall-supported configurations; later lift operation or maintenance |
| representative_product | Savaria Multilift standard unenclosed fixed screw-drive configuration, qualified against actual current site-specific drawings |
| production_route | Factory kit receipt; interface acceptance; authorized site assembly/anchoring/final connection; commissioning, correction/retest and inspection; owner handover |
| market_state | Completed accepted installation service at its documented first commissioning gate; not a sold generic machine or passenger transport |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation |
| How much | 1 item |
| How well | Actual manufacturer/model/serial and drawing revision; verified self-supporting width, travel, rated load and access arrangement; pad/anchor/fascia/gate and dedicated supply interfaces accepted; authorized commissioning and required jurisdiction inspection passed; corrections closed |
| How long or cycle | One first-installation job from job-attributable receipt/mobilization and preparatory handoffs through signed handover, including delays, corrections and retests. Reusable equipment is attributed over documented complete-life periods across this and other jobs; no assumed lift operating lifetime or passenger cycle count. |
| reference_flow_link | `accepted_lift_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Manufacturer/model/serial; actual site-specific drawing and authorized instruction revisions; jurisdiction and approval; self-supporting width; travel/rated load/access; platform/ramp/guards and gate/interlock schedule; pad/foundation/anchor/fascia interfaces; supply endpoint/electrical ratings and connection owner; kit bill of supply; actual commissioning/inspection criteria and results; handover date/installer; upstream preparation ownership; asset attribution periods |

Count identifies the accepted job and its configuration. It does not make installations with different travel, access, foundation, supply or safety requirements equivalent. Planning and owner documents are route evidence, not substitutes for current authorized site-specific installation and test instructions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One accepted complete installation is 1 item; collect cp_acceptance. Unaccepted assemblies and repeated tests are not additional accepted outputs. |
| `preserve_physical_units` | all inventory rows | Actual exchange-specific property | Actual physical unit | Keep electricity in kWh, freight in tkm, asset use in h, and each material in its measured kg or verified count. Verify the compatible property/unit-group chain for every final concrete exchange; missing support is a disclosed gap, never a conversion to item count. |
| `configuration_and_test_units` | cp_acceptance; cp_interfaces | Actual recorded characteristic | Actual unit and tolerance | Record geometry/travel in stated mm or m, load in stated kg, electrical quantities in V/A/Hz, alignment/anchor and test requirements in their authorized units, durations in h or min, with actual tolerances and acceptance source. Do not apply nominal planning dimensions, power ratings or cycle limits as universal settings. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-made screw-lift kit delivered for the accepted job; actual concrete pad and dedicated electrical supply termination with named providers, quantities, approval and separate bounded upstream datasets where newly constructed |
| starting_condition_role | Purchased equipment and explicitly owned upstream preparatory services; an accepted existing pad/supply may be an existing host only with evidence of pre-existence and actual attribution disclosure |
| product_classification_scope | Installation of the selected screw-platform route, narrower than the CPC installation leaf |
| recursive_input_rule | A purchased service in this same installation category must have a nonoverlapping supplier gate and explicit burden coverage. Do not recursively add a complete installation service as an input to its own complete output. |
| upstream_dataset_requirement | Link the complete kit and each actual extra component, pad/supply work and bounded equipment/freight provision to compatible upstream datasets. Any supplier-included service/material/packaging or capital burden has one owner only. New pad/supply construction needs measured provider scope; absence blocks completeness. |
| disclosure | Declare pad and electrical handoff endpoints and responsibility, pre-existing versus new work, actual drawings and permits, kit composition, all equipment/provider coverage and complete-life periods, excluded passenger service/maintenance and remaining site responsibilities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `installation_gate` | lift_installation | Include authorized alignment/anchoring, platform/ramp/guards, job-required landing gate and controls/interlocks, fascia/pinch-point protection, final connection, commissioning electricity, required functional/safety checks, jurisdiction inspection, correction/retest and owner records/training. The actual authorized instructions and inspector acceptance define tests and pass limits; owner-use descriptions alone are not a complete commissioning protocol. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `preparatory_work_owner` | pad_work; supply_work | Record job-specific foundation/pad and dedicated electrical preparation as separate upstream accepted services with provider, measured quantities, exact endpoints and gate. Include their upstream burdens once. Existing host treatment requires positive pre-existence evidence; new work with no bounded owner must be brought into foreground measured scope, not omitted. Exclude arbitrary whole-building burdens. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `kit_and_extras` | factory_lift_kit; anchors; connection_components; consumables | Reconcile the actual factory bill of supply: tower/screw/motor/platform, ramp/guards/underpan, gates/controls/interlocks/options and factory lubricant belong to the kit where supplied. Add only separately supplied anchors, fascia/gate parts, wiring/connection components and actual extra lubricant/cleaner. No hydraulic oil is implied by screw drive. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `asset_periods` | equipment_provision | Identify each reusable lifting/access/installation/test asset and its owner, consuming jobs/nodes and reporting periods. Account for production, deployment/use, maintenance/replacement and eventual removal/end of life through an actual bounded provider dataset or documented complete-life attribution. Explicitly cover omitted provider phases separately; a hire-hour invoice alone cannot erase capital burdens. | |
| `physical_custody` | all inventory rows | Inventory gross job receipts and issues by actual identity, real outward usable returns, retained closing stock with carried-forward burden, waste and characterized releases. Closing stock is a balance state, not an outward product. Expand each variable card into zero, one or multiple real identities; never sum unlike materials, services or pollutants as one flow. | |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Separately supplied compatible lift anchoring components (`anchors`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Actual separately supplied anchors/fixings join the self-supporting base to the accepted pad. Expand by actual material, anchor specification and supplied state; omit components already included in the kit. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Collection subject: Separately supplied compatible lift anchoring components
- Flow property / unit: Mass / kg
- Amount rule: Measured gross kg received/issued by actual anchor identity; reconcile installed, damaged, returned and retained quantities and authorized anchoring record.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Actual anchor schedule, component masses and issue/replacement records are required; planning anchor layouts supply no universal kg or count factor.

#### Collection requirement: Separately supplied fascia, gate and electrical connection components (`connection_components`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Expand the actual separate fascia panels, gate/lock/control parts, cable/conduit/connectors and final connection hardware by distinct material/product identity and state. These form one role family, not one aggregate material flow. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Collection subject: Separately supplied fascia, gate and electrical connection components
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual component kg received/issued by distinct identity using supplier mass or calibrated weighing; reconcile installed quantity, real outward usable returns, waste and closing stock, and kit/upstream supply-work inclusions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Require actual drawings, bill of supply and component masses; no common mass range or mixed-material sum is valid.

#### Collection requirement: Actual separately consumed installation lubricant or cleaning products (`consumables`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Include only documented extra lubricant/cleaner or other joining consumable used before this handover. Expand actual formulations and concentrations; factory filling remains in the kit. A screw-driven route does not create a hydraulic-oil input. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Collection subject: Actual separately consumed installation lubricant or cleaning products
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual kg received/issued to this job by product identity; reconcile consumed installation quantity, real outward usable returns, waste and retained closing stock. Document zero separate consumable receipt/use where applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Actual authorized task, product composition and measured consumption/returns are needed; later scheduled grease use is outside this job.

#### Collection requirement: Separately attributable incoming transport and protective packaging (`packaging`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Expand actual wood/cardboard/plastic or reusable packaging by identity and ownership. Record physical packaging for custody balance; do not add another upstream material burden when supplier-kit coverage already includes it.

- Collection subject: Separately attributable incoming transport and protective packaging
- Flow property / unit: Mass / kg
- Amount rule: Gross measured packaging kg by actual material; reconcile reusable return, retained packaging and waste, with one upstream burden owner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need actual packaging receipt/weights, supplier inclusion and reuse records rather than a generic packaging fraction.

#### Collection requirement: Attributed reusable installation, lifting, access and test equipment provision (`equipment_provision`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Record each actual reusable apparatus separately with bounded provider coverage or owned complete-life production/use/replacement/removal attribution. Identify this installation and other consuming jobs/periods; do not include lifetime passenger-lift operation.

- Collection subject: Attributed reusable installation, lifting, access and test equipment provision
- Flow property / unit: Duration / h
- Amount rule: Record asset-specific actual use h and actual provider service scope; attribute complete-life burdens using documented total service across all consuming periods. Retain separately owned electricity/fuel only when provider coverage excludes it.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need asset IDs, metered/logged hours, service-life records, replacement/end-of-life scope and uncertainty; no assumed lifetime, utilization or hire-hour burden factor.

#### Collection requirement: Actual job-attributable inbound and return freight services (`freight`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Expand actual freight legs/provider/mode by transported kit, material or residual/return custody. Include mobilization/demobilization where not already included in equipment or supplier provision.

- Collection subject: Actual job-attributable inbound and return freight services
- Flow property / unit: Transport / tkm
- Amount rule: Use actual load tonnes and travelled km for each leg, accounting for actual shared-load/return allocation and supplier inclusion; keep tkm service units and verification gaps explicit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

Range evidence need: Need actual dispatch mass, route distance, mode/load allocation and return trips; no universal travel distance or empty-return factor.

#### Collection requirement: Actual fuel for in-scope installation or lifting equipment (`fuel`)

Process / prospective direction / type: `lift_installation` / `inputs` / `product`.

Conditional actual fuel for combustion equipment serving this job, expanded by supplied fuel identity and composition. No fuel is inferred merely from the presence of reusable equipment. This row records consumed fuel only; unused/returned fuel is reconciled separately in the fuel ledger and is excluded from usable_material_return so it cannot be counted twice.

- Collection subject: Actual fuel for in-scope installation or lifting equipment
- Flow property / unit: Mass / kg
- Amount rule: Measured fuel kg from weighed or supplier-traceable records; any volume-to-mass conversion uses actual density/temperature evidence. Exclude fuel already included in provider service coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual equipment fuel records and conversion uncertainty, or evidenced zero combustion use; no generic diesel factor.

#### Collection requirement: Actual outward usable installation material or reusable packaging return (`usable_material_return`)

Process / prospective direction / type: `lift_installation` / `outputs` / `product`.

Expand each actual usable surplus material/packaging identity and recipient. This product custody exit is separate from waste; rejected parts require documented usability before product classification. Consumed-fuel input uses its separate ledger; unused fuel is excluded from this return family.

- Collection subject: Actual outward usable installation material or reusable packaging return
- Flow property / unit: Mass / kg
- Amount rule: Actual outward kg by material identity and transfer record; reconcile gross receipts/issues, installed use and closing stock with declared carried-forward burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_custody`

Range evidence need: Require actual weights and custody/quality acceptance; neither retained stock nor claimed avoided production supplies a return estimate.

#### Collection requirement: Actual installation and correction waste sent to a named route (`installation_waste`)

Process / prospective direction / type: `lift_installation` / `outputs` / `waste`.

Expand discarded damaged components, offcuts, nonreturnable packaging and contaminated consumables by actual composition/hazard state and treatment destination. Rejected assembly state originates in lift_installation; record correction here or actual disposal exit, retaining its burdens.

- Collection subject: Actual installation and correction waste sent to a named route
- Flow property / unit: Mass / kg
- Amount rule: Measured outward kg per actual waste identity, contractor and route; connect replacement material, handling and retest records. No accepted-output credit for unresolved rejects.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_custody`

Range evidence need: Need waste weights, characterization, transfer/treatment records and actual reject dispositions; no fixed scrap or recovery yield.

#### Collection requirement: Actual characterized elementary releases from installation tasks (`direct_releases`)

Process / prospective direction / type: `lift_installation` / `outputs` / `elementary`.

Only actual releases across the environment boundary belong here, each expanded by substance/species or particle class and receiving air/water/soil compartment. Captured drilling dust or spent cleaner sent offsite is waste. No hydraulic leak, generic VOC sum or upstream electricity emission is presumed.

- Collection subject: Actual characterized elementary releases from installation tasks
- Flow property / unit: Mass / kg
- Amount rule: Measured release kg or calculation from actual task activity and a justified substance-specific factor, with capture, receiving medium and uncertainty; document screening and evidenced zero where applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need task-specific monitoring or supported species/compartment factors and measured activity; unknown pollution identity is a collection gap rather than a broad flow UUID.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lift_installation` | Fixed screw-platform lift assembly, connection and commissioning | required | Actual fixed unenclosed two-landing self-supporting-width route and accepted pad/supply handoffs; authorized installation and actual commissioning requirements available | Independent assembly/integration of kit, anchoring and connection roles into one accepted commissioned installation. Receipt/document checks remain inside this node. Nonconforming assemblies loop here for correction/retest or leave by actual return/waste custody; failed states are never accepted output. | 1 item accepted installation |


### Process: Fixed screw-platform lift assembly, connection and commissioning (`lift_installation`)

#### Inputs

##### Product flows

###### Complete factory screw-driven wheelchair platform-lift kit at job supply gate (`factory_lift_kit`)

The actual complete kit crosses the job boundary from its supplier. Identify model/serial/options and the bill of supply; independently supplied extras are separate. It is not raw metal, a hydraulic elevator or a lift operating service. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Complete factory screw-driven wheelchair platform-lift kit at job supply gate
- Flow property / unit: Number of items / item
- Amount rule: Record gross kits supplied and actually issued to this job by configuration, including replacements; reconcile real returned kits and closing stock without netting returns twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Obtain job kit/replacement/return records by serial and complete-kit boundary; 1 accepted installation does not prove exactly 1 gross kit was consumed.

###### Accepted job-specific concrete pad preparation service (`pad_work`)

Use only for a real separately owned new or modified pad handoff, not a documentation mirror. The provider service includes measured actual excavation/subbase/reinforcement/concrete/insulation where required, plant, waste and acceptance to the job-defined boundary. Pre-existing pad evidence is recorded without pretending new work is free. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Accepted job-specific concrete pad preparation service
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable accepted bounded pad-work service quantity and underlying measured work; zero new work requires pre-existence evidence. If no adequate upstream handoff exists, model measured preparatory work explicitly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_interfaces`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Actual foundation design, provider work quantities and accepted interface are needed; nominal outdoor slab drawings are not a universal volume/mass range.

###### Accepted job-specific dedicated electrical supply preparation service (`supply_work`)

Use only for the separately owned upstream dedicated supply/disconnect/termination preparation with defined endpoint; in-scope final lift connection remains the installation responsibility. New cable/duct/protection work and its plant/waste cannot disappear. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Accepted job-specific dedicated electrical supply preparation service
- Flow property / unit: Number of items / item
- Amount rule: Record actual accepted supply-work service and underlying measured cable/protection/route quantities, identifying final connection ownership; zero new work needs existing-interface evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_interfaces`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Require actual electrical design and measured provider bill of work; conflicting nominal public ratings cannot establish the actual service quantity or rating.

###### Installation and commissioning electricity supplied to the job (`electricity`)

Separately meter actual lift commissioning/test electricity, tool charging and electrically powered handling where in scope. Keep later passenger operation outside; avoid charges already included by a bounded provider.

- Selected flow: Installation and commissioning electricity supplied to the job
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable kWh from job meters/submeters or documented actual equipment runtime and measured demand, including failed tests and retests; disaggregate circuits and provider coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter/charging/test logs and metering uncertainty; motor nameplate power and advertised installation duration are not a consumption range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation (`accepted_lift_installation`)

The true final service crosses to the owner only after the authorized installer accepts assembly/anchoring/interfaces, actual safety and functional commissioning and required jurisdiction inspection pass, all corrections/retests close, and records/training/maintenance duties are handed over. Lift acceptance alone does not establish whole-building accessibility compliance. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: The exact amount defines the reference unit, not an empirical yield range. Collect actual accepted job count, configuration and signed commissioning/inspection/handover records; no default failure rate.

###### Actual outward usable factory kit or lift component return in counted supply state (`usable_kit_return`)

Record real outward return to supplier/another identified custodian only for complete counted kits or traceable counted components with compatible identities. Internal correction/retest stays within lift_installation; closing stock never leaves as a fictitious product.

- Selected flow: Actual outward usable factory kit or lift component return in counted supply state
- Flow property / unit: Number of items / item
- Amount rule: Gross actual outward counted units by matching incoming identity and transfer record. Keep the original receipt gross; never net the same return before counting this output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_custody`

Range evidence need: Need actual return authorization, physical transfer and product usability evidence; no assumed return fraction.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_job_burdens` | lift_installation | Attribute direct installation, replacement/correction and failed/repeated-test burdens to the accepted job. Do not produce an accepted output until defects and required inspections close. A terminated/unaccepted job retains a separately disclosed failed-job disposition; it is never silently discarded or counted as a second accepted service. | |
| `asset_complete_life_attribution` | equipment_provision | For each shared reusable asset enumerate production/acquisition, deployment/use, maintenance/replacement and removal/end-of-life phases, all consuming jobs/nodes and reporting periods. Prefer actual service-meter hours as the causal allocation basis; justify another basis where hours do not represent wear/service. Reconcile attributed shares over the complete service denominator, record period-specific decisions and uncertainty, and avoid multiplying a full-life burden once in each year. Unresolved replacement or termination coverage blocks finalization. | |
| `provider_and_energy_ownership` | all inputs | Reconcile provider coverage with direct material/energy/freight/asset rows. One supplied kit or bounded service cannot carry the same component, tool energy, packaging or capital burden a second time. Pad and supply burdens use the actual bounded handoff quantity with no unrelated whole-building allocation. | |
| `returns_and_recovery` | usable_kit_return; usable_material_return; installation_waste | Use actual gross physical custody and consistent burden transfer. Retained stock carries disclosed burden forward and is not an output. Usable outward returns transfer their recorded burden once; waste follows its real treatment. Retain installation/correction/test burdens on this job; no automatic displaced-production/recycling credit or arbitrary negative input. | |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | lift_installation | Kit, actual extras, consumables and packaging | receipt/issue/weighing | job_id; date; supplier; identity; serial; specification; supplied_state; kit_inclusion; gross_receipt; actual_issue; installed_quantity; return_quantity; closing_stock; unit; measurement_uncertainty | Reconcile supplier bill of supply and serials with gross receipts, job issues, calibrated weighing or traceable supplier masses for each distinct identity. Retain closing stock with its burden owner. Normalize only job-attributable quantities by accepted installation count of the same configuration. | item; kg | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Invoices, calibrated scale records/supplier masses, drawings, signed job issue/custody reconciliation; no mixed-identity sum |
| cp_interfaces | lift_installation | Pad and dedicated electrical preparatory handoffs | design/quantity/acceptance | job_id; interface_id; provider; owner; existing_or_new; boundary_endpoint; drawing_revision; measured_work; quantity; unit; electrical_rating; tolerance; acceptance_source; acceptance_result; final_connection_owner; upstream_dataset_coverage | Verify actual foundation/supply design and completed work at exact endpoints; record physical work quantities and separately owned upstream dataset coverage. Existing host needs pre-existence evidence. Normalize real job-specific services by accepted installation count; do not replace missing new works with zero. | Actual mm; m; m3; kg; V; A; Hz; service item | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Approved current site-specific drawings, concrete/pad/anchor and electrical signoff, measured bills of work, provider scope and boundary check |
| cp_assets | lift_installation | Reusable equipment complete-life shares | asset/service/period ledger | job_id; asset_id; owner; provider_scope; phase; period_id; consuming_job; consuming_node; use_hours; total_service_hours; replacement_event; termination_event; capital_burden; excluded_coverage; attribution_basis; uncertainty | Record actual asset-use hours for installation/lifting/access/test apparatus and all relevant consuming jobs/periods; verify production, use, replacements and eventual removal coverage. Apply documented complete-life service share with period-specific ownership, then divide job-attributed burden by accepted job count. A provider gap needs separately accounted coverage. | h; actual upstream burden units | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Meter/logbooks, provider boundaries, complete-life register, replacement/end-of-life evidence, share reconciliation and uncertainty |
| cp_logistics | lift_installation | Real freight legs and mobilization | dispatch/route records | job_id; leg_id; provider; mode; origin; destination; load_identity; load_mass_t; distance_km; shared_load_basis; return_custody; supplier_included; allocation_uncertainty | Use actual dispatch masses and route km for each leg, including real return/mobilization legs. Attribute shared load using documented causal share and check supplier/provider inclusion; divide attributable tkm by accepted installation count. | t; km; tkm | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Waybills, measured mass, route evidence, provider coverage and no double counted return leg |
| cp_energy | lift_installation | Commissioning, tool and handling energy/fuel | meter/fuel records | job_id; date; equipment_or_circuit; task; test_id; failed_or_repeat; meter_start; meter_end; runtime_h; measured_demand_kW; fuel_identity; fuel_mass_kg; fuel_volume; fuel_volume_unit; density; density_unit; temperature; temperature_unit; unit; provider_inclusion; uncertainty | Submeter commissioning and tool/handling circuits or document actual runtime with measured demand. Keep later passenger use outside. Reconcile measured actual consumed fuel and any evidenced density conversion; retain unused/returned fuel separately in the fuel ledger, outside usable_material_return, include correction/retest and exclude covered provider energy; divide job-attributable amounts by accepted count. | kWh; kg; actual source volume unit | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Meter calibration/readings, test/task timestamps, fuel record/density evidence, uncertainty and circuit/provider scope |
| cp_acceptance | lift_installation | Actual final accepted service gate | installation/test/inspection/handover | job_id; model; serial; configuration; drawing_revision; authorized_instruction_revision; jurisdiction; installer_authorization; travel; platform_width; geometry_unit; rated_load; load_unit; supply_voltage_V; supply_current_A; supply_frequency_Hz; geometry_tolerance; load_tolerance; supply_tolerance; tolerance_source; pad_anchor_fascia_signoff; gate_interlock_guard_record; test_method; test_load; test_load_unit; test_duration; test_duration_unit; test_tolerance; pass_limit_source; actual_result; defect_id; correction; retest_result; inspection; owner_handover; accepted_count | Authorized mechanic records the actual installation, configured safety functions and authorized test protocol/results with all applicable units/tolerances; retain required inspector acceptance, defect closure, owner instruction/records and future maintenance responsibility. Count only signed accepted jobs matching this scope, then normalize to 1 item. | item; actual test/geometry/electrical units | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Authorization, current job drawings/instructions, signed tests and required inspection, corrected defect records and owner handover |
| cp_custody | lift_installation | Usable returns, closing stock and waste | transfer/stock/disposal | job_id; source_identity; source_receipt; defect_id; correction_task; disposition; usability; recipient; transfer_id; gross_outward_quantity; closing_stock_quantity; carried_burden_owner; waste_class; treatment; unit; uncertainty | Weigh/count real outward returns and waste by actual identity and custody document; distinguish internal rework and retained stock. Reconcile gross receipt with installed use, actual outward return, waste and closing stock. Normalize attributed outward quantities by accepted installation count; retain burden-transfer method. | item; kg | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Signed return/usability acceptance, weights, closing-stock ledger, waste carrier/treatment record and defect linkage |
| cp_releases | lift_installation | Actual species and receiving compartment | monitoring or task-specific factor | job_id; task; substance_or_particle_class; receiving_compartment; activity; activity_unit; factor_source; factor_unit; captured_fraction; release_mass_kg; uncertainty; zero_screen_evidence | Screen actual tasks first; characterize each real pollutant/medium and measure kg or apply a supported task-specific substance factor to measured activity. Record capture and avoid treating collected waste as emitted. Normalize attributable release by accepted count; unknown identity remains a gap. | kg; actual factor/activity units | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Monitoring/calibration or traceable factor with applicability, species/compartment/capture evidence and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `job_normalization` | all inventory rows | For each actual identity, divide its documented job-attributable physical amount or burden by the number of accepted installations with the same configuration; keep gross receipts, outward returns, waste and closing stock independently reconciled. The final reference output is 1 item. | Actual records; accepted_count; cp_acceptance | Amount per reference flow | |
| `asset_share` | equipment_provision | Attribute the separately owned complete-life asset burden using this job actual service hours divided by evidenced total service hours across every consuming job and period; reconcile shares and phases, then normalize to the accepted installation. Justify and disclose any alternate causal basis. | cp_assets; actual phase burdens; complete-life service denominator | Job-attributed asset burden per reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | reference output and kit | Verify fixed/unenclosed/two-landing ACME screw route and self-supporting width against actual model/site drawings; nominal public guide and conflicting public ratings are not actual design acceptance. | Current authorized job drawing, model/serial, bill of supply, jurisdiction and installer authorization |
| `quantity_and_custody` | all inventory rows | Preserve actual physical units, measurement method/calibration and uncertainty, receipt/issue/return/stock/waste balances by identity; zero needs positive evidence. Missing value or Range evidence is a data gap, not zero. | Linked protocols and complete job ledger |
| `asset_and_provider_coverage` | assets; pad; supply; freight; energy | Audit single ownership and all relevant phases/periods; disclose service denominator, replacements/termination and gaps, no twice-counted supplier coverage. | Provider scope and measured interfaces; full-life asset/custody reconciliation |
| `acceptance_and_temporal_coverage` | accepted_lift_installation | Cover receipt/mobilization through correction/retest/inspection/handover dates; no unresolved defects in accepted count and no later passenger energy or maintenance. | Signed cp_acceptance and aligned task/test records |
| `concrete_identity_and_ranges` | all exchange cards | Resolve each actual exchange to a verified concrete UUID and compatible support chain before final TIDAS production; retain configuration/provider/geography/state and measurement fit. Collect the card-specific Range evidence needs; this candidate supplies no generic material/energy/lifetime defaults. | Actual flow detail/support evidence; metered/weight/task data and uncertainty |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_fit` | reference product | Reject routes requiring hydraulic/traction/mobile/enclosed/hoistway/pit or wide wall-supported treatment. Check actual project route, current authorized drawings and support/supply interfaces before producing a dataset. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `gate_complete` | accepted_lift_installation | Require authorized installer, accepted pad/supply/anchor/fascia/guard/gate/interlock configuration, actual safety/functional test and required jurisdiction inspection records, closed corrections/retests and signed owner handover. Missing commissioning criteria or an unresolved defect blocks accepted output; no claim of whole-building accessibility compliance. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `units_balance_identity` | all inventory rows | Verify 1 item final output and identical reference denominator; linked node-specific protocols, physical units and compatible support chain; each actual component/provider/waste/pollutant identity; gross balances with real returns and non-output closing stock. No fixed UUID based only on name similarity. | |
| `shared_period_and_rework` | equipment_provision; installation_waste | Require all shared consuming jobs/nodes and periods, complete-life phase coverage, actual denominator and single ownership. Unresolved replacement/termination/coverage blocks finalization. Link rejected assemblies to lift_installation correction/retest or actual usable return/waste exit, retaining their burdens and excluding rejects from accepted output. | |
| `boundary_completeness` | pad_work; supply_work; all inputs | Require measured newly constructed pad/supply work with explicit bounded owner or inclusion, evidence for existing-host zero new work, kit-vs-extra reconciliation and no duplicate provider/material/energy/packaging/freight burdens. Disclose every unavailable quantity, Range and identity; absence is not zero. | |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-stage installation service package, with process/lifecyclemodel projections retaining the same actual interfaces and acceptance gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matching fixed unenclosed two-landing self-supporting-width screw-platform lift installation at its commissioned handover gate |
| excluded_use | Hydraulic/traction/escalator, mobile/enclosed/hoistway/pit/wall-supported route; whole-building accessibility certification; passenger transport, lifetime lift operation or maintenance |
| required_metadata | Reference qualifiers; model/serial/configuration; current authorized instruction/drawing revisions; actual permit/jurisdiction/test limits; dates; boundaries and owners; upstream kit/pad/supply/provider coverage; actual asset phases/periods and service denominator; custody/defect closure |
| required_quality_disclosure | Unresolved identities/supports and Range evidence, measured quantities/calibration/uncertainty, missing provider/capital or new-work coverage, rework/retest and waste/returns/stock balances; no finalization with unresolved material gaps |
| update_trigger | Changed model/configuration/drive or site interface; changed authorized drawing/instruction or jurisdiction; new supply/kit scope; measured activity or asset-life evidence; updated exact UUID/support verification |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations CPC 3.0 Explanatory Notes, 30 June 2025, printed p.296; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC lift/escalator installation scope; maintenance is a separate category |
| savaria-multilift-current | handbook | Savaria Multilift official product page, accessed 2026-10-16; https://www.savaria.com/wheelchair-lifts/products/multilift-vpl?lang=en | Current fixed screw route, concrete anchoring/fascia/electrical preparation and configuration distinctions; no default quantities |
| savaria-multilift-planning-2020 | handbook | Savaria Multilift Public Planning Guide, Part No.000790, 25-m08-2020, pp.3–9; https://files.savaria.com/wp-content/uploads/2026/01/Multilift-Public-Planning-Guide.pdf | Nominal-only guide and mandatory site-specific drawings; tower/platform/screw, self-supporting-width restriction, pad/anchor/landing gate interfaces; no universal design quantities |
| savaria-multilift-owner-2024 | handbook | Savaria Multilift Owner’s Manual, Part No.000609, 30-m01-2024, pp.2,6–9; https://files.savaria.com/wp-content/uploads/2026/01/Multilift-Owners-Manual.pdf | Authorized mechanic and installation records/owner responsibility, gates/underpan/emergency/lock operation; actual commissioning instructions must come from authorized job evidence |
